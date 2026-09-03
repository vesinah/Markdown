// ระบบบุคลิกภาพ 6 แกนและกลไกพฤติกรรม (6-Axis Personality Engine)
// ฉลาด-เด๋อ, ขยัน-ขี้เกียจ, พลังงาน, ช่างพูด-เงียบ, ขี้อ้อน-หยิ่ง, เข้าสังคม-สันโดษ

export const PERSONALITY_AXES = {
  intelligence: {
    id: 'intelligence',
    name: 'สติปัญญา',
    lowLabel: 'เด๋อด๋า / ใสซื่อ',
    highLabel: 'ฉลาดเป็นกรด / ปราชญ์',
    icon: '🧠',
    color: '#4361ee'
  },
  diligence: {
    id: 'diligence',
    name: 'ความขยัน',
    lowLabel: 'ขี้เกียจ / นอนทั้งวัน',
    highLabel: 'ขยันขันแข็ง / เฝ้างาน',
    icon: '⭐',
    color: '#f72585'
  },
  energy: {
    id: 'energy',
    name: 'พลังงาน',
    lowLabel: 'สงบนิ่ง / เชื่องช้า',
    highLabel: 'ไฮเปอร์ / ซนระเบิด',
    icon: '⚡',
    color: '#ffb703'
  },
  talkativeness: {
    id: 'talkativeness',
    name: 'ความช่างคุย',
    lowLabel: 'เงียบขรึม / สื่อสารด้วยตา',
    highLabel: 'ช่างจ้อ / ร้องแง้วๆ',
    icon: '💬',
    color: '#4895ef'
  },
  affection: {
    id: 'affection',
    name: 'ความขี้อ้อน',
    lowLabel: 'หยิ่งเชิด / ซึนเดเระ',
    highLabel: 'ติดทาสหนึบ / ออดอ้อน',
    icon: '💖',
    color: '#f28482'
  },
  sociability: {
    id: 'sociability',
    name: 'การเข้าสังคม',
    lowLabel: 'รักสันโดษ / หวงถิ่น',
    highLabel: 'เฟรนด์ลี่ / ชอบมีเพื่อน',
    icon: '🐾',
    color: '#52b788'
  }
};

// แบบบุคลิกภาพสำเร็จรูป (Archetypes)
export const PERSONALITY_ARCHETYPES = [
  {
    name: 'ท่านปราชญ์แมว',
    desc: 'ฉลาด สุขุม ช่างสังเกต คอยเตือนเรื่องสาระและสุขภาพ',
    stats: { intelligence: 92, diligence: 78, energy: 35, talkativeness: 60, affection: 45, sociability: 55 }
  },
  {
    name: 'เจ้าก้อนขี้เซา',
    desc: 'รักการนอนเป็นชีวิตจิตใจ เดินสองก้าวขอนอนพัก ปล่อยวางทุกสิ่ง',
    stats: { intelligence: 45, diligence: 12, energy: 18, talkativeness: 25, affection: 70, sociability: 40 }
  },
  {
    name: 'เจ้าตัวซนพลังเทอร์โบ',
    desc: 'อยู่นิ่งไม่เป็น พร้อมวิ่งไล่ล่าทุกอย่างที่ขยับได้ในหน้าจอ',
    stats: { intelligence: 60, diligence: 50, energy: 95, talkativeness: 75, affection: 60, sociability: 85 }
  },
  {
    name: 'คุณหนูเอาแต่ใจ (ซึนเดเระ)',
    desc: 'เชิดใส่ทาส ทำเป็นไม่สนใจ แต่แอบมองและชอบให้ตามใจ',
    stats: { intelligence: 82, diligence: 30, energy: 40, talkativeness: 45, affection: 20, sociability: 25 }
  },
  {
    name: 'ลูกแมวเด็กอ้อนติดหนึบ',
    desc: 'เดินตามเมาส์ตลอดเวลา ชอบให้เกาคาง ร้องหาทาสตลอด',
    stats: { intelligence: 55, diligence: 65, energy: 70, talkativeness: 88, affection: 96, sociability: 90 }
  },
  {
    name: 'แมวเด๋อผู้ไร้เดียงสา',
    desc: 'น่ารักน่าเอ็นดู ชอบทำอะไรเปิ่นๆ ตกใจสิ่งรอบตัวตลอดเวลา',
    stats: { intelligence: 18, diligence: 40, energy: 72, talkativeness: 80, affection: 85, sociability: 75 }
  }
];

