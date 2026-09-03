// ระบบฐานข้อมูลความทรงจำเบื้องหลังและอารมณ์ความรู้สึกของสัตว์เลี้ยง (Desktop Pet Memory & Emotion Database)
// จดจำวันเวลาจริงจาก PC, บันทึกความผูกพัน (Bond Level 1-5), สถิติพฤติกรรม, ไดอารี่เรื่องราว (Pet Diary) และของขวัญนำโชค

import { Store } from '../core/store.js';

export const BOND_LEVELS = [
  { level: 1, name: 'คนแปลกหน้าขี้ระแวง', expNeeded: 120, icon: '🐾', color: '#adb5bd', desc: 'ยังไม่ค่อยคุ้นเคย คอยแอบมองทาสอยู่ห่างๆ' },
  { level: 2, name: 'คนคุ้นหน้าผู้อารี', expNeeded: 300, icon: '🐱', color: '#4895ef', desc: 'เริ่มไว้ใจ ยอมให้เกาคางและชอบเดินมาใกล้ๆ' },
  { level: 3, name: 'สหายคู่ใจสายชิล', expNeeded: 650, icon: '⭐', color: '#f72585', desc: 'เพื่อนแท้ร่วมโต๊ะทำงาน คอยเฝ้าจอและส่งกำลังใจ' },
  { level: 4, name: 'ทาสรักคนโปรด', expNeeded: 1200, icon: '💖', color: '#f28482', desc: 'รักและติดทาสหนึบ นอนทับจอและอ้อนตลอดเวลา' },
  { level: 5, name: 'คู่แท้ที่ไม่อาจแยกจาก', expNeeded: Infinity, icon: '👑', color: '#ffb703', desc: 'สายสัมพันธ์แนบแน่นชั่วนิรันดร์ เข้าใจกันแค่มองตา' }
];

export const PET_MOODS = {
  blissful: { id: 'blissful', label: 'เคลิ้มฟินเปี่ยมสุข', icon: '🥰', color: '#f28482', desc: 'สบายใจ ปลอดภัย มีความสุขล้นพุง' },
  loving: { id: 'loving', label: 'คลั่งรักออดอ้อน', icon: '💖', color: '#f72585', desc: 'รักทาสที่สุดในโลก อยากซบคลอเคลีย' },
  curious: { id: 'curious', label: 'อยากรู้อยากเห็น', icon: '🧐', color: '#4361ee', desc: 'กำลังตั้งใจส่องสิ่งที่ทาสกำลังทำ' },
  playful: { id: 'playful', label: 'ซนร่าเริงสุดขีด', icon: '⚡', color: '#ffb703', desc: 'พลังล้น อยากวิ่งไล่จับและตะปบของเล่น' },
  sleepy: { id: 'sleepy', label: 'ง่วงนอนตาปรือ', icon: '😴', color: '#8ecae6', desc: 'หนังตาหย่อน อยากขดตัวหลับปุ๋ย' },
  pouting: { id: 'pouting', label: 'งอนตุ๊บป่องเบาๆ', icon: '😤', color: '#e63946', desc: 'ทาสไม่สนใจ มัวแต่อ่านคนเดียว' },
  proud: { id: 'proud', label: 'ภูมิใจตัวลอย', icon: '👑', color: '#7209b7', desc: 'รู้สึกว่าตัวเองเป็นแมวที่น่ารักที่สุด' },
  hungry: { id: 'hungry', label: 'หิวปลาทู', icon: '🐟', color: '#2a9d8f', desc: 'ท้องเริ่มร้อง คิดถึงอาหารจานโปรด' },
  lonely: { id: 'lonely', label: 'เหงาจังคิดถึงทาส', icon: '🥺', color: '#6c757d', desc: 'ไม่มีใครขยับเมาส์ นั่งมองทาสตาละห้อย' }
};

