# Loop 06 - Modern philology and manuscript study (18th c. to present): theory, methods, digital turn

Date of loop: 2026-08-25. Project: output/2026-08-25_คำแปลแทรกสิบแปดบท. Language of research: English/German/French/Italian.

## 1. Queries executed

Web search tool (websearch/Exa): FAILED all attempts with HTTP 429 rate limit (6 attempts). OpenAlex REST API: blocked - "Insufficient budget... Resets at midnight UTC" (1 attempt). Fallbacks used successfully:

- Crossref `works?query.bibliographic=` : "Prolegomena ad Homerum Wolf"; "Bedier tradition manuscrite Lai de l'Ombre"; "Pasquali Storia della tradizione e critica del testo"; "Paul Maas Textual Criticism translated Flower"; "Cerquiglini Eloge de la variante"; "New Philology Speculum Nichols 1990 introduction"; "Oxford Handbook of Latin Palaeography"; "quantitative codicology manuscript statistics digital stemmatics"; "Lachmann Lucretius stemma edition 1850"; "Grafton Prolegomena Friedrich August Wolf"; "stemmatology computer assisted Andrews Mace Tibullus"; "codicologie quantitative"; "Book in the Islamic World Atiyeh"; "Timpanaro genesi metodo del Lachmann"; "Wolf Prolegomena to Homer translated Grafton Most Zetzel"; "Clemens Graham Introduction to Manuscript Studies".
- DOI content negotiation (doi.org, CSL JSON) for: 10.1017/cbo9781107326262; 10.1093/oxfordhb/9780195336948.001.0001; 10.2307/751054; 10.3406/rht.1989.1332; 10.2307/2864468; 10.2307/2864469; 10.3406/scrip.1982.1261; 10.3406/galim.2001.1532.
- Direct webfetch: Persée (Bédier 1928); TEI P5 ch.13; homermultitext.org; glossing.org (home + Gloss Corpus + digital-editions article); e-codices; stgallpriscian.ie.
- OpenAIRE project search API (GlossIT); DuckDuckGo HTML search (Housman; Cerquiglini translation; GlossIT) - third query hit a bot challenge.
- archive.org advancedsearch API: returned only YouTube items for the Cerquiglini query (no book scan found).

