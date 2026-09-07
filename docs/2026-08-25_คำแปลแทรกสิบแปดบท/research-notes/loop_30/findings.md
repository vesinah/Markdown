# Loop 30 Findings — Comparative frameworks and reference infrastructure for global glossing studies

Date of research: 2026-08-25
Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_30
Supports chapters 4 (key terms/scholars/theories), 17 (Buddhist synthesis), 18 (Christian synthesis).

## Queries executed

### Websearch (tool)
1. `Textual Microcosms project Hebrew University "interlinear translation of the month"` — OK (PI verified; series pages #12, #38 surfaced)
2. `GlossIT ERC Consolidator project Bernhard Bauer Graz early medieval glosses` — OK
3. `Gloss Corpus glossing.org Pádraic Moran collections glosses v1.0` — OK (66/4/24,872 confirmed on site)
4. `Trent Walker "Indic-Vernacular Bitexts" JAOS interlinear interphrasal` — OK (full abstract + excerpts)
5. `Moran Zisk "Handbook of Glossing" manuscript annotation traditions Ireland Japan` — OK (full TOC via glossam.ie)
6. `Complutensian Polyglot Bible 1514-1517 interlinear layout Septuagint Vulgate columns` — OK
7. `Peter Skilling Buddhist paratexts sutra commentaries nissaya glossing study` — partial (no dedicated paratext monograph found; nissaya Brill article captured)
8. `"English Hexapla" 1841 Bagster Hexapla six English versions New Testament parallel columns` — OK
9. `Textual Microcosms "interlinear translation of the month" Balinese Javanese Malay Ricci` — OK (CORDIS Results publications list; maarti post found)
10. `Jonathan A. Silk "canon" formation ... "Brill's Encyclopedia of Buddhism"` — OK ("Canonicity" chapter located)
11. `"Glossing Practice" "Comparative Perspectives" Lexington 2023 edited volume editor` — OK (editors verified)

### Direct page fetches
- cordis.europa.eu/project/id/101001731 (TextualMicrocosms fact sheet) — full capture
- cordis.europa.eu/project/id/101123203/reporting (GLOSSIT) — redirects to fact sheet; no results registered yet there
- glossit.uni-graz.at/en/output/ — full output list captured
- glossing.org/glosscorpus/?page=about — full capture
- lockwoodonlinejournals.com JAOS article view page (Walker) — full abstract/metadata capture
- medium.com/@Textual.Microcosms — monthly post list captured
- library.hds.harvard.edu Complutensian exhibit — in search results; LoC record likewise

### API / bash fallbacks
- Crossref: Moran & Whitman Speculum DOI 10.1086/717331 (authors/date verified); Glossing Practice chapter DOIs (Rowman & Littlefield, 2023); Silk author query
- OpenAlex: rate-limited mid-loop ("Insufficient budget... resets at midnight UTC") — abandoned
- Invoke-WebRequest rowman.com publisher page: HTTP 403 — blocked

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Ronit Ricci (PI) | Textual Microcosms: A New Approach in Translation Studies (ERC CoG 101001731) | 2021-2027 | https://cordis.europa.eu/project/id/101001731 ; https://textualmicrocosms.huji.ac.il/ ; dept confirmation https://en.religion.huji.ac.il/ | Interlinear translation as framework; Indonesian-Malay world, late 16th-20th c.; five themes incl. local terminologies, script choice, untranslatability |
| Textual Microcosms team | Interlinear Translation of the Month blog series (#1-38+) | 2022?-2025 | https://textualmicrocosms.huji.ac.il/interlinear-translation-month-12 ; ...-month-38 ; Medium mirror https://medium.com/@Textual.Microcosms | Monthly case posts across Malay/Javanese/Sundanese/Balinese/Batak/Maranao traditions; Balinese maarti installment by Keiko Kamiishi (Aug 2025) |
| Ronit Ricci | Mediating the maulid... IMW 51(150); Added in Translation... Philological Encounters 9 | 2023-24 | https://doi.org/10.1080/13639811.2023.2221927 ; https://doi.org/10.1163/24519197-bja10046 | Project peer-reviewed outputs on interlinear Maulid translations and Javanese Islamic keywords |
| Aglaia Iankovskaia | Reading Arabic in Sumatra; Between translation and commentary | 2024 | https://doi.org/10.1080/13639811.2024.2354597 ; https://doi.org/10.4000/11wu6 | Didactic interlinear translation; Snouck Hurgronje collection text |
| Keiko Kamiishi | Literature across generations: Bhāratayuddha translated into Modern Javanese, Wacana 26(3) | 2025 | https://doi.org/10.17510/wacana.v26i3.1867 | BL Add MS 12279: word-for-word and line-for-line ModJ translation between OJ lines; project postdoc under Ricci |
| Bernhard Bauer (PI) | GlossIT: Celtic and Latin glossing traditions (ERC CoG 101123203) | 2024-2029 | https://cordis.europa.eu/project/id/101123203 ; https://glossit.uni-graz.at/en/ | Bede computistica + Priscian MSS; Old Breton/Old Irish/Old Welsh + Latin glosses; HTR/NLP/network analysis/DNA-sequence alignment |
| Bauer et al. | GlossIT Output page (6 articles 2025-26, presentations) | 2025-2026 | https://glossit.uni-graz.at/en/output/ | DSH DNA-alignment method paper; Das Mittelalter LOD; Peritia Wolfenbüttel Priscian; Studia Celtica Fennica BN1616 |
| Bauer | Vienna Bede glosses, Open Research Europe 3:108 | 2024 | https://doi.org/10.12688/openreseurope.16006.2 | Are vernacular Celtic glosses originals or translations? Peer-reviewed v2 |
| Pádraic Moran | Gloss Corpus v1.0 | 2024 | https://www.glossing.org/glosscorpus/ ; about page ; GitHub release 23 Dec 2024 | 66 collections / 4 primary texts / 24,872 glosses; DOIs per edition; TEI XML templates; part of GLOSSAM |
| Pádraic Moran (PI) | GLOSSAM: Global and Local Scholarship on Annotated Manuscripts | 2022-2026 | https://glossam.ie/ | Research Ireland Laureate; components: Handbook (G1), digital infrastructure (G2), Irish surveys (L1/L2), monograph (M) |
| Moran & Zisk (eds.) | Handbook of Glossing (De Gruyter, Studies in Manuscript Cultures) | forthcoming | https://glossam.ie/handbook | 27 chapters, Ireland to Japan; full TOC verified incl. Greek/Syriac/Coptic/Hebrew/cuneiform/Arabic/Turkish/Persian/Sanskrit/Chinese/Dunhuang/Korean/Vietnamese/Japanese |
| Cinato, Lahaussois, Whitman (eds.) | Glossing Practice: Comparative Perspectives (Lexington) | 2023 | https://htl.cnrs.fr/glossing-practice-comparative-perspective/ ; ISBN 9781793612809 | First book specifically on comparative glossing; West + East Asia focus on Japan; Zisk kundoku chapter |
| Moran & Whitman | Glossing and Reading in Western Europe and East Asia: A Comparative Case Study, Speculum 97/1 | 2022 | https://doi.org/10.1086/717331 | Structural comparison Irish glossing vs Japanese kunten (Saidaiji MS); shared chronology; symbols as glosses |
| Trent Walker | Indic-Vernacular Bitexts from Thailand..., JAOS 140(3), 675-700 | 2020 | https://doi.org/10.7817/jameroriesoci.140.3.0675 | Defines bitexts (interphrasal/interlinear); selection-analysis-presentation model; four presentation modes; Pali-Siamese/Lanna cases 1450-1850 |
| Jonathan A. Silk | "Canonicity", Brill's Encyclopedia of Buddhism I | 2015 | https://openphilology.eu/publications-jonathan-silk ; https://brill.com/abstract/serial/HO2-029 | Canon formation reference chapter; Silk also leads ERC Open Philology |
| Anonymous imperial committee | Mahāvyutpatti + sGra sbyor bam po gnyis pa | c. 814 CE | https://glossaries.dila.edu.tw/glossaries/MVP?locale=en ; https://www2.hf.uio.no/polyglotta/index.php?page=volume&vid=263 | State-standardized Sanskrit-Tibetan glossary regulating translation; digital editions at DILA and Bibliotheca Polyglotta |
| Brill journal article | Burmese Nissaya Literature: A Mainstream Monastic [genre] | 2023 | https://brill.com/view/journals/mnya/26/1/article-p1_004.xml | nissaya/nāmasadda word-for-word vs vohāra longer-passage spectrum; pedagogical role; engages Walker 2020 bitext concept |
| Cisneros (init.), Brocar (printer) | Complutensian Polyglot Bible, 6 vols | 1514-1517, pub. 1520 | https://www.loc.gov/resource/gdcwdl.wdl_10636_001/?sp=2&st=list ; https://library.hds.harvard.edu/exhibits/incomparable-treasure/complutensian-polyglot | Layout: LXX with original Latin interlinear; Vulgate center column; Hebrew outside; Targum Onkelos+Latin below Pentateuch; NT Greek-Vulgate facing; first printed Greek NT (colophon 10 Jan 1514) |
| Samuel Bagster and Sons | The English Hexapla (six English NTs + Greek after Scholz; historical account by S.P. Tregelles) | 1841 | https://archive.org/details/1841-english-hexapla ; https://archive.org/details/ENGHEX_DBS_HS | Wiclif 1380, Tyndale 1534, Cranmer 1539, Geneva 1557, Rheims 1582, KJV 1611 in parallel columns under Greek |

Full-text document harvests in documents/: [2020]-Walker-bitexts, [2024]-Moran-GlossCorpus, [2023]-Cinato-GlossingPractice, [2024]-Bauer-GlossIT, [2021]-Ricci-TextualMicrocosms, [1520]-Cisneros-ComplutensianPolyglot, [0814]-Mahavyutpatti-Silk-Skilling-buddhist.

## Key findings (with URLs)

1. Textual Microcosms PI verified as Prof. Ronit Ricci (Hebrew University of Jerusalem) — not a David Shulman group project; ERC Consolidator Grant 101001731 (2021-09-30 to 2027-09-30, EUR ~2.0M). Scope: interlinear translation in the Indonesian-Malay world, late 16th-20th centuries. https://cordis.europa.eu/project/id/101001731 ; https://en.religion.huji.ac.il/
2. Its "Interlinear Translation of the Month" blog series runs to at least installment #38, mirrored on Medium, and covers Malay Bible glossing, Sundanese kitab interlinears, Maranao hadith collections, and Balinese maarti manuscripts (Kamiishi, Aug 2025) — directly usable as cross-tradition case material. https://medium.com/@Textual.Microcosms ; https://textualmicrocosms.huji.ac.il/interlinear-translation-month-12
3. GlossIT (ERC CoG 101123203, Bernhard Bauer, Univ. Graz, 2024-2029) targets Bede and Priscian gloss corpora in Old Breton/Irish/Welsh + Latin, pioneering DNA-sequence-alignment methods for finding parallel glosses; first outputs already published (Digital Scholarship in the Humanities 2025; Peritia 36; Das Mittelalter 30/1; Studia Celtica Fennica 22). https://glossit.uni-graz.at/en/output/
4. Gloss Corpus v1.0 (Moran, Galway; released 23 Dec 2024) holds exactly 66 collections on 4 primary texts = 24,872 glosses (Isidore Etym. 1: 54 coll./4,279; Würzburg Pauline glosses: 3,642; St Gall Priscian: 13,395; Félire Óenguso: 1,519), each edition citable by DOI; currently only Latin West/Old Irish traditions. A staging version shows growth to 73 collections/33,648 glosses incl. Milan Psalms commentary and Ælfric glossary. https://www.glossing.org/glosscorpus/
5. Walker's JAOS 2020 framework defines bitexts as bilingual texts mixing languages "typically in an interphrasal or interlinear arrangement", with a three-step model (selection, five analytic techniques, four presentation modes: philological/exegetical/homiletic/poetic) and explicit comparanda to medieval Latin glossing and East Asian kundoku — the strongest single bridge concept between chs. 17 and 18. https://doi.org/10.7817/jameroriesoci.140.3.0675
6. Two real comparative/handbook works identified: (a) Cinato, Lahaussois & Whitman (eds.), Glossing Practice: Comparative Perspectives (Lexington Books, 2023, ISBN 9781793612809) — first book specifically on comparative glossing; (b) Moran & Zisk (eds.), Handbook of Glossing (De Gruyter, Studies in Manuscript Cultures, forthcoming, 2 vols., 27 chapters from Ireland to Japan, full TOC public). Plus Moran & Whitman's Speculum 2022 Ireland-Japan comparison (DOI 10.1086/717331). https://glossam.ie/handbook ; https://htl.cnrs.fr/glossing-practice-comparative-perspective/
7. Buddhist ch17 infrastructure: Silk's "Canonicity" (Brill's Encyclopedia of Buddhism I, 2015, pp. 5-37, PDF via openphilology.eu) anchors canon-formation discussion; the imperial Mahāvyutpatti (c. 814) + sGra sbyor bam po gnyis pa function as the canonical Sanskrit-Tibetan glossary apparatus, now digitized at DILA and Bibliotheca Polyglotta; Burmese nissaya literature is analyzed as word-for-word bitextual glossing engaging Walker 2020. https://glossaries.dila.edu.tw/glossaries/MVP?locale=en ; https://brill.com/view/journals/mnya/26/1/article-p1_004.xml
8. Christian ch18 milestones verified from primary descriptions: Complutensian Polyglot (Alcalá 1514-1517, pub. 1520): Septuagint column carries an original Latin interlinear translation, Vulgate placed center between Hebrew and Greek, Targum Onkelos with Latin beneath the Pentateuch, NT in facing Greek-Vulgate columns, first printed Greek NT (colophon 10 Jan 1514); English Hexapla (Bagster, London 1841) prints six English NT versions (Wiclif 1380-Tyndale 1534-Cranmer 1539-Geneva 1557-Rheims 1582-KJV 1611) in parallel columns under the Greek after Scholz with Tregelles's historical account. https://www.loc.gov/resource/gdcwdl.wdl_10636_001/?sp=2&st=list ; https://archive.org/details/1841-english-hexapla

## Remaining gaps

- Skilling "paratexts": no dedicated Skilling publication on paratexts could be verified this loop; his usable titles are Mahasutras, Questioning the Buddha, How Theravada is Theravada?, Imagination and Narrative (with McDaniel). Specific paratext attribution remains "(ยังไม่พบข้อมูลยืนยัน)".
- Chinese-world comparative glossing (translation bureaus, ziguang/xuangui-style annotation, Dunhuang glosses) covered only indirectly via Handbook TOC entries (Rusk/Wei, Feng) and DILA MVP Chinese column; needs a dedicated loop.
- Later polyglots (Antwerp/Regia 1568-73; Walton's London Polyglot 1657) known only through aggregator pages this loop; verify against library records before citing.
- Origen's Hexapla column structure attested here only via secondary/aggregator notices; should be anchored to a scholarly edition or handbook before use.
- Oxford Handbook chapters on glosses specifically (beyond the De Gruyter Handbook) not yet identified; possible target: handbooks on manuscript studies or on biblical interpretation — unverified.
- Gloss Corpus staging numbers (73/7/33,648) will supersede v1.0 headline figures in a future release; re-check before publication.
- Walker's "Epiphytic Literatures" chapter venue not yet pinned down beyond the author's publications list.

## Blocked sources

- textualmicrocosms.huji.ac.il — direct fetches returned HUJI server error pages twice ("Something went wrong", Support ID); facts taken from search-index snippets of the site itself, official Medium mirror, CORDIS, and department page.
- rowman.com publisher catalog page — HTTP 403; metadata obtained from HTL-CNRS notice and Crossref/bookseller records instead.
- api.openalex.org — rate limit exhausted mid-loop; switched to Crossref.
- cordis.europa.eu/project/id/101123203/reporting and /results for GlossIT — no results registered yet; used official project Output page instead.
