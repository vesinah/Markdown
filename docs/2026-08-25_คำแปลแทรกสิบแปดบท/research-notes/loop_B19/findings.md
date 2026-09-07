# Loop B19 Findings — Greco-Roman scholia evidence precision pass (closing Phase A loop 01/27/28 gaps)

Date: 2026-08-26
Loop: B19 of project interlinear_gloss_18ch (Phase B)
Method note: the websearch tool returned HTTP 429 on every attempt this session, as in loops 01/27/28; discovery ran through Crossref REST, Open Library API, Internet Archive advancedsearch/metadata/download APIs, GitHub raw + GitHub Trees API (HMT repos), e-codices pages, HMT research blog (blogspot static HTML), BMCR site search and review pages, and direct DOI fetches. OpenAlex, Semantic Scholar, and Google Books API were rate-limited (429) throughout. Every claim below comes only from material actually fetched this session.

## Queries executed

Web search tool: all attempts HTTP 429 (session-long outage).

API / database queries (executed):
1. Crossref works?query.bibliographic=McNamee+Marginalia+Glosses+Bookrolls — irrelevant hits only.
2. Crossref works?query.author=McNamee&query.bibliographic=Another+Chapter+History+Scholia — HIT: CQ 48.1 (1998) 269-288.
3. Crossref works?query.author=McNamee&query.bibliographic=Annotations+Greek+Latin+Texts+Egypt — HIT: monograph DOI 10.3998/mpub.9749749 + Schironi review CR 59.1 (2009) 277-279.
4. Open Library search author:"Kathleen McNamee" — 3 records (1981 abbreviations; 1992 sigla/marginalia; 2007 annotations).
5. archive.org metadata siglaselectmargi00mcna — full djvu.txt downloadable (201,669 bytes), downloaded.
6. archive.org advancedsearch title:(Scholia Iuvenalem) — Wessner Teubner reprint found (lending-restricted).
7. archive.org advancedsearch creator:(Mayor|Housman) title:(Juvenal|Iuvenalis) — Mayor's Thirteen Satires vol. 1 downloaded as djvu.txt (1.83 MB); Pithoeanus/Montpellier passages extracted.
8. archive.org metadata/advancedsearch for McNamee annotations — partial scan identifier annotations-in-greek-and-latin-texts-from-egypt (djvu.txt only ~8.5 KB; epub = image-placeholder pages).
9. GitHub Trees API homermultitext/hmt-archive + hmt-web — located codices.csv, venetusB.md, vbpages.cex.
10. Crossref single works: 10.1093/cq/48.1.269 (abstract fetched verbatim); 10.1017/S0009838815000087 (Dickey abstract fetched verbatim); 10.1017/S0009840X08002886 (review metadata).
11. Crossref works?query.bibliographic=scholia+vetera+Juvenal / Remigius Boethii Consolationis / Love+Marenbon Boethius glosses / Beck Ancient Scholia book-chapters filter — various hits recorded in table.
12. Crossref works?query.bibliographic=Pithoeanus+Juvenal+Montpellier — HIT: Owen CR 19.4 (1905) 218-223.

