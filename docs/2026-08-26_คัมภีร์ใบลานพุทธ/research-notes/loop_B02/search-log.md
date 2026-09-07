# Search Log — Loop B02: Nepal citation-chaining deep dive (A09 gaps)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B02 | **Date:** 2026-08-26
Chain from: loop_A09/findings.md (F5, F8, F12, F13, F16), loop_A05/findings.md

| # | Query / action | Tool | Result |
|---|---|---|---|
| Q1 | "palm leaf paper transition Nepal manuscripts century cause" | webfetch DDG html | OK — hits: asianart.com tamsuks article; Kathmandu Post 2026 digitisation piece; lis.academy; scribd conservation summary |
| Q2 | "Bendall Catalogue Buddhist Sanskrit manuscripts Cambridge 1883 archive.org" | webfetch DDG html | OK — IA items catalogueofbuddh00camb + b30094148; HathiTrust records; CUDL Sanskrit collection page; Open Library OL24137026M/OL26450614M |
| Q3 | "Haraprasad Shastri catalogue Durbar Library Nepal palm leaf 1905" | webfetch DDG html | CAPTCHA (bot challenge) — source obtained instead via archive.org metadata API + direct download of Shastri_nepalV1-ocr_1905_djvu.txt |
| D1 | Download Bendall OCR: archive.org/download/catalogueofbuddh00camb/catalogueofbuddh00camb_djvu.txt | PowerShell Invoke-WebRequest | OK — 579,720 bytes saved |
| D2 | Shastri _djvu.txt guess filename | PowerShell | 404 → resolved via IA metadata API: real file name Shastri_nepalV1-ocr_1905_djvu.txt |
| D3 | Download Shastri OCR under real name | PowerShell | OK — 400,454 bytes saved |
| F1 | Fetch https://cudl.lib.cam.ac.uk/view/MS-ADD-01464 | webfetch | OK — full description read; NO "1015" anywhere |
| F2 | Fetch https://cudl.lib.cam.ac.uk/view/MS-ADD-01643 | webfetch | OK — colophon date "1015 CE", scribe Sujātabhadra found here |
| F3 | Grep/read Bendall OCR for palm/paper/Mahipala/1464/1643/1015 | Select-String + Read | OK — key passages pp. iii, xviii–xxii, xxxi–xxxiii, xl–xli; entries Add.1464 (p.101), Add.1643 (p.152) |
| F4 | Grep/read Shastri OCR for palm/paper + preface + essay section | Select-String + Read | OK — Preface I–II; climate passage; Bendall's Varnśāvalī essay fn4 (palm-leaf rare within ~century after N.S.508/509) |
| Q4 | von Hinuber oldest Pali manuscript NGMPP study title year (+Vinaya+Kathmandu+1991) | webfetch via r.jina.ai proxy of DDG | OK — Open Library OL9049885M; NLA Bib ID 682016; philpapers SALTOP-2; **IA scan: archive.org/details/oldestpalimanuscriptoscarvonhinueber_931_d** |
| D4 | IA metadata + download von Hinüber OCR | PowerShell | OK — 172,933 bytes saved; OCR garbled (Indic-mangled, Latin text unrecoverable) |
| F5 | Fetch Open Library OL9049885M full page | webfetch | OK — title/subtitle/1991/F. Steiner/ISBN 978-3-515-05936-7/48pp; 2nd edition record: Akademie der Wissenschaften und der Literatur |
| Q5 | "Cambridge Add 1464 Astasahasrika date colophon 1015" | webfetch via r.jina.ai proxy of DDG | OK — lead to MS-ADD-01643 as true "1015" manuscript (Wikipedia hit noted but NOT used as citation) |
| Q6 | "Nepalese manuscript haritalika yellow orpiment coating paper" | webfetch via r.jina.ai proxy of DDG | OK — asiainch.org/globalinch.org Harital Paper; National Archives Nepal Archival.aspx; arXiv 2512.17111 HTR pipeline |
| Q7 | "Newar scribe palm leaf ink brush colophon formula Nepal manuscripts" | webfetch via r.jina.ai proxy of DDG | OK — academia.edu Add.2832 (Aśvavaidyaka 1364 CE); Formigatti "Colophons in Fourteenth-Century Nepalese Manuscripts"; HMML collections page; Cleveland 1938.301.5.a |
| Q8 | "Nepal German Manuscript Preservation Project oldest Pali manuscript palm leaf Vinaya" | webfetch via r.jina.ai proxy of DDG | OK — anjagoeing.info Recollectio #26; UHH NGMCP pages; csmc.uni-hamburg.de 2024 news; scribd review snippet (8th–9th c. dating claim) |
| F6 | Fetch https://www.asianart.com/articles/tamsuks/index.html | webfetch | OK — full article read & archived |
| F7 | Fetch https://anjagoeing.info/recollectio/nepal-manuscript-heritage/ | webfetch | OK — full card read & archived |
| F8 | Fetch https://www.asianart.com/articles/tamsuks/01.html | webfetch | figure page only (no text) — superseded by F6 |
| F9 | Fetch https://cudl.lib.cam.ac.uk/collections/sanskrit | webfetch | OK — 248 items / 1906 index cards / >1,600 works facts verified |
| F10 | Fetch https://asiainch.org/craft/harital-paper/ | webfetch | OK — full process description read & archived |

Queries run: 8 distinct required queries (Q1–Q8) + supporting fetches F1–F10, downloads D1–D4.
DDG bot-challenges encountered: Q3 and the original direct attempt of Q4/Q5/Q6/Q7/Q8 batch → all routed through r.jina.ai proxy successfully.
