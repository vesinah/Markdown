// Comprehensive Automated Test Suite: Pet Gender System
// Validates:
// 1. Data model & migration of legacy pets without gender to 'male'
// 2. Proportional SVG geometry: Female is strictly more slender and elongated than Male for identical breed/build
// 3. Behavior & Personality: gendered titles, badges, walk speed, state weights
// 4. Dialogues: gendered particles, self-references, dialogue pools
// 5. Social Dynamics: male-female, male-male, female-female pairings
// 6. UI Integration: Adoption gender selection, My Pets gender badges, Diary gender display

import assert from 'assert';
import fs from 'fs';

// Mock browser globals for Node.js environment
global.window = {
  innerWidth: 1200,
  innerHeight: 800,
  addEventListener: () => {},
  removeEventListener: () => {}
};
global.document = {
  createElement: (tag) => {
    const classes = new Set();
    return {
      tagName: tag,
      style: { setProperty: () => {} },
      dataset: {},
      appendChild: () => {},
      setAttribute: () => {},
      getAttribute: () => null,
      addEventListener: () => {},
      querySelector: () => null,
      querySelectorAll: () => [],
      remove: () => {},
      get className() { return Array.from(classes).join(' '); },
      set className(val) {
        classes.clear();
        if (val) val.split(/\s+/).filter(Boolean).forEach(c => classes.add(c));
      },
      classList: {
        add: (...names) => names.forEach(n => classes.add(n)),
        remove: (...names) => names.forEach(n => classes.delete(n)),
        contains: (name) => classes.has(name)
      }
    };
  },
  body: {
    appendChild: () => {}
  },
  getElementById: () => null
};
const storageMap = new Map();
global.localStorage = {
  getItem: (k) => storageMap.has(k) ? storageMap.get(k) : null,
  setItem: (k, v) => storageMap.set(k, String(v)),
  removeItem: (k) => storageMap.delete(k),
  clear: () => storageMap.clear()
};

import { PET_BREEDS, BODY_BUILDS, PET_GENDERS, getRandomGender } from '../src/js/pet/pet-breeds.js';
import { PetRenderer } from '../src/js/pet/pet-render.js';
import { PetPersonality } from '../src/js/pet/pet-personality.js';
import { PET_DIALOGUES, getRandomDialogue, formatDialogue } from '../src/js/pet/pet-dialogues.js';
import { PetSocial } from '../src/js/pet/pet-social.js';
import { PetManager } from '../src/js/pet/pet-manager.js';
import { PetUI } from '../src/js/pet/pet-ui.js';
import { Store } from '../src/js/core/store.js';

const tests = [];
function it(desc, fn) {
  tests.push({ desc, fn });
}

console.log('================================================================================');
console.log('  MDBrowse Desktop Pet System — Gender System & Proportions Test Suite');
console.log('================================================================================\n');

// -----------------------------------------------------------------------------
console.log('=== [SECTION 1] Gender Data Model & Legacy Migration ===');
// -----------------------------------------------------------------------------

it('PET_GENDERS defines male and female with proper symbols and names', () => {
  assert.ok(PET_GENDERS.male, 'PET_GENDERS.male must exist');
  assert.ok(PET_GENDERS.female, 'PET_GENDERS.female must exist');
  assert.strictEqual(PET_GENDERS.male.name, 'เพศผู้');
  assert.strictEqual(PET_GENDERS.female.name, 'เพศเมีย');
  assert.strictEqual(PET_GENDERS.male.symbol, '♂');
  assert.strictEqual(PET_GENDERS.female.symbol, '♀');
});

it('getRandomGender returns either "male" or "female"', () => {
  const g = getRandomGender();
  assert.ok(g === 'male' || g === 'female', `Random gender must be male or female, got: ${g}`);
});

it('createPetInstance defaults missing gender to "male" (legacy compatibility)', () => {
  const legacyPet = PetManager.createPetInstance({
    name: 'ส้มคลาสสิก',
    breed: 'orange'
  });
  assert.strictEqual(legacyPet.gender, 'male', 'Legacy pet without gender must default to male');
});

