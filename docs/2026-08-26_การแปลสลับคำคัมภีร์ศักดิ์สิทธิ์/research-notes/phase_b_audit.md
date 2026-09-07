# Phase B Data-Quality Audit - Foraging Loops 16-25, with Cross-Corpus Saturation Assessment

Auditor: Independent auditor agent (no stake in results)
Date: 2026-08-25
Scope: loop_16 through loop_25 (findings.md structure, documents\ completeness, prohibited-source check, live URL spot checks, unsupported-claim sweep), plus a data-saturation assessment across all loops 00-25. No loop files were modified; this report and source-index.md are new files.

## 1. Method

1. Read every findings.md for loops 16-25 in full; enumerated every documents\ subfolder and matched extract files against source-table rows.
2. Grepped all 26 loops for wikipedia / wikidata / britannica (case-insensitive) across findings.md and documents\ extracts; manually reviewed every hit.
3. Spot-checked 2 recorded URLs per Phase B loop (20 total) by fetching them directly during this audit session. Fetch failures were marked PLAUSIBLE-BLOCKED where independent bibliographic plausibility held, following the Phase A convention.
4. Skimmed all findings.md files for loops 00-15 (plus the existing phase_a_audit.md) to assess source novelty and citation-chaining behavior across the corpus.

## 2. Per-loop verdicts

### Loop 16 - Eastern Christian interlinear/liturgical cases - PASS-WITH-NOTES
- Structure: source table (10 rows), per-source notes (10), verification verdicts on four targets, open questions (7). Well-formed.
- Documents: 10 extract files for 10 table rows. Match.
- Spot checks: archive.org Fortescue 1913 VERIFIED (publisher CTS London, xv+468 pp., OCLC 1048223265 - exact); users.ox.ac.uk Georgian Lectionary page VERIFIED (Tarchnishvili CSCO 189/205, Kekelidze 1912, Paris georg. 3, Sinai georg. 37 dated 982 John Zosimus, Lathal/Kala mss, Graz fragment, Garitte 1972 Sinai geo. 30/38 copied 979 by Ezra/John Zosimus - every recorded detail matches).
- Prohibited sources: none cited as evidence. Uspenskij 1983 IJSLP bibliographic details rest on a wiki-mirror bibliography (quarantined inside 1992-collins extract line 19 and flagged at findings.md:54); Grokipedia used only as a lead-generation pointer and explicitly downgraded; armenianbible.org front-page note and Roger Pearse blog used as signposts only.
- Unsupported/thin claims: "hokeakes" honestly reported STILL-UNVERIFIED with corrected context; "turgemana" office-title unverified; Kvirkvelia 2025 journal name unnamed in excerpt; zxc-mirror summary explicitly non-citable.
- Notes: exemplary negative-result discipline; two phantom terms correctly demoted rather than papered over.

### Loop 17 - Nissaya scholarship gaps - PASS-WITH-NOTES
- Structure: method note, source table (17 rows), per-target verdicts A-F, key findings (7), open questions (6).
- Documents: 6 extracts + 6 primary PDFs including complete Walker dissertation (45 MB, 1,651 pp.) and Ruiz-Falques full article (97 pp.). Metadata-only rows are labeled CROSSREF-VERIFIED/METADATA-VERIFIED, so absence of extracts is explicit rather than an omission.
- Spot checks: doi.org/10.1353/jbs.2017.0001 VERIFIED (resolves to exactly Falques 2017, JBS 21(1): 1-96); event.buddhism.hku.hk/2021011501 VERIFIED (lecture 2 Pali Studies in Myanmar by Ruiz-Falques and Nyanasami, slides + handout links matching downloaded PDFs).
- Prohibited sources: none cited; wiki-derived exam-ladder claims explicitly refused (findings.md:47).
- Unsupported/thin claims: IATBU Tipitakadhara study is SEARCH-SNIPPET ONLY; Charney 2006 and Dhammasami 2018 metadata-verified without content access; Kirichenko seven-type typology exists only as personal communication (correctly constrained).
- Notes: two hard negatives from loop_11 flipped to positive (full texts obtained); Handley phantom resolved as probable misattribution of Lilian Handlin; premise correction (Moscow doctorate 2003, not University of London PhD) documented against fetched bio. Springer chapter PDF blocked (JS challenge) per loop record.

