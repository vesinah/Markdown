# Loop A-21 — Findings: โครงการดิจิทัลคัมภีร์ใบลาน + OCR/HTR สำหรับ manuscripts

Date: 2026-08-30 | Raw data only. Quotes are verbatim from extracted text layers.

---

## S-250
- **Source ID:** S-250
- **Language:** English (ภาษาวัตถุ: Old Nepali / Devanagari script)
- **ประเภท:** conference paper (ACL 2026 long) — fulltext
- **Bibliography:** Sarawgi, A., Garces Arias, E., Zotter, C. "Digitizing Nepal's Written Heritage: A Comprehensive HTR Pipeline for Old Nepali Manuscripts." *Proceedings of the 64th Annual Meeting of the ACL (Vol. 1: Long Papers)*, pp. 14720-14746, July 2026.
- **DOI/ISBN:** 10.18653/v1/2026.acl-long.671
- **URL:** https://aclanthology.org/2026.acl-long.671.pdf
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A21/documents/2026.acl-long.671.pdf (+ _extracted.txt)
- **PDF health:** PASS (27 pages, avg 2069 chars/page, 0 empty)
- **Quotes verbatim:**
  1. (p. 14720, Abstract) "This paper presents the first end-to-end pipeline for Handwritten Text Recognition (HTR) for Old Nepali, a historically significant but low-resource language. We adopt a line-level transcription approach and systematically explore encoder-decoder architectures and data-centric techniques to improve recognition accuracy. Our best model achieves a Character Error Rate (CER) of 4.9%."
  2. (p. 14721) "The majority of the manuscripts analyzed in this study originate from the collection of the Nepal German Manuscript Preservation Project (NGMPP). The NGMPP undertook extensive microfilming of manuscripts and related documentary materials from a range of Nepalese repositories, including the National Archives in Kathmandu, as well as private collections. The selected examples date to the late eighteenth and nineteenth centuries, with many consisting of royal edicts bearing the red seal of the Shah kings."
  3. (p. 14721-14722) "The transcribed dataset used in this study consists of 155 manuscript images. The manuscripts are written in Devanagari, and an average page contains 1,198 characters across 20 lines. The lines are relatively long, averaging 60 characters. The average dimensions of the manuscript images are 3091 × 3487 pixels at 328 dpi" + "From a total of 155 manuscripts, we extracted 3,100 lines."
  4. (p. 14722) "We generate 105,000 images and simulate script" (synthetic Devanagari stage) + "dataset sourced from heiDATA (Merkel-Hilf, 2022)" → "5,139 line images"
  5. (p. 14727) "binarization slightly worsening performance by 1% CER (see Appendix B for details). Thus, we decided to use non-binarized images for training." + "performance degrades on lines exceeding 120 characters, likely due to insufficient long-sequence examples in our training data."
  6. (p. 14727, Conclusion) "The experimental results suggest that data-centric improvements—particularly augmentation and label normalization—can contribute more to performance gains than architectural variations in this context" + code/model release: "https://github.com/anjalisarawgi/nepOCR/"
- **ประเด็นที่ map:** HTR Old Nepali จาก NGMPP microfilm; 3-stage training (synthetic Devanagari → printed heiDATA → real MS); CER 4.9%; evaluation set confidential จาก copyright; scriptio continua → ไม่มี word boundaries; คำ: Pracalit Lipi, Nepal Bhasha,Documenta Nepalica (nepalica.hadw-bw.de/nepal)

---

## S-251
- **Source ID:** S-251
- **Language:** English (ภาษาวัตถุ: Malayalam/Grandha/Tigalari/Vatteluttu scripts)
- **ประเภท:** data descriptor journal article (Scientific Data) — fulltext HTML (PDF = image shell)
- **Bibliography:** Sivan, R., Pati, P.B. "A benchmark dataset for text line segmentation in palm leaf documents" [LeafOCR-Line]. *Scientific Data* (2026).
- **DOI/ISBN:** 10.1038/s41597-026-06718-1
- **URL:** https://www.nature.com/articles/s41597-026-06718-1
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A21/documents/www_nature_com_articles_s41597_026_06718_1.txt (HTML text); s41597-026-06718-1.pdf (viewer shell เท่านั้น)
- **PDF health:** LOW-TEXT (PDF 1 หน้า avg 19 chars = viewer shell; ใช้ HTML text แทน — PASS ระดับ HTML 57KB)
- **Quotes verbatim (จาก HTML):**
  1. (Abstract) "Palm leaf manuscript is one of the oldest writing media used in South and Southeast Asia. Its use spanned from the medieval era into the nineteenth century, resulting in millions of manuscripts."
  2. (Abstract) "To address this gap, we introduce LeafOCR-Line, a dataset for palm leaf text line segmentation, consisting of 1710 text line masked manuscripts with corresponding deterioration levels for each manuscript."
  3. (Introduction) "Kerala in India, such as the Oriental Research Institute at the University of Kerala, various monastic institutions, and numerous private collections, collectively house tens of thousands of Malayalam manuscripts."
  4. (Scripts) "Tigalari, regarded as Malayalam's sister script and used for Tulu, is also derived from Grantha. Both Tigalari and Grantha were extensively used for writing Sanskrit."
  5. (Dataset) "annotations for document quality levels, which enhances its suitability for deep learning applications and for evaluating performance under realistic medium-to-severe deterioration conditions commonly observed in palm leaf manuscripts."
