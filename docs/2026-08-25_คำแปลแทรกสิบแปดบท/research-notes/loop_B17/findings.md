# Loop B17 Findings — Glossa ordinaria scholarship in depth: closing loop_25 gaps (Phase B)

Date: 2026-08-26
Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_B17\
Documents saved: 5 files in documents\

Phase-B note: this loop targeted exactly the six gaps left open by loop_25 (Glossa ordinaria deep dive): Smith 2009 interior/preview, Andree 2011 Mediaeval Studies article, Froehlich 2009 Lutheran Quarterly piece, quantitative layout studies, Melanchthon and the Glossa, and the CNRS gloss-e scope update. Results per gap are summarized under "Gaps closed" below; two gaps closed fully, three partially, one remains unverifiable through accessible channels.

## Queries executed

Web search tool: 6 attempts, ALL returned HTTP 429 (provider rate limit on this egress IP for the whole session); no websearch results obtained. Fallback channels used instead:

API/metadata operations (bash + Invoke-RestMethod):
1. Crossref API: works query "Andree Anselm of Laon gloss" — surfaced Whedbee 2026 chapter; confirmed PIMS journal not in Crossref.
2. Crossref API: bibliographic "Smith Glossa ordinaria making medieval bible" — full monograph record with landing-page link and subtitle.
3. Crossref API: monograph DOI 10.1163/ej.9789004177857.i-270 full JSON — publisher link https://brill.com/view/title/17099, ISBNs, publication date 17.9.2009, 117 citations.
4. Crossref API: "Froehlich Luther Glossa ordinaria" — reprint DOIs in Variorum volume.
5. Crossref API: reviews of Smith 2009 — Williman (Speculum), Taliadoros (JRH), Slotemaker (RSR).
6. Crossref API: author "Diane Reilly" + Citeaux/bible — verified her AUP monograph and chapters.
7. Crossref API: full JSON for DOIs 10.4324/9781003554240-7 and -8 — essay page ranges.
8. HAL open archive API (api.archives-ouvertes.fr): queries on layout/codicology vocabulary — found Morard's codicology deposit (hal-03787540) and Zambardi Montecassino thesis (tel-05242151); file-availability checks showed no open files.
9. UTScholaris DSpace REST API: search "Glossa ordinaria" (10 hits incl. German 2014 thesis), search Klumpenhouwer, bundle/bitstream listing for German item.
10. Direct downloads via Invoke-WebRequest: Ekman 2019 thesis PDF (2.2 MB, re-harvested to temp for citation mining); German 2014 thesis pre-extracted TXT bitstream; pims.ca ST224 intro PDF (5 pp. excerpt); attempted HAL/Zambardi PDF (anti-bot HTML); dergipart Guezeldal mirror (404).
11. BnF SRU endpoint: query "Biblia cum glossa ordinaria" (17 records found; UNIMARC fields empty in dc projection — parsing abandoned).
12. Failed connections recorded: api.openalex.org (budget exhausted until midnight UTC), api.semanticscholar.org (429), googleapis.com/books (429 all attempts), kxp.k10plus.de / gso.gbv.de VD16 (connection refused x3), prdl.org (timeout), lutheranquarterly.com (broken DNS to lq-demo.com), BASE API (IP denied), DuckDuckGo lite/Mojeek (bot challenges), Bing via webfetch (junk results).

Direct page fetches (webfetch, all successful):
13. Brill title page 17099 (blurb + full TOC + bio + readership) and Introduction chapter page (gated; metrics only).
14. doi.org redirects for Brill Introduction chapter, T&F Variorum essays, Wiley JRH review, Cambridge Speculum review, De Gruyter EBR entry (citation stubs only).
15. gloss-e.irht.cnrs.fr: homepage editorial 2026, sommaire, statistics page id=239, methodology page id=190, 2019 editorial id=32 (89 KB text saved and keyword-mined).
16. stpaulcenter.com Genesis product page (no print-history content).
17. Wayback Machine availability API + snapshot of gloss-e instrumenta id=202 (empty shell even archived).

