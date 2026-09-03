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

  // คำนวณฉายาบุคลิกภาพเด่น
  static getPersonalityTitle(stats) {
    if (!stats) return 'แมวธรรมดา';
    const s = stats;

    if (s.intelligence >= 80 && s.diligence >= 70) return 'ผู้ช่วยวิชาการตัวจิ๋ว';
    if (s.intelligence <= 30 && s.energy >= 70) return 'เจ้าตัวเด๋อจอมซน';
    if (s.energy >= 85) return 'จรวดมิสไซล์ติดขน';
    if (s.diligence <= 25 && s.energy <= 35) return 'แชมเปี้ยนการนอนกลางวัน';
    if (s.affection >= 85) return 'ก้อนน้ำตาลคลั่งรัก';
    if (s.affection <= 25) return 'จักรพรรดิผู้เย่อหยิ่ง';
    if (s.sociability >= 85) return 'ทูตสันถวไมตรีสี่ขา';
    if (s.sociability <= 25) return 'แมวอินโทรเวิร์ตสันโดษ';
    if (s.talkativeness >= 85) return 'ดีเจเสียงใสชวนคุย';
    if (s.talkativeness <= 25) return 'นักปราชญ์ผู้เงียบสงบ';

    return 'น้องแมวอารมณ์ดี';
  }

  // สรุปป้ายแท็กบุคลิก
  static getPersonalityBadges(stats) {
    if (!stats) return [];
    const badges = [];

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

    return badges.slice(0, 3);
  }

  // คำนวณอัตราความเร็วการเดินตามค่าพลังงาน (Energy) และ รูปร่าง
  static calculateWalkSpeed(pet) {
    const energy = pet.personality?.energy || 50;
    const baseSpeed = 1.2 + (energy / 100) * 1.6;
    if (pet.build === 'chubby' || pet.build === 'chunky_loaf') {
      return baseSpeed * 0.85; // แมวอ้วนเดินต้วมเตี้ยมน่ารัก
    }
    if (pet.build === 'slim') {
      return baseSpeed * 1.15; // แมวเพรียวเดินปราดเปรียว
    }
    return baseSpeed;
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
}
