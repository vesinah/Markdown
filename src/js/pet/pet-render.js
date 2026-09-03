// ระบบเรนเดอร์กราฟิก Vector SVG ขั้นสูงสำหรับน้องแมวสัตว์เลี้ยงหน้าจอ (Desktop Pet Render Engine)
// รองรับ 11 สายพันธุ์, พันธุกรรมหาง 5 แบบ, ขนฟูเปอร์เซีย, รูปร่างอ้วน/ผอม, รอยด่าง/แต้มวัว/สามสี, และทุกอิริยาบถ

import { PET_BREEDS, TAIL_TYPES, BODY_BUILDS, PET_GENDERS } from './pet-breeds.js';

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
      <div class="pet-mood-badge"></div>
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
    if (!el) return;
    const breed = PET_BREEDS[pet.breed] || PET_BREEDS.orange;
    const svgWrap = el.querySelector('.pet-svg-container');
    const nameTag = el.querySelector('.pet-name-tag');
    const moodBadge = el.querySelector('.pet-mood-badge');

    if (nameTag && nameTag.textContent !== pet.name) {
      nameTag.textContent = pet.name;
    }

    if (moodBadge) {
      const moodIcons = { blissful: '🥰', loving: '💖', curious: '🧐', playful: '⚡', sleepy: '😴', pouting: '😤', proud: '👑', hungry: '🐟', lonely: '🥺' };
      const curMood = pet.mood || 'curious';
      moodBadge.textContent = moodIcons[curMood] || '✨';
      if (typeof moodBadge.setAttribute === 'function') {
        moodBadge.setAttribute('data-mood', curMood);
      }
    }

    // กำหนด Class สำหรับสายพันธุ์ ท่าทาง เพศ และทิศทาง
    const isFluffy = breed.furType === 'fluffy_persian';
    const tailType = pet.tailType || breed.defaultTail || 'long';
    const build = pet.build || breed.defaultBuild || 'normal';
    const gender = pet.gender || 'male';
    const moodClass = `mood-${pet.mood || 'curious'}`;

    const buildClass = `build-${build} ${build === 'slim' ? 'build-skinny' : ''} ${build === 'skinny' ? 'build-slim' : ''}`.trim();
    const facing = pet.facing || 'left';
    el.className = `desktop-pet pet-breed-${pet.breed} gender-${gender} pet-state-${pet.state || 'stand'} facing-${facing} ${pet.isDragged ? 'is-dragged' : ''} ${pet.isBlocked ? 'is-blocked' : ''} ${pet.isSpeaking ? 'is-speaking' : ''} ${isFluffy ? 'is-fluffy' : ''} ${buildClass} tail-${tailType} ${moodClass}`;
    
    // ปรับ Scale ตัวแมว
    const scale = pet.scale || 1;
    el.style.setProperty('--pet-scale', scale);

    // เรนเดอร์เนื้อหา Vector SVG
    if (svgWrap) {
      svgWrap.innerHTML = this.renderCatSvg(breed, pet);
    }
  }

  // สลับทิศทางการหันหน้าของแมวอย่างรวดเร็วโดยไม่ต้องเรนเดอร์ SVG ใหม่ (60 FPS facing update)
  static updatePetFacing(el, pet) {
    if (!el || !pet) return;
    const facing = pet.facing || 'left';
    el.classList.remove('facing-left', 'facing-right');
    el.classList.add(`facing-${facing}`);
  }

  // Contract: Returns complete SVG string for a pet
  static renderPetSvg(pet, options = {}) {
    const breed = PET_BREEDS[pet.breed] || PET_BREEDS.orange;
    return this.renderCatSvg(breed, pet);
  }

  // สร้างเนื้อหา Vector SVG แยกตามชิ้นส่วนพันธุกรรมและท่าทาง
  static renderCatSvg(b, pet) {
    const state = pet.state || 'stand';
    const tailType = pet.tailType || b.defaultTail || 'long';
    const build = pet.build || b.defaultBuild || 'normal';
    const isFluffy = b.furType === 'fluffy_persian';

    const isSleep = state.startsWith('sleep');
    const isLoaf = state === 'sleep_loaf';
    const isCurl = state === 'sleep_curl';
    const isBelly = state === 'sleep_belly';
    const isSitting = state === 'sit';
    const isTwoLegged = state === 'two_legged' || state === 'begging';
    const isBattingBall = state === 'batting_ball' || state === 'batting';
    const isToyPlaying = state === 'play_toy' || isBattingBall;
    const isScratching = state === 'scratch';
    const isFetching = state === 'fetch' || state === 'fetching' || state === 'carry_fish';
    const isCarryFish = state === 'carry_fish' || isFetching;
    const isPouncePlay = state === 'pounce_play' || state === 'pounce_crouch';
    const isPounce = state === 'pounce' || isPouncePlay;
    const isPooping = state === 'pooping' || state === 'poop';
    const isGroom = state === 'groom';
    const isEating = state === 'eating';
    const isDerpyYawn = state === 'derpy_yawn';
    const isDerpyStare = state === 'derpy_stare';
    const isBegging = isTwoLegged;
    const isStretching = state === 'stretch';
    const isInBox = state === 'in_box';
    const isDragged = pet.isDragged;

    // 1. ลวดลาย รอยด่าง และแต้มพิเศษ (Markings & Patches)
    let patternOverlay = '';
    if (b.pattern === 'tabby' || b.pattern === 'orange_tabby') {
      patternOverlay = `
        <!-- Tabby Markings -->
        <path d="M 44 23 L 47 28 L 50 25 L 53 28 L 56 23" fill="none" stroke="${b.pointColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
        <path d="M 33 32 L 39 33 M 32 36 L 38 36.5" fill="none" stroke="${b.pointColor}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
        <path d="M 67 32 L 61 33 M 68 36 L 62 36.5" fill="none" stroke="${b.pointColor}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
        <path d="M 43 45 C 47 47 53 47 57 45" fill="none" stroke="${b.pointColor}" stroke-width="2.2" stroke-linecap="round" opacity="0.75"/>
        <path d="M 40 52 C 46 54 54 54 60 52" fill="none" stroke="${b.pointColor}" stroke-width="2.2" stroke-linecap="round" opacity="0.75"/>
        <path d="M 42 59 C 47 60 53 60 58 59" fill="none" stroke="${b.pointColor}" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      `;
    } else if (b.pattern === 'siamese' || b.pattern === 'bluepoint') {
      patternOverlay = `
        <!-- Mask and points -->
        <ellipse cx="50" cy="33" rx="14" ry="11" fill="${b.pointColor}" opacity="0.88"/>
      `;
    } else if (b.pattern === 'tuxedo') {
      patternOverlay = `
        <!-- Tuxedo White Shirt Front (Bib) -->
        <path class="tuxedo-chest-bib" d="M 46 36 C 41 42 40 54 44 63 C 50 65 56 61 55 50 C 54 43 51 37 46 36 Z" fill="#ffffff"/>
        <!-- White Muzzle & Chin -->
        <ellipse cx="50" cy="36.5" rx="7.5" ry="5.5" fill="#ffffff"/>
        <!-- Inverted 'V' Nose Blaze -->
        <polygon points="50,26 47,35 53,35" fill="#ffffff"/>
        <!-- White Paws / Mittens -->
        <ellipse cx="40" cy="64.5" rx="4.5" ry="3.5" fill="#ffffff"/>
        <ellipse cx="48" cy="64.5" rx="4.5" ry="3.5" fill="#ffffff"/>
        <!-- White Underbelly -->
        <ellipse cx="50" cy="54" rx="13" ry="9" fill="#ffffff" opacity="0.95"/>
      `;
    } else if (b.pattern === 'white_black_spotted' || b.pattern === 'cow_spotted') {
      const spotColor = b.patchColor || b.pointColor || '#1e293b';
      patternOverlay = `
        <!-- Cow Large Flank Patch -->
        <path class="cow-flank-patch" d="M 36 42 C 31 46 33 56 42 55 C 47 54 48 44 43 40 C 39 37 36 42 36 42 Z" fill="${spotColor}" opacity="0.95"/>
        <!-- Cow Back Saddle Patch -->
        <path class="cow-saddle-patch" d="M 54 38 C 62 36 71 42 69 51 C 67 56 58 56 55 49 C 53 44 51 40 54 38 Z" fill="${spotColor}" opacity="0.95"/>
        <!-- Cow Hip Spot -->
        <circle cx="68" cy="56" r="4.8" fill="${spotColor}" opacity="0.92"/>
        <!-- Pirate Eye Spot on Face -->
        <ellipse cx="42" cy="30" rx="6.5" ry="5.5" fill="${spotColor}" opacity="0.92"/>
      `;
    } else if (b.pattern === 'white_brown_ears') {
      // แมวขาวแต้มหูน้ำตาลทั้งสองข้าง
      patternOverlay = `
        <!-- Brown patches on both ears and small cap -->
        <path d="M 32 24 Q 28 14 38 18 Z" fill="${b.pointColor}" opacity="0.95"/>
        <path d="M 68 24 Q 72 14 62 18 Z" fill="${b.pointColor}" opacity="0.95"/>
        <!-- Cute forehead spot -->
        <ellipse cx="50" cy="22" rx="4" ry="2.5" fill="${b.pointColor}" opacity="0.85"/>
      `;
    } else if (b.pattern === 'white_brown_spotted') {
      // แมวขาวลายแต้มน้ำตาลเต็มตัว (ลายวัวคาราเมล)
      patternOverlay = `
        <!-- Caramel Cow Spots on Body -->
        <path d="M 38 42 Q 44 38 48 44 Q 45 52 39 48 Z" fill="${b.patchColor || b.pointColor}" opacity="0.92"/>
        <path d="M 58 46 Q 66 42 70 48 Q 68 56 60 54 Z" fill="${b.patchColor || b.pointColor}" opacity="0.92"/>
        <circle cx="48" cy="56" r="4.5" fill="${b.patchColor || b.pointColor}" opacity="0.88"/>
        <!-- Face spot -->
        <ellipse cx="40" cy="28" rx="5" ry="4" fill="${b.patchColor || b.pointColor}" opacity="0.9"/>
      `;
    } else if (b.pattern === 'calico') {
      // แมวสามสี (ลายแต้มส้มและดำ/เทา)
      patternOverlay = `
        <!-- Calico Orange & Black Patches -->
        <!-- Orange patch on back -->
        <path d="M 42 42 Q 52 38 56 46 Q 50 54 40 50 Z" fill="${b.patchColor1 || '#e76f51'}" opacity="0.92"/>
        <!-- Black/Dark patch on flank -->
        <path d="M 58 45 Q 68 40 71 49 Q 67 58 59 55 Z" fill="${b.patchColor2 || '#2b2d42'}" opacity="0.92"/>
        <!-- Head Calico split -->
        <path d="M 32 23 Q 29 13 40 18 Q 44 26 34 26 Z" fill="${b.patchColor1 || '#e76f51'}"/>
        <path d="M 68 23 Q 71 13 60 18 Q 56 26 66 26 Z" fill="${b.patchColor2 || '#2b2d42'}"/>
      `;
    } else if (b.pattern === 'persian_multicolor') {
      // แมวเปอร์เซียหลายสี
      patternOverlay = `
        <!-- Multicolor Persian Fur Patches -->
        <path d="M 42 44 Q 54 40 58 48 Q 52 56 40 52 Z" fill="${b.patchColor1}" opacity="0.85"/>
        <path d="M 58 47 Q 69 43 72 51 Q 68 58 59 56 Z" fill="${b.patchColor2}" opacity="0.85"/>
        <!-- Cheek tuft accents -->
        <circle cx="34" cy="38" r="4" fill="${b.patchColor1}" opacity="0.6"/>
        <circle cx="66" cy="38" r="4" fill="${b.patchColor2}" opacity="0.6"/>
      `;
    } else if (b.pattern === 'solid_silver') {
      patternOverlay = `
        <path d="M 38 25 Q 50 20 62 25 Q 50 28 38 25" fill="#ffffff" opacity="0.3"/>
        <ellipse cx="50" cy="46" rx="18" ry="8" fill="#ffffff" opacity="0.2"/>
      `;
    } else if (b.pattern === 'black') {
      patternOverlay = `
        <path d="M 36 24 Q 48 18 60 24" fill="none" stroke="#606680" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
        <ellipse cx="50" cy="47" rx="16" ry="7" fill="#434766" opacity="0.25"/>
      `;
    }

    // แต้มพิเศษเพิ่มเติม (Special Markings)
    if (pet.specialMarking === 'blaze') {
      patternOverlay += `
        <!-- Star Blaze on Forehead -->
        <polygon points="50,20 51.5,24 55,25 51.5,26.5 50,30 48.5,26.5 45,25 48.5,24" fill="#ffffff" opacity="0.95"/>
      `;
    } else if (pet.specialMarking === 'eye_patch') {
      patternOverlay += `
        <!-- Pirate Eye Patch -->
        <ellipse cx="43" cy="31" rx="6" ry="6" fill="${b.pointColor || '#1e293b'}" opacity="0.88"/>
      `;
    } else if (pet.specialMarking === 'socks') {
      patternOverlay += `
        <!-- White Socks / Mittens -->
        <ellipse cx="40" cy="64.5" rx="4.5" ry="3.5" fill="#ffffff"/>
        <ellipse cx="48" cy="64.5" rx="4.5" ry="3.5" fill="#ffffff"/>
        <ellipse cx="59" cy="63.5" rx="4.8" ry="3.5" fill="#ffffff"/>
        <ellipse cx="66" cy="63.5" rx="4.8" ry="3.5" fill="#ffffff"/>
      `;
    } else if (pet.specialMarking === 'heart_butt') {
      patternOverlay += `
        <!-- Heart Patch on Hip -->
        <path d="M 68 47 C 68 44 65 42 63 44 C 61 42 58 44 58 47 C 58 50 63 53 63 53 C 63 53 68 50 68 47 Z" fill="#ff758f" opacity="0.9"/>
      `;
    }

    // 2. หางแมว (Tail Types: long, short, bobtail, kinked, curved, fluffy_plumage)
    let tailSvg = '';
    const tailColor = b.pointColor || b.bodyColor;

    if (isPooping) {
      // ขณะขับถ่าย: หางยกสูงชี้โด่งขึ้นด้านบนเพื่อหลบสิ่งปฏิกูล
      tailSvg = `<path class="pet-tail pet-tail-pooping" d="M 71 50 C 76 36, 80 22, 84 12" fill="none" stroke="${tailColor}" stroke-width="6" stroke-linecap="round"/>`;
    } else if (isTwoLegged) {
      // ขณะไร้ยืนสองขา: หางโค้งทอดลงแตะพื้นด้านหลังเป็นค้ำยันสมดุล
      tailSvg = `<path class="pet-tail pet-tail-two-legged" d="M 66 56 C 74 62, 80 66, 86 68" fill="none" stroke="${tailColor}" stroke-width="5.5" stroke-linecap="round"/>`;
    } else if (isLoaf || isInBox) {
      // นอนเก็บหางแนบชิดลำตัว
      tailSvg = `<path class="pet-tail pet-tail-loaf" d="M 72 58 C 76 60, 68 64, 56 64" fill="none" stroke="${tailColor}" stroke-width="6" stroke-linecap="round"/>`;
    } else if (isBelly) {
      // นอนหงาย หางแกว่งอยู่ด้านล่าง
      tailSvg = `<path class="pet-tail pet-tail-wag" d="M 50 68 C 65 72, 75 62, 78 50" fill="none" stroke="${tailColor}" stroke-width="6" stroke-linecap="round"/>`;
    } else {
      // ตามประเภทพันธุกรรมหาง
      if (tailType === 'bobtail') {
        // หางกุด ก้อนกลมปอมปอม
        tailSvg = `
          <g class="pet-tail pet-tail-bobtail">
            <circle cx="75" cy="48" r="6.5" fill="${tailColor}"/>
            <circle cx="77" cy="47" r="4.5" fill="${tailColor}" opacity="0.9"/>
          </g>
        `;
      } else if (tailType === 'short') {
        // หางสั้นดุ๊กดิ๊ก
        tailSvg = `
          <path class="pet-tail pet-tail-short" d="M 71 50 Q 79 46 80 40" fill="none" stroke="${tailColor}" stroke-width="5.5" stroke-linecap="round"/>
        `;
      } else if (tailType === 'kinked') {
        // หางคด แมวไทยปลายหักงอ
        tailSvg = `
          <path class="pet-tail pet-tail-kinked" d="M 71 52 Q 80 44 83 34 L 80 26 L 86 23" fill="none" stroke="${tailColor}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
        `;
      } else if (tailType === 'curved') {
        // หางโค้งเคียว งอนสวยงาม
        tailSvg = `
          <path class="pet-tail pet-tail-curved" d="M 71 52 C 86 46, 92 28, 80 20 C 74 16, 70 24, 76 28" fill="none" stroke="${tailColor}" stroke-width="5.5" stroke-linecap="round"/>
        `;
      } else if (tailType === 'fluffy_plumage' || isFluffy) {
        // หางพวงขนนกยูงฟูฟ่อง สำหรับแมวเปอร์เซีย
        tailSvg = `
          <g class="pet-tail pet-tail-fluffy">
            <path d="M 70 52 C 84 46, 95 32, 85 18 C 76 10, 68 22, 75 32" fill="${tailColor}" opacity="0.95"/>
            <!-- Fluffy Plume Layers -->
            <ellipse cx="82" cy="28" rx="8" ry="14" fill="${tailColor}" transform="rotate(25 82 28)"/>
            <ellipse cx="80" cy="24" rx="7" ry="11" fill="${b.bellyColor}" opacity="0.3" transform="rotate(20 80 24)"/>
            <circle cx="85" cy="18" r="6" fill="${tailColor}"/>
          </g>
        `;
      } else {
        // หางยาวมาตรฐาน (long)
        tailSvg = `
          <path class="pet-tail pet-tail-wag pet-tail-long" d="M 72 52 C 85 48, 88 34, 82 24" fill="none" stroke="${tailColor}" stroke-width="6" stroke-linecap="round"/>
        `;
      }
    }

    // 3. หูแมว (หูพับ vs หูตั้ง vs หูฟูเปอร์เซีย)
    let earsSvg = '';
    if (b.earType === 'folded') {
      // หูพับ Scottish Fold
      earsSvg = `
        <g class="pet-ear pet-ear-left">
          <path d="M 34 26 C 30 20, 36 15, 42 20 C 40 24, 37 26, 34 26 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 36 22 C 34 19, 38 17, 40 20" fill="${b.innerEarColor}" opacity="0.6"/>
        </g>
        <g class="pet-ear pet-ear-right">
          <path d="M 66 26 C 70 20, 64 15, 58 20 C 60 24, 63 26, 66 26 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 64 22 C 66 19, 62 17, 60 20" fill="${b.innerEarColor}" opacity="0.6"/>
        </g>
      `;
    } else if (isFluffy || b.earType === 'fluffy_tuft') {
      // หูฟูมีปุยขน (Persian Tufted Ears)
      earsSvg = `
        <g class="pet-ear pet-ear-left">
          <path d="M 33 26 Q 28 10 41 17 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 34 24 Q 31 14 39 18 Z" fill="${b.innerEarColor}"/>
          <!-- Fluffy Ear Tufts -->
          <path d="M 32 23 Q 27 18 36 18 Q 30 22 35 24" fill="#ffffff" opacity="0.8"/>
        </g>
        <g class="pet-ear pet-ear-right">
          <path d="M 67 26 Q 72 10 59 17 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 66 24 Q 69 14 61 18 Z" fill="${b.innerEarColor}"/>
          <path d="M 68 23 Q 73 18 64 18 Q 70 22 65 24" fill="#ffffff" opacity="0.8"/>
        </g>
      `;
    } else {
      // หูตั้งมาตรฐาน
      earsSvg = `
        <g class="pet-ear pet-ear-left">
          <path d="M 33 26 Q 28 12 40 18 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 34 24 Q 31 15 38 19 Z" fill="${b.innerEarColor}"/>
        </g>
        <g class="pet-ear pet-ear-right">
          <path d="M 67 26 Q 72 12 60 18 Z" fill="${b.pointColor || b.bodyColor}"/>
          <path d="M 66 24 Q 69 15 62 19 Z" fill="${b.innerEarColor}"/>
        </g>
      `;
    }

    const gender = pet.gender || 'male';
    const isFemale = gender === 'female';

    // สัดส่วนร่างกาย สรีระ 3 รูปแบบ (Body Build: chubby, normal, skinny/slim, chunky_loaf)
    // สัดส่วนมาตรฐานดั้งเดิมถือเป็นสัดส่วนของเพศผู้ (Male Baseline)
    let bodyRx = 25, bodyRy = 18;
    let bellyRx = 17, bellyRy = 13;
    let cheekRx = 8.0, cheekRy = 6.0;
    let pawRx = 4.5, pawRy = 3.5;
    let shadowRx = 24, shadowRy = 4.5;
    let shadowCy = 69;

    if (build === 'chubby') {
      bodyRx = 28; bodyRy = 21; bellyRx = 20; bellyRy = 16;
      cheekRx = 9.5; cheekRy = 7.2;
      pawRx = 5.2; pawRy = 4.0;
      shadowRx = 28; shadowRy = 5.2;
    } else if (build === 'chunky_loaf') {
      bodyRx = 30; bodyRy = 22; bellyRx = 22; bellyRy = 17;
      cheekRx = 10.0; cheekRy = 7.5;
      pawRx = 5.5; pawRy = 4.2;
      shadowRx = 30; shadowRy = 5.5;
    } else if (build === 'skinny' || build === 'slim') {
      bodyRx = 21; bodyRy = 15; bellyRx = 13; bellyRy = 10;
      cheekRx = 6.4; cheekRy = 4.8;
      pawRx = 3.6; pawRy = 3.0;
      shadowRx = 20; shadowRy = 3.8;
    }

    // แมวเพศเมีย (Female): รูปร่างสัดส่วนเพรียวยาวกว่า (Slender & Elongated Proportion)
    if (isFemale) {
      bodyRx = Math.round(bodyRx * 0.88 * 10) / 10;
      bodyRy = Math.round(bodyRy * 1.04 * 10) / 10;
      bellyRx = Math.round(bellyRx * 0.82 * 10) / 10;
      bellyRy = Math.round(bellyRy * 0.90 * 10) / 10;
      cheekRx = Math.round(cheekRx * 0.82 * 10) / 10;
      cheekRy = Math.round(cheekRy * 0.88 * 10) / 10;
      pawRx = Math.round(pawRx * 0.88 * 10) / 10;
      pawRy = Math.round(pawRy * 0.95 * 10) / 10;
      shadowRx = Math.round(shadowRx * 0.90 * 10) / 10;
    }

    if (isLoaf || isCurl || isBelly) {
      shadowCy = 67;
      shadowRx += 3;
      shadowRy += 1;
    } else if (isSitting) {
      shadowCy = 68;
    } else if (isPooping) {
      shadowCy = 68;
      shadowRx += 2;
    }

    // 4. ดวงตาและการแสดงออกทางสีหน้า
    let eyesSvg = '';
    if (isPooping) {
      // หน้าตาเบ่งอึ >.<
      eyesSvg = `
        <path d="M 38 30 L 45 34 L 38 36" fill="none" stroke="#222" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 62 30 L 55 34 L 62 36" fill="none" stroke="#222" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    } else if (isSleep || isLoaf || isCurl) {
      // หลับตาพริ้ม ^.^
      eyesSvg = `
        <path d="M 40 32 Q 44 28 47 32" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M 53 32 Q 56 28 60 32" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round"/>
      `;
    } else if (isDerpyYawn) {
      // หาวตาหยี >.<
      eyesSvg = `
        <path d="M 39 29 L 46 33 L 39 35" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 61 29 L 54 33 L 61 35" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    } else if (isDerpyStare) {
      // ตาหรี่มองจิก -_-
      eyesSvg = `
        <line x1="39" y1="31" x2="47" y2="31" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="43" cy="32" r="1.8" fill="${b.pupilColor}"/>
        <line x1="53" y1="31" x2="61" y2="31" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="57" cy="32" r="1.8" fill="${b.pupilColor}"/>
      `;
    } else if (isTwoLegged) {
      // ตาสงสัยใคร่รู้ ออดอ้อนเป็นประกาย
      eyesSvg = `
        <circle cx="43" cy="30" r="5" fill="${b.eyeColor}"/>
        <circle cx="43" cy="30" r="3.6" fill="${b.pupilColor}"/>
        <circle cx="41.5" cy="28.5" r="1.8" fill="#ffffff"/>
        <circle cx="44.5" cy="31" r="0.9" fill="#ffffff"/>
        <circle cx="57" cy="30" r="5" fill="${b.eyeColor}"/>
        <circle cx="57" cy="30" r="3.6" fill="${b.pupilColor}"/>
        <circle cx="55.5" cy="28.5" r="1.8" fill="#ffffff"/>
        <circle cx="58.5" cy="31" r="0.9" fill="#ffffff"/>
      `;
    } else if (isPounce || isToyPlaying || isDragged) {
      // ตากลมโตสุดขีด รูม่านตาขยาย
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
    } else if (pet.mood === 'blissful') {
      // เคลิ้มฟิน ตายิ้มหยีพระจันทร์เสี้ยวเปี่ยมสุข ^.^
      eyesSvg = `
        <path d="M 39 32 Q 43 27 47 32" fill="none" stroke="#222" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M 53 32 Q 57 27 61 32" fill="none" stroke="#222" stroke-width="2.3" stroke-linecap="round"/>
      `;
    } else if (pet.mood === 'loving') {
      // คลั่งรัก ดวงตามีประกายหัวใจ
      eyesSvg = `
        <circle cx="43" cy="30" r="5" fill="${b.eyeColor}"/>
        <circle cx="43" cy="30" r="3.5" fill="${b.pupilColor}"/>
        <circle cx="41.5" cy="28.5" r="1.8" fill="#ffffff"/>
        <path d="M 43 28.5 C 41.5 27 39.5 29 43 32 C 46.5 29 44.5 27 43 28.5 Z" fill="#ff758f" opacity="0.95"/>
        <circle cx="57" cy="30" r="5" fill="${b.eyeColor}"/>
        <circle cx="57" cy="30" r="3.5" fill="${b.pupilColor}"/>
        <circle cx="55.5" cy="28.5" r="1.8" fill="#ffffff"/>
        <path d="M 57 28.5 C 55.5 27 53.5 29 57 32 C 60.5 29 58.5 27 57 28.5 Z" fill="#ff758f" opacity="0.95"/>
      `;
    } else if (pet.mood === 'sleepy') {
      // ง่วงนอนตาปรือ
      eyesSvg = `
        <ellipse cx="43" cy="32" rx="4.5" ry="2.2" fill="${b.eyeColor}"/>
        <ellipse cx="43.5" cy="32" rx="2.5" ry="1.8" fill="${b.pupilColor}"/>
        <line x1="38" y1="30" x2="48" y2="31" stroke="#222" stroke-width="2.0" stroke-linecap="round"/>
        <ellipse cx="57" cy="32" rx="4.5" ry="2.2" fill="${b.eyeColor}"/>
        <ellipse cx="56.5" cy="32" rx="2.5" ry="1.8" fill="${b.pupilColor}"/>
        <line x1="52" y1="31" x2="62" y2="30" stroke="#222" stroke-width="2.0" stroke-linecap="round"/>
      `;
    } else if (pet.mood === 'pouting') {
      // งอนตุ๊บป่อง ตาหรี่มองค้อน
      eyesSvg = `
        <line x1="39" y1="32" x2="47" y2="30" stroke="#222" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="43" cy="32" r="1.6" fill="${b.pupilColor}"/>
        <line x1="53" y1="30" x2="61" y2="32" stroke="#222" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="57" cy="32" r="1.6" fill="${b.pupilColor}"/>
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

    // 5. ปาก จมูก
    let mouthSvg = '';
    if (isDerpyYawn) {
      // อ้าปากหาวกว้าง มีฟันเขี้ยวจิ๋ว
      mouthSvg = `
        <polygon points="50,33 48,31 52,31" fill="${b.noseColor}"/>
        <ellipse cx="50" cy="39" rx="6.5" ry="7.5" fill="#4a1525"/>
        <ellipse cx="50" cy="42" rx="4.5" ry="3.5" fill="#ff758f"/>
        <polygon points="46,34 47,37 48,34" fill="#ffffff"/>
        <polygon points="54,34 53,37 52,34" fill="#ffffff"/>
      `;
    } else if (isCarryFish) {
      // คาบปลาทู
      mouthSvg = `
        <polygon points="50,34 48.5,32 51.5,32" fill="${b.noseColor}"/>
        <g class="pet-carried-fish" transform="translate(32, 32) rotate(-6)">
          <ellipse cx="20" cy="6" rx="14" ry="5.5" fill="#5a86a6"/>
          <ellipse cx="18" cy="7" rx="12" ry="3.5" fill="#e2ecf2"/>
          <polygon points="32,6 38,1 36,6 38,11" fill="#486f8a"/>
          <polygon points="22,1 25,3 20,3" fill="#486f8a"/>
          <circle cx="10" cy="5" r="1.4" fill="#ffffff"/>
          <circle cx="9.6" cy="5" r="0.8" fill="#000000"/>
        </g>
      `;
    } else {
      // ปาก :3 น่ารัก
      mouthSvg = `
        <polygon points="50,34.5 48.5,33 51.5,33" fill="${b.noseColor}"/>
        <path d="M 47 36 C 48.5 38, 50 37, 50 35.5 C 50 37, 51.5 38, 53 36" fill="none" stroke="#2b2d42" stroke-width="1.6" stroke-linecap="round"/>
      `;
    }

    // 6. อุ้งเท้าและขา (Paws)
    let pawsSvg = '';
    if (isLoaf || isInBox) {
      pawsSvg = ''; // ซ่อนขามิดชิดใต้พุง
    } else if (isPooping) {
      // ขากางออกรับน้ำหนักขณะขับถ่าย
      pawsSvg = `
        <ellipse cx="36" cy="64" rx="${pawRx * 1.1}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse cx="46" cy="64" rx="${pawRx * 1.1}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse cx="60" cy="63" rx="${pawRx * 1.2}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
        <ellipse cx="70" cy="63" rx="${pawRx * 1.2}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
      `;
    } else if (isTwoLegged) {
      // ท่ายืนสองขา: สองขาหลังปักหลัก สองขาหน้ายกขึ้นมาระดับอก
      pawsSvg = `
        <!-- Hind feet on ground -->
        <ellipse cx="40" cy="67" rx="${pawRx + 0.8}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
        <ellipse cx="60" cy="67" rx="${pawRx + 0.8}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
        <!-- Front paws begging together -->
        <g class="pet-begging-paws-upright">
          <ellipse cx="44" cy="34" rx="${pawRx * 0.8}" ry="${pawRy * 1.5}" fill="${b.pointColor || b.bellyColor}" transform="rotate(-15 44 34)"/>
          <ellipse cx="52" cy="34" rx="${pawRx * 0.8}" ry="${pawRy * 1.5}" fill="${b.pointColor || b.bellyColor}" transform="rotate(15 52 34)"/>
        </g>
      `;
    } else if (isBattingBall || isToyPlaying) {
      // ท่าเล่นลูกบอล / ตบบอล: ขาหน้าข้างหนึ่งยกขึ้นงอศอกตบไปข้างหน้า
      pawsSvg = `
        <!-- Supporting paws -->
        <ellipse cx="62" cy="64" rx="${pawRx * 1.2}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
        <ellipse cx="42" cy="65" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
        <!-- Active Batting Front Paw -->
        <g class="pet-batting-arm">
          <path d="M 46 50 Q 34 46 28 40 Q 24 38 27 34 Q 32 34 37 42 Z" fill="${b.pointColor || b.bodyColor}"/>
          <circle cx="27" cy="36" r="${pawRx}" fill="${b.pointColor || b.bellyColor}"/>
          <!-- Extended sharp cute claws -->
          <line x1="24" y1="34" x2="21" y2="31" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/>
          <line x1="25" y1="32" x2="23" y2="29" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/>
          <line x1="28" y1="31" x2="27" y2="28" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/>
        </g>
      `;
    } else if (isScratching) {
      // ท่าเอื้อมสองขาหน้าฝนเล็บ
      pawsSvg = `
        <ellipse cx="64" cy="64" rx="${pawRx * 1.3}" ry="${pawRy * 1.2}" fill="${b.pointColor || b.bodyColor}"/>
        <g class="pet-scratch-paws">
          <ellipse cx="36" cy="42" rx="${pawRx}" ry="${pawRy * 1.6}" fill="${b.pointColor || b.bellyColor}" transform="rotate(-35 36 42)"/>
          <ellipse cx="44" cy="38" rx="${pawRx}" ry="${pawRy * 1.6}" fill="${b.pointColor || b.bellyColor}" transform="rotate(-25 44 38)"/>
          <!-- Claw scratch traces -->
          <line x1="30" y1="46" x2="33" y2="43" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
          <line x1="32" y1="48" x2="35" y2="45" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
        </g>
      `;
    } else if (isPouncePlay) {
      pawsSvg = `
        <ellipse class="pet-paw-pounce-back" cx="68" cy="62" rx="${pawRx * 1.3}" ry="${pawRy * 1.1}" fill="${b.pointColor || b.bodyColor}"/>
        <ellipse class="pet-paw-pounce-front" cx="36" cy="56" rx="${pawRx * 1.2}" ry="${pawRy}" transform="rotate(-20 36 56)" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse cx="46" cy="63" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
      `;
    } else if (isSitting) {
      pawsSvg = `
        <ellipse cx="66" cy="58" rx="${pawRx * 1.7}" ry="${pawRy * 1.7}" fill="${b.pointColor || b.bodyColor}"/>
        <ellipse class="pet-paw-front-l" cx="44" cy="65" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse class="pet-paw-front-r" cx="54" cy="65" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
      `;
    } else if (isDragged) {
      pawsSvg = `
        <g class="pet-drag-legs">
          <ellipse cx="38" cy="68" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(-15 38 68)"/>
          <ellipse cx="46" cy="69" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(10 46 69)"/>
          <ellipse cx="58" cy="67" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(-20 58 67)"/>
          <ellipse cx="66" cy="66" rx="3.5" ry="6" fill="${b.pointColor || b.bodyColor}" transform="rotate(25 66 66)"/>
          <circle cx="37" cy="72" r="1.5" fill="#ffb4a2"/>
          <circle cx="47" cy="73" r="1.5" fill="#ffb4a2"/>
          <circle cx="57" cy="71" r="1.5" fill="#ffb4a2"/>
          <circle cx="67" cy="70" r="1.5" fill="#ffb4a2"/>
        </g>
      `;
    } else if (isGroom) {
      pawsSvg = `
        <ellipse cx="44" cy="64" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
        <ellipse class="pet-grooming-paw" cx="53" cy="40" rx="${pawRx * 0.8}" ry="${pawRy * 1.5}" fill="${b.pointColor || b.bellyColor}" transform="rotate(-25 53 40)"/>
        <ellipse cx="64" cy="63" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
      `;
    } else {
      // ท่ายืน/เดินเตาะแตะ
      pawsSvg = `
        <g class="pet-walking-paws">
          <ellipse class="pet-paw pet-paw-fl" cx="40" cy="64" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
          <ellipse class="pet-paw pet-paw-fr" cx="48" cy="64" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bellyColor}"/>
          <ellipse class="pet-paw pet-paw-bl" cx="59" cy="63" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
          <ellipse class="pet-paw pet-paw-br" cx="66" cy="63" rx="${pawRx}" ry="${pawRy}" fill="${b.pointColor || b.bodyColor}"/>
        </g>
      `;
    }

    // 7. ลำตัว (Body)
    let bodySvg = '';
    if (isTwoLegged) {
      const upRx = isFemale ? 17 : 20;
      const upRy = isFemale ? 25 : 24;
      const upBellyRx = isFemale ? 11.5 : 14;
      const upBellyRy = isFemale ? 16 : 17;
      bodySvg = `
        <ellipse class="pet-body-core pet-body-upright" cx="50" cy="44" rx="${upRx}" ry="${upRy}" transform="rotate(-6 50 44)" fill="${b.bodyColor}"/>
        <ellipse cx="50" cy="44" rx="${upRx}" ry="${upRy}" transform="rotate(-6 50 44)" fill="url(#body-depth-grad-${pet.id})" pointer-events="none"/>
        <ellipse class="pet-belly-patch" cx="48" cy="46" rx="${upBellyRx}" ry="${upBellyRy}" transform="rotate(-6 48 46)" fill="${b.bellyColor}"/>
      `;
    } else if (isPooping) {
      bodySvg = `
        <path class="pet-body-core pet-body-poop" d="M 32 58 C 30 45 42 36 56 36 C 68 36 78 44 76 58 C 65 62 42 62 32 58 Z" fill="${b.bodyColor}"/>
        <path d="M 32 58 C 30 45 42 36 56 36 C 68 36 78 44 76 58 C 65 62 42 62 32 58 Z" fill="url(#body-depth-grad-${pet.id})" pointer-events="none"/>
        <ellipse class="pet-belly-patch" cx="52" cy="50" rx="${bellyRx}" ry="${bellyRy}" fill="${b.bellyColor}" opacity="0.85"/>
      `;
    } else if (isPouncePlay) {
      bodySvg = `
        <ellipse class="pet-body-core pet-body-pounce" cx="55" cy="50" rx="${bodyRx + 2}" ry="${bodyRy - 2}" transform="rotate(7 55 50)" fill="${b.bodyColor}"/>
        <ellipse cx="55" cy="50" rx="${bodyRx + 2}" ry="${bodyRy - 2}" transform="rotate(7 55 50)" fill="url(#body-depth-grad-${pet.id})" pointer-events="none"/>
        <ellipse class="pet-belly-patch" cx="52" cy="52" rx="${bellyRx}" ry="${bellyRy - 2}" fill="${b.bellyColor}"/>
      `;
    } else if (isBelly) {
      bodySvg = `
        <ellipse cx="50" cy="46" rx="${bodyRx + 1}" ry="${bodyRy}" fill="${b.bodyColor}"/>
        <ellipse cx="50" cy="46" rx="${bodyRx + 1}" ry="${bodyRy}" fill="url(#body-depth-grad-${pet.id})" pointer-events="none"/>
        <ellipse cx="50" cy="45" rx="${bellyRx + 2}" ry="${bellyRy}" fill="${b.bellyColor}"/>
        <circle cx="50" cy="46" r="1" fill="#e07a5f" opacity="0.6"/>
      `;
    } else {
      bodySvg = `
        <ellipse class="pet-body-core" cx="54" cy="48" rx="${bodyRx}" ry="${bodyRy}" fill="${b.bodyColor}"/>
        <ellipse cx="54" cy="48" rx="${bodyRx}" ry="${bodyRy}" fill="url(#body-depth-grad-${pet.id})" pointer-events="none"/>
        <ellipse class="pet-belly-patch" cx="50" cy="51" rx="${bellyRx}" ry="${bellyRy}" fill="${b.bellyColor}"/>
      `;
    }

    // ขนฟูเปอร์เซียรอบคอ (Persian Fluffy Ruff)
    let fluffyRuffSvg = '';
    if (isFluffy) {
      fluffyRuffSvg = `
        <!-- Fluffy Persian Neck Ruff & Cheek Fluff -->
        <g class="pet-persian-ruff" fill="${b.bodyColor}">
          <circle cx="34" cy="44" r="8" opacity="0.95"/>
          <circle cx="44" cy="48" r="9" opacity="0.95"/>
          <circle cx="56" cy="48" r="9" opacity="0.95"/>
          <circle cx="66" cy="44" r="8" opacity="0.95"/>
          <!-- Inner chest fluff highlight -->
          <ellipse cx="50" cy="46" rx="10" ry="7" fill="${b.bellyColor}" opacity="0.8"/>
        </g>
      `;
    }

    let headRx = isFluffy ? 23 : 21;
    let headRy = isFluffy ? 18 : 16;
    if (isFemale) {
      headRx = Math.round(headRx * 0.93 * 10) / 10;
      headRy = Math.round(headRy * 0.94 * 10) / 10;
    }

    return `
      <svg class="cat-svg state-${state} gender-${gender}" viewBox="0 0 100 80" width="100%" height="100%">
        <defs>
          <!-- เงาตกกระทบพื้นแบบนุ่มนวล (Soft Ambient Contact Shadow) -->
          <radialGradient id="ground-shadow-grad-${pet.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0f172a" stop-opacity="0.35"/>
            <stop offset="60%" stop-color="#0f172a" stop-opacity="0.14"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
          </radialGradient>

          <!-- มิติแสงเงาบนลำตัว (Volumetric Body Gradient) -->
          <radialGradient id="body-depth-grad-${pet.id}" cx="42%" cy="32%" r="68%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25"/>
            <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.22"/>
          </radialGradient>

          <!-- มิติแสงเงาบนหัวแมว (Volumetric Head Gradient) -->
          <radialGradient id="head-depth-grad-${pet.id}" cx="45%" cy="28%" r="65%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.28"/>
            <stop offset="62%" stop-color="#ffffff" stop-opacity="0"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.18"/>
          </radialGradient>

          <radialGradient id="blush-grad-${pet.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff99a8" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#ff99a8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- เงาตกกระทบพื้น (Ground Contact Shadow) สร้างมิติไม่ให้แมวลอย -->
        <ellipse class="pet-ground-shadow" cx="52" cy="${shadowCy}" rx="${shadowRx}" ry="${shadowRy}" fill="url(#ground-shadow-grad-${pet.id})"/>

        <!-- Tail -->
        ${tailSvg}

        <!-- Body -->
        ${bodySvg}

        <!-- Fluffy Ruff for Persians -->
        ${fluffyRuffSvg}

        <!-- Breed Markings / Patches -->
        ${patternOverlay}

        <!-- Paws -->
        ${pawsSvg}

        <!-- Head Group -->
        <g class="pet-head-group">
          <!-- Ears -->
          ${earsSvg}

          <!-- Head Core with 3D Depth Overlay -->
          <ellipse class="pet-head" cx="50" cy="33" rx="${headRx}" ry="${headRy}" fill="${b.bodyColor}"/>
          <ellipse cx="50" cy="33" rx="${headRx}" ry="${headRy}" fill="url(#head-depth-grad-${pet.id})" pointer-events="none"/>
          
          <!-- Cute Cheeks (dynamically scaled by build and gender) -->
          <ellipse cx="38" cy="37" rx="${cheekRx}" ry="${cheekRy}" fill="${b.bellyColor}" opacity="0.8"/>
          <ellipse cx="62" cy="37" rx="${cheekRx}" ry="${cheekRy}" fill="${b.bellyColor}" opacity="0.8"/>

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

          <!-- Mouth / Nose -->
          ${mouthSvg}
        </g>
      </svg>
    `;
  }

  // สร้างผีเสื้อบิน
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
          <path d="M 15 8 Q 12 4 10 5 M 17 8 Q 20 4 22 5" stroke="#264653" stroke-width="1" fill="none"/>
        </g>
      </svg>
    `;
    return el;
  }

  // สร้างจิ้งจกวิ่ง
  static createGeckoElement(id, x, y) {
    const el = document.createElement('div');
    el.className = 'pet-gecko';
    el.id = `gecko-${id}`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.innerHTML = `
      <svg viewBox="0 0 36 20" width="36" height="20">
        <g class="gecko-body">
          <path d="M 12 4 Q 10 1 8 3 M 12 16 Q 10 19 8 17" stroke="#8cb369" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M 22 4 Q 24 1 26 3 M 22 16 Q 24 19 26 17" stroke="#8cb369" stroke-width="2" stroke-linecap="round" fill="none"/>
          <ellipse cx="17" cy="10" rx="10" ry="4.5" fill="#a4c280"/>
          <ellipse cx="8" cy="10" rx="5" ry="3.5" fill="#90be6d"/>
          <circle cx="7" cy="8" r="1.2" fill="#222"/>
          <circle cx="7" cy="12" r="1.2" fill="#222"/>
          <path class="gecko-tail" d="M 27 10 Q 32 6 36 10" stroke="#a4c280" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        </g>
      </svg>
    `;
    return el;
  }

  // สร้างชามอาหาร/ปลาทู
  static createFoodBowlElement(x, y) {
    const el = document.createElement('div');
    el.className = 'pet-prop-food';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.innerHTML = `
      <svg viewBox="0 0 36 24" width="36" height="24">
        <ellipse cx="18" cy="18" rx="16" ry="5" fill="#e76f51"/>
        <path d="M 2 18 Q 18 26 34 18 L 30 10 Q 18 14 6 10 Z" fill="#f4a261"/>
        <ellipse cx="18" cy="10" rx="12" ry="4" fill="#2a9d8f"/>
        <ellipse cx="16" cy="10" rx="5" ry="2" fill="#e9c46a"/>
        <ellipse cx="21" cy="9" rx="4" ry="1.8" fill="#f4a261"/>
      </svg>
    `;
    return el;
  }
}
