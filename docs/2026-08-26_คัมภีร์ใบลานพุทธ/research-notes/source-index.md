# ดัชนีแหล่งข้อมูล (Source Index)

**โปรเจกต์:** palm_leaf_buddhist_manuscripts
**อัพเดตล่าสุด:** 2026-08-26
**กฎ:** ทุกระเบียนต้องมี URL จริงและผ่าน Live Fetch ก่อนใช้อ้างอิงในร่าง — ห้าม Wikipedia/Wikidata เป็นแหล่งอ้างอิงตรง

## สถานะระเบียน

| รหัส | ความหมาย |
|:---:|:---|
| `SNIPPET` | พบจากผลค้นหา ยังไม่ได้อ่านฉบับเต็ม |
| `HARVESTED` | ดึงเนื้อหา/ไฟล์ฉบับเต็มเก็บใน loop_XX/documents/ แล้ว |
| `VERIFIED` | Unbiased Agent ทวนสอบลิงก์+เนื้อหาแล้ว |
| `DEAD` | ลิงก์เสีย/ยืนยันไม่ได้ ห้ามใช้ |

---

## Phase A00 — การสำรวจเบื้องต้น (Init Report, 2026-08-26)

| ID | Loop | Type | Author/Org | Year | Title | Venue | DOI/ISBN | URL | Status | Notes |
|:---:|:---:|:---:|:---|:---:|:---|:---|:---|:---|:---:|:---|
| S0001 | A00 | Article | (Colloque/Collège de France) | n.d. | Codicology and conservation issues of the Asian palm-leaf manuscripts of the Collège de France, Paris | Academia.edu mirror | — | https://www.academia.edu/89538211/Codicology_and_conservation_issues_of_the_Asian_palm_leaf_manuscripts_of_the_Colle_ge_de_France_Paris_ | SNIPPET | 83 ใบลาน ศตวรรษที่ 11–20; กรณี MS.SL.68 พุทธศตวรรษที่ 16 — ต้องดึงฉบับเต็ม + พิสูจน์ผู้เขียนจริง |
| S0002 | A00 | Project Report | Digital Research Institute? (dri.ac.nz) | n.d. | Inventory and Conservation of Palm Leaf Manuscripts, Wat Buranaram Thailand | dri.ac.nz | — | https://www.diri.ac.nz/publication/inventory-and-conservation-of-palm-leaf-manuscripts-wat-buranaram-thailand/ | SNIPPET | 92 มัด / 574 รายการ / 1,003 เล่ม; อักษรขอม บาลี-ไทย สมัยอยุธยา-ร.1 — ยืนยันหน่วยงานจริงตอนดึงเต็ม |
| S0003 | A00 | Institutional Page | Pali Text Society | n.d. | The Fragile Palm Leaves Foundation | palitextsociety.org | — | https://palitextsociety.org/the-fragile-palm-leaves-foundation/ | SNIPPET | FPL ศึกษาวรรณกรรมพุทธอุษาคเนย์บนใบลาน+กระดาษท้องถิ่น |
| S0004 | A00 | Institutional Page | Khyentse Foundation | n.d. | Fragile Palm Leaves Foundation (FPL) | khyentsefoundation.org | — | https://khyentsefoundation.org/kf-projects/fragile-palm-leaves-foundation-fpl/ | SNIPPET | Peter Skilling + E. Gene Smith; ก่อตั้ง FPL 1994; ต้นฉบับถูกขายเป็นของฝากตลาดเหนือไทย |
| S0005 | A00 | PDF | Book and Paper Group (AIC) | n.d. | Sacred Leaves: The Conservation and Exhibition of Early Buddhist Palm Leaves | BPG Annual v28 | — | https://cool.culturalheritage.org/coolaic/sg/bpg/annual/v28/bpga28-17.pdf | SNIPPET | 45 ใบลาน Aṣṭasāhasrikā Prajñāpāramitā นิทรรศการ — PDF ดาวน์โหลดได้ |

> Agent: เติมระเบียนใหม่ทุกครั้งที่สืบค้นในลูปจริง พร้อมบันทึกไฟล์ดิบลง `research-notes/loop_XX/documents/`

---

## Phase A Registry (ปิดเฟส 2026-08-26) — 20 ลูป / ~217 เอกสารดิบ

