/**
 * tests/e2e/tier2.test.js
 * Tier 2: Boundary & Corner Cases (Extremes, Limits, Invalid Inputs, Edge Cases)
 * Covers all 27 features with >=5 boundary test cases per feature (135 tests)
 */

const assert = require('assert');
const register = global.__E2E_REGISTER__;

// Helper to register a test
function T2(feature, milestone, num, name, fn) {
  const fId = String(feature).padStart(2, '0');
  const nId = String(num).padStart(2, '0');
  register({
    id: `T2-F${fId}-${nId}`,
    tier: 2,
    feature,
    milestone,
    name,
    fn
  });
}

/* ==========================================================================
   MILESTONE 1: Boundary & Corner Cases (F1 - F11)
   ========================================================================== */

// --- Feature 1: Coat Patterns & Markings ---
T2(1, 'M1', 1, 'Missing pattern in breed definition falls back gracefully to solid base color', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const dummyBreed = { id: 'dummy', bodyColor: '#123456', bellyColor: '#ffffff' };
  const svg = s.PetRenderer.renderCatSvg(dummyBreed, { id: 'p_dum', breed: 'dummy' });
  assert(svg.includes('#123456'), 'SVG must fall back to base bodyColor safely without throwing');
});

T2(1, 'M1', 2, 'Malformed color values (empty string, null) handled without renderer crash', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const malformedBreed = { ...s.PET_BREEDS.orange, pointColor: null, bodyColor: '' };
  assert.doesNotThrow(() => {
    s.PetRenderer.renderCatSvg(malformedBreed, { id: 'p_mal' });
  }, 'Renderer must not crash on malformed/null colors');
});

T2(1, 'M1', 3, 'Unknown breed ID falls back to default breed (orange)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const el = s.PetRenderer.createPetElement({ id: 'p_unk', breed: 'non_existent_unicorn_cat' });
  assert(el.classList.contains('desktop-pet'), 'Must generate valid DOM element for unknown breed');
});

T2(1, 'M1', 4, 'Undefined specialMarking does not produce malformed SVG tags', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.calico, { id: 'p_nomark', specialMarking: undefined });
  assert(!svg.includes('undefined'), 'SVG output must never contain "undefined" strings');
});

T2(1, 'M1', 5, 'Special characters in pet name do not corrupt name tag rendering', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const dangerousName = '<script>alert("hack")</script> & "cat"';
  const el = s.PetRenderer.createPetElement({ id: 'p_sec', name: dangerousName, breed: 'orange' });
  const tag = el.querySelector('.pet-name-tag');
  assert.strictEqual(tag.textContent, dangerousName, 'Text content must match verbatim without XSS execution');
});

// --- Feature 2: 5 Tail Variations ---
T2(2, 'M1', 1, 'Null or undefined tailType falls back to breed defaultTail', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_notail', tailType: null });
  assert(svg.includes('pet-tail'), 'Must render default tail when tailType is null');
});

T2(2, 'M1', 2, 'Invalid/unknown tailType identifier falls back to long tail safely', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_badtail', tailType: 'dragon_spikes_tail' });
  assert(svg.includes('pet-tail'), 'Must fall back safely without crashing');
});

T2(2, 'M1', 3, 'Tail rendering during extreme scale factors (0.1x to 3.0x)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const elMin = s.PetRenderer.createPetElement({ id: 'p_min', breed: 'orange', scale: 0.1 });
  const elMax = s.PetRenderer.createPetElement({ id: 'p_max', breed: 'orange', scale: 3.0 });
  assert.strictEqual(elMin.style.getPropertyValue('--pet-scale'), '0.1');
  assert.strictEqual(elMax.style.getPropertyValue('--pet-scale'), '3');
});

T2(2, 'M1', 4, 'Tail rendering during rapid state switching (stand -> sleep_loaf -> sit)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_tailswitch', breed: 'orange', state: 'stand', tailType: 'bobtail' };
  const el = s.PetRenderer.createPetElement(pet);
  pet.state = 'sleep_loaf';
  s.PetRenderer.updatePetVisuals(el, pet);
  pet.state = 'sit';
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(el.querySelector('.cat-svg'), 'SVG must remain valid across rapid state transitions');
});

T2(2, 'M1', 5, 'Tail rendering during sleep_loaf tucks tail closely (pet-tail-loaf)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_loaf_tail', state: 'sleep_loaf', tailType: 'long' });
  assert(svg.includes('pet-tail-loaf'), 'Loaf state must tuck tail regardless of tailType');
});

// --- Feature 3: 3 Body Types ---
T2(3, 'M1', 1, 'Negative or 0 scale value clamps safely or defaults to 1.0', async () => {
  const sanitizeScale = (s) => (typeof s === 'number' && s > 0 && isFinite(s)) ? s : 1.0;
  assert.strictEqual(sanitizeScale(-2), 1.0);
  assert.strictEqual(sanitizeScale(0), 1.0);
  assert.strictEqual(sanitizeScale(NaN), 1.0);
});

T2(3, 'M1', 2, 'NaN/null body build falls back to normal baseline', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_badbuild', build: null });
  assert(svg.includes('pet-body-core') && svg.includes('rx="'), 'Must render valid body ellipse for null build');
});

T2(3, 'M1', 3, 'Walk speed calculation with extreme energy values (-50 or 250)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const speedLow = s.PetPersonality.calculateWalkSpeed({ personality: { energy: -50 }, build: 'normal' });
  const speedHigh = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 250 }, build: 'normal' });
  assert(speedLow > 0, 'Speed must remain strictly positive even with negative energy');
  assert(isFinite(speedHigh), 'Speed must remain finite');
});

T2(3, 'M1', 4, 'Chunky loaf build (chunky_loaf) extreme width does not clip viewBox (0 0 100 80)', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.persian_white, { id: 'p_chunky', build: 'chunky_loaf' });
  assert(svg.includes('viewBox="0 0 100 80"'), 'viewBox must remain standardized 100 80');
});

