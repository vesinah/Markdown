// ระบบสภาพแวดล้อม ของเล่น และเฟอร์นิเจอร์แมว (Cat Environment & Interactive Props)
// คอนโดแมว, บ้านกล่องกระดาษ, เบาะนอนโดนัท, ลูกบอลไหมพรม, ที่ฝนเล็บ, ชามอาหาร

import { Store } from '../core/store.js';

export const ENV_ITEM_DEFS = {
  cat_condo: {
    id: 'cat_condo',
    name: 'คอนโดแมวไม้ 3 ชั้น',
    desc: 'มีเสาเชือกฝนเล็บและยอดหอคอยชมวิว แมวสามารถกระโดดขึ้นไปนั่งชมวิวได้อย่างสง่างาม',
    width: 100,
    height: 125,
    perchX: 42,
    perchY: -35, // ตำแหน่งที่แมวนั่งบนยอด
    icon: '🏰'
  },
  cat_house: {
    id: 'cat_house',
    name: 'บ้านกล่องกระดาษยอดฮิต',
    desc: 'กล่องกระดาษพับสุดโปรดของแมวทุกสายพันธุ์ มุดเข้าไปนอนสบายใจโผล่แต่หัวกลมๆ',
    width: 95,
    height: 72,
    insideX: 18,
    insideY: -8,
    icon: '📦'
  },
  cat_bed: {
    id: 'cat_bed',
    name: 'เบาะนอนโดนัทนุ่มฟู',
    desc: 'เบาะนอนขนนุ่มอบอุ่น เหมาะสำหรับนอนขดตัวหรือนอนหงายพุงรับความอบอุ่น',
    width: 90,
    height: 55,
    cushionX: 10,
    cushionY: -6,
    icon: '🛏️'
  },
  cat_toy_yarn: {
    id: 'cat_toy_yarn',
    name: 'ลูกบอลไหมพรมหลากสี',
    desc: 'ของเล่นสุดโปรด แมวสามารถใช้เท้าตะปบให้กลิ้งไปมาอย่างเพลิดเพลิน',
    width: 44,
    height: 44,
    isPhysicsToy: true,
    icon: '🧶'
  },
  cat_scratcher: {
    id: 'cat_scratcher',
    name: 'เสาลับเล็บเชือกป่าน',
    desc: 'เสาลับเล็บช่วยผ่อนคลายกล้ามเนื้อ แมวจะเดินมายืดตัวฝนเล็บอย่างสบายอารมณ์',
    width: 60,
    height: 85,
    scratchX: 8,
    scratchY: 10,
    icon: '🪵'
  },
  cat_litter_box: {
    id: 'cat_litter_box',
    name: 'กระบะทรายแมวอนามัย',
    desc: 'กระบะทรายเม็ดคริสตัลสะอาด แมวจะเดินมาขับถ่ายอย่างเป็นระเบียบ ไม่ถ่ายเรี่ยราดบนหน้าจอ',
    width: 96,
    height: 58,
    boxX: 20,
    boxY: -8,
    icon: '🏖️'
  },
  food_bowl: {
    id: 'food_bowl',
    name: 'ชามอาหารและน้ำอัตโนมัติ',
    desc: 'ชามอาหารเปียกและปลาทูสด แวะมากินเมื่อหิว',
    width: 58,
    height: 38,
    icon: '🐟'
  }
};

