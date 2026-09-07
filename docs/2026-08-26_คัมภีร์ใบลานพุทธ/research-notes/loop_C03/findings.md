# Findings — Loop C03: SleukRith/SADA full texts + DLNTM IIIF manifest structure + Tai Tham HTR feasibility

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C03 | **Date:** 2026-08-26
สถานะ: VERIFIED-PAGE = อ่านจากหน้าเว็บ/PDF/JSON ที่ fetch แล้วเก็บดิบใน documents/ ; SNIPPET = เห็นเฉพาะในผลค้นหา ; BLOCKED = พยายาม >=2 ครั้งแล้วไม่ผ่าน
Precondition: loop_B08\findings.md อ่านแล้วเต็ม — loop นี้ปิดช่อง B08 items 1, 2, 6, 7

## A. SleukRith Set HIP 2017 (DOI 10.1145/3151509.3151510) — FULL TEXT OBTAINED

### F1. วิธีได้มา
- r.jina.ai proxy ของ `https://dl.acm.org/doi/pdf/10.1145/3151509.3151510` ให้ข้อความเต็ม 6 หน้า [VERIFIED-PAGE — archived: documents/sleukrith_hip2017_fulltext_jina.txt]
- ACM landing page (webfetch) ให้ metadata เพิ่ม: pages 1–6; published 10 Nov 2017; HIP'17 Kyoto Japan 10–11 Nov 2017; acceptance rate "19 of 33 submissions, 58%"; metrics "25 Total Citations / 328 Downloads" (as of 22 Aug 2026); affiliations Valy = UCLouvain ICTEAM + Institute of Technology of Cambodia; Chhun = ITC; Burie = L3i Univ. La Rochelle [VERIFIED-PAGE]
- Semantic Scholar API: citationCount 30; openAccessPdf status CLOSED [VERIFIED-PAGE — s2_api_sleukrith.json]

### F2. Dataset composition (Tables I–III)
- Table I sources of pre-existing digitized collections: EFEO **937 collections** (microfilm via Nikon F3, low quality); Buddhist Institute **1 collection** (method unknown); National Library Phnom Penh **35 collections** (Canon 750D, digitized by a Khmer manuscript conservation and research group) [VERIFIED-PAGE]
- Own campaign (Table II): 13 collections / **211 pages** — Tuol Tom Poung Phnom Penh 2 coll./54 pp.; Tek Vil Pagoda Kandal 2/98; Bo Pagoda Siem Reap 9/59; gear Canon EOS 5DS f/4, 1/10s, ISO 100, 45 mm, 65 cm distance, Manfrotto 055XPro3 tripod + LED lights [VERIFIED-PAGE]
- Table III final selection: NL **427** + EFEO **26** + BI **15** + campaign **189** = **657 pages** ("Due to their low quality, the dataset only contains five pages each from the collections of EFEO and the Buddhist Institute") [VERIFIED-PAGE]

### F3. Ground-truth statistics (Table IV) — หัวใจของ gap ที่ต้องการ
| Data | Quantity |
|---|---|
| Annotated characters | **301,626** |
| Character classes | **207** |
| Annotated words | **73,359** |
| Unique words | **6,284** |
| Text lines | **3,245** |

[VERIFIED-PAGE]

### F4. Annotation protocol
- Java annotation tool (custom UI, left/right-click driven); 34 volunteer ground truthers from ITC + NIPTICT; steps = segment+label characters (polygon per char, Unicode label) → group into words (consonant-first-vowel-second Unicode order; secondary modern-Khmer spelling label when needed) → assign chars to lines; export XML with `CharAnno` + `WordAnno` sections; validation pass afterwards; Telea (2004) inpainting used to clean elongated-character patches via polygon mask [VERIFIED-PAGE]