export const SOUVENIR_GIFTS = [
  { id: 'four_leaf_clover', name: 'ใบโคลเวอร์ 4 แฉกนำโชค', icon: '🍀', desc: 'เหมียวแอบไปเก็บมาจากริมหน้าต่าง มอบให้ทาสขอให้วันนี้โชคดีนะ!', req: 'bond >= 2' },
  { id: 'lucky_feather', name: 'ขนนกสีรุ้งแห่งมิตรภาพ', icon: '🪶', desc: 'ขนนกที่เหมียวตั้งใจตะปบมาฝาก เอามาเก็บไว้ให้ทาสคนเก่ง', req: 'play >= 5' },
  { id: 'shiny_bottle_cap', name: 'ฝาขวดเงาวับสุดหวง', icon: '✨', desc: 'สมบัติลับสุดหวงของเหมียว ยอมแบ่งให้ทาสคนโปรดคนเดียวเท่านั้น', req: 'pet >= 15' },
  { id: 'origami_fish', name: 'ปลาทูกระดาษพับด้วยใจ', icon: '🐟', desc: 'เหมียวแอบหัดพับให้ทาส จะได้มีปลาทูกินคู่กันทุกมื้อ', req: 'feed >= 6' },
  { id: 'reading_bookmark', name: 'ที่คั่นหนังสือลายอุ้งเท้า', icon: '📑', desc: 'คั่นหน้าที่ทาสชอบอ่านไว้ให้ เหมียวร่วมอ่านด้วยนะ', req: 'read >= 25 mins' },
  { id: 'golden_bell', name: 'กระดิ่งทองแห่งสายสัมพันธ์', icon: '🔔', desc: 'สัญลักษณ์แห่งความผูกพันสูงสุดระดับ 5 ไม่ว่าเมื่อไหร่ก็จะได้ยินเสียงใจตรงกัน', req: 'bond >= 5' }
];

export class PetMemory {
  static memories = {}; // Map of petId -> PetMemoryData
  static initialized = false;

  // 1. ตรวจจับวันเวลาจริงจากเครื่อง PC อย่างละเอียด
  static getRealTimeContext(dateInput = null) {
    const now = (dateInput instanceof Date && !isNaN(dateInput)) ? dateInput : new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const dayOfWeek = now.getDay(); // 0=อา, 1=จ, ..., 5=ศ, 6=ส
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const yearCE = now.getFullYear();
    const yearBE = yearCE + 543;

    const thaiDays = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
    const thaiMonths = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    const dayName = thaiDays[dayOfWeek];
    const monthName = thaiMonths[month - 1];
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isFriday = dayOfWeek === 5;
    const isMonday = dayOfWeek === 1;

    let timeSlot = 'morning';
    let timeSlotName = 'ยามเช้า';
    if (hour >= 5 && hour < 8) {
      timeSlot = 'dawn';
      timeSlotName = 'เช้าตรู่';
    } else if (hour >= 8 && hour < 11) {
      timeSlot = 'morning';
      timeSlotName = 'ยามสาย';
    } else if (hour >= 11 && hour <= 13) {
      timeSlot = 'noon';
      timeSlotName = 'เที่ยงวัน';
    } else if (hour > 13 && hour < 17) {
      timeSlot = 'afternoon';
      timeSlotName = 'ยามบ่าย';
    } else if (hour >= 17 && hour < 20) {
      timeSlot = 'evening';
      timeSlotName = 'ยามพลบค่ำ';
    } else if (hour >= 20 && hour < 23) {
      timeSlot = 'night';
      timeSlotName = 'ยามค่ำคืน';
    } else {
      timeSlot = 'late_night';
      timeSlotName = 'ดึกสงัด';
    }

    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    const dateString = `${date} ${monthName} ${yearBE}`;

    return {
      now,
      hour,
      minute,
      dayOfWeek,
      dayName,
      date,
      month,
      monthName,
      yearCE,
      yearBE,
      timeString,
      dateString,
      isWeekend,
      isFriday,
      isMonday,
      timeSlot,
      timeSlotName,
      isLateNight: hour >= 23 || hour < 5,
      isMonthEnd: date >= 27,
      isMonthStart: date <= 3
    };
  }