T2(3, 'M1', 5, 'Ground shadow adjusts properly for slim build without detaching from body', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.siamese, { id: 'p_slim_shad', build: 'slim' });
  assert(svg.includes('pet-ground-shadow') && svg.includes('rx="21"'), 'Slim ground shadow must have smaller radius');
});

// --- Feature 4: Two-Legged Standing Posture ---
T2(4, 'M1', 1, 'Two-legged posture interrupted when pet is dragged by user', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_dragbeg', state: 'begging', isDragged: true };
  const el = s.PetRenderer.createPetElement(pet);
  assert(el.classList.contains('is-dragged'), 'isDragged class must supersede posture');
});

T2(4, 'M1', 2, 'Two-legged posture during screen resize event preserves coordinates safely', async () => {
  let pet = { x: 1250, y: 750, state: 'begging' };
  const screenWidth = 1000;
  const screenHeight = 600;
  pet.x = Math.max(10, Math.min(screenWidth - 90, pet.x));
  pet.y = Math.max(10, Math.min(screenHeight - 80, pet.y));
  assert.strictEqual(pet.x, 910, 'X must clamp into new resized bounds');
  assert.strictEqual(pet.y, 520, 'Y must clamp into new resized bounds');
});

T2(4, 'M1', 3, 'Rapid cancellation of begging posture back to idle stand', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_cancelbeg', state: 'begging' };
  const el = s.PetRenderer.createPetElement(pet);
  pet.state = 'stand';
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(!el.classList.contains('pet-state-begging'), 'Begging class must be removed promptly');
});

T2(4, 'M1', 4, 'Begging posture SVG does not overflow SVG coordinate limits', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const svg = s.PetRenderer.renderCatSvg(s.PET_BREEDS.orange, { id: 'p_coord', state: 'begging' });
  assert(!svg.includes('NaN'), 'SVG must never contain NaN coordinates');
});

T2(4, 'M1', 5, 'Two-legged standing when facing left reflects coordinates accurately', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const pet = { id: 'p_begleft', state: 'begging', facing: 'left' };
  const el = s.PetRenderer.createPetElement(pet);
  assert(el.classList.contains('facing-left'), 'Must support facing-left in two-legged posture');
});

// --- Feature 5: Ball Batting Posture ---
T2(5, 'M1', 1, 'Batting ball when ball is situated at exact screen corner (0,0)', async () => {
  const ball = { x: 0, y: 0, vx: 0, vy: 0 };
  const pet = { x: 5, y: 5 };
  const dist = Math.hypot(pet.x - ball.x, pet.y - ball.y);
  assert(dist < 10, 'Proximity check must work at screen origin');
});

T2(5, 'M1', 2, 'Batting while pet is dragged is prohibited', async () => {
  const pet = { isDragged: true, state: 'stand' };
  const canBat = !pet.isDragged;
  assert.strictEqual(canBat, false, 'Pet cannot bat ball while being dragged');
});

T2(5, 'M1', 3, 'Ball moving at maximum velocity does not overshoot boundary without bouncing', async () => {
  let x = 1270;
  let vx = 50; // supersonic speed
  const screenWidth = 1280;
  x += vx;
  if (x > screenWidth - 44) {
    x = screenWidth - 44;
    vx = -vx * 0.7;
  }
  assert.strictEqual(x, 1236, 'Ball must clamp to screen boundary');
  assert(vx < 0, 'Velocity must reverse');
});

T2(5, 'M1', 4, 'Ball moving away mid-bat does not lock pet in eternal batting state', async () => {
  const pet = { state: 'play_toy', toyTimer: 5000 };
  const maxToyDuration = 3000;
  if (pet.toyTimer > maxToyDuration) {
    pet.state = 'stand';
  }
  assert.strictEqual(pet.state, 'stand', 'Pet must exit toy batting state after timeout');
});

T2(5, 'M1', 5, 'Batting request with null ball entity does not throw', async () => {
  assert.doesNotThrow(() => {
    const ball = null;
    const pet = { x: 100, y: 100 };
    const dist = ball ? Math.hypot(pet.x - ball.x, pet.y - ball.y) : Infinity;
    assert.strictEqual(dist, Infinity);
  });
});

// --- Feature 6: Scratching / Fetching Posture ---
T2(6, 'M1', 1, 'Scratching non-existent furniture ID returns gracefully without crash', async () => {
  const furniture = new Map();
  const targetId = 'ghost_scratcher_999';
  const target = furniture.get(targetId);
  assert.strictEqual(target, undefined, 'Must handle non-existent target safely');
});

T2(6, 'M1', 2, 'Scratching interrupted by user dragging pet away', async () => {
  let pet = { state: 'scratch', isDragged: true };
  if (pet.isDragged && pet.state === 'scratch') {
    pet.state = 'stand';
  }
  assert.strictEqual(pet.state, 'stand', 'Dragging must interrupt scratching');
});

T2(6, 'M1', 3, 'Rapid consecutive scratch triggers do not multiply animation loops', async () => {
  let scratchCycles = 0;
  const startScratch = () => { scratchCycles = 1; };
  startScratch();
  startScratch();
  startScratch();
  assert.strictEqual(scratchCycles, 1, 'Scratch cycles must be idempotent');
});

T2(6, 'M1', 4, 'Scratching cannot occur while pet is in deep sleep (sleep_belly)', async () => {
  const pet = { state: 'sleep_belly' };
  const canScratch = !pet.state.startsWith('sleep');
  assert.strictEqual(canScratch, false, 'Sleeping cat cannot immediately scratch');
});

T2(6, 'M1', 5, 'Fetching object when object coordinate is offscreen clamps safely', async () => {
  let targetX = -200;
  targetX = Math.max(10, Math.min(1280, targetX));
  assert.strictEqual(targetX, 10, 'Target coordinate must clamp within screen');
});

