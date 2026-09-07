# Loop 22 — Phase B deep dive: European gloss philology gaps (sacred_text_gloss)

- Loop: 22 (sacred_text_gloss)
- Date executed: 2026-08-25
- Topic: Resolution of six flagged European items from earlier loops: (A) Henkel 1996 on OHG Interlinearversionen via FreiDok DOI 10.6094/UNIFR/10535; (B) wiki-derived "three preserved OHG renderings" of the Isidor group vs Krotz 2002/2013; (C) Blom, Glossing the Psalms (De Gruyter Mouton 2017), Chs 6 & 14; (D) Eadwine Psalter volume (Gibson/Heslop/Pfaff 1992); (E) Notker scholarship: King, Wailes, Tax's Notker latinus; (F) recent Aldred/Lindisfarne gloss-as-translation-practice scholarship.
- Method note: websearch provider rate-limited intermittently (HTTP 429); worked around by pacing searches and switching to direct fetches: DataCite API for UNIFR DOI, Crossref REST for book/chapter/review metadata, legacy FreiDok HTML page exposing citation_pdf_url, publisher preview PDFs, university repository PDFs (pure.rug.nl; ora.ox.ac.uk), Handschriftencensus and BStK Online records, Uni Vienna institute pages. Blocked this session: OpenAlex (quota), De Gruyter full texts (authentication), journals.dias.ie + dair.dias.ie + orca.cardiff.ac.uk (JS bot-wall / 403), JSTOR PDFs, vr-elibrary PDF (403), philpapers (403). Rule observed: only facts seen in fetched pages/API responses recorded; no Wikipedia citations used.

---

## Source table

