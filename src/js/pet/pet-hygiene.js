// ระบบสุขอนามัยสัตว์เลี้ยง (Desktop Pet Hygiene Subsystem)
// จัดการก้อนอึ (Poop Object), การคลิกทำความสะอาด, คะแนนความสะอาด,
// ตัวจับเวลาละเลย 30 วินาที, และฟิสิกส์ฝูงแมลงวันบินว่อน (Fly Swarm 60 FPS Kinematics)

import { Store } from '../core/store.js';

export const PetHygiene = {
  containerEl: null,
  store: Store,
  poops: [],
  cleanlinessScore: 100,
  isInitialized: false,
  neglectThresholdMs: 30000, // 30 seconds threshold for neglected poop

  // 1. เริ่มต้นระบบสุขอนามัย
  async init(containerEl, store = null) {
    this.containerEl = containerEl || document.getElementById('desktop-pet-layer') || document.body;
    if (store) {
      this.store = store;
    }

    try {
      if (this.store && typeof this.store.get === 'function') {
        const savedScore = await this.store.get('pet_cleanliness_score');
        if (typeof savedScore === 'number') {
          this.cleanlinessScore = savedScore;
        }
      }
    } catch (e) {
      console.warn('[PetHygiene] Error loading cleanliness score:', e.message);
    }

    this.isInitialized = true;
    console.log(`[PetHygiene] Initialized with cleanliness score: ${this.cleanlinessScore}`);
  },

  // 2. ขับถ่ายและสร้างก้อนอึบนหน้าจอ
  spawnPoop(x, y, petId = null) {
    if (!this.containerEl) {
      this.containerEl = document.getElementById('desktop-pet-layer') || document.body;
    }

    const id = 'poop_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const safeX = Number.isFinite(x) ? Math.round(x) : Math.round((window.innerWidth || 1200) / 2);
    const safeY = Number.isFinite(y) ? Math.round(y) : Math.round((window.innerHeight || 800) - 100);
    const clampedX = Math.max(15, Math.min((window.innerWidth || 1200) - 60, safeX));
    const clampedY = Math.max(15, Math.min((window.innerHeight || 800) - 55, safeY));

    const poop = {
      id,
      x: clampedX,
      y: clampedY,
      createdAt: Date.now(),
      petId: petId || null,
      hasFlies: false,
      cleaned: false,
      el: null,
      flies: []
    };

    const poopEl = document.createElement('div');
    poopEl.className = 'pet-poop-item';
    poopEl.id = id;
    poopEl.dataset.poopId = id;
    poopEl.style.left = `${clampedX}px`;
    poopEl.style.top = `${clampedY}px`;
    poopEl.setAttribute('role', 'button');
    poopEl.setAttribute('tabindex', '0');
    poopEl.setAttribute('aria-label', 'ก้อนอึแมว (คลิกเพื่อเก็บทำความสะอาด)');
    poopEl.title = '🧹 คลิกเพื่อเก็บทำความสะอาด (+10 ความสะอาด!)';

    poopEl.innerHTML = this.renderPoopSvg(id);

    // Event listener: คลิกเพื่อเก็บทำความสะอาด
    const cleanHandler = (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.cleanPoop(id);
    };
    poopEl.addEventListener('pointerdown', cleanHandler);
    poopEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        cleanHandler(e);
      }
    });

    this.containerEl.appendChild(poopEl);
    poop.el = poopEl;
    this.poops.push(poop);

    return poop;
  },

  // 3. SVG Vector Graphic สำหรับก้อนอึและควันกลิ่น
  renderPoopSvg(id) {
    return `
      <svg viewBox="0 0 44 40" width="44" height="40" class="poop-svg">
        <defs>
          <!-- Ground Ambient Shadow -->
          <radialGradient id="poop-shadow-${id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0f172a" stop-opacity="0.38"/>
            <stop offset="65%" stop-color="#0f172a" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
          </radialGradient>
          <!-- Volumetric Poop Swirl Gradient -->
          <linearGradient id="poop-swirl-grad-${id}" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#b06d3b"/>
            <stop offset="45%" stop-color="#7a441e"/>
            <stop offset="100%" stop-color="#4d240d"/>
          </linearGradient>
        </defs>

        <!-- Ground Shadow -->
        <ellipse cx="22" cy="35" rx="18" ry="4.5" fill="url(#poop-shadow-${id})"/>

        <!-- Tier 1: Base Swirl -->
        <ellipse cx="22" cy="29" rx="16" ry="7" fill="url(#poop-swirl-grad-${id})"/>

        <!-- Tier 2: Middle Swirl -->
        <ellipse cx="22" cy="22" rx="12" ry="6" fill="url(#poop-swirl-grad-${id})"/>

        <!-- Tier 3: Top Swirl with Cute Curly Tip -->
        <path d="M 14 17 C 14 11 28 9 26 14 C 26 12 24 8 22 6 C 20 7 20 10 20 12 Z" fill="url(#poop-swirl-grad-${id})"/>

        <!-- Cute Glossy Highlights -->
        <ellipse cx="17" cy="20" rx="3.5" ry="1.8" fill="#ffffff" opacity="0.32" transform="rotate(-15 17 20)"/>
        <ellipse cx="15" cy="27" rx="4" ry="2" fill="#ffffff" opacity="0.22" transform="rotate(-10 15 27)"/>

        <!-- Stinky Vapor Waves -->
        <g class="poop-stink-waves">
          <path class="stink-line stink-1" d="M 12 14 Q 9 8 13 3" fill="none" stroke="#8cb369" stroke-width="1.6" stroke-linecap="round" opacity="0.75"/>
          <path class="stink-line stink-2" d="M 22 12 Q 26 7 22 1" fill="none" stroke="#8cb369" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>
          <path class="stink-line stink-3" d="M 31 15 Q 35 9 30 4" fill="none" stroke="#8cb369" stroke-width="1.6" stroke-linecap="round" opacity="0.75"/>
        </g>
      </svg>
    `;
  },

  // 4. คลิกเก็บทำความสะอาดก้อนอึ
  cleanPoop(poopId) {
    const idx = this.poops.findIndex(p => p.id === poopId);
    if (idx === -1) return;

    const poop = this.poops[idx];
    if (poop.cleaned) return;
    poop.cleaned = true;

    // เล่นแอนิเมชันป๊อปหายไป
    if (poop.el) {
      poop.el.classList.add('poop-popping');
    }

    // แสดงเอฟเฟกต์ประกายความสะอาด
    this.spawnCleanSparkle(poop.x, poop.y);

    // เพิ่มคะแนนความสะอาด +10
    this.cleanlinessScore += 10;
    if (this.store && typeof this.store.set === 'function') {
      try {
        this.store.set('pet_cleanliness_score', this.cleanlinessScore);
      } catch (e) {
        console.warn('[PetHygiene] Error saving cleanliness score:', e.message);
      }
    }

    // กระจายฝูงแมลงวันให้บินหนีแตกแถวและสลายตัว
    if (poop.flies && poop.flies.length > 0) {
      poop.flies.forEach(fly => {
        fly.isScattering = true;
        fly.vx = (Math.random() - 0.5) * 500;
        fly.vy = -200 - Math.random() * 250;
      });

      setTimeout(() => {
        poop.flies.forEach(fly => {
          if (fly.el && fly.el.parentNode) {
            fly.el.parentNode.removeChild(fly.el);
          }
        });
        poop.flies = [];
      }, 450);
    }

    // ลบ DOM element ก้อนอึหลังจากแอนิเมชันป๊อปจบ
    setTimeout(() => {
      if (poop.el && poop.el.parentNode) {
        poop.el.parentNode.removeChild(poop.el);
      }
      const removeIdx = this.poops.findIndex(p => p.id === poopId);
      if (removeIdx !== -1) {
        this.poops.splice(removeIdx, 1);
      }
    }, 360);
  },

  // 4.1 เพิ่มคะแนนความสะอาดเมื่อใช้กระบะทราย
  addCleanliness(score = 5) {
    this.cleanlinessScore = Math.max(0, this.cleanlinessScore + score);
    if (this.store && typeof this.store.set === 'function') {
      try {
        this.store.set('pet_cleanliness_score', this.cleanlinessScore);
      } catch (e) {
        console.warn('[PetHygiene] Error saving cleanliness score:', e.message);
      }
    }
  },

  // 5. แสดงเอฟเฟกต์ข้อความและประกายความสะอาด (+10 สดชื่น ✨)
  spawnCleanSparkle(x, y) {
    if (!this.containerEl) return;
    const sparkleEl = document.createElement('div');
    sparkleEl.className = 'poop-clean-sparkle';
    sparkleEl.style.left = `${x}px`;
    sparkleEl.style.top = `${y - 15}px`;
    sparkleEl.innerHTML = '+10 สดชื่น ✨';

    this.containerEl.appendChild(sparkleEl);
    setTimeout(() => {
      if (sparkleEl.parentNode) {
        sparkleEl.parentNode.removeChild(sparkleEl);
      }
    }, 1300);
  },

  // 6. กำเนิดฝูงแมลงวัน 4-6 ตัวเมื่อก้อนอึถูกละเลย (> 30 วินาที)
  spawnFliesForPoop(poop) {
    if (poop.hasFlies || poop.cleaned) return;
    poop.hasFlies = true;

    const count = 4 + Math.floor(Math.random() * 3); // 4-6 flies
    poop.flies = [];

    for (let i = 0; i < count; i++) {
      const flyId = `fly_${poop.id}_${i}`;
      const angle = (i / count) * Math.PI * 2;
      const radius = 25 + Math.random() * 30;
      const startX = poop.x + 22 + Math.cos(angle) * radius;
      const startY = poop.y + 15 + Math.sin(angle) * radius;

      const fly = {
        id: flyId,
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 40,
        vy: (Math.random() - 0.5) * 40,
        targetX: startX,
        targetY: startY,
        orbitRadius: radius,
        orbitSpeed: (Math.random() > 0.5 ? 1 : -1) * (2.0 + Math.random() * 1.8),
        phase: angle,
        buzzPhase: Math.random() * Math.PI * 2,
        isWandering: false,
        wanderTimer: 2.0 + Math.random() * 4.0,
        isScattering: false,
        el: null
      };

      const flyEl = document.createElement('div');
      flyEl.className = 'pet-fly';
      flyEl.id = flyId;
      flyEl.style.transform = `translate3d(${Math.round(startX)}px, ${Math.round(startY)}px, 0)`;
      flyEl.innerHTML = `
        <svg viewBox="0 0 14 12" width="14" height="12" class="fly-svg">
          <!-- Fly Body -->
          <ellipse cx="7" cy="6" rx="3.5" ry="2.2" fill="#111827"/>
          <!-- Fly Head -->
          <circle cx="4" cy="6" r="1.5" fill="#1f2937"/>
          <!-- Red Ommatidia Eyes -->
          <circle cx="3.5" cy="5.2" r="0.6" fill="#ef4444"/>
          <!-- High Frequency Buzzing Wings -->
          <ellipse class="fly-wing-l" cx="7" cy="3.5" rx="3.5" ry="1.8" fill="#93c5fd" opacity="0.82"/>
          <ellipse class="fly-wing-r" cx="8" cy="8.5" rx="3.5" ry="1.8" fill="#93c5fd" opacity="0.82"/>
        </svg>
      `;

      this.containerEl.appendChild(flyEl);
      fly.el = flyEl;
      poop.flies.push(fly);
    }
  },

  // 7. อัปเดตฟิสิกส์ 60 FPS และตัวจับเวลาละเลย
  update(dt = 0.016) {
    const now = Date.now();
    const safeDt = Number.isFinite(dt) && dt > 0 ? Math.min(0.08, Math.max(0.001, dt)) : 0.016;

    for (let i = 0; i < this.poops.length; i++) {
      const poop = this.poops[i];
      if (poop.cleaned) {
        // อัปเดตฝูงแมลงวันที่กำลังบินแตกกระเจิงออกจากจอ (Scattering) แม้ตัวก้อนอึจะถูกทำความสะอาดแล้ว
        if (poop.flies && poop.flies.length > 0) {
          poop.flies.forEach(fly => {
            if (!fly.el || !fly.isScattering) return;
            fly.x += fly.vx * safeDt;
            fly.y += fly.vy * safeDt;
            fly.el.style.opacity = Math.max(0, parseFloat(fly.el.style.opacity || 1) - safeDt * 2.5);
            fly.el.style.transform = `translate3d(${Math.round(fly.x)}px, ${Math.round(fly.y)}px, 0)`;
          });
        }
        continue;
      }

      // ตรวจสอบเกณฑ์เวลาถูกละเลย (30 วินาที)
      if (!poop.hasFlies && (now - poop.createdAt >= this.neglectThresholdMs)) {
        this.spawnFliesForPoop(poop);
      }

      // อัปเดตฟิสิกส์การบินของแมลงวันในฝูง
      if (poop.hasFlies && poop.flies && poop.flies.length > 0) {
        const centerX = poop.x + 22;
        const centerY = poop.y + 15;

        poop.flies.forEach(fly => {
          if (!fly.el) return;

          fly.buzzPhase += safeDt * 35;

          if (fly.isScattering) {
            // บินแตกกระเจิงออกจากจอเมื่อเก็บอึ
            fly.x += fly.vx * safeDt;
            fly.y += fly.vy * safeDt;
            fly.el.style.opacity = Math.max(0, parseFloat(fly.el.style.opacity || 1) - safeDt * 2.5);
            fly.el.style.transform = `translate3d(${Math.round(fly.x)}px, ${Math.round(fly.y)}px, 0)`;
            return;
          }

          // สลับโหมดระหว่างบินวนตอมก้อนอึ (70%) กับบินว่อนกวนจอ (30%)
          fly.wanderTimer -= safeDt;
          if (fly.wanderTimer <= 0) {
            fly.isWandering = Math.random() < 0.35;
            fly.wanderTimer = fly.isWandering ? 1.5 + Math.random() * 2.5 : 3.0 + Math.random() * 4.0;
            if (fly.isWandering) {
              // สุ่มพิกัดบินว่อนไปไกลขึ้น
              fly.targetX = Math.max(40, Math.min((window.innerWidth || 1200) - 60, centerX + (Math.random() - 0.5) * 350));
              fly.targetY = Math.max(40, Math.min((window.innerHeight || 800) - 60, centerY + (Math.random() - 0.5) * 220));
            }
          }

          if (fly.isWandering) {
            // เดินทางสู่พิกัดว่อน
            const dx = fly.targetX - fly.x;
            const dy = fly.targetY - fly.y;
            fly.vx += dx * 2.2 * safeDt;
            fly.vy += dy * 2.2 * safeDt;
          } else {
            // บินวนรูปวงรี / Lissajous Curve รอบก้อนอึ
            fly.phase += fly.orbitSpeed * safeDt;
            const targetOrbitX = centerX + Math.cos(fly.phase) * fly.orbitRadius;
            const targetOrbitY = centerY + Math.sin(fly.phase * 1.4) * (fly.orbitRadius * 0.65);

            const dx = targetOrbitX - fly.x;
            const dy = targetOrbitY - fly.y;
            fly.vx += dx * 5.0 * safeDt;
            fly.vy += dy * 5.0 * safeDt;
          }

          // แรงต้านอากาศ (Drag damping)
          fly.vx *= 0.92;
          fly.vy *= 0.92;

          fly.x += fly.vx * safeDt * 60;
          fly.y += fly.vy * safeDt * 60;

          // ควบคุมไม่ให้แมลงวันบินทะลุขอบจอ (Boundary Clamping)
          const screenW = window.innerWidth || 1200;
          const screenH = window.innerHeight || 800;
          if (fly.x < 0) { fly.x = 0; fly.vx = Math.abs(fly.vx) * 0.7; }
          if (fly.x > screenW) { fly.x = screenW; fly.vx = -Math.abs(fly.vx) * 0.7; }
          if (fly.y < 0) { fly.y = 0; fly.vy = Math.abs(fly.vy) * 0.7; }
          if (fly.y > screenH) { fly.y = screenH; fly.vy = -Math.abs(fly.vy) * 0.7; }

          // แรงสั่นไหวแบบสุ่มความถี่สูง (Buzz jitter)
          const jitterX = Math.sin(fly.buzzPhase) * 2.4;
          const jitterY = Math.cos(fly.buzzPhase * 1.3) * 2.4;

          fly.el.style.transform = `translate3d(${Math.round(fly.x + jitterX)}px, ${Math.round(fly.y + jitterY)}px, 0)`;
        });
      }
    }
  },

  // 8. ดึงรายการก้อนอึทั้งหมด
  getPoops() {
    return this.poops.filter(p => !p.cleaned);
  },

  // 9. ดึงคะแนนความสะอาด
  getCleanlinessScore() {
    return this.cleanlinessScore;
  },

  // 10. ทำความสะอาดทั้งหมด (สำหรับรีเซ็ตหรือเปลี่ยนหน้า)
  clearAll() {
    this.poops.forEach(p => {
      if (p.el && p.el.parentNode) {
        p.el.parentNode.removeChild(p.el);
      }
      if (p.flies) {
        p.flies.forEach(f => {
          if (f.el && f.el.parentNode) {
            f.el.parentNode.removeChild(f.el);
          }
        });
      }
    });
    this.poops = [];
  }
};
