# Query Log — Loop A-12: สภาพการอยู่รอดของคัมภีร์ตามภูมิอากาศและสถานที่เก็บ

> วันที่: 2026-08-30 | เครื่องมือ: Crossref REST (หลัก), OpenAlex REST, document_harvester.py, pdf_extractor.py

| # | เวลา (ลำดับ) | เครื่องมือ | Query / URL | ผลลัพธ์ |
|:---|:---|:---|:---|:---|
| 1 | 1 | Crossref REST | `query=palm leaf manuscript survival climate dry&rows=12` | 12 รายการ — เจอ Wu & Li 2025 (Coatings, encapsulation CPAM/CQAS), Li & Zhang 2026 (Archival Science, modular archive), Colas 2023 (Sarasvatī Library — มีใน S-xx-06 แล้ว), Butdisuwan & Ramesh Babu 2014 (Thailand survey) |
| 2 | 2 | Crossref REST | `query=manuscript deterioration tropical humidity insects India&rows=12` | ส่วนใหญ่ entomology ไม่ตรง; เจอ Camuffo 2019 "Humidity and Deterioration Mechanisms" (Microclimate for Cultural Heritage, Elsevier) — ทฤษฎีจุลภาคทั่วไป |
| 3 | 3 | Crossref REST | `query=manuscripts cold dry climate Nepal Tibet preservation survival&rows=12` | เจอ **Skumanov 2020 "Preservation of the Mardzong Manuscripts Collection"** (Brill, *The Mardzong Manuscripts*, DOI: 10.1163/9789004443723_010) — Mustang, Nepal; Tanaka 1990 (NGMPP — มีแล้ว S-1990-tanaka-13) |
| 4 | 4 | Crossref REST | `query=palm leaf manuscript conservation storage boxing tropical&rows=12` | เจอ **Wiland et al. Part 1 (2022)** DOI: 10.1080/19455224.2022.2115093 และ **Part 2 (2023)** DOI: 10.1080/19455224.2023.2167095; Bainbridge 2023 "Boxing, Storage, and Transportation" (Conservation of Books); Shanmugasundaram 2024 (essential oils, JIC) |
| 5 | 5 | document_harvester.py | https://doi.org/10.1080/19455224.2023.2167095 | Taylor & Francis 403 → Puppeteer สำเร็จ → **PASS** (16 หน้า, 1,688 chars/page) — ได้ abstract EN/FR/DE/ES + full reference list + biographies; **body text ถูก paywall ตัด** (มีแค่ abstract ถึง 4 ภาษา + notes) |
| 6 | 6 | document_harvester.py | https://www.mdpi.com/1999-4907/14/9/1775/htm | MDPI 403 → Puppeteer สำเร็จ → **PASS** (42 หน้า, 1,709 chars/page) — full text ครบ |
| 7 | 7 | OpenAlex REST | `works/doi:10.1080/19455224.2023.2167095`, `works/doi:10.3390/f14091775` | Wiland P2: W4321610957, cited_by 22; Chu: W4386325052, cited_by 30 |
| 8 | 8 | OpenAlex REST | `filter=cites:W4386325052` + `cites:W4321610957` (per-page 8) | **cited-by chaining สำเร็จ** — กลุ่มงาน RH/อุณหภูมิ 2024 จากกลุ่มวิจัยจีน (Langmuir, Heritage Science, Molecules, Polymers, Forests) — ดูรายการใน findings |
| 9 | — | scholar_api.py (OpenAlex script) | (พยายามช่วงต้น) | ยัง 429 ตลอดช่วงแรกของ loop → ใช้ REST ตรงแทน |

## หมายเหตุเทคนิค
- Taylor & Francis: Puppeteer ได้หน้า full-text landing แต่เนื้อ article body ถูก paywall บัง (เห็น abstract 4 ภาษา + full notes/references + "Cited by 18") — งานนี้ **ไม่ใช่ OA** → บันทึกเป็น metadata+abstract level
- พบ "Plants used for palm-leaf manuscript production and conservation in South and Southeast Asia" (Botany Letters, 2026, **Open Access**) จากหน้า Related Research ของ T&F — งานใหม่น่าตาม
