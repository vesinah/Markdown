// ระบบสายพันธุ์และพันธุกรรมของน้องแมว (Pet Breeds & Genetics)
// รองรับ 11 สายพันธุ์ (รวม 5 สายพันธุ์ใหม่ตามคำขอ), พันธุกรรมหาง 5+ แบบ, รูปร่าง และรอยด่าง

export const TAIL_TYPES = {
  long: { id: 'long', name: 'หางยาวเรียว', desc: 'หางยาวเรียวกวัดแกว่งสง่างาม' },
  short: { id: 'short', name: 'หางสั้นดุ๊กดิ๊ก', desc: 'หางสั้นกะทัดรัด ส่ายดุ๊กดิ๊กน่าเอ็นดู' },
  bobtail: { id: 'bobtail', name: 'หางกุด (ปอมปอม)', desc: 'หางกุดเป็นก้อนกลมฟูน่ารักดั่งกระต่าย' },
  kinked: { id: 'kinked', name: 'หางคด (แมวไทย)', desc: 'หางหักงอที่ปลาย เอกลักษณ์มงคลของแมวไทย' },
  curved: { id: 'curved', name: 'หางโค้งเคียว', desc: 'หางโค้งงอนเป็นเคราเสือ งดงามมีเสน่ห์' },
  fluffy_plumage: { id: 'fluffy_plumage', name: 'หางพวงขนนกยูง', desc: 'หางพวงขนยาวฟูฟ่อง หรูหราปานเจ้าหญิง' }
};

export const BODY_BUILDS = {
  chubby: { id: 'chubby', name: 'อ้วนกลมตุ้ยนุ้ย', scaleX: 1.08, scaleY: 1.05, bellyOffset: 2 },
  normal: { id: 'normal', name: 'สมส่วนมาตรฐาน', scaleX: 1.0, scaleY: 1.0, bellyOffset: 0 },
  skinny: { id: 'skinny', name: 'ผอมเพรียวคล่องแคล่ว', scaleX: 0.94, scaleY: 0.96, bellyOffset: -2 },
  slim: { id: 'slim', name: 'ผอมเพรียวคล่องแคล่ว', scaleX: 0.94, scaleY: 0.96, bellyOffset: -2 },
  chunky_loaf: { id: 'chunky_loaf', name: 'ก้อนขนมปังยักษ์', scaleX: 1.15, scaleY: 1.02, bellyOffset: 4 }
};

export const SPECIAL_MARKINGS = {
  none: { id: 'none', name: 'ไม่มีแต้มพิเศษ' },
  blaze: { id: 'blaze', name: 'แต้มเปลวไฟ/ดาวหน้าผาก' },
  eye_patch: { id: 'eye_patch', name: 'ปานปิดตาข้างเดียว' },
  socks: { id: 'socks', name: 'ถุงเท้าขาว 4 ข้าง' },
  heart_butt: { id: 'heart_butt', name: 'แต้มหัวใจที่สะโพก' }
};

