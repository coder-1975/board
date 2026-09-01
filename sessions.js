// use dictionary ......
import dic from "./dictionary.js";
import THEMES from "./themes.js";
// ─────────────────────────────────────────────────────────────
//  THEMES from themes.js
// ─────────────────────────────────────────────────────────────

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
      if (dic.KEYWORDS.has(word)) type = "keyword";
      else if (dic.MODELVERBS.has(word)) type = "modelverb";
      else if (dic.QUTTA.has(word)) type = "qutta";
      else if (dic.DEMONSTRATIVE_PRONOUNS.has(word))
        type = "demonstrative_pronouns";
      else if (dic.SUBJECTPRONOUNS.has(word)) type = "subjectpronouns";
      else if (dic.OBJECTPRONOUNS.has(word)) type = "objectpronouns";
      else if (dic.NOUNS.has(word)) type = "nouns";
      else if (dic.ARTICLE.has(word)) type = "article";
      else if (dic.VERBS.has(word)) type = "verbs";
      else if (dic.ADVERBS.has(word)) type = "adverbs";
      else if (dic.ADJECTIVES.has(word)) type = "adjectives";
      else if (dic.FANBOYS.has(word)) type = "fanboys";
      else if (dic.PRESENT_PARTICIPLE.has(word)) type = "present_participle";
      else if (dic.PREPOSITIONS.has(word)) type = "prepositions";
      else if (dic.QUESTIONWORDS.has(word)) type = "questionwords";
       else if (dic.CONJUNCTION.has(word)) type = "conjunctions";
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

function nextMeaningful(tokens, idx) {
  for (let j = idx + 1; j < tokens.length; j++)
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
 //++++++++++++++++++++(conjunction worked)+++++++++++++++++++++++++++++++++++++
    if (tok.type === "conjunctions") {
      
      const next = nextMeaningful(tokens, i);
      if (next.type==="nouns" || next.type ==="objectpronouns") {
          html += `<span class="tok-prepositions" title="${tok.type}">${tok.value}</span>`;
      } else {
        html += `<span class="tok-conjunctions" title="${tok.type}">${tok.value}</span>`;
      }
      if(tok.value==="if" || tok.value==="If" && tok.value==="only"){
         html += `<span class="tok-conjunctions" title="${tok.type}"></span>`;
      }
     
      continue;
    }

    //++++++++++++++++++++(adjectives worked)+++++++++++++++++++++++++++++++++++++
    if (tok.type === "adjectives") {
      const next = nextMeaningful(tokens, i);
      const prev = prevMeaningful(tokens, i);
      if (prev.value === "the" || prev.value === "The") {
        if (next.type === "nouns") {
          html += `<span class="tok-adjectives" title="${tok.type}">${tok.value}</span>`;
          continue;
        } else {
          html += `<span class="tok-nouns" title="${tok.type}">${tok.value}</span>`;
          continue;
        }
      } else {
        html += `<span class="tok-adjectives" title="${tok.type}">${tok.value}</span>`;
        continue;
      }
    }

    //--------------------------------------------------------------

    //++++++++++++++++++++(verb worked)+++++++++++++++++++++++++++++++++++++
    if (tok.type === "verbs") {
      const prev = prevMeaningful(tokens, i);
      if (prev.type === "article" || prev.type === "adjectives" || prev.type==="prepositions") {
        html += `<span class="tok-nouns" title="${tok.type}">${tok.value}</span>`;
        continue;
      } else {
        html += `<span class="tok-verbs" title="${tok.type}">${tok.value}</span>`;
        continue;
      }
    }

    //--------------------------------------------------------------

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
    html += `<span class="tok-${tok.type}" >${esc(tok.value)}</span>`;
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
          https://www.youtube.com/watch?v=7gJFHjXscr8
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