| Loop | Topic | Docs | Authoritative registry |
|:---:|:---|:---:|:---|
| A01 | Historiography/codicology infrastructure | 12 | loop_A01/source-list.md |
| A02 | Botany/material science | 11 | loop_A02/source-list.md |
| A03 | Writing techniques | 11 | loop_A03/source-list.md |
| A04 | Pothi anatomy/storage | 10 | loop_A04/source-list.md |
| A05 | Scripts/palaeo-dating | 12 | loop_A05/source-list.md |
| A06 | Canon languages | 10 | loop_A06/source-list.md |
| A07 | Scribal culture/colophons | 7 | loop_A07/source-list.md |
| A08 | India/Gandhara | 27 | loop_A08/source-list.md |
| A09 | Nepal | 12 | loop_A09/source-list.md |
| A10 | Sri Lanka | 12 | loop_A10/source-list.md |
| A11 | Myanmar | 7 | loop_A11/source-list.md |
| A12 | Thailand | 5 | loop_A12/source-list.md |
| A13 | Laos | 11 | loop_A13/source-list.md |
| A14 | Cambodia/Khmer Krom | 5 | loop_A14/source-list.md |
| A15 | Tai world/Yunnan | 9 | loop_A15/source-list.md |
| A16 | Indonesia/lontar | 10 | loop_A16/source-list.md |
| A17 | Central/East Asia | 11 | loop_A17/source-list.md |
| A18 | Conservation | 5 | loop_A18/source-list.md |
| A19 | Digital humanities/HTR | 14 | loop_A19/source-list.md |
| A20 | State of knowledge/MoW/trade | 6 | loop_A20/source-list.md |

**หมายเหตุการใช้งาน:** รายการระเบียนฉบับเต็มต่อลูปอยู่ใน source-list.md ของแต่ละลูป (รูปแบบตารางไม่สม่ำเสมอตาม agent) — findings.md ของแต่ละลูปคือแหล่งข้อความยืนยันพร้อม URL สำหรับ Cross-referencing ในการเขียนร่าง

---

## Phase B Registry (ปิดเฟส 2026-08-26) — 10 ลูป Citation Chaining / 109 เอกสารดิบ

| Loop | Topic | Docs | Registry |
|:---:|:---|:---:|:---|
| B01 | ho trai + Thai conventions | 12 | loop_B01/source-list.md |
| B02 | Nepal transition + catalogues + oldest Pali ms (von Hinuber 1991 ISBN verified) | 9 | loop_B02/source-list.md |
| B03 | Nissaya/bitexts (Herngseng FULL, Hundius JPTS XIV OCR, Walker Udaya/JIP) | 10 | loop_B03/source-list.md |
| B04 | Mon mss + Pyu continuity (EAP1123/EAP1432) | 13 | loop_B04/source-list.md |
| B05 | Cambodia EFEO-FEMC/BDRC/Khmer Tripitaka 110 vols 1969 RESOLVED | 8 | loop_B05/source-list.md |
| B06 | Bali lontar Buddhist (de Jong 1974 OA, EAP1241 not EAP280 correction, Sutasoma K.23) | 5 | loop_B06/source-list.md |
| B07 | Pala illuminated (Current Science pigments FULL, Cleveland 1119 CE Vikramashila, Rubin Nalanda 1073) | 23 | loop_B07/source-list.md |
| B08 | HTR/AI (Kesiman benchmark, SleukRith Set, Transkribus balinese_v1 only SEA model) | 12 | loop_B08/source-list.md |
| B09 | Conservation deep (HAL MS.SL.68 full protocol, Herit.Sci fungal, Polymers RH) | 7 | loop_B09/source-list.md |
| B10 | Field reviews (Poliakova Botany Letters 2026 PRISMA), MoW nomination PDFs x3 mined, ihchina VIII-142 primary | 10 | loop_B10/source-list.md |

**ข้อแก้ไขสำคัญจากเฟส B:** EAP280=ชวนตะวันตกไม่ใช่บาหลี (บาหลี=EAP1241); DSBC "1015" = Add.1643 ไม่ใช่ Add.1464; เนปาล palm->paper: Bendall/Shastri ยืนยันลำดับ late-14c decline -> rare ~1490 -> paper general end-16c