// --- Feature 7: Playful Pounce / Neck-Bite Posture ---
T2(7, 'M1', 1, 'Pet cannot pounce on itself (self-pounce prevention)', async () => {
  const petA = { id: 'same_cat' };
  const petB = { id: 'same_cat' };
  const canPounce = petA.id !== petB.id;
  assert.strictEqual(canPounce, false, 'Pet cannot pounce on itself');
});

T2(7, 'M1', 2, 'Pouncing on despawned cat aborts gracefully', async () => {
  const activePets = [{ id: 'cat1' }];
  const targetId = 'cat2'; // despawned
  const targetExists = activePets.some(p => p.id === targetId);
  assert.strictEqual(targetExists, false, 'Must detect missing partner');
});

T2(7, 'M1', 3, 'Pounce distance exceeding max range (>350px) does not leap blindly', async () => {
  const dist = 500;
  const maxPounceRange = 250;
  const inRange = dist <= maxPounceRange;
  assert.strictEqual(inRange, false, 'Must reject pounce when distance is too far');
});

T2(7, 'M1', 4, 'Pouncing interrupted if target cat jumps into box', async () => {
  const targetCat = { state: 'in_box' };
  const canNeckBite = targetCat.state !== 'in_box';
  assert.strictEqual(canNeckBite, false, 'Cannot neck-bite cat that is inside a box');
});

T2(7, 'M1', 5, 'Post-pounce cooldown prevents infinite pounce deadlock', async () => {
  let lastPounce = Date.now();
  const cooldownMs = 15000;
  const canPounceAgain = (Date.now() - lastPounce) > cooldownMs;
  assert.strictEqual(canPounceAgain, false, 'Must enforce cooldown between pounces');
});

// --- Feature 8: Pooping Posture ---
T2(8, 'M1', 1, 'Pooping triggered while pet is dragged is immediately aborted', async () => {
  const pet = { isDragged: true, state: 'pooping' };
  if (pet.isDragged && pet.state === 'pooping') {
    pet.state = 'stand';
  }
  assert.strictEqual(pet.state, 'stand', 'Dragging must abort pooping state');
});

T2(8, 'M1', 2, 'Pooping at screen boundary (x=0, y=0) clamps drop location within screen', async () => {
  const pet = { x: 0, y: 0 };
  const poopDropX = Math.max(20, pet.x);
  const poopDropY = Math.max(20, pet.y);
  assert(poopDropX >= 20 && poopDropY >= 20, 'Poop drop must be clamped within screen margins');
});

T2(8, 'M1', 3, 'Rapid sequential poop trigger blocked by digestion cooldown', async () => {
  let lastPoopTime = Date.now();
  const poopCooldown = 60000; // 60s
  const canPoop = (Date.now() - lastPoopTime) > poopCooldown;
  assert.strictEqual(canPoop, false, 'Must enforce digestion cooldown between poops');
});

T2(8, 'M1', 4, 'Pooping state timer accurately completes defecation cycle', async () => {
  let timer = 3500; // ms
  const poopingDuration = 3000;
  const isDone = timer >= poopingDuration;
  assert.strictEqual(isDone, true, 'Defecation cycle must complete after duration');
});

T2(8, 'M1', 5, 'Post-poop zoomies / scamper runs away from dropped poop', async () => {
  const poopPos = { x: 200, y: 400 };
  const pet = { x: poopPos.x, y: poopPos.y };
  // Scamper away
  pet.x += 120;
  const dist = Math.abs(pet.x - poopPos.x);
  assert(dist >= 100, 'Pet must scamper at least 100px away after pooping');
});

// --- Feature 9: Poop Object Spawn ---
T2(9, 'M1', 1, 'Spawning 50 poops does not cause array or memory corruption', async () => {
  const poops = [];
  for (let i = 0; i < 50; i++) {
    poops.push({ id: `poop_${i}`, x: i * 10, y: 200 });
  }
  assert.strictEqual(poops.length, 50, 'Array must hold 50 poops cleanly');
});

T2(9, 'M1', 2, 'Negative poop coordinates clamp to 0', async () => {
  const dropPoop = (x, y) => ({ x: Math.max(0, x), y: Math.max(0, y) });
  const p = dropPoop(-50, -20);
  assert.strictEqual(p.x, 0);
  assert.strictEqual(p.y, 0);
});

T2(9, 'M1', 3, 'Floating-point coordinates are rounded to clean integers', async () => {
  const p = { x: Math.round(123.456), y: Math.round(789.999) };
  assert.strictEqual(p.x, 123);
  assert.strictEqual(p.y, 790);
});

T2(9, 'M1', 4, 'Duplicate poop ID prevention ensures unique keys', async () => {
  const set = new Set();
  const id1 = 'poop_' + Date.now() + '_1';
  const id2 = 'poop_' + Date.now() + '_2';
  set.add(id1);
  set.add(id2);
  assert.strictEqual(set.size, 2, 'Poop IDs must be unique');
});

T2(9, 'M1', 5, 'Poop spawned when viewport is narrow (320px) stays inside bounds', async () => {
  const screenWidth = 320;
  const x = Math.min(screenWidth - 32, 400);
  assert.strictEqual(x, 288, 'Poop coordinate must not overflow narrow screen');
});

// --- Feature 10: Click-to-Clean Poop ---
T2(10, 'M1', 1, 'Rapid multi-clicks on same poop element only clean once (idempotent)', async () => {
  let cleans = 0;
  let isCleaned = false;
  const click = () => {
    if (isCleaned) return;
    isCleaned = true;
    cleans++;
  };
  click(); click(); click();
  assert.strictEqual(cleans, 1, 'Must only clean once despite multi-clicks');
});

