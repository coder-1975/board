// ─────────────────────────────────────────────────────────────
//  THEMES
// ─────────────────────────────────────────────────────────────
const THEMES = {
  catppuccin: {
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
    "--tok-builtin": "#89dceb",
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
    "--tok-propositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-andor": "#e6a837",
    "--tok-verbing": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrations": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
    //--tok-objectpronouns:;
  },
  dracula: {
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
    "--tok-builtin": "#8be9fd",
    "--tok-string": "#f1fa8c",
    "--tok-template": "#f1fa8c",
    "--tok-number": "#bd93f9",
    "--tok-comment": "#6272a4",
    "--tok-regex": "#ffb86c",
    "--tok-operator": "#ff79c6",
    "--tok-punct": "#f8f8f2",
    "--tok-ident": "#f8f8f2",
    "--tok-classname": "#8be9fd",
    "--tok-funcname": "#50fa7b",
    "--tok-property": "#66d9e8",
    "--tok-boolean": "#bd93f9",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-propositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-andor": "#e6a837",
    "--tok-verbing": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrations": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
  "github-dark": {
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
    "--tok-builtin": "#79c0ff",
    "--tok-string": "#a5d6ff",
    "--tok-template": "#a5d6ff",
    "--tok-number": "#79c0ff",
    "--tok-comment": "#8b949e",
    "--tok-regex": "#7ee787",
    "--tok-operator": "#ff7b72",
    "--tok-punct": "#c9d1d9",
    "--tok-ident": "#c9d1d9",
    "--tok-classname": "#ffa657",
    "--tok-funcname": "#d2a8ff",
    "--tok-property": "#79c0ff",
    "--tok-boolean": "#79c0ff",
    "--tok-modelverb": "#802a3e",
    "--tok-article": "#6a8051",
    "--tok-propositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-andor": "#e6a837",
    "--tok-verbing": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrations": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
  solarized: {
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
    "--tok-builtin": "#2aa198",
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
    "--tok-propositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-andor": "#e6a837",
    "--tok-verbing": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrations": "rgb(89, 131, 55)",
    "--tok-subjectpronouns": "#f75205",
    "--tok-objectpronouns": "#1f5de4",
  },
  nord: {
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
    "--tok-builtin": "#88c0d0",
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
    "--tok-propositions": "#2f6662",
    "--tok-verbs": "#b13157",
    "--tok-adverbs": "#cf4a72",
    "--tok-adjectives": "#a8ad5d",
    "--tok-andor": "#e6a837",
    "--tok-verbing": "#8b445a",
    "--tok-questionwords": "#762586",
    "--tok-nouns": "#d1cf3a",
    "--tok-demonstrations": "rgb(89, 131, 55)",
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

const KEYWORDS = new Set(["dlo"]);
//verbs
const VERBS = new Set([
  "handle",
  "Handle",
  "handled",
  "Handled",
  "arise",
  "Arise",
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
  "seemed",
  "Seemed",
  "sound",
  "Sound",
  "sounded",
  "Sounded",
  "sounds",
  "Sounds",
  "seems",
  "Seems",
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
  "Stayed",
  "stayed",
  "play",
  "Play",
  "played",
  "Played",
  "try",
  "Try",
  "tried",
  "Tried",
  "fly",
  "flew",
  "flown",
  "bring",
  "Bring",
  "brought",
  "flies",
  "Fly",
  "Flied",
  "bite",
  "Bite",
  "bit",
  "bitten",
  "steal",
  "Steal",
  "stole",
  "stolen",
  "rise",
  "Rise",
  "rose",
  "risen",
  "throw",
  "Throw",
  "threw",
  "thrown",
  "fight",
  "Fight",
  "fought",
  "hold",
  "Hold",
  "held",
  "help",
  "Help",
  "helped",
  "ride",
  "Ride",
  "rode",
  "riden",
  "swim",
  "Swim",
  "swam",
  "swum",
  "lead",
  "Lead",
  "led",
  "burn",
  "Burn",
  "burnt",
  "read",
  "Read",
  "Write",
  "wrote",
  "written",
  "teach",
  "Teach",
  "taught",
  "speak",
  "Speak",
  "spoke",
  "spoken",
  "tell",
  "Tell",
  "told",
  "say",
  "Say",
  "said",
  "sell",
  "Sell",
  "sold",
  "buy",
  "Buy",
  "bought",
  "see",
  "See",
  "saw",
  "seen",
  "watch",
  "Watch",
  "watched",
  "look",
  "Look",
  "looked",
  "Smoke",
  "smoke",
  "smoked",
  "start",
  "Start",
  "started",
  "find",
  "Find",
  "found",
  "Found",
  "founded",
  "Founded",
  "finds",
  "founds",
  "Finds",
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
const DEMONSTRATIONS = new Set([
  "this",
  "This",
  "That",
  "that",
  "these",
  "These",
  "Those",
  "those",
]);
//but
const ANDOR = new Set(["and", "or", "but"]);
//propositions
const PROPOSITIONS = new Set([
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
// verbing
const VERBING = new Set([
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

const BUILTINS = new Set(["console"]);

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
  "old",
  "young",
  "Old",
  "Young",
  "big",
  "Big",
  "small",
  "Small",
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
  "Happy",
  "sad",
  "Sad",
  "good",
  "Good",
  "Bad",
  "bad",
  "smart",
  "Smart",
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
    // Template literal
    if (src[i] === "`") {
      let j = i + 1;
      while (j < len) {
        if (src[j] === "\\") {
          j += 2;
          continue;
        }
        if (src[j] === "`") {
          j++;
          break;
        }
        j++;
      }
      tokens.push({ type: "template", value: src.slice(i, j) });
      i = j;
      continue;
    }
    // String
    if (src[i] === '"' || src[i] === "'") {
      const q = src[i];
      let j = i + 1;
      while (j < len) {
        if (src[j] === "\\") {
          j += 2;
          continue;
        }
        if (src[j] === q) {
          j++;
          break;
        }
        if (src[j] === "\n") break;
        j++;
      }
      tokens.push({ type: "string", value: src.slice(i, j) });
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
      //const afterParen = /^(\s*)\(/.test(src.slice(j));
      let type = "identifier";
      if (KEYWORDS.has(word)) type = "keyword";
      //else if (BOOLEANS.has(word)) type = "boolean";
      else if (MODELVERBS.has(word)) type = "modelverb";
      //else if (BUILTINS.has(word)) type = "builtin";
      else if (DEMONSTRATIONS.has(word)) type = "demonstrations";
      else if (SUBJECTPRONOUNS.has(word)) type = "subjectpronouns";
      else if (OBJECTPRONOUNS.has(word)) type = "objectpronouns";
      else if (NOUNS.has(word)) type = "nouns";
      else if (ARTICLE.has(word)) type = "article";
      else if (VERBS.has(word)) type = "verbs";
      else if (ADVERBS.has(word)) type = "adverbs";
      else if (ADJECTIVES.has(word)) type = "adjectives";
      else if (ANDOR.has(word)) type = "andor";
      else if (VERBING.has(word)) type = "verbing";
      else if (PROPOSITIONS.has(word)) type = "propositions";
      else if (QUESTIONWORDS.has(word)) type = "questionwords";

      //else if (afterParen) type = "funcname";
      //else if (/^[A-Z]/.test(word)) type = "classname";
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
    if ("+-*/%=<>!&|^~?:".includes(op1)) {
      tokens.push({ type: "operator", value: op1 });
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
  /////////////////////////////////////////////////////
// Define the correct password
const correctPassword = "May Allah grant you health";

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


  /////////////////////////////////////////////////////
  
};

//--------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

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
