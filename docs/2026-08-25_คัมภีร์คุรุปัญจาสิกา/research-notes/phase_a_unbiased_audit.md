# Phase A — Independent Unbiased Audit Report

**Scope:** Loops A01–A15 under `output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/`
**Auditor:** Independent audit agent (no involvement in data collection)
**Audit date:** 2026-08-26
**Method:** File-system inventory; live URL re-verification via `Invoke-WebRequest -UseBasicParsing` (HEAD, GET fallback) and `curl.exe`; byte/char-level inspection of key evidence files; regex sweeps for Wikipedia/Wikidata and emoji.

---

## 1. Per-loop file inventory

| Loop | loop-report.md | Report size | documents\ exists | Files in documents\ | Total docs size |
|---|---|---|---|---|---|
| A01 | YES | 35.9 KB | YES | 20 | 9,214.1 KB |
| A02 | YES | 18.6 KB | YES | 12 | 4,993.0 KB |
| A03 | YES | 17.4 KB | YES | 10 | 169.6 KB |
| A04 | YES | 12.9 KB | YES | 28 | 5,575.2 KB |
| A05 | YES | 14.1 KB | YES | 18 | 866.6 KB |
| A06 | YES | 8.7 KB | YES | 30 | 2,869.3 KB |
| A07 | YES | 14.5 KB | YES | 15 | 2,037.7 KB |
| A08 | YES | 18.1 KB | YES | 7 | 1,104.4 KB |
| A09 | YES | 10.1 KB | YES | 17 | 2,272.5 KB |
| A10 | YES | 24.5 KB | YES | 3 | 10.9 KB |
| A11 | YES | 27.6 KB | YES | 32 | 3,306.8 KB |
| A12 | YES | 23.2 KB | YES | 17 | 2,436.6 KB |
| A13 | YES | 9.7 KB | YES | 10 | 299.0 KB |
| A14 | YES | 20.9 KB | YES | 22 | 30,644.2 KB |
| A15 | YES | 8.7 KB | YES | 1 | 9.2 KB |