it('createPetInstance preserves explicit "female" gender', () => {
  const femalePet = PetManager.createPetInstance({
    name: 'มะลิน้อย',
    gender: 'female',
    breed: 'persian_white'
  });
  assert.strictEqual(femalePet.gender, 'female', 'Female pet must retain female gender');
});

it('loadState migrates array of legacy pets without gender to "male" and persists', async () => {
  // Mock legacy stored pets
  const legacyStoreData = [
    { id: 'p1', name: 'เหมียวเก่า 1', breed: 'tabby' },
    { id: 'p2', name: 'เหมียวเก่า 2', breed: 'black' }
  ];
  await Store.set('pets', legacyStoreData);

  await PetManager.loadState();

  const p1 = PetManager.pets.find(p => p.id === 'p1');
  const p2 = PetManager.pets.find(p => p.id === 'p2');
  assert.ok(p1 && p2, 'Both pets loaded');
  assert.strictEqual(p1.gender, 'male', 'Legacy pet 1 must be migrated to male');
  assert.strictEqual(p2.gender, 'male', 'Legacy pet 2 must be migrated to male');

  // Verify saved in store
  const saved = await Store.get('pets');
  assert.strictEqual(saved[0].gender, 'male');
  assert.strictEqual(saved[1].gender, 'male');
});

// -----------------------------------------------------------------------------
console.log('\n=== [SECTION 2] Visual Proportions & Slender Female Geometry ===');
// -----------------------------------------------------------------------------

it('Male proportions match existing baseline across all body builds', () => {
  const maleNormal = PetManager.createPetInstance({ breed: 'orange', build: 'normal', gender: 'male' });
  const maleChubby = PetManager.createPetInstance({ breed: 'orange', build: 'chubby', gender: 'male' });
  const maleSlim = PetManager.createPetInstance({ breed: 'orange', build: 'slim', gender: 'male' });

  const svgNormal = PetRenderer.renderPetSvg(maleNormal);
  const svgChubby = PetRenderer.renderPetSvg(maleChubby);
  const svgSlim = PetRenderer.renderPetSvg(maleSlim);

  // Normal male bodyRx = 25, bellyRx = 17
  assert.ok(svgNormal.includes('rx="25"'), 'Normal male must have bodyRx 25');
  assert.ok(svgNormal.includes('rx="17"'), 'Normal male must have bellyRx 17');
  assert.ok(svgNormal.includes('gender-male'), 'Must contain gender-male class');

  // Chubby male bodyRx = 28, bellyRx = 20
  assert.ok(svgChubby.includes('rx="28"'), 'Chubby male must have bodyRx 28');
  assert.ok(svgChubby.includes('rx="20"'), 'Chubby male must have bellyRx 20');

  // Slim male bodyRx = 21, bellyRx = 13
  assert.ok(svgSlim.includes('rx="21"'), 'Slim male must have bodyRx 21');
  assert.ok(svgSlim.includes('rx="13"'), 'Slim male must have bellyRx 13');
});

it('Female is strictly more slender than male for identical breed and build', () => {
  const male = PetManager.createPetInstance({ breed: 'orange', build: 'normal', gender: 'male' });
  const female = PetManager.createPetInstance({ breed: 'orange', build: 'normal', gender: 'female' });

  const maleSvg = PetRenderer.renderPetSvg(male);
  const femaleSvg = PetRenderer.renderPetSvg(female);

  // Normal male: bodyRx 25 -> Female: 25 * 0.88 = 22
  assert.ok(femaleSvg.includes('rx="22"'), 'Female must have slender bodyRx 22 (vs male 25)');
  // Normal male: bellyRx 17 -> Female: 17 * 0.82 = 13.9
  assert.ok(femaleSvg.includes('rx="13.9"'), 'Female must have slender bellyRx 13.9 (vs male 17)');
  // Normal male: cheekRx 8.0 -> Female: 8.0 * 0.82 = 6.6
  assert.ok(femaleSvg.includes('rx="6.6"'), 'Female must have slender cheekRx 6.6 (vs male 8.0)');
  // Normal male: pawRx 4.5 -> Female: 4.5 * 0.88 = 4
  assert.ok(femaleSvg.includes('rx="4"'), 'Female must have slender pawRx 4 (vs male 4.5)');
  assert.ok(femaleSvg.includes('gender-female'), 'Must contain gender-female class');
});

