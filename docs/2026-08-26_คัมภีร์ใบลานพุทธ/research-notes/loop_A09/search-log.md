# Search Log — Loop A09 (เนปาล: พุทธศาสนานิวาร์ / ใบลานสันสกฤตเขียนหมึก / NGMPP-NGMCP)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** A09 | **Date:** 2026-08-26
**Rule:** Zero internal knowledge — citable facts only from sources fetched this session.

## Tool status this session
- `websearch` (Exa MCP): HTTP 429 ทันทีครั้งแรก — ใช้ไม่ได้ (ตามคำเตือนหัวลูป)
- DuckDuckGo html + lite: bot-challenge "select all ducks" ทุกครั้ง (2 attempts)
- Brave search: HTTP 429; Bing: ตอบขยะไม่เกี่ยวข้อง (PALM lab/PaLM model/Arecaceae) — infeasible เช่นเดียวกับ loop A05
- r.jina.ai proxy: HTTP 403 (ต่างจากบางเซสชันก่อนหน้า)
- Cleveland Museum open-access API: HTTP 500 (server-side) กับ q=Gandavyuha
- Rubin Museum rubinmuseum.org: HTTP 504 ซ้ำ 3 ครั้ง (webfetch + PowerShell) + Asia Society 403 + HASP Heidelberg ถูก Anubis proof-of-work wall + Met Timeline /toah/ guess 404
- OpenAlex/Semantic Scholar: ไม่ได้พยายาม (budget 429 ระดับ IP จาก A05 ยังมีผล)
- **ใช้ได้จริง:** Marginalia old-search (flow: call ไร้ sst → ได้ token → call ซ้ำ), Crossref REST API, archive.org advancedsearch API + details pages, Met collection API (search + objects), webfetch ตรงหน้าสถาบัน (uni-hamburg, dsbcproject, r12a, omniglot), PowerShell Invoke-WebRequest archive HTML

## Queries executed (distinct ≥ 8 — actual 21)
| # | Engine | Query | Result |
|---|---|---|---|
| Q1 | websearch | Nepal palm leaf to paper transition fourteenth century manuscripts | 429 |
| Q2 | DDG html | (same topic) | CAPTCHA |
| Q3 | Crossref | Newar Buddhist Sanskrit manuscripts Nepal palm-leaf | Tanaka 1990 JIBS (NGMPP); Lewis, Popular Buddhist Texts from Nepal; Hori 1991 Kamiya Collection |
| Q4 | r.jina.ai | Bing: palm leaf→paper Nepal | 403 |
| Q5 | Marginalia | Nepal manuscripts palm leaf to paper transition century | noisy; hit HASP "Among Tibetan Materialities" (lokta/Daphne paper) |
| Q6 | Marginalia | Pañcarakṣā manuscript Nepal palm leaf dharani | Rubin PHA "Pancharaksha Print from Khara-Khoto"; snippet: Pancharaksha folio Nepal 1138 ink+opaque watercolor on palm leaf |
| Q7 | archive.org API | Bendall catalogue Buddhist Sanskrit manuscripts Cambridge | 4 items; title ยืนยัน "...palaeography and chronology of Nepal and Bengal", 1883 |
| Q8 | archive.org API | Shastri Durbar Library Nepal catalogue palm-leaf | vol.1 1905 + vol.2 1915 (identifier ..._573) + bub_gb_G3woAAAAYAAJ |
| Q9 | Crossref | Gandavyuha Sutra manuscript Nepal folio | noise เชิง codicology; ได้บทจากหนังสือ Power/Wealth/Women in Indian Mahayana Buddhism (kalyanamitra list) |
| Q10 | Marginalia | Nepal Lokta paper manuscripts palm leaf history | DSBC Short History; HASP; GDELT blog (Himalayan Daphne paper) |
| Q11 | Direct | csmc.uni-hamburg.de manuscript-of-the-month URL | 404 |
| Q12 | Bing | "palm leaf" manuscripts Nepal "fourteenth century" paper replaced | junk ไม่เกี่ยวข้อง |
| Q13 | Crossref | Nepalese Sanskrit Buddhist manuscripts palm-leaf paper writing support | Hidas 2020 Uṣṇīṣavijayā-dhāraṇī (IJBTC, Nepalese mss); Kudo 2004 Mahakarmavibhanga 2 Nepalese mss; Cowell & Neil Divyavadana 1886 (Chula rarebook record) |
| Q14 | Marginalia | oldest dated manuscript Nepal Amshuvarman Saka | 0 results |
| Q15 | Marginalia | Gandavyuha palm leaf folio Nepal manuscript museum | 0 results |
| Q16 | Brave | Nepal manuscripts palm leaf replaced by paper "14th century" | 429 |
| Q17 | Cleveland API | artworks?q=Gandavyuha | HTTP 500 |
| Q18 | Met API | search?q=Gandavyuha | total=1 → objectID 905605 |
| Q19 | DDG lite | Nepal palm leaf replaced by paper 14th century | CAPTCHA |
| Q20 | Met API | search?q=Prajnaparamita palm leaf Nepal | 112 objectIDs (list only, ไม่ได้อ่านรายการ) |
| Q21 | Met API | objects/905605 | FULL RECORD — Gaṇḍavyūha-sutra 9 illustrated folios, Nepal, late 11th–early 12th c., talipot |

## Fully-read sources (≥4 target met — actual 11, raw archived ทั้งหมดใน documents/)
1. UHH NGMCP home (aai.uni-hamburg.de/en/forschung/ngmcp.html) — ngmcp_home_uhh.html
2. UHH About the NGMPP — ngmpp_about_uhh.html
3. UHH History of the NGMPP — ngmcp_history_uhh.html
4. UHH MS of the Week — ngmcp_ms_of_week_uhh.html
5. DSBC Short History of Sanskrit Buddhist Manuscripts — dsbc_short_history.html
6. DSBC Introduction (scanning project) — dsbc_introduction.html
7. Cambridge CUDL MS-ADD-01464 (Prajñāpāramitāstotra + Aṣṭasāhasrikā) — cudl_ms_add_1464_prajnaparamita.html
8. Ishida, Newa Orthography Notes (r12a.github.io) — r12a_newa_orthography_notes.html
9. Omniglot, Ranjana script — omniglot_ranjana.html
10. Internet Archive item: Shastri 1905 Durbar Library catalogue vol.1 — ia_shastri_1905_durbar_catalogue.html
11. Met object 905605 API record — met_905605_gandavyuha_api.json

## Portal verification requested by task brief
- `ngmcp.lib.uchicago.edu` → DNS ไม่ resolve (Invoke-WebRequest: "remote name could not be resolved") ⇒ **ปิดสถานะ: DEAD/not live**
- `catalogue.ngmcp.uni-hamburg.de/content/index.xml` → HTTP 200 (live) — ตัวจริงของ online title list
- `orient-digital.staatsbibliothek-berlin.de` → HTTP 200 แต่ body 261 bytes (SPA shell/redirect) — live เฉพาะโดเมน ยังไม่ใช่หน้าเนื้อหา
