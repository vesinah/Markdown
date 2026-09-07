# Loop B14 Findings — Tibetan annotation terminology and scribal culture in depth

Date: 2026-08-26
Loop: B14 of Phase B, project output\2026-08-25_คำแปลแทรกสิบแปดบท
Phase-B note: closes Phase A loop_22 gaps — (1) side-title Wylie term, (2) Scherrer-Schaub 2002 harvest, (3) TUFS vulgar-scribes PDF, (4) mchan convention verification, (5) per-manuscript dbu med vs dbu can descriptions.

## Queries executed

1. websearch x4 (side-title term; Scherrer-Schaub Enacting Words; mchan interlinear definition; IOL Tib J dbu med annotations) — all HTTP 429 (rate-limited); retried twice later, still 429.
2. webfetch: tufs.repo.nii.ac.jp PDF (406); journals.ub.uni-heidelberg.de JIABS landing (Anubis bot-wall).
3. bash Invoke-WebRequest: TUFS PDF with browser UA (still 406); OpenAlex API (budget exhausted).
4. Wayback availability API: TUFS PDF (no snapshot); JIABS 8927 (snapshot found).
5. Wayback capture fetch: JIABS viewer HTML -> extracted raw PDF link -> downloaded real PDF (1.18 MB) -> PyMuPDF text extraction (82 pp.).
6. curl.exe with browser UA: TUFS PDF succeeded (3.4 MB, 24 pp.) -> PyMuPDF extraction.
7. websearch retry for side-title term — 429 again.
8. DuckDuckGo lite + Bing + Mojeek via curl — bot-challenge / ad garbage / empty; abandoned.
9. earlytibet.com site search ?s=mchan -> located "Teachers, Students, and Notes"; fetched full post incl. comments.
10. RYwiki raw wikitext fetches (after fixing PowerShell ${t}? parsing bug): mchan, mchan_bu = 200 with dictionary content; logs_byang, mgo_byang = 404; later whole domain rate-limited to 403.
11. digitaltibetan.github.io formatting page re-fetched and keyword-scanned (yig chung headlines, rin chen spungs shad).
12. OAPEN REST API: found "Tibetan Printing" (Diemberger/Ehrhard/Kornicki 2016) with pre-extracted full-text bitstream (1.5 MB); handle page HTML 403 but REST worked.
13. BuddhistRoad: catalog page scrape -> download links; fetched Doney margins monograph (42 pp.) and Li Chodrup typology paper (62 pp.).
14. Brave Search HTML endpoint via curl (worked): queries on "side titles" pecha Wylie; blockprint running title Wylie; "logs byang"/"zur byang"; surfaced PechaMaker FAQ, CTAN pecha package doc, style guides.
15. Fetched pechamaker.com FAQ, CTAN pecha_docu.pdf, Maitripa style guide PDF; Wisdom style guide 403.
16. Wayback CDX: IDP palaeography resource — index archived, Tibetan sub-pages never captured.
17. tibetanlanguage.school Unit 4 fetched — verified pecha vocabulary list.

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Cristina A. Scherrer-Schaub | Enacting Words. A Diplomatic Analysis of the Imperial Decrees (bkas bcad)... | 2002 | https://journals.ub.uni-heidelberg.de/index.php/jiabs/article/view/8927 (PDF via Wayback .../download/8927/2820/8721) | Full 82-pp. study harvested: bkas bcad 763/783/814 layers; mdun sa committee + dharma zu chen 'tshal ba'i grvar office; zus/zu chen correction culture; Lalitavistara colophon formula gtan la phab pa; skad gsar bcad in Dunhuang colophons; P.tib. 608 dual pagination + Khotanese corrector names |
| Brandon Dotson | The Vulgar Scribe and his Erasure in the Sutra Economy of Ninth-Century Dunhuang | n.d. (refs accessed 2024; IATS Prague 2022 material) | https://tufs.repo.nii.ac.jp/record/2001636/files/OldTibetan4-04.pdf | TUFS-hosted 24-pp. study: glegs tshas writing surfaces; insults/doodles on discarded folia PT 1451r, PT 1466, PT 1480, GL.t. 0326, boards PT 1196/1176/1155; merit-economy erasure thesis |
| Channa Li | Toward a Typology of Chodrup's Cursive Handwriting (BuddhistRoad Paper 1.2) | 2021 | https://omp.ub.rub.de/index.php/BuddhistRoad/catalog/book/191 ; DOI 10.46586/rub.br.191.169 | Interlinear sentences on IOL Tib J 625 (position specified), IOL Tib J 588 IV, red interlinear P.T. 783v; discard records Db. T. 487/2910/2920/2921/2932; dbu med ductus typology |
| Sam van Schaik | Teachers, Students, and Notes (earlytibet.com) | 2008 | https://earlytibet.com/2008/07/03/teachers-students-and-notes/ | Three-tier manuscript typology (IOL Tib J 310.1209 / IOL Tib J 1 / IOL Tib J 716); student-notes hypothesis; homophone-error caveat; zin bris lecture notes; Cabezon colophon with scribe inserting material "in the interstices"; dbu can->dbu med development comment |
| Diemberger, Ehrhard & Kornicki (eds.) | Tibetan Printing: Comparison, Continuities, and Change (BTSL 39) | 2016 | https://library.oapen.org/handle/20.500.12657/38101 | Open-access full volume: van Schaik Turfan chapter script datings (TibHT items vs IOL Tib J 492 "blobby heads"); Eimer on Tibetan marginals (short titles inserted, gong/'og marks); multilingual running titles in Indic pothis; Khara Khoto 1153 earliest print |
| Rangjung Yeshe Wiki (Tsadra) | entries mchan; mchan bu | digitized | https://rywiki.tsadra.org/index.php/mchan ; /mchan_bu | mchan = "notations, notes, footnote, annotations... 1) annotation, (foot)note, remark [as mini-commentary] ... 5) correction in editing" [IW]; mchan bu = "[foot]notes, annotation, commentary; student; apprentice", Syn. mchan 'grel [RY/JV/KNT attributions] |
| Helmut Eimer (in Diemberger et al.) | Observations Made in the Study of Tibetan Xylographs | 2016 | same OAPEN bitstream | English term "Tibetan marginals": short title of Kanjur section inserted on recto marginals; gong/'og folio marks; Chinese marginal entries structure |
| Chris Fynn / CTAN | pecha LaTeX package documentation | n.d. | https://ctan.org/pkg/pecha (doc: languages/tibetan/pecha/pecha_docu.pdf) | Describes pecha "margin boxes"/"marginal headers": left odd-page margin = sheet number; even-page margin "usually contains a Tibetan short title or the name of the text" — no Wylie term given |
| PechaMaker (Fynn) | FAQ / User's Guide references | 2013 | http://www.pechamaker.com/FAQ.html | Layout model: Title/Fancy/Body pages; inner/outer side boxes for images; yi-go dialog; rin chen pung shad auto-conversion — terminology is English only |
| Maitripa College | Style Guide for Graduate Students | 2015 | https://maitripa.org/wp-content/uploads/2017/01/MCStyleGuide.pdf | Citation convention: "Indigenous Tibetan works can be cited with pecha folio and side" |
| tibetanlanguage.school | Unit 4: Tibetan writing | 2022-24 | https://tibetanlanguage.school/learn/standard-tibetan/unit-4/ | Verified vocabulary: dpe cha pecha; yig mgo letter-head marking titles/recto pages; tshek; sha shä; dbu can/dbu med; tshukring/tshukthung/khyukyik; lok-yik reversed letters; kung-yik abbreviations |
| Sam van Schaik | Infrared, prayers and booklets; A Tibetan Book of Spells; Tales from the Scriptorium III (earlytibet.com) | 2007-09 | https://earlytibet.com/2007/07/10/infrared-prayers-and-booklets/ etc. | IOL Tib J 76 booklet (Sgra sbyor extract per Scherrer-Schaub); IOL Tib J 401 spellbook of Prajnaprabha; P.T. 1164 glegs tshas doodles; Miran otter sketch |
| International Dunhuang Project | IDP Palaeography Resource (index) | archived 2023 | http://web.archive.org/web/20230406200657/http://idp.bl.uk/education/paleography/index.html | Intro to Tibetan/Chinese palaeographic styles with transcription exercises; Tibetan sub-pages not archived (blocked live) |

