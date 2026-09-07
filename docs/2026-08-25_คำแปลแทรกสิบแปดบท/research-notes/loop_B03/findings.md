# Loop B03 Findings

Date: 2026-08-26
Loop: B03 of project interlinear_gloss_18ch (Phase B)
Topic: Sanskrit-Tocharian gloss placement typology and Sogdian translation-direction evidence - closing gaps from Phase A loop 09.

Phase-B note: This loop targeted the five open items inherited from loop 09 (Malzahn 2007b; Peyrot 2014; Yoshida 2019 depth; CEToM Gloss category list; Old Turkish-Sogdian glosses). Four of the five are now closed or substantially closed with verifiable sources; one (word-level Turkish-Sogdian glosses) remains negative-but-clarified. The websearch tool returned HTTP 429 for the first three calls, then recovered; OpenAlex remained budget-blocked (429) all session, so Crossref + direct fetches + search-engine excerpts carried discovery.

## Queries executed

Search-tool queries:
1. websearch: Malzahn "Instrumenta Tocharica" 2007 glossaries bilingual texts chapter contents - 429 (rate limit)
2. websearch: Peyrot Tocharian gloss fragments TIES placement - 429
3. websearch: Malzahn "preliminary survey of the Tocharian glosses" Berlin Turfan Instrumenta Tocharica - 429
4. websearch: Peyrot "Notes on Tocharian glosses and colophons in Sanskrit manuscripts" findings - OK: found TIES 15/16 publisher TOCs, u:cris record, review excerpt, ResearchGate/Academia records
5. websearch: Tocharian glosses Sanskrit manuscripts written above line between lines margin Malzahn survey - OK: found Free Library review sentence, u:cris page, SHT 827.b, DTA usage note
6. websearch: Yoshida Sogdian Buddhist translated from Chinese Turfan Karmavibhangra Pratiharya - OK: found Iranica full-text excerpts, researchmap OA PDF, JSTOR mirror, Brill JCAH 2025 corroboration, BBAW project page
7. websearch: Sogdian Old Turkic Old Uyghur glosses word list bilingual attested - OK: only adjacent phenomena (loanwords, Turco-Sogdian documents); no true gloss cases

