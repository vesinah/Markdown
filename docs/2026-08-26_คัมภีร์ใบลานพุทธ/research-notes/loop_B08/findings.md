# Findings — Loop B08: AI/HTR for Buddhist palm-leaf scripts (Tai Tham, Khom, Burmese, Lao Tham, Sinhala ola)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B08 | **Date:** 2026-08-26
สถานะ: VERIFIED-PAGE = อ่านจากหน้าเว็บ/PDF ที่ fetch แล้วเก็บดิบใน documents/ ; SNIPPET = เห็นเฉพาะในผลค้นหา (fetch ตรงถูกบล็อก) ; BLOCKED = พยายาม >=2 ครั้งแล้วไม่ผ่าน
Precondition note: loop_A19\findings.md ไม่พบใน workspace — A19 gaps สรุปจาก phase-a-verification.md (IFLA metadata scoping workshop; BDRC HTR mention) + topic brief

## A. Tai Tham / Lanna Tham — สถานะการวิจัย HTR

### F1. ระดับอักขระ (character-level) เท่านั้น — ยังไม่มี line-level HTR ที่ peer-review ยืนยันได้ในดัชนีที่สำรวจ
- arXiv API: `all:"Tai Tham"` totalResults = **0**; `all:"Lanna manuscript"` totalResults = **0** [VERIFIED-PAGE — raw XML archived: documents/arxiv_tai_tham_zero_results.xml, arxiv_lanna_manuscript_zero_results.xml]
- Thammano & Pravesjit, "Recognition of archaic Lanna handwritten manuscripts using a hybrid bio-inspired algorithm", *Memetic Computing* 7:3–17 (2015), DOI 10.1007/s12293-015-0152-3: "The proposed system consists of two main processes: the segmentation process and the recognition process. The segmentation process decomposes the touching or overlapping characters, commonly found in Lanna manuscripts, into isolated characters." Recognition pipeline = self-organizing map clustering + clonal selection algorithm (artificial immune system) + particle swarm optimization local search. Authors: King Mongkut's Institute of Technology Ladkrabang, Bangkok. Received 07 Feb 2014, published 12 Feb 2015. Body paywalled; abstract + full reference list read [VERIFIED-PAGE — archived]
- Reference trail จากงานเดียวกัน (SNIPPET-level via its reference list, all VERIFIED-PAGE as listed citations):
  - Khankasikam K (2013) "Lanna handwritten character recognition on historical documents using feature extraction", Appl Mech Mater 263–266:2553–2560
  - Pravesjit S, Thammano A (2012) "Segmentation of historical Lanna handwritten manuscripts", 6th IEEE Int. Conf. Intelligent Systems, Sofia, pp. 332–337

