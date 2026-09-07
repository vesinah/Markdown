# Loop 27 Findings — Homeric scholia in depth: Venetus A, Townley Iliad, Alexandrian sign transmission, exegetical layers

Date: 2026-08-26 (single foraging loop)

Scope: RQ1 structure and named sources of the Venetus A scholia; RQ2 Iliad scholia families and Venetus B / Townley lineages; RQ3 Alexandrian scholarship surviving into the scholia (Aristonicus, Didymus, Schironi's work); RQ4 scholia minora / mythographical / D-scholia as lexical-gloss tradition; RQ5 marginalia on Homer papyri from Hellenistic/Roman Egypt (McNamee); RQ6 modern editions and digital projects (Erbse Teubner, Homer Multitext, Venetus A facsimiles).

## Queries executed

Web search UI (rate-limited, no results obtained):
- "Venetus A Marcianus Graecus Z.454 scholia intermarginal exterior interlinear structure Homer Multitext" (HTTP 429)
- "Venetus A scholia structure intermarginal exterior interlinear Didymus Aristonicus Herodian Nicanor Homer Multitext" (HTTP 429)

OpenAlex REST API (blocked):
- works?search=Venetus A scholia Iliad interlinear — rejected: "Insufficient budget ... Rate limit exceeded" (daily budget exhausted).

Crossref REST API (worked, throttled occasionally):
- query=Erbse+scholia+Graeca+Iliadem
- query.bibliographic=Schironi+Best+of+the+Grammarians+Aristarchus
- query.bibliographic=McNamee+sigla+marginalia+Greek+literary+papyri
- query.bibliographic=scholia+minora+D+Homeric+vocabulary+glosses
- query.bibliographic=Schironi+Aristarchus+Iliad+grammarians
- query.bibliographic=Schironi+Didymus+hypomnemata
- query.bibliographic=Aristonicus+signs+Iliad+scholia
- query.bibliographic=Ancient Scholia to Homer's Iliad (chapter sweep, select=DOI,title)
- single-DOI lookups: 10.1017/s0009838815000233; 10.1017/9781009547369

Semantic Scholar Graph API (throttled):
- paper/search?query=D-scholia Iliad vocabulary scholia minora
- paper/search?query=Venetus A scholia Didymus Aristonicus Herodian Nicanor (HTTP 429)

Internet Archive APIs:
- advancedsearch.php: Homeri Ilias scholiis / "codicis Veneti" homeri / Comparetti Vitelli Homeri Ilias / Townleyana Homeri Iliadem / Erbse scholia Graeca Iliadem
- metadata for identifiers aristoniciperis00arisgoog (hit), homeriiliascumsc01comp and scholiagraecainh01maas (empty metadata — wrong guessed IDs)
- download of aristoniciperis00arisgoog_djvu.txt (OCR unusable for Greek)

Wayback Machine:
- availability for marciana.venezia.sbn.it (snapshot 2021-01-07 fetched); CDX query for *omer* URLs timed out (504)

Direct fetches:
- homermultitext.org: index.html, texts.html, facsimile/ (app shell only), homer-papyri/ (404)
- github.com/homermultitext: hmt-archive tree + codices/*.cex headers (vapages, vbpages, burney86pages, e3pages, e4pages, laur32pages, marc841pages) + iiif/ listing; hmt-web md/VenA-Introduction-2014.md; homeric_papyri README.md
- chs.harvard.edu Recapturing a Homeric Legacy book page (JS-limited landing content)
- classical-inquiries.chs.harvard.edu search + Nagy "An Experiment in the Making of a Homer Commentary"
- doi.org/10.1017/9781009547369 and cambridge.org product page (Beck 2025)
- bl.uk manuscripts FullDisplay.aspx?ref=Burney_MS_86 (redirected to generic digitised-manuscripts landing; cyberattack notice)
- blogs.bl.uk guessed Townley Homer post (404)
- uni-koeln.de phil-fak ifa vanthiel (404); kups.ub.uni-koeln.de DSpace/simple-search endpoints (400/404)
- marciana.venezia.sbn.it live site: TLS trust failure in two independent clients
- downloads: homermultitext.org/texts/venetus-a-by-zone.md (full, 3.7 MB); archive.org Friedlaender OCR (unusable)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Casey Dué; Mary Ebbott | An introduction to the Homer Multitext edition of the Venetus A manuscript of the Iliad (HMT website essay, last updated 2014-12-06) | 2014 | https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/VenA-Introduction-2014.md | Core source: manuscript description (Marciana 822 = Marcianus Graecus Z.454, 10th c., 327 folios, Bessarion provenance); five zones of scholia (main, intermarginal, interior, exterior, interlinear); end-of-book subscription naming Aristonicus' Signs, Didymus On the Edition of Aristarchus, Herodian's prosody, Nicanor's punctuation (Greek text quoted, folio 24r); critical signs from Aristarchus; D-scholia re-attribution (Nagy 2004); Porphyry material; bT family = Venetus B (Marciana 821), Townley MS (BL Burney 86), Escorial Υ.1.1, Escorial Ω.1.12, lost hyparchetype "b"; edition history Villoison 1788 / Dindorf 1875–1888 / Erbse 1969–1988 / Comparetti 1901 facsimile |
| Homer Multitext project | The Homer Multitext project — downloadable texts (Venetus A by page-zone and by line) | 2023 (file generated 2023-10-05) | https://www.homermultitext.org/texts.html ; data at https://www.homermultitext.org/texts/venetus-a-by-zone.md | Confirms official grouping of Venetus A scholia into five zones: main, intermarginal, interior, exterior, interlinear; pages 12r–326v; CC BY-NC-SA 3.0 license |
| Homer Multitext project | hmt-archive (archival data): codex models and IIIF manifests | 2020s (repo) | https://github.com/homermultitext/hmt-archive | Machine-readable confirmation of photographed codices: British Library Burney 86; Venetus A; Venetus B (vbpages.cex); Escorial Υ.1.1; "Escorial ? 1.12" (=Ω.1.12, glyph garbled in label); Florence Laurentian 32.3 (label inconsistently reads "32.23"/"32.3"); Venice Marciana 841; IIIF manifests iiif/venetusA.json, burney86.json, marciana_841.json; current release as single CEX file |
| Bill Beck (ed. and trans.) | The Ancient Scholia to Homer's Iliad: A Translation, Volume 1: Books 1–2 | 2025 | https://doi.org/10.1017/9781009547369 ; https://www.cambridge.org/core/product/identifier/9781009547369/type/book | First English translation of the ancient scholia to Il. 1–2 (Cambridge UP, publ. Oct/Dec 2025, ISBN 9781009547383 hb / 9781009547369 digital, 466 pp.). Introduction pp. 1–25; Appendices publish papyrus scholia: Pap. I Σ Il. 2.397–865 = P.Hawara (2nd c. CE); Pap. II Σ Il. 2.751–827 = P.Oxy. 8.1086 (1st c. BCE). Review by David Sider (Classical Journal): "an improvement over Erbse … consult Beck first; then proceed to the Greek in Erbse, van Thiel, or Beck's other sources". Paywalled; abstract verified |
| Hartmut Erbse (ed.) | Scholia Graeca in Homeri Iliadem (Scholia Vetera), I–VII, Berlin (Teubner; de Gruyter reprints) | 1969–1988 | https://doi.org/10.1515/9783110855289 ; https://doi.org/10.1515/9783110848212 (Vol. VI Indices) ; reviews 10.1086/365696, 10.1086/366123 | Standard critical edition of the Iliad scholia vetera; vol VI = Indices (1983) per Crossref; character and limitations of the edition (selective, conflating six manuscripts, excluding D-tradition and post-10th-c. material) documented by Dué–Ebbott 2014 |
| Francesca Schironi | Aristarchus' Work in Progress: What Did Aristonicus and Didymus Read of Aristarchus? (Classical Quarterly) | 2015 | https://doi.org/10.1017/s0009838815000233 | Reconstructs what Aristonicus and Didymus had access to of Aristarchus' work; key study for transmission of Alexandrian scholarship into the A-scholia |
| Francesca Schironi | The Best of the Grammarians: Aristarchus of Samothrace on the Iliad (University of Michigan Press) | 2018 | https://doi.org/10.3998/mpub.8769399 ; reviews: 10.1017/s0009840x22002189, 10.1017/s0075426919000491 | Monograph on Aristarchus' Iliad scholarship as recoverable through signs/scholia; pp. xxvi+908, ISBN 9780472130764 (per CR review record) |
| Kathleen McNamee | Sigla and Select Marginalia in Greek Literary Papyri (Fondation Égyptologique Reine Élisabeth) | 1992 | https://openlibrary.org/search.json?q=Sigla+and+select+marginalia+in+Greek+literary+papyri (Open Library record) | Corpus/reference work on scholarly signs and marginalia in Greek literary papyri (incl. Homeric papyri); publisher and year per Open Library; series number not verified in fetched records (ยังไม่พบข้อมูลยืนยัน) |
| Davide Muratore | On the sources of Lascaris' edition of the D-scholia on the Iliad | 2019 | https://doi.org/10.1515/9783110631883-007 | Traces the printed D-scholia tradition back to Lascaris' editio princeps sources |
| Nikolaos Gonis; Jürgen Lundon | "Scholia Minora" to "Iliad" I 595–604, II 4–10 | 2001 | (Semantic Scholar index; no stable public URL captured) | Edition of a papyrus with scholia minora to the Iliad — evidence for the minor/vulgar glossographic strand in Egypt |
| L. Tagliapietra | SCHOLIA MINORA TO ILIAD 2.212–225, 272–295 | 2016 | (Semantic Scholar index; no stable public URL captured) | Further papyrus evidence of scholia minora |
| Adam Kamesar | The Logos Endiathetos and the Logos Prophorikos in Allegorical Interpretation: Philo and the D-Scholia to the Iliad | 2004 | (Semantic Scholar/Crossref index) | Links D-scholia allegorical material to Philonic exegetical milieu |
| Ludwig Friedländer (ed.) | Aristonici Peri semeion Iliados reliquiae emendatiores (Leipzig) | 1853 | https://archive.org/details/aristoniciperis00arisgoog | Standard older edition of Aristonicus' On the Signs of the Iliad (the work excerpted in the Venetus A main scholia); title/creator/date verified from IA metadata; OCR text unusable for Greek quotation |
| Gregory Nagy | An Experiment in the Making of a Homer Commentary (Classical Inquiries) | 2015 | https://classical-inquiries.chs.harvard.edu/an-experiment-in-the-making-of-a-homer-commentary/ | Uses folio 12r of Venetus A (Διὸς δ᾽ ἐτελείετο βουλή detail image); part of CHS commentary ecosystem built on Venetus A scholia |
| Casey Dué (ed.) | Recapturing a Homeric Legacy: Images and Insights from the Venetus A Manuscript of the Iliad (CHS/Harvard) | 2009 | https://chs.harvard.edu/book/recapturing-a-homeric-legacy-images-and-insights-from-the-venetus-a-manuscript-of-the-iliad/ ; free PDF linked from HMT: http://www.homermultitext.org/Pubs/Due_Recapturing_a_Homeric_Legacy.pdf | Essay collection on Venetus A (critical signs: Bird 2009; codicology: Hecquet 2009; illuminations: Kalavrezou 2009; Nagy 2009 "Traces of an ancient system of reading Homeric verse in the Venetus A"); CC-BY 3.0 |

## Key findings (with URLs)

1. Venetus A identification and make-up (RQ1). The Homer Multitext identifies the manuscript as Marciana 822 = Marcianus Graecus Z.454, late 10th century CE, parchment, c. 39 × 28.5 cm, 327 folios, acquired by Cardinal Bessarion and given to Venice; oldest complete Iliad; lost folios (69–74, 229–234, 238, 254–257, 319–320) replaced, probably by Bessarion, with new leaves lacking scholia. Front matter preserves Proclus' Chrestomathy excerpts (Life of Homer, Epic Cycle summaries) and Aristonicus' work on the signs. https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/VenA-Introduction-2014.md

2. Five-zone structure of the scholia (RQ1). HMT publishes scholia grouped by five page-zones — main, intermarginal, interior, exterior, and interlinear — confirming the questioner's list including interlinear. Main scholia surround 25 lines of poetry per folio in one minuscule hand with semiuncial lemmata; interior (gutter) and intermarginal scholia are semiuncial; some exterior scholia are written in decorative shapes (lyre, cross, column); interlinear scholia closely border the verse. Placement itself appears information-bearing (Ebbott 2009; Churik–Smith on mise en page). https://www.homermultitext.org/texts.html ; https://www.homermultitext.org/texts/venetus-a-by-zone.md ; introduction URL above.

3. Named ancient sources inside the manuscript (RQ1/RQ3). End-of-book subscriptions (all books except 17 and 24) state, e.g., at the end of Book 1 (folio 24r): "Πάρκειται τὰ Ἀριστονίκου σημεῖα καὶ τὰ Διδύμου περὶ τῆς Ἀρισταρχείου διορθώσεως, τινὰ καὶ ἐκ τῆς ἰλιακῆς προσῳδίας καὶ Νικάνoros περὶ στιγμῆς" — "Alongside the text lie the Signs of Aristonicus, and Didymus' work On the Edition of Aristarchus, as well as some things from the Prosody of the Iliad [= Herodian] and Nicanor's On Punctuation." Dating per HMT: Didymus and Aristonicus 1st c. BCE; Nicanor under Hadrian (1st–2nd c. CE); Herodian later 2nd c. CE under Marcus Aurelius. Critical signs next to verses derive ultimately from Aristarchus' editorial symbols. Same URL as finding 1.

4. Families of Iliad scholia (RQ2). Verified from HMT: the so-called "bT" scholia are transmitted by Venetus B (Marciana 821), the Townley manuscript (British Library Burney MS 86), and two 11th-century Escorial codices Υ.1.1 and Ω.1.12, which scholars posit derive from a common lost exemplar "b"; the A-scholia of Venetus A form the other great stream; the D-tradition forms a further, separate stratum present in many medieval manuscripts and also inside Venetus A (main and interlinear zones). The precise siglum "d" for the D-family manuscripts as used e.g. by West was not directly attested in any fetched source (ยังไม่พบข้อมูลยืนยัน). Shelfmarks cross-confirmed by machine-readable HMT codex models: https://github.com/homermultitext/hmt-archive (archive/codices/burney86pages.cex etc.). Townley Homer = BL Burney 86 is thus verified via HMT (BL's own viewer page currently redirects to a generic catalogue page after the 2023 cyberattack).

5. D-scholia re-attribution and lexical-gloss function (RQ4). Per Dué–Ebbott (citing Nagy 2004): the old derivation of the "D Scholia" from Didymus is no longer accepted; on Venetus A they appear within the main scholia (mythology) and as interlinear semiuncial notes consisting largely of short glosses defining obscure words — i.e., the lexical-gloss tradition par excellence. HMT therefore abandons the "D" label in favour of physical-zone designations. Same URL as finding 1. Supporting studies: Muratore 2019 (Lascaris' editio of the D-scholia), Kamesar 2004 (allegory), Gonis–Lundon 2001 and Tagliapietra 2016 (papyri of scholia minora).

6. Scholia minora on papyri (RQ4/RQ5). Papyrus witnesses to minor/vulgar Homeric scholia continue to be edited (Gonis–Lundon 2001; Tagliapietra 2016), and Beck 2025 publishes as appendices two papyrus scholia corpora to Iliad 2: P.Hawara (Σ Il. 2.397–865, 2nd c. CE) and P.Oxy. 8.1086 (Σ Il. 2.751–827, 1st c. BCE) — direct Egyptian evidence for marginal/excerpted commentary centuries before the Byzantine codices. https://www.cambridge.org/core/product/identifier/9781009547369/type/book

7. Marginalia corpus of McNamee (RQ5). Kathleen McNamee's Sigla and Select Marginalia in Greek Literary Papyri (Brussels: Fondation Égyptologique Reine Élisabeth, 1992) is the standard corpus of scholarly sigla/marginalia in literary papyri (Open Library record confirms title, author, year, publisher). Full digital text not available online; her related dissertation and articles were not directly fetchable this loop (ยังไม่พบข้อมูลยืนยัน). HMT maintains its own ongoing XML editions of Homeric papyri (https://github.com/homermultitext/homeric_papyri).

8. Modern editions and projects (RQ6).
   - Erbse, Scholia Graeca in Homeri Iliadem (Scholia Vetera) I–VII, Berlin, 1969–1988 (Teubner; de Gruyter reprint DOIs 10.1515/9783110855289, Vol. VI Indices 10.1515/9783110848212). Characterized by Dué–Ebbott as selective/conflating six manuscripts, excluding the D-tradition, paraphrases, and post-10th-century material; TLG electronic version omits his apparatus.
   - Predecessors: Villoison's editio princeps of Venetus A/B with scholia (Venice 1788); Dindorf (Oxford 1875–1888); Comparetti phototype facsimile of Venetus A (1901); Bekker on the interlinear paraphrase (1825). All listed with dates in the HMT introduction.
   - Homer Multitext (CHS/Harvard; co-directors Casey Dué and Mary Ebbott; with Christopher Blackwell and Neel Smith): complete diplomatic TEI-XML edition of Venetus A text plus every scholion spatially indexed to 2007 high-resolution images; scholia retrievable by page-zone; whole archive released as a single CEX file (https://github.com/homermultitext/hmt-archive/raw/master/releases-cex/hmt-current.cex) with IIIF manifests (iiif/venetusA.json); browsing apps at https://www.homermultitext.org/facsimile/, /iliad-browser/, /codex-browser/; license CC BY-NC-SA 3.0. Also photographs Venetus B, Burney 86, Escorial Υ.1.1 and Ω.1.12, Laurentian 32.3, Marciana 841.
   - Beck 2025 (CUP) is the first complete English translation of the scholia to Iliad 1–2 and is recommended (David Sider, Classical Journal) as the entry point before Erbse/van Thiel Greek texts.

9. Alexandrian-to-scholion transmission studies (RQ3). Schironi's Classical Quarterly 2015 article establishes methodologically how much of Aristarchus Aristonicus (signs) and Didymus (hypomnemata) actually read, i.e., the chain Aristarchus -> Aristonicus/Didymus -> A-scholia; her 2018 Michigan monograph treats Aristarchus' Iliad scholarship through the signs and scholia. DOIs: 10.1017/s0009838815000233 ; 10.3998/mpub.8769399. Aristonicus' Peri semeion survives precisely because it was excerpted into the A-scholia (per HMT subscription, finding 3); the standard standalone edition remains Friedländer 1853 (https://archive.org/details/aristoniciperis00arisgoog).

## Remaining gaps

- Exact sigla and stemma for the "four families" as canonically formulated (A b T d): the "d" siglum and the full family list per West/Erbse prolegomena were not verifiable from fetched open sources this loop (ยังไม่พบข้อมูลยืนยัน). Next loop: consult Erbse vol. I Prolegomena or M.L. West, Studies in the Text and Transmission of the Iliad (2001) in a library copy.
- Venetus B full shelfmark in the Z-series (Marciana gr. Z.453?): only "Marciana 821" verified (ยังไม่พบข้อมูลยืนยัน for Z.453).
- Schironi's detailed reconstruction results for Didymus' hypomnemata (CQ 2015 and her other Didymus work) — paywalled; only title/venue verified.
- McNamee corpus contents/coverage details (which Homer papyri included; series number Papyrologica Bruxellensia 26) — not verifiable online here.
- Marciana's own digital facsimile page for Venetus A: live site TLS-broken from this environment; archived homepage (2021) confirms a "Biblioteca digitale" service but the specific Veneto/Antichi Homer page could not be located (ยังไม่พบข้อมูลยืนยัน). Practical substitute: HMT facsimile app and Comparetti 1901 scans browsable via HMT (browseimg urn:cite:hmt:compimg).
- Nicanor's Peri stigmes and Herodian's prosodic excerpts as independent works (editions beyond scholia) — only their role inside the subscriptions verified.
- Beck 2025 Introduction content (pp. 1–25) would likely give an up-to-date synthesis of families/sources — paywalled.
- British Library first-party description/images of Burney 86 — blocked post-cyberattack during this loop.

## Blocked sources (recorded honestly)

- websearch provider: HTTP 429 on every attempt this loop.
- OpenAlex API: daily budget exhausted (programmatic block).
- Crossref and Semantic Scholar APIs: intermittent HTTP 429 (mitigated with delays).
- marciana.venezia.sbn.it: SSL/TLS trust failure (live) from two clients; Wayback CDX deep query timed out (504); used 2021 snapshot instead.
- bl.uk manuscript viewer (FullDisplay.aspx?ref=Burney_MS_86): redirected to generic landing page; site states some digitised items unavailable due to cyber-attack.
- Cambridge Core: book/chapter texts paywalled ("Get access"); only metadata, abstract, contents, and a published review quote accessible.
- archive.org: guessed identifiers for Comparetti 1901 facsimile volumes returned empty metadata; Friedländer OCR text unusable for Greek.
- kups.ub.uni-koeln.de (van Thiel digital editions): API endpoints returned 400/404; van Thiel's D-scholia edition not reached directly (his name verified only via the Sider review quote and secondary mentions).
- chs.harvard.edu "read" pages: require JavaScript; only landing metadata retrieved.