Full-text mining (python/pypdf + regex over harvested texts):
18. ekman2019.txt (278 pp., 715,640 chars): extracted exact Andree 2011 title from bibliography and six argument summaries from footnotes; checked layout-vocabulary terms (proportion/ratio/columns/width — no measurements present).
19. german2014.txt: extracted Luther-Glossa practice passages and Preus nine-commentary test.
20. glosse_editorial2019.txt: keyword sweep for Melanchthon/Basel/Wittenberg/Luther/Rusch/print history.

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Lesley Smith | The Glossa Ordinaria: The Making of a Medieval Bible Commentary (Commentaria 3, Brill) | 2009 | https://brill.com/view/title/17099 | Full publisher blurb; COMPLETE TOC with subsection titles and page ranges (Introduction 1-16; Authorship 17-38; Contents 39-89 incl. section V "The Agenda of the Marginal and Interlinear Glosses" 79; Layout 91-139; Production and Ownership 141-192 incl. "Printing" 187; Use 193-228 listing 14 named users Gilbert de la Porree to Nicholas of Lyra; Epilogue 229-239); bio note; readership statement; DOI 10.1163/ej.9789004177857.i-270; 117 citations per Crossref |
| Daniel Williman | Review of Smith 2009, Speculum 87.1 | 2012 | DOI 10.1017/s0038713412000656 | Reviewer's metadata note confirms book contains "6 black-and-white figures, 7 diagrams, and graphs"; pp. xiii, 267 |
| Jason Taliadoros | Review of Smith 2009, Journal of Religious History 37.1 | 2013 | DOI 10.1111/1467-9809.12023 | Confirms figures/diagrams; pp. xiv+270 |
| John T. Slotemaker | Review of Smith 2009, Religious Studies Review 38 | 2012 | DOI 10.1111/j.1748-0922.2012.01652_4.x | Price $156.00 cloth |
| Alexander Andree | Anselm of Laon Unveiled: The Glosae Super Iohannem and the Origins of the Glossa Ordinaria on the Bible, Mediaeval Studies 73 | 2011 | paywalled; title verified via Ekman 2019 bibliography | Exact title/pages 217-260 established; argument reconstructed from Ekman footnotes: Glosae super Iohannem produced at Laon BEFORE the Gloss; two ms attributions to Anselm decisive against Canterbury alternative; Anselm NOT direct compiler of any Gloss part (no mss before late 1120s); students posthumously mined his continuous commentaries into double-gloss format; Comestor testimony not about the Gloss (p. 234); key quote at 227-28 |
| Karlfried Froehlich | Martin Luther and the Glossa Ordinaria, Lutheran Quarterly 23 | 2009 | cited at https://promissio.ilt.edu/index.php/pj/article/download/99/99 ; reprint DOI 10.4324/9781003554240-8 | Title+pages 29-48 verified twice independently (Kolb n.31; Crossref reprint record preserving pagination VIII-29-VIII-48); full text inaccessible |
| Karlfried Froehlich | The Fate of the Glossa Ordinaria in the Sixteenth Century (Variorum essay VII) | 2010/2024 | DOI 10.4324/9781003554240-7 | Existence and page range VII-19-VII-47 verified via Crossref; dedicated study covering Reformation-era Gloss editions |
| Brian T. German | Martin Luther's First Psalm Lectures and the Canonical Shape of the Hebrew Psalter (PhD diss., Toronto) | 2014 | https://utoronto.scholaris.ca/server/api/core/bitstreams/d846b618-1d00-4992-a0c7-5d447588cff6/content | Open thesis harvested: glossing printed texts with past exegesis "stock-in-trade in Luther's day", Glossa ordinaria AND interlinearis as prime examples; Preus test collating both Gloss layers vs nine commentaries on five psalm verses; earliest "faithful synagogue" in Dictata WA IV 78,34 (Ps 92:2 gloss) |
| Martin Morard | Editorial Gloss-e 2026 (Sacra Pagina, IRHT-CNRS) | 2026 | https://gloss-e.irht.cnrs.fr/ | VERIFIED: eight corpora + GLOSSEM; "500'000 sentences exégetiques"; equivalent of "46'000 pages A4 ou 12050 pages web"; page updated 27.2.2026; ISSN 2966-5310 |
| Martin Morard | Nombres d'exemplaires des principaux corpus recensés par siècle (data 1.1.2025) | 2025 | https://gloss-e.irht.cnrs.fr/php/page.php?id=239 | Quantitative survival table: Glossa ordinaria 5,352 dated witnesses (12th c. 1,575; 13th c. 3,342); magna 684; media 142; Hugh 593; Catena 340; Lyra 2,122; total 10,502 dated witnesses across corpora |
| Martin Morard | Chiffrer pour déchiffrer. Regards statistiques sur la Bible glosée | 2025 | https://gloss-e.irht.cnrs.fr/php/page.php?id=190 | New statistics initiative methodology: survival bias ("miroir brisé"); Stegmüller Repertorium had omitted the Gloss; GLOSSEM not a quantitative-codicology tool but text-context instrument; deduplication rules (35 modular biblical units) |
| Martin Morard | Pour une lecture panoramique de la Bible latine glosée (editorial 2019) | 2019 | https://gloss-e.irht.cnrs.fr/php/page.php?id=32 | Growth baseline: 133,000 sentences and 16,500 edition pages in 2019; Rusch incunable = "dernier état de l'évolution médiévale de la Glose"; imprint precision [Strasbourg 23.IX.1481], 4 vols; Erfurt exemplar as transcription base; PL 113-114 omit interlinear gloss AND biblical text; Gloss authority extended into the 18th century; NO mention of Melanchthon anywhere |
| Martin Morard | Mises en page et codicologie des bibles latines glosées (instrumenta id 202; HAL hal-03787540) | 2022 | https://gloss-e.irht.cnrs.fr/php/instrumenta.php?id=202 ; https://hal.science/hal-03787540v1 | Dedicated layout/codicology instrument EXISTS (title verified twice); content loads only via site JavaScript; HAL mirror has no open file — full text unobtainable this loop |
| Diane Reilly | The Cistercian Reform and the Art of the Book in Twelfth-Century France (AUP) | 2018 | DOI 10.5117/9789462985940 | Monograph existence verified via Crossref incl. chapter "Fruitful Words in the Stephen Harding Bible"; not OA on OAPEN/DOAB |
| Elvira Zambardi | La Bibbia glossata a Montecassino: tra ricezione e appropriazione (thesis, HAL tel-05242151) | 2025 | https://theses.hal.science/tel-05242151v1 | Recent codicological study of glossed bibles identified; download blocked by anti-bot challenge |

