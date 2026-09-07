# Loop A-24 — Query Log: แคตตาล็อกคัมภีร์เนปาล (Śāstrī Durbar, Hodgson, Bendall, แคตตาล็อกยุโรป)

Date: 2026-08-30 | Raw log only

| # | เครื่องมือ | Query / URL | ผล |
|---|---|---|---|
| Q1 | scholar_api.py (OpenAlex) | search "catalogue Nepalese manuscripts Durbar" --limit 10 | **HTTP 429** — ล้มเหลว |
| Q2 | webfetch archive.org | q=Bendall+catalogue+Buddhist+manuscripts rows=10 | พบ 4 items — Bendall 1883 Cambridge จริง 4 identifier: `india.history.resource.110515`, `catalogueofbuddh00camb_0`, `catalogueofbuddh00camb`, `b30094148` |
| Q3 | webfetch https://eprints.soas.ac.uk/13835/ (webfetch tool) | Hodgson catalogue | **Transport error** (ครั้งแรก) |
| Q4 | webfetch https://eprints.soas.ac.uk/13835/ (ซ้ำ) | — | **Transport error** ซ้ำ |
| Q5 | PowerShell Invoke-WebRequest eprints.soas.ac.uk/13835/ | ตรวจ DNS/route | **"The remote name could not be resolved: 'eprints.soas.ac.uk'"** — โดเมนไม่ resolve จากเครือข่ายนี้ → บันทึก "ยังไม่สามารถเข้าถึงได้" (ไม่ใช่ไม่มี fulltext) |
| Q6 | crossref_search.py | "Katalog nepalische Handschriften" --limit 10 | ผลล้วนเป็นแคตตาล็อก MSS ยุโรป (Innsbruck, Stuttgart, Jena, Breslau 1906, Oriens 1967) — **ไม่พบงาน DE ว่าด้วยแคตตาล็อก MSS เนปาลโดยเฉพาะ** |
| Q7 | webfetch archive.org | q=nepalische+Handschriften rows=10 | พบ 2 items: **Hahn 1988 "Indische und nepalesische Handschriften im Indologischen Seminar der Universität Bonn"** (Eimer ed., Indica et Tibetica: 81–96) + VOHD II Indische Handschriften 4 (1975, Verzeichnis der orientalischen Handschriften in Deutschland) |
| Q8 | webfetch archive.org | q=Haraprasad+Shastri+Nepal+Durbar rows=15 | พบ 2 items: Śāstrī v1 1905 (`ACatalogueOfPalm-leaf...`) + v2 1915 (`haraprasad-shastri-nepal-durbar-v-2-1915`) |
| Q9 | webfetch archive.org metadata | /metadata/indische-und-nepalische-handschriften-im-i-michael-hahn | ยืนยัน fulltext: `..._text.pdf` (Additional Text PDF), OCR `-l deu`, detected lang de (conf 1.0) |
| Q10 | webfetch archive.org metadata | /metadata/ACatalogueOfPalm-leafAndSelectedPaperMss.BelongingToTheDurbar | ยืนยัน fulltext: `Shastri_nepalV1-ocr_1905.pdf` (Text PDF 18.9 MB, ABBYY OCR); **การพบ fulltext ครั้งแรก — บริบทเดิมบันทึกว่า Śāstrī catalogue ยังไม่มี fulltext** |
| Q11 | document_harvester | Shastri_nepalV1-ocr_1905.pdf | สำเร็จ 435 หน้า **PASS (avg 1001.1 chars/page)** |
| Q12 | document_harvester | Indische und nepalische ..._text.pdf | สำเร็จ 19 หน้า **PASS (avg 1989.3 chars/page)** |
| Q13 | document_harvester | haraprasad-shastri-nepal-durbar-v-2-1915.pdf | **ล้มเหลวเชิงเนื้อหา** — ไฟล์ดาวน์โหลดได้แต่ 1 หน้า, 30 chars → LOW-TEXT/corrupt ชุด scan นี้ |
| Q14 | webfetch archive.org | q=title:(Durbar Library Nepal catalogue) rows=15 | พบ 6 items รวม `bub_gb_G3woAAAAYAAJ` (Google scan 1905 v1 พร้อม Historical Introduction โดย Bendall 82 หน้า!) + `biostor-279959` (Bendall "History of Nepal and Surrounding Kingdoms 1000–1600 AD" 1904 — historical intro ของ Śāstrī cat.) + v2 อีกชุด `_573` |
| Q15 | document_harvester | ACatalogueOfPalm-leaf..._573.pdf | **ล้มเหลวเชิงเนื้อหา** — 1 หน้า 30 chars (ชุด v2 นี้เสียเช่นกัน) |
| Q16 | document_harvester | bub_gb_G3woAAAAYAAJ.pdf | สำเร็จ 445 หน้า **PASS (avg 806.9 chars/page)** — คือ v1 1905 อีกฉบับพร้อม Bendall intro |

## Downloaded (documents/)
1. `catalogueofbuddh00camb_0.pdf` (S-272) — Bendall 1883 — PASS
2. `Shastri_nepalV1-ocr_1905.pdf` (S-273) — Śāstrī v1 1905 — PASS
3. `bub_gb_G3woAAAAYAAJ.pdf` (S-274) — Śāstrī v1 1905 (Google scan + Bendall intro) — PASS
4. `Indische und nepalische Handschriften im I - Michael Hahn_text.pdf` (S-276) — Hahn 1988 DE — PASS
5. `haraprasad-shastri-nepal-durbar-v-2-1915.pdf` (S-275) — CORRUPT (1 หน้า)
6. `ACatalogueOfPalm-leaf..._573.pdf` (S-278) — CORRUPT (1 หน้า)
