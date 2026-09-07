# Findings — Loop C01: final gap-fill (B01 leftovers)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C01 | **Date:** 2026-08-26
สถานะเดิมคงอยู่: VERIFIED-PAGE = อ่านเต็ม + เก็บดิบใน documents\; PREVIEW = เห็นบางส่วนจากหน้า paywall

## A. Pengkasit 1999 thesis (B01 gap #2) — PARTIALLY RESOLVED, body still locked

### F1. Extraction verdict on the local PDF
- `pengkasit_1999_hotrai_lanna_sure_fulltext.pdf` (17.98 MB, **684 pages**): pypdf extraction = **no text layer whatsoever** (scanned images). PyMuPDF available but same input; tesseract/pytesseract NOT installed on this machine; r.jina.ai returned empty for the bitstream URL. Raw extraction log archived: documents\pengkasit_1999_fulltext_extracted.txt
- The abstract PDF is likewise image-only.
- **Implication:** the 62-case inventory (temple-by-temple list) cannot be harvested without setting up Thai OCR (e.g., install tesseract + tha.traineddata) or manual reading of page images.

### F2. SURE handle metadata + full bilingual abstract [VERIFIED-PAGE — documents\sure_handle_2736_metadata_abstract.md]
- Study aim: รูปแบบหอไตรที่สร้างขึ้นในล้านนา "ช่วงเวลาพ.ศ. 2350-2496"; selected sample "**จำนวนทั้งสิ้น 62 หลัง**" chosen by construction age or art-historical comparison ("การเทียบเคียงจากศิลปกรรมที่สามารถคาดคะเนอายุได้").
- Analytical frame: political/economic/social factors influencing form + influence of outside craftsman schools ("การรับอิทธิพลศิลปกรรมจากสกุลช่างอื่น").
- Typology (Thai original, now verified verbatim from SURE page):
  1. หอไตรชั้นเดียว — 1.1 ยกใต้ถุนสูงแบบเครื่องไม้ / 1.2 แบบเครื่องก่อ
  2. หอไตร 2 ชั้น — 2.1 แบบหอสูง ชั้นล่างเครื่องก่อ ชั้นบนเครื่องไม้ / 2.2 แบบอาคารโถงหรือวิหารโถง ชั้นล่างเปิดโล่ง ชั้นบนเป็นห้องเก็บคัมภีร์ใบลาน
  3. หอไตรรูปแบบพิเศษ — จัดกลุ่มไม่ได้ หลากหลายตามฝีมือช่าง/เทคนิคตกแต่ง เช่น ทรงมณฑป, คล้ายวิหารหรืออุโบสถ, รูปแบบจีน
- English abstract confirms: "Primary data collection of this thesis was collected from 62 case studies... built during 2350-2496 B.E."
- NOTE: counts per sub-type are in the body only — ยังไม่พบข้อมูลยืนยัน (needs OCR).

## B. Lagirarde 2014 "Les ho tham du Lanna" (B01 gap #1) — abstract-level enriched; BODY STILL INACCESSIBLE

### F3. JSTOR preview page [PREVIEW-PAGE — documents\lagirarde_2014_jstor_preview_persee_figures.md]
- Full trilingual abstracts captured. New French sentence: "Si les plus beaux specimens sont devenus de celebres attractions touristiques, ce succes n'a pas pour autant attire toute l'attention academique qu'ils meritent." New English closing: "All remained faithful to the aesthetics of the religious buildings of Lanna and other Tai kingdoms of the region."
- Bibliographic precision: Vol. 69 (2014), pp. 35–50 (16 pages), published by EFEO.

### F4. Persée doc page via jina proxy [VERIFIED render — same archive file]
- Article section plan recovered: Introduction / Histoire / Architecture / Fonction, collections et situation présente / Conclusion / Bibliographie.
- Figure captions (new citable facts):
  - Fig. 1 Wat Phra That Hariphunchai, Lamphun (photo P. Pichard)
  - Fig. 2 **Wat Ratanaram, Mae Rim (Chiang Mai)**: library at monastery centre matching its architectural style; "Elle est privée d'escalier et uniquement accessible par une échelle escamotable" (= no stairs, folding-ladder access only — corroborates B01 F3 ladder-access hallmark from an academic source)
  - Fig. 3 **Wat Luang Sung Men, Sung Men (Phrae)**: "L'une des plus importantes collection de manuscrits y est conservée" (= one of the most important manuscript collections; matches DLNTM Wat Sung Men >1,700 mss figure)
  - Fig. 4 Wat Sisaket, Vientiane (photo P. Pichard)
