# Loop 24 Findings — European vernacular interlinear gloss corpora: Old Irish, Old English, Old High German

Date: 2026-08-25
Project: output\2026-08-25_คำแปลแทรกสิบแปดบท (Thai-language academic book on interlinear additions, interlinear glosses, scholia)

## Queries executed

1. websearch: Würzburg glosses Old Irish Codex Paulinus Wirziburgensis dating McCone 1985 Ériu debate
2. websearch: St Gall Priscian glosses stgallpriscian.ie database version 2.1 manuscript
3. websearch: Milan Glosses Project Ambrosianus C 301 inf Old Irish glosses digital dictionary Vienna
4. websearch: Lindisfarne Gospels Aldred gloss c.970 oldest English Gospel translation Rushworth MacRegol multiple glossing
5. websearch: Abrogans St Gall codex 911 first German book Tatian interlinear OHG parallel columns Reichenau glosses Bavarian
6. webfetch + e-codices description page: Cod. Sang. 56 (Tatian)
7. websearch: "Reichenau glosses" OR "Reichenauer Glossen" interlinear OHG psalter BStK
8. websearch: Monsee fragments OHG Mondsee Matthew interlinear glosses
9. websearch: GlossIT project Bernhard Bauer Graz Celtic Latin glossing outputs
10. bash: archive.org advancedsearch API for Thesaurus Palaeohibernicus scans
11. webfetch: wurzburg.ie/about_Eng.html (full harvest)
12. websearch: "Monsee-Wiener Fragmente" Handschriftencensus / Krotz / Vienna ÖNB
13. websearch: althochdeutsch Bibelglossen Reichenau Karlsruhe Augiensis BStK Bergmann Stricker
14. webfetch: glossing.org articles; bash link extraction -> Gloss Corpus at glossing.org/glosscorpus/ (fetched in full)

## Table of sources