export class PetPersonality {
  // สุ่มค่าสเตตัส 6 แกน (20 - 95 เพื่อความสมดุล)
  static generateRandomStats() {
    return {
      intelligence: Math.floor(20 + Math.random() * 76),
      diligence: Math.floor(15 + Math.random() * 81),
      energy: Math.floor(20 + Math.random() * 76),
      talkativeness: Math.floor(20 + Math.random() * 76),
      affection: Math.floor(20 + Math.random() * 76),
      sociability: Math.floor(20 + Math.random() * 76)
    };
  }

  // คำนวณฉายาบุคลิกภาพเด่น (สัมพันธ์กับเพศและ 6 แกนนิสัย)
  static getPersonalityTitle(stats, gender = 'male') {
    if (!stats) return gender === 'female' ? 'น้องแมวสาวแสนน่ารัก' : 'น้องแมวหนุ่มอารมณ์ดี';
    const s = stats;
    const isFemale = gender === 'female';

    if (s.intelligence >= 80 && s.diligence >= 70) return isFemale ? 'ผู้ช่วยวิชาการสาวน้อย' : 'ผู้ช่วยวิชาการตัวจิ๋ว';
    if (s.intelligence <= 30 && s.energy >= 70) return isFemale ? 'สาวน้อยจอมเด๋อสุดซน' : 'เจ้าตัวเด๋อจอมซน';
    if (s.energy >= 85) return isFemale ? 'สาวน้อยพลังเทอร์โบติดจรวด' : 'จรวดมิสไซล์ติดขน';
    if (s.diligence <= 25 && s.energy <= 35) return isFemale ? 'เจ้าหญิงขี้เซาแห่งการนอน' : 'แชมเปี้ยนการนอนกลางวัน';
    if (s.affection >= 85) return isFemale ? 'สาวน้อยคลั่งรักติดทาส' : 'ก้อนน้ำตาลคลั่งรัก';
    if (s.affection <= 25) return isFemale ? 'องค์ราชินีผู้เย่อหยิ่ง' : 'จักรพรรดิผู้เย่อหยิ่ง';
    if (s.sociability >= 85) return isFemale ? 'ทูตสันถวไมตรีสาวแสนสวย' : 'ทูตสันถวไมตรีสี่ขา';
    if (s.sociability <= 25) return isFemale ? 'แม่มดน้อยรักสันโดษ' : 'แมวอินโทรเวิร์ตสันโดษ';
    if (s.talkativeness >= 85) return isFemale ? 'ดีเจสาวเสียงใสชวนคุย' : 'ดีเจเสียงใสชวนคุย';
    if (s.talkativeness <= 25) return isFemale ? 'นักปราชญ์สาวผู้เงียบสงบ' : 'นักปราชญ์ผู้เงียบสงบ';

    return isFemale ? 'น้องแมวสาวแสนน่ารัก' : 'น้องแมวหนุ่มอารมณ์ดี';
  }

