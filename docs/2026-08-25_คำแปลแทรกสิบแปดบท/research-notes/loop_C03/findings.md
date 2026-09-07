# Loop C03 Findings

Date: 2026-08-26
Loop: C03 of project interlinear_gloss_18ch (Phase C)
Topic: Residual Silk Road gloss-study gaps from Phase B loop B03 - Malzahn 2007b full content; Peyrot Notes I-II bodies; Corbie-vs-Soissons archetype question; new Tocharian/Sogdian gloss discoveries 2020-2026.

Phase-C note: All four targets addressed. Target 1 is CLOSED AT FULL-TEXT LEVEL: the complete body of Malzahn 2007b (pp. 301-319) was located as a public document-sharing render and harvested, including her scope statement, all catalogue entries, and both closing word indexes. Targets 2-4 closed at the level achievable without login-walled PDFs: verbatim Part I passages recovered via quotation in an OA source; the Corbie-vs-Soissons question identified (Liber glossarum composition debate) with an open-access position-stating study; six discovery announcements 2020-2026 documented.

## Queries executed

Search-tool queries:
1. Malzahn "preliminary survey of the Tocharian glosses" Berlin Turfan PDF academia OR researchgate - OK: found author's own Academia record (work 8710503), Winter publisher page with review citations (Hitch TIES 13; Kim JAOS 128.4), Pan 2021 excerpts
2. Peyrot "Notes on Tocharian glosses and colophons" PDF download TIES 15 16 - OK: Leiden repository records surfaced
3. Corbie Soissons glossary archetype origin debate Liber glossarum Martianus glosses - OK: Huglo Scriptorium 2001, Cinato HAL, Steinová JML, LibGloss site, O'Sullivan materials
4. Turfanforschung Jahresbericht 2024 2025 neue Fragmente - OK: Itkin et al. 2025 DOI, BBAW project pages, magazine brochure (older)
5. Peyrot "Notes ... I" Leiden repository hdl 1887 - metadata only confirmed
6. Sogdian Turfan fragments newly identified 2023 2024 2025 Reck Durkin-Meisterernst Berlin - OK: Morano 2024, Benkato 2024, Colditz BTT 53, Reck 2020
7. Ronald Kim review Instrumenta Tocharica JAOS 2008 - led to vdoc.pub full-volume render (decisive for target 1)
8. Itkin Kuritsyna Wilkens Nugteren Maitreyasamiti THT fragments 2025 - OK: akjournals page + real.mtak.hu record
9. Pan arkiśoṣi Acta Antiqua/Asiatica Varsoviensia 2021 SHT 4438 open access - OK: direct OA PDF URL

