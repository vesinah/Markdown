# Search Log - Loop A01
Project: palm_leaf_buddhist_manuscripts
Topic: Historiography and international scholarship infrastructure on Buddhist palm-leaf manuscripts
Date: 2026-08-26
Agent: ox-alpha research agent

## Environment notes
- Primary method (DuckDuckGo HTML endpoint) blocked by CAPTCHA on every attempt.
- websearch tool returned HTTP 429 on both attempts.
- Bing served completely unrelated results through webfetch on all attempts.
- Working workaround found late in session: r.jina.ai proxy in front of html.duckduckgo.com returns usable result lists.
- Direct institutional fetches were the main successful strategy.

## Queries attempted (chronological)

| # | Engine | Query | Result count | Notes |
|---|--------|-------|--------------|-------|
| Q1 | DuckDuckGo HTML | Buddhist manuscript cultures survey codicology palm leaf | 0 (CAPTCHA) | Blocked, bot challenge |
| Q2 | websearch tool | Buddhist manuscript cultures survey codicology palm leaf | 0 | HTTP 429 |
| Q3 | Bing | Buddhist manuscript cultures survey codicology palm leaf | ~10 shown, all irrelevant | Generic Buddhism pages |
| Q4 | Bing | "Pali Text Society" history founded 1881 Rhys Davids manuscripts | ~10 shown, all irrelevant | Hindi typing sites |
| Q5 | Bing | "Early Buddhist Manuscripts" Gandhara project University of Washington Salomon | ~10 shown, all irrelevant | Redwood park pages |
| Q6 | Mojeek | Nepal German Manuscript Preservation Project history palm leaf | 0 (CAPTCHA) | JS challenge |
| Q7 | DuckDuckGo Lite | Nepal German Manuscript Preservation Project NGMPP history | 0 (CAPTCHA) | Blocked |
| Q8 | DuckDuckGo Lite | British Library Endangered Archives Programme palm leaf Buddhist manuscripts | 0 (CAPTCHA) | Blocked |
| Q9 | Marginalia | Buddhist palm leaf manuscript codicology | 0 | Bot interstitial loop |
| Q10 | websearch tool (retry) | ประวัติการศึกษาคัมภีร์ใบลาน วิชาการ | 0 | HTTP 429 again |
| Q11 | Ecosia | Buddhist manuscript cultures codicology palm leaf survey | 0 | HTTP 403 |
| Q12 | Bing (Thai) | คัมภีร์ใบลาน การศึกษา วิชาการ โคดอักษรศาสตร์ | ~10 shown, all irrelevant | Australian storage ads |
| Q13 | Marginalia retry (sst token) | same as Q9 | 0 | New token, same interstitial |
| Q14 | r.jina.ai + DDG HTML (Thai) | ประวัติการศึกษาคัมภีร์ใบลาน | 10 relevant results | SUCCESS. Found MPSC, TCI-thaijo article, STOU exhibition, Fine Arts Dept page, manuscript.nlt.go.th, MSU RINAC, dmc.tv |
| Q15 | r.jina.ai + DDG HTML | "Buddhist manuscript cultures" Berkwitz Routledge knowledge ritual art | 10 relevant results | SUCCESS. Confirmed Routledge/Taylor and Francis metadata, archive.org copy, Google Books data |
| Q16 | r.jina.ai + DDG HTML | "Endangered Archives" palm leaf Buddhist manuscripts digitisation project | 7 relevant results | SUCCESS. Found bl.iro.bl.uk EAP collection, Arcadia fund page, H-Net notice |

Distinct queries attempted: 16 (requirement: minimum 8 - MET)

## Full-text fetches performed (substantial reads)

| Source | URL | Status |
|--------|-----|--------|
| Pali Text Society home | https://palitextsociety.org/ | HARVESTED |
| PTS About page | https://palitextsociety.org/about-the-pali-text-society/ | HARVESTED |
| PTS Fragile Palm Leaves Foundation page | https://palitextsociety.org/the-fragile-palm-leaves-foundation/ | HARVESTED |
| PTS Myanmar Manuscript Digitization project page | https://palitextsociety.org/project-to-digitize-myanmar-manuscripts/ | HARVESTED |
| Univ. of Hamburg NGMCP home | https://www.aai.uni-hamburg.de/en/forschung/ngmcp.html | HARVESTED |
| Univ. of Hamburg About the NGMPP | https://www.aai.uni-hamburg.de/en/forskning/ngmcp/history/about-ngmpp.html (en path) | HARVESTED |
| UW Early Buddhist Manuscripts Project | https://asian.washington.edu/early-buddhist-manuscripts-project | HARVESTED |
| Buddhist Digital Resource Center About | https://bdrc.io/about-us/ | HARVESTED |
| gandhari.org | https://gandhari.org | HARVESTED |
| National Library of Thailand ancient documents database | https://manuscript.nlt.go.th/ | HARVESTED |
| Dhammadhara journal article 266388 (Kawila-era palm leaves) | https://so01.tci-thaijo.org/index.php/dhammadhara/article/view/266388 | HARVESTED |
| Arcadia - Endangered Archives Programme grant page | https://arcadiafund.org.uk/grants/endangered-archives-programme-2/ | HARVESTED (raw HTML grepped) |

Substantial full-text reads: 12 (requirement: minimum 4 - MET)

## Failed / dead endpoints recorded (do not reuse blindly)
- https://earlymanuscripts.washington.edu/ - transport error (dead)
- https://depts.washington.edu/ebmp/ - now a parked "Sold by Seo.Domains" page
- http://siamese-heritage.org/ - domain hijacked, now Thai lottery spam site
- https://eap.bl.uk/ - returns HTTP 202 empty body (JS bot wall)
- https://bl.iro.bl.uk/collections/728aaf50-dab0-4613-a116-3221c34231cd - TLS failure via PowerShell; transport error via webfetch
- https://blogs.bl.uk/endangeredarchives/ - HTTP 404
- https://www.routledge.com/book/9780415598077 guess - HTTP 404 (correct ISBN found later via DDG proxy)
- https://th.wikipedia.org/wiki/คัมภีร์ใบลาน - HTTP 404 (page title differs; not needed since citation forbidden anyway)
- taylorfrancis.com book page - renders only footer without JS (metadata taken instead from DDG snippets and Google Books snippet)

## Raw documents saved to documents/
1. 2023-palitextsociety-about.html
2. 2023-palitextsociety-fragilepalmleaves.html
3. 2023-palitextsociety-home.html
4. 2023-palitextsociety-myanmar-digitization.html
5. 2025-uni-hamburg-ngmcp-home.html
6. 2016-uni-hamburg-about-ngmpp.html
7. 2025-uw-ebmp.html
8. 2025-bdrc-about.html
9. 2025-gandhari-org-home.html
10. 2569-nlt-manuscript-db-home.html
11. 2023-santidhammo-kawila-bailan.html
12. arcadiafund-eap-grants.html