it('Female chubby build is distinctly leaner than male chubby build', () => {
  const maleChubby = PetManager.createPetInstance({ breed: 'scottish_bluepoint', build: 'chubby', gender: 'male' });
  const femaleChubby = PetManager.createPetInstance({ breed: 'scottish_bluepoint', build: 'chubby', gender: 'female' });

  const maleSvg = PetRenderer.renderPetSvg(maleChubby);
  const femaleSvg = PetRenderer.renderPetSvg(femaleChubby);

  // Male chubby: bodyRx 28 -> Female chubby: 28 * 0.88 = 24.6
  assert.ok(maleSvg.includes('rx="28"'), 'Male chubby has rx 28');
  assert.ok(femaleSvg.includes('rx="24.6"'), 'Female chubby has slender rx 24.6');
  // Male chubby: bellyRx 20 -> Female chubby: 20 * 0.82 = 16.4
  assert.ok(femaleSvg.includes('rx="16.4"'), 'Female chubby bellyRx is 16.4 (vs male 20)');
});

it('Two-legged posture reflects slender proportion for female', () => {
  const maleTwoLegged = PetManager.createPetInstance({ breed: 'tabby', gender: 'male', state: 'two_legged' });
  const femaleTwoLegged = PetManager.createPetInstance({ breed: 'tabby', gender: 'female', state: 'two_legged' });

  const maleSvg = PetRenderer.renderPetSvg(maleTwoLegged);
  const femaleSvg = PetRenderer.renderPetSvg(femaleTwoLegged);

  assert.ok(maleSvg.includes('rx="20" ry="24"'), 'Male upright rx 20, ry 24');
  assert.ok(femaleSvg.includes('rx="17" ry="25"'), 'Female upright is more slender rx 17, and elongated ry 25');
});

// -----------------------------------------------------------------------------
console.log('\n=== [SECTION 3] Gender-Specific Behavior & Personality ===');
// -----------------------------------------------------------------------------

it('getPersonalityTitle produces tailored titles for male and female', () => {
  const statsHighIntel = { intelligence: 90, diligence: 85, energy: 50, talkativeness: 50, affection: 50, sociability: 50 };
  const statsLazy = { intelligence: 40, diligence: 10, energy: 20, talkativeness: 30, affection: 40, sociability: 40 };

  const maleTitle1 = PetPersonality.getPersonalityTitle(statsHighIntel, 'male');
  const femaleTitle1 = PetPersonality.getPersonalityTitle(statsHighIntel, 'female');
  assert.strictEqual(maleTitle1, 'ผู้ช่วยวิชาการตัวจิ๋ว');
  assert.strictEqual(femaleTitle1, 'ผู้ช่วยวิชาการสาวน้อย');

  const maleTitle2 = PetPersonality.getPersonalityTitle(statsLazy, 'male');
  const femaleTitle2 = PetPersonality.getPersonalityTitle(statsLazy, 'female');
  assert.strictEqual(maleTitle2, 'แชมเปี้ยนการนอนกลางวัน');
  assert.strictEqual(femaleTitle2, 'เจ้าหญิงขี้เซาแห่งการนอน');
});