  // 2. การเริ่มต้นและโหลดฐานข้อมูล
  static async init() {
    if (this.initialized) return;
    try {
      const saved = await Store.get('pet_memories');
      if (saved && typeof saved === 'object') {
        this.memories = saved;
      }
      this.initialized = true;
    } catch (e) {
      console.warn('[PetMemory] init failed, starting fresh:', e.message);
      this.memories = {};
      this.initialized = true;
    }
  }

  // ดึงข้อมูลความทรงจำของสัตว์เลี้ยงตัวที่ระบุ (สร้างใหม่หากยังไม่มี)
  static getMemory(pet) {
    if (!pet || !pet.id) return null;
    const petId = pet.id;
    if (!this.memories[petId]) {
      const now = Date.now();
      const timeCtx = this.getRealTimeContext();
      this.memories[petId] = {
        petId,
        name: pet.name || 'น้องแมว',
        petName: pet.name || 'น้องแมว',
        firstMet: now,
        firstMetDate: now,
        firstMetDateStr: timeCtx.dateString,
        bondExp: 0, // เริ่มต้นด้วย 0 คะแนน
        bondLevel: 1,
        mood: 'curious',
        moodReason: 'เพิ่งได้พบกับทาสเป็นครั้งแรก',
        lastInteractionTime: now,
        stats: {
          totalPetted: 0,
          totalFed: 0,
          totalPlaySessions: 0,
          totalReadingMinutes: 0,
          nightOwlSessions: 0,
          earlyBirdSessions: 0,
          totalDocsRead: 0
        },
        favoriteDoc: null, // { name: string, count: number }
        recentDocs: [], // [{ name, count, lastRead }]
        favoriteFood: 'ปลาทูย่างหอมกรุ่น',
        diaryEntries: [
          {
            id: 'entry_' + now,
            timestamp: now,
            dateStr: timeCtx.dateString,
            timeStr: timeCtx.timeString,
            icon: '🐾',
            title: 'วันแรกที่เราได้พบกัน',
            desc: `ได้มาอยู่กับทาสอย่างเป็นทางการเมื่อ ${timeCtx.dayName} ที่ ${timeCtx.dateString} (${timeCtx.timeString} น.) ฝากเนื้อฝากตัวด้วยนะ!`,
            mood: 'blissful'
          }
        ],
        giftsCollected: []
      };
      this.saveAll();
    }
    return this.memories[petId];
  }

  // คำนวณจำนวนวันที่อยู่ร่วมกันจากวันเวลาจริงของเครื่อง
  static getDaysTogether(mem) {
    if (!mem || !mem.firstMet) return 1;
    const diffMs = Date.now() - mem.firstMet;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return Math.max(1, days + 1);
  }

  // คำนวณข้อมูลระดับความผูกพัน (Bond Level & EXP)
  static getBondProgress(mem) {
    if (!mem) return { level: 1, name: 'คนแปลกหน้าขี้ระแวง', currentExp: 0, neededExp: 100, percent: 0, icon: '🐾' };
    const exp = mem.bondExp || 0;
    let prevLimit = 0;

    for (let i = 0; i < BOND_LEVELS.length; i++) {
      const b = BOND_LEVELS[i];
      if (exp < b.expNeeded || i === BOND_LEVELS.length - 1) {
        const curInLevel = exp - prevLimit;
        const neededInLevel = b.expNeeded === Infinity ? 1 : b.expNeeded - prevLimit;
        const percent = b.expNeeded === Infinity ? 100 : Math.min(100, Math.round((curInLevel / neededInLevel) * 100));
        return {
          level: b.level,
          name: b.name,
          color: b.color,
          icon: b.icon,
          desc: b.desc,
          currentExp: exp,
          levelExp: curInLevel,
          neededExp: neededInLevel,
          percent
        };
      }
      prevLimit = b.expNeeded;
    }
    return { level: 5, name: 'คู่แท้ที่ไม่อาจแยกจาก', color: '#ffb703', currentExp: exp, percent: 100, icon: '👑' };
  }

