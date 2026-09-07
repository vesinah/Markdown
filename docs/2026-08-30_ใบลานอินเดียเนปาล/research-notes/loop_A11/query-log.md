# Query Log — Loop A-11: การฝังเก็บคัมภีร์ในหม้อและการค้นพบชุดคัมภีร์ (manuscript deposition/hoards)

> วันที่: 2026-08-30 | เครื่องมือ: scholar_api.py (OpenAlex), Crossref REST (fallback), document_harvester.py, pdf_extractor.py, webfetch

| # | เวลา (ลำดับ) | เครื่องมือ | Query / URL | ผลลัพธ์ |
|:---|:---|:---|:---|:---|
| 1 | 1 | scholar_api.py (OpenAlex) | search "Gandhara birch bark manuscripts clay pot deposition" --limit 15 | **HTTP 429 Too Many Requests** — OpenAlex rate-limit |
| 2 | 2 | scholar_api.py (OpenAlex) | search "Gilgit manuscripts stupa discovery 1931" --limit 15 | **HTTP 429** (ยืนยันว่า OpenAlex ติด limit) |
| 3 | 3 | Crossref REST | `api.crossref.org/works?query=Gandhara birch bark manuscripts clay pot deposition&rows=15` | 15 รายการ — เจอเล่ม *From Birch Bark to Digital Data* (จท.) หลายบท: Salomon (Gāndhārī BL/Schøyen), von Hinüber (Gilgit Manuscripts), Allon (Senior Kharoṣṭhī), Sander, Hartmann & Wille (Central Asia) |
| 4 | 4 | Crossref REST | `query=Gilgit manuscripts stupa discovery 1931` | 15 รายการ — เจอ **Hackin 1931** "Les manuscrits découverts près de Gilgit" (CRAI, DOI: 10.3406/crai.1931.76087) — รายงานชั้นต้นปีค้นพบจริง; Norman 1986 (review Dutt); Matsumura 1983 |
| 5 | 5 | Crossref REST | `query=manuscript hoard discovery South Asia Buddhist` | ส่วนใหญ่ไม่ตรง (Buddhist studies ทั่วไป); เจอ "Discovery of Buddhist Archaeology of Gandhara" (Brill 2025), Mes Aynak chapter |
| 6 | 6 | Crossref REST | `query=manuscript hoard deposition pot stupa Buddhist Gandhara` | ได้บทจากหนังสือ stupa Gandhara (Olivieri 2022, Marco Polo series) — ไม่ใช่ deposition คัมภีร์โดยตรง |
| 7 | 7 | Crossref REST | `query.bibliographic=Gandhāran buddhist manuscripts Senior collection British Library Kharosthi` | ยืนยัน **Salomon 2003 "The Senior Manuscripts"** (JAOS 123, DOI: 10.2307/3217845); Lindtner 2000 review Salomon 1999; Cousins 2011 review Glass |
| 8 | 8 | webfetch | https://asian.washington.edu/british-library-kharosthi-fragments | **สำเร็จ** — เนื้อหา primary เต็ม (EBMP/UW): 29 fragments ใน clay jar, จารบนหม้อ, Dharmaguptaka, ~1st c. CE |
| 9 | 9 | Crossref REST | metadata DOI 10.3390/h7040092 | Twist 2018, Humanities 7(4):92 — PDF link: mdpi.com/2076-0787/7/4/92/pdf |
| 10 | 10 | document_harvester.py | https://www.mdpi.com/2076-0787/7/4/92/pdf | requests 403 → Puppeteer fallback สำเร็จ แต่ได้ **ไฟล์ว่าง (LOW-TEXT)** — PDF route ถูกบล็อก |
| 11 | 11 | document_harvester.py | https://www.mdpi.com/2076-0787/7/4/92/htm | requests 403 → Puppeteer สำเร็จ → **PASS** (71 หน้า, 1,703 chars/page) |
| 12 | 12 | document_harvester.py | https://www.mdpi.com/2077-1444/14/4/544/pdf | requests 403 → Puppeteer ได้ไฟล์ว่าง (LOW-TEXT) — PDF route ถูกบล็อก |
| 13 | 13 | document_harvester.py | https://www.mdpi.com/2077-1444/14/4/544/htm | requests 403 → Puppeteer สำเร็จ → **PASS** (87 หน้า, 1,684 chars/page) |
| 14 | 14 | scholar_api.py (OpenAlex retry) | cited-by / search | OpenAlex ยัง error (rate-limit) |
| 15 | 15 | OpenAlex REST (Invoke-RestMethod) | `works/doi:10.3390/h7040092`, `works/doi:10.3390/rel14040544` | OpenAlex ฟื้น — ได้ ID works, cited_by_count (Twist: 1, Han&Braarvig: 3) |
| 16 | 16 | OpenAlex REST | `filter=cites:W…` (Twist, Han) | Twist: 1 citing work (self-field art history); Han: citing works ไม่เกี่ยว manuscript deposition โดยตรง → citation chaining ใช้ **รายการอ้างอิงใน Han & Braarvig แทน** → von Hinüber 2013 (Gilgit Manuscripts chapter, pp.79–135) |

## หมายเหตุเทคนิค
- MDPI: ทั้ง `/pdf` และ `/htm` โดน Cloudflare 403 กับ requests ธรรมดา; Puppeteer เปิดหน้า `/htm` ได้เนื้อครบ แต่ route `/pdf` ให้เนื้อว่าง → **บทเรียน: สำหรับ MDPI ให้ harvest route /htm ผ่าน Puppeteer**
- OpenAlex 429 ช่วงต้น สลับ Crossref REST ได้ผลครบ; กลับมา retry OpenAlex ช่วงท้ายสำเร็จ
