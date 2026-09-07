# Source List — Loop B08: AI/HTR for Buddhist palm-leaf scripts

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B08 | **Date:** 2026-08-26
Status codes: FULL-READ (page fetched and read substantially, raw copy in documents/) | SNIPPET (search-result excerpt only; direct fetch blocked or not attempted) | BLOCKED (>=2 fetch attempts failed) | NEGATIVE (query returned no relevant results)

## Fully read + archived (raw copies in documents/)

1. Kesiman M.W.A. et al. "Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia", J. Imaging 4(2):43, 2018. https://www.mdpi.com/2313-433X/4/2/43 — FULL-READ (~75% of text; abstract, corpus sections, methods, datasets). Archive: mdpi_jimaging_2018_kesiman_palmleaf_dia_benchmark.md
2. Transkribus AI Model Catalog. https://www.transkribus.org/models — FULL-READ ("Browse 426+ free AI models"; landing list all-European). Archive: transkribus_model_catalog.md
3. Transkribus public model balinese_v1. https://www.transkribus.org/models/balinese-palm-leaf-manuscripts-16th-century — FULL-READ (PyLaia, 0.4% CER val, 199 training pages, Model ID 48252, published 26 Nov 2022, authors Rahul Krishna/Ravi Kiran). Archive: transkribus_balinese_v1_model_page.html
4. IIIF CrossAsia lanna portal (DLNTM viewer site). https://iiif.crossasia.org/s/lanna — FULL-READ via r.jina.ai (5,800+ manuscripts; 4 collections with image counts; funders; transcription search layer). Archive: iiif_crossasia_lanna_site.md
5. DLNTM project about page. http://lannamanuscripts.net/en/about — FULL-READ via r.jina.ai (6,137 manuscripts; CC BY-NC 4.0; Mellon/Luce funders). Archive: lannamanuscripts_net_about.md
6. Thammano A., Pravesjit S. "Recognition of archaic Lanna handwritten manuscripts using a hybrid bio-inspired algorithm", Memetic Computing 7:3–17, 2015. https://link.springer.com/article/10.1007/s12293-015-0152-3 — FULL-READ of abstract + complete reference list (body paywalled). Archive: springer_thammano_pravesjit_2015_lanna_memetic.md
7. Puarungroj W. et al. "Using Deep Learning to Recognize Handwritten Thai Noi Characters in Ancient Palm Leaf Manuscripts", ICADL 2020, LNCS 12504. https://link.springer.com/chapter/10.1007/978-3-030-64452-9_20 — FULL-READ of abstract + references (MobileNetV1 >90%; 2,600-image dataset from Loei museum). Archive: springer_puarungroj_2020_icadl_thainoi_mobilenet.md
8. SADA/PALM-SADA/KhmerFormer project page (Thuon et al.). https://ruisju111.github.io/sada/ — FULL-READ incl. full BibTeX (APSIPA 2022 pp.1855-1862; APSIPA 2024; PRL 195:8-15 2025). Archive: sada_project_page.md
9. PALM-SEA project page. https://ruisju111.github.io/PLA/ — FULL-READ (cites SleukRith HIP 2017). Archive: palmsea_project_page.md
10. Zenodo API records, q="palm leaf manuscript". https://zenodo.org/api/records?q=%22palm%20leaf%20manuscript%22&size=10 — API response read (Tirukkural Tamil series; KSW Khmer 2024). Archive: zenodo_api_palm_leaf_manuscript.json
11. arXiv API negative results. all:"Tai Tham" and all:"Lanna manuscript" = 0 results each. Archives: arxiv_tai_tham_zero_results.xml, arxiv_lanna_manuscript_zero_results.xml
12. arXiv API positive hits (abstracts read via Atom feed): 1708.03276 Tensmeyer & Martinez FCN binarization; 2108.09436 Palmira/Indiscapes2; 1912.07025 Indiscapes. https://arxiv.org/abs/1708.03276 , https://arxiv.org/abs/2108.09436 , https://arxiv.org/abs/1912.07025