export const PET_BREEDS = {
  // 1. สก๊อตติชบลูพอยต์
  scottish_bluepoint: {
    id: 'scottish_bluepoint',
    name: 'แมวสก๊อตติชบลูพอยต์',
    shortName: 'สก๊อตติชบลูพอยต์',
    desc: 'หูพับ หน้าแต้มเทาฟ้า ลำตัวครีมขาว ตาฟ้าใสแป๋ว แก้มป่อง',
    furType: 'short',
    defaultTail: 'long',
    defaultBuild: 'chubby',
    bodyColor: '#f5f0ea',
    bellyColor: '#ffffff',
    pointColor: '#78889b',
    innerEarColor: '#d6a2b8',
    eyeColor: '#4895ef',
    pupilColor: '#1a2530',
    noseColor: '#6c7a89',
    earType: 'folded',
    pattern: 'bluepoint'
  },

  // 2. สีสวาด (โคราช)
  sisawat: {
    id: 'sisawat',
    name: 'แมวสีสวาด (โคราช)',
    shortName: 'สีสวาด (โคราช)',
    desc: 'ขนเทาดอกเลาเหลือบเงิน แก้มอิ่ม ตาสีเขียวมรกตประกาย มงคลแต่โบราณ',
    furType: 'short',
    defaultTail: 'kinked',
    defaultBuild: 'normal',
    bodyColor: '#79828d',
    bellyColor: '#8c95a0',
    pointColor: '#5c646e',
    innerEarColor: '#c29ba8',
    eyeColor: '#52b788',
    pupilColor: '#1d2a22',
    noseColor: '#525a63',
    earType: 'normal',
    pattern: 'solid_silver'
  },

  // 3. ลายสลิด
  tabby: {
    id: 'tabby',
    name: 'แมวลายสลิด',
    shortName: 'ลายสลิด',
    desc: 'ลายเสือสลิด หน้าผากตัว M พุงพลุ้ยน่ารัก จอมซนคล่องแคล่ว',
    furType: 'short',
    defaultTail: 'curved',
    defaultBuild: 'normal',
    bodyColor: '#a39788',
    bellyColor: '#e8e2d5',
    pointColor: '#584c40',
    innerEarColor: '#d4a5b0',
    eyeColor: '#95d5b2',
    pupilColor: '#24332b',
    noseColor: '#e07a5f',
    earType: 'normal',
    pattern: 'tabby'
  },

  // 4. แมวส้ม
  orange: {
    id: 'orange',
    name: 'แมวส้มชีสจอมป่วน',
    shortName: 'แมวส้มชีส',
    desc: 'ริ้วส้มชีส ถุงเท้าขาว พุงย้อยกลมดิก จอมป่วนอันดับหนึ่งของโลก',
    furType: 'short',
    defaultTail: 'long',
    defaultBuild: 'chubby',
    bodyColor: '#f4a261',
    bellyColor: '#fff3e8',
    pointColor: '#e76f51',
    innerEarColor: '#ffb5a7',
    eyeColor: '#e9c46a',
    pupilColor: '#3d2610',
    noseColor: '#f28482',
    earType: 'normal',
    pattern: 'orange_tabby'
  },

  // 5. วิเชียรมาศ
  siamese: {
    id: 'siamese',
    name: 'แมววิเชียรมาศ',
    shortName: 'วิเชียรมาศ',
    desc: 'ตัวครีมนวล แต้มเข้ม 9 จุด ตาฟ้าไพลินประกายเจิดจ้า เฉลียวฉลาด',
    furType: 'short',
    defaultTail: 'kinked',
    defaultBuild: 'slim',
    bodyColor: '#e8d9cb',
    bellyColor: '#f7eee4',
    pointColor: '#4a382a',
    innerEarColor: '#b5838d',
    eyeColor: '#0077b6',
    pupilColor: '#0d1b2a',
    noseColor: '#36271c',
    earType: 'normal',
    pattern: 'siamese'
  },

  // 6. แมวดำ (ก้อนถ่าน)
  black: {
    id: 'black',
    name: 'แมวดำ (ก้อนถ่านนำโชค)',
    shortName: 'แมวดำ',
    desc: 'ดำขลับเงาวาว ตากลมโตสีเหลืองทอง เหมือนก้อนถ่านกลมนุ่มนิ่ม',
    furType: 'short',
    defaultTail: 'short',
    defaultBuild: 'chubby',
    bodyColor: '#2b2d42',
    bellyColor: '#222333',
    pointColor: '#1a1b26',
    innerEarColor: '#8d6b79',
    eyeColor: '#ffb703',
    pupilColor: '#12131a',
    noseColor: '#ff8fa3',
    earType: 'normal',
    pattern: 'black'
  },

  // === 5 สายพันธุ์ใหม่ตามคำขอ ===

  // 7. แมวขาวแต้มหูน้ำตาล
  white_brown_ears: {
    id: 'white_brown_ears',
    name: 'แมวขาวแต้มหูสีน้ำตาล',
    shortName: 'ขาวแต้มหูน้ำตาล',
    desc: 'ตัวขาวปลอดบริสุทธิ์ มีลวดลายแต้มสีน้ำตาลเข้มบริเวณหูทั้งสองข้าง ตาสีทองอำพัน',
    furType: 'short',
    defaultTail: 'curved',
    defaultBuild: 'normal',
    bodyColor: '#faf8f5',
    bellyColor: '#ffffff',
    pointColor: '#8c5836',
    innerEarColor: '#e8b4b8',
    eyeColor: '#f4a261',
    pupilColor: '#2b1a0e',
    noseColor: '#e76f51',
    earType: 'normal',
    pattern: 'white_brown_ears'
  },

  // 8. แมวขาวแต้มน้ำตาลทั่วตัว (ลายวัวคาราเมล)
  white_brown_spotted: {
    id: 'white_brown_spotted',
    name: 'แมวขาวลายแต้มน้ำตาลเต็มตัว',
    shortName: 'ขาวแต้มน้ำตาลเต็มตัว',
    desc: 'พื้นขาวสะอาด มีรอยด่างแต้มสีน้ำตาลคาราเมลกระจายทั่วตัวและหลัง น่ารักไม่ซ้ำใคร',
    furType: 'short',
    defaultTail: 'long',
    defaultBuild: 'chubby',
    bodyColor: '#faf8f5',
    bellyColor: '#ffffff',
    pointColor: '#7f4f24',
    patchColor: '#936639',
    innerEarColor: '#f4acb7',
    eyeColor: '#588157',
    pupilColor: '#1d2a1d',
    noseColor: '#d67562',
    earType: 'normal',
    pattern: 'white_brown_spotted'
  },

  // 9. แมวสามสี
  calico: {
    id: 'calico',
    name: 'แมวสามสี (มิเกะนำโชค)',
    shortName: 'แมวสามสี (มิเกะ)',
    desc: 'ลวดลาย 3 สีส้ม-ดำ-ขาว แต้มกระจายตามตัวอย่างมีศิลปะ แมวนำโชคแห่งความสุข',
    furType: 'short',
    defaultTail: 'bobtail',
    defaultBuild: 'chubby',
    bodyColor: '#fefae0',
    bellyColor: '#ffffff',
    pointColor: '#2b2d42',
    patchColor1: '#e76f51', // ส้ม
    patchColor2: '#2b2d42', // ดำ
    innerEarColor: '#ffb5a7',
    eyeColor: '#a7c957',
    pupilColor: '#1e2916',
    noseColor: '#f28482',
    earType: 'normal',
    pattern: 'calico'
  },

  // 10. แมวเปอร์เซียขนฟูหลายสี
  persian_multicolor: {
    id: 'persian_multicolor',
    name: 'แมวเปอร์เซียขนฟูหลายสี',
    shortName: 'เปอร์เซียขนฟูหลายสี',
    desc: 'ขนยาวปุกปุยฟูฟ่องรอบคอและหาง ลวดลายผสมผสานหลากสี หน้ากลมแป้น หรูหราไฮโซ',
    furType: 'fluffy_persian',
    defaultTail: 'fluffy_plumage',
    defaultBuild: 'chunky_loaf',
    bodyColor: '#f8edeb',
    bellyColor: '#ffffff',
    pointColor: '#6c584c',
    patchColor1: '#d48c65',
    patchColor2: '#4a403a',
    innerEarColor: '#fcd5ce',
    eyeColor: '#4ea8de',
    pupilColor: '#12263a',
    noseColor: '#b56576',
    earType: 'fluffy_tuft',
    pattern: 'persian_multicolor'
  },

  // 11. แมวเปอร์เซียขนฟูสีขาว
  persian_white: {
    id: 'persian_white',
    name: 'แมวเปอร์เซียขนฟูสีขาวปลอด',
    shortName: 'เปอร์เซียขาวฟู',
    desc: 'ขาวสะอาดบริสุทธิ์ดั่งปุยเมฆ ขนฟูหนานุ่ม หางพวงใหญ่ ตาโตสีฟ้าประกายดั่งอัญมณี',
    furType: 'fluffy_persian',
    defaultTail: 'fluffy_plumage',
    defaultBuild: 'chunky_loaf',
    bodyColor: '#ffffff',
    bellyColor: '#ffffff',
    pointColor: '#e9ecef',
    innerEarColor: '#ffccd5',
    eyeColor: '#00b4d8',
    pupilColor: '#03045e',
    noseColor: '#ff758f',
    earType: 'fluffy_tuft',
    pattern: 'persian_white'
  },

  // 12. แมวทักซิโด้
  tuxedo: {
    id: 'tuxedo',
    name: 'แมวทักซิโด้ (Tuxedo)',
    shortName: 'ทักซิโด้',
    desc: 'ใส่สูททักซิโด้สีดำขลับ อกขาว ผูกโบว์ ถุงเท้าขาว 4 ขา ฉลาดและขี้เล่นสง่างาม',
    furType: 'short',
    defaultTail: 'long',
    defaultBuild: 'normal',
    bodyColor: '#1e293b',
    bellyColor: '#ffffff',
    pointColor: '#0f172a',
    innerEarColor: '#f4acb7',
    eyeColor: '#52b788',
    pupilColor: '#0f172a',
    noseColor: '#ff758f',
    earType: 'normal',
    pattern: 'tuxedo'
  },

  // 13. แมวขาวแต้มดำลายวัว (Cow Print)
  white_black_spotted: {
    id: 'white_black_spotted',
    name: 'แมวขาวแต้มดำลายวัว (Cow Cat)',
    shortName: 'ลายวัวขาวดำ',
    desc: 'แมวขาวลายวัว รอยด่างสีดำกระจายทั่วลำตัว น่ารักทะเล้น ปานปิดตาข้างเดียว',
    furType: 'short',
    defaultTail: 'curved',
    defaultBuild: 'chubby',
    bodyColor: '#faf8f5',
    bellyColor: '#ffffff',
    pointColor: '#1e293b',
    patchColor: '#0f172a',
    innerEarColor: '#f4acb7',
    eyeColor: '#4895ef',
    pupilColor: '#0f172a',
    noseColor: '#ff758f',
    earType: 'normal',
    pattern: 'white_black_spotted'
  }
};