### F5. CNN baseline result (Section 5)
- After removing punctuation/diacritics: **111 classes**, train **113,206** samples, test **90,669** samples
- Architecture: grayscale 48x48 input → 3x (conv 5x5 stride 1 zero-padded + ReLU + maxpool 2x2), feature maps 8/16/32 → flatten → FC 1024 ReLU → dropout p=0.5 → softmax output layer printed as "106 neurons corresponding to all character classes" (inconsistency 111-vs-106 present in original text)
- Adam optimizer, batch size 100, 50,000 iterations → **test error rate 6.04%**
- Authors' conclusion quote: "The network performs with an error rate of 6.04% demonstrating that there is still room for improvement. In future work, the next version of the dataset is likely to include an increased number of pages so that it can be used as training data for a more complex system such as deep learning." [VERIFIED-PAGE]

### F6. Availability + funding
- "The dataset and also the annotation tool are made publicly available at github.com/donavaly/SleukRith-Set" [VERIFIED-PAGE]
- Funding: ARES-CCD program AI 2014-2019 (Belgian university cooperation) + STIC Asia program (French MAEDI) [VERIFIED-PAGE]
- Context facts verified in body: Khmer alphabet "more or less 70 symbols"; languages on leaves = Khmer, Pali, Sanskrit; no word separation (spaces separate phrases); vowels positioned left/right/below/above consonants; subscript forms create >3 vertical levels; binding holes interrupt text lines [VERIFIED-PAGE]

### F7. Post-B08 citation trail (จาก ACM Cited By — อัปเดตสถานภาพสาขา)
- Thuon N., Du J., Theang P., Thuon R.: **PALM-LAY** ICDAR 2025 Workshops, LNCS 16226, pp. 246–262, first online 02 Jan 2026, DOI 10.1007/978-3-032-09371-4_15 [VERIFIED-PAGE — Springer chapter fully read]
- Thuon et al.: Angkorian-KSI multi-task Khmer stone inscription benchmark, ICDAR 2026, DOI 10.1007/978-3-032-36039-7_23; Ghosh/Gunda/Sandral/Sarvadevabhatla: UniLipi unified multi-script OCR for historical Indic manuscripts, ICDAR 2026 DOI 10.1007/978-3-032-36039-7_9; CURIO WACV 2026 DOI 10.1109/WACV61042.2026.00200; LineTR Pattern Recognition 2024 DOI 10.1007/978-3-031-78495-8_14; SeamFormer ICDAR 2023 DOI 10.1007/978-3-031-41685-9_20; Nom et al. KhmerST ACCV 2024; Thuon et al. GANs/transformers IJDAR 27(3):415–432 (2024) DOI 10.1007/s10032-024-00472-z [VERIFIED-PAGE — ACM cited-by listing]
- **ไม่มีรายการใดใน trail นี้เกี่ยวกับ Tai Tham/Lanna**

## B. PALM-SADA PRL 195 + SADA APSIPA follow-ups

### F8. PRL 195 bibliographic closure (Crossref + Unpaywall)
- DOI **10.1016/j.patrec.2025.04.031**; Pattern Recognition Letters vol. 195, pp. 8–15, Sept 2025 (created 13 May 2025); authors Nimol Thuon, Jun Du, Panhapin Theang, Ranysakol Thuon; cited-by 5; funders Chinese Academy of Sciences + TWAS + NSFC; Elsevier TDM endpoints exist (`api.elsevier.com/content/article/PII:S0167865525001734`) but need API entitlement [VERIFIED-PAGE — crossref_prl195_thuon.json]
- Unpaywall: `is_oa:false`, `oa_status:"closed"`, `has_repository_copy:false`, oa_locations [] → **full text legally unavailable anywhere public** [VERIFIED-PAGE — unpaywall_prl195.json]
- Reference list (24 refs) captured; includes Kesiman 2018 benchmark, ICFHR2018 competition, Jacob 1960 "The structure of the word in Old Khmer" BSOAS 23, plus HMR/math-expression recognition lineage that inspired its CNN-Transformer decoder [VERIFIED-PAGE]

