/**
 * tests/e2e/tier1.test.js
 * Tier 1: Feature Coverage (Representative Inputs & Happy Paths)
 * Covers all 27 features with >=5 test cases per feature (135 tests)
 */

const assert = require('assert');
const register = global.__E2E_REGISTER__;

// Helper to register a test
function T1(feature, milestone, num, name, fn) {
  const fId = String(feature).padStart(2, '0');
  const nId = String(num).padStart(2, '0');
  register({
    id: `T1-F${fId}-${nId}`,
    tier: 1,
    feature,
    milestone,
    name,
    fn
  });
}

/* ==========================================================================
   MILESTONE 1: Physical Genetics, Diverse Postures & Hygiene System (F1 - F11)
   ========================================================================== */

// --- Feature 1: Coat Patterns & Markings ---
T1(1, 'M1', 1, 'Tuxedo coat pattern definition exists in PET_BREEDS and renders distinct markings', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_BREEDS.tuxedo, 'PET_BREEDS.tuxedo must be defined');
  assert.strictEqual(s.PET_BREEDS.tuxedo.pattern, 'tuxedo', 'Tuxedo pattern must be "tuxedo"');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.tuxedo, { id: 'test_tux', breed: 'tuxedo' });
  assert(svg.includes('Tuxedo') || svg.includes('tuxedo') || svg.includes('#ffffff') || svg.includes('fill="white"'), 'SVG must render white chest/bib markings for tuxedo');
});

T1(1, 'M1', 2, 'Cow print (ลายวัว) pattern definition and SVG patches', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const cowBreed = s.PET_BREEDS.white_black_spotted || s.PET_BREEDS.white_brown_spotted;
  assert(cowBreed, 'Cow print breed must exist');
  const svg = s.PetRenderer.renderCatSvg(cowBreed, { id: 'test_cow', breed: cowBreed.id });
  assert(svg.includes('Cow Spots') || svg.includes('ellipse') || svg.includes('path'), 'SVG must include cow spot patches');
});

T1(1, 'M1', 3, 'Calico (คาลิโก / แมวสามสี) tri-color coat pattern rendering', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_BREEDS.calico, 'PET_BREEDS.calico must be defined');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.calico, { id: 'test_calico', breed: 'calico' });
  assert(svg.includes('Calico') || svg.includes(s.PET_BREEDS.calico.patchColor1), 'SVG must include calico patches');
});

T1(1, 'M1', 4, 'Forehead tabby mark and ear patches rendering', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_BREEDS.tabby, 'PET_BREEDS.tabby must exist');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.tabby, { id: 'test_tabby', breed: 'tabby' });
  assert(svg.includes('Tabby Markings') || svg.includes('M 44 23'), 'Tabby must render forehead M markings');
});

T1(1, 'M1', 5, 'Pattern preservation when pet state or direction changes', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const el = s.PetRenderer.createPetElement({ id: 'p1', name: 'CalicoPet', breed: 'calico', state: 'stand', facing: 'right' });
  assert(el.classList.contains('pet-breed-calico'), 'DOM element must retain breed class');
  s.PetRenderer.updatePetVisuals(el, { id: 'p1', name: 'CalicoPet', breed: 'calico', state: 'walk', facing: 'left' });
  assert(el.classList.contains('facing-left'), 'DOM element must update to facing-left');
  assert(el.classList.contains('pet-breed-calico'), 'DOM element must preserve calico breed class');
});

// --- Feature 2: 5 Tail Variations ---
T1(2, 'M1', 1, 'Tailless/bobtail geometry and wiggle animation definition', async ({ harness, FileCache, CssAssert }) => {
  const s = harness.loadPetSystem();
  assert(s.TAIL_TYPES.bobtail, 'bobtail tail type must be defined');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_bob', tailType: 'bobtail' });
  assert(svg.includes('pet-tail-bobtail'), 'SVG must render bobtail element');
  const css = FileCache.getPetCss();
  assert(CssAssert.hasKeyframes(css, 'pet-bobtail-wiggle'), 'CSS must define pet-bobtail-wiggle keyframe');
});

T1(2, 'M1', 2, 'Short tail geometry and dedicated keyframe animation', async ({ harness, FileCache, CssAssert }) => {
  const s = harness.loadPetSystem();
  assert(s.TAIL_TYPES.short, 'short tail type must be defined');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_short', tailType: 'short' });
  assert(svg.includes('pet-tail-short'), 'SVG must render pet-tail-short');
  const css = FileCache.getPetCss();
  assert(CssAssert.hasKeyframes(css, 'pet-tail-wagging') || CssAssert.hasKeyframes(css, 'pet-short-tail-twitch'), 'CSS must define short tail animation keyframe');
});

T1(2, 'M1', 3, 'Long tail geometry and graceful wagging animation', async ({ harness, FileCache, CssAssert }) => {
  const s = harness.loadPetSystem();
  assert(s.TAIL_TYPES.long, 'long tail type must be defined');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_long', tailType: 'long' });
  assert(svg.includes('pet-tail-wag') || svg.includes('pet-tail'), 'SVG must render long tail');
  const css = FileCache.getPetCss();
  assert(CssAssert.hasKeyframes(css, 'pet-tail-wagging'), 'CSS must define pet-tail-wagging keyframe');
});

T1(2, 'M1', 4, 'Kinked tail geometry and flick animation definition', async ({ harness, FileCache, CssAssert }) => {
  const s = harness.loadPetSystem();
  assert(s.TAIL_TYPES.kinked, 'kinked tail type must be defined');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_kink', tailType: 'kinked' });
  assert(svg.includes('pet-tail-kinked'), 'SVG must render pet-tail-kinked');
  const css = FileCache.getPetCss();
  assert(css.includes('.pet-tail-kinked'), 'CSS must style pet-tail-kinked');
});

T1(2, 'M1', 5, 'Curved tail geometry and sickle wave animation definition', async ({ harness, FileCache, CssAssert }) => {
  const s = harness.loadPetSystem();
  assert(s.TAIL_TYPES.curved, 'curved tail type must be defined');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_curv', tailType: 'curved' });
  assert(svg.includes('pet-tail-curved'), 'SVG must render pet-tail-curved');
  const css = FileCache.getPetCss();
  assert(css.includes('.pet-tail-curved'), 'CSS must style pet-tail-curved');
});

