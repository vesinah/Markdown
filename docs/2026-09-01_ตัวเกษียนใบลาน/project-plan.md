# Project Plan — interlinear-gloss-palmleaf

**วันเริ่มโปรเจกต์:** 2026-09-01
**สถานะ:** ขั้นตอนการฮาร์เวสข้อมูล Phase A/B/C เสร็จสมบูรณ์ 100% (19 loops, 67 sources) — เสนอขออนุมัติโครงร่างรายงานวิจัย (Outline Gate Proposal)

---

## 1. วัตถุประสงค์และคำถามวิจัย

**หัวข้อ:** ตัวเกษียน (Interlinear Gloss) ในเอกสารคัมภีร์ใบลานของไทย: การศึกษาเปรียบเทียบข้ามวัฒนธรรมพุทธศาสนา

**คำถามวิจัยหลัก:**
1. การจัดองค์ประกอบโครงสร้างเอกสารแบบ "ตัวเกษียน" (ตัวบทบาลีตัวใหญ่เป็นบรรทัดหลัก 1–4 บรรทัดต่อหน้า พร้อมคำแปลท้องถิ่นตัวเล็กพร้อมเลขลำดับ ประกอบบน-ล่างบรรทัดบาลี) ปรากฏในวัฒนธรรมคัมภีร์พุทธศาสนาใดอีกบ้าง — พม่า ศรีลังกา หรือไม่?
2. ฝั่งมหายาน/วัชรยาน (จีน ญี่ปุ่น ทิเบต) มีปรากฏการณ์เทียบเท่าหรือไม่?
3. รากฐานและคติของระบบนี้คืออะไร — เป็นระบบของเถรวาทโดยกำเนิดหรือไทยรับจากที่อื่น?
4. หากไม่พบตัวอย่างเทียบเท่าที่อื่น ไทยพัฒนาขึ้นเองหรือ?

**ประเด็นเชิงวิธีวิทยา:** การศึกษา bitexts ของไทยในอดีตมักรวม นิสยะ (ระบบยกตัวบทสลับคำแปลต่อเนื่อง — ที่มาจากพม่า/ลังกา sannaya) กับ ตัวเกษียน (interlinear gloss) เข้าด้วยกัน โดยไม่แยกประเภท — รายงานนี้ต้องแยกให้ชัดและ map ความเชื่อมโยงข้ามวัฒนธรรม

---

## 2. ประเภทงานและมาตรฐานความยาว

- **ประเภท:** รายงานวิชาการเข้มข้น 5 บท (ไฟล์แยกบท)
- **ความยาว:** ขั้นต่ำ 10,000 คำ/บท (ผู้ใช้ override จาก default 5,000–10,000) ไม่จำกัดสูงสุด
- **เกณฑ์รวม:** ทุกบทรวมกัน >= 50,000 คำ (เทียบ 250,000 อักขระ ตามสูตรอักขระ/5.0)
- **การนับคำ:** `count_words.py` — อักขระไม่รวมช่องว่าง หาร 5.0
- **การอ้างอิง:** Chicago/Turabian Notes-Bibliography, เรียงเชิงอรรถ [N] ต่อเนื่อง
- **ภาพประกอบ:** เชื่อมโยงไปยังภาพคัมภีร์ (IIIF / digital collections) — ไม่ฝังรูปใน markdown
- **ข้อห้าม:** ไม่ใช้ emoji, ไม่แบ่งคำไทยเป็นวรรค, ไม่อ้าง Wikipedia/Wikidata ตรง, ไม่อ้างข้อมูลที่ไม่มีหลักฐานในเครื่อง

---

## 3. โครงร่างบท (Outline — ผ่านการยืนยันกับผู้ใช้ 2026-09-01)

