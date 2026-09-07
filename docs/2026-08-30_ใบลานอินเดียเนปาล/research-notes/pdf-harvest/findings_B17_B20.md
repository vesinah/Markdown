# Findings — Loops B-17 ถึง B-20: Per-Chapter Evidence Audit + KPI Check (Agent หลัก 2026-09-01)

> ตรวจจากไฟล์จริง: source-index.md (251 ระเบียน), findings_*.md 10 ไฟล์, blocked-documents.md

---

## 1. Per-Chapter Evidence Audit (10 บท)

| บท | หลักฐานหลักที่มี (fulltext ในเครื่อง) | ประเมิน | Gap ที่ต้องเติม (Phase C) |
|:--:|:---|:---:|:---|
| 1 บทนำ/ประวัติศาสตร์นิพนธ์ | Quenzer definition (S-454), Wujastyk 2014, Sahoo 2016 review, Poliakova 2026 review (~300 works), Wiland ×2 (PDF ยังขาด), manuscriptology JAIMS | พอ | Wiland PDF (ผู้ใช้), งานไทยมานุสคริปต์วิทยา |
| 2 วัสดุ/จดจาร/หมึก | Sharma ×2, Yu, Chen ×2, Ali sāñcipāt, Goswami mahī, Loshali bhūrja, Anjana Lekhyasamagri, DDSA lekhana/masiḥ, Poliakova phytolith, S-544 species ID, Nishanthi เตรียมใบ, Gunawan carik/cəmṅ | **แน่นสุด** | ศัพท์เข็มจารเฉพาะ (āyasa-lekhanī) |
| 3 กระจายตัว | Houben&Rath survival bias, Add.1049.1 828 CE, Han&Braarvig, Perumal Tamilnadu, Wilder, Suba/Sivakumar (TA), Nishanthi (LK), Ali (Asm), lokta (NE), Helman-Ważny Mustang, Mardzong, ฐมส. | พอ | NE quote เต็มจาก Nepalese Culture |
| 4 หอคัมภีร์/ห้องสมุด | Colas Sarasvatī (จารึก 2 หลัก), Arokiaswamy Thanjavur, S-151 ตัวเลขมัตถ์ (Dharmapuram 72,314), bhandara Balbir, ORI Mysore, Śāstrī v2 16,000 | พอ | หลักฐานหอคัมภีร์ฮินดูยุคก่อน 13th c. (จารึก) |
| 5 หีบเก็บ/โครงสร้างเล่ม | Ciotti binding typology, guṭakā, BL pot D + likhidago (S-412), Gilgit chamber มิติจริง (S-433), Senior pot+index scrolls (S-413), Rani patli, De Simini sarayantraka + Devīpurāṇa สเปก | พอ | งานวัตถุปกไม้เฉพาะ (ไม้ชนิดใด) |
| 6 ปกปักรักษา | **Wiland ×2 (แกน review — PDF ยังขาด)**, Nishanthi, IGNCA, Chu, RH 50% (S-540), Yu, nanocapsules/ATRP (S-542/543), Li archival (S-545), INTACH, Sharma 2018 preservatives | พอ-ดี | **Wiland Pt.1+2 (BLOCKED — ผู้ใช้)** |
| 7 ธรรมเนียมคัดลอก/colophons | Syntax of Colophons (6 บท), Formigatti, Yoshizaki, De Simini merit ×3, Davis, Panarut/Techasiriwan, Keyworth, van der Meij, Kasai, Colas "Variant" 2024, Klebanov NS 633 | **แน่น** | งาน jīrṇoddhāra title ตรง (ยืนยันไม่มี) |
| 8 บัญชี/แคตตาล็อก/ดิจิทัล | Śāstrī ×2 (fulltext), Bendall, Aufrecht, Bühler scan, Grünendahl (review), IGNCA, AMAR, HTR ชุดใหญ่ (ACL 2026, LeafOCR, SegFormer, SEA review, Tibetan HTR), Muktabodha/GRETIL, S-545 | **แน่น** | NAMAMI figures (เว็บล่ม), ZH วิชาการ |
| 9 เก่าสุด/วิธี dating | Salomon ×3, Spitzer II, Bakhshālī HSSA, Gilgit (UNESCO+Hackin+v.Hinüber), Nepal 828/857/NS-dated, Rath palaeography+saṃvatsara, Aghaei Tehran, dluwang, Harimoto Add.1702 re-dating | **แน่น** | Bower fulltext (Hoernle metadata), 14C BL Kharoṣṭhī (ยืนยันแล้วไม่มี — เขียนเป็นข้อเท็จจริง) |
| 10 สังเคราะห์ | counter-evidence 4 theses (B-15/16), cross-cutting ทุกบท | พอ | source provenance/illicit trade เฉพาะ (IJCP 2023 metadata มี) |

