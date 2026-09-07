# Search Log — Loop A05 (ตระกูลอักษรพราหมี + วิธีวินิจฉัยอายุคัมภีร์)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** A05 | **Date:** 2026-08-26
**Rule:** Zero internal knowledge — citable facts only from sources fetched this session.

## Tool status this session
- `websearch` (Exa MCP): HTTP 429 ทุกครั้ง (2 attempts) — ใช้ไม่ได้
- DuckDuckGo html + lite: bot-challenge (CAPTCHA "select all ducks") ทุกครั้ง; via PowerShell Invoke-WebRequest → HTTP 202 challenge page
- Mojeek, searx.be, searx.tiekoetter.com, Startpage, priv.au: JS-verification walls / 403
- Ecosia: HTTP 403
- Bing: ตอบผลลัพธ์ไม่เกี่ยวข้องกับ query ("On This Day" junk) — ถือว่า infeasible
- OpenAlex API: 429 "Insufficient budget... Resets at midnight UTC" (budget หมดระดับ IP)
- Semantic Scholar API: 429 (retry 2 ครั้งยังล้ม)
- **ใช้ได้จริง:** Marginalia old-search (flow: initial → follow sst token), Crossref REST API (query.bibliographic + mailto), webfetch ตรงเข้าหน้าสถาบัน, PowerShell ดาวน์โหลด PDF/HTML

## Queries executed (distinct ≥ 8)
| # | Engine | Query | Result |
|---|---|---|---|
| Q1 | websearch | Brahmi script descendants South Southeast Asia chart Siddham Nagari | 429 |
| Q2 | websearch | radiocarbon dating Gandhari birch bark scrolls British Library Salomon results | 429 |
| Q3 | DDG html/lite | Brahmi descendants chart; Gandhari radiocarbon BL | CAPTCHA |
| Q4 | Mojeek/Ecosia/SearXNG x4/startpage/priv.au | (same topics) | blocked |
| Q5 | Bing | Brahmi script descendants Siddham Nagari Buddhist manuscripts | irrelevant junk |
| Q6 | Marginalia | kammavaca Burmese manuscript | hits: Smithsonian NMAA blog, Guimet, Princeton DPUL, Rylands, BDRC |
| Q7 | Marginalia | Gandhari birch bark radiocarbon | hits: Equinox BSR Allon 2018; Stanford HCBSS; Hidden Stories U Toronto |
| Q8 | Marginalia | palaeographic dating manuscripts von Hinuber | hits: Arnaud-Nguyen 2020 PDF (cites v.Hinüber); marefa/dharmapedia mirrors (wiki-derived, keywords only) |
| Q9 | Crossref | Radiocarbon dating Kharosthi fragments Schoyen Senior collections | partial (De Gruyter/Radiocarbon noise) |
| Q10 | Crossref | Tai Tham script Lanna | Lagirarde 2014 ho tham; Tangsiriwattanakul 2024 |
| Q11 | Crossref | Bhujimol Ranjana Newar scripts manuscripts Nepal | weak (noise) |
| Q12 | Marginalia | Bhujimol script Nepal manuscripts | hits: DSBC history page; r12a Newa notes; Wellcome story |
| Q13 | Crossref | Lan Na palm leaf manuscripts Tham script Pali | CMU SRI catalogue 1986 (3,700 palm-leaf mss); Marrison 2002 |
| Q14 | Crossref | Khom script Khmer Thailand manuscripts | Schnake 2022; Srisetthaworakul 2018, 2019; Chaowarithreonglith 2020; Sidwell 2008 |
| Q15 | Crossref | Siddham script Buddhist texts East Asia | Saito 1980-1995 JIBS series; Kojima 1980 |
| Q16 | Crossref | radiocarbon dating palm leaf manuscripts Asia | Aghaei/Hajdas 2023 Radiocarbon; Kim 2015 |
| Q17 | Crossref | Bower manuscript radiocarbon dating Khotan | noise (generic radiocarbon) |
| Q18 | Crossref | Sinhala script ola leaf manuscripts Sri Lanka | Cabral et al. 2025 JULA; Alahakoon 2006 |
| Q19 | Crossref | Gupta Brahmi Siddham evolution inscriptions paleography | noise; Mokashi/Samel 2017 Ancient Asia (Kondane caves Brahmi) |
| Q20 | Marginalia | Tai Tham Dhamma script Lan Na | 2 hits, low value (factsanddetails, friesian) |
| Q21 | Crossref | Pyu script inscriptions Burma | Miyake/Wheatley 2024; Griffiths/Wheatley 2024; Shafer 1943; Krech 2012 |
| Q22 | Crossref | Mon script Myanmar inscriptions Old Mon | noise |
| Q23 | Crossref | Tham script Lan Xang Lao manuscripts Pali | noise |

## Fully-read sources (≥4 target met — actual 10)
1. Allon 2018 BSR landing page (abstract + full reference list) — archived manually
2. UW EBMP project page — archived HTML
3. DSBC "Short History of Sanskrit Buddhist Manuscripts" — archived HTML
4. Wellcome Collection "Stories of Asian palm-leaf manuscripts" — archived HTML
5. Guimet kammavaca treasure page — archived HTML
6. John Rylands Pali collection post — archived HTML
7. Ishida, Newa orthography notes — archived HTML
8. Arnaud-Nguyen 2020 (Warsaw book-history journal) — PDF downloaded + text extracted
9. Stanford HCBSS Buddhist Manuscripts project page — archived HTML
10. Toronto Hidden Stories "Early Buddhist Scrolls" — archived HTML
(+ gandhari.org home — archived HTML)