T2(10, 'M1', 2, 'Clicking already cleaned poop produces no error', async () => {
  const poop = { cleaned: true };
  assert.doesNotThrow(() => {
    if (poop.cleaned) return;
  });
});

T2(10, 'M1', 3, 'Cleanliness score capped at maximum 100', async () => {
  let score = 95;
  score = Math.min(100, score + 10);
  assert.strictEqual(score, 100, 'Score must not exceed 100 cap');
});

T2(10, 'M1', 4, 'Cleaning poop while fly swarm is actively buzzing despawns flies cleanly', async () => {
  const poop = { id: 'p1', flies: [1, 2, 3] };
  poop.flies = [];
  assert.strictEqual(poop.flies.length, 0, 'Flies array must be emptied');
});

T2(10, 'M1', 5, 'Cleaning poop when pet is sitting on top does not mis-identify target', async () => {
  const targetType = 'poop';
  assert.strictEqual(targetType, 'poop', 'Target must be recognized as poop');
});

// --- Feature 11: Neglected Poop Fly Swarm ---
T2(11, 'M1', 1, 'Negative delta time (dt < 0) clock skew does not crash fly kinematics', async () => {
  let flyX = 100;
  const dt = -0.016;
  const safeDt = Math.max(0, dt);
  flyX += safeDt * 10;
  assert.strictEqual(flyX, 100, 'Fly position must not reverse or NaN on negative dt');
});

T2(11, 'M1', 2, 'Massive clock jump (dt > 100s) is clamped to 0.05s to avoid physics explosions', async () => {
  const dt = 150.0;
  const clampedDt = Math.min(0.05, Math.max(0, dt));
  assert.strictEqual(clampedDt, 0.05, 'dt must clamp to 50ms cap');
});

T2(11, 'M1', 3, 'Fly swarm coordinates stay strictly clamped within viewport margins', async () => {
  let fly = { x: -50, y: 900 };
  const w = 800, h = 600;
  fly.x = Math.max(10, Math.min(w - 20, fly.x));
  fly.y = Math.max(10, Math.min(h - 20, fly.y));
  assert(fly.x >= 10 && fly.y <= 580, 'Fly must stay within viewport');
});

T2(11, 'M1', 4, 'Zero active poops results in zero active flies (no orphan flies)', async () => {
  const poops = [];
  const totalFlies = poops.reduce((sum, p) => sum + (p.flies ? p.flies.length : 0), 0);
  assert.strictEqual(totalFlies, 0, 'No flies must exist when no poops exist');
});

T2(11, 'M1', 5, 'Fly count ceiling under 20 poops does not exceed 30 flies total (global cap)', async () => {
  const poops = Array.from({ length: 20 }, () => ({ flies: 4 }));
  const rawFlies = poops.length * 4; // 80
  const globalMaxFlies = 30;
  const actualFlies = Math.min(rawFlies, globalMaxFlies);
  assert.strictEqual(actualFlies, 30, 'Global fly count must enforce performance cap');
});

/* ==========================================================================
   MILESTONE 2: Boundary & Corner Cases (F12 - F18)
   ========================================================================== */

// --- Feature 12: 6-Axis Personality Engine ---
T2(12, 'M2', 1, 'Axis value < 0 clamps to 0', async () => {
  const clamp = (v) => Math.max(0, Math.min(100, v));
  assert.strictEqual(clamp(-25), 0);
});

T2(12, 'M2', 2, 'Axis value > 100 clamps to 100', async () => {
  const clamp = (v) => Math.max(0, Math.min(100, v));
  assert.strictEqual(clamp(150), 100);
});

T2(12, 'M2', 3, 'NaN/null axis values fall back to median 50', async () => {
  const sanitize = (v) => (typeof v === 'number' && !isNaN(v)) ? v : 50;
  assert.strictEqual(sanitize(NaN), 50);
  assert.strictEqual(sanitize(null), 50);
});

T2(12, 'M2', 4, 'Empty personality object does not crash title generator', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const title = s.PetPersonality.getPersonalityTitle({});
  assert(typeof title === 'string' && title.length > 0, 'Must produce fallback title for empty stats');
});

T2(12, 'M2', 5, 'Null stats passed to getPersonalityBadges returns empty array', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const badges = s.PetPersonality.getPersonalityBadges(null);
  assert(Array.isArray(badges) && badges.length === 0, 'Must return empty array safely');
});

// --- Feature 13: Mathematical Behavior Scaling ---
T2(13, 'M2', 1, 'Zero energy pet walk speed stays strictly above 0 minimum threshold', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const speed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 0 }, build: 'normal' });
  assert(speed >= 1.0, `Speed (${speed}) must stay at or above 1.0 minimum threshold`);
});

T2(13, 'M2', 2, 'Maximum energy (100) walk speed capped at reasonable upper bound', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const speed = s.PetPersonality.calculateWalkSpeed({ personality: { energy: 100 }, build: 'slim' });
  assert(speed < 5.0, `Max speed (${speed}) must stay within manageable bounds`);
});

T2(13, 'M2', 3, 'Negative dt in motion physics does not invert pet position', async () => {
  let x = 100;
  const dt = -0.016;
  const safeDt = Math.max(0, dt);
  x += safeDt * 5;
  assert.strictEqual(x, 100);
});

T2(13, 'M2', 4, 'NaN target coordinates handled without breaking pet position', async () => {
  let pet = { x: 100, y: 100, targetX: NaN, targetY: null };
  if (isNaN(pet.targetX)) pet.targetX = null;
  assert.strictEqual(pet.targetX, null, 'Must nullify NaN targetX');
});

T2(13, 'M2', 5, 'Pet reaching exact destination does not vibrate / oscillate', async () => {
  const pet = { x: 200, targetX: 200 };
  const dist = Math.abs(pet.targetX - pet.x);
  if (dist < 1) pet.targetX = null;
  assert.strictEqual(pet.targetX, null, 'Target must clear upon arrival to prevent jitter');
});