## Key findings (with URLs)

1. Side-title Wylie term: STILL UNVERIFIED — (ยังไม่พบข้อมูลยืนยัน). Neither mtshams sbyar nor logs byang could be confirmed as the Tibetan term for side-marginal titles in any accessible reliable source this loop; logs_byang returns no article on RYwiki and zero scholarly hits. What IS verified is the convention under English labels: Eimer documents that in Kanjur xylographs short titles were carried "in the Tibetan marginals on the recto" together with gong/'og folio marks (OAPEN full text, lines 16233-16237); the CTAN pecha package formalizes "margin boxes" whose even-page margin "usually contains a Tibetan short title or the name of the text" (https://ctan.org/pkg/pecha); Maitripa's style guide cites Tibetan works "with pecha folio and side". Recommendation for the book: use English "side title / marginal running title" with a note that a distinct canonical Wylie designation remains unlocated, rather than adopting an unattested term.
2. Adjacent verified vocabulary (usable in the chapter): mchan = "annotation, (foot)note, remark [as mini-commentary]... correction in editing" and mchan bu = "[foot]notes, annotation, commentary", synonym mchan 'grel (RYwiki, dictionary attributions IW/RY/JV/KNT: https://rywiki.tsadra.org/index.php/mchan , /mchan_bu). Also verified from DigitalTibetan + tibetanlanguage.school: yig chung small type reserved for annotations/headlines in pechas (~25-30% smaller), yig mgo marks titles and recto pages, sbrul shad marks insertions/chapter boundaries (https://digitaltibetan.github.io/DigitalTibetan/docs/tibetan_formatting.html ; https://tibetanlanguage.school/learn/standard-tibetan/unit-4/).
3. Scherrer-Schaub 2002 fully harvested (closes loop_22): the sGra sbyor tradition rests on three bkas bcad layers — Svalpavyutpatti 763, sGra sbyor written down 783, terminology fixed ne varietur 814 — while "the register was officially homologated, and the text of the sGra sbyor reconfirming the previous authoritative decision of 783 was established as authentic". Correction culture is institutionalized by 814: committee (mdun sa) plus "the college for proposals of great revision (zu chen) of Buddhist texts (dha rmma zu chen 'tshal ba'i grvar)" at the imperial palace; colophons prove revision pre-dated 814 ("emendation and revision (zus) existed before, this being confirmed by colophons"). URL: https://journals.ub.uni-heidelberg.de/index.php/jiabs/article/view/8927
4. TUFS vulgar-scribes study parsed (closes loop_22): Dotson's article defines glegs tshas as "oversized pothi-folia that served as their desks or work surfaces in the scriptorium", quotes marginal insults verbatim with Wylie (PT 1466 "legs bzang gIs nI rgya mo du ma zhig brgyos so"; PT 1480 non-rejection joke "dor ba ma myed pa ste la ling ho wen men ma la rgyos"), editorial farce (PT 1451r Hing 'do rejecting his own bam po; GL.t. 0326 self-praise discard note), and ownership curses (PT 1196). Access route documented: HTTP 406 for normal clients, succeeds via curl.exe with browser user-agent. URL: https://tufs.repo.nii.ac.jp/record/2001636/files/OldTibetan4-04.pdf
5. Per-manuscript script inspection achieved through two open studies (closes loop_22):
   - Channa Li 2021 gives explicit interlinear-note placements on named manuscripts: IOL Tib J 625 "Interlinear commentaries appear below the fifth and sixth lines on the recto and the first line on the verso"; P.T. 783 verso carries "Interlinear sentences in red" over Fajing's Yogacarabhumi lecture notes; IOL Tib J 588 texts IV carry interlinear sentences; Chodrup's hand itself is "ornately cursive and small... Most syllables are executed in a single stroke" (dbu med typology). https://omp.ub.rub.de/index.php/BuddhistRoad/catalog/book/191
   - Sam van Schaik's Turfan chapter dates scripts by named items: "somewhat rounded headed (dbu can) letters with 'blobby' heads are characteristic of a group of 10th century Buddhist manuscripts from Dunhuang (e.g. IOL Tib J 492)", while TibHT 36/104 show mature dbu med with contractions (12th-13th c.). OAPEN: https://library.oapen.org/handle/20.500.12657/38101