### Loop 18 - Islamic-world items - PASS-WITH-NOTES (remediation required)
- Structure: item-grouped table A-G, key findings (7), open questions, file list.
- Documents: 7 extract files for 7 groups. Match.
- Spot checks: Nurtawab DOI VERIFIED exactly (IMW 48(141): 169-189, 2020); Leiden digitalcollections item 1575228 PLAUSIBLE-BLOCKED at audit time (Leiden bot wall; loop had captured content during its own session).
- Prohibited sources: FLAGGED. id.wikipedia.org/wiki/Ngabsahi_kitab appears inside source-table row G1 labeled terminological witness only, and javanese_ngawul_interlinear_terms.md quotes Indonesian Wikipedia verbatim under a non-scholarly disclaimer. Mitigation: findings.md:33 correctly reports zero scholarly attestation for ngawul/ngabsahi and routes practice documentation through Nurtawab 2019, Pink 2020, Munip 2016. dbpedia.org (a Wikipedia mirror) is used for Daneshpajuh biography alongside artebox.org; both are non-scholarly bio pages.
- Unsupported/thin claims: Daneshpajuh ca.-1348 SH publication STILL-UNVERIFIED (properly quarantined); Witkam Vol.5 evidence routed through docslib.org and bibliography.mk.iq mirrors of a copyrighted inventory (provenance caution); archival Ottoman references quoted from a WordPress SEALG blog post (Solak) - the archival shelfmarks themselves need direct BOA/Meshihat confirmation before quotation-grade use.
- Verdict rationale: no fabricated content and quarantines are labeled, but Wikipedia-in-table plus mirror-hosted inventory evidence require remediation before downstream citation.

### Loop 19 - Japanese kunten/kundoku gaps - PASS
- Structure: source table (24 rows incl. contextual records), target verdicts A-E, open questions (8), file list. Method constraints documented (websearch 429 all session; API fallbacks).
- Documents: 9 files covering every load-bearing target (Alberizzi 2015 full text PDF+txt, KAKENHI final report PDF+txt, SHIPS portal snapshot, Nara komonjo DB scope note, QULSO page snapshot, structured notes).
- Spot checks: QULSO landing page VERIFIED (Alberizzi, vol. 1, 2015, pp. 233-258, DOI exact, CC license); F1000 DOI VERIFIED (Tsutsumi et al., F1000Research 12:506, author list exact).
- Prohibited sources: none.
- Unsupported/thin claims: jinmonkon 2022 prototype paper has no exposed author field (flagged by loop itself); several NDL-indexed Japanese articles verified existence-only; Hirunuma article peer-review status discrepant between KAKEN page and report form (self-flagged).
- Notes: the negative finding on the Historiographical Institute kunten database is properly evidenced by portal capture rather than assertion. Strongest loop of the batch.

