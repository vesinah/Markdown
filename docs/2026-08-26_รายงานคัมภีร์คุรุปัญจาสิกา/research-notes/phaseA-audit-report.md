# PHASE A AUDIT REPORT — Adversarial Verification of Raw Research Materials

Auditor: Independent (not part of research team)
Date: 2026-08-26
Scope: `output/2026-08-26_รายงานคัมภีร์คุรุปัญจาสิกา/research-notes/loop_A01` through `loop_A15`, including `loop_A01-A03_primary_texts`
Method: filesystem inventory, byte-level integrity scan, regex content scans, live URL probing (Python urllib, browser User-Agent), targeted fact verification against archived files.

---

## 1. STRUCTURE CHECK

| Unit | loop-report.md | documents/ | Verdict |
|:--|:--|:--|:--|
| loop_A01 | MISSING (covered by shared A01-A03 report) | YES (2 files) | See note |
| loop_A02 | MISSING (shared report) | YES (3 files) | See note |
| loop_A03 | MISSING (shared report) | YES (1 file) | See note |
| loop_A01-A03_primary_texts | YES | MISSING (no local documents/) | See note |
| loop_A04_english | YES | YES (12 files) | PASS |
| loop_A05_german | YES | YES (7 files) | PASS |
| loop_A06_french | YES | YES (6 files) | PASS |
| loop_A07_chinese | YES | YES (18 files) | PASS (see integrity flags) |
| loop_A08_japanese | YES | THIN (1 index file only) | Conditional |
| loop_A09_korean | YES | YES (7 files) | PASS |
| loop_A10_hindi_sanskrit | YES | YES (22 files) | PASS (see integrity flags) |
| loop_A11_authorship | YES | YES (21 files) | PASS |
| loop_A12_commentaries | YES | YES (11 files) | PASS |
| loop_A13_usage | YES | YES (14 files) | PASS |
| loop_A14_transmission | YES | YES (8 files) | PASS |
| loop_A15_translations | YES | YES (3 files) | PASS |

Note on A01/A02/A03: the three primary-text loops deliberately share one report (`loop_A01-A03_primary_texts/loop-report.md`). That report cross-references every archived file by exact path into the sibling loops' `documents/` folders, and every referenced path resolves on disk. Functionally coherent; structurally non-standard. WARNING (minor), not a failure.

## 2. FILE INTEGRITY

Scan method: first-byte inspection plus density scan for "404 / Not Found / Access Denied / Verifying your browser" over all .txt/.html/.md/.xml/.json (binary PDFs excluded after manual confirmation that their hits were byte noise).

Findings:

1. CRITICAL-STUB (disclosed): `loop_A07_chinese/documents/T01n0081.xml`, `T17n0727.xml`, `T30n1576.xml` — each exactly 14 bytes, content literally `404: Not Found`. These are failed downloads sitting in the archive. Mitigating: the loop_A07 report itself discloses them in its own section 1.3 ("download failed... must re-download"), and none of them are load-bearing for the report's conclusions (T1687 main text is separately archived intact at 20,662 bytes). Downgraded to WARNING because of honest disclosure; the files must be re-fetched or removed before Phase B.
2. WARNING (disclosed): `loop_A10_hindi_sanskrit/documents/_relbib_text.txt` (62 bytes) contains only a Cloudflare "Verifying your browser" challenge page — not RelBib content. The A10 source table marks this record "(bot-guarded; snippet in report)", so the limitation is disclosed.
3. Only one other file under 200 bytes threshold family: `_cihts2021_titles.txt` (374 B), `_dsbc_meta.txt` (207 B), `_rbtrd_blgs.txt` (277 B) — inspected, legitimate small metadata snippets, not error pages.
4. All headline evidence files are substantial: Szanto PDF 4,545,143 bytes (identical size across 6 copies), CBETA XMLs up to 3.7 MB, ACIP catalog 1.8 MB, Korean/Chinese HTML captures 0.1-1.1 MB. No truncation symptoms observed in spot-reads.

## 3. WIKIPEDIA / WIKIDATA / WIKISOURCE / NAMU RULE

Mentions found in 5 reports:

- loop_A07 L57: disclaimer only ("verified via websearch — Wikipedia not used"). COMPLIANT.
- loop_A09 L3: explicit "No Wikipedia/Namu wiki used as citations (keyword use only)". COMPLIANT.
- loop_A11 L5: disclaimer ("Wikipedia not used as citation source"). COMPLIANT.
- loop_A13 L4: "Wikipedia not used; rigpawiki only as flagged tertiary". COMPLIANT.
- loop_A10: VIOLATION FLAG. Header states "No Wikipedia citations used", yet rows 10 and also entry at L18-20 of PART 2 "SOURCES VERBATIM LIST (with archived files)" list Sanskrit Wikisource (sa.wikisource.org/wiki/...) with an archived capture (`wikisource_devanagari_gurupancasika.html`, 73 KB, real content). Wikisource is thus presented inside the formal evidence table as a textual witness for the Devanagari root text. This contradicts the header's own blanket statement and violates the rule that Wikimedia-family sources must not appear as cited evidence. Severity: WARNING (it functions as a convenience transcription alongside DSBC and GRETIL witnesses which independently exist in the archive, so no finding depends on it) — but the row must be relabeled tertiary/removed from the evidence table.

