# Findings — Loops B-07 + B-08 (Agent หลักดำเนินการเอง 2026-09-01)

> หมายเหตุ: task tool โดน error ระบบซ้ำ จึงดำเนินการโดยตรง; OpenAlex 429, Crossref ใช้ได้ช่วงสั้น ๆ (มี 429 ปน)

---

## Loop B-07 — FA + ZH

### S-530 | EN/FA | secondary
- **Bibliography:** Kinra, R. *Writing Self, Writing Empire: Chandar Bhan Brahman and the Cultural World of the Indo-Persian State Secretary* (UC Press 2015) — **มี fulltext แล้ว** (S-194 loop_A15, PASS 15pp) — ใช้ตอบ Tier 2 FA ร่วมกับรายการด้านล่าง
- **สถานะ FA:** ผล Crossref ตรง ๆ ("Indo-Persian manuscript") ไม่พบงาน manuscript-culture ใหม่ที่เกี่ยวใบลาน — งานที่ได้ล้วน off-target (Judeo-Persian bible, food culture) — **บันทึก: FA = covered ระดับ Tier 2 (สำรวจแล้ว) แต่ไม่มีงานเฉพาะใบลานภาษา FA — skip เหตุผลตาม multilingual-coverage §4.3 (ไม่มีงานตรงประเด็นในภาษานั้น)**

### S-531 | EN | secondary (metadata)
- **Bibliography:** Helman-Ważny, A. "Appendix 2: Features of Paper in Selected Sets of Tibetan Kanjur." (Brill)
- **DOI:** 10.1163/9789004275058_010
- **URL:** https://doi.org/10.1163/9789004275058_010
- **Map:** บทที่ 2 (วัสดุกระดาษเทียบใบลาน), บทที่ 3 (หิมาลัย-ทิเบต)
- **หมายเหตุ ZH:** ผล Crossref ฝั่งจีน/ทิเบตให้งาน Kanjur สาย Brill/BuddhistRoad — งาน ZH วิชาการภาษาจีนแท้ (CNKI) ยังเข้าไม่ได้จากเครือข่ายนี้ — **ZH = ยัง Tier 2 (สำรวจแล้ว 2 query) ตัดสินใจ skip ได้ตาม §4.3 หรือรอ Phase C**

---

## Loop B-08 — NE

### S-532 | NE | primary (หน้าวารสาร — หลักฐาน institutional)
- **Bibliography:** *Nepalese Culture* Vol. 19 (2026), Central Dept. of Nepalese History, Culture and Archaeology, Tribhuvan University — ISSN 2091-1165 (NepJOL)
- **URL:** https://www.nepjol.info/index.php/NC
- **Local Path:** (webfetch หน้า Current Issue — บันทึกใน log ของ session; บท NE 9 บท Devanagari เช่น "लुम्बिनी क्षेत्रसँग सम्बन्धित पुरातात्विक तथा ऐतिहासिक तथ्यहरूको विवेचना" (Amit Wosti, pp.97-112), "यज्ञ परम्परा र कर्मकाण्ड संस्कृति" (Arun Kumar Pandey, pp.113-124))
- **Health:** PASS (HTML หน้ารวม)
- **Map:** บทที่ 3 (NE scholarly landscape) + ใช้เป็น NE sources ใน references ระดับ second-tier
- **สถานะ NE:** NE = **บางส่วน-ถึงเป้าขั้นต่ำ** (มี Dahal 2019 fulltext + NGMCP records + Nepalese Culture 2026 หน้ารวม; การดึง PDF บทเต็มติด view-id ไม่ตรง — สกัดต่อใน Phase C ถ้าจำเป็น)

### S-533 | EN | metadata (NE-เกี่ยว)
- **Bibliography:** Gellner, D. [Review] "A Concordance of H.P. Śāstrī's Catalogue..." *JRAS* (1991) — ยืนยันซ้ำจาก Crossref = ไฟล์ S-431 ที่ได้จริงคือรีวิวนี้ (แก้ mapping แล้ว)
- **DOI:** 10.1017/s1356186300001553
- **Map:** บทที่ 8 (ประวัติศาสตร์การทำแคตตาล็อกเนปาล)

---

## สรุป per-language หลัง B-07/B-08

| ภาษา | สถานะ | ตาม multilingual-coverage §4 |
|:---|:---|:---|
| FA | สำรวจแล้ว (Kinra fulltext + query set) — ไม่มีงานใบลานเฉพาะภาษา FA | **skip ได้ + เหตุผลบันทึกแล้ว** |
| ZH | สำรวจ 2 query (procurement + Kanjur Brill) — งาน ZH แท้เข้าไม่ได้จากเครือข่าย | **skip ได้ + เหตุผลบันทึกแล้ว** (หรือรอ Phase C) |
| NE | Dahal 2019 fulltext + NGMCP records ×2 + Nepalese Culture Vol.19 | **ถึงเป้าขั้นต่ำ (3 แหล่ง)** |

## ข้อค้นพบสำคัญ
1. Helman-Ważny มีบท Kanjur paper (Brill) — เสริมสาย "กระดาษหิมาลัยแทนใบลาน" ที่ S-457 เริ่มไว้
2. NepJOL view หน้ารวมได้ แต่เดา article ID ตรง ๆ ไม่ได้ — ต้องคลิกจริง (Phase C ถ้าต้องการ quote NE เต็ม)
3. Gellner review (S-533) ยืนยัน mapping ของไฟล์ "A Concordance..." ที่ผู้ใช้ดาวน์โหลดมา = รีวิว ไม่ใช่ตัว concordance