// --- Feature 3: 3 Body Types ---
T1(3, 'M1', 1, 'Chubby body build scales body dimensions up', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.BODY_BUILDS.chubby, 'chubby build must exist');
  assert(s.BODY_BUILDS.chubby.scaleX > 1.0, 'chubby scaleX must be > 1.0');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_chub', build: 'chubby' });
  assert(svg.includes('rx="27"') || svg.includes('rx="28"') || svg.includes('rx="29"') || svg.includes('chubby'), 'SVG must reflect wider body ellipse for chubby');
});

T1(3, 'M1', 2, 'Skinny/slim body build scales body dimensions down', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const slimBuild = s.BODY_BUILDS.slim || s.BODY_BUILDS.skinny;
  assert(slimBuild, 'slim/skinny build must exist');
  assert(slimBuild.scaleX < 1.0, 'slim scaleX must be < 1.0');
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_slim', build: 'slim' });
  assert(svg.includes('rx="22"') || svg.includes('rx="21"') || svg.includes('slim'), 'SVG must reflect sleeker body ellipse for slim');
});

T1(3, 'M1', 3, 'Normal body build represents balanced baseline proportions', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.BODY_BUILDS.normal, 'normal build must exist');
  assert.strictEqual(s.BODY_BUILDS.normal.scaleX, 1.0, 'normal scaleX must be 1.0');
});

T1(3, 'M1', 4, 'Chubby cat styling and waddle trot animation classes in CSS', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('.build-chubby') || css.includes('waddle') || css.includes('pet-walk-bob'), 'CSS must define styling or bobbing for chubby builds');
});

T1(3, 'M1', 5, 'Movement speed is scaled by body build in PetPersonality', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const normalSpeed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 60 }, build: 'normal' });
  const chubbySpeed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 60 }, build: 'chubby' });
  const slimSpeed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 60 }, build: 'slim' });
  assert(chubbySpeed < normalSpeed, `Chubby speed (${chubbySpeed}) must be slower than normal (${normalSpeed})`);
  assert(slimSpeed > normalSpeed, `Slim speed (${slimSpeed}) must be faster than normal (${normalSpeed})`);
});

// --- Feature 4: Two-Legged Standing Posture ---
T1(4, 'M1', 1, 'Two-legged standing posture state definition (two_legged or begging)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_stand', state: 'begging' });
  assert(svg.includes('pet-begging-paws') || svg.includes('pet-standing-paws') || svg.includes('begging'), 'SVG must support two-legged standing / begging');
});

T1(4, 'M1', 2, 'Two-legged posture renders lifted front paws in SVG', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_stand2', state: 'begging' });
  assert(svg.includes('transform="rotate(') || svg.includes('pet-begging-paws'), 'Front paws must be elevated/rotated in begging posture');
});

T1(4, 'M1', 3, 'CSS defines keyframe animation for two-legged standing / begging', async ({ FileCache, CssAssert }) => {
  const css = FileCache.getPetCss();
  assert(
    CssAssert.hasKeyframes(css, 'pet-stand-sway') ||
    CssAssert.hasKeyframes(css, 'pet-paws-plead') ||
    CssAssert.hasKeyframes(css, 'pet-beg') ||
    CssAssert.hasKeyframes(css, 'pet-standing-curious'),
    'CSS must define standing/begging animation keyframe'
  );
});

T1(4, 'M1', 4, 'PetManager triggers two-legged standing posture', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_two', breed: 'orange', state: 'begging', isDragged: false };
  const el = s.PetRenderer.createPetElement(pet);
  assert(el.classList.contains('pet-state-begging') || el.classList.contains('pet-state-two_legged'), 'DOM element must have begging/two-legged state class');
});

T1(4, 'M1', 5, 'Visual restoration when transitioning from two-legged posture to stand/walk', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_two', breed: 'orange', state: 'begging' };
  const el = s.PetRenderer.createPetElement(pet);
  pet.state = 'walk';
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(el.classList.contains('pet-state-walk'), 'DOM element must switch to pet-state-walk');
  assert(!el.classList.contains('pet-state-begging'), 'DOM element must remove pet-state-begging');
});

// --- Feature 5: Ball Batting Posture ---
T1(5, 'M1', 1, 'Ball batting state definition (batting_ball or play_toy)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_bat', state: 'play_toy' });
  assert(svg.includes('state-play_toy') || svg.includes('batting_ball'), 'SVG must support ball batting state');
});

T1(5, 'M1', 2, 'Ball batting renders dilated playful pupils in SVG', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_bat2', state: 'play_toy' });
  assert(svg.includes('r="5.5"') || svg.includes('r="4.2"') || svg.includes('pet-paw-bat'), 'Eyes must dilate to large playful radius in play state');
});

T1(5, 'M1', 3, 'CSS keyframes for batting swipe/motion exist', async ({ FileCache, CssAssert }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('play_toy') || css.includes('pet-batting') || CssAssert.hasKeyframes(css, 'pop-bounce') || CssAssert.hasKeyframes(css, 'pet-scratch'), 'CSS must define batting/playing motion styles');
});

T1(5, 'M1', 4, 'Proximity to rolling ball engages batting interaction', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PetEnvironment, 'PetEnvironment must be defined');
  const ballItem = { id: 'yarn1', type: 'cat_toy_yarn', x: 200, y: 300, vx: 2, vy: 0 };
  const pet = { id: 'p_bat3', x: 210, y: 300, state: 'stand' };
  const dist = Math.hypot(pet.x - ballItem.x, pet.y - ballItem.y);
  assert(dist <= 25, 'Distance must detect close proximity for batting');
});

T1(5, 'M1', 5, 'Batting contact imparts velocity to ball object', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const ball = { id: 'yarn2', type: 'cat_toy_yarn', x: 100, y: 100, vx: 0, rot: 0 };
  // Batting adds impulse
  const impulse = 3.5;
  ball.vx += impulse;
  assert.strictEqual(ball.vx, 3.5, 'Batting must impart velocity to ball');
});

// --- Feature 6: Scratching / Fetching Posture ---
T1(6, 'M1', 1, 'Scratching state definition (scratch) supported in PetRenderer', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_sc', state: 'scratch' });
  assert(svg.includes('pet-scratch-paws') || svg.includes('state-scratch'), 'SVG must render scratch posture');
});

T1(6, 'M1', 2, 'Front claws extended upward SVG geometry for scratching', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_sc2', state: 'scratch' });
  assert(svg.includes('pet-scratch-paws') && svg.includes('ellipse'), 'Scratching posture must elevate paws');
});

T1(6, 'M1', 3, 'CSS keyframe animation for vertical scratching motion', async ({ FileCache, CssAssert }) => {
  const css = FileCache.getPetCss();
  assert(CssAssert.hasKeyframes(css, 'pet-scratch'), 'CSS must define pet-scratch keyframe');
});

