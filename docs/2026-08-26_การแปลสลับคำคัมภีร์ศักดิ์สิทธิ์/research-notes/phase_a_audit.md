# Phase A Data-Quality Audit — Foraging Loops 01–15

**Auditor:** Independent auditor agent (no stake in results)
**Date:** 2026-08-25
**Scope:** `output\2026-08-26_การแปลสลับคำคัมภีร์ศักดิ์สิทธิ์\research-notes\loop_01` through `loop_15` (findings.md structure, documents\ completeness, prohibited-source check, live URL spot checks, unsupported-claim sweep). No loop files were modified.

---

## 1. Method

1. Read every findings.md (loops 01–15) in full.
2. Enumerated every documents\ subfolder and matched extract files against source-table rows.
3. Grepped all loop files for `wikipedia`, `wikidata`, `britannica` (case-insensitive) and manually reviewed every hit for whether Wikipedia-derived material was used as evidence.
4. Spot-checked 2 recorded URLs per loop (30 total) by fetching them directly with webfetch during this audit session. When a fetch failed for paywall/bot-block/transport reasons, the URL was cross-checked against independent search metadata and marked PLAUSIBLE-BLOCKED rather than FAKE where plausibility held.
5. Swept per-source notes and cross-cutting sections for concrete factual claims that trace to no source-table row.

---

## 2. Per-loop verdicts

### Loop 01 — Insular/Celtic-Germanic Latin-vernacular glosses — **PASS-WITH-NOTES**
- Structure: source table (12 rows) + per-source notes (12) + cross-cutting observations + open questions (10). Present and well-formed.
- Documents: 12 extract files for 12 rows. Match.
- Prohibited sources: none cited. One flagged item: Hofman 1996 ISBN seen "in a Wikipedia-derived snippet only" — correctly quarantined as an open question, not used as evidence.
- URL spot checks: wuerzburg.ie/about_Eng.html **VERIFIED** (Doyle database, Codex Paulinus Wirziburgensis, 3 hands, mid-8th c., 3,501 glosses, Stokes & Strachan basis, CC BY 4.0 — all exactly as recorded). degruyterbrill.com Blom DOI page **PLAUSIBLE-BLOCKED** (empty response on fetch; author Alderik H. Blom, De Gruyter 2017, ISBN 9783110500370, DOI 10.1515/9783110501865 independently confirmed via search metadata).
- Notes / gaps:
  - Facts without source rows: Europeana St Gall counts (9,000+ glosses / 3,478 Old Irish); Moran's companion Peritia 26 (2015) article; Brepols Festschrift for Wieland (2017); Kotake Medium AEvum NS44; the Turin paper "The Mercian Rushworth gloss as a copy" (iris.unito.it, authorship/venue explicitly unresolved).
  - Wieland 1983 publisher left partially unspecified ("publisher not named in snippets") — honest but incomplete.
  - O'Sullivan article year n.d. — flagged by the loop itself.

### Loop 02 — OHG interlinear versions, Murbach Hymns, Notker, Ormulum — **PASS-WITH-NOTES**
- Structure: source table (12 rows) + numbered per-source notes (12) + cross-cutting + open questions (10). Present.
- Documents: 12 extract files for 12 rows. Multi-URL rows (Handschriftencensus x2, Bodleian x2) share single extracts; acceptable.
- Prohibited sources: none cited. However, extract `2002-krotz-althochdeutscher-isidor.md` line 19 records the factual claim "three preserved OHG renderings" *per a de.wikipedia.org snippet*, albeit with an explicit "not citable — corroborate via Krotz 2013" quarantine marker. This is the closest approach to a Wikipedia-derived factual claim entering the record; it is quarantined but sits inside an "observed facts" section. Recommend moving it out or resolving it against Krotz's Bergmann handbook chapter before downstream use.
- URL spot checks: handschriftencensus.de/15941 **VERIFIED** (Paris BN lat. 2326, um 800, Rheinfraenkisch/Lothringisch, OHG breaks off fol. 22r, column layout, Krotz update Feb 2024 — matches note 3 verbatim). ora.ox.ac.uk Morawetz **VERIFIED** (title, DPhil 2023, DOI 10.5287/ora-pdvjmqkye, three-level functional net abstract — matches; recorded title is slightly shortened vs official).
- Notes / gaps: NCE-vs-HSC dating discrepancy for Cod. Sang. 21 correctly flagged; Henkel 1996 image-only PDF limitation honestly recorded; Markey 1989 and Sievers edition referenced without rows (open questions cover them).

