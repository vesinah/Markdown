// ระบบเรนเดอร์กราฟิก Vector SVG สำหรับน้องแมวสัตว์เลี้ยงหน้าจอ (Desktop Pets)
// รองรับ 6 สายพันธุ์แมวอ้วน และทุกอิริยาบถเคลื่อนไหวระดับ 60 FPS

export const PET_BREEDS = {
  scottish_bluepoint: {
    id: 'scottish_bluepoint',
    name: 'แมวสก๊อตติชบลูพอยต์อ้วน ๆ',
    shortName: 'สก๊อตติชบลูพอยต์',
    desc: 'หูพับ หน้าแต้มเทาฟ้า ลำตัวครีมขาว ตาฟ้าใสแป๋ว แก้มป่อง',
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
  sisawat: {
    id: 'sisawat',
    name: 'แมวสีสวาดอ้วน ๆ (โคราช)',
    shortName: 'สีสวาด (โคราช)',
    desc: 'ขนเทาดอกเลาเหลือบเงิน แก้มอิ่ม ตาสีเขียวมรกตประกาย',
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
  tabby: {
    id: 'tabby',
    name: 'แมวลายสลิดอ้วน ๆ',
    shortName: 'ลายสลิด',
    desc: 'ลายเสือสลิด หน้าผากตัว M พุงพลุ้ยน่ารัก จอมซน',
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
  orange: {
    id: 'orange',
    name: 'แมวส้มอ้วน ๆ',
    shortName: 'แมวส้ม',
    desc: 'ริ้วส้มชีส ถุงเท้าขาว พุงย้อยกลมดิก จอมป่วนอันดับหนึ่ง',
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
  siamese: {
    id: 'siamese',
    name: 'แมววิเชียรมาศอ้วน ๆ',
    shortName: 'วิเชียรมาศ',
    desc: 'ตัวครีมนวล แต้มเข้ม 9 จุด ตาฟ้าไพลินประกายเจิดจ้า',
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
  black: {
    id: 'black',
    name: 'แมวดำอ้วน ๆ (ก้อนถ่าน)',
    shortName: 'แมวดำ (ก้อนถ่าน)',
    desc: 'ดำขลับเงาวาว ตากลมโตสีเหลืองทอง เหมือนก้อนถ่านกลมฟู',
    bodyColor: '#2b2d42',
    bellyColor: '#222333',
    pointColor: '#1a1b26',
    innerEarColor: '#8d6b79',
    eyeColor: '#ffb703',
    pupilColor: '#12131a',
    noseColor: '#ff8fa3',
    earType: 'normal',
    pattern: 'black'
  }
};

export class PetRenderer {
  // สร้าง DOM Element หลักของน้องแมว
  static createPetElement(pet) {
    const el = document.createElement('div');
    el.className = 'desktop-pet';
    el.id = `pet-${pet.id}`;
    el.dataset.petId = pet.id;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `${pet.name} (${PET_BREEDS[pet.breed]?.name || 'แมว'})`);

    el.innerHTML = `
      <div class="pet-name-tag">${pet.name}</div>
      <div class="pet-bubble-wrap">
        <div class="pet-bubble"></div>
      </div>
      <div class="pet-inner">
        <div class="pet-svg-container"></div>
        <div class="pet-props-container"></div>
        <div class="pet-fx-container"></div>
      </div>
    `;

    this.updatePetVisuals(el, pet);
    return el;
  }

  // อัปเดตภาพและท่าทางของน้องแมว
  static updatePetVisuals(el, pet) {
    const breed = PET_BREEDS[pet.breed] || PET_BREEDS.orange;
    const inner = el.querySelector('.pet-inner');
    const svgWrap = el.querySelector('.pet-svg-container');
    const nameTag = el.querySelector('.pet-name-tag');

    if (nameTag && nameTag.textContent !== pet.name) {
      nameTag.textContent = pet.name;
    }

    // กำหนด Class สำหรับท่าทางและทิศทาง
    el.className = `desktop-pet pet-breed-${pet.breed} pet-state-${pet.state} facing-${pet.facing || 'right'} ${pet.isDragged ? 'is-dragged' : ''} ${pet.isBlocked ? 'is-blocked' : ''}`;
    
    // ปรับ Scale ตัวแมว
    const scale = pet.scale || 1;
    el.style.setProperty('--pet-scale', scale);

    // เรนเดอร์ SVG ให้เข้ากับ State ปัจจุบัน
    svgWrap.innerHTML = this.renderCatSvg(breed, pet);
  }

  // สร้างเนื้อหา Vector SVG
  static renderCatSvg(b, pet) {
    const state = pet.state || 'stand';
    const isSleep = state.startsWith('sleep');
    const isPounce = state === 'pounce';
    const isDragged = pet.isDragged;
    const isSitting = state === 'sit';
    const isLoaf = state === 'sleep_loaf';
    const isBelly = state === 'sleep_belly';
    const isGroom = state === 'groom';
    const isEating = state === 'eating';
    const isCarryFish = state === 'carry_fish';
    const isDerpyYawn = state === 'derpy_yawn';
    const isDerpyStare = state === 'derpy_stare';

    // ลวดลายเฉพาะสายพันธุ์
    let patternOverlay = '';
    if (b.pattern === 'tabby' || b.pattern === 'orange_tabby') {
      patternOverlay = `
        <!-- Tabby Markings -->
        <!-- M on forehead -->
        <path d="M 44 23 L 47 28 L 50 25 L 53 28 L 56 23" fill="none" stroke="${b.pointColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
        <!-- Cheek stripes -->
        <path d="M 33 32 L 39 33 M 32 36 L 38 36.5" fill="none" stroke="${b.pointColor}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
        <path d="M 67 32 L 61 33 M 68 36 L 62 36.5" fill="none" stroke="${b.pointColor}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
        <!-- Body stripes -->
        <path d="M 43 45 C 47 47 53 47 57 45" fill="none" stroke="${b.pointColor}" stroke-width="2.2" stroke-linecap="round" opacity="0.75"/>
        <path d="M 40 52 C 46 54 54 54 60 52" fill="none" stroke="${b.pointColor}" stroke-width="2.2" stroke-linecap="round" opacity="0.75"/>
        <path d="M 42 59 C 47 60 53 60 58 59" fill="none" stroke="${b.pointColor}" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      `;
    } else if (b.pattern === 'siamese' || b.pattern === 'bluepoint') {
      patternOverlay = `
        <!-- Mask and points -->
        <ellipse cx="50" cy="33" rx="14" ry="11" fill="${b.pointColor}" opacity="0.88"/>
      `;
    } else if (b.pattern === 'solid_silver') {
      patternOverlay = `
        <!-- Silver sheen overlay -->
        <path d="M 38 25 Q 50 20 62 25 Q 50 28 38 25" fill="#ffffff" opacity="0.25"/>
        <ellipse cx="50" cy="46" rx="18" ry="8" fill="#ffffff" opacity="0.18"/>
      `;
    } else if (b.pattern === 'black') {
      patternOverlay = `
        <!-- Glossy highlight on black fur -->
        <path d="M 36 24 Q 48 18 60 24" fill="none" stroke="#606680" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
        <ellipse cx="50" cy="47" rx="16" ry="7" fill="#434766" opacity="0.25"/>
      `;
    }

    // หูแมว: หูพับ (Scottish Fold) vs หูตั้งปกติ
    let earsSvg = '';
    if (b.earType === 'folded') {
      // หูพับไปข้างหน้าตุ้ยนุ้ย
      earsSvg = `
        <!-- Left Folded Ear -->
        <g class="pet-ear pet-ear-left">
          <path d="M 34 26 C 30 20, 36 15, 42 20 C 40 24, 37 26, 34 26 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 36 22 C 34 19, 38 17, 40 20" fill="${b.innerEarColor}" opacity="0.6"/>
        </g>
        <!-- Right Folded Ear -->
        <g class="pet-ear pet-ear-right">
          <path d="M 66 26 C 70 20, 64 15, 58 20 C 60 24, 63 26, 66 26 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 64 22 C 66 19, 62 17, 60 20" fill="${b.innerEarColor}" opacity="0.6"/>
        </g>
      `;
    } else {
      // หูตั้งทรงสามเหลี่ยมน่ารัก
      earsSvg = `
        <!-- Left Ear -->
        <g class="pet-ear pet-ear-left">
          <path d="M 33 26 Q 28 12 40 18 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 34 24 Q 31 15 38 19 Z" fill="${b.innerEarColor}"/>
        </g>
        <!-- Right Ear -->
        <g class="pet-ear pet-ear-right">
          <path d="M 67 26 Q 72 12 60 18 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 66 24 Q 69 15 62 19 Z" fill="${b.innerEarColor}"/>
        </g>
      `;
    }

    // ดวงตาและการแสดงออกทางสีหน้า
    let eyesSvg = '';
    if (isSleep || isLoaf) {
      // หลับตาพริ้ม ^.^
      eyesSvg = `
        <path d="M 40 32 Q 44 28 47 32" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M 53 32 Q 56 28 60 32" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round"/>
      `;
    } else if (isDerpyYawn) {
      // หลับตาหยีตอนหาว >.<
      eyesSvg = `
        <path d="M 39 29 L 46 33 L 39 35" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 61 29 L 54 33 L 61 35" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    } else if (isDerpyStare) {
      // ตาหรี่มองตัดสินทาส -_-
      eyesSvg = `
        <line x1="39" y1="31" x2="47" y2="31" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="43" cy="32" r="1.8" fill="${b.pupilColor}"/>
        <line x1="53" y1="31" x2="61" y2="31" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="57" cy="32" r="1.8" fill="${b.pupilColor}"/>
      `;
    } else if (isPounce || isDragged) {
      // ตากลมโตสุดขีด (รูม่านตาขยายเต็มที่)
      eyesSvg = `
        <circle cx="43" cy="31" r="5.5" fill="${b.eyeColor}"/>
        <circle cx="43" cy="31" r="4.2" fill="${b.pupilColor}"/>
        <circle cx="41.5" cy="29.5" r="1.8" fill="#ffffff"/>
        <circle cx="44.5" cy="32.5" r="0.9" fill="#ffffff"/>
        <circle cx="57" cy="31" r="5.5" fill="${b.eyeColor}"/>
        <circle cx="57" cy="31" r="4.2" fill="${b.pupilColor}"/>
        <circle cx="55.5" cy="29.5" r="1.8" fill="#ffffff"/>
        <circle cx="58.5" cy="32.5" r="0.9" fill="#ffffff"/>
      `;
    } else {
      // ตาแป๋วปกติ มีประกายวิบวับ
      eyesSvg = `
        <ellipse cx="43" cy="31" rx="4.5" ry="5" fill="${b.eyeColor}"/>
        <ellipse cx="43.5" cy="31" rx="2.5" ry="4" fill="${b.pupilColor}"/>
        <circle cx="42" cy="29.5" r="1.6" fill="#ffffff"/>
        <circle cx="44.5" cy="32" r="0.8" fill="#ffffff"/>
        <ellipse cx="57" cy="31" rx="4.5" ry="5" fill="${b.eyeColor}"/>
        <ellipse cx="56.5" cy="31" rx="2.5" ry="4" fill="${b.pupilColor}"/>
        <circle cx="55.5" cy="29.5" r="1.6" fill="#ffffff"/>
        <circle cx="58" cy="32" r="0.8" fill="#ffffff"/>
      `;
    }

    // ปาก จมูก และแก้มป่อง
    let mouthSvg = '';
    if (isDerpyYawn) {
      // อ้าปากหาวกว้าง มีลิ้นสีชมพูและเขี้ยวจิ๋ว
      mouthSvg = `
        <polygon points="50,33 48,31 52,31" fill="${b.noseColor}"/>
        <!-- Big yawn mouth -->
        <ellipse cx="50" cy="39" rx="6.5" ry="7.5" fill="#4a1525"/>
        <ellipse cx="50" cy="42" rx="4.5" ry="3.5" fill="#ff758f"/>
        <!-- Tiny fangs -->
        <polygon points="46,34 47,37 48,34" fill="#ffffff"/>
        <polygon points="54,34 53,37 52,34" fill="#ffffff"/>
      `;
    } else if (isCarryFish) {
      // คาบปลาทูตัวโต
      mouthSvg = `
        <polygon points="50,34 48.5,32 51.5,32" fill="${b.noseColor}"/>
        <!-- Fish in mouth -->
        <g class="pet-carried-fish" transform="translate(32, 32) rotate(-6)">
          <ellipse cx="20" cy="6" rx="14" ry="5.5" fill="#5a86a6"/>
          <ellipse cx="18" cy="7" rx="12" ry="3.5" fill="#e2ecf2"/>
          <polygon points="32,6 38,1 36,6 38,11" fill="#486f8a"/>
          <polygon points="22,1 25,3 20,3" fill="#486f8a"/>
          <circle cx="10" cy="5" r="1.4" fill="#ffffff"/>
          <circle cx="9.6" cy="5" r="0.8" fill="#000000"/>
          <!-- Stripes on fish -->
          <path d="M 16 3 L 18 6 M 21 3 L 23 6 M 26 3 L 28 6" stroke="#37556b" stroke-width="1"/>
        </g>
      `;
    } else {
      // ปาก :3 สุดน่ารัก
      mouthSvg = `
        <polygon points="50,34.5 48.5,33 51.5,33" fill="${b.noseColor}"/>
        <path d="M 47 36 C 48.5 38, 50 37, 50 35.5 C 50 37, 51.5 38, 53 36" fill="none" stroke="#2b2d42" stroke-width="1.6" stroke-linecap="round"/>
      `;
    }

    // หางแมว (มี Animation ส่ายไปมา)
    let tailSvg = '';
    if (isLoaf) {
      // นอนเก็บหางแนบลำตัว
      tailSvg = `
        <path class="pet-tail pet-tail-loaf" d="M 72 58 C 76 60, 68 64, 56 64" fill="none" stroke="${b.pointColor || b.bodyColor}" stroke-width="6" stroke-linecap="round"/>
      `;
    } else if (isBelly) {
      // นอนหงาย หางแกว่งอยู่ด้านล่าง
      tailSvg = `
        <path class="pet-tail pet-tail-wag" d="M 50 68 C 65 72, 75 62, 78 50" fill="none" stroke="${b.pointColor || b.bodyColor}" stroke-width="6" stroke-linecap="round"/>
      `;
    } else {
      // หางส่ายดุ๊กดิ๊กปกติ
      tailSvg = `
        <path class="pet-tail pet-tail-wag" d="M 72 52 C 85 48, 88 34, 82 24" fill="none" stroke="${b.pointColor || b.bodyColor}" stroke-width="6" stroke-linecap="round"/>
      `;
    }

    // ส่วนขาและอุ้งเท้า
    let pawsSvg = '';
    if (isLoaf) {
      // ก้อนขนมปัง: พับขาเก็บใต้พุงมิดชิด
      pawsSvg = '';
    } else if (isSitting) {
      // ท่านั่ง: ขาหน้าตั้งตรง ขาหลังพับข้าง
      pawsSvg = `
        <!-- Back haunches -->
        <ellipse cx="66" cy="58" rx="8" ry="6" fill="${b.pointColor || b.bodyColor}"/>
        <!-- Front Paws -->
        <ellipse class="pet-paw-front-l" cx="44" cy="65" rx="4.5" ry="3.5" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse class="pet-paw-front-r" cx="54" cy="65" rx="4.5" ry="3.5" fill="${b.pointColor || b.bellyColor}"/>
      `;
    } else if (isDragged) {
      // ถูกหิ้ว: ขาหน้าและหลังแกว่งปั่นกลางอากาศ
      pawsSvg = `
        <g class="pet-drag-legs">
          <ellipse cx="38" cy="68" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(-15 38 68)"/>
          <ellipse cx="46" cy="69" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(10 46 69)"/>
          <ellipse cx="58" cy="67" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(-20 58 67)"/>
          <ellipse cx="66" cy="66" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(25 66 66)"/>
          <!-- Pink paw pads -->
          <circle cx="37" cy="72" r="1.5" fill="#ffb4a2"/>
          <circle cx="47" cy="73" r="1.5" fill="#ffb4a2"/>
          <circle cx="57" cy="71" r="1.5" fill="#ffb4a2"/>
          <circle cx="67" cy="70" r="1.5" fill="#ffb4a2"/>
        </g>
      `;
    } else if (isGroom) {
      // เลียอุ้งเท้า: ยกขาหน้าขึ้นมาหนึ่งข้าง
      pawsSvg = `
        <ellipse cx="44" cy="64" rx="4.5" ry="3.5" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse class="pet-grooming-paw" cx="53" cy="40" rx="3.5" ry="5.5" fill="${b.pointColor || b.bellyColor}" transform="rotate(-25 53 40)"/>
        <ellipse cx="64" cy="63" rx="4.5" ry="3.5" fill="${b.pointColor || b.bellyColor}"/>
      `;
    } else {
      // ท่ายืน/เดิน/วิ่ง: 4 ขาพร้อมเดินเตาะแตะ
      pawsSvg = `
        <g class="pet-walking-paws">
          <ellipse class="pet-paw pet-paw-fl" cx="40" cy="64" rx="4" ry="3.5" fill="${b.pointColor || b.bellyColor}"/>
          <ellipse class="pet-paw pet-paw-fr" cx="48" cy="64" rx="4" ry="3.5" fill="${b.pointColor || b.bellyColor}"/>
          <ellipse class="pet-paw pet-paw-bl" cx="59" cy="63" rx="4.5" ry="3.5" fill="${b.pointColor || b.bodyColor}"/>
          <ellipse class="pet-paw pet-paw-br" cx="66" cy="63" rx="4.5" ry="3.5" fill="${b.pointColor || b.bodyColor}"/>
        </g>
      `;
    }

    // ลำตัวอ้วนกลมและพุงกระเพื่อม
    let bodySvg = '';
    if (isBelly) {
      // นอนหงายแผ่พุง
      bodySvg = `
        <!-- Chubby Lying Body -->
        <ellipse cx="50" cy="46" rx="26" ry="18" fill="${b.bodyColor}"/>
        <!-- Big exposed belly -->
        <ellipse cx="50" cy="45" rx="19" ry="13" fill="${b.bellyColor}"/>
        <!-- Cute belly button dot -->
        <circle cx="50" cy="46" r="1" fill="#e07a5f" opacity="0.6"/>
      `;
    } else {
      // ลำตัวอ้วนกลมปกติ
      bodySvg = `
        <!-- Chubby Body -->
        <ellipse class="pet-body-core" cx="54" cy="48" rx="25" ry="18" fill="${b.bodyColor}"/>
        <!-- Soft Belly Patch -->
        <ellipse class="pet-belly-patch" cx="50" cy="51" rx="17" ry="13" fill="${b.bellyColor}"/>
      `;
    }

    return `
      <svg class="cat-svg state-${state}" viewBox="0 0 100 80" width="100%" height="100%">
        <defs>
          <radialGradient id="blush-grad-${pet.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff99a8" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#ff99a8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- Tail -->
        ${tailSvg}

        <!-- Body -->
        ${bodySvg}

        <!-- Breed Pattern on Body -->
        ${patternOverlay}

        <!-- Paws -->
        ${pawsSvg}

        <!-- Head Group -->
        <g class="pet-head-group">
          <!-- Ears -->
          ${earsSvg}

          <!-- Chubby Head -->
          <ellipse class="pet-head" cx="50" cy="33" rx="21" ry="16" fill="${b.bodyColor}"/>
          
          <!-- Cute Chubby Cheeks -->
          <ellipse cx="38" cy="37" rx="8" ry="6" fill="${b.bellyColor}" opacity="0.8"/>
          <ellipse cx="62" cy="37" rx="8" ry="6" fill="${b.bellyColor}" opacity="0.8"/>

          <!-- Blush Circles -->
          <circle cx="35" cy="37" r="4.5" fill="url(#blush-grad-${pet.id})"/>
          <circle cx="65" cy="37" r="4.5" fill="url(#blush-grad-${pet.id})"/>

          <!-- Whiskers -->
          <g class="pet-whiskers" opacity="0.75">
            <line x1="26" y1="35" x2="36" y2="36" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="25" y1="38" x2="36" y2="38" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="27" y1="41" x2="36" y2="40" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="74" y1="35" x2="64" y2="36" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="75" y1="38" x2="64" y2="38" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="73" y1="41" x2="64" y2="40" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
          </g>

          <!-- Eyes -->
          ${eyesSvg}

          <!-- Mouth / Nose / Fish -->
          ${mouthSvg}
        </g>
      </svg>
    `;
  }

  // สร้างผีเสื้อบินลอย
  static createButterflyElement(id, x, y) {
    const el = document.createElement('div');
    el.className = 'pet-butterfly';
    el.id = `butterfly-${id}`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.innerHTML = `
      <svg viewBox="0 0 32 32" width="28" height="28">
        <g class="butterfly-wings">
          <ellipse class="b-wing b-wing-l" cx="10" cy="11" rx="9" ry="7" fill="#ff70a6" opacity="0.9"/>
          <ellipse class="b-wing b-wing-r" cx="22" cy="11" rx="9" ry="7" fill="#ff70a6" opacity="0.9"/>
          <ellipse class="b-wing b-wing-lb" cx="11" cy="20" rx="6" ry="5" fill="#ffd166" opacity="0.85"/>
          <ellipse class="b-wing b-wing-rb" cx="21" cy="20" rx="6" ry="5" fill="#ffd166" opacity="0.85"/>
          <ellipse cx="16" cy="16" rx="2" ry="9" fill="#264653"/>
          <!-- Antennae -->
          <path d="M 15 8 Q 12 4 10 5 M 17 8 Q 20 4 22 5" stroke="#264653" stroke-width="1" fill="none"/>
        </g>
      </svg>
    `;
    return el;
  }

  // สร้างจิ้งจกวิ่งเกาะขอบจอ
  static createGeckoElement(id, x, y) {
    const el = document.createElement('div');
    el.className = 'pet-gecko';
    el.id = `gecko-${id}`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.innerHTML = `
      <svg viewBox="0 0 36 20" width="36" height="20">
        <!-- Gecko Body and Legs -->
        <g class="gecko-body">
          <!-- Legs -->
          <path d="M 12 4 Q 10 1 8 3 M 12 16 Q 10 19 8 17" stroke="#8cb369" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M 22 4 Q 24 1 26 3 M 22 16 Q 24 19 26 17" stroke="#8cb369" stroke-width="2" stroke-linecap="round" fill="none"/>
          <!-- Body and Head -->
          <ellipse cx="17" cy="10" rx="10" ry="4.5" fill="#a4c280"/>
          <ellipse cx="8" cy="10" rx="5" ry="3.5" fill="#90be6d"/>
          <!-- Eyes -->
          <circle cx="7" cy="8" r="1.2" fill="#222"/>
          <circle cx="7" cy="12" r="1.2" fill="#222"/>
          <!-- Wavy Tail -->
          <path class="gecko-tail" d="M 27 10 Q 32 6 36 10" stroke="#a4c280" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        </g>
      </svg>
    `;
    return el;
  }

  // สร้างอาหารแมว/ชามปลา
  static createFoodBowlElement(x, y) {
    const el = document.createElement('div');
    el.className = 'pet-prop-food';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.innerHTML = `
      <svg viewBox="0 0 36 24" width="36" height="24">
        <!-- Bowl -->
        <ellipse cx="18" cy="18" rx="16" ry="5" fill="#e76f51"/>
        <path d="M 2 18 Q 18 26 34 18 L 30 10 Q 18 14 6 10 Z" fill="#f4a261"/>
        <ellipse cx="18" cy="10" rx="12" ry="4" fill="#2a9d8f"/>
        <!-- Fish Treats -->
        <ellipse cx="16" cy="10" rx="5" ry="2" fill="#e9c46a"/>
        <ellipse cx="21" cy="9" rx="4" ry="1.8" fill="#f4a261"/>
      </svg>
    `;
    return el;
  }
}
