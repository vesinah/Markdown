# Search Log — Loop A20: Cross-cutting status-of-knowledge (MoW / illicit trade / ICH / living scribes / reviews / ethics)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** A20 | **Date:** 2026-08-26 | **Agent:** ox-alpha

## Access notes
- `websearch` tool: 429 error at session start → abandoned.
- Direct DDG HTML via webfetch: bot-walled (CAPTCHA) on first two attempts.
- Working pipeline (all successful queries): `https://r.jina.ai/https://html.duckduckgo.com/html/?q=<query>` and `https://r.jina.ai/<target-URL>` for full-page reads. Direct unesco.org fetch of guessed slug returned 404; correct slugs obtained from DDG results.

## Queries run (12 distinct)
| # | Query | Route | Outcome |
|---|-------|-------|---------|
| 1 | UNESCO Memory of the World Kuthodaw Inscription Shrines 2013 register | websearch → 429 | failed |
| 2 | same as #1 | direct DDG HTML | CAPTCHA wall |
| 3 | same as #1 | r.jina.ai + DDG HTML | 10 hits incl. official UNESCO page |
| 4 | Full read: unesco.org/en/memory-world/maha-lawkamarazein-or-kuthodaw-inscription-shrines | r.jina.ai | FULL READ, archived |
| 5 | Mahavamsa Peradeniya palm leaf manuscript UNESCO Memory of the World 2023 Sri Lanka | r.jina.ai + DDG | official page + press hits |
| 6 | Full read: Mahavamsa MoW register page | r.jina.ai | FULL READ, archived |
| 7 | "Phra That Phanom Chronicle" palm leaf UNESCO Memory of the World 2023 Thailand register | r.jina.ai + DDG | official page + PRD/thailand.go.th |
| 8 | Full read: Phra That Phanom MoW register page | r.jina.ai | FULL READ, archived |
| 9 | illicit trade Buddhist manuscripts Southeast Asia Fragile Palm Leaves Skilling market | r.jina.ai + DDG | Khyentse/BDRC/EAP1150/Culture-in-Crisis |
| 10 | Full read: BDRC blog "Gilt Manuscripts of the Fragile Palm Leaves Collection" | r.jina.ai | FULL READ (complete article), archived |
| 11 | beiye jing palm leaf scripture national intangible cultural heritage China 2008 Dai | r.jina.ai + DDG | China Daily Potala pieces; IRCI record; Baidu Baike lead |
| 12 | living palm leaf scribe tradition training workshop today lontar Bali Myanmar monk scribe | r.jina.ai + DDG | Bali lontar workshops (tourism), Gedong Kirtya |
| 13 | digital repatriation Buddhist manuscripts ethics collecting restitution | r.jina.ai + DDG | Tricycle; restitutionmatters.org; itsartlaw.org |
| 14 | "state of the field" Buddhist manuscript studies review article palm-leaf surveys | r.jina.ai + DDG | zero results (quoted phrase too restrictive) |
| 15 | Buddhist manuscripts "state of the field" OR "survey" review palm-leaf codicology article | r.jina.ai + DDG | zero results again (quotes broke query) |
| 16 | site:unesco.org memory-world palm-leaf manuscripts | r.jina.ai + DDG | HUNT MORE: Nepal Susrutamhita + Nisvasattatvasamhita MoW entries found |
| 17 | palm leaf manuscript studies review article codicology Theravada Southeast Asia recent scholarship | r.jina.ai + DDG | Taylor & Francis 2026 plants survey; HAL codicology paper; PALM-LAY Springer 2026 |
| 18 | economics palm leaf manuscript production patronage merit sponsor cost scribe temple | r.jina.ai + DDG | JSTOR division-of-labour article; lakpura potgul patronage; dreamsea.co merit/scribe income |
| 19 | Full read: govt.chinadaily.com.cn Potala restoration article | r.jina.ai | FULL READ, archived |
| 20 | Full read: tricycle.org Buddhist art repatriation | r.jina.ai | FULL READ, archived |
| 21 | Full read: irci.jp/rdb/item/13944 (Dai palm-leaf craft documentary record) | r.jina.ai | FULL READ |

## Blocked/unreachable this session
- eap.bl.uk EAP1150 page: snippet only via DDG (site was bot-walled in earlier loops too — orchestration log).
- en.wikipedia.org / grokipedia / baike.baidu hits: used as KEYWORDS ONLY, not cited.
