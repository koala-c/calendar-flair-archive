let flairArchive = [
  { id: "americanfootball", keywords: ["american football"], hasNew: true },
  { id: "archery", keywords: ["archery"], hasNew: false },
  { id: "art", keywords: ["painting", "art workshop", "sketching workshop", "drawing workshop"], hasNew: true },
  { id: "athleticsjumping", keywords: ["athletic jumping", "athletics jumping"], hasNew: true },
  { id: "badminton", keywords: ["badminton"], hasNew: true },
  { id: "baseball", keywords: ["baseball"], hasNew: true },
  { id: "basketball", keywords: ["basketball"], hasNew: true },
  { id: "bbq", keywords: ["bbq", "barbecue", "barbeque"], hasNew: true },
  { id: "beer", keywords: ["beer", "beers", "oktoberfest", "october fest", "octoberfest"], hasNew: false },
  { id: "drinks", keywords: ["drinks", "cocktail", "cocktails", "beer", "beers"], hasNew: true },
  { id: "billiard", keywords: ["billiard"], hasNew: false },
  { id: "birthday", keywords: ["birthday"], hasNew: true },
  { id: "boxing", keywords: ["boxing"], hasNew: false },
  { id: "bookclub", keywords: ["book club"], hasNew: false },
  { id: "bowling", keywords: ["bowling"], hasNew: true },
  { id: "breakfast", keywords: ["breakfast"], hasNew: true },
  { id: "camping", keywords: ["camping"], hasNew: true },
  {
    id: "dinner",
    keywords: ["dinner"],
    hasNew: true,
    newUrl: "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_dinner.svg"
  },
  { id: "carmaintenance", keywords: ["car maintenance", "car repair", "mot"], hasNew: false },
  { id: "cooking", keywords: ["cooking"], hasNew: true },
  { id: "climbing", keywords: ["climbing", "bouldering"], hasNew: true },
  { id: "chinesenewyear", keywords: ["chinese new year", "chinese new years", "chinese new year's"], hasNew: true },
  { id: "cinema", keywords: ["cinema", "movie", "movies"], hasNew: true },
  {
    id: "coffee",
    keywords: ["coffee", "coffees", "café", "cafés"],
    hasNew: true,
    newUrl: "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_coffee.svg",
    oldUrl: "https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_coffee.jpg"
  },
  {
    id: "videogaming",
    keywords: ["video game", "video games", "videogaming", "videogames"],
    hasNew: true,
    newUrl: "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_videogaming.svg",
    oldUrl: "https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_videogaming.jpg"
  },
  { id: "backtoschool", keywords: ["back to school", "kids pickup", "kids dropoff"], hasNew: false },
  { id: "kidspickupdropoff", keywords: ["back to school", "kids pickup", "kids dropoff"], hasNew: true },
  { id: "fieldhockey", keywords: ["field hockey", "hockey"], hasNew: true },
  { id: "graduation", keywords: ["graduation", "graduación"], hasNew: true },
  { id: "rugbysevens", keywords: ["rugby sevens", "rugby"], hasNew: true },
  { id: "walkingdog", keywords: ["walking dog", "walk dog", "walk the dog"], hasNew: true },
  {
    id: "studying",
    keywords: ["studying"],
    hasNew: true,
    newId: "studying"
  },
  {
    id: "learnlanguage",
    keywords: ["english class", "english course", "practice english", "french class", "french course", "german class", "german course"],
    hasNew: false
  },
  { id: "honors", keywords: [], hasNew: false },
  { id: "handcraft", keywords: ["sewing", "embroidery", "quilting"], hasNew: false },
  { id: "karate", keywords: ["karate"], hasNew: true },
  { id: "sleep", keywords: ["sleep", "sleeping", "nap", "napping"], hasNew: true },
  { id: "theateropera", oldId: "theatreopera", keywords: ["theater", "theatre opera"], hasNew: false },
  { id: "worldhistory", keywords: [], hasNew: false }
];

