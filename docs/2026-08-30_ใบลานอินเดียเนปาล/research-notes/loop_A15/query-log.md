# Loop A-15 — Query Log: นักคัดลอกและกิจการคัดลอกในอินเดีย (scribal professions, kāyastha, granthakara)

วันที่: 2026-08-30 | เครื่องมือหลัก: Crossref REST (OpenAlex ติด 429 ตลอดรอบ)

| # | Query/Action | API/Tool | ผลลัพธ์ |
|---|---|---|---|
| A15-Q1 | `scholar_api.py search "scribe profession India manuscript kayastha" --limit 15` | OpenAlex | 429 Too Many Requests (ลองซ้ำ 5 ครั้ง ห่างกัน 20–120 s — ล้มเหลวทุกครั้ง) |
| A15-Q2 | `crossref_search.py "scribe profession India manuscript kayastha" --limit 10` | Crossref | 10 ผลลัพธ์ ไม่ตรงประเด็น (NLW MS Brogyntyn — Welsh gentry ms) |
| A15-Q3 | `crossref_search.py "kayastha scribes" --limit 10` | Crossref | ไม่ตรงประเด็น (Ugarit, Nuzi, women's convents — ไม่มี India) |
| A15-Q4 | `crossref_search.py "Sanskrit manuscripts copyists colophons" --limit 10` | Crossref | ตรงประเด็น: Plofker 2012 (South India colophons), Balbir 2022 (Jain palm-leaf colophons), Formigatti 2022 (Nepalese colophons) |
| A15-Q5 | `crossref_search.py "prashasti inscribes merchants Banaras" --limit 10` | Crossref | ไม่ตรงประเด็น (Artisans of Banaras มีแต่ไม่เกี่ยว scribal) |
| A15-Q6 | `crossref_search.py "granthakara" --limit 10` | Crossref | ไม่พบผลลัพธ์ (0 hits) |
| A15-Q7 | `crossref_search.py "scribal culture early modern India documentary" --limit 10` | Crossref | ตรงประเด็น: O'Hanlon "Scribal Migrations in Early Modern India" (Routledge Handbook, 2014) |
| A15-Q8 | `crossref_search.py "kayastha Bengal scribes profession history" --limit 10` | Crossref | ไม่ตรงประเด็น (มีเฉพาะ anthropometric paper ของ Bengali Kayastha) |
| A15-Q9 | `crossref_search.py "Jain palm leaf manuscripts western India colophons Balbir" --limit 5` | Crossref | ตรงประเด็น: Balbir 2017 (Cambridge Jain), Balbir 2019 (Multiple-Text Manuscripts Jain), Balbir 2022 |
| A15-Q10 | `crossref_search.py "Sarasvati library Chidambaram Colas" --limit 5` | Crossref | ตรงประเด็น: Colas 2023 (Palm-leaf Libraries Southern India, OA CC-BY-NC-ND) |
| A15-Q11 | `crossref_search.py "Hindu merchants eighteenth century scribal"` | Crossref | พบ Kinra "Writing Self, Writing Empire" (munshī Chandar Bhan) |
| A15-Q12 | `document_harvester.py` Balbir 2022 | De Gruyter | metadata เท่านั้น → ใช้ dg_inpage_fetch.js ดึง PDF ตรง |
| A15-Q13 | `dg_inpage_fetch.js` 10.1515/9783110795271-004 | De Gruyter | PDF 200 OK (30 pp.) |
| A15-Q14 | `dg_inpage_fetch.js` 10.1515/9783110779653-007 | De Gruyter | PDF 200 OK (24 pp.) |
| A15-Q15 | `dg_inpage_fetch.js` 10.1515/9783110543100-003 | De Gruyter | PDF 200 OK (30 pp.) |
| A15-Q16 | `dg_inpage_fetch.js` 10.1515/9783110645989-001 | De Gruyter | PDF 200 OK (36 pp.) |
| A15-Q17 | `dg_inpage_fetch.js` 10.1515/9780520961685-002 | De Gruyter | PDF 200 OK (15 pp.) |
| A15-Q18 | pdf health check 4 ไฟล์ | pdf_extractor.py | PASS ทั้งหมด |

หมายเหตุ: OpenAlex ถูก rate-limit (429) ตลอดช่วงทำงาน — ใช้ Crossref REST แทนทั้งหมดตามกฎสำรอง
