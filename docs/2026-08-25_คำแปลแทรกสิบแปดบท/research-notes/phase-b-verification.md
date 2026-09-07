# Phase B Verification Report

**Auditor:** Independent/Unbiased Verification Agent
**Date:** 2026-08-26
**Scope:** Phase B deep-dive loops B01–B20 under `output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\` plus `phase-b-report.md`. Phase A loops not re-audited (one cross-check performed against B15's Phase-A correction).
**Method:** structural census; 14-document integrity sample; forbidden-source grep over all 20 findings.md; five headline-claim checks against cited local files; 13 live URL fetches; red-flag scans (URL well-formedness over 260 unique URLs; unverified-claim-marker contradiction check); consistency check vs phase report.

---

## Summary verdict table

| Dimension | Result | Notes |
|---|---|---|
| Structural completeness | PASS (20/20) | All findings.md present, 11.2–25.1 KB each (threshold 3 KB). Documents on disk: 105/105, matching spec and phase report. No empty, tiny (<500 B), placeholder, TODO, or <10-line files anywhere. |
| Document integrity (sampled 14) | PASS (14/14 real) | All sampled harvests carry verbatim quotations, source URLs, dates, and honest caveats. 2 are metadata-only records (flagged below, not a defect). |
| Forbidden sources | PASS (0 violations) | Only hits: loop_B08 findings.md (lines 9, 38, 46, 52, 58) — all clearly marked finding-aid disclaimers or discussion of a published paper about Wikisource. Wikipedia used once as declared orientation-only (B16 L11) and one image-caption lead explicitly excluded (B07 doc). |
| Claim-consistency | 5/5 supported (1 wording defect inside claim b) | See detail below. |
| Link spot-check | 13/13 exist (11 OK-200; 2 blocked-but-existing; 0 dead) | Duke UP 403 bot-wall; Wayback EPUB transient 503 with snapshot confirmed available via availability API. |
| Hallucination red flags | 2 minor flags, 0 fatal | B10 item-count wording; B08 doc-count typo. No malformed URLs; no unverified-claim asserted as fact elsewhere. |
| Consistency vs phase-b-report.md | PASS | Per-loop doc counts match disk 20/20 (incl. B05=3, B08=7); totals match (105); gap-closure claims match loop-level records incl. carried-forward negatives. |

## Final recommendation: **PASS-WITH-FIXES**

The dataset is genuine, dense, and honestly caveated. Two small textual fixes required in loop_B10 before draft use (below); they affect precision, not validity, of the 1442-inscription claim.

---

## Detailed issues list

### Must-fix

1. **loop_B10\findings.md line 23 — appendix label + item count.**
   - Table row calls Bode's text "Appendix III". Both the harvested document (`loop_B10\documents\1909-Bode-pali-literature-burma.md`, heading "Appendix to Chapter III") and findings.md itself (line 37: "Bode's Appendix to Chapter III ('An Inscription of A.D. 1442')") show the correct form. There is no standalone "Appendix III" in Bode 1909. The same mislabel is echoed in `phase-b-report.md` line 21 ("Bode 1909 Appendix III").
   - Same row asserts a "~230-item donated library" (line 37 repeats "(~230+ items)"). The harvested document's own caveat states "she numbers items 1-295+", which contradicts ~230 unless the count excludes non-text sections. The ~230 figure cannot be derived from any local file and appears to be an undercount or transcription slip. Fix by re-deriving from the archive.org OCR or rewording to what the evidence supports (list numbered to 295+).
   - The core factual content is otherwise verified: the 1442 (b.e. 804) Taungdwin governor's inscription and exactly 15 explicit nissaya items (nos. 182, 183, 184, 185, 187, 250, 251, 252, 287, 288, 289, 290, 291, 292, 293) are fully supported by the local harvest.

### Should-fix (minor)

2. **loop_B08\findings.md line 5 — wrong document count.** Says "Documents saved: 6 files", then lists seven items, and disk contains 7 files in `loop_B08\documents\`. Phase report correctly says 7. Cosmetic typo only.
3. **Metadata-only records could be misread as full-text harvests.** Sampled:
   - `loop_B19\documents\2015-Dickey-columnar-translation.md` — Crossref metadata + abstract only (honestly labeled "verification record").
   - `loop_B10\documents\1994-Pruitt-efeo-bnf-record.md` — BnF catalogue record only (labeled "verified bibliographic record").
   Headers already disclose this; recommend keeping the distinction visible when compiling the master comparison table in Phase C.

### Verified clean (no action)

4. **Structural:** 20/20 findings.md (11,229–25,144 B); 105 documents; uniform layout `loop_BXX\documents\*.md`; no shells.
5. **Forbidden-source scan:** zero evidence-use of wikipedia/wikidata/wikisource/baidu. All Wikimedia strings occur inside explicit disclaimers (B08: data points held as "FINDING AIDS ONLY" pending institutional verification) or as objects of study (Citrawati & Putra 2024 WikiLontar paper). B16 line 11 discloses de.wikipedia fetched "ORIENTATION ONLY ... (never cited)". B07 document explicitly excludes a Wikipedia caption lead and marks it UNVERIFIED. This is compliant handling.
6. **Document integrity samples (all genuine):**
   - B01 `Song-Anonymous-JiujingSanzhuanYangeli-yinshi.md`: real Kanripo primary text with verbatim classical-Chinese passages and working translations.
   - B02 `[1157]-Fayun-Fanyimingyiji-translation-offices.md`: verbatim CBETA T54n2131 office-list passage + cross-evidence from T50n2060/T50n2053; honest caveat that the quoted Song Gaoseng zhuan passage was not located independently in CBETA search.
   - B03 `2026-Malzahn-cetom-gloss-corpus.md`: complete 51-item enumerated signature list + five worked examples; even flags 4 CEToM stub pages as placeholders *on the remote site* (not locally).
   - B05 `2020-Galambos-Dunhuang-Manuscript-Culture-fulltext.md`: chapter-mapped content notes from OA EPUB with license and Wayback route documented.
   - B10 Bode 1909 + Walker 2020 passages: verbatim OCR quotes; attribution-chain fix documented (Thaungdwin/governor belongs to Bode, not Walker p. 678).
   - B13 `[2015]-Formigatti-....md`: 272-pp. dissertation mined with page-pinned quotes; negative check on "FOR 963" recorded.
   - B14 `2002-Scherrer-Schaub-enacting-words.md`: 82-pp. JIABS PDF quotes with colophon transliteration.
   - B16 `1968-Klein-reichenauer-glossen-bstk317.md`: BStK Online record transcribed in codicological detail.
   - B19 `1992-McNamee-sigla-marginalia-papyri.md`: IA scan OCR quotes incl. "roughly three hundred Greek literary papyri".
   - B20 `[2025]-Peacock-chagatai-nonquranic-interlinear.md`: verbatim JAIS passages with verified holdings.
7. **Claim-consistency details (quotes):**
   - (a) SUPPORTED. loop_B16\findings.md L33: "BStK.-Nr. 317 = Karlsruhe BLB Aug. perg. 248 (= Codex Augiensis CCXLVIII = StSG 70)"; Klein doc sec. 1: Gallo-Romance corpus, "NOT an Old High German collection and NOT Bavarian"; loop_B15\findings.md L45: "GAP 1 RESOLVED AS CORRECTION - no verifiable 'Reichenau Psalter' standard exists." Phase-report key-finding 1 matches.
   - (b) SUPPORTED WITH FIX REQUIRED (see issue 1). Findings L23/L37 + Bode doc give the 1442 inscription, governor of Taungdwin, 15 explicit nissaya items.
   - (c) SUPPORTED. loop_B17\findings.md L51: "'500'000 sentences exégetiques'; equivalent of '46'000 pages A4 ou 12050 pages web'; page updated 27.2.2026"; local doc `2026-Morard-GlosseScopeStats.md` L7 carries the verbatim French sentence; GLOSSEM table total row: 1269/5352/684/142/593/340/2122 = 10,502.
   - (d) SUPPORTED. loop_B07\findings.md L33: Nguyen Thi Thu Huyen, Sungkyun JEAS 25(2):183-212 (2025) with Duke URL and DOI 10.1215/15982661-11966689; document confirms giải âm genre definition and Luận ngữ ước giải (1839, AB.270/3).
   - (e) SUPPORTED. loop_B03\findings.md L25: "parsed locally -> 51 '; Gloss' entries extracted with signatures"; document enumerates exactly 51 numbered entries.
8. **Link spot-check (browser UA, HEAD unless noted):**
   - OK 200 (11): glossen.germ-ling.uni-bamberg.de/bstk/317; gloss-e.irht.cnrs.fr/php/page.php?id=239; ediss.sub.uni-hamburg.de/handle/ediss/6463; archive.org/details/paliliteratureof00bode; archive.org/details/siglaselectmargi00mcna; journals.uio.no/JAIS/article/view/12693; doi.org/10.7817/jameroriesoci.140.3.0675; univie.ac.at/tocharian/?manuscripts; journals.ub.uni-heidelberg.de jiabs 8927; github.com cbeta T54n2131.xml.
   - Blocked-but-existing (2): read.dukeupress.edu (403 on HEAD and GET — known bot-wall; abstract access previously documented in loop); web.archive.org EPUB capture (transient 503; availability API confirms archived snapshots for the URL).
   - Dead: 0.
9. **Hallucination red-flag scan:** 260 unique URLs reviewed — all well-formed (percent-encodings valid; "..." occurrences are prose elisions, not URLs). The Thai unverified-marker appears 60+ times across Phase B files and is consistently paired with caveats; cross-checked cases (B01 decade-scale dating, B02 Chen Jinhua title, B04 Tangut blockprint interlinear, B08 pamurtian) are carried into phase-report gaps/Phase-C tasks rather than asserted as fact. Known printed discrepancies (Formigatti 2015 title page vs 2011 disputation date; Pruitt monograph 1994/impr. 1995; Okell review 1996/1997) are recorded as printed, not silently normalized — correct practice.
10. **Consistency vs phase report:** per-loop doc counts identical to disk 20/20; total 105 confirmed; limitation section (rate-limits, paywalls) matches loop-level "Blocked sources" logs; Phase-C gap list corresponds to the unverified markers found in loops.

*Audit artifacts: temporary URL inventory at `%TEMP%\opencode\b_urls.txt`; no project data files were modified.*