| บท | ชื่อ | สาระ |
|:--:|:---|:---|
| 0 | สถานการณ์การศึกษา Interlinear Gloss ข้ามวัฒนธรรมโลก | gloss ในเอกสารยุคกลาง (Glossa Ordinaria, biblical gloss, kunten, ตะวันออก-ตะวันตก), ศัพท์วิชาการสำคัญ, ระเบียบวิธีการศึกษา, ประเด็นวงวิชาการโลก 5 ปีล่าสุด + อนาคต |
| 1 | หัวใจ: ตัวเกษียนในใบลานไทย | ลักษณะองค์ประกอบเชิงวัสดุและข้อความ, เลขลำดับแปล, ความสัมพันธ์กับนิสยะ, ข้อถกเถียงการจำแนกประเภท bitexts ไทย |
| 2 | ค้นคว้าเชิงลึกเอเชียตะวันออกเฉียงใต้ | พม่า (nissaya รูปแบบ interlinear ถ้ามี), ศรีลังกา (sannaya, guttila? sarala?), ลาว, เขมร, พม่า-ลังกาเป็นทางผ่านหรือไม่ |
| 3 | เอเชียใต้และสายไหม | อินเดีย (บาลี สันสกฤต, commentary tradition), ทิเบต (mchan / interlinear annotation), จีน (科文/夹注), ญี่ปุ่น (kunten 訓点 — okototen/kunten marks), เส้นทางส่งผ่าน |
| 4 | ตารางประมวลรายการอ้างอิงเชิงวิเคราะห์ | ตารางข้อมูลงานวิชาการแต่ละชิ้น ลิงก์ ข้อสรุป เรียงตามชื่อผู้เขียน + ตามเวลา |

---

## 4. Language Coverage Plan

### Tier
- **Tier 0:** TH, EN — ค้นเสมอ
- **Tier 1 (บังคับเชิงลึก, >= 3 source/ภาษา หรือ skip+เหตุผล):** PA (บาลี), SI (สิงหล), MY (พม่า), ZH (จีน), JA (ญี่ปุ่น kunten), TI (ทิเบต)
- **Tier 2 (สำรวจ >= 1 query/เฟส, promote อัตโนมัติเมื่อพบงานสำคัญ >= 3 ชิ้น):** DE, FR, SA (สันสกฤต), HI (ฮินดี)

### Keyword Matrix

| ประเด็น | EN | TH | ภาษา Tier 1/2 |
|:---|:---|:---|:---|
| ตัวเกษียนไทย | interlinear gloss, glossed manuscript, palm-leaf manuscript Thailand, Pali vernacular translation | ตัวเกษียน, อักษรเกษียน, คัมภีร์ใบลาน คำแปล, บาลี คำแปล ใบลาน, ทับหลัง(บาลี) | — |
| นิสยะพม่า | nissaya, nissaya translation, Burmese Pali commentary | นิสยะ | **MY**: nissaya ကျမ်း, နိသျ; **PA**: nissaya |
| สันนยะลังกา | sannaya, Sinhala sannaya, Pali sannaya | สันนยะ | **SI**: සන්නය, සන්නය ලිවීම; **PA**: saṇṇaya |
| ทิเบต | Tibetan interlinear notes, mchan 'grel, mchan | — | **TI**: མཆན (mchan), ཚིག་བཤད; **DE**: Interlinearversion tibetisch |
| จีน | Dunhuang manuscripts commentary, ke-wen 科文, jiazzhu 夹注 | — | **ZH**: 夹注 (interlinear notes), 科判, 随文注 |
| ญี่ปุ่น | kunten 訓点, kunten materials, okoto-ten, Japanese Buddhist manuscript gloss | — | **JA**: 訓点, 訓点資料, 声点, 返り点, おこし点 |
| ยุโรปยุคกลาง | Glossa Ordinaria, interlinear gloss, medieval glossed Bible, gloss psalter | — | **DE**: Interlinearversion, Glossenpsalter; **FR**: glose, glosse |
| อินเดีย | Sanskrit manuscript marginalia, commentary manuscript tradition | — | **SA**: vākya, ṭīkā, anuvāda; **HI**: टीका, अनुवाद |

### KPI ภาษา
- Tier 1 รายภาษา: >= 3 source ใช้จริง หรือ skip พร้อมเหตุผลที่ query-log ยืนยัน
- Source ไม่ใช่ TH/EN: >= 25% ของ source-index
- Tier 2: >= 1 query สำรวจต่อภาษาต่อเฟส

---

## 5. แผน Foraging Loops

**Phase A (ค้นกว้าง): floor 8 / ceiling 20 ลูป**