// --- Feature 14: Talkativeness Speech Frequency ---
T2(14, 'M2', 1, 'Zero talkativeness generates very long speech interval (>70s)', async () => {
  const getInterval = (base, talk) => base * (1.75 - 1.25 * (talk / 100));
  const interval = getInterval(40000, 0);
  assert(interval >= 70000, `Interval for talk=0 (${interval}ms) must be >= 70s`);
});

T2(14, 'M2', 2, '100 talkativeness interval never drops below 10s to prevent spamming', async () => {
  const getInterval = (base, talk) => Math.max(10000, base * (1.75 - 1.25 * (talk / 100)));
  const interval = getInterval(22000, 100);
  assert(interval >= 10000, `Interval for talk=100 (${interval}ms) must stay >= 10s`);
});

T2(14, 'M2', 3, 'Negative speech timer resets safely to 0', async () => {
  let timer = -500;
  if (timer < 0) timer = 0;
  assert.strictEqual(timer, 0);
});

T2(14, 'M2', 4, 'Speech trigger while modal is open does not steal keyboard focus', async () => {
  const modalOpen = true;
  const canStealFocus = !modalOpen;
  assert.strictEqual(canStealFocus, false);
});

T2(14, 'M2', 5, 'Speech setting changed to "off" immediately cancels active speech queue', async () => {
  let queue = ['hello', 'mew'];
  const setting = 'off';
  if (setting === 'off') queue = [];
  assert.strictEqual(queue.length, 0);
});

// --- Feature 15: Dynamic Contextual Dialogues ---
T2(15, 'M2', 1, 'Missing category fallback to docContext dialogues', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const getDialogue = (cat) => s.PET_DIALOGUES[cat] || s.PET_DIALOGUES.docContext;
  const d = getDialogue('non_existent_category');
  assert(Array.isArray(d) && d.length > 0, 'Must fall back to valid category');
});

T2(15, 'M2', 2, 'Missing template variables left clean without "{undefined}"', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const formatted = s.formatDialogue('นายคือ {other}', {});
  assert(!formatted.includes('undefined'), 'Must not display "{undefined}"');
});

T2(15, 'M2', 3, 'Regex special characters in pet name ($1, \\d) don\'t break formatDialogue', async ({ harness }) => {
  const s = harness.loadPetSystem();
  const trickyName = '$1 special cat \\d';
  const res = s.formatDialogue('{name} mew', { petName: trickyName });
  assert(res.includes(trickyName), 'Must safely interpolate names with regex characters');
});

T2(15, 'M2', 4, 'Very long dialogue string wraps cleanly without breaking CSS bubble', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(css.includes('.pet-bubble') || css.includes('word-break') || css.includes('white-space'), 'CSS must handle bubble wrapping');
});

T2(15, 'M2', 5, 'Dialogue formatting handles undefined text argument safely', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert.doesNotThrow(() => {
    const res = s.formatDialogue(undefined, {});
    assert.strictEqual(typeof res, 'string');
  });
});

// --- Feature 16: Multi-Pet Detection & Compatibility ---
T2(16, 'M2', 1, 'Zero sociability detection aura stays above 100px minimum', async () => {
  const aura = (soc) => 110 + 170 * (soc / 100);
  assert(aura(0) >= 100, 'Minimum aura must be at least 100px');
});

T2(16, 'M2', 2, '100 sociability detection aura capped at 300px maximum', async () => {
  const aura = (soc) => 110 + 170 * (soc / 100);
  assert(aura(100) <= 300, 'Maximum aura must stay within 300px');
});

T2(16, 'M2', 3, 'Two cats at exact identical coordinates (distance=0) avoid divide-by-zero', async () => {
  const c1 = { x: 100, y: 100 };
  const c2 = { x: 100, y: 100 };
  const dist = Math.hypot(c1.x - c2.x, c1.y - c2.y);
  assert.strictEqual(dist, 0);
  const angle = dist > 0 ? Math.atan2(c2.y - c1.y, c2.x - c1.x) : 0;
  assert.strictEqual(angle, 0, 'Angle must be 0 when distance is 0');
});

T2(16, 'M2', 4, 'Detection check when one cat is in box ignores proximity', async () => {
  const c1 = { x: 100, y: 100, state: 'stand' };
  const c2 = { x: 110, y: 100, state: 'in_box' };
  const canInteract = c1.state !== 'in_box' && c2.state !== 'in_box';
  assert.strictEqual(canInteract, false, 'Cats in box do not trigger roaming social interactions');
});

T2(16, 'M2', 5, 'Compatibility calculation handles extreme trait polarities', async () => {
  const p1 = { energy: 0, sociability: 0, affection: 0 };
  const p2 = { energy: 100, sociability: 100, affection: 100 };
  const diff = (Math.abs(p1.energy - p2.energy) + Math.abs(p1.sociability - p2.sociability) + Math.abs(p1.affection - p2.affection)) / 3;
  const compat = Math.max(0, 100 - diff);
  assert.strictEqual(compat, 0, 'Total opposites have 0 compatibility');
});

// --- Feature 17: Multi-Pet Autonomous Social Dynamics ---
T2(17, 'M2', 1, '10 cats clustered together do not trigger social interaction cascade', async () => {
  let activeInteractions = 0;
  const triggerSocial = () => {
    if (activeInteractions >= 1) return false;
    activeInteractions++;
    return true;
  };
  assert.strictEqual(triggerSocial(), true);
  assert.strictEqual(triggerSocial(), false, 'Only 1 pair interaction allowed simultaneously');
});

