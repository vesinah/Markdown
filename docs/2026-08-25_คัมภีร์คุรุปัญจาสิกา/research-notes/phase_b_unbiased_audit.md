# Phase B Unbiased Audit — Loops B01–B10

Auditor: independent audit agent | Date: 2026-08-26
Scope: `D:\01_APP\Research\output\2026-08-25_คัมภีร์คุรุปัญจาสิกา\research-notes\loop_B01..loop_B10`
Method: filesystem inspection, byte-level content checks, PowerShell `Invoke-WebRequest` try/catch live probes, targeted greps. Auditor had no role in producing Phase B data.

---

## 1. Inventory table (all files counted on disk, not from reports)

| Loop | loop-report.md | Files on disk | Total bytes | Key deliverables |
|---|---|---|---|---|
| B01 | yes (9,132 B) | 38 | 8,059,649 | 34 JPG page images + Gallica/advancedsearch evidence |
| B02 | yes (3,034 B) | 2 | 14,562 | `documents/szanto2013-dossier.md` (11,528 B) — written directly by orchestrator, present |
| B03 | yes (11,346 B) | 32 | 12,381,338 | rKTs/BDRC/OpenPecha dumps, verse mapping JSON, webfetch log |
| B04 | yes (26,519 B) | 5 | 55,032 | 52-row CSV mapping + 3 dossiers |
| B05 | yes (7,642 B) | 66 | 30,796,393 | 34 BDRC djvu.txt volumes, Sodargye Chinese fulltext, putixia HTML mirrors |
| B06 | yes (11,718 B) | 13 | 529,957 | 10 Crossref JSON responses |
| B07 | yes (6,081 B) | 2 | 35,238 | `verse-thematic-analysis.md` (29,157 B) at folder root |
| B08 | yes (20,496 B) | 2 | 37,636 | `documents/excerpts-reception-contestation.md` (17,140 B) |
| B09 | yes (6,204 B) | 2 | 16,009 | `documents/B09_thai_sources.md` (9,805 B) |
| B10 | yes (3,987 B) | 2 | 46,810 | `master-bibliography.md` (42,823 B) |

All reports exist; all claimed deliverable files exist with non-trivial sizes. Note: several intentionally-retained failure stubs (e.g., `hathi_volume_meta_uc1a0005660618.json` 0 B; `s2_*.json` 0 B; `ia-meta-bdrc-I5798.json` 2 B) are documented as negative results inside their reports — honest practice, not padding.

## 2. Live URL check (1 URL per loop, Invoke-WebRequest try/catch, 2026-08-26)

| Loop | URL sampled | HTTP result | Assessment |
|---|---|---|---|
| B01 | https://archive.org/details/in.ernet.dli.2015.367410 | **200 OK** | Live; scan exists |
| B02 | https://openphilology.eu/publications-peter-daniel-szanto/papers_2013d_gurupancasika.pdf | **200 OK** (redirected to media path) | Szántó 2013d PDF publicly hosted |
| B03 | https://www.rkts.org/cat.php?id=2543&typ=2 | **200 OK** | rKTs catalog reachable today (kraytsang.com mirror was down during B03 — report says so honestly) |
| B04 | https://cbetaonline.dila.edu.tw/zh/K1493_001 | **200 OK** (server; JS shell as report states) | Consistent with B04's own "JS shell only" finding |
| B05 | http://www.putixia.org/big5/wenku/read_1888.html | **200 OK** (final URI https) | Sodargye source page live |
| B06 | https://doi.org/10.1093/jaarel/lfy025 | **403 Forbidden** (bot-block at resolver/OUP) | Identifier independently re-verified via `api.crossref.org/works/10.1093/jaarel/lfy025` → HTTP 200, exact title "Guru Sex: Charisma…" JAAR — DOI valid; 403 is anti-script blocking, not a dead link |
| B07 | https://www.viewonbuddhism.org (upstream domain of B07's local A02 sources; B07 report itself contains zero URLs — local-materials-only loop) | **TLS handshake failure** (PS 5.1 client cannot negotiate; site not proven down) | UNVERIFIED from this environment; does not affect B07's claims, which rest on locally archived snapshots |
| B08 | https://www.lionsroar.com/teachers-not-gods/ | **200 OK** | Quote source live |
| B09 | https://so15.tci-thaijo.org/index.php/jhssrlpru/article/view/2713 | **200 OK** | TCI journal article live |
| B10 | https://api.crossref.org/works/10.1017/S1356186300010282 | **200 OK** | Verification endpoint functional |

