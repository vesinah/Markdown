# Loop A-20 — Query Log: การทำแคตตาล็อกคัมภีร์ (manuscript cataloguing, descriptive catalogues)

Date: 2026-08-30 | Tool notes: OpenAlex 429 ทุก call → Crossref REST / archive.org advancedsearch API / doaj.org API

| # | Query / URL | Tool | ผลลัพธ์ | Source ใหม่ |
|:--|:---|:---|:---|:---|
| 1 | `crossref_search.py "manuscript cataloguing descriptive catalogue Sanskrit"` | Crossref | 15 ผล; พบ Pingree 2003 Descriptive Catalogue (Maharaja Man Singh II Museum — ทั้งเล่มเป็น chapter DOI); Bodleian Library Record 1984 "A new Sanskrit manuscript catalogue" | S-237 |
| 2 | `crossref_search.py "catalogue palm leaf Durbar library Shastri"` | Crossref | 15 ผล; **พบ Jolly 1907 JRAS (รีวิวแคตตาล็อก 1905 ของ H.P. Śāstrī)**; Gellner 1991 JRAS (concordance ของ Grünendahl — metadata ซ้ำกับที่มี); Otani catalogue reviews (Pecenko 1998 IIJ, Norman 1997 BSR); Liyanaratne 1991 (Sinhala palm-leaf Bodleian) | S-238 |
| 3 | `crossref_search.py "Jolly Catalogue palm-leaf Durbar Library Nepal 1905"` | Crossref | ยืนยัน Jolly 1907 = DOI 10.1017/s0035869x00037096 (ผลเดียวตรงเรื่อง) | S-238 |
| 4 | `crossref_search.py "catalogue Sanskrit manuscripts India methodology"` | Crossref | 15 ผล; พบ Pingree Catalogue of Jyotiṣa Manuscripts Wellcome (2004, ทั้งเล่ม chapter DOI, Wujastyk เขียน Foreword) | S-239 |
| 5 | `crossref_search.py "Kashyapa catalogues Sanskrit manuscripts"` | Crossref | พบ Census of the Exact Sciences in Sanskrit (Pingree) หลายภาค + "LISTS OF CATALOGUES OF SANSKRIT MANUSCRIPTS AND BOOKS" (chapter) — ไม่มี Jñānapith Mithila catalogue | - |
| 6 | webfetch https://archive.org/advancedsearch.php?q=palm+leaf+manuscript+catalogue&...&output=json | IA API | **สำเร็จ** — numFound 258 (JSON) | S-240, S-241 |
| 7 | webfetch https://archive.org/details/dli.Wisdom.Frozen.In.Time | webfetch | สำเร็จ (บันทึกใน A-19 เป็น S-235 เพราะ query มาจากขั้นนั้น) | S-235 |
| 8 | webfetch archive.org advancedsearch `title:(catalogue palm-leaf) OR title:(descriptive catalogue Sanskrit manuscripts)` | IA API | **สำเร็จ** — numFound 700; ได้รายการแคตตาล็อกจริงยุคเก่า 15 รายการ (Government Oriental MSS Library Madras vols., ORI Mysore, Sanskrit College Calcutta 1906, Bhandarkar series, **bub_gb_G3woAAAAYAAJ = Śāstrī 1905 Durbar Library**) | S-240, S-241 |
| 9 | webfetch https://archive.org/details/bub_gb_G3woAAAAYAAJ | webfetch | **สำเร็จ** — metadata เต็ม: 1905, Baptist Mission Press Calcutta, 446 pp, Public Domain, Harvard copy, Language English+Sanskrit | S-240 |
| 10 | Invoke-WebRequest archive.org/download/bub_gb_G3woAAAAYAAJ/bub_gb_G3woAAAAYAAJ.pdf → S-Sastri_1905_DurbarLibraryCatalogue_vol1.pdf | ดาวน์โหลด | **สำเร็จ** 13.3 MB | S-240 |
| 11 | `pdf_extractor.py --check S-Sastri_1905_...pdf` | pdf_extractor | **PASS** — 445 หน้า (empty 5), avg 806.9 chars/page, text-layer | S-240 |
| 12 | สกัด sample หน้า (PyMuPDF → shastri_1905_*.txt 5 ไฟล์) | PyMuPDF | ได้ title page, Preface (OCR พังบางส่วน), รายการ Devanagari จริง (รหัส 1,2,3... + ชื่อกรณฑ์ + จำนวนโศลก + ปี N.S.) | S-240 |
| 13 | harvester `10.1515/9783110225631.159` (Wujastyk "Indian Manuscripts") | harvester | metadata ได้; PDF route ให้หน้า paywall ("Not Authenticated", "Purchase Chapter PDF 30,00 €") — **ไม่ใช่ OA** | S-242 (metadata) |
| 14 | `crossref_search.py "Nepal German Manuscript Cataloguing Project NGMCP"` | Crossref | พบ Tanaka 1990 IBK (NGMPP — มีอยู่แล้วในระบบ), Yadav 2007 "Cataloguing in Nepal" (IFLA Cataloguing Principles, De Gruyter) | - (Yadav ไม่เก็บ — สั้น/เชิงห้องสมุด) |
| 15 | `crossref_search.py "A Census of Sanskrit Manuscripts catalogues survey India"` | Crossref | พบ Tokutake 2026 HSSA 129 (Supplementing Pingree's Census — **OA CC-BY-SA**) | S-243 |
| 16 | harvester `10.18732/hssa129` + DOAJ API + webfetch hssa-journal.org | harvester/DOAJ/webfetch | landing page สำเร็จ (3916 B); **"Download data is not yet available"** — PDF ยังไม่ขึ้น (ตีพิมพ์ 2026-05-28); ได้ abstract เต็ม + citation | S-243 (abstract) |
| 17 | `crossref_search.py "Perumal Sanskrit manuscripts Tamilnadu survey"` | Crossref | Perumal 2012 (Aspects of Manuscript Culture in South India, Brill ch.9) — paywall, ไม่ดึง | - |
| 18 | `crossref_search.py "manuscript catalogue production South India colophon"` | Crossref | ผลส่วนใหญ่มีแล้ว (S-142/170/173) | - |
| 19 | DOAJ API "palm leaf manuscript" (abstract) | doaj.org API | 16 ผล — ส่วนใหญ่ OCR/digitization (มีในลูป A-07 แล้ว); ไม่มี cataloguing methodology เพิ่ม | - |
| 20 | `crossref_search.py "manuscripts collection cataloguing Government Oriental Manuscript Library Madras"` | Crossref | พบ Dé 1926 BSOS "Notes on Some Sanskrit Manuscripts on Alamkara in the Madras Government Oriental MSS. Library" (metadata; ยืนยันคลัง Madras Government Oriental MSS Library มีอยู่จริงในวรรณกรรม) | - (เก่า/paywall) |

**เกณฑ์เลือก 3-6 ชิ้น/ลูป:** เลือก S-237 (Pingree 2003, metadata เทียบได้), S-238 (Jolly 1907), S-239 (Pingree Wellcome), S-240 (Śāstrī 1905 **PDF เต็ม PASS**), S-243 (Tokutake 2026 OA) — รวม 5 ชิ้น; S-241/S-242 เก็บระดับ metadata/รายการ IA
