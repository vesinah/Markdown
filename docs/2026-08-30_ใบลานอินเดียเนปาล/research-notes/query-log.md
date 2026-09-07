# Query Ledger — palmleaf_india_nepal

> บันทึกทุก query เพื่อ: ไม่ค้นซ้ำ คำนวณ novelty ตรวจสอบย้อนหลัง (research-methodology §2)
> **หมายเหตุบำรุงรักษา:** ไฟล์นี้ถูกเขียนใหม่ทั้งไฟล์เมื่อ 2026-09-01 หลังเกิด mojibake จาก PowerShell encoding —
> ข้อมูลราย query ฉบับเต็มยังอยู่ที่ loop_XX/query-log.md ทุกลูป (ไฟล์เหล่านั้นไม่เสียหาย) — ไฟล์กลางนี้เก็บสรุปรายกลุ่ม
> กันลืม: ห้ามแก้ไฟล์ภาษาไทยด้วย PowerShell -replace/Set-Content — ใช้ Write/Edit tool เท่านั้น

---

## Loop A-00 (Init — สืบค้นเบื้องต้น ไม่นับใน 60 ลูป)

| Loop | Query | ภาษา | เครื่องมือ | Source ใหม่ | หมายเหตุ |
|:---:|:---|:---:|:---|:---:|:---|
| A-00 | palm leaf manuscripts India / bhurjapatra birch bark / manuscript preservation Nepal / manuscriptology India / NAMAMI / NGMPP / Bakhshali / Spitzer / Gilgit / Gandhari / Jain bhandara / Newari tradition (13 ชุด) | EN | OpenAlex + webfetch | 27 | ฐานตั้งต้น — JA 3 ชิ้น → ยกระดับ Tier 1 ทันที |

---

## Phase A — 30 ลูป (สรุปรายกลุ่ม; รายละเอียดเต็มที่ loop_AXX/query-log.md ทุกลูป)

| ลูป | กลุ่ม | Source ใหม่ | ข้อค้นพบ/หมายเหตุหลัก |
|:---|:---|:---:|:---|
| A-01–A-02 | วัสดุใบลาน/ภูรชบัตร + เตรียมวัสดุ | ~18 | Wiland Pt.1 review แกน (paywall), Gunawan carik/cəmṅ, Loshali Betula, Nishanthi เตรียมใบศรีลังกา, Yu hygroscopicity, ต้มส้มมะลอก |
| A-03–A-04 | เข็มจาร + หมึก | ~10 | ยืนยันศัพท์ lekhana/lekhinī/śalākā/masiḥ จาก DDSA; Sharma 2020 เม็ดสี 6 สี; Chen 2025 หมึกทิเบต; จาร 2 เทคนิค |
| A-05–A-06 | วัสดุภูมิภาค + ปกไม้/pothī | ~12 | sāñcipāt (Ali), mahī ink, lokta; Ciotti binding typology, guṭakā, Mustang books |
| A-07–A-08 | ห้องสมุดวัด/มัตถ์ + Thanjavur | ~10 | TA แรก 3 ชิ้น; Dharmapuram 72,314 mss; แคตตาล็อก Serfoji บนใบลาน 1801; FR แรก (Chevillard BEFEO); ORI Mysore |
| A-09–A-10 | bhandara ไชนะ + śāstra-dāna | ~11 | Balbir fulltext ×3; 163+1,276 (Shah 1937); palm-leaf era 870–1441; Colas Sarasvatī Library; patli |
| A-11–A-12 | การฝังเก็บ + ภูมิอากาศ | ~9 | BL clay pot deposition ยืนยัน; Hackin 1931; Chu 2023 fulltext (tensile 78-85%); Mardzong Mustang |
| A-13–A-14 | ธรรมเนียมคัดลอก + colophons | ~17 | jīrṇoddhāra จารึกจริง; merit equation 955 CE; JA fulltext แรก (Yoshizaki); Siamese/Tai Lü/Uyghur colophons |
| A-15–A-16 | นักคัดลอก + เนวารี | ~17 | Seth patronage; Kinra munshi; NGMCP Solr 155,013 ระเบียน; Lekhamālikā records |
| A-17–A-18 | การบริจาค + พิธีกรรม | ~10 | De Simini 2016 fulltext 2 บท; dharmadeya Gilgit; Veda pāṭhaśālā; padapāṭha markers |
| A-19–A-20 | NAMAMI + แคตตาล็อกวิธีการ | ~15 | HI แรก 2 ชิ้น; NE แรก (Dahal); Śāstrī 1905 archive.org 445pp; ตัวเลขคลัง: Sarasvati Mahal 30,433 |
| A-21–A-22 | ดิจิทัล + แพลตฟอร์ม | ~12 | HTR CER 4.9% Old Nepali; LeafOCR-Line; Muktabodha/IFP ตัวเลข; ZH แรก (Beiyejing 208 ล้านหยวน); Potala 465 เล่ม |
| A-23–A-24 | แคตตาล็อกเก่า + เนปาล | ~7 | Bühler 1871, Aufrecht 1891, Bendall 1883 (N.S.=880), Śāstrī 1905 ×2 scan, Hahn 1988 DE |
| A-25–A-26 | Gandhāra + Bakhshālī | ~9 | gandhari.org CKM; Senior 140 CE; Bakhshālī 14C fol.16=224-383/fol.33=885-993; HSSA 2017 PASS |
| A-27–A-28 | Gilgit + Bower/เนปาลเก่าสุด | ~8 | Hackin fulltext-doc; UNESCO MoW primary; Hoernle JRAS ×2; Daśabhūmikasūtra "two oldest in Nepal" |
| A-29–A-30 | ไชนะเก่าสุด + อินเดียใต้ dating | ~15 | Krüger DE; Poliakova phytolith; dluwang colophon-dated 1334; หลัก dating: 14C วัดวัสดุ, palaeography นำ |