### Loop 03 — Jewish translation strategies — **PASS-WITH-NOTES**
- Structure: source table (14 rows) + 14 numbered notes + cross-cutting + open questions (7). Present.
- Documents: 14 extract files for 14 rows (Melamed/Sefaria row mapped to the OC 285 shnayim-mikra extract — content-consistent despite filename).
- Prohibited sources: none. A Saadia-related claim seen only in a Wikipedia result is explicitly quarantined as UNVERIFIED in both findings and the Sotheby's/Tov extract — model handling. Note: the 1906 Jewish Encyclopedia (Bacher "Targum"; Judaeo-Persian Literature) is used as a substantive source for two rows. It is not on the prohibited list and is a public-domain scholarly reference work, but it is a tertiary 1906 source; downstream synthesis should prefer modern critical literature for any load-bearing claim taken from it.
- URL spot checks: jewishencyclopedia.com/articles/14248-targum **VERIFIED** (author Wilhelm Bacher; meturgeman duties, prompting prohibition Meg. 32a, Judah b. Ilai dictum, third-century Babylonian redaction, Yemenite persistence — all as recorded). ingeveb.org Faierstein **VERIFIED** (Morris M. Faierstein, Feb 2019, 275 printings / 240 Yiddish editions / 34 translations in seven languages, Jacob ben Isaac d. 1623, Basel-Hanau 1622, Taz ruling, "men and women" audience — all as recorded).
- Notes / gaps: two JSTOR Judeo-Persian articles have UNVERIFIED authors (flagged); Alexander 1988 internal argument not accessed (flagged); Salevsky 2018, Oxford Bibliographies entry, 2026 Brill "Liturgical Targum" chapter and Seidman reviewers appear in notes without rows (all minor, contextual).

### Loop 04 — Eastern Christianity / Ethiopia — **PASS-WITH-NOTES**
- Structure: source table (14 rows) + 14 notes + cross-cutting + open questions (8). Present.
- Documents: **13 extract files for 14 rows.** Mismatch: Jinbachian 2004 (Armenian Bible UBS working paper) has no extract file; its corroborating facts are folded into note 13 (Tinti). Recommend adding an extract or a cross-reference line in the table.
- Prohibited sources: none cited; Romanian Wikipedia used strictly as locator in the roPsalt extract with a disclaimer header. Minor leakage: the Voroneț layout sentence in findings note 7 ("Slavonic phrase first, then Romanian rendering") derives from that quarantined locator without repeating its caveat.
- URL spot checks: gedsh.bethmardutho.org/Syro-Hexapla **VERIFIED** (Salvesen; Pawlos of Tella 616-17; Hexapla six columns; Timotheos I; Isho'dad; Ya'qub of Edessa — as recorded). monographs.ub.uni-koeln.de Bunčić **VERIFIED** (author, DOI 10.18716/omp.64.8, pp. 106-119, 2026 publication, Uspenskij thesis, diastratic diglossia, German original 2015 — as recorded).
- Notes / gaps: roPsalt extract dated 2019 vs table "n.d."; "hokeakes" honestly UNVERIFIED; hieroglossia attribution gap (Robert vs Uspensky) correctly surfaced rather than papered over; Zhivov accessed only via descriptions (flagged).