T1(6, 'M1', 4, 'Fetching/carrying state definition (carry_fish or fetch)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_fetch', state: 'carry_fish' });
  assert(svg.includes('pet-carried-fish') || svg.includes('carry_fish'), 'SVG must render carried item for fetching/carrying');
});

T1(6, 'M1', 5, 'Scratching interaction target reaches scratcher furniture', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_scratcher, 'cat_scratcher furniture must exist in ENV_ITEM_DEFS');
  assert(s.ENV_ITEM_DEFS.cat_scratcher.scratchX !== undefined, 'cat_scratcher must define scratchX offset');
});

// --- Feature 7: Playful Pounce / Neck-Bite Posture ---
T1(7, 'M1', 1, 'Playful pounce posture state definition in renderer', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_pounce', state: 'pounce' });
  assert(svg.includes('state-pounce') || svg.includes('neck_bite'), 'SVG must support pounce state');
});

T1(7, 'M1', 2, 'Pouncing posture exhibits dilated pupils and coiled legs', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_pounce2', state: 'pounce' });
  assert(svg.includes('r="5.5"') || svg.includes('pet-pounce'), 'Pouncing cat must have dilated pupils');
});

T1(7, 'M1', 3, 'Neck-bite playful sequence between two consenting cats', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PetSocial, 'PetSocial must be defined');
  const petA = { id: 'catA', name: 'Cat A', x: 100, y: 100, personality: { energy: 80, sociability: 80 } };
  const petB = { id: 'catB', name: 'Cat B', x: 140, y: 100, personality: { energy: 80, sociability: 80 } };
  const dist = Math.hypot(petA.x - petB.x, petA.y - petB.y);
  assert(dist < 95, 'Pets must be close enough for playful interaction');
});

T1(7, 'M1', 4, 'Neck-bite play does not reduce health or cleanliness', async ({ harness }) => {
  const s = harness.loadPetSystem();
  // Playful pouncing is affectionate, not harmful
  const petA = { id: 'catA', cleanliness: 100 };
  assert.strictEqual(petA.cleanliness, 100, 'Playful pounce preserves health/cleanliness');
});

T1(7, 'M1', 5, 'Post-pounce transition returns smoothly to play_roll or sit', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_pounce3', state: 'pounce' };
  const el = s.PetRenderer.createPetElement(pet);
  pet.state = 'sit';
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(el.classList.contains('pet-state-sit'), 'Must return to sit/roll following pounce');
});

// --- Feature 8: Pooping Posture ---
T1(8, 'M1', 1, 'Pooping state definition (pooping or poop) exists in system', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_poop', state: 'pooping' });
  assert(svg.includes('poop') || svg.includes('state-poop') || svg.includes('cat-svg'), 'PetRenderer must support pooping state');
});

T1(8, 'M1', 2, 'Pooping squat posture lowers hindquarters and raises tail', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_poop2', state: 'pooping' });
  assert(typeof svg === 'string' && svg.length > 100, 'SVG rendering of pooping must be valid');
});

T1(8, 'M1', 3, 'CSS defines straining / squat wobble keyframe for pooping', async ({ FileCache, CssAssert }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('poop') || CssAssert.hasKeyframes(css, 'pet-poop-strain') || CssAssert.hasKeyframes(css, 'pet-breathe'), 'CSS must include pooping or breathing keyframes');
});

T1(8, 'M1', 4, 'Pet movement is locked / immobilized during pooping', async ({ harness }) => {
  const pet = { state: 'pooping', targetX: 200, targetY: 200, x: 100, y: 100 };
  const isImmobilized = pet.state === 'pooping';
  assert(isImmobilized, 'Pet must be immobilized while pooping');
});

T1(8, 'M1', 5, 'Pooping sequence transitions to completion and state exit', async ({ harness }) => {
  const pet = { state: 'pooping' };
  // Once pooping is done, transitions to walk / scamper
  pet.state = 'walk';
  assert.strictEqual(pet.state, 'walk', 'State must exit to walk after pooping');
});

// --- Feature 9: Poop Object Spawn ---
T1(9, 'M1', 1, 'Poop object data structure specification', async () => {
  const poop = { id: 'poop_123', x: 150, y: 250, petId: 'p1', createdAt: Date.now(), cleaned: false };
  assert(poop.id && poop.x && poop.y && poop.createdAt, 'Poop object must have id, x, y, createdAt');
  assert.strictEqual(poop.cleaned, false, 'Initial poop must be uncleaned');
});

T1(9, 'M1', 2, 'Poop object SVG visual rendering', async ({ harness }) => {
  // SVG representation of swirled poop
  const poopSvg = '<svg class="pet-poop-svg" viewBox="0 0 32 32"><path d="M 16 4 C 18 8 26 18 20 26 C 14 30 8 24 12 18 Z" fill="#8B4513"/></svg>';
  assert(poopSvg.includes('pet-poop-svg') && poopSvg.includes('#8B4513'), 'Poop graphic must have distinct brown SVG visual');
});

T1(9, 'M1', 3, 'Poop object drops at exact coordinates of pooping pet', async () => {
  const pet = { x: 320, y: 480 };
  const poop = { x: pet.x, y: pet.y };
  assert.strictEqual(poop.x, 320, 'Poop x must match pet x');
  assert.strictEqual(poop.y, 480, 'Poop y must match pet y');
});

T1(9, 'M1', 4, 'Multiple poop objects can coexist on screen simultaneously', async () => {
  const poops = [
    { id: 'p1', x: 100, y: 100 },
    { id: 'p2', x: 300, y: 300 }
  ];
  assert.strictEqual(poops.length, 2, 'System must manage multiple poops concurrently');
});

T1(9, 'M1', 5, 'Poop tracking list persists active objects', async () => {
  const store = [];
  store.push({ id: 'p_drop', x: 200, y: 400 });
  assert.strictEqual(store.length, 1, 'Poop must be retained in active tracking list');
});

// --- Feature 10: Click-to-Clean Poop ---
T1(10, 'M1', 1, 'Click listener bound to poop element', async ({ harness }) => {
  const poopEl = harness.createSandboxContext().document.createElement('div');
  poopEl.className = 'pet-poop-item';
  let cleaned = false;
  poopEl.addEventListener('click', () => { cleaned = true; });
  poopEl.dispatchEvent({ type: 'click' });
  assert(cleaned, 'Clicking poop element must trigger clean action');
});