Supplementary sources (metadata only):
- Simon Whedbee, "Iohannes Apostolus and Anselm of Laon: Foundations of the Glossa Ordinaria and Twelfth-Century Biblical Commentary Practices," in Medieval Commentary and Exegesis (2025/2026), DOIs 10.1017/9781843847694.004 and 10.1515/9781843847687-007 — new Boydell/Cambridge-hosted chapter relevant to gap-2 literature wave.
- Christopher de Hamel, Glossed Books of the Bible and the Origins of the Paris Booktrade (1984) and Oxford DPhil 1978 (EThOS uk.bl.ethos.453386) — still metadata-only (British Library EThOS offline).
- Emmaus Academic series status from https://glossaordinaria.com/: Genesis and Matthew published; John and Exodus in production; series preserves the central-column/two-side-gloss layout.

## Key findings (with URLs)

1. **Smith 2009 subtitle correction and full architecture now documented:** the book is "The Glossa Ordinaria: The Making of a Medieval Bible *Commentary*" (Commentaria 3). Publisher blurb confirms it is "based on manuscript evidence ... the first to draw together the history of this monumental work, its authorship, content, layout, production and use." The dedicated Chapter Three "Layout" runs pp. 91-139 — the single most relevant chapter for our layout questions — and Chapter Two contains a section explicitly titled "The Agenda of the Marginal and Interlinear Glosses" (p. 79). Chapter Five maps fourteen named users from Gilbert de la Porrée to Nicholas of Lyra, confirming the classroom-use narrative used elsewhere in our draft. Review records confirm the book carries 6 figures, 7 diagrams, and graphs (Williman, Speculum). https://brill.com/view/title/17099 ; DOI 10.1017/s0038713412000656

2. **Andree 2011 exact title fixed** (loop_25 had only a shorthand): "Anselm of Laon Unveiled: The Glosae Super Iohannem and the Origins of the Glossa Ordinaria on the Bible," Mediaeval Studies 73 (2011): 217-260. The guess "Commentary and Gloss ..." is wrong for this article. Its two-stage thesis is now reconstructible from citation contexts: Anselm's continuous lecture-commentaries (Glosae super Iohannem, CCCM 267, 2014) were produced at Laon before any glossed books survive; his students mined them after his death; absence of pre-late-1120s glossed mss makes direct Anselmian compilation unlikely ("an entire hypothetical first generation of glossed books should have been completely annihilated without leaving any trace seems rather unlikely", 227-28). Companion survey: Revue Bénédictine 118 (2008): 109-134 + 289-333. Verified from open Ekman 2019 bibliography and notes: https://utoronto.scholaris.ca/server/api/core/bitstreams/4393c977-3898-40a0-be9e-91b8f648ed78/content

