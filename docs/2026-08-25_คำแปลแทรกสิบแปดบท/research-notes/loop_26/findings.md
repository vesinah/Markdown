# Loop 26 Findings — Egyptian manuscript glossing traditions: Coptic-Arabic interlinear, Greek-Demotic bilingual papyri, and older Egyptian scholia

Date: 2026-08-26

## Queries executed

Web search (tool) — rate-limited (HTTP 429) for nearly the whole loop; only used at start:
1. Clarysse bilingual Greek Demotic papyri Ptolemaic Egypt scribal education interlinear translation (failed, 429)
2. Coptic Arabic interlinear Bible manuscript Sahidic Bohairic Arabic marginal gloss (failed, 429)
3. Old Coptic glosses Greek magical papyri (failed, 429)
4. Feder Coptic glosses Greek Bible manuscripts interlinear Sahidic (failed, 429)

API and site queries via PowerShell (successful unless noted):
5. Crossref: query=Clarysse bilingual Greek Demotic papyri
6. Crossref: query=Feder+Coptic+glosses+Greek+Bible; query.author=Feder&query=Coptic+Bible
7. Crossref: query=Coptic Arabic interlinear translation Bible manuscript
8. Crossref: works/10.5617/jais.12697 (checked "Ingenuity Between the Lines" — turned out to be Maranao/Malay Philippines, not relevant)
9. Crossref: query.author=Miyagawa&query=Coptic
10. Crossref: query.author=Torallas Tovar&query=magical papyri
11. Direct fetch: copticscriptorium.org (success)
12. Crossref: query=Trismegistos database Depauw
13. trismegistos.org — BLOCKED (403 Forbidden); kyprianos.cz / kyprianos.uni-wuerzburg.de — DNS not resolved
14. papyri.info — BLOCKED (bot-verification interstitial); papyri.info/about — 404
15. Crossref: query=Vandorpe Dryton bilingual archive; query=Old+Coptic+glosses+magical+papyri
16. Crossref: query=Demotic mythological manual annotated; query=Book of the Dead commentary scholia hieratic
17. Crossref: query=Clarysse Egyptian scribes writing Greek; works/10.1484/j.cde.2.308932
18. Crossref: query=Copto-Arabic manuscripts glosses translation
19. Crossref: query.bibliographic=Feder Glossen griechisch koptisch; query=koptische Glossen griechische Bibelhandschriften
20. adw-goe.de direct fetch failed (connection closed); succeeded via r.jina.ai proxy — found project "Koptisches Altes Testament"
21. coptot.manuscriptroom.com — fetched directly (success)
22. Bing HTML search — returned unusable consent page; DuckDuckGo html endpoint — worked once then rate-limited; DuckDuckGo lite via r.jina.ai proxy — worked (main search channel)
23. DDG-lite via proxy: "Interlinear Glossing on Coptic Text" (verified authors So Miyagawa and Mona Sawy)
24. DDG-lite via proxy: Clarysse bilingual school exercise Demotic Greek; Amduat scholia Hornung; Demotic mythological manual Thompson; Ryholt Tebtunis temple library; Schroeder Zeldes Coptic Scriptorium paper; Miyagawa Sawy PDF (no PDF found); "mythological manual" Demotic Carlsberg Tebtunis
25. OpenAlex API — BLOCKED (daily budget exhausted, resets midnight UTC)
26. Downloads: Feder_Richter_JCoptS_22.pdf (coptot.manuscriptroom.com); arxiv.org/pdf/1912.05082; gucorpling.org Zeldes et al. 2024 PDF; archive.org Amduat Leseprobe PDF; curis.ku.dk Joergensen thesis PDF (all successful, extracted with PyMuPDF)
27. degruyter.com chapter page — BLOCKED (CAPTCHA/human verification)
28. una-editions.fr Clarysse bilingual article page — fetched via r.jina.ai (success)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| W. Clarysse | Bilingual Greek-demotic papyrological documents in Graeco-Roman Egypt | 2023 | https://una-editions.fr/bilingual-greek-demotic-papyrological-documents/ ; DOI 10.46608/diglossia1.9791030008265.7 | TM-based survey: ~50,000 documentary texts; bilingual Greek-Demotic = ~5% (2,626 texts); per-century counts AD3 bilinguals rise to 744 via mummy labels |
| W. Clarysse | Egyptian Scribes writing Greek | 1993 | DOI 10.1484/j.cde.2.308932 | Chronique d'Egypte 68, 186-201; classic study on Egyptian scribes trained to write Greek (scribal education) |
| S. Miyagawa; M. Sawy | Interlinear Glossing on Coptic Text: Past, Present, and Future | 2019? (page dated 2019-01-01) | https://www.academia.edu/44914464/Interlinear_Glossing_on_Coptic_Text_Past_Present_and_Future | Verifies "Sawy/Miyagawa" reference: two Coptic manuscripts with Arabic translations written above every Coptic word or phrase |
| F. Feder; S. G. Richter | Reconstructing and Editing the Coptic Bible | 2020 | https://coptot.manuscriptroom.com/documents/10231/23535/Feder_Richter_JCoptS_22.pdf/d1c84411-863c-49ad-a264-cc7af654a931 ; DOI 10.2143/JCS.22.0.3287547 | JCS 22, 95-100; Goettingen Coptic-Sahidic OT digital edition; LCBM unified numbering sa 2000+ for OT; VMR repository |
| Antonia St Demiana | Explanatory Glosses in Sahidic Leviticus | 2024 | DOI 10.1163/9789004545892_019 | Chapter in "Sahidic Coptic Leviticus"; documents glosses inside a Coptic biblical manuscript tradition |
| E. O. D. Love | Code-switching with the Gods (chapters on "The Old Coptic Magical Texts of PGM IV") | 2016 | DOI 10.1515/9783110467833 (book), -005/-006/-011/-016 (chapters) | Old Coptic texts in P. Bibliotheque nationale Suppl. grec 574 (= PGM IV): graphemes/phonemes, practitioners, word index |
| J. Dieleman | Priests, Tongues, and Rites | 2005 | DOI 10.1163/9789047406747 | Brill monograph on multilingual magical practice (Greek/Demotic/Old Coptic) in Greco-Egyptian handbooks |
| K. Dosoo; M. Preininger | Papyri Copticae Magicae: Coptic Magical Texts Vol. 1 Formularies | 2023 | DOI 10.1515/9783111080109 | Modern edition of Coptic magical formularies; reviewed in Curculio/Cronicae 2025 DOI 10.21071/cco.v22i.18476 |
| J. B. Joergensen | Egyptian Mythological Manuals (PhD thesis) | 2014 | https://curis.ku.dk/ws/portalfiles/portal/462038803/Ph.d._2014_J%C3%B8rgensen.pdf ; translation: https://www.attalus.org/egypt/mythological.html | Tebtunis Mythological Manual (PSI inv. 1.72 = TM 218348); Ritual for Averting the Raging One with INTERLINEAR translations; Tebtunis onomasticon supralinear Demotic/proto-Coptic glosses; von Lieven commentary typology; BD 17 Q&A scholia |
| E. Hornung; Th. Abt (eds.) | The Egyptian Amduat. The Book of the Hidden Chamber | 2007 | https://archive.org/download/amduat-leseprobe/Amduat_Leseprobe.pdf | Introduction documents long vs short versions, red rubrics, catalogue of 741 deities (KV34); transmission into Late Period |
| E. Hornung | The Ancient Egyptian Books of the Afterlife | 1999 | DOI 10.7591/9780801459283 | Standard reference on netherworld books incl. Amduat structure |
| C. T. Schroeder; A. Zeldes | A Collaborative Ecosystem for Digital Coptic Studies | 2020 | https://arxiv.org/pdf/1912.05082 ; https://jdmdh.episciences.org/5969 ; DOI 10.46298/jdmdh.5969 | Coptic Scriptorium infrastructure: annotation tools, ANNIS, NLP pipeline, aligned corpora |
| A. Zeldes; C. T. Schroeder; N. Wagner; L. Bremer-McCollum; H. Takla | Digital Developments for Dialects in Coptic | 2024 | https://gucorpling.org/amir/pdf/ZeldesSchroederWagnerEtAl2024_Digital_Developments.pdf | Bohairic NLP expansion; first Bohairic UD treebank; hyper-lemmatization across dialects |
| L. Depauw; M. Gheldof (attrib.) | Trismegistos: An Interdisciplinary Platform for Ancient World Texts | 2014 | DOI 10.1007/978-3-19-08425-1_5 | TM platform chapter (site itself blocked this loop) |
| — | Trismegistos: Optimizing Interoperability for Texts from the Ancient World | 2019 | DOI 10.1515/9783110607208-016 | TM interoperability chapter |
| V. Zaki | The Pauline Epistles in Arabic | 2021 | DOI 10.1163/9789004463257_005 (chapter "of Coptic origin") | Brill monograph classifying Arabic Pauline versions by Vorlage incl. Coptic origin |
| J. F. Quack; K. Ryholt | Demotic Literary Texts from Tebtunis and Beyond (Carlsberg Papyri 11) | 2019 | https://press.uchicago.edu/ucp/books/book/distributed/D/bo19263287.html | Tebtunis temple library texts incl. manuals on dream interpretation |
| K. Vandorpe | The Bilingual Family Archive of Dryton, his Wife Apollonia and their Daughter Senmouthis | 2002 | (book, Papyrologica Bruxellensia; no reliable online copy found this loop) | Bilingual archive study; related verified item: bilingual wooden tablets of the Horos son of Nechouthes archive, CdE 2015, DOI 10.1484/j.cde.1.103387 |

