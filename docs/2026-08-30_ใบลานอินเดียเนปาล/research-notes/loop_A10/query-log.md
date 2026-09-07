# Query Log — Loop A-10: ธรรมเนียมการเก็บรักษาของหอคัมภีร์ไชนะและ śāstra-dāna

วันที่: 2026-08-30 | ช่องทาง: Crossref REST (OpenAlex 429 ต่อเนื่อง) + webfetch + stealth puppeteer

| # | Query / การกระทำ | ช่องทาง | ผลลัพธ์หลัก |
|---|---|---|---|
| 1 | "shastra dana Jain manuscript donation tradition" (rows 15) | Crossref REST | noise สูง — ไม่พบงานตรงคำว่า śāstra-dāna |
| 2 | "Jain manuscript preservation temple vault" (rows 15) | Crossref REST | noise (vault ทางการแพทย์/สถาปัตย์) — ไม่พบงานตรง |
| 3 | "Jain palm leaf manuscript illustrated patli Kalpasutra" (rows 15) | Crossref REST | พบ Lahoti 2024 (Chitrolekha 8:1, OA PDF) — patli + Jaisalmer bhandara; Colas 2023 (Sarasvatī Library, OA) |
| 4 | "manuscrits jaina Rajasthan Bibliotheque nationale" (FR, rows 15) | Crossref REST | ไม่พบงาน FR ตรง (BnF jaina catalogue ยังเป็นงานกำลังทำของ Balbir & Petit ตาม fn.10 ใน Balbir 2022) |
| 5 | "Jaina-Handschriften Indien Handschriftensammlung" (DE, rows 15) | Crossref REST | พบร่องรอยงาน DE: Krause 2013 (Leipzig Jaina-Handschriften catalogue, Harrassowitz), Schubring 1944 (Preussische Staatsbibliothek) — เป็นหนังสือไม่มี DOI OA |
| 6 | "manuscrits jaina Bibliothèque nationale France jaina collection Paris" (rows 15) | Crossref REST | พบ Petit 2025 "Catalogues manuscrits des fonds indiens de la BNF" (10.4000/13sv3, CC BY-NC-ND) — FR แท้ |
| 7 | "Jain granth bhandar jnana bhandara manuscript repository India" (rows 15) | Crossref REST | noise — ไม่พบงานตรง |
| 8 | "Kalpasutra manuscript worship procession Jain festival" (rows 10) | Crossref REST | พบ Lahoti 2024 ซ้ำ; ไม่พบงาน procession โดยตรง |
| 9 | "Mudbidri Jain matha manuscripts Dhavala Kannada" (rows 12) | Crossref REST | ไม่พบงานตรง Dhavala manuscripts ของ Moodabidri — **ยังไม่พบ** |
| 10 | "Maitra Jain Paintings Material Culture Medieval Western India" (rows 8) | Crossref REST | ยืนยัน monograph 2023 (Routledge, ไม่มี license OA) — metadata only |
| 11 | "Cort Jain categories ritual gifted images manuscripts libraries" | Crossref REST | พบ Cort 1995 "The Jain Knowledge Warehouses: Traditional Libraries in India" (JSTOR 10.2307/605310) — paywall, metadata only |
| 12 | harvest Colas Sarasvatī Library (10.1515/9783110779653-007) | dg_inpage_fetch.js | PDF 3.6 MB, 24 หน้า ✅ |
| 13 | Lahoti 2024 → หา PDF link จากหน้าบทความ | stealth puppeteer | https://chitrolekha.com/ns/v8n1/v8n102.pdf ✅ |
| 14 | harvest Rani 2023 (ShodhKosh, decorated wooden covers/patli) | puppeteer + in-page fetch | Cloudflare challenge + 403 ทุกวิธี — **CORRUPT/ลบทิ้ง, metadata only** |
| 15 | "Jain manuscript launction preservation oil camphor" | Crossref REST | noise — ไม่พบงานตรง |
| 16 | "Jnana Panchami manuscript worship Jain books festival" | Crossref REST | noise — ไม่พบงานตรง |
| 17 | "Jaina bhandara Rajasthan Gujarat catalogue of manuscripts" | Crossref REST | ยืนยัน Tripāṭhī 1975 Strasbourg catalogue (Brill, paywall) |
| 18 | "Hindi Jain granthagara bhandara historical manuscript" | Crossref REST | ไม่พบงาน HI ตรง — ยังไม่พบ |
| 19 | "Dhavala Jayadhavala Mahadhavala Digambara Siddhanta manuscripts" | Crossref REST | ไม่พบ OA — **ยังไม่พบ** |
| 20 | "National Mission for Manuscripts India conservation" | Crossref REST | พบ Dinda & Rahman 2025 (J. Information Mgmt) + Sahoo & Mohanty 2015 (IFLA J) — NMM digitization |
| 21 | "Petit Balbir manuscrits jaina Paris BN catalogue" (FR) | Crossref REST | พบ Balbir 2016 "Kalpasūtras et Corans" (Le coran de Gwalior, JSTOR paywall) + Balbir 2017 FR (ThéoRèmes, OA แต่ OpenEdition block PDF 401) |
| 22 | harvest Balbir 2017 FR "À propos du rapport à la raison dans la tradition jaina" | OpenEdition via in-page fetch | 401 (facsimile PDF) — **metadata only** |
| 23 | webfetch https://www.jaina-antiquary.com | webfetch/DNS | DNS ไม่ resolve — **ยังไม่พบ** |

## สถานะสุขภาพ PDF (สุดท้าย)
- colas_sarasvati_library_chidambaram.pdf — PASS (24 หน้า, avg 1,927 chars/หน้า)
- lahoti_kalpasutra_paintings.pdf — PASS (15 หน้า, avg 2,009 chars/หน้า)
- (rani_decorated_wooden_covers.pdf — CORRUPT → ลบทิ้ง; เหตุผล: Cloudflare 403/JS challenge ทุกวิธี harvest)