it('getPersonalityBadges includes gender tag with correct color', () => {
  const stats = { intelligence: 80, diligence: 50, energy: 50, talkativeness: 50, affection: 50, sociability: 50 };
  const maleBadges = PetPersonality.getPersonalityBadges(stats, 'male');
  const femaleBadges = PetPersonality.getPersonalityBadges(stats, 'female');

  assert.ok(maleBadges.some(b => b.text === '♂ เพศผู้' && b.color === '#3a86ff'), 'Must include ♂ เพศผู้ badge');
  assert.ok(femaleBadges.some(b => b.text === '♀ เพศเมีย' && b.color === '#ff006e'), 'Must include ♀ เพศเมีย badge');
});

it('calculateWalkSpeed factors in lighter, graceful stride for female', () => {
  const male = { build: 'normal', gender: 'male', personality: { energy: 60 } };
  const female = { build: 'normal', gender: 'female', personality: { energy: 60 } };

  const maleSpeed = PetPersonality.calculateWalkSpeed(male);
  const femaleSpeed = PetPersonality.calculateWalkSpeed(female);

  assert.ok(femaleSpeed > maleSpeed, `Female speed (${femaleSpeed}) should be faster/lighter than male speed (${maleSpeed})`);
});

it('evaluateNextState weighs grooming/stretching/begging higher for female, patrolling/scratching higher for male', () => {
  const male = { gender: 'male', personality: { intelligence: 50, diligence: 50, energy: 50, affection: 50, sociability: 50 } };
  const female = { gender: 'female', personality: { intelligence: 50, diligence: 50, energy: 50, affection: 50, sociability: 50 } };

  // Sample 2000 state evaluations to verify statistical weighting
  const sampleCounts = (pet) => {
    const counts = { walk: 0, scratch: 0, groom: 0, two_legged: 0, sit: 0 };
    for (let i = 0; i < 2000; i++) {
      const st = PetPersonality.evaluateNextState(pet);
      if (counts[st] !== undefined) counts[st]++;
    }
    return counts;
  };

  const maleCounts = sampleCounts(male);
  const femaleCounts = sampleCounts(female);

  // Female groom and two_legged should be significantly higher than male
  assert.ok(femaleCounts.groom > maleCounts.groom, `Female groom (${femaleCounts.groom}) must exceed male groom (${maleCounts.groom})`);
  assert.ok(femaleCounts.two_legged > maleCounts.two_legged, `Female two_legged (${femaleCounts.two_legged}) must exceed male two_legged (${maleCounts.two_legged})`);
  // Male walk and scratch should be higher than female
  assert.ok(maleCounts.walk > femaleCounts.walk, `Male walk (${maleCounts.walk}) must exceed female walk (${femaleCounts.walk})`);
  assert.ok(maleCounts.scratch > femaleCounts.scratch, `Male scratch (${maleCounts.scratch}) must exceed female scratch (${femaleCounts.scratch})`);
});

// -----------------------------------------------------------------------------
console.log('\n=== [SECTION 4] Gender-Specific Dialogues & Speech ===');
// -----------------------------------------------------------------------------

it('formatDialogue replaces gender tokens correctly for male and female', () => {
  const template = '{self}เป็นแมว{gender}ที่น่ารักที่สุดในโลก{particleSoft}';
  const maleOutput = formatDialogue(template, { gender: 'male' });
  const femaleOutput = formatDialogue(template, { gender: 'female' });

  assert.strictEqual(maleOutput, 'ผมเป็นแมวเพศผู้ที่น่ารักที่สุดในโลกฮะ');
  assert.strictEqual(femaleOutput, 'หนูเป็นแมวเพศเมียที่น่ารักที่สุดในโลกนะคะ');
});

it('formatDialogue replaces polite ending particles {particle}', () => {
  const template = 'ขอบคุณสำหรับอาหาร{particle}';
  const maleOutput = formatDialogue(template, { gender: 'male' });
  const femaleOutput = formatDialogue(template, { gender: 'female' });

  assert.strictEqual(maleOutput, 'ขอบคุณสำหรับอาหารครับ');
  assert.strictEqual(femaleOutput, 'ขอบคุณสำหรับอาหารค่ะ');
});

