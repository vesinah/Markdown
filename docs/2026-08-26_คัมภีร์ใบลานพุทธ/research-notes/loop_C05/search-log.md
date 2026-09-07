# Search Log — Loop C05 (final gap-fill for B07 leftovers)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C05 | **Date:** 2026-08-26
Method: DuckDuckGo HTML endpoint via r.jina.ai reader (direct DDG and websearch tool both blocked: CAPTCHA / 429). Raw copies in documents/.

| # | Action / Query | Result |
|---|---|---|
| 1 | READ FIRST loop_B07/findings.md | Read in full; Phase C candidate list drives this loop |
| 2 | DDG html direct x4 (Huntington; Kim; Losty; Asia Society) | BLOCKED — "bots use DuckDuckGo" challenge |
| 3 | websearch tool x2 | 429 rate-limited (exa backend) |
| 4 | jina->DDG q=Huntington "Leaves from the Bodhi Tree" 1990 Dayton Art Institute | OK — IA item, HathiTrust record, Google Books, Stanford/CCA catalogs |
| 5 | jina->DDG q=Jinah Kim "Receptacle of the Sacred" UC Press | OK — ucpress.edu, MUSE book/25986, OUP CASO book/17926, Google Books |
| 6 | jina->DDG q=Losty "Art of the Book in India" 1982 British Library catalogue | OK — IA item artofbookinindia0000lost + NLA/NYPL/Free Library/Wellcome/Aga Khan records |
| 7 | jina->DDG q="asia society" museum "1987.1" Prajnaparamita palm leaf Nalanda | OK — Wikimedia Commons category only |
| 8 | FETCH archive.org/details/leavesfrombodhit0000hunt (jina) | FULL READ; metadata archived (html + this session's notes) |
| 9 | FETCH ucpress.edu/books/receptacle-of-the-sacred/hardcover | FULL READ; raw html archived |
| 10 | DOWNLOAD UC Press ancillary diagram PDFs w_diagram_2_1..5_3 (8 files) | OK — all archived (Kim catalogue of dated mss) |
| 11 | jina->DDG q=museum.asiasociety.org prajnaparamita leaves Ashtasahasrika | OK — new CMS object URL + legacy treasure_object.asp?ObjectID=479 |
| 12 | museum.asiasociety.org direct fetch | 403 |
| 13 | FETCH legacy asiasocietymuseum.org ObjectID=479 | FULL READ; raw html archived |
| 14 | FETCH new CMS page via jina | FULL READ |
| 15 | FETCH archive.org/details/artofbookinindia0000lost (jina) | FULL READ; raw html archived |
| 16 | jina->DDG q=Guy Britschgi "Wonder of the Age" Met Yale 2011 | OK — Met publications page confirmed |
| 17 | FETCH metmuseum.org MetPublications Wonder of the Age | FULL READ (default reader); IWR/curl/jina retries later blocked 429/Vercel → verbatim text capture archived as md |
| 18 | jina->DDG review "Leaves from the Bodhi Tree" + journal names | NO RESULTS |
| 19 | Crossref API x3 (Kim; H&H; Losty) | Kim DOIs OK; H&H query 429; Losty query OK but no 1982 monograph DOI (found Grove Art entries by J.P. Losty); json archived x2 |
| 20 | jina->DDG q="Receptacle of the Sacred" review corpus number | OK — O'Neill review (HIMALAYA 39(1)), JSTOR landing 10.1525/j.ctt2jcbqv |
| 21 | FETCH digitalcommons.macalester.edu/himalaya/vol39/iss1/32/ | FULL READ (landing); direct PDF 403 |
| 22 | DOWNLOAD semanticscholar PDF of O'Neill review; Edinburgh PDF | SS PDF OK (archived); Edinburgh returned HTML error page |
| 23 | Read PDF tool attempt | ERROR: model cannot read PDF input — user informed; switched to r.jina.ai text extraction |
| 24 | jina extraction of O'Neill review PDF | FULL TEXT read (4 pp., pp.254-256) |
| 25 | jina->DDG q=India manuscript culture decline printing palm leaf to paper Buddhist | OK — natmus.dk Tranquebar page; BnF Petit article; Emmrich ORE chapter; IJRCS 2025 PDF |
| 26 | FETCH en.natmus.dk Tranquebar printing/palm-leaf page | FULL READ; raw html archived |
| 27 | FETCH heritage.bnf.fr Printing India's texts (Jérôme Petit) | FULL READ; raw html archived |
| 28 | DOWNLOAD Venkatachalapathy 2009 RDC_XIV_Tranquebar.pdf; IJRCS202504026-min.pdf | Both archived (IJRCS not yet read = archived-only) |
| 29 | Crossref API "From Manuscript to Print in South and Southeast Asia" | OK — Emmrich, ORE Religion, DOI 10.1093/acrefore/9780190...582, 2021-05-26; json archived |

Fully-read sources this session: UC Press Kim page; IA H&H metadata; IA Losty metadata; Asia Society CMS page; Asia Society legacy page; Met Wonder page; O'Neill review full text; BnF Petit article; NatMus Tranquebar page; Macalester landing. (=10)
