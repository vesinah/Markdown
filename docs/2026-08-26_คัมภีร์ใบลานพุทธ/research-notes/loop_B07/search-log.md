# Search Log — Loop B07 (Pala illuminated palm-leaf citation-chaining for A08 gaps)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B07 | **Date:** 2026-08-26
**Rule:** Zero internal knowledge — citable facts only from sources fetched this session.
**READ FIRST done:** research-notes\loop_A08\findings.md (+ A08 search-log; loop_B02 findings for Add.1464/1643 context)

## Tool status this session
- DuckDuckGo html + lite: bot-challenge "select all ducks" (both) — unusable
- websearch (Exa MCP): HTTP 429 — unusable
- Marginalia new UI: sst-token loop; old-search.marginalia.nu: WORKED (2 productive queries)
- r.jina.ai proxy: worked for currentscience.ac.in PDF; later rate-limited on metmuseum.org (Vercel 429)
- Bing via r.jina.ai: returned irrelevant results (query mangled)
- Crossref REST API: working (one transient 429, retried OK)
- Met Collection API + metmuseum.org object pages: working via webfetch; PowerShell direct = Vercel 429
- Cleveland Museum of Art Open Access API + object page: working
- CUDL view pages: working (Invoke-WebRequest)
- currentscience.ac.in PDF direct: working (2.18 MB archived)
- archive.org advancedsearch/metadata/download: working
- DOAJ API: working but 0 hits for both queries
- De Gruyter document page: CAPTCHA wall (via r.jina.ai too); LACMA search URL 404; V&A API endpoint 404

## Queries executed (distinct >= 8)
| # | Engine/Tool | Query | Result |
|---|---|---|---|
| Q1 | DDG html | Pala period illuminated palm leaf Ashtasahasrika miniatures Bengal Bihar attribution | CAPTCHA |
| Q2 | DDG html | Cambridge Add 1464 Prajnaparamita miniatures study | CAPTCHA |
| Q3 | DDG lite | Pala manuscript painting Nalanda Vikramasila monastic scriptorium attribution | CAPTCHA |
| Q4 | Marginalia new UI | Pala period palm leaf manuscript painting Bengal Bihar miniatures | bot-wall token loop |
| Q5 | Marginalia old-search | Pala palm leaf manuscript miniatures Bengal Bihar monastery attribution | 2 weak hits (Heidelberg HASP book refs; wildfiregames junk) |
| Q6 | r.jina.ai/Bing | "Mahavihara Master" Ashtasahasrika Prajnaparamita Lhasa Vihunadevi | garbage results (Kelantan) |
| Q7 | Crossref bibliographic | Prajnaparamita manuscript painting Bengal palm leaf | Sarasvati Library Chidambaram chapter (De Gruyter 2023) surfaced |
| Q8 | Crossref bibliographic | decline manuscript culture India print paper palm leaf | Restaurator 1970 + CSIT 2021 surfaced; Western print-culture noise |
| Q9 | Crossref bibliographic | Pala painting eastern India Buddhist miniature | no direct hit (literature in museum catalogues, not indexed) |
| Q10 | Crossref bibliographic | Nalanda Vikramasila monastery manuscripts colophons | colophon-syntax volumes (Jain palm-leaf chapter etc.); no Nalanda-specific OA |
| Q11 | Crossref bibliographic | palm leaf manuscripts printing press India decline | verified 10.1515/rest.1970.1.2.105; 10.1007/s40012-020-00325-0 |
| Q12 | Marginalia old-search | Nalanda monastery library manuscripts Buddhist scriptorium | HIT: Rubin Project Himalayan Art essays (painted cover; then chained to Nalanda Prajnaparamita essay) |
| Q13 | CMA Open Access API | q=Prajnaparamita | 387 total incl. full 1938.301 set attributed "Vikramashila Monastery" |
| Q14 | Met Collection API | q=Pancavimsatisahasrika | total=30 objects (one dispersed ca.-1090 manuscript group) |
| Q15 | archive.org advancedsearch | palm leaf manuscripts India / subject:"palm leaf manuscripts" | eparlib Lok Sabha note 2007; Jangamwadi Mutt palm-leaf collections |
| Q16 | DOAJ API | palm leaf manuscript India print / manuscript culture India printing press | 0 hits both |

## Direct fetches (institutional, read + archived unless noted)
- api.crossref.org works/10.18520/cs/v118/i2/285-292 (JSON archived)
- currentscience.ac.in/Volumes/118/02/0285.pdf FULL TEXT read via r.jina.ai + raw PDF downloaded
- metmuseum.org/art/collection/search/74906 FULL read (raw capture written; PowerShell blocked by Vercel 429)
- collectionapi.metmuseum.org objects 74902, 74905, 37977, 37976, 74858, 74871, 74851, 74850, 74849 (JSONs/samples archived)
- metmuseum.org/art/collection/search/37977 FULL read (raw capture written)
- cudl.lib.cam.ac.uk/view/MS-ADD-01643/1 and /MS-ADD-01464/1 (HTML archived, descriptions extracted)
- openaccess-api.clevelandart.org/api/artworks/1938.301.5.a + ?q=Prajnaparamita (JSON archived)
- clevelandart.org/art/1938.301.5.a FULL read (r.jina.ai raw archived)
- metmuseum.org/met-publications/wonder-of-the-age-master-painters-of-india-1100-1900 FULL read
- kathmandupost.ekantipur.com/news/2019-02-26/perfection-of-art.html FULL read (raw archived)
- link.springer.com/article/10.1007/s40012-020-00325-0 abstract page read (paywalled body; not counted as fully-read)
- doi.org + degruyter.com for 10.1515/9783110779653-007 (citation string only; body CAPTCHA-blocked)
- archive.org eparlib.nic.in.550256 metadata + 49975.pdf + OCR text (FULL read, archived)
- rubinmuseum.org projecthimalayanart essays: painted-manuscript-cover (Linrothe) + illuminated-pages-of-the-prajnaparamita-sutra-manuscript (Pakhoutova & Helman-Wazny) FULL reads (raws archived)

## Notes on brief-vs-evidence
- Brief asked to verify Current Science 2020 doi 10.18520/cs/v118/i2/285-292 — VERIFIED (see findings F1). Caveat: samples are Odisha 18th–19th c., NOT Pala.
- Brief asked "Nalanda/Vikramasila?" attribution — both now have museum-scholarly anchors: Nalanda (Asia Society 1987.1 colophons, Rubin essay) and Vikramashila (Cleveland 1938.301 culture field).
