# Blocked Documents — palmleaf_india_nepal

> ตาม Manual Download Handoff Protocol (academic-standards §6.6) — เอกสารสำคัญที่ถูกปิดกั้นถาวร
> เมื่อผู้ใช้ส่งไฟล์กลับ: health check → rename → ย้ายเข้า loop_XX/documents → ปรับสถานะ RESOLVED

---

## รายการ BLOCKED (ตรวจสอบล่าสุด 2026-09-01)

| # | ชื่อเรื่อง | ผู้แต่ง | ปี | DOI/URL | เหตุผลที่ถูกบล็อก | สถานะ |
|:--:|:---|:---|:---:|:---|:---|:---:|
| B-01 | A literature review of palm leaf manuscript conservation—Part 1 | Wiland, J. et al. | 2022 | 10.1080/19455224.2022.2115093 | T&F paywall — ผู้ใช้พยายามหลายครั้ง (2026-08-31, 09-01) ไม่สำเร็จ | **PERMANENT-BLOCKED — ดำเนินการโดยไม่ใช้** (ใช้ Poliakova 2026 + S-540-547 แทน; อ้าง Wiland จาก metadata เท่านั้น) |
| B-02 | A literature review of palm leaf manuscript conservation—Part 2 | Wiland, J. et al. | 2023 | 10.1080/19455224.2023.2167095 | เช่นเดียวกับ B-01 | **PERMANENT-BLOCKED — ดำเนินการโดยไม่ใช้** |
| B-03 | A Concordance of H.P. Śāstrī's Catalogue (VOHD Suppl.bd. 31) | Grünendahl, R. | 1991/1989 | 10.2307/603846 (concordance จริงไม่มี DOI — ไฟล์ที่ได้เป็นรีวิว Gellner) | JSTOR paywall + หาชุดพิมพ์ยาก | BLOCKED |
| B-04 | The Senior Manuscripts (ตัวเล่มเต็ม — ตอนนี้มีแต่บทความ JAOS) | Salomon, R. | 2003 | 10.2307/3217845 | JSTOR (บทความได้แล้ว — ตัวเล่ม optional) | RESOLVED-partial |
| B-05 | Two Gāndhārī Manuscripts of the Songs of Lake Anavatapta (ตัวเล่ม) | Salomon & Glass | 2008 | - | ไฟล์ที่ได้เป็นรีวิว Cousins (BSOAS) | BLOCKED (optional) |
| B-06 | The Spitzer Manuscript Vol. I (physical description) | Franco, E. | 2000 | 10.1553/3-7001-3301-4 | มีแต่ Vol. II; Vol. I ต้องหาแยก | BLOCKED (optional) |
| B-07 | NAMAMI survey figures (เว็บ namami.gov.in) | NAMAMI | - | https://namami.gov.in/ | เว็บล่มถาวรจากเครือข่ายนี้ (timeout) | BLOCKED |
| B-08 | Poliakova/Ciotti 2026 phytolith (Rev. Palaeobotany) | Poliakova et al. | 2026 | 10.1080/23818107.2026.2634848 | is_oa=True แต่ ScienceDirect ติด Cloudflare challenge | RESOLVED-partial (มี Frontiers version S-339 ในเครื่อง) |
| B-09 | Li et al. 2026 conservation archive framework | Li, Y. et al. | 2026 | 10.1007/s10502-026-09551-y | (เดิม Springer paywall) — ได้ fulltext แล้วจาก agent รอบก่อน | RESOLVED |

---

## สรุป (อัปเดต 2026-09-01 — หลังผู้ใช้ตัดสินใจ)

- **ปิดกั้นถาวร — ดำเนินการโดยไม่ใช้:** B-01, B-02 (Wiland ×2) — ผู้ใช้พยายามดาวน์โหลดแล้วหลายครั้งไม่สำเร็จ
- รอผู้ใช้ (optional): B-03 (Grünendahl concordance), B-05 (Anavatapta เล่ม), B-06 (Spitzer Vol. I)
- ใช้ทางเลือกอื่นแทนได้: B-04 (มีบทความ JAOS), B-08 (มี Frontiers version), B-09 (มี fulltext แล้ว)
- เว็บล่ม: B-07 (ลองซ้ำทุกเฟส)
- **กฎการอ้างเมื่อไฟล์ถาวร-BLOCKED:** อ้างได้เฉพาะระดับ "มีรายงานว่า" ตาม research-methodology §5.4 + เชิงอรรถระบุว่าใช้ metadata ไม่ใช่ fulltext

---

## อัปเดต 2026-09-01 (B-13/B-14)

- B-09 Li 2026 Archival Science: **RESOLVED** — ได้ fulltext (S-545)
- B-08 Poliakova phytolith: **RESOLVED-partial** — Frontiers version มีในเครื่องแล้ว (S-339)
- Gap ยืนยันจาก B-14: 14C Gilgit ไม่มีงานเผยแพร่ / ใต้ไม่มีใบลานโบราณตกค้าง (survival bias) / Jain <11th c. ไม่มีงาน DOI ตรง (ใช้ Balbir quote เดิม)

---

> หมายเหตุบำรุงรักษา: ไฟล์นี้เคยเกิด mojibake จากการแก้ผ่าน PowerShell (2026-09-01) — เขียนใหม่ทั้งไฟล์ด้วย Write tool แล้ว ต่อจากนี้ห้ามแก้ไฟล์ภาษาไทยด้วย PowerShell -replace/Set-Content ให้ใช้ Write/Edit tool เท่านั้น
