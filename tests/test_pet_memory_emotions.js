// ชุดทดสอบอัตโนมัติสำหรับระบบความทรงจำ สัตว์เลี้ยงรับรู้วันเวลาจริง อารมณ์ และไดอารี่
// Run with: node tests/test_pet_memory_emotions.js

import assert from 'assert';
import path from 'path';
import fs from 'fs';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

function loadModule(filePath, customSandbox = {}) {
  let code = fs.readFileSync(filePath, 'utf8');

  const sandbox = {
    console,
    Date,
    Math,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    window: { innerWidth: 1200, innerHeight: 800 },
    document: {
      createElement: () => ({
        style: {},
        classList: { add: () => {}, remove: () => {}, contains: () => false },
        appendChild: () => {},
        setAttribute: () => {},
        getAttribute: () => null,
        addEventListener: () => {}
      })
    },
    ...customSandbox
  };
  Object.assign(sandbox.window, customSandbox);

  code = code
    .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
    .replace(/export\s+const\s+(\w+)\s*=/g, 'var $1 = window.$1 =')
    .replace(/export\s+class\s+(\w+)/g, 'var $1 = window.$1 = class $1')
    .replace(/export\s+function\s+(\w+)/g, 'var $1 = window.$1 = function $1')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s*\{[^}]*\};?/g, '');

  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window;
}

console.log('================================================================================');
console.log('  MDBrowse Desktop Pet System — Memory, Real PC Time & Emotion Test Suite');
console.log('================================================================================\n');

// 1. Load Modules
const mockStore = {
  get: async () => null,
  set: async () => {}
};
const memSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-memory.js'), { Store: mockStore });
const { PetMemory, BOND_LEVELS, PET_MOODS, SOUVENIR_GIFTS } = memSandbox;

const dialSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-dialogues.js'), {
  PetMemory,
  BOND_LEVELS,
  PET_MOODS
});
const { PET_DIALOGUES, getRandomDialogue, formatDialogue } = dialSandbox;

const breedsSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-breeds.js'));
const { PET_BREEDS } = breedsSandbox;

const renderSandbox = loadModule(path.join(ROOT, 'src/js/pet/pet-render.js'), {
  PET_BREEDS,
  PetMemory
});
const { PetRenderer } = renderSandbox;

let totalChecks = 0;
function test(desc, fn) {
  try {
    fn();
    totalChecks++;
    console.log(`  [PASS] ${desc}`);
  } catch (err) {
    console.error(`  [FAIL] ${desc}`);
    console.error(err);
    process.exit(1);
  }
}

// === SECTION 1: Real-time PC Context & Calendar Awareness ===
console.log('=== [SECTION 1] Real PC Date & Time Context Engine ===');

test('PetMemory.getRealTimeContext returns comprehensive real PC context', () => {
  const ctx = PetMemory.getRealTimeContext();
  assert(ctx.dayName && typeof ctx.dayName === 'string', 'Day name must be present in Thai');
  assert(ctx.monthName && typeof ctx.monthName === 'string', 'Month name must be present in Thai');
  assert(ctx.yearBE > 2560, 'Year B.E. must be greater than 2560');
  assert(typeof ctx.timeString === 'string' && ctx.timeString.includes(':'), 'Time string formatted HH:MM');
  assert(typeof ctx.dateString === 'string', 'Date string formatted');
  assert(['dawn', 'morning', 'noon', 'afternoon', 'evening', 'night', 'late_night'].includes(ctx.timeSlot), 'Valid time slot');
  assert(typeof ctx.isWeekend === 'boolean', 'isWeekend boolean flag');
  assert(typeof ctx.isFriday === 'boolean', 'isFriday boolean flag');
  assert(typeof ctx.isMonday === 'boolean', 'isMonday boolean flag');
  assert(typeof ctx.isMonthEnd === 'boolean', 'isMonthEnd boolean flag');
});