  // สรุปป้ายแท็กบุคลิก (รวมป้ายเพศ)
  static getPersonalityBadges(stats, gender = null) {
    if (!stats) return [];
    const badges = [];
    if (gender === 'female') {
      badges.push({ text: '♀ เพศเมีย', color: '#ff006e' });
    } else if (gender === 'male') {
      badges.push({ text: '♂ เพศผู้', color: '#3a86ff' });
    }

    if (stats.intelligence >= 70) badges.push({ text: 'ฉลาดปราดเปรื่อง', color: '#4361ee' });
    else if (stats.intelligence <= 35) badges.push({ text: 'เด๋อด๋าน่ารัก', color: '#7209b7' });

    if (stats.diligence >= 70) badges.push({ text: 'ขยันเฝ้าจอ', color: '#f72585' });
    else if (stats.diligence <= 35) badges.push({ text: 'สายขี้เกียจ', color: '#9a8c98' });

    if (stats.energy >= 70) badges.push({ text: 'พลังงานล้น', color: '#ffb703' });
    else if (stats.energy <= 35) badges.push({ text: 'รักความสงบ', color: '#8ecae6' });

    if (stats.affection >= 70) badges.push({ text: 'ขี้อ้อนมาก', color: '#f28482' });
    else if (stats.affection <= 35) badges.push({ text: 'หยิ่งซึนเดเระ', color: '#6c757d' });

    if (stats.sociability >= 70) badges.push({ text: 'เข้าสังคมเก่ง', color: '#52b788' });
    else if (stats.sociability <= 35) badges.push({ text: 'รักสันโดษ', color: '#4a4e69' });

    return badges.slice(0, 4);
  }

  // คำนวณอัตราความเร็วการเดินตามค่าพลังงาน (Energy), รูปร่าง และเพศ
  static calculateWalkSpeed(pet) {
    const energy = pet?.personality?.energy || 50;
    const baseSpeed = 1.2 + (energy / 100) * 1.6;
    let speed = baseSpeed;
    if (pet?.build === 'chubby' || pet?.build === 'chunky_loaf') {
      speed *= 0.85; // แมวอ้วนเดินต้วมเตี้ยมน่ารัก
    } else if (pet?.build === 'slim') {
      speed *= 1.15; // แมวเพรียวเดินปราดเปรียว
    }
    // เพศเมียรูปร่างเพรียวยาว ย่างก้าวเบาและคล่องแคล่ว
    if (pet?.gender === 'female') {
      speed *= 1.06;
    }
    return speed;
  }

  // คำนวณโอกาสที่แมวจะเดินตามเคอร์เซอร์เมาส์ (Affection + Energy)
  static shouldFollowCursor(pet) {
    const aff = pet.personality?.affection || 50;
    const energy = pet.personality?.energy || 50;
    const score = (aff * 0.7) + (energy * 0.3);
    return score > 60 && Math.random() < 0.35;
  }

  // คำนวณโอกาสแวะไปนอนที่เบาะ หรือมุดกล่อง (Diligence ต่ำ + Energy ต่ำ)
  static prefersResting(pet) {
    const dil = pet.personality?.diligence || 50;
    const energy = pet.personality?.energy || 50;
    return (dil < 45 || energy < 40);
  }

  // คำนวณโอกาสแวะเล่นของเล่น (Energy สูง + Intelligence ปานกลาง-สูง)
  static prefersToyPlay(pet) {
    const energy = pet.personality?.energy || 50;
    return energy > 65;
  }

  // คำนวณระยะหน่วงเวลาการตัดสินใจ (Decision Interval) ตาม Energy และ Diligence
  static getDecisionInterval(pet) {
    const energy = Math.max(0, Math.min(100, pet?.personality?.energy ?? 50));
    const diligence = Math.max(0, Math.min(100, pet?.personality?.diligence ?? 50));
    const base = Math.max(2500, 9000 - 4500 * (energy / 100) - 2000 * (diligence / 100));
    return base + (Math.random() - 0.5) * 800;
  }

  // คำนวณความถี่ในการพูด (Speech Interval) ตาม Talkativeness
  static getSpeechInterval(pet, baseInterval = 40000) {
    const talk = Math.max(0, Math.min(100, pet?.personality?.talkativeness ?? 50));
    return Math.max(10000, baseInterval * (1.75 - 1.25 * (talk / 100)));
  }

  // คำนวณความเร็วการเคลื่อนที่ (Movement Speed) พิกเซล/วินาที
  static getMovementSpeed(pet, baseSpeed = 55) {
    const mult = pet?.state === 'run' ? 140 : baseSpeed;
    return this.calculateWalkSpeed(pet) * mult;
  }

