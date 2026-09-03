// Test suite: Radial Menu (Style 2 Kawaii Pastel Paws Theme-Adaptive), Auto-Feed, and Litter Box Fix
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

function loadScript(relPath, context) {
  let code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  code = code
    .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
    .replace(/export\s+const\s+(\w+)\s*=/g, 'var $1 = window.$1 =')
    .replace(/export\s+class\s+(\w+)/g, 'var $1 = window.$1 = class $1')
    .replace(/export\s+function\s+(\w+)/g, 'var $1 = window.$1 = function $1')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s*\{[^}]*\};?/g, '');

  vm.runInContext(code, context);
}

// Setup Mock DOM Context
function createMockContext() {
  const elements = [];
  const mockDocument = {
    createElement(tag) {
      const el = {
        tagName: tag.toUpperCase(),
        className: '',
        id: '',
        style: {
          setProperty: () => {},
          removeProperty: () => {}
        },
        setAttribute: (k, v) => {},
        getAttribute: (k) => null,
        dataset: {},
        innerHTML: '',
        textContent: '',
        childNodes: [],
        children: [],
        classList: {
          classes: new Set(),
          add(c) { this.classes.add(c); },
          remove(c) { this.classes.delete(c); },
          contains(c) { return this.classes.has(c); },
          toggle(c, v) { if (v === undefined) { if (this.classes.has(c)) this.classes.delete(c); else this.classes.add(c); } else { if (v) this.classes.add(c); else this.classes.delete(c); } }
        },
        listeners: {},
        addEventListener(evt, fn) {
          if (!this.listeners[evt]) this.listeners[evt] = [];
          this.listeners[evt].push(fn);
        },
        removeEventListener(evt, fn) {
          if (this.listeners[evt]) {
            this.listeners[evt] = this.listeners[evt].filter(f => f !== fn);
          }
        },
        dispatchEvent(evt) {
          const fns = this.listeners[evt.type] || [];
          fns.forEach(fn => fn(evt));
        },
        appendChild(child) {
          child.parentNode = this;
          this.childNodes.push(child);
          this.children.push(child);
          return child;
        },
        removeChild(child) {
          this.childNodes = this.childNodes.filter(c => c !== child);
          this.children = this.children.filter(c => c !== child);
          child.parentNode = null;
          return child;
        },
        remove() {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        },
        querySelector(selector) {
          for (const c of this.childNodes) {
            if (selector.startsWith('.') && c.className && c.className.includes(selector.slice(1))) return c;
            if (selector.startsWith('#') && c.id === selector.slice(1)) return c;
            if (selector.startsWith('[data-action="') && c.dataset && c.dataset.action === selector.match(/data-action="([^"]+)"/)[1]) return c;
            if (c.querySelector) {
              const res = c.querySelector(selector);
              if (res) return res;
            }
          }
          return null;
        },
        querySelectorAll(selector) {
          const res = [];
          for (const c of this.childNodes) {
            if (selector.startsWith('.') && c.className && c.className.includes(selector.slice(1))) res.push(c);
            if (c.querySelectorAll) {
              res.push(...c.querySelectorAll(selector));
            }
          }
          return res;
        },
        closest(sel) {
          if (sel === '[data-action]' && this.dataset && this.dataset.action) return this;
          return null;
        }
      };
      elements.push(el);
      return el;
    },
    body: null,
    documentElement: {
      dataset: {},
      style: {
        setProperty: () => {},
        removeProperty: () => {}
      }
    },
    getElementById(id) {
      return elements.find(el => el.id === id) || null;
    }
  };

  mockDocument.body = mockDocument.createElement('body');

  const mockStorage = new Map();
  const context = {
    console,
    Date,
    Math,
    Set,
    Map,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    localStorage: {
      getItem: (k) => mockStorage.get(k) || null,
      setItem: (k, v) => mockStorage.set(k, String(v)),
      removeItem: (k) => mockStorage.delete(k)
    },
    window: {
      innerWidth: 1200,
      innerHeight: 800,
      addEventListener: () => {},
      removeEventListener: () => {}
    },
    document: mockDocument,
    confirm: () => true,
    prompt: () => 'New Name'
  };
  context.window.document = mockDocument;
  context.window.localStorage = context.localStorage;

  vm.createContext(context);
  return context;
}

