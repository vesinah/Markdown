# Phase A Independent Audit Report — Nissaya Literature Research (Loops A01–A15)

Auditor: independent audit agent (no stake in research outcome)
Audit date: 2026-08-26
Scope: integrity + file validation + live link spot-checks + cross-loop consistency for `loop_A01` … `loop_A15`
Inputs read: all 15 `findings.md`; document inventories of all 15 `documents\` folders; 12 files opened for content inspection; 17 live identifier lookups (15 spot-checks + 2 contradiction resolutions).

---

## 1. Executive Summary

- **Overall verdict: PASS WITH CORRECTIONS NEEDED** (see §6).
- All 15 loops have a well-organized `findings.md` structured by sub-topics, with URL/local-file provenance and explicit Thai-language markers for unverified items ("ยังไม่พบข้อมูลยืนยัน"). The epistemic discipline across loops is high; negative results are consistently recorded as negative results.
- **No fabricated citations detected.** All 16 DOIs/identifiers checked live resolve and match claimed titles/authors/years, including three "suspicious-looking" identifiers (OUSL prefix 10.65646, Ergon 10.5771, MUSE 2026 article number).
- **Two files saved as `.pdf` are actually HTML** (failed downloads mislabeled): A09's BSOAS review capture (Cambridge cookie-wall page) and A10's SJP/OSS capture (DSpace Angular SPA shell). The *citations* they support were independently verified as real via Crossref; only the local evidence copies are defective.
- **One systematic factual error propagated across four loops**: Okell, "Nissaya Burmese," *Lingua* — several loops wrote "vol. 14"; Crossref confirms **volume 15, pp. 186–227 (Jan 1965)**.
- One additional volume-number slip found during verification: Skilling 2007 is *Aséanie* **19**, not 20 (A06).
- The Trent Walker dissertation title in A08 (*Unfolding Buddhism…*, UC Berkeley, 2018) is **CONFIRMED CORRECT** against the author's own publications page and Springer-deposited reference metadata — the "discrepancy" was in the original mission brief, not the loop data.

---

## 2. Per-loop Integrity Table

| Loop | findings.md exists | Organized by sub-topics | Provenance (URL/local-file) | Explicit unverified markers | Fabrication-pattern flags | Integrity verdict |
|---|---|---|---|---|---|---|
| A01 | Yes (23.1 KB) | Yes — 10 sub-topics | Yes — [LIVE]/[LOCAL]/[NEG]/[KD] tags throughout | Yes (multiple incl. core term อัฏฐพยาขยา) | None; 0-byte download disclosed by agent itself | PASS |
| A02 | Yes (22.7 KB) | Yes — 10 numbered sections + status table | Yes — inline txt line numbers, DOIs, archive.org IDs | Yes (✅/❌ table + inline markers) | None | PASS |
| A03 | Yes (16.7 KB) | Yes — 10 sub-topics | Yes — URLs per item, local PDF inventory | Yes (multiple) | None | PASS |
| A04 | Yes (18.4 KB) | Yes — 10 sub-topics | Yes — URLs + filenames per claim | Yes (multiple) | **One factual slip**: "Lingua 14" (correct: 15) | PASS WITH CORRECTION |
| A05 | Yes (20.6 KB) | Yes — 10 sub-topics | Yes — URLs per item | Yes (multiple) | None | PASS |
| A06 | Yes (18.4 KB) | Yes — 10 sub-topics + doc inventory | Yes | Yes (multiple) | **One volume slip**: Skilling 2007 "Aséanie 20" (correct: 19) | PASS WITH CORRECTION |
| A07 | Yes (18.8 KB) | Yes — 10 sub-topics | Yes | Yes (multiple) | None; page/year variants for Lafont honestly recorded | PASS |
| A08 | Yes (19.1 KB) | Yes — 10 sub-topics, [VERIFIED]/[PARTIAL]/[UNVERIFIED] legend | Yes | Yes (multiple) | **One factual slip**: "Lingua 14" | PASS WITH CORRECTION |
| A09 | Yes (19.1 KB) | Yes — 10 sub-topics | Yes | Yes (multiple) | **One bad artifact**: BSOAS review ".pdf" is HTML (cookie wall) | PASS WITH CORRECTION |
| A10 | Yes (18.4 KB) | Yes (sub-topic order 1,3,2,… slightly shuffled but complete) | Yes | Yes (multiple) | **One bad artifact**: SJP OSS ".pdf" is DSpace SPA HTML | PASS WITH CORRECTION |
| A11 | Yes (18.4 KB) | Yes — 10 sections | Yes — retrieval URL per item | Yes (multiple) | None | PASS |
| A12 | Yes (21.1 KB) | Yes — 10 sections | Yes | Yes (multiple) | **Internal inconsistency**: §5 cites Okell pp. 186–227 correctly; §10 says "Lingua 14" | PASS WITH CORRECTION |
| A13 | Yes (26.1 KB) | Yes — 10 sub-topics | Yes | Yes (multiple incl. "LivInnov") | None | PASS |
| A14 | Yes (25.1 KB) | Yes — 10 sub-topics + explicit unverified list | Yes | Yes (dedicated section) | **One factual slip**: "Lingua 14" | PASS WITH CORRECTION |
| A15 | Yes (18.0 KB) | Yes — 10 sub-topics + corrections ledger | Yes — raw JSON evidence files named | Yes (multiple + gaps section) | None | PASS |

Notes:
- The audit brief asked whether "A01 said vol 14" for Okell. **A01 does not state a volume** anywhere (DOI only). The "Lingua 14" error actually occurs in **A04, A08, A12 (§10), and A14**.
- Recurring benign pattern: Wikipedia used keyword-discovery-only ([KD]) per project rules, never cited as evidence — compliant.

---

## 3. File Validation Results

Inventory across all 15 `documents\` folders: **102 files, ~282 MB**.

### 3.1 Full-scan results
- **All 39 files with `.pdf` extension byte-tested** (`Get-Content -Encoding Byte -TotalCount 5`):
  - 37 start with `%PDF` → valid.
  - **2 FAIL (HTML masquerading as PDF)**:
    1. `loop_A09\documents\BSOAS_review_Godakumbura_Sinhalese_Literature_1957.pdf` (724.9 KB) — begins `<!DOCTYPE html>`; content is a Cambridge *OneTrust cookie-consent* page, not the review. Findings claim "PDF downloaded" is inaccurate as to artifact; the citation itself is genuine (verified live, see §4 #9).
    2. `loop_A10\documents\SJP_Tipitaka_Studies_Oriental_Examinations_OSS.pdf` (311 KB) — begins `<!DOCTYPE html><html …><title>DSpace</title>`; a JS-rendered DSpace 8.2 app shell from Univ. of Sri Jayewardenepura. The actual article PDF was never captured.
- **Empty files (0 bytes): exactly 1** — `loop_A01\documents\googlebooks_attaphayakhaya_raw.json`. A01's findings explicitly disclose this as a Google Books API quota failure. Honest, but should be deleted or replaced after quota reset.

### 3.2 Random spot-check (10 files, content-level)
| File | Check | Result |
|---|---|---|
| A01 pannabhoga2023_extract.txt | readable text | PASS — title/author match Brill article |
| A02 Bode_1909_…_djvu.txt | readable text | PASS — library stamp OCR, full book text |
| A03 PhyuMarLwin_2025_Pali_Bagan_Epigraphy_JIBS.pdf | magic bytes | PASS `%PDF-` |
| A04 SEAJunction_2024_McCormick_EAP1432_announcement.html | readable HTML | PASS |
| A05 dllm_glossary_crossasia.html | readable HTML | PASS |
| A06 A06_D02_Pannabhoga2023_abstract_record.md | markdown w/ provenance header | PASS — Crossref URL + DOI stated |
| A07 DREAMSEA_DS0075_00006_….html | readable HTML | PASS — contains verbatim "Nissaya style… word by word" description |
| A08 deBernon_1992_FEMC_BEFEO79_excerpt.md | markdown w/ source URL + DOI | PASS |
| A11 Dohakosa_1879_with_chaya_Hindi_translation.pdf | magic bytes | PASS `%PDF-` (6.6 MB) |
| A13 Lee2011_Kugyol_Research_ALA.pdf | magic bytes | PASS `%PDF-` (1.1 MB) |

**File-validation verdict:** corpus healthy except the 3 artifacts listed above (2 mislabeled HTML + 1 empty JSON).

---

## 4. Live Link Verification Results (exactly 15, one load-bearing identifier per loop)

Method: Crossref/DataCite REST APIs for DOIs (title/author/year/volume compared against findings claims); webfetch for URLs. Bot-blocked ≠ invalid unless clear 404/domain-not-found.

| # | Loop | Identifier / URL | Claimed in findings | Live result | Status |
|---|---|---|---|---|---|
| 1 | A01 | DOI 10.4259/ibk.8.586 | Maeda, "The Significance of 'veyyakarana'…", JIBS 8(2), 1960 | Resolves: exact title, Mayeda Egaku, JIBS 8(2):586–592, 1960 | **PASS** |
| 2 | A02 | DOI 10.1093/ijl/5.4.278 | Pruitt, "The Study of Burmese by Westerners…", IJL 5(4):278–304, 1992 | Resolves: exact title, author, vol 5(4):278–304, 1992 | **PASS** |
| 3 | A03 | DOI 10.1080/14639947.2015.1080925 | Pyi Phyo Kyaw, "Foundations of criticality…", Contemporary Buddhism 16(2) | Resolves: exact title, 16(2):401–427, 2015; refs include Tin Lwin 1961 as claimed | **PASS** |
| 4 | A04 | DOI 10.15130/EAP1432 (DataCite) | EAP project "Recalling a trans-local past… Part 2", PI McCormick, BL EAP | Resolves: exact title, creator McCormick, EAP, 2022, url eap.bl.uk/project/EAP1432 | **PASS** |
| 5 | A05 | DOI 10.3406/arasi.2014.1863 | Lagirarde, "Les ho tham du Lanna…", Arts asiatiques 69(1):35–50 | Resolves: exact title, 69(1):35–50, 2014 | **PASS** |
| 6 | A06 | DOI 10.3406/asean.2007.2027 | Skilling, "Geographies of Intertextuality…" | Resolves: exact title, **Aséanie 19(1):91–112, 2007** — A06 wrote "Aséanie 20": minor error | **PASS (volume correction needed)** |
| 7 | A07 | https://www.hmmlcloud.org/dreamsea/detail.php?msid=3806 | DREAMSEA DS 0075 00006 Lao nissaya ms record | Transport error ×2 (webfetch + curl retry after 30 s) — host unreachable from this network, not a 404. Local capture verified to contain the exact quoted passage | **BLOCKED (expected)** — evidence stands via local capture |
| 8 | A08 | DOI 10.1007/s10781-022-09516-2 | Walker, "Liquid Language…", JIPh 50(4), 2022 | Resolves: exact title, 50(4):705–723, 2022; deposited reference list independently confirms Walker 2018a dissertation title + JAOS 2020 details | **PASS** |
| 9 | A09 | DOI 10.1017/S0041977X00134093 | Williams review of Godakumbura, BSOAS 19(3):633, 1957 | Resolves: exact review title (names Godakumbura, publisher, year), 19(3):633, Oct 1957 | **PASS** (local PDF artifact invalid — see §3) |
| 10 | A10 | DOI 10.1086/463556 | Blackburn, "Magic in the Monastery…", HoR 38(4):354–372, 1999 | Resolves: exact title, 38(4):354–372, May 1999 — confirms A10's claim that no 1993 article exists | **PASS** |
| 11 | A11 | DOI 10.5771/9783987401602-245 | Cort, "Translation as Commentary…", in *Literary Transcreation as a Jain Practice*, 2025 | Resolves: exact title, pp. 245–276, Ergon/Nomos 2025, CC BY-NC-ND | **PASS** |
| 12 | A12 | DOI 10.1163/9789004492257 | Verhagen, *History of Sanskrit Grammatical Literature in Tibet* Vol. 1, Brill 1993 | Resolves: exact title, monograph, 1993 | **PASS** |
| 13 | A13 | DOI 10.1515/9781614512851-027 | Saito, "Early modern kanbun and kanbun-kundoku", De Gruyter handbook 2024 | Resolves: exact title, *Handbook of Historical Japanese Linguistics*, pp. 523–538, 2024 | **PASS** |
| 14 | A14 | DOI 10.7817/jameroriesoci.140.3.0675 | Walker, "Indic-Vernacular Bitexts from Thailand…", JAOS 140(3):675–699, 2020 | Resolves: exact title+subtitle, JAOS 140(3), abstract matches quotes verbatim ("interlinear and interphrasal formats", "literary elevation of the vernacular…") | **PASS** |
| 15 | A15 | DOI 10.65646/3rc20dmg5a0847 | Gnanaloka, "Textual transmission of the vajirabuddhiṭīkā…", 2025, OUSL repository (not JPTS) | Resolves: exact title, proceedings-article IRC-OUSL 2025, Open University of Sri Lanka, pp. 847–851; abstract discusses Burmese Nissaya recension as claimed | **PASS** |

Score: **14 PASS / 1 BLOCKED-to-bots / 0 FAIL.** No invented DOIs.

---

## 5. Contradictions Found & Resolutions

### 5.1 Okell 1965 *Lingua* volume/pages — RESOLVED
- **Claims in loops:** vol 15, pp. 186–227 (A02 §2, A03 keywords, A12 §5); "Lingua 14" (A04 §9, A08 §10, A12 §10, A14 §10); no volume given (A01).
- **Live resolution (Crossref, DOI 10.1016/0024-3841(65)90013-6):** John Okell, "Nissaya Burmese," ***Lingua* vol. 15, issue 1, pp. 186–227, published-print January 1965**, Elsevier. (Crossref stores no subtitle; the subtitle "a case of systematic adaptation…" is attested by Semantic Scholar + Herngseng's bibliography, as A02 noted.)
- **Correct value: Lingua 15: 186–227 (1965).** Four loops require the one-character fix.

### 5.2 Trent Walker dissertation (A08) — RESOLVED (no discrepancy in loop data)
- A08 states the mission's guessed title was wrong and gives: *Unfolding Buddhism: Communal scripts, localized translations, and the work of the dying in Cambodian chanted leporellos*, PhD, UC Berkeley, 2018.
- **Verified twice independently:** (a) Springer-deposited reference metadata of 10.1007/s10781-022-09516-2 ("Walker, T. (2018a). Unfolding Buddhism… PhD dissertation, University of California, Berkeley."); (b) author's own publications page (trentwalker.org/publications): same title, chair Alexander von Rospatt, 1651 pp., dissertation website present. **A08's correction is accurate.**

### 5.3 Additional inconsistencies surfaced by the audit (minor)
| Item | Conflict | Resolution / recommendation |
|---|---|---|
| Skilling 2007 venue | A06: "Aséanie 20" | Crossref: **Aséanie 19 (2007), 91–112**. Correct A06. |
| Pruitt dating | "Pruitt 1992" (as cited by Herngseng), book dated 1994 (A08/A14/Walker biblio), Okell review 1996 (A01/A02) | Not a true contradiction: **article = 1992 (IJL 5(4)); book = 1994 (EFEO Monographies 174); review = 1996 (BSR 14(2))**. Standardize citations accordingly. |
| McDaniel 2008 ch. 4 pages | A06 (De Gruyter DOI): pp. 117–160; A14: pp. 119–160 | Unresolved 2-page offset between ebook TOC and loop transcription; verify against library copy before quoting page numbers. |
| Walker 2018b chapter pages | Springer ref list (A08): pp. 49–116; author CV: pp. 55–134 | Two authoritative sources disagree; flag for direct copy check before citing. |
| Lafont 1965 inventory year | Most sources: BEFEO 52.2 (1965): 429–545; EFEO Lanna site: "1964, pp. 429–445" | A07 already documented the variant honestly; prefer **52.2 (1965): 429–545** (multiple independent bibliographies). |
| McDaniel publisher | A05 flagged Hawai'i vs Washington Press discrepancy | Resolved within loops: **University of Washington Press** (UW Press catalog page, A06/A07; Open Library adds "in association with Silkworm Books"). |
| A07 live-source reachability | DREAMSEA record URL unreachable during audit | Local capture authentic and quote-verbatim; keep local file as evidence of record; re-fetch later for a fresh timestamp. |

---

## 6. Overall Verdict: **PASS WITH CORRECTIONS NEEDED**

The Phase A dataset is fundamentally sound: no fabricated sources, honest negative-result logging, strong provenance discipline, and 14/15 live-checked anchors passing exactly. Required corrections before Phase B drafting:

**Required corrections (8):**
1. **A04** §9 (line ~97): "Lingua 14" → "**Lingua 15:186–227**".
2. **A08** §10 (line ~120): "Lingua 14 (1965)" → "**Lingua 15 (1965): 186–227**".
3. **A12** §10 (line ~108): "Lingua 14 (1965)" → "**Lingua 15 (1965): 186–227**" (§5 citation already correct).
4. **A14** §10 (line ~103): "Lingua 14 (1965)" → "**Lingua 15 (1965): 186–227**".
5. **A06** §10 (line ~82): "Aséanie 20 (2007)" → "**Aséanie 19 (2007), 91–112**".
6. **A09** `BSOAS_review_Godakumbura_Sinhalese_Literature_1957.pdf`: re-download the actual Cambridge PDF or rename to `_cookie_wall.html`; citation itself verified genuine.
7. **A10** `SJP_Tipitaka_Studies_Oriental_Examinations_OSS.pdf`: JS-shell only; obtain real PDF from `dr.lib.sjp.ac.lk` bitstream link or mark artifact unavailable.
8. **A01** `googlebooks_attaphayakhaya_raw.json`: delete or re-fetch after Google Books quota reset.

**Advisory (verify before quoting in Phase B):**
- McDaniel 2008 ch. 4 start page (117 vs 119); Walker 2018b chapter pagination (49–116 vs 55–134); cite Pruitt book as **1994** and article as **1992**; prefer Lafont **BEFEO 52.2 (1965): 429–545**.
- A07 DREAMSEA record: rely on local capture until host is reachable again.

Consolidated source index written to: `source-index.md` (same folder).