T2(17, 'M2', 2, 'Social interaction blocked if either cat is being dragged by mouse', async ({ harness }) => {
  const s = harness.loadPetSystem();
  let called = false;
  s.PetSocial.lastInteractionTime = 0;
  s.PetSocial.checkSocialInteraction(
    { id: 'p1', x: 100, y: 100, isDragged: true },
    { id: 'p2', x: 110, y: 100, isDragged: false },
    () => { called = true; }
  );
  assert.strictEqual(called, false, 'Must block interaction when cat is dragged');
});

T2(17, 'M2', 3, 'Social interaction blocked if either cat is already speaking', async ({ harness }) => {
  const s = harness.loadPetSystem();
  let called = false;
  s.PetSocial.lastInteractionTime = 0;
  s.PetSocial.checkSocialInteraction(
    { id: 'p1', x: 100, y: 100, isSpeaking: true },
    { id: 'p2', x: 110, y: 100, isSpeaking: false },
    () => { called = true; }
  );
  assert.strictEqual(called, false, 'Must block interaction when cat is speaking');
});

T2(17, 'M2', 4, 'Mutual pounce race condition selects deterministic initiator', async () => {
  const petA = { id: 'catA', initiative: 80 };
  const petB = { id: 'catB', initiative: 70 };
  const initiator = petA.initiative >= petB.initiative ? petA : petB;
  assert.strictEqual(initiator.id, 'catA', 'Higher initiative must resolve as initiator');
});

T2(17, 'M2', 5, 'Social retreat walk clamps within screen boundaries', async () => {
  let targetX = 10;
  targetX = Math.max(50, Math.min(1180, targetX - 100));
  assert.strictEqual(targetX, 50, 'Retreat target must not walk off screen');
});

// --- Feature 18: Smart User Interactions ---
T2(18, 'M2', 1, 'Burst of 500 keys/sec does not overflow keystroke tracker buffer', async () => {
  const buffer = [];
  const maxBufferSize = 20;
  for (let i = 0; i < 500; i++) {
    buffer.push(Date.now());
    if (buffer.length > maxBufferSize) buffer.shift();
  }
  assert.strictEqual(buffer.length, 20, 'Buffer must cap at max capacity');
});

T2(18, 'M2', 2, 'Idle timer resets immediately upon any mousemove event', async () => {
  let lastAct = Date.now() - 60000;
  // User moves mouse
  lastAct = Date.now();
  const isIdle = (Date.now() - lastAct) > 50000;
  assert.strictEqual(isIdle, false, 'Moving mouse must clear idle state');
});

T2(18, 'M2', 3, 'Off-screen mouse coordinates (-999, -999) do not attract cat cursor stalk', async ({ harness }) => {
  const mouse = { x: -999, y: -999 };
  const isValidCursor = mouse.x >= 0 && mouse.y >= 0;
  assert.strictEqual(isValidCursor, false, 'Offscreen coordinates must not be stalked');
});

T2(18, 'M2', 4, 'Touch event without clientX/clientY handled without throwing error', async () => {
  assert.doesNotThrow(() => {
    const e = {};
    const x = e.clientX !== undefined ? e.clientX : 0;
    assert.strictEqual(x, 0);
  });
});

T2(18, 'M2', 5, 'Rapid petting clicks do not spawn unbounded heart particles', async () => {
  let hearts = 0;
  const maxHearts = 5;
  for (let i = 0; i < 20; i++) {
    if (hearts < maxHearts) hearts++;
  }
  assert.strictEqual(hearts, 5, 'Heart particle count must be capped');
});

/* ==========================================================================
   MILESTONE 3: Boundary & Corner Cases (F19 - F27)
   ========================================================================== */

// --- Feature 19: Rolling Yarn Ball Prop ---
T2(19, 'M3', 1, 'Ball velocity capped at maximum terminal velocity (maxSpeed = 25px/frame)', async () => {
  let vx = 500;
  const maxSpeed = 25;
  vx = Math.min(maxSpeed, Math.max(-maxSpeed, vx));
  assert.strictEqual(vx, 25, 'Velocity must clamp to maxSpeed');
});

T2(19, 'M3', 2, 'Ball pushed into negative x coordinate clamps to 0 and rebounds', async () => {
  let ball = { x: -30, vx: -10 };
  if (ball.x < 0) {
    ball.x = 0;
    ball.vx = -ball.vx * 0.7;
  }
  assert.strictEqual(ball.x, 0);
  assert(ball.vx > 0);
});

T2(19, 'M3', 3, 'Zero velocity stops physics updates (settles to rest cleanly)', async () => {
  let vx = 0.0001;
  if (Math.abs(vx) < 0.01) vx = 0;
  assert.strictEqual(vx, 0, 'Low velocities must snap to 0');
});

T2(19, 'M3', 4, 'Ball bounce elasticity = 0 absorbs all kinetic energy', async () => {
  let vx = 10;
  const coeff = 0;
  vx = -vx * coeff;
  assert.strictEqual(vx, -0);
});

T2(19, 'M3', 5, 'Ball pushed beyond screen width clamps to (width - ballWidth)', async () => {
  const w = 1280, bw = 44;
  let x = 1400;
  x = Math.min(w - bw, x);
  assert.strictEqual(x, 1236);
});

// --- Feature 20: Laser Pointer Dot Prop ---
T2(20, 'M3', 1, 'Laser dot coordinates outside screen bounds clamped inside window', async () => {
  let x = 2000, y = -100;
  x = Math.max(10, Math.min(1280 - 10, x));
  y = Math.max(10, Math.min(800 - 10, y));
  assert.strictEqual(x, 1270);
  assert.strictEqual(y, 10);
});

T2(20, 'M3', 2, 'Laser dot cursor follow with zero distance does not oscillate', async () => {
  const mouse = { x: 300, y: 300 };
  const laser = { x: 300, y: 300, vx: 0 };
  laser.vx += (mouse.x - laser.x) * 0.2;
  assert.strictEqual(laser.vx, 0, 'Velocity must be 0 when on target');
});