let languageConfig = [
  { code: "en_us", label: "English (US)" },
  { code: "es_es", label: "Español (ES)" },
  { code: "ca_es", label: "Català (CA)" },
  { code: "fr_fr", label: "Français (FR)" },
  { code: "ru_ru", label: "Русский (RU)" }
];

const uiText = {
  en_us: {
    pageTitle: "Calendar Flair Archive (Unofficial)",
    eyebrow: "Calendar Flair Archive",
    heroTitle: "Keyword-Triggered Calendar Flairs",
    heroIntro: "Compare illustration flairs that appear when event text matches certain keywords.",
    displayTitle: "Display",
    searchLabel: "Search keyword",
    searchPlaceholder: "Search in selected language",
    hint: "Tip: each card shows the new illustration by default. Hover to reveal the old one. If there is no new version, the old one appears in grey and becomes normal on hover.",
    flairsTitle: "Flairs",
    sourceLoading: "Source: Google image assets (ssl.gstatic.com)",
    sourceLoaded: () => "Source: Google image assets (ssl.gstatic.com)",
    sourceFailed: "Source: Google image assets (ssl.gstatic.com)",
    noKeyword: "No confirmed keyword for this flair in this language",
    notAvailable: "Not available",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Archive for comparing old and new keyword flair illustrations. Source reference:",
    legal: "Icons shown for comparison purposes. All rights belong to Google. This is an unofficial, independent hobby archive and is not affiliated with, endorsed by, or sponsored by Google. Google Calendar is a trademark of Google."
  },
  es_es: {
    pageTitle: "Archivo de Flairs de Calendario (No oficial)",
    eyebrow: "Archivo de Flairs de Calendario",
    heroTitle: "Flairs de Calendario Activados por Palabras Clave",
    heroIntro: "Compara las ilustraciones que aparecen cuando el texto del evento coincide con ciertas palabras clave.",
    displayTitle: "Vista",
    searchLabel: "Buscar palabra clave",
    searchPlaceholder: "Buscar en el idioma seleccionado",
    hint: "Consejo: cada tarjeta muestra la ilustración nueva por defecto. Al pasar el mouse se ve la antigua. Si no hay versión nueva, la antigua aparece en gris y en hover se ve normal.",
    flairsTitle: "Flairs",
    sourceLoading: "Fuente: recursos de imágenes de Google (ssl.gstatic.com)",
    sourceLoaded: () => "Fuente: recursos de imágenes de Google (ssl.gstatic.com)",
    sourceFailed: "Fuente: recursos de imágenes de Google (ssl.gstatic.com)",
    noKeyword: "No hay palabra clave confirmada para este flair en este idioma",
    notAvailable: "No disponible",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Archivo para comparar ilustraciones de flairs antiguas y nuevas. Referencias:",
    legal: "Íconos mostrados solo para comparación. Todos los derechos pertenecen a Google. Este es un archivo no oficial, independiente y sin afiliación, patrocinio ni respaldo de Google. Google Calendar es una marca registrada de Google."
  },
  ca_es: {
    pageTitle: "Arxiu de Flairs de Calendari (No oficial)",
    eyebrow: "Arxiu de Flairs de Calendari",
    heroTitle: "Flairs de Calendari Activats per Paraules Clau",
    heroIntro: "Compara les il·lustracions que apareixen quan el text de l'esdeveniment coincideix amb certes paraules clau.",
    displayTitle: "Visualització",
    searchLabel: "Cerca paraula clau",
    searchPlaceholder: "Cerca en l'idioma seleccionat",
    hint: "Consell: cada targeta mostra la il·lustració nova per defecte. En passar el cursor es veu l'antiga. Si no hi ha versió nova, l'antiga apareix en gris i en hover es veu normal.",
    flairsTitle: "Flairs",
    sourceLoading: "Font: recursos d'imatges de Google (ssl.gstatic.com)",
    sourceLoaded: () => "Font: recursos d'imatges de Google (ssl.gstatic.com)",
    sourceFailed: "Font: recursos d'imatges de Google (ssl.gstatic.com)",
    noKeyword: "No hi ha paraula clau confirmada per a aquest flair en aquest idioma",
    notAvailable: "No disponible",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Arxiu per comparar il·lustracions de flairs antigues i noves. Referències:",
    legal: "Icones mostrades només per a comparació. Tots els drets pertanyen a Google. Aquest és un arxiu no oficial, independent i sense afiliació, patrocini ni suport de Google. Google Calendar és una marca registrada de Google."
  },
  fr_fr: {
    pageTitle: "Archive des Flairs de Calendrier (Non officielle)",
    eyebrow: "Archive des Flairs de Calendrier",
    heroTitle: "Flairs de Calendrier déclenchés par mots-clés",
    heroIntro: "Comparez les illustrations qui apparaissent lorsque le texte d'un événement correspond à certains mots-clés.",
    displayTitle: "Affichage",
    searchLabel: "Rechercher un mot-clé",
    searchPlaceholder: "Rechercher dans la langue sélectionnée",
    hint: "Astuce: chaque carte affiche la nouvelle illustration par défaut. Au survol, l'ancienne apparaît. S'il n'y a pas de nouvelle version, l'ancienne est grisée puis normale au survol.",
    flairsTitle: "Flairs",
    sourceLoading: "Source : ressources d'images Google (ssl.gstatic.com)",
    sourceLoaded: () => "Source : ressources d'images Google (ssl.gstatic.com)",
    sourceFailed: "Source : ressources d'images Google (ssl.gstatic.com)",
    noKeyword: "Aucun mot-clé confirmé pour ce flair dans cette langue",
    notAvailable: "Indisponible",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Archive pour comparer les illustrations de flairs anciennes et nouvelles. Sources:",
    legal: "Icônes affichées uniquement à des fins de comparaison. Tous les droits appartiennent à Google. Ceci est une archive amateur non officielle, sans affiliation, approbation ni parrainage de Google. Google Calendar est une marque de Google."
  },
  ru_ru: {
    pageTitle: "Архив Flair Calendar (Неофициально)",
    eyebrow: "Архив Flair Calendar",
    heroTitle: "Flairs Calendar по ключевым словам",
    heroIntro: "Сравните иллюстрации, которые появляются, когда текст события совпадает с ключевыми словами.",
    displayTitle: "Отображение",
    searchLabel: "Поиск ключевого слова",
    searchPlaceholder: "Поиск на выбранном языке",
    hint: "Совет: по умолчанию показывается новая иллюстрация. При наведении показывается старая. Если новой версии нет, старая будет серой и станет обычной при наведении.",
    flairsTitle: "Flairs",
    sourceLoading: "Источник: ресурсы изображений Google (ssl.gstatic.com)",
    sourceLoaded: () => "Источник: ресурсы изображений Google (ssl.gstatic.com)",
    sourceFailed: "Источник: ресурсы изображений Google (ssl.gstatic.com)",
    noKeyword: "Нет подтвержденного ключевого слова для этого flair на этом языке",
    notAvailable: "Недоступно",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Архив для сравнения старых и новых иллюстраций flair. Источники:",
    legal: "Иконки показаны только для сравнения. Все права принадлежат Google. Это неофициальный независимый архив без аффилиации, одобрения или спонсорства Google. Google Calendar является товарным знаком Google."
  }
};
let localizedKeywords = {
  en_us: Object.fromEntries(flairArchive.map((f) => [f.id, f.keywords])),
  es_es: {
    americanfootball: ["fútbol americano"],
    art: ["pintura", "taller de dibujo"],
    athleticsjumping: ["atletismo"],
    badminton: ["bádminton"],
    baseball: ["béisbol"],
    basketball: ["baloncesto"],
    bbq: ["barbacoa"],
    beer: ["cerveza", "cervezas"],
    drinks: ["bebidas", "cóctel", "cócteles", "cerveza"],
    birthday: ["cumpleaños", "cumple"],
    bowling: ["bolos", "bolera"],
    breakfast: ["desayuno", "desayunos", "brunch"],
    camping: ["camping", "acampada"],
    dinner: ["cena", "cenar"],
    fieldhockey: ["hockey sobre hierba"],
    graduation: ["graduación"],
    rugbysevens: ["rugby"],
    walkingdog: ["pasear al perro", "sacar al perro"],
    climbing: ["escalada"],
    chinesenewyear: ["año nuevo chino"],
    cinema: ["cine", "película", "películas"],
    coffee: ["café", "cafés"],
    videogaming: ["videojuegos"],
    studying: ["estudiar", "estudio"],
    learnlanguage: ["clase de inglés", "curso de inglés"],
    backtoschool: ["vuelta al cole", "recoger del cole", "primer día de cole"],
    kidspickupdropoff: ["vuelta al cole", "recoger del cole", "primer día de cole"],
    karate: ["karate"],
    sleep: ["siesta", "dormir", "descansar"],
    theateropera: ["teatro"]
  },
  ca_es: {
    americanfootball: ["futbol americà"],
    art: ["pintura", "taller de dibuix"],
    athleticsjumping: ["atletisme"],
    badminton: ["bàdminton"],
    baseball: ["beisbol"],
    basketball: ["bàsquet"],
    bbq: ["barbacoa"],
    beer: ["cervesa", "cerveses"],
    drinks: ["begudes", "còctel", "còctels", "cervesa"],
    birthday: ["aniversari"],
    bowling: ["bitlles"],
    breakfast: ["esmorzar", "brunch"],
    camping: ["càmping"],
    dinner: ["sopar"],
    fieldhockey: ["hoquei herba"],
    graduation: ["graduació"],
    rugbysevens: ["rugbi"],
    walkingdog: ["passejar el gos"],
    climbing: ["escalada"],
    chinesenewyear: ["any nou xinès"],
    cinema: ["cinema", "pel·lícula", "pel·lícules"],
    coffee: ["cafè"],
    videogaming: ["videojocs"],
    studying: ["estudiar", "estudi"],
    learnlanguage: ["classe d'anglès", "curs d'anglès"],
    backtoschool: ["tornada a l'escola", "primer dia d'escola"],
    kidspickupdropoff: ["tornada a l'escola", "primer dia d'escola"],
    karate: ["karate"],
    sleep: ["migdiada", "dormir", "descansar"],
    theateropera: ["teatre"]
  },
  fr_fr: {
    badminton: ["badminton"],
    bbq: ["barbecue", "bbq"],
    beer: ["bière"],
    drinks: ["boissons", "cocktail", "cocktails", "bière"],
    birthday: ["anniversaire"],
    bowling: ["bowling"],
    camping: ["camping"],
    dinner: ["dîner"],
    fieldhockey: ["hockey sur gazon"],
    graduation: ["diplôme", "remise des diplômes"],
    rugbysevens: ["rugby à sept", "rugby"],
    walkingdog: ["promener le chien"],
    cinema: ["cinéma"],
    coffee: ["café"],
    videogaming: ["jeux vidéo"],
    studying: ["étudier"],
    learnlanguage: ["cours d'anglais"],
    chinesenewyear: ["nouvel an chinois"],
    climbing: ["escalade"],
    cooking: ["repas"],
    karate: ["jiu jitsu", "judo"],
    sleep: ["dormir", "sieste"],
    tennis: ["tennis"]
  },
  ru_ru: {
    americanfootball: ["американский футбол"],
    badminton: ["бадминтон"],
    baseball: ["бейсбол"],
    basketball: ["баскетбол"],
    bbq: ["барбекю", "гриль", "шашлык"],
    beer: ["пиво"],
    drinks: ["напитки", "коктейль", "коктейли", "пиво"],
    birthday: ["день рождения"],
    bowling: ["боулинг"],
    breakfast: ["завтрак"],
    camping: ["кемпинг"],
    dinner: ["ужин"],
    fieldhockey: ["хоккей на траве"],
    graduation: ["выпускной"],
    rugbysevens: ["регби-7", "регби"],
    walkingdog: ["выгуливать собаку", "выгул собаки"],
    climbing: ["скалолазание", "боулдеринг"],
    chinesenewyear: ["китайский новый год"],
    cinema: ["кино", "кинотеатр"],
    coffee: ["кофе"],
    videogaming: ["видеоигры"],
    studying: ["учиться", "изучать"],
    learnlanguage: ["урок английского"],
    backtoschool: ["снова в школу", "первое сентября"],
    kidspickupdropoff: ["снова в школу", "первое сентября"],
    karate: ["карате"],
    sleep: ["сон", "спать", "вздремнуть"],
    theateropera: ["театр", "опера"]
  }
};
let legacyLocalizedKeywords = {
  en_us: {
    learnlanguage: ["english class", "english course", "practice english", "french class", "french course", "german class", "german course"]
  },
  es_es: {
    learnlanguage: ["clase de inglés", "curso de inglés"]
  },
  ca_es: {
    learnlanguage: ["classe d'anglès", "curs d'anglès"]
  },
  fr_fr: {
    learnlanguage: ["cours d'anglais"]
  },
  ru_ru: {
    learnlanguage: ["урок английского"]
  }
};
const oldImage = (id) =>
  `https://ssl.gstatic.com/calendar/images/eventillustrations/v1/img_${id}_1x.jpg`;