## Key findings (with URLs)

1. The mysterious "Sawy/Miyagawa" reference is VERIFIED: "Interlinear Glossing on Coptic Text: Past, Present, and Future" by So Miyagawa and Mona Sawy. Search snippet confirms substance: "The interlinear glosses of both manuscripts contain Arabic translations above every Coptic word or phrase." Full text is behind Academia.edu login. https://www.academia.edu/44914464/Interlinear_Glossing_on_Coptic_Text_Past_Present_and_Future

2. Clarysse's Trismegistos-based quantification (2023): bilingual Greek-Demotic documents are about 5 percent of ~50,000 documentary texts (2,626 texts); century-by-century counts published (bilinguals: BC3 362, BC2 318, BC1 160, AD1 258, AD2 603, AD3 744); late bilingual surge driven by mummy labels; Demotic increasingly accompanied by Greek before its third-century disappearance. https://una-editions.fr/bilingual-greek-demotic-papyrological-documents/ ; DOI 10.46608/diglossia1.9791030008265.7

3. Scribal education anchor source verified: Willy Clarysse, "Egyptian Scribes writing Greek", Chronique d'Egypte 68 (1993), 186-201 (DOI 10.1484/j.cde.2.308932); plus his "Bilingual papyrological archives" chapter (Papaconstantinou ed., The Multilingual Experience in Egypt, Ashgate 2010). Cribiore's Writing, Teachers, and Students in Graeco-Roman Egypt (1996; reprint U. Michigan 2017, DOI 10.3998/mpub.9749698) is the standard catalog of school exercises.

