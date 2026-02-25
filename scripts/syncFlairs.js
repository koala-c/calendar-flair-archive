const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DISCOVERY_PATH = path.join(ROOT, "data", "flair-discovery.json");
const MULTILANG_PATH = path.join(ROOT, "data", "flair-keywords-multilang.json");
const TRANSLATION_CACHE_PATH = path.join(ROOT, "data", "translation-cache.json");
const SCRIPT_PATH = path.join(ROOT, "script.js");

const OLD_BASE = "https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_";
const OLD_V1_BASE = "https://ssl.gstatic.com/calendar/images/eventillustrations/v1/img_";
const NEW_BASE = "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_";

const REFERENCE_PAGES = [
  "https://realjop.github.io/calendar.html",
  "http://www.internetbestsecrets.com/2019/09/google-calendar-event-images.html"
];

const INVALID_KEYWORD_RE = /(^[a-f0-9]{32},.*\.md$)|(^[a-f0-9]{32}$)|(^.*\.md$)/i;
const ID_ALIAS_MAP = {
  theatreopera: "theateropera"
};
const PRESERVE_DUPLICATE_KEYWORD_ID_SETS = [
  ["backtoschool", "kidspickupdropoff"],
  ["dinner", "restaurant"]
];
const DEFAULT_LOCALES = [
  { code: "en_us", label: "English (US)", tl: "en" },
  { code: "en_gb", label: "English (UK)", tl: "en" },
  { code: "es_es", label: "Español (ES)", tl: "es" },
  { code: "ca_es", label: "Català (CA)", tl: "ca" },
  { code: "fr_fr", label: "Français (FR)", tl: "fr" },
  { code: "de_de", label: "Deutsch (DE)", tl: "de" },
  { code: "it_it", label: "Italiano (IT)", tl: "it" },
  { code: "pt_br", label: "Português (BR)", tl: "pt" },
  { code: "ru_ru", label: "Русский (RU)", tl: "ru" },
  { code: "nl_nl", label: "Nederlands (NL)", tl: "nl" },
  { code: "pl_pl", label: "Polski (PL)", tl: "pl" },
  { code: "tr_tr", label: "Türkçe (TR)", tl: "tr" },
  { code: "sv_se", label: "Svenska (SE)", tl: "sv" },
  { code: "no_no", label: "Norsk (NO)", tl: "no" },
  { code: "da_dk", label: "Dansk (DK)", tl: "da" },
  { code: "fi_fi", label: "Suomi (FI)", tl: "fi" },
  { code: "cs_cz", label: "Čeština (CZ)", tl: "cs" },
  { code: "sk_sk", label: "Slovenčina (SK)", tl: "sk" },
  { code: "hr_hr", label: "Hrvatski (HR)", tl: "hr" },
  { code: "sl_si", label: "Slovenščina (SI)", tl: "sl" },
  { code: "hu_hu", label: "Magyar (HU)", tl: "hu" },
  { code: "lt_lt", label: "Lietuvių (LT)", tl: "lt" },
  { code: "lv_lv", label: "Latviešu (LV)", tl: "lv" },
  { code: "uk_ua", label: "Українська (UA)", tl: "uk" },
  { code: "bg_bg", label: "Български (BG)", tl: "bg" },
  { code: "ro_ro", label: "Română (RO)", tl: "ro" },
  { code: "el_gr", label: "Ελληνικά (GR)", tl: "el" },
  { code: "sr_rs", label: "Srpski (RS)", tl: "sr" },
  { code: "id_id", label: "Bahasa Indonesia (ID)", tl: "id" },
  { code: "ms_my", label: "Bahasa Melayu (MY)", tl: "ms" },
  { code: "vi_vn", label: "Tiếng Việt (VN)", tl: "vi" },
  { code: "th_th", label: "ไทย (TH)", tl: "th" },
  { code: "hi_in", label: "हिन्दी (IN)", tl: "hi" },
  { code: "ja_jp", label: "日本語 (JP)", tl: "ja" },
  { code: "ko_kr", label: "한국어 (KR)", tl: "ko" },
  { code: "zh_cn", label: "中文 (CN)", tl: "zh-CN" },
  { code: "zh_tw", label: "中文 (TW)", tl: "zh-TW" }
];
const EXTRA_CANDIDATE_IDS = ["flight", "trip", "train", "bus", "interview", "videocall", "gym", "yoga", "running", "walk", "hiking", "lunch", "artisticgymnastics", "equestrian", "handball", "islamicnewyear", "nowruz", "quinceanera", "rhythmicgymnastics", "valentinesday", "waterpolo", "gamenight"];
const NON_TRANSLATABLE_IDS = new Set(["train", "bus"]);
const MANUAL_EN_KEYWORDS = {
  art: ["painting", "art workshop", "sketching workshop", "drawing workshop"],
  badminton: ["badminton"],
  baseball: ["baseball"],
  basketball: ["basketball"],
  bbq: ["bbq", "barbecue", "barbeque"],
  beer: ["beer", "beers", "oktoberfest", "october fest", "octoberfest"],
  billiard: ["billiard"],
  bookclub: ["book club", "reading"],
  babyshower: ["baby shower"],
  bowling: ["bowling"],
  breakfast: ["breakfast", "breakfasts", "brunch", "brunches"],
  camping: ["camping"],
  chinesenewyear: ["chinese new year", "chinese new years", "chinese new year's"],
  cinema: ["cinema", "movies"],
  clean: ["cleaning", "clean the house", "clean the apartment", "clean house", "tidy up", "vacuum clean", "vacuum cleaning"],
  code: ["learn to code", "coding time", "hackathon", "rails girls", "railsgirls", "hour of code", "codecademy", "computer science", "programming in python", "web programming", "programming in java", "web development"],
  coffee: ["coffee", "coffees"],
  concert: ["concert", "gig", "concerts", "gigs"],
  cycling: ["bicycle", "cycling", "bike", "bicycles", "bikes", "biking"],
  dancing: ["dance", "dancing", "dances"],
  dentist: ["dentist", "dentistry", "dental"],
  doctor: ["doctor", "doctor appointment", "clinic"],
  dinner: ["dinner", "dinners", "restaurant", "restaurants", "family meal"],
  drinks: ["cocktail", "drinks", "cocktails"],
  golf: ["golf"],
  graduation: ["graduation"],
  gym: ["gym", "workout", "workouts"],
  haircut: ["haircut", "hair"],
  hotel: ["hotel"],
  halloween: ["halloween", "helloween", "hallowe'en", "allhalloween", "all hallows' eve", "all saints' eve"],
  hiking: ["hiking", "hike", "hikes"],
  kayaking: ["kayaking"],
  learninstrument: ["piano", "singing", "music", "music class", "listen to music", "choir practice", "flute", "orchestra", "oboe", "clarinet", "saxophone", "cornett", "trumpet", "contrabass", "cello", "trombone", "tuba", "music ensemble", "string quartett", "guitar lesson", "classical music", "choir"],
  learnlanguage: ["french course", "german course", "english course", "french class", "german class", "english class", "practice french", "practice german", "practice english"],
  lunch: ["lunch", "lunches", "luncheon"],
  manicure: ["manicure", "pedicure", "manicures", "pedicures"],
  massage: ["massage", "back rub", "backrub", "massages"],
  mardigras: ["mardi gras"],
  newyear: ["new year", "new year's", "new years"],
  oilchange: ["oil change", "car service"],
  pingpong: ["ping pong", "table tennis", "ping-pong", "pingpong"],
  planmyday: ["plan week", "plan quarter", "plan day", "plan vacation", "week planning", "vacation planning"],
  pride: ["dyke march", "christopher street day", "gay parade", "gay pride", "gayglers", "gaygler", "lesbian march", "lesbian parade", "lesbian pride", "euro pride", "europride", "world pride", "worldpride"],
  reachout: ["reach out to", "write letter", "send invitations"],
  read: ["reading", "newspaper"],
  repair: ["fridge repair", "handyman", "electrician", "diy"],
  restaurant: ["restaurant", "restaurants"],
  rowing: ["rowing"],
  running: ["jog", "jogging", "running", "jogs", "runs"],
  sailing: ["sail", "sailing", "boat cruise", "sailboat"],
  santa: ["santa claus", "father christmas"],
  skiing: ["skiing", "ski", "skis", "snowboarding", "snowshoeing", "snow shoe", "snow boarding"],
  soccer: ["soccer"],
  shopping: ["shopping", "grocery shopping"],
  swimming: ["swim", "swimming", "swims"],
  tennis: ["tennis"],
  thanksgiving: ["thanksgiving"],
  triathlon: ["triathlon"],
  violin: ["violin", "violins"],
  volleyball: ["volleyball"],
  walk: ["going for a walk", "walking"],
  wedding: ["wedding", "wedding eve", "wedding-eve party", "weddings"],
  xmas: ["christmas", "xmas", "x-mas"],
  xmasmeal: ["christmas dinner", "christmas lunch", "christmas brunch", "christmas luncheon", "xmas lunch", "xmas luncheon", "x-mas dinner", "x-mas lunch", "x-mas brunch", "x-mas luncheon", "christmas eve dinner", "christmas eve lunch", "christmas eve brunch", "christmas eve luncheon", "xmas eve dinner", "xmas eve lunch", "xmas eve brunch", "xmas eve luncheon", "x-mas eve dinner", "x-mas eve lunch", "x-mas eve brunch", "x-mas eve luncheon"],
  xmasparty: ["christmas party", "xmas party", "x-mas party", "christmas eve party", "xmas eve party", "x-mas eve party"],
  yoga: ["yoga"],
  fencing: ["fencing"],
  wrestling: ["wrestling"],
  datenight: ["date night"],
  gamenight: ["game night", "games night", "board game", "board games", "boardgame", "boardgames"],
  artisticgymnastics: ["artistic gymnastics"],
  equestrian: ["equestrian", "horse riding", "horseriding"],
  handball: ["handball"],
  islamicnewyear: ["islamic new year", "hijri new year"],
  nowruz: ["nowruz", "persian new year", "parsi new year"],
  quinceanera: ["quinceanera"],
  rhythmicgymnastics: ["rhythmic gymnastics"],
  valentinesday: ["valentine day", "valentines day"],
  waterpolo: ["water polo", "waterpolo"]
  ,
  honors: ["honors", "honours", "award ceremony"],
  worldhistory: ["world history", "history class", "history lecture"]
};

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