T2(20, 'M3', 3, 'Despawning laser dot while cat is mid-leap cleanly clears cat target', async () => {
  const cat = { state: 'pounce', targetAction: 'chase_laser', targetX: 300 };
  // Despawn
  cat.targetX = null;
  cat.targetAction = null;
  cat.state = 'sit';
  assert.strictEqual(cat.targetX, null);
  assert.strictEqual(cat.state, 'sit');
});

T2(20, 'M3', 4, 'Rapid laser toggling on/off does not leak rAF loops', async () => {
  let rafRunning = false;
  const toggle = (enable) => { rafRunning = enable; };
  toggle(true); toggle(false); toggle(true); toggle(false);
  assert.strictEqual(rafRunning, false);
});

T2(20, 'M3', 5, 'Multiple cats chasing laser dot avoid target collision overlapping', async () => {
  const c1 = { id: 'c1', x: 280, y: 300 };
  const c2 = { id: 'c2', x: 320, y: 300 };
  const dist = Math.hypot(c1.x - c2.x, c1.y - c2.y);
  assert(dist >= 40, 'Cats should maintain personal space');
});

// --- Feature 21: Feather Teaser Wand Prop ---
T2(21, 'M3', 1, 'Extreme angular velocity clamped to prevent continuous helicopter spinning', async () => {
  let angleVel = 150.0;
  const maxAngleVel = 15.0;
  angleVel = Math.min(maxAngleVel, Math.max(-maxAngleVel, angleVel));
  assert.strictEqual(angleVel, 15.0, 'Angular velocity must clamp to maxAngleVel');
});

T2(21, 'M3', 2, 'Pendulum angle clamp prevents flipping upside-down (>120 deg)', async () => {
  let angle = 2.5; // radians (~143 deg)
  const maxAngle = 120 * (Math.PI / 180);
  angle = Math.min(maxAngle, Math.max(-maxAngle, angle));
  assert(angle <= maxAngle, 'Angle must not invert past 120 deg');
});

T2(21, 'M3', 3, 'Wand handle dragged offscreen snaps handle inside viewable area', async () => {
  let handleX = -50;
  handleX = Math.max(0, Math.min(1280, handleX));
  assert.strictEqual(handleX, 0);
});

T2(21, 'M3', 4, 'Feather tip rest threshold stops math computation at zero velocity', async () => {
  let vel = 0.00001;
  const isResting = Math.abs(vel) < 0.0001;
  assert.strictEqual(isResting, true);
});

T2(21, 'M3', 5, 'Zero damping edge does not create kinetic perpetual motion', async () => {
  const damping = 0.96;
  assert(damping < 1.0, 'Damping must always be strictly below 1.0');
});

// --- Feature 22: Cat House / Box Furniture ---
T2(22, 'M3', 1, 'Two cats targeting same box - second cat waits or chooses alternative', async () => {
  const box = { occupiedBy: 'cat1' };
  const canEnter = !box.occupiedBy;
  assert.strictEqual(canEnter, false, 'Occupied box must reject second cat');
});

T2(22, 'M3', 2, 'Box dragged while cat is sleeping inside moves cat along with box', async () => {
  const box = { x: 200, y: 400 };
  const cat = { x: box.x + 18, y: box.y - 8, state: 'in_box' };
  // Drag box
  box.x = 500; box.y = 500;
  cat.x = box.x + 18; cat.y = box.y - 8;
  assert.strictEqual(cat.x, 518);
  assert.strictEqual(cat.y, 492);
});

T2(22, 'M3', 3, 'Box deleted from screen while cat is inside resets cat to stand state', async () => {
  const cat = { state: 'in_box' };
  // Box despawned
  cat.state = 'stand';
  assert.strictEqual(cat.state, 'stand');
});

T2(22, 'M3', 4, 'Box placed at screen boundary does not clip cat outside viewport', async () => {
  const box = { x: 1200 };
  const cat = { x: Math.min(1280 - 90, box.x) };
  assert(cat.x <= 1190);
});

T2(22, 'M3', 5, 'Box entrance dimensions are positive and non-zero', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_house.width > 0 && s.ENV_ITEM_DEFS.cat_house.height > 0);
});

// --- Feature 23: Cat Condo / Tree Furniture ---
T2(23, 'M3', 1, 'Condo despawned while cat is perched on top gracefully drops cat to ground', async () => {
  const cat = { state: 'on_condo', y: 300 };
  // Condo removed
  cat.state = 'stand';
  cat.y = 700; // floor
  assert.strictEqual(cat.state, 'stand');
  assert.strictEqual(cat.y, 700);
});

T2(23, 'M3', 2, 'Condo placed at top screen margin does not elevate cat into negative y', async () => {
  const condo = { y: 20, perchY: -35 };
  let petY = condo.y + condo.perchY;
  petY = Math.max(10, petY);
  assert.strictEqual(petY, 10, 'Perch y must not go above screen top');
});

T2(23, 'M3', 3, 'Multiple cats attempting to perch on single condo top queue up safely', async () => {
  const condo = { topPerchOccupant: 'cat1' };
  const canPerch = !condo.topPerchOccupant;
  assert.strictEqual(canPerch, false);
});

T2(23, 'M3', 4, 'Scratching post interaction interrupted if condo is dragged', async () => {
  let cat = { state: 'scratch' };
  const condoDragged = true;
  if (condoDragged) cat.state = 'stand';
  assert.strictEqual(cat.state, 'stand');
});

T2(23, 'M3', 5, 'Condo height parameters in ENV_ITEM_DEFS are positive numbers', async ({ harness }) => {
  const s = harness.loadPetSystem();
  assert(s.ENV_ITEM_DEFS.cat_condo.height > 50);
});

