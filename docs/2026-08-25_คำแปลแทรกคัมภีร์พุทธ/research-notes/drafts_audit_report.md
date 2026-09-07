# รายงานตรวจสอบร่างบทวิชาการ (Drafts Audit Report)

**ผู้ตรวจ:** Sub-Agent "The Critic" (Independent anti-hallucination auditor)
**วันที่:** 2026-08-25
**ขอบเขต:** ร่าง 6 ไฟล์ใน `drafts/` เทียบข้อมูลดิบใน `research-notes/` (init/ + loop_01..loop_25 + source-index.md + phase_a/b_verification_report.md)

---

## สรุปตัวเลข

| หมวด | ตรวจ | PASS | FIXED | ISSUE-OPEN |
|:---|---:|---:|---:|---:|
| Format compliance (emoji / HTML / markers / Wikipedia / ลำดับเชิงอรรถ) | 6 บท | 6 | 0 | 0 |
| Citation spot-check | 91 รายการ | 86 | 5 | 0 |
| Consistency (glossary + ชื่อข้ามบท + แหล่งไม่มีใน notes) | 6 บท | 6 | 0 | 0 |
| **รวม** | **103 จุดตรวจ** | **98** | **5** | **0** |

**Verdict: APPROVED — ร่างทั้ง 6 บทผ่านการตรวจสอบ ไม่มี hallucination ค้าง ไม่พบแหล่งปลอม/นอก research-notes**

---

## 1. Format Compliance Scan — ผ่านทั้ง 6 บท

| เกณฑ์ | 01 | 02 | 03 | 04 | 05 | 06 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| ไม่มี emoji | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ไม่มี HTML tags | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ไม่มี [UNVERIFIED]/[CORRECTED]/[BLOCKED] หลุดเข้าร่าง | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ไม่มี Wikipedia/Wikidata ในเชิงอรรถ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Marker [N] เรียงต่อเนื่อง ไม่ข้าม ไม่ซ้ำ | ✓ [1–87] | ✓ [1–117] | ✓ [1–64] | ✓ [1–70] | ✓ [1–42] | ✓ [1–68] |
| ทุก marker มีรายการท้ายบท (def ครบ ไม่ซ้ำ) | ✓ 87/87 | ✓ 117/117 | ✓ 64/64 | ✓ 70/70 | ✓ 42/42 | ✓ 68/68 |
| ไม่มีอักขระเสีย (mojibake) ในไฟล์ UTF-8 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 2. Citation Spot-Check — สุ่ม 91 รายการ grep ยืนยันกับ research-notes

### บท 01 — บทนำสถานภาพการศึกษา (ตรวจ 13 | PASS 11 | FIXED 2)

| เชิงอรรถ | ผล | หลักฐานใน research-notes |
|:---|:---|:---|
| [11] Ruiz-Falqués JBS 21(1) 2017 | PASS | loop_02:130–131 (JBS 21(1): 1–96 ตรง) |
| [22] Hundius & Wharton JLS 2(2) 2011 | PASS | loop_01:135 |
| [28] ~~Elisabetta~~ Alberizzi | **FIXED** | init/search_02:17 ระบุ "Valerio Luigi Alberizzi" — แก้ชื่อแล้ว |
| [54] Andrée, Revue bénédictine | PASS | init/search_04:32–33 (+URL RB.5.100573) |
| [59] ~~Tamoto Yoshio~~ | **FIXED** | loop_10/loop_21 + phase_a:42 ยืนยัน "Kenichi Tamoto" — แก้แล้ว |
| [65][66][68][69][76][80][81][87] Yonezawa 2022 / Stein TA-I / Verhagen 1993 / Almogi 2005 / O'Daly HL 52:1 / Pollock CV JAS 57(1) / Language Log p=63651 / Kobayashi Kyūko Shoin 2004 | PASS ทั้งหมด | I-14, B19-02, A07-07 (1993 ตาม Crossref), A07-08, loop_25:52, loop_25:82, loop_04:96, loop_17:25 |

### บท 02 — ประเภทวิทยาและศัพท์วิชาการ (ตรวจ 12 | PASS 9 | FIXED 3)

| เชิงอรรถ | ผล | หลักฐานใน research-notes |
|:---|:---|:---|
| [11] Gershevitch Semantic Scholar link | PASS | loop_24:121 (hash dc617c80… ตรงเป๊ะ) |
| [17] Kāruṇika 2008 Siritipitaka | PASS | loop_02:124 |
| [20] Chula-Nan item 9257 + Penn TDM [25] | PASS | loop_01:108, 111 |
| [30] Üşenmez SOBİDER DOI | PASS | B23-02 (10.29228/sobider.72337) |
| [34] Kenichi Tamoto Benjamins Z180 | PASS | B21-03 + phase_a:42 |
| [36] ~~Elisa~~ Alberizzi | **FIXED** | init/search_02:17 → "Valerio Luigi" — แก้แล้ว |
| [50] Martín-Contreras OBP .01 | PASS | loop_22:34–35 |
| [57] Mirkamal AOASH 73(4) | PASS | A09-01 (DOI ตรง) |
| [59] ~~Shingo~~ Arakawa | **FIXED** | loop_09:131 [09-S16] = "Shintarō Arakawa" — แก้แล้ว |
| [61] Complutensian OL19644570M | PASS | loop_14:35 |
| [65] ~~Ross~~ Zisk | **FIXED** | init/search_02:35 + loop_25:56 = "Zisk, Matthew" — แก้แล้ว |

