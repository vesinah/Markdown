# Query Log — Loop A-04: หมึกและเม็ดสี (pigments/inks) บนคัมภีร์ใบลาน
Date: 2026-08-30 | Runner: Explorer sub-agent | Tool: scholar_api.py (OpenAlex), document_harvester.py, DDSA sanskrit_query.py

| # | Query / Endpoint | Tool | ผลลัพธ์ |
|:--|:---|:---|:---|
| 1 | `search "palm leaf manuscript ink pigment analysis" --limit 20` | scholar_api.py | 294 matches ดิบ; noise สูง (CMC, coatings); ตรงประเด็น: Sharma 2020 (10.18520/cs/v118/i2/285-292) |
| 2 | `search "soot lampblack ink Indian manuscripts" --limit 15` | scholar_api.py | 21 matches; ตรงประเด็น: Yu Chen 2023 "Ink in secular and religious documents from the Pelliot collection" (10.1016/j.jasrep.2023.104327, ไม่มี OA PDF); "Making Ancient Inks: Lampblack..." (10.70558/ijssr.2026.v3.i4.301192); Chatterjee 2025 IJSAT 10.71097/ijsat.v16.i4.10037; "Enlistment of Few Herbs in Traditional Writings" 10.61096/ijrpp.v14.iss4.2025.793-799 (harvest ล้มเหลว: redirect loop) |
| 3 | `scholar_api.py cited-by 10.18520/cs/v118/i2/285-292` (Citation chaining, forward) | scholar_api.py | 2 citing works: **Chen/Zhang/Song 2023 Restaurator 10.1515/res-2023-0018** (Analysis of Two Different Inks...); **Yu Chen 2025 npj Herit Sci 10.1038/s40494-025-01543-y** (Tibet ink multi-analytical) |
| 4 | `scholar_api.py cited-by 10.1515/res-2018-0005` | scholar_api.py | 19 citing works; สำคัญ: Sharma/Singh 2020 Restaurator pigment (10.1515/res-2019-0006 — มีใน index แล้ว), Molecules 2024 RH (10.3390/molecules29235644), Coatings 2025 (10.3390/coatings15101178) |
| 5 | `search "encre manuscrits palme" --limit 10` (FR) | scholar_api.py | 65 matches — **ไม่พบงาน FR ตรงประเด็นหมึกใบลาน** (ข้อมูลจาก OpenAlex ก่อน rate-limit) |
| 6 | `search "Tinte Handschriften Indien Palmblatt" --limit 10` (DE) | scholar_api.py | **0 matches** |
| 7 | harvest `10.1515/res-2023-0018` | document_harvester.py | Crossref metadata JSON เก็บได้ (Chen Yu, Meifang Zhang, Xin Song, Restaurator 2023); **PDF ยังไม่พบ OA** — De Gruyter 202 page (JS-only) → ลบ |
| 8 | harvest `https://currentscience.ac.in/Volumes/118/02/0285.pdf` (Sharma 2020) | document_harvester.py | SUCCESS — PDF 8 หน้า **PASS** (avg 3,815 chars/page) — ฉบับเต็ม OA ของ DOI 10.18520/cs/v118/i2/285-292 |
| 9 | harvest `https://www.ijsat.org/papers/2025/4/10037.pdf` (Chatterjee 2025) | document_harvester.py | SUCCESS — PDF 22 หน้า **PASS** (avg 2,214 chars/page) |
| 10 | harvest `https://www.nature.com/articles/s40494-025-01543-y` (Chen 2025 Tibet ink) | document_harvester.py | SUCCESS — HTML→text 50,993 chars PASS; รูป .pdf ตรงก่อนหน้าเป็น shell 1 หน้า LOW-TEXT → ลบทิ้ง |
| 11 | harvest `https://www.mdpi.com/2073-4360/17/1/83/pdf`, `.../2227-9040/13/6/196/pdf` | document_harvester.py | MDPI 403 → Puppeteer shell ว่าง (102–103 bytes) → **ลบทิ้ง ทั้งสอง** (CORRUPT); Polymers 2025 (10.3390/polym17010083) และ Chemosensors 2025 (10.3390/chemosensors13060196) ยังไม่มี local copy |
| 12 | `sanskrit_query.py?qs=palm-leaf&matchtype=containing` | DDSA | 4 hits — รวม **मसिः masiḥ** (Apte p.1245): "1 Ink -2 Lampblack soot..." — ศัพท์สันสกฤต "หมึก" ยืนยันจากพจนานุกรมจริง |
| 13 | `sanskrit_query.py?qs=lampblack&matchtype=containing` | DDSA | 2 hits: कज्जलित kajjalita ("Covered with lampblack"), मसिः masiḥ |
| 14 | `search "iron gall ink carbon ink manuscript Asian"`, `search "writing materials Sanskrit manuscripts India"` | scholar_api.py | **ยังไม่พบ** — OpenAlex rate-limit ถาวร (429, Retry-After 42096 s) ตั้งแต่ ~12:18 เซิร์ฟเวอร์; บันทึกไว้คิวครั้งหน้า |

ข้อจำกัดรอบนี้: OpenAlex เข้า rate-limit ถาวรของวัน (quota หมด) — query ที่ค้าง (DE/FR เพิ่มเติม, Herb writings, iron-gall) ต้องรันครั้งหน้า