Score: 8/10 direct 200; B06 = valid DOI behind a bot-wall (verified via API); B07 = no URLs existed to test, proxy domain unreachable due to client TLS limits.

## 3. Key evidence verification (byte/content level)

| Check | Expected | Observed | Verdict |
|---|---|---|---|
| B01 JPG page images of Lévi 1929 | present, countable | **Exactly 34 JPGs**, `ja215_p255_f265.jpg` … `ja215_p288_f298.jpg`, 19 KB–301 KB each; spot-checked `ja215_p261_f271.jpg` has genuine JPEG magic `FF D8`, 218,190 B | CONFIRMED |
| B03 50-row Tibetan–Sanskrit table in loop-report.md | 50 rows | Table §3 contains rows Tib v1→Skt ‖1‖ through Tib v50→Skt ‖50‖, each with folio position, Wylie incipit, GRETIL incipit; identity-mapping verdict stated | CONFIRMED |
| B04 `verse_mapping_T1687_vs_Gurupancasika.csv` | ~52 rows | **53 lines = 1 header + 52 data rows** — exactly matches the claimed arithmetic (50 Skt + split-gain + Ch-only insertion = 52) | CONFIRMED |
| B05 `sodargye-2002-shishi-wushisong-shi-fulltext-zh.txt` | Chinese commentary text | 71,786 B UTF-8; **20,702 CJK characters**; begins with English provenance header then continuous Chinese commentary; colophon strings 二零零二年十一月一日 / 色达 / 宗喀巴 / 金刚持罗桑札巴 all present (console showed "?" only due to codepage — bytes are valid UTF-8 CJK) | CONFIRMED |
| B10 `master-bibliography.md` structure | 3 sections + [loop_XX] tags | Exactly 3 sections (PRIMARY / SECONDARY / ONLINE) plus verification log & corrections register; **153 `[loop_XX]` tags**; 9 `[VERIFY]` flags | CONFIRMED |
| B02 `szanto2013-dossier.md` | "Vāpilladatta" + v50 variant table | Contains Vāpilladatta colophon quote (`kṛtir ācāryavāpilladattasya`) and full-width v50 variant row contrasting new-MS dedication `iti vidhāya guror anuvarttanaṃ…` against DSBC `gurumanugataśiṣyasyānavadyasya…` | CONFIRMED |

## 4. Wikipedia contamination check