4. Oldest Egyptian interlinear translations documented in an open-access PhD thesis: the Ritual for Averting the Raging One carries interlinear translations (Middle Egyptian into Late Egyptian/Proto-Demotic) under the title "The Interpretations of the inaccessible (language)" (Urk. VI 61,10; Schott 1954); the Tebtunis priestly onomasticon carries running supralinear additions in Demotic and proto-Coptic giving translation plus pronunciation aid (Osing, Carlsberg Papyri 2, 1998, p. 68). https://curis.ku.dk/ws/portalfiles/portal/462038803/Ph.d._2014_J%C3%B8rgensen.pdf

5. Commentary typology for older Egyptian scholia: von Lieven distinguishes primary comments (in the original text) from secondary comments (added during transmission) (Grundriss des Laufes der Sterne, 2007, 263-264); Book of the Dead ch. 17 is THE commented funerary spell with question-answer scholia and ky-Dd variant markers; Roessler-Koehler, "Text oder Kommentar" (Text und Kommentar, 1995, 111-139) is the key discussion; The Book of the Temple lists interpretation of ritual texts as mandatory for higher-priestly education. Same thesis URL as above.

6. Demotic mythological manuals verified as annotated learned compilations: Tebtunis Mythological Manual = PSI inv. 1.72 [TM 218348], hieratic, 2nd c. AD, nome-by-nome religious lore for priestly instruction; English translation online; Quack & Ryholt, Carlsberg Papyri 11 (2019) publishes further Tebtunis library manuals including dream interpretation. https://www.attalus.org/egypt/mythological.html ; https://press.uchicago.edu/ucp/books/book/distributed/D/bo19263287.html