### Loop 05 — Arabic authority + vernacular access in the Islamic world — **PASS-WITH-NOTES**
- Structure: primary source table (10 rows) + explicit secondary-sources table (4 rows) + 10 numbered notes + synthesis + open questions (7). Present.
- Documents: 10 extracts for 10 primary rows. Secondary table rows have no extracts (covered in the "Supplementary" prose block) — acceptable, but they are effectively claims-without-extracts if ever promoted.
- Prohibited sources: none.
- URL spot checks: royalasiaticsociety.org Gallop **VERIFIED** (RAS Arabic 4, nine Arabic lines with Malay beneath, Pole presentation 1830, East Indies 1773-78, early-18th-c. dating, Banten/Nurtawab Q 18:11 "309 years" gloss, gold roundels rarity — as recorded). tehrantimes.com Zaferani Quran **VERIFIED** (546 AH / 1151-52 CE, Abolfazl Zaferani, Rey, Reza Abbasi Museum, July 2026 unveiling, eight-year facsimile, Surabadi association, Sadeghi quote, Yahaqi golden-age remark, interlinear format — as recorded).
- Notes / gaps: Wilson 2009 venue unverified (self-hosted Macalester PDF; flagged); Tehran Times is a news report — weakest source class in the corpus, but correctly typed and attributed; Witkam-specific treatment honestly UNVERIFIED.

### Loop 06 — Chinese Buddhist translation theory / wubufan — **PASS-WITH-NOTES**
- Structure: numbered source table (15 rows) + 15 notes + synthesis + open questions (8). Present.
- Documents: **14 extract files for 15 rows.** Mismatch: Boucher 1996 PhD dissertation (row 7) has no extract file; its content is summarized in note 7 as derivative of the 1998 article.
- Prohibited sources: none cited. Two Wikimedia-adjacent items to log: (a) zh.wikisource.org appears as one of three access URLs for the T2131 primary text — Wikisource is a Wikimedia project but hosts the primary text itself, not an encyclopedic citation; (b) the Mair extract quotes his conclusion "via Wikipedia-cited excerpt," attributed to Mair and consistent with the fetched SAGE abstract — secondary quotation, flagged.
- URL spot checks: chinaknowledge.de Fanhanheshizhangzhongzhu **VERIFIED** (Theobald, Gule Maocai, 1190, Renzong court, Kozlov 1909 Khara-Khoto, 37-page butterfly binding, bilingual preface statecraft rationale, cross-transcription format, edition history — as recorded). doi.org/10.4259/ibk.24.52 **RESOLVED/VERIFIED** (returns citation Murata 1975, Journal of Indian and Buddhist Studies). Discrepancy: findings table writes "24(52)" while the DOI metadata gives 24(1), pp. 52-57 — cosmetic formatting error in the table, article real.
- Notes / gaps: Demiéville wubufan-appendix location honestly UNVERIFIED; Brill-chapter authorship unknown (flagged); supporting primary witnesses (Zanning, Guanding/Daliang, Zhou Dunyi preface) embedded within rows rather than separately rowed — acceptable.

### Loop 07 — Japanese kunten/kundoku, Siddham, Kirishitan-ban — **PASS-WITH-NOTES**
- Structure: source table (10 rows) + 10 notes + supplementary section + open questions (8). Present.
- Documents: 10 extract files for 10 rows. Match.
- Prohibited sources: none.
- URL spot checks: aclanthology.org Wang et al. **VERIFIED** (Kanbun-LM, Findings ACL 2023, pp. 8589-8601, DOI 10.18653/v1/2023.findings-acl.545, first CC-to-Kanbun dataset, reordering + MT tasks — as recorded). jll.pitt.edu Morley **VERIFIED** (Brendan Arkell Morley, GWU, JLL 56(2) 2022, DOI 10.5195/jll.2022.237, exact title).
- Notes / gaps: the "Supplementary observations" block (Nick Williams JPACT 2021; Dine UW thesis; JLAK 2022 Mubatsu-bon Lunyu study, DOI given; KAKENHI 20K13050; Wuglein JK30; UTokyo Historiographical Institute premise) contains concrete claims with no source-table rows and no extracts. Each carries venue/identifier and the UTokyo premise is flagged UNVERIFIED, but these should be promoted to rows or dropped before citation. Payne DOI string absent (self-flagged); Green paper undated/unreviewed status (self-flagged).