## Snippet-level leads (URLs recorded; not yet fully read)

13. Valy D., Verleysen M., Chhun S., Burie J.-C. "A New Khmer Palm Leaf Manuscript Dataset for Document Analysis and Recognition: SleukRith Set", HIP 2017, DOI 10.1145/3151509.3151510 — SNIPPET (657 pages). Mirrors: ResearchGate publication/322236154 (+ author PDF link), SemanticScholar paper/bae8ad8c..., HF dataset SEACrowd/sleukrith_ocr
14. Thuon N., Du J., Theang P., Thuon R. "Multi-low resource languages in palm leaf manuscript recognition...", Pattern Recognition Letters 195:8–15, 2025 — SNIPPET via ScienceDirect S0167865525001734 + GitHub back-kh/SADA-Ancient-Palm-Leaf-Manuscripts-Recognitions
15. "Supervised learning for low-resource isolated glyph recognition in palm leaf manuscripts", Pattern Recognition (article S0031320325012798, dated 2026-04-01) — SNIPPET
16. IEEE document 11350246 "Improved Vision Transformer for Character Detection in Palm-Leaf Manuscripts" — SNIPPET
17. Sriatmaja & Nwe Nwe, Myanmar palm leaf manuscript handwriting OCR (AAP conf.), Scribd mirror www.scribd.com/document/884100582/Sriatmaja-Nwe-Nwe-9001-AAP — SNIPPET (18 features, 1-D segmentation)
18. DevThazin/burmese-character-recognition GitHub (96.85%, 54 classes, deep residual CNN) — SNIPPET
19. eAsia 2009 "Sinhala OCR Digital Handwritten Palm leaf Text" ABS-387 — Scribd mirrors only (documents/454066085, 94176879) — SNIPPET
20. Inkeaw P. et al., ICSIPA 2015 "Lanna Dharma handwritten character recognition on palm leaves manuscript based on wavelet transform", pp. 253–258; Chueaphun C. et al., KDIR 2012 kNN+CRF pp. 169–174; Khankasikam K. 2013 Appl Mech Mater 263–266:2553–2560; Valy D. et al. ICFHR 2018 pp. 13–18; Kesiman M.W.A. et al. ICPR 2016 pp. 4017–4022; Puarungroj W. et al. A-LIEP 2019 pp. 408–415 — all VERIFIED as listed citations inside source #7's reference list
21. IIIF manifests (structure evidence only): https://iiif.crossasia.org/s/lanna/manifests/559002 (Saeng mueang) and /manifests/558990 (Latana saeng pue) — SNIPPET via search index
22. Crowdsourcing platforms (generic): fromthepage.com; jdrc.hsites.harvard.edu/transcription (Yale-origin platform); www.transkribus.org/crowdsourcing-transcription-platform; crowd.loc.gov; transcription.si.edu; archives.gov/citizen-archivist/missions; dreamsea.co — SNIPPET
23. thaimanuscripts.de (portal listing Thai/Tai digital collections) — SNIPPET
24. LAM Dataset benchmark arXiv 2208.07682 — surfaced in Q1 SERP; NOT inspected further this loop (appears Latin-script focused per snippet); Phase C candidate to verify scope

## Blocked

25. https://iiif.crossasia.org/s/lanna/manifests/559002 (+ .json; direct x2 + r.jina.ai x2) — BLOCKED by Anubis proof-of-work wall. JSON structure not retrieved.

## Negative findings (queries with no relevant verified results)

26. arXiv: zero entries for "Tai Tham"; zero for "Lanna manuscript"
27. No Transkribus public model found for Tai Tham/Khom/Burmese/Khmer/Lao Tham/Sinhala (site-restricted query #6)
28. No peer-reviewed Sinhala ola-leaf HTR paper located beyond the 2009 eAsia Scribd mirrors
29. No citizen-science transcription initiative specific to Asian palm-leaf manuscripts verified this loop
30. loop_A19\findings.md does not exist in workspace (glob across repo returned nothing)