  // คำนวณรัศมีตรวจจับเพื่อนแมว (Detection Aura) ตาม Sociability
  static calculateDetectionAura(pet) {
    const soc = Math.max(0, Math.min(100, pet?.personality?.sociability ?? 50));
    return Math.max(100, Math.min(300, 110 + 170 * (soc / 100)));
  }

  // คำนวณความเข้ากันได้ระหว่างแมวสองตัว (Compatibility Score 0 - 100)
  static calculateCompatibility(petA, petB) {
    const p1 = petA?.personality || { energy: 50, sociability: 50, affection: 50 };
    const p2 = petB?.personality || { energy: 50, sociability: 50, affection: 50 };
    const e1 = p1.energy ?? 50, e2 = p2.energy ?? 50;
    const s1 = p1.sociability ?? 50, s2 = p2.sociability ?? 50;
    const a1 = p1.affection ?? 50, a2 = p2.affection ?? 50;
    const diff = (Math.abs(e1 - e2) + Math.abs(s1 - s2) + Math.abs(a1 - a2)) / 3;
    return Math.max(0, 100 - diff);
  }

  // เลือกลำดับท่าทางถัดไปจากน้ำหนักความน่าจะเป็น (Weighted State Lottery) อิง 6 แกน
  static evaluateNextState(pet, availableStates = null) {
    const p = pet?.personality || {
      intelligence: 50, diligence: 50, energy: 50,
      talkativeness: 50, affection: 50, sociability: 50
    };

    const intel = p.intelligence ?? 50;
    const dil = p.diligence ?? 50;
    const ene = p.energy ?? 50;
    const aff = p.affection ?? 50;
    const soc = p.sociability ?? 50;
    const isFemale = pet?.gender === 'female';

    // ตารางน้ำหนักคะแนนตามแกนบุคลิกภาพ และพฤติกรรมจำเพาะตามเพศ
    const weights = {
      walk: 20 + (ene * 0.3) + (dil * 0.15) + (!isFemale ? 14 : -4), // ตัวผู้ชอบเดินตรวจตราลาดตระเวน
      sit: 15 + (dil * 0.2) + (isFemale ? 5 : 0), // ตัวเมียสงบนิ่งช่างสังเกต
      groom: 10 + (intel * 0.15) + (isFemale ? 14 : 0), // ตัวเมียรักความสะอาด เลียแต่งขนอย่างประณีต
      two_legged: 8 + (aff * 0.25) + (intel * 0.1) + (isFemale ? 8 : 0), // ตัวเมียยืนสองขาออดอ้อนน่ารัก
      batting_ball: 6 + (ene * 0.25) + (!isFemale ? 3 : 0), // ตัวผู้ชอบตบบอล
      scratch: 7 + ((100 - intel) * 0.15) + (ene * 0.1) + (!isFemale ? 8 : 0), // ตัวผู้ลับเล็บประกาศศักดา
      pounce_play: 5 + (ene * 0.2) + (soc * 0.15) + (!isFemale ? 5 : 0), // ตัวผู้ชอบกระโจนเล่นซน
      sleep_loaf: 10 + ((100 - dil) * 0.3) + ((100 - ene) * 0.2),
      sleep_belly: 6 + ((100 - dil) * 0.25) + (aff * 0.15),
      derpy_yawn: 6 + ((100 - intel) * 0.2) + ((100 - ene) * 0.15)
    };

    const states = availableStates || Object.keys(weights);
    let totalWeight = 0;
    const pool = [];

    for (const st of states) {
      const w = Math.max(1, weights[st] || 5);
      totalWeight += w;
      pool.push({ state: st, threshold: totalWeight });
    }

    const roll = Math.random() * totalWeight;
    for (const item of pool) {
      if (roll <= item.threshold) {
        return item.state;
      }
    }

    return 'sit';
  }
}