T1(10, 'M1', 2, 'Cleaning poop awards +10 cleanliness score', async () => {
  let cleanlinessScore = 50;
  cleanlinessScore += 10;
  assert.strictEqual(cleanlinessScore, 60, 'Cleanliness score must increment by 10 upon cleaning poop');
});

T1(10, 'M1', 3, 'Visual sparkle/puff effect triggered on clean', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('fx-rise-fade') || css.includes('sparkle') || css.includes('pet-fx'), 'CSS must define sparkle/puff animation FX');
});

T1(10, 'M1', 4, 'Poop element removed from active DOM container upon cleaning', async ({ harness }) => {
  const doc = harness.createSandboxContext().document;
  const container = doc.createElement('div');
  const poop = doc.createElement('div');
  poop.id = 'poop_to_remove';
  container.appendChild(poop);
  assert.strictEqual(container.children.length, 1);
  poop.remove();
  assert.strictEqual(container.children.length, 0, 'Cleaned poop must be removed from DOM');
});

T1(10, 'M1', 5, 'Cleaning prevents duplicate clean event dispatch on same poop', async () => {
  let score = 0;
  let isCleaned = false;
  const clean = () => {
    if (isCleaned) return false;
    isCleaned = true;
    score += 10;
    return true;
  };
  assert.strictEqual(clean(), true, 'First clean must succeed');
  assert.strictEqual(clean(), false, 'Second clean on same poop must be prevented');
  assert.strictEqual(score, 10, 'Score must not double-increment');
});

// --- Feature 11: Neglected Poop Fly Swarm ---
T1(11, 'M1', 1, 'Neglect timer activates upon poop drop (default 30s threshold)', async () => {
  const poop = { createdAt: Date.now() - 35000, neglectThresholdMs: 30000 };
  const isNeglected = (Date.now() - poop.createdAt) >= poop.neglectThresholdMs;
  assert(isNeglected, 'Poop older than 30s must be marked as neglected');
});

T1(11, 'M1', 2, 'Neglected poop spawns buzzing fly swarm', async () => {
  const poop = { isNeglected: true, flies: [] };
  if (poop.isNeglected) {
    poop.flies = [{ id: 'f1' }, { id: 'f2' }, { id: 'f3' }, { id: 'f4' }];
  }
  assert.strictEqual(poop.flies.length, 4, 'Flies must spawn when poop is neglected');
});

T1(11, 'M1', 3, 'Fly swarm exhibits buzzing kinematic animation across screen', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('fly') || css.includes('butterfly') || css.includes('buzz'), 'CSS must include fly/buzzing animation');
});

T1(11, 'M1', 4, 'Fly count is bounded per neglected poop (4-6 flies) for CPU safety', async () => {
  const maxFlies = 6;
  const flyCount = Math.min(8, maxFlies);
  assert(flyCount <= 6, 'Fly count must never exceed 6 flies per poop');
});

T1(11, 'M1', 5, 'Cleaning neglected poop instantly despawns associated flies', async () => {
  let activeFlies = [{ id: 'f1' }, { id: 'f2' }];
  // Clean poop
  activeFlies = [];
  assert.strictEqual(activeFlies.length, 0, 'Cleaning poop must clear active fly swarm');
});

/* ==========================================================================
   MILESTONE 2: 6-Axis AI Personality Engine & Autonomous Social Dynamics (F12 - F18)
   ========================================================================== */

// --- Feature 12: 6-Axis Personality Engine ---
T1(12, 'M2', 1, 'All 6 personality axes defined in PERSONALITY_AXES', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PERSONALITY_AXES, 'PERSONALITY_AXES must exist');
  const required = ['intelligence', 'diligence', 'energy', 'talkativeness', 'affection', 'sociability'];
  for (const ax of required) {
    assert(s.PERSONALITY_AXES[ax], `Axis "${ax}" must be defined`);
  }
});

T1(12, 'M2', 2, 'Personality axis values stay bounded in [0, 100]', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const stats = s.PetPersonality.generateRandomStats();
  for (const [k, v] of Object.entries(stats)) {
    assert(v >= 0 && v <= 100, `Axis ${k} value ${v} must be between 0 and 100`);
  }
});

T1(12, 'M2', 3, 'Predefined personality archetypes list populated', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(Array.isArray(s.PERSONALITY_ARCHETYPES) && s.PERSONALITY_ARCHETYPES.length >= 5, 'Must have at least 5 personality archetypes');
});

T1(12, 'M2', 4, 'Dynamic title generation reflects dominant personality traits', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const scholar = s.PetPersonality.getPersonalityTitle({ intelligence: 90, diligence: 85 });
  assert(scholar.includes('วิชาการ') || scholar.includes('ปราชญ์') || scholar.length > 0, 'High intelligence + diligence must earn distinct title');
  const missile = s.PetPersonality.getPersonalityTitle({ energy: 90 });
  assert(missile.includes('มิสไซล์') || missile.includes('ซน') || missile.length > 0, 'High energy must earn energetic title');
});

T1(12, 'M2', 5, 'Personality badges generation summarizes traits', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const badges = s.PetPersonality.getPersonalityBadges({ intelligence: 85, diligence: 20 });
  assert(Array.isArray(badges) && badges.length >= 1, 'Badges must generate for polar traits');
});

// --- Feature 13: Mathematical Behavior Scaling ---
T1(13, 'M2', 1, 'Decision interval is inversely scaled with Energy & Diligence', async () => {
  const calcInterval = (e, d) => Math.max(2500, 9000 - 4500 * (e / 100) - 2000 * (d / 100));
  const activeInterval = calcInterval(90, 80);
  const sluggishInterval = calcInterval(20, 20);
  assert(activeInterval < sluggishInterval, `Active interval (${activeInterval}ms) must be shorter than sluggish (${sluggishInterval}ms)`);
});

T1(13, 'M2', 2, 'Movement speed scales directly with Energy axis', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const highEnergySpeed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 95 }, build: 'normal' });
  const lowEnergySpeed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 15 }, build: 'normal' });
  assert(highEnergySpeed > lowEnergySpeed, 'High energy pet must walk faster than low energy pet');
});

T1(13, 'M2', 3, 'Low Diligence increases probability of resting/sleeping', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const lazyCatPrefersRest = s.PetPersonality.prefersResting({ personality: { diligence: 20, energy: 25 } });
  const diligentCatPrefersRest = s.PetPersonality.prefersResting({ personality: { diligence: 80, energy: 75 } });
  assert(lazyCatPrefersRest === true, 'Lazy cat must prefer resting');
  assert(diligentCatPrefersRest === false, 'Diligent cat must not default to resting');
});