it('getRandomDialogue returns gender-specific dialogues for docContext, fatigue, feeding, and touch', () => {
  const petMale = PetManager.createPetInstance({ name: 'เจ้าส้ม', gender: 'male' });
  const petFemale = PetManager.createPetInstance({ name: 'หนูขาว', gender: 'female' });

  // Male docContext should frequently feature ครับ/ฮะ/ผม
  let maleDocDialogueFound = false;
  let femaleDocDialogueFound = false;

  for (let i = 0; i < 25; i++) {
    const dMale = getRandomDialogue('docContext', { pet: petMale, docName: 'คู่มือ.md' });
    if (dMale.includes('ครับ') || dMale.includes('ฮะ') || dMale.includes('ผม')) {
      maleDocDialogueFound = true;
    }
    const dFemale = getRandomDialogue('docContext', { pet: petFemale, docName: 'คู่มือ.md' });
    if (dFemale.includes('ค่ะ') || dFemale.includes('นะคะ') || dFemale.includes('หนู') || dFemale.includes('ขา')) {
      femaleDocDialogueFound = true;
    }
  }

  assert.ok(maleDocDialogueFound, 'Male dialogue should contain male particles (ครับ/ฮะ/ผม)');
  assert.ok(femaleDocDialogueFound, 'Female dialogue should contain female particles (ค่ะ/นะคะ/หนู/ขา)');
});

// -----------------------------------------------------------------------------
console.log('\n=== [SECTION 5] Multi-Pet Social Pairing Dynamics ===');
// -----------------------------------------------------------------------------

it('PetSocial defines genderPairChats with male_female, male_male, and female_female', () => {
  assert.ok(PET_DIALOGUES.genderPairChats, 'genderPairChats must be defined');
  assert.ok(PET_DIALOGUES.genderPairChats.male_female.length >= 3, 'male_female chats must exist');
  assert.ok(PET_DIALOGUES.genderPairChats.male_male.length >= 3, 'male_male chats must exist');
  assert.ok(PET_DIALOGUES.genderPairChats.female_female.length >= 3, 'female_female chats must exist');
});

it('PetSocial formats appropriate dialogue and cuddle message for Male + Female', () => {
  PetSocial.lastInteractionTime = 0;
  const tomCat = PetManager.createPetInstance({ id: 'tom', name: 'พี่ส้ม', gender: 'male', x: 100, y: 100 });
  const queenCat = PetManager.createPetInstance({ id: 'queen', name: 'น้องขาว', gender: 'female', x: 140, y: 100 });

  let saidMessage = '';
  const sayMock = (p, msg) => { saidMessage = msg; };

  PetSocial.checkSocialInteraction(tomCat, queenCat, sayMock);
  assert.ok(saidMessage.length > 0, 'Must produce dialogue when two cats meet');

  // Verify gender pair chat formatting specifically
  const mfTemplate = PET_DIALOGUES.genderPairChats.male_female[0];
  const formatted = formatDialogue(mfTemplate, { otherPetName: 'น้องขาว' });
  assert.ok(formatted.includes('น้องขาว'), 'Must reference partner cat in gender pair chat');
});

// -----------------------------------------------------------------------------
console.log('\n=== [SECTION 6] UI Integration & Modal Form ===');
// -----------------------------------------------------------------------------

it('renderAdoptionTab includes gender button group for male and female', () => {
  const html = PetUI.renderAdoptionTab(PetManager);
  assert.ok(html.includes('id="adopt-gender-options"'), 'Must contain adopt-gender-options container');
  assert.ok(html.includes('data-gender="male"'), 'Must contain male gender button');
  assert.ok(html.includes('data-gender="female"'), 'Must contain female gender button');
  assert.ok(html.includes('เพศเมีย (เพรียวยาว สง่างาม)'), 'Must indicate female slender trait in UI');
});

