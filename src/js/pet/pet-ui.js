// ระบบส่วนติดต่อผู้ใช้ (UX / UI System) สำหรับสัตว์เลี้ยงหน้าจอ
// หน้าต่างบ้านแมว 4 แท็บ, การ์ดแมวพร้อมแถบสถิติ 6 แกน, เมนูบริบท Glassmorphism, และเอฟเฟกต์แอนิเมชัน

import { PET_BREEDS, TAIL_TYPES, BODY_BUILDS, RANDOM_NAMES } from './pet-breeds.js';
import { PERSONALITY_AXES, PERSONALITY_ARCHETYPES, PetPersonality } from './pet-personality.js';
import { ENV_ITEM_DEFS } from './pet-environment.js';
import { PetRenderer } from './pet-render.js';
import { PetMemory, BOND_LEVELS, PET_MOODS, SOUVENIR_GIFTS } from './pet-memory.js';
import { getRandomDialogue } from './pet-dialogues.js';

export const PetUI = {
  activeModal: null,
  activeContextMenu: null,
  activeTab: 'my_pets',
  selectedPetIdForDiary: null,

  // 1. เปิดโมดอลศูนย์รวมใจชาวแมว (Desktop Pets Sanctuary Modal)
  openManagementModal(manager) {
    if (this.activeModal) {
      this.activeModal.remove();
      this.activeModal = null;
    }

    const overlay = document.createElement('div');
    overlay.className = 'pet-modal-overlay';
    overlay.id = 'pet-modal-overlay';

    overlay.innerHTML = `
      <div class="pet-modal-card">
        <!-- Header -->
        <div class="pet-modal-header">
          <div class="pet-modal-title">
            <span class="pet-title-paw">🐾</span>
            <span>บ้านสัตว์เลี้ยงหน้าจอ & คาเฟ่แมว</span>
            <span class="pet-title-count">(${manager.pets.filter(p => !p.hidden).length}/${manager.pets.length} ตัว)</span>
          </div>
          <button class="pet-modal-close" id="btn-pet-modal-close" title="ปิดหน้าต่าง">&times;</button>
        </div>

        <!-- Navigation Tabs -->
        <div class="pet-modal-tabs">
          <button class="pet-tab-btn ${this.activeTab === 'my_pets' ? 'active' : ''}" data-tab="my_pets">
            🐱 น้องแมวของฉัน
          </button>
          <button class="pet-tab-btn ${this.activeTab === 'memory_diary' ? 'active' : ''}" data-tab="memory_diary">
            📖 สมุดความทรงจำ & ไดอารี่
          </button>
          <button class="pet-tab-btn ${this.activeTab === 'adoption' ? 'active' : ''}" data-tab="adoption">
            ➕ รับเลี้ยงแมวใหม่
          </button>
          <button class="pet-tab-btn ${this.activeTab === 'toys_env' ? 'active' : ''}" data-tab="toys_env">
            🧶 ของเล่น & ที่นอน
          </button>
          <button class="pet-tab-btn ${this.activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
            ⚙️ ตั้งค่าพฤติกรรม
          </button>
        </div>

        <!-- Body Content -->
        <div class="pet-modal-body" id="pet-modal-tab-content">
          ${this.renderTabContent(this.activeTab, manager)}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.activeModal = overlay;

    this.bindModalEvents(overlay, manager);
  },

  closeModal() {
    if (this.activeModal) {
      this.activeModal.remove();
      this.activeModal = null;
    }
  },

  // เรนเดอร์เนื้อหาแต่ละแท็บ
  renderTabContent(tab, manager) {
    if (tab === 'my_pets') {
      return this.renderMyPetsTab(manager);
    } else if (tab === 'memory_diary') {
      return this.renderMemoryDiaryTab(manager);
    } else if (tab === 'adoption') {
      return this.renderAdoptionTab(manager);
    } else if (tab === 'toys_env') {
      return this.renderToysTab(manager);
    } else if (tab === 'settings') {
      return this.renderSettingsTab(manager);
    }
    return '';
  },

  // แท็บ 1: รายชื่อน้องแมว
  renderMyPetsTab(manager) {
    if (!manager.pets.length) {
      return `
        <div class="pet-empty-state">
          <div style="font-size:48px;margin-bottom:8px;">😿</div>
          <div style="font-size:15px;font-weight:600;color:#495057;">ยังไม่มีน้องแมวบนหน้าจอ</div>
          <div style="font-size:13px;color:#868e96;margin:6px 0 16px;">กดแท็บ "รับเลี้ยงแมวใหม่" เพื่อเลือกสายพันธุ์และบุคลิกที่ชื่นชอบ!</div>
          <button class="pet-btn-adopt" id="btn-goto-adopt">➕ ไปรับเลี้ยงแมวตัวแรก</button>
        </div>
      `;
    }

    return `
      <div class="pet-cards-grid">
        ${manager.pets.map(p => {
          const breed = PET_BREEDS[p.breed] || PET_BREEDS.orange;
          const title = PetPersonality.getPersonalityTitle(p.personality);
          const tail = TAIL_TYPES[p.tailType || breed.defaultTail]?.name || 'หางยาว';
          const build = BODY_BUILDS[p.build || breed.defaultBuild]?.name || 'สมส่วน';
          const stats = p.personality || { intelligence: 50, diligence: 50, energy: 50, talkativeness: 50, affection: 50, sociability: 50 };

          return `
            <div class="pet-profile-card ${p.hidden ? 'is-hidden-pet' : ''}" data-id="${p.id}">
              <div class="pet-card-top">
                <div class="pet-card-avatar">
                  ${PetRenderer.renderCatSvg(breed, { ...p, state: 'sit' })}
                </div>
                <div class="pet-card-main-info">
                  <div class="pet-card-name-row">
                    <span class="pet-card-name">${p.name}</span>
                    <span class="pet-card-badge">${title}</span>
                  </div>
                  <div class="pet-card-sub">${breed.name}</div>
                  <div class="pet-card-traits">
                    <span>${tail}</span> • <span>${build}</span>
                  </div>
                  ${(() => {
                    const mem = typeof PetMemory !== 'undefined' ? PetMemory.getMemory(p) : null;
                    const bond = typeof PetMemory !== 'undefined' ? PetMemory.getBondProgress(mem) : null;
                    const mood = typeof PetMemory !== 'undefined' ? PetMemory.getMood(p) : null;
                    return `
                      <div class="pet-card-status-badges" style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
                        ${bond ? `<span class="pet-card-bond-pill" style="font-size:11px;padding:2px 7px;border-radius:12px;background:${bond.color}22;color:${bond.color};border:1px solid ${bond.color}55;" title="ระดับความผูกพัน">${bond.icon} ระดับ ${bond.level}</span>` : ''}
                        ${mood ? `<span class="pet-card-mood-pill" style="font-size:11px;padding:2px 7px;border-radius:12px;background:#e9ecef;color:#495057;" title="อารมณ์: ${mood.label}">${mood.icon} ${mood.label}</span>` : ''}
                      </div>
                    `;
                  })()}
                </div>
                <div class="pet-card-toggle-wrap">
                  <span class="pet-toggle-status ${p.hidden ? 'is-hidden' : 'is-visible'}">
                    ${p.hidden ? '💤 ซ่อนตัว' : '✨ แสดงบนจอ'}
                  </span>
                  <label class="pet-switch" title="${p.hidden ? 'คลิกเพื่อพาออกมาร่วมสนุกบนหน้าจอ' : 'คลิกเพื่อซ่อนน้องแมว (พักผ่อน)'}">
                    <input type="checkbox" class="pet-visibility-toggle" data-id="${p.id}" ${!p.hidden ? 'checked' : ''}/>
                    <span class="pet-slider"></span>
                  </label>
                </div>
              </div>

              <!-- 6-Axis Stat Bars -->
              <div class="pet-stats-bars">
                <div class="pet-stat-row" title="สติปัญญา: ฉลาด vs เด๋อ">
                  <span class="pet-stat-label">🧠 ฉลาด:</span>
                  <div class="pet-stat-track"><div class="pet-stat-fill stat-intel" style="width:${stats.intelligence}%;"></div></div>
                  <span class="pet-stat-val">${stats.intelligence}%</span>
                </div>
                <div class="pet-stat-row" title="ความขยัน: เฝ้างาน vs ขี้เกียจ">
                  <span class="pet-stat-label">⭐ ขยัน:</span>
                  <div class="pet-stat-track"><div class="pet-stat-fill stat-dili" style="width:${stats.diligence}%;"></div></div>
                  <span class="pet-stat-val">${stats.diligence}%</span>
                </div>
                <div class="pet-stat-row" title="พลังงาน: ไฮเปอร์ vs สงบ">
                  <span class="pet-stat-label">⚡ พลัง:</span>
                  <div class="pet-stat-track"><div class="pet-stat-fill stat-ener" style="width:${stats.energy}%;"></div></div>
                  <span class="pet-stat-val">${stats.energy}%</span>
                </div>
                <div class="pet-stat-row" title="ความช่างคุย: จ้อ vs เงียบ">
                  <span class="pet-stat-label">💬 พูด:</span>
                  <div class="pet-stat-track"><div class="pet-stat-fill stat-talk" style="width:${stats.talkativeness}%;"></div></div>
                  <span class="pet-stat-val">${stats.talkativeness}%</span>
                </div>
                <div class="pet-stat-row" title="ความขี้อ้อน: อ้อน vs หยิ่ง">
                  <span class="pet-stat-label">💖 อ้อน:</span>
                  <div class="pet-stat-track"><div class="pet-stat-fill stat-affe" style="width:${stats.affection}%;"></div></div>
                  <span class="pet-stat-val">${stats.affection}%</span>
                </div>
                <div class="pet-stat-row" title="การเข้าสังคม: เฟรนด์ลี่ vs สันโดษ">
                  <span class="pet-stat-label">🐾 สังคม:</span>
                  <div class="pet-stat-track"><div class="pet-stat-fill stat-soci" style="width:${stats.sociability}%;"></div></div>
                  <span class="pet-stat-val">${stats.sociability}%</span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="pet-card-actions">
                <button class="pet-card-btn highlight" data-action="open_diary" title="เปิดสมุดความทรงจำและไดอารี่">📖 ไดอารี่</button>
                <button class="pet-card-btn" data-action="tickle" title="เกาคางให้รางวัล">🖐️ เกาคาง</button>
                <button class="pet-card-btn" data-action="feed" title="ให้อาหารปลาทู">🐟 ป้อนปลา</button>
                <button class="pet-card-btn" data-action="toggle_stay" title="สลับโหมดเดินเล่นหรือนอนนิ่ง">
                  ${p.isStaying ? '▶️ ปล่อยเดิน' : '⏸️ ให้นอนเฝ้า'}
                </button>
                <button class="pet-card-btn" data-action="rename" title="เปลี่ยนชื่อ">✏️ แก้ชื่อ</button>
                <button class="pet-card-btn danger" data-action="delete" title="ส่งกลับบ้าน">🏠 ลบ</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  // แท็บ 1.5: สมุดความทรงจำและไดอารี่ (Memory Journal & Diary)
  renderMemoryDiaryTab(manager) {
    if (!manager.pets.length) {
      return `
        <div class="pet-empty-state">
          <div style="font-size:48px;margin-bottom:8px;">📖</div>
          <div style="font-size:15px;font-weight:600;color:#495057;">ยังไม่มีข้อมูลความทรงจำ</div>
          <div style="font-size:13px;color:#868e96;margin:6px 0 16px;">รับเลี้ยงน้องแมวตัวแรกเพื่อเริ่มสร้างความทรงจำร่วมกัน!</div>
          <button class="pet-btn-adopt" id="btn-goto-adopt">➕ ไปรับเลี้ยงแมวตัวแรก</button>
        </div>
      `;
    }

    if (!this.selectedPetIdForDiary || !manager.pets.some(p => p.id === this.selectedPetIdForDiary)) {
      this.selectedPetIdForDiary = manager.pets[0].id;
    }

    const pet = manager.pets.find(p => p.id === this.selectedPetIdForDiary) || manager.pets[0];
    const breed = PET_BREEDS[pet.breed] || PET_BREEDS.orange;
    const mem = typeof PetMemory !== 'undefined' ? PetMemory.getMemory(pet) : null;
    const bond = typeof PetMemory !== 'undefined' ? PetMemory.getBondProgress(mem) : { level: 1, name: 'คนแปลกหน้าขี้ระแวง', percent: 20, icon: '🐾', currentExp: 20, neededExp: 100, color: '#adb5bd' };
    const mood = typeof PetMemory !== 'undefined' ? PetMemory.getMood(pet) : { id: 'curious', label: 'อยากรู้อยากเห็น', icon: '🧐', desc: 'สดใส' };
    const days = typeof PetMemory !== 'undefined' ? PetMemory.getDaysTogether(mem) : 1;
    const stats = mem?.stats || { totalPetted: 0, totalFed: 0, totalPlaySessions: 0, totalDocsRead: 0, totalReadingMinutes: 0, nightOwlSessions: 0 };
    const gifts = (typeof SOUVENIR_GIFTS !== 'undefined') ? SOUVENIR_GIFTS : [];
    const collectedGifts = mem?.giftsCollected || [];
    const diaryEntries = mem?.diaryEntries || [];

    return `
      <div class="pet-diary-container">
        <!-- Top Pet Switcher & Profile Header -->
        <div class="pet-diary-header-card">
          <div class="pet-diary-selector-row">
            <span class="pet-diary-selector-label">🐱 เลือกน้องแมว:</span>
            <select class="pet-diary-select" id="memory-diary-pet-select">
              ${manager.pets.map(p => `
                <option value="${p.id}" ${p.id === pet.id ? 'selected' : ''}>
                  ${p.name} (${PET_BREEDS[p.breed]?.name || 'แมว'})
                </option>
              `).join('')}
            </select>
          </div>

          <div class="pet-diary-profile-row">
            <div class="pet-diary-avatar">
              ${PetRenderer.renderCatSvg(breed, { ...pet, state: 'sit' })}
            </div>
            <div class="pet-diary-details">
              <div class="pet-diary-name-wrap">
                <span class="pet-diary-name">${pet.name}</span>
                <span class="pet-diary-bond-badge" style="background:${bond.color}22;color:${bond.color};border:1px solid ${bond.color}55;">
                  ${bond.icon} ระดับ ${bond.level}: ${bond.name}
                </span>
                <span class="pet-diary-mood-badge" title="${mood.desc}">
                  ${mood.icon} ${mood.label}
                </span>
              </div>

              <!-- Bond Progress Track -->
              <div class="pet-diary-exp-section">
                <div class="pet-diary-exp-label-row">
                  <span>พลังความผูกพัน (Bond EXP)</span>
                  <span><strong>${bond.percent}%</strong> (${bond.currentExp} ${bond.neededExp === Infinity ? '' : '/ ' + bond.neededExp} EXP)</span>
                </div>
                <div class="pet-diary-exp-track">
                  <div class="pet-diary-exp-fill" style="width:${bond.percent}%;background:${bond.color};"></div>
                </div>
              </div>

              <div class="pet-diary-meta-row">
                <span>🗓️ อยู่ร่วมกันมาแล้ว: <strong>${days} วัน</strong></span>
                <span>•</span>
                <span>🐾 วันแรกที่พบกัน: <strong>${mem?.firstMetDateStr || 'เมื่อไม่นานมานี้'}</strong></span>
              </div>
            </div>
          </div>
        </div>

        <!-- 6 Stats Counter Grid -->
        <div class="pet-diary-stats-grid">
          <div class="pet-stat-box">
            <div class="pet-stat-box-icon">🖐️</div>
            <div class="pet-stat-box-val">${stats.totalPetted} ครั้ง</div>
            <div class="pet-stat-box-lbl">เกาคางลูบพุง</div>
          </div>
          <div class="pet-stat-box">
            <div class="pet-stat-box-icon">🐟</div>
            <div class="pet-stat-box-val">${stats.totalFed} มื้อ</div>
            <div class="pet-stat-box-lbl">ป้อนอาหารปลาทู</div>
          </div>
          <div class="pet-stat-box">
            <div class="pet-stat-box-icon">🧶</div>
            <div class="pet-stat-box-val">${stats.totalPlaySessions} ครั้ง</div>
            <div class="pet-stat-box-lbl">ชวนเล่นของเล่น</div>
          </div>
          <div class="pet-stat-box">
            <div class="pet-stat-box-icon">📚</div>
            <div class="pet-stat-box-val">${stats.totalDocsRead} ไฟล์</div>
            <div class="pet-stat-box-lbl">เอกสารที่ร่วมอ่าน</div>
          </div>
          <div class="pet-stat-box">
            <div class="pet-stat-box-icon">⏳</div>
            <div class="pet-stat-box-val">${stats.totalReadingMinutes} นาที</div>
            <div class="pet-stat-box-lbl">เวลาร่วมเดินทาง</div>
          </div>
          <div class="pet-stat-box">
            <div class="pet-stat-box-icon">🌙</div>
            <div class="pet-stat-box-val">${stats.nightOwlSessions} คืน</div>
            <div class="pet-stat-box-lbl">ลุยงานดึกด้วยกัน</div>
          </div>
        </div>

        ${mem?.favoriteDoc ? `
          <div class="pet-fav-doc-banner">
            <span class="fav-doc-star">⭐</span>
            <span>เอกสารเล่มโปรดของทาสที่เหมียวจำได้แม่นยำ: <strong>"${mem.favoriteDoc.name}"</strong> (เปิดอ่านร่วมกัน ${mem.favoriteDoc.count} ครั้ง)</span>
          </div>
        ` : ''}

        <!-- Souvenirs / Gifts Showcase -->
        <div class="pet-diary-section-title">
          <span>🎁 ของขวัญนำโชคที่ ${pet.name} มอบให้ทาส</span>
          <span class="pet-gifts-count">(${collectedGifts.length}/${gifts.length} ชิ้น)</span>
        </div>
        <div class="pet-gifts-grid">
          ${gifts.map(g => {
            const unlocked = collectedGifts.find(c => c.id === g.id);
            return `
              <div class="pet-gift-card ${unlocked ? 'is-unlocked' : 'is-locked'}" title="${unlocked ? g.desc : 'เงื่อนไขปลดล็อก: ' + g.req}">
                <div class="pet-gift-icon">${unlocked ? g.icon : '🔒'}</div>
                <div class="pet-gift-info">
                  <div class="pet-gift-name">${g.name}</div>
                  <div class="pet-gift-desc">${unlocked ? g.desc : 'เงื่อนไข: ' + g.req}</div>
                  ${unlocked ? `<div class="pet-gift-date">ได้รับเมื่อ ${unlocked.unlockedDateStr || 'เมื่อไม่นานมานี้'}</div>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Pet Diary Journal Timeline -->
        <div class="pet-diary-section-title">
          <span>📝 สมุดบันทึกเรื่องราว (Pet Diary Journal)</span>
          <span class="pet-diary-count">(${diaryEntries.length} บันทึก)</span>
        </div>
        <div class="pet-diary-timeline">
          ${diaryEntries.length === 0 ? `
            <div class="pet-diary-empty">ยังไม่มีบันทึกเรื่องราว</div>
          ` : diaryEntries.map(entry => `
            <div class="pet-diary-entry">
              <div class="pet-diary-entry-icon">${entry.icon || '🐾'}</div>
              <div class="pet-diary-entry-content">
                <div class="pet-diary-entry-header">
                  <span class="pet-diary-entry-title">${entry.title}</span>
                  <span class="pet-diary-entry-date">${entry.dateStr || ''} ${entry.timeStr ? '(' + entry.timeStr + ' น.)' : ''}</span>
                </div>
                <div class="pet-diary-entry-desc">${entry.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // แท็บ 2: ศูนย์รับเลี้ยงแมว (พร้อมพรีวิวสดและ 11 สายพันธุ์)
  renderAdoptionTab(manager) {
    const defaultBreed = 'white_brown_ears';
    const breedKeys = Object.keys(PET_BREEDS);
    const tailKeys = Object.keys(TAIL_TYPES);
    const buildKeys = Object.keys(BODY_BUILDS);
    const defaultName = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];

    return `
      <div class="pet-adopt-container">
        <!-- Live SVG Preview Card -->
        <div class="pet-adopt-preview-wrap">
          <div class="pet-adopt-preview-box" id="adopt-preview-svg">
            ${PetRenderer.renderCatSvg(PET_BREEDS[defaultBreed], {
              id: 'preview',
              name: defaultName,
              breed: defaultBreed,
              tailType: 'curved',
              build: 'normal',
              state: 'stand',
              scale: 1.4
            })}
          </div>
          <div class="pet-adopt-preview-title" id="adopt-preview-desc">
            ${PET_BREEDS[defaultBreed].desc}
          </div>
        </div>

        <!-- Customization Form -->
        <div class="pet-adopt-form">
          <div class="pet-form-group">
            <label>🏷️ ชื่อน้องแมว:</label>
            <div class="pet-input-dice-row">
              <input type="text" id="adopt-input-name" value="${defaultName}" maxlength="20" class="pet-input-text" placeholder="พิมพ์ชื่อน้องแมว..."/>
              <button type="button" id="btn-adopt-random-name" class="pet-btn-dice" title="สุ่มชื่อใหม่">
                <span class="btn-dice-icon">🎲</span>
                <span>สุ่มชื่อ</span>
              </button>
            </div>
          </div>

          <div class="pet-form-group">
            <label>🐱 สายพันธุ์แมว (11 สายพันธุ์):</label>
            <select id="adopt-select-breed" class="pet-select">
              <optgroup label="✨ สายพันธุ์ใหม่ล่าสุด">
                <option value="white_brown_ears" selected>แมวขาวแต้มหูน้ำตาล (White Brown Ears)</option>
                <option value="white_brown_spotted">แมวขาวแต้มน้ำตาลเต็มตัว (Cow/Piebald)</option>
                <option value="calico">แมวสามสี (Calico / Mi-ke)</option>
                <option value="persian_multicolor">แมวเปอร์เซียขนฟูหลายสี (Multicolor Persian)</option>
                <option value="persian_white">แมวเปอร์เซียขนฟูสีขาวปลอด (White Persian)</option>
              </optgroup>
              <optgroup label="🐾 สายพันธุ์ยอดนิยมเดิม">
                <option value="orange">แมวส้มชีส (Orange Tabby)</option>
                <option value="scottish_bluepoint">แมวสก๊อตติชบลูพอยต์ (Scottish Fold)</option>
                <option value="sisawat">แมวสีสวาด โคราช (Korat Silver)</option>
                <option value="tabby">แมวลายสลิด (Tabby)</option>
                <option value="siamese">แมววิเชียรมาศ (Siamese)</option>
                <option value="black">แมวดำ ก้อนถ่านนำโชค (Black Cat)</option>
              </optgroup>
            </select>
          </div>

          <div class="pet-form-row">
            <div class="pet-form-group" style="flex:1;">
              <label>〰️ ลักษณะหาง:</label>
              <select id="adopt-select-tail" class="pet-select">
                ${tailKeys.map(k => `<option value="${k}">${TAIL_TYPES[k].name}</option>`).join('')}
              </select>
            </div>
            <div class="pet-form-group" style="flex:1;">
              <label>⚖️ รูปร่าง:</label>
              <select id="adopt-select-build" class="pet-select">
                ${buildKeys.map(k => `<option value="${k}">${BODY_BUILDS[k].name}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="pet-form-group">
            <label>🎭 บุคลิกภาพสำเร็จรูป (6 แกนนิสัย):</label>
            <select id="adopt-select-archetype" class="pet-select">
              ${PERSONALITY_ARCHETYPES.map((a, idx) => `<option value="${idx}">${a.name} (${a.desc})</option>`).join('')}
              <option value="random">🎲 สุ่มค่าพลังเฉพาะตัว</option>
            </select>
          </div>

          <button class="pet-btn-adopt-submit" id="btn-submit-adopt">
            <span class="btn-paw-icon">🐾</span>
            <span>รับเลี้ยงน้องแมวตัวนี้เข้าสู่หน้าจอ!</span>
          </button>
        </div>
      </div>
    `;
  },

  // แท็บ 3: ของเล่น & เฟอร์นิเจอร์
  renderToysTab(manager) {
    const items = manager.environment?.items || [];

    return `
      <div class="pet-env-settings-wrap">
        <div class="pet-env-desc">
          จัดวางเฟอร์นิเจอร์และของเล่นสำหรับน้องแมวลงบนหน้าจอ คุณสามารถ<b>คลิกลากย้ายตำแหน่ง</b>ไปวางมุมใดก็ได้!
        </div>

        <div class="pet-env-items-list">
          ${Object.keys(ENV_ITEM_DEFS).map(typeKey => {
            const def = ENV_ITEM_DEFS[typeKey];
            const activeItem = items.find(i => i.type === typeKey && i.enabled);
            const isEnabled = !!activeItem;

            return `
              <div class="pet-env-row">
                <div class="pet-env-info">
                  <span class="pet-env-icon">${def.icon}</span>
                  <div>
                    <div class="pet-env-name">${def.name}</div>
                    <div class="pet-env-sub">${def.desc}</div>
                  </div>
                </div>
                <label class="pet-switch">
                  <input type="checkbox" class="env-toggle-cb" data-type="${typeKey}" ${isEnabled ? 'checked' : ''}/>
                  <span class="pet-slider"></span>
                </label>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // แท็บ 4: ตั้งค่าพฤติกรรม
  renderSettingsTab(manager) {
    const s = manager.settings;

    return `
      <div class="pet-settings-grid">
        <div class="pet-setting-card">
          <label>ความถี่ในการชวนคุย:</label>
          <select id="set-speech-freq" class="pet-select">
            <option value="often" ${s.speechFreq === 'often' ? 'selected' : ''}>คุยบ่อยมาก (ทุก ~22 วินาที)</option>
            <option value="normal" ${s.speechFreq === 'normal' ? 'selected' : ''}>ปานกลาง (ทุก ~40 วินาที)</option>
            <option value="rare" ${s.speechFreq === 'rare' ? 'selected' : ''}>นาน ๆ ครั้ง (ทุก ~80 วินาที)</option>
            <option value="off" ${s.speechFreq === 'off' ? 'selected' : ''}>ปิดเสียงกล่องคำพูด</option>
          </select>
        </div>

        <div class="pet-setting-card">
          <label>ระยะเวลาแสดงคำพูดบนจอ:</label>
          <select id="set-speech-duration" class="pet-select">
            <option value="normal" ${s.speechDuration === 'normal' ? 'selected' : ''}>นานกำลังดี (8.5 - 14 วินาที)</option>
            <option value="long" ${s.speechDuration === 'long' ? 'selected' : ''}>นานพิเศษ (12 - 18 วินาที)</option>
            <option value="extra" ${s.speechDuration === 'extra' ? 'selected' : ''}>นานจุใจ (16 - 25 วินาที)</option>
          </select>
        </div>

        <div class="pet-setting-card">
          <label>ขนาดตัวหนังสือคำพูดแมว:</label>
          <select id="set-speech-fontsize" class="pet-select">
            <option value="small" ${s.speechFontSize === 'small' ? 'selected' : ''}>เล็กกะทัดรัด (11px)</option>
            <option value="normal" ${s.speechFontSize === 'normal' ? 'selected' : ''}>ปกติ (12.5px)</option>
            <option value="large" ${s.speechFontSize === 'large' ? 'selected' : ''}>ใหญ่อ่านสบาย (14.5px)</option>
            <option value="xlarge" ${s.speechFontSize === 'xlarge' ? 'selected' : ''}>ใหญ่พิเศษ (17px)</option>
          </select>
        </div>

        <div class="pet-setting-card">
          <label>เตือนพักสายตาเมื่ออ่านนาน:</label>
          <select id="set-fatigue-time" class="pet-select">
            <option value="20" ${s.readingReminderMins === 20 ? 'selected' : ''}>20 นาที</option>
            <option value="30" ${s.readingReminderMins === 30 ? 'selected' : ''}>30 นาที (แนะนำ)</option>
            <option value="45" ${s.readingReminderMins === 45 ? 'selected' : ''}>45 นาที</option>
            <option value="60" ${s.readingReminderMins === 60 ? 'selected' : ''}>1 ชั่วโมง</option>
          </select>
        </div>

        <div class="pet-setting-card">
          <label>ขนาดตัวของน้องแมว:</label>
          <select id="set-pet-scale" class="pet-select">
            <option value="0.85" ${s.petScale === 0.85 ? 'selected' : ''}>กะทัดรัด (85%)</option>
            <option value="1.0" ${s.petScale === 1.0 ? 'selected' : ''}>มาตรฐาน (100%)</option>
            <option value="1.2" ${s.petScale === 1.2 ? 'selected' : ''}>อ้วนตุ้ยนุ้ย (120%)</option>
            <option value="1.35" ${s.petScale === 1.35 ? 'selected' : ''}>อ้วนพิเศษ (135%)</option>
          </select>
        </div>

        <div class="pet-setting-card pet-setting-actions-card">
          <label>🎮 ทดสอบท่าทาง & ของเล่น:</label>
          <div class="pet-test-btn-group">
            <button type="button" class="pet-test-btn pet-test-blocker" id="btn-test-blocker" title="ทดสอบท่าเดินมานอนทับจอเตือนพักสายตา">
              <span class="test-btn-icon">🐾</span>
              <span class="test-btn-text">จำลองเดินมานอนทับจอ</span>
            </button>
            <div class="pet-test-btn-subrow">
              <button type="button" class="pet-test-btn pet-test-butterfly" id="btn-test-butterfly" title="ปล่อยผีเสื้อบินรอบจอให้แมวกระโดดตะครุบ">
                <span class="test-btn-icon">🦋</span>
                <span class="test-btn-text">ปล่อยผีเสื้อ</span>
              </button>
              <button type="button" class="pet-test-btn pet-test-gecko" id="btn-test-gecko" title="ปล่อยจิ้งจกวิ่งเกาะขอบจอให้แมววิ่งไล่">
                <span class="test-btn-icon">🦎</span>
                <span class="test-btn-text">ปล่อยจิ้งจก</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ผูก Event Listeners ทั้งหมดในหน้าต่างโมดอล
  bindModalEvents(overlay, manager) {
    // ปิดเมื่อคลิก Overlay หรือปุ่มปิด
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeModal();
    });

    const closeBtn = overlay.querySelector('#btn-pet-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());

    // สลับแท็บ
    const tabBtns = overlay.querySelectorAll('.pet-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTab = btn.dataset.tab;
        const contentWrap = overlay.querySelector('#pet-modal-tab-content');
        if (contentWrap) {
          contentWrap.innerHTML = this.renderTabContent(this.activeTab, manager);
          this.bindTabSpecificEvents(overlay, manager);
        }
      });
    });

    this.bindTabSpecificEvents(overlay, manager);
  },

  bindTabSpecificEvents(overlay, manager) {
    // 1. My Pets Events
    const cardsWrap = overlay.querySelector('.pet-cards-grid');
    if (cardsWrap) {
      // ดักจับการสลับสวิตช์ เปิด/ปิด น้องแมวบนหน้าจอ
      cardsWrap.addEventListener('change', (e) => {
        const toggle = e.target.closest('.pet-visibility-toggle');
        if (!toggle) return;
        const petId = toggle.dataset.id;
        if (!petId) return;
        manager.setPetVisibility(petId, toggle.checked);

        // รีเฟรชแท็บและตัวนับจำนวนแมว
        const contentWrap = overlay.querySelector('#pet-modal-tab-content');
        if (contentWrap) {
          contentWrap.innerHTML = this.renderTabContent('my_pets', manager);
          this.bindTabSpecificEvents(overlay, manager);
        }
        const countEl = overlay.querySelector('.pet-title-count');
        if (countEl) {
          const visible = manager.pets.filter(p => !p.hidden).length;
          countEl.textContent = `(${visible}/${manager.pets.length} ตัว)`;
        }
      });

      cardsWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('.pet-card-btn');
        if (!btn) return;
        const card = btn.closest('.pet-profile-card');
        const petId = card?.dataset.id;
        const pet = manager.pets.find(p => p.id === petId);
        if (!pet) return;

        const action = btn.dataset.action;
        if (action === 'open_diary') {
          this.selectedPetIdForDiary = pet.id;
          const diaryTabBtn = overlay.querySelector('[data-tab="memory_diary"]');
          if (diaryTabBtn) diaryTabBtn.click();
          return;
        } else if (action === 'tickle') {
          manager.ticklePet(pet);
        } else if (action === 'feed') {
          manager.feedPet(pet);
        } else if (action === 'toggle_stay') {
          pet.isStaying = !pet.isStaying;
          manager.saveState();
          overlay.querySelector('#pet-modal-tab-content').innerHTML = this.renderTabContent('my_pets', manager);
          this.bindTabSpecificEvents(overlay, manager);
        } else if (action === 'rename') {
          const newName = prompt(`ตั้งชื่อใหม่ให้ ${pet.name}:`, pet.name);
          if (newName && newName.trim()) {
            pet.name = newName.trim();
            PetRenderer.updatePetVisuals(pet.el, pet);
            manager.saveState();
            overlay.querySelector('#pet-modal-tab-content').innerHTML = this.renderTabContent('my_pets', manager);
            this.bindTabSpecificEvents(overlay, manager);
          }
        } else if (action === 'delete') {
          if (confirm(`ต้องการเก็บ ${pet.name} เข้าบ้านหรือไม่?`)) {
            manager.removePet(pet.id);
            overlay.querySelector('#pet-modal-tab-content').innerHTML = this.renderTabContent('my_pets', manager);
            this.bindTabSpecificEvents(overlay, manager);
          }
        }
      });
    }

    // 1.5 Memory Diary Events
    const diaryPetSelect = overlay.querySelector('#memory-diary-pet-select');
    if (diaryPetSelect) {
      diaryPetSelect.addEventListener('change', (e) => {
        this.selectedPetIdForDiary = e.target.value;
        const contentWrap = overlay.querySelector('#pet-modal-tab-content');
        if (contentWrap) {
          contentWrap.innerHTML = this.renderTabContent('memory_diary', manager);
          this.bindTabSpecificEvents(overlay, manager);
        }
      });
    }

    const gotoAdoptBtn = overlay.querySelector('#btn-goto-adopt');
    if (gotoAdoptBtn) {
      gotoAdoptBtn.addEventListener('click', () => {
        const adoptTabBtn = overlay.querySelector('[data-tab="adoption"]');
        if (adoptTabBtn) adoptTabBtn.click();
      });
    }

    // 2. Adoption Form Events & Live SVG Preview
    const breedSelect = overlay.querySelector('#adopt-select-breed');
    const tailSelect = overlay.querySelector('#adopt-select-tail');
    const buildSelect = overlay.querySelector('#adopt-select-build');
    const nameInput = overlay.querySelector('#adopt-input-name');
    const previewSvg = overlay.querySelector('#adopt-preview-svg');
    const previewDesc = overlay.querySelector('#adopt-preview-desc');

    const updatePreview = () => {
      if (!previewSvg || !breedSelect) return;
      const curBreedKey = breedSelect.value;
      const breed = PET_BREEDS[curBreedKey] || PET_BREEDS.orange;
      const curTail = tailSelect ? tailSelect.value : breed.defaultTail;
      const curBuild = buildSelect ? buildSelect.value : breed.defaultBuild;
      const curName = (nameInput?.value || 'น้องแมว').trim();

      previewSvg.innerHTML = PetRenderer.renderCatSvg(breed, {
        id: 'preview',
        name: curName,
        breed: curBreedKey,
        tailType: curTail,
        build: curBuild,
        state: 'stand',
        scale: 1.4
      });

      if (previewDesc) {
        previewDesc.textContent = breed.desc;
      }
    };

    if (breedSelect) {
      breedSelect.addEventListener('change', () => {
        const b = PET_BREEDS[breedSelect.value];
        if (b) {
          if (tailSelect) tailSelect.value = b.defaultTail || 'long';
          if (buildSelect) buildSelect.value = b.defaultBuild || 'normal';
        }
        updatePreview();
      });
    }
    if (tailSelect) tailSelect.addEventListener('change', updatePreview);
    if (buildSelect) buildSelect.addEventListener('change', updatePreview);
    if (nameInput) nameInput.addEventListener('input', updatePreview);

    const randNameBtn = overlay.querySelector('#btn-adopt-random-name');
    if (randNameBtn && nameInput) {
      randNameBtn.addEventListener('click', () => {
        nameInput.value = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
        updatePreview();
      });
    }

    const submitAdoptBtn = overlay.querySelector('#btn-submit-adopt');
    if (submitAdoptBtn) {
      submitAdoptBtn.addEventListener('click', () => {
        const breedKey = breedSelect?.value || 'white_brown_ears';
        const nameVal = (nameInput?.value || 'น้องแมว').trim();
        const tailVal = tailSelect?.value || 'long';
        const buildVal = buildSelect?.value || 'normal';
        const archVal = overlay.querySelector('#adopt-select-archetype')?.value;

        let stats = null;
        if (archVal === 'random') {
          stats = PetPersonality.generateRandomStats();
        } else {
          const archIdx = parseInt(archVal, 10);
          stats = PERSONALITY_ARCHETYPES[archIdx]?.stats || PetPersonality.generateRandomStats();
        }

        manager.addNewPet({
          breed: breedKey,
          name: nameVal,
          tailType: tailVal,
          build: buildVal,
          personality: stats
        });

        // สลับไปแท็บ My Pets เพื่อโชว์แมวตัวใหม่
        const myPetsTabBtn = overlay.querySelector('[data-tab="my_pets"]');
        if (myPetsTabBtn) myPetsTabBtn.click();
      });
    }

    // 3. Environment Toggles
    const envToggles = overlay.querySelectorAll('.env-toggle-cb');
    envToggles.forEach(cb => {
      cb.addEventListener('change', () => {
        const type = cb.dataset.type;
        if (manager.environment) {
          manager.environment.toggleItem(type, cb.checked);
        }
      });
    });

    // 4. Settings bindings
    const freqSel = overlay.querySelector('#set-speech-freq');
    if (freqSel) freqSel.addEventListener('change', (e) => {
      manager.settings.speechFreq = e.target.value;
      manager.saveState();
    });

    const durSel = overlay.querySelector('#set-speech-duration');
    if (durSel) durSel.addEventListener('change', (e) => {
      manager.settings.speechDuration = e.target.value;
      manager.saveState();
    });

    const fontSel = overlay.querySelector('#set-speech-fontsize');
    if (fontSel) fontSel.addEventListener('change', (e) => {
      manager.settings.speechFontSize = e.target.value;
      manager.applySpeechFontSize();
      manager.saveState();
    });

    const fatSel = overlay.querySelector('#set-fatigue-time');
    if (fatSel) fatSel.addEventListener('change', (e) => {
      manager.settings.readingReminderMins = parseInt(e.target.value, 10);
      manager.saveState();
    });

    const scaleSel = overlay.querySelector('#set-pet-scale');
    if (scaleSel) scaleSel.addEventListener('change', (e) => {
      const sc = parseFloat(e.target.value);
      manager.settings.petScale = sc;
      manager.pets.forEach(p => {
        p.scale = sc;
        if (p.el) PetRenderer.updatePetVisuals(p.el, p);
      });
      manager.saveState();
    });

    const testBlockBtn = overlay.querySelector('#btn-test-blocker');
    if (testBlockBtn) testBlockBtn.addEventListener('click', () => {
      manager.readingStartTime = Date.now() - 3600000;
      manager.fatigueTriggered = false;
      manager.checkReadingFatigue();
      this.closeModal();
    });

    const testBflyBtn = overlay.querySelector('#btn-test-butterfly');
    if (testBflyBtn) testBflyBtn.addEventListener('click', () => {
      if (manager.pets[0]) manager.spawnButterflyNear(manager.pets[0]);
      this.closeModal();
    });

    const testGeckoBtn = overlay.querySelector('#btn-test-gecko');
    if (testGeckoBtn) testGeckoBtn.addEventListener('click', () => {
      if (manager.pets[0]) manager.spawnGeckoNear(manager.pets[0]);
      this.closeModal();
    });
  },

  // 2. เมนูบริบทคลิกขวา (Context Menu) แบบ Glassmorphism
  openContextMenu(x, y, pet, manager) {
    this.closeContextMenu();

    const breed = PET_BREEDS[pet.breed] || PET_BREEDS.orange;
    const title = PetPersonality.getPersonalityTitle(pet.personality);
    const mem = typeof PetMemory !== 'undefined' ? PetMemory.getMemory(pet) : null;
    const moodInfo = typeof PetMemory !== 'undefined' ? PetMemory.getMood(pet) : { icon: '✨', label: 'สดใส' };
    const bondInfo = typeof PetMemory !== 'undefined' ? PetMemory.getBondProgress(mem) : null;

    const menu = document.createElement('div');
    menu.className = 'pet-context-menu';
    menu.style.left = `${Math.min(x, window.innerWidth - 220)}px`;
    menu.style.top = `${Math.min(y, window.innerHeight - 380)}px`;

    menu.innerHTML = `
      <div class="pet-menu-header">
        <div style="font-weight:700;font-size:13px;color:#212529;">🐾 ${pet.name}</div>
        <div style="font-size:11px;color:#6c757d;">${breed.shortName} • ${bondInfo ? bondInfo.name : title}</div>
      </div>
      <button class="pet-menu-item" data-action="tickle">🖐️ เกาคาง / ลูบพุง</button>
      <button class="pet-menu-item" data-action="feed">🐟 ให้อาหาร / ปลาทู</button>
      <button class="pet-menu-item" data-action="open_diary">📖 สมุดความทรงจำ & ไดอารี่</button>
      <button class="pet-menu-item" data-action="view_mood">💭 อารมณ์: ${moodInfo.icon} ${moodInfo.label}</button>
      <button class="pet-menu-item" data-action="toggle_stay">
        ${pet.isStaying ? '▶️ สั่งให้ออกเดินเล่น' : '⏸️ สั่งให้นอนเฝ้าตรงนี้'}
      </button>
      <button class="pet-menu-item" data-action="rename">✏️ เปลี่ยนชื่อ</button>
      <button class="pet-menu-item" data-action="spawn_prey">🦋 ปล่อยผีเสื้อ / จิ้งจก</button>
      <div class="pet-menu-sep"></div>
      <button class="pet-menu-item" data-action="add_pet">➕ รับเลี้ยงแมวเพิ่ม</button>
      <button class="pet-menu-item" data-action="open_manager">🏰 บ้านแมว & คาเฟ่...</button>
      <div class="pet-menu-sep"></div>
      <button class="pet-menu-item" data-action="toggle_visibility">
        ${pet.hidden ? '✨ นำออกมาวิ่งเล่นบนจอ' : '💤 ส่งไปพักผ่อน (ซ่อนตัว)'}
      </button>
      <button class="pet-menu-item danger" data-action="dismiss">🏠 เก็บเข้าบ้าน (ลบตัวนี้)</button>
    `;

    menu.addEventListener('click', (e) => {
      const item = e.target.closest('.pet-menu-item');
      if (!item) return;
      const act = item.dataset.action;
      this.closeContextMenu();

      if (act === 'tickle') manager.ticklePet(pet);
      else if (act === 'feed') manager.feedPet(pet);
      else if (act === 'open_diary') {
        this.selectedPetIdForDiary = pet.id;
        this.openManagementModal(manager);
        const diaryBtn = this.activeModal?.querySelector('[data-tab="memory_diary"]');
        if (diaryBtn) diaryBtn.click();
      } else if (act === 'view_mood') {
        const pMem = typeof PetMemory !== 'undefined' ? PetMemory.getMemory(pet) : null;
        const msg = getRandomDialogue('mood', { petName: pet.name, mood: pet.mood, petMemory: pMem, pet });
        manager.say(pet, msg, 4500);
      } else if (act === 'toggle_stay') {
        pet.isStaying = !pet.isStaying;
        manager.saveState();
        manager.say(pet, pet.isStaying ? 'รับทราบ! เหมียวจะนอนเฝ้าตรงนี้' : 'เย้! ได้เวลาออกสำรวจแล้ว!', 3000);
      } else if (act === 'toggle_visibility') {
        manager.togglePetVisibility(pet.id);
      } else if (act === 'rename') {
        const newName = prompt(`ตั้งชื่อใหม่ให้ ${pet.name}:`, pet.name);
        if (newName && newName.trim()) {
          pet.name = newName.trim();
          PetRenderer.updatePetVisuals(pet.el, pet);
          manager.saveState();
        }
      } else if (act === 'spawn_prey') {
        if (Math.random() > 0.5) manager.spawnButterflyNear(pet);
        else manager.spawnGeckoNear(pet);
      } else if (act === 'add_pet') {
        this.openManagementModal(manager);
        const adoptBtn = this.activeModal?.querySelector('[data-tab="adoption"]');
        if (adoptBtn) adoptBtn.click();
      } else if (act === 'open_manager') {
        this.openManagementModal(manager);
      } else if (act === 'dismiss') {
        manager.removePet(pet.id);
      }
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

  // 2.1 เมนูวงกลมรอบตัวแมว (Radial / Circular Menu - Style 2 Kawaii Pastel Paws)
  activeRadialMenu: null,

  toggleRadialMenu(pet, manager) {
    if (this.activeRadialMenu && this.activeRadialMenu._petId === pet.id) {
      this.closeRadialMenu();
    } else {
      this.openRadialMenu(pet, manager);
    }
  },

  closeRadialMenu() {
    if (this.activeRadialMenu) {
      if (this.activeRadialMenu._outsideHandler) {
        window.removeEventListener('pointerdown', this.activeRadialMenu._outsideHandler);
      }
      if (this.activeRadialMenu._pet) {
        this.activeRadialMenu._pet.hasRadialMenuOpen = false;
      }
      this.activeRadialMenu.remove();
      this.activeRadialMenu = null;
    }
  },

  openRadialMenu(pet, manager) {
    this.closeRadialMenu();
    this.closeContextMenu();

    // ล็อคให้แมวหยุดนิ่งอยู่กับที่ทันที ไม่ให้เคลื่อนที่หนีเมนูวงกลม
    pet.hasRadialMenuOpen = true;
    pet.targetX = null;
    pet.targetY = null;
    pet.targetAction = null;
    pet.vx = 0;
    pet.vy = 0;
    if (pet.state === 'walk' || pet.state === 'run') {
      pet.state = 'sit';
      PetRenderer.updatePetVisuals(pet.el, pet);
    }

    const layer = manager.layerEl || document.body;
    const menu = document.createElement('div');
    menu.className = 'pet-radial-menu radial-style-kawaii-paw';
    menu._petId = pet.id;
    menu._pet = pet;

    // คำนวณจุดกึ่งกลางอิงตามตำแหน่งตัวแมว
    const centerX = pet.x + 42;
    const centerY = pet.y + 35;
    menu.style.left = `${centerX}px`;
    menu.style.top = `${centerY}px`;

    // 4 คำสั่งหลักรอบตัวแมว (ตัดปุ่มเก็บเข้าบ้านออกเพื่อความปลอดภัย) + 1 ทางลัดเปิดไดอารี่
    const items = [
      { id: 'tickle',  icon: '🖐️', label: 'เกา/ลูบ',        angle: -135, cls: 'action-tickle' },
      { id: 'feed',    icon: '🐟', label: 'ให้อาหาร',       angle: -45,  cls: 'action-feed' },
      { id: 'stay',    icon: pet.isStaying ? '▶️' : '💤', label: pet.isStaying ? 'ให้เดิน' : 'สั่งนอน', angle: 45, cls: 'action-stay' },
      { id: 'prey',    icon: '🦋', label: 'ปล่อยผีเสื้อ',   angle: 135,  cls: 'action-prey' }
    ];

    // ตรวจสอบขอบจอ (Edge Boundary Clamping)
    let radius = 76;
    if (centerX < 85 || centerX > window.innerWidth - 85 || centerY < 85 || centerY > window.innerHeight - 85) {
      radius = 65;
    }

    let buttonsHtml = '';
    items.forEach((item, idx) => {
      const rad = (item.angle * Math.PI) / 180;
      const x = Math.round(Math.cos(rad) * radius);
      const y = Math.round(Math.sin(rad) * radius);

      buttonsHtml += `
        <button class="pet-radial-item ${item.cls}" data-action="${item.id}" style="--rx:${x}px; --ry:${y}px; --anim-delay:${idx * 0.04}s;" title="${item.label}">
          <span class="radial-paw-bead bead-1"></span>
          <span class="radial-paw-bead bead-2"></span>
          <span class="radial-paw-bead bead-3"></span>
          <span class="radial-icon">${item.icon}</span>
          <span class="radial-label">${item.label}</span>
        </button>
      `;
    });

    // ปุ่มลัดไดอารี่กึ่งกลางข้างใต้ตัวแมว
    buttonsHtml += `
      <button class="pet-radial-diary-pill" data-action="open_diary" title="เปิดสมุดไดอารี่ & ความทรงจำ">
        <span>📖</span>
        <span class="radial-diary-text">ไดอารี่</span>
      </button>
    `;

    menu.innerHTML = buttonsHtml;

    menu.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      e.stopPropagation();
      const action = btn.dataset.action;
      this.closeRadialMenu();

      if (action === 'tickle') {
        manager.ticklePet(pet);
      } else if (action === 'feed') {
        manager.feedPet(pet);
      } else if (action === 'stay') {
        pet.isStaying = !pet.isStaying;
        if (pet.isStaying) {
          pet.state = 'sleep_loaf';
          manager.say(pet, 'รับทราบ! เหมียวจะนอนนิ่งพักผ่อนตรงนี้นะ 💤', 3200);
        } else {
          pet.state = 'stand';
          manager.say(pet, 'เย้! ได้เวลาออกเดินสำรวจแล้วเหมียว~ 🐾', 3200);
        }
        PetRenderer.updatePetVisuals(pet.el, pet);
        manager.saveState();
      } else if (action === 'prey') {
        if (Math.random() > 0.5) manager.spawnButterflyNear(pet);
        else manager.spawnGeckoNear(pet);
      } else if (action === 'open_diary') {
        this.selectedPetIdForDiary = pet.id;
        this.openManagementModal(manager);
        const diaryBtn = this.activeModal?.querySelector('[data-tab="memory_diary"]');
        if (diaryBtn) diaryBtn.click();
      }
    });

    layer.appendChild(menu);
    this.activeRadialMenu = menu;

    // ปิดเมนูอัตโนมัติเมื่อคลิกนอกพื้นที่
    const outsideHandler = (e) => {
      if (!menu.contains(e.target) && !pet.el?.contains(e.target)) {
        this.closeRadialMenu();
      }
    };
    menu._outsideHandler = outsideHandler;
    setTimeout(() => {
      window.addEventListener('pointerdown', outsideHandler);
    }, 60);
  },

  // 3. ปล่อยเอฟเฟกต์แอนิเมชันลอย
  spawnFx(type, x, y, layerEl) {
    if (!layerEl) return;
    const fx = document.createElement('div');
    fx.className = `pet-fx pet-fx-${type}`;
    fx.style.left = `${x}px`;
    fx.style.top = `${y}px`;

    const iconMap = {
      heart: '❤️',
      star: '✨',
      sweat: '💧',
      zzz: 'Zzz...',
      music: '🎵',
      exclamation: '❗'
    };
    fx.textContent = iconMap[type] || '❤️';

    layerEl.appendChild(fx);
    setTimeout(() => fx.remove(), 1600);
  },

  // 4. แถบควบคุมบนหน้าจอแบบ Floating Control Bar (Pet Control Bar Dock)
  renderPetControlBar(manager) {
    let bar = document.getElementById('pet-control-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'pet-control-bar';
      bar.className = 'pet-control-bar';
      document.body.appendChild(bar);
    }

    const propTypes = [
      { type: 'cat_toy_yarn', label: 'ไหมพรม', icon: '🧶' },
      { type: 'cat_house', label: 'บ้านแมว', icon: '📦' },
      { type: 'cat_condo', label: 'คอนโด', icon: '🏰' },
      { type: 'cat_bed', label: 'ที่นอน', icon: '🛏️' },
      { type: 'cat_litter_box', label: 'กระบะทราย', icon: '🏖️' }
    ];

    const isCollapsed = bar.classList.contains('collapsed');

    bar.innerHTML = `
      <div class="pet-bar-handle" id="pet-bar-toggle-collapse" title="${isCollapsed ? 'ขยายแถบควบคุม' : 'ย่อแถบควบคุม'}">
        <span class="pet-bar-icon">🐾</span>
        <span class="pet-bar-title">ของเล่น & เฟอร์นิเจอร์</span>
        <span class="pet-bar-chevron">${isCollapsed ? '▲' : '▼'}</span>
      </div>
      <div class="pet-bar-actions">
        ${propTypes.map(p => {
          const item = manager.environment?.items?.find(i => i.type === p.type);
          const isActive = item && item.enabled;
          return `
            <button class="pet-bar-btn ${isActive ? 'active' : ''}" data-prop="${p.type}" title="${p.label} (คลิกเพื่อเสก/เก็บ)">
              <span class="pet-bar-btn-icon">${p.icon}</span>
              <span class="pet-bar-btn-lbl">${p.label}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;

    // ผูก Event สำหรับย่อ/ขยาย
    const toggleBtn = bar.querySelector('#pet-bar-toggle-collapse');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        bar.classList.toggle('collapsed');
        const chev = bar.querySelector('.pet-bar-chevron');
        if (chev) {
          chev.textContent = bar.classList.contains('collapsed') ? '▲' : '▼';
        }
      });
    }

    // ผูก Event สำหรับคลิกเสก/เก็บของเล่นและเฟอร์นิเจอร์ทันที
    const btns = bar.querySelectorAll('.pet-bar-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const propType = btn.dataset.prop;
        const newState = manager.environment.toggleItem(propType);
        btn.classList.toggle('active', !!newState);
      });
    });

    return bar;
  }
};