function canonicalId(id) {
  const normalized = String(id || "").trim().toLowerCase();
  return ID_ALIAS_MAP[normalized] || normalized;
}

function mergeAliasFlairs(flairs) {
  const byId = new Map();
  for (const flair of flairs) {
    const id = canonicalId(flair.id);
    const current = byId.get(id);
    if (!current) {
      byId.set(id, { id, hasOld: Boolean(flair.hasOld), hasNew: Boolean(flair.hasNew) });
      continue;
    }
    current.hasOld = current.hasOld || Boolean(flair.hasOld);
    current.hasNew = current.hasNew || Boolean(flair.hasNew);
  }
  return Array.from(byId.values()).sort((a, b) => a.id.localeCompare(b.id));
}

function mergeAliasKeywordMap(localeMap) {
  if (!localeMap || typeof localeMap !== "object") return {};
  const merged = {};
  for (const [rawId, keywords] of Object.entries(localeMap)) {
    const id = canonicalId(rawId);
    merged[id] = sanitizeKeywords([...(merged[id] || []), ...(keywords || [])]);
  }
  return merged;
}

function dedupeKeywordsByAvailability(byLocale, flairs) {
  const availability = new Map(
    flairs.map((flair) => [
      flair.id,
      {
        hasNew: Boolean(flair.hasNew),
        hasOld: Boolean(flair.hasOld)
      }
    ])
  );

  let removed = 0;

  for (const [localeCode, flairMap] of Object.entries(byLocale)) {
    const keywordOwners = new Map();

    for (const [flairId, keywords] of Object.entries(flairMap || {})) {
      for (const keyword of sanitizeKeywords(keywords)) {
        if (!keywordOwners.has(keyword)) keywordOwners.set(keyword, new Set());
        keywordOwners.get(keyword).add(flairId);
      }
    }

    for (const [keyword, ownersSet] of keywordOwners.entries()) {
      const owners = Array.from(ownersSet);
      if (owners.length < 2) continue;
      const normalizedOwners = owners.slice().sort();
      const shouldPreserve = PRESERVE_DUPLICATE_KEYWORD_ID_SETS.some((idSet) => {
        const normalizedSet = idSet.slice().sort();
        return normalizedSet.length === normalizedOwners.length
          && normalizedSet.every((id, index) => id === normalizedOwners[index]);
      });
      if (shouldPreserve) continue;

      owners.sort((a, b) => {
        const aInfo = availability.get(a) || { hasNew: false, hasOld: false };
        const bInfo = availability.get(b) || { hasNew: false, hasOld: false };
        const aScore = (aInfo.hasNew ? 4 : 0) + (aInfo.hasOld ? 2 : 0);
        const bScore = (bInfo.hasNew ? 4 : 0) + (bInfo.hasOld ? 2 : 0);
        if (bScore !== aScore) return bScore - aScore;
        return a.localeCompare(b);
      });

      const winner = owners[0];
      for (const loser of owners.slice(1)) {
        const list = sanitizeKeywords(flairMap[loser] || []);
        const next = list.filter((item) => item !== keyword);
        if (next.length !== list.length) {
          flairMap[loser] = next;
          removed += 1;
        }
      }

      flairMap[winner] = sanitizeKeywords(flairMap[winner] || []);
    }

    byLocale[localeCode] = flairMap;
  }

  return removed;
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
  EXTRA_CANDIDATE_IDS.forEach((id) => candidates.add(canonicalId(id)));
  Object.keys(MANUAL_EN_KEYWORDS).forEach((id) => candidates.add(canonicalId(id)));
  flairArchive.forEach((f) => {
    if (f.id) candidates.add(canonicalId(f.id));
    if (f.oldId) candidates.add(canonicalId(f.oldId));
    if (f.newId) candidates.add(canonicalId(f.newId));
  });
  (discovery.flairs || []).forEach((f) => candidates.add(canonicalId(f.id)));
  Object.keys(multilang.keywordsByLocale?.en_us || {}).forEach((id) => candidates.add(canonicalId(id)));

  for (const page of REFERENCE_PAGES) {
    const text = await fetchText(page);
    idsFromText(text).forEach((id) => candidates.add(id));
  }

  const flairsRaw = [];
  const ids = Array.from(candidates).sort();
  for (const id of ids) {
    const [hasOldTmly, hasOldV1, hasNew] = await Promise.all([
      imageExists(`${OLD_BASE}${id}.jpg`),
      imageExists(`${OLD_V1_BASE}${id}_1x.jpg`),
      imageExists(`${NEW_BASE}${id}.svg`)
    ]);
    const hasOld = hasOldTmly || hasOldV1;
    if (hasOld || hasNew) {
      flairsRaw.push({ id, hasOld, hasNew });
    }
  }
  const flairs = mergeAliasFlairs(flairsRaw);

  writeJson(DISCOVERY_PATH, {
    updatedAt: new Date().toISOString(),
    flairs
  });

  const locales = Array.isArray(multilang.locales) && multilang.locales.length
    ? multilang.locales
    : DEFAULT_LOCALES;
  const byLocale = {};
  for (const [locale, map] of Object.entries(multilang.keywordsByLocale || {})) {
    byLocale[locale] = mergeAliasKeywordMap(map);
  }

  const legacyByLocale = {};
  for (const [locale, map] of Object.entries(multilang.legacyByLocale || {})) {
    legacyByLocale[locale] = mergeAliasKeywordMap(map);
  }
  const cache = readJson(TRANSLATION_CACHE_PATH, {});

  byLocale.en_us = byLocale.en_us || {};
  flairs.forEach((f) => {
    const manualKeywords = sanitizeKeywords(MANUAL_EN_KEYWORDS[f.id] || []);
    if (manualKeywords.length) {
      byLocale.en_us[f.id] = manualKeywords;
      return;
    }
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
      const sourceWords = sanitizeKeywords(byLocale.en_us[flair.id] || idToEnglishKeywords(flair.id));
      if (NON_TRANSLATABLE_IDS.has(flair.id)) {
        byLocale[code][flair.id] = sourceWords;
        continue;
      }
      const translatedFromEnglish = sanitizeKeywords(
        sourceWords.map((w) => cache[`${target}::${w}`] || w)
      );

      if (forceRefresh) {
        byLocale[code][flair.id] = translatedFromEnglish;
      } else {
        const existingWords = sanitizeKeywords(byLocale[code][flair.id] || []);
        byLocale[code][flair.id] = sanitizeKeywords([...existingWords, ...translatedFromEnglish]);
      }
    }
  }

  const removedDuplicates = dedupeKeywordsByAvailability(byLocale, flairs);

  writeJson(TRANSLATION_CACHE_PATH, cache);

  writeJson(MULTILANG_PATH, {
    locales,
    keywordsByLocale: byLocale,
    legacyByLocale
  });

  console.log(
    `Synced ${flairs.length} flair IDs${forceRefresh ? " (translations refreshed)" : ""}. Removed ${removedDuplicates} duplicated keyword mappings.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
