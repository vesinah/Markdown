# Phase C Verification Report

**Auditor:** Independent/Unbiased Verification Agent
**Date:** 2026-08-26
**Scope:** Phase C only (loop_C01 ... loop_C10), plus master-comparison-table.md and phase-c-report.md. Phases A/B not re-audited except where cross-checked.

---

## Verdict Table

| Dimension | Result | Notes |
|:---|:---:|:---|
| Structural | PASS | All 10 loop_CXX have findings.md (>3 KB each; min 10.5 KB loop_C06). Documents on disk: 42 (C01:4, C02:4, C03:4, C04:5, C05:4, C06:3, C07:4, C08:4, C09:4, C10:6) — matches the phase-report claim exactly. Cumulative stats verified: 60 loops with findings.md, 334 documents total (= 187+105+42). |
| Document integrity (12 files sampled) | PASS | All sampled documents contain real harvested content (verbatim quotes, bibliographic records, access routes, caveats). Zero shells/placeholders. Smallest files (loop_C10 site-checks, 0.9–2.1 KB) are legitimately scoped single-page verification records, not stubs. |
| Forbidden-source scan | PASS | No wikipedia/wikidata/wikisource/baike URL used as an evidence source in any loop_CXX findings.md. All wiki mentions are disclaimers ("never cited", "used ONLY as discovery aids"), meta-discussion of the Wikisource verification obligation (C06), or explicitly excluded leads (C10 Vietnam row: Wikipedia-only lead marked unverified and excluded — correct handling). |
| Claim-consistency | 5/5 PASS | (a), (b), (c), (d), (e) all verified against local files; (c) additionally verified live. Details below. |
| Link spot-check | 9/9 existing (8 OK, 1 blocked-but-existing) | 9 URLs fetched live, <=20 s each. None dead. Details below. |
| Saturation assessment soundness | MOSTLY SOUND — one caveat | Both criteria disclosed with supporting narrative, but Criterion 1 is applied under a softened interpretation (see Issue 5). |

**Final recommendation: PASS-WITH-FIXES**

---

## Detailed Issues

### Must-fix

1. **Stale/false process note in master-comparison-table.md (contradicts disk state and the phase report).**
   `research-notes\master-comparison-table.md`, Part 7, item 9: "loops C07-C09 contain no findings.md (empty documents folders only) — their planned topics were absorbed by C01-C06 gap-closing work; flagged for the phase report."
   This is false as of the audit: loop_C07, loop_C08 and loop_C09 each contain a substantive findings.md (12.5 / 20.2 / 16.5 KB) plus populated documents folders. It also contradicts phase-c-report.md, which reports C07-C09 as completed loops with results (Thai residual, Greco-Roman/Egypt residual, Medieval Latin residual) and flags nothing of the sort. This line appears to be a leftover from an intermediate state of Phase C and must be deleted or rewritten before Phase D.

2. **Contradictory remaining-holes entry for McNamee in master-comparison-table.md.**
   `research-notes\master-comparison-table.md`, Part 7, item 4: "McNamee 2007 exact annotated-papyrus count unverified (partial IA scan only)."
   This contradicts both loop_C08 (`research-notes\loop_C08\documents\2007-McNamee-ASP45-ISAW-fulltext.md`: verbatim p. 2 quote "293 ancient manuscripts", NYU ISAW full PDF, 640 pp.) and the phase report ("count CLOSED at primary source (NYU ISAW full PDF: 293 mss)"). The Part 7 list predates the C08 closure and was not reconciled. Remove or annotate as resolved-by-C08.

### Should-fix (minor)

3. **Byte-size discrepancy on the ISAW PDF record.**
   `research-notes\loop_C08\documents\2007-McNamee-ASP45-ISAW-fulltext.md` line 10 states the hi-res PDF is "681,370,217 bytes". The live ISAW viewer (checked 2026-08-26) currently lists "High resolution PDF 260.70 MB (searchable)" and low-res 48.48 MB; page count 640 still matches the local note. Either NYU replaced/re-encoded the file after harvest or the recorded size came from a different transfer. Content claims are unaffected (293-mss quote is internal to the book), but the access-route metadata should be re-verified before citing file properties in the draft.