7. Old Coptic in Greek magical papyri anchored by a De Gruyter monograph: Edward O. D. Love, Code-switching with the Gods (2016, DOI 10.1515/9783110467833) devotes chapters to "The Old Coptic Magical Texts" of PGM IV (P. Bibl. Nat. Suppl. grec 574), their graphemes/phonemes, practitioners, and an index of words in Old Coptic script; companion context: Dieleman, Priests, Tongues, and Rites (Brill 2005, DOI 10.1163/9789047406747). Torallas Tovar's team confirmed active in Greco-Egyptian magical handbooks research (Faraone & Torallas Tovar, The Greco-Egyptian Magical Formularies, U. Michigan 2022, DOI 10.3998/mpub.12227202).

8. Coptic biblical manuscript infrastructure: Goettingen academy project "Complete Digital Edition and Translation of the Coptic-Sahidic Old Testament" (coptot.manuscriptroom.com), unified LCBM numbering (OT starts sa 2000), common repository agreed with INTF Muenster in Jan 2016; full open-access status report: Feder & Richter, JCS 22 (2020) 95-100, DOI 10.2143/JCS.22.0.3287547. Within this tradition, glosses INSIDE Coptic biblical manuscripts are documented by Sister Antonia St Demiana, "Explanatory Glosses in Sahidic Leviticus" (DOI 10.1163/9789004545892_019).

9. Post-conquest Coptic-Arabic bitexts: Vevian Zaki, The Pauline Epistles in Arabic (Brill 2021) classifies Arabic Pauline witnesses by Vorlage including "of Coptic origin" (DOI 10.1163/9789004463257_005); Miyagawa & Sawy document actual Coptic manuscripts with Arabic interlinear glosses above every word (finding 1).