## 2. KPI Check (ตาม research-methodology §9 + project-plan override)

| KPI | เป้าหมาย | สถานะจริง | ผล |
|:---|:---:|:---|:---:|
| Distinct authors ต่อบท | ≥ 8 | รวมโปรเจกต์ 35+ first authors; รายบทคาด 8-15 (เช็คซ้ำตอน drafting ด้วย claim ledger) | ✓ (เช็คซ้ำขั้นเขียน) |
| Primary : secondary | ≥ 1:3 | ปฐมภูมิเต็ม ~12-15 (แคตตาล็อกเก่า 5 เล่ม, Hackin, UNESCO, NGMCP ×2, Śāstrī ×2, DDSA) : ทุติยภูมิ ~90 — **ยังต่ำกว่าเป้า** | ✗ ต้องเติม Phase C |
| Non-EN/TH sources | ≥ 35% | **แก้ตาม audit 2026-09-01:** นับด้วยเกณฑ์ tag บริสุทธิ์ = DE 5, FR 5, JA 1, NE 1 = 12/244 ≈ **4.9%**; นับกว้างสุด (tag แทรกในวงเล็บ) ≈ 22/244 ≈ **9%** — **ต่ำกว่าเป้าชัดเจน** (ตัวเลข ~19% ที่รายงานครั้งแรก overstated — TA/HI/ZH/FA บริสุทธิ์ = 0) | ✗ **gap ใหญ่สุดของ Phase C** |
| Tier 1 รายภาษา | ≥3 หรือ skip+เหตุผล | DE ✓, JA ✓, TA ✓, HI ✓, NE ✓(ขั้นต่ำ), FR ✓(2+skip เหตุผล altcha), SA ✓(ศัพท์+แคตตาล็อก), TH ✓ | ✓ |
| Tier 2 สำรวจ | ≥1 query/เฟส | NL/RU ยังไม่ได้ — **บันทึก: ต้อง 1 query ใน Phase C** | ✗ ต้องเติม |
| Footnote density | ≥ 4/1,000 คำ | ตรวจตอน drafting | — |
| Counter-evidence queries | ≥2/thesis | 4 theses × 2+ = **เสร็จ (B-15/16)** | ✓ |
| Novelty | 15%/2 loops | ตลอดเฟส B ทุกลูปมี source ใหม่ 3-8 ชิ้น — ยังไม่อิ่มตัว | ✓ เดินต่อได้ |

## 3. สรุปสิ่งที่ Phase C (10 ลูป) ต้องทำ

1. **เพิ่ม primary sources** ให้ถึง ≥1:3 — สกัด/ยกจารึก (Chidambaram ×2 จาก Colas fulltext), NGMCP records เพิ่ม, แคตตาล็อกเก่า quote โดยตรง, ประกาศราชการ/จดหมายเหตุ NAMAMI ถ้าเว็บฟื้น
2. **ยก non-EN/TH สู่ 35% (แก้ตาม audit — gap ใหญ่สุด):** เป้าสร้างระเบียน tag บริสุทธิ์ใหม่ ~70 รายการ — ทางทำได้จริง: (ก) สกัดรายการจาก Śāstrī scan เป็น SA-entries, (ข) JA: Tanaka/Yoshizaki fulltext + JIBS ชุดเพิ่ม, (ค) TA: 3 งาน + เชยกลิ่น 103 ชิ้น (เลือก 5-10), (ง) HI: ijsmt + ananta, (จ) NE: Nepalese Culture บท Devanagari 9 บท, (ฉ) DE: Hahn/Ehlers/Teil 25, (ช) FR: Hackin/Chevillard — หมายเหตุ: ถ้าเป้า 35% ยังไม่ถึงภายใน Phase C ให้เสนอ override เป็น 20-25% พร้อมเหตุผล (ธรรมชาติของงานสาขาเป็น EN เป็นหลัก) ให้ผู้ใช้อนุมัติ
3. **Tier 2 ที่ค้าง:** NL 1 query, RU 1 query
4. **Wiland Pt.1+2** — รอผู้ใช้ดาวน์โหลด (BLOCKED)
5. **Bower/Hoernle** — หา fulltext ทาง Unpaywall/ห้องสมุด
6. **บทที่ 10:** ค้น provenance/illicit trade เฉพาะ (IJCP 10.1017/s0940739123000048)
7. จบเฟส → Unbiased Agent ปิดเฟส → **รายงานกลางทางให้ผู้ใช้รีวิวก่อนเขียนร่าง** (ตาม Outline Gate ครั้งที่ 2)