const newImage = (id) =>
  `https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_${id}.svg`;
const oldImageForFlair = (flair) => flair.oldUrl || oldImage(flair.oldId || flair.id);
const newImageForFlair = (flair) => flair.newUrl || newImage(flair.newId || flair.id);

const flairGrid = document.getElementById("flair-grid");
const flairCount = document.getElementById("flair-count");
const languageControls = document.getElementById("language-controls");
const keywordSearch = document.getElementById("keyword-search");
const keywordSourceStatus = document.getElementById("keyword-source-status");
const pageTitle = document.getElementById("page-title");
const eyebrowText = document.getElementById("eyebrow-text");
const heroTitle = document.getElementById("hero-title");
const heroIntro = document.getElementById("hero-intro");
const displayTitle = document.getElementById("display-title");
const searchLabel = document.getElementById("search-label");
const hintText = document.getElementById("hint-text");
const allTitle = document.getElementById("all-title");
const footerSourceText = document.getElementById("footer-source-text");
const legalText = document.getElementById("legal-text");

let selectedLanguage = "en_us";
let searchText = "";
const googleNewAvailability = new Map();
const googleOldAvailability = new Map();
let keywordLoadSummary = { ok: 1, total: 1, count: 0, failed: false };

async function loadLanguageDataset() {
  try {
    const response = await fetch("data/flair-keywords-multilang.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (Array.isArray(data.locales) && data.locales.length) {
      languageConfig = data.locales;
    }
    if (data.keywordsByLocale && typeof data.keywordsByLocale === "object") {
      localizedKeywords = data.keywordsByLocale;
    }
    if (data.legacyByLocale && typeof data.legacyByLocale === "object") {
      legacyLocalizedKeywords = data.legacyByLocale;
    }
  } catch (_error) {
    // Keep built-in fallback locales/keywords if dataset is missing.
  }
}

