// ผู้จัดการระบบสัตว์เลี้ยงหน้าจอ (Desktop Pet Manager - Orchestrator Facade)
// ประสานงานระหว่าง Engine, Physics, AI Personality, Social Dynamics, Environment, และ UI

import { Store } from '../core/store.js';
import { State } from '../core/state.js';
import { PET_BREEDS, TAIL_TYPES, BODY_BUILDS } from './pet-breeds.js';
import { PetPersonality } from './pet-personality.js';
import { PET_DIALOGUES, getRandomDialogue, formatDialogue } from './pet-dialogues.js';
import { PetEnvironment } from './pet-environment.js';
import { PetRenderer } from './pet-render.js';
import { PetSocial } from './pet-social.js';
import { PetUI } from './pet-ui.js';

export const PetManager = {
  pets: [],
  settings: {
    enabled: true,
    speechFreq: 'normal', // 'often', 'normal', 'rare', 'off'
    speechDuration: 'normal', // 'normal', 'long', 'extra'
    speechFontSize: 'normal', // 'small', 'normal', 'large', 'xlarge'
    readingReminderMins: 30,
    petScale: 1.0
  },
  environment: PetEnvironment,
  layerEl: null,
  dockBtnEl: null,
  readingStartTime: Date.now(),
  lastUserActivity: Date.now(),
  mousePos: { x: -999, y: -999 },
  loopTimer: null,
  fatigueTriggered: false,

  // 1. การเริ่มต้นระบบ
  async init() {
    try {
      this.ensureLayer();
      this.setupDockButton();

      // เริ่มต้นระบบสภาพแวดล้อมและของเล่น
      await this.environment.init(this.layerEl);

      // โหลดข้อมูลแมวและตั้งค่า
      await this.loadState();

      // ตรวจจับการขยับเมาส์/แป้นพิมพ์
      const onAct = (e) => {
        this.lastUserActivity = Date.now();
        if (e && typeof e.clientX === 'number') {
          this.mousePos.x = e.clientX;
          this.mousePos.y = e.clientY;
        }
      };
      window.addEventListener('mousemove', onAct, { passive: true });
      window.addEventListener('keydown', onAct, { passive: true });
      window.addEventListener('scroll', onAct, { passive: true });

      // ปิด Context Menu เมื่อคลิกที่อื่น
      window.addEventListener('pointerdown', (e) => {
        if (PetUI.activeContextMenu && !PetUI.activeContextMenu.contains(e.target)) {
          PetUI.closeContextMenu();
        }
      });

      // ปรับขนาดหน้าจอเมื่อ resize
      window.addEventListener('resize', () => {
        this.pets.forEach(p => {
          p.x = Math.max(10, Math.min(window.innerWidth - 90, p.x));
          p.y = Math.max(10, Math.min(window.innerHeight - 80, p.y));
          this.updatePetDomPosition(p);
        });
      });

      // เริ่ม Loop ควบคุม AI และฟิสิกส์
      this.startLoop();
      this.applySpeechFontSize();
      console.log(`[PetManager] Initialized with ${this.pets.length} cats and environment props.`);
    } catch (err) {
      console.warn('[PetManager] init error:', err.message);
    }
  },

  // สร้างเลเยอร์ครอบทั้งจอ
  ensureLayer() {
    let layer = document.getElementById('desktop-pet-layer');
    if (!layer) {
      layer = document.createElement('div');
      layer.id = 'desktop-pet-layer';
      document.body.appendChild(layer);
    }
    this.layerEl = layer;
  },

  // สร้างปุ่มอุ้งเท้าขวาล่างสำหรับเปิดจัดการสัตว์เลี้ยง
  setupDockButton() {
    let btn = document.getElementById('btn-pet-dock');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'btn-pet-dock';
      btn.type = 'button';
      btn.title = 'บ้านสัตว์เลี้ยงหน้าจอ (คลิกเพื่อเปิดศูนย์รวมใจชาวแมว)';
      btn.setAttribute('aria-label', 'จัดการสัตว์เลี้ยงหน้าจอ');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24">
          <ellipse cx="12" cy="15" rx="5.5" ry="4.5"/>
          <circle cx="6.5" cy="9.5" r="2.2"/>
          <circle cx="10" cy="6.5" r="2.2"/>
          <circle cx="14" cy="6.5" r="2.2"/>
          <circle cx="17.5" cy="9.5" r="2.2"/>
        </svg>
        <span class="pet-badge-count" id="pet-badge-count">0</span>
      `;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openManagementModal();
      });
      document.body.appendChild(btn);
    }
    this.dockBtnEl = btn;
    this.updateDockBadge();
  },

  updateDockBadge() {
    const badge = document.getElementById('pet-badge-count');
    if (badge) {
      badge.textContent = this.pets.length;
      badge.style.display = this.pets.length > 0 ? 'flex' : 'none';
    }
  },

  applySpeechFontSize() {
    const sizeMap = { small: '11px', normal: '12.5px', large: '14.5px', xlarge: '17px' };
    const maxWidthMap = { small: '240px', normal: '260px', large: '290px', xlarge: '320px' };
    const sz = this.settings.speechFontSize || 'normal';
    document.documentElement.style.setProperty('--pet-speech-size', sizeMap[sz] || '12.5px');
    document.documentElement.style.setProperty('--pet-speech-max-w', maxWidthMap[sz] || '260px');
  },

  // 2. โหลดและบันทึกสถานะ
  async loadState() {
    try {
      const savedPets = await Store.get('pets');
      const savedSettings = await Store.get('pet_settings');

      if (savedSettings && typeof savedSettings === 'object') {
        this.settings = { ...this.settings, ...savedSettings };
      }

      if (Array.isArray(savedPets) && savedPets.length > 0) {
        this.pets = savedPets.map(p => this.createPetInstance(p));
      } else {
        // แมวเริ่มต้นตัวแรก: แมวขาวแต้มหูน้ำตาล
        const defaultCat = this.createPetInstance({
          id: 'pet_' + Date.now(),
          name: 'เจ้าแต้มหู',
          breed: 'white_brown_ears',
          tailType: 'curved',
          build: 'normal',
          personality: {
            intelligence: 75,
            diligence: 70,
            energy: 65,
            talkativeness: 60,
            affection: 80,
            sociability: 75
          },
          x: Math.max(80, window.innerWidth - 180),
          y: Math.max(100, window.innerHeight - 130),
          facing: 'left',
          scale: this.settings.petScale || 1
        });
        this.pets = [defaultCat];
        this.saveState();
      }

      this.renderAllPets();
      this.updateDockBadge();
    } catch (e) {
      console.warn('[PetManager] loadState error:', e.message);
    }
  },

  async saveState() {
    try {
      const petsData = this.pets.map(p => ({
        id: p.id,
        name: p.name,
        breed: p.breed,
        tailType: p.tailType,
        build: p.build,
        personality: p.personality,
        x: Math.round(p.x),
        y: Math.round(p.y),
        facing: p.facing,
        scale: p.scale,
        isStaying: p.isStaying
      }));
      await Store.set('pets', petsData);
      await Store.set('pet_settings', this.settings);
    } catch (e) {
      console.warn('[PetManager] saveState error:', e.message);
    }
  },

  // สร้าง Object ข้อมูลของแมวแต่ละตัว พร้อมรองรับ Backward Compatibility
  createPetInstance(data) {
    const breedKey = data.breed || 'white_brown_ears';
    const breedInfo = PET_BREEDS[breedKey] || PET_BREEDS.white_brown_ears;

    return {
      id: data.id || 'pet_' + Math.random().toString(36).substring(2, 9),
      name: data.name || 'น้องแมว',
      breed: breedKey,
      tailType: data.tailType || breedInfo.defaultTail || 'long',
      build: data.build || breedInfo.defaultBuild || 'normal',
      personality: data.personality || PetPersonality.generateRandomStats(),
      x: typeof data.x === 'number' ? data.x : Math.random() * (window.innerWidth - 120),
      y: typeof data.y === 'number' ? data.y : window.innerHeight - 130,
      vx: 0,
      vy: 0,
      targetX: null,
      targetY: null,
      facing: data.facing || 'right',
      state: 'stand', // 'stand', 'walk', 'run', 'sit', 'sleep_loaf', 'sleep_curl', 'sleep_belly', 'groom', 'stretch', 'scratch', 'pounce', 'play_toy', 'in_box', 'on_condo', 'begging', 'eating', 'carry_fish', 'derpy_yawn', 'derpy_stare'
      scale: data.scale || this.settings.petScale || 1,
      isDragged: false,
      isBlocked: false,
      isStaying: !!data.isStaying,
      stateTimer: 0,
      speechTimer: 0,
      el: null
    };
  },

  // 3. เรนเดอร์แมวลงในหน้าจอ
  renderAllPets() {
    if (!this.layerEl) return;
    const existing = this.layerEl.querySelectorAll('.desktop-pet');
    existing.forEach(el => el.remove());

    this.pets.forEach(pet => {
      const el = PetRenderer.createPetElement(pet);
      pet.el = el;
      this.bindPetEvents(el, pet);
      this.layerEl.appendChild(el);
      this.updatePetDomPosition(pet);
    });
  },

  updatePetDomPosition(pet) {
    if (!pet.el) return;
    pet.el.style.transform = `translate3d(${pet.x}px, ${pet.y}px, 0)`;
  },

  // 4. ผูก Interaction และ Drag & Drop
  bindPetEvents(el, pet) {
    let startX = 0, startY = 0;
    let initialPetX = 0, initialPetY = 0;
    let isClick = true;

    const onPointerDown = (e) => {
      // คลิกขวา -> เปิดเมนูบริบท
      if (e.button === 2) {
        e.preventDefault();
        e.stopPropagation();
        this.openContextMenu(e.clientX, e.clientY, pet);
        return;
      }
      if (e.button !== 0) return;

      isClick = true;
      startX = e.clientX;
      startY = e.clientY;
      initialPetX = pet.x;
      initialPetY = pet.y;

      pet.isDragged = true;
      pet.vx = 0;
      pet.vy = 0;
      pet.targetX = null;
      PetRenderer.updatePetVisuals(el, pet);

      // ข้อความเมื่อถูกหิ้ว
      this.say(pet, getRandomDialogue('dragged', { petName: pet.name }), 3000);

      const onPointerMove = (moveEvt) => {
        const dx = moveEvt.clientX - startX;
        const dy = moveEvt.clientY - startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
          isClick = false;
        }
        pet.x = Math.max(10, Math.min(window.innerWidth - 90, initialPetX + dx));
        pet.y = Math.max(10, Math.min(window.innerHeight - 80, initialPetY + dy));
        this.updatePetDomPosition(pet);
      };

      const onPointerUp = () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);

        pet.isDragged = false;
        pet.state = 'stand';
        pet.stateTimer = 0;
        PetRenderer.updatePetVisuals(el, pet);
        this.saveState();

        // หากเป็นการคลิกโดยไม่ลาก -> เกาคาง/จั๊กจี้
        if (isClick) {
          this.ticklePet(pet);
        }
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openContextMenu(e.clientX, e.clientY, pet);
    });
  },

  // 5. เกาคาง / ลูบพุง
  ticklePet(pet) {
    PetUI.spawnFx('heart', pet.x + 35, pet.y + 10, this.layerEl);
    pet.state = 'sit';
    pet.stateTimer = 0;
    PetRenderer.updatePetVisuals(pet.el, pet);

    // เลือกบทสนทนาอิงความขี้อ้อน
    const aff = pet.personality?.affection || 50;
    let msg = '';
    if (aff <= 30) {
      msg = 'ไม่ได้อยากให้เกาหรอกนะ... แต่คันตรงนี้พอดีหรอกย่ะ!';
    } else {
      msg = getRandomDialogue('touchTickle', { petName: pet.name });
    }
    this.say(pet, msg, 4000);
  },

  // 6. การให้อาหาร
  feedPet(pet) {
    const bowlX = pet.facing === 'right' ? pet.x + 75 : pet.x - 40;
    const bowlY = pet.y + 35;
    const bowlEl = PetRenderer.createFoodBowlElement(bowlX, bowlY);
    this.layerEl.appendChild(bowlEl);

    pet.state = 'eating';
    pet.stateTimer = 0;
    PetRenderer.updatePetVisuals(pet.el, pet);

    const feedMsg = getRandomDialogue('feeding', { petName: pet.name });
    this.say(pet, feedMsg, 4500);
    PetUI.spawnFx('heart', pet.x + 35, pet.y + 15, this.layerEl);

    setTimeout(() => {
      if (bowlEl.parentNode) bowlEl.remove();
      if (pet.state === 'eating') {
        pet.state = 'sit';
        PetRenderer.updatePetVisuals(pet.el, pet);
      }
    }, 4500);
  },

  // 7. การพูดคุยและการแสดงกล่องคำพูดการ์ตูน
  say(pet, text, duration = null) {
    if (this.settings.speechFreq === 'off' || !pet || !pet.el || !text) return;
    const bubbleWrap = pet.el.querySelector('.pet-bubble-wrap');
    const bubbleText = pet.el.querySelector('.pet-bubble');
    if (!bubbleWrap || !bubbleText) return;

    bubbleText.textContent = text;
    bubbleWrap.classList.add('show');
    bubbleWrap.title = 'คลิกเพื่อปิดข้อความนี้';

    // จัดทิศทางกล่องไม่ให้ล้นออกนอกจอ
    const petRect = pet.el.getBoundingClientRect();
    if (petRect.left < 80) {
      bubbleWrap.style.left = '20px';
      bubbleWrap.style.transform = 'none';
    } else if (petRect.right > window.innerWidth - 120) {
      bubbleWrap.style.left = 'auto';
      bubbleWrap.style.right = '10px';
      bubbleWrap.style.transform = 'none';
    } else {
      bubbleWrap.style.left = '50%';
      bubbleWrap.style.right = 'auto';
      bubbleWrap.style.transform = 'translateX(-50%)';
    }

    if (!bubbleWrap._boundClick) {
      bubbleWrap._boundClick = true;
      bubbleWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        bubbleWrap.classList.remove('show');
        if (pet._bubbleHideTimer) clearTimeout(pet._bubbleHideTimer);
      });
    }

    let actualDuration = duration;
    if (!actualDuration || actualDuration < 8000) {
      const len = text.length;
      let baseTime = 8500;
      let multiplier = 160;
      if (this.settings.speechDuration === 'long') {
        baseTime = 12000;
        multiplier = 200;
      } else if (this.settings.speechDuration === 'extra') {
        baseTime = 16000;
        multiplier = 250;
      }
      actualDuration = Math.max(baseTime, Math.min(25000, baseTime + len * multiplier));
    }

    if (pet._bubbleHideTimer) clearTimeout(pet._bubbleHideTimer);
    pet._bubbleHideTimer = setTimeout(() => {
      bubbleWrap.classList.remove('show');
    }, actualDuration);
  },

  // 8. ปล่อยผีเสื้อ / จิ้งจก
  spawnButterflyNear(targetPet) {
    const startX = targetPet ? targetPet.x + (Math.random() > 0.5 ? 120 : -120) : window.innerWidth / 2;
    const startY = targetPet ? targetPet.y - 40 : window.innerHeight - 150;
    const bId = Date.now();
    const bEl = PetRenderer.createButterflyElement(bId, startX, startY);
    this.layerEl.appendChild(bEl);

    if (targetPet && !targetPet.isDragged) {
      targetPet.state = 'pounce';
      targetPet.facing = startX > targetPet.x ? 'right' : 'left';
      PetRenderer.updatePetVisuals(targetPet.el, targetPet);
      this.say(targetPet, 'มีผีเสื้อบินมา! ขอเหมียวกระโดดตะครุบแป๊บ!', 3500);
    }

    let t = 0;
    const flyInterval = setInterval(() => {
      t += 0.05;
      const curX = startX + Math.sin(t * 3) * 70 + t * 40;
      const curY = startY + Math.cos(t * 4) * 35 - t * 20;
      bEl.style.left = `${curX}px`;
      bEl.style.top = `${curY}px`;

      if (t > 4 || curY < -30 || curX > window.innerWidth + 40) {
        clearInterval(flyInterval);
        bEl.remove();
        if (targetPet && targetPet.state === 'pounce') {
          targetPet.state = 'sit';
          PetRenderer.updatePetVisuals(targetPet.el, targetPet);
        }
      }
    }, 50);
  },

  spawnGeckoNear(targetPet) {
    const startX = targetPet ? (targetPet.facing === 'right' ? targetPet.x + 140 : targetPet.x - 140) : window.innerWidth - 200;
    const startY = targetPet ? targetPet.y + 35 : window.innerHeight - 80;
    const gId = Date.now();
    const gEl = PetRenderer.createGeckoElement(gId, startX, startY);
    this.layerEl.appendChild(gEl);

    if (targetPet && !targetPet.isDragged) {
      targetPet.state = 'run';
      targetPet.targetX = startX;
      targetPet.facing = startX > targetPet.x ? 'right' : 'left';
      PetRenderer.updatePetVisuals(targetPet.el, targetPet);
      this.say(targetPet, 'จิ้งจกอ้วน! อย่าหนีนะเหมียว!', 3000);
    }

    let curX = startX;
    const geckoDir = (targetPet && targetPet.x > startX) ? -1 : 1;
    const runInterval = setInterval(() => {
      curX += geckoDir * 6;
      gEl.style.left = `${curX}px`;
      if (curX < -40 || curX > window.innerWidth + 40) {
        clearInterval(runInterval);
        gEl.remove();
      }
    }, 40);
  },

  // 9. ตรวจจับการเปิดเอกสาร
  onDocumentOpened(node) {
    if (!node || !this.pets.length) return;
    this.readingStartTime = Date.now();
    this.fatigueTriggered = false;

    this.pets.forEach(p => {
      if (p.isBlocked) {
        p.isBlocked = false;
        p.state = 'stand';
        PetRenderer.updatePetVisuals(p.el, p);
      }
    });

    const chosenPet = this.pets[Math.floor(Math.random() * this.pets.length)];
    const ext = node.name ? node.name.split('.').pop().toLowerCase() : '';
    let fileTypeKey = 'md';
    if (ext === 'pdf') fileTypeKey = 'pdf';
    else if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) fileTypeKey = 'img';
    else if (['js', 'html', 'css', 'json', 'py', 'ts'].includes(ext)) fileTypeKey = 'code';

    setTimeout(() => {
      if (Math.random() < 0.6) {
        const msg = getRandomDialogue('fileType', {
          petName: chosenPet.name,
          docName: node.name,
          fileType: fileTypeKey
        });
        this.say(chosenPet, msg);
      } else {
        const msg = getRandomDialogue('docContext', {
          petName: chosenPet.name,
          docName: node.name
        });
        this.say(chosenPet, msg);
      }
    }, 1200);
  },

  // 10. เตือนพักสายตา / นอนทับจอ
  checkReadingFatigue() {
    if (this.fatigueTriggered || !this.pets.length) return;
    const elapsedMinutes = (Date.now() - this.readingStartTime) / (1000 * 60);
    const limit = this.settings.readingReminderMins || 30;

    if (elapsedMinutes >= limit) {
      this.fatigueTriggered = true;
      const blockerPet = this.pets[0];

      // เดินมาตรงกลางจอเพื่อบังเตือน
      const readerEl = document.getElementById('reader');
      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight / 2;
      if (readerEl) {
        const rect = readerEl.getBoundingClientRect();
        targetX = rect.left + rect.width / 2 - 45;
        targetY = rect.top + rect.height / 2 - 35;
      }

      blockerPet.targetX = targetX;
      blockerPet.targetY = targetY;
      blockerPet.state = 'walk';
      blockerPet.isBlocked = true;
      PetRenderer.updatePetVisuals(blockerPet.el, blockerPet);

      const msg = getRandomDialogue('fatigue', { petName: blockerPet.name });
      this.say(blockerPet, msg, 14000);
    }
  },

  // 11. Main Behavior & Physics Loop
  startLoop() {
    if (this.loopTimer) clearInterval(this.loopTimer);

    this.loopTimer = setInterval(() => {
      this.tick();
    }, 100);
  },

  tick() {
    const now = Date.now();
    this.checkReadingFatigue();

    // ประมวลผลสัตว์เลี้ยงทีละตัว
    this.pets.forEach(pet => {
      if (pet.isDragged) return;

      pet.stateTimer += 100;
      pet.speechTimer += 100;

      // 1. การเคลื่อนที่ไปยัง Target
      if (pet.targetX !== null) {
        const dx = pet.targetX - pet.x;
        const dy = pet.targetY !== null ? pet.targetY - pet.y : 0;
        const dist = Math.hypot(dx, dy);

        const walkSpeed = PetPersonality.calculateWalkSpeed(pet) * (pet.state === 'run' ? 2.2 : 1.0);

        if (dist > 5) {
          pet.facing = dx > 0 ? 'right' : 'left';
          pet.x += (dx / dist) * walkSpeed * 3;
          if (pet.targetY !== null) {
            pet.y += (dy / dist) * walkSpeed * 3;
          }
          this.updatePetDomPosition(pet);
        } else {
          pet.targetX = null;
          pet.targetY = null;
          if (pet.isBlocked) {
            pet.state = 'sleep_belly';
          } else {
            pet.state = 'sit';
          }
          PetRenderer.updatePetVisuals(pet.el, pet);
        }
      }

      // 2. การเปลี่ยนท่าทางอัตโนมัติ (AI State Machine)
      if (!pet.isStaying && !pet.isBlocked && pet.targetX === null) {
        if (pet.stateTimer > 7000 + Math.random() * 9000) {
          pet.stateTimer = 0;
          this.decideNextPetAction(pet);
        }
      }

      // 3. การพูดคุยตามความถี่
      let speechInterval = 40000;
      if (this.settings.speechFreq === 'often') speechInterval = 22000;
      else if (this.settings.speechFreq === 'rare') speechInterval = 80000;

      if (this.settings.speechFreq !== 'off' && pet.speechTimer > speechInterval) {
        pet.speechTimer = 0;
        this.triggerRandomPetSpeech(pet);
      }
    });

    // 4. ตรวจจับการพบกันระหว่างแมวหลายตัว
    if (this.pets.length >= 2) {
      for (let i = 0; i < this.pets.length; i++) {
        for (let j = i + 1; j < this.pets.length; j++) {
          PetSocial.checkSocialInteraction(
            this.pets[i],
            this.pets[j],
            (p, txt, dur) => this.say(p, txt, dur),
            (type, x, y) => PetUI.spawnFx(type, x, y, this.layerEl)
          );
        }
      }
    }
  },

  // ตัดสินใจการกระทำถัดไปของแมว (อิง 6 แกนนิสัย & เฟอร์นิเจอร์)
  decideNextPetAction(pet) {
    const p = pet.personality || { energy: 50, diligence: 50, affection: 50 };

    // เช็คสภาพแวดล้อมใกล้ตัว (เตียง, กล่อง, คอนโด, ไหมพรม, ที่ฝนเล็บ)
    const nearestEnv = this.environment.findNearestInteractiveItem(pet, 180);

    // แมวง่วง / ขี้เกียจ -> แวะไปนอนที่เบาะ หรือมุดกล่อง
    if (nearestEnv && PetPersonality.prefersResting(pet) && Math.random() < 0.45) {
      if (nearestEnv.item.type === 'cat_bed') {
        pet.targetX = nearestEnv.item.x + 10;
        pet.targetY = nearestEnv.item.y - 10;
        pet.state = 'walk';
        PetRenderer.updatePetVisuals(pet.el, pet);
        return;
      } else if (nearestEnv.item.type === 'cat_house') {
        pet.targetX = nearestEnv.item.x + 15;
        pet.targetY = nearestEnv.item.y - 12;
        pet.state = 'walk';
        PetRenderer.updatePetVisuals(pet.el, pet);
        return;
      } else if (nearestEnv.item.type === 'cat_condo') {
        pet.targetX = nearestEnv.item.x + 35;
        pet.targetY = nearestEnv.item.y - 30;
        pet.state = 'walk';
        PetRenderer.updatePetVisuals(pet.el, pet);
        return;
      }
    }

    // แมวซน / พลังงานสูง -> แวะไปเล่นลูกบอลไหมพรม หรือฝนเล็บ
    if (nearestEnv && PetPersonality.prefersToyPlay(pet) && Math.random() < 0.5) {
      if (nearestEnv.item.type === 'cat_toy_yarn') {
        pet.state = 'play_toy';
        PetRenderer.updatePetVisuals(pet.el, pet);
        this.environment.rollYarnBall(pet.facing === 'right' ? 6 : -6);
        return;
      } else if (nearestEnv.item.type === 'cat_scratcher') {
        pet.state = 'scratch';
        PetRenderer.updatePetVisuals(pet.el, pet);
        PetUI.spawnFx('star', pet.x + 35, pet.y + 10, this.layerEl);
        return;
      }
    }

    // ติดตามเคอร์เซอร์เมาส์ถ้าขี้อ้อน
    if (this.mousePos.x > 0 && PetPersonality.shouldFollowCursor(pet)) {
      pet.targetX = Math.max(30, Math.min(window.innerWidth - 100, this.mousePos.x + (Math.random() > 0.5 ? 40 : -40)));
      pet.state = 'walk';
      PetRenderer.updatePetVisuals(pet.el, pet);
      return;
    }

    // สุ่มท่าทางทั่วไป
    const r = Math.random();
    if (r < 0.3) {
      // เดินเล่นสุ่มจุด
      pet.targetX = Math.max(40, Math.min(window.innerWidth - 120, pet.x + (Math.random() - 0.5) * 260));
      pet.state = 'walk';
    } else if (r < 0.5) {
      // นั่งมองรอบตัว
      pet.state = 'sit';
    } else if (r < 0.65) {
      // เลียแต่งขน
      pet.state = 'groom';
    } else if (r < 0.8) {
      // นอนก้อนขนมปัง
      pet.state = 'sleep_loaf';
    } else if (r < 0.9) {
      // หาวววว
      pet.state = 'derpy_yawn';
    } else {
      // นอนหงายแผ่พุง
      pet.state = 'sleep_belly';
    }
    PetRenderer.updatePetVisuals(pet.el, pet);
  },

  // สุ่มคำพูดอิงตามเวลาและ 6 แกนนิสัย
  triggerRandomPetSpeech(pet) {
    const hour = new Date().getHours();
    let category = 'personality';

    if (Math.random() < 0.45) {
      if (hour >= 6 && hour < 12) category = 'timeMorning';
      else if (hour >= 12 && hour < 17) category = 'timeAfternoon';
      else if (hour >= 17 && hour < 21) category = 'timeEvening';
      else category = 'timeNight';
    }

    const text = getRandomDialogue(category, {
      petName: pet.name,
      docName: State.current?.name,
      pet
    });
    this.say(pet, text);
  },

  // 12. รับเลี้ยงแมวใหม่
  addNewPet(options = {}) {
    const breedKeys = Object.keys(PET_BREEDS);
    const breed = options.breed || breedKeys[Math.floor(Math.random() * breedKeys.length)];
    const name = options.name || RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
    const tailType = options.tailType || PET_BREEDS[breed]?.defaultTail || 'long';
    const build = options.build || PET_BREEDS[breed]?.defaultBuild || 'normal';
    const personality = options.personality || PetPersonality.generateRandomStats();

    const newPet = this.createPetInstance({
      id: 'pet_' + Date.now(),
      name,
      breed,
      tailType,
      build,
      personality,
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 160,
      y: window.innerHeight - 130,
      scale: this.settings.petScale || 1
    });

    this.pets.push(newPet);
    const el = PetRenderer.createPetElement(newPet);
    newPet.el = el;
    this.bindPetEvents(el, newPet);
    this.layerEl.appendChild(el);
    this.updatePetDomPosition(newPet);

    this.updateDockBadge();
    this.saveState();

    PetUI.spawnFx('heart', newPet.x + 35, newPet.y + 10, this.layerEl);
    this.say(newPet, `สวัสดีทาส! เหมียวชื่อ "${newPet.name}" ขอมาอยู่ด้วยคนนะ!`, 4500);
    return newPet;
  },

  removePet(petId) {
    const idx = this.pets.findIndex(p => p.id === petId);
    if (idx === -1) return;
    const pet = this.pets[idx];
    if (pet.el) pet.el.remove();
    this.pets.splice(idx, 1);
    this.updateDockBadge();
    this.saveState();
  },

  // 13. การเปิดหน้าต่างจัดการและเมนูบริบท
  openManagementModal() {
    PetUI.openManagementModal(this);
  },

  openContextMenu(x, y, pet) {
    PetUI.openContextMenu(x, y, pet, this);
  }
};
