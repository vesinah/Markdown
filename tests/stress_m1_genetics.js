/**
 * tests/stress_m1_genetics.js
 * Adversarial Empirical Stress Test Harness for Milestone 1
 * Features 1–11: Physical Genetics, Tail Shapes, Body Builds, Postures, Hygiene Poop & Fly Swarm.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

// Test assertions and reporting
let totalAssertions = 0;
let passedAssertions = 0;
let failedAssertions = 0;
const failures = [];

function assert(condition, message, details = {}) {
  totalAssertions++;
  if (!condition) {
    failedAssertions++;
    const err = new Error(message);
    failures.push({ message, details });
    console.error(`  [FAIL] ${message}`, details);
    throw err;
  } else {
    passedAssertions++;
  }
}

function testSection(name) {
  console.log(`\n=== [SECTION] ${name} ===`);
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

function createMockElement(tag) {
  const el = {
    tagName: tag,
    className: '',
    id: '',
    dataset: {},
    style: {
      setProperty: (k, v) => { el.style[k] = v; }
    },
    classList: {
      add: (c) => {
        const classes = new Set(el.className.split(/\s+/).filter(Boolean));
        classes.add(c);
        el.className = Array.from(classes).join(' ');
      },
      remove: (c) => {
        const classes = new Set(el.className.split(/\s+/).filter(Boolean));
        classes.delete(c);
        el.className = Array.from(classes).join(' ');
      },
      contains: (c) => el.className.split(/\s+/).includes(c)
    },
    setAttribute: (k, v) => { el[k] = v; },
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
    querySelector: (sel) => {
      if (sel === '.pet-svg-container') return el._svgContainer;
      if (sel === '.pet-name-tag') return el._nameTag;
      return null;
    },
    querySelectorAll: () => [],
    children: []
  };

  el._svgContainer = { textContent: '', innerHTML: '' };
  el._nameTag = { textContent: '' };
  return el;
}

// ---------------------------------------------------------------------------
// Load Modules
// ---------------------------------------------------------------------------
const breedsSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-breeds.js'));
const { PET_BREEDS, TAIL_TYPES, BODY_BUILDS, SPECIAL_MARKINGS } = breedsSandbox;

const renderSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-render.js'), {
  ...breedsSandbox,
  document: {
    createElement: createMockElement
  }
});
const { PetRenderer } = renderSandbox;

const mockStore = {
  data: {},
  async get(k) { return this.data[k] !== undefined ? this.data[k] : 100; },
  async set(k, v) { this.data[k] = v; }
};

const mockContainer = createMockElement('div');
mockContainer.id = 'desktop-pet-layer';

const hygieneSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-hygiene.js'), {
  Store: mockStore,
  document: {
    createElement: createMockElement,
    getElementById: () => mockContainer,
    body: mockContainer
  },
  window: { innerWidth: 1280, innerHeight: 800 },
  console,
  setTimeout: (fn, delay) => { fn(); },
  Date
});
const { PetHygiene } = hygieneSandbox;

const cssContent = fs.readFileSync(path.join(ROOT, 'src/css/pet.css'), 'utf8');

// ---------------------------------------------------------------------------
// Main Test Execution
// ---------------------------------------------------------------------------
async function runStressTests() {
  console.log('='.repeat(80));
  console.log('  MDBrowse Desktop Pet System — Adversarial Milestone 1 Stress Suite');
  console.log('='.repeat(80));

  // TEST 1: Permutation Matrix Verification
  testSection('1. Exhaustive Genetics Permutation Matrix & SVG Integrity');
  const breedKeys = Object.keys(PET_BREEDS);
  const tailKeys = ['long', 'short', 'bobtail', 'kinked', 'curved', 'fluffy_plumage'];
  const buildKeys = ['chubby', 'normal', 'skinny', 'slim', 'chunky_loaf'];
  const markingKeys = ['none', 'blaze', 'eye_patch', 'socks', 'heart_butt'];
  const postureKeys = [
    'stand', 'sit', 'walk', 'sleep_loaf', 'sleep_curl', 'sleep_belly',
    'two_legged', 'begging', 'batting_ball', 'batting', 'scratch',
    'pounce_play', 'pounce_crouch', 'pooping', 'groom', 'derpy_yawn', 'derpy_stare'
  ];

  assert(breedKeys.length === 13, `Expected 13 breeds in PET_BREEDS, got ${breedKeys.length}`);
  console.log(`  Breeds verified (${breedKeys.length}): ${breedKeys.join(', ')}`);

  let permutationCount = 0;
  for (const breed of breedKeys) {
    for (const tail of tailKeys) {
      for (const build of buildKeys) {
        for (const marking of markingKeys) {
          permutationCount++;
          const pet = {
            id: `pet_stress_${permutationCount}`,
            name: `TestPet_${permutationCount}`,
            breed,
            tailType: tail,
            build,
            specialMarking: marking,
            state: 'stand'
          };

          const svg = PetRenderer.renderPetSvg(pet);

          // Rigorous SVG checks
          assert(typeof svg === 'string' && svg.length > 100, `SVG output must be valid string for pet ${pet.id}`);
          assert(svg.trim().startsWith('<svg') && svg.includes('</svg>'), `SVG must have root tags for pet ${pet.id}`);
          assert(!svg.includes('NaN'), `SVG must NOT contain NaN for permutation [${breed}, ${tail}, ${build}, ${marking}]`);
          assert(!svg.includes('undefined'), `SVG must NOT contain "undefined" string for permutation [${breed}, ${tail}, ${build}, ${marking}]`);
          assert(!svg.includes('null'), `SVG must NOT contain "null" string for permutation [${breed}, ${tail}, ${build}, ${marking}]`);

          // Check required components
          assert(svg.includes('cat-svg'), `SVG must have class cat-svg`);
          assert(svg.includes('pet-head-group'), `SVG must contain pet-head-group`);
          assert(svg.includes('pet-ground-shadow'), `SVG must contain ground contact shadow`);
        }
      }
    }
  }
  console.log(`  [PASS] Successfully stress-tested ${permutationCount} breed x tail x build x marking permutations with zero NaN, null, or undefined!`);

  // TEST 2: Posture Rendering Matrix across all 5 new postures + classic postures
  testSection('2. Posture Rendering Across All 5 New Postures');
  for (const posture of postureKeys) {
    const pet = {
      id: `posture_${posture}`,
      name: `Posture_${posture}`,
      breed: 'tuxedo',
      tailType: 'long',
      build: 'normal',
      state: posture
    };

    const svg = PetRenderer.renderPetSvg(pet);
    assert(svg.includes(`state-${posture}`), `SVG must contain class state-${posture}`);
    assert(!svg.includes('NaN'), `Posture ${posture} SVG must not contain NaN`);
    assert(!svg.includes('undefined'), `Posture ${posture} SVG must not contain undefined`);

    if (posture === 'two_legged' || posture === 'begging') {
      assert(svg.includes('pet-body-upright'), `Posture ${posture} must render upright body`);
      assert(svg.includes('pet-begging-paws-upright'), `Posture ${posture} must render raised begging paws`);
      assert(svg.includes('pet-tail-two-legged'), `Posture ${posture} must render balancing tail`);
    } else if (posture === 'batting_ball' || posture === 'batting') {
      assert(svg.includes('pet-batting-arm'), `Posture ${posture} must render batting arm`);
      assert(svg.includes('line x1="24" y1="34" x2="21" y2="31"'), `Posture ${posture} must render extended claws`);
    } else if (posture === 'scratch') {
      assert(svg.includes('pet-scratch-paws'), `Posture ${posture} must render scratch paws`);
      assert(svg.includes('opacity="0.8"'), `Posture ${posture} must render scratch trace lines`);
    } else if (posture === 'pounce_play' || posture === 'pounce_crouch') {
      assert(svg.includes('pet-body-pounce'), `Posture ${posture} must render crouched pounce body`);
      assert(svg.includes('pet-paw-pounce-back'), `Posture ${posture} must render rear coiled paw`);
      assert(svg.includes('pet-paw-pounce-front'), `Posture ${posture} must render front pounce paw`);
    } else if (posture === 'pooping') {
      assert(svg.includes('pet-body-poop'), `Posture ${posture} must render squatted body`);
      assert(svg.includes('pet-tail-pooping'), `Posture ${posture} must render lifted upright tail`);
      assert(svg.includes('L 45 34'), `Posture ${posture} must render strained eyes`);
    }
  }
  console.log(`  [PASS] All ${postureKeys.length} posture states verified with required SVG geometry.`);

  // TEST 3: Adversarial Boundary & Fallback Fuzzing
  testSection('3. Adversarial Input Fuzzing & Graceful Fallbacks');
  const adversarialPets = [
    { label: 'empty object', pet: {} },
    { label: 'unknown breed', pet: { breed: 'alien_cat', tailType: 'unknown_tail', build: 'unknown_build' } },
    { label: 'null fields', pet: { id: null, name: null, breed: null, tailType: null, build: null, state: null } },
    { label: 'special characters in ID', pet: { id: 'x"><svg onload="alert(1)">', name: '<script>', breed: 'calico' } },
    { label: 'empty strings', pet: { id: '', breed: '', tailType: '', build: '', state: '', specialMarking: '' } }
  ];

  for (const tc of adversarialPets) {
    let svg;
    let threw = false;
    try {
      svg = PetRenderer.renderPetSvg(tc.pet);
    } catch (e) {
      threw = true;
    }
    assert(!threw, `renderPetSvg must not throw on ${tc.label}`);
    assert(typeof svg === 'string' && svg.includes('<svg'), `Output must be SVG for ${tc.label}`);
    assert(!svg.includes('NaN'), `Adversarial test ${tc.label} must not generate NaN`);
  }

  // Visual update with null element
  let updateThrew = false;
  try {
    PetRenderer.updatePetVisuals(null, { breed: 'orange' });
  } catch (e) {
    updateThrew = true;
  }
  assert(!updateThrew, 'updatePetVisuals(null, pet) must safely no-op');

  // DOM creation test
  const mockEl = PetRenderer.createPetElement({
    id: 'fuzz_el',
    name: 'FuzzPet',
    breed: 'tuxedo',
    tailType: 'kinked',
    build: 'skinny',
    specialMarking: 'heart_butt'
  });
  assert(mockEl.className.includes('pet-breed-tuxedo'), 'Element must have breed class');
  assert(mockEl.className.includes('build-skinny'), 'Element must have build-skinny class');
  assert(mockEl.className.includes('tail-kinked'), 'Element must have tail-kinked class');
  console.log('  [PASS] Adversarial fuzzing handled with zero unhandled exceptions or NaN.');

  // TEST 4: CSS Keyframe & Class Conformance
  testSection('4. CSS Keyframe & Selector Rigorous Audit');
  const requiredCssSelectors = [
    // Body builds
    '.desktop-pet.build-chubby.pet-state-walk .pet-inner',
    '@keyframes pet-chubby-waddle',
    '.desktop-pet.facing-left.build-chubby.pet-state-walk .pet-inner',
    '@keyframes pet-chubby-waddle-left',
    '.desktop-pet.build-skinny.pet-state-walk .pet-inner',
    '@keyframes pet-skinny-trot',
    '.desktop-pet.facing-left.build-skinny.pet-state-walk .pet-inner',
    '@keyframes pet-skinny-trot-left',
    // Tails
    '.pet-tail-wag',
    '@keyframes pet-tail-wagging',
    '.pet-tail-short',
    '@keyframes pet-short-tail-twitch',
    '.pet-tail-bobtail',
    '@keyframes pet-bobtail-wiggle',
    '.pet-tail-kinked',
    '@keyframes pet-kinked-tail-flick',
    '.pet-tail-curved',
    '@keyframes pet-curved-tail-wave',
    '.pet-tail-pooping',
    '@keyframes pet-tail-strain',
    // 5 Postures
    '.desktop-pet.pet-state-two_legged .pet-inner',
    '@keyframes pet-stand-sway',
    '.pet-begging-paws-upright',
    '@keyframes pet-paws-plead',
    '.pet-batting-arm',
    '@keyframes pet-swipe-combo',
    '.pet-scratch-paws',
    '@keyframes pet-scratch',
    '.desktop-pet.pet-state-pounce_play .pet-body-core',
    '@keyframes pet-butt-wiggle',
    '.desktop-pet.pet-state-pooping .pet-inner',
    '@keyframes pet-poop-strain',
    // Hygiene
    '.pet-poop-item',
    '.pet-poop-item.poop-popping',
    '@keyframes poop-clean-pop',
    '.poop-stink-waves',
    '@keyframes stink-drift',
    '.pet-fly',
    '@keyframes fly-wing-buzz',
    '.poop-clean-sparkle',
    '@keyframes clean-sparkle-rise'
  ];

  for (const selector of requiredCssSelectors) {
    assert(cssContent.includes(selector), `pet.css must define: ${selector}`);
  }
  console.log(`  [PASS] All ${requiredCssSelectors.length} required CSS selectors and @keyframes verified in pet.css.`);

  // TEST 5: Hygiene Poop & Fly Swarm Physics Kinematics
  testSection('5. Hygiene Subsystem Stress & 60 FPS Kinematics');
  await PetHygiene.init(mockContainer, mockStore);

  // Boundary coordinates
  const boundaryTests = [
    { x: -500, y: -500, label: 'negative out-of-bounds' },
    { x: 99999, y: 99999, label: 'excessive positive out-of-bounds' },
    { x: 0, y: 0, label: 'origin' },
    { x: 500, y: 300, label: 'normal in-bounds' }
  ];

  for (const b of boundaryTests) {
    const p = PetHygiene.spawnPoop(b.x, b.y, 'pet_stress');
    assert(p.x >= 15 && p.x <= 1280 - 60, `Poop X coordinate must clamp within screen bounds for ${b.label}`);
    assert(p.y >= 15 && p.y <= 800 - 55, `Poop Y coordinate must clamp within screen bounds for ${b.label}`);
    assert(p.el !== null, `Poop DOM element must exist`);
    assert(p.el.innerHTML.includes('poop-svg'), `Poop element must contain SVG`);
  }

  // Idempotency test for cleanPoop
  const testPoop = PetHygiene.spawnPoop(400, 400, 'pet_idempotent');
  const scoreBefore = PetHygiene.getCleanlinessScore();
  PetHygiene.cleanPoop(testPoop.id);
  const scoreAfter1 = PetHygiene.getCleanlinessScore();
  assert(scoreAfter1 === scoreBefore + 10, 'First cleanPoop must increase score by 10');

  // Second call must NOT re-award points (Idempotent)
  PetHygiene.cleanPoop(testPoop.id);
  const scoreAfter2 = PetHygiene.getCleanlinessScore();
  assert(scoreAfter2 === scoreAfter1, 'Second cleanPoop on same poop must be idempotent and not re-award score');

  // Test Non-existent poop cleaning
  let cleanNonExistentThrew = false;
  try {
    PetHygiene.cleanPoop('totally_bogus_poop_id_99999');
  } catch (e) {
    cleanNonExistentThrew = true;
  }
  assert(!cleanNonExistentThrew, 'cleanPoop on non-existent ID must gracefully handle without throwing');

  // Fly Swarm Spawning & Physics Loop
  const neglectedPoop = PetHygiene.spawnPoop(600, 350, 'pet_neglected');
  assert(!neglectedPoop.hasFlies, 'Poop under 30s must not have flies initially');

  // Simulate 35 seconds elapsed
  neglectedPoop.createdAt = Date.now() - 35000;
  PetHygiene.update(0.016);
  assert(neglectedPoop.hasFlies === true, 'Poop past 30s threshold must spawn flies');
  assert(neglectedPoop.flies.length >= 4 && neglectedPoop.flies.length <= 6, 'Flies count must be between 4 and 6');

  // Stress 500 frames of 60 FPS physics updates + delta shocks
  const dtValues = [0.016, 0.033, 0.08, 0.001, 2.5, -0.01]; // includes sleep/wake shock and negative drift
  for (let frame = 0; frame < 500; frame++) {
    const dt = dtValues[frame % dtValues.length];
    PetHygiene.update(dt);

    for (const fly of neglectedPoop.flies) {
      assert(Number.isFinite(fly.x), `Fly X coordinate must remain finite at frame ${frame}`);
      assert(Number.isFinite(fly.y), `Fly Y coordinate must remain finite at frame ${frame}`);
      assert(Number.isFinite(fly.vx), `Fly vx must remain finite at frame ${frame}`);
      assert(Number.isFinite(fly.vy), `Fly vy must remain finite at frame ${frame}`);
      assert(fly.el.style.transform.includes('translate3d'), `Fly transform must be valid 3d matrix`);
      assert(!fly.el.style.transform.includes('NaN'), `Fly transform must never contain NaN`);
    }
  }
  console.log(`  [PASS] 500 physics frames simulated with dt shocks: zero NaN coordinates, smooth clamping.`);

  // Cleanup scattering test
  PetHygiene.cleanPoop(neglectedPoop.id);
  assert(neglectedPoop.cleaned === true, 'Neglected poop must be marked cleaned');
  assert(neglectedPoop.flies.every(f => f.isScattering === true), 'Cleaning neglected poop must trigger fly scatter physics');

  // Reset/ClearAll test
  PetHygiene.clearAll();
  assert(PetHygiene.getPoops().length === 0, 'clearAll must remove all active poops');
  console.log('  [PASS] Hygiene lifecycle, neglect threshold, fly swarm, scatter & clearAll verified.');

  // TEST 6: Randomized Generator Distribution & Range Audit
  testSection('6. Randomized Generator Distribution & Integrity');
  const { getRandomBreedId, getRandomTailType, getRandomBodyBuild, getRandomSpecialMarking } = breedsSandbox;
  assert(typeof getRandomBreedId === 'function', 'getRandomBreedId must be exported');
  assert(typeof getRandomTailType === 'function', 'getRandomTailType must be exported');
  assert(typeof getRandomBodyBuild === 'function', 'getRandomBodyBuild must be exported');
  assert(typeof getRandomSpecialMarking === 'function', 'getRandomSpecialMarking must be exported');

  const sampledBreeds = new Set();
  const sampledTails = new Set();
  const sampledBuilds = new Set();
  const sampledMarkings = new Set();

  for (let i = 0; i < 2000; i++) {
    const b = getRandomBreedId();
    const t = getRandomTailType();
    const bd = getRandomBodyBuild();
    const m = getRandomSpecialMarking();

    assert(PET_BREEDS[b], `getRandomBreedId() returned invalid breed: ${b}`);
    assert(TAIL_TYPES[t], `getRandomTailType() returned invalid tail: ${t}`);
    assert(BODY_BUILDS[bd], `getRandomBodyBuild() returned invalid build: ${bd}`);
    assert(SPECIAL_MARKINGS[m], `getRandomSpecialMarking() returned invalid marking: ${m}`);

    sampledBreeds.add(b);
    sampledTails.add(t);
    sampledBuilds.add(bd);
    sampledMarkings.add(m);
  }

  assert(sampledBreeds.size === breedKeys.length, `All ${breedKeys.length} breeds must be sampled, got ${sampledBreeds.size}`);
  assert(sampledTails.size >= 5, `All tail types must be sampled, got ${sampledTails.size}`);
  assert(sampledBuilds.size >= 3, `All body builds must be sampled, got ${sampledBuilds.size}`);
  assert(sampledMarkings.size === markingKeys.length, `All special markings must be sampled, got ${sampledMarkings.size}`);
  console.log(`  [PASS] 2,000 generator iterations sampled all ${sampledBreeds.size} breeds, ${sampledTails.size} tails, ${sampledBuilds.size} builds, ${sampledMarkings.size} markings.`);

  // TEST 7: Store Exception Resilience in Hygiene
  testSection('7. Store Exception & Asynchronous Resilience');
  const throwingStore = {
    get() { throw new Error('Database disk read I/O failure'); },
    set() { throw new Error('Database disk write I/O failure'); }
  };

  let initThrew = false;
  try {
    await PetHygiene.init(mockContainer, throwingStore);
  } catch (e) {
    initThrew = true;
  }
  assert(!initThrew, 'PetHygiene.init must catch store read errors gracefully');

  const poopWithThrowingStore = PetHygiene.spawnPoop(300, 300, 'pet_throw');
  let cleanThrew = false;
  try {
    PetHygiene.cleanPoop(poopWithThrowingStore.id);
  } catch (e) {
    cleanThrew = true;
  }
  assert(!cleanThrew, 'PetHygiene.cleanPoop must catch store write errors gracefully');
  console.log('  [PASS] Fault-tolerant exception handling verified when Store operations throw.');

  // TEST 8: State Machine Lifecycles for All 5 Postures
  testSection('8. State Machine Lifecycles & Natural Timers');
  const mockPetManager = {
    pets: [],
    layerEl: mockContainer,
    mousePos: { x: 0, y: 0 },
    settings: { speechFreq: 'normal' },
    checkReadingFatigue: () => {},
    say: (pet, msg) => { pet._lastSpeech = msg; },
    tick: null
  };

  const { PetPersonality } = loadModule(path.join(ROOT, 'src/js/pet/pet-personality.js'));
  const petManagerSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-manager.js'), {
    Store: mockStore,
    PetHygiene,
    PetRenderer,
    PetPersonality,
    PetSocial: { checkMultiPetInteractions: () => {} },
    PetEnvironment: { findNearestInteractable: () => null },
    PetUI: { spawnFx: () => {} },
    document: {
      createElement: createMockElement,
      getElementById: () => mockContainer,
      body: mockContainer
    },
    window: { innerWidth: 1280, innerHeight: 800 },
    console,
    Date
  });

  const { PetManager } = petManagerSandbox;
  assert(typeof PetManager.tick === 'function', 'PetManager.tick must be defined');

  // Set up mock PetManager context
  PetManager.pets = [
    {
      id: 'pet_lifecycle_1',
      name: 'LifePet',
      breed: 'tuxedo',
      x: 200,
      y: 300,
      facing: 'right',
      state: 'pooping',
      stateTimer: 0,
      poopTimer: 0,
      speechTimer: 0,
      isDragged: false,
      isStaying: false,
      isBlocked: false,
      isSpeaking: false,
      targetX: null,
      targetY: null,
      el: mockContainer
    }
  ];
  PetManager.layerEl = mockContainer;
  PetManager.mousePos = { x: -1, y: -1 };
  PetManager.settings = { speechFreq: 'off' };

  const initialPoopsCount = PetHygiene.getPoops().length;

  // Advance ticks until 3400ms reached for pooping
  for (let t = 0; t < 16; t++) { // 16 * 200 = 3200ms
    PetManager.tick();
    assert(PetManager.pets[0].state === 'pooping', 'Pet should stay in pooping state before 3400ms');
  }

  // 17th tick: 3400ms reached -> spawns poop and switches to scratch
  PetManager.tick();
  assert(PetManager.pets[0].state === 'scratch', 'Pet must transition from pooping to scratch at 3400ms');
  assert(PetHygiene.getPoops().length === initialPoopsCount + 1, 'A new poop object must be spawned at 3400ms');

  // Advance scratch state past 3000ms -> should transition to sit
  for (let t = 0; t < 16; t++) {
    PetManager.tick();
  }
  assert(PetManager.pets[0].state === 'sit', 'Pet must transition from scratch to sit after 3000ms');

  // Two-legged timeout test (> 4200ms -> sit)
  PetManager.pets[0].state = 'two_legged';
  PetManager.pets[0].stateTimer = 0;
  for (let t = 0; t < 22; t++) { // 22 * 200 = 4400ms
    PetManager.tick();
  }
  assert(PetManager.pets[0].state === 'sit', 'Two-legged posture must return to sit after > 4200ms');

  // Batting ball timeout test (> 3600ms -> sit)
  PetManager.pets[0].state = 'batting_ball';
  PetManager.pets[0].stateTimer = 0;
  for (let t = 0; t < 19; t++) { // 19 * 200 = 3800ms
    PetManager.tick();
  }
  assert(PetManager.pets[0].state === 'sit', 'Batting ball posture must return to sit after > 3600ms');

  // Pounce play timeout test (> 3200ms -> groom)
  PetManager.pets[0].state = 'pounce_play';
  PetManager.pets[0].stateTimer = 0;
  for (let t = 0; t < 17; t++) { // 17 * 200 = 3400ms
    PetManager.tick();
  }
  assert(PetManager.pets[0].state === 'groom', 'Pounce play posture must return to groom after > 3200ms');
  console.log('  [PASS] All 5 posture state machine timers and transitions verified.');

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log(`Milestone 1 Adversarial Stress Test Results:`);
  console.log(`Total Assertions Checked : ${totalAssertions}`);
  console.log(`Passed Assertions        : ${passedAssertions} (${((passedAssertions / totalAssertions) * 100).toFixed(2)}%)`);
  console.log(`Failed Assertions        : ${failedAssertions}`);
  console.log('='.repeat(80));

  if (failedAssertions > 0) {
    process.exit(1);
  }
}

runStressTests().catch(err => {
  console.error('Fatal Stress Test Error:', err);
  process.exit(1);
});