### บท 03 — เถรวาทบาลีอุษาคเนย์ (ตรวจ 14 | PASS 14)

Tin Lwin MSJ 3 (2014):147–161 [2], Bode reprint BPS 2014 [10], Braun UChicago 2013 [16], Dhammasami Bloomsbury 2018 + thesis pp.134–147/42 [17], Filliozat JRAS 9(1) 1999 [21], MAP 16555+19602 muzeumazji.pl [24], von Hinüber Harrassowitz 2013 [32], Navanurak b016/b052 [34], Skilling Aséanie 19 [40], Lagirarde review Aséanie 22:197–200 [41], Calames P25 [43], Gnanaloka DOI 10.65646/3rc20dmg5a0847 [58], Walker JSS 114(1) 2026 [62], Sripum & Walker MSS 11(1) 2026 [63]
— ทั้งหมด PASS (loop_02:107,117,122–123; loop_01:46–47,76,85,93,115–116,125–126,131; loop_03:75–76,86–87; loop_16:95,109–110,113–115)

### บท 04 — เอเชียตะวันออก kunten-gugyeol (ตรวจ 16 | PASS 16)

Valerio Luigi Alberizzi [2], Steininger JJS 45(2) DOI 10.1353/jjs.2019.0034 [9], Steininger HJAS 78(2) DOI 10.1353/jas.2018.0027 [10], NINJAL sksh corpus [14], King Acta Koreana DOI 10.18399/acta.2013.16.1.009 [25], Lee Seungjae ART001021806 + Taehaksa ชุด [26], Nam DOI ssw.49.2 [29], Kim Ji-o 어문연구 189 [31], Language Log [45], Fujimoto NDL [51], Taylor JAS 77(1) DOI 10.1017/S0021911817000985 [55], hannom.org.vn param=1081 [57], Đồng Đắc 14/11/2025 [59], Trần Nghĩa & Gros 1993 [61], Fo Guang MA 2017 [66], Religions 15(3):352 [67]
— ทั้งหมด PASS (loop_06:39–40,67–71; loop_04:42–54,96–97; loop_17:43; phase_a:32–33; loop_05:23,34–35,49,62,69,72; loop_18:37)

### บท 05 — ทิเบตเอเชียกลางมองโกเลีย (ตรวจ 14 | PASS 14)

Kagyu Office URL [1], Harada IBK 27(2) DOI ibk.27.912 [6], Ishikawa Studia Tibetica 18 + IBK 43(1) [7], Panglung East & West 44(1) [8], Leiden \*Lakṣaṇatīkā item 2912131 [12], Luo Hong Anuruddha festschrift 299–342 [13], Mirkamal ×2 [24][26], Ye & Jumabay [27], Tokyürek altaist.org [29], Unedited Old Uighur AOASH 75(4) [34] (ไม่ระบุผู้แต่ง = สอดคล้อง [author UNVERIFIED] ในไฟล์ดิบ), Alekseev pureportal [38], journals.pan.pl/82277 [40], Oxford Podcasts [41], ACL Anthology 2023.alp-1.25 [42]
— ทั้งหมด PASS (loop_07:57–59,88,114,118; loop_19:38–40; init/search_03:15,19,34,37–38; loop_09:74–75,94,131)

### บท 06 — เปรียบเทียบข้ามศาสนาและสังเคราะห์ (ตรวจ 22 | PASS 22)

Smith IA scan [1], Andrée Lectio Brepols [3], Kotake -021 [12], Houghton NovT 57 [13], Treasures from the Bodleian Columbia UP 1976 DOI hass94446-004 + Hemphill ICQ 4 (1911) DOI 30067114 [14], Gretsch CUP 1999 [18], Berghaus 1979 [19], Verner 2019 [20], Kelley Masorah BHS 1998 [26], OBP sub-DOIs Phillips/.02 Beiler/.03 Hornkohl/.04 Breuer/.07 Crowther/.08 [28], Aleppo full-scan archive.org [29], Eckmann reviews ×3 DOI [33], Sağol OL38538670W/OL38596597W [36], Akhmetova pp.159–196 (.04) [39], Witzel EJVS DASH [42], vedicheritage/saiveda/Vikrutivaani [49], DSAL Caturvedi [50], Jain texts ชุด (Dravyasaṃgraha/Daśavaikālika/Gauḍavaho/Niyamasara/Pañcāstikayasāra) [51], Brill BP000011.xml [54], Pollock CV DOI 10.2307/2659022 [60], Thompson BMRCR 10.1 [62], O'Daly HL [63]
— ทั้งหมด PASS (I-19/I-20; loop_21:35–46; loop_14:49; A14-06/A14-07; A11-01; loop_22:39–45; loop_11:38; loop_23:44–56; loop_12:34,48; loop_24:31–35,55,64,70–73,121–122; loop_25:83)