## 2. Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Joseph Bédier | La tradition manuscrite du Lai de l'Ombre. Réflexions sur l'art d'éditer les anciens textes (premier article), Romania t.54 n°214, pp.161-196 | 1928 | https://www.persee.fr/doc/roma_0035-8029_1928_num_54_214_4345 | Programmatic attack on Lachmannian stemmatics using the Lai de l'Ombre as test case; opening text fetched from Persée OA page (PDF endpoint 403). DOI 10.3406/roma.1928.4345 |
| A.E. Housman | The Application of Thought to Textual Criticism, Proceedings of the Classical Association 18, pp.67-84 | 1921 | http://rosetta.reltech.org/TC/extras/Housman-Thought.html | Full OA text fetched: textual criticism = science+art of discovering/removing error in texts; anti-mechanist rules; palaeography vs criticism distinction. Also Zenodo 10.5281/zenodo.8247611 |
| Anthony Grafton | Prolegomena to Friedrich August Wolf, Journal of the Warburg and Courtauld Institutes 44 | 1981 | https://doi.org/10.2307/751054 | Modern historiographic study situating Wolf's founding act |
| F.A. Wolf | Prolegomena ad Homerum (Cambridge UP ebook reprint) | 1795 (repr. 2014) | https://doi.org/10.1017/cbo9781107326262 | Founding text of scientific Altertumswissenschaft; CUP metadata verified |
| Grafton/Most/Zetzel (trans.) | F.A. Wolf: Prolegomena to Homer, 1795, Princeton UP | 1985 | https://doi.org/10.1017/s0009840x00100484 (CR review confirming edition) | Standard English translation with Introduction and Notes |
| Karl Lachmann (ed.) | T. Lucreti Cari De rerum natura libri sex (Berlin; de Gruyter reprint) | 1850 | https://doi.org/10.1515/9783112389102 | Landmark genealogically reconstructed edition; companion commentary DOI 10.1515/9783112397442 |
| Sebastiano Timpanaro | La genesi del metodo del Lachmann, Firenze: Le Monnier | 1963 | https://doi.org/10.1163/156852566x00088 (Mnemosyne review); also CR 10.1017/s0009840x00299538 | Classic study formalizing how the genealogical method arose |
| R.H.F. Grier | Lachmann, Bédier and the Bipartite Stemma: Towards a Responsible Application of the Common-Error Method, Revue d'histoire des textes | 1989 | https://doi.org/10.3406/rht.1989.1332 | Bridging study on common-error method and its limits (Persée OA) |
| A. Dees | Considérations théoriques sur la tradition manuscrite du Lai de l'Ombre | 1976 | https://doi.org/10.1007/bf01512641 | Quantitative/computational response to Bédier's test case |
| Paul Maas | Textual Criticism, trans. B. Flower, Oxford: Clarendon Press | 1958 (orig. Textkritik 1927) | https://doi.org/10.2307/628406 (Turner review verifying imprint) | Codification of recensio/examinatio/emendatio for classical texts |
| Giorgio Pasquali | Storia della tradizione e critica del testo | 1934 | https://doi.org/10.1086/362060 (Ullman review, Classical Philology) | Historicized Lachmannism: tradition's living history (contamination, interpolations) matters |
| Bernard Cerquiglini | Éloge de la variante. Histoire critique de la philologie, Paris: Le Seuil | 1989 | review: https://doi.org/10.1017/s0395264900067901 ; earlier article DOI 10.3406/lgge.1983.1140 | Variance as essence of medieval writing; critique of editorial normalization |
| Bernard Cerquiglini | In Praise of the Variant: A Critical History of Philology, trans. Betsy Wing, Johns Hopkins UP | 1999 | https://openlibrary.org/books/OL383319M/In_praise_of_the_variant ; catalog https://iucat.iu.edu/iub/4640024 | Verified English translation record |
| Stephen G. Nichols | Introduction: Philology in a Manuscript Culture, Speculum 65.1, pp.1-10 | 1990 | https://doi.org/10.2307/2864468 | Manifesto of New Philology; special Speculum issue |
| Siegfried Wenzel | Reflections on (New) Philology, Speculum 65.1, pp.11-18 | 1990 | https://doi.org/10.2307/2864469 | Contemporary reaction within same issue (with Bloch 2864471; Fleischman 2864470) |
| J.-F. Gilmont | Essais de codicologie quantitative, Scriptorium 36 | 1982 | https://doi.org/10.3406/scrip.1982.1261 | Early programmatic item for quantitative codicology (record shows Gilmont; likely review-type notice) |
| Luc Reynhout | Codicologie quantitative et paradigmes scientifiques..., Gazette du livre médiéval | 2001 | https://doi.org/10.3406/galim.2001.1532 | Reflection on quantitative codicology's scientific paradigms (colophons typology) |
| Raymond Clemens; Timothy Graham | Introduction to Manuscript Studies, Cornell UP | 2007 | https://doi.org/10.1017/s003871341000148x (Speculum review) | Standard Anglophone codicology textbook |
| Alessandro Bausi et al. (eds.) | Comparative Oriental Manuscript Studies: An Introduction | 2015 | https://doi.org/10.1353/mns.2016.0004 (review) | COMSt handbook; comparative codicology across traditions |
| Coulson; Babcock (eds.) | The Oxford Handbook of Latin Palaeography, Oxford UP | 2020 | https://doi.org/10.1093/oxfordhb/9780195336948.001.0001 | Major handbook; includes chapters on florilegia (Hamesse), scripts, numerals etc. |
| George N. Atiyeh (ed.) | The Book in the Islamic World: The Written Word and Communication in the Middle East, SUNY Press | 1995 | reviews: https://doi.org/10.2307/605271 ; https://doi.org/10.1017/s0026318400033344 | Handbook-scale reference for Islamic-world book culture incl. annotation practices context |
| T. van Haaren | The Digital Medieval Manuscript, Brill (open access dissertation/book) | 2025 | https://doi.org/10.1163/9789004737815 | Recent synthesis of digital manuscript studies |
| TEI Consortium | TEI P5 ch.12 Representation of Primary Sources; ch.13 Critical Apparatus (v4.12.0) | 2026 | https://www.tei-c.org/release/doc/tei-p5-doc/en/html/TC.html | Standard data model for encoding variants, witnesses, hands, damage; full chapter fetched |
| Pádraic Moran (ed.) | Network for the Study of Glossing; Gloss Corpus v1.0 | 2015-2024 | https://www.glossing.org/ ; https://www.glossing.org/glosscorpus/ | 66 collections, 24,872 glosses, DOIs per collection; network founded Dec 2015 (Blom, Cinato, Moran, Nievergelt, Teeuwen, Zisk) |
| Hofman; Moran; Bauer | St Gall Priscian Glosses v2.1 | 2023 | http://www.stgallpriscian.ie/ | Digital edition of 9,400+ interlinear/marginal glosses + c.3,000 symbol glosses in St Gallen 904 (Irish scribes, AD 850-1); ~1/3 Old Irish |
| Homer Multitext project | homermultitext.org (Venetus A facsimile + scholia editions; CEX open data) | ongoing | https://www.homermultitext.org/ | Post-Lachmannian multitext of Iliad + Alexandrian-lineage scholia as open linked data |
| Bernhard Bauer (PI) | GlossIT - Celtic and Latin glossing traditions (ERC Consolidator Grant 101123203), University of Graz | 2023- | https://cordis.europa.eu/project/id/101123203 ; https://glossit.uni-graz.at/en/output/ | Digital editions of Bede/Priscian manuscripts with Insular Celtic + Latin glosses; HTR/eScriptorium, network analysis, NLP, DNA-sequence-alignment methods applied to glosses |
| e-codices | Virtual Manuscript Library of Switzerland | ongoing | https://www.e-codices.unifr.ch/en | 3,049 MSS from 100 collections, free access; includes St Gallen Stiftsbibliothek (936 MSS); annotation/metadata infrastructure pages |