| Loop | โดเมน | Query หลัก |
|:--:|:---|:---|
| A-01 | ตัวเกษียน/ใบลานไทย | interlinear gloss Thailand palm leaf; ตัวเกษียน; ใบลาน บาลี คำแปล เลข |
| A-02 | นิสยะพม่า | nissaya Burmese Pali translation; နိသျ |
| A-03 | สันนยะลังกา | sannaya Sinhala Pali; සන්නය |
| A-04 | ญี่ปุ่น kunten | kunten 訓点 Buddhist manuscripts; 訓点資料 |
| A-05 | จีน | Dunhuang 夹注 interlinear; 科文 科判 manuscript |
| A-06 | ทิเบต | mchan 'grel Tibetan manuscript annotation |
| A-07 | ยุโรป/ศัพท์วิชาการ | Glossa Ordinaria interlinear gloss medieval; terminology gloss vs translation |
| A-08 | อินเดีย/สันสกฤต | Sanskrit manuscript commentary layout; ṭīkā manuscripts |
| A-09+ | ตาม gap | citation chaining, blocked-docs, ภาษา Tier 2 |

**Phase B (เจาะลึก):** floor 5 — ตาม gap จาก Phase A
**Saturation:** Novelty < 15% ติด 2 ลูป

---

## 6. KPI วิชาการ (override)

| KPI | ค่าเป้า |
|:--|:--|
| ความยาวบท | >= 10,000 คำ/บท (ผู้ใช้กำหนด) |
| Distinct authors ต่อบท | >= 8 |
| Primary : Secondary | >= 1 : 3 |
| Non-TH/EN sources | >= 25% |
| Footnote density | >= 4 / 1,000 คำ |
| Counter-evidence queries | >= 2 ต่อ thesis |

---

## 7. ทีม Sub-Agents

| Agent | บทบาท |
|:---|:---|
| Orchestrator (main) | วางแผน, จัดลูป, รวบรวม ledger |
| Explorer A (SEA) | Loop A-01, A-02, A-03 |
| Explorer B (East Asia) | Loop A-04, A-05, A-06 |
| Explorer C (West + India) | Loop A-07, A-08, Tier 2 สำรวจ |
| Reviewer/Critic | ตรวจ ledger, anti-hallucination, counter-evidence |
| Writer | เขียนร่างหลัง Outline Gate ผ่าน |

---

## 8. ตารางความคืบหน้า

| งาน | สถานะ |
|:---|:---:|
| Init + grill-me + ยืนยันโครงสร้าง | เสร็จ |
| project-plan + glossary + language plan | เสร็จ |
| Phase A loops (A-01..A-08) | เสร็จ (8 ลูป, 22 sources, เอกสารดิบ 34 ไฟล์) |
| Unbiased review ปิดเฟส A | เสร็จ (research-notes/phase-a-review.md, 0 fabrication) |
| Phase B loops (B-01..B-05) | เสร็จ (5 ลูป, เจาะลึกรายภาษาและภาพหลักฐาน) |
| Phase C loops (C1: C-01..C-03, C2: C-04..C-06) | เสร็จ (6 ลูป, เติมเต็ม South Asia, Sannaya, mchan, Bancroft images, Jiazzhu, Trends) |
| Independent Review เฟส A-C | เสร็จ (research-notes/phase-abc-review.md, แก้ไขเอกสารครบถ้วน) |
| ขั้นตอนการฮาร์เวสข้อมูล (Data Harvesting) | **เสร็จสมบูรณ์ 100% (19 loops, 67 sources)** |
| Outline Gate (เสนอโครงร่างขออนุมัติ) | **นำเสนอต่อผู้ใช้เพื่อรออนุมัติ (GATE CURRENT)** |
| เขียนร่าง 5 บท | รอการอนุมัติโครงร่างจากผู้ใช้ (ห้ามเริ่มก่อนอนุมัติ) |
| QA + ส่งมอบ final/ | รอ |

---

## 9. บันทึกการตัดสินใจสำคัญ

1. ผู้ใช้ยืนยันโครงสร้าง 5 บท (0–4) แทนรายการซ้ำ "2." ในโจทย์เดิม
2. "ตัวเกษียน" เป็นศัพท์ปฐมภูมิของรายงาน = interlinear gloss ในใบลานไทย; นิสยะ = nissaya; สันนยะ = sannaya — บันทึกใน glossary.md
3. Tier ภาษา 3 ชั้นตามตาราง §4 — ผู้ใช้ยืนยัน
4. ผู้ใช้สั่ง "อย่าสนใจโปรเจกต์ที่มีอยู่แล้ว" — โปรเจกต์นี้เริ่มใหม่จากศูนย์ ไม่ใช้ข้อมูลจากโฟลเดอร์ output อื่น
5. ความยาวขั้นต่ำ 10,000 คำ/บท override จาก default ตามความต้องการผู้ใช้