### Loop 20 - Korean/Vietnamese unresolved items - PASS-WITH-NOTES
- Structure: source table (10 rows + declared non-load-bearing contextual block), per-target verdicts A-E, reconciliation notes for loop_08 (6), provenance note, open questions (6).
- Documents: 8 files; Song 2018 abstract content lives inside 2014-lee+2018-song-gangyeongdogam.md (combined extract, acceptable); Tusieonhae 2019 kiss.kstudy candidate row has no extract (non-load-bearing).
- Spot checks: KCI ART001137031 VERIFIED (Jang Yoonhee 2004, Kugyol Studies 12: 47-80; six-witness list verbatim in both Korean and English abstracts); kugyol.or.kr/kugyeol_search VERIFIED live (SQLite index, XML docs 6, parallel units 1900, sentences 5704; corpus list confirms the Jibudoryangchambeop-for-Seokhwaeomgyobungi discrepancy the loop recorded).
- Prohibited sources: none cited.
- Unsupported/thin claims: the WHY question for Dusiwonhae missing kugyol layer is explicitly labeled inference/synthesis, not sourced fact - correct handling; six contextual Crossref records carry DOIs but no extracts (declared non-load-bearing).
- Notes: URL rot documented (AKS /Entry/ to /Article/ migration; db.sejongkorea.org Tomcat 404); Kosukegawa-Whitman page-range correction (28-49 to 29-50) applied against Crossref; Nguyen 2026 body still paywalled and marked UNVERIFIED rather than inferred.

### Loop 21 - Jewish alternation and polyglot layouts - PASS-WITH-NOTES (prohibited-source violation flagged)
- Structure: source table (23 rows), notes by target A-E, verdicts, open questions (7).
- Documents: 9 extract files. Gap: several FETCHED-status rows have no local extract (Polliack review, Taragin VBM essay, Sefaria Berakhot/SA, Neustadt OU Torah, Halachipedia, Kitto entry, Gillman excerpts, Aslanov abstract) - session-transient fetches; content survives only as summarized claims in findings.
- Spot checks: Brill Alexander chapter page VERIFIED (author/title/pages 217-254/DOI/series exact - the loop honestly recorded print 217-253 vs e-book 217-254); LOC Complutensian record PLAUSIBLE-BLOCKED (403 bot wall).
- Prohibited sources: VIOLATION FLAGGED. Britannica is cited in the source table (Complutensian Polyglot row, status CORROBORATES) and listed as source no. 1 in walton_polyglot.md, where a load-bearing claim (one of the first English books assembled by public subscription) is attributed to Britannica. Halachipedia, an explicit wiki-halakha aggregation, also appears as a FETCHED table row. Mitigations: primary layout evidence rests on LOC/Oxford Cabinet/Chethams/COJS-after-British Library pages; Britannica marked corroborative. Remediation: re-anchor the Walton subscription claim to COJS/Dunkelgrun and drop or replace Britannica and Halachipedia citations with scholarly equivalents before Phase C.
- Unsupported/thin claims: Kitto 19th-c. encyclopedia supplies the Walton Pentateuch column description (tertiary); Internet Bible Catalog wikidot page for English Hexapla layout; Rosenthaliana archived treasure page for Yiddish Bibles; SA OC 285 wording confirmed via secondary renderings because Sefaria text was JS-gated.

### Loop 22 - European gloss philology gaps - PASS
- Structure: source table (19+ rows incl. contextual records), per-target verdicts A-F, reconciliation notes (5), method constraints, open questions (6).
- Documents: 14 files including full-text PDFs with text layers for Henkel 1996, Dekker review, Blom publisher preview, and Brookes chapter.
- Spot checks: FreiDok Henkel PDF VERIFIED served live at recorded storage URL; MHRA Eadwine Psalter page VERIFIED (editors, PMHRA 14, 1992, ISBN 0-947623-46-9; note: MHRA shows 296 pp. vs loop collation xvii+228 pp.+48 plates - reconcile against physical copy).
- Prohibited sources: none. The loop formally retires loop_02s quarantined wiki-snippet claim (three preserved OHG renderings) by replacing it with sourced alternatives (reconciliation note 2) - model remediation of the one Phase A leakage item.
- Unsupported/thin claims: Ramirez Perez Leiden Medievalists blog essays used as public-facing scholarship grounded in her PhD; Stam Celtica review content blocked (abstract via Crossref only); King Speculum accentuation article volume/year still open; Wailes-Notker attribution reported as unsupported (negative result).

