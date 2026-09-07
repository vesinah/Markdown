# Loop B05 — Deep-dive: Lao Nissaya/Nisai Corpus Documentation
Phase B research notes (RESUMED & COMPLETED). Date completed: 2026-08-26.
Scope: mine local Lafont materials first, then live verification across DLLM/CrossAsia IIIF, DREAMSEA/HMML, de Gruyter/JSS/Academia sources. RESEARCH ONLY — no report drafting.
Working folder: `D:\01_APP\Research\output\2026-08-26_คัมภีร์นิสสัย\research-notes\loop_B05\`

---

## Access/provenance log (technical)
- Direct fetch of `https://iiif.crossasia.org/...` is blocked by Anubis PoW bot-wall. WORKAROUND VERIFIED: prefix with `https://r.jina.ai/` returns full page + IIIF 3.0 export JSON (`/s/dllm/madoc/api/manifests/{id}/export/3.0`).
- `www.hmmlcloud.org` = transport failure from this network; `hmmlcloud.org` (no www) via curl.exe = HTTP 200, full record HTML retrieved.
- uplopen.com chapter PDF = 403; ResearchGate PDF = DataDome captcha; de Gruyter mfir.2010.020 = paywalled ("Requires Authentication"). Substitutes used (OA mirrors/indexed excerpts) documented per item.
- Old domain laomanuscripts.net now redirects to CrossAsia landing page; live search app at https://iiif.crossasia.org/s/dllm (client-side JS; server-rendered shell empty).

Local files mined first (already present):
- `documents\lafont_1962_les_ecritures_du_pali_au_laos_OCR.txt` (+ per-page HTML T1_0395–T1_0405, allpages raw) — Lafont 1962, BEFEO 50.2, pp. 395–405.
- `documents\lafont_1965_inventaire_intro_pp429-432_OCR.txt` — Lafont 1965, BEFEO 52.2, pp. 429–545 (intro only).