### Loop 08 — Korean gugyeol/eonhae and Vietnamese Nom glossing — **PASS-WITH-NOTES**
- Structure: source table (13 rows) + 13 notes + open questions (8) + provenance note. Present.
- Documents: **12 extract files for 13 rows.** Mismatch: Kim Ki-jong 2018 (Joseon eonhae compilation) has no extract file; the row was SEARCH-VERIFIED (full abstract) and its facts appear in note 4.
- Prohibited sources: none.
- URL spot checks: journals.uni-lj.si ALA Lee Yong **VERIFIED** (Yong LEE, ALA 1(1):53-70, 2011, DOI 10.4312/ala.1.1.53-70, three-way kugyol typology, 2000 Yugasajiron discovery, open jeomto questions — as recorded). encykorea.aks.ac.kr E0013357 **VERIFIED** (Neungeom-gyeong eonhae: begun 1449 under Sejong/Suyang; movable type 1461, 400 copies; woodblock 1462; reprints 1472, 1495; Sejo kugyol -> Sinmi adjudication -> Han Gyeohui/Kim Su-on drafting -> correction workflow; literal style; Dongguk Jeongeun readings by named specialists — corroborates findings note in full).
- Notes / gaps: King 2015 hosted only on Academia.edu (venue UNVERIFIED; flagged); Kosukegawa & Whitman 2018 verified only through Nguyen's reference list (flagged); Jo Hyunjin 2019, sillokwiki/AKS structural details, Digitizing Viet Nam page, and the Huong Hai/Phap Lien/1747 Lotus adjacent items sit in notes without rows.

### Loop 09 — Inner Asian standardization (Tibet/Mongolia/Manchu/Tangut) — **PASS-WITH-NOTES**
- Structure: source table (12 rows) + 12 notes + cross-cutting + explicit UNVERIFIED section + open questions (6). Present; unusually disciplined about negatives.
- Documents: 12 extract files for 12 rows. Match.
- Prohibited sources: none. The Samye Institute institutional wiki is used for one row and is typed as "Institutional wiki (tertiary)" with its Sadnalegs-attribution conflict flagged — transparent, but it remains a tertiary wiki source carrying specific factual claims (translator roster names, buddha etymology); treat as provisional.
- URL spot checks: journaloftibetanliterature.org Tsetan **VERIFIED** (JTL 3(1):71-105, 2024, DOI 10.58371/jtl.2024.42, Tabo fragments, 783 decree, Tibet Museum 814 version, bibliography anchors Ishikawa/Panglung/Scherrer-Schaub/Simonsson/Verhagen/Penpa Dorjee — as recorded). buddhistinformatics.dila.edu.tw/manchu **VERIFIED** (Qianlong 1772 order, completed ca. 1790, twelve sets printed, 2002 reprint of 20, ca. 732 works, 108 boxes + four-language catalog box, Heart/Diamond Sutra cases, Bingenheimer/Zheng/Wiles — as recorded).
- Notes / gaps: the "interlinear Mongolian-Tibetan manuscript formats" hypothesis is explicitly quarantined UNVERIFIED — exemplary negative-result handling. Yampolskaya, Uspensky 1997, Heissig etc. appear only inside reference-list summaries (contextual).

### Loop 10 — South Asia (Sanskrit/Sinhala/Tamil/Manipravalam) — **PASS-WITH-NOTES**
- Structure: source table (11 rows) + supplementary-sources paragraph + 11 notes + cross-cutting + open questions. Present.
- Documents: 11 extract files for 11 rows. Match.
- Prohibited sources: none cited. The Zvelebil extract cites a "Wikipedia summary of same tradition" only as corroboration alongside a rupkatha article — dual-sourced, low risk.
- URL spot checks: link.springer.com Ciotti **VERIFIED** (Journal of Indian Philosophy 53:553-573, published 3 March 2025, open access, GOML R3507, Late Tamil Manipravalam, Rsyadinyasa/Bhagavadgitamahamantra framing — as recorded). aclanthology.org/W12-4701.pdf **RESOLVED/VERIFIED** (live PDF served at the recorded anthology ID; binary content, text-layer extraction not possible via this channel, ID matches the recorded ACL W12-4701).
- Notes / gaps: Tubb & Boose PDF is hosted at abhidharma.ru — a shadow-library host; provenance of the scan is unofficial even if the book is real. Eight supplementary web sources (Goonesekere, Mrozik review, Sruti interview, Prastara, Hindu feature, Madraswallah, Payer, Krishna et al. Computational Linguistics) are named with statuses but have no rows/extracts; the Araiyar Sevai and Tevaram-recovery claims in note 9 rest partly on them.