Site fetches (executed):
13. https://raw.githubusercontent.com/homermultitext/hmt-archive/master/pre-archive/collections/codexModels/codices.csv — Venetus B shelfmark line captured.
14. https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/manuscripts-papyri/venetusB.md — full description captured.
15. https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/VenA-Introduction-2014.md — re-fetched; "bT" scholia passage, D-scholia exclusion by Erbse, interlinear paraphrase to Il. 2.188 captured.
16. http://homermultitext.blogspot.com/search/label/Venetus%20B — three posts harvested incl. "What's in a Name (of a Manuscript)?" (sigla equivalences) and "Wake up!..." (bT family reading at Il. 10.159).
17. https://www.e-codices.unifr.ch/en/list/one/bbb/0370 + /en/description/bbb/0370/Mittenhuber — Bern Cod. 370 summary and full itemized inventory.
18. https://www.e-codices.unifr.ch/en/list/one/bbb/0354 — turned out to be the Fabliaux ms (negative result, useful).
19. https://bmcr.brynmawr.edu/2012/2012.03.42/ — Zetzel on Grazzini/Juvenal scholia (full text harvested).
20. https://bmcr.brynmawr.edu/2014/2014.05.48/ — Nielsen on Brill Companion to Boethius (full text harvested).
21. BMCR node searches: "McNamee Annotations", "Companion to Boethius...", "Juvenal scholia vetera Bernensis" (last one timed out once, succeeded partially later).
22. doi.org resolution fetches: 10.1017/S0009840X00000512 (Owen citation only), 10.1163/9789004225381_004 (Love citation only), 10.3998/mpub.9749749 (bare record).

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Kathleen McNamee | Sigla and Select Marginalia in Greek Literary Papyri (Papyrologica Bruxellensia, Bruxelles: Fondation Egyptologique Reine Elisabeth) | 1992 | https://archive.org/details/siglaselectmargi00mcna | FULL OCR TEXT HARVESTED. Corpus: "roughly three hundred Greek literary papyri ... sigla appear in the margin or between the lines; utilitarian in about a hundred". Tables of Aristarchan signs/utilitarian/uncertain sigla; diple predominates; obeli in only a dozen Homeric texts; interlinear sigla examples (P.Oxy. 7.1018, 10.1247, 17.2102); second study derives marginal notes from text-order glossaries/Scholia Minora-type word lists |
| Kathleen McNamee (ed.) | Annotations in Greek and Latin Texts from Egypt (American Studies in Papyrology 45, Oxbow for ASP) | 2007 | https://doi.org/10.3998/mpub.9749749 ; IA: annotations-in-greek-and-latin-texts-from-egypt | xviii+577 pp., ISBN 978-0-9700591-7-8; partial IA scan shows "COMPREHENSIVE LIST OF ANNOTATED PAPYRI" organization; exact corpus count not verifiable this session (ยังไม่พบข้อมูลยืนยัน) |
| Francesca Schironi (reviewer) | "Notes in Papyri" [review of McNamee 2007], CR 59.1: 277-279 | 2009 | https://doi.org/10.1017/S0009840X08002886 | Confirms edition details (ASP 45, Oxbow 2007); full text paywalled |
| Kathleen McNamee | Another chapter in the history of scholia, CQ 48.1: 269-288 | 1998 | https://doi.org/10.1093/cq/48.1.269 | Abstract fetched: legal-school papyri from Beirut; argues legal papyri's marginal commentaries reflect contemporary legal education and preserve primary evidence linking papyrus marginalia to the broad-margin scholia of medieval manuscripts |
| Homer Multitext (hmt-archive) | codexModels/codices.csv | accessed 2026 | https://raw.githubusercontent.com/homermultitext/hmt-archive/master/pre-archive/collections/codexModels/codices.csv | Machine-readable: Venetus A = Marcianus Graecus Z.454 (=822) 10th c.; Venetus B = Marcianus Graecus Z.453 (=821) 11th c.; Marciana 841 = Z.458; Escorial Y.1.1 (=294); O.1.12 (=513) |
| Homer Multitext (hmt-web) | venetusB.md manuscript description | accessed 2026 | https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/manuscripts-papyri/venetusB.md | Venetus B: 338 ff., 40.5x31.5 cm, two scribes; 13th-c. added mythological/gloss layers per Erbse 1969 (lexica, Epimerismi Homerici); Porphyry and Ps.-Heraclitus in far margins; footnote-style numbering links scholia to text |
| Casey Due (HMT blog) | What's in a Name (of a Manuscript)? | 2012 | http://homermultitext.blogspot.com/2012/09/whats-in-name-of-manuscript.html | Sigla equivalences: Villoison 1788 coined A/B; Allen A/B/E3/E4/U4; West A/B/E/F; Escorial catalog number changes 294=291, 513=509; Zanetti Z. catalog explained |
| Casey Due & Mary Ebbott (HMT) | An introduction to the Homer Multitext edition of the Venetus A | 2014 | https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/VenA-Introduction-2014.md | "bT" scholia group transmitted by Venetus B + Townley (BL Burney 86, "T") + Escorial Y.1.1/O.1.12; common lost source "b"; bT may derive partly from Porphyry; Erbse excluded D-scholia tradition and post-10th-c. matter; 13th-c. interlinear paraphrase up to Il. 2.188 |
| Casey Due (HMT blog) | Wake up! A return to Iliad 10... | 2013 | http://homermultitext.blogspot.com/2013/06/wake-up-return-to-Iliad-10-and-poetics.html | Family behavior test case at Il. 10.159 (egreo vs orseo): "the Venetus B (and those in that family), the Townley, and Escorial O.1.12" vs majority; T quotes Aristarchan didacha |
| James E. G. Zetzel (reviewer) | Review of Grazzini, Scholia in Iuvenalem recentiora (BMCR 2012.03.42) | 2012 | https://bmcr.brynmawr.edu/2012/2012.03.42/ | Juvenal scholia vetera anchored in ninth-century Codex Pithoeanus (P); antiquity guaranteed by overlap with 4th-c. palimpsest Vat. Lat. 5750 margins; Wessner 1931 standard ed.; Carolingian commentaries phi (4 mss), chi (7 mss), plus L and Z; Cambridge King's College 52 possibly Heiric of Auxerre autograph comments; authorship/provenance treated "somewhat inconclusively, as is right" |
| e-codices (Bern Burgerbibliothek) | Cod. 370: Commenta Bernensia in Lucanum; Adnotationes super Lucanum | online 2019 | https://www.e-codices.unifr.ch/en/list/one/bbb/0370 ; DOI 10.5076/e-codices-bbb-0370 | Parchment 179 ff., end 9th c., probably Reims production; contains ONLY Lucan scholia (Commenta with 21 schemata to f.125v; Frechulf fragment; incomplete Adnotationes books 1-4, 9, start of 10); NO Juvenal scholia |
| John E. B. Mayor (ed.) | Thirteen Satires of Juvenal, vol. 1, preface | 1881 | https://archive.org/details/thirteensatireso00juve | Verbatim: P = "cod. Pithoeanus or Budensis saec. IX, once in the library of Matthias Corvinus, now in the bibliotheque de l'ecole de medecine at Montpellier H. 125"; Bucheler/Jahn exchange on excised scholia folio (vir 129-158) |
| S. G. Owen | On the Montpellier Manuscripts of Persius and Juvenal, CR 19.4: 218-223 | 1905 | https://doi.org/10.1017/S0009840X00000512 | Dedicated study of the Montpellier Juvenal/Persius mss (metadata verified; paywalled) |
| Paul Wessner (ed.) | Scholia in Iuvenalem vetustiora (Teubner; reprint Stutgardiae 1967) | 1931/1967 | https://archive.org/details/scholiainiuvenal0000wess | Standard edition of Juvenal scholia vetera; lending-restricted IA copy exists |
| Rosalind C. Love | The Latin Commentaries on Boethius's De consolatione philosophiae from the 9th to the 11th Centuries, in Kaylor/Phillips (eds.), A Companion to Boethius in the Middle Ages (Brill's Companions to the Christian Tradition 30), pp. 75-133 | 2012 | https://doi.org/10.1163/9789004225381_004 | Verified via Crossref + Nielsen's BMCR review: clarifies medieval reading/commenting practices; history of the vexed manuscript tradition; reports Boethius in Early Medieval Europe Project findings (Godden/Jayatilaka, begun 2007) |
| Melinda Nielsen (reviewer) | Review of Kaylor/Phillips (eds.), Companion to Boethius (BMCR 2014.05.48) | 2014 | https://bmcr.brynmawr.edu/2014/2014.05.48/ | Full text harvested: characterizes Love ch.; Troncarelli chapter on late-antique "editions" of Boethius; volume framing via reception history |
| John Marenbon | Boethius (Great Medieval Thinkers, OUP); Cambridge Companion intro; Oxford Bibliographies entry | 2003/2009/2015 | https://doi.org/10.1093/0195134079.001.0001 ; https://doi.org/10.1017/ccol9780521872669.001 ; https://doi.org/10.1093/obo/9780195389661-0219 | Metadata verified via Crossref; paywalled, not read |
| Eleanor Dickey | Columnar Translation: An Ancient Interpretive Tool That the Romans Gave the Greeks, CQ 65.2: 807-821 | 2015 | https://doi.org/10.1017/S0009838815000087 | Abstract fetched verbatim: bilingual Virgil/Cicero papyri, Latin original + Greek translation in distinctive narrow columns; used by Greek-speaking students beginning Latin literature |