4. **Wiki-family source used inside an otherwise wiki-free chain.**
   `research-notes\loop_C10\documents\[1178]-QaraKhitai-Tianxi-era-fix.md` cites ctext.org "datawiki" (source 2) for the Tianxi-era reconstructions (Wang Yuansun 1178–1211; Ji Anzong 1178). ctext datawiki is not in the project's forbidden list (wikipedia/wikidata/wikisource/baike) and Iranica independently confirms the reign range 1178-1211 (Yelü Zhilugu), so the load-bearing fact stands. However, the fine-grained year-reckoning attributions rest on a wiki-type secondary rendering of Chinese scholarship; flag for upgrade to a printed sinological source if the Ch 3716 date discussion grows beyond its current caveat status.

5. **Saturation Criterion 1 is interpreted rather than literally applied — disclose the interpretive move.**
   phase-c-report.md Criterion 1 reads "new loops find no significantly new raw material" and concludes saturated. Literally, Phase C DID acquire significant new raw material: the McNamee ASP 45 full PDF (640 pp., verbatim p. 2 census figure), Malzahn 2007b full chapter text, van der Meij 2017 OCR mining, Nurtawab 2025 via Wayback capture, ICABS/Sakagami colophon transcriptions. What the report actually demonstrates is a different (defensible) claim: all of this material closes pre-registered Phase A/B residuals; no new research topic, tradition, or evidence type emerged, and citation chaining recurs to already-indexed works (Criterion 2 holds as stated). The finds are disclosed transparently in the loop table, so this is not overclaiming by concealment — but the criterion wording and the assessment logic do not match. Recommended: either restate Criterion 1 as "no new topics/evidence types beyond registered residuals" or add one sentence acknowledging that new raw text was obtained but exclusively as gap-closure.

### Positive observations (for the record)

- Honesty markers are consistent throughout: OCR-derived quotations are flagged as such (C01 Rekihaku "agent did not visually inspect pixels"; C03 Malzahn "OCR-derived, some diacritics garbled"; C06 "eyeball ill. 193 in the PDF before print"); snippet-sourced material is labeled (C09 Zier); unverifiable items carry the explicit unverified marker rather than being silently asserted.
- The Wikimedia verification obligation from Loop 15 was tracked to discharge: two of three Wikisource datapoints (date/institution/size) now scholar-verified via van der Meij 2017; the scribe name "Nengah Serangan" correctly downgraded to finding-aid-only in findings, document, and master table alike.
- Negative results are documented as negatives (Tangut interlinear, MCU curriculum continuity, Edo katen monograph, biblia glosata space-ratio) instead of being padded.
- Link rot handling is sound: dead/blocked routes (Anubis walls, DNS failures) are recorded with fallback captures actually used.

---

## Claim-consistency details (quotes)

(a) **C06 — van der Meij 2017 Ill. 193 p. 204.** `loop_C06\documents\2017-vanderMeij-maarti-texts.md` line 24: "Ill. 193 (p. 204): Kakawin Bharatayuddha maarti, Old Javanese and Balinese, Bali, dated Saka 1814 = AD 1892. Collection Balai Bahasa Provinsi Bali, Denpasar 018/BPB/Vb/91, 3.3 x 52 cm., 326 inscribed leaves." Matches findings.md L11 and master table row (Bali maarti). Supported. Caveat noted locally: caption is OCR-derived.

(b) **C08 — McNamee 2007 "293 manuscripts".** `loop_C08\documents\2007-McNamee-ASP45-ISAW-fulltext.md` line 15, verbatim from Introduction p. 2: "The present corpus consists of marginal and interlinear notes from 293 ancient manuscripts found certainly or possibly in Egypt..." Live ISAW viewer confirms the volume (ASP v. 45, 2007, 640 pp., ASP-permitted electronic publication). Supported.

(c) **C05 — Li & Cao EACL 2026, DOI 10.18653/v1/2026.eacl-long.285.** `loop_C05\documents\2026-Li-Cao-EACL-kaeriten-published.md` gives full record incl. pages 6031-6045, Rabat, March 2026, ISBN 979-8-89176-380-7. Live fetch of https://aclanthology.org/2026.eacl-long.285/ returned identical title, authors, abstract, pages, DOI, and bibkey li-cao-2026-translation. Verified at source. Supported.