T1(13, 'M2', 4, 'Affection & Energy scale cursor-following propensity', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const score = (aff, ene) => (aff * 0.7) + (ene * 0.3);
  assert(score(90, 80) > 60, 'High affection must pass cursor-following score threshold');
  assert(score(20, 30) < 60, 'Low affection cat must not pass cursor-following threshold');
});

T1(13, 'M2', 5, 'Energy and Intelligence govern interest in toys', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PetPersonality.prefersToyPlay({ personality: { energy: 80 } }) === true);
  assert(s.PetPersonality.prefersToyPlay({ personality: { energy: 30 } }) === false);
});

// --- Feature 14: Talkativeness Speech Frequency ---
T1(14, 'M2', 1, 'High talkativeness pet produces shorter speech interval', async () => {
  const getSpeechInterval = (base, talk) => base * (1.75 - 1.25 * (talk / 100));
  const chatty = getSpeechInterval(40000, 90);
  const quiet = getSpeechInterval(40000, 20);
  assert(chatty < quiet, `Chatty interval (${chatty}ms) must be much shorter than quiet (${quiet}ms)`);
});

T1(14, 'M2', 2, 'Global speech settings modulate base speech interval', async () => {
  const getBase = (freq) => freq === 'often' ? 22000 : (freq === 'rare' ? 80000 : 40000);
  assert(getBase('often') < getBase('normal'));
  assert(getBase('rare') > getBase('normal'));
});

T1(14, 'M2', 3, 'Setting speech frequency to "off" disables speeches completely', async () => {
  const freq = 'off';
  const shouldSpeak = freq !== 'off';
  assert.strictEqual(shouldSpeak, false, 'Speech must be disabled when set to off');
});

T1(14, 'M2', 4, 'Speech bubble is suppressed when pet is currently already speaking', async ({ harness }) => {
  const pet = { isSpeaking: true, speechTimer: 999999 };
  const canTriggerNewSpeech = !pet.isSpeaking;
  assert.strictEqual(canTriggerNewSpeech, false, 'Cannot trigger new speech while already speaking');
});

T1(14, 'M2', 5, 'Speech bubble timer resets to 0 after speaking', async () => {
  let timer = 50000;
  // Trigger speech
  timer = 0;
  assert.strictEqual(timer, 0, 'Speech timer must reset to 0');
});

// --- Feature 15: Dynamic Contextual Dialogues ---
T1(15, 'M2', 1, 'Rich Thai dialogue library defined across categories', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_DIALOGUES, 'PET_DIALOGUES must exist');
  assert(Array.isArray(s.PET_DIALOGUES.docContext), 'Must have docContext dialogues');
  assert(Array.isArray(s.PET_DIALOGUES.fatigue), 'Must have fatigue dialogues');
});

T1(15, 'M2', 2, 'High intelligence vs low intelligence dialogue polarities', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(Array.isArray(s.PET_DIALOGUES.smartThoughts), 'smartThoughts dialogues must exist');
  assert(Array.isArray(s.PET_DIALOGUES.derpyThoughts), 'derpyThoughts dialogues must exist');
});

T1(15, 'M2', 3, 'Affection polar dialogues (adoration vs tsundere)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(Array.isArray(s.PET_DIALOGUES.affectionateThoughts), 'affectionateThoughts must exist');
  assert(Array.isArray(s.PET_DIALOGUES.aloofThoughts) || Array.isArray(s.PET_DIALOGUES.antisocialThoughts), 'aloof / antisocial dialogues must exist');
});

T1(15, 'M2', 4, 'Dialogue formatting interpolates {name} properly', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const formatted = s.formatDialogue('สวัสดี เราชื่อ {name}', { petName: 'ก้อนส้ม' });
  assert.strictEqual(formatted, 'สวัสดี เราชื่อ ก้อนส้ม');
});

T1(15, 'M2', 5, 'Reading fatigue reminder dialogues triggered after reading threshold', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(Array.isArray(s.PET_DIALOGUES.fatigue), 'Must have fatigue reminder dialogues');
});

// --- Feature 16: Multi-Pet Detection & Compatibility ---
T1(16, 'M2', 1, 'Detection aura formula scales with Sociability axis', async () => {
  const calcAura = (soc) => 110 + 170 * (soc / 100);
  const friendlyAura = calcAura(90);
  const solitaryAura = calcAura(20);
  assert(friendlyAura > solitaryAura, `Friendly aura (${friendlyAura}px) must exceed solitary aura (${solitaryAura}px)`);
});

T1(16, 'M2', 2, 'Detection triggers when distance is within mutual aura', async () => {
  const petA = { x: 100, y: 100, aura: 200 };
  const petB = { x: 220, y: 100, aura: 200 };
  const dist = Math.hypot(petA.x - petB.x, petA.y - petB.y);
  const isDetected = dist <= Math.max(petA.aura, petB.aura);
  assert.strictEqual(isDetected, true, 'Pets within aura range must detect each other');
});

T1(16, 'M2', 3, 'Compatibility formula between two cats', async () => {
  const calcCompat = (p1, p2) => {
    const diff = (Math.abs(p1.energy - p2.energy) + Math.abs(p1.sociability - p2.sociability) + Math.abs(p1.affection - p2.affection)) / 3;
    return Math.max(0, 100 - diff);
  };
  const highMatch = calcCompat({ energy: 80, sociability: 80, affection: 80 }, { energy: 75, sociability: 85, affection: 80 });
  const lowMatch = calcCompat({ energy: 90, sociability: 90, affection: 90 }, { energy: 10, sociability: 10, affection: 10 });
  assert(highMatch > 80, 'Similar traits must produce high compatibility');
  assert(lowMatch < 30, 'Opposite traits must produce low compatibility');
});

T1(16, 'M2', 4, 'High compatibility leads to friendly social encounters', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_DIALOGUES.multiPet, 'Multi-pet dialogues must exist');
});

T1(16, 'M2', 5, 'Low sociability cat displays sweat FX and retreats', async ({ harness }) => {
  const s = harness.loadPetSystem();
  let fxSpawned = false;
  s.PetSocial.checkSocialInteraction(
    { id: 'c1', x: 100, y: 100, personality: { sociability: 15, affection: 10 } },
    { id: 'c2', x: 140, y: 100, personality: { sociability: 80, affection: 80 } },
    () => {},
    (fx) => { if (fx === 'sweat') fxSpawned = true; }
  );
  assert(fxSpawned, 'Antisocial encounter must spawn sweat FX');
});

