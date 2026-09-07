# Query Log — Loop 07 (ยุโรปยุคกลาง + ศัพท์วิชาการ) & Tier 2

วันที่: 2026-09-01 | Agent: Explorer C

## การค้นหา

| # | Query | เครื่องมือ | ผลลัพธ์ | หมายเหตุ |
|---|-------|-----------|---------|----------|
| 1 | "interlinear gloss medieval manuscripts" (OpenAlex, cited:desc) | scholar_api.py | noise สูง | CLIR/NLP ไม่เกี่ยวข้อง |
| 2 | "Glossa Ordinaria medieval Bible gloss" (OpenAlex) | scholar_api.py | noise สูง | ผลกฎหมาย/ไม่เกี่ยว |
| 3 | "Glossa Ordinaria" (OpenAlex, cited:desc) | scholar_api.py | พบ Biblia Latina cum glossa ordinaria (Brepols 1992, c164), The Glossa Ordinaria (Brill 2009, c240) | ใช้เป็นตัวชี้ทาง |
| 4 | "Lesley Smith Glossa Ordinaria" (OpenAlex) | scholar_api.py | พบ PETER COMESTOR'S LECTURES (Traditio 2016) | เปิดอ่านจริง → S-2016 |
| 5 | "interlinear gloss Old English psalter" (OpenAlex, date:desc) | scholar_api.py | noise สูง | — |
| 6 | "Richard Gameson manuscript" (OpenAlex) | scholar_api.py | พบ Form and Function in the Late Medieval Bible (Brill 2013, c68) | ไม่ได้เปิดอ่าน — ไม่บันทึกเป็น source |
| 7 | "de Hamel Glossed Books of the Bible" (OpenAlex) | scholar_api.py | ไม่พบตรง | — |
| 8 | "Hebraei interlinear gloss Biblia" (OpenAlex) | scholar_api.py | พบ Glossa Ordinaria and Glossa Hebraica (Traditio 2016) | ไม่ได้เปิดอ่าน (จำกัดจำนวน) |
| 9 | "manuscript gloss terminology annotation scholium" (OpenAlex) | scholar_api.py | พบ Scholia Vetera Almagest (HAL) | ไม่เกี่ยวโดยตรง |
| 10 | "Glossen mittelalterliche Handschriften" (OpenAlex, date:desc) — **Tier 2 DE** | scholar_api.py | พบ Die Griffelglossen im Essener Evangeliar (De Gruyter 2025), Lorscher Bienensegen (MTC 2025) | Griffelglossen PDF corrupt → ลบ; Bienensegen เปิดอ่าน → S-2025-MTC |
| 11 | Lesley Smith Glossa Ordinaria (DuckDuckGo) | webfetch | **BLOCKED** — captcha | skip |
| 12 | Lesley Smith Glossa Ordinaria (Bing) | webfetch | ผลลัพธ์ spam ไม่เกี่ยวข้อง | skip |
| 13 | glose marginale manuscrit biblique (Persée) — **Tier 2 FR** | webfetch | ผลเป็น facet counts ไม่มีรายการ article เจาะจง | ค้นยาก ใช้ Crossref แทน |
| 14 | glose marginale manuscrit biblique medieval (Crossref API) | webfetch | พบ Huot 1987 (glose marginale Roman de la Rose), Morin 1896 (Liber hermeneumatum), "Les commentaires bibliques de l'époque romane: glose ordinaire et gloses périmées" | ใช้เป็นคำศัพท์ FR ยืนยันการใช้ "glose marginale"/"glose ordinaire" |
| 15 | Glossenpsalter Interlinearversion (Crossref API) — **Tier 2 DE** | webfetch | พบ: Die altenglische Interlinearversion der Regula S.Benedicti; Die virtuelle Interlinearversion (Sauter 2014); Interlinearversion ambrosianischer Hymnen | ยืนยันศัพท์ "Interlinearversion" ในภาษาเยอรมัน |
| 16 | Glossa Ordinaria (Internet Archive advancedsearch) | webfetch | พบ Biblia Latina cum glossa ordinaria et interlineari (Jagiellonian digitized 1250–1401), Lewis E 045 (1240) | ยืนยันการใช้ "glossa ordinaria et interlineari" ใน codices จริง |
| 17 | interlinear gloss psalter (Internet Archive) | webfetch | พบ Anglo-Saxon and early English psalter (Stevenson 1843-47), Fragmenta Manuscripta 028 glossed psalter (c.1140) | ดาวน์โหลด Stevenson ได้แต่เป็น scanned/LOW-TEXT → เก็บไว้, quote ไม่ได้ |
| 18 | Commented Editions of the Bible from Ninth-Century St. Gall (Brill open access) | Invoke-WebRequest + pdf_extractor | PASS 29 pages → เปิดอ่านจริง | S-2026-Grifoni |
| 19 | Peter Comestor's Lectures on the Glossa (Cambridge Core open access) | Invoke-WebRequest + pdf_extractor | PASS 32 pages → เปิดอ่านจริง | S-2016-Andree |
| 20 | Boundaries of Interpretation: Augustine to Nicholas of Lyra (Studia UBB 2025) | Invoke-WebRequest + pdf_extractor | PASS 20 pages → เปิดอ่านจริง | S-2025-Lyra |

## Skip log (ครบ 3 ครั้งหรือไม่เกี่ยวข้อง)

- DuckDuckGo HTML search — captcha bot challenge (1 ครั้ง → เปลี่ยนไป Bing)
- Bing search — ส่งผล spam ไม่เกี่ยวข้อง (1 ครั้ง → เลิกใช้ web search engine)
- OAPEN direct PDF (Avestan manuscripts) — 403 Forbidden (1 ครั้ง → skip)
- De Gruyter Griffelglossen PDF — CORRUPT (No /Root object) → ลบไฟล์ทิ้ง (บันทึกใน blocked-documents)
- OpenAlex API — 429 rate limit ต่อเนื่อง 4+ ครั้ง → เปลี่ยนไปใช้ Crossref API

## สรุป Tier 2

- **DE:** ยืนยันการใช้ศัพท์ "Interlinearversion" (Crossref: Interlinearversion der Benediktinerregel, Interlinearversion ambrosianischer Hymnen, Die virtuelle Interlinearversion 2014) และ "Griffelglossen" (Essener Evangeliar, De Gruyter 2025) — 1+ ผลลัพธ์
- **FR:** ยืนยันศัพท์ "glose marginale" (Huot 1987), "glose ordinaire" (Les commentaires bibliques de l'époque romane), "Liber hermeneumatum ou commentaire biblique en forme de glose" (Morin 1896) — 1+ ผลลัพธ์