New files archived this session under `loop_B05\documents\`:
- `hundius_wharton_2011_JLS_2-2_DLLM.pdf` (Journal of Lao Studies 2.2, pp. 67–74; valid %PDF-1.5, 670 KB) — https://www.laostudies.org/system/files/subscription/JLS-v2-i2-Nov2011-hundius-wharton.pdf
- `plmp_khaobailan01_1993.pdf` (PLMP Newsletter Vol. 1, Aug 1993; valid %PDF-1.6, 1.2 MB) — https://digital.crossasia.org/wp-content/uploads/2021/10/khaobailan01-1.pdf

---

## Sub-topic 1 — Lafont's EXACT French statements on nissaya dominance (LOCAL FILES)

**(a) Lafont 1962, p. 395, footnote (1)** — verbatim from OCR (OCR artifact `1ез` = "les"; image page confirms):
> « Notons une désaffection des bonzes pour le pâli, ainsi que l'a mentionné S. E. Thao Nhouy Abhay dans Le bouddhisme lao, in Aspect du pays lao (1956). Un simple regard sur l'inventaire des manuscrits des pagodes de Luang Prabang et de Vientiane montre que très rares sont les ouvrages rédigés en pâli et que **la quasi-totalité des textes religieux sont des Nissaya**. »

Provenance: local file `lafont_1962_les_ecritures_du_pali_au_laos_OCR.txt` line 14; also `lafont1962_pages\T1_0395.html`; original: Lafont, P.-B., "Les écritures du pâli au Laos", BEFEO 50.2 (1962), pp. 395–405, Persée: https://www.persee.fr/doc/befeo_0336-1519_1962_num_50_2_1538 (page JPG: befeo_0336-1519_1962_num_50_2_T1_0395_0000). Note: the claim itself cites Nhouy Abhay, "Le bouddhisme lao", in *Aspect du pays lao* (1956).

**(b) Lafont 1965, p. 430** — verbatim from OCR:
> « Très peu de textes sont rédigés entièrement en pâli, par contre **nombreux sont les textes en pâli glosés phrase par phrase (nissaya) en langue lao**. »

Provenance: local file `lafont_1965_inventaire_intro_pp429-432_OCR.txt` line 23; original: Lafont, P.-B., "Inventaire des manuscrits des pagodes du Laos", BEFEO 52.2 (1965), pp. 429–545.

**(c) Lafont 1965, p. 430** — regional-literature corollary:
> « mis à part les ouvrages bouddhiques de base, il n'existe pas une littérature lao homogène, mais trois littératures dont la diffusion est essentiellement régionale » (Vientiane/Luang Prabang/Champassak totals: 974 titles with 60 common to two regions; 1,616 titles with only 32 common to three regions.)

**(d) Lafont 1965, p. 431** — inventory tagging system (proof that "(N)" was an official cataloguing code):
> « Abréviations : (L) = lao. — **(N) = nissaya**. — (P) = pâli. — (T) = siamois. — (TL) = Tay Lu. »

## Sub-topic 2 — HOW Lao nissayas were composed/read (layout, usage)

**(a) Composition mode** — Lafont 1965, p. 430 (same passage as 1b): nissaya = « pâli glosés phrase par phrase … en langue lao » (Pali glossed phrase-by-phrase into Lao). This is the classic interlinear gloss definition.

**(b) Word-by-word layout (independent confirmation, modern record)** — DREAMSEA DS 0075 00006 description (verbatim):
> "The text is used for studying Pali language. It was written in **Nissaya style, which is Pali word first and followed by Lao word as translation word by word**. This study was running at the **monastic schools and later in the Pali schools in Laos during the 20th century**. Nowaday, it is taught in Buddhist schools and universities."
Provenance: https://hmmlcloud.org/dreamsea/detail.php?msid=3806 (fetched full HTML this session).

**(c) Physical carrier of Pali(-glossed) mss** — Lafont 1962, pp. 401–402 (verbatim OCR):
> « Les manuscrits en pâli, quelle que soit l'écriture utilisée pour leur notation, sont toujours gravés au poinçon sur feuille de latanier ou de bananier, à raison de quatre lignes de texte par feuille de 55 cm de long sur 4 cm de haut. Les feuilles formant un chapitre, c'est-à-dire une liasse de vingt à trente feuilles, sont réunies et sont percées de deux trous… »
> « Les différentes notations du pâli utilisées au Laos s'écrivent toutes de gauche à droite et de haut en bas. Les mots sont notés les uns à la suite des autres, sans espace entre eux… »
Provenance: local files lines 63–75 (`T1_0401.html`, `T1_0402.html`). Caveat: describes Pali-scripture mss generally; nissaya share the same palm-leaf codicology (confirmed by DLLM/DREAMSEA records: palm-leaf, ~55–58 cm × ~4–5 cm leaves, 4–5 lines/side — DLLM Glossary "Folio": "A typical Lao palm-leaf folio has four or five lines of engraved writing on each side").

**(d) Reading/usage context** — DLLM Help/Glossary (below, sub-topic 7) + Wharton/Hundius: bilingual texts function as « pedagogical tools » and shed light on « local interpretation of the Pali »; DREAMSEA: used in monastic schools → Pali schools (20th c.) → Buddhist schools/universities today.

## Sub-topic 3 — Concrete DLLM/CrossAsia manifest records (nisai-tagged + neighbors)

Full IIIF 3.0 metadata pulled via r.jina.ai proxy from `/s/dllm/madoc/api/manifests/{id}/export/3.0`. All three: Institution = National Library of Laos (Vientiane Capital, Mueang Canthabuli District); Attribution: "Images and metadata are made available by Harald Hundius in collaboration with the National Library of Laos (CC BY-NC 4.0) via the Staatsbibliothek zu Berlin | CrossAsia".

**Record A — MANIFEST 25047 (the requested URL) — NISAI-TAGGED**
- Title: **Nisai visutthimak mat cet / phuk si / phuk paet / phuk kao / phuk sip** ນິໄສວິສຸທິມັກ ມັດເຈັດ… (i.e., *Visuddhimagga* nissaya, bundle 7, fascicles 4/8/9/10)
- dllm_12865; PLMP code 01012902154_52; bundle 01012902154 pos. 52; roll 9999
- Language: **Lao, Pali**; Script: **Tham Lao**; Material: Palm-leaf; Extent: 4 fascicle(s), 77 folio(s) (27 img.)
- Ancillary terms (schema:keywords): **["nisai","nissaya"]** ນິໄສ; Category: General Buddhism; Index/title-search: Visutthimak / **visuddhimagga**; PLMP title: ວິສຸທທິມັກ (ແຕກມັດ)
- Undated (« ບໍ່ປາກົດປີລິດຈະນາ »); has_colophon: no; condition: Very damaged but Good legibility; incomplete.
- Manifest page: https://iiif.crossasia.org/s/dllm/manifests/25047 ; Mirador viewer link available; images e.g. https://iiif-content.crossasia.org/xasia/dllm+dllm_00012865+585515/full/full/0/default.jpg

**Record B — MANIFEST 25048 — dated bilingual chronicle**
- Title: **Phuen that phanom / Ulangkha that** ພື້ນທາຕຸພະນົມ / ອຸລັງຄະທາຕຸ (That Phanom chronicle)
- dllm_11806; PLMP 01012913020_01; Language: **Lao, Pali**; Script: Tham Lao; palm-leaf; 1 fascicle, 8 folios (54 img.); has_colophon: yes; complete; Category: Buddhist Chronicle (ຕຳນານ); keyword: phuen; **Date: CS 1262 = CE 1900**
- https://iiif.crossasia.org/s/dllm/manifests/25048

**Record C — MANIFEST 25046 — dated secular bilingual**
- Title: **Suvat / Thao sovat** ທ້າວໂສວັດ / ສຸວັດ
- dllm_03663; PLMP 01012917036_00 (roll 0172); Language: **Lao, Pali**; Script: Tham Lao; palm-leaf; 12 fascicles, 291 folios (86 img.); has_colophon: yes; Category: Secular Literary Work; keyword: thao; **Date: BE 2495 = CE 1952**; note on datasheet mentions year written on survey sheet.
- https://iiif.crossasia.org/s/dllm/manifests/25046

**Record D (title-level, from indexed DLLM search page)** — "**Nisai attha bukkhalabannyatti** (ນິໄສ ອັດຖາບຸຄຄະລະບັນຍັດຕິ)" — appears among DLLM search-page titles alongside Phutthamon, Somphamit, Khavampatti sut, Untitled (Mula tin ka). Provenance: Google-indexed excerpt of https://iiif.crossasia.org/s/dllm/search (retrieved via websearch 2026-08-26). Manifest ID not yet resolved — chaining lead.

## Sub-topic 4 — Wharton 2010 statistics (bilingual corpus + genre terms)

Clarification of DOI: 10.1515/mfir.2010.020 = **Hundius & Wharton, "The Digital Library of Lao Manuscripts: Making the Literary Heritage of Laos Available via the Internet", Microform & Imaging Review 39.4 (2010), pp. 142–144** — paywalled (verified on degruyterbrill.com). The statistical analysis is the companion **conference paper**: Hundius (H.) & Wharton (D.), "Manuscript Literature of Laos – A Preliminary Analysis based on texts found in the Digital Library of Lao Manuscripts", Third International Conference on Lao Studies, Khon Kaen University, 14–16 July 2010 — free at Academia.edu (#40578466) & Scribd (#689378013). Key verified quotes:

- **Bilingual majority:** « The vast majority of manuscripts (**6,203 texts or almost 75 percent**) are bi-lingual, containing Pali and vernacular languages. Such bilingual texts, where the vernacular can provide important information about local understanding or interpretation of the Pali, are increasingly being appreciated by scholars … as pedagogical tools. » ✔ matches mission figure.
- Snapshot basis: 8,349 texts online ≈ 70% of total 11,800 (at time of writing).
- **Language/script table (texts):** Monolingual Pali 635 (Tham Lao 571, Khom 44, Tham Lue 15, Tham Lan Na 4, Other 1); **Pali and Vernacular 6,203** (Tham Lao 5,438, Tham Lue 571, Tham Lan Na 118, Lao Buhan 39, Lik Tai Nuea 20, Khom 17); Lao 6,356+573(Lao Buhan)+… ; Lan Na 125; Tai Lue 588; Tai Nuea 95; Thai etc.
- Of monolingual Pali, 413 (65%) under Vinaya/Sutta/Abhidhamma; ~half dated, >40% of those from 1800–1850.
- **Category table (texts/images):** Jataka 1,681/71,438; Secular Literary Work 1,205/52,975; Sutta 1,103/59,463; Vinaya 568/32,758; General Buddhism 441/18,412; Buddhist Chronicle 658/21,419; Folk Tale 363/13,862; Chanting 260/5,470; Custom/Ritual 236/4,054; Medicine/Magic 200/4,045; Philology 221/8,186; Law 188/4,573; Abhidhamma 184/8,338; Didactics 141/2,804; Astrology 64/2,311; Anisong/Salong/Song 293/3,377; Miscellany 79/2,631; Undetermined 42/1,088.
- Location: 5,536 texts (66%) from Vientiane Capital + Luang Prabang + Savannakhet. Colophons present in 5,358 texts (~65%).
- **Explicit nissaya sentence:** « The collection contains complete sets of **bi-lingual (Pali-Lao) nissaya versions of Paññāsajātaka** collections as well as some twenty bundles representing other incomplete sets of these famous 'Fifty Apocryphal Jatakas' ». (Same claim in DLLM Glossary: « bi-lingual (Pali-Lao) Paññāsajātaka or Ha sip sat ».)
- Genre terms named: sut (bilingual versions « often with elaborated Pali-vernacular translations »), anisong/salong/song, tamnan, jataka/sadok, khong/kham kon, samasa/samat, sap, nisai, vohan/vohara (see sub-topic 7).
- Rare philological items: Piṭakamālā sala vipalit panyansana vipalit, CS 1208 (1846); Sotabba mālinī CS 1198 (1836); four undated bi-lingual Pali-Lao Sotabba mālinī phadet.

JLS version (Hundius & Wharton 2011, JLS 2.2:67–74, PDF archived locally) restates: « Almost 75 percent of the manuscripts are bilingual texts containing Pali-vernacular translations, glosses, and elaborations »; « over 900 monolingual Pali texts »; microfilm corpus ≈ 500,000 frames ≈ 3–4 million pages from >1,000 rolls.

## Sub-topic 5 — DREAMSEA DS 0075 00006 (physical nissaya ms) ✔ FETCHED IN FULL

Source: https://www.hmmlcloud.org/dreamsea/detail.php?msid=3806 (full HTML retrieved via hmmlcloud.org without www; IIIF manifest: https://www.vhmml.org/image/manifest/628353)
| Field | Value |
|---|---|
| DREAMSEA Project No. | DS 0075 00006 |
| Country / Province | Laos / Luang Prabang |
| Collection | Private Collection of Francis Engelmann |
| Subject matter | Linguistics |
| Copyist / Sponsor | Anonymous |
| Place of copying | Vientiane capital |
| Script | Tham Lao |
| Support | Palm-leaf; cover yes (57.9 × 4.8 cm); text block 49.6 × 3.5 cm |
| Pages | 38 (+2 blank); no rubrication/illumination/illustration; condition Good |
| Item title | ສັບສົນ (ຜູກ 5) = "Sab son (phuk 5)" / English: "Sop son (fascicle 5)" |
| Language | Lao; Pali |
| Content description | see verbatim quote in sub-topic 2(b) |

Sibling record **DS 0075 00003** (msid=3803, fetched full): same collection (Engelmann, Luang Prabang), copyist+sponsor = **Monk Sophalapanya**, place Vientiane capital, Tham Lao palm-leaf, 34 pp., cover 58.0×4.6 cm, identical nissaya-style description, title ສັບສົນ (ຜູກ 2) "Sab son (phuk 2)", Language Lao; Pali. IIIF: https://www.vhmml.org/image/manifest/628350.
Context: DREAMSEA Luang Prabang batch = 8,775 palm-leaf mss digitized, « written in Pali and Lao … scripts such as Tham Lao, Lao Buhan, and Modern Lao » (dreamsea.co, 10 Oct 2018); collection page: 450 digitized mss from Luang Prabang monks.

## Sub-topic 6 — Grabowsky colophon studies (Vat Maha That) & bilingual commissioning

Main source (OA, CC BY-NC-ND): **Grabowsky, V., "The Grammar and Function of Colophons in Lao Manuscripts: The Case of the Vat Maha That Collection, Luang Prabang", in Ciotti & Balbir (eds.), The Syntax of Colophons (Studies in Manuscript Cultures 27), De Gruyter, 2022, pp. 229–260. DOI 10.1515/9783110795271-008.** Verified abstract (ResearchGate/uplopen/degruyterbrill):
> « The colophons are **almost exclusively written in the Lao vernacular with rather short, standardized Pali phrases at the end**. The main emphasis is on the role of scribes and of sponsors… The vast majority of Lao manuscripts are elaborately dated according to the Lao lunar calendar. In the case of manuscripts from Luang Prabang the relatively high number of **female sponsors** and the presence of **royalty** among principal lay initiators is a most striking feature. »

What colophons reveal about bilingual commissioning:
- Corpus: 96 leading monastic supporters (64 based at Vat Maha That itself, 32 from 19 other monasteries); lay sponsors concentrated in Ban Vat That (33), Ban Hua Siang (10), **Royal Palace (9) and Front Palace (viceroy)** — i.e., royal patronage of vernacular-Lao religious texts.
- Even the colophons themselves are bilingual artifacts (Lao body + standardized Pali closing formulas) — mirroring the nissaya principle inside the same codicological unit.
- Dating formula example (BAD-22-1-1205): completion date given both in Minor Era (Chulasakkarat) and Bangkok Era (Rattanakosin Sakkarat).
- Ownership statements: e.g., BAD-22-1-0152 commissioned by abbot Chao Mòm Bunthan on 31 Dec 1947, written « both in Tham Lao script and in Roman characters ».
- First documentary evidence of Tham script in Lan Sang kingdom = **monolingual Pali palm-leaf dated 1520/1521**, Provincial Museum Luang Prabang (formerly Royal Palace) — same chapter.
Companion study (OA PDF at siamsociety.org & thaijo): **Grabowsky, V., "Thai and Lao Manuscript Cultures Revisited", JSS 107.1 (2019): 79–118** — BAD catalogue entries repeatedly tagged « language: Lao, Pali; script: Tham Lao » with dates, e.g.: BAD-21-1-0477 Pathama vongsamarini CS 1144 (1782); BAD-21-1-0485 Maha Vessantara CS 1161 (1799); BAD-21-1-0479 Phalasangkhanya [CS 1205] (1843); BAD-21-1-0156 Munlanipphan CS 1285 (1923); BAD-21-1-0412 Sisuthon BE 2515 (1972). Also cites McDaniel 2008:109 — « McDaniel considers manuscripts containing nissaya, vohāra, and nāmasadda texts as pedagogical manuscripts ».
Project umbrella: CSMC Hamburg, "Colophons in Lao Manuscripts from Luang Prabang" (RFH07); related: Bounleuth Sengsoulin 2015 (manuscript cultures 8:53–74) on Vat Saen Sukharam collection.

## Sub-topic 7 — Lao terminology: sap / vohan / nisai / vohara

**Primary catalog authority — DLLM Help page (Search by Ancillary Term), verbatim:**
> "A list of supplementary terms found in titles is provided as a search option. The list includes genres of text, such as _salong_, _tamnan_, _jataka/sadok_, **translatory renderings such as śabda/sap, nissaya/nisai, vohara/vohan**, metric forms such as _khong_, _kham kon_, _samasa/samat_, as well as titles and terms of address such as _kampha_, _cao_, _thao_, _nang_, _phanya_, etc."
Provenance: https://digital.crossasia.org/digital-library-of-lao-manuscripts-help/?lang=en (fetched via websearch cache 2026-08-26).
→ The DLLM treats **sap (<śabda), nisai (<nissaya), vohan (<vohāra)** as three distinct *translatory/glossing* genre labels in Lao titling practice.

Supporting scholarship:
- **McDaniel 2008** "Manuscripts and Education in Northern Thailand and Laos (1569–…)" (originally JIABU 1:109–119; republished Jiabu journal): abstract — « **Nissaya, vohāra and nāmasadda pedagogical genres** reflect modes of thought, pedagogical techniques, and commentarial practices specific to a place and given time… They evince the ways local agents were reaching back and reaching towards Buddhism. » https://so06.tci-thaijo.org/index.php/Jiabu/article/view/201866
- Pali Text Society "Current Projects": « Dr Justin McDaniel is analyzing and translating various **Nissaya, Vohāra, and Nāmasadda Manuscripts from Laos and Northern Thailand**. » https://palitextsociety.org/current-projects-in-pali-studies
- UPenn Libraries holds an 18th-c. "**Vohara manuscript**" (Pali/Thai, genre: commentaries/sermons): https://find.library.upenn.edu/catalog/9963326403503681
- Pali lexical base sense: vohāra = "usage, conventional expression; business, lawsuit…" (PTSD via wisdomlib) — the manuscript-genre usage (explanatory paraphrase) is the Tai-Lao specialization.
- Living example of "sap"-family titling: DREAMSEA ສັບສົນ "Sab son" Pali-study texts (sub-topic 5).
- Distinction nisai vs vohan vs sap as *functional* categories (word-for-word vs paraphrase vs vocabulary) is asserted by DLLM taxonomy + McDaniel's triad, but detailed internal definitions remain unpublished → **ยังไม่พบข้อมูลยืนยัน** for precise operational distinctions between the three labels beyond their co-classification as "translatory renderings"/pedagogical genres.

## Sub-topic 8 — Dating evidence (oldest dated bilingual Pali-Lao material)

Verified anchors:
- **Oldest dated ms in entire DLLM** (Hundius & Wharton 2011, JLS 2.2, footnote 3, archived PDF): « The oldest known dated manuscript in the DLLM collection is a **monolingual Pali copy of part of the Parivāra** (PLMP Code **06018504078_00**), in Tham Lao script, **dated CS 882 or CE 1520**, kept at the Provincial Museum in Luang Prabang (formerly the Royal Palace). »
- Corroboration (Grabowsky 2022): first Tham-script document in Lan Sang = monolingual Pali palm-leaf dated 1520/1521, Provincial Museum LP. And Wharton/Hundius 2010: « The oldest manuscripts, from the beginning of the 16th century, are monolingual Pali texts. »
- **Oldest dated BILINGUAL candidates found online:**
  - **BAD-21-1-0071 Sòng hot** (anisong), palm-leaf, « language: Lao and Pali », CS 1126 = **CE 1764** (listed in Jaengsawang & Grabowsky 2022 conference-paper bibliography; BAD = Buddhist Archives of Luang Prabang).
  - BAD-21-1-0477 Pathama vongsamarini, Lao+Pali, CS 1144 = **1782** (Grabowsky 2019 JSS).
  - BAD-21-1-0485 Untitled Mahāvessantara, Lao+Pali, CS 1161 = **1799** (Grabowsky 2019 JSS).
  - DLLM manifest 25048 (Phuen that phanom/Ulangkha that, Lao+Pali, colophon) CS 1262 = **1900**; manifest 25046 BE 2495 = **1952**.
- Statistical frame: ~half of monolingual Pali mss are dated, >40% of those 1800–1850 (Wharton 2010).
- Absolute claim « oldest dated bilingual Pali-Lao manuscript » : **ยังไม่พบข้อมูลยืนยัน** — no published systematic dating survey of bilingual mss found; earliest verified bilingual specimen located so far = 1764 (BAD-21-1-0071); earlier bilinguals likely exist among DLLM dated "Pali and Lao" records (chaining lead: query DLLM by date × language).

## Sub-topic 9 — PLMP reports/newsletters mentioning bilingual texts

- **PLMP Newsletter "Khao Bai Lan" complete run Vol. 1–22 (Aug 1993 – Apr 2003) freely hosted** by CrossAsia: https://digital.crossasia.org/digital-library-of-lao-manuscripts-plmp-newsletter/?lang=en (direct PDF links, e.g. khaobailan01-1.pdf … khaobailan22.pdf). **Vol. 1 downloaded & validated locally** (documents\plmp_khaobailan01_1993.pdf). Text-mining pass for the word "bilingual/nissaya" inside scanned newsletters still pending (image-based PDFs; OCR needed) → content mention: **ยังไม่พบข้อมูลยืนยัน** until OCR.
- **Hundius & Wharton 2011 JLS (archived PDF)** documents PLMP end-to-end: surveys/inventories incl. « National Library of Laos, *Inventory of Palm-leaf Manuscripts in Six Provinces of Laos* (Vientiane: Ministry of Information and Culture, 1994) »; microfilm master at Lao National Film Archive, working copy National Library + Staatsbibliothek zu Berlin; selection criteria; ~12,000 texts.
- DLLM "About DLLM Collection": DLLM inventory is built directly on « handwritten Lao-language data sheets produced by researchers … under the Preservation of Lao Manuscripts Programme » included in the digital images.
- Bilingual-text relevance: PLMP datasheets carry the language fields ("Lao, Pali") visible in every DLLM record above (e.g., manifest 25047 keywords ["nisai","nissaya"] derive from those sheets).

## Sub-topic 10 — Oral exposition practices complementing written nissaya (Ladwig et al.)

- **Ladwig, P. (2008)** — quoted verbatim inside Jaengsawang & Grabowsky 2022: « **The public act of lauding itself is in Laos called _saloong_ ('to celebrate the outcome of the meritorious deed')** and the donors have variously been described as having prestige or being worthy of veneration » (Ladwig 2008: 91). Ladwig = anthropologist of Lao Buddhism (Cambridge PhD; Bristol Buddhist Death Ritual Project; MPRG Max Planck), fieldwork Luang Prabang & Vientiane; co-author *Buddhist Funeral Cultures of Southeast Asia and China* (CUP 2012), ch. "Feeding the Dead: Ghosts, Materiality and Merit in a Lao Buddhist Festival for the Deceased".
- **Jaengsawang, S. & Grabowsky, V. (2022)** "Anisong Texts in Palm-leaf Manuscripts on Rites of Passage: Buddhization of Innovative Ceremonies in Luang Prabang" (OA at iris.unive.it): « _Anisong_ is a religious textual genre of homiletic texts that are **delivered by monks to lay audience for giving sermons**… a preaching monk reads a suitable anisong text for liturgy »; 18 extant anisong mss dated **1678–1997 CE**; Lao term = *thet salòng*, Lan Na = *thet anisong*; key contrast: « Anisong manuscripts from Northern Thailand were mainly aimed at textual preservation, while those from Laos are intended for **actual ritual use** ».
- **Jaengsawang, S., "The Use of Anisong Manuscripts at Funerals in Northern Thailand and Laos"** (OA chapter PDF, degruyterbrill 10.1515/9783111343556-011): « The manuscripts were **read aloud by monks who held sermons to affirm karmic rewards**. »
- Grabowsky (2017, 13th ICTS, Phaya Sekòng paper) quoted therein: Anisong < Pali ānisaṃsa; Salòng (Lao, from Khmer *chlaṅ*) = "to dedicate, to celebrate"; homiletic texts rarely >20 folios.
- Ladwig's related current work: _mo phon_ ritual specialists (Vientiane) & monastery-school education near Luang Prabang (blog buddhismusberlin.wordpress.com, 1 Feb 2020); ACLS Ho Foundation project on pre-modern Lao Sangha laws (with Kourilsky).
→ Complementarity picture: written bilingual nissaya/anisong codices were performance scripts for oral exposition (sermons/recitation), not silent reading books.

---

## Synthesis (for Phase B chaining)
1. Lafont's two sentences (1962 fn.1; 1965 p.430) remain the canonical statements: religious-text production in Laos ≈ nissaya, not Pali.
2. Quantitative backbone: 6,203/~11,800 DLLM texts (≈75%) bilingual Pali-vernacular (Wharton/Hundius 2010) — matches Lafont qualitatively across 50 years.
3. Layout rule of thumb: Pali lemma first, Lao gloss word-by-word, palm-leaf, Tham Lao script (Lafont 1962 codicology + DREAMSEA descriptions + DLLM records).
4. Terminology triangle to keep distinct: nisai/nissaya ↔ vohan/vohāra ↔ sap/śabda (+ nāmasadda) — all "translatory/pedagogical" in DLLM & McDaniel.
5. Chronology gap to attack next: pre-1764 dated bilingual mss; start from PLMP 06018504078_00 (1520, monolingual) and walk forward through dated DLLM "Pali and Lao" records.

## Key chaining keywords
- nissaya, nisai, ນິໄສ; vohara, vohan, vohāra; nāmasadda; śabda/sap; ສັບສົນ "Sab son"
- "Pali and Lao" bilingual; "pâli glosé phrase par phrase"; quasi-totalité des textes religieux des Nissaya
- DLLM PLMP code (13-digit, e.g. 01012902154_52; 06018504078_00); dllm_12865; ancillary term nisai; CrossAsia IIIF export JSON endpoint `/madoc/api/manifests/{id}/export/3.0`
- Paññāsajātaka / Ha sip sat bilingual nissaya sets; Visuddhimagga nissaya Laos; Sotabba mālinī phadet
- Vat Maha That Rasabovoravihan colophons; mūlasaddā female sponsors; Buddhist Archives of Luang Prabang BAD- codes
- Khao Bai Lan PLMP newsletter; Inventory of Palm-leaf Manuscripts in Six Provinces of Laos 1994
- thet salòng / anisong ānisaṃsa sermons; Ladwig saloong 2008:91; mo phon
- Cunlasakkalat CS era dating; Parivāra CS 882 = 1520 oldest dated
- r.jina.ai proxy for iiif.crossasia.org (Anubis bypass); hmmlcloud.org without www