export const PetEnvironment = {
  items: [],
  layerEl: null,

  async init(layerEl) {
    this.layerEl = layerEl;
    await this.loadItems();
    this.renderAll();
  },

  async loadItems() {
    try {
      const saved = await Store.get('pet_environment_items');
      if (Array.isArray(saved) && saved.length > 0) {
        this.items = saved.filter(i => i.type !== 'laser_dot' && i.type !== 'feather_wand');
      } else {
        // รายการเริ่มต้น: เบาะนอน และ ลูกบอลไหมพรม
        this.items = [
          {
            id: 'item_bed_' + Date.now(),
            type: 'cat_bed',
            x: Math.max(60, window.innerWidth - 320),
            y: window.innerHeight - 80,
            enabled: true
          },
          {
            id: 'item_yarn_' + (Date.now() + 1),
            type: 'cat_toy_yarn',
            x: Math.max(80, window.innerWidth - 220),
            y: window.innerHeight - 60,
            vx: 0,
            rot: 0,
            enabled: true
          },
          {
            id: 'item_condo_' + (Date.now() + 2),
            type: 'cat_condo',
            x: 80,
            y: window.innerHeight - 150,
            enabled: false // ให้เปิดเพิ่มได้จากเมนู
          },
          {
            id: 'item_house_' + (Date.now() + 3),
            type: 'cat_house',
            x: 210,
            y: window.innerHeight - 95,
            enabled: false
          },
          {
            id: 'item_scratcher_' + (Date.now() + 4),
            type: 'cat_scratcher',
            x: Math.max(120, window.innerWidth - 420),
            y: window.innerHeight - 110,
            enabled: false
          }
        ];
        this.saveItems();
      }
    } catch (e) {
      console.warn('[PetEnvironment] loadItems error:', e.message);
    }
  },

  async saveItems() {
    try {
      const cleanData = this.items.map(item => ({
        id: item.id,
        type: item.type,
        x: Math.round(item.x),
        y: Math.round(item.y),
        enabled: !!item.enabled
      }));
      await Store.set('pet_environment_items', cleanData);
    } catch (e) {
      console.warn('[PetEnvironment] saveItems error:', e.message);
    }
  },

  // สร้างหรือเสกสิ่งของลงบนหน้าจอ (Spawn Item)
  spawnItem(type, x = null, y = null) {
    const def = ENV_ITEM_DEFS[type] || ENV_ITEM_DEFS.cat_toy_yarn;
    let item = this.items.find(i => i.type === type);
    const spawnX = x !== null ? x : Math.max(80, Math.min(window.innerWidth - 150, window.innerWidth / 2 + (Math.random() - 0.5) * 200));
    const spawnY = y !== null ? y : window.innerHeight - (def.height + 25);

    if (!item) {
      item = {
        id: 'item_' + type + '_' + Date.now(),
        type,
        x: spawnX,
        y: spawnY,
        enabled: true
      };
      this.items.push(item);
    } else {
      item.x = spawnX;
      item.y = spawnY;
      item.enabled = true;
    }
    this.saveItems();
    this.renderAll();
    return item;
  },

  // นำสิ่งของออกจากหน้าจอ (Remove Item)
  removeItem(itemId) {
    const idx = this.items.findIndex(i => i.id === itemId || i.type === itemId);
    if (idx !== -1) {
      const removed = this.items.splice(idx, 1)[0];
      if (removed.el) removed.el.remove();
      this.saveItems();
      return true;
    }
    return false;
  },

  // อัปเดตฟิสิกส์ 60 FPS ของสิ่งของและของเล่น (ลูกบอล, เลเซอร์, ไม้ตกแมว)
  updatePhysics(dt, mousePos = null) {
    // 1. จำลองฟิสิกส์สำหรับลูกบอลไหมพรม (Rolling Yarn Ball)
    const yarn = this.items.find(i => i.type === 'cat_toy_yarn' && i.enabled);
    if (yarn && yarn.vx) {
      yarn.x += yarn.vx * 60 * dt;
      yarn.rot = (yarn.rot || 0) + yarn.vx * 7;
      yarn.vx *= Math.pow(0.92, dt * 60);
      if (yarn.x < 10) { yarn.x = 10; yarn.vx = -yarn.vx * 0.5; }
      if (yarn.x > window.innerWidth - 60) { yarn.x = window.innerWidth - 60; yarn.vx = -yarn.vx * 0.5; }
      if (Math.abs(yarn.vx) < 0.1) yarn.vx = 0;
      this.updateItemDomPosition(yarn);
    }
  },

  toggleItem(type, enable = null) {
    let item = this.items.find(i => i.type === type);
    if (!item) {
      const def = ENV_ITEM_DEFS[type];
      if (!def) return;
      item = {
        id: 'item_' + type + '_' + Date.now(),
        type,
        x: Math.max(80, Math.min(window.innerWidth - 150, window.innerWidth / 2 + (Math.random() - 0.5) * 200)),
        y: window.innerHeight - (def.height + 25),
        enabled: true
      };
      this.items.push(item);
    } else {
      item.enabled = enable !== null ? enable : !item.enabled;
    }
    this.saveItems();
    this.renderAll();
    return item.enabled;
  },

  renderAll() {
    if (!this.layerEl) return;

    // นำ Element เดิมออก
    const existing = this.layerEl.querySelectorAll('.pet-env-item');
    existing.forEach(el => el.remove());

    this.items.forEach(item => {
      if (!item.enabled) return;
      const el = this.createItemDom(item);
      item.el = el;
      this.bindDrag(el, item);
      this.layerEl.appendChild(el);
      this.updateItemDomPosition(item);
    });
  },

  updateItemDomPosition(item) {
    if (!item.el) return;
    item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
  },

  createItemDom(item) {
    const def = ENV_ITEM_DEFS[item.type] || ENV_ITEM_DEFS.cat_bed;
    const el = document.createElement('div');
    el.className = `pet-env-item env-${item.type}`;
    el.id = `env-${item.id}`;
    el.style.width = `${def.width}px`;
    el.style.height = `${def.height}px`;
    el.title = `${def.name} (ลากเพื่อย้ายที่วางได้)`;

    el.innerHTML = this.renderItemSvg(item.type, def);
    return el;
  },

  bindDrag(el, item) {
    let startX = 0, startY = 0;
    let initialX = 0, initialY = 0;

    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      e.stopPropagation();
      startX = e.clientX;
      startY = e.clientY;
      initialX = item.x;
      initialY = item.y;
      el.classList.add('is-dragged');

      const onPointerMove = (moveEvt) => {
        const dx = moveEvt.clientX - startX;
        const dy = moveEvt.clientY - startY;
        item.x = Math.max(10, Math.min(window.innerWidth - 120, initialX + dx));
        item.y = Math.max(10, Math.min(window.innerHeight - 50, initialY + dy));
        this.updateItemDomPosition(item);
      };

      const onPointerUp = () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        el.classList.remove('is-dragged');
        this.saveItems();
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    };

    el.addEventListener('pointerdown', onPointerDown);
  },

  // หาสภาพแวดล้อมใกล้ตัวแมวที่สุด
  findNearestInteractiveItem(pet, maxDist = 200) {
    let nearest = null;
    let minDist = maxDist;

    for (const item of this.items) {
      if (!item.enabled) continue;
      const def = ENV_ITEM_DEFS[item.type];
      const cx = item.x + (def ? def.width / 2 : 30);
      const cy = item.y + (def ? def.height / 2 : 30);
      const dist = Math.hypot(pet.x - cx, pet.y - cy);

      if (dist < minDist) {
        minDist = dist;
        nearest = { item, dist, def, cx, cy };
      }
    }
    return nearest;
  },

  // ฟิสิกส์กลิ้งลูกบอลไหมพรม
  rollYarnBall(dx) {
    const yarn = this.items.find(i => i.type === 'cat_toy_yarn' && i.enabled);
    if (!yarn || !yarn.el) return;

    yarn.vx = (yarn.vx || 0) + dx * 1.5;
    yarn.vx = Math.max(-12, Math.min(12, yarn.vx));

    const anim = () => {
      if (Math.abs(yarn.vx) < 0.2) {
        yarn.vx = 0;
        return;
      }
      yarn.x += yarn.vx;
      yarn.rot = (yarn.rot || 0) + yarn.vx * 7;
      yarn.vx *= 0.92; // Friction

      // Boundary check
      if (yarn.x < 10) { yarn.x = 10; yarn.vx = -yarn.vx * 0.5; }
      if (yarn.x > window.innerWidth - 60) { yarn.x = window.innerWidth - 60; yarn.vx = -yarn.vx * 0.5; }

      yarn.el.style.transform = `translate3d(${yarn.x}px, ${yarn.y}px, 0) rotate(${yarn.rot}deg)`;
      requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
  },

  renderItemSvg(type, def) {
    if (type === 'cat_bed') {
      return `
        <svg viewBox="0 0 100 65" width="100%" height="100%">
          <defs>
            <radialGradient id="bed-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0f172a" stop-opacity="0.32"/>
              <stop offset="65%" stop-color="#0f172a" stop-opacity="0.12"/>
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="bed-cushion-grad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stop-color="#faedcd"/>
              <stop offset="50%" stop-color="#e9d8a6"/>
              <stop offset="100%" stop-color="#d4a373"/>
            </linearGradient>
            <radialGradient id="bed-center-dip" cx="45%" cy="35%" r="55%">
              <stop offset="0%" stop-color="#faedcd"/>
              <stop offset="70%" stop-color="#dda15e"/>
              <stop offset="100%" stop-color="#bc6c25"/>
            </radialGradient>
          </defs>
          <!-- Soft Ambient Ground Shadow -->
          <ellipse cx="50" cy="52" rx="46" ry="8" fill="url(#bed-shadow)"/>
          <!-- Donut Cushion Outer Border -->
          <ellipse cx="50" cy="42" rx="45" ry="17" fill="url(#bed-cushion-grad)" stroke="#ca6702" stroke-width="1.8"/>
          <ellipse cx="50" cy="40" rx="41" ry="14" fill="#fefae0"/>
          <!-- Soft Plump Rim with 3D Depth -->
          <ellipse cx="50" cy="37" rx="34" ry="12" fill="#dda15e" opacity="0.45"/>
          <!-- Fluffy Center Dip with Recessed Shadow -->
          <ellipse cx="50" cy="38" rx="26" ry="9" fill="url(#bed-center-dip)"/>
          <!-- Paw Print on Bed -->
          <g transform="translate(43, 33) scale(0.6)" opacity="0.4" fill="#9c6644">
            <ellipse cx="12" cy="15" rx="4" ry="3"/>
            <circle cx="7" cy="10" r="1.8"/>
            <circle cx="11" cy="7" r="1.8"/>
            <circle cx="15" cy="7" r="1.8"/>
            <circle cx="18" cy="10" r="1.8"/>
          </g>
        </svg>
      `;
    }

    if (type === 'cat_house') {
      return `
        <svg viewBox="0 0 110 95" width="100%" height="100%">
          <defs>
            <radialGradient id="house-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0f172a" stop-opacity="0.34"/>
              <stop offset="65%" stop-color="#0f172a" stop-opacity="0.14"/>
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="box-top-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fdf0d5"/>
              <stop offset="100%" stop-color="#ddb892"/>
            </linearGradient>
          </defs>
          <!-- Ground Ambient Shadow -->
          <ellipse cx="54" cy="80" rx="48" ry="10" fill="url(#house-shadow)"/>
          <!-- Cardboard Box Body 3D Faces -->
          <polygon points="10,35 60,18 102,32 52,50" fill="url(#box-top-light)"/>
          <polygon points="10,35 52,50 52,80 10,65" fill="#b08968"/>
          <polygon points="52,50 102,32 102,62 52,80" fill="#7f5539"/>
          <!-- Deep Interior Shadow -->
          <polygon points="16,36 50,47 50,72 16,58" fill="#4a2810" opacity="0.35"/>
          <!-- Flap Left Open with highlight -->
          <polygon points="10,35 2,24 45,12 55,20" fill="#cca882"/>
          <!-- Flap Right Open with shadow -->
          <polygon points="55,20 65,12 108,24 100,34" fill="#a07855"/>
          <!-- Cute Cat Face Stamp on Box -->
          <ellipse cx="31" cy="62" rx="10" ry="8" fill="#e6ccb2" opacity="0.7"/>
          <polygon points="23,56 25,50 28,54" fill="#e6ccb2" opacity="0.7"/>
          <polygon points="39,56 37,50 34,54" fill="#e6ccb2" opacity="0.7"/>
        </svg>
      `;
    }

    if (type === 'cat_condo') {
      return `
        <svg viewBox="0 0 110 148" width="100%" height="100%">
          <defs>
            <radialGradient id="condo-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0f172a" stop-opacity="0.35"/>
              <stop offset="65%" stop-color="#0f172a" stop-opacity="0.12"/>
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="post-cylinder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e6ccb2"/>
              <stop offset="40%" stop-color="#fff1e6"/>
              <stop offset="100%" stop-color="#b08968"/>
            </linearGradient>
          </defs>
          <!-- Ground Base Shadow -->
          <ellipse cx="55" cy="138" rx="46" ry="6" fill="url(#condo-shadow)"/>
          <!-- Base Board -->
          <rect x="15" y="125" width="80" height="12" rx="4" fill="#8c5836"/>
          <rect x="15" y="125" width="80" height="3" rx="1" fill="#b08968"/>
          <!-- Lower Scratching Post with 3D cylindrical lighting -->
          <rect x="46" y="70" width="18" height="55" rx="3" fill="url(#post-cylinder)"/>
          <!-- Drop Shadow under Platform -->
          <ellipse cx="55" cy="74" rx="12" ry="3" fill="rgba(15, 23, 42, 0.25)"/>
          <!-- Sisal Rope Stripes -->
          <line x1="46" y1="80" x2="64" y2="80" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="90" x2="64" y2="90" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="100" x2="64" y2="100" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="110" x2="64" y2="110" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="120" x2="64" y2="120" stroke="#7f5539" stroke-width="2"/>
          <!-- Middle Platform House with 3D edge -->
          <rect x="25" y="60" width="60" height="12" rx="3" fill="#9c6644"/>
          <rect x="25" y="60" width="60" height="3" rx="1" fill="#cca882"/>
          <!-- Upper Post with cylindrical lighting -->
          <rect x="48" y="20" width="14" height="40" rx="3" fill="url(#post-cylinder)"/>
          <ellipse cx="55" cy="24" rx="9" ry="2.5" fill="rgba(15, 23, 42, 0.25)"/>
          <line x1="48" y1="30" x2="62" y2="30" stroke="#7f5539" stroke-width="1.8"/>
          <line x1="48" y1="40" x2="62" y2="40" stroke="#7f5539" stroke-width="1.8"/>
          <line x1="48" y1="50" x2="62" y2="50" stroke="#7f5539" stroke-width="1.8"/>
          <!-- Top Perch Lookout with plush bevel -->
          <ellipse cx="55" cy="21" rx="32" ry="10" fill="#7f5539"/>
          <ellipse cx="55" cy="18" rx="28" ry="7" fill="#fefae0"/>
          <ellipse cx="55" cy="17" rx="22" ry="5" fill="#faedcd"/>
          <!-- Hanging Ball Toy with shadow -->
          <line x1="28" y1="65" x2="28" y2="88" stroke="#cca882" stroke-width="1.5"/>
          <circle cx="28" cy="92" r="5.5" fill="#f72585"/>
          <circle cx="26.5" cy="90" r="1.8" fill="#ffffff" opacity="0.6"/>
        </svg>
      `;
    }

    if (type === 'cat_toy_yarn') {
      return `
        <svg viewBox="0 0 50 50" width="100%" height="100%">
          <defs>
            <radialGradient id="yarn-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0f172a" stop-opacity="0.38"/>
              <stop offset="65%" stop-color="#0f172a" stop-opacity="0.12"/>
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="yarn-sphere" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#ff7b89"/>
              <stop offset="55%" stop-color="#e63946"/>
              <stop offset="100%" stop-color="#8a0917"/>
            </radialGradient>
          </defs>
          <!-- Ambient Ground Contact Shadow -->
          <ellipse cx="25" cy="45" rx="18" ry="4.5" fill="url(#yarn-shadow)"/>
          <!-- 3D Volumetric Yarn Core -->
          <circle cx="25" cy="25" r="18" fill="url(#yarn-sphere)"/>
          <!-- Strands of Yarn with Emboss Highlight -->
          <path d="M 12 18 Q 25 10 38 18" stroke="#ffb703" stroke-width="2.5" fill="none" opacity="0.95"/>
          <path d="M 10 28 Q 25 38 40 28" stroke="#ffb703" stroke-width="2.5" fill="none" opacity="0.95"/>
          <path d="M 18 12 Q 35 25 18 38" stroke="#f1faee" stroke-width="2.2" fill="none" opacity="0.9"/>
          <path d="M 28 10 Q 15 25 32 38" stroke="#457b9d" stroke-width="2.2" fill="none" opacity="0.9"/>
          <!-- Loose Tail Strand -->
          <path d="M 38 32 Q 44 38 48 35 Q 52 32 50 42" stroke="#e63946" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </svg>
      `;
    }

    if (type === 'cat_scratcher') {
      return `
        <svg viewBox="0 0 70 100" width="100%" height="100%">
          <defs>
            <radialGradient id="scratcher-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0f172a" stop-opacity="0.32"/>
              <stop offset="65%" stop-color="#0f172a" stop-opacity="0.12"/>
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="scratcher-cyl" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#cbb292"/>
              <stop offset="35%" stop-color="#faedcd"/>
              <stop offset="100%" stop-color="#9a7652"/>
            </linearGradient>
          </defs>
          <!-- Soft Ambient Base Shadow -->
          <ellipse cx="35" cy="91" rx="33" ry="6" fill="url(#scratcher-shadow)"/>
          <!-- Wooden Base with 3D rim -->
          <ellipse cx="35" cy="87" rx="30" ry="8" fill="#7f5539"/>
          <ellipse cx="35" cy="84" rx="28" ry="6" fill="#b08968"/>
          <!-- Sisal Scratcher Board Cylinder with 3D lighting -->
          <rect x="25" y="15" width="20" height="70" rx="5" fill="url(#scratcher-cyl)" stroke="#7f5539" stroke-width="1.2"/>
          <!-- Texture Lines -->
          <line x1="25" y1="25" x2="45" y2="25" stroke="#7f5539" stroke-width="1.5"/>
          <line x1="25" y1="35" x2="45" y2="35" stroke="#7f5539" stroke-width="1.5"/>
          <line x1="25" y1="45" x2="45" y2="45" stroke="#7f5539" stroke-width="1.5"/>
          <line x1="25" y1="55" x2="45" y2="55" stroke="#7f5539" stroke-width="1.5"/>
          <line x1="25" y1="65" x2="45" y2="65" stroke="#7f5539" stroke-width="1.5"/>
          <line x1="25" y1="75" x2="45" y2="75" stroke="#7f5539" stroke-width="1.5"/>
          <!-- Scratcher Post Top Ball -->
          <ellipse cx="35" cy="14" rx="12" ry="5" fill="#7f5539"/>
          <!-- Cute Feather on Top -->
          <path d="M 35 12 Q 25 -2 22 2 Q 28 6 35 12" fill="#ff70a6"/>
          <path d="M 35 12 Q 45 -4 48 0 Q 42 6 35 12" fill="#ffd166"/>
        </svg>
      `;
    }

    if (type === 'cat_litter_box') {
      return `
        <svg viewBox="0 0 100 62" width="100%" height="100%">
          <defs>
            <radialGradient id="litter-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0f172a" stop-opacity="0.32"/>
              <stop offset="70%" stop-color="#0f172a" stop-opacity="0.08"/>
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="litter-rim" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#93c5fd"/>
              <stop offset="50%" stop-color="#60a5fa"/>
              <stop offset="100%" stop-color="#2563eb"/>
            </linearGradient>
            <linearGradient id="litter-inner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1d4ed8"/>
              <stop offset="100%" stop-color="#1e40af"/>
            </linearGradient>
            <linearGradient id="litter-sand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef3c7"/>
              <stop offset="50%" stop-color="#fde68a"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <!-- Ground Contact Ambient Shadow -->
          <ellipse cx="50" cy="54" rx="46" ry="7" fill="url(#litter-shadow)"/>
          <!-- Outer Tray Rim 3D Body -->
          <polygon points="8,38 92,38 84,54 16,54" fill="url(#litter-rim)"/>
          <!-- Back Wall of Tray -->
          <polygon points="12,18 88,18 92,38 8,38" fill="#3b82f6"/>
          <!-- Top Protective Shield Rim -->
          <path d="M 12 18 Q 50 12 88 18 L 92 24 Q 50 18 8 24 Z" fill="#bfdbfe"/>
          <!-- Interior Sand Depth Base -->
          <polygon points="14,26 86,26 82,46 18,46" fill="url(#litter-inner)"/>
          <!-- Clean Clumping Cat Sand Bed -->
          <polygon points="16,28 84,28 80,45 20,45" fill="url(#litter-sand)"/>
          <!-- Sand Texture Specks -->
          <circle cx="30" cy="34" r="1.2" fill="#b45309" opacity="0.4"/>
          <circle cx="45" cy="38" r="1.4" fill="#b45309" opacity="0.4"/>
          <circle cx="60" cy="33" r="1.2" fill="#b45309" opacity="0.4"/>
          <circle cx="72" cy="37" r="1.3" fill="#b45309" opacity="0.4"/>
          <circle cx="38" cy="42" r="1.1" fill="#b45309" opacity="0.3"/>
          <circle cx="55" cy="41" r="1.2" fill="#b45309" opacity="0.3"/>
          <!-- Front Shield Cutout for Cat Access -->
          <path d="M 32 38 Q 50 44 68 38 L 66 42 Q 50 47 34 42 Z" fill="#60a5fa"/>
          <!-- Cute Paw Print Stamp on Front -->
          <g transform="translate(45, 46) scale(0.4)" opacity="0.85" fill="#ffffff">
            <ellipse cx="12" cy="15" rx="4" ry="3"/>
            <circle cx="7" cy="10" r="1.8"/>
            <circle cx="11" cy="7" r="1.8"/>
            <circle cx="15" cy="7" r="1.8"/>
            <circle cx="18" cy="10" r="1.8"/>
          </g>
          <!-- Mini Sand Scoop on Side -->
          <g transform="translate(78, 16) rotate(22)">
            <rect x="0" y="0" width="3.5" height="18" rx="1.5" fill="#f59e0b"/>
            <rect x="-3" y="15" width="9.5" height="9" rx="2" fill="#fbbf24"/>
            <line x1="-1" y1="18" x2="-1" y2="22" stroke="#d97706" stroke-width="0.8"/>
            <line x1="2" y1="18" x2="2" y2="22" stroke="#d97706" stroke-width="0.8"/>
            <line x1="5" y1="18" x2="5" y2="22" stroke="#d97706" stroke-width="0.8"/>
          </g>
        </svg>
      `;
    }

    // Default: food_bowl
    return `
      <svg viewBox="0 0 70 50" width="100%" height="100%">
        <defs>
          <radialGradient id="bowl-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0f172a" stop-opacity="0.32"/>
            <stop offset="65%" stop-color="#0f172a" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="bowl-outer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f4a261"/>
            <stop offset="60%" stop-color="#e76f51"/>
            <stop offset="100%" stop-color="#b84a32"/>
          </linearGradient>
          <radialGradient id="bowl-inner-grad" cx="45%" cy="35%" r="60%">
            <stop offset="0%" stop-color="#2a9d8f"/>
            <stop offset="80%" stop-color="#1e7066"/>
            <stop offset="100%" stop-color="#144d46"/>
          </radialGradient>
        </defs>
        <!-- Ambient Ground Contact Shadow -->
        <ellipse cx="35" cy="41" rx="32" ry="6" fill="url(#bowl-shadow)"/>
        <!-- Ceramic Bowl Outer Body -->
        <ellipse cx="35" cy="35" rx="30" ry="10" fill="url(#bowl-outer-grad)"/>
        <ellipse cx="35" cy="30" rx="26" ry="8" fill="#f4a261"/>
        <!-- Bowl Interior Dip with Delicious Fish Food -->
        <ellipse cx="35" cy="27" rx="22" ry="6.5" fill="url(#bowl-inner-grad)"/>
        <!-- Ceramic Gloss Rim Highlight -->
        <path d="M 14 28 Q 35 24 56 28" stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.5"/>
        <!-- Yummy Salmon / Tuna Bites -->
        <ellipse cx="32" cy="27" rx="8" ry="3.5" fill="#f4a261"/>
        <ellipse cx="39" cy="26" rx="7.5" ry="3" fill="#e76f51"/>
        <ellipse cx="35" cy="29" rx="6.5" ry="2.5" fill="#e9c46a"/>
      </svg>
    `;
  }
};