it('renderMyPetsTab displays gender badges for both male and female cats', () => {
  PetManager.pets = [
    PetManager.createPetInstance({ id: 'p_m', name: 'เจ้าหนุ่ม', gender: 'male' }),
    PetManager.createPetInstance({ id: 'p_f', name: 'เจ้าสาว', gender: 'female' })
  ];

  const html = PetUI.renderMyPetsTab(PetManager);
  assert.ok(html.includes('gender-male'), 'Must contain gender-male badge class');
  assert.ok(html.includes('♂ เพศผู้'), 'Must display ♂ เพศผู้ label');
  assert.ok(html.includes('gender-female'), 'Must contain gender-female badge class');
  assert.ok(html.includes('♀ เพศเมีย'), 'Must display ♀ เพศเมีย label');
});

it('addNewPet accepts gender and initializes pet with specified gender', () => {
  // Ensure layerEl exists in headless
  if (!PetManager.layerEl) {
    PetManager.layerEl = { appendChild: () => {}, querySelectorAll: () => [] };
  }
  const adoptedGirl = PetManager.addNewPet({
    name: 'น้องโมจิ',
    gender: 'female',
    breed: 'persian_white'
  });

  assert.strictEqual(adoptedGirl.gender, 'female');
  assert.ok(adoptedGirl.el.className.includes('gender-female'), 'DOM element must have gender-female class');
});

console.log('\n=== [SECTION 7] Walking Direction & Dynamic Facing Orientation ===\n');

it('Facing orientation matches walking direction dynamically in motion physics', () => {
  const pet = PetManager.createPetInstance({
    id: 'p_facing_test',
    name: 'น้องหันหน้า',
    breed: 'orange',
    x: 200,
    y: 200,
    facing: 'left'
  });
  const el = PetRenderer.createPetElement(pet);
  pet.el = el;
  assert.ok(el.classList.contains('facing-left'), 'Initial facing must be facing-left');

  // Walk towards RIGHT (targetX = 400 > pet.x 200)
  pet.targetX = 400;
  pet.targetY = 200;
  PetManager.pets = [pet];
  PetManager.updateMotionPhysics(0.016);

  assert.strictEqual(pet.facing, 'right', 'Pet facing must switch to right when moving right');
  assert.ok(el.classList.contains('facing-right'), 'DOM element must update to facing-right class');
  assert.ok(!el.classList.contains('facing-left'), 'DOM element must no longer have facing-left class');

  // Walk towards LEFT (targetX = 50 < pet.x)
  pet.targetX = 50;
  pet.targetY = 200;
  PetManager.updateMotionPhysics(0.016);

  assert.strictEqual(pet.facing, 'left', 'Pet facing must switch to left when moving left');
  assert.ok(el.classList.contains('facing-left'), 'DOM element must update to facing-left class');
  assert.ok(!el.classList.contains('facing-right'), 'DOM element must no longer have facing-right class');
});

it('CSS facing-right applies scaleX(-1) and facing-left applies scaleX(1) without backwards walk', () => {
  const css = fs.readFileSync('src/css/pet.css', 'utf8');
  assert.ok(css.includes('.desktop-pet.facing-right .pet-inner'), 'CSS must define .facing-right');
  assert.ok(css.includes('.desktop-pet.facing-left .pet-inner'), 'CSS must define .facing-left');
  assert.ok(css.includes('scaleX(-1)'), 'CSS must contain scaleX(-1) for rightward flip');
});

// Run queued tests sequentially
let passed = 0;
let total = 0;

for (const t of tests) {
  total++;
  try {
    await t.fn();
    console.log(`  [PASS] ${t.desc}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${t.desc}`);
    console.error(`         ${err.message}`);
    process.exitCode = 1;
  }
}

console.log('\n================================================================================');
console.log(`  Execution Summary: ${passed}/${total} passed (${((passed/total)*100).toFixed(1)}%)`);
console.log('================================================================================');

if (passed !== total) {
  process.exit(1);
}