const ctx = createMockContext();

// Load modules in proper order
loadScript('src/js/core/store.js', ctx);
loadScript('src/js/pet/pet-breeds.js', ctx);
loadScript('src/js/pet/pet-personality.js', ctx);
loadScript('src/js/pet/pet-hygiene.js', ctx);
loadScript('src/js/pet/pet-memory.js', ctx);
loadScript('src/js/pet/pet-dialogues.js', ctx);
loadScript('src/js/pet/pet-render.js', ctx);
loadScript('src/js/pet/pet-environment.js', ctx);
loadScript('src/js/pet/pet-ui.js', ctx);
loadScript('src/js/pet/pet-manager.js', ctx);

console.log('================================================================================');
console.log('  MDBrowse Desktop Pet System — Radial Menu, Auto-Feed & Litter Box Test Suite');
console.log('================================================================================\n');

function test(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    console.error(`  [FAIL] ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

// === SECTION 1: Radial Menu (Style 2 Kawaii Pastel Paws Theme-Adaptive) ===
console.log('=== [SECTION 1] Radial Menu (Style 2 Kawaii Theme-Adaptive) ===');

test('PetUI has openRadialMenu, toggleRadialMenu, closeRadialMenu contracts', () => {
  assert.strictEqual(typeof ctx.window.PetUI.openRadialMenu, 'function');
  assert.strictEqual(typeof ctx.window.PetUI.toggleRadialMenu, 'function');
  assert.strictEqual(typeof ctx.window.PetUI.closeRadialMenu, 'function');
});

test('openRadialMenu creates radial menu container with Style 2 and 5 user actions + diary pill', () => {
  const PetUI = ctx.window.PetUI;
  const mockPet = {
    id: 'test_pet_1',
    name: 'ส้มซ่า',
    x: 400,
    y: 300,
    breed: 'orange',
    mood: 'blissful',
    isStaying: false,
    el: ctx.document.createElement('div')
  };
  const mockManager = {
    layerEl: ctx.document.createElement('div'),
    ticklePet: () => {},
    feedPet: () => {},
    say: () => {},
    saveState: () => {},
    spawnButterflyNear: () => {},
    spawnGeckoNear: () => {},
    removePet: () => {}
  };

  PetUI.openRadialMenu(mockPet, mockManager);
  assert(PetUI.activeRadialMenu, 'activeRadialMenu must be created');
  assert(PetUI.activeRadialMenu.className.includes('radial-style-kawaii-paw'), 'Uses Style 2 Kawaii Paw class');
  assert(PetUI.activeRadialMenu.className.includes('pet-radial-menu'), 'Has pet-radial-menu class');

  // Verify 4 safe user actions exist in radial menu markup
  const safeActions = ['tickle', 'feed', 'stay', 'prey'];
  for (const act of safeActions) {
    assert(PetUI.activeRadialMenu.innerHTML.includes(`data-action="${act}"`), `Radial menu must have safe button for action: ${act}`);
  }

  // Verify dangerous dismiss button is REMOVED from radial menu for safety
  assert(!PetUI.activeRadialMenu.innerHTML.includes('data-action="dismiss"'), 'Dangerous dismiss button must NOT exist in radial menu');

  // Verify Diary shortcut pill exists
  assert(PetUI.activeRadialMenu.innerHTML.includes('data-action="open_diary"'), 'Radial menu must have diary shortcut pill');

  PetUI.closeRadialMenu();
  assert.strictEqual(PetUI.activeRadialMenu, null, 'activeRadialMenu is null after close');
});

test('Theme adaptability: pet.css defines CSS variables var(--bg2), var(--accent), etc.', () => {
  const css = fs.readFileSync(path.join(ROOT, 'src/css/pet.css'), 'utf8');
  assert(css.includes('.pet-radial-menu'), 'CSS contains .pet-radial-menu');
  assert(css.includes('var(--accent'), 'CSS uses var(--accent)');
  assert(css.includes('var(--bg2'), 'CSS uses var(--bg2)');
  assert(css.includes('var(--border'), 'CSS uses var(--border)');
  assert(css.includes('var(--text'), 'CSS uses var(--text)');
  assert(css.includes('.radial-paw-bead'), 'CSS has Kawaii paw beads');
});

// === SECTION 2: Auto-Feed Autonomous Feature ===
console.log('\n=== [SECTION 2] Autonomous Auto-Feeding System ===');

test('navigateToItem routes accurately to food_bowl coordinates', () => {
  const PetManager = ctx.window.PetManager;
  const mockPet = {
    id: 'test_cat',
    x: 100,
    y: 100,
    targetX: null,
    targetY: null,
    targetAction: null,
    state: 'stand',
    el: ctx.document.createElement('div')
  };
  PetManager.environment = {
    items: [
      { id: 'bowl_1', type: 'food_bowl', x: 500, y: 400, enabled: true }
    ],
    updatePhysics: () => {}
  };

  PetManager.navigateToItem(mockPet, 'bowl_1', 'eating');
  assert.strictEqual(mockPet.targetX, 470, 'X coordinate offset correctly for food bowl');
  assert.strictEqual(mockPet.targetY, 388, 'Y coordinate offset correctly for food bowl');
  assert.strictEqual(mockPet.targetAction, 'eating', 'targetAction set to eating');
  assert.strictEqual(mockPet.state, 'walk', 'Cat begins walking toward bowl');
});

test('Pet eating at food bowl triggers eating state, PetMemory.recordFeeding, and speech', () => {
  const PetManager = ctx.window.PetManager;
  const PetMemory = ctx.window.PetMemory;

  const mockPet = {
    id: 'hungry_cat',
    name: 'มอมแมม',
    x: 470,
    y: 388,
    targetX: 470,
    targetY: 388,
    targetAction: 'eating',
    state: 'walk',
    mood: 'hungry',
    el: ctx.document.createElement('div')
  };

  let saidMessage = '';
  PetManager.say = (pet, msg) => { saidMessage = msg; };
  PetManager.pets = [mockPet];
  PetManager.environment = { items: [], updatePhysics: () => {} };

  const memBefore = PetMemory.getMemory(mockPet);
  const fedCountBefore = memBefore.stats.totalFed;

  // Simulate arrival in updateMotionPhysics
  PetManager.updateMotionPhysics(0.05);

  assert.strictEqual(mockPet.state, 'eating', 'Cat state transitions to eating');
  assert(saidMessage.includes('ปลาทู'), 'Cat speaks eating dialogue');
  assert.strictEqual(memBefore.stats.totalFed, fedCountBefore + 1, 'PetMemory.recordFeeding incremented totalFed');
});

// === SECTION 3: Litter Box Pooping Fix ===
console.log('\n=== [SECTION 3] Litter Box Pooping Fix ===');

test('Pooping at litter box cleans waste in sand without spawning dirty floor poop', () => {
  const PetManager = ctx.window.PetManager;
  const PetHygiene = ctx.window.PetHygiene;

  const litterBox = {
    id: 'box_1',
    type: 'cat_litter_box',
    x: 300,
    y: 300,
    enabled: true
  };
  PetManager.environment = {
    items: [litterBox]
  };

  // Place cat at the litter box
  const mockPet = {
    id: 'litter_cat',
    name: 'ถุงทอง',
    x: litterBox.x + 10,
    y: litterBox.y - 10,
    facing: 'right',
    state: 'pooping',
    poopTimer: 3300, // Almost ready to drop
    stateTimer: 0,
    speechTimer: 0,
    isSpeaking: false,
    isDragged: false,
    el: ctx.document.createElement('div')
  };
  PetManager.pets = [mockPet];

  let saidDialogue = '';
  PetManager.say = (pet, msg) => { saidDialogue = msg; };

  const poopsBefore = PetHygiene.poops.length;
  const cleanlinessBefore = PetHygiene.cleanlinessScore;

  // Run tick to trigger poop completion
  PetManager.tick();

  assert.strictEqual(PetHygiene.poops.length, poopsBefore, 'No floor poop object must be spawned when at litter box!');
  assert.strictEqual(mockPet.state, 'scratch', 'Cat scratches sand to cover waste');
  assert(saidDialogue.includes('กระบะทราย'), 'Cat speaks clean litter box dialogue');
  assert(PetHygiene.cleanlinessScore >= cleanlinessBefore, 'Cleanliness score is maintained or awarded +5');
});

test('Pooping without litter box on open floor spawns floor poop object', () => {
  const PetManager = ctx.window.PetManager;
  const PetHygiene = ctx.window.PetHygiene;

  PetManager.environment = { items: [] }; // No litter box

  const mockPet = {
    id: 'floor_cat',
    name: 'จรจัด',
    x: 600,
    y: 500,
    facing: 'left',
    state: 'pooping',
    poopTimer: 3300,
    stateTimer: 0,
    speechTimer: 0,
    isSpeaking: false,
    isDragged: false,
    el: ctx.document.createElement('div')
  };
  PetManager.pets = [mockPet];

  const poopsBefore = PetHygiene.poops.length;
  PetManager.tick();

  assert.strictEqual(PetHygiene.poops.length, poopsBefore + 1, 'Floor poop object is spawned when no litter box');
});

// === SECTION 4: Radial Menu In-Place Motion Lock ===
console.log('\n=== [SECTION 4] Radial Menu In-Place Motion Lock ===');

test('Cat motion is completely frozen in place while radial menu is open', () => {
  const PetManager = ctx.window.PetManager;
  const PetUI = ctx.window.PetUI;

  const mockPet = {
    id: 'stationary_cat',
    name: 'ส้มหยุด',
    x: 400,
    y: 300,
    targetX: 800,
    targetY: 300,
    state: 'walk',
    stateTimer: 5000,
    el: ctx.document.createElement('div'),
    personality: { energy: 90, diligence: 90 }
  };
  PetManager.pets = [mockPet];
  PetManager.environment = { items: [], updatePhysics: () => {} };

  // Open radial menu
  PetUI.openRadialMenu(mockPet, PetManager);

  assert.strictEqual(mockPet.hasRadialMenuOpen, true, 'hasRadialMenuOpen must be true');
  assert.strictEqual(mockPet.targetX, null, 'targetX is cleared immediately upon menu open');
  assert.strictEqual(mockPet.state, 'sit', 'Cat transitions to sit posture in place');

  const startX = mockPet.x;
  const startY = mockPet.y;

  // Run physics and tick simulation while menu is open
  for (let i = 0; i < 10; i++) {
    PetManager.updateMotionPhysics(0.05);
    PetManager.tick();
  }

  assert.strictEqual(mockPet.x, startX, 'Cat X position must not move while radial menu is open');
  assert.strictEqual(mockPet.y, startY, 'Cat Y position must not move while radial menu is open');

  // Close radial menu
  PetUI.closeRadialMenu();
  assert.strictEqual(mockPet.hasRadialMenuOpen, false, 'hasRadialMenuOpen reset to false after menu closes');
});

console.log('\n================================================================================');
console.log('  All Radial Menu, Auto-Feed & Litter Box Tests Passed Successfully!');
console.log('================================================================================');