test('PetMemory.getRealTimeContext respects simulated dates correctly', () => {
  // Simulate Monday morning
  const simMonday = new Date(2026, 8, 7, 9, 30); // 7 Sep 2026 is Monday
  const ctxMon = PetMemory.getRealTimeContext(simMonday);
  assert.strictEqual(ctxMon.dayName, 'วันจันทร์');
  assert.strictEqual(ctxMon.isMonday, true);
  assert.strictEqual(ctxMon.isWeekend, false);
  assert.strictEqual(ctxMon.timeSlot, 'morning');

  // Simulate Friday late night
  const simFri = new Date(2026, 8, 4, 23, 45); // 4 Sep 2026 is Friday
  const ctxFri = PetMemory.getRealTimeContext(simFri);
  assert.strictEqual(ctxFri.dayName, 'วันศุกร์');
  assert.strictEqual(ctxFri.isFriday, true);
  assert.strictEqual(ctxFri.isLateNight, true);

  // Simulate Weekend Sunday noon
  const simSun = new Date(2026, 8, 6, 12, 15); // 6 Sep 2026 is Sunday
  const ctxSun = PetMemory.getRealTimeContext(simSun);
  assert.strictEqual(ctxSun.dayName, 'วันอาทิตย์');
  assert.strictEqual(ctxSun.isWeekend, true);
  assert.strictEqual(ctxSun.timeSlot, 'noon');
});

// === SECTION 2: Pet Memory Initialization & Bond Progression ===
console.log('\n=== [SECTION 2] Pet Memory & Bond Level Progression ===');

const mockPet = {
  id: 'test_cat_001',
  name: 'เสือสมิง',
  breed: 'orange',
  personality: { affection: 80, energy: 60 }
};

test('PetMemory creates and initializes memory record with PC timestamp', () => {
  PetMemory.memories = {};
  const mem = PetMemory.getMemory(mockPet);
  assert.strictEqual(mem.petId, mockPet.id);
  assert.strictEqual(mem.petName, mockPet.name);
  assert(mem.firstMetDate > 0, 'firstMetDate must be initialized to PC timestamp');
  assert(mem.firstMetDateStr.length > 5, 'firstMetDateStr must be human readable');
  assert.strictEqual(mem.bondLevel, 1, 'Initial bond level is 1');
  assert.strictEqual(mem.bondExp, 0, 'Initial bond exp is 0');
});

test('Pet petting awards +12 Bond EXP and tracks total petted count', () => {
  const memBefore = PetMemory.getMemory(mockPet);
  const expBefore = memBefore.bondExp;
  const pettedBefore = memBefore.stats.totalPetted;

  PetMemory.recordPetting(mockPet);

  assert.strictEqual(memBefore.bondExp, expBefore + 12, 'Petting must add +12 EXP');
  assert.strictEqual(memBefore.stats.totalPetted, pettedBefore + 1, 'totalPetted must increment');
  assert.strictEqual(mockPet.mood, 'blissful', 'Petting triggers blissful mood');
});

test('Pet feeding awards +18 Bond EXP and tracks total fed count', () => {
  const mem = PetMemory.getMemory(mockPet);
  const expBefore = mem.bondExp;
  const fedBefore = mem.stats.totalFed;

  PetMemory.recordFeeding(mockPet);

  assert.strictEqual(mem.bondExp, expBefore + 18, 'Feeding must add +18 EXP');
  assert.strictEqual(mem.stats.totalFed, fedBefore + 1, 'totalFed must increment');
  assert.strictEqual(mockPet.mood, 'blissful', 'Feeding triggers blissful mood');
});

test('Playing with toys awards +15 Bond EXP and tracks sessions', () => {
  const mem = PetMemory.getMemory(mockPet);
  const expBefore = mem.bondExp;
  const playBefore = mem.stats.totalPlaySessions;

  PetMemory.recordPlay(mockPet, 'cat_toy_yarn');

  assert.strictEqual(mem.bondExp, expBefore + 15, 'Playing must add +15 EXP');
  assert.strictEqual(mem.stats.totalPlaySessions, playBefore + 1, 'totalPlaySessions must increment');
  assert.strictEqual(mockPet.mood, 'playful', 'Playing triggers playful mood');
});

test('Reading minutes accumulation awards EXP and tracks night owl sessions', () => {
  const mem = PetMemory.getMemory(mockPet);
  const expBefore = mem.bondExp;
  const minBefore = mem.stats.totalReadingMinutes;

  PetMemory.addReadingMinutes(mockPet, 15);

  assert.strictEqual(mem.stats.totalReadingMinutes, minBefore + 15, 'totalReadingMinutes increments by 15');
  assert(mem.bondExp > expBefore, 'Reading adds EXP');
});

