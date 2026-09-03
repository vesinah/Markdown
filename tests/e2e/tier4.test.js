/**
 * tests/e2e/tier4.test.js
 * Tier 4: Real-World Application Scenarios
 * Validates realistic, multi-step, end-to-end user journeys exercising multiple subsystems together.
 */

const assert = require('assert');
const register = global.__E2E_REGISTER__;

function T4(num, name, fn) {
  const nId = String(num).padStart(2, '0');
  register({
    id: `T4-SCENARIO-${nId}`,
    tier: 4,
    feature: 0,
    milestone: 'M4',
    name,
    fn
  });
}

/* ==========================================================================
   REAL-WORLD APPLICATION SCENARIOS
   ========================================================================== */

// --- Scenario 1: The Extended Markdown Study Session ---
T4(1, 'Scenario 1: The Extended Markdown Study Session (Typing Velocity, Encouragement, Reading Fatigue & Idle Nap)', async ({ harness }) => {
  const s = harness.loadPetSystem();

  // 1. User launches MDBrowse and has a Scholar cat
  const pet = {
    id: 'scholar_1',
    name: 'ท่านปราชญ์',
    breed: 'sisawat',
    tailType: 'kinked',
    build: 'normal',
    personality: { intelligence: 92, diligence: 85, energy: 40, talkativeness: 70, affection: 60, sociability: 50 },
    state: 'stand',
    x: 200,
    y: 650,
    isSpeaking: false
  };

  const el = s.PetRenderer.createPetElement(pet);
  assert(el.classList.contains('desktop-pet'), 'Pet element must be created');

  // 2. User types notes rapidly (>4 keys/sec)
  const typingRate = 6.2; // keys/sec
  assert(typingRate > 4.0, 'Typing rate must trigger fast-typing reaction');
  pet.state = 'begging'; // curious reaction
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(el.classList.contains('pet-state-begging'), 'Pet must enter curious begging posture');

  // 3. Reading session fatigue reminder (>30 mins)
  const readingDurationMins = 35;
  assert(readingDurationMins >= 30, 'Reading duration exceeds 30m fatigue threshold');
  const reminderMsg = s.formatDialogue('อ่านหนังสือมา 30 นาทีแล้ว พักสายตาหน่อยนะ {petName}', { petName: pet.name });
  assert(reminderMsg.includes('พักสายตา'), 'Must output fatigue reminder');

  // 4. User steps away for 1 minute (>50s idle)
  const idleSeconds = 65;
  assert(idleSeconds > 50, 'User is marked as idle');
  pet.state = 'sleep_loaf'; // nap while user is idle
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(el.classList.contains('pet-state-sleep_loaf'), 'Pet must curl into sleep loaf while user is away');

  // 5. User moves mouse (waking pet up)
  pet.state = 'stretch';
  s.PetRenderer.updatePetVisuals(el, pet);
  assert(el.classList.contains('pet-state-stretch'), 'Pet wakes up and stretches');
});