## 3. Key findings (with URLs)

1. Wolf to Altertumswissenschaft: Wolf's Prolegomena ad Homerum (1795; CUP reprint DOI https://doi.org/10.1017/cbo9781107326262) is treated by modern scholarship (Grafton JWCI 1981, https://doi.org/10.2307/751054) as the founding gesture of scientific philology; the standard English translation is Grafton/Most/Zetzel, Princeton UP 1985 (verified via Classical Review notice https://doi.org/10.1017/s0009840x00100484). Wolf's model of recovering Homeric text via ancient scholarship directly motivates today's Homer Multitext work on Venetus A scholia (https://www.homermultitext.org/).
2. Lachmannian genealogy formalized: his Lucretius edition (1850, DOI https://doi.org/10.1515/9783112389102) is the paradigm of stemmatic reconstruction; its genesis is studied in Timpanaro, La genesi del metodo del Lachmann (1963, https://doi.org/10.1163/156852566x00088). Limits of the common-error method analyzed by Grier 1989 (https://doi.org/10.3406/rht.1989.1332) and quantitatively probed already by Dees 1976 on Bédier's own test text (https://doi.org/10.1007/bf01512641).
3. Bédier 1928 (Romania 54, pp.161-196; OA Persée https://www.persee.fr/doc/roma_0035-8029_1928_num_54_214_4345) turned the Lai de l'Ombre into the canonical argument that most medieval traditions show a single best manuscript, making stemma reconstruction often illusory; the fetched opening explicitly surveys all editorial techniques ever applied to this poem since Peisistratos' time.
4. 20th-century codification pair: Paul Maas, Textual Criticism (trans. Flower, Clarendon 1958; imprint verified via review https://doi.org/10.2307/628406) codified the mechanical core (recensio-examinatio-emendatio); Pasquali, Storia della tradizione e critica del testo (1934; contemporary review https://doi.org/10.1086/362060) historicized it against contamination and interpolation. Housman 1921 (full OA text http://rosetta.reltech.org/TC/extras/Housman-Thought.html) supplies the anti-mechanist counterpoint: criticism is "science and art", not rules.
5. New Philology: Cerquiglini, Éloge de la variante (Seuil 1989; review DOI https://doi.org/10.1017/s0395264900067901; English In Praise of the Variant, trans. Wing, Johns Hopkins UP 1999, https://openlibrary.org/books/OL383319M/In_praise_of_the_variant) proclaimed variance ("l'écriture médiévale ne produit pas des variantes, elle est variance" - wording widely quoted; exact French sentence not re-verified this session); answered in Speculum 65.1 (1990) special issue: Nichols intro pp.1-10 (https://doi.org/10.2307/2864468), Wenzel pp.11-18 (https://doi.org/10.2307/2864469), plus Bloch (2864471) and Fleischman (2864470).
6. Codicology as discipline: distinct reference entries exist for codicology (Brill encyclopedia entry "Codicologie", https://doi.org/10.1163/9789004337862__com_030597); quantitative codicology has a documented trajectory from Scriptorium 1982 (https://doi.org/10.3406/scrip.1982.1261) through Reynhout 2001 (https://doi.org/10.3406/galim.2001.1532); standard teaching handbooks: Clemens & Graham 2007 (Cornell UP) and COMSt/Bausi et al. 2015 for comparative (incl. Oriental) manuscript studies.
7. Digital turn infrastructure verified first-hand: TEI P5 ch.13 models apparatus (app/lem/rdg/rdgGrp/wit/witDetail; parallel segmentation vs double end-point attachment; wit vs hand vs source distinction) at https://www.tei-c.org/release/doc/tei-p5-doc/en/html/TC.html; Homer Multitext publishes Venetus A facsimile + Iliad/scholia editions as open CEX data (https://www.homermultitext.org/); St Gall Priscian Glosses v2.1 (http://www.stgallpriscian.ie/) gives position-linked access to 9,400+ glosses (+c.3,000 symbol glosses, one-third Old Irish) in MS St Gallen 904 (AD 850-1); Gloss Corpus v1.0 (https://www.glossing.org/glosscorpus/) publishes 66 collections / 24,872 glosses with per-collection DOIs; GlossIT ERC CoG 101123203 (Bernhard Bauer, Graz; https://cordis.europa.eu/project/id/101123203) applies HTR/eScriptorium, NLP, network analysis and sequence-alignment to Celtic+Latin glosses; e-codices provides free access to 3,049 Swiss manuscripts from 100 collections (https://www.e-codices.unifr.ch/en).
8. Reference works for the field: Oxford Handbook of Latin Palaeography (eds. Coulson & Babcock, OUP 2020, https://doi.org/10.1093/oxfordhb/9780195336948.001.0001 - chapters include Hamesse on florilegia) is confirmed as a major handbook; Atiyeh (ed.), The Book in the Islamic World (SUNY 1995, reviews https://doi.org/10.2307/605271 and https://doi.org/10.1017/s0026318400033344) covers Islamic book culture; no dedicated "handbook of glosses/annotation" was found - the gap is filled operationally by the Glossing Network's resource list (https://www.glossing.org/articles/digital-editions).

## 4. Remaining gaps

- Full Bédier text: only the opening (p.161) retrievable from Persée HTML; PDF endpoint returns HTTP 403. Second part of the essay (deuxieme article) located only indirectly via the "(premier article)" label - page range unverified (ยังไม่พบข้อมูลยืนยัน).
- Cerquiglini: no open-access full text of Éloge de la variante found; substance rests on publisher record, reviews, and the translation record. Exact famous quotation not verified against primary text this session.
- E. Lobel and specific editorial essays: no dedicated source harvested this loop beyond general knowledge (ยังไม่พบข้อมูลยืนยัน for a citable URL).
- Pasquali 1934: publisher (Le Monnier, Firenze) not independently verified this session - only title/year via reviews.
- Quantitative codicology: primary monographs (e.g., the 1982 Essais volume itself) not identified beyond the Scriptorium record signed Gilmont; authorship structure unclear (likely a review/notice) (ยังไม่พบข้อมูลยืนยัน).
- Speculum 65.1 issue-level title ("The New Philology") not directly confirmed from the journal TOC; only individual article DOIs verified.
- Maas original German publication venue (Textkritik within Gercke-Norden, Einleitung in die Altertumswissenschaft) not independently verified this session.

## 5. Blocked sources (recorded honestly)

- websearch tool (Exa MCP): HTTP 429 on every call this session.
- OpenAlex API: daily budget exhausted ("Resets at midnight UTC").
- Persée PDF endpoint (/docAsPDF/...): HTTP 403 (HTML page accessible).
- e-codices "/en/about": HTTP 404 (main site fetched instead; About subpages listed in navigation).
- archive.org advancedsearch: functional but returned only unrelated YouTube records for the Cerquiglini query; no book scan located.
- DuckDuckGo HTML search: bot-challenge after two successful queries (Timpanaro query lost).
- glossit.eu root domain: transport error; project pages reachable instead at cordis.europa.eu/project/id/101123203 and glossit.uni-graz.at.

## Harvest documents

Stored in research-notes/loop_06/documents/:
- 1921-Housman-application-thought-textual-criticism.md (full essay)
- 1928-Bedier-tradition-manuscrite-lombre.md (bibliographic record + opening)
- 2023-Hofman-stgall-priscian-glosses.md
- 2024-Moran-gloss-corpus.md
- 2026-HMT-homermultitext-project.md
- 2026-TEI-Consortium-critical-apparatus.md (chapter excerpts)
