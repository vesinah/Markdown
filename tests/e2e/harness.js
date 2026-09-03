/**
 * tests/e2e/harness.js
 * Comprehensive E2E Testing Harness & Sandbox Environment for Desktop Pet System
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '../..');
const SRC = path.join(ROOT, 'src');

/**
 * Lightweight in-memory DOM Node mock for headless Node.js testing
 */
class MockDOMElement {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase();
    this.id = '';
    this.className = '';
    this.attributes = new Map();
    this.dataset = {};
    this.style = {
      _props: new Map(),
      setProperty(name, val) { this._props.set(name, String(val)); },
      getPropertyValue(name) { return this._props.get(name) || ''; },
      get left() { return this.getPropertyValue('left'); },
      set left(v) { this.setProperty('left', v); },
      get top() { return this.getPropertyValue('top'); },
      set top(v) { this.setProperty('top', v); },
      get width() { return this.getPropertyValue('width'); },
      set width(v) { this.setProperty('width', v); },
      get height() { return this.getPropertyValue('height'); },
      set height(v) { this.setProperty('height', v); },
      get display() { return this.getPropertyValue('display'); },
      set display(v) { this.setProperty('display', v); },
      get opacity() { return this.getPropertyValue('opacity'); },
      set opacity(v) { this.setProperty('opacity', v); },
      get transform() { return this.getPropertyValue('transform'); },
      set transform(v) { this.setProperty('transform', v); }
    };
    this.children = [];
    this.parentElement = null;
    this.eventListeners = new Map();
    this._innerHTML = '';
    this._textContent = '';
  }

  get classList() {
    const self = this;
    return {
      contains(cls) {
        return self.className.split(/\s+/).filter(Boolean).includes(cls);
      },
      add(...classes) {
        const set = new Set(self.className.split(/\s+/).filter(Boolean));
        classes.forEach(c => set.add(c));
        self.className = Array.from(set).join(' ');
      },
      remove(...classes) {
        const set = new Set(self.className.split(/\s+/).filter(Boolean));
        classes.forEach(c => set.delete(c));
        self.className = Array.from(set).join(' ');
      },
      toggle(cls, force) {
        const has = this.contains(cls);
        const shouldAdd = force !== undefined ? force : !has;
        if (shouldAdd) this.add(cls); else this.remove(cls);
        return shouldAdd;
      }
    };
  }

  setAttribute(name, val) {
    this.attributes.set(name, String(val));
    if (name === 'id') this.id = String(val);
    if (name === 'class') this.className = String(val);
    if (name.startsWith('data-')) {
      const prop = name.slice(5).replace(/-([a-z])/g, (_, g) => g.toUpperCase());
      this.dataset[prop] = String(val);
    }
  }

  getAttribute(name) {
    if (name === 'id') return this.id || null;
    if (name === 'class') return this.className || null;
    return this.attributes.get(name) || null;
  }

  removeAttribute(name) {
    this.attributes.delete(name);
    if (name === 'id') this.id = '';
    if (name === 'class') this.className = '';
  }

  appendChild(child) {
    if (!child) return null;
    if (child.parentElement) child.parentElement.removeChild(child);
    child.parentElement = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentElement = null;
      return child;
    }
    return null;
  }

  remove() {
    if (this.parentElement) {
      this.parentElement.removeChild(this);
    }
  }

  addEventListener(event, handler) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(handler);
  }

  removeEventListener(event, handler) {
    if (this.eventListeners.has(event)) {
      const list = this.eventListeners.get(event).filter(h => h !== handler);
      this.eventListeners.set(event, list);
    }
  }

  dispatchEvent(event) {
    const handlers = this.eventListeners.get(event.type) || [];
    event.target = this;
    event.currentTarget = this;
    for (const h of handlers) {
      try { h.call(this, event); } catch (e) { console.error(e); }
    }
    return !event.defaultPrevented;
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set innerHTML(html) {
    this._innerHTML = String(html);
    this.children = [];
    this._textContent = this._innerHTML.replace(/<[^>]+>/g, '').trim();

    // Stack-based HTML tag parser
    const stack = [this];
    const tagTokenRe = /<!--[\s\S]*?-->|<\/([a-zA-Z0-9_-]+)>|<([a-zA-Z0-9_-]+)([^>]*?)(\/?)>/g;
    let m;
    while ((m = tagTokenRe.exec(this._innerHTML)) !== null) {
      if (m[0].startsWith('<!--')) {
        continue; // skip comments
      }
      if (m[1]) {
        // Closing tag </tag>
        const closeTag = m[1].toLowerCase();
        for (let k = stack.length - 1; k >= 1; k--) {
          if (stack[k].tagName.toLowerCase() === closeTag) {
            stack.splice(k);
            break;
          }
        }
        continue;
      }

      // Opening or self-closing tag
      const tagName = m[2];
      const attrStr = m[3] || '';
      const isSelfClosing = m[4] === '/' || ['img', 'input', 'br', 'hr', 'meta', 'link'].includes(tagName.toLowerCase());

      const el = new MockDOMElement(tagName);
      const idM = attrStr.match(/\bid=["']([^"']*)["']/);
      if (idM) el.id = idM[1];
      const clsM = attrStr.match(/\bclass=["']([^"']*)["']/);
      if (clsM) el.className = clsM[1];
      const dataRe = /data-([a-zA-Z0-9_-]+)=["']([^"']*)["']/g;
      let dm;
      while ((dm = dataRe.exec(attrStr)) !== null) {
        el.setAttribute(`data-${dm[1]}`, dm[2]);
      }

      const parent = stack[stack.length - 1];
      parent.appendChild(el);

      if (!isSelfClosing && !['svg', 'defs'].includes(tagName.toLowerCase())) {
        stack.push(el);
      }
    }
  }

  get textContent() {
    return this._textContent || this._innerHTML.replace(/<[^>]+>/g, '').trim();
  }

  set textContent(text) {
    this._textContent = String(text);
    this._innerHTML = String(text);
  }

  querySelector(sel) {
    return this._findMatching(sel, true);
  }

  querySelectorAll(sel) {
    const results = [];
    this._findMatching(sel, false, results);
    return results;
  }

  contains(el) {
    if (!el) return false;
    if (el === this) return true;
    for (const child of this.children) {
      if (child === el || child.contains(el)) return true;
    }
    return false;
  }

  _findMatching(sel, firstOnly, acc = []) {
    for (const child of this.children) {
      let match = false;
      if (sel.startsWith('#') && child.id === sel.slice(1)) match = true;
      else if (sel.startsWith('.') && child.classList.contains(sel.slice(1))) match = true;
      else if (child.tagName.toLowerCase() === sel.toLowerCase()) match = true;
      else if (sel.includes('[data-')) {
        const m = sel.match(/\[data-([a-zA-Z0-9_-]+)(?:=["']?([^"']+)["']?)?\]/);
        if (m) {
          const key = m[1].replace(/-([a-z])/g, (_, g) => g.toUpperCase());
          if (m[2]) {
            match = child.dataset[key] === m[2];
          } else {
            match = key in child.dataset;
          }
        }
      }

      if (match) {
        if (firstOnly) return child;
        acc.push(child);
      }
      const sub = child._findMatching(sel, firstOnly, acc);
      if (firstOnly && sub) return sub;
    }
    return firstOnly ? null : acc;
  }
}