### F2. Lanna Dharma (อักษรธรรมล้านนา) — สายงาน Chiang Mai University
- Inkeaw P., Chueaphun C., Chaijaruwanich J., Klomsae A., Marukatat S. (2015) "Lanna Dharma handwritten character recognition on palm leaves manuscript based on wavelet transform", IEEE ICSIPA 2015, pp. 253–258 [VERIFIED-PAGE as citation #6 of ICADL 2020 chapter]
- Chueaphun C., Klomsae A., Marukatat S., Chaijaruwanich J. (2012) "Lanna Dharma printed character recognition using k-nearest neighbor and conditional random fields", KDIR 2012, pp. 169–174 [VERIFIED-PAGE as citation #10]
- ทั้งหมดยังเป็น isolated-character paradigm ไม่ใช่ HTR ต่อเนื่อง

### F3. Thai Noi (สคริปต์ญาติฝั่งอีสาน/ลาวบูฮาน) — deep learning ยืนยันแล้ว
- Puarungroj W., Boonsirisumpun N., Kulna P., Soontarawirat T., Puarungroj N. (2020) "Using Deep Learning to Recognize Handwritten Thai Noi Characters in Ancient Palm Leaf Manuscripts", ICADL 2020, LNCS 12504, Springer, DOI 10.1007/978-3-030-64452-9_20, published 26 Nov 2020:
  - Data source: "page images of the manuscripts archived in the Museum of Art and Culture of Loei"
  - Dataset: "Handwritten Thai Noi characters were segmented from the grayscale images based on 26 Thai Noi characters. In this process, 100 images of each character were segmented and the whole dataset contained 2,600 images" + 2 augmentation methods + 10-fold cross-validation
  - Models: Inception-v3, Inception-v4, MobileNetV1, MobileNetV2
  - Result: "MobileNetV1 outperformed other models in all experiments with an accuracy rate higher than 90%, while MobileNetV2 showed an interesting performance, which was almost equivalent to MobileNetV1 in the last experiment" [VERIFIED-PAGE — archived]
- Predecessor: Puarungroj W., Kulna P., Soontarawirat T., Boonsirisumpun N. (2019) "Recognition of Thai Noi characters in palm leaf manuscripts using convolutional neural network", A-LIEP 2019, pp. 408–415 [VERIFIED-PAGE as citation #11]

## B. Transkribus — model availability probe (read.transkribus.eu / transkribus.org)

### F4. Catalog scope
- www.transkribus.org/models landing: "Browse 426+ free AI models for text recognition, layout analysis, table detection, and field extraction. Filter by language, century, and type." Categories visible: 13 Super Models, 383 Text Models, 21 Layout Models, 9 Table & Field Models [VERIFIED-PAGE — archived]
- All models surfaced on the catalog landing page are European/Western languages (Danish, German, English+9, Dutch, French, Italian, Czech/Finnish/Swedish etc., Hebrew/Yiddish baselines). No Southeast Asian script appears on the browsable landing list [VERIFIED-PAGE]
- help.transkribus.org/public-models: "you can browse an updated list of all the public models available in Transkribus and filter your search by century, language, material and script" [SNIPPET — DDG result]

### F5. balinese_v1 — โมเดลสาธารณะเพียงชุดเดียวที่พบสำหรับสคริปต์ SEA บนใบลาน
- Model page https://www.transkribus.org/models/balinese-palm-leaf-manuscripts-16th-century :
  - Name: balinese_v1; authors Rahul Krishna (NIT Trichy), Ravi Kiran (IIIT Hyderabad); engine PyLaia; published November 26, 2022
  - Training data description field: "paparikan ramayana and gaguritan sucita datasets"
  - Metrics card: "Very low error rate 0.4% CER ... This model scored 0.4% on its validation set"; Words 1,849; Lines 1,830; Training Pages 199; Model ID 48252; Languages: Balinese; Centuries: 16th c.
  - Caveat on page: "Measured on the model's own validation data. Results on your documents may differ..." [VERIFIED-PAGE — raw HTML archived]
- ไม่พบโมเดลสาธารณะสำหรับ Tai Tham/Khom/Burmese/Khmer/Lao/Sinhala ในดัชนี site:transkribus.org/models ที่สำรวจ [NEGATIVE — Q6]
- หมายเหตุ cross-loop: Ravi Kiran Sarvadevabhatla (co-author balinese_v1) = หัวหน้ากลุ่ม IIIT-H ที่ทำ Palmira/Indiscapes palm-leaf layout parsing (F9) — คนกลุ่มเดียวกันเดินครบทั้ง layout dataset → Transkribus public model

## C. Khmer — corpus + benchmarks ที่ solid ที่สุดของ SEA บนใบลาน

### F6. SleukRith Set (HIP 2017)
- Valy D., Verleysen M., Chhun S., Burie J.-C.: "A New Khmer Palm Leaf Manuscript Dataset for Document Analysis and Recognition: SleukRith Set", 4th International Workshop on Historical Document Imaging and Processing (HIP), Nov 2017, DOI 10.1145/3151509.3151510: "a new dataset called SleukRith set comprising of 657 pages of Khmer palm leaf manuscripts randomly selected from various collections whose quality and digitization method are variable" [SNIPPET x3 — ResearchGate + SemanticScholar + ULiege record]
- Hugging Face mirror exists: SEACrowd/sleukrith_ocr — "SleukRith Set is the first dataset specifically created for Khmer palm leaf manuscripts... annotated data from 657 pages of digitized palm leaf manuscripts" [SNIPPET]
- Valy et al. (2018) follow-up: "Character and text recognition of Khmer historical palm leaf manuscripts", ICFHR 2018, pp. 13–18 [VERIFIED-PAGE as citation #7 of ICADL 2020 chapter]

### F7. SADA / PALM-SADA / KhmerFormer (Thuon, Du et al.)
- Project page ruisju111.github.io/sada/: "This project focuses on the study and analysis of ancient low-resource languages—specifically Balinese, Khmer, and Sundanese using advanced text recognition methods and benchmarking strategies"; KH-SADA uses "DenseNet with GRU-based attention mechanisms for syllable-level analysis"; PALM-SADA is "a multimodal framework ... integrates all target scripts by constructing enhanced grammar structures and utilizing multiple transformer-based models to automatically correct grammatical errors" [VERIFIED-PAGE — archived]
- Full BibTeX from project page:
  - Thuon N., Du J., Zhang J. (APSIPA ASC 2022) "Syllable analysis data augmentation for khmer ancient palm leaf recognition", pp. 1855–1862, IEEE
  - Thuon N., Du J. (APSIPA ASC 2024) "KhmerFormer: Multi-Scale CNNs-Transformer with External Attention for Ancient Khmer Palm Leaf Isolated Glyph Classification", pp. 1–6
  - THUON20258: Thuon N., Du J., Theang P., Thuon R., "Multi-low resource languages in palm leaf manuscript recognition: Syllable-based augmentation and error analysis", Pattern Recognition Letters 195:8–15, 2025, ISSN 0167-8655 [VERIFIED-PAGE — archived; matches ScienceDirect S0167865525001734 snippet "PALM-SADA, a hybrid CNN-Transformer encoder-decoder framework designed for the recognition of multi-script palm leaf manuscripts"]
- GitHub: back-kh/SADA-Ancient-Palm-Leaf-Manuscripts-Recognitions — "[PRL]" repo; "glyph dictionary and grammar-aware augmentation strategy designed to enhance Khmer palm leaf manuscript recognition" [SNIPPET]

## D. Benchmark กลางสำหรับใบลาน SEA (Khmer + Balinese + Sundanese)

### F8. Kesiman et al. 2018, MDPI J. Imaging 4(2):43
- Kesiman M.W.A., Valy D., Burie J.-C., Paulus E., Suryani M., Hadi S., Verleysen M., Chhun S., Ogier J.-M., "Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia", J. Imaging 4(2):43, published 22 Feb 2018 (received 15 Dec 2017)
- Corpus: "It contains three different scripts: Khmer script from Cambodia, and Balinese script and Sundanese script from Indonesia"
- Tasks benchmarked: binarization (Otsu/Niblack/Sauvola/Wolf/NICK/Rais + DIBCO + ICFHR2016 training-based FCN winner), binarization-free line segmentation (Arvanitopoulos & Süsstrunk seam carving vs Valy adaptive path finding), isolated glyph recognition (HoG/NPW/Kirsch/Zoning + kNN/SVM; NN+K-Means unsupervised init; vanilla CNN 48x48 input, 3 conv blocks, feature maps 8/16/32), word recognition + transliteration via OCRopy RNN-LSTM/BLSTM + CTC
- Context claims verified on page: EFEO online database http://khmermanuscripts.efeo.fr of microfilm images of hundreds of Khmer palm leaf collections; Sundanese collection Situs Kabuyutan Ciburuy (oldest ms 15th century, 27 collections); Bali ">50,000 lontar collections owned by private families" estimate; ICFHR 2016 competition on Balinese palm leaf handwriting existed [VERIFIED-PAGE — ~75% of full text read, archived]
- ข้อจำกัด: benchmark ไม่รวมสคริปต์ Tai/Tham/Burmese แม้แต่ชุดเดียว

## E. Layout parsing (Indic palm leaf) — arXiv lineage

### F9. Indiscapes / Palmira (IIIT Hyderabad)
- Prusty A., Aitha S., Trivedi A., Sarvadevabhatla R.K. (ICDAR 2019 oral, arXiv 1912.07025): "large-scale annotated Indic manuscript image datasets do not exist. To address this deficiency, we introduce Indiscapes, the first ever dataset with multi-regional layout annotations for historical Indic manuscripts" [VERIFIED-PAGE — arXiv API abstract]
- Sharan P.S., Aitha S., Kumar A., Trivedi A., Augustine A., Sarvadevabhatla R.K. (ICDAR-21, arXiv 2108.09436): "Palmira: A Deep Deformable Network for Instance Segmentation of Dense and Uneven Layouts in Handwritten Manuscripts"; "Indiscapes2 ... contains documents from four different historical collections and is 150% larger than its predecessor"; generalization tested on Arabic, South-East Asian, Hebrew mss [VERIFIED-PAGE — arXiv API abstract]
- Tensmeyer & Martinez (ICDAR 2017, arXiv 1708.03276): FCN binarization "can also be applied to different domains such as Palm Leaf Manuscripts with good performance" [VERIFIED-PAGE — arXiv API abstract]
- Related paywalled frontier items (SNIPPET only): Pattern Recognition (in press 2026) "Supervised learning for low-resource isolated glyph recognition in palm leaf manuscripts" (S0031320325012798); IEEE doc 11350246 "Improved Vision Transformer for Character Detection in Palm-Leaf Manuscripts"

## F. Burmese — สถานะ

### F10. งานเผยแพร่ระดับ conference/thesis-mirror เท่านั้น
- Sriatmaja & Nwe Nwe (AAP conference paper, Scribd mirror 884100582): "This paper presents a Myanmar palm leaf manuscript handwriting OCR system that involves preprocessing and feature extraction to recognize Myanmar handwritten characters. The system utilizes a one-dimensional segmentation approach ... A total of 18 features are extracted..." [SNIPPET]
- "Research and Development of Feature Extraction from Myanmar Palm Leaf Manuscript Images" (SciSpace PDF mirror): preprocessing to extract palm-leaf region + feature extraction for Myanmar character recognition [SNIPPET]
- DevThazin/burmese-character-recognition (GitHub): "achieving 96.85% overall accuracy across 54 character classes using a custom Deep Residual Convolutional Neural Network" — code release, not peer-reviewed venue [SNIPPET]
- ไม่พบ Burmese square script palm-leaf HTR ใน journal ชั้นนำในดัชนีที่สำรวจ; กรณีใกล้เคียง = ScienceDirect/IEEE generic palm-leaf papers ข้างบน

## G. Sinhala ola — สถานะ

### F11. ไม่พบงาน HTR peer-reviewed เฉพาะ ola leaf
- eAsia 2009 paper (ABS-387) "Sinhala OCR Digital Handwritten Palm leaf Text" — Scribd mirrors only; covers 3 case studies: multi-font digital text ANN OCR, handwritten Sinhala OCR, palm-leaf manuscript OCR [SNIPPET x2]
- ที่เหลือใน SERP เป็น commercial tools (fastocr.org, ocr.ad, handwritingtotext.online) และ preservation pages (fcha.lk, suriyakantha.org, lakpura.com) ซึ่งไม่ใช่ peer-reviewed [NEGATIVE-leaning]
- ข้อสังเกต cross-loop: lontar.liacs.nl (A16 verification) รายงาน OCR accuracy 92%/95%/97% (Old Sundanese/Old Balinese/Khmer) May 2025 — ยืนยันแล้วในลูป A16 แต่ Sinhala ไม่อยู่ในชุดนั้น

## H. DLNTM/DLLM IIIF infrastructure

### F12. IIIF CrossAsia lanna site (DLNTM portal)
- iiif.crossasia.org/s/lanna: "At present it contains images of over 5,800 manuscripts. It assembles four digital collections: PNTMP (3,914 manuscripts 159,564 images), DLNTM (1,051 manuscripts 39,547 images), DELMN (991 manuscripts 13,419 images) and HHHWC (181 manuscripts 21,222 images)." Collaborating institutions: University of Pennsylvania, Chiang Mai University, National Library of Laos, Staatsbibliothek zu Berlin; funders Henry Luce Foundation + German Federal Foreign Office. Search supports "transcription or in original script"; gallery of 1600+ David Wharton photographs [VERIFIED-PAGE — archived via jina]
- lannamanuscripts.net/en/about: "SEARCH the digital library of 6,137 manuscripts from Northern Thailand"; license "Digital images and other data ... CC BY-NC 4.0"; additional funder Andrew W. Mellon Foundation [VERIFIED-PAGE — archived]
- Manifest URL pattern (จาก search-index snippet เพราะ fetch ตรงถูก Anubis PoW block 4 attempts): `https://iiif.crossasia.org/s/lanna/manifests/{id}` — examples: manifests/559002 "Saeng mueang (แสงเมือง)" and manifests/558990 "Latana saeng pue (รตนแสงปือ)", each showing "Images and metadata are made available by Harald Hundius in collaboration with the National Library of Laos (CC BY-NC 4.0) via the Staatsbibliothek zu Berlin | CrossAsia Open in mirador Search this manifest Generate PDF" [SNIPPET — structure only, JSON NOT retrieved: BLOCKED]
- Implication for A19 gap: DLNTM มี full-text transcription layer ที่ค้นได้ ("Enter your search term into the search slot above either in transcription or in original script") แต่ยังไม่มี public HTR model หรือ annotated ground-truth dataset ที่ประกาศในดัชนีวิชาการ

## I. Crowdsourcing / citizen science สำหรับ manuscripts เอเชีย

### F13. แพลตฟอร์ม generic เท่านั้น
- FromThePage: "transforms handwritten materials into searchable text that supports accessibility, discovery, and research" [SNIPPET]; Yale-origin platform described by Harvard JDRC page: "A collaborative platform developed at Yale University that allows users to upload images of manuscript, print, and other sources and then organize projects around their transcription, translation, and/or annotation" [SNIPPET]
- Transkribus crowdsourcing product page: "Combine AI pre-transcription with volunteer correction on one crowdsourcing transcription platform" [SNIPPET]
- LOC crowd.loc.gov, Smithsonian transcription.si.edu, US National Archives Citizen Archivist Missions — generic, non-Asia [SNIPPET]
- DREAMSEA (dreamsea.co): "Digital Repository of Endangered and Affected Manuscripts in Southeast Asia (DREAMSEA) is a Programme that strives to preserve the content of manuscripts in the entire region of Southeast Asia, and to make this content fully and openly accessible online" [SNIPPET] — digitization program, ไม่ใช่ citizen transcription
- NEGATIVE: ไม่พบ active citizen-science transcription initiative สำหรับ Tai Tham/Khom/Burmese ola/Sinhala ola ที่ยืนยันได้จากแหล่งที่ fetch สำเร็จ

## J. Zenodo datasets (peripheral)
- Tirukkural Tamil palm-leaf digitization series on Zenodo (records 19846386, 20606000, 20655693, 20640368, 20523573, 20620837, 20642516, 21095527; dates Apr-Jul 2026) + "The Transmission and Interpretation of Performing Arts Traditions in Tamil Palm Leaf Manuscripts" (15851984, 2025-07-10) + "KSW: Khmer Stop Word based Dictionary for Keyword Extraction" (11363007, 2024-05-27) [VERIFIED-PAGE — raw JSON archived]

## Phase B/C candidates
1. Valy et al. HIP 2017 SleukRith Set (DOI 10.1145/3151509.3151510) — ดึง PDF เต็มจาก ResearchGate mirror ที่บันทึก URL ไว้
2. Thuon et al. PRL 195 (2025) PALM-SADA — หา open access copy; ScienceDirect ยังไม่อ่านเต็ม
3. Kesiman et al. 2018 MDPI — อ่านส่วน Results/Tables ที่ truncate (ไฟล์ archive มี ~75%; เหลือ section 5-6)
4. Puarungroj et al. ICADL 2020 LNCS 12504 — หา accepted version (Loei Rajabhat repository?)
5. Inkeaw et al. ICSIPA 2015 + Chueaphun et al. KDIR 2012 — Lanna Dharma baseline chain
6. IIIF manifest JSON 559002 — ต้อง browser-based fetch (Anubis PoW)
7. Transkribus balinese_v1 — candidate pilot: test model on DLNTM Balinese-adjacent material? (no — wrong script family); real gap = train Tai Tham equivalent using DLLM/DLNTM transcriptions
8. eAsia 2009 Sinhala OCR paper — locate canonical venue copy (UCSC?), Scribd mirror unreliable