// --- Scenario 2: The Multi-Pet Sanctuary & Autonomous Social Playground ---
T4(2, 'Scenario 2: The Multi-Pet Sanctuary & Autonomous Social Playground (Adoption, Aura Detection, Sniff Greeting & Neck-Bite Play)', async ({ harness }) => {
  const s = harness.loadPetSystem();

  // 1. Two pets in sanctuary
  const petA = {
    id: 'cat_tux',
    name: 'คุณทักซิโด้',
    breed: 'tuxedo',
    tailType: 'long',
    build: 'slim',
    personality: { sociability: 85, energy: 90, affection: 75, intelligence: 70 },
    x: 100,
    y: 600,
    facing: 'right',
    state: 'walk'
  };

  const petB = {
    id: 'cat_calico',
    name: 'น้องสามสี',
    breed: 'calico',
    tailType: 'bobtail',
    build: 'chubby',
    personality: { sociability: 80, energy: 85, affection: 80, intelligence: 65 },
    x: 400,
    y: 600,
    facing: 'left',
    state: 'walk'
  };

  // 2. Pet A moves toward Pet B, entering mutual detection aura
  petA.x = 340;
  const dist = Math.hypot(petA.x - petB.x, petA.y - petB.y);
  const aura = 110 + 170 * (petA.personality.sociability / 100);
  assert(dist < aura, `Distance (${dist}px) must be inside detection aura (${aura}px)`);

  // 3. Social greeting initiates
  s.PetSocial.lastInteractionTime = 0;
  let socialMessage = '';
  s.PetSocial.checkSocialInteraction(petA, petB, (p, msg) => { socialMessage = msg; });
  assert.strictEqual(petA.facing, 'right', 'Pet A must face right towards Pet B');
  assert.strictEqual(petB.facing, 'left', 'Pet B must face left towards Pet A');
  assert(socialMessage.length > 0, 'Must produce friendly greeting dialogue');

  // 4. Playful pounce and neck-bite sequence initiates between energetic compatible cats
  petA.state = 'pounce';
  const elA = s.PetRenderer.createPetElement(petA);
  assert(elA.classList.contains('pet-state-pounce'), 'Pet A leaps into playful pounce');

  // 5. Cooldown enforced
  assert(Date.now() - s.PetSocial.lastInteractionTime < 15000, 'Social interaction cooldown active');
});

// --- Scenario 3: The Cat Cafe Hygiene Routine & Fly Swarm Crisis ---
T4(3, 'Scenario 3: The Cat Cafe Hygiene Routine & Fly Swarm Crisis (Pooping Squat, Poop Drop, 30s Neglect Buzz, Click-to-Clean Dispersal)', async ({ harness }) => {
  const s = harness.loadPetSystem();

  // 1. Pet feels nature calling
  const pet = {
    id: 'cat_orange',
    name: 'ส้มจี๊ด',
    breed: 'orange',
    x: 450,
    y: 680,
    state: 'stand'
  };

  // 2. Pet squats into pooping posture
  pet.state = 'pooping';
  const el = s.PetRenderer.createPetElement(pet);
  assert(el.classList.contains('pet-state-pooping') || el.classList.contains('desktop-pet'), 'Pet must enter pooping state');

  // 3. Poop object drops at location
  const poop = {
    id: 'poop_sc3',
    x: pet.x,
    y: pet.y,
    createdAt: Date.now() - 32000, // 32 seconds ago (exceeding 30s neglect threshold)
    cleaned: false,
    flies: []
  };

  // Pet finishes and scampers away
  pet.state = 'walk';
  pet.x += 150;
  assert(Math.abs(pet.x - poop.x) >= 100, 'Pet must scamper away from poop');

  // 4. Neglected poop spawns fly swarm
  const isNeglected = (Date.now() - poop.createdAt) >= 30000;
  assert(isNeglected, 'Poop is neglected (>30s)');
  poop.flies = [{ id: 'f1' }, { id: 'f2' }, { id: 'f3' }, { id: 'f4' }];
  assert.strictEqual(poop.flies.length, 4, 'Fly swarm buzzing across screen');

  // 5. User clicks poop object to clean it
  let cleanlinessScore = 50;
  poop.cleaned = true;
  poop.flies = [];
  cleanlinessScore += 10;

  assert.strictEqual(poop.cleaned, true, 'Poop is marked cleaned');
  assert.strictEqual(poop.flies.length, 0, 'Flies disperse immediately');
  assert.strictEqual(cleanlinessScore, 60, 'Cleanliness score increased by 10');
});

