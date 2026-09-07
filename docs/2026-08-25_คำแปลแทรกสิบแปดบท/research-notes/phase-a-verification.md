# Phase A Verification Report

**Date:** 2026-08-26
**Auditor role:** Independent/Unbiased Verification Agent (no stake in research outcome)
**Scope audited:** `output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_01` ... `loop_30` (findings.md + documents\), plus `phase-a-report.md`
**Method:** full-disk structural scan, 15-document integrity sample across 10 loops, regex scans of all findings.md, live HTTP fetches of 14 URLs, targeted cross-reference checks of uncertainty-marked claims.

---

## Summary Verdict Table

| Audit dimension | Result |
|---|---|
| Structural completeness | PASS — 30/30 loops have findings.md (min 12,910 bytes, all >3KB); 187/187 documents present; per-loop doc counts match phase report exactly |
| Document integrity | PASS — 0/15 sampled files are error pages, CAPTCHA shells, or placeholders; 6/15 are honestly-labeled metadata/abstract-only records rather than full text |
| Forbidden-source scan | PASS-WITH-NOTE — 0 citations of wikipedia.org / wikidata.org / baike.baidu as evidence sources; 6 loops carry explicit "keyword discovery only" disclaimers; 1 borderline case (loop_15 Wikisource/Wikidata QIDs used inside evidence rows without a disclaimer) |
| Link spot-check | 12/14 URLs live and resolving (200); 1 stale direct-PDF path (HTTP 404; record page alive); 1 unreachable after two attempts (IP-hosted PDF, timeout x2) |
| Hallucination flags | PASS — no fabricated URLs detected; suspicious-looking double-dot DOI verified real via doi.org resolution to KCI; uncertainty-marker discipline held under cross-check |
| Consistency vs phase-a-report.md | PASS — total doc count (187), every per-loop count, saturation labels, and gap lists match disk reality |

**Overall recommendation: PASS-WITH-FIXES** (3 minor fixes + 2 cosmetic; see below). No critical issues found. Phase A data is fit to proceed to Phase B once the fixes are applied.

---

## 1. Structural Completeness

Verified programmatically over all 30 loop directories:

- All 30 `findings.md` exist. Size range: 12,910 bytes (loop_16) to 29,510 bytes (loop_14). None below the 3KB threshold.
- Total harvested documents: **187**, exactly matching the claim in phase-a-report.md line 4.
- Per-loop document counts match phase-a-report.md's table on **all 30 rows** (e.g., loop_03 = 11, loop_09 = 4, loop_27 = 5, loop_30 = 7).
- No empty files anywhere in the tree.

Three documents are under 2KB. All three were read in full; none is a failed fetch — each is an explicitly-labeled metadata/abstract-level record:

| File | Size | Status |
|---|---|---|
| `loop_19\documents\2026-Sripum-ayutthaya-kham-luang-bitexts.md` | 1,822 B | Metadata verified via Crossref; paywall at Project MUSE stated in file |
| `loop_20\documents\1850-Wilson-SayanaVijayanagaraDate.md` | 1,987 B | Real OCR quotation from archive.org scan; short but substantive |
| `loop_29\documents\[2024]-Khan-shah-wali-allah-interlinear.md` | 1,973 B | Verbatim Crossref abstract; paywall stated in file |

## 2. Document Integrity Sampling (15 files)

Sampled across loops 02, 05, 09, 14, 19, 20, 22, 25, 27, 29, 30:

| File (short name) | Verdict |
|---|---|
| loop_02 Dotan Masorah EJ | Full-text harvest, 1,824 lines, genuine article text with outline |
| loop_02 Fedeli PhD abstract | Genuine repository abstract; full PDF deferred, labeled |
| loop_05 Mabillon De re diplomatica | Genuine: OCR Latin passages from 1709 ed. + Britannica/HistoryofInformation context |
| loop_09 Malzahn CEToM entries | Excellent: verbatim pressmark guidelines, THT 527 transliterations, full gloss-signature list |
| loop_14 Kono kunten chapter | Metadata-only record; access status honestly stated ("full text not fetched this loop") |
| loop_14 Tsutsumi wokototen DB | Abstract-based but substantive; author-name caveat self-corrected in file |
| loop_19 Sripum kham luang | Metadata-only via Crossref; labeled |
| loop_20 Wilson Sayana preface | Genuine OCR quotation with scan identifier |
| loop_22 van Schaik dbu med | Weak provenance (see flag F5), but disclosed in-file |
| loop_25 CUDL MS Dd.8.12 | Genuine verbatim catalogue passages with source URL |
| loop_27 Due Recapturing record | Catalog record only; harvest status honestly labeled |
| loop_27 HMT papyri README | Full verbatim capture of GitHub README |
| loop_29 Khan Shah Wali Allah | Abstract-only; labeled |
| loop_29 Zaferani Qur'an | News-source based; explicit caution note ("news-level reporting") |
| loop_30 Mahavyutpatti/Silk compilation | Multi-source compilation; every fact carries an inline URL |