## Key findings (with URLs)

1. TITLE CORRECTION (Gap 1). No McNamee work titled "Marginalia and Glosses in Bookrolls of Canonical Literary Authors" exists in any database queried this session. Her actual corpus works are: Sigla and Select Marginalia in Greek Literary Papyri (Bruxelles 1992; full OA scan) and Annotations in Greek and Latin Texts from Egypt (American Studies in Papyrology 45, Oxbow 2007, xviii+577 pp., DOI 10.3998/mpub.9749749). The 1992 volume's scale statement, quoted directly from her own text: "roughly three hundred Greek literary papyri from Egypt in which sigla appear in the margin or between the lines. Their function is readily apparent and utilitarian in about a hundred texts." Sources: https://archive.org/details/siglaselectmargi00mcna ; https://openlibrary.org/search.json?q=author%3A%22Kathleen+McNamee%22 .

2. McNAMEE'S ARGUMENTS NOW USABLE (Gap 1 content). From the harvested 1992 text: (a) among Aristarchan signs in Homeric papyri the all-purpose diple predominates because marginal notes mainly offered lectional help and pragmatic exegesis for ordinary readers; (b) obeli survive in only about a dozen Homeric texts; (c) over half the Aristarchan-sign papyri misuse or misplace signs; (d) her second study traces marginal notes to text-order glossaries and Scholia-Minora-type word lists, with inflectional agreement between lemma and note; (e) concrete interlinear sigla examples: P.Oxy. 7.1018, 10.1247, 17.2102. Her CQ 1998 article (abstract now verified) extends the scholia story to Beirut legal-school papyri, arguing their marginal commentaries are primary evidence connecting papyrus annotation to medieval broad-margin scholia: https://doi.org/10.1093/cq/48.1.269 . The precise papyrus count of the 2007 volume remains unverified - mark "(ยังไม่พบข้อมูลยืนยัน)".