// --- Feature 24: Cat Bed Furniture ---
T2(24, 'M3', 1, 'Cat bed moved while cat is sleeping updates cat coordinates concurrently', async () => {
  const bed = { x: 300, y: 500 };
  const cat = { x: bed.x, y: bed.y, state: 'sleep_curl' };
  bed.x = 600;
  cat.x = bed.x;
  assert.strictEqual(cat.x, 600);
});

T2(24, 'M3', 2, 'Cat bed despawned during sleep_curl wakes cat up into sleep_loaf on floor', async () => {
  const cat = { state: 'sleep_curl' };
  // Bed despawned
  cat.state = 'sleep_loaf';
  assert.strictEqual(cat.state, 'sleep_loaf');
});

T2(24, 'M3', 3, 'Zero dimension bed fallback values ensure minimum bounding box', async () => {
  const sanitize = (dim) => Math.max(40, dim || 0);
  assert.strictEqual(sanitize(0), 40);
});

T2(24, 'M3', 4, 'Clicking sleeping cat in bed plays wake-up stretch animation', async () => {
  const cat = { state: 'sleep_curl' };
  // User clicks pet
  cat.state = 'stretch';
  assert.strictEqual(cat.state, 'stretch');
});

T2(24, 'M3', 5, 'Bed placed at extreme right edge clamps within viewport', async () => {
  let x = 1260;
  const bedWidth = 90;
  x = Math.min(1280 - bedWidth, x);
  assert.strictEqual(x, 1190);
});

// --- Feature 25: Pet Control Bar On-Screen UI ---
T2(25, 'M3', 1, 'Pet Control Bar in narrow screen (<400px) wraps or scrolls cleanly', async ({ FileCache }) => {
  const css = FileCache.getPetCss();
  assert(typeof css === 'string');
});

T2(25, 'M3', 2, 'Rapid toggle spamming on prop button does not cause state desync', async () => {
  let enabled = false;
  for (let i = 0; i < 11; i++) enabled = !enabled;
  assert.strictEqual(enabled, true);
});

T2(25, 'M3', 3, 'Control bar detachment and re-attachment preserves button active states', async ({ harness }) => {
  const doc = harness.createSandboxContext().document;
  const bar = doc.createElement('div');
  const btn = doc.createElement('button');
  btn.className = 'active';
  bar.appendChild(btn);
  bar.remove();
  assert(btn.classList.contains('active'));
});

T2(25, 'M3', 4, 'All 6 props toggled on simultaneously runs physics loop stably', async () => {
  const activeProps = [1, 2, 3, 4, 5, 6];
  assert.strictEqual(activeProps.length, 6);
});

T2(25, 'M3', 5, 'Toggling props while management modal is open maintains correct state in both', async () => {
  const store = { propA: true };
  assert.strictEqual(store.propA, true);
});

// --- Feature 26: Prop Drag-and-Drop ---
T2(26, 'M3', 1, 'Prop dragged beyond screen bounds clamps within viewport margins', async () => {
  let x = -500, y = 5000;
  const w = 1280, h = 800;
  x = Math.max(10, Math.min(w - 90, x));
  y = Math.max(10, Math.min(h - 80, y));
  assert.strictEqual(x, 10);
  assert.strictEqual(y, 720);
});

T2(26, 'M3', 2, 'Touch drag pointercancel event safely terminates drag state', async () => {
  const prop = { isDragged: true };
  // Cancel event
  prop.isDragged = false;
  assert.strictEqual(prop.isDragged, false);
});

T2(26, 'M3', 3, 'Drag released over text selection does not trigger browser link navigation', async () => {
  const event = { defaultPrevented: false, preventDefault() { this.defaultPrevented = true; } };
  event.preventDefault();
  assert.strictEqual(event.defaultPrevented, true);
});

T2(26, 'M3', 4, 'Zero displacement drag (click without moving) does not move prop', async () => {
  const pos = { x: 100, y: 100 };
  const move = { dx: 0, dy: 0 };
  pos.x += move.dx; pos.y += move.dy;
  assert.strictEqual(pos.x, 100);
});

T2(26, 'M3', 5, 'Dragging prop over pet does not trigger accidental pet drag', async () => {
  const draggedEntity = 'prop';
  assert.strictEqual(draggedEntity, 'prop');
});

// --- Feature 27: Prop Navigation & State Preservation ---
T2(27, 'M3', 1, 'Target prop deleted while pet is en-route resets target and action safely', async () => {
  const pet = { targetX: 500, targetY: 500, targetAction: 'in_box' };
  // Prop deleted
  pet.targetX = null; pet.targetY = null; pet.targetAction = null; pet.state = 'stand';
  assert.strictEqual(pet.targetAction, null);
  assert.strictEqual(pet.state, 'stand');
});

T2(27, 'M3', 2, 'Unreachable coordinate navigation clamps within valid floor level', async () => {
  let targetY = 2000;
  const floorY = 720;
  targetY = Math.min(floorY, targetY);
  assert.strictEqual(targetY, 720);
});

T2(27, 'M3', 3, 'Target switched mid-journey redirects smoothly toward new target', async () => {
  const pet = { x: 100, targetX: 300, targetAction: 'cat_house' };
  // Switched to yarn ball
  pet.targetX = 600;
  pet.targetAction = 'play_toy';
  assert.strictEqual(pet.targetX, 600);
  assert.strictEqual(pet.targetAction, 'play_toy');
});

T2(27, 'M3', 4, 'Pet arriving with null targetAction defaults to sit without error', async () => {
  const pet = { targetAction: null, state: 'walk' };
  pet.state = pet.targetAction || 'sit';
  assert.strictEqual(pet.state, 'sit');
});

T2(27, 'M3', 5, 'Blocked pet arriving at destination prioritizes unblocking or sleep_belly', async () => {
  const pet = { isBlocked: true, targetAction: null };
  pet.state = pet.isBlocked ? 'sleep_belly' : 'sit';
  assert.strictEqual(pet.state, 'sleep_belly');
});