// สุ่มชื่อแมวน่ารักภาษาไทย
export const RANDOM_NAMES = [
  'เจ้าส้ม', 'ถุงทอง', 'กะทิ', 'หมอก', 'ถ่านหิน', 'วิเชียร', 'ตัวอ้วน', 'ชิโร่',
  'คุโระ', 'ชาไทย', 'คาราเมล', 'มูจิ', 'โมจิ', 'ข้าวเหนียว', 'เฉาก๊วย', 'ปุยฝ้าย',
  'มะลิ', 'เต้าหู้', 'พุดดิ้ง', 'ซูชิ', 'ลูกชิ้น', 'สำลี', 'มีโชค', 'นำเงิน'
];

export function getRandomBreedId() {
  const keys = Object.keys(PET_BREEDS);
  return keys[Math.floor(Math.random() * keys.length)];
}

export function getRandomTailType() {
  const keys = Object.keys(TAIL_TYPES);
  return keys[Math.floor(Math.random() * keys.length)];
}

export function getRandomBodyBuild() {
  const keys = Object.keys(BODY_BUILDS);
  return keys[Math.floor(Math.random() * keys.length)];
}

export function getRandomSpecialMarking() {
  const keys = Object.keys(SPECIAL_MARKINGS);
  return keys[Math.floor(Math.random() * keys.length)];
}

export const PET_GENDERS = {
  male: { id: 'male', name: 'เพศผู้', symbol: '♂', desc: 'บึกบึน สมส่วน มั่นใจ รักการตรวจตรา' },
  female: { id: 'female', name: 'เพศเมีย', symbol: '♀', desc: 'เพรียวยาว ปราดเปรียว สง่างาม ช่างสังเกต' }
};

export function getRandomGender() {
  return Math.random() < 0.5 ? 'male' : 'female';
}