test('Bond Level correctly levels up and calculates progress percentage', () => {
  const mem = PetMemory.getMemory(mockPet);
  // Add 150 EXP to push to Level 2 (requires 100 EXP)
  PetMemory.addBondExp(mockPet, 150, 'ทดสอบเลเวลอัป');

  assert(mem.bondLevel >= 2, 'Bond level must be at least 2');
  const progress = PetMemory.getBondProgress(mem);
  assert.strictEqual(progress.level, mem.bondLevel);
  assert(progress.name.length > 0, 'Bond level title exists');
  assert(progress.percent >= 0 && progress.percent <= 100, 'Bond progress percentage between 0 and 100');
});

// === SECTION 3: Document Memory & Favorite Document Tracking ===
console.log('\n=== [SECTION 3] Favorite Document Tracking & Memory ===');

test('Opening documents remembers read frequency and establishes favorite doc', () => {
  for (let i = 0; i < 5; i++) {
    PetMemory.recordDocumentOpened(mockPet, 'Project_Roadmap.md');
  }
  PetMemory.recordDocumentOpened(mockPet, 'Notes.md');

  const mem = PetMemory.getMemory(mockPet);
  assert.strictEqual(mem.favoriteDoc.name, 'Project_Roadmap.md', 'Project_Roadmap.md must be favorite doc');
  assert.strictEqual(mem.favoriteDoc.count, 5, 'Count must be exactly 5');
  assert(mem.stats.totalDocsRead >= 2, 'totalDocsRead must be at least 2');
});

// === SECTION 4: Collectible Souvenir Gifts & Diary Journal ===
console.log('\n=== [SECTION 4] Collectible Souvenir Gifts & Diary Journal ===');

test('Souvenir gifts unlock automatically when conditions are met', () => {
  const mem = PetMemory.getMemory(mockPet);
  mem.giftsCollected = []; // Reset gifts

  // Satisfy conditions: level >= 2
  mem.bondLevel = 2;
  PetMemory.checkGifts(mockPet);
  const clover = mem.giftsCollected.find(g => g.id === 'four_leaf_clover');
  assert(clover, 'four_leaf_clover must unlock at bond level >= 2');
  assert(clover.unlockedDateStr, 'Gift must have unlock date string');

  // Satisfy conditions: played >= 4 times
  mem.stats.totalPlaySessions = 6;
  PetMemory.checkGifts(mockPet);
  const feather = mem.giftsCollected.find(g => g.id === 'lucky_feather');
  assert(feather, 'lucky_feather must unlock when play sessions >= 4');

  // Satisfy conditions: petted >= 12 times
  mem.stats.totalPetted = 25;
  PetMemory.checkGifts(mockPet);
  const cap = mem.giftsCollected.find(g => g.id === 'shiny_bottle_cap');
  assert(cap, 'shiny_bottle_cap must unlock when petted >= 12');
});

test('Diary journal records milestone entries chronologically with icons', () => {
  const mem = PetMemory.getMemory(mockPet);
  assert(mem.diaryEntries.length > 0, 'Diary entries must have recorded milestones');
  const latest = mem.diaryEntries[0]; // Newest first
  assert(latest.id && latest.timestamp && latest.title && latest.desc, 'Diary entry has full structure');
  assert(latest.icon, 'Diary entry has icon');
});

// === SECTION 5: Emotion States & SVG Visual Eye Rendering ===
console.log('\n=== [SECTION 5] Emotion Engine & SVG Visual Expressions ===');

test('All 9 Pet Moods are defined with labels, icons, and descriptions', () => {
  const moodKeys = ['blissful', 'loving', 'curious', 'playful', 'sleepy', 'pouting', 'proud', 'hungry', 'lonely'];
  for (const m of moodKeys) {
    assert(PET_MOODS[m], `Mood ${m} must exist in PET_MOODS`);
    assert(PET_MOODS[m].label, `Mood ${m} has label`);
    assert(PET_MOODS[m].icon, `Mood ${m} has emoji icon`);
  }
});

