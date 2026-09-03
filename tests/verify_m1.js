// Automated Verification Test Suite for Milestone 1 (Physical Genetics, Postures & Hygiene)
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function assert(condition, message) {
  if (!condition) {
    throw new Error('ASSERTION FAILED: ' + message);
  }
}

console.log('=== Running Milestone 1 Comprehensive Test Suite ===\n');
let passedTests = 0;
let totalTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  [FAIL] ${name}: ${err.message}`);
  }
}

function loadModule(filePath, sandbox = {}) {
  let code = fs.readFileSync(filePath, 'utf8');
  code = code
    .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
    .replace(/^export\s+(?:const|let|var)\s+(\w+)/gm, 'var $1')
    .replace(/^export\s+class\s+(\w+)/gm, 'var $1 = class $1')
    .replace(/^export\s+function\s+(\w+)/gm, 'var $1 = function $1');

  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox;
}

// 1. Breed Genetics & Tail/Build Definitions
const breedsSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-breeds.js'));

test('Breeds: Tuxedo breed and coat pattern defined', () => {
  const { PET_BREEDS } = breedsSandbox;
  assert(PET_BREEDS.tuxedo, 'PET_BREEDS.tuxedo must exist');
  assert(PET_BREEDS.tuxedo.pattern === 'tuxedo', 'PET_BREEDS.tuxedo pattern must be "tuxedo"');
  assert(PET_BREEDS.tuxedo.bodyColor === '#1e293b', 'Tuxedo bodyColor should be dark slate');
  assert(PET_BREEDS.tuxedo.bellyColor === '#ffffff', 'Tuxedo bellyColor should be white');
});

test('Breeds: Classic Cow print (white_black_spotted) defined', () => {
  const { PET_BREEDS } = breedsSandbox;
  assert(PET_BREEDS.white_black_spotted, 'PET_BREEDS.white_black_spotted must exist');
  assert(PET_BREEDS.white_black_spotted.pattern === 'white_black_spotted', 'Pattern must be white_black_spotted');
  assert(PET_BREEDS.white_black_spotted.patchColor === '#0f172a', 'Cow print patchColor should be black/dark');
});

test('Breeds: 5 Tail Variations supported', () => {
  const { TAIL_TYPES } = breedsSandbox;
  assert(TAIL_TYPES.bobtail, 'bobtail must exist in TAIL_TYPES');
  assert(TAIL_TYPES.short, 'short must exist in TAIL_TYPES');
  assert(TAIL_TYPES.long, 'long must exist in TAIL_TYPES');
  assert(TAIL_TYPES.kinked, 'kinked must exist in TAIL_TYPES');
  assert(TAIL_TYPES.curved, 'curved must exist in TAIL_TYPES');
});

test('Breeds: 3 Body Types (chubby, normal, skinny aliasing slim) supported', () => {
  const { BODY_BUILDS } = breedsSandbox;
  assert(BODY_BUILDS.chubby, 'chubby must exist in BODY_BUILDS');
  assert(BODY_BUILDS.normal, 'normal must exist in BODY_BUILDS');
  assert(BODY_BUILDS.skinny, 'skinny must exist in BODY_BUILDS');
  assert(BODY_BUILDS.slim, 'slim must exist in BODY_BUILDS');
  assert(BODY_BUILDS.skinny.scaleX === BODY_BUILDS.slim.scaleX, 'skinny must alias slim');
});

test('Breeds: Special Markings defined', () => {
  const { SPECIAL_MARKINGS } = breedsSandbox;
  assert(SPECIAL_MARKINGS, 'SPECIAL_MARKINGS must exist');
  assert(SPECIAL_MARKINGS.blaze, 'blaze marking must exist');
  assert(SPECIAL_MARKINGS.eye_patch, 'eye_patch marking must exist');
  assert(SPECIAL_MARKINGS.socks, 'socks marking must exist');
  assert(SPECIAL_MARKINGS.heart_butt, 'heart_butt marking must exist');
});

// 2. SVG Rendering Engine Tests
const renderSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-render.js'), {
  ...breedsSandbox,
  document: {
    createElement: (tag) => ({
      tagName: tag,
      className: '',
      id: '',
      dataset: {},
      style: {
        setProperty: () => {}
      },
      setAttribute: () => {},
      querySelector: () => ({ textContent: '' }),
      querySelectorAll: () => []
    })
  }
});

test('PetRenderer: renderPetSvg interface contract exists', () => {
  const { PetRenderer } = renderSandbox;
  assert(typeof PetRenderer.renderPetSvg === 'function', 'PetRenderer.renderPetSvg must be a function');
});

test('PetRenderer: Tuxedo SVG pattern rendering', () => {
  const { PetRenderer } = renderSandbox;
  const pet = { id: 'p1', name: 'โอริโอ้', breed: 'tuxedo', tailType: 'long', build: 'normal', state: 'stand' };
  const svg = PetRenderer.renderPetSvg(pet);
  assert(svg.includes('tuxedo-chest-bib'), 'SVG must include tuxedo white chest bib');
  assert(svg.includes('points="50,26 47,35 53,35"'), 'SVG must include inverted V nose blaze');
});

test('PetRenderer: Cow print SVG pattern rendering', () => {
  const { PetRenderer } = renderSandbox;
  const pet = { id: 'p2', name: 'มิลค์กี้', breed: 'white_black_spotted', tailType: 'curved', build: 'chubby', state: 'stand' };
  const svg = PetRenderer.renderPetSvg(pet);
  assert(svg.includes('cow-flank-patch'), 'SVG must include cow-flank-patch');
  assert(svg.includes('cow-saddle-patch'), 'SVG must include cow-saddle-patch');
});

test('PetRenderer: Special Markings SVG rendering', () => {
  const { PetRenderer } = renderSandbox;
  const petBlaze = { id: 'p3', name: 'มีโชค', breed: 'orange', specialMarking: 'blaze', state: 'stand' };
  const svgBlaze = PetRenderer.renderPetSvg(petBlaze);
  assert(svgBlaze.includes('Star Blaze on Forehead'), 'SVG must render forehead star blaze');

  const petSocks = { id: 'p4', name: 'ถุงเท้า', breed: 'black', specialMarking: 'socks', state: 'stand' };
  const svgSocks = PetRenderer.renderPetSvg(petSocks);
  assert(svgSocks.includes('White Socks / Mittens'), 'SVG must render white mittens');
});

test('PetRenderer: 5 Tail Variations SVG geometries', () => {
  const { PetRenderer } = renderSandbox;
  const tails = ['bobtail', 'short', 'long', 'kinked', 'curved'];
  for (const t of tails) {
    const pet = { id: 'pt_' + t, name: 'หาง', breed: 'tabby', tailType: t, state: 'stand' };
    const svg = PetRenderer.renderPetSvg(pet);
    assert(svg.includes(`pet-tail-${t}`), `SVG must render element with class pet-tail-${t}`);
  }
});

test('PetRenderer: 3 Body Builds dynamic cheek and body scaling', () => {
  const { PetRenderer } = renderSandbox;
  const petChubby = { id: 'pc', name: 'อ้วน', breed: 'orange', build: 'chubby', state: 'stand' };
  const svgChubby = PetRenderer.renderPetSvg(petChubby);
  assert(svgChubby.includes('rx="28" ry="21"'), 'Chubby build body Rx=28 Ry=21');
  assert(svgChubby.includes('rx="9.5" ry="7.2"'), 'Chubby build cheek Rx=9.5 Ry=7.2');

  const petSkinny = { id: 'ps', name: 'ผอม', breed: 'siamese', build: 'skinny', state: 'stand' };
  const svgSkinny = PetRenderer.renderPetSvg(petSkinny);
  assert(svgSkinny.includes('rx="21" ry="15"'), 'Skinny build body Rx=21 Ry=15');
  assert(svgSkinny.includes('rx="6.4" ry="4.8"'), 'Skinny build cheek Rx=6.4 Ry=4.8');
});

test('PetRenderer: 5 New Postures SVG rendering', () => {
  const { PetRenderer } = renderSandbox;
  // 1. Two-legged standing
  const petStanding = { id: 'p_stand', name: 'ยืน', breed: 'orange', state: 'two_legged' };
  const svgStanding = PetRenderer.renderPetSvg(petStanding);
  assert(svgStanding.includes('pet-body-upright'), 'Two-legged standing must have upright torso');
  assert(svgStanding.includes('pet-begging-paws-upright'), 'Two-legged standing must have raised front paws');

  // 2. Ball batting
  const petBatting = { id: 'p_bat', name: 'ตบบอล', breed: 'tabby', state: 'batting_ball' };
  const svgBatting = PetRenderer.renderPetSvg(petBatting);
  assert(svgBatting.includes('pet-batting-arm'), 'Ball batting must render active batting arm with claws');

  // 3. Scratching
  const petScratch = { id: 'p_scratch', name: 'ฝนเล็บ', breed: 'sisawat', state: 'scratch' };
  const svgScratch = PetRenderer.renderPetSvg(petScratch);
  assert(svgScratch.includes('pet-scratch-paws'), 'Scratching posture must render scratch paws');

  // 4. Playful pouncing
  const petPounce = { id: 'p_pounce', name: 'งับคอ', breed: 'calico', state: 'pounce_play' };
  const svgPounce = PetRenderer.renderPetSvg(petPounce);
  assert(svgPounce.includes('pet-body-pounce'), 'Pounce play posture must render crouched pounce body');

  // 5. Pooping
  const petPoop = { id: 'p_poop', name: 'อึ', breed: 'orange', state: 'pooping' };
  const svgPoop = PetRenderer.renderPetSvg(petPoop);
  assert(svgPoop.includes('pet-body-poop'), 'Pooping posture must render squatting body');
  assert(svgPoop.includes('pet-tail-pooping'), 'Pooping posture must render lifted tail');
});

// 3. CSS Keyframes and Styles Verification
const cssContent = fs.readFileSync(path.join(ROOT, 'src/css/pet.css'), 'utf8');

test('CSS: 5 Tail animations keyframes defined', () => {
  assert(cssContent.includes('@keyframes pet-bobtail-wiggle'), 'CSS must define @keyframes pet-bobtail-wiggle');
  assert(cssContent.includes('@keyframes pet-short-tail-twitch'), 'CSS must define @keyframes pet-short-tail-twitch');
  assert(cssContent.includes('@keyframes pet-tail-wagging'), 'CSS must define @keyframes pet-tail-wagging');
  assert(cssContent.includes('@keyframes pet-kinked-tail-flick'), 'CSS must define @keyframes pet-kinked-tail-flick');
  assert(cssContent.includes('@keyframes pet-curved-tail-wave'), 'CSS must define @keyframes pet-curved-tail-wave');
});

test('CSS: Body build waddle and trot keyframes defined', () => {
  assert(cssContent.includes('.build-chubby'), 'CSS must include .build-chubby');
  assert(cssContent.includes('@keyframes pet-chubby-waddle'), 'CSS must define @keyframes pet-chubby-waddle');
  assert(cssContent.includes('.build-skinny'), 'CSS must include .build-skinny');
  assert(cssContent.includes('@keyframes pet-skinny-trot'), 'CSS must define @keyframes pet-skinny-trot');
});

test('CSS: 5 New Postures keyframes defined', () => {
  assert(cssContent.includes('@keyframes pet-stand-sway'), 'CSS must define @keyframes pet-stand-sway');
  assert(cssContent.includes('@keyframes pet-paws-plead'), 'CSS must define @keyframes pet-paws-plead');
  assert(cssContent.includes('@keyframes pet-swipe-combo'), 'CSS must define @keyframes pet-swipe-combo');
  assert(cssContent.includes('@keyframes pet-scratch'), 'CSS must define @keyframes pet-scratch');
  assert(cssContent.includes('@keyframes pet-item-bob'), 'CSS must define @keyframes pet-item-bob');
  assert(cssContent.includes('@keyframes pet-butt-wiggle'), 'CSS must define @keyframes pet-butt-wiggle');
  assert(cssContent.includes('@keyframes pet-poop-strain'), 'CSS must define @keyframes pet-poop-strain');
});

test('CSS: Hygiene Subsystem styling defined', () => {
  assert(cssContent.includes('.pet-poop-item'), 'CSS must define .pet-poop-item');
  assert(cssContent.includes('@keyframes poop-clean-pop'), 'CSS must define @keyframes poop-clean-pop');
  assert(cssContent.includes('.pet-fly'), 'CSS must define .pet-fly');
  assert(cssContent.includes('@keyframes fly-wing-buzz'), 'CSS must define @keyframes fly-wing-buzz');
  assert(cssContent.includes('.poop-clean-sparkle'), 'CSS must define .poop-clean-sparkle');
});

// 4. PetHygiene Subsystem Logic Tests
function createMockElement(tag) {
  const el = {
    tagName: tag,
    className: '',
    id: '',
    dataset: {},
    style: {},
    classList: {
      add: (c) => { el.className += ' ' + c; },
      contains: (c) => el.className.includes(c)
    },
    setAttribute: () => {},
    addEventListener: (evt, handler) => { el['on' + evt] = handler; },
    parentNode: null,
    removeChild: function(child) {
      const idx = el.children.indexOf(child);
      if (idx !== -1) el.children.splice(idx, 1);
      child.parentNode = null;
    },
    appendChild: function(child) {
      el.children.push(child);
      child.parentNode = el;
      return child;
    },
    children: []
  };
  return el;
}

const mockContainer = createMockElement('div');
mockContainer.id = 'desktop-pet-layer';

const mockStore = {
  data: {},
  async get(k) { return this.data[k] !== undefined ? this.data[k] : 100; },
  async set(k, v) { this.data[k] = v; }
};

const hygieneSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-hygiene.js'), {
  Store: mockStore,
  document: {
    createElement: createMockElement,
    getElementById: () => mockContainer,
    body: mockContainer
  },
  window: { innerWidth: 1200, innerHeight: 800 },
  console,
  setTimeout: (fn, delay) => { fn(); },
  Date
});

test('PetHygiene: init and lifecycle interface contracts', async () => {
  const { PetHygiene } = hygieneSandbox;
  assert(typeof PetHygiene.init === 'function', 'PetHygiene.init must be a function');
  assert(typeof PetHygiene.spawnPoop === 'function', 'PetHygiene.spawnPoop must be a function');
  assert(typeof PetHygiene.cleanPoop === 'function', 'PetHygiene.cleanPoop must be a function');
  assert(typeof PetHygiene.update === 'function', 'PetHygiene.update must be a function');
  assert(typeof PetHygiene.getPoops === 'function', 'PetHygiene.getPoops must be a function');

  await PetHygiene.init(mockContainer, mockStore);
  assert(PetHygiene.isInitialized, 'PetHygiene must be initialized');
});

test('PetHygiene: spawnPoop creates poop object and DOM element', () => {
  const { PetHygiene } = hygieneSandbox;
  const poop = PetHygiene.spawnPoop(300, 400, 'pet_test_1');
  assert(poop, 'spawnPoop must return poop object');
  assert(poop.x === 300 && poop.y === 400, 'Coordinates must match input');
  assert(poop.hasFlies === false, 'Fresh poop must not have flies initially');
  assert(poop.cleaned === false, 'Fresh poop must not be cleaned');
  assert(poop.el, 'Poop must have el property');
  assert(poop.el.className.includes('pet-poop-item'), 'Poop el must have pet-poop-item class');

  const activePoops = PetHygiene.getPoops();
  assert(activePoops.length >= 1, 'getPoops() must include active poop');
});

test('PetHygiene: cleanPoop awards +10 cleanliness and cleans object', () => {
  const { PetHygiene } = hygieneSandbox;
  const poop = PetHygiene.spawnPoop(350, 450, 'pet_test_2');
  const initialScore = PetHygiene.getCleanlinessScore();

  PetHygiene.cleanPoop(poop.id);
  assert(poop.cleaned === true, 'Poop must be marked cleaned');
  assert(PetHygiene.getCleanlinessScore() === initialScore + 10, 'Cleanliness score must increase by +10');
  assert(mockStore.data['pet_cleanliness_score'] === initialScore + 10, 'Score must be persisted in Store');
});

test('PetHygiene: Neglect timer (>30s) triggers 4-6 flies swarm with 60 FPS physics', () => {
  const { PetHygiene } = hygieneSandbox;
  const poop = PetHygiene.spawnPoop(200, 200, 'pet_test_3');
  assert(poop.hasFlies === false, 'Initially no flies');

  // Fast forward poop age past 30 seconds
  poop.createdAt = Date.now() - 32000;

  PetHygiene.update(0.016);
  assert(poop.hasFlies === true, 'Poop after 30s must have flies');
  assert(poop.flies.length >= 4 && poop.flies.length <= 6, 'Flies count must be between 4 and 6');

  // Verify fly physics properties
  const fly0 = poop.flies[0];
  assert(typeof fly0.x === 'number' && typeof fly0.y === 'number', 'Fly must have x and y coordinates');
  assert(typeof fly0.orbitRadius === 'number', 'Fly must have orbitRadius');
  assert(fly0.el, 'Fly must have DOM element');
  assert(fly0.el.className.includes('pet-fly'), 'Fly el must have pet-fly class');

  const initialX = fly0.x;
  // Advance physics frame
  PetHygiene.update(0.033);
  assert(fly0.x !== initialX || fly0.phase !== 0, 'Fly position or phase must update over time');
});

// 5. Check build.js module bundle
const buildJsContent = fs.readFileSync(path.join(ROOT, 'build.js'), 'utf8');
test('build.js: pet-hygiene.js registered in jsModules before pet-manager.js', () => {
  const hygieneIdx = buildJsContent.indexOf("'js/pet/pet-hygiene.js'");
  const managerIdx = buildJsContent.indexOf("'js/pet/pet-manager.js'");
  assert(hygieneIdx !== -1, 'pet-hygiene.js must be in jsModules');
  assert(managerIdx !== -1, 'pet-manager.js must be in jsModules');
  assert(hygieneIdx < managerIdx, 'pet-hygiene.js must be registered before pet-manager.js');
});

console.log(`\n=== Verification Results: ${passedTests}/${totalTests} tests passed ===`);
if (passedTests !== totalTests) {
  process.exit(1);
}