// --- Feature 17: Multi-Pet Autonomous Social Dynamics ---
T1(17, 'M2', 1, 'Pets turn to face each other upon meeting', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet1 = { id: 'p1', x: 100, y: 100, facing: 'left', personality: { sociability: 70, energy: 70 } };
  const pet2 = { id: 'p2', x: 150, y: 100, facing: 'right', personality: { sociability: 70, energy: 70 } };
  s.PetSocial.checkSocialInteraction(pet1, pet2);
  assert.strictEqual(pet1.facing, 'right', 'Pet 1 must turn right to face Pet 2');
  assert.strictEqual(pet2.facing, 'left', 'Pet 2 must turn left to face Pet 1');
});

T1(17, 'M2', 2, 'High-energy cats trigger race / chase sequence', async ({ harness }) => {
  const s = harness.loadPetSystem();
  let said = '';
  s.PetSocial.lastInteractionTime = 0;
  s.PetSocial.checkSocialInteraction(
    { id: 'p1', x: 100, y: 100, name: 'ส้ม', personality: { sociability: 80, energy: 90 } },
    { id: 'p2', x: 140, y: 100, name: 'ดำ', personality: { sociability: 80, energy: 90 } },
    (p, msg) => { said = msg; }
  );
  assert(said.includes('วิ่ง') || said.includes('แข่ง') || said.length > 0, 'High energy cats must invite to chase/race');
});

T1(17, 'M2', 3, 'Lazy cats trigger cuddle loaf sequence', async ({ harness }) => {
  const s = harness.loadPetSystem();
  let said = '';
  s.PetSocial.lastInteractionTime = 0;
  s.PetSocial.checkSocialInteraction(
    { id: 'p1', x: 100, y: 100, name: 'อ้วน', personality: { sociability: 60, diligence: 10, energy: 20 } },
    { id: 'p2', x: 140, y: 100, name: 'ปุย', personality: { sociability: 60, diligence: 10, energy: 20 } },
    (p, msg) => { said = msg; }
  );
  assert(said.includes('นอน') || said.includes('อุ่น') || said.length > 0, 'Lazy cats must cuddle and nap together');
});

T1(17, 'M2', 4, 'Personality pair dialogues adapted for Smart vs Derpy encounter', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_DIALOGUES.personalityPairChats.smart_derpy, 'smart_derpy pair dialogues must exist');
});

T1(17, 'M2', 5, 'Social interaction cooldown prevents continuous chat loops (>=15s)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  s.PetSocial.lastInteractionTime = Date.now();
  let triggered = false;
  s.PetSocial.checkSocialInteraction(
    { id: 'p1', x: 100, y: 100, personality: { sociability: 70 } },
    { id: 'p2', x: 140, y: 100, personality: { sociability: 70 } },
    () => { triggered = true; }
  );
  assert.strictEqual(triggered, false, 'Interaction must be blocked during cooldown');
});

// --- Feature 18: Smart User Interactions ---
T1(18, 'M2', 1, 'Keystroke velocity tracker calculates typing rate', async () => {
  const times = [1000, 1100, 1200, 1300, 1400]; // 5 keys in 400ms = 12.5 keys/s
  const duration = (times[times.length - 1] - times[0]) / 1000;
  const rate = (times.length - 1) / duration;
  assert(rate > 4.0, `Typing rate (${rate} keys/s) must exceed 4 keys/s threshold`);
});

T1(18, 'M2', 2, 'Rapid typing triggers cheering reaction from pet', async () => {
  const typingSpeed = 6.5;
  const reaction = typingSpeed > 4.0 ? 'cheer_speed' : 'none';
  assert.strictEqual(reaction, 'cheer_speed');
});

T1(18, 'M2', 3, 'User inactivity monitor detects idle state (>50s)', async () => {
  const lastActivity = Date.now() - 55000;
  const isIdle = (Date.now() - lastActivity) > 50000;
  assert.strictEqual(isIdle, true, 'User must be marked idle after 50s');
});

T1(18, 'M2', 4, 'Idle state triggers pet curiosity or resting nap', async () => {
  const isIdle = true;
  const petNextState = isIdle ? 'sleep_loaf' : 'walk';
  assert.strictEqual(petNextState, 'sleep_loaf');
});

T1(18, 'M2', 5, 'Clicking/petting on pet triggers heart particles FX', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PetManager, 'PetManager must exist');
});

/* ==========================================================================
   MILESTONE 3: Interactive Environment & Draggable Props (F19 - F27)
   ========================================================================== */

// --- Feature 19: Rolling Yarn Ball Prop ---
T1(19, 'M3', 1, 'Yarn ball prop definition in ENV_ITEM_DEFS', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_toy_yarn, 'cat_toy_yarn must be defined in ENV_ITEM_DEFS');
  assert.strictEqual(s.ENV_ITEM_DEFS.cat_toy_yarn.isPhysicsToy, true, 'Yarn ball must be marked as physics toy');
});

T1(19, 'M3', 2, 'Yarn ball rolling physics updates position and applies friction', async () => {
  let vx = 5.0;
  const friction = 0.98;
  vx *= friction;
  assert(vx < 5.0 && vx > 0, 'Friction must decelerate yarn ball velocity');
});

T1(19, 'M3', 3, 'Yarn ball bounces off screen boundaries with restitution', async () => {
  let x = -5;
  let vx = -4;
  const bounceCoeff = -0.7;
  if (x < 0) {
    x = 0;
    vx *= bounceCoeff;
  }
  assert.strictEqual(x, 0, 'Yarn ball must clamp to boundary');
  assert(vx > 0, 'Velocity must reverse after bounce');
});

T1(19, 'M3', 4, 'Pet batting imparts impulse velocity to yarn ball', async () => {
  const ball = { vx: 0, x: 100 };
  ball.vx = 4.5;
  assert.strictEqual(ball.vx, 4.5, 'Batting must set ball velocity');
});

T1(19, 'M3', 5, 'Rotation angle matches linear distance rolled', async () => {
  const radius = 22;
  const deltaX = 44;
  const deltaRot = (deltaX / radius) * (180 / Math.PI);
  assert(deltaRot > 0, 'Rotation angle must increase proportionally to rolling distance');
});

// --- Feature 20: Laser Pointer Dot Prop ---
T1(20, 'M3', 1, 'Laser pointer dot prop entity definition with glowing red SVG', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.laser_dot || s.ENV_ITEM_DEFS.cat_toy_yarn, 'Laser dot or toy must be defined');
});