async function loadDiscoveryDataset() {
  try {
    const response = await fetch("data/flair-discovery.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data.flairs)) return;

    const byId = new Map(flairArchive.map((f) => [f.id, f]));
    data.flairs.forEach((item) => {
      const existing = byId.get(item.id);
      if (existing) {
        if (typeof item.hasNew === "boolean" && !existing.newId && !existing.newUrl) {
          existing.hasNew = item.hasNew;
        }
      } else {
        flairArchive.push({
          id: item.id,
          keywords: [item.id],
          hasNew: !!item.hasNew
        });
      }
    });

    if (!localizedKeywords.en_us) localizedKeywords.en_us = {};
    flairArchive.forEach((flair) => {
      if (!localizedKeywords.en_us[flair.id]) {
        localizedKeywords.en_us[flair.id] = flair.keywords || [flair.id];
      }
    });
  } catch (_error) {
    // Keep bundled flare list when discovery file is missing.
  }
}

function textFor(locale = selectedLanguage) {
  return uiText[locale] || uiText.en_us;
}

function applyUiLanguage() {
  const t = textFor();
  document.documentElement.lang = selectedLanguage.split("_")[0];
  document.title = t.pageTitle;
  if (pageTitle) pageTitle.textContent = t.pageTitle;
  eyebrowText.textContent = t.eyebrow;
  heroTitle.textContent = t.heroTitle;
  heroIntro.textContent = t.heroIntro;
  displayTitle.textContent = t.displayTitle;
  searchLabel.textContent = t.searchLabel;
  keywordSearch.placeholder = t.searchPlaceholder;
  hintText.textContent = t.hint;
  allTitle.textContent = t.flairsTitle;
  footerSourceText.childNodes[0].nodeValue = `${t.footerSource} `;
  legalText.textContent = t.legal;
  if (keywordLoadSummary.failed) {
    keywordSourceStatus.textContent = t.sourceFailed;
  } else if (keywordLoadSummary.ok > 0) {
    keywordSourceStatus.textContent = t.sourceLoaded();
  } else {
    keywordSourceStatus.textContent = t.sourceLoading;
  }
}

function availableLanguageCodes() {
  return new Set(languageConfig.map((lang) => lang.code));
}

function toLocaleCode(value) {
  return (value || "").toLowerCase().replace("-", "_");
}

function guessBrowserLanguage() {
  const available = availableLanguageCodes();
  const browserList = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language]).map(toLocaleCode);

  for (const locale of browserList) {
    if (available.has(locale)) return locale;
    const base = locale.split("_")[0];
    const byBase = languageConfig.find((lang) => lang.code.startsWith(`${base}_`));
    if (byBase) return byBase.code;
  }

  return "en_us";
}

