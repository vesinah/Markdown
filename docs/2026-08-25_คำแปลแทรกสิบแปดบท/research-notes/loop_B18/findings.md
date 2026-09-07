# Loop B18 Findings

Date: 2026-08-26

Phase-B precision pass closing the Egyptian-glossing gaps left open by Phase A loop 26 (Feder's Coptic-gloss study; Miyagawa-Sawy full paper; P.Bingen bilingual school text; Amduat formal scholia; Osing 1998 Tebtunis onomasticon).

## Queries executed

Web search tool: HTTP 429 rate-limited all session (same as loop 26). Main channel again = DuckDuckGo lite via r.jina.ai proxy; direct HTTPS fetches where possible.

1. DDG-lite/proxy: Miyagawa Sawy "Interlinear Glossing on Coptic Text" -> found somiyagawa.com/papers (CV) + academia.edu item.
2. Fetch somiyagawa.com/papers (raw UTF-8): confirmed LiTGaP 2020 talk entry, Yamagata University, 2020-02-23, English; plus second Miyagawa-Sawy talk (Japan Society for Oriental Studies 64th congress, 2022-10-30).
3. DDG-lite: "Frank Feder" Coptic glosses OR Glossen Bible manuscripts -> hit Claremont Coptic Encyclopedia UPDATE entry (ccdl.claremont.edu id 2188) whose author keywords include "Coptic Glosses in Greek Bible Manuscripts".
4. Downloaded + text-extracted the Feder CCE PDF (27 pp., dated 22 November 2023); extracted section 2.1 and the full bibliography (Bell-Thompson 1925; Wagner 2021; Feder 2020c etc.).
5. Semantic Scholar Graph API paper/search: 429 twice (start and after delay). OpenAlex API: 429 both attempts.
6. Crossref REST: query.author=van Rossum-Talsma (no papyrology hits); query.bibliographic=Bingen+Demotic+bilingual+papyrus (SEG noise only); query.author=Bingen+Jean query.bibliographic=papyrus+scolaire+bilingue+demotique -> HIT: "L'exercice scolaire PUG II 53", CdE 57 (1982), DOI 10.1484/j.cde.2.308582; fetched full record.
7. DDG-lite: PUG "Universita di Genova" papyri -> found official catalog pug.unige.net; fetched /Papiro, discovered search URL scheme (/Papiro?numeroPug=N); fetched record for numeroPug=53 -> detail page d634ff58-beaa-48b0-a693-ef2a2f500c6e = PUG II 53, Greek school exercise (NOT bilingual), TM 63099, LDAB 4302, MP3 2665.2.
8. DDG-lite: Sorbonne/French + German/Italian phrasings for bilingual Demotic-Greek school exercise (all negative or irrelevant); site:pug.unige.net scolaire/bilingue (irrelevant); site:papyri.info bilingual Demotic school exercise (no match); "P.Turner" honor volume angle (negative).
9. DDG-lite: escholarship UEE Amduat netherworld books; Amduat scholia/Scholien KV34 (both negative); escholarship.org/search?q=Amduat (23 results, no UEE Amduat article surfaced).
10. archive.org advancedsearch: Hornung afterlife/amduat/netherworld -> two scans of The Ancient Egyptian Books of the Afterlife (1999); djvu.txt downloads blocked (403/401 lending restrictions); fulltext inside.php endpoint refused (403 / no-hOCR errors).
11. Re-downloaded Joergensen 2014 thesis PDF from curis.ku.dk (worked); extracted von Lieven typology passage (p. 189 note 761), supralinear-gloss passages on Tebtunis onomasticon, BD 17 commentary discussion.
12. DDG-lite: BMCR/sehepunkte von Lieven Grundriss review -> bibliographic corroboration of von Lieven 2007 (CNI Publications 31, Museum Tusculanum Press, 456 pp.; JSTOR review stable/23862118; JNES review DOI 10.1086/666918). JSTOR PDF fetch itself blocked (3KB error page).
13. DDG-lite: Osing "Hieratische Papyri aus Tebtunis" onomasticon -> Google Books, Open Library, HathiTrust, Meretseger Books entries; Heidelberg propylaeumdok Leitz review landing page (PDF behind Anubis bot wall).
14. Fetched Academia.edu landing page of Miyagawa & Sawy via r.jina.ai proxy -> FULL ABSTRACT captured without login (manuscript shelfmarks included).

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| F. Feder | Old Testament, Coptic Versions of the: Update (Claremont Coptic Encyclopedia) | 2023 (22 Nov) | https://ccdl.claremont.edu/digital/api/collection/cce/id/2188/download | Section 2.1 "The oldest witnesses of Coptic biblical translations: Coptic glossing to Greek biblical texts": Chester Beatty VII Isaiah TM 61951 (ca. 30 Fayyumic/Mesokemic glosses, Greek letters only); Freer Minor Prophets W TM 61966 (ca. 20 Sahidic glosses); BM EA 10825 Greek-Coptic glossary to Hosea-Amos TM 61982 (Mesokemic, Bell-Thompson 1925) |
| N. E. Wagner | The Grammarian's Bible: Scholarship in the Margins of the Septuagint (PhD diss., Duke) | 2021 | https://www.academia.edu/49428382/The_Grammarians_Bible_Scholarship_in_the_Margins_of_the_Septuagint | Monograph-scale study of Septuagint marginalia incl. the Coptic glosses in MS 965 and MS W (cited by Feder at pp. 274-275, 293-295, 406-407) |
| H. I. Bell; H. Thompson | A Greek-Coptic Glossary to Hosea and Amos, JEA 11 | 1925 | (bibliographic, cited in Feder CCE bibliography) | Editio princeps of BM EA 10825 bilingual glossary |
| F. Feder | Die aeltesten Textzeugen der koptischen Septuaginta-Uebersetzung (in Die Septuaginta - Themen, Manuskripte, Wirkungen, WUNT 444, Mohr Siebeck, 643-660) | 2020c | (bibliographic, from CCE bibliography) | Feder's specific study of the oldest witnesses of the Coptic LXX - the gloss material discussed at pp. 644-646 |
| S. Miyagawa; M. Sawy | Interlinear Glossing on Coptic Text: Past, Present, and Future | 2019/2020 | https://www.academia.edu/44914464/... ; CV: https://somiyagawa.com/papers | Full abstract now open: BAV MS Copt. 14 (Bohairic Pauline/Catholic/Acts, Arabic interlinear above every word/phrase) + Berlin Staatsbibliothek Or. Quart. 159 (Bohairic Psalms, same); modern Lingua Aegyptia/Grossman-Haspelmath-Richter 2015 practice; Coptic Scriptorium ANNIS layers lacking morpheme-meaning gloss; proposal for a Coptic glossing standard. Talk: LiTGaP 2020, Yamagata Univ., 2020-02-23 |
| J. Bingen | L'exercice scolaire PUG II 53, Chronique d'Egypte 57 (113), 107-110 | 1982 | DOI 10.1484/j.cde.2.308582 ; catalog https://pug.unige.net/pug;II;53 | Bingen's actual school-text publication = PUG II 53 (Genoa inv. DR 1v): Greek alphabetical two-syllable word-list exercise, mid-1st c. CE, LDAB 4302, MP3 2665.2, TM 63099 - NOT bilingual |
| — | Papiri dell'Universita di Genova online catalog | current | https://pug.unige.net/ | Collection TM coll. 138, ~400 fragments mostly Greek documentary; server-rendered records with images, TM/PN links |
| J. Osing | Hieratische Papyri aus Tebtunis I (Carlsberg Papyri 2; CNIP 17), Copenhagen: Museum Tusculanum Press | 1998 | https://books.google.com/books/about/Hieratische_Papyri_aus_Tebtunis_I.html?id=85RTbp2NtgwC ; https://openlibrary.org/books/OL100615M ; https://catalog.hathitrust.org/Record/004032200 | Five Roman-period hieratic papyri (four from Tebtunis temple library): dictionary of classical Middle Egyptian, lexical lists, sacerdotal manuals, two parallels of Tanis Geographical Papyrus, religious calendar; 310 pp. text volume |
| C. Leitz | Review of Osing 1998, Bibliotheca Orientalis 57, 270-278 | 2000 | https://archiv.ub.uni-heidelberg.de/propylaeumdok/3193/ (metadata; PDF bot-blocked) | Independent confirmation of publication details; DOI 10.11588/propylaeumdok.00003193 |
| J. B. Joergensen | Egyptian Mythological Manuals (PhD thesis, Copenhagen) | 2014 | https://curis.ku.dk/ws/portalfiles/portal/462038803/Ph.d._2014_J%C3%B8rgensen.pdf | Verbatim anchors: Tebtunis onomasticon "hieroglyphic but with supralinear comments made in Demotic and old Coptic"; wHa itnw applied to it; Osing 1998:68 as source; von Lieven primary/secondary comments typology (2007, 263-264); BD 17 commentary tradition with ky-Dd variant markers |
| A. von Lieven | Grundriss des Laufes der Sterne: Das sogenannte Nutbuch (Carlsberg Papyri 8; CNI Publications 31) | 2007 | biblio corroborated by JNES review DOI 10.1086/666918; JSTOR review stable/23862118 | New Kingdom Book of Nut re-edition incl. commentary tradition; typology primary vs secondary comments |
| — | LiTGaP 2020 conference pages (Glottopedia, hiphilangsci, LINGUIST List 30.3230) | 2019-2020 | http://glottopedia.org/index.php/Glottopedia:LiTGaP2020 ; https://linguistlist.org/issues/30/3230/ | Conference facts: Japanese Linguistics Internationalization Committee; Denkoku no Mori, Yonezawa, Yamagata; Feb 22-24 2020 |

## Key findings (with URLs)

1. GAP CLOSED - Feder's exact study identified (two concrete publications):
   (a) Frank Feder, "Old Testament, Coptic Versions of the: Update", Claremont Coptic Encyclopedia, updated 22 Nov 2023 - contains dedicated section 2.1 "The oldest witnesses of Coptic biblical translations: Coptic glossing to Greek biblical texts", with three fully specified witnesses: Chester Beatty VII Greek Isaiah (TM 61951 / LXX 965; ca. 30 Coptic annotations in Greek letters; barely standardized Fayyumic with Mesokemic influence); Freer Minor Prophets codex W (TM 61966; ca. 20 standardized Sahidic glosses, possibly copied from Sahidic biblical manuscripts per Wagner); British Museum EA 10825 (TM 61982; Greek-Coptic glossary to Hosea/Amos in columns, Mesokemic, recto land-register ca. 200 CE). https://ccdl.claremont.edu/digital/api/collection/cce/id/2188/download
   (b) Frank Feder, "Die aeltesten Textzeugen der koptischen Septuaginta-Uebersetzung", in Die Septuaginta - Themen, Manuskripte, Wirkungen (WUNT 444, Tuebingen: Mohr Siebeck 2020), 643-660 - cited within section 2.1 (pp. 644-646) for the pharaonic antecedents of glossing. Deeper literature anchor also secured: N. E. Wagner, "The Grammarian's Bible: Scholarship in the Margins of the Septuagint" (PhD diss., Duke 2021).

2. GAP SUBSTANTIALLY CLOSED - Miyagawa & Sawy: venue verified (conference TALK at LiTGaP 2020, First International Conference on Linguistic Terminology, Glossing and Phonemicization, Yamagata University/Yonezawa, delivered in English on 2020-02-23; Academia upload dated 2019 by platform). FULL ABSTRACT captured openly via text-proxy fetch of the Academia page - names the two medieval manuscripts precisely: BAV MS Copt. 14 (Bohairic Pauline Epistles, Catholic Epistles, Acts; later-added Arabic glosses above every Coptic word/phrase) and Berlin Staatsbibliothek Or. Quart. 159 (Bohairic Psalms with Arabic interlinear glosses); surveys Lingua Aegyptia and Grossman/Haspelmath/Richter 2015 glossing practice; diagnoses Coptic Scriptorium's missing morpheme-meaning layer and proposes a standard. Full PDF still login-walled (1-page item).

3. NEGATIVE RESULT DOCUMENTED - "P.Bingen 123"/"P. Sorbonne" hypothesis: no such series item exists in any consulted index. Bingen's actual school-text article is "L'exercice scolaire PUG II 53" (CdE 57 [1982] 107-110, DOI 10.1484/j.cde.2.308582), and PUG II 53 is officially catalogued as a GREEK alphabetical word-list exercise (Genoa inv. DR 1v; mid-1st c. CE; LDAB 4302; MP3 2665.2; TM 63099; https://pug.unige.net/pug;II;53). It cannot serve as evidence of Greek-Demotic bilingual schooling. The specific famous bilingual Greek-Demotic school text remains unverified this loop (ยังไม่พบข้อมูลยืนยัน).

4. GAP CLOSED (accessible statement secured) - Scholia/commentary layers in funerary/learned manuscripts: von Lieven's typology verbatim via open-access Joergensen thesis (curis.ku.dk): "commentaries should be divided into primary and secondary comments, in which the first are those comments that are already found in the original text, and secondary those added in the course of the text's transmission" (Grundriss des Laufes der Sterne [2007], 263-264). BD 17 documented as THE commented funerary spell (ky-Dd/ky-sp variant markers; Assmann's "same level as main text" characterization; Roessler-Koehler 1995). Amduat apparatus documented (long vs short catalogue version; 741-deity KV34 catalogue; red rubrics; Hornung 1963-67 edition with commentary; Texte zum Amduat 1987-94) - but NO accessible source defining formal Amduat "Scholien" was found, honestly recorded. Hornung's Books of the Afterlife scans exist on archive.org yet their OCR is lending-restricted.

5. GAP CLOSED - Osing 1998 publication record fully verified across four independent catalogs (Google Books, Open Library, HathiTrust, bookseller series data CNIP 17): Hieratische Papyri aus Tebtunis I = Carlsberg Papyri 2, Museum Tusculanum Press 1998, 310 pp. + plates, five Roman-period hieratic papyri (four from Tebtunis temple library; dictionary of Middle Egyptian, lexical lists, materia-sacra manuals, religious calendar, two parallels of the Geographical Papyrus of Tanis). Content description of the supralinear glosses corroborated by the open-access Joergensen thesis citing Osing 1998: 68 ("running supralinear additions in demotic and proto Coptic that provided the reader with both translation and a pronunciation aid"; script "hieroglyphic but with supralinear comments made in Demotic and old Coptic"). Review located: C. Leitz, BibOri 57 (2000) 270-278 (repository metadata; PDF bot-blocked).

## Gaps closed vs remaining

Closed this loop:
- Gap 1 (Feder exact study): CLOSED - see Key finding 1.
- Gap 2 (Miyagawa & Sawy substance): SUBSTANTIALLY CLOSED - venue, date, language, co-author affiliation (Goettingen), and complete abstract incl. both shelfmarks; only the 1-page PDF body remains login-walled.
- Gap 4 (Amduat scholia statement): CLOSED at the level requested (accessible statements on scholia/commentary layers verified); formal Amduat scholia definition remains an open Egyptological point recorded honestly.
- Gap 5 (Osing 1998): CLOSED.

Remaining:
- Gap 3 core object: the "famous Greek-Demotic bilingual school text published in Bingen's volume" - NOT FOUND; both candidate designations disproven/unverified (PUG II 53 is Greek-only; no "P.Bingen" series numbering found). Next leads for any future loop: Depauw, A Companion to Demotic Studies (PB 28, 1997; archive.org scan has no OCR - needs manual reading of its school-texts section); Menchetti's Demotic school exercises (EVO 30 [2007]); Cribiore 1996 catalog numbers of bilingual exercises; Trismegistos direct access once CAPTCHA can be passed.
- Miyagawa & Sawy PDF body (beyond abstract) - low priority given 1-page length and full abstract captured.
- Page-level quotes from Hornung 1999 (archive.org OCR restricted).

## Blocked sources (recorded honestly)

- websearch tool (Exa MCP): HTTP 429 entire session
- api.openalex.org: 429 (two attempts)
- api.semanticscholar.org: 429 (two attempts, spaced)
- trismegistos.org: 403 + CAPTCHA (direct AND via r.jina.ai); dataservices texresponder.php: 404
- papyri.info/docs/checklist: Anubis bot-wall via proxy (though papyri.info/hgv/* worked via proxy earlier in session)
- brepolsonline.net: 403
- jstor.org PDF: returned 3KB error page (paywall)
- archive.org file downloads for lending items ancientegyptianb00horn / ancientegyptianb0000horn: 401/403; fulltext inside.php: 403/"No hOCR" errors
- archiv.ub.uni-heidelberg.de (propylaeumdok): Anubis bot-wall (Leitz review PDF not retrievable)
- scholar.google.com: 403 (automated-query refusal, even via proxy)
- googleapis.com/books/v1: 429
- academia.edu: full PDF download requires login (landing page + abstract retrievable via r.jina.ai)

## Harvested documents in this folder

1. 2023-Feder-CopticGlossesCCE.md - Feder CCE Update section 2.1 content + extracted bibliography (gap 1)
2. 2019-MiyagawaSawy-CopticInterlinearGlossing.md - full abstract, venue verification, shelfmarks, access status (gap 2)
3. 1982-Bingen-PUGIISchoolExercise.md - Bingen article record + PUG II 53 catalog record + negative-result trail (gap 3)
4. 2007-vonLieven-ScholiaCommentaryTypology.md - verbatim typology statement, BD 17 commentary, Amduat apparatus, Hornung bibliographic note (gap 4)
5. 1998-Osing-TebtunisHieraticPapyri.md - publication-record bundle across catalogs + gloss-content citations (gap 5)