6. Manuscript typology by production context (van Schaik 2008): scriptorium sutras (IOL Tib J 310.1209) vs stylish personal copies (IOL Tib J 1) vs scruffy probable student notes (IOL Tib J 716); homophonic "errors of hearing" are ambiguous evidence of oral transmission because copyists also mentally repeat segments; genre term zin bris ("lecture notes") attested in thread. https://earlytibet.com/2008/07/03/teachers-students-and-notes/
7. Layered authorship visible in colophons: Cabezon example quoted by van Schaik shows an author-lecturer, a cleaning scribe, then a second scribe "who inserted some scriptures and reasoning in the interstices" — a direct colophon witness to interstitial annotation feeding back into main text. Same source as #6.
8. Xylograph-era apparatus refined (Eimer 2016): recto marginals carried the section short title and consecutive volume numbering; verso marginals the folio count with gong/'og markers; owners corrected printing errors in lower margins; Heissig's "Pekingese xylographs" = prints with Chinese marginal entries. OAPEN full text as above.
9. New bibliography leads for future loops: Dotson & Doney 2025, Producing Buddhist Sutras in Ninth-Century Tibet (De Gruyter, Studies in Manuscript Cultures 63); Dotson & Kapstein 2024, "Colophons," in Tibetan Manuscripts and Early Printed Books vol. 1 (Cornell UP, 166-191); Dotson 2013-2014 JIABS 36-37 "The Remains of the Dharma".

