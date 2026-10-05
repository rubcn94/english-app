'use strict';
// Minimal DOM shim for running app.js headless under Node's vm module.
// Not a general-purpose DOM — only implements what app.js actually calls:
// classList (add/remove/contains/toggle), textContent, innerHTML (as an
// opaque string — no real HTML parsing), style, dataset, appendChild,
// querySelector/querySelectorAll (by #id, .class, and the one attribute
// selector app.js uses: `.glossary-item[data-id="..."]`), and a real
// document.createElement() that returns nodes participating in the same
// tree so selectors work inside dynamically-built subtrees (e.g. the
// multiple-choice button groups built at render time).
//
// Every element app.js/index.html references by id must exist up front —
// app.js never checks for null before calling .textContent etc, so a
// missing id throws instead of silently no-op'ing, which is what we want:
// a missing id in this shim is itself a signal the shim fell behind
// index.html.

class ClassList {
  constructor(el) { this._el = el; this._set = new Set(); }
  add(...names) { names.forEach(n => this._set.add(n)); }
  remove(...names) { names.forEach(n => this._set.delete(n)); }
  toggle(name, force) {
    const has = this._set.has(name);
    const want = force === undefined ? !has : !!force;
    if (want) this._set.add(name); else this._set.delete(name);
    return want;
  }
  contains(name) { return this._set.has(name); }
  get value() { return [...this._set].join(' '); }
}

class Node {
  constructor(tag, id) {
    this.tagName = (tag || 'div').toUpperCase();
    this.id = id || '';
    this.children = [];
    this.parent = null;
    this.classList = new ClassList(this);
    this.style = {};
    this.dataset = {};
    this._text = '';
    this._html = '';
    this._value = '';
    this.disabled = false;
    this.onclick = null;
    this.onkeydown = null;
    this._attrs = {};
  }

  get className() { return this.classList.value; }
  set className(v) {
    this.classList._set = new Set(String(v).split(/\s+/).filter(Boolean));
  }

  get textContent() { return this._text; }
  set textContent(v) { this._text = v == null ? '' : String(v); this.children = []; this._html = ''; }

  // innerHTML is opaque here — app.js only ever WRITES html strings for
  // static display (never reads them back to re-parse), except innerHTML=''
  // to clear a container before appendChild()-ing real nodes. So: writing
  // a non-empty string just clears children (matches "container.innerHTML
  // = ''" clearing pattern) and stores the string for tests that want to
  // assert on rendered text; it does NOT create traversable child nodes.
  get innerHTML() { return this._html; }
  set innerHTML(v) {
    this._html = v == null ? '' : String(v);
    this.children.forEach(c => { c.parent = null; });
    this.children = [];
  }

  get value() { return this._value; }
  set value(v) { this._value = v == null ? '' : String(v); }

  appendChild(child) {
    child.parent = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const i = this.children.indexOf(child);
    if (i >= 0) { this.children.splice(i, 1); child.parent = null; }
    return child;
  }

  focus() { /* no-op */ }
  click() { if (typeof this.onclick === 'function') this.onclick(); }

  // Depth-first traversal of this node's subtree (excluding itself).
  _descendants() {
    const out = [];
    for (const c of this.children) { out.push(c); out.push(...c._descendants()); }
    return out;
  }

  querySelectorAll(selector) {
    return matchAll(this._descendants(), selector);
  }
  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }
}

// Supports the handful of selector shapes app.js actually uses:
//   '#id', '.class', 'tag', '.class[data-id="value"]'
function matchAll(nodes, selector) {
  selector = selector.trim();
  const attrMatch = selector.match(/^(.*)\[data-id="([^"]*)"\]$/);
  if (attrMatch) {
    const base = attrMatch[1];
    const wantId = attrMatch[2];
    return matchAll(nodes, base).filter(n => n.dataset.id === wantId);
  }
  if (selector.startsWith('#')) {
    const id = selector.slice(1);
    return nodes.filter(n => n.id === id);
  }
  if (selector.startsWith('.')) {
    const cls = selector.slice(1);
    return nodes.filter(n => n.classList.contains(cls));
  }
  const tag = selector.toUpperCase();
  return nodes.filter(n => n.tagName === tag);
}

