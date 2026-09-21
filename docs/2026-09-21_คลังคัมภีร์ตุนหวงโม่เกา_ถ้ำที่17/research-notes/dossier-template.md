# บันทึกการอ่านและวิเคราะห์เอกสารฉบับสมบูรณ์ (Source Analysis Dossier)
## {TITLE}

---

### ส่วนที่ 1: ข้อมูลบรรณานุกรมและการอ้างอิงมาตรฐาน (Bibliographic Metadata)
- **Source ID:** `{SOURCE_ID}`
- **ชื่อไฟล์ PDF ในเครื่อง:** `{PDF_FILENAME}`
- **ชื่อไฟล์ Extracted Text ในเครื่อง:** `{TXT_FILENAME}`
- **ประเภทเอกสาร:** `{DOC_TYPE}` (Monograph / Journal Article / Primary Expedition Report / Manuscript Catalog / Book Chapter)
- **ภาษาของเอกสาร (Language):** `{LANGUAGE}` (English, Chinese, French, Japanese, Russian, Sanskrit, Tibetan, etc.)
- **อักษรที่ใช้ (Script):** `{SCRIPT}` (Latin, Chinese characters [繁體/简体], Tibetan Uchen, Devanagari, Cyrillic, etc.)
- **แหล่งสืบค้น / Source URL / DOI:** `{SOURCE_URL}`
- **การอ้างอิงฉบับเต็มระบบ Chicago/Turabian Notes (Ready-to-paste Note):**  
  `{CHICAGO_NOTE_CITATION}`
- **การอ้างอิงระบบบรรณานุกรมท้ายเล่ม (Bibliography Entry):**  
  `{CHICAGO_BIBLIO_CITATION}`

---

### ส่วนที่ 2: แผนผังการจัดสรรเข้าสู่บทและหัวข้อย่อย (Chapter & Section Mapping Matrix)
*ระบุอย่างชัดเจนว่าเนื้อหาและข้อค้นพบจากเอกสารนี้ นำไปใช้ในบทใดและหัวข้อย่อยใดของโครงร่างแม่บท 6 บท:*
- **บทที่ {CH_NUM} ({CH_TITLE}):**
  - หัวข้อย่อย {SEC_NUM}: ประเด็นที่นำไปใช้...
  - หัวข้อย่อย {SEC_NUM}: ประเด็นที่นำไปใช้...
- **ความเชื่อมโยงข้ามบท (Cross-chapter Synergy):**
  - บทที่ {ALT_CH_NUM}: การเชื่อมโยงข้อค้นพบ...

---

### ส่วนที่ 3: บทวิเคราะห์สาระสำคัญเชิงลึกและจุดยืนทางวิชาการ (Deep Academic Analysis)
*ความยาวรวมบทวิเคราะห์ไม่น้อยกว่า 1,000–1,500 คำ ครอบคลุม:*
- **วิทยานิพนธ์และข้อถกเถียงหลักของผู้เขียน (Core Argument / Thesis):**  
  {CORE_ARGUMENT}
- **บริบทประวัติศาสตร์นิพนธ์และการวิพากษ์แหล่งข้อมูล (Historiographical Context & Source Criticism):**  
  {HISTORIOGRAPHY_CRITICISM}
- **สาระสำคัญและข้อค้นพบเชิงประจักษ์จำแนกตามประเด็น (Thematic Analysis with Exact Pages):**  
  1. **{THEME_1}:** {FINDING_1} (p. {PAGE_1})
  2. **{THEME_2}:** {FINDING_2} (p. {PAGE_2})
  3. **{THEME_3}:** {FINDING_3} (p. {PAGE_3})
  4. **{THEME_4}:** {FINDING_4} (p. {PAGE_4})

---

### ส่วนที่ 4: คลังข้อความอ้างอิงตรงและคำศัพท์เฉพาะ (Verbatim Quotes Bank)
*ข้อความภาษาเดิมตรงตัวจากเอกสาร (100% Exact Substring Match) สกัดด้วย `quote_extractor.py` และต้องผ่านการตรวจด้วย `verify_dossier.py` (อย่างน้อย 20–25 โควทต่อแฟ้ม):*

1. **ประเด็น: {TOPIC_1}**
   > "{VERBATIM_QUOTE_1}" (p. {PAGE_NUM_1})
   - **คำแปลสรุป/ความหมาย:** {THAI_TRANSLATION_1}

2. **ประเด็น: {TOPIC_2}**
   > "{VERBATIM_QUOTE_2}" (p. {PAGE_NUM_2})
   - **คำแปลสรุป/ความหมาย:** {THAI_TRANSLATION_2}

#### คลังคำศัพท์เฉพาะทางจากเอกสาร (Native Terminology)
| คำศัพท์เดิม | ภาษา / อักษร | คำอ่าน / คำแปลไทย | นิยามเชิงวิชาการในเอกสาร | เลขหน้าที่ปรากฏ |
|:---|:---:|:---|:---|:---:|
| {ORIGINAL_TERM} | {LANG_SCRIPT} | {THAI_TRANSLITERATION} | {DEFINITION} | p. {PAGE} |