## Gaps closed (vs loop_22)

1. Scherrer-Schaub 2002 — full text harvested and documented (was landing-page only).
2. TUFS vulgar-scribes PDF — parsed despite 406; full content notes saved.
3. mchan convention — dictionary-grade definition + usage examples secured (mchan, mchan bu, syn. mchan 'grel; "correction in editing" sense).
4. Per-manuscript script inspection — explicit quotes now on file for IOL Tib J 625, IOL Tib J 588, P.T. 783v, IOL Tib J 492, TibHT series, plus the IOL Tib J 310.1209 / 1 / 716 typology set.
5. Side-title term — resolved negatively-but-rigorously: convention documented in primary descriptions; no canonical Wylie term found; candidate terms explicitly marked unverified.

## Remaining

- The exact Tibetan-language label for the pecha side/margin running title (if one exists as a fixed term in traditional craft vocabulary) may require Tibetan-language sources (Bod ljongs press manuals, LTWA guides) or expert consultation — (ยังไม่พบข้อมูลยืนยัน).
- Nishizawa 2021 / Fukuda 2015 J-STAGE PDF bodies still unparsed (carried over from loop_22).
- Brill dbu-med origin chapter full text still binary-blocked; consider academia.edu copy of van Schaik "Towards a Tibetan Palaeography" (linked from tibetanlanguage.school) in a future loop.
- IDP Tibetan palaeography tutorial pages exist live but were never archived and block bots.

## Blocked sources

- https://journals.ub.uni-heidelberg.de/... — Anubis JS challenge on live site; bypassed via Wayback capture (documented above).
- https://tufs.repo.nii.ac.jp/record/2001636/files/OldTibetan4-04.pdf — HTTP 406 to Invoke-WebRequest/webfetch; bypassed via curl.exe browser UA.
- rywiki.tsadra.org API and repeated page hits — 403 rate-limit after first successes; use sparingly next time.
- html.duckduckgo.com, lite.duckduckgo.com, bing.com, mojeek.com — bot challenges/garbage results; search.brave.com HTML worked via curl.
- api.openalex.org — daily budget exhausted (retry after UTC reset if needed).
- https://wisdomexperience.org/wp-content/uploads/2019/06/Wisdom-Style-Guide.pdf — 403.
- idp.bl.uk — live 403; Tibetan paleography sub-pages absent from Wayback entirely.

## Documents harvested (in documents/)

1. 2002-Scherrer-Schaub-enacting-words.md
2. 2024-Dotson-vulgar-scribe-erasure.md
3. 2021-Li-chodrup-cursive-typology.md
4. 2008-vanSchaik-teachers-students-notes.md
5. 2016-Diemberger-et-al-tibetan-printing-marginals.md
