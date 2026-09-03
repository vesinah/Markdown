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
        this.items = saved;
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
        <svg viewBox="0 0 100 60" width="100%" height="100%">
          <!-- Donut Cushion Bottom -->
          <ellipse cx="50" cy="40" rx="46" ry="18" fill="#e9d8a6" stroke="#ca6702" stroke-width="2"/>
          <ellipse cx="50" cy="38" rx="42" ry="15" fill="#fefae0"/>
          <!-- Soft Plump Rim -->
          <ellipse cx="50" cy="35" rx="34" ry="12" fill="#dda15e" opacity="0.4"/>
          <!-- Fluffy Center Dip -->
          <ellipse cx="50" cy="36" rx="26" ry="9" fill="#faedcd"/>
          <!-- Paw Print on Bed -->
          <g transform="translate(43, 31) scale(0.6)" opacity="0.35" fill="#ca6702">
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
        <svg viewBox="0 0 110 85" width="100%" height="100%">
          <!-- Cardboard Box Body -->
          <polygon points="10,35 60,18 102,32 52,50" fill="#ddb892"/>
          <polygon points="10,35 52,50 52,80 10,65" fill="#b08968"/>
          <polygon points="52,50 102,32 102,62 52,80" fill="#7f5539"/>
          <!-- Flap Left Open -->
          <polygon points="10,35 2,24 45,12 55,20" fill="#cca882"/>
          <!-- Flap Right Open -->
          <polygon points="55,20 65,12 108,24 100,34" fill="#bb9470"/>
          <!-- Cute Cat Face Logo on Box -->
          <ellipse cx="31" cy="62" rx="10" ry="8" fill="#e6ccb2" opacity="0.6"/>
          <polygon points="23,56 25,50 28,54" fill="#e6ccb2" opacity="0.6"/>
          <polygon points="39,56 37,50 34,54" fill="#e6ccb2" opacity="0.6"/>
        </svg>
      `;
    }

    if (type === 'cat_condo') {
      return `
        <svg viewBox="0 0 110 140" width="100%" height="100%">
          <!-- Base Board -->
          <rect x="15" y="125" width="80" height="12" rx="4" fill="#9c6644"/>
          <!-- Lower Scratching Post -->
          <rect x="46" y="70" width="18" height="55" rx="3" fill="#ddb892"/>
          <!-- Sisal Rope Stripes -->
          <line x1="46" y1="80" x2="64" y2="80" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="90" x2="64" y2="90" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="100" x2="64" y2="100" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="110" x2="64" y2="110" stroke="#7f5539" stroke-width="2"/>
          <line x1="46" y1="120" x2="64" y2="120" stroke="#7f5539" stroke-width="2"/>
          <!-- Middle Platform House -->
          <rect x="25" y="60" width="60" height="12" rx="3" fill="#b08968"/>
          <!-- Upper Post -->
          <rect x="48" y="20" width="14" height="40" rx="3" fill="#ddb892"/>
          <line x1="48" y1="30" x2="62" y2="30" stroke="#7f5539" stroke-width="1.8"/>
          <line x1="48" y1="40" x2="62" y2="40" stroke="#7f5539" stroke-width="1.8"/>
          <line x1="48" y1="50" x2="62" y2="50" stroke="#7f5539" stroke-width="1.8"/>
          <!-- Top Perch Lookout -->
          <ellipse cx="55" cy="20" rx="32" ry="10" fill="#b08968"/>
          <ellipse cx="55" cy="18" rx="28" ry="7" fill="#fefae0"/>
          <!-- Hanging Ball Toy -->
          <line x1="28" y1="65" x2="28" y2="88" stroke="#cca882" stroke-width="1.5"/>
          <circle cx="28" cy="92" r="5" fill="#f72585"/>
        </svg>
      `;
    }

    if (type === 'cat_toy_yarn') {
      return `
        <svg viewBox="0 0 50 50" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="25" cy="45" rx="18" ry="4" fill="rgba(0,0,0,0.2)"/>
          <!-- Yarn Core -->
          <circle cx="25" cy="25" r="18" fill="#e63946"/>
          <!-- Strands of Yarn -->
          <path d="M 12 18 Q 25 10 38 18" stroke="#ffb703" stroke-width="2.5" fill="none"/>
          <path d="M 10 28 Q 25 38 40 28" stroke="#ffb703" stroke-width="2.5" fill="none"/>
          <path d="M 18 12 Q 35 25 18 38" stroke="#f1faee" stroke-width="2.2" fill="none"/>
          <path d="M 28 10 Q 15 25 32 38" stroke="#457b9d" stroke-width="2.2" fill="none"/>
          <!-- Loose Tail Strand -->
          <path d="M 38 32 Q 44 38 48 35 Q 52 32 50 42" stroke="#e63946" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </svg>
      `;
    }

    if (type === 'cat_scratcher') {
      return `
        <svg viewBox="0 0 70 95" width="100%" height="100%">
          <!-- Base -->
          <ellipse cx="35" cy="85" rx="30" ry="9" fill="#9c6644"/>
          <!-- Sisal Scratcher Board -->
          <rect x="25" y="15" width="20" height="70" rx="5" fill="#ddb892" stroke="#7f5539" stroke-width="1.5"/>
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

    // Default: food_bowl
    return `
      <svg viewBox="0 0 70 45" width="100%" height="100%">
        <ellipse cx="35" cy="35" rx="30" ry="9" fill="#e76f51"/>
        <ellipse cx="35" cy="30" rx="26" ry="7" fill="#f4a261"/>
        <ellipse cx="35" cy="27" rx="22" ry="6" fill="#2a9d8f"/>
        <ellipse cx="32" cy="27" rx="9" ry="3.5" fill="#e9c46a"/>
        <ellipse cx="40" cy="26" rx="8" ry="3" fill="#f4a261"/>
      </svg>
    `;
  }
};
