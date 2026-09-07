# Phase A Verification Report - Independent Adversarial Link/Content Check

Project: palm_leaf_buddhist_manuscripts
Verifier: Independent Verification Agent (did not perform original research)
Date: 2026-08-26
Scope: loops A01-A20 at output/2026-08-26_คัมภีร์ใบลานพุทธ/research-notes/
Method: For each loop, the two most load-bearing URLs (headline facts in findings.md) were live-fetched with webfetch. Blocked or oversized responses were retried once via the https://r.jina.ai/ prefix per protocol. Each verified URL was checked for (a) resolution, (b) title/topic match against loop claims, (c) presence of at least one quoted fact from findings.md on the live page. No files other than this report were modified. No URLs were invented; all tested URLs were taken from the loop source-lists/findings.

Status codes: OK = resolves and quoted fact confirmed; PROXY = direct fetch blocked/oversized/binary, content confirmed via single r.jina.ai retry (not necessarily DEAD); DEAD = domain gone or 404 (none found); MISMATCH = content contradicts claim (none found).

---

## Summary Table

| Loop | URL checked | Status | Match verdict | Note |
|------|------------|--------|---------------|------|
| A01 | https://palitextsociety.org/about-the-pali-text-society/ | OK | OK | "founded in 1881 by T. W. Rhys Davids", [sic] "Pali texs", Cambridge FAMES archive link, charity no. 262216 all verbatim |
| A01 | https://asian.washington.edu/early-buddhist-manuscripts-project | OK | OK | Founded Sept 1996; 27 scrolls BL 1994; now 76 scrolls; "oldest surviving Buddhist manuscripts" verbatim |
| A02 | https://www.nature.com/articles/s40494-024-01402-2 | OK | OK | Yu et al., publ. 05 Aug 2024; EMC -19.01%; cellulose/hemicellulose -39.90%/-3.97%; avoid RH above 70% - verbatim |
| A02 | https://www.nature.com/articles/s40494-025-01794-9 | OK | OK | Zhang et al., publ. 27 May 2025; 200 days at 25 C, RH 10-90%; "50% RH ... optimal" verbatim |
| A03 | http://preservationtutorial.library.cornell.edu/librarypreservation/mee/preservation/palmleaf.html | OK | OK | Two techniques dichotomy, oils list, 600-year talipot durability, 48x4 cm averages - verbatim |
| A03 | https://www.nature.com/articles/s40494-025-01543-y | OK | OK | Tibet ink study; TEM ~50 nm lamp soot; bone/leather glue; sesame/almond lipids; ~30,000 Tibetan mss - verbatim |
| A04 | https://blogs.bl.uk/asian-and-african/2017/02/kammavaca-burmese-buddhist-ordination-manuscripts.html | OK (redirects to bl.uk platform) | OK | Full San San May post intact (17 Feb 2017); tamarind-seed script, 50-60 x 10-15 cm, U Tha Hsan donor inscription - verbatim. NOTE: contradicts loop A15 blanket claim that blogs.bl.uk posts are 404; see Findings below |
| A04 | https://www.nature.com/articles/s40494-025-01943-0 | OK | OK | Li et al., npj HS 13:380, publ. 30 Jul 2025; Yunnan 7th-c. transmission, damage taxonomy, warm-water cleaning quotes - verbatim |
| A05 | https://www.dsbcproject.org/pages/a-short-history-of-sanskrit-buddhist-manuscripts | OK | OK | Hodgson 1824, 381 bundles / 86 mss-179 works, "1015 AD" Cambridge claim, Tadapatra to 16th c., tamsuk 1334 CE - verbatim |
| A05 | https://wellcomecollection.org/stories/YvD8DRAAAP0nyHTz | OK | OK | Adrian Plau story; Epsilon 1 Bhujimol-vs-Nalanda reattribution by Eva Allinger (Nepal, 12th c.) - verbatim |
| A06 | https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-resources/?lang=th | OK | OK | Thai bilingual Pali+Lanna passage and oldest Tham ms (Timsati-nipata CS 833 = BE 2014, Wat Lai Hin Lampang) verbatim |
| A06 | https://stefanbaums.com/publications/baums_2022_2.pdf | PROXY (direct = raw PDF binary; text extracted once via r.jina.ai) | OK | "Kharosthi script and Gandhari language, initially on birchbark scrolls and later on palm-leaf pothi-format"; Bamiyan Sanskrit/Brahmi parallel; ~150 scrolls + ~150 palm-leaf fragments - verbatim |
| A07 | https://thesiamsociety.org/knowledge-hub/uploads/research/76/663c83092f582.pdf | PROXY (file exceeds 5 MB webfetch limit; extracted once via r.jina.ai) | OK | Grabowsky JSS 107(1) 2019 pp.79-118; Vat Si Bun Huang 541 mss/861 fascicles, 353 dated; Nagarakhanda 5 Sep 1799; genre table (Jataka 33.8%, Anisong 14.3%) - verbatim |
| A07 | https://www.csmc.uni-hamburg.de/uwa-i/cluster-projects/field-h/rfh07.html | OK | OK | RFH07 corpus ~10,200 mss; Parivara 1520 CE code 06018504078-00; >90 percent Buddhist texts - verbatim |
| A08 | https://asian.washington.edu/british-library-kharosthi-fragments | OK | OK | 29 fragments, clay pot, Hadda provenance, Dharmaguptaka jar inscription, Ghandari hypothesis (Waldschmidt/Brough) - verbatim |
| A08 | https://gandhari-texts.sydney.edu.au/collections/robert-senior-collection/dating/ | OK | OK | Kaniska I era 127/8, donation ~140 CE, C14 two-sigma 130-250 CE (Allon et al. 2006) - verbatim |
| A09 | https://www.aai.uni-hamburg.de/en/forschung/ngmcp/history/about-ngmpp.html | OK | OK | NGMPP founded 1970 DFG-financed; ~180,000 mss; oldest Pali ms; Skanda Purana 810 AD; Berlin permanent loan; Tengboche 185 texts/15,766 folios - verbatim. Page intro indeed says "end in March 2002" (vs home page March 2001): loop-flagged discrepancy is genuine |
| A09 | https://cudl.lib.cam.ac.uk/view/MS-ADD-01464 | OK | OK | Palm-leaf Prajnaparamitastotra + Astasahasrika; colophon Mahipala yr 5 = c.985 or after ca.1070; donor Ladoka. Confirms loop finding that CUDL gives NO "1015 AD" date - DSBC/CUDL discrepancy real and correctly flagged |
| A10 | https://lib.vajirarama.lk/_articles/SVLS-Dr-Udaya-Cabral.pdf | PROXY (raw PDF binary; extracted once via r.jina.ai) | OK | Cabral NL Sri Lanka paper; species table (Borassus vs Corypha umbraculifera vs C. taliera extinct-in-wild vs C. utan); Vattu/pineapple/Keppetiya boil; Mollgaha polishing ~800 g stones; Gadumba charcoal + Dummala oil - matches |
| A10 | https://island.lk/palm-leaf-manuscripts-of-sri-lanka-1/ | PROXY (direct GET returns HTTP 307; content served, extracted once via r.jina.ai) | OK | Kamalika Pieris; Sa-skya Codex (Sankrityayan May 1936, vol 37 of 38, 97 leaves 46x3 cm, P.E.E. Fernando 13th c.); UNESCO Mahavamsa 2023, Accession No. 277587 Peradeniya - matches |
| A11 | https://www.britannica.com/place/Kuthodaw-Pagoda | PROXY (HTTP 403 direct; succeeded once via r.jina.ai retry) | OK | Ethan Teekah; 729 tablets; completed 1868 Mindon (r. 1853-78); work began 1860; 10 lines/day; Sagyin Hill; 730th tablet; gold looted 1885, black ink from 1892; MoW 2013 - verbatim |
| A11 | https://meap.library.ucla.edu/projects/myanmar/ | OK | OK | Inya-Burma Institute/Tainturier; 74 monasteries; Wat Tong Si 14 large + 49 small mulberry + 70 palm-leaf; Hamsi 82 all palm-leaf; Pa-O villages 150/90/17; zare custodianship; mid-19th c.-early 1970s span - verbatim |
| A12 | https://guides.loc.gov/tai-manuscripts/isan-manuscripts | OK | OK | 64 Isan mss; printed-on-palm-leaf since 1920s; Luk So Thammaphakdi 58 mss, printing palm leaf from 2480 [1937]; machine-printed; modern Thai script; "28 of 35" revisions by Ubon head monk; largest item 613 ff. Abhidhamma 1987 - verbatim |
| A12 | https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-about/?lang=en | OK | OK | Four collections exactly: PNTMP 3,914/159,564; DLNTM 1,051/39,547; DELMN 991/13,419; HHHWC 181/21,222; Tiṁsati nipata 1471 CE (CS 833); Wat Sung Men >1,700 mss - verbatim |
| A13 | https://www.laostudies.org/system/files/subscription/JLS-v2-i2-Nov2011-hundius-wharton.pdf | PROXY (raw PDF binary; extracted once via r.jina.ai) | OK | Hundius & Wharton, JLS 2(2):67-74; PLMP 1992-2004 German MFA; ended Dec 2002; >800 monasteries, ~86,000 texts/368,000 fascicles; ~500,000 frames; nothing removed from sites; DLLM from only 380 locations; Parivara CS 882/CE 1520 - verbatim |
| A13 | https://dreamsea.co/preserving-12743-palm-leaf-manuscripts-in-luang-prabang/ | OK | OK | Headline "12,743 manuscripts" but body says "at least 12,700 palm-leaf manuscript pages": loop-flagged discrepancy is genuine; CS 1154 = Thu 5 Jul 1792 Maha Nithan Phanya Chuang; abbot Pha Phui Thirachitta scribe of >=64 mss - verbatim |
| A14 | https://tricycle.org/article/wat-phum-thmei-texts/ | OK | OK | Menchaca/BDRC 18 Nov 2021; >95% loss 1975-1990; Yun Yat 1978 quote; 358 of 433 monasteries empty; Leng Kok-An ten percent estimate; head-monk village safekeeping 1975; ~2,500 restored; now 5,000-6,000 - verbatim |
| A14 | https://www.akhmerbuddhistfoundation.org/manuscripts | OK | OK | Over USD 1 million grants to BDRC; nearly 1.5 million pages; digitization began 2019; purl.bdrc.io/resource/PR1KDPP00 and khmer-manuscripts.bdrc.io - verbatim |
| A15 | https://seacomberlin.wordpress.com/2025/12/08/a-bar-of-pure-gold-shan-buddhist-manuscripts/ | OK | OK | Igunma reprint 8 Dec 2025; pap tup practice; lik ho; Or 15350 (Chiang Mai 1913), Or 16079 (1917, Doris Duke bequest), Or 12040 (1885), Or 15353 Nemi Jataka 185 folds, Or 14572 over 2 kg - verbatim |
| A15 | https://evols.library.manoa.hawaii.edu/items/c4df5089-42e7-4c6a-b574-51b3c2528e67 | OK | OK | Owen, R.W., JSEALS 10.1 (2017):140-164; abstract verbatim including Tai Tham-based Khuen orthography and high literacy rates; handle 10524/52403 |
| A16 | https://lontar.liacs.nl/ | OK | OK | pangutik/pangrupak knife, kemiri candlenut darkening, lempiran/cakep/kropak terminology; May 2025 OCR accuracies 92%/95%/97% (Old Sundanese/Old Balinese/Khmer); hyperspectral imaging - verbatim |
| A16 | https://www.unesco.org/en/memory-world/nagarakretagama-or-description-country-1365-ad | OK | OK | Registration Year 2013; Submission Year 2012; Submitted by Indonesia; Document type Manuscripts; nomination PDF link matches archived copy |
| A17 | https://staatsbibliothek-berlin.de/die-staatsbibliothek/abteilungen/orient/aufgaben-profil/veroeffentlichungen/berlin-turfan-collection/ | OK | OK | Raschmann; Grunwedel/von Le Coq 1902-1914; ~15 languages/~30 scripts; paper dominant, few palm leaves; >30,000 fragments; Waldschmidt series; 7 SHT volumes + Sander palaeography supplement - verbatim |
| A17 | https://silkroadsarchaeoheritage.org/articles/10.5334/srah.8 | OK | OK | Terzi & Whitfield, publ. 12 Apr 2024, 56-76; "Sanskrit manuscripts on palm leaf"; Stein notebook MSS Stein 141/58 Skr. Pothis entry and MSS Stein 4/139 Anxi Ac2 "single Sanskrit MS. on palm leaf" - verbatim |
| A18 | https://cool.culturalheritage.org/coolaic/sg/bpg/annual/v28/bpga28-17.pdf | PROXY (exceeds webfetch size limit; extracted once via r.jina.ai) | OK | van Dyke, BPG Annual 28 (2009):83ff; Met 2007 rediscovery >1,000 leaves; Gore-Tex humidification 20-40 min; isinglass consolidant testing and rejection of gelatin/methyl cellulose tidelines; no-loss-fills ethics; pigment IDs; 30-50 lux display - verbatim |
| A18 | https://www.ifla.org/news/pac-sri-lanka-publishes-a-new-report-on-best-practices-for-the-conservation-of-palm-leaf-manuscripts/ | PROXY (HTTP 403 direct; succeeded once via r.jina.ai retry) | OK | 18 June 2021; PAC Centre at National Library of Sri Lanka; Cabral + Rathnabahu (Univ. Kelaniya); tropical-climate storage quote - verbatim |
| A19 | https://www.ifla.org/wp-content/uploads/files/assets/hq/plm2017_scopingworkshopreport_0.pdf | PROXY (raw PDF binary; extracted once via r.jina.ai) | OK | Scoping workshop 22 Nov 2017, 15 participants; April 2017 survey found 16 projects, no dominant standard; 5 schemas (incl. KKUPLMMs FRBR revised 2012/2015, MARC21 NIU-only); 52 elements (20+19+13); draft core 39 elements (15/15/9) - verbatim |
| A19 | https://bdrc.io/about-us/ | OK | OK | TBRC founded 1999 by E. Gene Smith (1936-2010); 2015 expansion vote; 2016 rename + Fragile Palm Leaves initiative; 2021 BUDA; "over 27 million pages" and banner "shares over 28 million pages"; handwritten text recognition work - verbatim |
| A20 | https://www.unesco.org/en/memory-world/maha-lawkamarazein-or-kuthodaw-inscription-shrines | OK | OK | 729 stone slabs; Fifth Great Synod convened by King Mindon; Registration 2013; Submission 2012; Myanmar; Document type Drawings - verbatim. Loop caveat (marble stelae, NOT palm leaf) correct and necessary |
| A20 | https://tricycle.org/magazine/buddhist-art-repatriation/ | OK | OK | McClure, Summer 2023; Kurkihar Avalokiteshvara 2000/2018/2022 Milan; Kapoor convicted late 2022 (10 yrs); Manhattan DA 307 antiquities ~USD 4M, >2,500 objects ~USD 143M; Rubin returns 2022; Phoeurng Sackona quote - verbatim |