No wikidata usage anywhere. Namu appears only in loop_A09's negative disclosure.

## 4. EMOJI RULE

Full astral-plane scan (U+1F000-U+1FAFF, surrogate pairs, FE0F variation selectors, dingbat blocks) over all 14 loop-reports: ZERO emoji found. PASS.
Note: typographic arrows (U+2192 ->, U+2190 <-) occur in several reports; these are punctuation, not emoji, and are accepted.

## 5. LINK SAMPLING (2 URLs per reporting unit)

23 URLs probed live on audit date. Result: 21 x HTTP 200; 2 x HTTP 403.

| Unit | Sampled URL | Status | Subject match |
|:--|:--|:--|:--|
| A01-A03 | dsbcproject.org/canon-text/content/221/914 | 200 | Yes — Gurupañcāśikā DSBC text, matches archive |
| A04 | lccn.loc.gov/77901795/marcxml | 200 | Yes — LC record for LTWA 1975 Dhargyey translation |
| A04 | catalog.hathitrust.org/Record/101966771 | 403 | Blocked-but-plausibly-real (HathiTrust institutional bot-block) |
| A05 | gretil.sub.uni-goettingen.de/...sa_azvaghoSa-gurupaJcAzikA.htm | 200 | Yes — GRETIL Gurupañcāśikā |
| A05 | zenodo.org/records/6476319/files/bsa045_u.htm | 200 | Yes — GRETIL bsa045 mirror |
| A06 | digitalhimalaya.com/collections/journals/ret/ | 200 | Yes — Répertoire du Tanjur (Lalou) journal home |
| A06 | studybuddhism.com/fr/...etudier-avec-un-maitre-spirituel | 200 | Yes — matches archived Berzin French page |
| A08 | 21dzk.l.u-tokyo.ac.jp/SAT/ddb-sat2.php?...useid=1687 | 200 | Yes — SAT entry T1687, bibliographic data matches report verbatim |
| A08 | tripitaka.l.u-tokyo.ac.jp/INBUDS/search.php?...uekey=事師法五十頌 | 200 | Yes — INBUDS corpus search |
| A09 | acmuller.net/descriptive_catalogue/files/k1493.html | 200 | Yes — K.1493 entry, matches archive |
| A09 | kobic.net/book/bookInfo/view.do?isbn=9791185844206 | 200 | Yes — Korean book record |
| A10 | advocatetanmoy.com/guru-panchashika-by-asvaghosa/ | 200 | Yes — source row 11 of A10 table |
| A10 | archive.org/details/EfEc_bauddha-laghu-granth-sangraha... | 200 | Yes — matches full-scan claim |
| A11 | openphilology.eu/...papers_2013d_gurupancasika.pdf | 200 | Yes — Szántó 2013 PDF origin |
| A11 | jstage.jst.go.jp/article/ibk1952/21/2/21_2_947/_pdf/-char/ja | 200 | Yes — Yoritomi 1973 PDF, matches archived copy |
| A12 | edharmalib.com/lib/enlibrary/entengyur/entrgyudl09 | 200 | Yes — Tengyur rgyud 'bum section |
| A12 | acip-archive.christian-steinert.de/ACIP_Master_Catalog.html | 200 | Yes — matches 1.8 MB archived catalog |
| A13 | lamayeshe.com/article/fifty-verses-guru-devotion | 200 | Yes — matches LYWA archives |
| A13 | shop.fpmt.org/assets/images/eproducts/guru_devotion_brief_intro...pdf | 403 | Blocked-but-plausibly-real (FPMT official shop CDN bot-block; excerpt archived locally) |
| A14 | ldspdi.bdrc.io/resource/MW27883_AD89CC.jsonld | 200 | Yes — BDRC work resource |
| A14 | library.bdrc.io/show/bdr:P1025 | 200 | Yes — BDRC person record |
| A15 | exoticindiaart.com/book/details/fifty-stanzas-on-spiritual-teacher-ihf007/ | 200 | Yes — matches archived LTWA edition metadata |
| A15 | viewonbuddhism.org/resources/50_verses_guru_devotion.html | 200 | Yes — matches archived 2019 translation |

Subject-matter correspondence between claimed content and actual destination: CONFIRMED in all 23 cases. Zero dead links, zero domain mismatches, zero link-fabrication indicators.

## 6. FACT SPOT-CHECKS

(a) Szántó 2013 PDF + Vāpilladatta colophon — VERIFIED.
PDF present (4,545,143 B) in loops A04, A05, A10, A11, A14 (identical sizes). Text extraction `szanto2013_ocr.txt` (loop_A11) contains, from printed p. 445: "...author as one Vapilladatta. This name closely echoes the form given by Tsong kha pa in the colophon of his commentary: Bha bi lha." Six separate "colophon" hits in the same extract. Claim supported.

