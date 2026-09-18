# บัญชีติดตามความคืบหน้าการอ่านและจัดทำ Source Analysis Dossiers (ฉบับแก้ไขฟื้นฟูระบบ)

> **สถานะการอัปเดต:** 2026-09-18 (ระบบ Zero Deviation Protocol ตาม dossier-master-plan.md)  
> **เอกสารกำกับงาน:** implementation_plan.md และ task.md

---

## 1. สรุปภาพรวมสถานะระบบจริง (Executive Truth Audit)

- **เป้าหมายแม่บท (dossier-master-plan.md):** **864 ฉบับ**
- **ไฟล์แท้เดิมคงไว้และผ่านเกณฑ์ (>= 100 KB):** **108 ฉบับ (12.5%)**
- **ไฟล์ผ่านเกณฑ์สะสมหลัง Round 22 (>= 100 KB):** **228 ฉบับ (26.4%)**
- **ไฟล์ที่สร้างใน Round 22 (100% PASS):** **60 ฉบับ**
- **ไฟล์ผิดพลาดที่ถูกย้ายไปกักกัน (quarantine_deviated/):** **535 ฉบับ**
- **ไฟล์ค้างท่อที่ต้องผลิตต่อตามคิว (Round 23–33):** **636 ฉบับ**

---

## 2. ตารางติดตามความคืบหน้ารายรอบ (Batch Progress Tracker)

| รอบการผลิต (Round) | จำนวนเป้าหมาย (ฉบับ) | ไฟล์ที่ผ่านเกณฑ์จริง | สถานะรอบ | เอกสารและกลุ่มเป้าหมายหลัก |
|:---:|:---:|:---:|:---:|:---|
| **Baseline** | 108 | 108 | **COMPLETED** | Crosby 2020 (8 บท), Woodward 1916 (12 บท), Rhys Davids 1896 (12 บท), ฯลฯ |
| **Round 21** | 60 | 60 | **COMPLETED (100% PASS)** | Payne Oxford Handbook (Ch 00–45 + Master), Berkwitz Handbook (Ch 00–11 + Master) |
| **Round 22** | 60 | 60 | **COMPLETED (100% PASS)** | Berkwitz Handbook (Ch 12–23), Acri Spirits & Ships (12 บท + Master), BSR Vol 20(1) (7 บท + Master), Avalon 1919 & 1914 |
| **Round 23** | 60 | 0 | **QUEUED (NEXT)** | Avalon 1914 (Part II), Bhattacharyya (Iconography, Esoterism, Sādhanamālā) |
| **Round 24** | 60 | 0 | **PENDING** | Bhattacharyya Sādhanamālā II, Bagchi Studies in Tantras, Dasgupta Intro & Obscure Cults |
| **Round 25** | 60 | 0 | **PENDING** | Dasgupta Obscure Religious Cults, Sen Medieval Mysticism, Bode, Malasart |
| **Round 26** | 60 | 0 | **PENDING** | Treesahakiat, Ponvilay, Malalasekera Pali Literature of Ceylon |
| **Round 27** | 60 | 0 | **PENDING** | Law History of Pali Literature (Vols I & II), Winternitz History of Indian Lit |
| **Round 28** | 60 | 0 | **PENDING** | Geiger Pali Literatur, Tambiah Buddhist Saints of Forest & Amulets |
| **Round 29** | 60 | 0 | **PENDING** | Gethin Foundations, Mackenzie New Buddhist Movements, Demers Guérir de soi, Neelis |
| **Round 30** | 60 | 0 | **PENDING** | Skilling How Theravada is Theravada, French Buddhism & Constitutional Law |
| **Round 31** | 60 | 0 | **PENDING** | Acri Dharma Patanjala, Maritime Asia, Inscriptions of Cambodia & Java |
| **Round 32** | 60 | 0 | **PENDING** | Selected Journal Articles 1–30 (Chutiwongs, Lamotte, Analayo, Blackburn, etc.) |
| **Round 33** | 36 | 0 | **PENDING** | Selected Journal Articles 31–62 (Baker, Kourilsky, Seeger, Shaw, Skilton, etc.) |
| **รวมทั้งสิ้น** | **864** | **228** | **26.4%** | **ผลิตครบถ้วนตามสารบัญจริง 1:1 Chapter Mapping** |

---

## 3. เกณฑ์คุณภาพที่ผ่านการตรวจสอบ 100% (Quality Assurance Checklist)

1. ทุกไฟล์มีขนาด $\ge 100	ext{ KB}$ (100,000 ไบต์) จริงบนดิสก์
2. โครงสร้าง 6 ส่วนตาม dossier-template.md ครบถ้วนทุกไฟล์
3. มี Verbatim Quotes พร้อมเลขหน้าจริงในเล่ม $\ge 20–25$ ข้อความ พร้อมคำแปลและบทวิเคราะห์
4. มีคลังศัพท์เฉพาะทาง (Glossary) $\ge 25–30$ คำ
5. ปราศจาก Emoji 100%
6. สอดคล้องกับการแมปปิ้ง 4 บท และ 31 หัวข้อย่อยตามพิมพ์เขียวแม่บท
