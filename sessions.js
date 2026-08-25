// ─────────────────────────────────────────────────────────────
//  THEMES
// ─────────────────────────────────────────────────────────────
const THEMES = {
  catppuccin: {
    "---tok-qutta": "#cee478",
    "--bg-body": "#1e1e2e",
    "--bg-header": "#181825",
    "--bg-output": "#11111b",
    "--bg-lnums": "#181825",
    "--border": "#313244",
    "--text-main": "#cdd6f4",
    "--text-muted": "#6c7086",
    "--text-lnums": "#45475a",
    "--caret": "#cdd6f4",
    "--tok-keyword": "#cba6f7",

    "--tok-string": "#a6e3a1",
    "--tok-template": "#a6e3a1",
    "--tok-number": "#fab387",
    "--tok-comment": "#6c7086",
    "--tok-regex": "#f2cdcd",
    "--tok-operator": "#89b4fa",
    "--tok-punct": "#cdd6f4",
    "--tok-ident": "#cdd6f4",
    "--tok-classname": "#f9e2af",
    "--tok-funcname": "#89b4fa",
    "--tok-property": "#f2cdcd",
    "--tok-boolean": "#fab387",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-prepositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-fanboys": "#e6a837",
    "--tok-present_participle": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrative_pronouns": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
    //--tok-objectpronouns:;
  },
  dracula: {
    "---tok-qutta": "#cee478",
    "--bg-body": "#282a36",
    "--bg-header": "#1e1f29",
    "--bg-output": "#191a21",
    "--bg-lnums": "#1e1f29",
    "--border": "#44475a",
    "--text-main": "#f8f8f2",
    "--text-muted": "#6272a4",
    "--text-lnums": "#44475a",
    "--caret": "#f8f8f2",
    "--tok-keyword": "#ff79c6",
  
    "--tok-string": "#f1fa8c",
    "--tok-template": "#f1fa8c",
    "--tok-number": "#bd93f9",
    "--tok-comment": "#6272a4",
    "--tok-regex": "#ffb86c",
    "--tok-operator": "#f581c3",
    "--tok-punct": "#e9e98b",
    "--tok-ident": "#f8f8f2",
    "--tok-classname": "#8be9fd",
    "--tok-funcname": "#50fa7b",
    "--tok-property": "#66d9e8",
    "--tok-boolean": "#bd93f9",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-prepositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-fanboys": "#e6a837",
    "--tok-present_participle": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrative_pronouns": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
  "github-dark": {
    "---tok-qutta": "#cee478",
    "--bg-body": "#0d1117",
    "--bg-header": "#010409",
    "--bg-output": "#010409",
    "--bg-lnums": "#010409",
    "--border": "#30363d",
    "--text-main": "#c9d1d9",
    "--text-muted": "#484f58",
    "--text-lnums": "#484f58",
    "--caret": "#c9d1d9",
    "--tok-keyword": "#ff7b72",
   
    "--tok-string": "#a5d6ff",
    "--tok-template": "#a5d6ff",
    "--tok-number": "#79c0ff",
    "--tok-comment": "#8b949e",
    "--tok-regex": "#7ee787",
    "--tok-operator": "#ff7b72",
    "--tok-punct": "#e9e98b",
    "--tok-ident": "#c9d1d9",
    "--tok-classname": "#ffa657",
    "--tok-funcname": "#d2a8ff",
    "--tok-property": "#79c0ff",
    "--tok-boolean": "#79c0ff",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-prepositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-fanboys": "#e6a837",
    "--tok-present_participle": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrative_pronouns": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
  solarized: {
    "---tok-qutta": "#cee478",
    "--bg-body": "#002b36",
    "--bg-header": "#00212b",
    "--bg-output": "#00181f",
    "--bg-lnums": "#00212b",
    "--border": "#073642",
    "--text-main": "#839496",
    "--text-muted": "#586e75",
    "--text-lnums": "#586e75",
    "--caret": "#93a1a1",
    "--tok-keyword": "#859900",

    "--tok-string": "#2aa198",
    "--tok-template": "#2aa198",
    "--tok-number": "#d33682",
    "--tok-comment": "#586e75",
    "--tok-regex": "#cb4b16",
    "--tok-operator": "#859900",
    "--tok-punct": "#839496",
    "--tok-ident": "#839496",
    "--tok-classname": "#b58900",
    "--tok-funcname": "#268bd2",
    "--tok-property": "#6c71c4",
    "--tok-boolean": "#cb4b16",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-prepositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-fanboys": "#e6a837",
    "--tok-present_participle": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrative_pronouns": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
  nord: {
    "---tok-qutta": "#cee478",
    "--bg-body": "#2e3440",
    "--bg-header": "#242933",
    "--bg-output": "#1c2028",
    "--bg-lnums": "#242933",
    "--border": "#3b4252",
    "--text-main": "#d8dee9",
    "--text-muted": "#4c566a",
    "--text-lnums": "#4c566a",
    "--caret": "#eceff4",
    "--tok-keyword": "#81a1c1",
    "--tok-string": "#a3be8c",
    "--tok-template": "#a3be8c",
    "--tok-number": "#b48ead",
    "--tok-comment": "#4c566a",
    "--tok-regex": "#ebcb8b",
    "--tok-operator": "#81a1c1",
    "--tok-punct": "#d8dee9",
    "--tok-ident": "#d8dee9",
    "--tok-classname": "#8fbcbb",
    "--tok-funcname": "#88c0d0",
    "--tok-property": "#8fbcbb",
    "--tok-boolean": "#b48ead",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-prepositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-fanboys": "#e6a837",
    "--tok-present_participle": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrative_pronouns": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
};

function applyTheme(name) {
  const vars = THEMES[name];
  if (!vars) return;
  const root = document.documentElement;
  for (const [prop, val] of Object.entries(vars)) {
    root.style.setProperty(prop, val);
  }
  localStorage.setItem("board-theme", name);
}

// ─────────────────────────────────────────────────────────────
//  TOKENIZER
// ─────────────────────────────────────────────────────────────
const QUTTA = new Set([]);
const KEYWORDS = new Set([]);
//verbs
const VERBS = new Set([
  "change",
  "Change",
  "changes",
  "Changes",
  "changed",
  "Changed",
  "handle",
  "Handle",
  "handles",
  "Handles",
  "handled",
  "Handled",
  "arise",
  "Arise",
  "arises",
  "Arises",
  "arose",
  "Arose",
  "arisen",
  "Arisen",
  "destroy",
  "Destroy",
  "destroys",
  "Destroys",
  "destroyed",
  "Destroyed",
  "hate",
  "Hate",
  "hated",
  "Hated",
  "hates",
  "Hates",
  "love",
  "loved",
  "loves",
  "Love",
  "Loved",
  "Loves",
  "seem",
  "Seem",

    "seems",
  "Seems",
  "seemed",
  "Seemed",
  "sound",
  "Sound",
  "sounded",
  "Sounded",
  "sounds",
  "Sounds",
  "be",
  "is",
  "am",
  "are",
  "Be",
  "Is",
  "Am",
  "Are",
  "was",
  "Was",
  "Were",
  "been",
  "do",
  "does",
  "did",
  "done",
  "stay",
  "Stay",
   "stays",
  "Stays",
  "Stayed",
  "stayed",
  "play",
  "Play",
  "plays",
  "Plays",
  "played",
  "Played",
  "try",
  "Try",
  "tries",
  "Tries",
  "tried",
  "Tried",
  "fly",
  "flies",
  "flew",
  "flown",
  "bring",
  "Bring",
  "brings",
  "Brings",
  "brought",
  "Fly",
  "Flied",
  "bite",
  "Bite",
    "bites",
  "Bites",
  "bit",
  "bitten",
  "steal",
  "Steal",
  "steals",
  "Steals",
  "stole",
  "stolen",
  "rise",
  "Rise",
  "rises",
  "Rises",
  "rose",
  "risen",
  "throw",
  "Throw",
   "throws",
  "Throws",
  "threw",
  "thrown",
  "fight",
  "Fight",
  "fights",
  "Fights",
  "fought",
  "hold",
  "Hold",
   "holds",
  "Holds",
  "held",
  "help",
  "Help",
  "helps",
  "Helps",
  "helped",
  "ride",
  "Ride",
  "rides",
  "Rides",
  "rode",
  "riden",
  "swim",
  "Swim",
  "swims",
  "Swims",
  "swam",
  "swum",
  "lead",
  "Lead",
    "leads",
  "Leads",
  "led",
  "burn",
  "Burn",
  "burnt",
  "read",
  "Read",
   "reads",
  "Reads",
  "Write",
    "Writes",
  "wrote",
  "written",
  "teach",
  "Teach",
  "teaches",
  "Teaches",
  "taught",
  "speak",
  "Speak",
    "speaks",
  "Speaks",
  "spoke",
  "spoken",
  "tell",
  "Tell",
  "tells",
  "Tells",
  "told",
  "say",
  "Say",
   "says",
  "Says",
  "said",
  "sell",
  "Sell",
  "sells",
  "Sells",
  "sold",
  "buy",
  "Buy",
   "buys",
  "Buys",
  "bought",
  "see",
  "See",
  "sees",
  "Sees",
  "saw",
  "seen",
  "watch",
  "Watch",
    "watches",
  "Watches",
  "watched",
  "look",
  "Look",
   "looks",
  "Looks",
  "looked",
  "Smoke",
  "smoke",
  "Smokes",
  "smokes",
  "smoked",
  "start",
  "Start",
   "starts",
  "Starts",
  "started",
  "find",
  "Find",
   "finds",
  "Finds",
  "found",
  "Found",
  "founded",
  "Founded",
 
  "founds",
  "Founds",
  "kill",
  "Kill",
  "kills",
  "Kills",
  "killed",
  "Killed",
  "feel",
  "Feel",
  "feels",
  "Feels",
  "felt",
  "Felt",
]);
//nouns not verbs
const NOUNS = new Set([
  "word",
  "Word",
  "words",
  "Words",
  "fly",
  "flies",
  "Flies",
  "Fly",
  "Schools",
  "schools",
  "school",
  "School",
  "Home",
  "home",
  "house",
  "House",
  "Houses",
  "Homes",
  "homes",
  "cat",
  "Cat",
  "dog",
  "door",
  "Door",
  "Doors",
  "doors",
  "mate",
  "Mate",
  "mates",
  "Mates",
  "schoolmates",
  "schoolmate",
  "Schoolmate",
  "Schoolmates",
  "roommate",
  "Roommate",
  "Roommates",
  "roommayes",
  "cow", //https://learnenglishkids.britishcouncil.org/listen-watch/songs/old-lady-who-swallowed-fly
  "Cow",
  "cows",
  "Cows",
  "spider",
  "Spider",
  "spiders",
  "Spiders",
  "Dog",
  "Dogs",
  "Cats",
  "dogs",
  "cats",
  "lady",
  "Lady",
  "man",
  "men",
  "Man",
  "kid",
  "Kid",
  "kids",
  "Kids",
  "child",
  "Child",
  "children",
  "Children",
  "mom",
  "Mom",
  "dad",
  "Dad",
  "mother",
  "Mother",
  "father",
  "Father",
]);
const ADVERBS = new Set([
  "absolutely",
  "completely",
  "totally",
  "later",
  "Later",
  "recently",
  "fast",
  "quickly",
  "carefully",
  "lately",
  "very",
  "too",
  "soon",
  "frequently",
  "sometimes",
  "rarelly",
  "often",
  "always",
  "never",
  "well",
  "commercially",
  "locally",
  "internationally",
]);
//Demonstrative pronouns
const DEMONSTRATIVE_PRONOUNS = new Set([
  "this",
  "This",
  "That",
  "that",
  "these",
  "These",
  "Those",
  "those",
]);
//Coordinating conjunctions
const FANBOYS = new Set(["for","and", "nor","but", "or",,"yet","so"]);
//prepositions
const PREPOSITIONS= new Set([
  "in",
  "In",
  "on",
  "On",
  "between",
  "Between",
  "of",
  "Of",
  "off",
  "Off",
  "with",
  "With",
  "about",
  "About",
  "from",
  "From",
  "To",
  "to",
  "by",
  "By",
  "at",
  "At",
  "against",
  "Against",
  "around",
  "Around",
  "through",
  "Through",
  "before",
  "Before",
  "After",
  "after",
  "Above",
  "above",
  "Below",
  "below",
  "during",
  "During",
  "into",
  "Into",
  "along",
  "Along",
  "behind",
  "Behind",
  "beside",
  "Beside",
  "next",
  "front",
  "under",
  "Under",
  "among",
  "Among",
  "near",
  "Near",
  "across",
  "Across",
  "onto",
  "Onto",
  "over",
  "Over",
  "toward",
  "Toward",
]);
// articles colored orange
const ARTICLE = new Set(["a", "A", "an", "An", "the", "The"]);
// subject pronouns colored orange
const SUBJECTPRONOUNS = new Set([
  "I",
  "i",
  "You",
  "He",
  "he",
  "She",
  "she",
  "They",
  "they",
  "We",
  "we",
  "It",
  "it",
]);
// object pronouns colored orange
const OBJECTPRONOUNS = new Set([
  "me",
  "Me",
  "you",
  "Him",
  "him",
  "Her",
  "her",
  "Them",
  "them",
  "Us",
  "us",
  "It",
  "it",
]);
// model verbs
const MODELVERBS = new Set([
  "will",
  "Will",
  "would",
  "Wolud",
  "can",
  "Can",
  "could",
  "Could",
  "shall",
  "Shall",
  "Should",
  "should",
  "may",
  "May",
  "might",
  "Might",
  "must",
  "Must",
  "ought to",
  "Ought to",
]);
// present_participle
const PRESENT_PARTICIPLE = new Set([
  "getting",
  "going",
  "sleeping",
  "doing",
  "being",
  "seeing",
  "having",
  "trying",
  "Tring",
  "Having",
  "Sleeping",
  "Doing",
  "Being",
  "Getting",
  "Seeing",
  "helping",
  "Helping",
  "Teaching",
  "teaching",
  "reading",
  "Reading",
  "writing",
  "Writing",
  "playing",
  "Playing",
  "saying",
  "Saying",
]);

const BOOLEANS = new Set(["NaN"]);
const QUESTIONWORDS = new Set([
  "Who",
  "who",
  "What",
  "what",
  "Which",
  "which",
  "Where",
  "where",
  "When",
  "when",
  "Whose",
  "whose",
]);
const ADJECTIVES = new Set([
  "awesome",
  "Awesome",
  "blue",
  "Blue",
  "tall",
  "Tall",
  "soft",
  "Soft",
  "old",
  "young",
  "Old",
  "Young",
  "ancient",
  "Ancient",
  "fast",
  "Fast",
  "slow",
  "Slow",
  "big",
  "Big",
  /* appearance */
  "attractive",
  "Attractive",
  "bald",
  "Bald",
  "chubby",
  "Chubby",
  "clean",
  "Clean",
  "dazzling",
  "Dazzling",
  "drab",
  "Drab",
  "elegant",
  "Elegant",
  "fancy",
  "Fancy",
  "fit",
  "Fit",
  "flabby",
  "Flabby",
  "glamorous",
  "Glamorous",
  "gorgeous",
  "Gorgeous",
  "handsome",
  "Handsome",
  "magnificent",
  "Magnificent",
  "mascular",
  "Mascular",
  "plain",
  "Plain",
  "plump",
  "Plump",
  "scruffy",
  "Scruffy",
  "shapely",
  "shapely",
  "skinny",
  "Skinny",
  "stocky",
  "Stocky",
  "unkempt",
  "Unkempt",
  "unsightly",
  "Unsightly",
  /* appearance */
  /* positive personality */
   "agreeable",
   "Agreeable",
   "ambitious",
   "Ambitious",
   "brave",
  "Brave",
  "calm",
  "Calm",
  "delightful",
  "Delightful",
  "eager",
  "Eager",
"faithful",
"Faithful",
"gentle",
"Gentle",
 "Happy",
 "happy",
 "jolly",
 "Jolly",
  "kind",
  "Kind",
  "lively",
  "Lively",
  "nice",
  "Nice",
  "obedient",
  "Obedient",
  "polite",
  "Polite",
  "proud",
  "Proud",
  "silly",
  "Silly",
  "thankful",
  "Thankful",
  "victorious",
  "Victorious",
  "witty",
  "Witty",
  "wonderful",
  "Wonderful",
  "zealous",
  "Zealous",
  /* negative personality */
  "angry",
  "bewildered",
  "Bewildered",
  "clumsy",
  "clumsy",
  "defeated",
  "Defeated",
  "embarrassed",
  "Embarrassed",
  "fierce",
  "Fierce",
  "grumpy",
  "Grumpy",
  "helpless",
  "Helpless",
  "itchy",
  "Itchy",
  "jealous",
  "Jealous",
  "lazy",
  "Lazy",
  "mysterious",
  "Mysterious",
  "nervous",
  "Nervous",
  "obnoxious",
  "panicky",
  "Panicky",
  "pitiful",
  "Pitiful",
  "repulsive",
  "repulsive",
  "scary",
  "Scary",
  "thoughtless",
  "Thoughtless",
  "uptight",
  "Uptight",
  "worried",
  "Worried",
  /* negative */
  /* size */
  "big",
  "colossal",
  "fat",
  "Colossal",
  "Fat",
  "gigantic",
  "Gigantic",
  "great",
  "Great",
  "huge",
  "Huge",
  "immense",
  "Immense",
  "large",
  "Large",
  "little",
  "Little",
  "mammoth",
  "Mammoth",
  "massive",
  "Massive",
  "microscopic",
  "Microscopic",
  "miniature",
  "Miniature",
  "petite",
  "Petite",
  "puny",
  "Puny",
  "scrawny",
  "Scrawny",
  "short",
  "Short",
  "small",
  "Small",
  "tall",
  "Tall",
  "teeny",
  "Teeny",
  "tiny",
  "Tiny",
  "ugly",
  "Ugly",

  "beautiful",
  "Beautiful",
  "hungry",
  "Hungry",
  "hard",
  "Hard",
  "easy",
  "Easy",
  "new",
  "New",
  "tired",
  "Tired",
  "exhausted",
  "happy",
  "Exhausted",
 
  "sad",
  "Sad",
  "angry",
  "Angry",
  
  
  "bored",
  "Bored",
  "good",
  "sweet",
  "Sweet",
  "sour",
  "Sour",
  "salty",
  "Salty",
  "bitter",
  "spicy",
  "Bitter",
  "Spicy",
  "Good",
  "Bad",
  "bad",
  "smart",
  "Smart",
  "all",
  "All",
  "some",
  "Some",
  "many",
  "Many",
  "few",
  "Few",
  "this",
  "that",
  "these",
  "those",
  "my",
  "My",
  "your",
  "Your",
  "their",
  "Their",
  "his",
  "His",
  "which",
  "Which",
  "what",
  "What",
  "Whose",
  "whose"
]);

function tokenise(src) {
  const tokens = [];
  let i = 0;
  const len = src.length;

  while (i < len) {
    // Line comment
    if (src[i] === "/" && src[i + 1] === "/") {
      let j = i;
      while (j < len && src[j] !== "\n") j++;
      tokens.push({ type: "comment", value: src.slice(i, j) });
      i = j;
      continue;
    }
    // Block comment
    if (src[i] === "/" && src[i + 1] === "*") {
      let j = i + 2;
      while (j < len && !(src[j] === "*" && src[j + 1] === "/")) j++;
      j += 2;
      tokens.push({ type: "comment", value: src.slice(i, j) });
      i = j;
      continue;
    }

    // Number
    if (/[0-9]/.test(src[i]) || (src[i] === "." && /[0-9]/.test(src[i + 1]))) {
      let j = i;
      if (src[j] === "0" && /[xX]/.test(src[j + 1])) {
        j += 2;
        while (j < len && /[0-9a-fA-F_]/.test(src[j])) j++;
      } else if (src[j] === "0" && /[bB]/.test(src[j + 1])) {
        j += 2;
        while (j < len && /[01_]/.test(src[j])) j++;
      } else if (src[j] === "0" && /[oO]/.test(src[j + 1])) {
        j += 2;
        while (j < len && /[0-7_]/.test(src[j])) j++;
      } else {
        while (j < len && /[0-9_]/.test(src[j])) j++;
        if (j < len && src[j] === ".") {
          j++;
          while (j < len && /[0-9_]/.test(src[j])) j++;
        }
        if (j < len && /[eE]/.test(src[j])) {
          j++;
          if (/[+-]/.test(src[j])) j++;
          while (j < len && /[0-9]/.test(src[j])) j++;
        }
        if (j < len && src[j] === "n") j++;
      }
      tokens.push({ type: "number", value: src.slice(i, j) });
      i = j;
      continue;
    }
    // Identifier / keyword
    if (/[a-zA-Z_$]/.test(src[i])) {
      let j = i;
      while (j < len && /[a-zA-Z0-9_$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      let type = "identifier";
      if (KEYWORDS.has(word)) type = "keyword";
      else if (MODELVERBS.has(word)) type = "modelverb";
      else if (QUTTA.has(word)) type = "qutta";
      else if (DEMONSTRATIVE_PRONOUNS.has(word)) type = "demonstrative_pronouns";
      else if (SUBJECTPRONOUNS.has(word)) type = "subjectpronouns";
      else if (OBJECTPRONOUNS.has(word)) type = "objectpronouns";
      else if (NOUNS.has(word)) type = "nouns";
      else if (ARTICLE.has(word)) type = "article";
      else if (VERBS.has(word)) type = "verbs";
      else if (ADVERBS.has(word)) type = "adverbs";
      else if (ADJECTIVES.has(word)) type = "adjectives";
      else if (FANBOYS.has(word)) type = "fanboys";
      else if (PRESENT_PARTICIPLE.has(word)) type = "present_participle";
      else if (PREPOSITIONS.has(word)) type = "prepositions";
      else if (QUESTIONWORDS.has(word)) type = "questionwords";
      tokens.push({ type, value: word });
      i = j;
      continue;
    }
    // Regex (heuristic)
    const lastTok = tokens[tokens.length - 1];
    const regexOk =
      !lastTok || ["keyword", "operator", "punctuation"].includes(lastTok.type);
    if (src[i] === "/" && regexOk) {
      let j = i + 1;
      while (j < len) {
        if (src[j] === "\\") {
          j += 2;
          continue;
        }
        if (src[j] === "[") {
          while (j < len && src[j] !== "]") {
            if (src[j] === "\\") j++;
            j++;
          }
          j++;
          continue;
        }
        if (src[j] === "/") {
          j++;
          break;
        }
        if (src[j] === "\n") break;
        j++;
      }
      while (j < len && /[gimsuy]/.test(src[j])) j++;
      tokens.push({ type: "regex", value: src.slice(i, j) });
      i = j;
      continue;
    }
    // 3-char operators
    const op3 = src.slice(i, i + 3);
    if (["===", "!==", ">>>", "**=", "&&=", "||=", "??="].includes(op3)) {
      tokens.push({ type: "operator", value: op3 });
      i += 3;
      continue;
    }
    // 2-char operators
    const op2 = src.slice(i, i + 2);
    if (
      [
        "==",
        "!=",
        "<=",
        ">=",
        "&&",
        "||",
        "??",
        "++",
        "--",
        "**",
        "+=",
        "-=",
        "*=",
        "/=",
        "%=",
        "&=",
        "|=",
        "^=",
        "<<",
        ">>",
        "=>",
        "?.",
      ].includes(op2)
    ) {
      tokens.push({ type: "operator", value: op2 });
      i += 2;
      continue;
    }
    // 1-char operators
    const op1 = src[i];
    if ('"+-*/%=<>!&|^~?:'.includes(op1)) {
      tokens.push({ type: "punctuation", value: op1 });
      i++;
      continue;
    }
    if ("`'".includes(op1)) {
      tokens.push({ type: "punctuation", value: op1 });
      i++;
      continue;
    }
    // Punctuation
    if ("#\\(){}[];,.".includes(op1)) {
      tokens.push({ type: "punctuation", value: op1 });
      i++;
      continue;
    }
    tokens.push({ type: "text", value: op1 });
    i++;
  }
  return tokens;
}

function esc(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function prevMeaningful(tokens, idx) {
  for (let j = idx - 1; j >= 0; j--)
    if (tokens[j].type !== "text") return tokens[j];
  return null;
}

function tokensToHTML(tokens) {
  let html = "";
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.type === "text") {
      html += esc(tok.value);
      continue;
    }

    if (
      tok.type === "identifier" ||
      tok.type === "funcname" ||
      tok.type === "classname"
    ) {
      const prev = prevMeaningful(tokens, i);
      if (prev?.type === "keyword" && prev.value === "class") {
        html += `<span class="tok-classname">${esc(tok.value)}</span>`;
        continue;
      }
      if (
        prev?.type === "keyword" &&
        (prev.value === "function" || prev.value === "async")
      ) {
        html += `<span class="tok-funcname">${esc(tok.value)}</span>`;
        continue;
      }
      if (prev?.type === "punctuation" && prev.value === ".") {
        html += `<span class="tok-property">${esc(tok.value)}</span>`;
        continue;
      }
    }
    if (tok.type === "comment") {
      let display = tok.value;
      if (display.startsWith("//")) {
        display = display.slice(2);
      } else if (display.startsWith("/*") && display.endsWith("*/")) {
        display = display.slice(2, -2);
      } else if (display.startsWith("/*")) {
        display = display.slice(2);
      }
      html += `<span class="tok-comment">${esc(display)}</span>`;
      continue;
    }
    html += `<span class="tok-${tok.type}">${esc(tok.value)}</span>`;
  }
  return html;
}

// ─────────────────────────────────────────────────────────────
//  EDITOR
// ─────────────────────────────────────────────────────────────

const codeInput = document.getElementById("codeInput");
const highlight = document.getElementById("highlight");
const lineNumbers = document.getElementById("lineNumbers");

//--------------------------------------------------------------------------------------------------------------------

//---------- teacher info -------------------------------------
let greet = "Welcome to your session!";
let mrms = "Mr.";
let tname = "Ibrahim Elsebaey";
let temail = "himodemo41@gmail.com";
let ttel = "+201274179870";
const tcard = document.createElement("div");
tcard.id = "myidcard";
document.body.appendChild(tcard);
const frm = document.createElement("form");
frm.id = "tform";
tcard.appendChild(frm);
const tnames = document.createElement("input");
const tfones = document.createElement("input");
const temails = document.createElement("input");
const tgreets = document.createElement("input");
const tmrms = document.createElement("input");
const btnteacher = document.createElement("button");
frm.appendChild(tgreets);
frm.appendChild(tmrms);
frm.appendChild(tnames);
frm.appendChild(temails);
frm.appendChild(tfones);
frm.appendChild(btnteacher);

btnteacher.id = "btn_t";
btnteacher.innerText = "INFO";
tnames.placeholder = "TYPE YOUR NAME";
tnames.onchange = (e) => {
  e.preventDefault();
  e.target.value ? (tname = e.target.value) : (tname = tname);
  //tname = e.target.value;
};
tgreets.placeholder = "TYPE YOUR GREET";
tgreets.onchange = (e) => {
  e.preventDefault();
  //greet = e.target.value;
  e.target.value ? (greet = e.target.value) : (greet = greet);
};

temails.placeholder = "TYPE YOUR EMAIL";
temails.onchange = (e) => {
  e.preventDefault();
  //temail = e.target.value;
  e.target.value ? (temail = e.target.value) : (temail = temail);
};
tfones.placeholder = "TYPE YOUR PHONE";
tfones.onchange = (e) => {
  e.preventDefault();
  //ttel = e.target.value;
  e.target.value ? (ttel = e.target.value) : (ttel = ttel);
};
tmrms.placeholder = "TYPE YOUR TITLE";
tmrms.onchange = (e) => {
  e.preventDefault();
  mrms = e.target.value;
  e.target.value ? (mrms = e.target.value) : (mrms = mrms);
};

btnteacher.onclick = (e) => {
  e.preventDefault();
  tgreets.value ? (greet = tgreets.value) : (greet = greet);
  //mrms = tmrms.value;
  tmrms.value ? (mrms = tmrms.value) : (mrms = mrms);
  //tname = tnames.value;
  tnames.value ? (tname = tnames.value) : (tname = tname);
  //temail = temails.value;
  temails.value ? (temail = temails.value) : (temail = temail);
  //ttel = tfones.value;
  tfones.value ? (ttel = tfones.value) : (ttel = ttel);
  codeInput.value = buildDefaultCode();
  updateHighlight();
  updateLineNumbers();

  // Define the correct password
  const correctPassword = "123"; // May Allah grant you health

  // Ask the user for the password
  let userInput = prompt("Please enter your password:");

  // Check if the password is right or wrong
  if (userInput === correctPassword) {
    alert("Access granted! The password is correct.");
    document.getElementById("board").style.display = "flex";
    tcard.style.display = "none";
  } else if (userInput === null) {
    alert("Prompt canceled.");
  } else {
    alert("Access denied! Incorrect password.");
  }
};

//-------------------------------------------------------------
function buildDefaultCode() {
  return `/*        -----------------------------------------------
        ${greet} ⚡ ${mrms} ${tname}
          📧 ${temail}   📞 ${ttel}
        ------------------------------------------------*/`;
}

codeInput.value = buildDefaultCode();
updateHighlight();
updateLineNumbers();

function updateHighlight() {
  highlight.innerHTML = tokensToHTML(tokenise(codeInput.value)) + "\n";
}
function updateLineNumbers() {
  const n = codeInput.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: n }, (_, i) => i + 1).join(
    "\n",
  );
}

codeInput.addEventListener("scroll", () => {
  highlight.scrollTop = codeInput.scrollTop;
  highlight.scrollLeft = codeInput.scrollLeft;
  lineNumbers.scrollTop = codeInput.scrollTop;
});
codeInput.addEventListener("input", () => {
  updateHighlight();
  updateLineNumbers();
});

codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const s = codeInput.selectionStart,
      end = codeInput.selectionEnd;
    codeInput.value =
      codeInput.value.slice(0, s) + "  " + codeInput.value.slice(end);
    codeInput.selectionStart = codeInput.selectionEnd = s + 2;
    updateHighlight();
    updateLineNumbers();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }
});

// ─────────────────────────────────────────────────────────────
//  BUTTONS & THEME SELECTOR
// ─────────────────────────────────────────────────────────────

document.getElementById("resetBtn").addEventListener("click", () => {
  codeInput.value = buildDefaultCode();
  updateHighlight();
  updateLineNumbers();
});

const themeSelect = document.getElementById("themeSelect");
themeSelect.addEventListener("change", () => applyTheme(themeSelect.value));

// Restore saved theme on load
const savedTheme = localStorage.getItem("board-theme") || "catppuccin";
themeSelect.value = savedTheme;
applyTheme(savedTheme);