  // เพิ่มค่าประสบการณ์ความผูกพัน (Bond EXP)
  static addBondExp(pet, amount, reason = '') {
    const mem = this.getMemory(pet);
    if (!mem) return;
    const oldLevel = this.getBondProgress(mem).level;
    mem.bondExp = (mem.bondExp || 0) + amount;
    mem.lastInteractionTime = Date.now();

    const newProgress = this.getBondProgress(mem);
    if (newProgress.level > oldLevel) {
      mem.bondLevel = newProgress.level;
      const timeCtx = this.getRealTimeContext();
      this.addDiaryEntry(pet.id, {
        icon: '💖',
        title: `สายสัมพันธ์เลื่อนขั้นสู่ "${newProgress.name}"!`,
        desc: `ในที่สุดความผูกพันระหว่างเราก็ก้าวสู่ระดับ ${newProgress.level}! ขอบคุณทาสที่มอบความอบอุ่นให้เหมียวเสมอมา`,
        mood: 'loving'
      });
      this.checkGifts(pet);
    }
    this.saveAll();
  }

  // 3. การบันทึกพฤติกรรมและการกระทำ (Activity Recording)

  // 3.1 เมื่อผู้ใช้เกาคาง/ลูบพุง
  static recordPetting(pet) {
    const mem = this.getMemory(pet);
    if (!mem) return;
    mem.stats.totalPetted = (mem.stats.totalPetted || 0) + 1;
    this.setMood(pet, 'blissful', 'ได้เกาคางฟินจนเคลิ้ม');
    this.addBondExp(pet, 12, 'เกาคางลูบพุง');

    // บันทึกความทรงจำประทับใจตามสถิติครั้งสำคัญ
    const pCount = mem.stats.totalPetted;
    if (pCount === 1) {
      this.addDiaryEntry(pet.id, {
        icon: '🖐️',
        title: 'สัมผัสอันอบอุ่นครั้งแรก',
        desc: 'ทาสยอมเอื้อมมือมาเกาคางให้เหมียวครั้งแรกแล้ว มือทาสอุ่นจังเลย!',
        mood: 'blissful'
      });
    } else if (pCount === 25 || pCount === 50 || pCount === 100) {
      this.addDiaryEntry(pet.id, {
        icon: '❤️',
        title: `เกาคางให้เหมียวครบ ${pCount} ครั้งแล้ว!`,
        desc: `ทาสใจดีที่สุด ลูบพุงและเกาคางให้เหมียวครบ ${pCount} ครั้งแล้ว เหมียวยอมเป็นทาสความนุ่มนี้ตลอดไป`,
        mood: 'loving'
      });
    }
    this.checkGifts(pet);
    this.saveAll();
  }

  // 3.2 เมื่อผู้ใช้ให้อาหาร
  static recordFeeding(pet) {
    const mem = this.getMemory(pet);
    if (!mem) return;
    mem.stats.totalFed = (mem.stats.totalFed || 0) + 1;
    this.setMood(pet, 'blissful', 'ได้กินปลาทูอิ่มแปล้');
    this.addBondExp(pet, 18, 'ให้อาหารจานโปรด');

    const fCount = mem.stats.totalFed;
    if (fCount === 1) {
      this.addDiaryEntry(pet.id, {
        icon: '🐟',
        title: 'มื้อแรกจากฝีมือทาส',
        desc: 'ทาสเสิร์ฟปลาทูสดชิ้นโตให้เหมียวกินเป็นมื้อแรก รสชาติอร่อยเหาะจนลืมไม่ลง!',
        mood: 'blissful'
      });
    } else if (fCount === 10 || fCount === 30) {
      this.addDiaryEntry(pet.id, {
        icon: '🍽️',
        title: `อิ่มอร่อยมื้อที่ ${fCount}`,
        desc: `ได้รับการเลี้ยงดูอย่างดีจนพุงกางครบ ${fCount} มื้อแล้ว สัญญาว่าจะอยู่เป็นก้อนขนน่ารักข้างๆ ทาสตลอดไป!`,
        mood: 'blissful'
      });
    }
    this.checkGifts(pet);
    this.saveAll();
  }