**ปิด Phase A (2026-08-31):** 30/30 ลูป — Unbiased Audit ผ่าน (quote 5/5, PDF 3/3) — source 119 → หลัง harvest ผู้ใช้ 194 → ปัจจุบัน 244

---

## User-PDF Harvest (2026-08-31)

- ผู้ใช้ดาวน์โหลด 23 ไฟล์ → Health Check 20/23 PASS (Kalpasutra = image-pdf, 2 txt = landing page)
- 3 sub-agents สกัด ~170 quotes / 24 cards (S-410–S-457) — รายละเอียดใน pdf-harvest/findings_*.md
- ขอบคุณผู้ใช้ — von Hinüber/Wille/Salomon/Śāstrī v2/Rath/Plofker ขึ้น fulltext ครบ

---

## Phase B — 20 ลูป (สรุปรายกลุ่ม; รายละเอียดที่ pdf-harvest/findings_B*.md)

| ลูป | ภารกิจ | Source ใหม่ | ผลหลัก |
|:---|:---|:---:|:---|
| B-01–B-02 | harvest ค้าง + Wiland | S-460+ | Klebanov fulltext 64pp; Wiland ยัง BLOCKED; Li 2026 พบ (ตอนหลังได้ fulltext) |
| B-03–B-04 | Author Mining ชุดแรก | S-490+ | Colas ×2, Vergiani Newar margins, Formigatti CUL, Harimoto Add.1702, Perumal — เกือบทั้งหมด fulltext จากเล่มที่มี |
| B-05–B-06 | ภาษาไทย + ฮินดี | S-470+ | **TH ถึงเป้า** (ศมส. ×2, เชยกลิ่น 103); **HI fulltext แรก** (Desai & Jain); NAMAMI ยังล่ม |
| B-07–B-08 | FA + ZH + NE | S-530+ | FA/ZH skip มีเหตุผล (off-target/CNKI ตัน); NE ถึงขั้นต่ำ (Nepalese Culture Vol.19 + Dahal + NGMCP); Helman-Ważny Kanjur paper |
| B-09–B-10 | Salomon + Balbir + Ciotti | S-510+ | Balbir 2025 Niryukti OA; Ciotti scribe-vs-owner + HTR learning-free; Salomon book chapters paywall |
| B-11–B-12 | Wujastyk + De Simini + Zotter | S-520+ | 7 fulltext (Karaṇakesarī, Anatomical Man, De Simini ×3, Colas ×2); NS dating anchors ครบสาย |
| B-13–B-14 | Forward chaining + gap 3 ประเด็น | S-540+ | 7 งาน conservation 2024-26 fulltext (RH 50% optimal ฯลฯ); **ยืนยัน gap: 14C Gilgit ไม่มี / ใต้ survival bias / Jain <11th ใช้ Balbir quote** |
| B-15–B-16 | **Adversarial Counter-Evidence** 4 theses | - | Thesis 1 re-copying: **counter แรง** (Bamiyan 275 ใบลาน, Add.1049.1, Potala) → แก้เป็นเงื่อนไขภูมิอากาศ; Thesis 2 14C: สองฝั่ง → pipeline ผสม; Thesis 3 bhandara: robustness note; Thesis 4 colophon: ต้อง cross-check |
| B-17–B-20 | Per-chapter audit + KPI | - | 10 บทครบ; KPI: authors ✓, counter-evidence ✓, **non-EN/TH 4.9-9% ✗ (gap ใหญ่สุด)**, primary:secondary ~1:6 ✗ |