### Loop 23 - Missionary primary sources and Protestant linguistics - PASS-WITH-NOTES
- Structure: source table (20 rows), per-target verdicts A-F, key findings (6), open questions (6), method note.
- Documents: two full OCR dumps (Avendano 1.3 MB; Tercero Cathecismo 1.0 MB) + 7 extracts. Durston-style gaps from loop_12 closed here (both Lima sermon books now have digital surrogates mined locally).
- Spot checks: archive.org Avendano item VERIFIED (collation, licencia 27 May 1648, OCLC, ark id, JCB/Medina/Palau/Vargas Ugarte references - all exactly as recorded); STORRE Dedenbach-Salazar Saenz chapter VERIFIED (BAS 32, pp. 223-248; abstract confirms segunda parte reproduces Tercero Cathecismo sermons, dialogue form, churi address).
- Prohibited sources: none cited; EBSCO research starter and Schaff-Herzog used as corroboration clusters only, typed accordingly.
- Unsupported/thin claims: Mackert chapter pagination inferred (marked as inferred); Taylor 2001 body unfetched (OpenEdition Anubis wall persists across sessions); Szeminski and Altman/Daniels reviews metadata-only; Carey year/count discrepancies open (Punjabi grammar 1811 vs 1812; 30 vs 35 languages); careycenter annotated bibliography and CCCW archival cluster are institutional rather than peer-reviewed sources.

### Loop 24 - Sinhala sannaya and Ethiopian andemta - PASS-WITH-NOTES
- Structure: source table (25 rows), verdicts per target A-E, key findings (6), open questions (6).
- Documents: 6 PDFs + extracted texts + supplementary notes file covering targets C/D/E. Many table rows are deliberately metadata-verified (cited-authority entries such as Cowley monographs) with status labeled.
- Spot checks: HTS Jezek 2022 VERIFIED (OA, author, vol/article no., DOI, dates all exact); EAP336 project page returned empty at audit time - PLAUSIBLE-BLOCKED.
- Prohibited sources: none cited as evidence; Pearse blog used only to quote Stoffregen-Pedersen pages (flagged in row 17 status).
- Unsupported/thin claims: Haile-andemta hypothesis explicitly unconfirmed (negative result documented against Bausi-Rave bibliography); Moratota attribution unresolved; Cowley 1974 vs 1977 Ostkirchliche Studien/JES discrepancy open; Walters review and Liyanaratne items partially repository/transcript-hosted.

### Loop 25 - Theory synthesis - PASS-WITH-NOTES
- Structure: source table (40 rows), verdicts per target A-F, synthesis notes for Phase C (6), open questions (7), file list.
- Documents: 15 files (Ferguson scan, Lehmann 1982-reworking and 2004 chapter PDFs+txt, Robert 2006 PDF+txt, Pollock 1996 PDF+txt, three structured notes, Schiffman summary).
- Spot checks: Schiffman UPenn node3 VERIFIED (Ferguson definition verbatim plus nine criteria list matching the loops captured notes); HAL halshs-00147475 PLAUSIBLE-BLOCKED (Anubis wall; Robert already full-fetched from Nanzan, audit-verified loop 15).
- Prohibited sources: none cited in the source table.
- Unsupported/thin claims: Ferguson 1959 local copy lacks OCR text layer (definition secured via Schiffman secondary quoting); Lehmann 1982 original Folia Linguistica scan NOT retrieved (2004 Erfurt reworking saved; page-range 193-224 vs 199-224 and year 1982 vs 1983 discrepancies open); Appiah/Hermans/Routledge handbooks at metadata level; Yanfei Platform Sutra conference talk citation pending (YouTube listing only); PubPub thick-translation chapter bot-blocked with metadata from search index; Whitman, The Ubiquity of the Gloss (2011) venue unindexed - correctly flagged high priority.

## 3. Aggregate statistics (Phase B, loops 16-25)