3. VENETUS B SHELFMARK CLOSED (Gap 3). HMT's machine-readable codex registry states verbatim: "Venetus B: Marcianus Graecus Z. 453 (= 821)", century 11. Corroborated by HMT's manuscript essay (338 folios, 40.5 x 31.5 cm, two scribes, 13th-century supplementary scholia layers identified by Erbse 1969 as mythological/gloss material from lexica and Epimerismi Homerici; Porphyry and Ps.-Heraclitus material in far margins; footnote-number coordination system unlike Venetus A). Sources: https://raw.githubusercontent.com/homermultitext/hmt-archive/master/pre-archive/collections/codexModels/codices.csv ; https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/manuscripts-papyri/venetusB.md .

4. SIGLA FAMILIES PRECISION (Gap 2). Now documented from fetched HMT sources: (a) Villoison's 1788 editio princeps created the names A/B; (b) Allen used A, B, E3 (=Escorialensis 294=291), E4 (=513=509), U4 (=Marciana 841 = Graecus Z.458, U for Venice since V was reserved for Vatican mss); (c) West uses A, B, E (=Allen E3), F (=Allen E4), omits Marciana 841; (d) the "bT" scholia group = Venetus B + Townley (BL Burney 86, siglum T) + Escorial Y.1.1 + O.1.12, posited to descend from lost hyparchetype "b"; (e) Erbse excluded everything he judged D-scholia tradition, paraphrases, and post-10th-century additions. Family coherence demonstrated at Il. 10.159 (egreo shared by B-family/Townley/O.1.12 vs majority orseo). Source: http://homermultitext.blogspot.com/2012/09/whats-in-name-of-manuscript.html ; https://raw.githubusercontent.com/homermultitext/hmt-web/master/md/VenA-Introduction-2014.md ; http://homermultitext.blogspot.com/2013/06/wake-up-return-to-Iliad-10-and-poetics.html . Caveat kept honest: Erbse's own prolegomena siglum table remains unconsulted (paywalled), so any additional letters in his personal siglum list stay "(ยังไม่พบข้อมูลยืนยัน)"; the lowercase siglum "d" was likewise not attested in fetched sources.