| Author/Editor | Title | Year | URL | Substance |
|---|---|---|---|---|
| Doyle, Adrian | Würzburg Irish Glosses (digital edition) | 2018 (site, copyright 2024) | https://wurzburg.ie/about_Eng.html | Codex Paulinus Wirziburgensis = Würzburg UB M.p.th.f. 12; marginal+interlinear glosses in three scribal hands; mid-8th-c.; TPH presents 3,501 Irish-content glosses; CC BY 4.0 |
| McCone, Kim | The Würzburg and Milan Glosses: Our Earliest Sources for 'Middle Irish' | 1985 | Ériu 36, pp. 85–106 (refs verified via Cambridge volume bibliographies and Doyle/McCrae/Downey 2019) | Dating debate: features more suggestive of Middle Irish than Old Irish already in the Würzburg glosses |
| Doyle, McCrae, Downey | A Character-Level LSTM Network Model for Tokenizing... Würzburg Glosses | 2019 | https://aclanthology.org/W19-6910.pdf | Mid-8th-c. dating per Stifter 2006; prima manus more archaic than hands 2–3; TPH diplomatic editing retains spacing anomalies |
| Griffith, Aaron (& Stifter, David) | A Dictionary of the Old-Irish Glosses in Milan Codex Ambrosianus C 301 inf. | project 2006–2011, DB 2013 | https://indogermanistik.univie.ac.at/milan-glosses | Largest corpus within TPH glosses (Thes. i 7–483); interlinear+marginal notes to Latin psalm commentary; FWF P19137-G03; text checked against Best 1936 facsimile and MS (Dec 2010) |
| Hofman, Moran & Bauer | St Gall Priscian Glosses v2.1 | 2023 | https://stgallpriscian.ie/ | Cod. Sang. 904 written AD 850–1 probably in Ireland; to Continent 855–863, St Gall after 888; over 9,400 interlinear+marginal glosses plus c. 3,000 symbol glosses; about one-third of verbal glosses in Old Irish; breaks off Book 17 |
| Bauer, Bernhard | Online Database of the Old Irish Priscian Glosses | FWF P22859 | https://indogermanistik.univie.ac.at/priscian/ | Covers Sg 904 + Karlsruhe Aug. CXXXII + Paris lat. 10290 + Milan Ambr. A 138 sup. + Leiden BPL 67; adapted from Griffith's Milan database design |
| Stokes & Strachan | Thesaurus Palaeohibernicus I–II (+ Supplement) | 1901, 1903 (1975 repr.) | https://archive.org/details/thesauruspalaeoh01stokuoft ; .../thesauruspalaeoh02stokuoft | Collects Würzburg, Milan, St Gall glosses; diplomatic editing preserving orthography/spacing; Supplement pp. 423–506 in 1975 reprint |
| Fernández Cuesta & Pons-Sanz (eds.) | The Old English Gloss to the Lindisfarne Gospels: Language, Author and Context | 2016 | https://doi.org/10.1515/9783110449105 | De Gruyter volume; Aldred's agenda; Benedictine Reform training question; multiple glosses chapters; unglossed words; Owun's sources |
| Brill chapter (anon.) | The Texts of the Lindisfarne Gospels | 2017 | https://brill.com/display/book/edcoll/9789004337848/B9789004337848_010.xml | OE gloss added interlinearly "perhaps about 970" by Aldred, provost |
| digitalmedievalist.com (S. L'Engle et al.) | Gospels of Lindisfarne | 2025 | https://www.digitalmedievalist.com/things/manuscripts/the-book-of-lindisfarne | BL Cotton Nero D.IV; Chester-le-Street context; oldest surviving version of the Gospels in any form of English; colophon names Eadfrith, Aethilwold, Billfrith |
| Pons-Sanz, Sara M. | A Study of Aldred's Multiple Glosses to the Lindisfarne Gospels | 2016 | https://orca.cardiff.ac.uk/85937/1/Pons-Sanz_Multiple%20glosses.pdf | Multiple-gloss phenomenon; Aldred presents himself as carefully rendering Latin lemmata |
| Tamoto, Kenichi (ed.) | The Macregol Gospels or The Rushworth Gospels | 2013 | https://benjamins.com/catalog/z.180 | First complete edition of Latin text + OE interlinear gloss of Oxford Bodleian Auct. D.2.19 |
| Bodleian catalogue | MS Auct. D.2.19 record | n.d. | https://medieval.bodleian.ox.ac.uk/catalog/manuscript_431 | MacRegol/Rushworth Gospels; Ireland (Birr), before 822; OE gloss added 10th c. |
| Turin unito paper | The Mercian Rushworth Gloss as a Copy | n.d. | https://iris.unito.it/retrieve/280167a0-1905-4bdc-aa1d-49d411a94bbe/gjae097.pdf | Gloss second half of 10th c.; two scribes Farman and Owun named in colophons |
| Scherrer (via e-codices) | Evangelienharmonie des Tatian, Cod. Sang. 56 | descr. 1875 | https://www.e-codices.unifr.ch/en/description/csg/0056 | First half 9th c.; two columns, 32 lines; Latin left column, German opposite — parallel-column translation; seven scribes per Sievers 1872; High Franconian/Fulda dialect |
| historyofinformation.com (Blair) | Codex Abrogans entry | n.d. | https://historyofinformation.com/detail.php?id=2857 | St Gall Cod. Sang. 911; oldest surviving book in German language |
| Biblissima/e-codices IIIF | Cod. Sang. 911 metadata | n.d. | https://iiif.biblissima.fr/collections/manifest/315bf30891183f22a43f1c048063228e262a3cae | Dating "around 790"; title Abrogans – Vocabularius (Keronis) et Alia |
| Ziereis Facsimiles | Abrogans Codex description | n.d. | https://www.facsimiles.com/facsimiles/abrogans-codex | c. 3,700 words, 14,600+ examples; abrogans=dheomodi; Arbeo or Kero; contains earliest OHG Lord's Prayer and Creed; one of three early copies of lost original |
| Hench (ed.), via Handschriftencensus | Monsee-Wiener Fragmente (work record + MS record 11565) | ed. 1890 | https://handschriftencensus.de/werke/2494 ; https://handschriftencensus.de/11565 | Wien ÖNB Cod. 3093* + Hannover Ms. I 20b + Wien Cod. 2997 cover; um 810 (Menhardt), 1st third 9th c. (Bischoff); Mondsee; Bavarian; bilingual synopsis |
| Stifterhaus/Kragl | Mondsee-Wiener Fragmente overview | 2015 | https://www.stifterhaus.at/stichwoerter/mondsee-wiener-fragmente | Contents list (Matthew fragments, De vocatione gentium, Augustine Sermon LXXVI, Isidore De fide catholica); translations before/around 800 |
| Krotz, Elke | profile incl. Monseer Fragmente DFG project 2009–2011 and new edition | 2026 page | https://www.germ.univie.ac.at/elke-krotz | New edition of the Latin-OHG Monseer Fragmente (De Gruyter, forthcoming); Kaska/Krotz 2016 new fragment (ZfdA 145, 82–88) |
| Hetzer, Kurt | Die Reichenauer Glossen | 1906 | https://archive.org/details/ReichenauerGlossenHetzer | CAUTION: treats Old French Reichenau glosses ("Gloses de Reichenau"), not an OHG corpus |
| BStK Online (Stricker/Bergmann, Bamberg) | Datenbank der althochdeutschen und altsächsischen Glossenhandschriften | ongoing | https://glossen.germ-ling.uni-bamberg.de/pages/1 | Standard census of OHG/Old Saxon gloss manuscripts; e.g., BStK 301 = Karlsruhe Aug. perg. 129 (Reichenau provenance, biblical commentary glosses) |
| adfontes.uzh.ch tutorial | Althochdeutsche Glossierung | n.d. | https://adfontes.uzh.ch/tutorium/die-deutsche-sprache-in-den-quellen/althochdeutsche-glossierung | Bergmann/Stricker catalogue: over 1,300 manuscripts, 230,000 individual gloss attestations |
| Moran, Pádraic | Gloss Corpus v1.0 | 2024 | https://www.glossing.org/glosscorpus/ | Open-access platform; DOIs per edition; 66 collections on 4 primary texts, 24,872 glosses total, incl. Würzburg (3,642, rev. Doyle) and St Gall Priscian (13,395) |
| Vervaart & Cinato | Digital editions of glosses (Network for the Study of Glossing) | 2022 | https://www.glossing.org/articles/digital-editions | Directory incl. Old Irish databases, Gloss-ViBe, BStK Online, Augsburger Glossenwiki |
| Bauer, Bernhard | Gloss-ViBe digital edition of the Vienna Bede | 2023 | https://gams.uni-graz.at/glossvibe | Marie Curie output; Vienna Bede (ÖNB) with Old Irish+Latin glosses, late 8th/early 9th c.; parallel-gloss analysis |
| University of Graz | Gloss.IT project pages | 2024–2029 | https://glossit.uni-graz.at/en ; https://forschungsmanagement.uni-graz.at/en/major-research-projects/eu-projects/ | ERC Consolidator Grant No. 101123203; June 2024–May 2029; EUR 1,993,598.09; Bede computistical works + Priscian; HTR/network analysis/NLP/DNA-sequence alignment |

## Key findings (with URLs)

1. Würzburg glosses identity and dating. The manuscript is the Codex Paulinus Wirziburgensis, Würzburg, Universitätsbibliothek, M.p.th.f. 12 (signature confirmed by both the Doyle site's citation of Ó Néill 2002 and by Gloss Corpus v1.0). It carries marginal AND interlinear Irish glosses on the Latin Pauline epistles in three distinguishable scribal hands, dated "about the middle of the eighth century"; TPH prints 3,501 Irish-content glosses, Gloss Corpus v1.0 counts 3,642 under "rev. A. Doyle". https://wurzburg.ie/about_Eng.html ; https://www.glossing.org/glosscorpus/

2. McCone 1985 dating debate. McCone, "The Würzburg and Milan Glosses: Our Earliest Sources for 'Middle Irish'", Ériu 36 (1985), 85–106, argued that even the Würzburg glosses show features more suggestive of Middle Irish than Old Irish (as summarized by Doyle, McCrae & Downey 2019); the prima manus nevertheless suggests a more archaic form of Irish than hands 2 and 3. So "mid-8th century manuscript" and "linguistic stage debate" must be kept separate in the book. https://aclanthology.org/W19-6910.pdf

3. Milan glosses. Codex Ambrosianus C 301 inf. (Milan) holds the largest single corpus inside TPH (Thes. i 7–483): interlinear and marginal notes to and translations of a Latin commentary on the Psalms. The Vienna dictionary project (Griffith/Stifter, FWF P19137-G03) digitised the whole corpus, checked against Best's 1936 facsimile and the manuscript itself; its language reflects the state of Irish at the beginning of the 9th century. https://indogermanistik.univie.ac.at/milan-glosses

4. St Gall Priscian glosses. Cod. Sang. 904 was copied by Irish scribes in AD 850–1, probably in Ireland, and reached St Gall after 888. It bears over 9,400 interlinear and marginal glosses plus c. 3,000 symbol glosses; about one third of verbal glosses are in Old Irish. The official database reached v2.1 in 2023 (Hofman transcription, Moran digital edition, Bauer linguistic apparatus); the manuscript breaks off in Book 17 (Book 18 missing). https://stgallpriscian.ie/

5. Lindisfarne. Aldred, provost at Chester-le-Street, added a strictly interlinear Old English gloss around 970 to BL Cotton Nero D.iv — the oldest surviving version of the Gospels in any form of English. The Fernández Cuesta/Pons-Sanz De Gruyter volume (2016) documents the multiple-gloss phenomenon (double/triple glosses), his marginal maxims, and the open question of Southumbrian glossing-school training. https://doi.org/10.1515/9783110449105 ; https://orca.cardiff.ac.uk/85937/1/Pons-Sanz_Multiple%20glosses.pdf

6. Rushworth/MacRegol as a second OE gospel gloss with two named scribes. Oxford Bodleian Auct. D.2.19 (Latin: Ireland, Birr, before 822) received a 10th-century interlinear OE gloss written by Farman and Owun, who identify themselves in colophons; Tamoto 2013 is the first complete joint edition. https://medieval.bodleian.ox.ac.uk/catalog/manuscript_431 ; https://benjamins.com/catalog/z.180

7. Abrogans. St Gallen, Stiftsbibliothek, Cod. Sang. 911 (dated around 790 by e-codices/Biblissima metadata; lost archetype Bavarian/Freising, 2nd half 8th c.) is regarded as the oldest surviving book in German: a Latin-OHG synonym glossary of c. 3,670 OHG words in over 14,600 examples, named after first entry abrogans = dheomodi 'humble'; attribution debated between bishop Arbeo of Freising and a monk Kero. It is a standalone glossary, not interlinear annotation. https://historyofinformation.com/detail.php?id=2857 ; https://iiif.biblissima.fr/collections/manifest/315bf30891183f22a43f1c048063228e262a3cae

8. Tatian layout is parallel columns, not glosses. Cod. Sang. 56 (first half of 9th c., 342 pp., two columns, 32 lines): the Latin harmony stands in the left column, the OHG translation opposite — a full continuous translation layout, distinct from word-by-word interlinear glossing; Sievers (1872) distinguished seven scribes; dialect High Franconian (Fulda). Unique manuscript apart from Junius's copy of a lost codex (missing chs 76–153). https://www.e-codices.unifr.ch/en/description/csg/0056

9. Monsee-Wiener Fragments. Wien ÖNB Cod. 3093* (+ Hannover Ms. I 20b; + Wien Cod. 2997 back cover) preserve remains of at least 47 leaves written at Mondsee soon after 800 (um 810 Menhardt; 1st third 9th c. Bischoff), Bavarian dialect, presenting Matthew fragments, De vocatione gentium, Augustine Sermon LXXVI and Isidore's De fide catholica in Latin-OHG synopses. New critical edition by Elke Krotz (De Gruyter) follows a 2009–2011 FWF/DFG-era project; a new fragment surfaced in 2016 (ZfdA 145). https://handschriftencensus.de/werke/2494 ; https://handschriftencensus.de/11565 ; https://www.stifterhaus.at/stichwoerter/mondsee-wiener-fragmente

10. What the corpora reveal collectively. Each language's earliest substantial vernacular writing survives precisely in gloss/translation formats tied to Latin learning: Irish (Würzburg mid-8th c. Pauline glosses; Milan psalm commentary; St Gall grammar classroom glosses on Priscian), English (interlinear gospel translations of Aldred, Farman, Owun), German (Freising glossary Abrogans; Fulda-style Tatian columns; Mondsee biblical synopses). Layout choices correlate with function: lexical/exegetical help = interlinear+marginal glosses; full translation = parallel columns (Tatian, Monsee); vocabulary teaching = standalone glossaries (Abrogans).

11. Digital infrastructure now covers nearly all major corpora: stgallpriscian.ie v2.1 (2023), wurzburg.ie (Doyle 2018), Vienna Milan database (2013) and Priscian database (FWF P22859), Gloss Corpus v1.0 (Moran 2024; 66 collections, 24,872 glosses incl. full Würzburg and St Gall corpora, each with DOI), Gloss-ViBe (Bauer 2023, gams.uni-graz.at/glossvibe) and the ERC GlossIT project (Grant No. 101123203, 2024–2029, Graz). https://www.glossing.org/glosscorpus/ ; https://glossit.uni-graz.at/en

12. Scale of OHG glossography for context: the Bergmann/Stricker catalogue lists over 1,300 manuscripts with c. 230,000 individual gloss attestations; BStK Online (Bamberg) is the standard census of OHG/Old Saxon gloss manuscripts. https://adfontes.uzh.ch/tutorium/die-deutsche-sprache-in-den-quellen/althochdeutsche-glossierung ; https://glossen.germ-ling.uni-bamberg.de/pages/1

## Remaining gaps

1. "Reichenau glosses (Bavarian OHG biblical glosses)": the specific label could not be verified. Two distinct referents found: (a) the "Gloses de Reichenau" are Old French interlinear glosses studied in Romance philology (Hetzer 1906, archive.org/details/ReichenauerGlossenHetzer); (b) numerous Reichenau-provenance manuscripts with OHG glosses exist in BStK/StSG (e.g., Karlsruhe Aug. perg. 129 = BStK 301, biblical commentary glosses), but Reichenau is Alemannic, not Bavarian. The claim "Bavarian OHG biblical glosses from Reichenau" remains unverifiable here — (ยังไม่พบข้อมูลยืนยัน). Recommend citing Mondsee/Freising material for Bavarian biblical vernacular instead.
2. Exact current count discrepancy for St Gall Priscian glosses: official site "over 9,400" vs Europeana "over 9000, among them 3478 Old Irish" vs Gloss Corpus 13,395 items (incl. symbol glosses). A definitive reconciliation requires the database itself.
3. McCone 1985 article text not directly accessible (JSTOR paywall); argument reconstructed from secondary summaries only.
4. Würzburg dating debate beyond McCone (e.g., Ó Néill 2002 position on prima manus context) not yet read in full; only titles/abstracts harvested.
5. Lindisfarne colophon precise wording and Aldred's self-description would benefit from the British Library digitised manuscript viewer (not fetched this loop).
6. Tatian absolute dating range (commonly "c. 830–860" in literature) not pinned to a fetchable authority this loop; e-codices gives only "saec. IX erste Hälfte".
7. Monsee new edition (Krotz, De Gruyter) publication status: listed as forthcoming ("erscheint bei De Gruyter"); no publication year captured.

## Blocked sources

- JSTOR: McCone 1985 (https://www.jstor.org/stable/pdf/30007797.pdf) and Silva 2023 (27278452) — paywall; metadata only.
- De Gruyter eBook chapters of the Fernández Cuesta/Pons-Sanz volume — licensed; table of contents harvested instead.
- John Benjamins Tamoto 2013 full text — authorization required; publisher page metadata only.
- archive.org Hetzer 1906 scan — lending status noted ("Ask the publishers to restore access"); metadata only.
