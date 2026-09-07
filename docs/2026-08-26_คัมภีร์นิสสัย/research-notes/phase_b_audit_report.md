# Phase B Independent Audit Report — Nissaya Literature Research (Loops B01–B10)

Auditor: independent audit agent (no stake in research outcome)
Audit date: 2026-08-26
Scope: integrity + file validation + live link spot-checks + cross-phase consistency (vs Phase A) + DATA SATURATION ASSESSMENT for `loop_B01` … `loop_B10`.
Inputs read: all 10 `findings.md` in full; complete file inventories of all B-loop document folders; every PDF byte-tested and every local text artifact opened for identity; 12 live Crossref identifier lookups; targeted greps across all 25 loops (A01–A15, B01–B10) plus `source-index.md` and `phase_a_audit_report.md`. Loop folders treated READ-ONLY.

---

## 1. Executive Summary

- **Overall verdict: PASS WITH CORRECTIONS NEEDED (minor).** Data quality is high and epistemic discipline is exemplary; no fabrication detected anywhere.
- **Integrity:** all 10 loops have well-organized `findings.md` (10 sub-topic sections each; B04 has 11 including a §0 file-identity preamble), per-claim provenance (URL/DOI/local-file codes), and explicit Thai unverified markers (**47 markers total**, range 2–9 per loop). Negative results are logged as negative results throughout.
- **Files:** 33 files inventoried across B loops; **all 10 PDFs byte-tested valid** (`%PDF` magic); all mined text artifacts' identities match their claimed sources. Exactly **one defective artifact**: `loop_B03\escholarship_diss.html` (5 bytes, empty failed fetch) — honestly self-disclosed by B03 and superseded by the successful TXT.
- **Links:** **12/12 live Crossref checks PASS** (no 429s, no blocked hosts encountered). No invented DOIs.
- **Consistency:** the Phase A corrections took — *"Lingua 14"* appears **nowhere** in any of the 25 loops; every citation now reads *Lingua* **15:186–227**. Walker dissertation, Crosby–Zare DOI, and Lafont page-pinnings are consistent across phases. Three small new errors exist **inside** Phase B files (B10 "MANUSYA 25.1"; B10 "the …409… DOI is invalid" — it actually resolves as Khur-Yearn 2009; B08 mis-attributes a Phase A label to A11 that belongs to A01), plus three date/provenance corrections that Phase B mining itself established against Phase A records (Dohā-Kośa 1957 re-edition; Grierson Śivapariṇaya 1924 not 1913; Candra-lekhā two printings 1945/1967). **Total: 8 required corrections** (§5, §7).
- **Saturation verdict: SATURATED** (for report-writing purposes). Marginal novelty halved vs Phase A (~5–7 genuinely new items/loop vs ~10), the new items are overwhelmingly satellites of already-indexed clusters, citation chaining converges on a stable ~20-work core, and B10's Crossref sweep found exactly **one** 2023–2026 Crossref-indexed journal article matching "nissaya" (the already-indexed Herngseng 2023) — the recent-scholarship layer is fully harvested. Remaining gaps are artifact-*access* problems (paywalls/repositories), not discovery problems; none blocks drafting. See §6.

---

## 2. Per-Loop Integrity Table

Marker counts = occurrences of "ยังไม่พบข้อมูลยืนยัน".