**ปิด Phase B (2026-09-01):** 20/20 ลูป — Unbiased Audit ผ่าน (quote 5/5 MATCH) — แก้ 3 จุดตามรายงาน (B-09 RESOLVED, placeholder IDs, KPI ภาษาแก้เป็นตัวเลขจริง)

---

## Language Coverage สะสม (ปิด Phase B)

| ภาษา | สถานะ |
|:---|:---|
| EN | หลัก (244 ระเบียน) |
| TH/TA/HI/NE | ถึงเป้า (tag แทรก) — **tag บริสุทธิ์ต้องเพิ่มใน Phase C** |
| DE/FR/JA/SA | มี fulltext จริง แต่ tag บริสุทธิ์น้อย |
| FA/ZH | skip มีเหตุผล (multilingual-coverage §4.3) |
| NL/RU | Tier 2 — ต้อง query 1 ชุดใน Phase C |

## Phase C เป้าหมาย (10 ลูป)

1. เพิ่ม primary sources (จารึก Chidambaram จาก Colas fulltext, NGMCP records, แคตตาล็อกเก่า)
2. ยก non-EN/TH tag บริสุทธิ์ (เป้า 35% — ถ้าไม่ถึงเสนอ override 20-25% ให้ผู้ใช้อนุมัติ)
3. NL/RU Tier 2 query
4. Wiland Pt.1+2 (BLOCKED — รอผู้ใช้) / Bower fulltext / provenance ch.10
5. จบเฟส → รายงานกลางทาง → Outline Gate ครั้งที่ 2 (รอผู้ใช้อนุมัติก่อนเขียนร่าง)


---

## Phase D: Deep PDF Reading & Academic Enrichment (2026-09-03)