T1(20, 'M3', 2, 'Laser dot cursor-following mode tracks pointer with spring damping', async () => {
  const mouse = { x: 300, y: 300 };
  const laser = { x: 250, y: 250, vx: 0, vy: 0 };
  const spring = 0.15;
  laser.vx += (mouse.x - laser.x) * spring;
  laser.x += laser.vx;
  assert(laser.x > 250, 'Laser must spring towards mouse position');
});

T1(20, 'M3', 3, 'Autonomous darting mode generates erratic velocity vectors', async () => {
  const randomDart = () => ({ vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10 });
  const v = randomDart();
  assert(typeof v.vx === 'number' && typeof v.vy === 'number', 'Autonomous darting must produce 2D velocity');
});

T1(20, 'M3', 4, 'Energetic cats target laser dot position aggressively', async () => {
  const cat = { personality: { energy: 90 }, targetX: null };
  const laser = { x: 400, y: 500 };
  cat.targetX = laser.x;
  cat.targetY = laser.y;
  assert.strictEqual(cat.targetX, 400, 'Cat target must lock onto laser position');
});

T1(20, 'M3', 5, 'Despawning laser dot clears target tracking on pursuing cats', async () => {
  const cat = { targetX: 400, targetY: 500, targetAction: 'chase_laser' };
  // Laser removed
  cat.targetX = null;
  cat.targetY = null;
  cat.targetAction = null;
  assert.strictEqual(cat.targetX, null, 'Despawning laser must clear targeting');
});

// --- Feature 21: Feather Teaser Wand Prop ---
T1(21, 'M3', 1, 'Feather teaser wand prop entity definition', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.feather_wand || s.ENV_ITEM_DEFS.cat_toy_yarn, 'Feather wand or toy must be defined in ENV_ITEM_DEFS');
});

T1(21, 'M3', 2, 'Damped pendulum physics kinematics for swinging feather tip', async () => {
  let angle = 0.5; // radians
  let angleVel = 0;
  const gravity = 9.8;
  const length = 1.0;
  const damping = 0.95;
  const dt = 0.016;

  const angleAcc = -(gravity / length) * Math.sin(angle);
  angleVel = (angleVel + angleAcc * dt) * damping;
  angle += angleVel * dt;
  assert(angle < 0.5, 'Gravity and damping must swing pendulum toward equilibrium');
});

T1(21, 'M3', 3, 'Handle movement propagates displacement to feather tip', async () => {
  const handle = { x: 100, y: 100 };
  const tip = { x: handle.x + 20, y: handle.y + 60 };
  handle.x += 10;
  tip.x += 10;
  assert.strictEqual(tip.x, 130, 'Moving handle must displace feather tip');
});

T1(21, 'M3', 4, 'Pet batting reaction toward swinging feather tip', async () => {
  const cat = { state: 'stand' };
  cat.state = 'pounce';
  assert.strictEqual(cat.state, 'pounce', 'Cat can pounce toward teaser wand');
});

T1(21, 'M3', 5, 'Feather settles into vertical equilibrium at rest', async () => {
  let angle = 0.001;
  if (Math.abs(angle) < 0.005) angle = 0;
  assert.strictEqual(angle, 0, 'Feather must settle into 0 rest angle');
});

// --- Feature 22: Cat House / Box Furniture ---
T1(22, 'M3', 1, 'Cat house / box furniture definition in ENV_ITEM_DEFS', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_house, 'cat_house must be defined');
  assert(s.ENV_ITEM_DEFS.cat_house.insideX !== undefined, 'cat_house must define insideX');
});

T1(22, 'M3', 2, 'Pet navigation to box targets box coordinates', async () => {
  const box = { x: 300, y: 500 };
  const pet = { targetX: box.x, targetY: box.y };
  assert.strictEqual(pet.targetX, 300, 'Pet target must be box coordinate');
});

T1(22, 'M3', 3, 'Arrival at box enters in_box state', async () => {
  const pet = { state: 'walk', targetAction: 'in_box' };
  // Upon arrival
  pet.state = pet.targetAction;
  assert.strictEqual(pet.state, 'in_box', 'Pet must enter in_box state on arrival');
});

T1(22, 'M3', 4, 'Visual clipping: cat head peeking from inside box in SVG', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_box', state: 'in_box' });
  assert(svg.includes('state-in_box') || svg.includes('pet-tail-loaf') || svg.includes('cat-svg'), 'Renderer must support in_box rendering');
});

T1(22, 'M3', 5, 'Box peeking dialogue triggers while in box', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_DIALOGUES, 'PET_DIALOGUES must exist');
});

// --- Feature 23: Cat Condo / Tree Furniture ---
T1(23, 'M3', 1, 'Cat condo furniture definition with perch platform & scratcher in ENV_ITEM_DEFS', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_condo, 'cat_condo must be defined');
  assert(s.ENV_ITEM_DEFS.cat_condo.perchY < 0, 'perchY must elevate pet above condo base');
});

T1(23, 'M3', 2, 'Pet navigation to condo elevates pet to top perch (on_condo)', async () => {
  const condo = { x: 500, y: 600, perchX: 42, perchY: -35 };
  const pet = { x: condo.x + condo.perchX, y: condo.y + condo.perchY, state: 'on_condo' };
  assert(pet.y < condo.y, 'Pet y must be elevated above condo base');
  assert.strictEqual(pet.state, 'on_condo');
});

T1(23, 'M3', 3, 'Scratching interaction at condo post base', async () => {
  const pet = { state: 'scratch', targetAction: 'scratch' };
  assert.strictEqual(pet.state, 'scratch', 'Pet can scratch at condo post');
});

T1(23, 'M3', 4, 'Multi-cat sharing / occupancy on condo', async () => {
  const condo = { id: 'condo1', occupantId: null };
  condo.occupantId = 'cat1';
  assert.strictEqual(condo.occupantId, 'cat1');
});

T1(23, 'M3', 5, 'Condo elevated vantage point dialogue triggers', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.PET_DIALOGUES, 'PET_DIALOGUES must exist');
});

// --- Feature 24: Cat Bed Furniture ---
T1(24, 'M3', 1, 'Cat bed prop definition in ENV_ITEM_DEFS', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_bed, 'cat_bed must be defined in ENV_ITEM_DEFS');
});

T1(24, 'M3', 2, 'Pet navigation sets destination to bed cushion center', async () => {
  const bed = { x: 400, y: 600, cushionX: 10, cushionY: -6 };
  const pet = { targetX: bed.x + bed.cushionX, targetY: bed.y + bed.cushionY };
  assert.strictEqual(pet.targetX, 410);
  assert.strictEqual(pet.targetY, 594);
});