### Loop 11 — Nissaya genre, Mainland Southeast Asia — **PASS-WITH-NOTES**
- Structure: source table (11 rows) + supplementary-records paragraph + 11 notes + cross-cutting + open questions. Present.
- Documents: 11 extract files for 11 rows. Match.
- Prohibited sources: none.
- URL spot checks: doi.org/10.1163/26659077-25010027 **RESOLVED/VERIFIED** (returns Herngseng 2023, MANUSYA 26(1):1-23 — matches). lockwoodonlinejournals.com .../jaos/article/download/679/532 **VERIFIED VIA SEARCH METADATA** (that exact URL surfaces Walker's "Indic-Vernacular Bitexts from Thailand: ... 1450-1850" in search results; direct PDF download not rendered in this channel).
- Notes / gaps: Pruitt ISBN UNVERIFIED and year discrepancy (1994 vs 1996) flagged; Hundius/McDaniel DLLM years approximate (ca. 2005-2007) flagged; Handley and Kirichenko-nissaya handled as explicit negative results — good. Thirteen supplementary records (Tin Lwin, Dhammasami, Clark, Karunika, Sripum & Walker 2026, Walker 2024 Numen, Hundius & Wharton 2010, Grabowsky 2022, Jaini PTS 2000, Yamagiwa 2001, Bode 1909, etc.) mostly carry DOIs but no rows/extracts.

### Loop 12 — Missionary linguistics, Americas — **PASS-WITH-NOTES**
- Structure: source table (14 rows) + 12 notes + key findings + open questions (7). Present; method constraints (HTTP 429, API fallbacks) documented.
- Documents: **12 extract files for 14 rows.** Mismatches: Durston 2014 "Standard Colonial Quechua" chapter (SEARCH-VERIFIED via Crossref only) and the Tercero Catecismo row (1585/1773) have no extract files.
- Prohibited sources: none ("No Wikipedia used" — grep confirms).
- URL spot checks: archive.org/details/doctrinachristia00cath_0 **VERIFIED** (1584 Lima, Antonio Ricardo, "variously ascribed" to Acosta/Atienza, "First book printed in Lima (Medina, no. 1)", OCLC 702340755, ark:/13960/t76t3d811 — matches row exactly). journals.openedition.org/bifea/7032 **PLAUSIBLE-BLOCKED** (OpenEdition Anubis bot filter; Taylor 2001 BIFEA article and DOI 10.4000/bifea.7032 remain bibliographically plausible; not fetchable this session).
- Notes / gaps: Avendano original imprint not located (flagged); florentinecodex.getty.edu unreachable this session (flagged); Language 74(2)/HL reviews, Puertas Porras 2002, Cortés Alcaide 2024, and Zwartjes SIHOLS V 2014 mise-en-page chapter referenced without rows.

### Loop 13 — Missionary bilingual print, Philippines/Japan/China — **PASS-WITH-NOTES**
- Structure: source table (17 rows) + 16 notes + supplementary observations + open questions (10). Present.
- Documents: **14 extract files for 17 rows.** Mappings: the two Cervera 2023 articles share one extract; Yang 2014 + Morrison primary scans share one extract; Boone 1852 pamphlet is documented inside the Hong extract's closing section rather than as a standalone file. Content coverage is therefore complete, but row-to-file mapping is not one-to-one — recommend either splitting extracts or adding a mapping note.
- Prohibited sources: none cited. Wiki-derived claims (Rakuyoshu handakuten; Cobo attribution variants; UNESCO Memory of the World 2024) are all quarantined as UNVERIFIED in findings and/or extracts — compliant.
- URL spot checks: gutenberg.org Wolf 1947 essay **VERIFIED** (Edwin Wolf 2nd introductory essay; xylography finding; Retana's four conclusions verbatim in substance; Dasmarinas 20 June 1593 letter licensing Tagalog + Chinese doctrinas at 2 vs 4 reales; 1556/1560 cedulas and 8 May 1584 censorship order — all as recorded). hispania.revistas.csic.es/article/view/1126 **PLAUSIBLE-BLOCKED** (transport error on fetch; CSIC platform + DOI 10.3989/hispania.2023.030 + abstract content previously captured remain internally consistent; not fetchable this session).
- Notes / gaps: Rafael 1988 internals honestly UNVERIFIED (borrow-only); Hanan 2003 full text unread (paywall, flagged); Shima Shozo studies, Xian 2024 companion, Meiji Gakuin timeline, INLIBRIS dealer description (explicitly downgraded to secondary), NLP digitized-pasyon page appear without rows.

### Loop 14 — Translation-studies theoretical canon — **PASS-WITH-NOTES**
- Structure: method note + source table (11 rows) + 11 notes + cross-cutting + open questions (8). Present.
- Documents: 11 extract files for 11 rows. Match.
- Prohibited sources: none.
- URL spot checks: newadvent.org Jerome Letter 57 **VERIFIED** (full text; written 395 to Pammachius; sense-for-sense rule with the scripture carve-out "where even the order of the words is a mystery"; Cicero/Horace/Hilary; Aquila "pestilent minuteness"; Mark 5:41, Matt 27:9-10, 1 Cor 2:9 — all as recorded). multilingual-matters.com Long **VERIFIED** (ISBN 9781853598166, 20 May 2005, 216 pp., Topics in Translation; chapter titles "Making Sanskritic or Making Strange?", "Archaising versus Modernising", "Holy Communicative", "Settling Hoti's Business"; David Burke/Nida Institute contributor; The Translator 13(2) 2007 and Perspectives 13(4) reviews — all as recorded).
- Notes / gaps: heavy reliance on metadata-level verification for Venuti, Appiah, Sanneh, Copeland, Kelly, Steiner — but each such row honestly marks verbatim content UNVERIFIED, so no over-claiming detected. Supporting anchors (Paloposki 2011, Hermans RETS 2019, 2025 preprint) listed with DOIs but no rows.

### Loop 15 — Linguistic frameworks (diglossia/glossing/hieroglossia) — **PASS-WITH-NOTES**
- Structure: source table (11 rows) + 11 notes + open questions (8). Present.
- Documents: 11 extract files for 11 rows. Match.
- Prohibited sources: none.
- URL spot checks: eva.mpg.de Leipzig Glossing Rules **VERIFIED** (Comrie/Haspelmath MPI EVA + Bickel Leipzig; ten rules; revised Feb 2008; last change May 31 2015; maintenance assigned to Committee of Editors of Linguistics Journals; "Glosses are part of the analysis, not part of the data"; Lehmann as first important reference — all as recorded). nirc.nanzan-u.ac.jp Robert **VERIFIED** (Hieroglossia: A Proposal, Bulletin vol. 30, based on December 2002 Waseda lecture, PDF available — as recorded).
- Independent auditor observation corroborating the loop's own flag: the live MPI page itself is inconsistent — "Important references" cites Lehmann 1982, Folia Linguistica 16: 199-224, while the bottom References list cites Lehmann 1983, pp. 193-224. The loop recorded the page-number discrepancy (199-224 vs 193-224); a year discrepancy (1982 vs 1983) also exists on the live page and should be added when reconciling against Lehmann's own publication list (which the loop reports as 193-224).
- Notes / gaps: Ferguson H/L apparatus and Fishman four-cell argument honestly UNVERIFIED pending full texts; Pollock hardcover year 2006 flagged as inference; "Badini" unresolved; Ricci internals deferred to Loop 05 (cross-loop dependency, acceptable).

---

## 3. Aggregate statistics

| Metric | Count |
|---|---|
| Loops audited | 15 |
| Verdict PASS | 0 |
| Verdict PASS-WITH-NOTES | 15 |
| Verdict FAIL | 0 |
| Source-table rows (primary tables, loops 01-15) | 176 |
| Extract files in documents\ folders | 168 |
| Rows lacking a dedicated extract file | 8 (see section 4) |
| URLs spot-checked | 30 |
| Spot checks VERIFIED (fetched, resolved, and matching recorded author/title/year approximately) | 26 |
| Spot checks RESOLVED via DOI/citation endpoint | counted within the 26 above (Murata DOI, Pannabhoga DOI) plus 1 search-metadata-confirmed (Walker Lockwood) |
| Spot checks PLAUSIBLE-BLOCKED (bot-block/paywall/transport failure; metadata plausible) | 3 (De Gruyter Blom — additionally metadata-confirmed; OpenEdition BIFEA; CSIC Hispania) |
| Spot checks FAKE (unresolvable or contradicting recorded metadata) | 0 |
| Wikipedia/Wikidata/Britannica used as a cited source (violation) | 0 |
| Wikipedia-derived content quarantined/flagged inside files | 6 locations (see section 5) |

---

## 4. Extract-count mismatches (rows without a dedicated document file)

| Loop | Row lacking extract | Where its content lives |
|---|---|---|
| 04 | Jinbachian 2004 (Armenian Bible, UBS) | folded into Tinti note 13 |
| 06 | Boucher 1996 PhD dissertation | summarized in note 7 |
| 08 | Kim Ki-jong 2018 (Joseon eonhae compilation) | note 4 only |
| 12 | Durston 2014 "Standard Colonial Quechua" | Crossref metadata only |
| 12 | Concilio Limense Tercero catecismo (1585/1773) | SEARCH-VERIFIED metadata only |
| 13 | Cervera 2023 x2 | merged into one extract |
| 13 | Yang 2014 + Morrison primary scans | merged into one extract |
| 13 | Boone 1852 pamphlet | documented inside Hong extract |

Reverse case: Loop 02's `1022-notker-labeo-method-context.md` covers exhibition/secondary context (SPG Mitteilungen 67; Vienna Cod. 2681/Firchow) that has no dedicated table row. Loop 05's four secondary-source rows likewise have prose coverage but no extracts.

---

## 5. Prohibited-source check (Wikipedia / Wikidata / Britannica)

**Formal violations: none.** No Britannica or Wikidata usage anywhere; no Wikipedia URL appears in any source table.

Quarantined or borderline uses logged for transparency:

1. loop_02/documents/2002-krotz-althochdeutscher-isidor.md:19 — factual claim ("three preserved OHG renderings") recorded from a de.wikipedia.org snippet with an explicit non-citable marker. Quarantined but placed inside the "Excerpts / observed facts" block; resolve against Krotz 2013 (Bergmann handbook, pp. 203-213/204-213) before use.
2. loop_04/documents/2019-Ginsac-roPsalt...md:18 — Romanian Wikipedia locator details (Voroneț discovery 1882, ms. rom. 693 donation, Giuglea edition) under a disclaimer header; the derived layout sentence recurs in findings without the caveat.
3. loop_06/documents/2011-Mair-What-is-Geyi.md:10 — verbatim Mair conclusion obtained via a Wikipedia-cited excerpt; attributed to Mair, consistent with the fetched SAGE abstract.
4. loop_10/documents/nd-zvelebil-prose-commentators.md:18 — commentary-genre chain corroborated by both a Wikipedia summary and a rupkatha article (dual-sourced).
5. loop_01/findings.md:79 and loop_13/findings.md:90 — wiki-derived snippets (Hofman ISBN; Rakuyoshu handakuten) correctly parked as open questions requiring peer-reviewed confirmation.
6. loop_06/findings.md:15 — zh.wikisource.org listed among three access URLs for primary text T2131 (Wikisource hosts the primary text itself; not an encyclopedic citation, but it is a Wikimedia property and should not be the sole access path for quotation-grade text).

---

## 6. Unsupported or thinly supported claims (no accompanying source row)

None rise to fabrication; all are recorded transparently. Items to promote to rows or drop before downstream citation:

- **Loop 01:** Europeana St Gall gloss counts (9,000+ / 3,478 Old Irish); Moran Peritia 26 (2015); Brepols 2017 Festschrift; Kotake NS44; Turin "Mercian Rushworth gloss as a copy" paper (venue/author unresolved).
- **Loop 02:** "three OHG renderings" claim (wiki-snippet origin, see above); NCE c. 1100 dating aside; Markey 1989; Sievers edition on archive.org; Firchow 2009 and SPG Mitteilungen 67 context (extract exists, row does not).
- **Loop 03:** Salevsky 2018; Oxford Bibliographies McNamara-Flesher entry; 2026 Brill "Liturgical Targum" chapter; Seidman reviewers (Boyd-Taylor, Conway-Jones, Boys, Kaufmann); Colby course PDF wording of Saadia's introduction.
- **Loop 04:** CoptOT blog observations; ebrary chapter and Genesis thesis (andəmta c. 832 E.C.); Keipert bibliography/Zhivov characterizations.
- **Loop 05:** Ricci 2016 (JWL) and Ricci 2010 (Translation Studies) companion pieces; TIEM 555 mention; kemenag.go.id "Pentul" candidate source.
- **Loop 06:** Zanning/Guanding/Zhou Dunyi/soothill-hodous witnesses (embedded in rows, not separately rowed); Kukai complaint (inside Yang & Li row — fine).
- **Loop 07:** entire "Supplementary observations" block (Williams 2021; Dine; JLAK 2022; KAKENHI 20K13050; Wuglein JK30; UTokyo premise) — claims with identifiers but no rows.
- **Loop 08:** Jo Hyunjin 2019; sillokwiki/AKS structural details; Digitizing Viet Nam project page; Huong Hai AB.488 / Phap Lien 1848 / 1747 Lotus colophon adjacent items.
- **Loop 10:** the eight supplementary web sources underpinning parts of the Tevaram/Araiyar Sevai note; abhidharma.ru hosting of Tubb & Boose (provenance caution).
- **Loop 11:** the thirteen-item supplementary records paragraph (most with DOIs).
- **Loop 12:** Language 74(2) 1998 and HL 24:3 reviews; Puertas Porras 2002; Cortés Alcaide 2024; Zwartjes SIHOLS V 2014 chapter.
- **Loop 13:** Shima Shozo 1962/1971-77; Xian 2024; Meiji Gakuin timeline; INLIBRIS dealer description (explicitly downgraded); NLP pasyon page; LOC blog 2019.
- **Loop 14:** Paloposki 2011; Hermans RETS 2019; 2025 preprint DOI (supporting anchors only).
- **Loop 15:** none beyond items already flagged (Ferguson/Fishman internals UNVERIFIED; "Badini" unresolved).

---

## 7. Overall assessment

- **Data hygiene is high.** Every loop separates FULL-FETCHED from SEARCH-VERIFIED, marks UNVERIFIED items explicitly, and records negative results (Loops 09 and 11 are exemplary). Zero fabricated links were found across 30 live spot checks; every failed fetch corresponded to a bot wall, JS gate, or transport error on a bibliographically plausible target.
- **Structural compliance:** all 15 loops contain a source table, per-source notes, and open questions. Extract coverage is 168 files against 176 primary rows (95 percent); the 8 uncovered rows are itemized in section 4 and none carries load-bearing unique content that exists nowhere else.
- **Prohibited-source compliance:** clean by the letter of the rule; six quarantined/borderline Wikipedia-touchpoints are itemized in section 5 and require only routine follow-up.
- **Recommended actions (priority order):**
  1. Resolve the loop_02 Isidor-group claim against Krotz 2013 and remove the wiki-snippet sourcing.
  2. Add extract files (or explicit cross-reference lines) for the 8 uncovered rows.
  3. Promote or prune the supplementary claims blocks in Loops 07, 10, 11, and 13.
  4. Correct the Murata 1975 volume/issue formatting in the Loop 06 table ("24(52)" -> "24(1), 52-57").
  5. Add the Lehmann year discrepancy (1982 vs 1983) to Loop 15's open questions; reconcile against Lehmann's own list.
  6. Prefer modern scholarship over 1906 Jewish Encyclopedia passages (Loop 03) for any load-bearing claim.