| Loop | findings.md | Organized by sub-topics | Provenance per claim | Explicit unverified markers | Fabrication-pattern flags | Verdict |
|---|---|---|---|---|---|---|
| B01 | Yes (36.5 KB) | Yes — 10 numbered sections + scoreboard + keywords | Yes — [P:line]/[B:line]/[X] codes tied to named local extracts + URLs | Yes (9) | None; garbled source string in Herngseng's own text quoted with [sic]-style warning | PASS |
| B02 | Yes (37.7 KB) | Yes — 10 sub-topics + method note + keyword block | Yes — OCR line numbers into two named local txt files; [WEB] tagged | Yes (2) | None; OCR noise preserved and marked | PASS |
| B03 | Yes (29.6 KB) | Yes — 10 sub-topics + synthesis + keywords | Yes — local filenames w/ byte+line counts; live URLs; S2 JSON IDs | Yes (6) | **One bad artifact self-disclosed** (5-byte HTML); trentwalker.com≠.org disambiguation done | PASS |
| B04 | Yes (24.8 KB) | Yes — 11 sections (incl. §0 file-identity verification) | Yes — local line numbers + landing-page URLs | Yes (3) | None; archive.org/GB-API failures logged as negatives | PASS |
| B05 | Yes (26.6 KB) | Yes — 10 sub-topics + access log + synthesis | Yes — per-item OCR/page/manifest provenance; bot-wall workarounds documented | Yes (3) | None | PASS |
| B06 | Yes (20.9 KB) | Yes — 10 sub-topics + keyword ledger | Yes — URL per item; explicit failure notes (tdc.thailis, sri.cmu timeout) | Yes (5) | None; three separate "do-not-cite" warnings issued against weak leads | PASS |
| B07 | Yes (28.2 KB) | Yes — 10 sub-topics + bonus finds + gaps | Yes — handle/bitstream provenance, page-numbered quotes | Yes (6) | None; preemptive Berkwitz-title correction flagged | PASS |
| B08 | Yes (17.6 KB) | Yes — 10 sub-topics + docs table | Yes — djvu line numbers, API endpoints, saved-file mapping table | Yes (6) | None; OCR-unusable German scan honestly declared unusable | PASS (1 cross-ref slip, see §5.3) |
| B09 | Yes (27.0 KB) | Yes — 10 sub-topics + keyword block | Yes — local filenames + live URLs per item | Yes (2) | None; S2 API 429 throttling disclosed | PASS |
| B10 | Yes (23.4 KB) | Yes — 10 sub-topics + synthesis spine | Yes — query-by-query result tables, API endpoints, HTTP codes | Yes (5) | Two minor internal slips (see §5.3): "MANUSYA 25.1"; "...409... number is invalid" | PASS WITH CORRECTIONS |

Notes:
- B10's opening pledge ("Nothing below is fabricated; blocked endpoints are reported honestly") is borne out: five Google Books API 429s across ~25 minutes are individually timestamped; ORA/EThOS non-attempts are declared.
- Recurring benign pattern (compliant): Wikipedia/Thai-Wikipedia used for keyword-discovery only, never as evidence.

---

## 3. File Validation Results

Inventory: **33 files** across the ten B loops (10 PDFs, 19 txt/json/html data files, plus findings.md ×10 counted separately). Full byte-level scan performed, not merely sampled.

### 3.1 Full-scan results
- **All 10 `.pdf` files byte-tested**: every one begins `%PDF-` → **VALID** (total ~35.3 MB). Largest: Blackburn SLJH23 scan (12.5 MB); Peera Panarut Hamburg dissertation (7.3 MB).
- **Text artifacts identity-checked (15)**: headers/first lines match claimed sources exactly (see spot-check table).
- **Empty/corrupt files: exactly 1** — `loop_B03\escholarship_diss.html`, 5 bytes, blank. B03's findings disclose it as a failed fetch superseded by `diss_fulltext.txt`. Recommend deletion or renaming to `_failed_fetch.empty`.

### 3.2 Random spot-check (8 files, content level)

