# Query Log — Loop A-03: เครื่องมือจาร (stylus) และเทคนิคการจดจารบนใบลาน
Date: 2026-08-30 | Runner: Explorer sub-agent | Tool: scholar_api.py (OpenAlex), DDSA sanskrit_query.py, document_harvester.py

| # | Query / Endpoint | Tool | ผลลัพธ์ |
|:--|:---|:---|:---|
| 1 | `search "stylus incised palm leaf writing technique" --limit 20` | scholar_api.py | 35 matches; ตรงประเด็น: Sharma 2020 Pigment Analysis (มีทบทวนเทคนิคจาร), Sahoo 2016 Selective Review, Li 2025 Scientific restoration of engraved PLM (npj Herit Sci 10.1038/s40494-025-01943-0); ส่วนใหญ่ off-topic |
| 2 | `search "palm leaf manuscript engraving incising technique India" --limit 15` | scholar_api.py | 34 matches; ส่วนใหญ่ off-topic (Jesuits, Sulawesi, wood-carver); ตรงประเด็น: Sharma 2020, Sahoo 2016 |
| 3 | `search "lekhani stylus Sanskrit writing implement" --limit 15` | scholar_api.py | **0 matches** — ยังไม่พบงานวิชาการที่ใช้คำนี้ใน OpenAlex |
| 4 | `search "incised palm leaf manuscript stylus etching" --limit 15` | scholar_api.py | 3 matches: Sharma 2020; Zenodo 7536610 "TRADITIONAL HISTORY OF PALM TREE AND PALM MANUSCRIPTS" (2022, DOI 10.5281/zenodo.7536610) — พยายาม harvest แล้วโดน Zenodo 403 (bot protection) |
| 5 | `search "palm leaf manuscript conservation incised letters carbon" --limit 15` | scholar_api.py | 24 matches; off-topic ส่วนใหญ่ |
| 6 | webfetch `dsal.uchicago.edu` MW endpoint หลายรูปแบบ (mo.py/soas.py/app) | webfetch/urllib | 404/รูปแบบ endpoint เปลี่ยน; ค้นพบ endpoint ที่ทำงานจริง: `/cgi-bin/app/sanskrit_query.py?qs=...&matchtype=...` (Combined Sanskrit Dictionary: Apte + Macdonell + Monier-Williams) |
| 7 | `sanskrit_query.py?qs=lekhani&matchtype=substring/exact` | DDSA | **No results** สำหรับ headword "lekhani" ตรงๆ — รูปพจนานุกรมคือ lekhana/lekhinī |
| 8 | `sanskrit_query.py?qs=lekhinI&matchtype=exact` | DDSA | HIT: लेखिनी lekhinī (Apte p.1370): "1 A pen. -2 A spoon." |
| 9 | `sanskrit_query.py?qs=lekhana&matchtype=exact` | DDSA | HIT: लेखन lekhana (Apte p.1370; Macdonell p.264) — ดู findings S-1899-apte-50 |
| 10 | `sanskrit_query.py?qs=salAka&matchtype=exact` | DDSA | HIT: शलाक śalāka (Macdonell p.309) + शलाका śalākā (Apte p.1539) — ดู findings S-1899-apte-51 |
| 11 | `sanskrit_query.py?qs=kanta / kantaka / zAlAka` | DDSA | kanta/kantaka = thorn (ไม่ตรง stylus); zAlAka EMPTY |
| 12 | `sanskrit_query.py?qs=palm-leaf&matchtype=containing` (full-def search) | DDSA | 4 hits: tālaḥ (comp. "the palm-leaf used for writing"), masiḥ, lekhana, lekhya |
| 13 | `scholar_api.py cited-by 10.1515/res-2018-0005` | scholar_api.py | 19 citing works; สำคัญต่อ A-03: Li 2025 Scientific restoration of engraved PLM (10.1038/s40494-025-01943-0) |
| 14 | harvest `https://www.nature.com/articles/s40494-025-01943-0` | document_harvester.py | SUCCESS — Puppeteer HTML→text 41 "pages" PASS (81,086 chars) |
| 15 | harvest `https://www.nature.com/articles/s40494-025-01943-0.pdf` ก่อนหน้า | document_harvester.py | PDF shell 1 หน้า LOW-TEXT (viewer shell เท่านั้น) → ลบทิ้ง (CORRUPT: ไม่มีเนื้อหา) แล้วหันไปใช้หน้า article HTML แทน |
| 16 | harvest `https://digitalcommons.unl.edu/libphilprac/1397/` (Sahoo 2016) | document_harvester.py | SUCCESS — HTML→text 15,418 chars (บทคัดย่อ + รายการอ้างอิงเต็ม; ไม่ใช่ fulltext เต็ม) |
| 17 | harvest `https://zenodo.org/record/7536610` | document_harvester.py | FAILED — Zenodo 403 "unusual traffic" → ยังไม่พบฉบับเต็ม |
| 18 | `search "Dai palm leaf manuscript engraving process"` (OpenAlex, หลัง 429 หลายครั้ง) | scholar_api/urllib | **ยังไม่พบ** — OpenAlex rate-limit ถาวร (Retry-After: 42096 s, quota หมดวัน) ตั้งแต่ ~12:18 ผ่าตามเวลาเซิร์ฟเวอร์ |

หมายเหตุ: OpenAlex API (ซึ่ง scholar_api.py ใช้) เข้าสู่ rate-limit ถาวรรอบวัน (X-RateLimit-Remaining: 0, Retry-After ≈ 11.7 ชม.) — query ที่เหลือของลูปนี้จำกัดด้วยข้อจำกัดนี้ บันทึกไว้เป็นข้อจำกัดของรอบการค้น