/**
 * Creates an isolated browser execution context
 */
function createSandboxContext(initialStore = {}) {
  const storeMap = new Map(Object.entries(initialStore));
  const rootEl = new MockDOMElement('body');
  const docEl = new MockDOMElement('html');
  docEl.appendChild(rootEl);

  const listeners = new Map();

  const sandbox = {
    console,
    Math,
    Date,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    JSON,
    Array,
    Object,
    String,
    Number,
    Boolean,
    RegExp,
    Map,
    Set,
    Promise,
    Error,
    TypeError,
    RangeError,
    window: null,
    document: {
      documentElement: docEl,
      body: rootEl,
      createElement(tag) { return new MockDOMElement(tag); },
      getElementById(id) {
        return rootEl.querySelector('#' + id);
      },
      querySelector(sel) {
        return rootEl.querySelector(sel);
      },
      querySelectorAll(sel) {
        return rootEl.querySelectorAll(sel);
      },
      addEventListener(evt, h) {
        if (!listeners.has(evt)) listeners.set(evt, []);
        listeners.get(evt).push(h);
      },
      removeEventListener(evt, h) {
        if (listeners.has(evt)) {
          listeners.set(evt, listeners.get(evt).filter(fn => fn !== h));
        }
      },
      dispatchEvent(evt) {
        const list = listeners.get(evt.type) || [];
        for (const h of list) h(evt);
      }
    },
    innerWidth: 1280,
    innerHeight: 800,
    localStorage: {
      getItem(k) { return storeMap.get(k) !== undefined ? String(storeMap.get(k)) : null; },
      setItem(k, v) { storeMap.set(k, String(v)); },
      removeItem(k) { storeMap.delete(k); },
      clear() { storeMap.clear(); }
    },
    setTimeout(fn, ms, ...args) {
      return setTimeout(fn, Math.min(ms || 0, 10), ...args);
    },
    clearTimeout(id) { clearTimeout(id); },
    setInterval(fn, ms, ...args) {
      return setInterval(fn, Math.max(ms || 10, 10), ...args);
    },
    clearInterval(id) { clearInterval(id); },
    requestAnimationFrame(cb) {
      return setTimeout(() => cb(Date.now()), 1);
    },
    cancelAnimationFrame(id) { clearTimeout(id); }
  };

  sandbox.window = sandbox;
  sandbox.window.addEventListener = sandbox.document.addEventListener;
  sandbox.window.removeEventListener = sandbox.document.removeEventListener;
  sandbox.window.dispatchEvent = sandbox.document.dispatchEvent;

  return sandbox;
}

