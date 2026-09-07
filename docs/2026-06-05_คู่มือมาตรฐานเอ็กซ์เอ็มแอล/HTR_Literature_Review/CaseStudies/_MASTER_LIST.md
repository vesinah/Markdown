# Master List: Case Study Reports (Phase 2 Restart)

> **สถานะ:** กำลังดำเนินการ (In Progress)  
> **จำนวนรวม:** 27 โปรเจกต์ (ยึดตามหัวข้อเบื้องต้นใน Implementation Plan และจับคู่กับเปเปอร์ตีพิมพ์จริงปี 2024-2026)

เป้าหมายคือการสร้างรายงานคุณภาพสูง โดยใช้ **เฉพาะแหล่งข้อมูลจริงจากเปเปอร์เต็ม (PDF)** บังคับมี **Mermaid Diagrams** และจัดฟอร์แมต Markdown อย่างเป็นระบบเพื่อใช้เป็นคู่มือการทำงาน

---

## กลุ่ม AS: Asian Scripts (12 เล่ม)
กลุ่มนี้มีความสำคัญสูงสุด (Priority 1 & 2) เนื่องจากโครงสร้างอักษรมีความใกล้เคียงกับโปรเจกต์อักษรไทย/ขอม

| ID | หัวข้อเบื้องต้นจากแผน | เปเปอร์จริงที่คัดเลือก (2024-2026) | อักษร/ภาษา | ช่วงเวลา | Engine/Model หลัก |
|---|---|---|---|---|---|
| AS01 | HTR for Palm Leaf (South/SE Asia) | *[รอคัดเลือกเปเปอร์เจาะจง]* | Various Indic | Various | Various |
| AS02 | HTR for Balinese/Javanese | **NusaAksara: Multimodal & Multilingual Benchmark** (arXiv:2502.18148, 2025) | Balinese/Javanese | ศ.14–19 | Transformers/Vision |
| AS03 | Sanskrit/Devanagari Manuscripts | *[รอคัดเลือกเปเปอร์เจาะจง]* | Devanagari | Various | Various |
| AS04 | Tibetan Manuscripts & Xylographs | *[รอคัดเลือกเปเปอร์เจาะจง]* | Tibetan | Various | Various |
| AS05 | Chinese Historical Documents | *[รอคัดเลือกเปเปอร์เจาะจง]* | Chinese | Various | Various |
| AS06 | Japanese Historical (Kuzushiji) | *[รอคัดเลือกเปเปอร์เจาะจง]* | Japanese | ศ.8–19 | Various |
| AS07 | Myanmar/Burmese Palm Leaves | *[รอคัดเลือกเปเปอร์เจาะจง]* | Burmese | Various | Various |
| AS08 | Sinhala Palm Leaves | *[รอคัดเลือกเปเปอร์เจาะจง]* | Sinhala | Various | Various |
| AS09 | Khmer Inscriptions & Manuscripts | **Towards Universal Khmer Text Recognition (UKTR)** (arXiv:2603.00702, 2025/26) | Khmer | Various | TRBA/Vision |
| AS10 | Thai Historical Documents | **ThaiOCRBench: Task-Diverse Benchmark** (arXiv:2511.04479, 2025) | Thai | Various | Gemini/Qwen/VLMs |
| AS11 | Arabic/Persian in South Asia | *[รอคัดเลือกเปเปอร์เจาะจง]* | Nastaliq/Naskh | ศ.10–19 | Various |
| AS12 | Korean Historical (Hanja/Hangul) | *[รอคัดเลือกเปเปอร์เจาะจง]* | Korean | Various | Various |

---

## กลุ่ม EU: European Scripts (10 เล่ม)
กลุ่มนี้มีงานวิจัยและ Methodology ที่อุดมสมบูรณ์มาก เหมาะสำหรับศึกษา Pipeline การทำงานแบบมาตรฐาน (Priority 3)

| ID | หัวข้อเบื้องต้นจากแผน | เปเปอร์จริงที่คัดเลือก (2024-2026) | อักษร/ภาษา | ช่วงเวลา | Engine/Model หลัก |
|---|---|---|---|---|---|
| EU01 | Medieval Latin Manuscripts | **HTR of Historical Manuscripts Using Transformer-Based Models** (2025) | Latin | ศ.9–15 | TrOCR / Transkribus |
| EU02 | Greek Papyri & Manuscripts | *[รอคัดเลือกเปเปอร์เจาะจง]* | Greek | ศ.3 BCE–15 | Various |
| EU03 | Hebrew Manuscripts | *[รอคัดเลือกเปเปอร์เจาะจง]* | Hebrew | ศ.10–16 | Various |
| EU04 | Arabic Manuscripts (Middle East/EU) | *[รอคัดเลือกเปเปอร์เจาะจง]* | Arabic | ศ.7–16 | Various |
| EU05 | Old Church Slavonic / Cyrillic | *[รอคัดเลือกเปเปอร์เจาะจง]* | Cyrillic | ศ.9–16 | Various |
| EU06 | Coptic Manuscripts | *[รอคัดเลือกเปเปอร์เจาะจง]* | Coptic | ศ.3–10 | Various |
| EU07 | Syriac/Aramaic Manuscripts | *[รอคัดเลือกเปเปอร์เจาะจง]* | Syriac | ศ.5–14 | Various |
| EU08 | Medieval Charters & Legal Docs | **An HTR-LLM Workflow for High-Accuracy Transcription of Abbreviated Latin** (2025) | Latin/Vernacular | ศ.10–16 | LLM Post-correction |
| EU09 | Maps & Cartographic Labels | *[รอคัดเลือกเปเปอร์เจาะจง]* | Various | ศ.14–18 | Various |
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
| XC05 | HTR for Scrolls/Non-Codex | *[รอคัดเลือกเปเปอร์เจาะจง]* | เอกสารรูปแบบม้วนหรือแผ่นพับที่ Layout ไร้กรอบ |

---

**แผนการปฏิบัติงาน (Execution Strategy):**
- ลิสต์รายชื่อที่มี **ชื่อเปเปอร์ตัวหนา** คือรายการที่มี PDF พร้อม และสามารถเริ่มเขียนรายงานได้ทันที
- ลิสต์ที่เป็น *[รอคัดเลือกเปเปอร์เจาะจง]* จะทำการสืบค้นผ่าน `search_arxiv` ก่อนที่จะดำเนินการเขียนในหมวดหมู่นั้นๆ เพื่อให้ได้เปเปอร์ที่ตรงกับหัวข้อที่สุดและใหม่ล่าสุด (2024-2026)
- **เล่มแรกที่จะเริ่มดำเนินการ:** `AS10_ThaiOCRBench.md` (เนื่องจากตรงกับอักษรไทยมากที่สุด)
