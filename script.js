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
  { id: "cooking", keywords: ["cooking", "cook"], hasNew: true },
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
  { id: "flight", keywords: ["flight", "flights"], hasNew: true },
  { id: "graduation", keywords: ["graduation", "graduación"], hasNew: true },
  { id: "gym", keywords: ["gym"], hasNew: true },
  { id: "interview", keywords: ["interview", "job interview"], hasNew: true },
  { id: "rugbysevens", keywords: ["rugby sevens", "rugby"], hasNew: true },
  { id: "trip", keywords: ["trip", "travel"], hasNew: true },
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
  { id: "lunch", keywords: ["lunch"], hasNew: true },
  { id: "sleep", keywords: ["sleep", "sleeping", "nap", "napping"], hasNew: true },
  { id: "theateropera", keywords: ["theater", "theatre opera"], hasNew: false },
  { id: "train", keywords: ["train", "trains"], hasNew: true },
  { id: "bus", keywords: ["bus", "buses"], hasNew: true },
  { id: "videocall", keywords: ["video call", "videocall"], hasNew: true },
  { id: "walk", keywords: ["walk", "walking"], hasNew: true },
  { id: "hiking", keywords: ["hiking", "hike"], hasNew: true },
  { id: "running", keywords: ["running"], hasNew: true },
  { id: "yoga", keywords: ["yoga"], hasNew: true },
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
    eyebrow: "Flair Archive",
    heroTitle: "Keyword-Triggered Calendar Flairs",
    heroIntro: "Compare illustration flairs that appear when event text matches certain keywords.",
    displayTitle: "Display",
    searchLabel: "",
    searchPlaceholder: "Search keyword in selected language",
    hint: "Tip: each card shows the new illustration by default. Hover to reveal the old one. If there is no new version, the old one appears in grey and becomes normal on hover.",
    flairsTitle: "Flairs",
    sourceLoading: "Source: Google image assets (ssl.gstatic.com)",
    sourceLoaded: () => "Source: Google image assets (ssl.gstatic.com)",
    sourceFailed: "Source: Google image assets (ssl.gstatic.com)",
    addFlairToggle: "+ Add",
    addFlairHide: "Hide form",
    addFlairTitle: "Add",
    addFlairClose: "Close",
    addFlairId: "Flair ID",
    addFlairNewId: "Or new ID",
    addFlairNewIdPlaceholder: "example: meeting",
    addFlairLanguage: "Keyword language",
    addFlairKeywords: "Keywords",
    addFlairKeywordsPlaceholder: "comma, separated, keywords",
    addFlairPreviewNew: "New",
    addFlairPreviewOld: "Old",
    addFlairSubmit: "Save",
    addFlairAdded: "Keywords added.",
    addFlairMissing: "Select or write an ID and add at least one keyword.",
    addFlairNotFound: "No old/new illustration found for this ID.",
    addFlairDetected: "Flair detected and added.",
    addFlairPreviewMissing: "Image not available",
    addFlairCheckingId: "Checking ID...",
    addFlairIdExists: "ID exists. Selected from list.",
    addFlairInvalidLanguage: "Keyword does not match the selected language.",
    addFlairInvalidIdMatch: "Keyword does not match the selected ID.",
    addFlairFormAria: "Add keywords form",
    addFlairPreviewNewAlt: "New illustration preview",
    addFlairPreviewOldAlt: "Old illustration preview",
    noKeyword: "No confirmed keyword for this flair in this language",
    notAvailable: "Not available",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Archive for comparing old and new keyword flair illustrations. Source reference:",
    legal: "Icons shown for comparison purposes. All rights belong to Google. This is an unofficial, independent hobby archive and is not affiliated with, endorsed by, or sponsored by Google. Google Calendar is a trademark of Google."
  },
  es_es: {
    pageTitle: "Archivo de Flairs de Calendario (No oficial)",
    eyebrow: "Archivo de Flairs",
    heroTitle: "Flairs de Calendario Activados por Palabras Clave",
    heroIntro: "Compara las ilustraciones que aparecen cuando el texto del evento coincide con ciertas palabras clave.",
    displayTitle: "Vista",
    searchLabel: "",
    searchPlaceholder: "Buscar palabra clave en el idioma seleccionado",
    hint: "Consejo: cada tarjeta muestra la ilustración nueva por defecto. Al pasar el mouse se ve la antigua. Si no hay versión nueva, la antigua aparece en gris y en hover se ve normal.",
    flairsTitle: "Flairs",
    sourceLoading: "Fuente: recursos de imágenes de Google (ssl.gstatic.com)",
    sourceLoaded: () => "Fuente: recursos de imágenes de Google (ssl.gstatic.com)",
    sourceFailed: "Fuente: recursos de imágenes de Google (ssl.gstatic.com)",
    addFlairToggle: "+ Añadir",
    addFlairHide: "Ocultar formulario",
    addFlairTitle: "Añadir",
    addFlairClose: "Cerrar",
    addFlairId: "ID del flair",
    addFlairNewId: "O ID nuevo",
    addFlairNewIdPlaceholder: "ejemplo: reunion",
    addFlairLanguage: "Idioma de keywords",
    addFlairKeywords: "Keywords",
    addFlairKeywordsPlaceholder: "keywords separadas por coma",
    addFlairPreviewNew: "Nuevo",
    addFlairPreviewOld: "Antiguo",
    addFlairSubmit: "Guardar",
    addFlairAdded: "Keywords añadidas.",
    addFlairMissing: "Selecciona o escribe un ID y añade al menos una keyword.",
    addFlairNotFound: "No se encontró ilustración old/new para este ID.",
    addFlairDetected: "Flair detectada y añadida.",
    addFlairPreviewMissing: "Imagen no disponible",
    addFlairCheckingId: "Comprobando ID...",
    addFlairIdExists: "El ID ya existe. Seleccionado en la lista.",
    addFlairInvalidLanguage: "La keyword no coincide con el idioma seleccionado.",
    addFlairInvalidIdMatch: "La keyword no coincide con el ID seleccionado.",
    addFlairFormAria: "Formulario para añadir keywords",
    addFlairPreviewNewAlt: "Vista previa de ilustración nueva",
    addFlairPreviewOldAlt: "Vista previa de ilustración antigua",
    noKeyword: "No hay palabra clave confirmada para este flair en este idioma",
    notAvailable: "No disponible",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Archivo para comparar ilustraciones de flairs antiguas y nuevas. Referencias:",
    legal: "Íconos mostrados solo para comparación. Todos los derechos pertenecen a Google. Este es un archivo no oficial, independiente y sin afiliación, patrocinio ni respaldo de Google. Google Calendar es una marca registrada de Google."
  },
  ca_es: {
    pageTitle: "Arxiu de Flairs de Calendari (No oficial)",
    eyebrow: "Arxiu de Flairs",
    heroTitle: "Flairs de Calendari Activats per Paraules Clau",
    heroIntro: "Compara les il·lustracions que apareixen quan el text de l'esdeveniment coincideix amb certes paraules clau.",
    displayTitle: "Visualització",
    searchLabel: "",
    searchPlaceholder: "Cerca paraula clau en l'idioma seleccionat",
    hint: "Consell: cada targeta mostra la il·lustració nova per defecte. En passar el cursor es veu l'antiga. Si no hi ha versió nova, l'antiga apareix en gris i en hover es veu normal.",
    flairsTitle: "Flairs",
    sourceLoading: "Font: recursos d'imatges de Google (ssl.gstatic.com)",
    sourceLoaded: () => "Font: recursos d'imatges de Google (ssl.gstatic.com)",
    sourceFailed: "Font: recursos d'imatges de Google (ssl.gstatic.com)",
    addFlairToggle: "+ Afegir",
    addFlairHide: "Amagar formulari",
    addFlairTitle: "Afegir",
    addFlairClose: "Tancar",
    addFlairId: "ID del flair",
    addFlairNewId: "O ID nou",
    addFlairNewIdPlaceholder: "exemple: reunió",
    addFlairLanguage: "Idioma de keywords",
    addFlairKeywords: "Keywords",
    addFlairKeywordsPlaceholder: "keywords separades per comes",
    addFlairPreviewNew: "Nou",
    addFlairPreviewOld: "Antic",
    addFlairSubmit: "Desar",
    addFlairAdded: "Keywords afegides.",
    addFlairMissing: "Selecciona o escriu un ID i afegeix com a mínim una keyword.",
    addFlairNotFound: "No s'ha trobat cap il·lustració old/new per a aquest ID.",
    addFlairDetected: "Flair detectada i afegida.",
    addFlairPreviewMissing: "Imatge no disponible",
    addFlairCheckingId: "Comprovant ID...",
    addFlairIdExists: "L'ID ja existeix. Seleccionat a la llista.",
    addFlairInvalidLanguage: "La keyword no coincideix amb l'idioma seleccionat.",
    addFlairInvalidIdMatch: "La keyword no coincideix amb l'ID seleccionat.",
    addFlairFormAria: "Formulari per afegir keywords",
    addFlairPreviewNewAlt: "Previsualització d'il·lustració nova",
    addFlairPreviewOldAlt: "Previsualització d'il·lustració antiga",
    noKeyword: "No hi ha paraula clau confirmada per a aquest flair en aquest idioma",
    notAvailable: "No disponible",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Arxiu per comparar il·lustracions de flairs antigues i noves. Referències:",
    legal: "Icones mostrades només per a comparació. Tots els drets pertanyen a Google. Aquest és un arxiu no oficial, independent i sense afiliació, patrocini ni suport de Google. Google Calendar és una marca registrada de Google."
  },
  fr_fr: {
    pageTitle: "Archive des Flairs de Calendrier (Non officielle)",
    eyebrow: "Archive des Flairs",
    heroTitle: "Flairs de Calendrier Déclenchés par Mots-clés",
    heroIntro: "Comparez les illustrations qui apparaissent lorsque le texte d'un événement correspond à certains mots-clés.",
    displayTitle: "Affichage",
    searchLabel: "",
    searchPlaceholder: "Rechercher un mot-clé dans la langue sélectionnée",
    hint: "Astuce: chaque carte affiche la nouvelle illustration par défaut. Au survol, l'ancienne apparaît. S'il n'y a pas de nouvelle version, l'ancienne est grisée puis normale au survol.",
    flairsTitle: "Flairs",
    sourceLoading: "Source : ressources d'images Google (ssl.gstatic.com)",
    sourceLoaded: () => "Source : ressources d'images Google (ssl.gstatic.com)",
    sourceFailed: "Source : ressources d'images Google (ssl.gstatic.com)",
    addFlairToggle: "+ Ajouter",
    addFlairHide: "Masquer le formulaire",
    addFlairTitle: "Ajouter",
    addFlairClose: "Fermer",
    addFlairId: "ID du flair",
    addFlairNewId: "Ou nouvel ID",
    addFlairNewIdPlaceholder: "exemple : reunion",
    addFlairLanguage: "Langue des mots-clés",
    addFlairKeywords: "Mots-clés",
    addFlairKeywordsPlaceholder: "mots-clés séparés par des virgules",
    addFlairPreviewNew: "Nouveau",
    addFlairPreviewOld: "Ancien",
    addFlairSubmit: "Enregistrer",
    addFlairAdded: "Mots-clés ajoutés.",
    addFlairMissing: "Sélectionnez ou saisissez un ID et ajoutez au moins un mot-clé.",
    addFlairNotFound: "Aucune illustration old/new trouvée pour cet ID.",
    addFlairDetected: "Flair détecté et ajouté.",
    addFlairPreviewMissing: "Image non disponible",
    addFlairCheckingId: "Vérification de l'ID...",
    addFlairIdExists: "L'ID existe déjà. Sélectionné dans la liste.",
    addFlairInvalidLanguage: "Le mot-clé ne correspond pas à la langue sélectionnée.",
    addFlairInvalidIdMatch: "Le mot-clé ne correspond pas à l'ID sélectionné.",
    addFlairFormAria: "Formulaire d'ajout de mots-clés",
    addFlairPreviewNewAlt: "Aperçu de la nouvelle illustration",
    addFlairPreviewOldAlt: "Aperçu de l'ancienne illustration",
    noKeyword: "Aucun mot-clé confirmé pour ce flair dans cette langue",
    notAvailable: "Indisponible",
    flairCount: (v, t) => `${v} / ${t} flairs`,
    footerSource: "Archive pour comparer les illustrations de flairs anciennes et nouvelles. Sources:",
    legal: "Icônes affichées uniquement à des fins de comparaison. Tous les droits appartiennent à Google. Ceci est une archive amateur non officielle, sans affiliation, approbation ni parrainage de Google. Google Calendar est une marque de Google."
  },
  ru_ru: {
    pageTitle: "Архив Flair Calendar (Неофициально)",
    eyebrow: "Архив Flair",
    heroTitle: "Flairs Календаря по Ключевым Словам",
    heroIntro: "Сравните иллюстрации, которые появляются, когда текст события совпадает с ключевыми словами.",
    displayTitle: "Отображение",
    searchLabel: "",
    searchPlaceholder: "Поиск ключевого слова на выбранном языке",
    hint: "Совет: по умолчанию показывается новая иллюстрация. При наведении показывается старая. Если новой версии нет, старая будет серой и станет обычной при наведении.",
    flairsTitle: "Flairs",
    sourceLoading: "Источник: ресурсы изображений Google (ssl.gstatic.com)",
    sourceLoaded: () => "Источник: ресурсы изображений Google (ssl.gstatic.com)",
    sourceFailed: "Источник: ресурсы изображений Google (ssl.gstatic.com)",
    addFlairToggle: "+ Добавить",
    addFlairHide: "Скрыть форму",
    addFlairTitle: "Добавить",
    addFlairClose: "Закрыть",
    addFlairId: "ID flair",
    addFlairNewId: "Или новый ID",
    addFlairNewIdPlaceholder: "пример: meeting",
    addFlairLanguage: "Язык ключевых слов",
    addFlairKeywords: "Ключевые слова",
    addFlairKeywordsPlaceholder: "ключевые слова через запятую",
    addFlairPreviewNew: "Новая",
    addFlairPreviewOld: "Старая",
    addFlairSubmit: "Сохранить",
    addFlairAdded: "Ключевые слова добавлены.",
    addFlairMissing: "Выберите или введите ID и добавьте хотя бы одно ключевое слово.",
    addFlairNotFound: "Для этого ID не найдено old/new иллюстраций.",
    addFlairDetected: "Flair обнаружен и добавлен.",
    addFlairPreviewMissing: "Изображение недоступно",
    addFlairCheckingId: "Проверка ID...",
    addFlairIdExists: "ID уже существует. Выбран из списка.",
    addFlairInvalidLanguage: "Ключевое слово не соответствует выбранному языку.",
    addFlairInvalidIdMatch: "Ключевое слово не соответствует выбранному ID.",
    addFlairFormAria: "Форма добавления ключевых слов",
    addFlairPreviewNewAlt: "Предпросмотр новой иллюстрации",
    addFlairPreviewOldAlt: "Предпросмотр старой иллюстрации",
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
const uiTextRuntimeCache = {};
const uiTextTranslateCache = new Map();
const uiTextKeys = [
  "pageTitle",
  "eyebrow",
  "heroTitle",
  "heroIntro",
  "displayTitle",
  "searchLabel",
  "searchPlaceholder",
  "hint",
  "flairsTitle",
  "sourceLoading",
  "sourceFailed",
  "addFlairToggle",
  "addFlairHide",
  "addFlairTitle",
  "addFlairClose",
  "addFlairId",
  "addFlairNewId",
  "addFlairNewIdPlaceholder",
  "addFlairLanguage",
  "addFlairKeywords",
  "addFlairKeywordsPlaceholder",
  "addFlairPreviewNew",
  "addFlairPreviewOld",
  "addFlairSubmit",
  "addFlairAdded",
  "addFlairMissing",
  "addFlairNotFound",
  "addFlairDetected",
  "addFlairPreviewMissing",
  "addFlairCheckingId",
  "addFlairIdExists",
  "addFlairInvalidLanguage",
  "addFlairInvalidIdMatch",
  "addFlairFormAria",
  "addFlairPreviewNewAlt",
  "addFlairPreviewOldAlt",
  "noKeyword",
  "notAvailable",
  "footerSource",
  "legal"
];
const notAvailableByLanguage = {
  en: "Unavailable",
  es: "No disponible",
  ca: "No disponible",
  fr: "Indisponible",
  de: "Nicht verfügbar",
  it: "Non disponibile",
  pt: "Indisponível",
  ru: "Недоступно",
  nl: "Niet beschikbaar",
  pl: "Niedostępne",
  tr: "Kullanılamıyor",
  sv: "Otillgänglig",
  no: "Utilgjengelig",
  da: "Utilgængelig",
  fi: "Ei saatavilla",
  cs: "Nedostupné",
  sk: "Nedostupné",
  hr: "Nedostupno",
  sl: "Ni na voljo",
  hu: "Nem elérhető",
  lt: "Nepasiekiama",
  lv: "Nav pieejams",
  uk: "Недоступно",
  bg: "Недостъпно",
  ro: "Indisponibil",
  el: "Μη διαθέσιμο",
  sr: "Недоступно",
  id: "Tidak tersedia",
  ms: "Tidak tersedia",
  vi: "Không có",
  th: "ไม่พร้อมใช้งาน",
  hi: "उपलब्ध नहीं",
  ja: "利用不可",
  ko: "사용 불가",
  zh: "不可用"
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
const oldImageTmly = (id) =>
  `https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_${id}.jpg`;
const oldImageV1 = (id) =>
  `https://ssl.gstatic.com/calendar/images/eventillustrations/v1/img_${id}_1x.jpg`;
const newImage = (id) =>
  `https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_${id}.svg`;
const oldImageCandidatesForFlair = (flair) => {
  if (flair.oldUrl) return [flair.oldUrl];
  const id = flair.oldId || flair.id;
  return [oldImageTmly(id), oldImageV1(id)];
};
const oldImageForFlair = (flair) => googleOldResolvedUrl.get(flair.id) || oldImageCandidatesForFlair(flair)[0];
const newImageForFlair = (flair) => flair.newUrl || newImage(flair.newId || flair.id);
const FLAIR_ID_ALIAS_MAP = { theatreopera: "theateropera" };

function canonicalFlairId(id) {
  const normalized = String(id || "").trim().toLowerCase();
  return FLAIR_ID_ALIAS_MAP[normalized] || normalized;
}

const flairGrid = document.getElementById("flair-grid");
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
const flairCarousel = document.getElementById("flair-carousel");
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
const addFlairToggle = document.getElementById("add-flair-toggle");
const addFlairBackdrop = document.getElementById("add-flair-backdrop");
const addFlairPanel = document.getElementById("add-flair-panel");
const addFlairTitle = document.getElementById("add-flair-title");
const addFlairClose = document.getElementById("add-flair-close");
const addIdLabel = document.getElementById("add-id-label");
const addIdSelect = document.getElementById("add-id-select");
const addNewIdLabel = document.getElementById("add-new-id-label");
const addNewIdInput = document.getElementById("add-new-id");
const addLangLabel = document.getElementById("add-lang-label");
const addKeywordLanguage = document.getElementById("add-keyword-language");
const addKeywordsLabel = document.getElementById("add-keywords-label");
const addKeywordsInput = document.getElementById("add-keywords-input");
const addPreviewNewLabel = document.getElementById("add-preview-new-label");
const addPreviewOldLabel = document.getElementById("add-preview-old-label");
const addPreviewNewImg = document.getElementById("add-preview-new-img");
const addPreviewOldImg = document.getElementById("add-preview-old-img");
const addFormStatus = document.getElementById("add-form-status");
const addKeywordsSubmit = document.getElementById("add-keywords-submit");

const USER_KEYWORDS_STORAGE_KEY = "calendar_flair_user_keywords_v1";
const EMPTY_PREVIEW_IMAGE_SRC = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

let selectedLanguage = "en_us";
let searchText = "";
let currentSlideIndex = 0;
let resizeRenderTimer = null;
let addPreviewDebounceTimer = null;
let addPreviewCheckVersion = 0;
const googleNewAvailability = new Map();
const googleOldAvailability = new Map();
const googleOldResolvedUrl = new Map();
let keywordLoadSummary = { ok: 1, total: 1, count: 0, failed: false };
let addPreviewState = { id: "", newExists: false, oldExists: false, oldUrl: "" };

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

    const byId = new Map();
    flairArchive.forEach((flair) => {
      const id = canonicalFlairId(flair.id);
      const existing = byId.get(id);
      if (existing) {
        existing.hasNew = existing.hasNew || Boolean(flair.hasNew);
        existing.keywords = Array.from(new Set([...(existing.keywords || []), ...(flair.keywords || [])]));
      } else {
        byId.set(id, {
          ...flair,
          id,
          oldId: flair.oldId,
          newId: flair.newId,
          keywords: Array.from(new Set((flair.keywords || []).map((k) => String(k).trim()).filter(Boolean)))
        });
      }
    });

    data.flairs.forEach((item) => {
      const id = canonicalFlairId(item.id);
      const existing = byId.get(id);
      if (existing) {
        if (typeof item.hasNew === "boolean" && !existing.newId && !existing.newUrl) {
          existing.hasNew = Boolean(item.hasNew) || existing.hasNew;
        }
      } else {
        byId.set(id, {
          id,
          keywords: [id],
          hasNew: !!item.hasNew
        });
      }
    });

    flairArchive = Array.from(byId.values()).sort((a, b) => a.id.localeCompare(b.id));

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
  return uiTextRuntimeCache[locale] || uiText[locale] || uiText.en_us;
}

function localizedNotAvailable(locale = selectedLanguage) {
  const direct = (uiTextRuntimeCache[locale]?.notAvailable) || uiText[locale]?.notAvailable;
  if (direct) return direct;
  const lower = String(locale || "").toLowerCase();
  if (notAvailableByLanguage[lower]) return notAvailableByLanguage[lower];
  const base = lower.split("_")[0].split("-")[0];
  return notAvailableByLanguage[base] || uiText.en_us.notAvailable;
}

function sourceLoadedText(t) {
  return typeof t.sourceLoaded === "function" ? t.sourceLoaded() : (t.sourceLoading || uiText.en_us.sourceLoading);
}

function flairCountTextFactory(template) {
  const raw = String(template || "__V__ / __T__ flairs");
  return (visible, total) => raw
    .replace(/__V__/g, String(visible))
    .replace(/__T__/g, String(total));
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

function localeBase(locale) {
  return String(locale || "en")
    .toLowerCase()
    .replace("-", "_")
    .split("_")[0] || "en";
}

async function translateText(text, sourceLang, targetLang) {
  const input = String(text || "").trim();
  const sl = localeBase(sourceLang);
  const tl = localeBase(targetLang);
  if (!input || sl === tl) return input;
  const cacheKey = `${sl}::${tl}::${input}`;
  if (uiTextTranslateCache.has(cacheKey)) return uiTextTranslateCache.get(cacheKey);
  try {
    const url = new URL("https://translate.googleapis.com/translate_a/single");
    url.searchParams.set("client", "gtx");
    url.searchParams.set("sl", sl);
    url.searchParams.set("tl", tl);
    url.searchParams.set("dt", "t");
    url.searchParams.set("q", input);
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const translated = parseTranslationPayload(payload) || input;
    uiTextTranslateCache.set(cacheKey, translated);
    return translated;
  } catch {
    uiTextTranslateCache.set(cacheKey, input);
    return input;
  }
}

async function translateUiPhrase(text, targetLang) {
  return translateText(text, "en", targetLang);
}

async function ensureUiTextLocale(locale) {
  if (uiText[locale] || uiTextRuntimeCache[locale]) return;
  const base = uiText.en_us;
  const target = String(locale || "en_us").split("_")[0].split("-")[0].toLowerCase() || "en";
  const translated = {};

  for (const key of uiTextKeys) {
    translated[key] = await translateUiPhrase(base[key], target);
  }

  const flairCountTemplate = await translateUiPhrase("__V__ / __T__ flairs", target);
  uiTextRuntimeCache[locale] = {
    ...translated,
    flairCount: flairCountTextFactory(flairCountTemplate),
    sourceLoaded: () => translated.sourceLoading
  };
}

function applyUiLanguage() {
  const t = textFor();
  document.documentElement.lang = selectedLanguage.split("_")[0];
  document.title = t.pageTitle;
  if (pageTitle) pageTitle.textContent = t.pageTitle;
  eyebrowText.textContent = t.eyebrow;
  heroTitle.textContent = t.heroTitle;
  heroIntro.textContent = t.heroIntro;
  if (displayTitle) displayTitle.textContent = t.displayTitle;
  searchLabel.textContent = t.searchLabel;
  keywordSearch.placeholder = t.searchPlaceholder;
  hintText.textContent = t.hint;
  allTitle.textContent = t.flairsTitle;
  footerSourceText.childNodes[0].nodeValue = `${t.footerSource} `;
  legalText.textContent = t.legal;
  if (keywordLoadSummary.failed) {
    keywordSourceStatus.textContent = t.sourceFailed;
  } else if (keywordLoadSummary.ok > 0) {
    keywordSourceStatus.textContent = sourceLoadedText(t);
  } else {
    keywordSourceStatus.textContent = t.sourceLoading;
  }
  if (addFlairToggle) addFlairToggle.textContent = t.addFlairToggle || uiText.en_us.addFlairToggle;
  if (addFlairTitle) addFlairTitle.textContent = t.addFlairTitle || uiText.en_us.addFlairTitle;
  if (addFlairClose) {
    addFlairClose.textContent = "close";
    addFlairClose.setAttribute("aria-label", t.addFlairClose || uiText.en_us.addFlairClose);
    addFlairClose.title = t.addFlairClose || uiText.en_us.addFlairClose;
  }
  if (addIdLabel) addIdLabel.textContent = t.addFlairId || uiText.en_us.addFlairId;
  if (addNewIdLabel) addNewIdLabel.textContent = t.addFlairNewId || uiText.en_us.addFlairNewId;
  if (addNewIdInput) addNewIdInput.placeholder = t.addFlairNewIdPlaceholder || uiText.en_us.addFlairNewIdPlaceholder;
  if (addLangLabel) addLangLabel.textContent = t.addFlairLanguage || uiText.en_us.addFlairLanguage;
  if (addKeywordsLabel) addKeywordsLabel.textContent = t.addFlairKeywords || uiText.en_us.addFlairKeywords;
  if (addKeywordsInput) addKeywordsInput.placeholder = t.addFlairKeywordsPlaceholder || uiText.en_us.addFlairKeywordsPlaceholder;
  if (addPreviewNewLabel) addPreviewNewLabel.textContent = t.addFlairPreviewNew || uiText.en_us.addFlairPreviewNew;
  if (addPreviewOldLabel) addPreviewOldLabel.textContent = t.addFlairPreviewOld || uiText.en_us.addFlairPreviewOld;
  if (addKeywordsSubmit) {
    addKeywordsSubmit.textContent = "save";
    addKeywordsSubmit.setAttribute("aria-label", t.addFlairSubmit || uiText.en_us.addFlairSubmit);
    addKeywordsSubmit.title = t.addFlairSubmit || uiText.en_us.addFlairSubmit;
  }
  if (addFlairPanel) addFlairPanel.setAttribute("aria-label", t.addFlairFormAria || uiText.en_us.addFlairFormAria);
  if (addPreviewNewImg) addPreviewNewImg.alt = t.addFlairPreviewNewAlt || uiText.en_us.addFlairPreviewNewAlt;
  if (addPreviewOldImg) addPreviewOldImg.alt = t.addFlairPreviewOldAlt || uiText.en_us.addFlairPreviewOldAlt;
}

function openAddFlairModal() {
  if (!addFlairPanel) return;
  addFlairPanel.hidden = false;
  if (addFlairBackdrop) addFlairBackdrop.hidden = false;
  addPreviewCheckVersion += 1;
  setupAddFlairForm();
  scheduleAddPreviewCheck();
}

function closeAddFlairModal() {
  if (!addFlairPanel) return;
  addFlairPanel.hidden = true;
  if (addFlairBackdrop) addFlairBackdrop.hidden = true;
  clearTimeout(addPreviewDebounceTimer);
  addPreviewCheckVersion += 1;
  if (addFormStatus) addFormStatus.textContent = "";
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

function fallbackKeywordsFromId(id) {
  const normalized = String(id || "").trim().toLowerCase();
  if (!normalized) return [];
  const spaced = normalized.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ");
  return Array.from(new Set([spaced, normalized].map((value) => value.trim()).filter(Boolean)));
}

function dedupeKeywords(values) {
  const seen = new Set();
  const output = [];
  values.forEach((value) => {
    const trimmed = String(value || "").trim();
    if (!trimmed) return;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    output.push(trimmed);
  });
  return output;
}

function parseKeywordsInput(value) {
  return dedupeKeywords(
    String(value || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  );
}

function normalizeIdInput(value) {
  return canonicalFlairId(
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9_-]/g, "")
  );
}

function selectedAddFlairId() {
  const typed = normalizeIdInput(addNewIdInput?.value || "");
  if (typed) return typed;
  return normalizeIdInput(addIdSelect?.value || "");
}

function ensureFlairEntry(id) {
  let entry = flairArchive.find((flair) => flair.id === id);
  if (entry) return entry;
  entry = {
    id,
    keywords: [id],
    hasNew: false
  };
  flairArchive.push(entry);
  flairArchive.sort((a, b) => a.id.localeCompare(b.id));
  return entry;
}

function mergeLocalizedKeywords(locale, flairId, keywords) {
  if (!localizedKeywords[locale]) localizedKeywords[locale] = {};
  const existing = localizedKeywords[locale][flairId] || [];
  localizedKeywords[locale][flairId] = dedupeKeywords([...existing, ...keywords]);
}

function removeLocalizedKeyword(locale, flairId, keyword) {
  const list = localizedKeywords[locale]?.[flairId];
  if (!Array.isArray(list)) return;
  const target = String(keyword || "").trim().toLowerCase();
  localizedKeywords[locale][flairId] = list.filter((item) => String(item || "").trim().toLowerCase() !== target);
}

function languageLooksValidForLocale(keyword, locale) {
  const value = String(keyword || "").trim().toLowerCase();
  const normalized = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const base = toLocaleCode(locale).split("_")[0];
  if (!value) return false;

  const hasCyrillic = /[\u0400-\u04FF]/.test(value);

  if (base === "ru") return hasCyrillic;
  if (hasCyrillic) return false;
  if (base !== "en") {
    const englishFlattened = Object.values(localizedKeywords.en_us || {})
      .flatMap((list) => (Array.isArray(list) ? list : []))
      .map((kw) => String(kw || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    const englishSet = new Set(englishFlattened);
    if (englishSet.has(normalized)) return false;
  }
  return true;
}

function keywordLooksRelevantToFlair(flairId, keyword, locale) {
  const value = String(keyword || "").trim().toLowerCase();
  if (!value) return false;

  const flair = flairArchive.find((item) => item.id === flairId);
  const localeSet = localizedKeywords[locale]?.[flairId] || [];
  const englishSet = localizedKeywords.en_us?.[flairId] || [];
  const idTokens = fallbackKeywordsFromId(flairId)
    .join(" ")
    .toLowerCase()
    .split(/[^a-z0-9\u00C0-\u024F\u0400-\u04FF]+/i)
    .filter((t) => t.length >= 3);
  const known = dedupeKeywords([...(flair?.keywords || []), ...localeSet, ...englishSet]).map((k) => k.toLowerCase());
  if (!known.length) return true;

  if (known.some((k) => value.includes(k) || k.includes(value))) return true;
  const valueTokens = value.split(/[^a-z0-9\u00C0-\u024F\u0400-\u04FF]+/i).filter((t) => t.length >= 3);
  if (valueTokens.some((token) => idTokens.includes(token))) return true;
  return valueTokens.some((token) => known.some((k) => k.split(/[^a-z0-9\u00C0-\u024F\u0400-\u04FF]+/i).includes(token)));
}

function sanitizeKnownBadMappings() {
  removeLocalizedKeyword("es_es", "art", "merienda");
  const flair = flairArchive.find((item) => item.id === "art");
  if (flair) {
    flair.keywords = (flair.keywords || []).filter((kw) => String(kw).trim().toLowerCase() !== "merienda");
  }
}

function userStoredKeywords() {
  try {
    const raw = localStorage.getItem(USER_KEYWORDS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistUserKeywordEntry(entry) {
  const current = userStoredKeywords();
  const merged = [...current, entry];
  localStorage.setItem(USER_KEYWORDS_STORAGE_KEY, JSON.stringify(merged));
}

function pruneInvalidStoredKeywords() {
  const cleaned = userStoredKeywords()
    .map((entry) => {
      const id = normalizeIdInput(entry.id);
      const locale = toLocaleCode(entry.locale);
      const keywords = dedupeKeywords(Array.isArray(entry.keywords) ? entry.keywords : [])
        .filter((kw) => !(id === "art" && locale === "es_es" && kw.toLowerCase() === "merienda"));
      return { id, locale, keywords };
    })
    .filter((entry) => entry.id && entry.locale && entry.keywords.length);
  localStorage.setItem(USER_KEYWORDS_STORAGE_KEY, JSON.stringify(cleaned));
}

async function addTranslatedKeywordsToOtherLocales(flairId, sourceLocale, keywords) {
  const from = localeBase(sourceLocale);
  const targets = languageConfig
    .map((lang) => lang.code)
    .filter((code) => code !== sourceLocale);

  for (const targetLocale of targets) {
    const to = localeBase(targetLocale);
    const translatedList = [];
    for (const keyword of keywords) {
      const translated = await translateText(keyword, from, to);
      const cleaned = String(translated || "").trim();
      if (!cleaned) continue;
      if (!languageLooksValidForLocale(cleaned, targetLocale)) continue;
      translatedList.push(cleaned);
    }
    if (translatedList.length) {
      mergeLocalizedKeywords(targetLocale, flairId, dedupeKeywords(translatedList));
    }
  }
}

function applyUserStoredKeywords() {
  userStoredKeywords().forEach((entry) => {
    const id = normalizeIdInput(entry.id);
    const locale = toLocaleCode(entry.locale);
    const keywords = dedupeKeywords(Array.isArray(entry.keywords) ? entry.keywords : []);
    if (!id || !locale || !keywords.length) return;
    ensureFlairEntry(id);
    mergeLocalizedKeywords(locale, id, keywords);
    if (locale === "en_us") {
      const flair = flairArchive.find((item) => item.id === id);
      if (flair) {
        flair.keywords = dedupeKeywords([...(flair.keywords || []), ...keywords]);
      }
    }
  });
}

async function detectFlairAvailability(flair) {
  const newExists = await checkGoogleImage(newImageForFlair(flair));
  let oldExists = false;
  for (const oldUrl of oldImageCandidatesForFlair(flair)) {
    if (await checkGoogleImage(oldUrl)) {
      oldExists = true;
      googleOldResolvedUrl.set(flair.id, oldUrl);
      break;
    }
  }
  googleNewAvailability.set(flair.id, newExists);
  googleOldAvailability.set(flair.id, oldExists);
}

function keywordListForFlair(flair, locale) {
  const explicit = localizedKeywords[locale]?.[flair.id] || [];
  if (locale === "en_us") {
    const englishFallback = localizedKeywords.en_us?.[flair.id] || [];
    const base = flair.keywords || [];
    const idFallback = fallbackKeywordsFromId(flair.id);
    return Array.from(
      new Set(
        [...explicit, ...englishFallback, ...base, ...idFallback]
          .map((value) => String(value || "").trim())
          .filter(Boolean)
      )
    );
  }
  const localized = Array.from(
    new Set(
      explicit
        .map((value) => String(value || "").trim())
        .filter(Boolean)
    )
  );
  const englishSet = new Set(
    (localizedKeywords.en_us?.[flair.id] || [])
      .map((value) => String(value || "").trim().toLowerCase())
      .filter(Boolean)
  );
  const filtered = localized.filter((keyword) => !englishSet.has(keyword.toLowerCase()));
  return filtered.length ? filtered : localized;
}

function legacyKeywordListForFlair(flair, locale) {
  const legacy = legacyLocalizedKeywords[locale]?.[flair.id] || [];
  if (locale === "en_us" && flair.id === "learnlanguage") {
    const englishLegacy = legacyLocalizedKeywords.en_us?.[flair.id] || [];
    return Array.from(new Set([...legacy, ...englishLegacy, ...flair.keywords.filter((k) => k !== "studying")]));
  }
  const localizedLegacy = Array.from(new Set(legacy));
  const englishLegacySet = new Set(
    (legacyLocalizedKeywords.en_us?.[flair.id] || [])
      .map((value) => String(value || "").trim().toLowerCase())
      .filter(Boolean)
  );
  const filteredLegacy = localizedLegacy.filter((keyword) => !englishLegacySet.has(String(keyword).toLowerCase()));
  return filteredLegacy.length ? filteredLegacy : localizedLegacy;
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
    flairArchive.map(async (flair) => detectFlairAvailability(flair))
  );
}

function flairCard(flair) {
  const card = document.createElement("article");
  const hasNew = flairHasNew(flair);
  const hasOld = flairHasOld(flair);
  const localeKeywords = keywordListForFlair(flair, selectedLanguage);
  const legacyKeywords = legacyKeywordListForFlair(flair, selectedLanguage);
  const unavailableClass = hasNew ? "" : " unavailable";
  const ribbonMarkup = hasNew ? "" : `<span class="unavailable-ribbon">${localizedNotAvailable()}</span>`;
  const currentMarkup = localeKeywords.map((kw) => `<span class="keyword">${kw}</span>`).join("");
  const legacyMarkup = legacyKeywords.map((kw) => `<span class="keyword old-keyword">${kw}</span>`).join("");
  const keywordsMarkup = hasNew
    ? `${currentMarkup}${legacyMarkup}`
    : localeKeywords.map((kw) => `<span class="keyword old-keyword">${kw}</span>`).join("");
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

function carouselLayout() {
  if (window.innerWidth <= 640) {
    return { rows: 1, cols: 1, perSlide: 1 };
  }
  if (window.innerWidth <= 980) {
    return { rows: 1, cols: 2, perSlide: 2 };
  }
  if (window.innerWidth <= 1280) {
    return { rows: 1, cols: 3, perSlide: 3 };
  }
  return { rows: 1, cols: 4, perSlide: 4 };
}

function updateCarouselControls(totalSlides) {
  const boundedIndex = Math.max(0, Math.min(currentSlideIndex, Math.max(0, totalSlides - 1)));
  currentSlideIndex = boundedIndex;
  flairGrid.style.transform = `translateX(-${boundedIndex * 100}%)`;
  if (carouselPrev) carouselPrev.disabled = totalSlides <= 1 || boundedIndex <= 0;
  if (carouselNext) carouselNext.disabled = totalSlides <= 1 || boundedIndex >= totalSlides - 1;
  syncCarouselHeight();
}

function syncCarouselHeight() {
  if (!flairCarousel || !flairGrid) return;
  const slides = flairGrid.querySelectorAll(".carousel-slide");
  const activeSlide = slides[currentSlideIndex] || slides[0];
  const activeCard = activeSlide?.querySelector(".flair");
  if (!activeCard) {
    flairCarousel.style.removeProperty("--carousel-card-height");
    return;
  }
  const cardHeight = Math.ceil(activeCard.getBoundingClientRect().height);
  flairCarousel.style.setProperty("--carousel-card-height", `${cardHeight}px`);
}

function scheduleCarouselHeightSync() {
  syncCarouselHeight();
  requestAnimationFrame(syncCarouselHeight);
  setTimeout(syncCarouselHeight, 120);
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
  const layout = carouselLayout();
  const slides = [];
  for (let i = 0; i < visible.length; i += layout.perSlide) {
    slides.push(visible.slice(i, i + layout.perSlide));
  }

  slides.forEach((chunk) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.style.setProperty("--slide-cols", String(layout.cols));
    slide.style.setProperty("--slide-rows", String(layout.rows));
    chunk.forEach((flair) => slide.appendChild(flairCard(flair)));
    flairGrid.appendChild(slide);
  });

  updateCarouselControls(slides.length);
  const renderedImages = flairGrid.querySelectorAll(".preview-img");
  renderedImages.forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", syncCarouselHeight, { once: true });
      img.addEventListener("error", syncCarouselHeight, { once: true });
    }
  });
  scheduleCarouselHeightSync();
  flairCount.textContent = textFor().flairCount(visible.length, flairArchive.length);
}

function languageHasFlairs(locale) {
  return flairArchive.some((flair) => keywordListForFlair(flair, locale).length > 0 || legacyKeywordListForFlair(flair, locale).length > 0);
}

function shortLangCode(code) {
  return code.split("_")[0];
}

function languageDisplayLabel(lang) {
  const rawCode = String(lang.code || "").trim();
  const code = rawCode.replace("_", "-").toUpperCase();
  const parts = code.split("-");
  const region = parts[1] || "";
  const rawLabel = String(lang.label || rawCode).trim();
  const hasRegionInLabel = /\([^)]*\)/.test(rawLabel);
  const label = hasRegionInLabel
    ? rawLabel
    : (region ? `${rawLabel} (${region})` : rawLabel);
  return code ? `${label} [${code}]` : label;
}

function languageDisplayParts(lang) {
  const rawCode = String(lang.code || "").trim();
  const code = rawCode.replace("_", "-").toUpperCase();
  const parts = code.split("-");
  const region = parts[1] || "";
  const rawLabel = String(lang.label || rawCode).trim();
  const hasRegionInLabel = /\([^)]*\)/.test(rawLabel);
  const label = hasRegionInLabel
    ? rawLabel
    : (region ? `${rawLabel} (${region})` : rawLabel);
  return { label, codeTag: code ? `[${code}]` : "" };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function languageOptionHtml(lang) {
  const { label, codeTag } = languageDisplayParts(lang);
  if (!codeTag) return `<span class="lang-label">${escapeHtml(label)}</span>`;
  return `<span class="lang-label">${escapeHtml(label)}</span> <span class="lang-code">${escapeHtml(codeTag)}</span>`;
}

async function setLanguage(nextLanguage) {
  await ensureUiTextLocale(nextLanguage);
  selectedLanguage = nextLanguage;
  currentSlideIndex = 0;
  applyUiLanguage();
  populateSuggestions();
  render();
  setupLanguageSelector();
  setupAddFlairForm();
}

function setupLanguageSelector() {
  languageControls.innerHTML = "";

  if (languageConfig.length > 5) {
    const details = document.createElement("details");
    details.className = "language-dropdown";

    const summary = document.createElement("summary");
    summary.className = "language-dropdown-summary";
    const selected = languageConfig.find((lang) => lang.code === selectedLanguage) || languageConfig[0];
    summary.innerHTML = languageOptionHtml(selected);
    details.appendChild(summary);

    const menu = document.createElement("div");
    menu.className = "language-dropdown-menu";
    languageConfig.forEach((lang) => {
    const option = document.createElement("button");
      option.type = "button";
      option.className = `language-dropdown-option${lang.code === selectedLanguage ? " active" : ""}`;
      option.setAttribute("aria-label", lang.label);
      option.innerHTML = languageOptionHtml(lang);
      option.addEventListener("click", async () => {
        details.removeAttribute("open");
        await setLanguage(lang.code);
      });
      menu.appendChild(option);
    });
    details.appendChild(menu);
    languageControls.appendChild(details);
    return;
  }

  languageConfig.forEach((lang) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lang-btn${lang.code === selectedLanguage ? " active" : ""}`;
    button.textContent = languageDisplayLabel(lang);
    button.setAttribute("aria-label", lang.label);
    button.addEventListener("click", async () => setLanguage(lang.code));
    languageControls.appendChild(button);
  });
}

function setupAddFlairForm() {
  if (!addIdSelect || !addKeywordLanguage) return;

  const sortedFlairIds = flairArchive.map((flair) => flair.id).sort((a, b) => a.localeCompare(b));
  addIdSelect.innerHTML = sortedFlairIds
    .map((id) => `<option value="${id}">${id}</option>`)
    .join("");

  addKeywordLanguage.innerHTML = languageConfig
    .map((lang) => `<option value="${lang.code}">${languageDisplayLabel(lang)}</option>`)
    .join("");

  addKeywordLanguage.value = selectedLanguage;
  updateAddFlairPreview();
}

async function updateAddFlairPreview(version = addPreviewCheckVersion) {
  if (!addPreviewNewImg || !addPreviewOldImg || !addFormStatus) return;
  const typedId = normalizeIdInput(addNewIdInput?.value || "");
  const flairId = selectedAddFlairId();
  if (!flairId) {
    addPreviewNewImg.src = EMPTY_PREVIEW_IMAGE_SRC;
    addPreviewOldImg.src = EMPTY_PREVIEW_IMAGE_SRC;
    addPreviewNewImg.classList.add("is-missing");
    addPreviewOldImg.classList.add("is-missing");
    addPreviewState = { id: "", newExists: false, oldExists: false, oldUrl: "" };
    addFormStatus.textContent = "";
    return;
  }

  const probeFlair = flairArchive.find((flair) => flair.id === flairId) || { id: flairId, hasNew: false, keywords: [flairId] };
  const idExistsInArchive = Boolean(addIdSelect && Array.from(addIdSelect.options).some((option) => option.value === flairId));
  if (typedId && idExistsInArchive && addIdSelect) {
    addIdSelect.value = flairId;
  }
  const newUrl = newImageForFlair(probeFlair);
  const oldCandidates = oldImageCandidatesForFlair(probeFlair);
  const [newExists, oldFirstExists] = await Promise.all([
    checkGoogleImage(newUrl),
    checkGoogleImage(oldCandidates[0])
  ]);

  let resolvedOldUrl = oldCandidates[0];
  let oldExists = oldFirstExists;
  if (!oldExists && oldCandidates.length > 1) {
    for (let i = 1; i < oldCandidates.length; i += 1) {
      if (await checkGoogleImage(oldCandidates[i])) {
        oldExists = true;
        resolvedOldUrl = oldCandidates[i];
        break;
      }
    }
  }
  if (version !== addPreviewCheckVersion) return;
  addPreviewState = { id: flairId, newExists, oldExists, oldUrl: resolvedOldUrl };

  if (newExists) {
    addPreviewNewImg.src = newUrl;
    addPreviewNewImg.classList.remove("is-missing");
  } else {
    addPreviewNewImg.src = EMPTY_PREVIEW_IMAGE_SRC;
    addPreviewNewImg.classList.add("is-missing");
  }

  if (oldExists) {
    addPreviewOldImg.src = resolvedOldUrl;
    addPreviewOldImg.classList.remove("is-missing");
  } else {
    addPreviewOldImg.src = EMPTY_PREVIEW_IMAGE_SRC;
    addPreviewOldImg.classList.add("is-missing");
  }
  if (version === addPreviewCheckVersion && addFormStatus) {
    const t = textFor();
    if (!newExists && !oldExists) {
      addFormStatus.textContent = t.addFlairNotFound || uiText.en_us.addFlairNotFound;
    } else if (typedId && idExistsInArchive) {
      addFormStatus.textContent = t.addFlairIdExists || uiText.en_us.addFlairIdExists;
    } else {
      addFormStatus.textContent = "";
    }
  }
}

function scheduleAddPreviewCheck() {
  const t = textFor();
  const flairId = selectedAddFlairId();
  if (addFormStatus) {
    addFormStatus.textContent = flairId ? (t.addFlairCheckingId || uiText.en_us.addFlairCheckingId) : "";
  }
  clearTimeout(addPreviewDebounceTimer);
  addPreviewCheckVersion += 1;
  const version = addPreviewCheckVersion;
  addPreviewDebounceTimer = setTimeout(() => {
    updateAddFlairPreview(version);
  }, 1400);
}

async function handleAddKeywordsSubmit() {
  const flairId = selectedAddFlairId();
  const locale = toLocaleCode(addKeywordLanguage?.value || selectedLanguage);
  const keywords = parseKeywordsInput(addKeywordsInput?.value || "");
  const t = textFor();

  if (!flairId) {
    if (addFormStatus) addFormStatus.textContent = t.addFlairMissing || uiText.en_us.addFlairMissing;
    return;
  }

  if (addPreviewState.id !== flairId) {
    await updateAddFlairPreview();
  }
  const detectedNew = addPreviewState.id === flairId && addPreviewState.newExists;
  const detectedOld = addPreviewState.id === flairId && addPreviewState.oldExists;
  if (!detectedNew && !detectedOld) {
    if (addFormStatus) addFormStatus.textContent = t.addFlairNotFound || uiText.en_us.addFlairNotFound;
    return;
  }

  const existing = flairArchive.find((flair) => flair.id === flairId);
  const flair = existing || ensureFlairEntry(flairId);
  flair.hasNew = Boolean(flair.hasNew || detectedNew);
  if (detectedOld && addPreviewState.oldUrl) {
    googleOldResolvedUrl.set(flairId, addPreviewState.oldUrl);
  }

  if (keywords.length) {
    const invalidLanguageKeyword = keywords.find((kw) => !languageLooksValidForLocale(kw, locale));
    if (invalidLanguageKeyword) {
      if (addFormStatus) addFormStatus.textContent = t.addFlairInvalidLanguage || uiText.en_us.addFlairInvalidLanguage;
      return;
    }
    const invalidRelationKeyword = keywords.find((kw) => !keywordLooksRelevantToFlair(flairId, kw, locale));
    if (invalidRelationKeyword) {
      if (addFormStatus) addFormStatus.textContent = t.addFlairInvalidIdMatch || uiText.en_us.addFlairInvalidIdMatch;
      return;
    }
    mergeLocalizedKeywords(locale, flairId, keywords);
    if (locale === "en_us") {
      flair.keywords = dedupeKeywords([...(flair.keywords || []), ...keywords]);
    }
    await addTranslatedKeywordsToOtherLocales(flairId, locale, keywords);
    persistUserKeywordEntry({ id: flairId, locale, keywords });
  }

  await detectFlairAvailability(flair);

  if (!keywords.length) {
    if (addFormStatus) addFormStatus.textContent = t.addFlairDetected || uiText.en_us.addFlairDetected;
  } else {
    if (addFormStatus) addFormStatus.textContent = t.addFlairAdded || uiText.en_us.addFlairAdded;
  }
  if (addNewIdInput) addNewIdInput.value = "";
  if (addKeywordsInput) addKeywordsInput.value = "";
  setupAddFlairForm();
  render();
}

keywordSearch.addEventListener("input", (event) => {
  searchText = event.target.value.trim();
  currentSlideIndex = 0;
  render();
});

if (carouselPrev) {
  carouselPrev.addEventListener("click", () => {
    currentSlideIndex -= 1;
    updateCarouselControls(flairGrid.children.length);
  });
}

if (carouselNext) {
  carouselNext.addEventListener("click", () => {
    currentSlideIndex += 1;
    updateCarouselControls(flairGrid.children.length);
  });
}

if (addFlairToggle && addFlairPanel) {
  addFlairToggle.addEventListener("click", () => {
    openAddFlairModal();
  });
}

if (addFlairClose) {
  addFlairClose.addEventListener("click", () => closeAddFlairModal());
}

if (addFlairBackdrop) {
  addFlairBackdrop.addEventListener("click", () => closeAddFlairModal());
}

if (addIdSelect) {
  addIdSelect.addEventListener("change", () => {
    if (addNewIdInput) addNewIdInput.value = "";
    if (addFormStatus) addFormStatus.textContent = "";
    scheduleAddPreviewCheck();
  });
}

if (addNewIdInput) {
  addNewIdInput.addEventListener("input", () => {
    scheduleAddPreviewCheck();
  });
}

if (addKeywordLanguage) {
  addKeywordLanguage.addEventListener("change", () => {
    if (addFormStatus) addFormStatus.textContent = "";
  });
}

if (addKeywordsSubmit) {
  addKeywordsSubmit.addEventListener("click", async () => {
    await handleAddKeywordsSubmit();
  });
}

window.addEventListener("resize", () => {
  clearTimeout(resizeRenderTimer);
  resizeRenderTimer = setTimeout(() => render(), 120);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && addFlairPanel && !addFlairPanel.hidden) {
    closeAddFlairModal();
  }
});

async function init() {
  await loadLanguageDataset();
  await loadDiscoveryDataset();
  sanitizeKnownBadMappings();
  pruneInvalidStoredKeywords();
  applyUserStoredKeywords();
  sanitizeKnownBadMappings();
  await ensureUiTextLocale(selectedLanguage);
  applyUiLanguage();
  await loadGoogleAvailability();
  selectedLanguage = guessBrowserLanguage();
  if (!languageHasFlairs(selectedLanguage)) {
    selectedLanguage = "en_us";
  }
  await ensureUiTextLocale(selectedLanguage);
  applyUiLanguage();
  setupLanguageSelector();
  setupAddFlairForm();
  populateSuggestions();
  render();
}

init();


