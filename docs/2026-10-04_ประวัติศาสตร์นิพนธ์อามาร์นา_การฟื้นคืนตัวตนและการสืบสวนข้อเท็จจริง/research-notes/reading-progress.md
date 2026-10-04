# ระเบียนติดตามความคืบหน้าการอ่านวิเคราะห์เอกสาร (Reading Progress Ledger)
## โครงการ: 2026-10-04_ประวัติศาสตร์นิพนธ์อามาร์นา_การฟื้นคืนตัวตนและการสืบสวนข้อเท็จจริง

- **เกณฑ์การทำงาน:** จัดทำ Source Analysis Dossier ตามแม่แบบ 4 ส่วน บันทึกลง `research-notes/sources/`
- **เกณฑ์ด่านตรวจความแท้ (Gate 3):** ทุก Dossier ต้องผ่านการตรวจด้วย `python .agent/scripts/verify_dossier.py` (100% Exact Match) ก่อนนำเข้าสารบบ
- **จำนวนเอกสารเป้าหมาย:** 10 ฉบับหลัก (ครอบคลุมทั้ง 6 บท)
- **สถานะรวมปัจจุบัน:** ดำเนินการแล้วเสร็จ 10 จาก 10 ฉบับ (100%)
- **จำนวน Verbatim Quotes ที่ตรวจสอบผ่านแล้ว:** 20 ข้อความ (100% Exact Substring Match)

---

### ตารางสถานะรายชุด (Batch Status Table)

| ชุดที่ | กลุ่มเอกสาร / ประเด็นหลัก | จำนวน | สถานะ | Dossiers ที่ผ่าน Gate 3 | จำนวนโควทที่ยืนยัน |
|:---:|:---|:---:|:---:|:---|:---:|
| **Batch 1** | การลบล้างประวัติศาสตร์และการค้นพบยุคบุกเบิก (บทที่ 1–3) | 4 ฉบับ | เสร็จสมบูรณ์ 100% | `S-1330-tutankhamun-ch01`, `S-1894-petrie-ch02`, `S-1908-davies-ch02`, `S-1923-borchardt-ch03` | 8 ข้อความ |
| **Batch 2** | สถาปัตยกรรมทาลาทัตและจารึกวิทยาคาร์นัก (บทที่ 4) | 2 ฉบับ | เสร็จสมบูรณ์ 100% | `S-1938-chevrier-ch04`, `S-1979-redford-ch04` | 4 ข้อความ |
| **Batch 3** | ปริศนาการสืบราชสมบัติ กษัตริย์สตรี และนิติวิทยาศาสตร์ (บทที่ 5–6) | 4 ฉบับ | เสร็จสมบูรณ์ 100% | `S-1998-gabolde-ch05`, `S-2009-allen-ch05`, `S-2014-vanderperre-ch05`, `S-2010-hawass-ch06` | 8 ข้อความ |

---

### บัญชีรายละเอียดเอกสารรายชุด (Document Detail Registry)

| ลำดับ | Source ID | ไฟล์ PDF ต้นฉบับ | ภาษา / อักษร | บทที่จับคู่ | จำนวนโควท | ผลการตรวจ Gate 3 (verify_dossier.py) |
|:---:|:---|:---|:---:|:---:|:---:|:---:|
| 1 | `S-1330-tutankhamun-ch01` | `tutankhamun_restoration_stela_cg34183.pdf` | อียิปต์โบราณ / อังกฤษ | บทที่ 1 | 2 quotes | `PASS (100% Exact Match)` |
| 2 | `S-1894-petrie-ch02` | `petrie_1894_tell_el_amarna.pdf` | อังกฤษ (Latin) | บทที่ 2, 3 | 2 quotes | `PASS (100% Exact Match)` |
| 3 | `S-1908-davies-ch02` | `davies_1908_rock_tombs_part6_ay_hymn.pdf` | อังกฤษ (Latin) | บทที่ 2 | 2 quotes | `PASS (100% Exact Match)` |
| 4 | `S-1923-borchardt-ch03` | `borchardt_1923_portraets_der_koenigin_nofretete.pdf` | เยอรมัน (Fraktur/Latin) | บทที่ 3 | 2 quotes | `PASS (100% Exact Match)` |
| 5 | `S-1938-chevrier-ch04` | `chevrier_1938_talatat_karnak.pdf` | ฝรั่งเศส (Latin) | บทที่ 4 | 2 quotes | `PASS (100% Exact Match)` |
| 6 | `S-1979-redford-ch04` | `redford_1979_karnak_talatat_project.pdf` | อังกฤษ (Latin) | บทที่ 4 | 2 quotes | `PASS (100% Exact Match)` |
| 7 | `S-1998-gabolde-ch05` | `gabolde_1998_akhenaton_toutankhamon.pdf` | ฝรั่งเศส / อียิปต์โบราณ | บทที่ 5 | 2 quotes | `PASS (100% Exact Match)` |
| 8 | `S-2009-allen-ch05` | `allen_2009_amarna_succession.pdf` | อังกฤษ / อียิปต์โบราณ | บทที่ 5 | 2 quotes | `PASS (100% Exact Match)` |
| 9 | `S-2014-vanderperre-ch05` | `vanderperre_2014_dayr_al_barsha_graffito.pdf` | อังกฤษ / อียิปต์โบราณ | บทที่ 5 | 2 quotes | `PASS (100% Exact Match)` |
| 10 | `S-2010-hawass-ch06` | `hawass_2010_tutankhamun_ancestry_pathology.pdf` | อังกฤษ (Latin) | บทที่ 6 | 2 quotes | `PASS (100% Exact Match)` |