| # | File | Check | Result |
|---|---|---|---|
| 1 | B02 `Sasanavamsa_1897_sasanavamsa00pa_djvu.txt` (508 KB) | readable text | PASS — PTS 1897 Pali text + Bode's English introduction, 13,872 lines as claimed |
| 2 | B03 `diss_fulltext.txt` (4.77 MB) | readable text | PASS — opens "UC Berkeley \| UC Berkeley Electronic Theses and Dissertations" = Walker 2018 dissertation, as identified |
| 3 | B05 `documents\hundius_wharton_2011_JLS_2-2_DLLM.pdf` (655 KB) | magic bytes | PASS `%PDF` |
| 4 | B05 `documents\plmp_khaobailan01_1993.pdf` (1.2 MB) | magic bytes | PASS `%PDF` |
| 5 | B07 `documents\Blackburn_1997_Sutra_Sannayas_Saranamkara_SLJH23.pdf` (12.5 MB) | magic bytes + extracted text | PASS `%PDF`; companion `_text.txt` begins "SUTRASANNAYAS AND SARANAMKARA…" confirming identity |
| 6 | B09 `documents\Viehbeck2021_Manuscript_Margins_mchan_bu_Mustang.pdf` (2.98 MB) | magic bytes | PASS `%PDF` |
| 7 | B10 `documents\Peera_Panarut_2019_AyutthayaLiterature_BangkokScribes_Hamburg.pdf` (7.31 MB) | magic bytes | PASS `%PDF` |
| 8 | B08 `documents\sc_bilara_mn22_root-pli.json` (65 KB) | JSON parse/readable | PASS — contains MN 22 root-Pali segments (`mn22:10.2` … nine-aṅga list) exactly as used in B08 §7 |

Additional identity confirmations beyond the 8: B03 `jaos2020_fulltext.txt` opens "Journal of the American Oriental Society 140.3 (2020) | 675"; B04 both MANUSYA extracts open with the correct article titles; B05 Lafont OCR files carry `=== PAGE T1_0395 ===` / `=== PAGE T1_0429 ===` markers matching BEFEO pagination; B08 Grierson/Norman/Dohākośa djvu texts all load with plausible OCR.

**File-validation verdict: corpus healthy** except the single self-disclosed empty artifact.

---

## 4. Live Link Verification Results (exactly 12, load-bearing across B loops)

Method: Crossref REST API (`api.crossref.org/works/{DOI}`), title/author/volume/issue/pages/year compared against loop claims. No HTTP 429 encountered; retries unused.

| # | Loop(s) | DOI | Claimed in findings | Live result | Status |
|---|---|---|---|---|---|
| 1 | B01/B02/B04/B07/B08/B10 | 10.1163/26659077-25010027 | Herngseng/Pannabhoga, MANUSYA **26**(1): 1–23, 2023 | Resolves: exact title, Herngseng, MANUSYA 26(1):1–23, 2023 | **PASS** |
| 2 | B01/B02/B07/B08/B10 | 10.1016/0024-3841(65)90013-6 | Okell, *Lingua* **15**:186–227, 1965 | Resolves: "Nissaya Burmese", Lingua 15:186–227, 1965 | **PASS** |
| 3 | B10 (vs A15/A04) | 10.1080/14639941003791568 | Crosby & Khur-Yearn, "Poetic Dhamma and the Zare", *CB* 11(1):1–26, May 2010 | Resolves: exact title, 11(1):1–26, 2010 | **PASS** |
| 4 | B10 (conflict test) | 10.1080/14639940902968954 | B10 claims this candidate "does not resolve" | **It DOES resolve** — Khur-Yearn, "Richness Of Buddhist Texts In Shan Manuscripts", CB 10(1):85–90, 2009 | **PASS — B10 wording wrong** (Unpaywall 422 ≠ invalid DOI; see §5.3) |
| 5 | B03/B08/B09/B10 | 10.7817/jameroriesoci.140.3.0675 | Walker JAOS 140(3), 2020 | Resolves: exact title, JAOS 140(3) (Crossref issued-year field prints 2021; issue is Fall 2020 — cite 2020) | **PASS** |
| 6 | B03 | 10.1007/s10781-022-09516-2 | Walker "Liquid Language", JIPh 50(4):705–723, 2022 | Resolves: exact title, 50(4):705–723, 2022 | **PASS** |
| 7 | B02 | 10.1017/S0035869X00150518 | Ridding, "Mrs. Haynes Bode" obituary, JRAS 1922 | Resolves: JRAS 54(2):307–308, 1922 | **PASS** |
| 8 | B02 | 10.1163/9789004655829 | Brill digital edition of Bode, *Pali Literature of Burma* | Resolves: monograph "Pali literature of Burma", Brill (digital reprint dated 1966) | **PASS** |
| 9 | B05 | 10.1515/mfir.2010.020 | Hundius & Wharton, *Microform & Imaging Review* 39(4), 2010 | Resolves: exact title, MFIR 39(4), 2010 | **PASS** |
| 10 | B03/B10 | 10.1353/mns.2026.a990231 | Sripum & Walker, *Manuscript Studies* 11(1):1–35, 2026 | Resolves: exact title, 11(1):1–35, 2026 | **PASS** |
| 11 | B10 | 10.2139/ssrn.5169532 | Ashin Pannatikkha SSRN preprint 2025 | Resolves: type = **posted-content** (preprint status confirmed, as B10 cautioned) | **PASS** |
| 12 | B08 | 10.1007/s10781-025-09613-y | Balbir, "Multi-Sided Analysis in Early Śvetāmbara Jain Exegesis: The Niryukti-Discourse", JIPh 2025 | Resolves: exact title, JIPh, 2025 | **PASS** |

