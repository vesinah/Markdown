// ผู้จัดการระบบสัตว์เลี้ยงหน้าจอ (Desktop Pet Manager - Orchestrator Facade)
// ประสานงานระหว่าง Engine, Physics, AI Personality, Social Dynamics, Environment, และ UI

import { Store } from '../core/store.js';
import { State } from '../core/state.js';
import { PET_BREEDS, TAIL_TYPES, BODY_BUILDS } from './pet-breeds.js';
import { PetPersonality } from './pet-personality.js';
import { PET_DIALOGUES, getRandomDialogue, formatDialogue } from './pet-dialogues.js';
import { PetEnvironment } from './pet-environment.js';
import { PetRenderer } from './pet-render.js';
import { PetHygiene } from './pet-hygiene.js';
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
  hygiene: PetHygiene,
  layerEl: null,
  dockBtnEl: null,
  readingStartTime: Date.now(),
  lastUserActivity: Date.now(),
  mousePos: { x: -999, y: -999 },
  loopTimer: null,
  rafId: null,
  lastRafTime: 0,
  fatigueTriggered: false,
  keystrokes: [],
  lastFastTypingReaction: 0,
  isUserIdle: false,

  // 1. การเริ่มต้นระบบ
  async init() {
    try {
      this.ensureLayer();
      this.setupDockButton();

      // เริ่มต้นระบบสภาพแวดล้อมและของเล่น
      await this.environment.init(this.layerEl);

      // เริ่มต้นระบบสุขอนามัย (Poop & Fly Swarm)
      await PetHygiene.init(this.layerEl, Store);

      // โหลดข้อมูลแมวและตั้งค่า
      await this.loadState();

      // ตรวจจับการขยับเมาส์/แป้นพิมพ์
      const onAct = (e) => {
        this.lastUserActivity = Date.now();
        if (this.isUserIdle) this.isUserIdle = false;
        if (e && typeof e.clientX === 'number') {
          this.mousePos.x = e.clientX;
          this.mousePos.y = e.clientY;
        }
      };
      window.addEventListener('mousemove', onAct, { passive: true });
      window.addEventListener('keydown', (e) => {
        onAct(e);
        this.recordUserKeystroke();
      }, { passive: true });
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

      // ลบแถบเครื่องมือลอยเกะกะ คืนพื้นที่การอ่านเอกสารให้โล่งสะอาดตาตามความต้องการของผู้ใช้
      const existingBar = document.getElementById('pet-control-bar');
      if (existingBar) existingBar.remove();

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
      const visibleCount = this.pets.filter(p => !p.hidden).length;
      badge.textContent = visibleCount;
      badge.style.display = visibleCount > 0 ? 'flex' : 'none';
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
        isStaying: p.isStaying,
        hidden: !!p.hidden
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
      hidden: !!data.hidden,
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
      if (pet.hidden) return;
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

    // ล็อคให้แมวหยุดนิ่งสนิททันทีเมื่อเริ่มพูด เพื่อไม่ให้กล่องคำพูดสั่นไหวและอ่านสบายตา
    pet.isSpeaking = true;
    pet.targetX = null;
    pet.targetY = null;
    if (pet.state === 'walk' || pet.state === 'run' || pet.state === 'pounce') {
      pet.state = 'sit';
    }
    PetRenderer.updatePetVisuals(pet.el, pet);
    this.updatePetDomPosition(pet);

    bubbleText.textContent = text;
    bubbleWrap.classList.add('show');
    bubbleWrap.title = 'คลิกเพื่อปิดข้อความนี้';

    // จัดทิศทางกล่องไม่ให้ล้นออกนอกจอ
    const petRect = (pet.el && typeof pet.el.getBoundingClientRect === 'function') 
      ? pet.el.getBoundingClientRect() 
      : { left: pet.x || 100, right: (pet.x || 100) + 80 };
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
        pet.isSpeaking = false;
        PetRenderer.updatePetVisuals(pet.el, pet);
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
      pet.isSpeaking = false;
      PetRenderer.updatePetVisuals(pet.el, pet);
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
      targetPet.facing = startX > targetPet.x ? 'right' : 'left';
      targetPet.state = 'sit';
      PetRenderer.updatePetVisuals(targetPet.el, targetPet);
      this.say(targetPet, 'จิ้งจกอ้วน! อย่าหนีนะเหมียว!', 3000);

      // เริ่มวิ่งไล่หลังจากพูดจบเรียบร้อยแล้วเท่านั้น เพื่อไม่ให้กล่องคำพูดสั่น
      setTimeout(() => {
        if (targetPet && !targetPet.isDragged && !targetPet.isSpeaking) {
          targetPet.state = 'run';
          targetPet.targetX = startX;
          PetRenderer.updatePetVisuals(targetPet.el, targetPet);
        }
      }, 3200);
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

  // 10.1 ตรวจจับความเร็วการพิมพ์ของผู้ใช้ (Keystroke Velocity Tracker >4 keys/s)
  recordUserKeystroke() {
    const now = Date.now();
    this.lastUserActivity = now;
    if (this.isUserIdle) {
      this.isUserIdle = false;
    }
    this.keystrokes = (this.keystrokes || []).filter(t => now - t < 1500);
    this.keystrokes.push(now);

    // คำนวณความเร็วการพิมพ์ (keys / second)
    if (this.keystrokes.length >= 5) {
      const duration = (now - this.keystrokes[0]) / 1000;
      const rate = (this.keystrokes.length - 1) / Math.max(0.1, duration);
      if (rate > 4.0 && now - (this.lastFastTypingReaction || 0) > 30000 && this.pets.length > 0) {
        this.lastFastTypingReaction = now;
        const chosen = this.pets[Math.floor(Math.random() * this.pets.length)];
        if (!chosen.isSpeaking && !chosen.isDragged) {
          const lines = PET_DIALOGUES.typingSpeedFast || ['พิมพ์เร็วจังทาส! มือเป็นระวิงเลย!'];
          const msg = lines[Math.floor(Math.random() * lines.length)];
          chosen.state = 'two_legged';
          PetRenderer.updatePetVisuals(chosen.el, chosen);
          PetUI.spawnFx('star', chosen.x + 35, chosen.y + 10, this.layerEl);
          this.say(chosen, msg, 4000);
        }
      }
    }
  },

  // 10.2 ตรวจจับเมื่อผู้ใช้ไม่ได้แตะจอ (User Inactivity Monitor >50s)
  checkUserInactivity() {
    const now = Date.now();
    const idleDuration = now - this.lastUserActivity;
    if (idleDuration > 50000 && !this.isUserIdle && this.pets.length > 0) {
      this.isUserIdle = true;
      const chosen = this.pets[Math.floor(Math.random() * this.pets.length)];
      if (!chosen.isSpeaking && !chosen.isDragged) {
        if (Math.random() < 0.6) {
          chosen.state = 'sleep_loaf';
          PetRenderer.updatePetVisuals(chosen.el, chosen);
        }
        const lines = PET_DIALOGUES.userIdle || ['ทาส... แอบหลับไปแล้วเหรอ? เหมียวสะกิดๆ นะ'];
        const msg = lines[Math.floor(Math.random() * lines.length)];
        this.say(chosen, msg, 4500);
      }
    }
  },

  // 11. Main Behavior & Physics Loop (60 FPS Smooth Motion + AI Loop)
  startLoop() {
    if (this.loopTimer) clearInterval(this.loopTimer);
    if (this.rafId && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(this.rafId);
    }

    // 1. วงรอบฟิสิกส์ 60 FPS ด้วย requestAnimationFrame ให้เดินสมูท ลื่นไหล ไม่กระตุก
    const updateMotion = (now) => {
      if (!this.lastRafTime) this.lastRafTime = now;
      const dt = Math.min(0.08, (now - this.lastRafTime) / 1000);
      this.lastRafTime = now;

      this.updateMotionPhysics(dt);

      if (typeof requestAnimationFrame === 'function') {
        this.rafId = requestAnimationFrame(updateMotion);
      }
    };

    if (typeof requestAnimationFrame === 'function') {
      this.lastRafTime = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
      this.rafId = requestAnimationFrame(updateMotion);
    }

    // 2. วงรอบ AI State Machine และตัวจับเวลา (200ms)
    this.loopTimer = setInterval(() => {
      this.tick();
    }, 200);
  },

  updateMotionPhysics(dt) {
    this.pets.forEach(pet => {
      if (pet.hidden || pet.isDragged) return;

      // สำคัญมาก: ห้ามแมวขยับตำแหน่งเด็ดขาดในขณะที่กำลังพูด เพื่อให้กล่องข้อความนิ่งสนิทอ่านสบายตา
      if (pet.isSpeaking) {
        return;
      }

      // การเคลื่อนที่อย่างราบรื่นแบบ 60 FPS
      if (pet.targetX !== null) {
        const dx = pet.targetX - pet.x;
        const dy = pet.targetY !== null ? pet.targetY - pet.y : 0;
        const dist = Math.hypot(dx, dy);

        // ความเร็วพิกเซลต่อวินาที (Smooth continuous velocity via 6-Axis AI Engine)
        const walkSpeed = PetPersonality.getMovementSpeed(pet, 55);
        const step = walkSpeed * dt;

        if (dist > 3) {
          pet.facing = dx > 0 ? 'right' : 'left';
          pet.x += (dx / dist) * Math.min(dist, step);
          if (pet.targetY !== null) {
            pet.y += (dy / dist) * Math.min(dist, step);
          }
          this.updatePetDomPosition(pet);
        } else {
          pet.x = pet.targetX;
          if (pet.targetY !== null) pet.y = pet.targetY;
          pet.targetX = null;
          pet.targetY = null;
          if (pet.targetAction) {
            pet.state = pet.targetAction;
            pet.targetAction = null;
          } else if (pet.isBlocked) {
            pet.state = 'sleep_belly';
          } else {
            pet.state = 'sit';
          }
          PetRenderer.updatePetVisuals(pet.el, pet);
          this.updatePetDomPosition(pet);
        }
      }
    });

    // อัปเดตฝูงแมลงวันและระบบสุขอนามัยแบบ 60 FPS
    PetHygiene.update(dt);

    // อัปเดตฟิสิกส์สภาพแวดล้อมและของเล่นแบบ 60 FPS
    this.environment.updatePhysics(dt, this.mousePos);
  },

  tick() {
    this.checkReadingFatigue();
    this.checkUserInactivity();

    // ประมวลผลสัตว์เลี้ยงทีละตัว
    this.pets.forEach(pet => {
      if (pet.hidden || pet.isDragged) return;

      pet.stateTimer += 200;
      pet.speechTimer += 200;

      // ตรวจสอบสถานะการขับถ่าย (Pooping State lifecycle)
      if (pet.state === 'pooping') {
        pet.poopTimer = (pet.poopTimer || 0) + 200;
        if (pet.poopTimer >= 3400) {
          pet.poopTimer = 0;

          // ตรวจสอบว่าขับถ่ายที่กระบะทรายหรือไม่
          const litterBox = this.environment?.items?.find(i => i.type === 'cat_litter_box' && i.enabled);
          const isAtLitterBox = litterBox && Math.hypot((litterBox.x + 48) - (pet.x + 35), (litterBox.y + 25) - (pet.y + 35)) < 80;

          let poopX = pet.facing === 'right' ? pet.x + 8 : pet.x + 65;
          let poopY = pet.y + 40;

          if (isAtLitterBox) {
            poopX = litterBox.x + 32 + (Math.random() - 0.5) * 16;
            poopY = litterBox.y + 16 + (Math.random() - 0.5) * 8;
          }

          PetHygiene.spawnPoop(poopX, poopY, pet.id);

          pet.state = 'scratch';
          pet.stateTimer = 0;
          PetRenderer.updatePetVisuals(pet.el, pet);
          PetUI.spawnFx('star', pet.x + 35, pet.y + 10, this.layerEl);

          if (isAtLitterBox) {
            this.say(pet, 'โล่งพุงจังเลยเหมียว~ ถ่ายในกระบะทรายเรียบร้อยสะอาดเอี่ยม! 🏖️✨', 3500);
          } else {
            this.say(pet, 'โล่งพุงจังเลยเหมียว~ ไม่มีกระบะทราย ขออึเพ่นพ่านตรงนี้ละกัน! 💩', 3500);
          }
          return;
        }
      }

      // คืนสู่ท่าทางปกติเมื่อเล่นท่าพิเศษครบเวลา
      if (pet.state === 'two_legged' && pet.stateTimer > 4200) {
        pet.state = 'sit';
        pet.stateTimer = 0;
        PetRenderer.updatePetVisuals(pet.el, pet);
      } else if (pet.state === 'batting_ball' && pet.stateTimer > 3600) {
        pet.state = 'sit';
        pet.stateTimer = 0;
        PetRenderer.updatePetVisuals(pet.el, pet);
      } else if (pet.state === 'pounce_play' && pet.stateTimer > 3200) {
        pet.state = 'groom';
        pet.stateTimer = 0;
        PetRenderer.updatePetVisuals(pet.el, pet);
      } else if (pet.state === 'scratch' && pet.stateTimer > 3000) {
        pet.state = 'sit';
        pet.stateTimer = 0;
        PetRenderer.updatePetVisuals(pet.el, pet);
      }

      // 1. การเปลี่ยนท่าทางอัตโนมัติ (AI State Machine อิง Decision Interval ตาม Energy & Diligence)
      // ไม่อนุญาตให้เปลี่ยนท่าทางหรือเริ่มเดินถ้ากำลังพูด หรือถูกสั่งให้นอนเฝ้า หรือกำลังเดินอยู่ หรือกำลังขับถ่าย
      if (!pet.isStaying && !pet.isBlocked && !pet.isSpeaking && pet.targetX === null && pet.state !== 'pooping') {
        const decisionInterval = PetPersonality.getDecisionInterval(pet);
        if (pet.stateTimer > decisionInterval) {
          pet.stateTimer = 0;
          this.decideNextPetAction(pet);
        }
      }

      // 2. การพูดคุยตามความถี่ (อิง Talkativeness Axis และ Global Setting)
      let baseInterval = 40000;
      if (this.settings.speechFreq === 'often') baseInterval = 22000;
      else if (this.settings.speechFreq === 'rare') baseInterval = 80000;

      const speechInterval = PetPersonality.getSpeechInterval(pet, baseInterval);
      if (this.settings.speechFreq !== 'off' && !pet.isSpeaking && pet.speechTimer > speechInterval) {
        pet.speechTimer = 0;
        this.triggerRandomPetSpeech(pet);
      }
    });

    // 3. ตรวจจับการพบกันระหว่างแมวหลายตัว (เฉพาะเมื่อไม่มีตัวใดกำลังพูด)
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

  // นำทางแมวไปยังสิ่งของ/เฟอร์นิเจอร์ พร้อมบันทึก targetAction
  navigateToItem(pet, itemId, targetAction) {
    const item = this.environment.items.find(i => i.id === itemId || i.type === itemId);
    if (!item) return;
    const def = ENV_ITEM_DEFS[item.type];
    let destX = item.x;
    let destY = item.y;

    if (item.type === 'cat_condo') {
      destX = item.x + (def?.perchX || 42);
      destY = item.y + (def?.perchY || -35);
    } else if (item.type === 'cat_house') {
      destX = item.x + (def?.insideX || 18);
      destY = item.y + (def?.insideY || -8);
    } else if (item.type === 'cat_bed') {
      destX = item.x + (def?.cushionX || 10);
      destY = item.y + (def?.cushionY || -6);
    } else if (item.type === 'cat_scratcher') {
      destX = item.x + (def?.scratchX || 8);
      destY = item.y + (def?.scratchY || 10);
    } else if (item.type === 'cat_litter_box') {
      destX = item.x + (def?.boxX || 20);
      destY = item.y + (def?.boxY || -8);
    }

    pet.targetX = destX;
    pet.targetY = destY;
    pet.targetAction = targetAction;
    pet.state = 'walk';
    PetRenderer.updatePetVisuals(pet.el, pet);
  },

  // ตัดสินใจการกระทำถัดไปของแมว (อิง 6 แกนนิสัย & เฟอร์นิเจอร์)
  decideNextPetAction(pet) {
    if (pet.isSpeaking) return;
    const p = pet.personality || { energy: 50, diligence: 50, affection: 50 };

    // 1. ตรวจจับของเล่นประเภทเลเซอร์พอยเตอร์ (Laser Dot chasing)
    const laser = this.environment.items.find(i => i.type === 'laser_dot' && i.enabled);
    if (laser && (p.energy > 55 || Math.random() < 0.35)) {
      pet.targetX = laser.x;
      pet.targetY = laser.y;
      pet.targetAction = 'batting_ball';
      pet.state = 'run';
      PetRenderer.updatePetVisuals(pet.el, pet);
      return;
    }

    // 2. ตรวจจับไม้ตกแมวขนนก (Feather Teaser Wand)
    const wand = this.environment.items.find(i => i.type === 'feather_wand' && i.enabled);
    if (wand && Math.hypot(wand.x - pet.x, wand.y - pet.y) < 260 && Math.random() < 0.4) {
      pet.targetX = wand.x + 10;
      pet.targetY = wand.y + 15;
      pet.targetAction = 'pounce';
      pet.state = 'walk';
      PetRenderer.updatePetVisuals(pet.el, pet);
      return;
    }

    // 3. เช็คสภาพแวดล้อมใกล้ตัว (เตียง, กล่อง, คอนโด, ไหมพรม, ที่ฝนเล็บ)
    const nearestEnv = this.environment.findNearestInteractiveItem(pet, 220);

    // แมวง่วง / ขี้เกียจ -> แวะไปนอนที่เบาะ หรือมุดกล่อง
    if (nearestEnv && PetPersonality.prefersResting(pet) && Math.random() < 0.5) {
      if (nearestEnv.item.type === 'cat_bed') {
        this.navigateToItem(pet, nearestEnv.item.id, 'sleep_curl');
        return;
      } else if (nearestEnv.item.type === 'cat_house') {
        this.navigateToItem(pet, nearestEnv.item.id, 'in_box');
        return;
      } else if (nearestEnv.item.type === 'cat_condo') {
        this.navigateToItem(pet, nearestEnv.item.id, Math.random() < 0.5 ? 'on_condo' : 'scratch');
        return;
      }
    }

    // แมวซน / พลังงานสูง -> แวะไปเล่นลูกบอลไหมพรม หรือฝนเล็บ
    if (nearestEnv && PetPersonality.prefersToyPlay(pet) && Math.random() < 0.55) {
      if (nearestEnv.item.type === 'cat_toy_yarn') {
        pet.state = 'batting_ball';
        PetRenderer.updatePetVisuals(pet.el, pet);
        this.environment.rollYarnBall(pet.facing === 'right' ? 6 : -6);
        return;
      } else if (nearestEnv.item.type === 'cat_scratcher') {
        this.navigateToItem(pet, nearestEnv.item.id, 'scratch');
        PetUI.spawnFx('star', pet.x + 35, pet.y + 10, this.layerEl);
        return;
      }
    }

    // ขับถ่ายตามธรรมชาติ (Pooping State with cooldown)
    if (Math.random() < 0.04 && (!pet.lastPoopTime || Date.now() - pet.lastPoopTime > 40000)) {
      pet.lastPoopTime = Date.now();
      pet.poopTimer = 0;

      // ตรวจสอบว่ามีกระบะทรายแมววางอยู่บนหน้าจอหรือไม่
      const litterBox = this.environment?.items?.find(i => i.type === 'cat_litter_box' && i.enabled);
      if (litterBox) {
        // ถ้ามีกระบะทราย แมวจะเดินไปยังกระบะทรายเพื่อขับถ่ายอย่างเป็นระเบียบ!
        this.navigateToItem(pet, litterBox.id, 'pooping');
        return;
      }

      // ถ้าไม่มีกระบะทราย แมวจะขับถ่ายเพ่นพ่านเรี่ยราดบนหน้าจอ!
      pet.targetX = null;
      pet.targetY = null;
      pet.state = 'pooping';
      PetRenderer.updatePetVisuals(pet.el, pet);
      return;
    }

    // ยืนสองขาอ้อนเมื่อเคอร์เซอร์เมาส์อยู่ใกล้
    if (this.mousePos.x > 0 && Math.hypot(this.mousePos.x - pet.x, this.mousePos.y - pet.y) < 150 && Math.random() < 0.32) {
      pet.targetX = null;
      pet.targetY = null;
      pet.facing = this.mousePos.x > pet.x ? 'right' : 'left';
      pet.state = 'two_legged';
      PetRenderer.updatePetVisuals(pet.el, pet);
      return;
    }

    // ติดตามเคอร์เซอร์เมาส์ถ้าขี้อ้อน
    if (this.mousePos.x > 0 && PetPersonality.shouldFollowCursor(pet)) {
      pet.targetX = Math.max(30, Math.min(window.innerWidth - 100, this.mousePos.x + (Math.random() > 0.5 ? 40 : -40)));
      pet.state = 'walk';
      PetRenderer.updatePetVisuals(pet.el, pet);
      return;
    }

    // สุ่มท่าทางและอิริยาบถทั่วไปด้วย 6-Axis Weighted State Lottery
    const nextState = PetPersonality.evaluateNextState(pet);
    if (nextState === 'walk') {
      pet.targetX = Math.max(40, Math.min(window.innerWidth - 120, pet.x + (Math.random() - 0.5) * 260));
      pet.state = 'walk';
    } else {
      pet.state = nextState;
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

  // ซ่อน / แสดง น้องแมวบนหน้าจอ โดยยังคงข้อมูลไว้ครบถ้วน
  setPetVisibility(petId, isVisible) {
    const pet = this.pets.find(p => p.id === petId);
    if (!pet) return;
    pet.hidden = !isVisible;

    if (pet.hidden) {
      if (pet.el) {
        pet.el.remove();
        pet.el = null;
      }
      if (pet.bubbleEl) {
        pet.bubbleEl.remove();
        pet.bubbleEl = null;
      }
      pet.targetX = null;
      pet.targetY = null;
      pet.targetAction = null;
    } else {
      if (!pet.el && this.layerEl) {
        const el = PetRenderer.createPetElement(pet);
        pet.el = el;
        this.bindPetEvents(el, pet);
        this.layerEl.appendChild(el);
        this.updatePetDomPosition(pet);
        PetUI.spawnFx('star', pet.x + 35, pet.y + 10, this.layerEl);
        this.say(pet, `กลับมาแล้วเหมียว~! คิดถึงจัง 💖`, 3000);
      }
    }
    this.updateDockBadge();
    this.saveState();
  },

  togglePetVisibility(petId) {
    const pet = this.pets.find(p => p.id === petId);
    if (!pet) return false;
    this.setPetVisibility(petId, !!pet.hidden);
    return !pet.hidden;
  },

  // 13. การเปิดหน้าต่างจัดการและเมนูบริบท
  openManagementModal() {
    PetUI.openManagementModal(this);
  },

  openContextMenu(x, y, pet) {
    PetUI.openContextMenu(x, y, pet, this);
  },

  // 14. Helper triggers สำหรับการทดสอบและสั่งงานอิริยาบถพิเศษ
  triggerPoop(pet = null) {
    const targetPet = pet || this.pets[0];
    if (!targetPet) return;
    targetPet.targetX = null;
    targetPet.targetY = null;
    targetPet.poopTimer = 0;
    targetPet.state = 'pooping';
    PetRenderer.updatePetVisuals(targetPet.el, targetPet);
  },

  triggerTwoLegged(pet = null) {
    const targetPet = pet || this.pets[0];
    if (!targetPet) return;
    targetPet.targetX = null;
    targetPet.targetY = null;
    targetPet.state = 'two_legged';
    PetRenderer.updatePetVisuals(targetPet.el, targetPet);
  }
};