API / direct fetches (PowerShell unless noted):
10. vdoc.pub render of Instrumenta Tocharica fetched via webfetch (579 KB saved); chapter body lines extracted locally
11. u:cris Vienna record for Malzahn 2007b refetched - confirms NO abstract field exists (metadata only)
12. Leiden scholarlypublications handle 1887/3198140 fetched with browser UA (HTTP 200) - no bitstream link present (citation-only record); webfetch route was bot-blocked
13. Pan 2021 OA PDF downloaded from aav.iksiopan.pl; text extracted with PyMuPDF (36 pp., 86,876 chars); key passages verified verbatim
14. Cinato HAL PDF download attempt - blocked by Anubis anti-bot challenge (2 pp. placeholder)
15. real.mtak.hu/220441 parsed for bitstream links - none found

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| M. Malzahn | A preliminary survey of the Tocharian glosses in the Berlin Turfan Collection, in Instrumenta Tocharica, 301-19 | 2007 | https://vdoc.pub/documents/instrumenta-tocharica-4cqqk7ef0kq0 ; https://winter-verlag.de/en/detail/978-3-8253-5299-8/Malzahn_Melanie_Ed_Instrumenta_Tocharica/ ; u:cris record (no abstract) | FULL TEXT HARVESTED. Scope = SHT vols. 1-9 previously published Sanskrit mss only ("preliminary"); ~40 entries + unedited SHT 4438 + Brahmi-chart list + references + TA and TB word indexes. Entry types: continuous bilinguals; interlinear word glosses under/between lines (dominant); above-line glosses (SHT 1081); string-hole title labels and subscriptions (SHT 552, 1028, 146, 1621, 872); reused leaves; FIVE entries flagged "Old Turkish or Tocharian" (SHT 1121, 1155, 1157, 1159, 1181); Paris parallels per Couvreur 1970 |
| M. Peyrot | Notes on Tocharian glosses and colophons in Sanskrit manuscripts I, TIES 15: 131-79 | 2014 | academia.edu/9679617 (403 direct); quoted in Pan 2021 | Body p. 163 VERBATIM via Pan: "It is remarkable that all Tocharian glosses to this fragment are in Tocharian A, except for this one"; fn. 40: "no palaeographical difference between the Tocharian A glosses and this gloss in Tocharian B"; his brevity-explanation of the TB saiṣṣe gloss reported and disputed. Colophon section = pp. 134-136 (per Pinault 2022 fn. 10) |
| M. Peyrot | Notes ... II, TIES 16: 107-30 | 2015 | https://hdl.handle.net/1887/3198140 (Leiden, citation-only record, abstract verified); colophon section = pp. 108-112 (Pinault 2022 fn. 10) | No Part III exists per all searches; abstract now institutionally anchored |
| T. Pan | Tocharian A ārkiśoṣi 'world with radiance' ..., Acta Asiatica Varsoviensia 34: 263-294 | 2021 | http://aav.iksiopan.pl/images/aav34_10_Pan.pdf ; https://doi.org/10.60018/AcAsVa.abdn5783 | FULL PDF HARVESTED AND EXTRACTED. SHT 4438 (= Mainz 651, SHT XI: 33-34): Sanskrit fragment with TA and Sanskrit interlinear glosses; ALL glosses TA except one TB śaiṣṣe under jagat- on verso b; some glosses even in Sanskrit (aprameyam for atulam); commentator well-versed in Sanskrit; TA ārkiśoṣṣi = loan translation of sabhālokadhātu- |
| M. Huglo | Les arts libéraux dans le Liber glossarum, Scriptorium 55.1: 3-33 | 2001 | https://www.persee.fr/doc/scrip_0036-9772_2001_num_55_1_1914 | THE position-stating study for target 3 (fetched full opening pages): Bischoff (archetype assembled under Adalhard 780-814 at CORBIE, ab-minuscule + Maurdramne type); Ganz (collation/layout by NUNS of a Corbie-affiliated house - Chelles or NOTRE-DAME DE SOISSONS - the "ab scriptorium"); Parkes oral comm. (several ab scriptoria, e.g. Soissons); Barbero/Lowe (P = copy of archetype made at Corbie, CLA 5 no. 611) |
| F. Cinato | Que nous apprennent les ecritures des plus anciens temoins du Liber glossarum sur l'archetype? | n.d. | https://hal.science/hal-01421393v2/file/D10-HEL-CinatoV2.pdf | P/C/V = second-generation copies via antigraphs phi/gamma (Grondeux stemma); Bishop 1978 explains alphabetical disorders as quire-turn accidents; bilan of origin hypotheses promised. Direct fetch Anubis-blocked; content from search-rendered excerpts (flagged) |
| E. Steinová | The List of Notae in the Liber Glossarum, JML | 2014 | https://doi.org/10.1484/J.JML.5.112087 ; https://liber-glossarum.huma-num.fr/exist/apps/libgloss/TheLiberGlossarum_en.html | Oldest LG core originated on the IBERIAN PENINSULA incl. Isidorean working material (following Grondeux) - modern complication of the Corbie/Soissons pair |
| S. O'Sullivan (+ MMP database) | Glossae Aevi Carolini in Martiansm Capella lib. I-II (CC CM 237); editing case study | 2010 | https://mmp.acdh-dev.oeaw.ac.at/archiv/text/detail/4 ; https://pureadmin.qub.ac.uk/ws/portalfiles/portal/94002386/Problems.pdf | Martianus OGT: single-author attribution abandoned; "Corbie appears to have been an important distribution centre... place of origin uncertain"; Group B (Pb, R, Pd) closely linked with Corbie; multi-hand accretion documented across 20 witnesses |
| I. Itkin, A. Kuritsyna, J. Wilkens, H. Nugteren | THT-fragments of Maitreyasamiti-Nataka: ... new identifications, AOH 78.1: 85-113 | 2025 | https://doi.org/10.1556/062.2025.00500 ; https://real.mtak.hu/220441/ | NEW IDENTIFICATIONS: first overview of TA fragments outside Sieg/Siegling's edition; new TA material edited via Old Uyghur parallels; announces in-prep Sengim Dasakarmapathavadanamala identifications |
| E. Morano | Where the Demons Fell..., Journal of Iranian Linguistics 1.1: 8-20 | 2024 | https://doi.org/10.46991/jil/2024.01.01 | Two UNPUBLISHED Sogdian-script Berlin fragments (glassed together): cosmogony of the demons' fall + Saqlun/Pesus protoplast myth; proposed as Sogdian Book of Giants part |
| A. Benkato (+ I. Colditz BTT 53) | Lost Turfan fragments from the Nachlass of W.B. Henning, BSOAS | 2024 | https://doi.org/10.1017/S0041977X24000375 | Lost Sogdian fragments recovered via Henning photographs: 10123 (T i alpha, Prasenajit), 13921=So 13924 (Mahaparinirvanasutra), 14094-96=So 14091(1)/14092(1)/14093(1 Old Turkic); Colditz 2024 publishes Sogdian Mahayana Mahaparinirvanasutra incl. Otani Kyoto fragments (Berliner Turfantexte 53) |
| Ch. Reck | The Sogdians and Their Religions in Turfan..., Entangled Religions 11.6 | 2020 | https://doi.org/10.46586/er.11.2020.9222 | First publication So 16102(2), So 16146 (affiliation unresolved); Turkicized-Sogdophone authorship conclusion (Yoshida); multilingual colophons |
| S. V. Malyshev; G.-J. Pinault; A. Huard | New Sanskrit-Tocharian bilingual texts, TIES 19 (67ff.; 71ff.; 27ff.) | c. 2019/2020 | TOC visible at histochtext.huma-num.fr Pinault OA PDF | THT 1846 = NEW Sanskrit-Tocharian A bilingual Udanavarga fragment; Civiravastu bilingual; TB Karmavibhanga beginning |
| M. Vyzhlakov | 4TB: a new tool to study Tocharian A - Old Uyghur parallels | 2026 | https://doi.org/10.32523/2664-5157-2026-2si-77-92 | Digital tool citing Itkin et al. 2025 |