// Every element id app.js/index.html reference via getElementById. Grouped
// by screen/feature to make it obvious what's missing if app.js starts
// throwing "Cannot read properties of null" — that error means an id was
// added to index.html but not mirrored here.
const ALL_IDS = [
  // home
  'progress-blue', 'progress-green', 'progress-vocab', 'progress-sherlock',
  'stat-streak', 'stat-total', 'stat-due',
  'btn-study-due', 'due-badge', 'due-label', 'backup-status', 'backup-file-input',
  // book menu / sections
  'book-menu-title', 'section-list',
  // blocked study screen
  'study-title', 'study-counter', 'progress-bar-fill',
  'phase-theory', 'theory-counter', 'theory-front', 'theory-back', 'btn-theory-next',
  'theory-note-text', 'btn-theory-note',
  'phase-question', 'card-front-text', 'input-area', 'answer-input', 'freetext-area',
  'multi-blank-area',
  'phase-correction', 'correction-question', 'correction-your', 'correction-correct',
  'correction-extra', 'multi-blank-review',
  'correction-note-wrap', 'correction-note-text', 'btn-correction-note',
  // summary
  'sum-again', 'sum-hard', 'sum-good', 'sum-easy', 'btn-study-again',
  // glossary
  'glossary-title', 'glossary-counter', 'glossary-known-badge', 'glossary-list',
  'glossary-search', 'glossary-section-select', 'btn-glossary-study',
  'gb-blue', 'gb-green', 'gb-vocab', 'gb-phrasal', 'gb-sherlock',
  'gf-all', 'gf-known', 'gf-unknown', 'gf-tricks',
  // topics
  'topics-list',
  // dynamic tests
  'dynamic-templates-list', 'btn-mixed-review',
  'dynamic-title', 'dynamic-score', 'dynamic-topic-label',
  'dynamic-phase-question', 'dynamic-front-text', 'dynamic-input-area', 'dynamic-answer-input',
  'dynamic-choice-area',
  'dynamic-phase-correction', 'dynamic-correction-question', 'dynamic-correction-your',
  'dynamic-correction-correct', 'dynamic-correction-extra',
  // level test
  'leveltest-title', 'leveltest-counter', 'leveltest-progress-fill',
  'leveltest-phase-question', 'leveltest-front-text', 'leveltest-input-area',
  'leveltest-freetext-area', 'leveltest-answer-input', 'leveltest-multi-blank-area',
  'leveltest-phase-correction', 'leveltest-correction-question', 'leveltest-correction-your',
  'leveltest-correction-correct', 'leveltest-correction-extra', 'leveltest-multi-blank-review',
  'leveltest-sum-correct', 'leveltest-sum-total', 'leveltest-sum-pct',
  'leveltest-weak-sections', 'btn-leveltest-start-plan',
  // note modal
  'note-modal', 'modal-word', 'modal-translation', 'modal-textarea',
  // screens (toggled via class="screen")
  'screen-home', 'screen-book', 'screen-study', 'screen-summary', 'screen-glossary',
  'screen-topics', 'screen-dynamic-templates', 'screen-dynamic-study',
  'screen-leveltest-study', 'screen-leveltest-result',
];

// Creates a fresh document + window-level globals object for one test run.
// Returns { document, localStorage, window } — pass `window` fields into
// the vm context (setTimeout, alert, confirm, Blob/URL stubs, etc).
function createDom() {
  const byId = new Map();
  const body = new Node('body');

  ALL_IDS.forEach(id => {
    // Screens default to class="screen" (home starts active in the real
    // markup; tests call showScreen() explicitly so starting state here
    // doesn't matter beyond existing).
    const el = new Node(id.startsWith('screen-') ? 'div' : 'div', id);
    if (id.startsWith('screen-')) el.classList.add('screen');
    if (id === 'screen-home') el.classList.add('active');
    byId.set(id, el);
    body.appendChild(el);
  });

  const document = {
    body,
    getElementById(id) {
      const el = byId.get(id);
      if (!el) throw new Error(`dom-shim: no element registered for id "${id}" — add it to ALL_IDS in test/dom-shim.js`);
      return el;
    },
    createElement(tag) { return new Node(tag); },
    createDocumentFragment() {
      // Used only as an appendChild() target that's itself appended once —
      // a plain Node behaves identically for app.js's usage.
      return new Node('fragment');
    },
    querySelectorAll(selector) { return matchAll(body._descendants(), selector); },
    querySelector(selector) { return this.querySelectorAll(selector)[0] || null; },
  };

  const storage = new Map();
  const localStorage = {
    getItem(k) { return storage.has(k) ? storage.get(k) : null; },
    setItem(k, v) { storage.set(k, String(v)); },
    removeItem(k) { storage.delete(k); },
    clear() { storage.clear(); },
    _dump() { return Object.fromEntries(storage); },
  };

  const timers = [];
  const window = {
    document,
    localStorage,
    console,
    Math, Date, JSON,
    // setTimeout runs synchronously (immediately) — app.js only uses it for
    // input.focus() after a render, which is a no-op here anyway. Running
    // sync (not queuing) keeps test driving code simple (no fake-timer
    // flushing needed) and matches how every other test in this repo's
    // history has driven app.js.
    setTimeout(fn) { fn(); return 0; },
    clearTimeout() {},
    alert(msg) { window._alerts.push(msg); },
    confirm() { return true; }, // tests that need "Cancel" should override window.confirm after createDom()
    _alerts: [],
  };

  return { document, localStorage, window, byId };
}

module.exports = { createDom, Node, ClassList, ALL_IDS };