10. Digital infrastructure confirmed live and described by primary sources: Coptic Scriptorium (https://copticscriptorium.org/, led by Caroline T. Schroeder and Amir Zeldes; corpora with aligned translations, ANNIS queries, Coptic Dictionary Online from KELLIA partnership, NLP service); Bohairic expansion with first Universal Dependencies treebank (Zeldes et al. 2024, https://gucorpling.org/amir/pdf/ZeldesSchroederWagnerEtAl2024_Digital_Developments.pdf); ecosystem paper arXiv 1912.05082 / JDMDH DOI 10.46298/jdmdh.5969; Trismegistos described in Springer 2014 chapter (DOI 10.1007/978-3-19-08425-1_5) and 2019 interoperability chapter (DOI 10.1515/9783110607208-016); Papyrological Navigator (papyri.info) exists but was not verifiable beyond bot-block this loop.

11. Scholar verification status: Willy Clarysse — verified (multiple DOIs above); Katelijn Vandorpe — verified as scholar of bilingual archives (CdE 2015 bilingual tablets article DOI 10.1484/j.cde.1.103387; Dryton archive items in Crossref) but her 2002 book details not independently confirmed online this loop; Frank Feder — verified (Goettingen Koptisches Altes Testament leader; JCS 22 article; OLZ review etc.); Sofia Torallas Tovar — verified (magical formularies, Montserrat collections, PCM reviews).

## Remaining gaps

1. Feder's supposed specific study "Coptic glosses in Greek biblical manuscripts" (ยังไม่พบข้อมูลยืนยัน): searched Crossref multiple ways (query.author=Feder + glosses/Glossen; German bibliographic strings); nothing matching found. Closest verified items are St Demiana's Explanatory Glosses in Sahidic Leviticus and Feder's general Coptic Bible reconstruction papers. Possibly the intended reference is a lecture or a chapter in a Septuagint congress volume not indexed in Crossref.
2. Word-by-word interlinear Greek-Demotic SCHOOL exercises: no specific edited school text (the prompt's "P.Bingen" candidate) could be verified this loop (ยังไม่พบข้อมูลยืนยัน). Known literature cluster (Clarysse 1993; Clarysse 2010 bilingual archives; Cribiore 1996) is the entry point; next step: consult Clarysse 1993 full text and Cribiore's catalogue numbers.
3. Miyagawa & Sawy full PDF inaccessible (Academia.edu login wall); only title/authors/one-sentence abstract snippet captured. Venue/year of the final publication unknown.
4. Trismegistos website (trismegistos.org) blocked with HTTP 403; description relies on the Springer/De Gruyter chapters' metadata rather than the site itself. Kyprianos database domain did not resolve; correct current URL needs confirmation.
5. Papyrological Navigator documentation page unreachable (bot check; /about returns 404); its role described only generically here.
6. Amduat formal "scholia": Hornung & Abt sample documents short version + rubrics but does not define scholia; need Hornung's Unterweltsbuecher (1967/1984) or von Lieven 2007 for precise scholion terminology (partially covered via Joergensen/von Lieven citations).
7. Coptic-Arabic interlinear manuscripts beyond Miyagawa-Sawy's two manuscripts (e.g., which shelfmarks; Bohairic-Arabic Psalter bitexts) not yet identified; Biblia Arabica project pages not queried successfully this loop.
8. OpenAlex API budget exhausted (resets midnight UTC) — author-level verification (Vandorpe's full bibliography, Torallas Tovar affiliation history) postponed.

## Blocked sources (recorded honestly)

- websearch tool (Exa MCP): HTTP 429 for entire session
- api.openalex.org: daily budget exhausted ("Insufficient budget... resets at midnight UTC")
- trismegistos.org: 403 Forbidden (direct http and https)
- papyri.info: bot-verification interstitial; papyri.info/about: 404
- degruyter.com: CAPTCHA / human verification page
- academia.edu: login wall around full PDFs (metadata visible only)
- bing.com HTML search: returned unusable localized consent page
- html.duckduckgo.com: worked briefly then rate-limited (replaced by lite.duckduckgo.com through r.jina.ai)
- adw-goe.de: direct connection closed unexpectedly (worked through r.jina.ai proxy)
- kyprianos.cz, kyprianos.uni-wuerzburg.de: DNS resolution failure

## Harvested documents in this folder

1. 2020-Feder-CopticBible.md (full text extract, 6 pp., JCS 22)
2. 2020-Schroeder-DigitalCopticEcosystem.md (full text extract, 9 pp., JDMDH/arXiv)
3. 2024-Zeldes-BohairicNLP.md (full text extract, 3 pp.)
4. 2007-Hornung-AmduatIntroduction.md (introduction extract, 23 pp. sample)
5. 2023-Clarysse-BilingualGreekDemoticDocuments.md (article summary page with data tables)
6. 2014-Jorgensen-EgyptianMythologicalManuals.md (thesis abstract + targeted excerpts on interlinear translations, supralinear glosses, commentary typology)