---

## Overall Statistics

- Loops covered: 20/20 (A01-A20)
- URLs selected and tested: 40/40 fetched successfully
- Direct successful fetches: 31
- Fetched via single r.jina.ai retry/proxy: 9 (reasons: 2 x HTTP 403 bot-walls [Britannica, IFLA news]; 1 x HTTP 307 redirect serving content [island.lk]; 1 x response over 5 MB [Grabowsky PDF]; 1 x over-size PDF [van Dyke PDF]; 4 x raw PDF binaries requiring text extraction [Baums 2022, Cabral, Hundius & Wharton JLS, IFLA workshop report])
- Status OK (content confirmed matching loop claims): 40
- Status DEAD (domain gone / 404): 0
- Status MISMATCH (live content contradicts loop claims): 0
- Status permanently BLOCKED: 0 (all blocks cleared on first retry)

## DEAD or MISMATCH Items

None. No replacement actions required.

## Notable Cross-Loop Findings (for Phase B attention)

1. **blogs.bl.uk status contradiction between loops A04/A11 and A15.** Loop A15 records the original BL Asian & African Studies Shan post as HTTP 404, while loop A11 cites the same situation. However, the loop A04 kammavaca URL on blogs.bl.uk was live this session (redirecting into bl.uk's current stories platform with full text intact). Verdict: individual legacy blog URLs differ; do not assume a blanket 404. Where an old blogs.bl.uk URL fails, check for a bl.uk/stories mirror or the SEACOM author reprint before declaring it dead. Loop A04's citations remain usable.
2. **Discrepancies flagged by loops are genuine, not errors.** Three internal contradictions noted during research were independently reconfirmed live and should stay flagged in drafting: (a) NGMPP end date March 2001 (Hamburg home page) vs March 2002 (about page); recommend the split formulation "spring 2001 Nepal / spring 2002 Germany" already used in loop A09; (b) DSBC "1015 AD" illustrated Ashtasahasrika at Cambridge vs CUDL MS-ADD-01464's own dating "c. 985 or after ca. 1070" - do not attribute 1015 to Add.1464 without another shelfmark; (c) DREAMSEA Luang Prabang headline counts "12,743 manuscripts" while its body says "at least 12,700 pages" - cite the body figure or present both.
3. **Proxy-dependent sources.** Britannica, IFLA news pages, and island.lk serve content only intermittently to non-browser agents (403/307). These remain citable but should be archived locally (most already are) and re-checked if cited for anything beyond what is quoted here.
4. **UNESCO Kuthodaw framing.** The register page itself labels the object type "Drawings" and describes stone slabs; loop A20's instruction that Kuthodaw must never be presented as a palm-leaf MoW registration is validated.

## Verdict

Phase A raw data is fit for drafting. All 40 sampled load-bearing URLs across the 20 loops resolve, their titles/topics match what the loops claimed, and every tested headline fact appears verbatim or near-verbatim on the live page. Zero dead links and zero content mismatches were found among the highest-stakes citations; where loops recorded access failures (bot walls, redirects, oversized PDFs), those failures reproduced exactly as logged and none indicated vanished content. The loop authors' own discrepancy flags (NGMPP dates, CUDL/DSBC dating, DREAMSEA counting) were independently confirmed rather than refuted, indicating honest logging practices. No loop requires re-work. Residual risks are limited to (i) the A15 blanket claim about retired blogs.bl.uk URLs, which should be softened to case-by-case status in any draft citing loop A15's negative findings, and (ii) proxy-dependent domains (britannica.com, ifla.org news, island.lk) whose long-term stability warrants keeping the local raw copies already stored in each loop's documents folder. Proceed to Phase B.