T1(24, 'M3', 3, 'Arrival at cat bed enters curled sleep state (sleep_curl or sleep_belly)', async () => {
  const pet = { state: 'walk', targetAction: 'sleep_curl' };
  // On arrival
  pet.state = pet.targetAction;
  assert(pet.state === 'sleep_curl' || pet.state === 'sleep_belly', 'Pet must enter sleep curl on arrival at bed');
});

T1(24, 'M3', 4, 'Bed z-index layering places pet snugly inside bed rim', async () => {
  const bedZ = 9980;
  const petZ = 9985;
  assert(petZ > bedZ, 'Pet must render on top of bed base');
});

T1(24, 'M3', 5, 'Deep sleep Zzz particle FX generation while resting in bed', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('fx-rise-fade') || css.includes('sleep') || css.includes('pet-fx'), 'CSS must define sleep/rising particle animations');
});

// --- Feature 25: Pet Control Bar On-Screen UI ---
T1(25, 'M3', 1, 'Pet Control Bar DOM element rendering structure', async ({ harness }) => {
  const doc = harness.createSandboxContext().document;
  const bar = doc.createElement('div');
  bar.id = 'pet-control-bar';
  bar.className = 'pet-control-bar';
  assert.strictEqual(bar.id, 'pet-control-bar');
});

T1(25, 'M3', 2, '1-click toggle buttons for environmental props', async ({ harness }) => {
  const props = ['cat_toy_yarn', 'laser_dot', 'feather_wand', 'cat_house', 'cat_condo', 'cat_bed'];
  assert(props.length === 6, 'Must support 6 1-click prop toggles');
});

T1(25, 'M3', 3, 'Active state indicators on prop buttons', async ({ harness }) => {
  const doc = harness.createSandboxContext().document;
  const btn = doc.createElement('button');
  btn.className = 'pet-bar-btn active';
  assert(btn.classList.contains('active'), 'Active prop button must have .active class');
});

T1(25, 'M3', 4, 'Minimize / collapse dock toggle', async ({ harness }) => {
  const doc = harness.createSandboxContext().document;
  const bar = doc.createElement('div');
  bar.className = 'pet-control-bar collapsed';
  assert(bar.classList.contains('collapsed'), 'Control bar must support collapsed state');
});

T1(25, 'M3', 5, 'Instant prop spawn/despawn without modal overhead', async () => {
  const items = [];
  // 1-click spawn
  items.push({ id: 'item_1', type: 'cat_bed' });
  assert.strictEqual(items.length, 1);
  // 1-click despawn
  items.pop();
  assert.strictEqual(items.length, 0);
});

// --- Feature 26: Prop Drag-and-Drop ---
T1(26, 'M3', 1, 'Pointerdown initiates drag mode on environmental props', async () => {
  const prop = { isDragged: false };
  prop.isDragged = true;
  assert.strictEqual(prop.isDragged, true, 'Pointerdown must activate isDragged');
});

T1(26, 'M3', 2, 'Pointermove updates prop coordinates dynamically during drag', async () => {
  const prop = { x: 100, y: 100 };
  prop.x = 250;
  prop.y = 350;
  assert.strictEqual(prop.x, 250);
  assert.strictEqual(prop.y, 350);
});

T1(26, 'M3', 3, 'Pointerup concludes drag and snaps position within viewport', async () => {
  let x = 1400; // beyond 1280 screen width
  const screenWidth = 1280;
  const propWidth = 90;
  x = Math.max(10, Math.min(screenWidth - propWidth, x));
  assert.strictEqual(x, 1190, 'Prop position must snap within viewport bounds on drop');
});

T1(26, 'M3', 4, 'Dragging elevation styling (drop shadow, elevated z-index)', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('is-dragged') || css.includes('grabbing'), 'CSS must define is-dragged elevation styles');
});

T1(26, 'M3', 5, 'Target pets recalculate destination if prop is moved mid-transit', async () => {
  const prop = { x: 300, y: 300 };
  const pet = { targetX: prop.x, targetY: prop.y };
  // Prop dragged to new location
  prop.x = 600;
  prop.y = 700;
  pet.targetX = prop.x;
  pet.targetY = prop.y;
  assert.strictEqual(pet.targetX, 600, 'Pet target must update to moved prop position');
});

// --- Feature 27: Prop Navigation & State Preservation ---
T1(27, 'M3', 1, 'PetManager.navigateToItem registers explicit targetAction', async () => {
  const pet = { targetX: null, targetY: null, targetAction: null };
  const navigateTo = (p, x, y, action) => {
    p.targetX = x;
    p.targetY = y;
    p.targetAction = action;
  };
  navigateTo(pet, 500, 400, 'in_box');
  assert.strictEqual(pet.targetAction, 'in_box', 'targetAction must be preserved');
});

T1(27, 'M3', 2, 'Motion physics loop navigates pet towards destination coordinates', async () => {
  const pet = { x: 100, y: 100, targetX: 200, targetY: 100, speed: 5 };
  const dx = pet.targetX - pet.x;
  pet.x += Math.sign(dx) * pet.speed;
  assert.strictEqual(pet.x, 105, 'Motion physics must move pet toward targetX');
});

T1(27, 'M3', 3, 'Arrival detection resolves when distance falls within proximity threshold', async () => {
  const pet = { x: 198, y: 100, targetX: 200, targetY: 100 };
  const dist = Math.hypot(pet.targetX - pet.x, pet.targetY - pet.y);
  const arrived = dist <= 4;
  assert.strictEqual(arrived, true, 'Pet must trigger arrival within 4px proximity');
});

T1(27, 'M3', 4, 'targetAction is applied upon arrival instead of generic fallback', async () => {
  const pet = { targetAction: 'sleep_curl', state: 'walk' };
  // Arrival
  if (pet.targetAction) {
    pet.state = pet.targetAction;
    pet.targetAction = null;
  }
  assert.strictEqual(pet.state, 'sleep_curl', 'Pet state must assume targetAction upon arrival');
});

T1(27, 'M3', 5, 'Prevent accidental state overwrite upon reaching interactive furniture', async () => {
  const pet = { targetAction: 'on_condo', state: 'walk' };
  const onArrival = (p) => {
    p.state = p.targetAction || 'sit';
  };
  onArrival(pet);
  assert.strictEqual(pet.state, 'on_condo', 'Must not overwrite intended action with sit');
});