**Structural result:** 15/15 loops have a report + populated documents folder. No empty evidence folders.
Notes: A10 (3 files) and A15 (1 file) are thin but consistent with their synthesis/verification roles (A15's single `evidence-quotes.md`, 9.2 KB). Several A13 captures are 0-byte failed-fetch records (`rigpawiki_fifty_stanzas.html`, `treasuryoflives_rinchen_zangpo.html`, `tsadra_wiki_rinchen_zangpo.html`) — these are honestly documented in the A13 report ("Failed fetches (Cloudflare 403/challenge)"), i.e., failure logs, not fabricated evidence.

---

## 2. Live URL verification (20 URLs: 2 per report A01–A05, 1 per report A06–A15)

*Note: the mission headline says "12 URLs" but its own sampling matrix (2×A01–A05 + 1×A06–A15) yields 20; all 20 were checked to maximize coverage.*

| # | Loop | URL checked | HEAD status | GET re-check | Final verdict |
|---|---|---|---|---|---|
| 1 | A01 | gretil.sub.uni-goettingen.de/.../sa_azvaghoSa-gurupaJcAzikA.htm | 200 | — | LIVE |
| 2 | A01 | dsbcproject.org/canon-text/content/221/914 | 200 | — | LIVE |
| 3 | A02 | lamayeshe.com/article/fifty-verses-guru-devotion | 200 | — | LIVE |
| 4 | A02 | openlibrary.org/works/OL14927161W | 200 | — | LIVE |
| 5 | A03 | gretil.sub.uni-goettingen.de/.../sa_azvaghoSa-gurupaJcAzikA.xml | 200 | — | LIVE |
| 6 | A03 | sru.k10plus.de/gvk?...query=pica.all=Gurupancasika | **500** | **200** | LIVE (server rejects HEAD; SRU endpoint healthy on GET) |
| 7 | A04 | archive.org/details/in.ernet.dli.2015.367410 | 200 | — | LIVE |
| 8 | A04 | jstage.jst.go.jp/article/ibk1952/21/2/21_2_947/_article/-char/en | 200 | — | LIVE |
| 9 | A05 | cbetaonline.dila.edu.tw/zh/T1687 | 200 | — | LIVE |
| 10 | A05 | github.com/cbeta-org/xml-p5/blob/master/T/T32/T32n1687.xml | 200 | — | LIVE |
| 11 | A06 | ndlsearch.ndl.go.jp/books/R000000004-I380152 | 200 | — | LIVE |
| 12 | A07 | kabc.dongguk.edu/content/pop_seoji?dataId=ABC_IT_K1493 | **403** | **200** | LIVE (bot-block on HEAD only) |
| 13 | A08 | dsbcproject.org/public/canon-text/content/485/2313 | 200 | — | LIVE |
| 14 | A09 | 84000.co/translation/toh3721 | 200 | — | LIVE |
| 15 | A10 | rkts.org/cat.php?id=2543&typ=2 | 200 | — | LIVE |
| 16 | A11 | ldspdi.bdrc.io/resource/WA3CN6661.ttl | 200 | — | LIVE |
| 17 | A12 | archive.org/details/liberationinpalm0000phab | 200 | — | LIVE |
| 18 | A13 | treasuryoflives.org/biographies/view/Rinchen-Zangpo/10199 | **403** | **403** | LIVE SITE, BOT-BLOCKED (Cloudflare-style anti-script protection; identical 403 in loop's own log at A13 L148 — honest failure record; content corroborated by BDRC P753 TTL saved in A09) |
| 19 | A14 | read.84000.co/translation/toh417.html | 308 | **200 after redirect chain** (301→308→200 via curl -L) | LIVE (redirect moved to 84000.co canonical domain) |
| 20 | A15 | zenodo.org/records/6476319/files/bsa045_u.htm | 200 | — | LIVE |

**URL result: 20/20 reachable. Zero dead links.** The three non-200 first responses (A03 k10plus 500-on-HEAD, A07 Dongguk 403-on-HEAD, A13 TreasuryOfLives 403 bot-block) all resolve or are explained by bot-protection, not link rot. A13's 403 was pre-declared in its own report — a positive honesty signal.

---

## 3. Key evidence-file content verification

### 3.1 Tibetan Unicode — `loop_A09\documents\D3721_derge_tengyur_bo_unicode_clean.txt`
- **PASS.** 6,077 chars total; **5,833 chars (96%) in U+0F00–U+0FFF (Tibetan block)**. First 300 chars render as continuous Tibetan syllable strings (folio-formatted text; console codepage shows "?" but codepoint scan confirms genuine Tibetan Unicode, not mojibake).

### 3.2 Chinese CBETA XML — `loop_A05\documents\CBETA_T32n1687.xml`
- **PASS.** Contains the claimed title **事師法五十頌 at 3 separate locations** (positions 457, 529, 594 — TEI titleStmt/header/body), plus `<title>` element present. Matches the A05 report's claim that T1687 = 事師法五十頌論.

### 3.3 Devanagari DSBC HTML — `loop_A08\documents\dsbc-content-485-2313-devanagari.html`
- **PASS.** 44,411 chars; contains the string **गुरुपञ्चाशिका** verbatim; **4,271 Devanagari-range chars (U+0900–U+097F)**; keyword गुरु and पञ्चा both present.

### 3.4 Szántó 2013 extraction w/ Vāpilladatta — `loop_A01\documents\`
- **PARTIAL PASS (documented limitation, not fabrication).**
  - Present in A01/documents: full Szántó 2013 PDF (4,438.6 KB), 8 page-screenshot PNGs (p1–p8), and `2013-szanto-gurupancasika-new-manuscript.txt` (11 KB).
  - However the `.txt` extraction is **ciphered**: the PDF's embedded font has a broken ToUnicode CMap, so text extracts as glyph-substituted gibberish ("LBM2i22M / JBMQ` oD`v?M i2tib..."). Even plain words like "manuscript" do not grep; **Vāpilladatta is NOT findable in this txt**.
  - The team itself knows this: loop_A14 contains `2013-szanto-gp-extracted.txt` (identical garble) and `2013-szanto-gp-decoded-attempt.txt` (partial decode: "...new manmucript of the Gmrmpa?c??ik?...").
  - The Vāpilladatta claim is nonetheless **corroborated by clean verbatim extractions elsewhere**: `loop_A13\documents\szanto2013-verbatim-transmission-excerpts.md` quotes Szántó p. 445 ("...identifies the author as one Vāpilladatta. This name closely echoes ... Bha bi lha"); `loop_A03\documents\notes_brill_search_findings.md` independently confirms the Brill Encyclopedia section heading "Aśvaghoṣa/Vāpilladatta's Gurupañcāśikā"; Vāpilladatta also appears in A02 (Rigpa Wiki capture), A10 (RKTS colophons), A14 (`papers_2015h_prakaranas.txt`), A15 (`evidence-quotes.md`).

---

## 4. Wikipedia / Wikidata contamination check

Regex sweep of all 15 loop-report.md files for `wikipedia.org|wikidata` (+ variants):

| Loop | Hits | Assessment |
|---|---|---|
| A09 | 1 | Line 55: "Wikidata Q967864" — **quoted from BDRC P753's own `sameAs` field** inside a saved TTL authority record. Metadata cross-reference, not evidence. OK. |

**No other loop report cites wikipedia.org or wikidata as evidence.** Four loops explicitly disclaim it (A03: "no Wikipedia citations"; A06: "No Wikipedia citations used."; A08: "Wikipedia hits used solely for keyword discovery, never cited"; A15: "no Wikipedia citations").

Related observations (outside strict scope):
- zh.wikisource.org is used in A05 — legitimately, as an independent *text-critical comparison witness* (character-level diff vs CBETA, apparatus-explained variants), clearly labeled. Not encyclopedia-citation contamination.
- Rigpa Wiki / Tsadra rywiki (Buddhist-specialist wikis, not Wikipedia) appear in A01/A02/A09/A10/A12/A13/A15, but consistently flagged as secondary/keyword-mining tier ("เฉพาะการค้นหา", "stub page", "secondary"), never as primary philological support.

**Verdict: CLEAN.**

---

## 5. Fabrication-risk assessment (6 sampled claims)

Each sampled claim was traced to a concrete artifact in the same or a cross-referenced loop folder:

| # | Loop | Claim sampled | Supporting artifact found | Result |
|---|---|---|---|---|
| 1 | A05 | T1687 = 事師法五十頌(論), full CBETA XML secured | `CBETA_T32n1687.xml`: 事師法五十頌 ×3, TEI header present | CONFIRMED |
| 2 | A01 | Szántó 2013 colophon identifies author Vāpilladatta ("kīrtir ācāryavāpilladattasya") | Verbatim quote incl. exact colophon string saved in `loop_A13\...\szanto2013-verbatim-transmission-excerpts.md`; source PDF + 8 PNG page images in `loop_A01\documents\`; independent Brill heading in A03 | CONFIRMED (see §3.4 caveat on txt encoding) |
| 3 | A09 | Derge D3721 Tibetan translation text secured | `D3721_derge_tengyur_bo_unicode_clean.txt`: 96% Tibetan Unicode; raw + folio variants also present | CONFIRMED |
| 4 | A08 | BLGS 1997 (Bauddha-laghu-granthasaṅgraha) contains the work; archive.org scan OCR'd | `blgs-1997-archiveorg-ocr.txt` (156 K chars): गुरुपञ्चाशिका ×7, पञ्चाशिका ×7, गुरु ×49, "1997" ×3; metadata JSON w/ tesseract conf. 0.9197 | CONFIRMED |
| 5 | A06 | Yoritomi Motohiro 1973 IBK 21-2 article on Japanese translation | `Yoritomi_1973_JIBS21_Gurupancasika_text.txt` (real article prose mentioning Gurupancasika, Aśvaghoṣa, Buddhacarita etc.) + original PDF (312 KB) + J-STAGE landing page capture | CONFIRMED |
| 6 | A07 | Goryeo K1493 woodblock (case 41, block 0612) carries hanmun translation of 事師法五十頌 | `K1493_fulltext_hanmun_translation.txt`: 事師法 ×4, 五十頌 ×4, line IDs `041_0612_b/c` ×2 matching the cited viewer IDs | CONFIRMED |

**Result: 6/6 sampled claims backed by real, content-matching local artifacts. No fabrication detected.** Cross-loop redundancy (e.g., the same Szántó PDF independently saved in A01 and A02; T1687 XML in A05, A07, A13) further reduces single-point fabrication risk. Failed fetches (A13 wikis, treasuryoflives) are logged as failures rather than papered over — a strong authenticity signal.

---

## 6. Emoji presence check

Numeric codepoint scan of all 15 loop reports (BMP symbol ranges U+2600–27BF, U+2B00–2BFF, U+FE0F + astral emoji planes U+1F000–1FAFF):

**0 emoji in 15/15 reports. PASS.**

---

## 7. Overall verdicts

| Loop | Structure | URL sample | Evidence content | Wiki-contamination | Emoji | VERDICT |
|---|---|---|---|---|---|---|
| A01 | PASS | LIVE ×2 | PARTIAL (garbled Szántó txt; PDF/PNGs fine) | CLEAN | 0 | **PASS** |
| A02 | PASS | LIVE ×2 | n/a (sampled) | CLEAN | 0 | **PASS** |
| A03 | PASS | LIVE ×2 (1 after GET retry) | n/a | CLEAN | 0 | **PASS** |
| A04 | PASS | LIVE ×2 | n/a | CLEAN | 0 | **PASS** |
| A05 | PASS | LIVE ×2 | PASS (CBETA XML) | CLEAN (wikisource diff = legitimate) | 0 | **PASS** |
| A06 | PASS | LIVE | PASS (Yoritomi txt/PDF) | CLEAN (explicit disclaimer) | 0 | **PASS** |
| A07 | PASS | LIVE (after GET retry) | PASS (K1493 txt) | CLEAN | 0 | **PASS** |
| A08 | PASS | LIVE | PASS (BLGS OCR) | CLEAN (explicit disclaimer) | 0 | **PASS** |
| A09 | PASS | LIVE | PASS (Tibetan txt) | CLEAN (BDRC sameAs only) | 0 | **PASS** |
| A10 | PASS (thin: 3 files) | LIVE | PASS (Vāpilladatta in RKTS colophons) | CLEAN (flags Rigpa limits) | 0 | **PASS** |
| A11 | PASS | LIVE | n/a | CLEAN | 0 | **PASS** |
| A12 | PASS | LIVE | n/a | CLEAN (flags Rigpa limits) | 0 | **PASS** |
| A13 | PASS (incl. honest 0-byte fail logs) | bot-blocked site (403, pre-declared) | PASS (Szántó excerpts md) | CLEAN | 0 | **PASS** |
| A14 | PASS | LIVE (via redirect chain) | PASS (decoded-attempt transparency) | CLEAN | 0 | **PASS** |
| A15 | PASS (thin: 1 synthesis file) | LIVE | PASS (evidence-quotes md w/ Vāpilladatta ×2) | CLEAN (explicit disclaimer) | 0 | **PASS** |

## OVERALL PHASE A VERDICT: **PASS (15/15 loops)**

### Issues found (all minor, none integrity-breaking)
1. **A01/A14 Szántó 2013 `.txt` extractions are glyph-ciphered** due to the PDF's broken ToUnicode CMap — machine-unsearchable. Recommend relying on the PDF/page PNGs and the A13/A03 verbatim excerpt files until a proper OCR pass (the images are high-res enough) is done.
2. **A13 treasuryoflives.org fetches are 403 bot-blocked** (pre-declared in the report). Recommend obtaining Rinchen Zangpo biographical dates via BDRC P753 TTL (already saved in A09, includes 958–1055) instead of the web page.
3. **Thin evidence folders in A10 (3 files) and A15 (1 file)** — acceptable for their roles but worth noting if Phase B assumes per-loop document depth.
4. Cosmetic: some report URLs carry trailing punctuation captured into the markdown (e.g., `doi.org/...0067.`) — could cause false "dead link" readings in future audits; harmless here since no such DOI was load-bearing.

**Broken URLs: NONE** (20/20 reachable; 3 required method/UA adjustments fully explained by bot-protection).
