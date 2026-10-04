# บัญชีควบคุมความคืบหน้าการยกร่างรายงานวิชาการ (Master Drafting Progress Ledger)
## โครงการ: {PROJECT_NAME}

- **เป้าหมายความยาวรวมทั้งเล่ม:** {TARGET_WORDS} คำ (คำนวณตามสูตรสากล: อักขระตัดช่องว่าง ÷ 5.0)
- **เพดานความยาวต่อรอบสปรินต์ (Task Sizing Constraint):** **ไม่เกิน 2,500–3,000 คำต่อรอบ**
- **สถานะรวมปัจจุบัน:** {CURRENT_STATUS}
- **ความยาวสะสมที่ยกร่างแล้ว:** {TOTAL_DRAFTED_WORDS} คำ ({PERCENTAGE}%)
- **จำนวนสปรินต์ที่สำเร็จ:** {COMPLETED_SPRINTS} / {TOTAL_SPRINTS} สปรินต์

---

### ตารางสถานะสปรินต์การเขียนรายบท (Sprint Progress Matrix)

| รหัสสปรินต์ | บทและหัวข้อหลัก | เป้าหมายคำ | คำนวณจริง (`count_words.py`) | จำนวนเชิงอรรถ | สถานะ Gate 4 | ไฟล์ผลลัพธ์ |
|:---:|:---|:---:|:---:|:---:|:---:|:---|
| **Sprint 1.1** | บทที่ 1 (หัวข้อย่อย 1.1) | ~2,500 คำ | {ACTUAL_WORDS} | {NOTES_COUNT} | PASS | `drafts/sections/ch01_sec01.md` |
| **Sprint 1.2** | บทที่ 1 (หัวข้อย่อย 1.2) | ~2,500 คำ | {ACTUAL_WORDS} | {NOTES_COUNT} | PASS | `drafts/sections/ch01_sec02.md` |

---

### กฎการดำเนินงานและการรักษาจุดคืนสภาพ (Drafting Protocol)
1. **Dossier-Driven Only:** การยกร่างแต่ละสปรินต์ต้องเขียนและอ้างอิงจาก Source Analysis Dossiers ใน `research-notes/sources/` ที่ผ่าน Gate 3 แล้วเท่านั้น ห้ามอ่านไฟล์ PDF ดิบโดยตรง
2. **Gate 4 (Section Quality Gate):** เมื่อยกร่างแต่ละสปรินต์เสร็จสิ้น ต้องรัน `python .agent/scripts/count_words.py --file drafts/sections/chXX_secYY.md` เพื่อตรวจจำนวนคำและยืนยันว่าไม่มีการเขียนกลวงหรือตกต่ำกว่าเกณฑ์
3. **Gate 5 (Assembly & Footnote Engine):** เมื่อรวมสปรินต์ย่อยเข้าเป็นบทใน `drafts/assembled/chXX.md` ต้องรัน `python .agent/scripts/footnote_engine.py drafts/assembled/chXX.md` เพื่อจัดเรียงลำดับเชิงอรรถและล้างรหัสระบบ `S-YYYY-` และ `.md` ออก 100% ก่อนย้ายเข้า `final/`