| Author | Title | Year | Type | Publisher/Journal | DOI/ISBN | URL | Status |
|---|---|---|---|---|---|---|---|
| Nikolaus Henkel | Die althochdeutschen Interlinearversionen. Zum sprach- und literaturhistorischen Zeugniswert einer Quellengruppe [in: J. Heinzle ed., Übersetzen im Mittelalter. Cambridger Kolloquium 1994 = Wolfram-Studien XIV] | 1996 | Essay (Sonderdruck, OA deposit 2016) | Erich Schmidt Verlag, Berlin; vol. ISBN 3-503-03748-9; pp. 46-72; FreiDok DOI 10.6094/UNIFR/10535 | 10.6094/UNIFR/10535 | https://freidok.uni-freiburg.de/files/10535/lg4hdhChhBRryyaP/Henkel_Die_althochdeutschen_Interlinearversionen.pdf | FULL-FETCHED (PDF+text saved locally) |
| Elke Krotz | Auf den Spuren des althochdeutschen Isidor. Studien zur Pariser Handschrift, den Monseer Fragmenten und zum Codex Junius 25. Mit einer Neuedition des Glossars Jc | 2002 | Monograph (diss. LMU 1998) | Universitätsverlag Winter, Heidelberg (Beiträge zur älteren Literaturgeschichte); ISBN 9783825313630 | n/a | https://www.germ.univie.ac.at/publikation/auf-den-spuren-des-althochdeutschen-isidor/ | METADATA FULL-FETCHED (abstract verbatim; book not OA) |
| Elke Krotz | Isidor von Sevilla, 'De fide catholica', Althochdeutsche Übersetzung und 'Mon(d)seer Fragmente' [in: R. Bergmann ed., Althochdeutsche und altsächsische Literatur] | 2013 | Lexicon article | De Gruyter, Berlin/Boston (De Gruyter Lexikon), pp. 204-213 | n/a | via germ.univie.ac.at/elke-krotz publication list | METADATA VERIFIED |
| anon. (Uni Wien project page) | Die Monseer Fragmente: Edition, Übersetzung, Wörterbuch und Kommentar (DFG 68994184, 2008-2012; PI Stephan Müller; team Krotz/Rethage/Wegener) | 2026 view | Project description | Universität Wien Institut für Germanistik; edition "erscheint bei De Gruyter" | n/a | https://www.germ.univie.ac.at/projekt/monseer-fragmente/ | FULL-FETCHED |
| anon. | Handschriftencensus records: Paris BNF lat. 2326 (#15941) and 'Monsee-Wiener Fragmente' discissus (#11565) | 2024/2026 view | Manuscript database | Paderborner Repertorium-based HSC; Paris record authored Elke Krotz (Februar 2024) | n/a | https://handschriftencensus.de/15941 ; https://handschriftencensus.de/11565 | FULL-FETCHED (Paris record incl. layout: left column Latin, right column OHG) |
| Alderik H. Blom | Glossing the Psalms: The Emergence of the Written Vernaculars in Western Europe from the Seventh to the Twelfth Centuries | 2017 | Monograph | De Gruyter Mouton, Berlin/Boston; xvi+322 pp., 14 figs; ISBN 978-3-11-050037-0, e-ISBN 978-3-11-050186-5 | 10.1515/9783110501865 | https://www.degruyterbrill.com/document/doi/10.1515/9783110501865/html | METADATA + FRONTMATTER FULL-FETCHED (publisher preview PDF w/ complete TOC saved) |
| Kees Dekker | Review of Blom 2017 | 2022 | Review (OA publisher PDF) | NOWELE 75(1):116-122, John Benjamins | 10.1075/nowele.00065.ald | https://pure.rug.nl/ws/files/1036841669/nowele.00065.ald.pdf | FULL-FETCHED (saved locally) |
| Nike Stam | Review of Blom 2017 | 2019 | Review (OA, bot-blocked) | Celtica 31:315-321, DIAS | 10.58480/scs-tv9u6-hrztd | https://journals.dias.ie/index.php/celtica/article/view/117 | ABSTRACT VIA CROSSREF ONLY |
| Dagmar S. Wodtko | Review of Blom 2017 | 2018 | Review | Zeitschrift für celtische Philologie 65(1):135-137 | 10.1515/zcph-2018-650108 | degruyterbrill.com | METADATA ONLY |
| Margaret Gibson, T. A. Heslop, Richard W. Pfaff (eds) | The Eadwine Psalter: Text, Image, and Monastic Culture in Twelfth-Century Canterbury | 1992 | Edited volume | MHRA (PMHRA 14) co-op. Pennsylvania State University Press; xvii+228 pp.+48 plates; ISBN 0-947623-46-9 / 0-271-00837-7; OCLC 24468570 | n/a | https://www.mhra.org.uk/publications/Eadwine-Psalter | VERIFIED (publisher page + collation + full chapter list) |
| Marcia Kupfer | Review of Gibson/Heslop/Pfaff | 1994 | Review | Speculum 69(4):1168-1171 | 10.2307/2865644 | uchicago.edu | METADATA VIA CROSSREF |
| James C. King, Petrus W. Tax (eds) | Die Werke Notkers des Deutschen. Neue Ausgabe (multi-volume; ATB vols 73, 81, 84, 87, 94, 98, 109, 117, 120, 122 etc.) | 1972-2003+ | Critical editions + Notker latinus volumes | Max Niemeyer Tübingen / now De Gruyter | various 10.1515/... | https://www.degruyterbrill.com/serial/notker-b/html | SERIAL PAGE FULL-FETCHED |
| Heinrich Götz | Review of King/Tax, Die kleineren Schriften (ATB 109, 1996) | 1999 | Review notice | Zeitschrift für deutsche Philologie 1/1999:115-118 | 10.37307/j.1868-7806.1999.01.09 | zfdphdigital.de | FULL NOTICE FETCHED |
| James C. King | Notker's Accentuation System in His Translations of Aristotle's 'Categories' and 'De interpretatione' | n.d. [Speculum, mid-20th c.] | Journal article | Speculum (JSTOR stable/3716096) | n/a | jstor.org/stable/3716096 | TITLE+JOURNAL VERIFIED; vol/year STILL OPEN |
| Christine Hehle | Boethius in St. Gallen. Die Bearbeitung der 'Consolatio Philosophiae' durch Notker Teutonicus zwischen Tradition und Innovation (MTU 122) | 2002 | Monograph | Max Niemeyer, Tübingen; XII+401 pp. | n/a | via Crossref reviews 10.1515/bgsl.2004.523 | VERIFIED |
| Julia Fernández Cuesta, Sara M. Pons-Sanz (eds) | The Old English Gloss to the Lindisfarne Gospels: Language, Author and Context | 2016 | Edited volume | De Gruyter Mouton; ISBN 978-3-11-043856-7 | chapter DOIs 10.1515/9783110449105-* | api.crossref.org filter query | FULL CHAPTER LIST FETCHED (25 records) |
| Stewart Brookes | The Shape of Things to Come? Variation and Intervention in Aldred's Gloss to the Lindisfarne Gospels [in Fernández Cuesta/Pons-Sanz eds., pp. 103-150] | 2016 | Chapter (OA ORA copy = whole-chapter PDF) | De Gruyter | 10.1515/9783110449105-010 | https://ora.ox.ac.uk/objects/uuid:20c8fdd2-1bd4-4d39-9019-932cfc6c9cd7 | FULL-FETCHED (saved locally) |
| Sara M. Pons-Sanz | A Study of Aldred's Multiple Glosses to the Lindisfarne Gospels [same volume, pp. 301-328] | 2016 | Chapter (OA preprint blocked) | De Gruyter | 10.1515/9783110449105-018 | https://orca.cardiff.ac.uk/id/eprint/85937/ | METADATA ONLY (403 all attempts) |
| Elisa Ramirez Perez | A conditioned scribe: multiple interlinear glosses to the Lindisfarne Gospels; Multilingualism in Anglo-Saxon England (blog essays grounded in her PhD) | 2022 | Public-facing research blog | Leiden Medievalists Blog | n/a | leidenmedievalistsblog.nl | FULL-FETCHED |

Contextual records verified but not load-bearing: V. Schupp Freidok essay citing Henkel 1996 (storage.freidok PDF, fetched excerpt); Hans Eggers ed., Der althochdeutsche Isidor (ATB 63, Tübingen 1964); Klaus Matzel, Untersuchungen zur Verfasserschaft, Sprache und Herkunft der althochdeutschen Übersetzungen der Isidor-Sippe (Rheinisches Archiv 75, Bonn 1970); Hench 1893 Isidor facsimile edition (QF 72); Wich-Reif review of Krotz 2002 (ZfdA 134 [2005], 81-87); Krotz/Kaska, Ein neues Monseer Fragment (ZfdA 145 [2016], 82-88); Bisagni review of Blom (Études Celtiques 47 [2021], 257-262).

Local documents saved under loop_22\documents\: henkel_1996 PDF+TXT; 2022-dekker-review PDF+TXT; 2017-blom publisher-preview PDF+TXT; 2016-brookes chapter PDF+TXT; five per-target notes.

---

## Per-target verdicts

### (A) Henkel 1996 — VERIFIED, upgraded to FULL-FETCHED
- Citation confirmed exactly as flagged: Wolfram-Studien 14 (= Übersetzen im Mittelalter, Cambridger Kolloquium 1994, hrsg. Joachim Heinzle), Erich Schmidt Verlag Berlin 1996, pp. 46-72, volume ISBN 3-503-03748-9.
- Access route that worked: DataCite record -> legacy FreiDok URL www.freidok.uni-freiburg.de/volltexte/10535/ -> citation_pdf_url meta tag -> direct storage link. Current FreiDok SPA pages hide everything without JS; the legacy path is the reliable one. Deposit date 2016-01-08; DOI registered with DataCite 2016-01-12.
- Content captured (see document note): opening interlinear Luke 2:8-11 device; corpus with sigla (B Benediktinerregel St. Gallen Cod. 916 early 9th c.; APs Altalemannische Psalmenübersetzung 2nd third 9th c.; RhC Rheinfränkische Cantica ca. 1000; MH Murbacher Hymnen 1st quarter 9th c.; LG St. Pauler Lukasglossen; plus C Carmen ad Deum, T Tatian; late WPs Windberger Psalter, ZB Zwiefaltener Benediktinerregel); thesis shift from Sonderegger's "first stage of German translation" communis opinio to Bischoff's position ("Interlinearversionen dienen dem Verstehen des Lateinischen, nicht dem Übersetzen"); glossing as instrumentarium of Erschließung; conclusion: all OHG interlinear versions up to early 13th c. are monastic (mostly Benedictine), serve liturgy (Psalter/Cantica/hymns) and Rule, do NOT aim at translating for illitterati, form no horizontal text but vertical interpretamenta per lemma, and are the written fix part of an oral appropriation process; literary history must use functional category of Erschließung instead of source/target-language translation categories.

### (B) Isidor group "three preserved OHG renderings" — PARTIALLY RESOLVED (claim needs rephrasing)
- Krotz 2002 fully identified (Winter, BLG series, ISBN 9783825313630; diss. LMU 1998) with verbatim abstract; Krotz 2013 identified as her Bergmann lexicon chapter pp. 204-213 (plus Ja/Jb/Jc articles pp. 213-217).
- What is true per fetched sources: the OHG De-fide-catholica translation survives in TWO branches (Paris lat. 2326 ff. 1r-22r bilingual two-column Latin-left/OHG-right, breaks off; Monsee fragments). Eggers' ATB title states exactly this pairing. A THREE-unit group is real: Paris codex + Monsee fragments + Oxford Codex Junius 25 (Krotz subtitle; Matzel's "Isidor-Sippe" plural translations). No fetched source supports a count of "three renderings" of a single treatise.
- Bonus updates: new Monsee fragment published (Krotz/Kaska ZfdA 145 [2016]); full modern edition of the Monseer Fragmente announced/forthcoming at De Gruyter (DFG project 2008-2012 completed).