5. BERNENSIA MANUSCRIPT DISAMBIGUATION (Gap 4, corrected premise). Bern Burgerbibliothek Cod. 370 (end of 9th c., parchment, 179 ff., probably written in Reims) contains ONLY Lucan scholia: Commenta Bernensia (unique witness, with 21 colored schemata) to f. 125v, a Frechulf chronicon fragment, and the incomplete Adnotationes super Lucanum (books 1-4, 9, start of 10). It has NO Juvenal scholia. Source with itemized inventory: https://www.e-codices.unifr.ch/en/description/bbb/0370/Mittenhuber ; summary page DOI 10.5076/e-codices-bbb-0370 . Book drafts must therefore use "scholia Bernensia" strictly for the Lucan corpora (as already done in loop 28 via Werner HSCP 96 (1994) 343-368).

6. JUVENAL SCHOLIA VETERA PROVENANCE (Gap 4 core). Verified chain: the ancient scholia rest principally on one ninth-century manuscript, P = Codex Pithoeanus (or Budensis), formerly in the library of Matthias Corvinus, now Montpellier, Bibliotheque de l'Ecole de Medecine H. 125 - quoted verbatim from Mayor's 1881 preface (https://archive.org/details/thirteensatireso00juve). Their antiquity is guaranteed by overlap with marginalia in the fourth-century palimpsest Vat. Lat. 5750 (Zetzel, BMCR 2012.03.42). Around them stand four Carolingian recensions/sets: phi (4 mss), chi (7 mss), L, Z (Wessner's sigla), with Grazzini editing phi+chi for Satires 1-6 (Pisa 2011) and treating authorship/provenance deliberately inconclusively; Cambridge King's College 52 may carry Heiric of Auxerre's autograph comments. Modern framing shift documented: older scholarship mined the Carolingian notes only for ancient lore; current editors value them as evidence of Carolingian school practice. URLs: https://bmcr.brynmawr.edu/2012/2012.03.42/ ; Owen 1905 study confirmed at https://doi.org/10.1017/S0009840X00000512 .

7. BOETHIUS CONSOLATIO GLOSSAE (Gap 5). Solid anchor study verified: R.C. Love, "The Latin Commentaries on Boethius's De consolatione philosophiae from the 9th to the 11th Centuries", in Kaylor/Phillips eds., A Companion to Boethius in the Middle Ages (Brill 2012), pp. 75-133, DOI 10.1163/9789004225381_004. Per Nielsen's BMCR review it clarifies medieval reading/commenting practices, gives a history of the vexed manuscript tradition, and reports the Boethius in Early Medieval Europe Project (Godden/Jayatilaka, from 2007) - that project is the census of early medieval Consolatio glossing to consult next. Troncarelli covers late-antique "editions"; Marenbon's OUP Boethius (2003) and companions verified at metadata level. URLs: https://bmcr.brynmawr.edu/2014/2014.05.48/ ; https://doi.org/10.1093/0195134079.001.0001 .

8. DICKEY COLUMNAR TRANSLATIONS CONFIRMED (Gap 6). Exact title verified from Crossref record: "Columnar Translation: An Ancient Interpretive Tool That the Romans Gave the Greeks", CQ 65.2 (2015) 807-821, DOI 10.1017/S0009838815000087, with abstract (numerous bilingual Virgil/Cicero papyri; Latin original and Greek translation in narrow columns; used by Greek-speaking students starting Latin literature). This complements loop 28's Hermeneumata findings and gives the draft a verified physical-layout datum adjacent to interlinear glossing.

## Gaps closed

1. Gap 1 (McNamee corpus): titles/venues verified and corrected; 1992 volume fully harvested with scale figure ("roughly three hundred" papyri with sigla, "about a hundred" utilitarian); 2007 volume bibliographically pinned; CQ 1998 article content identified (Beirut legal papyri). Partially closed only: exact papyrus-count of the 2007 census.
2. Gap 2 (Erbse/West sigla scheme): family structure and letter equivalences now documented from fetched sources (A/B/T/b/D-tradition; Allen/West sigla tables). Residual nuance recorded honestly (Erbse prolegomena table itself unconsulted).
3. Gap 3 (Venetus B shelfmark): fully closed - Marcianus Graecus Z.453 (=821), 11th c., with codicological profile.
4. Gap 4 (Scholia Bernensia): closed with an important correction - Bern 370 is Lucan-only; Juvenal scholia vetera belong to Pithoeanus/Montpellier H.125 + palimpsest Vat. Lat. 5750 + four Carolingian recensions; provenance debate status documented from Zetzel.
5. Gap 5 (Boethius Consolatio glosses): closed at survey level - Love's Brill Companion chapter verified (venue/pages/DOI/content description) plus the Godden/Jayatilaka project pointer; Marenbon anchors verified.
6. Gap 6 (Dickey columnar translations): fully closed with exact title and abstract.

## Remaining

1. Exact annotated-papyrus count in McNamee 2007 Annotations (and its introduction's method statements) requires the physical book or a licensed ebook - all digital routes blocked this session; keep "(ยังไม่พบข้อมูลยืนยัน)" on any specific figure.
2. Erbse's own prolegomena siglum list (Scholia Graeca in Homeri Iliadem I, 1969) and van Thiel's editions: not accessible; if the draft needs letter-by-letter sigla beyond A/B/T/b/D, verify against a library copy.
3. Full texts behind paywalls cited at metadata level only: Schironi's CR review of McNamee; Love's chapter; Marenbon's books; Owen 1905; Werner 1994; Grazzini 2011; Wessner 1931 (lending copy exists for supervised consultation).
4. Boethius in Early Medieval Europe Project catalogue pages (Oxford) not yet fetched - recommended target for a future Carolingian-glossing loop alongside the catena.bibl.unisi.it database (DNS still failing).
5. Montpellier H.125 facsimile/description page not fetched (library portal not attempted after repeated blocks elsewhere); shelfmark currently rests on Mayor 1881 + Owen 1905 metadata.

## Blocked / failed accesses recorded honestly

- mcp.exa.ai websearch: HTTP 429 every attempt (whole session)
- api.openalex.org: 429 budget/rate exhausted
- api.semanticscholar.org: 429 (three separate rounds)
- googleapis.com/books: 429 (two attempts)
- catena.bibl.unisi.it: DNS resolution failure (repeat of loop B18)
- press.umich.edu: 404 then 403
- brill.com display/book/.../BP000004.xml: 404 (wrong internal ID pattern); edcollbook/title/21376 resolved to an unrelated book
- archive.org fulltext inside.php on restricted Wessner scan: "Invalid filename" error
- McNamee 2007 IA scan: image-only epub placeholders + 8.5 KB OCR fragment (partial digitization)
- Cambridge Core article/chapter pages: JS-rendered; only citation blocks retrievable via doi.org
- bmcr.brynmawr.edu search: one request timeout (retried successfully)