3. **Froehlich 2009 exists and is doubly anchored, but its text is locked:** Kolb cites "Martin Luther and the Glossa Ordinaria," Lutheran Quarterly 23 (2009): 29-48, and Crossref independently records the identical pagination in the Variorum reprint (DOI 10.4324/9781003554240-8, pp. VIII-29-VIII-48). The Lutheran Quarterly website itself is defunct (DNS dead), so no content harvest was possible. Open-access compensation: German's Toronto thesis documents that glossing a printed Psalter with inherited exegesis was "stock-in-trade in Luther's day", naming "the massive Glossa ordinaria and Glossa interlinearis" as the era's prime examples, and records J. S. Preus's collation of BOTH Gloss layers against nine medieval commentaries for five psalm verses in the Dictata. https://promissio.ilt.edu/index.php/pj/article/download/99/99 ; https://utoronto.scholaris.ca/server/api/core/bitstreams/d846b618-1d00-4992-a0c7-5d447588cff6/content

4. **No published interlinear-vs-marginal space RATIO numbers were found in any accessible source this loop** — checked Ekman 2019 full text (zero hits for proportion/column-width vocabulary), ST224 introduction, reviews (abstracts gated), and the Morard layout instrument (JS-only). What IS now quantitatively documented:
   (a) Smith devotes a 49-page chapter to layout with diagrams/graphs (existence verified; text €35-gated);
   (b) Morard's instrument "Mises en page et codicologie des bibles latines glosées" exists as a named research instrument (title verified on live site and HAL);
   (c) NEW hard numbers on survival instead: per GLOSSEM (data 1.1.2025), dated Gloss witnesses total 5,352 — peaking at 3,342 in the thirteenth century after 1,575 in the twelfth — within 10,502 dated witnesses across all seven commentary corpora, from >14,100 glossed biblical books in ~7,500 manuscripts overall. https://gloss-e.irht.cnrs.fr/php/page.php?id=239 ; https://brill.com/view/title/17099

5. **Melanchthon claim NOT verifiable this loop:** the assertion that Melanchthon edited/sponsored a 1528 Basel Glossa ordinaria edition could not be confirmed or refuted through any accessible channel (Google Books API IP-blocked; VD16/K10plus down; PRDL timeout; search engines bot-walled; BnF SRU returned unusable projections; the long Morard 2019 editorial on print history never mentions him). Status in draft: (ยังไม่พบข้อมูลยืนยัน). Adjacent verified facts: Froehlich's dedicated sixteenth-century-fate essay exists (DOI 10.4324/9781003554240-7); Morard states the Gloss's use and authority ran into the eighteenth century with printed editions at least as influential as manuscripts. https://doi.org/10.4324/9781003554240-7 ; https://gloss-e.irht.cnrs.fr/php/page.php?id=32