| Metric | Count |
|---|---|
| Loops audited | 10 |
| Verdict PASS | 2 (loops 19, 22) |
| Verdict PASS-WITH-NOTES | 8 (loops 16, 17, 18, 20, 21, 23, 24, 25) |
| Verdict FAIL | 0 |
| Source-table rows (primary tables, approx., after header/dedup) | ~185 |
| Files in documents\ folders | 106 (extracts + primary PDFs/OCR dumps) |
| URLs spot-checked this audit | 20 |
| Spot checks VERIFIED | 16 |
| Spot checks PLAUSIBLE-BLOCKED | 4 (Leiden digitalcollections; LOC Complutensian; EAP336 empty response; HAL Anubis) |
| Spot checks FAKE | 0 |
| Formal prohibited-source citations requiring remediation | loop_21 Britannica x2 usages + Halachipedia row; loop_18 Indonesian-Wikipedia table row (quarantined) + dbpedia bio |
| Quarantined wiki-touchpoints properly labeled | loop_16 Uspenskij wiki-mirror note; loop_18 Wikipedia/dbpedia disclaimers |

Spot-check detail: L16 Fortescue IA VERIFIED, Oxford geolect VERIFIED; L17 Ruiz-Falques DOI VERIFIED, HKU event VERIFIED; L18 Nurtawab DOI VERIFIED, Leiden item BLOCKED; L19 QULSO page VERIFIED, F1000 DOI VERIFIED; L20 KCI Jang VERIFIED, kugyol.or.kr VERIFIED; L21 Brill Alexander VERIFIED, LOC record BLOCKED; L22 FreiDok Henkel PDF VERIFIED, MHRA Eadwine VERIFIED; L23 IA Avendano VERIFIED, STORRE chapter VERIFIED; L24 HTS Jezek VERIFIED, EAP336 BLOCKED; L25 Schiffman UPenn VERIFIED, HAL BLOCKED.

## 4. Prohibited-source findings (Wikipedia / Wikidata / Britannica)

1. loop_21 - BRITANNICA VIOLATION. Britannica Complutensian entry sits in the source table (CORROBORATES) and Britannica Polyglot Bible is source no. 1 in walton_polyglot.md, carrying the subscription-financing claim. Also present: Halachipedia (wiki aggregation) as a FETCHED row. Required action: replace with Dunkelgrun monograph, COJS/British Library chain, and primary halakhic texts; demote or delete Britannica/Halachipedia rows.
2. loop_18 - WIKIPEDIA IN TABLE ROW G1. id.wikipedia.org Ngabsahi kitab listed as terminological witness with verbatim quote in extract under explicit non-scholarly disclaimer; dbpedia.org used for Daneshpajuh biography. The loops own conclusions already bypass these sources for all practice claims. Required action: remove the Wikipedia URL from the table (keep the term as open question), corroborate Daneshpajuh bio via a scholarly obituary/catalog.
3. loop_16 - QUARANTINED (no action beyond existing flag). Uspenskij 1983 IJSLP details from a wiki-mirror bibliography; flagged in extract and findings; must not be cited until verified against IJSLP/Crossref-independent source.
4. No Wikidata usage found in any of the 26 loops.

## 5. Unsupported or thinly supported claims (Phase B)

None rise to fabrication; every item below is recorded transparently in its loop but should be promoted to sourced rows or dropped before downstream citation:

- Loop 16: armenianbible.org oral-translation note; Pearse blog signpost chain (Garitte/Van Esbroeck/Outtier); zxc-mirror CSCO 123 summary; Grokipedia lead.
- Loop 17: IATBU Tipitakadhara snippet-only row; Charney 2006 and Dhammasami 2018 metadata-only content claims; Kirichenko typology (personal communication only).
- Loop 18: docslib/bibliography.mk.iq mirrors of Witkam Inventory Vol. 5; SEALG WordPress blog carrying Ottoman archival shelfmarks; darulmaarif pesantren blog; artebox/dbpedia biography.
- Loop 19: jinmonkon 2022 paper authorship unconfirmed; NDL existence-only entries (Hashimoto, Utsunomiya items).
- Loop 20: six contextual Crossref records without extracts; Tusieonhae 2019 candidate row (grammar-only).
- Loop 21: Kitto tertiary encyclopedia layout description; Internet Bible Catalog wikidot; Rosenthaliana archived treasure page; session-fetched rows without local extracts.
- Loop 22: Ramirez Perez blog essays; Uni Wien forthcoming-edition status claim.
- Loop 23: careycenter annotated bibliography; CCCW/Schaff-Herzog cluster; UNHEVAL article quoting Torero; EBSCO research starter; inferred Mackert pagination (marked).
- Loop 24: Pearse-quoted Stoffregen-Pedersen pages; ResearchGate-hosted Haile items (metadata); Sarada journal flagged-not-mined.
- Loop 25: sciencesconf project page; YouTube talk listing; PubPub chapter metadata-from-index; academia.edu review mirror.

## 6. Data saturation assessment (all loops 00-25)

### Method
Skimmed all 26 findings.md files (loop_00 reconnaissance; loops 01-15 Phase A per tradition; loops 16-25 Phase B gap-resolution) and measured two criteria: (a) whether later loops still surface substantially new sources/concepts or mostly repeat/verify earlier ones; (b) whether citation chaining keeps pointing back to already-indexed works.

### Criterion (a): novelty of later loops
- Loops 00-15 opened every case tradition: Latin-vernacular glossing (01, 02), Jewish targum/shnayim-mikra (03), Eastern Christian/Ethiopian (04), Arabic/Islamic vernacular access (05), Chinese Buddhist translation theory (06), Japanese kunten/kundoku/Siddham/Kirishitan-ban (07), Korean gugyol/eonhae/Vietnamese Nom (08), Inner Asian standardization (09), South Asia Sanskrit/Sinhala/Tamil/Manipravalam (10), Burmese/SEA nissaya (11), missionary Americas (12) and Asia-print (13), translation-studies canon (14), linguistic frameworks (15).
- Loops 16-25 opened ZERO new case traditions. Each maps one-to-one onto Phase A territory: 16 to 04, 17 to 11, 18 to 05, 19 to 07, 20 to 08, 21 to 03, 22 to 01/02/15, 23 to 12/13, 24 to 04+10, 25 to 14/15.
- New sources in Phase B are real but incremental gap-fills inside already-mapped traditions: roughly 60-70 additions concentrated in five clusters (Gangyeongdogam Korean bibliography; kunten quantitative cluster via KAKENHI/F1000; Ethiopian andemta cluster around Cowley/Mersha/Jezek/Belay/Senbetu/Lee/Binyam; polyglot-layout literature Dunkelgrun/Aslanov/Lazar/Gillman; missionary historiography Zwartjes/Richard/Haimovich). Loop 25 adds no new traditions - it consolidates theory anchors already indexed in loops 14/15 (Ferguson, Lehmann, Robert, Appiah, Pollock) plus citation-graph satellites of Robert 2006.

### Criterion (b): citation chaining
Chaining now points predominantly inward to indexed works:
- Explicit back-references: loop_17 cites loop_11 targets seven times; loop_20 reconciles loop_08 rows twelve times (upgrades, not new fronts); loop_23 reopens loop_12 items twice; loops 19/22/24 resolve targets flagged by the Phase A audit.
- Chain examples: Walker dissertation transmits Tin Lwin taxonomy via Lammerts (all already indexed); Herngseng cites Pruitt/McDaniel/Walker (indexed); Nguyen 2026 frames itself against Kosukegawa-Whitman and seokdok-kugyol (indexed); Dekker review circulates around Blom (indexed); loop_22 formally corrects loop_02s wiki-derived Isidor claim using Krotz (indexed); loop_24 demonstrates both sannaya and andemta literatures cite inward (Pruitt/McDaniel vs Cowley/rabbinic parallels) and never toward each other - the comparative study does not exist.
- Residual outward discovery is thin and narrowing: each Phase B loop still found some genuinely new anchors (e.g., Nurtawab 2020/2023 chain, Digiroglu Ottoman commission chain, Hirunuma mantra-kunten findings, Blackburn 1997 full text), but these filled pre-flagged gaps rather than opening fronts.