API / direct fetches (all executed via PowerShell):
8. Crossref query.bibliographic="preliminary survey ... Tocharian glosses" - no chapter DOI (Winter volume not Crossref-indexed)
9. Crossref query.container-title="Tocharian and Indo-European Studies"+glosses / ="Instrumenta Tocharica" - confirms TIES and the Winter volume are not indexed; TIES verified instead via Museum Tusculanum Press TOC pages
10. Crossref query.bibliographic=Benkato Turco-Sogdian letters Dunhuang - identified that the circulating "Turco-Sogdian Letters from Dunhuang" text is Benkato's OLZ REVIEW (DOI 10.1515/olzg-2017-0130) of Sims-Williams/Hamilton 2015; also Abstracta Iranica review DOI 10.4000/abstractairanica.43046
11. OpenAlex works?search=Tocharian glosses... - 429 "Too Many Requests", twice, whole session
12. CEToM manuscript list downloaded in full (https://www.univie.ac.at/tocharian/?manuscripts) and parsed locally -> 51 "; Gloss" entries extracted with signatures
13. CEToM bibliography page downloaded (https://www.univie.ac.at/tocharian/?bibliography) -> exact strings for Malzahn 2007a/b, Peyrot 2014, Peyrot 2015b
14. CEToM manuscript pages fetched live: m-sht2054b, m-sht2250and2254a, m-sht4477, m-psbl13, m-or1500989, m-or15009552, m-sht1181, m-tht40911, m-sht827
15. u:cris Vienna portal record fetched for Malzahn 2007b (webfetch, full metadata)
16. Yoshida 2019 OA PDF downloaded from researchmap.jp (787 KB), text extracted locally (24 pp.)
17. BBAW EN project page fetched (https://www.bbaw.de/en/research/buddhist-sogdian-text-fragments)
18. Iranica article page: direct fetch BLOCKED 403 (two tools, two URL variants incl. ?generate_pdf=1); content taken from search-rendered excerpts, provenance flagged in document file

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| M. Malzahn | A preliminary survey of the Tocharian glosses in the Berlin Turfan Collection, in Instrumenta Tocharica (ed. M. Malzahn), 301-19, Heidelberg: Winter | 2007 | https://ucrisportal.univie.ac.at/de/publications/a-preliminary-survey-of-the-tocharian-glosses-in-the-berlin-turfa/ ; https://cetom.univie.ac.at/?malzahn2007b | TITLE FULLY VERIFIED (three independent fetched records). Review characterization (Free Library, partial access): transliteration + linguistic commentary of the glosses in Berlin Sanskrit texts; English translations only selected. CEToM ties it to SHT 827.b: p.303; SHT 2250/2254.a: p.312; SHT 2054.b: pp.312-3. Full typological conclusions still unread |
| M. Malzahn | The most archaic manuscripts of Tocharian B..., in Instrumenta Tocharica, 255-97 | 2007 | https://www.univie.ac.at/tocharian/?bibliography | Disambiguation: this is 2007a, NOT the gloss study |
| M. Peyrot | Notes on Tocharian glosses and colophons in Sanskrit manuscripts I, TIES 15: 131-79 | 2014 | https://chicagoreference.com/ucp/books/book/distributed/T/bo19126043.html ; cited per-page by CEToM editions | Verified title/volume/pages; 50-pp. typescript on Academia.edu. Page-cited content: SHT 2054.b (154-6), SHT 2250+2254.a (133, 156-9), SHT 4477 (165). Ref list includes Maue 2009/2010 Uigurisches in Brahmī, Wille 2014 Berlin survey |
| M. Peyrot | Notes on Tocharian glosses and colophons in Sanskrit manuscripts II, TIES 16: 107-30 | 2015b | https://chicagoreference.com/ucp/books/book/distributed/T/bo25395532.html ; https://www.academia.edu/22217928 | NEW FIND vs Phase A. Author's abstract fetched: Kuča-Turfan Sanskrit manuscripts bear witness of Tocharian use; glosses translate separate words or clarify difficult passages; Tocharian colophons, pious wishes, ownership notes; material from Paris, London, Berlin |
| Y. Yoshida | On the Sogdian Prātihārya-sūtra and the Related Problems, Acta Or. Hung. 72(2): 141-163 | 2019 | https://doi.org/10.1556/062.2019.72.2.1 ; OA PDF: https://researchmap.jp/read0083551/published_papers/21494278/attachment_file.pdf | FULL TEXT HARVESTED (Phase A had abstract only). Signatures: Karmavibhaṅga So 14700 (22)+(23) [T II Toyoq A 24], cf. So 13901 [T II D 63]; Miracle-sūtra fragments L81/L52/L89/L40/Kr IV/879 = unique recension from a Sanskrit-or-Tocharian Northern Silk Road original; Kāñcanasāra T I α + So 10132, marginal title 'ten good deeds, ch.5'; Uighur colophon names Twγry as direct prototype itself translated from Küsän/Kucha language (fn.44 -> Yoshida 2018); loanword pβ'n < Skt bhavana possibly via TB bhavaṃ; Chan Lengqieshiziji in Sogdian (Yoshida 2017; Ch 0365 Mitani 2018) |
| Y. Yoshida | SOGDIAN LITERATURE i. Buddhist, Encyclopaedia Iranica online | 2015 | https://www.iranicaonline.org/articles/sogdian-literature-01-buddhist | Extensive verbatim excerpts captured (direct fetch 403): "Most of the Buddhist Sogdian texts are more or less correct translations based on Chinese originals; only a few ... based on prototypes in either Sanskrit or Tocharian"; Turfan colophon stating translation FROM KUCHEAN (Henning pp.59-62; Kudara/Sundermann 1987: 347-48); Vessantara possibly native retelling vs Chinese adaptation debate; Kāñcanasāra = independent recension on lost Tocharian prototype (Sundermann 2006); Chinese texts phonetically transcribed in Sogdian script |
| BBAW (C. Reck PI; Y. Yoshida Mercator Fellow) | Studies on the vocabulary of the Buddhist Sogdian text fragments from the Turfan oasis | ongoing since 2023 | https://www.bbaw.de/en/research/buddhist-sogdian-text-fragments | DFG 510626449, 3 yrs from Sept 2023; corpus 7th-11th c. Turfan Sogdian "largely translated from Chinese"; will track Indian terms received "via other languages such as Tocharian"; page image caption: So 10132 + ohne Signatur (T I ?) - same folio as Yoshida's Kāñcanasāra editio maior |
| CEToM (M. Malzahn et al.) | Manuscript database: Gloss subgenre | accessed 2026 | https://www.univie.ac.at/tocharian/?manuscripts + individual ?m-* pages | COMPLETE LIST of 51 Gloss-labelled fragments extracted (see documents file); 5 worked examples documented with what they gloss |
| N. Sims-Williams & J. Hamilton | Turco-Sogdian Documents from 9th-10th Century Dunhuang, London: SOAS (transl. N. Sims-Williams, appendix Wen Xin) | 2015 | review records: https://doi.org/10.1515/olzg-2017-0130 (Benkato, OLZ 112); https://doi.org/10.4000/abstractairanica.43046 | Existence + scope (8 documents: accounts, notes, letters, graffito in Turkicized Sogdian) verified via two fetched review records; documents remain unexamined directly |
| Ö. Ayazli | Orthography of Some Sogdian Words in Old Uyghur Turkic, IJOUS 2(1): 1-25 | 2020 | https://doi.org/10.46614/ijous.743040 | Verified via Crossref + RG abstract: SOGDIAN LOANWORDS in Old Uyghur (borrowing phenomenon, NOT glossing) |
| D. Maue | Uigurisches in Brāhmī in nicht-uigurischen Brāhmī-Handschriften I-II, Acta Or. Hung. 62: 1-36; 63: 319-361 | 2009/2010 | cited verbatim in Peyrot 2014 reference list (Academia.edu render) | Old Uyghur words written in Brāhmī inside NON-Uyghur manuscripts - nearest neighbour to word-level interlinear phenomena across languages at Turfan |
| W. Couvreur | Boeddhistische Sanskritfragmenten in Koetsjische handschriften-verzamelingen, in ANAMNHΣIS, 175-184 | 1970 | cited on CEToM PS Bl 13 page | Early treatment of Pelliot Sanskrit leaves carrying Tocharian writing |

## Key findings (with URLs)

1. GAP CLOSED - Malzahn's gloss-study chapter exists under an exactly verifiable title: "A preliminary survey of the Tocharian glosses in the Berlin Turfan Collection," in Instrumenta Tocharica, ed. Melanie Malzahn, Heidelberg: Winter 2007, pp. 301-319 (English). Confirmed by CEToM bibliography (https://www.univie.ac.at/tocharian/?bibliography), CEToM entry page https://cetom.univie.ac.at/?malzahn2007b, and the Vienna u:cris record (https://ucrisportal.univie.ac.at/de/publications/a-preliminary-survey-of-the-tocharian-glosses-in-the-berlin-turfa/). The suspected alternative title ("The Most Archaic Manuscripts...", pp. 255-297) is her OTHER chapter (2007a) in the same volume. Content characterization available so far is limited to a published review's sentence ("preliminary publication of the Tocharian glosses in the Sanskrit texts from the Berlin Turfan collection, with transliteration and linguistic commentary"; translations only selected) plus CEToM's page-precise citations (SHT 827.b -> p. 303; SHT 2250/2254.a -> p. 312; SHT 2054.b -> pp. 312-3).

2. GAP CLOSED - Peyrot's gloss studies confirmed as a SERIES, not a single paper: Part I = TIES 15 (2014): 131-179; Part II = TIES 16 (2015b): 107-130 (new relative to Phase A). Part II's author abstract (fetched from Academia.edu) defines the corpus logic: Sanskrit manuscripts from Kuča to Turfan showing use by Tocharian speakers - some with word-glosses, others with Tocharian colophons, pious wishes or ownership notes; material spans Paris, London, Berlin collections. Placement typology derivable NOW from CEToM's page-cited editions: (a) dominant pattern = Tocharian equivalents aligned beneath the Sanskrit akṣaras they explain (SHT 2054.b; SHT 2250+2254.a); (b) multi-layer re-glossing in darker ink over fainter earlier gloss (SHT 2250+2254.a n4); (c) functions range from lexical substitution through case-indication to interpretive expansion (SHT 4477); (d) sense may override Sanskrit form; (e) NEGATIVE CONTROL: PS Bl 13 shows Tocharian scribbling under a Sanskrit line that explicitly is NOT a translation gloss - placement alone does not determine function.

3. GAP CLOSED (depth) - Sogdian translation direction now rests on the FULL TEXT of Yoshida 2019 (OA PDF harvested from https://researchmap.jp/read0083551/published_papers/21494278/attachment_file.pdf): most Buddhist Sogdian texts translated from Chinese originals; the Turfan-side exceptions are precisely signed - Karmavibhaṅga So 14700 (22)+(23) [old sig. T II Toyoq A 24]; Prātihārya/Miracle sūtra L81, L52, L89, L40 (+Kr IV/879) forming a unique recension behind which lay "a Sanskrit or Tocharian text along the Northern Silk Road"; Kāñcanasāra T I α joined with So 10132 (marginal title 'ten good deeds, fifth chapter'), whose Old Uyghur parallel carries a colophon naming TWγRY as its direct prototype, itself translated from the language of Küsän/Kucha (Yoshida 2018). Independent confirmation from Iranica's Yoshida survey (excerpts captured; direct fetch blocked): a Turfan colophon states translation FROM KUCHEAN (Henning; Kudara/Sundermann 1987: 347-48); terminology calques CHINESE wording (kleśa via fannao; bhagavān via baoqiefan); even Chinese pronunciation was transcribed in Sogdian script. New institutional anchor: BBAW/DFG project (Reck PI, Yoshida Mercator Fellow, no. 510626449, since Sept 2023) builds the vocabulary database premised on "largely translated from Chinese" with Tocharian-mediated Indian terms tracked (https://www.bbaw.de/en/research/buddhist-sogdian-text-fragments).

4. GAP CLOSED - CEToM Gloss category enumerated IN FULL: 51 fragments carry subgenre "Gloss" (list with signatures, places, languages, and named underlying works harvested into documents/2026-Malzahn-cetom-gloss-corpus.md). Composition: mostly Sanskrit manuscripts carrying TA or TB interlinear/marginal equivalents; 5 Tocharian-only exercise/gloss leaves; find spots cluster at Murtuk (14), Shorchuk (2+), Sengim (5), Kocho, Duldur-akur, Kizil Ming-Öy; THREE independent Buddhacarita witnesses (SHT 2054.b; SHT 2250+2254.a; SHT 7191); one Abhidharmakośabhāṣya witness (SHT 4477); one Vinayavibhaṅga (SHT 4523+1044); one Śikhālakasūtra (SHT 3354). Five worked examples documented with the exact Sanskrit lemmata they gloss. Caveat preserved: four listed sigla (Or 15009.89/.552; SHT 1181; THT 4091.1) are still empty stubs online.

5. PARTIALLY CLOSED (negative result sharpened) - Old Turkish-SOGDIAN word-level glosses: still NO attested case found (ยังไม่พบข้อมูลยืนยัน). What IS now verifiable around the void: (a) Sims-Williams & Hamilton 2015, Turco-Sogdian Documents from 9th-10th c. Dunhuang (SOAS) - 8 documentary pieces (accounts, notes, letters, graffito) in Turkicized Sogdian, existence verified via Benkato's OLZ review (https://doi.org/10.1515/olzg-2017-0130) and Abstracta Iranica (https://doi.org/10.4000/abstractairanica.43046); the circulating "Turco-Sogdian Letters" PDF is that review, not a primary edition; (b) Sogdian loanwords in Old Uyghur orthography studied by Ayazli 2020 (https://doi.org/10.46614/ijous.743040) - borrowing, not glossing; (c) Maue 2009/2010 documents Old Uyghur words in Brāhmī inside NON-Uyghur Brāhmī manuscripts (cited in Peyrot 2014's reference list) - the closest structural analogue to cross-language word insertion in the same codices; (d) Phase A's TB-Old Uyghur Mani-hymn segment alignment remains the only quasi-interlinear Turkic case.

6. Codicological bonus for the book's terminology chapter: SHT 827.b (Kizil Ming-Öy, T III MQ 49) pairs a Sanskrit medical leaf in Gupta script (recto) with classical-TB lines (verso), edited within Malzahn 2007b itself (p. 303) - evidence that Sanskrit scientific books circulated into Tocharian hands outside the doctrinal canon (https://cetom.univie.ac.at/?m-sht827).

## Gaps closed (vs Phase A loop 09 remaining-gap list)

- Gap 2 (Malzahn 2007b unread): title/publisher/pages VERIFIED; scope characterized via review + CEToM citations. Residual: internal typology of the chapter still unread.
- Gap 2b (Peyrot 2014 unread): verified; series structure revealed (I + II); placement typology reconstructed from page-cited CEToM editions. Residual: Part I's own synthesis pages not read in original.
- Gap 4 (Yoshida signatures unknown): CLOSED - exact signatures captured for all three non-Chinese-derived Sogdian texts, plus the Kuchean-colophon datum.
- Gap 4 (list of ~50 gloss fragments): CLOSED - 51 entries enumerated; 5 worked examples documented.
- Gap 6 (Old Turkish-Sogdian glosses): sharpened negative with four verified adjacent phenomena; true gloss cases remain (ยังไม่พบข้อมูลยืนยัน).
- Gap 10 (placement terminology caution): substantially resolved for the Berlin Buddhacarita/Kośabhāṣya leaves (beneath-aligned glosses, two layers, negative control PS Bl 13); strict "interlinear" wording should still be used per-manuscript.

## Remaining

1. Malzahn 2007b full text (Winter print volume; no OA copy located) - internal classification of gloss types (ยังไม่พบข้อมูลยืนยัน beyond review sentence).
2. Peyrot 2014/2015b full PDFs sit behind Academia.edu login; only reference lists + abstracts captured. Part III (if any) not searched exhaustively.
3. Distribution claims seen on Academia.edu ("majority of glosses from Turfan oasis; absence of TA glosses in Kuča") are platform AI-paraphrases - unverified against print; do not cite without the PDF.
4. Iranica article read only via search-rendered excerpts (direct 403); Henning pp. 59-62 and Kudara/Sundermann 1987 colophon publication not independently opened.
5. Sims-Williams & Hamilton 2015 documents themselves unexamined (review records only).
6. IDP images (idp.bbaw.de) unreachable again this session - physical above-line/between-line positioning ultimately needs the photographs for each of the 51 fragments.
7. Whether any of the ~51 gloss fragments carries OLD TURKIC (rather than Tocharian) interlinear material would be answerable via Maue 2009/2010 corpora - articles not yet accessed in full.

## Blocked / failed accesses recorded honestly

- websearch backend: HTTP 429 on first three calls (recovered afterwards).
- OpenAlex API: 429 Too Many Requests, every attempt (budget shared quota).
- iranicaonline.org: 403 Forbidden on both direct fetch tools and URL variants (content used only from search-excerpt rendering, flagged in document file).
- thefreelibrary.com: 403 (review quoted only from search-result excerpt).
- academia.edu PDF download endpoint: requires login (page metadata + reference lists were fetchable).
- jstor.org PDF of Yoshida 2019: not attempted (paywalled); equivalent OA copy secured via researchmap.jp.
- idp.bbaw.de images: connection refused (same as Phase A).
