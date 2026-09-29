# ระเบียนติดตามความคืบหน้าการอ่านวิเคราะห์เอกสาร (Reading Progress Ledger)
## โครงการ: {PROJECT_NAME}

- **เกณฑ์การทำงาน:** จัดทำ Source Analysis Dossier ตามแม่แบบ 4 ส่วน บันทึกลง `research-notes/sources/`
- **เกณฑ์ด่านตรวจความแท้ (Gate 3):** ทุก Dossier ต้องผ่านการตรวจด้วย `python .agent/scripts/verify_dossier.py` (100% Exact Match) ก่อนนำเข้าสารบบ
- **จำนวนเอกสารเป้าหมาย:** {TOTAL_DOCS} ฉบับ
- **สถานะรวมปัจจุบัน:** ดำเนินการแล้วเสร็จ {COMPLETED_DOCS} จาก {TOTAL_DOCS} ฉบับ ({PERCENTAGE}%)
- **จำนวน Verbatim Quotes ที่ตรวจสอบผ่านแล้ว:** {TOTAL_VERIFIED_QUOTES} ข้อความ

---

### ตารางสถานะรายชุด (Batch Status Table)

| ชุดที่ | กลุ่มเอกสาร / ประเด็นหลัก | จำนวน | สถานะ | Dossiers ที่ผ่าน Gate 3 | จำนวนโควทที่ยืนยัน |
|:---:|:---|:---:|:---:|:---|:---:|
| **Batch 1** | {BATCH_1_TOPIC} | {COUNT} ฉบับ | ดำเนินการแล้ว | {COMPLETED_FILES} | {QUOTES_COUNT} |
| **Batch 2** | {BATCH_2_TOPIC} | {COUNT} ฉบับ | รอการดำเนินการ | - | - |

---

### บัญชีรายละเอียดเอกสารรายชุด (Document Detail Registry)

#### ชุดที่ 1 (Batch 1)

| ลำดับ | Source ID | ไฟล์ PDF ต้นฉบับ | ภาษา / อักษร | บทที่จับคู่ | จำนวนโควท | ผลการตรวจ Gate 3 (verify_dossier.py) |
|:---:|:---|:---|:---:|:---:|:---:|:---:|
| 1 | `{SOURCE_ID_1}` | `{PDF_FILENAME_1}` | `{LANG_SCRIPT_1}` | `{CH_MAPPING_1}` | {N} quotes | `PASS (100% Exact Match)` |
| 2 | `{SOURCE_ID_2}` | `{PDF_FILENAME_2}` | `{LANG_SCRIPT_2}` | `{CH_MAPPING_2}` | {N} quotes | `PASS (100% Exact Match)` |