Grep of every file under `loop_B*\` for `wikipedia.org|wikipedia|วิกิพีเดีย`: **zero citations of Wikipedia as a source.** Only hits are method disclaimers ("No Wikipedia used", "No Wikipedia citations anywhere") in B04/B06/B07/B10, plus one transparency note in master-bibliography.md that Rigpa Wiki was used *only as a keyword trail* and marked accordingly. **CLEAN.**

## 5. Emoji check (all 10 B-loop reports + B07/B08 deliverables)

Zero decorative emoji in any file. Sole symbol-class hit: **U+2713 (✓) × 8 in loop_B04/loop-report.md**, used as a typographic "matches" marker inside comparison-table cells. Cosmetic, consistent with scholarly typography. **CLEAN.**

## 6. Factual-claim sampling (4 claims traced to backing documents in the same folders)

| # | Claim (loop) | Backing document checked | Result |
|---|---|---|---|
| 1 | B01: "p. 261 image opened and visually verified showing heading «La Cinquantaine…»" | `loop_B01/documents/ja215_p261_f271.jpg` — real JPEG (FFD8), 218 KB | BACKED |
| 2 | B04: "Koryŏ woodblock ends with carving colophon 「甲辰歲高麗國大藏都監奉勅彫造」 (=1244 CE)" | `loop_B04/documents/K1493_koryo_variants_vs_taisho.md` — pattern 甲辰…高麗 present | BACKED |
| 3 | B05: "fulltext verified END-to-END … ending 公元二零零二年十一月一日译毕于色达喇荣圣地" | `loop_B05/documents/sodargye-2002-shishi-wushisong-shi-fulltext-zh.txt` — all key colophon strings present in bytes | BACKED |
| 4 | B06: "Davidson 2002 confirmed via Dan Arnold review, J. Religion 84.1 (2004), DOI 10.1086/382328" | `loop_B06/documents/crossref_davidson.json` — contains DOI string and "Arnold" | BACKED |

Bonus trace: B03 colophon translators (Padmākaravarman / Rin chen bzang po) present in `loop_B03/documents/D3721_derge_tanjur_wylie_rkts.txt`. **4/4 (+1) claims backed.**

## 7. Fabrication-risk assessment

**Overall risk: LOW.**
Positive integrity signals:
- Negative results preserved as artifacts (0-byte/2-byte stubs) instead of silently dropped; failures explicitly logged (kraytsang.com transport error ×3; Semantic Scholar HTTP 429; lamayeshe 403; wisdompubs 526).
- Systematic use of "ยังไม่พบ" (not found) rather than invented filler across B01/B03/B05/B06/B08/B09.
- Self-correction culture: B04 refutes loop A05's v7 claim with quoted evidence; B10 corrects B06's "Heta/Inka" forenames to Maria/Mitra per Crossref; B10 clarifies 10.1086/382328 authorship direction.
- Unverifiable items quarantined under [VERIFY] (9 items) or labeled PART/DIV/LOOSE rather than overstated.
Residual caveats (none fatal):
1. B05 Tibetan djvutxt OCR is admittedly corrupted ("unusable as citable text without image collation") — correctly flagged by the loop itself; must not be cited as clean text.
2. B03 rKTs edition coverage rests on cached A10 copy, not fresh fetch (kraytsang down) — disclosed in report.
3. B06 doi.org links return 403 to scripts (bot wall); DOIs themselves verify via Crossref.
4. Minor style noise: Thai sentences embedded in English-language reports (B01/B02/B08); one Wylie spelling variant between report quote and wylie dump file (orthographic, not substantive).

## 8. Verdicts per loop

| Loop | Inventory | Live URL | Evidence checks | Contamination/Emoji | Claim backing | Verdict |
|---|---|---|---|---|---|---|
| B01 | PASS | 200 | 34 JPGs real | CLEAN | BACKED | **PASS** |
| B02 | PASS | 200 (source PDF) | dossier contents confirmed | CLEAN | n/a (orchestrator-written, internally consistent) | **PASS** |
| B03 | PASS | 200 | 50-row table confirmed | CLEAN | BACKED | **PASS** |
| B04 | PASS | 200 | CSV = 52 rows confirmed | CLEAN (✓ marks only) | BACKED | **PASS** |
| B05 | PASS | 200 | CJK fulltext confirmed | CLEAN | BACKED | **PASS** |
| B06 | PASS | 403 bot-wall, DOI valid via API | Crossref JSONs real | CLEAN | BACKED | **PASS** |
| B07 | PASS | n/a (no URLs; proxy domain TLS-unreachable from audit env) | analysis file substantial, grounded in named local files | CLEAN | n/a | **PASS (with caveat)** |
| B08 | PASS | 200 | excerpts file present | CLEAN | n/a | **PASS** |
| B09 | PASS | 200 | Thai sources doc present | CLEAN | n/a | **PASS** |
| B10 | PASS | 200 | 3 sections, 153 tags, 9 VERIFY | CLEAN | corrections cross-check consistent | **PASS** |

### FINAL AUDIT VERDICT: PHASE B PASSES 10/10 LOOPS.
No fabricated evidence detected; no Wikipedia contamination; no emoji violations. Broken/hard URLs: 1 bot-walled DOI link (valid identifier), 1 TLS-incompatible domain outside B07's actual evidence chain. Follow-up recommendations: collate B05 OCR against page images before citing Tibetan text; retry kraytsang/W30084 zip for clean Tibetan witness in Phase C.