### F9. Project page ruisju111.github.io/sada/ (FULL READ)
- Team: Nimol Thuon (NEL-SLIP, USTC), Jun Du (USTC/iFLYTEK Research), Jianshu Zhang (iFLYTEK), Sada Thuon (One to Many Cambodia) [VERIFIED-PAGE — archived sada_project_page_raw.html]
- Method statements: KH-SADA "leverages DenseNet with GRU-based attention mechanisms for syllable-level analysis"; PALM-SADA "multimodal framework ... integrates all target scripts by constructing enhanced grammar structures and utilizing multiple transformer-based models to automatically correct grammatical errors"; evaluation "on diverse datasets, including public benchmarks from the ICFHR 2018 competition and newly augmented collections" [VERIFIED-PAGE]
- Paper summaries on page: APSIPA 2022 = SADA preprocessing expands limited datasets via syllable/glyph-pattern structures + geometric transformations feeding DenseNet-GRU; APSIPA 2024 KhmerFormer = multi-scale CNNs + external attention Transformer for isolated glyphs; PRL 2025 = unified multi-script framework + error analysis identifying cross-language visual confusion [VERIFIED-PAGE]

### F10. GitHub README back-kh/SADA-Ancient-Palm-Leaf-Manuscripts-Recognitions (FULL READ)
- **"our research team achieved first place in both the isolated glyph recognition and word/text recognition tasks of the ICFHR 2018 palm-leaf manuscript competition"** [VERIFIED-PAGE — archived sada_github_readme_raw.md]
- KH-SADA details: glyph-class + transliteration dictionaries; grammar forms `C, CV, VC, CC, VV, CCC, CVC, VCV`; grammar-aware synthetic word-image generation; attention-based recognition pipeline; beam-search decoding; WER/ExpRate evaluation; legacy code = Python 2.7 + Theano gpuarray/cuDNN (train_nmt.py, translate.py, compute-wer.py); dataset + pretrained weights on Google Drive links [VERIFIED-PAGE]
- PALM-SADA: monosyllabic + polysyllabic synthesis; hybrid CNN–Transformer encoder–decoder; "interactive post-processing mechanism for error detection and transcription refinement"; **complete implementation + extended datasets restricted to internal research use only** [VERIFIED-PAGE]
- License CC0 1.0 for public repo files only; part of broader **PALM-SEA** effort; acknowledgements list TWAS, CAS, NSFC, One-to-Many Research; lead Dr. Nimol Thuon ORCID 0000-0001-6672-1933 [VERIFIED-PAGE]

### F11. APSIPA follow-up DOIs (Crossref)
- KH-SADA: **10.23919/apsipaasc55919.2022.9980217**, APSIPA ASC 2022, Chiang Mai Thailand 7–10 Nov 2022, pp. 1855–1862, IEEE [VERIFIED-PAGE]
- KhmerFormer: **10.1109/APSIPAASC63619.2025.10849201**, APSIPA ASC 2024, pp. 1–6 [VERIFIED-PAGE — from ACM cited-by listing]

### F12. PALM-LAY (ICDAR 2025 WS, LNCS 16226) — FULL READ abstract
- "over 566 pages and more than 6,000 annotated regions, covering six distinct scripts: Tamil, Kambaramayanam, Jathakam, Khmer, Sundanese, and Balinese"; seven region categories MainRegion, TextLineRegion, ParagraphRegion, SymbolicMark, PhysicalDamage, Illustration, Other; benchmarks SOTA object detectors; "dataset and documentation will be publicly released at https://github.com/back-kh/PALM-LAY"; authors Thuon/Du/Theang/Ratana Thuon (USTC NEL-SLIP; corresponding Jun Du) [VERIFIED-PAGE]
- ไม่มี Tai Tham ใน PALM-LAY; refs ยังเผลอรายการใหม่: Thuon et al. IJDAR 2025 "A low-intervention dual-loop iterative process..." DOI 10.1007/s10032-025-00532-y [VERIFIED-PAGE]

## C. DLNTM IIIF manifest — alternate access results