  // 3.3 เมื่อเล่นของเล่น
  static recordPlay(pet, toyType = 'yarn') {
    const mem = this.getMemory(pet);
    if (!mem) return;
    mem.stats.totalPlaySessions = (mem.stats.totalPlaySessions || 0) + 1;
    this.setMood(pet, 'playful', 'เพิ่งได้วิ่งไล่จับของเล่นอย่างสนุกสนาน');
    this.addBondExp(pet, 15, 'เล่นของเล่น');

    const toyNames = {
      cat_toy_yarn: 'ไหมพรมลูกกลม',
      laser_dot: 'จุดเลเซอร์สีแดงปริศนา',
      feather_wand: 'ไม้ตกแมวขนนกสีสด'
    };
    const toyLabel = toyNames[toyType] || 'ของเล่นสุดมัน';

    const pCount = mem.stats.totalPlaySessions;
    if (pCount === 1) {
      this.addDiaryEntry(pet.id, {
        icon: '🧶',
        title: 'เปิดศึกตะปบของเล่นครั้งแรก',
        desc: `ทาสชวนเหมียวเล่น ${toyLabel} วิ่งซอยเท้ารอบจอจนเหนื่อยหอบแต่ฟินสุดๆ`,
        mood: 'playful'
      });
    }
    this.checkGifts(pet);
    this.saveAll();
  }

  // 3.4 บันทึกการอ่านเอกสารร่วมกัน
  static recordDocumentOpened(pet, docName) {
    if (!docName) return;
    const mem = this.getMemory(pet);
    if (!mem) return;

    mem.stats.totalDocsRead = (mem.stats.totalDocsRead || 0) + 1;
    this.setMood(pet, 'curious', `กำลังสนใจเอกสาร "${docName}"`);
    this.addBondExp(pet, 5, 'ร่วมเปิดเอกสาร');

    // บันทึกสถิติเอกสารโปรด
    let existingDoc = mem.recentDocs.find(d => d.name === docName);
    if (existingDoc) {
      existingDoc.count += 1;
      existingDoc.lastRead = Date.now();
    } else {
      mem.recentDocs.unshift({ name: docName, count: 1, lastRead: Date.now() });
      if (mem.recentDocs.length > 10) mem.recentDocs.pop();
    }

    // หาเอกสารที่เปิดอ่านบ่อยที่สุด
    let topDoc = mem.recentDocs.reduce((top, cur) => cur.count > (top?.count || 0) ? cur : top, null);
    if (topDoc && topDoc.count >= 3) {
      mem.favoriteDoc = { name: topDoc.name, count: topDoc.count };
    }

    // ตรวจสอบวันเวลาจริงจาก PC: ทำงานดึก vs อ่านเช้าตรู่
    const timeCtx = this.getRealTimeContext();
    if (timeCtx.isLateNight) {
      mem.stats.nightOwlSessions = (mem.stats.nightOwlSessions || 0) + 1;
      if (mem.stats.nightOwlSessions === 1 || mem.stats.nightOwlSessions % 5 === 0) {
        this.addDiaryEntry(pet.id, {
          icon: '🌙',
          title: 'เฝ้าทาสทำงานยามดึกสงัด',
          desc: `เวลา ${timeCtx.timeString} น. ทาสยังตั้งใจเปิดอ่าน "${docName}" เหมียวตาปรือแต่นั่งเฝ้าไม่ห่าง อย่าลืมพักผ่อนนะ`,
          mood: 'loving'
        });
      }
    } else if (timeCtx.isEarlyMorning) {
      mem.stats.earlyBirdSessions = (mem.stats.earlyBirdSessions || 0) + 1;
      if (mem.stats.earlyBirdSessions === 1) {
        this.addDiaryEntry(pet.id, {
          icon: '🌅',
          title: 'ตื่นเช้ามาลุยงานด้วยกัน',
          desc: `เวลา ${timeCtx.timeString} น. ตื่นมาสูดอากาศสดชื่นพร้อมอ่านหนังสือ ทาสขยันขันแข็งสุดๆ!`,
          mood: 'curious'
        });
      }
    }
    this.saveAll();
  }

  // 3.5 บันทึกเวลาอ่านสะสม
  static addReadingMinutes(pet, minutes = 1) {
    const mem = this.getMemory(pet);
    if (!mem) return;
    mem.stats.totalReadingMinutes = (mem.stats.totalReadingMinutes || 0) + minutes;
    this.addBondExp(pet, Math.ceil(minutes * 1.5), 'อยู่ร่วมอ่านหนังสือ');
    this.checkGifts(pet);
    this.saveAll();
  }