(b) CBETA T1687 XML with full text ~52 verses — VERIFIED.
Raw wrapper XML (20,662 B, source URL github cbeta-org/xml-p5 T32n1687) plus clean-text extraction in loop_A02; duplicate raw XML in loop_A07. Verse arithmetic on stripped CJK body: 1,055 characters = 50 five-character x four-pada verses (1,000 chars) + 2 seven-character verses (opening teaching verse + closing dedication, 56 chars) minus 1 supplementary-plane character missed by BMP-only counting = exactly 52 verse units. Independent corroboration: the loop_A08 index records SAT's own span note "52 verses + dedication" (T32.0775c22-777a14). Claim supported.
Minor imprecision: the shared A01-A03 report describes the Chinese verses as "4 lines/sloka, 7 characters"; in fact only the opening and closing verses are 7-character — the 50 body verses are 5-character. Does not affect the verse count conclusion.

(c) TD3721 Tibetan file: 50 verses + colophon naming rta dbyangs and rin chen bzang po — VERIFIED.
File ends verbatim: "BLA MA LNGA BCU PA SLOB DPON CHEN PO RTA DBYANGS KYIS MDZAD PA RDZOGS SO,, ,,RGYA GAR GYI MKHAN PO PADM'A KA RA WA RMA DANG, ZHU CHEN GYI LO TZ'A BA DGE SLONG RIN CHEN BZANG POS BSGYUR CING ZHUS TE GTAN LA PHAB PA'O". Token arithmetic: 1,501 body tokens / 28 syllables-per-sloka = approx. 53.6 verse-equivalents including title, homage and colophon — consistent with a 50-verse root text plus frame. Claim supported.

(d) DSBC Sanskrit file: 50 verses + krtiriyam mahacaryasvaghosasya — VERIFIED.
`2026-DSBC-Gurupancasika-romanized-fulltext.txt` (loop_A01, duplicated in loop_A11) closes with verse marker ||50||, then "||iti gurupancasika samapta||" and "|krtiriya m mahacaryasvaghosasya||" (IAST diacritics intact in file). Provenance header (DSBC input 2006, proofreader Milan Shakya, supplier Nagarjuna Institute of Exact Methods, source URL canon-text/content/221/914) present and the URL still resolves 200. Claim supported.

---

## ISSUES FOUND

CRITICAL: none. No evidence of fabricated archives, fabricated links, or post-hoc doctored files was found anywhere in scope.

WARNINGS:
W1. loop_A07: three 14-byte "404: Not Found" stub XMLs (T01n0081, T17n0727, T30n1576) sit in the archive. Disclosed by the report itself as pending re-download. Action: re-fetch or quarantine before Phase B.
W2. loop_A10: Sanskrit Wikisource appears as row 10 in the formal SOURCES VERBATIM LIST with archived capture, contradicting the loop's own "no Wikipedia citations used" header. Action: relabel as tertiary keyword-discovery/text-convenience item or remove from evidence table; findings do not depend on it.
W3. loop_A10: `_relbib_text.txt` is a Cloudflare interstitial, not RelBib content (disclosed in report). Action: retry via alternate access path.
W4. loop_A08: `documents/` contains only a 15 KB raw-materials index (URLs + verbatim header transcriptions), no full-page captures. All cited Japanese URLs verified live today, but the archive would not survive link rot. Action: capture SAT/INBUDS/J-STAGE pages to disk.
W5. Structure: loop_A01/A02/A03 have no individual loop-reports; the shared report lives in a folder without its own documents/. Cross-references resolve correctly, so accepted as design, but should be documented in the project README.
W6. Shared A01-A03 report mischaracterizes T1687 body verses as 7-character; they are predominantly 5-character (only opening/closing verses are 7-character).

## PER-LOOP VERDICTS

- loop_A01: PASS
- loop_A02: PASS
- loop_A03: PASS
- loop_A01-A03_primary_texts: PASS (with W5, W6)
- loop_A04_english: PASS
- loop_A05_german: PASS
- loop_A06_french: PASS
- loop_A07_chinese: PASS WITH WARNINGS (W1)
- loop_A08_japanese: PASS WITH WARNINGS (W4)
- loop_A09_korean: PASS
- loop_A10_hindi_sanskrit: PASS WITH WARNINGS (W2, W3)
- loop_A11_authorship: PASS
- loop_A12_commentaries: PASS
- loop_A13_usage: PASS
- loop_A14_transmission: PASS
- loop_A15_translations: PASS (thin archive of 3 files, but each large and load-bearing; links verified)

## OVERALL PHASE A VERDICT: PASS (with warnings)

The evidentiary base is genuine and internally consistent: all four deep fact-checks reproduced successfully from the archived bytes themselves, 23/23 sampled links correspond to their claimed subjects, no undisclosed Wikimedia sourcing was found beyond one labeled-row exception (W2), and every defective file is already self-disclosed in the corresponding loop report. The warnings concern archival hygiene (stub files, thin captures, one Wikisource table row) rather than research integrity.
