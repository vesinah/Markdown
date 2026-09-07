# Findings — Loop 08 (เอเชียใต้: สันสกฤต/บาลี/คันธารี + นิสสยะ Bhumibalo)

สร้างโดย Independent Reviewer (Phase A close-out) — วันที่: 2026-09-01

> หมายเหตุ: findings.md ชุดเดิมของ Loop 08 สูญหาย ไฟล์นี้สร้างใหม่จาก (1) query-log.md ของ Loop 08 และ (2) ไฟล์ที่มีอยู่จริงใน loop_08/documents/ เท่านั้น

---

## S-2025-Bhumibalo-01 (metadata-only — HTML เป็น hOCR คุณภาพต่ำ อ่านตัวบทไม่ได้)

- **Bibliography:** Bhumibalo Bhikku (พระภูมิบาล ภิกขุ). *Bilingual Tripitaka Nissaya (nissaya ภาษาบาลี-ไทย)*, Bhumibalo Bhikku Series, 1970–1997 — เล่ม "Introduction to Buddhist Scriptures (แนะนำพระคัมภีร์ทางพระพุทธศาสนา)" (ฉบับดิจิทัลจาก Internet Archive, สแกน + Tesseract OCR)
- **Language:** Thai (วัตถุศึกษา: Pali-Thai nissaya) — **TH**; บาลีในฐานะต้นบท (**PA**)
- **URL:** https://archive.org/details/bilingual-tripitaka-nissaya-bhumipalo-bhikku-series
- **Local Path:** `research-notes/loop_08/documents/S-2025-Bhumibalo-Nissaya-Intro.html` (77.5 MB, hOCR; gzip copy `.html.gz` 8.4 MB)
- **สถานะ:** **metadata-only** — ไฟล์ HTML เป็น hOCR output ของ tesseract 5.3.0 (lang=tha) ซึ่ง body text เป็น glyph เศษ/ความมั่นใจต่ำ อ่านประโยคไทยต่อเนื่องไม่ได้ จึง **ไม่มี quote เชิงเนื้อหา** (ห้ามมโน)
- **Quote (verbatim จาก OCR metadata ของไฟล์เท่านั้น — ไม่ใช่เนื้อหาตัวบท):**
  1. `Introduction to Buddhist Scriptures (แนะนำพระคัมภีร์ทางพระพุทธศาสนา)` — ชื่อไฟล์ jp2 ใน `title="image ..."` ของ `<div class="ocr_page">` หน้า 0
  2. `tesseract 5.3.0-6-g76ae` — จาก `<meta name="ocr-system">`; `<p ... lang="tha">` ยืนยันการรู้จำภาษาไทย
- **ข้อสังเกต:** ยืนยันได้เฉพาะว่าเป็นสแกนหนังสือไทยชื่อ "แนะนำพระคัมภีร์ทางพระพุทธศาสนา" พร้อม OCR ภาษาไทย — สอดคล้องกับ query-log ที่ระบุว่าเป็น Intro ของชุด nissaya ทวิภาษา Bhumibalo (1970–1997) การอ้างเนื้อหาจริงต้องรอ OCR ใหม่คุณภาพสูงหรืออ่านภาพ jp2 โดยตรง (TODO Phase B)

---

## S-2003-Salomon-00 (metadata-only จาก Crossref — ยังไม่มีไฟล์)

- **Bibliography:** Salomon, Richard. "'The Senior Manuscripts': Another Collection of Gandharan Buddhist Scrolls". *Journal of the American Oriental Society* 123/1 (2003). DOI: 10.2307/3217845 (จาก query-log #8 — ผ่าน Crossref)
- **Language:** English (วัตถุศึกษา: Gandhari/Kharoṣṭhī birch-bark scrolls)
- **URL:** https://doi.org/10.2307/3217845
- **Local Path:** — (ไม่มีไฟล์)
- **สถานะ:** metadata-only — ตาม query-log; ค้น "Gandhari manuscripts Senior collection" พบตรง แต่ยังไม่ดาวน์โหลด/อ่าน

---

## แหล่งที่ถูกบล็อก (skip ครบ 3 ครั้ง — จาก query-log Skip log)

- OAPEN *Afterlife of Avestan Manuscripts* (2024) — 403 Forbidden ×1 + connection closed ×2 → skip (บันทึกใน blocked-documents)
- OAPEN *Three Early Mahāyāna Treatises from Gandhāra (Bajaur Kharoṣṭhī Fragments)* (2022) — connection closed ×3 → skip
- OpenAlex API — 429 rate-limit ต่อเนื่อง (สะสมกับ Loop 07 เกิน 3 ครั้ง) → เปลี่ยนไปใช้ Crossref + Internet Archive

## สรุปข้อค้นพบหลัก A-08 (จาก query-log เท่านั้น)

1. **nissaya Bhumibalo (1970–1997):** ชุดพระไตรปิฎกทวิภาษา นิสสยะไทย บน Internet Archive — ข้อค้นพบหลักของ Loop 08 และของโปรเจกต์ (ยืนยันการใช้ nissaya ต่อเนื่องถึงปลายศตวรรษที่ 20 เป็นสื่อพิมพ์/ดิจิทัล)
2. **ṭīkā / टीका (SA):** ยืนยันจาก IA + Crossref (Takasaki 1975 Ratnagotravibhāga, Yonezawa 1999 Prasannapadā Lakṣaṇāṭīkā) ว่าเป็นรูปแบบ commentary/subcommentary หลักของสันสกฤต
3. **bhāṣā-ṭīkā (HI):** "Sanskrit Sloka With Hindi Commentary" (IA 1895) ยืนยันศัพท์ ภाषा-टीका สำหรับการแปลสันสกฤต→ฮินดี
4. **ช่องว่าง:** Gandhāra (Salomon) ยัง metadata-only; OAPEN 2 รายการถูกบล็อก; OCR ของไฟล์ Bhumibalo ใช้งานไม่ได้
