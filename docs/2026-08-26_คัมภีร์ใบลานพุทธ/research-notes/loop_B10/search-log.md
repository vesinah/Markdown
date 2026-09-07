# Search Log — Loop B10 (Citation-chaining deep dive targeting A20 gaps)
**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B10 | **Date:** 2026-08-26
Tools used: webfetch (direct + r.jina.ai proxy), Crossref API, PowerShell Invoke-WebRequest (PDF archiving), PyMuPDF (PDF text extraction). DuckDuckGo html endpoint bot-walled this session; switched to lite.duckduckgo.com via r.jina.ai.

| # | Query / Action | Target | Result |
|---|----------------|--------|--------|
| 1 | READ loop_A20 findings.md | A20 gaps F1–F11 + Phase B candidates | Read; drove B10 plan |
| 2 | Direct fetch api.crossref.org/works/10.1080/23818107.2026.2634848 | Botany Letters 2026 metadata | SUCCESS — full metadata + 113 refs |
| 3 | Direct fetch jstor.org/stable/43855214 | JSTOR landing | BLOCKED (client challenge) |
| 4 | r.jina.ai proxy → jstor.org/stable/43855214 | JSTOR landing | SUCCESS — title/author/journal/pages verified |
| 5 | Direct fetch tandfonline.com/doi/full/10.1080/23818107.2026.2634848 | Botany Letters full text | SUCCESS — open access CC-BY-NC-ND, full text archived |
| 6 | Fetch media.unesco.org …/56_143%2B.pdf (+ variants) | Phra That Phanom nomination PDF | 404 single-encoded; register page shows double-encoded %252B link |
| 7 | r.jina.ai → myanmar_kuthodaw.pdf | Kuthodaw nomination PDF | SUCCESS — 7 pp fully read |
| 8 | PowerShell download media.unesco.org …/myanmar_kuthodaw.pdf | Kuthodaw PDF archive | OK (52,673 B) |
| 9 | PowerShell download 53_131%252B.pdf | Mahavamsa nomination PDF | OK (524,332 B) — double-encoding was the key |
| 10 | Re-fetch unesco.org/en/memory-world/mahavamsa-… page | current doc link | VERIFIED — nomination form = 53_131%252B.pdf |
| 11 | PowerShell download 56_143%252B.pdf + re-fetch Phra That Phanom register page | PTP nomination PDF | OK (1,265,052 B); register re-verified |
| 12 | PyMuPDF text extraction both PDFs | text layers | 22 pp / 30 pp extracted to documents\*.txt |
| 13 | DDG html q=ihchina 贝叶经制作技艺 傣族 VIII-142 | ihchina primary source | BOT-WALLED (CAPTCHA) |
| 14 | DDG html q="Oxford Handbook" Buddhist manuscripts state of field | handbook check | BOT-WALLED |
| 15 | r.jina.ai/lite q=ihchina.cn 傣族 贝叶经制作技艺 | ihchina.cn item page | SUCCESS — found project_details/14582 |
| 16 | Direct fetch www.ihchina.cn/project_details/14582/ + raw HTML archive | Dai beiyejing ICH record | SUCCESS — Ⅷ-142 confirmed |
| 17 | r.jina.ai/lite q="Oxford Handbook" OR "Cambridge Companion" Buddhist manuscript studies state of the field | handbooks | No results |
| 18 | r.jina.ai/lite q="Buddhist manuscripts" "state of the field" handbook chapter | reviews | No results |
| 19 | r.jina.ai/lite q=site:global.oup.com buddhist manuscript | OUP handbooks | SUCCESS — no Buddhist-manuscript handbook exists; only Oxford Encyclopedia of Buddhism etc. |
| 20 | r.jina.ai/lite q=site:cambridge.org cambridge companion buddhist manuscripts | CUP companions | SUCCESS — no such companion (only Medieval British Manuscripts companion) |
| 21 | r.jina.ai/lite q="Buddhist Manuscript Cultures" routledge | closest state-of-field volume | SUCCESS |
| 22 | r.jina.ai → routledge.com product page 9780415596138 | Routledge volume verification | SUCCESS — full TOC read |
| 23 | PowerShell archive crossref JSON | raw metadata | OK |

Fully-read sources this session (≥4 requirement met):
1. Poliakova et al. 2026 Botany Letters full text (T&F, OA) — abstract→conclusions+funding
2. Kuthodaw MoW nomination form PDF (7 pp, via r.jina.ai)
3. Mahavamsa MoW nomination form PDF (22 pp text extracted; pp. 1–8 + structure read)
4. Phra That Phanom MoW nomination form PDF (30 pp text extracted; description/provenance/form-style/preservation sections read)
5. ihchina.cn project_details/14582 (full page)
6. Routledge product page incl. complete TOC (full read)