test('PetRenderer generates mood-specific SVG eye geometry', () => {
  const breed = PET_BREEDS.orange;

  // 1. Blissful eyes (curved crescent paths ^_^)
  const svgBliss = PetRenderer.renderCatSvg(breed, { ...mockPet, state: 'sit', mood: 'blissful' });
  assert(svgBliss.includes('d="M 39 32 Q 43 27 47 32"'), 'Blissful curved left eye path');

  // 2. Loving eyes (sparkle heart shapes)
  const svgLoving = PetRenderer.renderCatSvg(breed, { ...mockPet, state: 'sit', mood: 'loving' });
  assert(svgLoving.includes('fill="#ff758f"'), 'Loving heart-sparkle eye fill');

  // 3. Sleepy eyes (droopy eyelids)
  const svgSleepy = PetRenderer.renderCatSvg(breed, { ...mockPet, state: 'sit', mood: 'sleepy' });
  assert(svgSleepy.includes('x1="38" y1="30" x2="48" y2="31"'), 'Sleepy droopy eyelid path');

  // 4. Pouting eyes (annoyed squinted eyes)
  const svgPout = PetRenderer.renderCatSvg(breed, { ...mockPet, state: 'sit', mood: 'pouting' });
  assert(svgPout.includes('x1="39" y1="32" x2="47" y2="30"'), 'Pouting annoyed slanted eye line');
});

// === SECTION 6: Rich Thai Dialogues & Real-time Tag Formatting ===
console.log('\n=== [SECTION 6] Thai Dialogues & PC Clock Formatting ===');

test('Real PC date & time dialogues populate dynamic tags seamlessly', () => {
  const timeCtx = PetMemory.getRealTimeContext();
  const dialogue = getRandomDialogue('realTime', {
    petName: mockPet.name,
    dayName: timeCtx.dayName,
    timeString: timeCtx.timeString,
    dateString: timeCtx.dateString,
    timeSlotName: timeCtx.timeSlotName
  });

  assert(dialogue && dialogue.length > 0, 'Real-time dialogue returned');
  assert(!dialogue.includes('{dayName}'), 'No unreplaced {dayName} tag');
  assert(!dialogue.includes('{timeString}'), 'No unreplaced {timeString} tag');
  assert(!dialogue.includes('{timeSlotName}'), 'No unreplaced {timeSlotName} tag');
});

test('Memory-driven dialogues populate days and favorite doc tags', () => {
  const mem = PetMemory.getMemory(mockPet);
  const dialogue = getRandomDialogue('memory', {
    petName: mockPet.name,
    days: 42,
    favoriteDoc: 'ระบบการเงิน.xlsx',
    totalPetted: 99,
    bondLevelName: 'ทาสรักคนโปรด',
    petMemory: mem
  });

  assert(dialogue && dialogue.length > 0, 'Memory dialogue returned');
  assert(!dialogue.includes('{days}'), 'No unreplaced {days} tag');
  assert(!dialogue.includes('{favoriteDoc}'), 'No unreplaced {favoriteDoc} tag');
  assert(!dialogue.includes('{totalPetted}'), 'No unreplaced {totalPetted} tag');
});

test('Deep empathy dialogues provide compassionate and comforting responses', () => {
  const dialogue = getRandomDialogue('deepEmpathy', { petName: mockPet.name });
  assert(dialogue && dialogue.length > 0, 'Deep empathy dialogue returned');
  assert(dialogue.includes('เหมียว') || dialogue.includes('พัก') || dialogue.includes('เคียงข้าง') || dialogue.includes('เก่งมาก'), 'Empathetic content');
});

test('FormatDialogue handles null, undefined, and empty tags safely without throwing', () => {
  const out1 = formatDialogue('สวัสดี {petName}', null);
  assert.strictEqual(out1, 'สวัสดี น้องแมว', 'Default fallback for petName');

  const out2 = formatDialogue(null, {});
  assert.strictEqual(out2, 'เหมียว~', 'Default fallback for null text');

  const out3 = formatDialogue('อยู่ด้วยกันมา {days} วัน', {});
  assert.strictEqual(out3, 'อยู่ด้วยกันมา 1 วัน', 'Default fallback for days');
});

console.log('================================================================================');
console.log(`  All ${totalChecks} Pet Memory, Emotion & PC Clock Tests Passed Successfully!`);
console.log('================================================================================\n');