### (C) Blom 2017 — VERIFIED (metadata + structure + typology through open review)
- Ch. 6 "Introduction to Interlinear Versions" pp. 131-140 and Ch. 14 "Interlinear Versions: Conclusion" pp. 241-242 confirmed exactly as claimed; they frame Part II (Chs 7-13: Old Alemannic Psalter Fragments, Vespasian, Lublin/Wittenberg, Regius, Paderborn, Lambeth, Old Frisian Psalter Fragment — seven West Germanic interlinear versions).
- Typology documented via complete TOC (preview PDF): substitution/supplement/commentary gloss triad (Ch. 2.4, repeated as Appendix); interlinear version defined p. 131 as "more or less complete word-for-word, or better form-for-form transfers into another language or register, provided interlinearly to a, generally Latin, principal text"; horizontal/proto-translation vs vertical/reading-aid debate with oral component (per Dekker review); Ch. 14 conclusion: variety NOT chronological but cultural/geographical; 'the purpose' question obsolete.
- Book not OA; no OA chapters. Open reviews: Dekker (NOWELE 75[1] 2022, full text saved); Stam (Celtica 31 [2019], OA at DIAS but bot-blocked; abstract via Crossref); Wodtko (ZcP 65, gated); Bisagni (EC 47 [2021]).

