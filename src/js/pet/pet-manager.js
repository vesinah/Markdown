// ผู้จัดการระบบสัตว์เลี้ยงหน้าจอ (Desktop Pet Manager)
// ควบคุมวงรอบพฤติกรรม (AI State Machine), การลากวาง, การโต้ตอบหลายตัว, บริบทการอ่าน, และเมนูบริบท

import { Store } from '../core/store.js';
import { State } from '../core/state.js';
import { PET_BREEDS, PetRenderer } from './pet-render.js';
import { PET_DIALOGUES, getRandomDialogue, formatDialogue } from './pet-dialogues.js';

export const PetManager = {
  pets: [],
  settings: {
    enabled: true,
    speechFreq: 'normal', // 'often', 'normal', 'rare', 'off'
    speechDuration: 'normal', // 'normal' (8-14s), 'long' (12-18s), 'extra' (16-25s)
    speechFontSize: 'normal', // 'small' (11px), 'normal' (12.5px), 'large' (14.5px), 'xlarge' (17px)
    readingReminderMins: 30,
    petScale: 1.0
  },
  layerEl: null,
  dockBtnEl: null,
  activeContextMenu: null,
  readingStartTime: Date.now(),
  lastUserActivity: Date.now(),
  loopTimer: null,
  fatigueTriggered: false,

  // 1. การเริ่มต้นระบบ
  async init() {
    try {
      this.ensureLayer();
      this.setupDockButton();
      await this.loadState();

      // สังเกตการณ์ขยับเมาส์/แป้นพิมพ์เพื่อตรวจจับการอ่านต่อเนื่อง
      const onAct = () => { this.lastUserActivity = Date.now(); };
      window.addEventListener('mousemove', onAct, { passive: true });
      window.addEventListener('keydown', onAct, { passive: true });
      window.addEventListener('scroll', onAct, { passive: true });

      // ปิด Context Menu เมื่อคลิกที่อื่น
      window.addEventListener('pointerdown', (e) => {
        if (this.activeContextMenu && !this.activeContextMenu.contains(e.target)) {
          this.closeContextMenu();
        }
      });

      // เริ่ม Loop ควบคุมพฤติกรรมและฟิสิกส์
      this.startLoop();
      this.applySpeechFontSize();
      console.log(`[PetManager] Initialized with ${this.pets.length} desktop cat(s).`);
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
      btn.title = 'จัดการสัตว์เลี้ยงหน้าจอ (แมว)';
      btn.setAttribute('aria-label', 'จัดการสัตว์เลี้ยงหน้าจอ');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24">
          <!-- Cute Paw Icon -->
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
        // สร้างแมวเริ่มต้น 1 ตัว: เจ้าส้ม
        const defaultCat = this.createPetInstance({
          id: 'pet_' + Date.now(),
          name: 'เจ้าส้ม',
          breed: 'orange',
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

  // สร้าง Object ข้อมูลของแมวแต่ละตัว
  createPetInstance(data) {
    return {
      id: data.id || 'pet_' + Math.random().toString(36).substring(2, 9),
      name: data.name || 'น้องแมว',
      breed: data.breed || 'orange',
      x: typeof data.x === 'number' ? data.x : Math.random() * (window.innerWidth - 120),
      y: typeof data.y === 'number' ? data.y : window.innerHeight - 130,
      vx: 0,
      vy: 0,
      targetX: null,
      targetY: null,
      facing: data.facing || 'right',
      state: 'stand', // 'stand', 'sit', 'walk', 'run', 'sleep_loaf', 'sleep_curl', 'sleep_belly', 'groom', 'pounce', 'eating', 'carry_fish', 'derpy_yawn', 'derpy_stare', 'derpy_wiggle', 'hide'
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
    this.layerEl.innerHTML = '';
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

  // 5. ปฏิสัมพันธ์และการเกาคาง/จั๊กจี้
  ticklePet(pet) {
    this.spawnFxHeart(pet.x + 35, pet.y + 10);
    pet.state = 'sit';
    pet.stateTimer = 0;
    PetRenderer.updatePetVisuals(pet.el, pet);
    const msg = getRandomDialogue('touchTickle', { petName: pet.name });
    this.say(pet, msg, 4000);
  },

  // 6. การพูดคุยและการแสดงกล่องข้อความ
  say(pet, text, duration = null) {
    if (this.settings.speechFreq === 'off' || !pet || !pet.el) return;
    const bubbleWrap = pet.el.querySelector('.pet-bubble-wrap');
    const bubbleText = pet.el.querySelector('.pet-bubble');
    if (!bubbleWrap || !bubbleText) return;

    bubbleText.textContent = text;
    bubbleWrap.classList.add('show');
    bubbleWrap.title = 'คลิกเพื่อปิดข้อความนี้';

    // ให้ผู้ใช้คลิกที่กล่องข้อความเพื่อปิดได้ทันทีหากอ่านจบแล้ว
    if (!bubbleWrap._boundClick) {
      bubbleWrap._boundClick = true;
      bubbleWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        bubbleWrap.classList.remove('show');
        if (pet._bubbleHideTimer) clearTimeout(pet._bubbleHideTimer);
      });
    }

    // คำนวณระยะเวลาแสดงคำพูดให้อ่านทันได้อย่างสบายใจ (พื้นฐาน 8.5-10 วินาที + ตามความยาวข้อความ)
    let actualDuration = duration;
    if (!actualDuration || actualDuration < 8000) {
      const len = text ? text.length : 20;
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

  // 7. สุ่มสร้างเอฟเฟกต์ (หัวใจ, Zzz, อาหาร, ผีเสื้อ, จิ้งจก)
  spawnFxHeart(x, y) {
    const fx = document.createElement('div');
    fx.className = 'pet-fx-heart';
    fx.textContent = '❤️';
    fx.style.left = `${x}px`;
    fx.style.top = `${y}px`;
    this.layerEl.appendChild(fx);
    setTimeout(() => fx.remove(), 1600);
  },

  spawnFxZzz(x, y) {
    const fx = document.createElement('div');
    fx.className = 'pet-fx-zzz';
    fx.textContent = 'Zzz...';
    fx.style.left = `${x}px`;
    fx.style.top = `${y}px`;
    this.layerEl.appendChild(fx);
    setTimeout(() => fx.remove(), 1600);
  },

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
    this.spawnFxHeart(pet.x + 35, pet.y + 15);

    setTimeout(() => {
      if (bowlEl.parentNode) bowlEl.remove();
      if (pet.state === 'eating') {
        pet.state = 'sit';
        PetRenderer.updatePetVisuals(pet.el, pet);
      }
    }, 4500);
  },

  spawnButterflyNear(targetPet) {
    const startX = targetPet ? targetPet.x + (Math.random() > 0.5 ? 120 : -120) : window.innerWidth / 2;
    const startY = targetPet ? targetPet.y - 40 : window.innerHeight - 150;
    const bId = Date.now();
    const bEl = PetRenderer.createButterflyElement(bId, startX, startY);
    this.layerEl.appendChild(bEl);

    // แมวสังเกตเห็นแล้วเตรียมตะครุบ
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

  // 8. การตรวจจับบริบทเอกสารและช่วงเวลา
  onDocumentOpened(node) {
    if (!node || !this.pets.length) return;
    this.readingStartTime = Date.now();
    this.fatigueTriggered = false;

    // ถอดสถานะบล็อกจอหากมี
    this.pets.forEach(p => {
      if (p.isBlocked) {
        p.isBlocked = false;
        p.state = 'stand';
        PetRenderer.updatePetVisuals(p.el, p);
      }
    });

    const fileType = node.name.endsWith('.md') ? 'md'
                   : node.name.endsWith('.pdf') ? 'pdf'
                   : (node.name.endsWith('.png') || node.name.endsWith('.jpg') || node.name.endsWith('.svg')) ? 'img'
                   : 'code';

    // สุ่มเลือกแมวหนึ่งตัวมาทักทายเกี่ยวกับเอกสารใหม่
    const speaker = this.pets[Math.floor(Math.random() * this.pets.length)];
    setTimeout(() => {
      const isDocTopic = Math.random() > 0.4;
      const text = isDocTopic
        ? getRandomDialogue('docContext', { docName: node.name, petName: speaker.name })
        : getRandomDialogue('fileType', { fileType, docName: node.name, petName: speaker.name });
      this.say(speaker, text, 5000);
    }, 1500);
  },

  // ตรวจจับเมื่อผู้ใช้อ่านหนังสือนานเกินไป (Fatigue & Screen Blocker)
  checkReadingFatigue() {
    if (this.fatigueTriggered || !this.pets.length) return;
    const elapsedMinutes = (Date.now() - this.readingStartTime) / 60000;
    const threshold = this.settings.readingReminderMins || 30;

    if (elapsedMinutes >= threshold) {
      this.fatigueTriggered = true;
      // ให้แมวเดินเข้ามากลางหน้าจออ่านหนังสือ แล้วนอนทับจอ!
      const blocker = this.pets[0];
      if (!blocker) return;

      const readerPane = document.getElementById('md-scroll-pane') || document.getElementById('reader-viewport');
      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight / 2;

      if (readerPane) {
        const rect = readerPane.getBoundingClientRect();
        targetX = rect.left + rect.width / 2 - 40;
        targetY = rect.top + rect.height / 2 - 30;
      }

      blocker.targetX = targetX;
      blocker.targetY = targetY;
      blocker.state = 'walk';
      blocker.isBlocked = true;
      PetRenderer.updatePetVisuals(blocker.el, blocker);

      this.say(blocker, getRandomDialogue('fatigue', { docName: State.current?.name, petName: blocker.name }), 6500);
    }
  },

  // 9. วงรอบหลัก 60-144 FPS Simulation Loop + AI Logic
  startLoop() {
    if (this._rafId) cancelAnimationFrame(this._rafId);
    if (this._aiTimer) clearInterval(this._aiTimer);

    let lastTime = performance.now();

    const renderLoop = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      this.updatePhysics(dt);

      this._rafId = requestAnimationFrame(renderLoop);
    };

    this._rafId = requestAnimationFrame(renderLoop);

    // AI Logic Loop (ประมวลผลการตัดสินใจทุก 200ms เพื่อประหยัด CPU)
    this._aiTimer = setInterval(() => {
      this.tickAI(0.2);
    }, 200);
  },

  updatePhysics(dt) {
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      if (pet.isDragged) continue;

      // ตรวจสอบว่ากำลังมีกล่องคำพูดแสดงอยู่หรือไม่
      const isSpeaking = pet.el && pet.el.querySelector('.pet-bubble-wrap')?.classList.contains('show');
      if (isSpeaking) {
        // เมื่อกำลังพูดคุย ให้แมวอยู่นิ่ง ๆ ไม่เดิน เพื่อให้อ่านข้อความง่าย สบายตา ข้อความไม่ขยับ
        continue;
      }

      // การเคลื่อนที่ไปยัง Target อย่างนุ่มนวลระดับ 60-144 FPS (Subpixel Float Precision)
      if (pet.targetX !== null) {
        const dx = pet.targetX - pet.x;
        const dy = (pet.targetY !== null) ? pet.targetY - pet.y : 0;
        const dist = Math.hypot(dx, dy);

        if (dist > 3) {
          const speed = (pet.state === 'run') ? 140 : 55; // พิกเซลต่อวินาที
          const step = Math.min(dist, speed * dt);
          pet.x += (dx / dist) * step;
          if (pet.targetY !== null) pet.y += (dy / dist) * step;

          const newFacing = dx > 0 ? 'right' : 'left';
          if (pet.facing !== newFacing) {
            pet.facing = newFacing;
            PetRenderer.updatePetVisuals(pet.el, pet);
          }
          this.updatePetDomPosition(pet);
        } else {
          pet.targetX = null;
          pet.targetY = null;
          if (pet.isBlocked) {
            pet.state = Math.random() > 0.5 ? 'sleep_loaf' : 'sleep_belly';
          } else {
            pet.state = 'sit';
          }
          PetRenderer.updatePetVisuals(pet.el, pet);
        }
      }
    }
  },

  tickAI(dtSeconds) {
    this.checkReadingFatigue();

    const now = new Date();
    const hour = now.getHours();

    // ประมวลผลแมวแต่ละตัว
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      if (pet.isDragged) continue;

      pet.stateTimer += dtSeconds;
      pet.speechTimer += dtSeconds;

      const isSpeaking = pet.el && pet.el.querySelector('.pet-bubble-wrap')?.classList.contains('show');

      // สุ่มเปลี่ยนสถานะท่าทางถ้าไม่ได้กำลังเดินทางหรือถูกสั่งให้นิ่ง และไม่ได้กำลังพูด
      if (!isSpeaking && !pet.isStaying && !pet.isBlocked && pet.targetX === null && pet.stateTimer > 5 + Math.random() * 8) {
        pet.stateTimer = 0;
        this.pickRandomAction(pet);
      }

      // สุ่มชวนคุยตามความถี่ (ไม่แทรกคำพูดหากกล่องคำพูดยังเปิดแสดงอยู่)
      let speechInterval = 40; // วินาที
      if (this.settings.speechFreq === 'often') speechInterval = 22;
      else if (this.settings.speechFreq === 'rare') speechInterval = 80;

      if (!isSpeaking && this.settings.speechFreq !== 'off' && pet.speechTimer > speechInterval + Math.random() * 20) {
        pet.speechTimer = 0;
        this.triggerSpontaneousSpeech(pet, hour);
      }

      // สุ่มสร้างผีเสื้อหรือจิ้งจกเบา ๆ (โอกาส 1 ใน 400)
      if (!pet.isBlocked && Math.random() < 0.005) {
        if (Math.random() > 0.5) this.spawnButterflyNear(pet);
        else this.spawnGeckoNear(pet);
      }

      // ปฏิสัมพันธ์กับแมวตัวอื่นในฝูง
      if (this.pets.length > 1) {
        for (let j = i + 1; j < this.pets.length; j++) {
          const other = this.pets[j];
          this.checkMultiPetInteraction(pet, other);
        }
      }
    }
  },

  // สุ่มเปลี่ยนอิริยาบถ
  pickRandomAction(pet) {
    const r = Math.random();
    if (r < 0.35) {
      // เดินเตาะแตะไปจุดใหม่
      const groundY = window.innerHeight - 110;
      const walkTargetX = Math.max(30, Math.min(window.innerWidth - 120, pet.x + (Math.random() - 0.5) * 280));
      pet.targetX = walkTargetX;
      // ให้แมวเดินเลาะขอบล่างของหน้าจอเป็นส่วนใหญ่
      pet.targetY = groundY + (Math.random() - 0.5) * 30;
      pet.state = 'walk';
    } else if (r < 0.50) {
      pet.state = 'sit';
    } else if (r < 0.65) {
      // สุ่มท่านอน 1 ใน 3 ท่า
      const sleepPoses = ['sleep_loaf', 'sleep_curl', 'sleep_belly'];
      pet.state = sleepPoses[Math.floor(Math.random() * sleepPoses.length)];
      this.spawnFxZzz(pet.x + 35, pet.y - 10);
    } else if (r < 0.75) {
      pet.state = 'groom';
    } else if (r < 0.85) {
      // ท่ากวน ๆ
      const derpPoses = ['derpy_yawn', 'derpy_stare', 'derpy_wiggle', 'carry_fish'];
      pet.state = derpPoses[Math.floor(Math.random() * derpPoses.length)];
    } else {
      pet.state = 'stand';
    }
    PetRenderer.updatePetVisuals(pet.el, pet);
  },

  // ชวนคุยตามสถานการณ์และเวลา
  triggerSpontaneousSpeech(pet, hour) {
    let cat = 'idleThoughts';
    if (hour >= 6 && hour < 12) cat = Math.random() > 0.5 ? 'timeMorning' : 'idleThoughts';
    else if (hour >= 12 && hour < 17) cat = Math.random() > 0.5 ? 'timeAfternoon' : 'idleThoughts';
    else if (hour >= 17 && hour < 21) cat = Math.random() > 0.5 ? 'timeEvening' : 'idleThoughts';
    else cat = Math.random() > 0.4 ? 'timeNight' : 'idleThoughts';

    const text = getRandomDialogue(cat, {
      petName: pet.name,
      docName: State.current?.name
    });
    this.say(pet, text, 4500);
  },

  // ตรวจจับเมื่อแมว 2 ตัวเดินมาใกล้กัน -> เล่นกันเอง!
  checkMultiPetInteraction(pet1, pet2) {
    if (pet1.isDragged || pet2.isDragged) return;
    const dist = Math.hypot(pet1.x - pet2.x, pet1.y - pet2.y);

    if (dist < 90 && Math.random() < 0.05) {
      // หันหน้าเข้าหากัน
      pet1.facing = pet1.x < pet2.x ? 'right' : 'left';
      pet2.facing = pet2.x < pet1.x ? 'right' : 'left';
      PetRenderer.updatePetVisuals(pet1.el, pet1);
      PetRenderer.updatePetVisuals(pet2.el, pet2);

      const r = Math.random();
      if (r < 0.4) {
        // แซวกันเอง
        const dialogue = getRandomDialogue('multiPet', {
          petName: pet1.name,
          otherPetName: pet2.name
        });
        this.say(pet1, dialogue, 4000);
      } else if (r < 0.7) {
        // วิ่งไล่กัน
        pet1.state = 'run';
        pet2.state = 'run';
        const targetX = Math.max(50, Math.min(window.innerWidth - 150, pet1.x + 160));
        pet1.targetX = targetX;
        pet2.targetX = targetX - 40;
        PetRenderer.updatePetVisuals(pet1.el, pet1);
        PetRenderer.updatePetVisuals(pet2.el, pet2);
      } else {
        // นอนเบียดกัน
        pet1.state = 'sleep_loaf';
        pet2.state = 'sleep_loaf';
        PetRenderer.updatePetVisuals(pet1.el, pet1);
        PetRenderer.updatePetVisuals(pet2.el, pet2);
      }
    }
  },

  // 10. เมนูบริบทคลิกขวา (Context Menu)
  openContextMenu(x, y, pet) {
    this.closeContextMenu();

    const menu = document.createElement('div');
    menu.className = 'pet-context-menu';
    menu.style.left = `${Math.min(x, window.innerWidth - 210)}px`;
    menu.style.top = `${Math.min(y, window.innerHeight - 340)}px`;

    menu.innerHTML = `
      <div style="font-weight:700;padding:6px 10px;font-size:12px;color:#495057;border-bottom:1px solid #f1f3f5;">
        🐾 ${pet.name} (${PET_BREEDS[pet.breed]?.shortName || 'แมว'})
      </div>
      <button class="pet-menu-item" data-action="tickle">🖐️ เกาคาง / ลูบพุง</button>
      <button class="pet-menu-item" data-action="feed">🐟 ให้อาหาร / ปลาทู</button>
      <button class="pet-menu-item" data-action="rename">✏️ เปลี่ยนชื่อ</button>
      <button class="pet-menu-item" data-action="change_breed">🎨 สลับสายพันธุ์</button>
      <button class="pet-menu-item" data-action="spawn_prey">🦋 ปล่อยผีเสื้อ / จิ้งจก</button>
      <button class="pet-menu-item" data-action="toggle_stay">
        ${pet.isStaying ? '▶️ สั่งให้เดินเล่นอิสระ' : '⏸️ สั่งให้นอนนิ่ง ๆ ตรงนี้'}
      </button>
      <div class="pet-menu-sep"></div>
      <button class="pet-menu-item" data-action="add_pet">➕ รับเลี้ยงแมวเพิ่ม</button>
      <button class="pet-menu-item" data-action="open_manager">⚙️ บ้านแมว & ตั้งค่า...</button>
      <div class="pet-menu-sep"></div>
      <button class="pet-menu-item danger" data-action="dismiss">🏠 เก็บเข้าบ้าน (ลบตัวนี้)</button>
    `;

    menu.addEventListener('click', (e) => {
      const item = e.target.closest('.pet-menu-item');
      if (!item) return;
      const action = item.dataset.action;
      this.handleContextAction(action, pet);
      this.closeContextMenu();
    });

    document.body.appendChild(menu);
    this.activeContextMenu = menu;
  },

  closeContextMenu() {
    if (this.activeContextMenu) {
      this.activeContextMenu.remove();
      this.activeContextMenu = null;
    }
  },

  handleContextAction(action, pet) {
    if (action === 'tickle') {
      this.ticklePet(pet);
    } else if (action === 'feed') {
      this.feedPet(pet);
    } else if (action === 'rename') {
      const newName = prompt(`ตั้งชื่อใหม่ให้ ${pet.name}:`, pet.name);
      if (newName && newName.trim()) {
        pet.name = newName.trim();
        PetRenderer.updatePetVisuals(pet.el, pet);
        this.saveState();
        this.say(pet, `ต่อไปนี้ฉันชื่อ "${pet.name}" แล้วนะทาส!`, 3500);
      }
    } else if (action === 'change_breed') {
      const breedKeys = Object.keys(PET_BREEDS);
      const curIdx = breedKeys.indexOf(pet.breed);
      const nextBreed = breedKeys[(curIdx + 1) % breedKeys.length];
      pet.breed = nextBreed;
      PetRenderer.updatePetVisuals(pet.el, pet);
      this.saveState();
      this.say(pet, `แปลงร่างเป็น ${PET_BREEDS[nextBreed].name} แล้วนะ! สวยไหม?`, 3500);
    } else if (action === 'spawn_prey') {
      if (Math.random() > 0.5) this.spawnButterflyNear(pet);
      else this.spawnGeckoNear(pet);
    } else if (action === 'toggle_stay') {
      pet.isStaying = !pet.isStaying;
      this.saveState();
      this.say(pet, pet.isStaying ? 'รับทราบ! เหมียวจะนอนเฝ้าตรงนี้ไม่ไปไหน' : 'เย้! ได้เวลาออกเดินเล่นแล้ว!', 3000);
    } else if (action === 'add_pet') {
      this.addNewPet();
    } else if (action === 'open_manager') {
      this.openManagementModal();
    } else if (action === 'dismiss') {
      this.removePet(pet.id);
    }
  },

  // 11. เพิ่มและลบน้องแมว
  addNewPet(breedChoice = null, nameChoice = null) {
    const breedKeys = Object.keys(PET_BREEDS);
    const breed = breedChoice || breedKeys[Math.floor(Math.random() * breedKeys.length)];
    const defaultNames = ['ส้มจี๊ด', 'ถุงทอง', 'กะทิ', 'หมอก', 'ถ่านหิน', 'วิเชียร', 'ตัวอ้วน', 'ชิโร่'];
    const name = nameChoice || defaultNames[Math.floor(Math.random() * defaultNames.length)];

    const newPet = this.createPetInstance({
      id: 'pet_' + Date.now(),
      name,
      breed,
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
    this.say(newPet, `สวัสดีทาส! เหมียวชื่อ "${newPet.name}" ขอมาอยู่ด้วยคนนะ!`, 4000);
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

  // 12. หน้าต่างจัดการบ้านสัตว์เลี้ยง (Cat Management Modal)
  openManagementModal() {
    const existing = document.getElementById('pet-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'pet-modal-overlay';
    overlay.id = 'pet-modal-overlay';

    overlay.innerHTML = `
      <div class="pet-modal-card">
        <div class="pet-modal-header">
          <div class="pet-modal-title">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <ellipse cx="12" cy="15" rx="5.5" ry="4.5"/>
              <circle cx="6.5" cy="9.5" r="2.2"/><circle cx="10" cy="6.5" r="2.2"/>
              <circle cx="14" cy="6.5" r="2.2"/><circle cx="17.5" cy="9.5" r="2.2"/>
            </svg>
            บ้านสัตว์เลี้ยงหน้าจอ (Desktop Pets)
          </div>
          <button class="pet-modal-close" id="btn-pet-modal-close">&times;</button>
        </div>
        <div class="pet-modal-body">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-size:13px;font-weight:600;color:#495057;">รายชื่อน้องแมวในโปรแกรม (${this.pets.length} ตัว)</div>
            <button class="pet-btn-adopt" id="btn-modal-adopt">➕ รับเลี้ยงแมวเพิ่ม</button>
          </div>

          <div class="pet-list-wrap" id="modal-pet-list">
            ${this.renderModalPetList()}
          </div>

          <div class="pet-settings-group">
            <div style="font-size:13px;font-weight:600;color:#495057;">ตั้งค่าพฤติกรรม</div>
            
            <div class="pet-setting-row">
              <span>ความถี่ในการชวนคุย:</span>
              <select id="set-speech-freq">
                <option value="often" ${this.settings.speechFreq === 'often' ? 'selected' : ''}>คุยบ่อยมาก (ทุก ~22 วิ)</option>
                <option value="normal" ${this.settings.speechFreq === 'normal' ? 'selected' : ''}>ปานกลาง (ทุก ~40 วิ)</option>
                <option value="rare" ${this.settings.speechFreq === 'rare' ? 'selected' : ''}>นาน ๆ ครั้ง (ทุก ~80 วิ)</option>
                <option value="off" ${this.settings.speechFreq === 'off' ? 'selected' : ''}>ปิดเสียงกล่องคำพูด</option>
              </select>
            </div>

            <div class="pet-setting-row">
              <span>ระยะเวลาแสดงคำพูด:</span>
              <select id="set-speech-duration">
                <option value="normal" ${this.settings.speechDuration === 'normal' ? 'selected' : ''}>นานกำลังดี (8.5 - 14 วินาที)</option>
                <option value="long" ${this.settings.speechDuration === 'long' ? 'selected' : ''}>นานพิเศษ (12 - 18 วินาที)</option>
                <option value="extra" ${this.settings.speechDuration === 'extra' ? 'selected' : ''}>นานจุใจ (16 - 25 วินาที)</option>
              </select>
            </div>

            <div class="pet-setting-row">
              <span>ขนาดข้อความที่แมวพูด:</span>
              <select id="set-speech-fontsize">
                <option value="small" ${this.settings.speechFontSize === 'small' ? 'selected' : ''}>เล็กกะทัดรัด (11px)</option>
                <option value="normal" ${this.settings.speechFontSize === 'normal' ? 'selected' : ''}>ปกติ (12.5px)</option>
                <option value="large" ${this.settings.speechFontSize === 'large' ? 'selected' : ''}>ใหญ่อ่านสบาย (14.5px)</option>
                <option value="xlarge" ${this.settings.speechFontSize === 'xlarge' ? 'selected' : ''}>ใหญ่พิเศษ (17px)</option>
              </select>
            </div>

            <div class="pet-setting-row">
              <span>เตือนพักสายตาเมื่ออ่านนาน:</span>
              <select id="set-fatigue-time">
                <option value="20" ${this.settings.readingReminderMins === 20 ? 'selected' : ''}>20 นาที</option>
                <option value="30" ${this.settings.readingReminderMins === 30 ? 'selected' : ''}>30 นาที (แนะนำ)</option>
                <option value="45" ${this.settings.readingReminderMins === 45 ? 'selected' : ''}>45 นาที</option>
                <option value="60" ${this.settings.readingReminderMins === 60 ? 'selected' : ''}>1 ชั่วโมง</option>
              </select>
            </div>

            <div class="pet-setting-row">
              <span>ขนาดความอ้วนของน้องแมว:</span>
              <select id="set-pet-scale">
                <option value="0.85" ${this.settings.petScale === 0.85 ? 'selected' : ''}>กะทัดรัด (85%)</option>
                <option value="1.0" ${this.settings.petScale === 1.0 ? 'selected' : ''}>มาตรฐาน (100%)</option>
                <option value="1.2" ${this.settings.petScale === 1.2 ? 'selected' : ''}>อ้วนตุ้ยนุ้ย (120%)</option>
                <option value="1.35" ${this.settings.petScale === 1.35 ? 'selected' : ''}>อ้วนพิเศษ (135%)</option>
              </select>
            </div>

            <div style="display:flex;gap:8px;margin-top:4px;">
              <button class="pet-btn-sm" id="btn-test-blocker" style="flex:1;">🐾 ทดสอบท่าเดินมานอนทับจอ</button>
              <button class="pet-btn-sm" id="btn-test-butterfly" style="flex:1;">🦋 ปล่อยผีเสื้อ</button>
            </div>
          </div>
        </div>
      </div>
    `;

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    const closeBtn = overlay.querySelector('#btn-pet-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => overlay.remove());

    const adoptBtn = overlay.querySelector('#btn-modal-adopt');
    if (adoptBtn) adoptBtn.addEventListener('click', () => {
      this.addNewPet();
      overlay.querySelector('#modal-pet-list').innerHTML = this.renderModalPetList();
      this.bindModalListEvents(overlay);
    });

    // Settings binding
    const freqSel = overlay.querySelector('#set-speech-freq');
    if (freqSel) freqSel.addEventListener('change', (e) => {
      this.settings.speechFreq = e.target.value;
      this.saveState();
    });

    const durSel = overlay.querySelector('#set-speech-duration');
    if (durSel) durSel.addEventListener('change', (e) => {
      this.settings.speechDuration = e.target.value;
      this.saveState();
    });

    const fontSizeSel = overlay.querySelector('#set-speech-fontsize');
    if (fontSizeSel) fontSizeSel.addEventListener('change', (e) => {
      this.settings.speechFontSize = e.target.value;
      this.applySpeechFontSize();
      this.saveState();
    });

    const fatigueSel = overlay.querySelector('#set-fatigue-time');
    if (fatigueSel) fatigueSel.addEventListener('change', (e) => {
      this.settings.readingReminderMins = parseInt(e.target.value, 10);
      this.saveState();
    });

    const scaleSel = overlay.querySelector('#set-pet-scale');
    if (scaleSel) scaleSel.addEventListener('change', (e) => {
      const sc = parseFloat(e.target.value);
      this.settings.petScale = sc;
      this.pets.forEach(p => {
        p.scale = sc;
        if (p.el) PetRenderer.updatePetVisuals(p.el, p);
      });
      this.saveState();
    });

    const testBlockBtn = overlay.querySelector('#btn-test-blocker');
    if (testBlockBtn) testBlockBtn.addEventListener('click', () => {
      this.readingStartTime = Date.now() - 3600000; // Fake 1 hr
      this.fatigueTriggered = false;
      this.checkReadingFatigue();
      overlay.remove();
    });

    const testBflyBtn = overlay.querySelector('#btn-test-butterfly');
    if (testBflyBtn) testBflyBtn.addEventListener('click', () => {
      this.spawnButterflyNear(this.pets[0]);
      overlay.remove();
    });

    this.bindModalListEvents(overlay);
    document.body.appendChild(overlay);
  },

  renderModalPetList() {
    if (!this.pets.length) {
      return `<div style="text-align:center;padding:16px;color:#868e96;font-size:13px;">ยังไม่มีน้องแมวในห้อง กดปุ่มรับเลี้ยงเพื่อสร้างแมวตัวแรก!</div>`;
    }
    return this.pets.map(p => {
      const breedInfo = PET_BREEDS[p.breed] || PET_BREEDS.orange;
      return `
        <div class="pet-item-row" data-id="${p.id}">
          <div class="pet-item-info">
            <div style="font-size:24px;">🐾</div>
            <div>
              <div class="pet-item-name">${p.name}</div>
              <div class="pet-item-breed">${breedInfo.name}</div>
            </div>
          </div>
          <div class="pet-item-actions">
            <button class="pet-btn-sm" data-action="rename">เปลี่ยนชื่อ</button>
            <button class="pet-btn-sm" data-action="breed">สายพันธุ์</button>
            <button class="pet-btn-sm danger" data-action="delete">ลบ</button>
          </div>
        </div>
      `;
    }).join('');
  },

  bindModalListEvents(overlay) {
    const listWrap = overlay.querySelector('#modal-pet-list');
    if (!listWrap) return;

    listWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.pet-btn-sm');
      if (!btn) return;
      const row = btn.closest('.pet-item-row');
      const petId = row?.dataset.id;
      const pet = this.pets.find(p => p.id === petId);
      if (!pet) return;

      const act = btn.dataset.action;
      if (act === 'rename') {
        const newName = prompt(`ตั้งชื่อใหม่ให้ ${pet.name}:`, pet.name);
        if (newName && newName.trim()) {
          pet.name = newName.trim();
          PetRenderer.updatePetVisuals(pet.el, pet);
          this.saveState();
          listWrap.innerHTML = this.renderModalPetList();
        }
      } else if (act === 'breed') {
        const breedKeys = Object.keys(PET_BREEDS);
        const curIdx = breedKeys.indexOf(pet.breed);
        pet.breed = breedKeys[(curIdx + 1) % breedKeys.length];
        PetRenderer.updatePetVisuals(pet.el, pet);
        this.saveState();
        listWrap.innerHTML = this.renderModalPetList();
      } else if (act === 'delete') {
        if (confirm(`ต้องการเก็บ ${pet.name} เข้าบ้านหรือไม่?`)) {
          this.removePet(pet.id);
          listWrap.innerHTML = this.renderModalPetList();
        }
      }
    });
  }
};