### Counter-evidence against FULL saturation
1. Load-bearing bodies still unread behind paywalls: Kosukegawa-Whitman 2018, Nguyen 2026, Nurtawab 2020, Gillman ch. 1, Szeminski 2010, Binyam 2021, Lee 2014, Appiah 1993 full text, Blom body chapters.
2. Unresolved phantoms that a single targeted round could settle or bury: hokeakes (Armenian), ngawul (Javanese lexicography), Daneshpajuh ca. 1348 SH publication, Christoph Alberizzi 2014 garble, Wailes-Notker attribution, Handley attribution (resolved as phantom but unconfirmed origin).
3. Missing first-hand copies: Tin Lwin 1961 thesis (no digital copy anywhere), Kirichenko seven-type typology (unpublished), Lehmann 1982 original scan, Ferguson OCR text layer.
4. Whitman, The Ubiquity of the Gloss (2011) - venue and text unknown; flagged high priority by loop 25 as the most relevant hieroglossia citer for the project.

### Verdict: NEARLY-SATURATED

Justification: the corpus has passed the point where additional broad foraging changes its shape. All traditions have verified anchor bibliographies; later loops verify, deepen, and correct rather than discover; citation chains close on the existing index from every direction, including from the newest literature (Nguyen 2026, Herngseng 2023, Saul/Stulic 2025 citing Robert). What remains is (i) a bounded set of paywalled full texts retrievable through library access, (ii) six named phantoms requiring one focused resolution attempt each, and (iii) three missing first-hand copies. These are retrieval tasks, not research-front expansion. Full SATURATED status would require reading the paywalled bodies listed above; NOT-SATURATED is ruled out because no loop since 16 opened a new tradition and the last loop was explicitly synthetic.

## 7. Remaining critical gaps worth ONE more targeted round

1. Full-text retrieval round (institutional access needed, highest downstream value): Kosukegawa-Whitman 2018 JVS; Nguyen 2026 JCWS OnlineFirst body; Nurtawab 2020 IMW; Binyam 2021 Brill chapter; Lee 2014 JSP; Gillman ch. 1; Appiah 1993.
2. Phantom-name resolution round: hokeakes via M.E. Stone / B. Outtier on Armenian bilingual-interlinear manuscripts; ngawul via KBBI / Gericke-Roorda / pesantren glossaries; Daneshpajuh ca. 1348 SH via Noormags / Magiran / Ensani.ir Persian databases; Christoph Alberizzi garble confirmation; Wailes-Notker via MLA International Bibliography.
3. Whitman, The Ubiquity of the Gloss (2011): locate venue/version and full text - likely the single most relevant uncaptured item for gloss universals.
4. Tin Lwin 1961 copy hunt (ProQuest / EThOS remnants / SOAS print-only interlibrary loan): would upgrade her four-type nissaya taxonomy from triple-secondary attestation to primary text.

## 8. Recommended actions (priority order)

1. Remediate loop_21 Britannica/Halachipedia citations and loop_18 Wikipedia table row (section 4) before any Phase C drafting.
2. Execute the four targeted rounds in section 7; then declare SATURATED if at least the full-text round succeeds.
3. Reconcile small numeric discrepancies recorded during audit: MHRA Eadwine extent (296 pp. vs xvii+228+48 plates); Lehmann 1982 year/page-range; Carey Punjabi grammar year and language count; King Speculum article volume/year; Blom book extent.
4. Promote or prune the unsupported/thin claims of section 5 into sourced rows.
5. Carry loop_20s URL-rot corrections (AKS /Article/ scheme, dead sejongkorea link) into any bibliography generated from loops 08+20.
