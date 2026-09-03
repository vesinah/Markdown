// ระบบปฏิสัมพันธ์ทางสังคมระหว่างน้องแมว (Multi-Pet Social System)
// ดมจมูกทักทาย, วิ่งไล่จับ, นอนกอดกัน, แซวกันตาม 6 แกนนิสัย, และการเว้นระยะห่าง

import { PetRenderer } from './pet-render.js';
import { PET_DIALOGUES, getRandomDialogue, formatDialogue } from './pet-dialogues.js';

export const PetSocial = {
  lastInteractionTime: 0,

  // ตรวจจับการพบกันระหว่างแมว 2 ตัว
  checkSocialInteraction(pet1, pet2, sayCallback, spawnFxCallback) {
    if (pet1.isDragged || pet2.isDragged || pet1.isSpeaking || pet2.isSpeaking) return;

    const now = Date.now();
    // คูลดาวน์การมีปฏิสัมพันธ์ระหว่างแมวอย่างน้อย 15 วินาที
    if (now - this.lastInteractionTime < 15000) return;

    const dist = Math.hypot(pet1.x - pet2.x, pet1.y - pet2.y);
    if (dist > 95) return;

    // ตรวจสอบบุคลิกภาพของทั้งสองตัว
    const p1 = pet1.personality || { sociability: 50, affection: 50, energy: 50, intelligence: 50 };
    const p2 = pet2.personality || { sociability: 50, affection: 50, energy: 50, intelligence: 50 };

    this.lastInteractionTime = now;

    // ทั้งคู่หันหน้าเข้าหากันและหยุดอยู่นิ่งๆ เพื่อสนทนา
    pet1.targetX = null;
    pet1.targetY = null;
    pet2.targetX = null;
    pet2.targetY = null;
    pet1.facing = pet1.x < pet2.x ? 'right' : 'left';
    pet2.facing = pet2.x < pet1.x ? 'right' : 'left';
    PetRenderer.updatePetVisuals(pet1.el, pet1);
    PetRenderer.updatePetVisuals(pet2.el, pet2);

    // กรณีมีตัวใดตัวหนึ่งรักสันโดษมาก (Antisocial < 30) และหยิ่ง (Affection < 35)
    if (p1.sociability < 30 || p2.sociability < 30) {
      const antisocialPet = p1.sociability < 30 ? pet1 : pet2;
      const otherPet = antisocialPet === pet1 ? pet2 : pet1;

      antisocialPet.state = 'sit';
      PetRenderer.updatePetVisuals(antisocialPet.el, antisocialPet);
      if (spawnFxCallback) spawnFxCallback('sweat', antisocialPet.x + 35, antisocialPet.y + 10);

      const msgs = PET_DIALOGUES.antisocialThoughts;
      const msg = msgs[Math.floor(Math.random() * msgs.length)];
      if (sayCallback) sayCallback(antisocialPet, msg, 4000);

      // เดินถอยหนีหลังจากพูดเสร็จสิ้นเท่านั้น (ไม่ขยับขณะพูด)
      setTimeout(() => {
        if (!antisocialPet.isDragged && !antisocialPet.isSpeaking) {
          const retreatX = Math.max(50, Math.min(window.innerWidth - 100, antisocialPet.x + (antisocialPet.x < otherPet.x ? -100 : 100)));
          antisocialPet.targetX = retreatX;
          if (Math.abs(retreatX - antisocialPet.x) > 2) {
            antisocialPet.facing = retreatX > antisocialPet.x ? 'right' : 'left';
          }
          antisocialPet.state = 'walk';
          PetRenderer.updatePetVisuals(antisocialPet.el, antisocialPet);
        }
      }, 4300);
      return;
    }

    // กรณีหยอกล้อ กระโดดงับคอ (Playful Pounce & Neck-Bite Sequence)
    if ((p1.energy >= 50 || p2.energy >= 50) && Math.random() < 0.35) {
      const attacker = (p1.energy >= p2.energy) ? pet1 : pet2;
      const target = attacker === pet1 ? pet2 : pet1;

      attacker.state = 'pounce_play';
      attacker.facing = attacker.x < target.x ? 'right' : 'left';
      target.state = 'sit';
      target.facing = attacker.facing === 'right' ? 'left' : 'right';
      PetRenderer.updatePetVisuals(attacker.el, attacker);
      PetRenderer.updatePetVisuals(target.el, target);

      if (spawnFxCallback) {
        spawnFxCallback('star', (attacker.x + target.x) / 2 + 35, Math.min(attacker.y, target.y) + 10);
      }

      const initLines = PET_DIALOGUES.neckBiteInitiator || ['แฮ่! โดดงับคอ {other} ซะเลย! หง่ำๆๆ!'];
      const initRaw = initLines[Math.floor(Math.random() * initLines.length)];
      const initMsg = formatDialogue(initRaw, { petName: attacker.name, otherPetName: target.name });

      if (sayCallback) {
        sayCallback(attacker, initMsg, 3500);
      }

      setTimeout(() => {
        if (!target.isDragged && !target.isSpeaking) {
          const recLines = PET_DIALOGUES.neckBiteReceiver || ['เหวอออ! {name} เล่นอะไรเนี่ย คอเกือบเคล็ดแล้วนะ!'];
          const recRaw = recLines[Math.floor(Math.random() * recLines.length)];
          const recMsg = formatDialogue(recRaw, { petName: attacker.name, otherPetName: target.name });
          target.state = 'groom';
          PetRenderer.updatePetVisuals(target.el, target);
          if (sayCallback) {
            sayCallback(target, recMsg, 3500);
          }
        }
      }, 3800);
      return;
    }

    // กรณีทั้งคู่พลังงานสูง (Energy > 65) -> ทักทายกันจนจบก่อน ค่อยออกวิ่งไล่จับกัน
    if (p1.energy > 65 && p2.energy > 65 && Math.random() < 0.45) {
      pet1.state = 'sit';
      pet2.state = 'sit';
      PetRenderer.updatePetVisuals(pet1.el, pet1);
      PetRenderer.updatePetVisuals(pet2.el, pet2);

      if (sayCallback) {
        sayCallback(pet1, `${pet2.name} มาวิ่งแข่งกันรอบหน้าจอมะ ใครแพ้จ่ายปลาทู!`, 3500);
      }

      // วิ่งหลังจากข้อความพูดหายไปแล้วเท่านั้น (ไม่ขยับขณะแสดงกล่องข้อความ)
      setTimeout(() => {
        if (!pet1.isDragged && !pet2.isDragged && !pet1.isSpeaking && !pet2.isSpeaking) {
          pet1.state = 'run';
          pet2.state = 'run';
          const targetX = Math.max(60, Math.min(window.innerWidth - 160, pet1.x + (pet1.facing === 'right' ? 180 : -180)));
          pet1.targetX = targetX;
          if (Math.abs(targetX - pet1.x) > 2) {
            pet1.facing = targetX > pet1.x ? 'right' : 'left';
          }
          const target2X = targetX + (pet1.facing === 'right' ? -50 : 50);
          pet2.targetX = target2X;
          if (Math.abs(target2X - pet2.x) > 2) {
            pet2.facing = target2X > pet2.x ? 'right' : 'left';
          }
          PetRenderer.updatePetVisuals(pet1.el, pet1);
          PetRenderer.updatePetVisuals(pet2.el, pet2);
        }
      }, 3800);
      return;
    }

    const g1 = pet1.gender || 'male';
    const g2 = pet2.gender || 'male';
    let genderPairKey = null;
    if ((g1 === 'male' && g2 === 'female') || (g1 === 'female' && g2 === 'male')) {
      genderPairKey = 'male_female';
    } else if (g1 === 'male' && g2 === 'male') {
      genderPairKey = 'male_male';
    } else if (g1 === 'female' && g2 === 'female') {
      genderPairKey = 'female_female';
    }

    // กรณีทั้งคู่ขี้เกียจ/พลังงานต่ำ -> นอนกอดกันกลมๆ (Cuddle loaf)
    if ((p1.diligence < 40 || p1.energy < 40) && (p2.diligence < 40 || p2.energy < 40) && Math.random() < 0.5) {
      pet1.state = 'sleep_loaf';
      pet2.state = 'sleep_loaf';
      PetRenderer.updatePetVisuals(pet1.el, pet1);
      PetRenderer.updatePetVisuals(pet2.el, pet2);

      if (spawnFxCallback) {
        spawnFxCallback('heart', (pet1.x + pet2.x) / 2 + 35, Math.min(pet1.y, pet2.y) + 10);
      }
      if (sayCallback) {
        const cuddleMsg = (g1 === 'male' && g2 === 'female')
          ? `นอนเบียดกันตรงนี้นะ ${pet2.name} ตัวเธออุ่นเหมือนเตาผิงเลยฮะ`
          : (g1 === 'female' && g2 === 'male')
          ? `นอนกอดกันตรงนี้นะ ${pet2.name} ตัวนายอุ่นจังเลยนะจ๊ะ`
          : `นอนเบียดกันตรงนี้นะ ${pet2.name} ตัวนายอุ่นเหมือนเตาผิงเลย`;
        sayCallback(pet1, cuddleMsg, 4500);
      }
      return;
    }

    // กรณีสนทนาแลกเปลี่ยนตามคู่เพศ หรือตามบุคลิกภาพ (Dynamic Gender & Personality Pair Dialogue)
    let chosenList = PET_DIALOGUES.multiPet;
    if (genderPairKey && PET_DIALOGUES.genderPairChats && PET_DIALOGUES.genderPairChats[genderPairKey] && Math.random() < 0.6) {
      chosenList = PET_DIALOGUES.genderPairChats[genderPairKey];
    } else if (p1.intelligence >= 65 && p2.intelligence <= 35) {
      chosenList = PET_DIALOGUES.personalityPairChats.smart_derpy;
    } else if (p1.energy >= 65 && p2.energy <= 35) {
      chosenList = PET_DIALOGUES.personalityPairChats.energy_lazy;
    } else if (p1.affection >= 65 && p2.affection <= 35) {
      chosenList = PET_DIALOGUES.personalityPairChats.affection_aloof;
    } else if (p1.sociability >= 65 && p2.sociability <= 35) {
      chosenList = PET_DIALOGUES.personalityPairChats.social_antisocial;
    }

    const rawMsg = chosenList[Math.floor(Math.random() * chosenList.length)];
    const text = formatDialogue(rawMsg, { petName: pet1.name, otherPetName: pet2.name, gender: g1, pet: pet1 });

    pet1.state = 'sit';
    pet2.state = 'sit';
    PetRenderer.updatePetVisuals(pet1.el, pet1);
    PetRenderer.updatePetVisuals(pet2.el, pet2);

    if (spawnFxCallback) {
      spawnFxCallback('heart', (pet1.x + pet2.x) / 2 + 35, pet1.y + 10);
    }
    if (sayCallback) {
      sayCallback(pet1, text, 4500);
    }
  },

  // Facade method matching PROJECT.md interface contract
  checkMultiPetInteractions(petA, petB, dt, sayCallback, spawnFxCallback) {
    return this.checkSocialInteraction(petA, petB, sayCallback, spawnFxCallback);
  }
};