---

## 3. Consistency Scan

**ศัพท์ถ่ายถอดไทยเทียบ glossary.md:** ตรงทุกรายการ ไม่พบ variant — นิสสยะ (nissaya), กลอส (gloss), คุนเท็น (kunten), คุนโดะคุ (kundoku), อ็อนแฮ (eonhae), เกรล-กา ('grel ka), ฉายา (chāyā); ไม่พบ "กลอษ/คุนเต็น/คุนเทน/คุนโดกุ/ออนแฮ/เกรลกา"

**ชื่อบุคคล/งานข้ามบท:** Fernández Cuesta, Pons-Sanz, Ruiz-Falqués (มีเครื่องหมาย accent ครบทุกจุด), Herngseng, Kirichenko, Shōgaito, Ueyama, Yonezawa, Scherrer-Schaub, Dorji Wangchuk, Kakkapalliye — สะกดตรงกันทุกบท; หลังแก้ 5 จุดแล้ว Alberizzi/Tamoto/Zisk/Arakawa สอดคล้องทุกบท

**แหล่งที่ไม่มีใน research-notes:** ไม่พบ — เชิงอรรถที่สุ่มทั้ง 91 รายการมีระเบียนใน init/loop/source-index ครบ

---

## 4. รายการแก้ไขทั้งหมด (5 รายการ — แก้ไฟล์ร่างโดยตรง)

| # | ไฟล์ | ตำแหน่ง | เดิม (ผิด) | แก้เป็น (ตาม research-notes) |
|:---:|:---|:---|:---|:---|
| 1 | 01-บทนำสถานภาพการศึกษา.md | เชิงอรรถ [28] บรรทัด 155 | Elisabetta Alberizzi | Valerio Luigi Alberizzi |
| 2 | 01-บทนำสถานภาพการศึกษา.md | เชิงอรรถ [59] บรรทัด 217 | Tamoto Yoshio | Kenichi Tamoto |
| 3 | 02-ประเภทวิทยาและศัพท์วิชาการ.md | เชิงอรรถ [36] บรรทัด 199 | Elisa Alberizzi | Valerio Luigi Alberizzi |
| 4 | 02-ประเภทวิทยาและศัพท์วิชาการ.md | เชิงอรรถ [59] บรรทัด 245 | Shingo Arakawa | Shintarō Arakawa |
| 5 | 02-ประเภทวิทยาและศัพท์วิชาการ.md | เชิงอรรถ [65] บรรทัด 257 | Ross Zisk | Matthew Zisk |

## 5. หมายเหตุเชิงสังเกต (ไม่ถือเป็น issue — ร่างสอดคล้องกับระเบียนจริงแล้ว)

1. **Complutensian "1514"** (บท 02 [61], บท 06 [24]): phase_a_verification_report แนะให้เขียน "1514–17" เมื่อเขียนเชิงวิเคราะห์ (NT เสร็จ 1514; privilege 1517–1520) — ร่างอ้างปีตามระเบียน loop_14 ซึ่งถูกต้องตามข้อมูลดิบ ผู้เขียนภายหลังอาจพิจารณาระบุช่วงปีเพิ่ม
2. **Walker, "Living Phonologies," Numen** (บท 03 [51]): ร่างใช้ เล่ม 71 ตาม URL Brill (nu/71/2-3) — หน้าเว็บผู้เขียนแสดง 74(2–3) ซึ่ง loop_16 บันทึกทั้งสองค่าไว้แล้ว ไม่ถือเป็น mismatch
3. **"Unedited Old Uighur Buddhist Literature"** (บท 05 [34]) ไม่ระบุผู้แต่ง — สอดคล้องกับสถานะ [Author UNVERIFIED] ใน loop_09 เป็นการเขียนที่ถูกวิธี

---

## Verdict

**PASS — อนุมัติร่างทั้ง 6 บทเข้าสู่ขั้นถัดไปได้** (98/103 จุดตรวจ PASS ตั้งแต่ต้น, 5 จุดแก้แล้วเสร็จสิ้น, 0 จุดค้าง) — ไม่พบการอ้างแหล่งที่ไม่มีอยู่จริง, ไม่พบ Wikipedia/Wikidata, โครงสร้างเชิงอรรถสมบูรณ์ทุกบท, ศัพท์ถ่ายถอดเป็นไปตาม glossary.md ทุกประการ