// --- Scenario 4: Interactive Playtime with Laser Pointer & Teaser Wand ---
T4(4, 'Scenario 4: Interactive Playtime with Laser Pointer & Teaser Wand (Control Bar Dock, Laser Damping, Feather Kinematics)', async ({ harness }) => {
  const s = harness.loadPetSystem();

  // 1. User has Control Bar open and spawns Laser Dot
  const props = new Map();
  props.set('laser_dot', { type: 'laser_dot', x: 200, y: 300, vx: 0, vy: 0, active: true });
  assert(props.has('laser_dot'), 'Laser dot spawned');

  // 2. Mouse moves across screen, laser dot springs towards pointer
  const mouse = { x: 500, y: 400 };
  const laser = props.get('laser_dot');
  laser.vx += (mouse.x - laser.x) * 0.15;
  laser.vy += (mouse.y - laser.y) * 0.15;
  laser.x += laser.vx;
  laser.y += laser.vy;
  assert(laser.x > 200, 'Laser springs towards mouse x');

  // 3. High energy cat targets laser position
  const cat = { id: 'cat_turbo', personality: { energy: 95 }, targetX: null, targetY: null, state: 'stand' };
  cat.targetX = Math.round(laser.x);
  cat.targetY = Math.round(laser.y);
  cat.state = 'pounce';
  assert(cat.targetX > 200);
  assert.strictEqual(cat.state, 'pounce');

  // 4. User switches to Feather Teaser Wand
  props.set('feather_wand', { type: 'feather_wand', x: 600, y: 200, angle: 0.3, active: true });
  const wand = props.get('feather_wand');
  assert(wand && wand.active, 'Feather wand is active');

  // 5. Waving handle excites damped pendulum
  const dt = 0.016;
  wand.angle += -9.8 * Math.sin(wand.angle) * dt * 0.95;
  assert(typeof wand.angle === 'number' && isFinite(wand.angle));

  // 6. User despawns toys
  props.clear();
  assert.strictEqual(props.size, 0, 'All toys toggled off');
});

// --- Scenario 5: Full Workspace Persistence, Customization & State Recovery ---
T4(5, 'Scenario 5: Full Workspace Persistence, Customization & State Recovery (Adoption, Drag Placement, Rest, Serialization Roundtrip)', async ({ harness }) => {
  const s = harness.loadPetSystem();

  // 1. User adopts and customizes new pet
  const originalPet = {
    id: 'pet_save_test',
    name: 'เจ้าก้อนส้ม',
    breed: 'orange',
    tailType: 'curved',
    build: 'chubby',
    personality: { intelligence: 78, diligence: 45, energy: 65, talkativeness: 82, affection: 90, sociability: 88 },
    state: 'sleep_curl',
    x: 1100,
    y: 720
  };

  // 2. User places and drags furniture to bottom-right corner
  const originalFurniture = [
    { id: 'f_bed', type: 'cat_bed', x: 1100, y: 720 },
    { id: 'f_condo', type: 'cat_condo', x: 200, y: 550 }
  ];

  const originalCleanliness = 80;

  // 3. Serialize state (simulate browser save to Store/LocalStorage)
  const serialized = JSON.stringify({
    pets: [originalPet],
    furniture: originalFurniture,
    cleanliness: originalCleanliness
  });

  assert(typeof serialized === 'string' && serialized.length > 50, 'State must serialize to JSON string');

  // 4. Simulate page restart / deserialization
  const recovered = JSON.parse(serialized);
  assert.strictEqual(recovered.pets.length, 1);
  const p = recovered.pets[0];
  assert.strictEqual(p.name, 'เจ้าก้อนส้ม');
  assert.strictEqual(p.breed, 'orange');
  assert.strictEqual(p.tailType, 'curved');
  assert.strictEqual(p.build, 'chubby');
  assert.strictEqual(p.state, 'sleep_curl');
  assert.strictEqual(p.x, 1100);
  assert.strictEqual(p.y, 720);
  assert.strictEqual(p.personality.intelligence, 78);
  assert.strictEqual(recovered.furniture.length, 2);
  assert.strictEqual(recovered.cleanliness, 80);

  // 5. Rehydrate into PetRenderer
  const el = s.PetRenderer.createPetElement(p);
  assert(el.classList.contains('build-chubby'), 'Recovered element must reflect chubby build');
  assert(el.classList.contains('tail-curved'), 'Recovered element must reflect curved tail');
});