/**
 * Loads and bundles Pet modules into a VM script context
 */
function loadPetSystem(sandbox = createSandboxContext()) {
  const cleanModule = (code) => code
    .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
    .replace(/^export\s+const\s+/gm, 'const ')
    .replace(/^export\s+class\s+/gm, 'class ')
    .replace(/^export\s+function\s+/gm, 'function ')
    .replace(/^export\s+async\s+function\s+/gm, 'async function ')
    .replace(/^export\s+let\s+/gm, 'let ')
    .replace(/^export\s*\{[^}]*\}\s*;?\r?\n?/gm, '')
    .replace(/^export\s+default\s+/gm, '');

  const files = [
    'src/js/core/store.js',
    'src/js/core/state.js',
    'src/js/pet/pet-breeds.js',
    'src/js/pet/pet-personality.js',
    'src/js/pet/pet-dialogues.js',
    'src/js/pet/pet-environment.js',
    'src/js/pet/pet-render.js',
    'src/js/pet/pet-social.js',
    'src/js/pet/pet-ui.js',
    'src/js/pet/pet-manager.js'
  ];

  // Also include pet-hygiene.js if created
  if (fs.existsSync(path.join(ROOT, 'src/js/pet/pet-hygiene.js'))) {
    files.splice( files.indexOf('src/js/pet/pet-render.js'), 0, 'src/js/pet/pet-hygiene.js');
  }

  let fullCode = "'use strict';\n\n";
  for (const f of files) {
    const fp = path.join(ROOT, f);
    if (fs.existsSync(fp)) {
      fullCode += `// File: ${f}\n` + cleanModule(fs.readFileSync(fp, 'utf8')) + '\n\n';
    }
  }

  // Expose key entities globally in sandbox
  fullCode += `
    window.Store = typeof Store !== 'undefined' ? Store : null;
    window.State = typeof State !== 'undefined' ? State : null;
    window.PET_BREEDS = typeof PET_BREEDS !== 'undefined' ? PET_BREEDS : null;
    window.TAIL_TYPES = typeof TAIL_TYPES !== 'undefined' ? TAIL_TYPES : null;
    window.BODY_BUILDS = typeof BODY_BUILDS !== 'undefined' ? BODY_BUILDS : null;
    window.PERSONALITY_AXES = typeof PERSONALITY_AXES !== 'undefined' ? PERSONALITY_AXES : null;
    window.PERSONALITY_ARCHETYPES = typeof PERSONALITY_ARCHETYPES !== 'undefined' ? PERSONALITY_ARCHETYPES : null;
    window.PetPersonality = typeof PetPersonality !== 'undefined' ? PetPersonality : null;
    window.PET_DIALOGUES = typeof PET_DIALOGUES !== 'undefined' ? PET_DIALOGUES : null;
    window.ENV_ITEM_DEFS = typeof ENV_ITEM_DEFS !== 'undefined' ? ENV_ITEM_DEFS : null;
    window.PetEnvironment = typeof PetEnvironment !== 'undefined' ? PetEnvironment : null;
    window.PetRenderer = typeof PetRenderer !== 'undefined' ? PetRenderer : null;
    window.PetSocial = typeof PetSocial !== 'undefined' ? PetSocial : null;
    window.PetUI = typeof PetUI !== 'undefined' ? PetUI : null;
    window.PetManager = typeof PetManager !== 'undefined' ? PetManager : null;
    window.PetHygiene = typeof PetHygiene !== 'undefined' ? PetHygiene : null;
  `;

  const context = vm.createContext(sandbox);
  try {
    const script = new vm.Script(fullCode);
    script.runInContext(context);
  } catch (err) {
    throw new Error(`Failed to compile and run Pet System in VM: ${err.message}\n${err.stack}`);
  }

  return sandbox;
}