## Key findings (with URLs)

1. GAP CLOSED (target 1, full text) - Malzahn 2007b read IN FULL via the vdoc.pub public render of Instrumenta Tocharica, cross-checked against Winter/u:cris/CEToM records and internal pagination. Her own scope definition: "I collected the glosses from previously published Sanskrit manuscripts only", based on SHT volumes 1-9, descriptions following the SHT entries, WITH a word index (TA and TB indexes close the chapter). The internal typology B03 lacked is now derivable from the entries themselves (see documents file): dominant interlinear word-glosses beneath/between lines; above-line placement attested (SHT 1081); string-hole title labels (vinaiññe kḷuttar; dharmawiña by another hand); subscriptions/colophons; reused leaves; continuous Sanskrit-Tocharian bilinguals incl. one leaf whose VERSO is Sogdian (SHT 2348); and five fragments whose interlinear glosses Malzahn could assign only to "Old Turkish or Tocharian" (SHT 1121, 1155, 1157, 1159, 1181) - the earliest explicit statement of the unresolved Turkic-material question.
2. GAP PARTIALLY CLOSED (target 2) - Peyrot PDF bodies remain login-walled, but Part I p. 163 is now quotable verbatim through Pan 2021 (OA, downloaded): all-TA glosses except one TB gloss on SHT 4438, with palaeographic identity between the languages' hands (fn. 40); colophon sections located internally (Part I pp. 134-136; Part II pp. 108-112 per Pinault 2022). Part II abstract re-verified against the Leiden institutional record. No Part III exists.
3. GAP CLOSED (target 3, identification + study) - "Corbie vs Soissons" = the Liber glossarum composition-place debate, not a Martianus stemma issue: Corbie (Bischoff-Lowe-Barbero: archetype written in Corbian ab-script under Adalhard, 780-814) versus Corbie-affiliated nunnery Notre-Dame de Soissons or Chelles (Ganz's "ab scriptorium"), Parkes allowing several northern houses; Steinova/Grondeux relocate the OLDEST core to Visigothic Iberia. Accessible position-stating study: Huglo 2001 (Persée, fetched). Martianus OGT side documented separately (O'Sullivan CC CM 237; MMP: origin uncertain, Corbie main distribution hub).
4. GAP ANSWERED NEGATIVELY BUT DOCUMENTED (target 4) - No 2020-2026 announcement reports a new interlinear-GLOSS find as such. Documented instead: systematic new TA identifications in Berlin (Itkin et al. 2025; Itkin 2023 Sorcuq), three new Sanskrit-Tocharian bilingual texts (TIES 19), first editions of unpublished Sogdian fragments (Morano 2024 Book of Giants pieces; Reck 2020), recovery of lost Sogdian fragments via the Henning Nachlass plus the Sogdian Mahaparinirvanasutra volume extending to Kyoto (Benkato/Colditz 2024), and a 2026 digital tool (Vyzhlakov 4TB). The gloss-specific frontier remains interpretive: Pan 2021 on SHT 4438.
5. Bonus cross-link for the book: Malzahn 2007b's SHT 4438 entry (unedited then, photo already online) is exactly the leaf Peyrot 2014: 163 and Pan 2021 later made the test case of mixed TA/TB glossing with Sanskrit self-glosses - a ready-made three-source narrative chain (2007 survey -> 2014 typology -> 2021 interpretation).
6. Terminological caution preserved: Pan cites the two Malzahn chapters with inconsistent a/b labels; the gloss survey must be cited as Malzahn 2007b (301-319), matching CEToM and u:cris.

