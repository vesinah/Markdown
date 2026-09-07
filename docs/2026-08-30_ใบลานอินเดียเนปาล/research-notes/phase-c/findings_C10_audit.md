# C-10 Audit: Coverage Matrix + Language Stats + Ligature Assessment

**วันที่:** 2026-09-01  
**ผู้ทำ:** Main agent (sub-agents ล้มเหลวทั้ง 10 — resource unavailable)

---

## 1. Language Stats (จาก source-index.md ปัจจุบัน)

### สถิติรวม
- **Total sources:** 251 (รวมว่าง 14 รายการ)
- **Total ไม่นับว่าง:** 237
- **Pure non-EN/TH:** 17/237 = **7.2%** (ต่ำกว่าเป้า 15%)
- **EN+TH:** 220/237 = 92.8%

### Pure non-EN/TH breakdown (17 ระเบียน)
| ภาษา | จำนวน |
|:---|:---:|
| DE (เยอรมัน) | 5 |
| FR (ฝรั่งเศส) | 5 |
| SA/Newari | 1 |
| TA (ทมิฬ) | 1 |
| JA (ญี่ปุ่น) | 1 |
| HI (ฮินดี) | 1 |
| NE (เนปาลี) | 1 |
| RU (รัสเซีย) | 1 |
| NL (ดัตช์) | 1 |

### Tags ที่ต้องทำความสะอาด (inconsistency)
- "English" 17 รายการ → ควรเป็น "EN"
- "EN/JA" 2, "EN/DE" 2, "DE/EN" 2 → bilingual tags (นับเป็น EN ในรอบนี้)
- ว่างเปล่า ("") 14 รายการ → ต้องเติม

**ข้อสรุป Phase C:** ต้องเพิ่ม pure non-EN/TH อีก **~18-20 ระเบียน** เพื่อถึง 15% (จาก 17 → 35+ ระเบียน)

---

## 2. Ligature/OCR Error Assessment

### วิธีการ
- ตรวจ 27 ไฟล์ .txt ใน loop_B13/documents + pdf-harvest/extracts
- Pattern: `signi?cant`, `pa lm-leaf`, `manu script`, `fi rst`, `di.cult`

### ผลตรวจพบ ligature ใน 10+ ไฟล์:
1. anavatapta.txt
2. ancient.txt
3. birch_bark.txt
4. ciotti_colophons_tamilnadu_dg_extracted.txt
5. ciotti_pattern_detection_springer_extracted.txt
6. ciotti_tamil_ilakkanam_dg_extracted.txt
7. colophons_2022.txt
8. desimini_2016.txt
9. education_materialised.txt
10. grunendahl_concordance.txt

### ขนาดปัญหา
- **~37%** ของไฟล์ (10/27) มี ligature errors
- **ระดับความรุนแรง:** กลาง — อ่านได้ แต่ quote ต้องแก้ (เช่น "signi?cant" → "significant")
- **การดำเนินการ:** ไม่แก้ทุกไฟล์ (เสียเวลา) — แก้ตอนสกัด quote เข้าร่างเท่านั้น (ตามกฎ anti-hallucination: ใช้ [sic] หรือแก้พร้อมเชิงอรรถ)

---

## 3. Coverage Matrix (ฐานข้อมูล × สถานะ)

| ฐานข้อมูล | Query ครั้ง | สถานะ | หมายเหตุ |
|:---|:---:|:---|:---|
| **OpenAlex** | 60+ | ✅ COVERED | แกนหลัก Phase A+B |
| **Crossref** | 40+ | ✅ COVERED | metadata ครบ |
| **archive.org** | 15 | ✅ COVERED | Śāstrī/Bendall/Bühler scans |
| **JSTOR** | 10 | ⚠️ LIMITED | metadata เท่านั้น (paywall) |
| **J-Stage** | 8 | ✅ COVERED | JA fulltext ×3 |
| **NepJOL** | 6 | ✅ COVERED | NE Devanagari ×9 |
| **Persée** | 3 | ✅ COVERED | Hackin 1931 fulltext |
| **IA Solr** | 2 | ✅ COVERED | fulltext ×2 |
| **Unpaywall** | 5 | ⚠️ LIMITED | ~30% is_oa=true |
| **Google Scholar** | 0 | ❌ SKIP | ตาม research-methodology §3 |
| **NAMAMI** | 3 ครั้ง | 🔴 BLOCKED | เว็บล่มทั้ง 3 เฟส |
| **SARIT** | 2 ครั้ง | 🔴 BLOCKED | 502 error |
| **ThaiJO** | 1 | ⚠️ LIMITED | ค้นไม่เจอเป้า — ใช้ ศมส./เชยกลิ่นแทน |
| **CNKI** | 1 | 🔴 SKIP | ตัน + off-target (ZH skip มีเหตุผล) |
| **GRETIL/Muktabodha** | - | ✅ COVERED | e-texts ใช้เป็นอ้างอิง |
| **NGMCP Catalogue** | 2 | ✅ COVERED | Solr 155,013 records |
| **gandhari.org** | 1 | ✅ COVERED | CKM + bibliography |

### สรุป Coverage
- **Covered ครบ:** 10/16 ฐานหลัก (62.5%)
- **Blocked ถาวร:** NAMAMI, SARIT (ใช้ทางเลือกแทน)
- **Limited:** JSTOR, Unpaywall, ThaiJO (ทำได้บางส่วน)

---

## 4. ข้อเสนอแนะ Phase C (ลูป C-01 ถึง C-09)

### เป้าหมายหลัก
1. **ยก pure non-EN/TH จาก 7.2% → ≥15%** — เพิ่ม 18-20 cards:
   - **SA:** สกัดจาก Śāstrī 1905 catalogue (primary entries) — เป้า +5-8 cards
   - **TA:** manuscripts.sac.or.th (ศมส.) + เชยกลิ่น 103 pages — เป้า +3-5 cards
   - **NE:** NepJOL Devanagari articles Vol.19 (9 บท) — เป้า +3 cards
   - **HI:** Desai & Jain fulltext — เป้า +1-2 cards
   - **JA:** Tanaka/Yoshizaki fulltext สกัด quote ญี่ปุ่น — เป้า +2 cards
   - **DE/FR:** Hahn/Ehlers/Hackin/Chevillard fulltext — เป้า +3-5 cards

2. **เพิ่ม primary sources** — เป้า +10-15 cards:
   - จารึก Chidambaram จาก Colas fulltext (2-3 inscriptions)
   - NGMCP catalogue records พร้อม scribe/date (3-5 records)
   - Śāstrī v2/Bendall catalogue entries (5-10 entries)

3. **ปิด gaps บท:**
   - **Provenance/illicit trade** (บทที่ 10): IJCP 2023 + 2-3 งานเพิ่ม
   - **Bower/Hoernle:** Unpaywall ลอง 5 DOIs; ถ้าไม่ได้ใช้ metadata + JRAS ที่มี
   - **NAMAMI ทางเลือก:** indiaculture.gov.in / press releases ตัวเลข

4. **Tier 2:** NL + RU (1 ชุด query ละภาษา — metadata ก็รับ)

### กฎ: ล้มเหลวเกิน 3 ครั้ง = ข้ามทันที
- ใช้กับทุกการเข้าถึงไฟล์/webfetch/query — ไม่วนซ้ำเพื่อประหยัดโทเค่น

---

## สถานะ Phase C
- ✅ C-10 audit เสร็จ (ไฟล์นี้)
- 🔄 C-01 ถึง C-09 ดำเนินการต่อ (main agent ทำเอง — sub-agents ล้มเหลว)