- **ประเด็นที่ map:** dataset แรกที่มี deterioration levels ผูกกับ ground truth; line-level > char-level สำหรับใบลาน; ORI Univ. of Kerala = แหล่งจริง; "millions of manuscripts" = ตัวเลข scale; คำ: Vatteluttu, Tigalari, Grantha

---

## S-252
- **Source ID:** S-252
- **Language:** English (ภาษาวัตถุ: Tibetan — drutsa/'bru tsha cursive)
- **ประเภท:** journal article (Revue d'Etudes Tibétaines no. 72, pp. 43-51) — fulltext
- **Bibliography:** Griffiths, R.M. "Handwritten Text Recognition (HTR) for Tibetan Manuscripts in Cursive Script." *REt* 72 (July 2024). ERC TibSchol project (grant No. 101001002), Austrian Academy of Sciences.
- **DOI/ISBN:** 10.1553/tibschol_erc_htr
- **URL:** https://doi.org/10.1553/tibschol_erc_htr | PDF: https://epub.oeaw.ac.at/0xc1aa5572%200x003f63e4.pdf
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A21/documents/0xc1aa5572%200x003f63e4.pdf (+ _extracted.txt)
- **PDF health:** PASS (10 pages, avg 1616 chars/page, 0 empty)
- **Quotes verbatim:**
  1. (p. 43, Abstract) "Up to now, HTR models for Tibetan manuscripts in cursive script have not been available. This paper introduces work carried out as part of the The Dawn of Tibetan Buddhist Scholasticism (11th-13th) TibSchol) project at the Austrian Academy of Sciences, which is utilising the Transkribus platform"
  2. (p. 44) "Focus now is being applied to extending this to other scripts–including Devanagari (Merkel-Hilf 2022), Hebrew (Digitizing Jewish Studies (DiJeSt) 2020), and Pracalit script (O'Neill & Hill 2022)" + "Notable OCR implementations for Tibetan include Namsel OCR and Google Drive/Google Docs. Additionally, projects and organisations such as the Buddhist Digital Research Centre (BDRC, https://www.bdrc.io) and Esukhia (https://github.com/Esukhia/)"
  3. (p. 44-45) "As a guideline for creating an HTR model, Transkribus recommends preparing 5,000-15,000 words (25–75 pages) of transcribed material." + "A CER under 10% is considered efficient for automatic transcription, however, to maximise the usability of transcribed texts... we are aiming for a CER of 5% or lower."
  4. (p. 45) "We selected five manuscripts (totalling approximately 300 folios and 2500 lines) in drutsa script for training"
  5. (p. 48-49) "In October 2022, our HTR model was trained on 269 folios (2310 lines), with validation performed on 27 folios. Using 250 epochs, the trained model had a CER of 1.15% for the Training Set and a 2.33% for the Validation Set." + HTR+ engine deactivated Nov 2022 → PyLaia retrain "a CER of 10.20% for the Training Set and 8.80% for the Validation Set" → dewarping แก้ → "Our most recent model was trained with a CER of 2.2% on the Training Set and 1.40% on the Validation Set."
  6. (p. 50) "Currently, when tested, the drutsa model has a higher CER (>10%) when applied to other scripts. However, used as a base model, it will require significantly fewer pages to train models for other scripts. We estimate around 30 to 50 folios of new ground truth, as opposed to the 300 folios required for the base model."
- **ประเด็นที่ map:** Transkribus workflow จริง (baseline model → HTR+ → PyLaia+dewarp); transfer ข้าม script 300 folios → 30-50 folios; ground truth จะเปิด public; อ้าง O'Neill & Hill 2022 Pracalit HTR = ตัวต่อยอด Nepal; คำ: dbu can (uchen), dbu med (ume), 'bru tsha (drutsa), shad །, bKa' gdams gsung 'bum

---

## S-253
- **Source ID:** S-253
- **Language:** English (ภาษาวัตถุ: Tibetan)
- **ประเภท:** journal article (Electronics, MDPI) — fulltext HTML
- **Bibliography:** Zhang, C., Wang, W., Zhang, G. "Construction of a Character Dataset for Historical Uchen Tibetan Documents under Low-Resource Conditions." *Electronics* 11(23):3919 (2022). Northwest Minzu University, Lanzhou.
- **DOI/ISBN:** 10.3390/electronics11233919
- **URL:** https://www.mdpi.com/2079-9292/11/23/3919
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A21/documents/www_mdpi_com_2079_9292_11_23_3919.txt
- **PDF health:** PASS (HTML text 83KB — Puppeteer ผ่าน Cloudflare)
- **Quotes verbatim:**
  1. (Abstract) "The construction of a character dataset is carried out as follows: (1) text annotation of segmented characters is performed; (2) the character image is extracted from the character block based on the real position information; (3) according to the class of annotated text, the extracted character images are classified to construct a preliminary character dataset; (4) data augmentation is used to solve the imbalance of classes and samples in the preliminary dataset"
  2. (1. Introduction) "Tibetan is a low-resource language, which makes it difficult to obtain a large amount of document data, and historical Tibetan documents are more difficult to obtain, resulting in the late start of relevant research."
  3. (1. Introduction) "Since 1991, Kojima et al. have studied the analysis and recognition research on woodcut Tibetan documents... However, these works did not involve the construction of character datasets."
  4. (4.4 Limitation) "Although this work constructs 610 classes of historical Uchen Tibetan document character datasets, which solves the problem of imbalance between the number of classes and the number of samples to a certain extent"
  5. (Keywords) "historical Tibetan documents; character annotation; character extraction; data augmentation; character recognition"
- **ประเด็นที่ map:** 610 character classes = ขนาดจริงของ Uchen alphabet set; pipeline: binarization→segmentation→annotation→augmentation; research group Northwest Minzu (Ministry of Education key lab) = ศูนย์ ZH ด้านนี้; คำ ZH เทียบเคียงจาก affiliation: 西北民族大学 (Northwest Minzu Univ.), 中国民族语言信息技术 (China's Ethnic Languages and Information Technology)

---

## S-254 (metadata only)
- **Source ID:** S-254
- **Language:** English (ภาษาวัตถุ: Tamil)
- **ประเภท:** data descriptor (Data in Brief) — metadata เท่านั้น
- **Bibliography:** Jailingeswari, I., Gopinathan, S. "Tamil handwritten palm leaf manuscript dataset (THPLMD)." *Data in Brief* (2024). [มี preprint SSRN 10.2139/ssrn.4504342 (2023)]
- **DOI/ISBN:** 10.1016/j.dib.2024.110100
- **URL:** https://doi.org/10.1016/j.dib.2024.110100
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A21/documents/metadata_10_1016_j_dib_2024_110100.json
- **PDF health:** N/A (Elsevier — ไม่ได้ fulltext)
- **ประเด็นที่ map:** dataset ไทม์ไลน์ Tamil palm-leaf HTR (preprint 2023 → Data in Brief 2024) คู่กับ HMPLMD (Malayalam, 10.1016/j.dib.2023.108960) และ Balaji & Lalitha ICISS 2026 (Real-ESRGAN + Deformable ViT) = สาย Tamil กำลังเร่ง

---

## S-255 (metadata only)
- **Source ID:** S-255
- **Language:** English
- **ประเภท:** journal article (Journal of Open Humanities Data) — metadata เท่านั้น (DNS/CDN ล่มทุก mirror)
- **Bibliography:** Meelen, M., Griffiths, R.M. "Collaborative Workflows for Handwritten Text Recognition in Under-Resourced Manuscript Collections." *Journal of Open Humanities Data* 11 (2025).
- **DOI/ISBN:** 10.5334/johd.388
- **URL:** https://doi.org/10.5334/johd.388
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A21/documents/metadata_10_5334_johd_388.json
- **PDF health:** N/A (host ล่ม: johd.lib.uchicago.edu / johd.llc.mv-cc.com / johd.erudit.org — ERR_NAME_NOT_RESOLVED)
- **ประเด็นที่ map:** คู่แหล่งของ Griffiths TibSchol (same team) — workflow collaborative annotation; ต่อยอดภายหลังเมื่อ johd กลับมา

---

## ยังไม่พบ (A-21)
- fulltext ของ Mehta & Challa 2017 "Facilitating enhanced user access through Palm-leaf manuscript digitization" (IEEE 10.1109/icecct.2017.8117838) — paywall
- Guruprasad & Rao 2021 "Recognition of Handwritten Nandinagari Palm Leaf Manuscript Text" (Springer 10.1007/978-3-030-67921-7_9) — paywall
- iiit-indic-hw-words (10.1007/978-3-030-86337-1_30) — paywall
- O'Neill & Hill 2022 (Pracalit script HTR) — พบเฉพาะการอ้างใน Griffiths 2024; ยังไม่หา source แยกได้
- Merkel-Hilf 2022 "Ground Truth data for printed Devanagari" (heiDATA) — พบชื่อ dataset จาก ACL refs; ยังไม่ดึง metadata จาก heiDATA
- IIIF + Indic manuscripts โดยตรง — Crossref ไม่เจองานตรง (มีแต่ Leonardo codices 2022)