(d) **C04 — W.277 vs W.278 distinct per Nurtawab 2025.** `loop_C04\documents\2025-Nurtawab-Archipel-W277-W278-distinct.md` quotes verbatim: "ms. W.277 and ms. W.278, which are Qur'ans that probably originate from eighteenth-century Banten, were at some stage part of the collection of Hermann von de Wall (1807-1873)" (via Wayback capture 20260217145046, OpenEdition Anubis-blocked direct — consistent with my own live fetch hitting the same Anubis wall). Findings.md L46/L58 resolve the target identically, with honest residual (PNRI catalogue unreachable). Supported.

(e) **Master table cell tracing (5 cells):**
1. Bali maarti anchor (Saka 1814=1892, 018/BPB/Vb/91, c. 326 leaves) -> loop_C06 van der Meij doc line 24. Supported.
2. Old Uighur row Ch 3716 Tianxi caveat (1178-1211 range; 1190-vs-1211 tension kept open) -> loop_C10 [1178]-QaraKhitai-Tianxi-era-fix.md. Supported.
3. Comparative-frameworks row "Gloss Corpus 66 collections / 24,872 glosses (re-verified live C10)" -> loop_C10 2026-Moran-GlossCorpus-recheck.md; independently confirmed by auditor's live fetch of glossing.org/glosscorpus/ ("currently holds 66 collections ... 24,872 glosses in total"). Supported.
4. Carolingian row St Gall Priscian "over 9,400 interlinear+marginal glosses plus c. 3,000 symbol glosses, AD 850-1" -> loop_C10 2023-Hofman-StGallPriscian-site-check.md; independently confirmed by auditor's live fetch of stgallpriscian.ie (v2.1, identical wording). Supported.
5. Alexandrian-Homeric row "P.Oxy. 8.1086 scholia minora on Il. 2.751-827, 1st c. BCE (Beck 2025 appendix)" -> loop_C08 2025-Beck-AncientScholiaCUP-sigla.md line 9: "Appendix B: Pap. II (Sigma Il. 2.751-827), P.Oxy. 8.1086 (1st c. BCE), pp. 386-392". Supported.

Score: 5/5.

---

## Link spot-check log (all fetched 2026-08-26, <=20 s)

| URL | Loop | Status | Content match |
|:---|:---:|:---|:---|
| https://aclanthology.org/2026.eacl-long.285/ | C05 | OK | Exact match (biblio + abstract verbatim) |
| https://www.glossing.org/glosscorpus/ | C10 | OK | Exact match (66/4/24,872) |
| https://khirin-a.rekihaku.ac.jp/database/sohanshiki | C01 | OK | Exact match (1195-1201, colophon wording, CC BY 4.0) |
| http://www.stgallpriscian.ie/ | C10 | OK | Exact match (v2.1, 9,400+/c. 3,000, AD 850-1) |
| https://iqna.ir/en/news/3498469/ | C10 | OK | Full text matches Zaferani recheck (546 AH, Rey, interlinear format, Surabadi link) |
| https://sites.dlib.nyu.edu/viewer/books/isaw_asp000045/1 | C08 | OK | Volume identity/page count match; see Issue 3 on file size |
| https://so05.tci-thaijo.org/index.php/huru/article/view/246923 | C07 | OK | Article exists; authors/year/journal match (Laksanasiri & Sikkharit 2020, Ramkhamhaeng Hum. 39(2)) |
| https://vdoc.pub/documents/instrumenta-tocharica-4cqqk7ef0kq0 | C03 | OK | TOC and editor's preface verbatim-match the local Malzahn document |
| https://journals.openedition.org/archipel/9536 | C04 | Blocked-but-existing (Anubis bot-wall) | Site up; matches local documentation which used the Wayback capture |

Existing: 9/9. Fully open with matching content: 8/9.

---

## Final Recommendation

**PASS-WITH-FIXES**

The Phase C dataset is structurally complete, internally honest, free of forbidden-source contamination, and its headline claims verify against both local documents and live sources. Two stale lines in master-comparison-table.md Part 7 (items 4 and 9) contradict the loop data and must be corrected before Phase D drafting; the saturation Criterion 1 wording should be aligned with the interpretation actually applied; the ISAW file-size metadata should be re-checked before print.
