const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DISCOVERY_PATH = path.join(ROOT, "data", "flair-discovery.json");
const MULTILANG_PATH = path.join(ROOT, "data", "flair-keywords-multilang.json");
const TRANSLATION_CACHE_PATH = path.join(ROOT, "data", "translation-cache.json");
const SCRIPT_PATH = path.join(ROOT, "script.js");

const OLD_BASE = "https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_";
const NEW_BASE = "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_";

const REFERENCE_PAGES = [
  "https://realjop.github.io/calendar.html",
  "http://www.internetbestsecrets.com/2019/09/google-calendar-event-images.html"
];

const INVALID_KEYWORD_RE = /(^[a-f0-9]{32},.*\.md$)|(^[a-f0-9]{32}$)|(^.*\.md$)/i;

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function extractFlairArchive() {
  const raw = fs.readFileSync(SCRIPT_PATH, "utf8");
  const match = raw.match(/let flairArchive = ([\s\S]*?)\n\];/);
  if (!match) return [];
  return Function(`return ${match[1]}\n]`)();
}

function idsFromText(text) {
  const set = new Set();
  const regex = /img_([a-z0-9_]+)\.(?:jpg|svg)/gi;
  let m = null;
  while ((m = regex.exec(text)) !== null) {
    set.add(m[1].toLowerCase());
  }
  return set;
}

async function fetchText(url) {
  try {
    const response = await fetch(url);
    return response.ok ? await response.text() : "";
  } catch {
    return "";
  }
}

async function imageExists(url) {
  try {
    const response = await fetch(url);
    const ct = (response.headers.get("content-type") || "").toLowerCase();
    return response.status === 200 && ct.includes("image");
  } catch {
    return false;
  }
}

function idToEnglishKeywords(id) {
  const spaced = id
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  return Array.from(new Set([id.toLowerCase(), spaced].filter(Boolean)));
}

function sanitizeKeywords(list) {
  return Array.from(
    new Set(
      (list || [])
        .map((x) => String(x).trim().toLowerCase())
        .filter((x) => x && !INVALID_KEYWORD_RE.test(x))
    )
  );
}

function parseTranslationPayload(payload) {
  if (!Array.isArray(payload)) return "";
  const chunks = Array.isArray(payload[0]) ? payload[0] : [];
  return chunks
    .filter(Boolean)
    .map((chunk) => (Array.isArray(chunk) ? chunk[0] || "" : ""))
    .join("")
    .trim();
}

async function translateOne(text, targetLang) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", targetLang);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`translate HTTP ${response.status}`);
  }
  const data = await response.json();
  const translated = parseTranslationPayload(data);
  return translated && translated.length ? translated : text;
}

async function translateList(texts, targetLang, cache) {
  const clean = sanitizeKeywords(texts);
  if (!clean.length) return [];

  const translated = [];
  for (const keyword of clean) {
    const cacheKey = `${targetLang}::${keyword}`;
    if (cache[cacheKey]) {
      translated.push(cache[cacheKey]);
      continue;
    }
    try {
      const tr = await translateOne(keyword, targetLang);
      const normalized = String(tr).trim().toLowerCase() || keyword;
      cache[cacheKey] = normalized;
      translated.push(normalized);
    } catch {
      cache[cacheKey] = keyword;
      translated.push(keyword);
    }
  }

  return sanitizeKeywords(translated);
}

async function ensureTranslations(words, targetLang, cache, concurrency = 8) {
  const queue = sanitizeKeywords(words).filter((word) => !cache[`${targetLang}::${word}`]);
  let index = 0;

  async function worker() {
    while (index < queue.length) {
      const current = queue[index++];
      const cacheKey = `${targetLang}::${current}`;
      try {
        const tr = await translateOne(current, targetLang);
        cache[cacheKey] = String(tr).trim().toLowerCase() || current;
      } catch {
        cache[cacheKey] = current;
      }
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, queue.length || 1) }, () => worker());
  await Promise.all(workers);
}

async function main() {
  const forceRefresh = process.argv.includes("--refresh-translations");
  const flairArchive = extractFlairArchive();
  const discovery = readJson(DISCOVERY_PATH, { flairs: [] });
  const multilang = readJson(MULTILANG_PATH, { locales: [], keywordsByLocale: {}, legacyByLocale: {} });

  const candidates = new Set();
  flairArchive.forEach((f) => {
    if (f.id) candidates.add(f.id.toLowerCase());
    if (f.oldId) candidates.add(f.oldId.toLowerCase());
    if (f.newId) candidates.add(f.newId.toLowerCase());
  });
  (discovery.flairs || []).forEach((f) => candidates.add(String(f.id).toLowerCase()));
  Object.keys(multilang.keywordsByLocale?.en_us || {}).forEach((id) => candidates.add(id.toLowerCase()));

  for (const page of REFERENCE_PAGES) {
    const text = await fetchText(page);
    idsFromText(text).forEach((id) => candidates.add(id));
  }

  const flairs = [];
  const ids = Array.from(candidates).sort();
  for (const id of ids) {
    const [hasOld, hasNew] = await Promise.all([
      imageExists(`${OLD_BASE}${id}.jpg`),
      imageExists(`${NEW_BASE}${id}.svg`)
    ]);
    if (hasOld || hasNew) {
      flairs.push({ id, hasOld, hasNew });
    }
  }

  writeJson(DISCOVERY_PATH, {
    updatedAt: new Date().toISOString(),
    flairs
  });

  const locales = multilang.locales || [];
  const byLocale = multilang.keywordsByLocale || {};
  const legacyByLocale = multilang.legacyByLocale || {};
  const cache = readJson(TRANSLATION_CACHE_PATH, {});

  byLocale.en_us = byLocale.en_us || {};
  flairs.forEach((f) => {
    if (!byLocale.en_us[f.id] || !byLocale.en_us[f.id].length) {
      const existing = flairArchive.find((x) => x.id === f.id);
      byLocale.en_us[f.id] = (existing?.keywords && existing.keywords.length)
        ? sanitizeKeywords(existing.keywords)
        : sanitizeKeywords(idToEnglishKeywords(f.id));
    }
  });

  for (const locale of locales) {
    const code = locale.code;
    if (code === "en_us") continue;
    if (!byLocale[code]) byLocale[code] = {};
    const target = locale.tl || code.split("_")[0];

    const allWords = [];
    for (const flair of flairs) {
      const baseWords = byLocale.en_us[flair.id] || idToEnglishKeywords(flair.id);
      allWords.push(...sanitizeKeywords(baseWords));
    }

    await ensureTranslations(allWords, target, cache, 10);

    for (const flair of flairs) {
      if (forceRefresh || !byLocale[code][flair.id] || !byLocale[code][flair.id].length) {
        const sourceWords = sanitizeKeywords(byLocale.en_us[flair.id] || idToEnglishKeywords(flair.id));
        byLocale[code][flair.id] = sanitizeKeywords(
          sourceWords.map((w) => cache[`${target}::${w}`] || w)
        );
      }
    }
  }

  writeJson(TRANSLATION_CACHE_PATH, cache);

  writeJson(MULTILANG_PATH, {
    locales,
    keywordsByLocale: byLocale,
    legacyByLocale
  });

  console.log(`Synced ${flairs.length} flair IDs${forceRefresh ? " (translations refreshed)" : ""}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