No CAPTCHA text, no cookie-wall residue, no "access denied" bodies, no placeholder-only files in the sample. Six of fifteen are metadata/abstract records rather than full texts; all six disclose this in-file, so I do not count them as integrity failures — but see flag F4 on proportion.

### Flags from sampling

- **F5 (weak provenance, disclosed):** `loop_22\documents\2012-vanSchaik-dbu-med-origin.md:6,11` — the core thesis quote rests on a search-index excerpt because the Brill preview returned raw binary. The limitation is stated in the file itself. Recommend re-harvesting via the Brill preview URL (verified live during this audit) in Phase B.
- **F4 (composition note):** roughly 40% of the sample is metadata/abstract-level rather than full text. This is acceptable for Phase A breadth-first foraging given the honest labeling, but Phase B must convert key items (Kono 2021, Khan 2024, Sripum/Walker 2026, Due 2009 chapters) into full-text evidence before they anchor chapter claims.

## 3. Forbidden Source Scan

Regex scan (`wikipedia|wikidata|baike.baidu`, case-insensitive) over all 30 findings.md plus the whole tree:

- **baike.baidu: zero hits anywhere.**
- **wikipedia.org/wikidata.org as cited evidence sources in findings tables: zero hits.**
- Explicit disclaimers found (acceptable per protocol): loop_12:64, loop_13:90, loop_14:113, loop_17:84, loop_18:73, loop_23:80 — all state Wikipedia/Wikidata were keyword-discovery only, never cited.
- Document-folder hits are also clean: `loop_08\documents\...Kotobank...md:6` and `loop_30\documents\[1520]-Cisneros-ComplutensianPolyglot.md:23` both contain explicit "used for keywords only, not cited" notes.

### Flag

- **F1 (borderline, minor):** `loop_15\findings.md:39,67,79` cites `ban.wikisource.org` record pages and a Wikidata QID (Q109381051) inside evidence table rows for manuscript records, without the "keyword discovery only" disclaimer pattern other loops use. Technically these are Wikimedia projects, not Wikipedia encyclopedia articles, and Wikisource hosts transcriptions of primary manuscripts — but the loop lacks the standard disclaimer, breaking the project's own consistency rule. Fix: add a one-line disclaimer to loop_15 clarifying that Wikisource/Wikidata served as finding aids/metadata registries and underlying authority is the Balai Bahasa/genealogical record.

## 4. Link Existence Spot-Check (live fetch, browser UA)

14 unique URLs fetched (HEAD, GET fallback; 15-18s timeouts):

