import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore/lite";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const firebaseConfig = {
  apiKey: "AIzaSyCFSxeeb1G-PDwQxJlm9J89ikOCrrX5MO8",
  authDomain: "calendar-flairs.firebaseapp.com",
  projectId: "calendar-flairs",
  storageBucket: "calendar-flairs.firebasestorage.app",
  messagingSenderId: "889319863254",
  appId: "1:889319863254:web:33978f8568217b73e96a77"
};

function canonicalId(id) {
  return String(id || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9_-]/g, "");
}

function uniqueKeywords(values) {
  const seen = new Set();
  const output = [];
  for (const value of values || []) {
    const trimmed = String(value || "").trim();
    if (!trimmed) continue;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(trimmed);
  }
  return output;
}

async function readJson(relativePath) {
  const raw = await readFile(path.join(ROOT, relativePath), "utf8");
  return JSON.parse(raw);
}

async function main() {
  const discovery = await readJson("data/flair-discovery.json");
  const multilang = await readJson("data/flair-keywords-multilang.json");
  const keywordsByLocale = multilang.keywordsByLocale || {};

  const ids = new Set();
  for (const flair of discovery.flairs || []) {
    const id = canonicalId(flair.id);
    if (id) ids.add(id);
  }
  for (const localeMap of Object.values(keywordsByLocale)) {
    for (const id of Object.keys(localeMap || {})) {
      const normalized = canonicalId(id);
      if (normalized) ids.add(normalized);
    }
  }

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  let written = 0;
  let failed = 0;

  for (const id of [...ids].sort()) {
    const keywordsByLocaleForId = {};
    for (const [locale, flairMap] of Object.entries(keywordsByLocale)) {
      const list = uniqueKeywords(flairMap?.[id] || []);
      if (list.length) keywordsByLocaleForId[locale] = list;
    }

    try {
      await setDoc(doc(db, "flairs", id), {
        id,
        keywordsByLocale: keywordsByLocaleForId,
        updatedAt: Timestamp.now()
      });
      written += 1;
      process.stdout.write(`Wrote ${id} (${written}/${ids.size})\n`);
    } catch (error) {
      failed += 1;
      process.stderr.write(`Failed ${id}: ${error.message}\n`);
    }
  }

  process.stdout.write(`Done. Wrote ${written} flairs. Failed ${failed}.\n`);
  if (failed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