- Access attempts failed: Persée docAsPDF HTTP 403 altcha; HAL halshs-02542142 = "No file" (metadata only); building-by-building analysis remains unreadable → ยังไม่พบข้อมูลยืนยันสำหรับเนื้อหารายหลัง

## C. Khom-script foliation norms + palm-vs-khoi proportions (B01 gaps #3, #4)

### F5. LOC Siamese manuscripts guide [VERIFIED-PAGE full read — documents\loc_siamese_manuscripts_guide.md]
- Khom usage norm (central Thailand): "Thai Khǭm script was borrowed from Cambodia and used to write Buddhist texts"; also used for astrological and yantra texts because "this script was viewed as ancient and so it was an appropriate vehicle for material that was spiritually potent."
- Dating convention via script style: thick-lettered ornamental Khom = typical of 18th c.; thin-lettered Khom = "firmly in the nineteenth century or later" (citing Ginsburg, *Thai Manuscript Painting*, 1989, p. 11).
- Material split central Thailand (qualitative): "nearly all these manuscripts are folding or concertina style manuscripts with paper made from the inner bark of the khoi (*Streblus asper*) bush... Siamese palm leaf manuscripts were usually reserved for Buddhist texts often in Pali"; folding samut khoi used for "government records to literature to astrology and medical texts".
- Central-Thai PALM LEAF line counts (LOC item records): Phrakangkhā Witrani 57 x 5 cm, palm leaf, 5 lines, Pāli in Thai Khǭm; Phra Milinthapanhā 517 ff./17 vol., 53 x 4 cm, palm leaf, 5 lines — i.e., central-Thai bai lan at 5 lines/side parallels the northern-Thai five-line norm already documented in B01 F6.
- Key bibliography surfaced: Kannikā Wimonkasēm, *Tamrā rian ʻaksǒn Thai bōrān: ʻaksǒn Khōm Thai, ʻaksǒn tham Lānnā, ʻaksǒn tham ʻĪsān* (Silpakorn, 2009); Igunma, "Aksoon Khoom", *Tai Culture* 23(4); Huang 2006 ANAGPIC technical study.
- **Khom-script foliation/numbering conventions specifically: ยังไม่พบข้อมูลยืนยัน** — no fetched source states how central-Thai Khom bai lan leaves were numbered (if at all). All numbering evidence remains Lanna/Lao (Nai Tham/Hora numerals, alphabetic pagination) from Jaengsawang 2024 (B01 F7).

### F6. Lan Na palm-leaf dominance — quantitative statement upgraded to VERIFIED [documents\buddhistdoor_2016_dlntm_fulltext.md]
- Buddhistdoor Global (BD Dipananda, 8 Apr 2016), full text read: "The DLNTM project... brings together images of close to 5,000 manuscripts, **most of which are written on palm leaf** and have been stored in the libraries of Buddhist monasteries and in private collections." McDaniel: "a massive corpus going back from 1410 to the 1950s when print became more popular."
- Corpus sub-counts (2016 snapshot): PNTMP 120,625 images / 2,768 mss (1987–91); DELMN 13,413 images / 992 mss (1971–74); DLNTM direct 15,212 images / 334 mss (8 temples); HHHWC 21,222 images / 181 mss. Wat Sung Men (Phrae) >1,700 mss microfilmed; earliest dated ms = Timsati-nipāta copied 1471.
- Still NOT a strict percentage ratio: a precise palm-leaf : samut-khoi ratio for Lan Na (Tai Yuan context) — ยังไม่พบข้อมูลยืนยัน (McDaniel 2017 MUSE article remained unreachable: DDG CAPTCHA, Bing noise, CORE/Mojeek 403).

## Gaps remaining after C01
1. Pengkasit 1999 body (684 pp scanned) — needs local OCR setup (install tesseract + tha traineddata) or manual reading to harvest the 62-case inventory and per-type counts.
2. Lagirarde 2014 article body — Persée image-only/403 altcha; HAL has no file; JSTOR paywalled. Only abstract + figures + section plan secured.
3. Khom-script foliation norms — no source found stating central-Thai numbering practice; candidate lead = Kannikā Wimonkasēm 2009 (print, not online).
4. Exact quantitative palm:khoi ratio for Lan Na — closest verified = qualitative "most of which are written on palm leaf" over ~5,000 DLNTM mss (Buddhistdoor 2016).
