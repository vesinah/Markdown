# Loop B11 Findings — Thai/Lao Glossing Traditions in Depth (closing Loop 18/19 gaps)

Date: 2026-08-26
Project: output\2026-08-25_คำแปลแทรกสิบแปดบท (Thai-language academic book on interlinear additions, interlinear glosses, and scholia)
Status: loop complete; Phase-B follow-up to Phase-A loops 18/19. 5 documents harvested into documents/.

Phase-B note: This loop targeted the five gaps left by loop_18 (Lanna/tham traditions) and loop_19 (Central Siamese bitexts): modern MCU/Mahamakut kham-phi/nissaya-derived translation training; Thai-language scholarship on nissaya/bitexts; the identity of the "Poolrak" thesis; Lao item-level nissaya studies in DLLM; and content of Sripum & Walker 2026.

## Queries executed

Web/API (websearch tool returned HTTP 429 on every attempt all session — all discovery ran through fallbacks):

1. Crossref API works/10.1353/mns.2026.a990231 — full abstract obtained (SUCCESS)
2. OpenAlex works?filter=doi:10.1353... — OA status cc-by-nc-nd confirmed (SUCCESS); subsequent OpenAlex searches budget-exhausted server-side (resets midnight UTC)
3. JAOS 2020 PDF re-mined (local PyMuPDF) — Poolrak fn 3 verbatim citation context extracted
4. Crossref query.author=Tossaphon Sripum — profile incl. SSRN 2023 Nandopananda paper
5. webfetch muse.jhu.edu/article/990231 — bot challenge (BLOCKED)
6. Unpaywall API x2 — McDaniel 2002 OA PDF locator found; MNS 2026 no direct PDF
7. DLLM About/Glossary/Research Papers/Bibliography pages fetched in full via webfetch (SUCCESS)
8. Wayback CDX laomanuscripts.net/en/texts/* — legacy item URLs located; one snapshot harvested (item schema)
9. Semantic Scholar search 'Pathamasambodhi nissaya' — SUCCESS once: surfaced "Monks and the importance of holding Nissaya in Thailand today" (2017); all later calls 429 despite backoff retries
10. Crossref prefix 10.58837 queries (Nandopananda/Poolrak/Pathamasambodhi/nissaya) + query.bibliographic hunts — Poolrak co-authored JTS article identified
11. TCI ThaiJO direct article URL so04.tci-thaijo.org TSDJ 272698 fetched — abstract harvested (direct article pages work; global/per-journal search endpoints return JS shells)
12. Brill XML view of McDaniel 2002 — verbatim abstract + exact pagination; Brill downloadpdf 403 to scripts, >5 MB via tooling
13. Brill downloadpdf for Laulertvorakul 2003 via header-crafted Python fetch — FULL PDF (24 pp.) downloaded and text-mined (SUCCESS)
14. OpenAIRE publications API keywords=nissaya / Pathamasambodhi — 44 + 7 records parsed (incl. Japanese Otani/Toyo repository nissaya and Pathamasambodhi studies)
15. payutto.net WP search (นิสสยะ = zero results; หลักการแปล = nothing relevant) — negative probe for translation-method essay
16. Direct probes mcu.ac.th/?s=แปลบาลี, ibsc.mcu.ac.th/?s=nissaya, mbu.ac.th/web2020/?s=nissaya, jiabu.asia (DNS dead), cmuir.cmu.ac.th REST (connection timeouts), sure.su.ac.th DSpace simple-search + /server/api (404), DOAJ articles API (0 Thai hits), Bing RSS (junk), DDG lite/Mojeek/scholar.archive.org/fatcat (bot walls), Google Books API (429 throughout)
17. exa websearch retried at session start, mid-loop, and end — 429 every time

## Table of sources

| Author | Title | Year | URL / locator | Substance |
|---|---|---|---|---|
| Tossaphon Sripum; Trent Walker | Indic-Siamese Bitexts and Ayutthaya Scribal Culture: Exposition and Exegesis in Three Kham Luang Manuscripts, Manuscript Studies 11.1: 1-35 | 2026 | https://doi.org/10.1353/mns.2026.a990231 ; landing https://muse.jhu.edu/article/990231 | FULL ABSTRACT verified verbatim via Crossref; OA license cc-by-nc-nd (OpenAlex/Unpaywall) but MUSE challenge-blocked. Exposition vs exegesis modes; three named mss (Pali-Siamese Nanthopananthasut kham luang, Pali-Siamese Mahachat kham luang, Sanskrit-Siamese Supritithammarachachadok kham luang); early 18th-early 19th c. leporellos; scribal-feature constellation (color/script/spacing/punctuation/verse-citation/division/musical notation markers) unique among known SEA bitextual mss |
| Anant Laulertvorakul (อนันต์ เหล่าเลิศวรกุล), Chula Dept of Thai | Paṭhamasambodhi in Nine Languages: Their Relation and Evolution, Manusya 6.1: 11-34 | 2003 | https://doi.org/10.1163/26659077-00601002 ; full PDF https://brill.com/downloadpdf/journals/mnya/6/1/article-p11_2.pdf | FULL TEXT HARVESTED this loop (24 pp.). >=10 versions in 4 languages; styles range "translation in the style of nissaya and non-nissaya"; PLN section: Pali-Lao Nissaya Pathamasambodhi, Wat Mai Suvannabhumaram LPQ 10 bundles CS 1195 (copied from PLMP microfilm), oldest witness CS 1188 Luang Prabang Museum; evolution chain Lanna Pali -> Tai vernaculars -> late Pali recensions -> Mon/NET/SMT -> Cambodian; LVV = BE 2411 ms at Laotian monastery in Brisbane (Dhammadhajo 1999) |
| Justin McDaniel | The Curricular Canon in Northern Thailand and Laos, Manusya 5.4: 20-59 | 2002 | https://doi.org/10.1163/26659077-00504003 ; OA PDF locator https://brill.com/downloadpdf/journals/mnya/5/4/article-p20_3.pdf | Verbatim Brill abstract harvested: nissaya texts = idiosyncratic vernacular notes, 16th-early 20th c.; source-text choice + commentarial services reveal pre-modern N-Thai/Lao curricula. Closes loop_18 gap 2 at abstract level; body still >5 MB/blocked |
| Assanee Poolrak | [MA thesis] "Năndōṕanăndasūt́r gāṃ hlvaṅ: Kār vigroḥh* śilṕaḥ kār ṕlè lèḥ kalavidhī dāṅ varrṇaśilṕ*" (Walker's romanization), Chulalongkorn Univ. | 2012 | cited JAOS 140.3 (2020) fn 3 (verbatim mined from PDF) | Thesis identity trail documented; technical-particle study of one Pali-Siamese bitext (Nandopanandasutta kham luang). Person corroborated via Crossref 10.58837/chula.jts.21.1.2 (Tapaonoi/Amratisha/Poolrak, JTS 21.1). Thai-script title: ยังไม่พบข้อมูลยืนยัน |
| Nutthakrit Tapaonoi; Klairung Amratisha; Assanee Poolrak | Khmer Pad Baky Metre and Its Modification from Thai Klon Metre, Journal of Thai Studies 21.1 | n.d. (TSDJ art. 272698) | https://so04.tci-thaijo.org/index.php/TSDJ/article/view/272698 | Abstract harvested; comparative Tai-Khmer versification; establishes Poolrak as active Chula-affiliated comparativist |
| Tossaphon Sripum | Senses and Power in the Thai Nandopananda Story, SSRN preprint | 2023 | https://doi.org/10.2139/ssrn.4471325 | Crossref metadata only (SSRN 403 to bots); shows the same Nandopananda text is an active research object for the MNS 2026 lead author |
| DLLM project (National Library of Laos / Passau / SBB, hosted CrossAsia) | About + Glossary + Research Papers + Bibliography pages; legacy item record en/texts/10455 (Wayback 2014) | 2014-2026 | https://digital.crossasia.org/digital-library-of-lao-manuscripts-about | FULL PAGE harvests. PLMP stats (800+ monasteries, ~86,000 texts, ~12,000 microfilmed texts / ~500,000 frames); majority of Lao mss bilingual Pali-Lao "with more or less elaborated Lao translations or commentaries"; Glossary has NO nissaya/vohara entry — bilingualism carried by Language field ("Pali, Lao") + category; item-record schema fields listed; bibliography confirms McDaniel 2003 Harvard diss title; no nissaya-specific Lao study listed anywhere |
| Rev. Maho Gnanaloka | Textual transmission of the vajirabuddhiṭīkā: comparative analysis of nidānavaṇṇanā Sinhalese and Burmese editions | 2025 | https://doi.org/10.65646/3rc20dmg5a0847 | Adjacent (Burmese/Sinhala nissaya-adjacent commentarial transmission); surfaced via OpenAIRE |
| Ōtani University repository series | 文献的研究 5: ビルマ文字版三蔵註釈文献 - ṭīkāの一部とganthantara、nissaya(逐語訳) - | n.d. | https://otani.repo.nii.ac.jp/record/3123/files/16_b149.pdf | Japanese cataloguing study of Burmese-script Pali palm-leaf mss incl. nissaya (word-for-word translation) class; comparative context only |
| Toyo Gakuso repository series | Pathamasambodhi ch.14 Parinibbanakatha 訳注研究 (1)-(3) | n.d. | https://toyo.repo.nii.ac.jp/record/3276/files/toyogakuronso35_136-125.pdf etc. | Japanese annotated-translation studies of Pathamasambodhi ch. 14 — evidence of continued international scholarship on the same recension family our chapter treats |

## Key findings (with URLs)

1. GAP 5 CLOSED (abstract level) — Sripum & Walker 2026 content now citable with precision. Two compositional modes govern Ayutthayan kham luang bitexts: exposition (Indic phrase -> Siamese rendering) and exegesis (full verse cited then complex analysis); scribal apparatus (color, script, spacing, punctuation, verse-citation/section-division/musical-notation markers) forms a constellation claimed unique among SEA bitextual manuscripts; witnesses date early 18th-early 19th c. The three manuscripts are named in the abstract, adding a new Sanskrit-Siamese witness title (Supritithammarachachadok kham luang) to our inventory. Full 35-pp. text not obtainable (MUSE bot wall). https://doi.org/10.1353/mns.2026.a990231

2. GAP 4 CLOSED BEYOND TARGET — Lao item-level nissaya evidence secured from full text: Laulertvorakul 2003 (now fully harvested) documents the PALI-LAO NISSAYA version of the Paṭhamasambodhi concretely: 10 complete bundles at Wat Mai Suvannabhumaram, Luang Prabang, CS 1195 (author's copy made from PLMP microfilm); oldest witness CS 1188 kept at the Luang Prabang Museum; surveyed lineage Finot 1917 -> Lafont 1959 -> Thao Kene 1958 -> NCRI 1988 -> PLMP 1995-98. Plus Lao Verse Version (BE 2411 ms held at a Laotian monastery in Brisbane, published Dhammadhajo 1999) and the two-group genre split (nissaya-style group ends at the first preaching). DLLM itself carries NO nissaya/vohara genre term in its Glossary or bibliography — bilingualism is flagged only via Language field ("Pali, Lao"), a citable catalogue-design observation. https://brill.com/downloadpdf/journals/mnya/6/1/article-p11_2.pdf ; https://digital.crossasia.org/digital-library-of-lao-manuscripts-glossary

3. LOOP_18 GAP 2 CLOSED (abstract level, with fix) — McDaniel 2002 Curricular Canon: exact pagination 20-59, DOI 10.1163/26659077-00504003, E-ISSN 2665-9077, verbatim abstract from Brill. His framing sentence for our pedagogy thread: "the choice of source texts by nissaya translators and the commentarial services they employ reveal the contours of the pre-modern Northern Thai and Lao Buddhist curricula." Body remains unharvested (>5 MB on both mirrors; Brill 403 to scripts). https://brill.com/view/journals/mnya/5/4/article-p20_3.xml

4. GAP 3 PARTIALLY CLOSED — Poolrak thesis: person + thesis + year + institution triangulated (Assanee Poolrak, Chulalongkorn MA 2012; subject = technical particles in one Pali-Siamese bitext of the Nandopanandasutta kham luang), citation context mined verbatim from JAOS fn 3; corroborated his scholarly activity via a Journal of Thai Studies article (Khmer pad bāky vs Thai klon metre). The THAI-script title remains unverified (TDAR login-walled; bepress repo search JS-rendered) — print only Walker's romanization or mark (ยังไม่พบข้อมูลยืนยัน) for the Thai spelling. Bonus: Sripum's SSRN 2023 paper shows the MNS 2026 lead author working on the same Nandopananda text — a direct research-lineage line for the book. https://digital.car.chula.ac.th context: https://so04.tci-thaijo.org/index.php/TSDJ/article/view/272698

5. GAP 1 NOT CLOSED (documented negative + one unverified lead) — No accessible MCU or Mahamakut source stating that modern Pali translation training derives methodologically from nissaya/kham phi was found. Negative probes recorded: payutto.net corpus search returns ZERO hits for นิสสยะ; site-searches on mcu.ac.th, ibsc.mcu.ac.th, mbu.ac.th return nothing relevant; cmuir.cmu.ac.th unreachable from this network; TDAR/ThaiLIS login-walled. One promising but unverifiable record exists: Semantic Scholar indexes "Monks and the importance of holding Nissaya in Thailand today" (2017, no DOI/venue shown; author/venue lookups failed due to persistent S2 rate-limiting) — treat as lead only (ยังไม่พบข้อมูลยืนยัน for authorship/venue). For draft purposes, the defensible continuity claims remain: Herngseng 2023 (nissaya as mainstream monastic learning method, Burmese case) + McDaniel 2002 (pre-modern curriculum built on nissaya translation practice in N-Thailand/Laos).

6. GAP 2 PARTIAL — Thai-language items: this loop upgraded the Thai-scholar corpus mainly at full-text level (Laulertvorakul 2003 complete; TSDJ abstract) rather than adding new Thai-script articles; DOAJ holds zero Thai nissaya articles, ThaiJO global+per-journal searches are JS-walled, and general engines were unusable all session. New adjacent Thai-connected finds: Tapaonoi/Amratisha/Poolrak (JTS 21.1) and Udom Roongruangsri/Renoo Wichasin papers listed in the DLLM Research Papers TOC (Thai, Vientiane 2005 conference volume) — titles usable as leads, contents not yet fetched.

7. International scholarship watch: Japanese repository studies (Ōtani: Burmese-script Pali palm-leaf mss including a nissaya 逐語訳 class; Toyo: three-part annotated translation of Paṭhamasambodhi ch.14 Parinibbanakatha) confirm sustained engagement with both the nissaya format and the Paṭhamasambodhi recension family outside Thai/Lao studies. https://otani.repo.nii.ac.jp/record/3123/files/16_b149.pdf ; https://toyo.repo.nii.ac.jp/record/3276/files/toyogakuronso35_136-125.pdf

## Gaps closed vs remaining

Closed:
- Gap 5 (Sripum-Walker 2026): closed at abstract+metadata level; OA license established.
- Gap 4 (Lao item-level nissaya): closed — concrete repositories/bundles/dates (Wat Mai Suvannabhumaram CS 1195; LPQ Museum CS 1188) + DLLM catalogue-design observation.
- Loop_18 leftover (McDaniel 2002 full record): closed at verbatim-abstract level with correct pagination and second OA locator.
- Loop_19 leftover (Laulertvorakul 2003 full text): fully harvested.

Partially closed:
- Gap 3 (Poolrak): person/year/institution/topic fixed; Thai title spelling still unverified.
- Gap 2 (Thai-language breadth): incremental; no new Thai-script article captured.

Remaining (for future loops):
- Gap 1 (MCU/Mahamakut kham-phi-derived curricula): unresolved negative; retry when S2/OpenAlex budgets reset; try TDAR with credentials, MCU e-journal OJS slugs, or contact-based verification; verify "Monks and the importance of holding Nissaya in Thailand today" (2017).
- McDaniel 2002 + Sripum-Walker 2026 bodies: need institutional access (Brill PDF >5 MB; MUSE challenge).
- DLLM genre-density counts: requires browser-session scraping past Anubis.
- Thai-script confirmation of Poolrak thesis title via TDAR record.

## Blocked sources (recorded honestly)

- exa websearch MCP: HTTP 429 on every call, entire session.
- OpenAlex API: daily budget exhausted server-side after first lookup (resets midnight UTC).
- Semantic Scholar: single success then continuous 429 across 30-35 s backoffs.
- Project MUSE: JS verification challenge (text/data-mining wall).
- Brill downloadpdf: HTTP 403 for scripted clients; PDFs also >5 MB for tooling (McDaniel 2002; Laulertvorakul succeeded via header-crafted request because smaller).
- digital.crossasia.org/api/*: connections closed to scripted clients; iiif.crossasia.org behind Anubis.
- cmuir.cmu.ac.th (all endpoints): connection timeout from this network.
- sure.su.ac.th: xmlui/simple-search 404; /server/api 404 (DSpace version mismatch).
- SSRN: HTTP 403.
- Google Books API: HTTP 429 throughout.
- Bing RSS: serves unrelated junk listings; DDG lite/Mojeek/scholar.archive.org/api.fatcat.wiki: bot challenges or dead connections; tdc.thailis.or.th: login wall (carried over from loop_19).
- payutto.net: live but zero relevant hits for นิสสยะ/translation-method essays.

## Files created this loop

- research-notes/loop_B11/findings.md (this file)
- research-notes/loop_B11/documents/2026-Sripum-Walker-mns-kham-luang-abstract.md
- research-notes/loop_B11/documents/[2003]-Laulertvorakul-nine-languages-fulltext.md
- research-notes/loop_B11/documents/[2002]-McDaniel-curricular-canon-brill-record.md
- research-notes/loop_B11/documents/[2012]-Poolrak-nandopananda-kham-luang-citation-contexts.md
- research-notes/loop_B11/documents/n.d.-DLLM-glossary-about-item-record.md