### (D) Eadwine Psalter 1992 — VERIFIED
- Full bibliographic details pinned: PMHRA 14, MHRA co-op. Penn State UP, 1992, xvii+228 pp.+48 plates, dual ISBNs 0-947623-46-9 and 0-271-00837-7; manuscript Cambridge Trinity College MS R.17.1.
- Contents relevant to gloss studies: five psalm versions (three Latin + OE interlinear + Anglo-Norman); O'Neill's Chapter VI treats the OE version's relationship to other OE psalter glosses, sources (*Ead main source, D-Type psalter), stages of copying, cultural context.
- Reviews cited via Crossref/publisher pages: Kupfer (Speculum 69[4] 1994:1168-1171, 10.2307/2865644); Barker-Benfield (JEH 45 [1994]); de Hamel (1994, JSTOR 43629658). Texts gated this session; archive.org lending copy exists (bwb_C0-AOF-869).

### (E) Notker Labeo — MOSTLY RESOLVED (Wailes still unverified)
- Edition framework verified from De Gruyter serial page: Die Werke Notkers des Deutschen. Neue Ausgabe (King & Tax; ATB); Notker latinus authorship split: Boethius CPh latinus vols 1A/2A/3A = Tax alone (ATB 120/…/122); Martianus latinus 4A = King (ATB 98); smaller writings latinus 7A = King & Tax (ATB 117, Niemeyer 2003). Downstream citations must assign per volume, not simply "Tax".
- King's own studies verified: PhD diss. "Two Dualisms in the Syntax of Notker Teutonicus" (GWU 1954, via Springer citation); article "Notker's Accentuation System in His Translations of Aristotle's 'Categories' and 'De interpretatione'" (Speculum; JSTOR 3716096; first sentence captured) — volume/year open.
- Added citable monograph: Christine Hehle, Boethius in St. Gallen (MTU 122, Niemeyer 2002, XII+401 pp.), verified via two Crossref-indexed reviews.
- Stephen Wailes: NO Notker-related work found across four targeted searches (PhilPapers 403). Treat any prior attribution as unsupported.