  // 4. การจัดการอารมณ์ความรู้สึก (Mood Management)
  static setMood(pet, moodKey, reason = '') {
    const mem = this.getMemory(pet);
    if (!mem) return;
    if (PET_MOODS[moodKey]) {
      mem.mood = moodKey;
      mem.moodReason = reason || PET_MOODS[moodKey].desc;
      pet.mood = moodKey; // Sync ลง Instance ของแมวเพื่อนำไปใช้เรนเดอร์สีหน้า SVG
    }
  }

  static getMood(pet) {
    const mem = this.getMemory(pet);
    const key = mem?.mood || pet?.mood || 'curious';
    return PET_MOODS[key] || PET_MOODS.curious;
  }

  // 5. สมุดบันทึกเรื่องราว (Pet Diary Journal)
  static addDiaryEntry(petId, entry) {
    const mem = this.memories[petId];
    if (!mem) return;
    const timeCtx = this.getRealTimeContext();
    const newEntry = {
      id: 'entry_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      timestamp: Date.now(),
      dateStr: timeCtx.dateString,
      timeStr: timeCtx.timeString,
      dayName: timeCtx.dayName,
      icon: entry.icon || '🐾',
      title: entry.title || 'บันทึกเรื่องราว',
      desc: entry.desc || '',
      mood: entry.mood || 'blissful'
    };

    if (!Array.isArray(mem.diaryEntries)) mem.diaryEntries = [];
    mem.diaryEntries.unshift(newEntry);

    // เก็บประวัติสูงสุด 35 รายการ
    if (mem.diaryEntries.length > 35) {
      mem.diaryEntries.pop();
    }
    this.saveAll();
  }

  // 6. การตรวจสอบและมอบของขวัญนำโชค (Souvenirs / Collectibles)
  static checkGifts(pet) {
    const mem = this.getMemory(pet);
    if (!mem) return;
    if (!Array.isArray(mem.giftsCollected)) mem.giftsCollected = [];

    const bondLevel = this.getBondProgress(mem).level;
    const petted = mem.stats.totalPetted || 0;
    const fed = mem.stats.totalFed || 0;
    const play = mem.stats.totalPlaySessions || 0;
    const readingMins = mem.stats.totalReadingMinutes || 0;

    SOUVENIR_GIFTS.forEach(gift => {
      if (mem.giftsCollected.some(g => g.id === gift.id)) return;

      let qualified = false;
      if (gift.id === 'four_leaf_clover' && bondLevel >= 2) qualified = true;
      else if (gift.id === 'lucky_feather' && play >= 4) qualified = true;
      else if (gift.id === 'shiny_bottle_cap' && petted >= 12) qualified = true;
      else if (gift.id === 'origami_fish' && fed >= 5) qualified = true;
      else if (gift.id === 'reading_bookmark' && readingMins >= 20) qualified = true;
      else if (gift.id === 'golden_bell' && bondLevel >= 5) qualified = true;

      if (qualified) {
        const timeCtx = this.getRealTimeContext();
        mem.giftsCollected.push({
          ...gift,
          unlockedAt: Date.now(),
          unlockedDateStr: timeCtx.dateString
        });

        this.addDiaryEntry(pet.id, {
          icon: gift.icon,
          title: `มอบของขวัญ "${gift.name}" ให้ทาส!`,
          desc: `เหมียวตั้งใจมอบของสะสมชิ้นสำคัญ "${gift.name}" ให้ทาส เพื่อเป็นที่ระลึกถึงมิตรภาพของเรา!`,
          mood: 'loving'
        });
      }
    });
  }

  // 7. บันทึกลง Store (IndexedDB + localStorage fallback)
  static async saveAll() {
    try {
      await Store.set('pet_memories', this.memories);
    } catch (e) {
      console.warn('[PetMemory] saveAll error:', e.message);
    }
  }
}

if (typeof window !== 'undefined') {
  window.PetMemory = PetMemory;
}