| # | URL (source) | Result |
|---|---|---|
| 1 | chs.harvard.edu/book/recapturing-a-homeric-legacy... (loop_27) | OK 200 |
| 2 | cudl.lib.cam.ac.uk/view/MS-DD-00008-00012/2 (loop_25) | OK 200 |
| 3 | iqna.ir/en/news/3498469/ (loop_29) | OK 200 |
| 4 | doi.org/10.1353/mns.2026.a990231 (loop_19) | OK 200 (resolves) |
| 5 | cid.ninjal.ac.jp/kunten-syousyo3/ (loop_14) | OK 200 |
| 6 | ban.wikisource.org/wiki/Kekawin_Bharatayuda_Maarti_(...) (loop_15) | OK 200 |
| 7 | archive.org/details/gri_33125008690477 (loop_05) | OK 200 |
| 8 | glossaries.dila.edu.tw/glossaries/MVP?locale=en (loop_30) | OK 200 |
| 9 | cetom.univie.ac.at/?m-tht527 (loop_09) | OK 200 |
| 10 | brill.com/previewpdf/.../B9789004233454-s016.xml (loop_22) | OK 200 (71KB body) |
| 11 | etheses.bham.ac.uk/id/eprint/5864/ record page (loop_02) | OK 200 |
| 12 | doi.org/10.17001/kugyol.2017..38.007 (loop_03) | OK 200 — resolves to KCI article page (genuine DOI, not fabricated) |
| 13 | etheses.bham.ac.uk/id/eprint/5864/1/Fedeli15PhD.pdf (loop_02 doc) | **HTTP 404** — direct PDF path stale; record page (#11) alive |
| 14 | http://140.123.13.91/journal/article/33_02.pdf (loop_03:60,82; loop_07:93) | **Timeout x2** — unreachable from audit network; cannot confirm existence |

Tally: **12/14 existing (OK or resolving)**, 1 stale-path (domain alive), 1 unverifiable/unreachable.

### Flags

- **F2 (stale link):** `loop_02\documents\2015-Fedeli-EarlyQuranicManuscripts-abstract.md:4` — direct PDF URL returns 404. The repository record URL in the same file works. Fix: update the document to cite the record page as primary and mark the old PDF path as moved.
- **F3 (unverifiable link):** the NCNU Taiwan IP-hosted OA PDF cited as core Jingdian shiwen evidence in loop_03 (lines 60, 82) and relied on again in loop_07 (line 93) timed out twice. IP-address URLs are inherently fragile. Fix: attempt an archived mirror (Wayback) in Phase B and add a fallback note; until then treat that item's accessibility as unstable.

## 5. Hallucination Red-Flag Scan

- **Malformed URLs:** automated sweep of every URL in all findings tables found no fabricated patterns. Two literal-ellipsis strings exist: `loop_02\findings.md:91` (`https://shs.hal.science/...`) is a documented bot-check interstitial note, and `loop_22\findings.md:75` (`https://journaloftibetanliterature.org/.../42/210`) is display shorthand whose full form appears correctly at line 28 (and resolves — related JTL domain was reachable pattern-wise; the specific article path was not individually fetched, noted here as not independently confirmed). Cosmetic only — see F6.
- **Suspicious double-dot DOI:** `10.17001/kugyol.2017..38.007` (loop_03:25) looked fabricated but live-resolves via doi.org to a KCI article landing page. Verified genuine. Also `10.17001/kugyol.2024..53.001` follows the same KISTI convention.
- **Uncertainty markers:** 74 instances of "(ยังไม่พบข้อมูลยืนยัน)" across findings.md — pervasive and appropriately placed. Cross-checked the highest-risk cases:
  - McNamee 1992/2007: marked inaccessible in loop_01:72 and loop_27:100; never asserted as consulted fact anywhere; correctly carried into phase-report gap B19.
  - Sabbadini 1905: marked "no OA copy located" (loop_04:41) and explicitly flagged "not yet accessible" (loop_04:95). No contradiction found.
  - Maurist Augustine edition (loop_05:110-111): marked unverified; does not resurface as asserted fact.
  - Headline stat "Gloss Corpus v1.0 = 66 collections / 24,872 glosses": traced to a verbatim quote in `loop_30\documents\[2024]-Moran-GlossCorpus.md:12` and independently repeated in loops 06 and 24. Consistent and sourced.
- **Author-title-year discipline:** sampled table rows include years throughout (loops 03, 04, 06, 22, 24, 30 checked). One undated web resource (HMT README) is explicitly dated by fetch year in-filename with a note — acceptable practice.
- No case found where a marker-flagged unverified item was elsewhere asserted as fact. **Zero hallucination flags at severity above cosmetic.**

## 6. Consistency Check vs phase-a-report.md

- Total raw data claim (30 findings.md + 187 docs): matches disk exactly.
- Per-loop doc counts: 30/30 rows match.
- Saturation labels (loops 01-06 saturated; 07-30 needs Phase B) are directionally supported by the sampled content quality.
- Gap lists: every named gap in the phase report traces to a "(ยังไม่พบข้อมูลยืนยัน)" or explicit follow-up marker in the corresponding loop. Spot-verified: McNamee -> B19, Cherniack 1994 -> B01, Galambos -> B05, Reichenau Psalter shelfmark -> B15, Feder study -> B18.
- Minor observation (no action required): the report says gaps will be covered by "20 Foraging Loops" while 24 individual loops are tagged "needs Phase B"; the numbered gap list (B01-B20) consolidates them coherently, so this is consolidation, not contradiction.

## Consolidated Fix List

1. **F1** — Add standard keyword-discovery/non-citation disclaimer for Wikisource/Wikidata usage in `loop_15\findings.md` (consistency with loops 12/13/14/17/18/23).
2. **F2** — Correct stale direct-PDF link in `loop_02\documents\2015-Fedeli-EarlyQuranicManuscripts-abstract.md`; cite the working eprints record page as primary.
3. **F3** — Stabilize or annotate the unreachable `http://140.123.13.91/journal/article/33_02.pdf` dependency (loop_03/loop_07): find Wayback/archive mirror or mark accessibility-unstable in both findings.
4. **F4 (Phase B obligation, not a blocker)** — Convert the six metadata-only sampled records (Kono 2021, Tsutsumi 2022 partial, Sripum/Walker 2026, Khan 2024, Due 2009 chapters) to full-text evidence before they support chapter-level claims.
5. **F5 (Phase B obligation)** — Re-harvest vanSchaik dbu-med chapter via the live Brill preview URL to replace search-index excerpt provenance.
6. **F6 (cosmetic)** — Replace literal `...` URL shorthands (loop_02:91, loop_22:75) with full URLs or clearly non-URL placeholders.

## Final Recommendation

**PASS-WITH-FIXES.** Structure, sourcing discipline, honesty labeling, and report consistency are strong; no forbidden-source violations and no fabricated-evidence findings. Apply fixes F1-F3 and carry F4-F6 into the Phase B entry criteria.