## Gaps closed (vs loop B03 remaining list)

- B03 Remaining 1 (Malzahn 2007b internal classification unread): CLOSED - full text harvested; typology reconstructed from primary entries (documents/2007-Malzahn-tocharian-glosses-full-text.md).
- B03 Remaining 2 (Peyrot Part I synthesis unread; Part III unknown): SUBSTANTIALLY CLOSED - verbatim p. 163 content, internal pagination of colophon sections, and confirmation that no Part III exists. Print PDFs still unopened (login walls).
- B03 Remaining 7 (whether any gloss fragments carry OLD TURKIC rather than Tocharian): SHARPENED FROM PRIMARY SOURCE - Malzahn herself flags five such uncertain cases in 2007b; resolution still pending (ยังไม่พบข้อมูลยืนยัน beyond her hedge).
- NEW GAP (Corbie-vs-Soissons referent): CLOSED - identified as Liber glossarum origin debate with accessible sources.
- NEW GAP (2020-2026 discoveries): CLOSED as far as announcement-level searching can reach; annual Jahrbuch report PDFs not individually opened.

## Remaining

1. Peyrot 2014/2015 print PDFs behind Academia.edu login; Leiden repositories hold citation-only records (ยังไม่พบข้อมูลยืนยัน for remaining body pages beyond those quoted here).
2. Formal quotation of Malzahn 2007b should ultimately be checked against the Winter print volume (render is OCR-derived; diacritics partially garbled).
3. Kim (JAOS 128.4, 2008) and Hitch (TIES 13) reviews of Instrumenta Tocharica not opened - may add independent characterizations of the chapter.
4. BBAW academy yearbook Jahresbericht sections 2021-2025 for Turfanforschung and the DFG Buddhist-Sogdian vocabulary project not individually mined.
5. Whether Maue 2009/2010 resolves any of Malzahn's five "Old Turkish or Tocharian" cases remains open.

## Blocked / failed accesses recorded honestly

- webfetch academia.edu work 8710503: 403.
- webfetch scholarlypublications.universiteitleiden.nl: bot-block page; PowerShell UA fetch succeeded but revealed NO attached file.
- HAL Cinato PDF: Anubis proof-of-work challenge (content used from search-rendered excerpts only, flagged in document file).
- real.mtak.hu/220441: page loads, no bitstream links exposed.
- OpenAlex: not attempted this session (persistent 429 in prior loops); Crossref not needed since all targets resolved via publisher/repository/OA channels.