Score: **12 PASS / 0 FAIL / 0 BLOCKED.** Combined with in-loop verification claims, no invented identifiers exist anywhere in Phase B.

---

## 5. Cross-Phase Consistency Findings (Phase B vs Phase A)

### 5.1 Items explicitly audited per brief — ALL RESOLVED
1. **Okell 1965 pagination/volume:** grep across all 25 loops finds **zero** instances of "Lingua 14". B01 (§8.1: "*Lingua* 15: 186–227"), B02, B07, B08, B10 all print *Lingua* **15:186–227**; Crossref re-confirms. The Phase A corrections were applied and did not regress. ✔ CONSISTENT EVERYWHERE.
2. **Walker dissertation:** B03's local `diss_fulltext.txt` (4.77 MB) is the actual Berkeley eTheses deposit and its title block reads *Unfolding Buddhism: Communal Scripts, Localized Translations, and the Work of the Dying in Cambodian Chanted Leporellos*, PhD, UC Berkeley, Spring 2018 (committee incl. von Rospatt, de Bernon) — identical to A08 and the source index. B03 additionally notes the word "bitext" never appears in the dissertation (verified count: 0). ✔ CONSISTENT.
3. **Crosby–Zare DOI:** A15 (=10.1080/14639941003791568, 11(1) May 2010, pp. 1–26) ↔ B10 §4 ↔ live Crossref all agree. B04 references the zare complex without DOI (no conflict). One nuance: B10's aside that "the …409… number is invalid" is **wrong as stated** — that DOI resolves (it is Khur-Yearn 2009, CB 10(1):85–90, already correctly indexed in Phase A); it simply is not the Zare article. Correction R2 below. ✔ CONSISTENT AFTER ONE WORDING FIX.
4. **Kirichenko attribution:** No file in any phase asserts an Oxford DPhil for Kirichenko — A15 carried it only as an open gap question; B10 resolves it (doctorate in history, **Moscow State University, 2003, Burmese royal chronicles**, per Vienna lecture bio + MSU ISTINA), and identifies the likely conflation source (Dhammasami's genuine Oxford DPhil 2004). **No propagation error exists; only the index gap-row needs a resolution note** (R7). B10's bonus datum (Kirichenko 2024 abstract: 800–1,000 Upper-Burmese bilingual works, popular ones in up to ten versions) is sourced and quotable. ✔ RESOLVED.
5. **Lafont page refs A07 ↔ B05:** A07 sub-topic 10 quotes the fn.1 sentence from BEFEO 50.2:395–405 (Persée); B05 pins the identical French wording to **p. 395 fn. 1** via local per-page HTML (T1_0395) and adds two new p. 430 quotes + the p. 431 abbreviation key from Lafont 1965. Wordings match verbatim; pagination agrees. ✔ CONSISTENT.

### 5.2 Corrections Phase B established AGAINST Phase A records (mining wins)
6. **Dohā-Kośa "1879" (A11 + index row G):** the archived scan is the **Rahul Sāṅkṛtyāyana re-edition, foreword VS 2014 ≈ 1957**; the 1879 year refers to the Bihar Rāṣṭrabhāṣā Pariṣad series' original publication, whose English preface is absent from the scan. Relabel artifact + index entry (R3).
7. **Śivapariṇaya "1913" (A11 + index row G):** Grierson's Preface is signed **Camberley, 23 June 1924** (djvu line 181); work issued in fasciculi (Asiatic Society repr. 1989). Treat 1913 as unconfirmed → use 1924 (R4).
8. **Candra-lekhā (A11 "1967" vs B08 "1945"):** two different printings/artifacts — A11 cites the qgoc scan of the 1967 Bombay Bharatiya Vidya Bhavan edition; B08 mined the DLI scan datable 1945. Reconcile as two printings rather than overwriting either (R5, advisory-grade).

### 5.3 Errors found INSIDE Phase B files
9. **B10 §8 item 1:** "MANUSYA: Journal of Humanities* **25.1**" — slip (likely digit-capture from the DOI string). Correct value everywhere else + Crossref: **26(1)** (R1).
10. **B10 §4 verdict parenthetical:** "the …409… number is invalid" — see item 3 above (R2).
11. **B08 §8 correction note:** attributes the "宗教研究 (Shūkyō Kenkyū) article" label to "loop_A11"; the label actually occurs in **loop_A01** findings.md (~line 29, Maeda companion-study citation 『宗教研究』144号 pp.131–135). Substance of the correction (verified serial = IBK; Shūkyō Kenkyū piece unconfirmed) stands; pointer is wrong (R6).

### 5.4 Advisory notes (no action strictly required)
- A01 (~line 155) lists "AN II 106 (aṅga list)" among loci-to-pin; B08 has since resolved this: canonical locus = **MN 22 = M I 133, 24–25**; the commentary locus is **Ps II 106** (Papañcasūdanī), and AN 5.26/5.33/5.34 are NEGATIVE. Annotate A01 when convenient (folded into R-list as advisory).
- B07's Berkwitz title-conflation warning targets a string that appears in **no** Phase A file — purely preventive.
- Keep **Hundius & Wharton 2010** (MFIR 39.4 + ICLaoS conference paper) strictly distinct from **Hundius & Wharton 2011** (JLS 2.2:67–74) — B05 clarifies; index rows already separate.
- Walker, "Living Phonologies," *Numen* **71**:2–3 (2024):194–226 — treat author-site "74" as typo (B03 already flags; Brill URL confirms 71).
- B03's trentwalker.com ≠ trentwalker.org disambiguation should be preserved in any bibliography auto-generated from web scrapes.
- A04's repository misspelling "McDanial" (Chula landing page) — keep [sic] when quoting the repository.

---

## 6. DATA SATURATION ASSESSMENT (all 25 loops)

### 6.1 (a) Are new primary works still surfacing at a significant rate?
**No — rate has halved and changed character.**
- Phase A: ~150 distinct sources over 15 loops ≈ **10/loop**, spanning new domains each time (Burma epigraphy, Shan, Lan Na, Laos, Cambodia, Sri Lanka, India, East Asia, theory).
- Phase B: ≈ **55–70 genuinely new distinct items over 10 loops ≈ 5–7/loop**, but composition shifted decisively: (i) seven of ten B loops were *deep-mines of already-indexed anchors* (B01 Herngseng; B02 Bode 1909; B03 Walker; B04 McDaniel 2002/2003; B05 Lafont/DLLM; B07 Blackburn/Nyanatusita; B08 chāyā editions already listed in A11) rather than domain-openers; (ii) most genuinely new items are satellites of existing clusters (Grabowsky/Jaengsawang colophon studies around Grabowsky 2022; Walker's own 2024–2026 output around JAOS 2020; East Asian glossing items around Whitman 2010/Kin-King 2021; cūrṇi studies around Balbir).
- Strongest saturation signal: **B10's Crossref sweep for 2023–2026 journal articles matching "nissaya" returns total-results = 1** — the already-indexed Herngseng 2023. The recent scholarly layer is exhausted; what remains unpublished is unpublished.
- Late-phase loops increasingly produced *corrections and confirmations* (dating fixes, locus resolutions) rather than new territory — the classic late-loop signature.

### 6.2 (b) Does citation chaining point back to already-indexed works?
**Yes, overwhelmingly.** Herngseng 2023 is cited or mined in ≥6 of 10 B loops; Okell 1965, Pruitt 1992, Bode 1909, Walker 2020, McDaniel 2002/2008, Lafont 1962/1965, and Dhammasami 2004 recur in nearly every loop. New leads chain inward: Luce & Tin Htway 1976 surfaces *via* the Nyanatusita table as the direct follow-up to Bode's 1442-inscription appendix (already indexed); Pathompong 2016 was chased from a Herngseng footnote (and verified OA); Kirichenko 2024 chains to his already-indexed chapters. Dangling external novelties are few and peripheral (e.g., Bundschuh 2020/2024, Atkins 2026 — glossing-theory garnish).

### 6.3 Top ~10 UNVERIFIED / paywalled-only important works — do they block writing?
| # | Work | Status | Blocking? |
|---|---|---|---|
| 1 | Crosby & Khur-Yearn 2010, "Poetic Dhamma and the Zare" (CB 11.1) | Closed; Unpaywall `is_oa:false`, zero repositories; T&F 403 | **No** — Khur-Yearn 2012 SOAS thesis (OA) covers the same Mahāsatipaṭṭhāna/zare terrain; 25-ref list captured via Crossref |
| 2 | McDaniel 2008, *Gathering Leaves*, chs. 4–5 | No accessible full text (archive.org queries 0 hits; De Gruyter ebook paywalled) | **Marginal** — genre-gradient quotes secured second-hand via CC-BY Herngseng + Jackson review; obtain ebook before quoting pages directly |
| 3 | Tin Lwin 1961, SOAS MA thesis | Repository unreachable (persistent since Phase A) | **No** — chronology claims usable as *reported* via Herngseng's quotations, clearly attributed |
| 4 | Kāruṇika 2008, *Dhammacariya Myatshu* (Burmese imprint) | Unlocatable outside the citation chain | **No** — seven-methods list is quotable from CC-BY Herngseng with provenance caveat |
| 5 | Walker 2022, "Liquid Language" (JIPh 50.4) | Paywalled beyond abstract | **No** — JAOS 2020 full text is local; format-mapping kept inferential (already flagged in B03) |
| 6 | Godakumbura 1955, *Sinhalese Literature* | IA lending-restricted; page quotes pending | **No** — Blackburn 1997 + Nyanatusita table carry the genre facts |
| 7 | Balbir 1993, *Āvaśyaka-Studien* | Existence verified; wording inaccessible | **No** — Balbir 2025 (OA) now supplies quotable cūrṇi code-switching material |
| 8 | Alsdorf, *Kleine Schriften* (cūrṇi orality paper) | Scan OCR-unusable (German→Devanagari garbage) | **No** — Leiden repository secondary quote stands in; flag for library scan |
| 9 | Brill Encyclopedia of Buddhism "Commentary" entries | DOIs verified; bodies behind wall | **No** — cite print vol. I after physical check, as B10 recommends |
| 10 | Tin Lwin 2014, *Myanmar Studies Journal* 3:147–161 | Inaccessible | **No** — Pyu-nissaya claim stays "reported via Herngseng" |
(Honorable mentions, resolved-by-proxy: Solmsdorf 2018 → Viehbeck 2021 secondary; DREAMSEA record → local verbatim capture; Pathompong pp. 30–32 exact wording → OCR indirect support already obtained.)

**None of the ten blocks drafting.** Each has a documented proxy, and the project's negative-results ledger means no claim rests on an unverified source.

### 6.4 VERDICT: **SATURATED**

Rationale: converging citation graph onto a stable ~20-work core; new-source rate halved and demoted to satellite status; zero remaining unexplored domains in the project's own scope definition (all ten B-loop topic charters returned substantive positive matrices); recent-scholarship layer demonstrably harvested (Crossref 2023–2026 sweep: 1 hit, already indexed); and every residual unknown is an access problem with a workaround, not a discovery problem. Proceeding to report writing is justified **now**; further open-ended loops would yield diminishing returns.

If any follow-up capacity exists, a narrowly-scoped **targeted Phase C** (optional, not required) should be a *library/access round*, not more web loops:
1. Institutional access pass for the paywalled five: Crosby–Zare 2010; McDaniel 2008 chs. 4–5; Walker 2022 *Liquid Language*; BEB commentary entries; Godakumbura 1955 pages.
2. Burmese-language catalog/offline work: Kāruṇika 2008 and Janakābhivaṃsa imprints (Yangon bookshops, SSBU contact); National Library of Myanmar catalogue.
3. Tin Lwin 1961 (SOAS) + Tin Lwin 2014 (JBRS/Myanmar Studies Journal print) retrieval.
4. 1442-inscription corpus follow-up: Luce & Tin Htway 1976; Forchhammer's *List*; *Piṭakatthamain*/*Gandhavaṃsa* editions (converts Bode's appendix into a citable critical dataset).
5. Chronology walk: query DLLM by language="Pali and Lao" × dated < CS 1126/1764 to attack the oldest-bilingual-manuscript gap B05 defined.
6. Physical-library check for "อัฏฐพยาขยา" in ปริยัติธรรम periodicals before permanently abandoning the term (B10's own recommendation).
7. Interlibrary scans: Alsdorf cūrṇi paper; Balbir 1993 preface.

---

## 7. Recommended Corrections List (8 required)

| # | Target | Correction |
|---|---|---|
| R1 | loop_B10 §8 item 1 | "MANUSYA … **25.1**" → "**26(1)**" (Crossref-confirmed; matches all other loops) |
| R2 | loop_B10 §4 | Replace "(the …409… number is invalid)" with "(the …409… DOI is valid but belongs to Khur-Yearn 2009, CB 10(1):85–90 — not the Zare article; Unpaywall HTTP 422 was a false negative)" |
| R3 | loop_A11 §1 + source-index row G (chāyā exemplars) | Dohā-Kośa artifact relabel: local scan = **Sāṅkṛtyāyana re-edition c. 1957**; 1879 = original series publication only (preface absent from scan) |
| R4 | loop_A11 §1 + source-index row G | Śivapariṇaya date: "**1913**" → "**preface 1924** (fasciculi; Asiatic Society repr. 1989)" |
| R5 | loop_A11 §1 + source-index row G | Candra-lekhā: reconcile as **two printings** — DLI scan 1945 (Upadhye) and Bombay BVB 1967 copy cited in A11 |
| R6 | loop_B08 §8 correction note | "loop_A11 label '宗教研究'" → "**loop_A01** (~line 29)"; substance unchanged |
| R7 | source-index.md §I gap row | Close Kirichenko gap: doctorate in history, **Moscow State University, 2003**, Burmese royal chronicles (Vienna bio + MSU ISTINA); Oxford DPhil conflation = Dhammasami 2004 |
| R8 | source-index.md Phase B section (this update) | Add B-loop rows + upgrade notes (done in the appended section below) |

Advisory (verify before quoting): annotate A01's "AN II 106" locus note as superseded (MN 22 = M I 133; Ps II 106); delete/rename B03's 5-byte `escholarship_diss.html`; keep Hundius & Wharton 2010 ≠ 2011 distinction; Numen "Living Phonologies" = 71:2–3; cite Walker JAOS as 2020 despite Crossref's 2021 issued-field; preserve trentwalker.org (not .com) in bibliographies.

---

*Consolidated source index updated in `source-index.md` (Phase B section appended; Phase A content untouched).*