6. **Gloss-e scope update fully verified and materially expanded:** current editorial (page updated 27.2.2026): eight complementary corpora + GLOSSEM base, "500'000 sentences exégétiques", equal to 46,000 A4 pages or 12,050 indexed web pages. Per-corpus coverage now precisely documentable: Biblia communis (BLAMAT Vulgate, >350 prologues); Glossa ordinaria (Rusch/Koberger Strasbourg [23.IX.]1480/81, 4 vols, 2415 pp., ISTC ib00607000, Erfurt exemplar as copy text); Glossa media of Gilbert de la Porrée ed. Morard 2024 (Psalms excerpts + full Paul, from Froehlich's Zwettl Stiftsbibl. 58 transcription — a nice Froehlich connection); Glossa magna of Peter Lombard (PL collated with Herbert of Bosham mss, ongoing) plus Aquinas Postilla Ps 1-54 prolegomena (Jan 2025); Philip the Chancellor Summa super Psalterium (Paris 1523 princeps base); Hugh of St-Cher Postillae (Venice 1703 base) with Petrus Remensis Dominican Gloss file; Catena aurea first critical edition (12,840 sentences, 65 percent complete); Lyra electronica (Paris 1590-1603 base; Tractatus de differentia + Guillaume le Breton prologue-commentary announced for 2026). Growth since loop-relevant baselines: 133,000 sentences (2019 editorial) -> 500,000 (2026). https://gloss-e.irht.cnrs.fr/ ; https://gloss-e.irht.cnrs.fr/php/introduction.php

7. **New scholarship alert for the drafting phase:** Whedbee's chapter "Iohannes Apostolus and Anselm of Laon: Foundations of the Glossa Ordinaria and Twelfth-Century Biblical Commentary Practices" (Medieval Commentary and Exegesis, 2025/2026) appeared in Crossref during this loop — the freshest published treatment of the gap-2 problem set; also Zambardi's 2025 Montecassino glossed-Bible thesis (HAL) as a new codicological comparator. DOIs 10.1017/9781843847694.004 ; https://theses.hal.science/tel-05242151v1

## Gaps closed

1. Smith 2009 preview content: CLOSED to the maximum extent without purchase — official blurb, complete TOC with all subsection headings and page ranges, bio, readership, three review records with figure/diagram counts, corrected subtitle. Interior text remains paywalled.
2. Andree 2011 article: CLOSED — exact title, journal, volume, pages, and a sourced reconstruction of its argument from open citation contexts; wrong alternative title ruled out.
3. Froehlich LQ 2009: PARTIALLY CLOSED — title/pages verified twice; full content inaccessible (site defunct, journal gated); substantive Luther-Gloss context supplied from open German thesis instead.
4. Quantitative layout studies: PARTIALLY CLOSED — negative result on numeric ratios documented honestly; positive harvests: Smith Layout-chapter architecture + diagrams confirmation, Morard layout-instrument existence, and a full GLOSSEM survival-statistics table (real numbers usable in the book's manuscript-transmission section).
5. Melanchthon/Glossa: NOT CLOSED — specific 1528 Basel claim marked unverified; surrounding sixteenth-century frame documented via Froehlich essay record and Morard print-history statements.
6. Gloss-e scope update: FULLY CLOSED — 500k-sentence figure verified verbatim with growth trajectory, ISSN, per-volume/per-corpus coverage list, and new statistics instruments.

## Remaining

1. Interlinear-vs-marginal SPACE RATIOS in 12th-century biblia glosata: still without a citable numeric study. Next best routes: obtain Smith ch. 3 (91-139) via library access; request Morard's instrumenta id=202 content directly (or cite its existence); check de Hamel 1984 print copy; Zambardi 2025 thesis when HAL challenge clears.
2. Melanchthon and the Glossa: needs VD16/K10plus (currently unreachable network-wide) or Google Books snippet access once rate limits reset, targeting Froehlich's "The Fate of the Glossa Ordinaria in the Sixteenth Century" (pp. VII-19-VII-47) which almost certainly treats it.
3. Froehlich LQ 23 (2009) 29-48 interior: try JSTOR/Muse via institutional proxy, or ATLA.
4. Smith 2009 chapters 3-5 interiors: Brill purchase or institutional subscription; archive.org lending copy unchanged.
5. Whedbee 2025/2026 chapter and Andrée-Clark "School of Paris" classroom material (announced in Ekman bibliography as submitted manuscript, later PIMS volume): monitor for release.

## Blocked sources (honest record)

- brill.com chapter PDFs (Introduction etc.): EUR 35 per chapter; download endpoints return HTML (consistent with loop_25).
- Mediaeval Studies 73 (Andree 2011): PIMS/JSTOR gated; no open version found.
- Lutheran Quarterly vol. 23: journal website defunct (www.lutheranquarterly.com -> unresolvable lq-demo.com); JSTOR gated.
- api.openalex.org: "Insufficient budget ... resets at midnight UTC" (shared-IP exhaustion).
- api.semanticscholar.org and googleapis.com/books: HTTP 429 on every attempt this session.
- kxp.k10plus.de / gso.gbv.de (VD16): TCP connection refused on three attempts.
- prdl.org: connection timeout; lutheranquarterly.com: DNS failure; BASE API: IP/user-agent denial; html.duckduckgo.com and mojeek.com: bot challenges; Bing SERP: irrelevant results (query not honored).
- gloss-e instrumenta.php?id=202: content JS-loaded; archived snapshot equally empty; HAL mirror hal-03787540 has no attached file.
- HAL document endpoints (theses.hal.science/tel-05242151v1/document): anti-bot proof-of-work page returned instead of PDF.
- dergipark.org.tr article-file mirror for Guzeldal 2025 (used in loop_25): now 404.
- OAPEN/DOAB: Reilly's Cistercian Reform monograph not openly available.
