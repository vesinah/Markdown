# ระเบียนติดตามความคืบหน้าการอ่านวิเคราะห์เอกสาร (Reading Progress Ledger)
## โครงการ: คลังคัมภีร์ถ้ำมั่วเกาแห่งตุนหวง ถ้ำที่ 17 (Dunhuang Mogao Cave 17 / Library Cave)

- **เกณฑ์การทำงาน:** จัดทำ Source Analysis Dossier ตามแม่แบบ 4 ส่วน บันทึกลงใน `research-notes/sources/`
- **เกณฑ์ด่านตรวจความแท้ (Gate 3):** ทุก Dossier ต้องผ่านการตรวจสอบด้วย `python .agent/scripts/verify_dossier.py` (100% Multi-Layer Exact Substring Match) ก่อนนำเข้าสารบบ
- **จำนวนเอกสารเป้าหมายทั้งหมด:** 79 ฉบับ (เป้าหมายขั้นต่ำ R1 >= 70 ฉบับ)
- **สัดส่วนภาษาเป้าหมาย:** ภาษาอังกฤษ (~40%), ภาษาจีน (~35%), ภาษาฝรั่งเศสและญี่ปุ่น (~25%), และภาษารัสเซีย
- **สถานะรวมปัจจุบัน:** ดำเนินการสกัด Markdown และผลิต Dossier ชุดตั้งต้นสำเร็จสมบูรณ์ 9 ฉบับ (ผ่าน Gate 3 ตรวจสอบ 100% ทุกฉบับ)
- **จำนวน Verbatim Quotes ที่ตรวจสอบผ่านแล้ว:** 204 ข้อความ (ผ่านการรัน verify_dossier.py 100% Exact Match, 0 mismatch, exit code 0)

---

### ตารางสถานะรายชุดการกักเก็บและวิเคราะห์ (Batch Status Table)

| ชุดที่ | กลุ่มเอกสาร / ประเด็นหลัก | จำนวน | สถานะ | Dossiers ที่ผ่าน Gate 3 | จำนวนโควทที่ยืนยัน |
|:---:|:---|:---:|:---:|:---|:---:|
| **Batch 1 (Foundational)** | เอกสารแม่บทตุนหวงและเอเชียกลางในระบบ (Rong, Fraser/Whitfield, Keyworth, Pinault, Chavannes, Bentor, Hopkirk, Zhou, JA 1929) | 9 ฉบับ | สกัด MD สมบูรณ์ / ผลิต Dossier ครบถ้วน | **9 / 9 (100%)** | **204 / 204** |
| **Batch 2 (Primary Accounts)** | รายงานการสำรวจปฐมภูมิ (Stein, Pelliot, Otani, Oldenburg, Warner) | 16 ฉบับ | จัดเก็บไฟล์ PDF แล้ว 74+ ไฟล์ในระบบ (อยู่ระหว่างการประมวลผลคู่ขนาน) | รอดำเนินการสกัด | - |
| **Batch 3 (Modern Monographs)** | งานวิชาการสมัยใหม่ (Hansen, Whitfield, van Schaik, Hao Chunwen, Jacobs) | 20 ฉบับ | ฮาร์เวสไฟล์แล้วบางส่วน / อยู่ในแผนประมวลผล | รอดำเนินการสกัด | - |
| **Batch 4 (Chinese Scholarship)** | งานวิจัยตุนหวงศึกษาของสำนักจีนและรายงานสถาบันตุนหวง (Luo, Wang, Chen, Fan, Duan) | 20 ฉบับ | จัดเก็บและสกัดบางส่วน (Rong Xinjiang สำเร็จแล้ว) | รอดำเนินการสกัด | - |
| **Batch 5 (French, Japanese & Russian)** | เอกสารสำนักฝรั่งเศส (BEFEO/Gallica), ญี่ปุ่น (Fujieda, Ikeda), รัสเซีย (IOM RAS) | 15 ฉบับ | จัดเก็บและสกัดบางส่วน (Chavannes, JA 1929 สำเร็จแล้ว) | รอดำเนินการสกัด | - |
| **รวมทั้งหมด** | **คลังเอกสารตุนหวงศึกษาครอบคลุม 6 ภาษา** | **80 ฉบับ** | **ผ่าน Gate 3 ชุดตั้งต้น 9 ฉบับสมบูรณ์แบบ** | **9 / 80** | **204** |

---

### บัญชีรายละเอียดเอกสารชุดตั้งต้น (Batch 1: Foundational Documents Registry)

| ลำดับ | Source ID | ไฟล์ PDF ต้นฉบับ | ผู้แต่ง / ปีพิมพ์ | ภาษา / อักษร | บทที่จับคู่ | สถานะข้อความ | ผลตรวจ Gate 3 |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---:|
| 1 | `S-2018-rong-01` | `2001_Rong_dunhuangxue_shibajiang.pdf` | Rong Xinjiang (2001/2018) | ZH / 汉字 | Ch 1, 2, 3, 4, 5 | EXTRACTED_MD (386 pgs) | ✅ PASS (20/20, 100%) |
| 2 | `S-2024-dunhuang-01` | `2024_dunhuang_bundles_srah.pdf` | Terzi & Whitfield / Fraser (2024) | EN / Latin | Ch 1, 2, 3, 4 | EXTRACTED_MD (21 pgs) | ✅ PASS (23/23, 100%) |
| 3 | `S-2020-keyworth-01` | `2020_Keyworth_Xuanzang_Dunhuang_manuscripts_source.pdf` | George A. Keyworth (2020) | EN / Latin | Ch 1, 4, 5 | EXTRACTED_MD (59 pgs) | ✅ PASS (23/23, 100%) |
| 4 | `S-2020-bookhistory-01` | `2020_bookhistory_uw_tocharian_pelliot_palaeographic_dating.pdf` | Pinault, Arnaud-Nguyen et al. (2020) | EN / Latin | Ch 4, 5, 6 | EXTRACTED_MD (26 pgs) | ✅ PASS (23/23, 100%) |
| 5 | `S-1910-chavannes-01` | `1910_chavannes_edouard_gap305.pdf` | Édouard Chavannes (1910) | FR / Latin | Ch 1, 4, 5 | EXTRACTED_MD (466 pgs) | ✅ PASS (23/23, 100%) |
| 6 | `S-2017-bentor-01` | `2017_Bentor_Shahar_Chinese_and_Tibetan_Esoteric_Buddhism.pdf` | Bentor & Shahar (eds.) (2017) | EN / Latin | Ch 1, 2, 5 | EXTRACTED_MD (463 pgs) | ✅ PASS (23/23, 100%) |
| 7 | `S-2023-zhou-01` | `2023_zhou_zhenru_remaning_dunhuang_library_cave.pdf` | Zhenru Zhou (2023) | EN / Latin | Ch 1, 2, 5, 6 | EXTRACTED_MD (47 pgs) | ✅ PASS (23/23, 100%) |
| 8 | `S-1980-hopkirk-01` | `1980_hopkirk_foreign_devils_on_the_silk_road.pdf` | Peter Hopkirk (1980) | EN / Latin | Ch 3, 4, 5 | EXTRACTED_MD (284 pgs) | ✅ PASS (23/23, 100%) |
| 9 | `S-1929-ja-01` | `1929_Ja_t215_Juillet_Septembre_DLI_full_scan.pdf` | Journal Asiatique (Lalou & Oldenbourg 1929) | FR / Latin | Ch 1, 4, 5 | EXTRACTED_MD (58 pgs OCR) | ✅ PASS (23/23, 100%) |