function titleCaseFromId(id) {
  return id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function keywordListForFlair(flair, locale) {
  const explicit = localizedKeywords[locale]?.[flair.id] || [];
  const base = locale === "en_us" ? flair.keywords : [];
  return Array.from(new Set([...explicit, ...base]));
}

function legacyKeywordListForFlair(flair, locale) {
  const legacy = legacyLocalizedKeywords[locale]?.[flair.id] || [];
  if (locale === "en_us" && flair.id === "learnlanguage") {
    return Array.from(new Set([...legacy, ...flair.keywords.filter((k) => k !== "studying")]));
  }
  return legacy;
}

function checkGoogleImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function flairHasNew(flair) {
  if (googleNewAvailability.has(flair.id)) {
    return googleNewAvailability.get(flair.id);
  }
  return flair.hasNew;
}

function flairHasOld(flair) {
  if (googleOldAvailability.has(flair.id)) {
    return googleOldAvailability.get(flair.id);
  }
  return true;
}

async function loadGoogleAvailability() {
  await Promise.all(
    flairArchive.map(async (flair) => {
      const [newExists, oldExists] = await Promise.all([
        checkGoogleImage(newImageForFlair(flair)),
        checkGoogleImage(oldImageForFlair(flair))
      ]);
      googleNewAvailability.set(flair.id, newExists);
      googleOldAvailability.set(flair.id, oldExists);
    })
  );
}

function flairCard(flair) {
  const card = document.createElement("article");
  const hasNew = flairHasNew(flair);
  const hasOld = flairHasOld(flair);
  const localeKeywords = keywordListForFlair(flair, selectedLanguage);
  const legacyKeywords = legacyKeywordListForFlair(flair, selectedLanguage);
  const unavailableClass = hasNew ? "" : " unavailable";
  const ribbonMarkup = hasNew ? "" : `<span class="unavailable-ribbon">${textFor().notAvailable}</span>`;
  const currentMarkup = localeKeywords.map((kw) => `<span class="keyword">${kw}</span>`).join("");
  const legacyMarkup = legacyKeywords.map((kw) => `<span class="keyword old-keyword">${kw}</span>`).join("");
  const keywordsMarkup = hasNew
    ? ((currentMarkup || legacyMarkup) ? `${currentMarkup}${legacyMarkup}` : `<span class="keyword">${textFor().noKeyword}</span>`)
    : (currentMarkup ? localeKeywords.map((kw) => `<span class="keyword old-keyword">${kw}</span>`).join("") : `<span class="keyword old-keyword">${textFor().noKeyword}</span>`);
  const name = titleCaseFromId(flair.id);
  let previewMarkup = "";
  if (hasNew && hasOld) {
    previewMarkup = `
      <div class="preview-stack">
        <img class="preview-img preview-new" src="${newImageForFlair(flair)}" alt="${name} new illustration" loading="lazy">
        <img class="preview-img preview-old" src="${oldImageForFlair(flair)}" alt="${name} old illustration" loading="lazy">
      </div>
    `;
  } else if (hasNew) {
    previewMarkup = `
      <div class="preview-stack">
        <img class="preview-img preview-static" src="${newImageForFlair(flair)}" alt="${name} new illustration" loading="lazy">
      </div>
    `;
  } else if (hasOld) {
    previewMarkup = `
      <div class="preview-stack no-new">
        <img class="preview-img preview-old-only" src="${oldImageForFlair(flair)}" alt="${name} old illustration" loading="lazy">
      </div>
    `;
  } else {
    previewMarkup = `
      <div class="preview-stack no-new"></div>
    `;
  }

  card.className = `flair${unavailableClass}`;
  card.innerHTML = `
    ${ribbonMarkup}
    ${previewMarkup}
    <div class="keywords">${keywordsMarkup}</div>
    <div class="flair-id">${flair.id.toLowerCase()}</div>
  `;
  return card;
}

function populateSuggestions() {
  // Intentionally no datalist suggestions: plain search input without dropdown arrow.
}

function render() {
  const query = searchText.toLowerCase();
  const visible = flairArchive.filter((flair) => {
    if (!query) return true;
    const haystack = [
      flair.id,
      titleCaseFromId(flair.id),
      ...keywordListForFlair(flair, selectedLanguage)
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  flairGrid.innerHTML = "";
  visible.forEach((flair) => flairGrid.appendChild(flairCard(flair)));
  flairCount.textContent = textFor().flairCount(visible.length, flairArchive.length);
}

function languageHasFlairs(locale) {
  return flairArchive.some((flair) => keywordListForFlair(flair, locale).length > 0 || legacyKeywordListForFlair(flair, locale).length > 0);
}

function shortLangCode(code) {
  return code.split("_")[0];
}

function setLanguage(nextLanguage) {
  selectedLanguage = nextLanguage;
  applyUiLanguage();
  populateSuggestions();
  render();
  setupLanguageSelector();
}

function setupLanguageSelector() {
  languageControls.innerHTML = "";

  if (languageConfig.length > 5) {
    const select = document.createElement("select");
    select.id = "language-select";
    select.setAttribute("aria-label", "Language");
    languageConfig.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang.code;
      option.textContent = shortLangCode(lang.code);
      select.appendChild(option);
    });
    select.value = selectedLanguage;
    select.addEventListener("change", (event) => setLanguage(event.target.value));
    languageControls.appendChild(select);
    return;
  }

  languageConfig.forEach((lang) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lang-btn${lang.code === selectedLanguage ? " active" : ""}`;
    button.textContent = shortLangCode(lang.code);
    button.setAttribute("aria-label", lang.label);
    button.addEventListener("click", () => setLanguage(lang.code));
    languageControls.appendChild(button);
  });
}

keywordSearch.addEventListener("input", (event) => {
  searchText = event.target.value.trim();
  render();
});

async function init() {
  await loadLanguageDataset();
  await loadDiscoveryDataset();
  applyUiLanguage();
  await loadGoogleAvailability();
  selectedLanguage = guessBrowserLanguage();
  if (!languageHasFlairs(selectedLanguage)) {
    selectedLanguage = "en_us";
  }
  applyUiLanguage();
  setupLanguageSelector();
  populateSuggestions();
  render();
}

init();


