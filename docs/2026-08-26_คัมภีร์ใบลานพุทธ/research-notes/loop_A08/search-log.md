# Search Log — Loop A08 (India birthplace region: Gandharan birch bark, Gilgit, Pala Prajnaparamita, decline)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** A08 | **Date:** 2026-08-26
**Rule:** Zero internal knowledge — citable facts only from sources fetched this session.

## Tool status this session
- `websearch` (Exa MCP): HTTP 429 on first call — unusable
- DuckDuckGo html + lite: bot-challenge ("select all ducks") both attempts
- Mojeek: JS captcha wall
- r.jina.ai proxy over Bing search: HTTP 403
- Marginalia old-search: intermittent bot-wall ("barraged by bots", 1-second sst token); succeeded on most retries after delay
- Crossref REST API: working all calls
- Met Museum public Collection API (`collectionapi.metmuseum.org`): working
- Direct institutional fetches via PowerShell Invoke-WebRequest / webfetch: mostly working; exceptions: wisdompubs.org 526, journal.equinoxpub.com raw fetch 403 (webfetch render OK), uwapress old SALANC URL redirects to home

## Queries executed (distinct >= 8)
| # | Engine | Query | Result |
|---|---|---|---|
| Q1 | websearch | British Library Kharosthi birch bark scrolls 1994 acquisition Salomon | 429 |
| Q2 | DDG html | Senior Gandhari scroll collection dated Azes II birch bark | CAPTCHA |
| Q3 | DDG lite | Senior collection Gandhari birch bark scrolls Azes radiocarbon | CAPTCHA |
| Q4 | Mojeek | Senior collection Gandhari birch bark scrolls Azes | captcha |
| Q5 | Marginalia | Gilgit manuscripts 1931 discovery | hits: buddhistartnews (Naupur/Stein/Shastri), archaeopress PDF, wildfiregames junk |
| Q6 | Marginalia | Schoyen collection Kharosthi birch bark Buddhist manuscripts | hits: schoyencollection.com MS 2179/44; verlag.oeaw.ac.at From Birch Bark to Digital Data |
| Q7 | Marginalia | Pala period palm leaf Prajnaparamita manuscript Bengal Bihar illustrated | bot-wall (retry later not needed — Met API used instead) |
| Q8 | Marginalia | Gandhara birch bark manuscripts why not palm leaf | hits: lionsroar.com Salomon article (climate rationale found) |
| Q9 | Marginalia | Gilgit manuscripts National Archives India conservation birch bark | hits: IFLA repository bitstream, countercurrents Kashmir heritage (1948 transfer story) |
| Q10 | Crossref works?query= | Gilgit manuscripts Buddhist birch bark | von Hinuber "The Gilgit Manuscripts" chapter; Salomon BL/Schoyen chapter; Bajaur/Split chapters |
| Q11 | Crossref | palm leaf manuscripts India decline printing | Current Science pigment analysis; Restaurator repair/conservation; JIBS All-India seminar record |
| Q12 | Crossref | Waldschmidt Sanskrit Buddhist manuscripts Turfan edition | BSR reviews of Sanskrit-Woerterbuch begonnen von Ernst Waldschmidt (v9-v19) |
| Q13 | Crossref query.bibliographic | 9781805831495 | Archaeopress open-access edited volume identified (10.32028/9781805831495) |
| Q14 | Crossref container-title | Princely Archaeologies and Plural Sovereignties | no indexed chapters (PDF kept for Phase B) |
| Q15 | r.jina.ai/Bing | "birch bark" Gandhara "palm leaf" climate Salomon | 403 |
| Q16 | Met API search | Prajnaparamita (111 hits); Prajnaparamita Bihar (21 hits) | objects 74906, 74893 = Pala palm-leaf Ashtasahasrika folios |

## Direct fetches (institutional)
- asian.washington.edu/early-buddhist-manuscripts-project (read + archive)
- asian.washington.edu/british-library-kharosthi-fragments (read + archive)
- asian.washington.edu/ebmp-publications (read + archive)
- hiddenstories.library.utoronto.ca kashmir/gandhari-manuscript-p (read + archive)
- hiddenstories.library.utoronto.ca kashmir/birchbark-codices-in-----rad-- (read + archive)
- gandhari-texts.sydney.edu.au/gandhari-manuscripts/ (read + archive)
- gandhari-texts.sydney.edu.au/collections/robert-senior-collection/ (+ /dating/) (read + archive)
- gandhari.org home (read + archive)
- schoyencollection.com MS 2179/44 page (read core + archive)
- dsbcproject.org short history of Sanskrit Buddhist mss (read key sections + archive)
- verlag.oeaw.ac.at From Birch Bark to Digital Data product page (read blurb + archive)
- lionsroar.com Salomon article (read full + archive)
- buddhistartnews.wordpress.com Gilgit/Tucci article (read full + archive)
- countercurrents.org Kashmir heritage incl. Gilgit 1948 transfer (read full + archive)
- nationalarchives.nic.in hi home + list-digital-exhibitions (read + archive; zero Gilgit mentions)
- Met Collection API objects 74906, 74893 (JSON archived)

## Notes on brief-vs-evidence
- Brief suggested "Senior collection dated Azes". Fetched Sydney GBT dating page attributes the pot's year 12 to the Kaniska I era (127/8 CE start) => ~140 CE, supported by radiocarbon 130-250 CE (Allon et al. 2006). No Azes attribution found in any fetched source this session.