### (F) Aldred/Lindisfarne gloss as translation practice — RESOLVED with strong recent anchors
- Anchor volume fully mapped via Crossref: Fernández Cuesta & Pons-Sanz eds. (De Gruyter 2016), 15 chapters incl. Brown (Aldred's agenda), Roberts (book historian), Rusche (Southumbrian glossing tradition/Benedictine Reform), Brookes (variation & intervention), Pons-Sanz (multiple glosses), Lendinara (unglossed words), Jolly (glossing as process, Durham Ritual).
- Brookes chapter full-fetched (script experimentation, archaizing letter-forms, intervention as part of gloss practice). Pons-Sanz chapter exists as OA preprint but Cardiff ORCA 403'd all attempts.
- Additional recent public scholarship captured: Ramirez Perez on morphological priming in Aldred's multiple glosses and double-gloss handling of Latin homonyms (sero example), Norse loans as integrated idiolect items.
- Convergence noted: recent Anglo-Saxon work frames Aldred's gloss as multi-layered practice (substitution/supplement/multiple glosses + script/layout intervention + agenda), matching Henkel's functional Erschließung model and Blom's vertical/horizontal discussion — good triangulation for the project typology.

---

## Reconciliation notes for earlier loops

1. Henkel 1996 row can be upgraded from citation-only to FULL TEXT IN HAND; cite FreiDok DOI 10.6094/UNIFR/10535 + original Wolfram-Studien venue.
2. Any sentence asserting "three preserved OHG renderings" of Isidor should be replaced: either "the OHG Isidor translation survives in two transmission branches (Paris manuscript and Monsee fragments)" (cite Eggers 1964 title, Krotz 2013) or "the Isidor group comprises three manuscript units: Paris BNF lat. 2326, the Monsee fragments, and Oxford, Bodleian, Junius 25" (cite Krotz 2002 subtitle).
3. "Notker Latinus by Petrus W. Tax" must be narrowed: Tax authored the Boethius CPh commentary volumes only; King authored the Martianus latinus; 7A is joint.
4. Blom chapters claim (6 & 14) confirmed correct as stated; add that individual interlinear versions are treated in Chapters 7-13.
5. Eadwine Psalter bibliographic details now safe to cite with dual publisher/ISBN; use O'Neill 1992 chapter for the OE version.

## Method constraints (for audit trail)

- websearch provider returned 429 intermittently; ~8 successful queries total. OpenAlex quota-exhausted. De Gruyter content requires authentication (no OA chapters found for Blom 2017 or Lindisfarne 2016 volume beyond what repositories mirror). JS/bot walls: freidok SPA (worked around via legacy volltexte page + jsonApi config endpoint), journals.dias.ie/dair.dias.ie, orca.cardiff.ac.uk, philpapers.org, jstor pdfplus, vr-elibrary PDF. No OCR needed anywhere: every downloaded PDF had a text layer (Henkel Sonderdruck is born-text scan with clean OCR-quality layer).
- FreiDok technical note for future loops: JSON API lives at https://freidok.uni-freiburg.de/jsonApi/v1/publications?doi=...&maxRows=N (Solr-style docs), but full-text discovery is fastest via legacy https://www.freidok.uni-freiburg.de/volltexte/{ID}/ which exposes citation_pdf_url.

## Open questions

1. Henkel 1996: does his Ch. 6-equivalent apparatus cite Bischoff 1971 directly (yes - footnote 18, verified) and does Blom 2017 Ch. 6 engage Henkel 1996 at all? (Blom Ch. 6 footnotes unchecked - paywalled; check next library session.)
2. King's Speculum accentuation article: exact volume/year/pages (JSTOR 3716096) - pin via JSTOR citation export or Medium Aevum/Monumenta Germaniae indices.
3. Stam's Celtica review content (DIAS bot-wall) - retry later or request via repository contact; also Bisagni 2021 review.
4. Whether the forthcoming Krotz edition of the Monseer Fragmente has since appeared at De Gruyter (Vienna page says "erscheint"); verify publication status before citing as forthcoming.
5. Wailes-Notker attribution: resolve against MLA International Bibliography offline; if nothing, delete from project notes.
6. Exact extent discrepancy for Blom 2017 (xvi+322 vs xvi+332 vs 338 pp.) - settle against physical copy or DNB record.