### F13. Access status matrix
- Live `iiif.crossasia.org`: Anubis PoW block confirmed again; **also blocks r.jina.ai proxy** (tested /s/lanna/items and /s/lanna/manifests/559002 through proxy — both returned Anubis challenge) [BLOCKED — 2 attempts each path]
- Raw Presentation-API JSON (@context/canvases): **still not retrieved** — Wayback captures are HTML renderings, not JSON [BLOCKED]
- BUT: Wayback Machine holds extensive HTML captures of manifest pages: CDX lists manifests/**554809–554839+** (30 shown, Mar 2025 crawl, ~18–19 KB each) plus 2022-era paths `/s/lanna/collections/531672/manifests/531673|674|675|676` and canvas-level URLs `.../manifests/531674/c/533675` etc. [VERIFIED-PAGE — wayback_cdx_lanna_manifests.json]

### F14. Manifest structure fields OBSERVED (from archived Madoc page 554809)
Platform identified: **Madoc** (Digirati IIIF platform) rendering embedded manifest data. Fields documented:
- Page `<title>`: "Digital Library of Northern Thai Manuscripts - Patip puca (ปติปุจฉา)" — Thai original-script title alongside romanization
- `requiredStatement` = Attribution: "Images and metadata are made available by the National Library of Laos (CC BY-NC 4.0) via the Staatsbibliothek zu Berlin | CrossAsia"
- Metadata keys observed: `dc:identifier` ["24"]; `otherIdentifier.code_number` ["010706001_02"]; `dc:subject` ["Anisong"/อนิสงค์]; `script` ["Tham Lan Na"/ธรรมล้านนา]; language ["Pali and Lan Na"]; `schema:latitude` 18.788535; `schema:longitude` 98.981865; material ["Palm-leaf"/ใบลาน]; has_colophon/is_illustrated/is_color/is_complete flags; pages_count; in_collection
- Composite block `lanna_original` (pipe-joined field dump) contains: documents_id, code_number, documents_number_of_fascicles (=1), documents_number_of_folios (=7), full_location_name (+_lao variant: Wat Phra Sing Woramahawihan, Mueang District, Chiang Mai), locations_gps_lat/lon + exact_coordinates flag, locations_dlntm_loc_code, categories_name(+_lao), languages(+_lao), scripts(+_lao), title_search_roman/lao, dllm_title_roman/lao (Patip puca/ปะทีปบูชา), plmp_title_lao, legibilities_name ("Good legibility"), conditions_name ("Slightly damaged"), documents_preferred_date_system ("Undated"), in_collection [VERIFIED-PAGE — manifest_554809_embedded_json_excerpt.txt]
- Platform config visible in page: Madoc crowdsourcing workflow objects (`CrowdsourcingBanner`, reviewOptions {allowMerging:false, preventContributionAfterRejection...}, claimGranularity:"manifest", randomCanvas:true, adminsAreReviewers:true), searchStrategy:"websearch", contentLanguages en/th [VERIFIED-PAGE]
- Help text rendered on manifest page: "Enter your search term into the search slot above either in transcription or in original script to produce a list of search results... display of metadata can be switched between transcription/original by using the pull-down menu above." [VERIFIED-PAGE]

### F15. Supporting infrastructure facts (digital.crossasia.org works directly)
- DLNTM About (FULL READ): four collections — PNTMP 3,914 mss / 159,564 images; DLNTM 1,051 / 39,547; DELMN 991 / 13,419; HHHWC 181 / 21,222 (total 233,752 images). Project began 2013; designed by Harald Hundius & David Wharton at National Library of Laos; Technical Director David Wharton; UPenn project leader Justin McDaniel; server hosted by Berlin State Library; images archived redundantly at SBB + CMUL + UPenn + NLL. Digitization: Zeutschel OM 1600 rollfilm scanner (PNTMP/DELMN), Zeutschel OS 12000 (HHHWC); temple direct-digitisation Nikon D610 + AF-S NIKKOR 50mm f/1.4G tethered to MacBook Pro; X-Rite ColorChecker targets; 300ppi TIFF masters + 72ppi JPEG derivatives. Naming scheme PNTMPaaa_bbb_ccccccccc_cc_ddd. License: "digital images ... and other data" CC BY-NC 4.0 except PNTMP medical treatises [VERIFIED-PAGE — digital_crossasia_dlntm_about_en.html]
- DLLM About (FULL READ): 12,168 texts searchable; launched Sept 2009; majority Lao/Lan Na/Tai Lue traditions; DFG + BMZ funded [VERIFIED-PAGE — digital_crossasia_dllm_about_en.html]
- Portal landing: "SEARCH the digital library of 6,137 manuscripts from Northern Thailand" [VERIFIED-PAGE]
- Old lannamanuscripts.net item URLs now redirect to CrossAsia portal (item 3669 test) [VERIFIED-PAGE]; "Japan Roll Manifests" page linked from portal nav now returns 404 [NEGATIVE]

## D. Tai Tham HTR feasibility from DLLM/DLNTM transcriptions (topic c)

### F16. Documented transcription coverage stats: ยังไม่พบข้อมูลยืนยัน
- No fetched source states how many DLLM/DLNTM manuscripts have transcriptions, or any % coverage. DLNTM About/Resources and DLLM About describe cataloguing, image access and search, but give no transcription counts. Bing/Mojeek/DDG searches surfaced nothing relevant (Bing noise-only; others CAPTCHA-blocked). S2/OpenAlex APIs rate-limited during window.

### F17. Feasibility evidence that WAS verified
1. A transcription/full-text layer exists and is searchable: lanna site help text (archived manifest page) instructs searching "either in transcription or in original script" and switching metadata display "between transcription/original" [VERIFIED-PAGE]; B08 already verified the live-site equivalent phrasing.
2. Licensing permits reuse: DLNTM About — images AND other data under CC BY-NC 4.0 (exception: PNTMP traditional-medicine treatises) [VERIFIED-PAGE]. Non-commercial HTR model training on this corpus is license-compatible.
3. Corpus scale sufficient relative to published baselines: 6,137 manuscripts / 233,752 images total across the four lanna collections; majority written in Tham Lan Na, Tham Khuen, Tham Lue, Tham Lao variants (Resources page scripts section) [VERIFIED-PAGE].
4. Comparable-scale proof of concept on palm leaf: SleukRith Set's plain 3-block CNN reached 6.04% character error with 113,206 training samples (F5) — an order-of-magnitude reference point for what a modest architecture does on palm-leaf data without augmentation [VERIFIED-PAGE].
5. Low-resource method transferability: SADA grammar-aware augmentation pipeline (glyph dictionaries + syllable-form constraints + synthetic word images) is explicitly designed for exactly this data-scarcity regime, with public code/dictionaries/weights (KH-SADA component) though Python 2/Theano legacy [VERIFIED-PAGE — README].
6. Crowdsourcing rails already configured: Madoc instance on iiif.crossasia.org exposes review/contribution workflow options at manifest granularity (F14) — infrastructure for expanding transcription ground truth exists even if unused publicly [VERIFIED-PAGE].

### F18. Negative evidence (what was NOT found)
- No peer-reviewed line-level HTR system for Tai Tham in the ACM SleukRith cited-by trail (25 entries listed, none Tai Tham) [VERIFIED-PAGE]
- PALM-LAY six-script layout dataset excludes Tai Tham [VERIFIED-PAGE]
- arXiv `"Tai Tham"` = 0 results (carried over VERIFIED from B08)

## Phase D candidates
1. Browser-assisted (human PoW solve) fetch of one raw manifest JSON e.g. `https://iiif.crossasia.org/s/lanna/manifests/554809` + a canvas transcription payload, to close the JSON gap definitively
2. Contact/request path: CrossAsia IIIF team or David Wharton for transcription-layer statistics (coverage counts per script)
3. Pilot spec: Tai Tham HTR using DLLM/DLNTM transcriptions under CC BY-NC 4.0, benchmarking against SleukRith CNN baseline protocol (48x48, ~111-class setup) + SADA-style augmentation
4. Monitor github.com/back-kh/PALM-LAY release (promised public dataset/docs)
5. Angkorian-KSI (ICDAR 2026) may share train/test methodology reusable for Khom script work