/**
 * File cache & inspection helpers
 */
const FileCache = {
  getMDBrowseHtml() {
    const p = path.join(ROOT, 'MDBrowse.html');
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
  },
  getPetCss() {
    const p = path.join(ROOT, 'src/css/pet.css');
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
  },
  getPetFile(subpath) {
    const p = path.join(ROOT, 'src/js/pet', subpath);
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
  }
};

/**
 * CSS keyframe and selector assertion utilities
 */
const CssAssert = {
  hasKeyframes(css, keyframeName) {
    const re = new RegExp(`@keyframes\\s+${keyframeName}\\s*\\{`, 'i');
    return re.test(css);
  },
  hasSelector(css, selector) {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escaped, 'i');
    return re.test(css);
  },
  extractKeyframe(css, keyframeName) {
    const idx = css.indexOf(`@keyframes ${keyframeName}`);
    if (idx === -1) return null;
    let braceCount = 0;
    let start = -1;
    for (let i = idx; i < css.length; i++) {
      if (css[i] === '{') {
        braceCount++;
        if (start === -1) start = i;
      } else if (css[i] === '}') {
        braceCount--;
        if (braceCount === 0 && start !== -1) {
          return css.slice(idx, i + 1);
        }
      }
    }
    return null;
  }
};

/**
 * SVG geometry and element contract assertion utilities
 */
const SvgAssert = {
  hasElement(svgStr, tag, attrs = {}) {
    if (!svgStr || typeof svgStr !== 'string') return false;
    const tagRe = new RegExp(`<${tag}\\b([^>]*)>`, 'gi');
    let m;
    while ((m = tagRe.exec(svgStr)) !== null) {
      const attrStr = m[1];
      let matchesAll = true;
      for (const [k, v] of Object.entries(attrs)) {
        const attrRe = new RegExp(`${k}=["']([^"']*)["']`, 'i');
        const am = attrStr.match(attrRe);
        if (!am || (v !== undefined && !am[1].includes(String(v)))) {
          matchesAll = false;
          break;
        }
      }
      if (matchesAll) return true;
    }
    return false;
  },
  hasPath(svgStr, classOrStroke) {
    return this.hasElement(svgStr, 'path', classOrStroke ? { class: classOrStroke } : {});
  }
};

module.exports = {
  ROOT,
  SRC,
  MockDOMElement,
  createSandboxContext,
  loadPetSystem,
  FileCache,
  CssAssert,
  SvgAssert
};