| คลัสเตอร์ | ภารกิจและการสกัดเชิงลึก | เอกสารหลัก | ผลลัพธ์เชิงวิชาการ |
|:---|:---|:---|:---|
| Cluster 1 | วัสดุศาสตร์, หมึก, เม็ดสี และเคมีอนุรักษ์ | 46 ไฟล์ (Chemosensors, Polymers, Sharma 2020, Ali 2022, Yu 2025) | DRIFTS spectra แยก Corypha vs Borassus, เอนไซม์ปาเปนย่อยโปรตีนบ่มใบ, สารสกัดเบทูลิน Betula utilis, Sāñcipāt เสริมแกร่งด้วย Cu2+/As3+, หมึก Mahī pH 7.1, สเปกตรัมเม็ดสี 6 สี SEM-EDX, ตารางเสถียรภาพ RH 50-55% |
| Cluster 2 | สถาปัตยกรรมหอคัมภีร์ ภัณฑาระ และการจัดเก็บ | 14 ไฟล์ (Colas 2023, Arokiaswamy 2020, Perumal 2012, Allon 2014) | จารึกเทวาลัยจิทัมพรัม ศ. 13 (Sarasvatī Library, สายงาน 30 คน, นโยบายคัดลอกใบชำรุด jīrṇṇittavai eḻutavum), หอสมุด Tanjavur Serfoji II (แคตตาล็อกใบลาน 1801, แคตตาล็อกกระดาษ 1807), ภัณฑาระใต้ดินไชนะในทะเลทรายธาร์, ปกไม้ patli และเชือกร้อย kili-mūkku, หม้อดินเผาคันธาระ BL/Senior, และคลังคัมภีร์หอคอยกิลกิต (dhāraṇakoṣṭhikā) |
| Cluster 3 | ธรรมเนียมคัดลอก จารึกท้ายคัมภีร์ Colophons | 51 ไฟล์ (The Syntax of Colophons, Baums 2022, Formigatti 2022, Yoshizaki 2023, De Simini 2016) | นิยาม granthapraśasti vs pustakapraśasti, กำเนิดจากจารึกอโศก (Capaḍa) สู่ Khotan Dharmapada, วงศ์ตระกูลอาลักษณ์เนวารี Vajrācārya 8 ชั่วคน, อาลักษณ์โมกุล Chandar Bhan Brahman, มหาทาน vidyādāna คำนวณบุญตามตัวอักษร, สมการบุญ 955 CE, โศลกรำพันความทุกข์และคำสาปแช่ง, และหลักการ cross-check ป้องกัน colophon ปลอมแปลง |
| Cluster 4 | บัญชี แคตตาล็อกประวัติศาสตร์ NGMCP และเทคโนโลยี HTR | 23 ไฟล์ (Haraprasad Śāstrī 1905/1915, Grünendahl Concordance 1989, Bendall 1883, Aufrecht 1891, ACL 2026, Nature Sci Data 2026) | แคตตาล็อก Durbar Library 16,000 รายการและคัมภีร์พุทธที่สูญหาย, Grünendahl Concordance สมานฉันท์ 4 ระบบ, NGMCP 155,013 ระเบียน, การวิพากษ์ NAMAMI Dark Archive, โมเดล HTR Old Nepali (ACL 2026) บรรลุ CER 4.9% ด้วย trocr+BERT, LeafOCR SegFormer ตัดบรรทัดหลายเหลี่ยมแก้ระบบ 3 ชั้น |
| Cluster 5 | คัมภีร์โบราณที่สุด มิติภูมิศาสตร์ และการกำหนดอายุ C-14 | 16 ไฟล์ (Salomon 1999/2003/2011, Franco 2004, Schlosser 2022, Wujastyk 2017, Aghaei 2023) | ม้วนคัมภีร์คันธาระ BL หม้อ D (ค.ศ. 10-30) และ Senior (c. 140 CE), Bajaur คัมภีร์มหายานรุ่นแรก, ข้อถกเถียง Bakhshālī (พิสูจน์หักล้าง Oxford C-14 ด้วยกฎ latest folio และความต่อเนื่องทางคณิตศาสตร์), คัมภีร์ Spitzer, Bower, Tehran C-14, การแก้ปี Add.1049.1 (828 CE) และ Add.1702 (กลาง ศ. 8), ระเบียบวิธี 3 เสาหลัก (Palaeography + Colophon + C-14) |

**ผลลัพธ์ปิดโปรเจกต์:**
- ร่างรายงาน 10 บทได้รับการจัดระเบียบเชิงอรรถ 1-to-1 สอดคล้อง 100% ด้วย `smart_footnote_sorter.py`
- สร้าง Claim-Evidence Ledgers ครบทั้ง 10 บท
- จัดทำ `00-สารบัญ.md` และ `references.md`
- ผ่านการตรวจสอบความถูกต้องด้วย `finish.ps1` สถานะ: **[OK] Validation Passed 100%**
- ย้ายเข้าสู่ `output/2026-08-30_ใบลานอินเดียเนปาล/final/` สมบูรณ์
