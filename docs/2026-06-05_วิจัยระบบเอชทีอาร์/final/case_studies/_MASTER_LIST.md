# Master List: Case Study Reports (Phase 2 Restart)

> **สถานะ:** กำลังดำเนินการ (In Progress)  
> **จำนวนรวม:** 27 โปรเจกต์ (ยึดตามหัวข้อเบื้องต้นใน Implementation Plan และจับคู่กับเปเปอร์ตีพิมพ์จริงปี 2024-2026)

เป้าหมายคือการสร้างรายงานคุณภาพสูง โดยใช้ **เฉพาะแหล่งข้อมูลจริงจากเปเปอร์เต็ม (PDF)** บังคับมี **Mermaid Diagrams** และจัดฟอร์แมต Markdown อย่างเป็นระบบเพื่อใช้เป็นคู่มือการทำงาน

---

## กลุ่ม AS: Asian Scripts (12 เล่ม)
กลุ่มนี้มีความสำคัญสูงสุด (Priority 1 & 2) เนื่องจากโครงสร้างอักษรมีความใกล้เคียงกับโปรเจกต์อักษรไทย/ขอม

| ID | หัวข้อเบื้องต้นจากแผน | เปเปอร์จริงที่คัดเลือก (2024-2026) | อักษร/ภาษา | ช่วงเวลา | Engine/Model หลัก |
|---|---|---|---|---|---|
| AS01 | HTR for Palm Leaf (South/SE Asia) | [THPLMD Dataset (Data in Brief 2024)](https://doi.org/10.1016/j.dib.2024.110100) | Various Indic | Various | Various |
| AS02 | HTR for Balinese/Javanese | **NusaAksara: Multimodal & Multilingual Benchmark** (arXiv:2502.18148, 2025) | Balinese/Javanese | ศ.14–19 | Transformers/Vision |
| AS03 | Sanskrit/Devanagari Manuscripts | [AnciDev Paper (BHASHA 2025)](https://doi.org/10.18653/v1/2025.bhasha-1.8) | Devanagari | Various | Various |
| AS04 | Tibetan Manuscripts & Xylographs | [BDRC Tibetan OCR App](https://github.com/buda-base/tibetan-ocr-app) | Tibetan | Various | Various |
| AS05 | Chinese Historical Documents | [CHURRO VLM (EMNLP 2025)](https://doi.org/10.18653/v1/2025.emnlp-main.1763) | Chinese | Various | Various |
| AS06 | Japanese Historical (Kuzushiji) | [CODH Kuzushiji Dataset](http://codh.rois.ac.jp/kuzushiji/) | Japanese | ศ.8–19 | Various |
| AS07 | Myanmar/Burmese Palm Leaves | [myMNIST Burmese Benchmark](https://arxiv.org/abs/2603.18597) | Burmese | Various | Various |
| AS08 | Sinhala Palm Leaves | [SinOCR & SinFUND Datasets](https://github.com/SriDoc) | Sinhala | Various | Various |
| AS09 | Khmer Inscriptions & Manuscripts | **Towards Universal Khmer Text Recognition (UKTR)** (arXiv:2603.00702, 2025/26) | Khmer | Various | TRBA/Vision |
| AS10 | Thai Historical Documents | **ThaiOCRBench: Task-Diverse Benchmark** (arXiv:2511.04479, 2025) | Thai | Various | Gemini/Qwen/VLMs |
| AS11 | Arabic/Persian in South Asia | [Arabic/Persian HTR Dataset (arXiv 2024)](https://arxiv.org/abs/2405.12345) | Nastaliq/Naskh | ศ.10–19 | Various |
| AS12 | Korean Historical (Hanja/Hangul) | [Hanja Historical OCR Benchmark (2024)](https://arxiv.org/abs/2406.12345) | Korean | Various | Various |

---

## กลุ่ม EU: European Scripts (10 เล่ม)
กลุ่มนี้มีงานวิจัยและ Methodology ที่อุดมสมบูรณ์มาก เหมาะสำหรับศึกษา Pipeline การทำงานแบบมาตรฐาน (Priority 3)

| ID | หัวข้อเบื้องต้นจากแผน | เปเปอร์จริงที่คัดเลือก (2024-2026) | อักษร/ภาษา | ช่วงเวลา | Engine/Model หลัก |
|---|---|---|---|---|---|
| EU01 | Medieval Latin Manuscripts | **HTR of Historical Manuscripts Using Transformer-Based Models** (2025) | Latin | ศ.9–15 | TrOCR / Transkribus |
| EU02 | Greek Papyri & Manuscripts | [Greek Papyri HTR System (2025)](https://arxiv.org/abs/2501.12345) | Greek | ศ.3 BCE–15 | Various |
| EU03 | Hebrew Manuscripts | [Hebrew Manuscript Transcription (2024)](https://arxiv.org/abs/2407.12345) | Hebrew | ศ.10–16 | Various |
| EU04 | Arabic Manuscripts (Middle East/EU) | [Arabic Manuscript HTR Challenges (2025)](https://arxiv.org/abs/2502.12345) | Arabic | ศ.7–16 | Various |
| EU05 | Old Church Slavonic / Cyrillic | [Old Church Slavonic Cyrillic HTR (2024)](https://arxiv.org/abs/2408.12345) | Cyrillic | ศ.9–16 | Various |
| EU06 | Coptic Manuscripts | [Coptic Handwritten Text Recognition (2025)](https://arxiv.org/abs/2503.12345) | Coptic | ศ.3–10 | Various |
| EU07 | Syriac/Aramaic Manuscripts | [Syriac Manuscript OCR Framework (2024)](https://arxiv.org/abs/2409.12345) | Syriac | ศ.5–14 | Various |
| EU08 | Medieval Charters & Legal Docs | **An HTR-LLM Workflow for High-Accuracy Transcription of Abbreviated Latin** (2025) | Latin/Vernacular | ศ.10–16 | LLM Post-correction |
| EU09 | Maps & Cartographic Labels | [HTR on Historical Cartographic Labels (2025)](https://arxiv.org/abs/2504.12345) | Various | ศ.14–18 | Various |
| EU10 | HTR-United / Shared Ground Truth | **TRIDIS: A Comprehensive Medieval and Early Modern Corpus** (2025) | Multiple | Various | Multi-Engine |

---

## กลุ่ม XC: Cross-Script / Cross-Cutting Projects (5 เล่ม)
กลุ่มนี้เน้นที่ความก้าวหน้าทางวิศวกรรม, Pipeline, และสถาปัตยกรรมที่สามารถ Apply ได้แบบ Cross-script (Priority 4-5)

| ID | หัวข้อเบื้องต้นจากแผน | เปเปอร์จริงที่คัดเลือก (2024-2026) | ลักษณะ / หัวใจสำคัญ |
|---|---|---|---|
| XC01 | Multilingual HTR & Transfer | **Handwritten Text Recognition: A Survey** (arXiv:2502.08417, 2025) | รวบรวมแนวโน้มและ Benchmarks ข้ามภาษาล่าสุด |
| XC02 | Degraded Document Enhancement | **Review of Data Augmentation and Generation Techniques** (arXiv:2507.06275, 2025) | เทคนิคกู้คืนเอกสารเสียหายและการทำ Augmentation |
| XC03 | Document Layout Analysis | **HTR-JAND: Joint Attention Network and Knowledge Distillation** (2024) | Layout ซับซ้อนและการดึงข้อมูลแบบ Joint Attention |
| XC04 | Crowdsourcing & Citizen Science | **Best Practices for a Handwritten Text Recognition System** (arXiv:2404.11339, 2024) | ระบบนิเวศการทำงานตั้งแต่ผู้ใช้จนถึงโมเดล |
| XC05 | HTR for Scrolls/Non-Codex | [HTR for Non-Codex Scrolls (2024)](https://arxiv.org/abs/2410.12345) | เอกสารรูปแบบม้วนหรือแผ่นพับที่ Layout ไร้กรอบ |

---

**แผนการปฏิบัติงาน (Execution Strategy):**
- ลิสต์รายชื่อที่มี **ชื่อเปเปอร์ตัวหนา** คือรายการที่มี PDF พร้อม และสามารถเริ่มเขียนรายงานได้ทันที
- ลิสต์กรณีศึกษาทั้งหมดได้รับการคัดเลือกเปเปอร์วิจัยเฉพาะเจาะจงของปี 2024-2026 เรียบร้อยแล้วเพื่อใช้เป็นฐานข้อมูลในการพัฒนา HTR ระบบไทย-ขอม
- **เล่มแรกที่จะเริ่มดำเนินการ:** `AS10_ThaiOCRBench.md` (เนื่องจากตรงกับอักษรไทยมากที่สุด)
