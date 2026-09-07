# การประเมินความพร้อมข้อมูลสำหรับรายงาน 5 บท

**วันที่:** 2026-09-02  
**ผู้ประเมิน:** OpenCode Agent  
**วัตถุประสงค์:** ประเมินว่าข้อมูลที่รวบรวมไว้แล้ว (13 loops, 34 sources) เพียงพอสำหรับเขียนรายงานวิชาการ 5 บท (บทละ ≥10,000 คำ) หรือไม่

---

## โจทย์วิจัยหลัก (ทบทวน)

**คำถามวิจัยกลาง:**
> "การจัดองค์ประกอบโครงสร้าง **interlinear gloss** (ตัวเกษียน) — ยกบาลีเป็นบรรทัดหลักตัวใหญ่ + แปลภาษาถิ่นตัวเล็กประกอบบน-ล่างบรรทัด มีตัวเลขลำดับ — ปรากฏในวัฒนธรรมคัมภีร์พุทธศาสนาใดอีกบ้าง (นอกจากไทย)? มีรากที่ไหน? ไทยพัฒนาเองหรือรับมา?"

**คำถามย่อย:**
1. พม่า ศรีลังกา มี interlinear gloss (แยกบรรทัด) หรือแค่ nissaya/sannaya (continuous bitext)?
2. มหายาน/วัชรยาน (จีน ทิเบต ญี่ปุ่น) มีระบบนี้ไหม?
3. ยุโรปยุคกลาง (glossa interlinearis) เป็น parallel case ที่เปรียบเทียบได้ไหม?
4. South Asia (India/Sri Lanka) มีต้นแบบไหม? หรือว่าไทยคิดค้นเอง?

**ขอบเขตภาษา:** EN, DE, FR, ZH, JA, HI, SI, SA, Pali, TI, Burmese (11 ภาษา)

**ขอบเขตเนื้อหา (5 บท):**
- **บทที่ 0:** ประมวล interlinear gloss ในโลก (ยุคกลาง) + ศัพท์วิชาการ + ระเบียบวิธี + ประเด็นร่วมสมัย 2021-2026
- **บทที่ 1:** หัวใจ/สรุปเนื้อหาโดยรวม
- **บทที่ 2:** เอเชียตะวันออกเฉียงใต้ (ตัวเกษียน, nissaya, sannaya)
- **บทที่ 3:** เอเชียใต้ + เส้นทางสายไหม (South Asia, Tibet, Dunhuang, มหายาน/วัชรยาน)
- **บทที่ 4:** ตารางประมวล bibliography + สรุป

---

## การประเมินตามบท (Coverage vs. Requirement)

### บทที่ 0: ประมวล Interlinear Gloss ในโลก

**ต้องการ:**
- ภาพรวมวัฒนธรรม gloss ข้ามวัฒนธรรม (ยุโรป, เอเชีย, ตะวันออกกลาง)
- ศัพท์วิชาการ: gloss, annotation, scholia, ṭīkā, mchan, kunten, nissaya, sannaya
- ระเบียบวิธี: codicology, manuscript studies, comparative philology
- ประเด็นร่วมสมัย 2021-2026: digital humanities, HTR, comparative manuscript studies

**ข้อมูลที่มี:**
- ✓ ยุโรป (Glossa Ordinaria): 5 sources (Güzeldal 2025, Grifoni 2026, Andrée 2016, Hertogh 2025, Boundaries 2025) — **อิ่มตัว 80%**
- ✓ ญี่ปุ่น kunten: 4 sources (Crawcour, Lee, Joho, Tsutsumi) — **อิ่มตัว 70%**
- ⚠️ จีน jiazzhu: 3 sources แต่ shallow (Li 2022, Downs 2023, Tomishima 2013) — **อิ่มตัว 40%**
- ⚠️ ทิเบต mchan: 1 dictionary + 1 Dunhuang paper — **อิ่มตัว 20%**
- ✗ ตะวันออกกลาง (Judeo-Arabic glossed manuscripts, Aramaic targum) — **ไม่มีเลย 0%**

**ประเมิน:** ⚠️ **พอเขียนได้ 60%** — สามารถเขียนได้ โดยยอมรับว่าครอบคลุมแค่ยุโรป + East Asia; ต้องเพิ่ม:
1. งาน review article เกี่ยวกับ comparative manuscript annotation (ค้น "interlinear gloss medieval manuscripts comparative")
2. ศัพท์วิชาการเพิ่ม: lemmatization, signes de renvoi, rubric, mise-en-page
3. ประเด็นร่วมสมัย: ค้น recent papers 2021-2026 (OpenAlex filter `publication_year:2021-2026` + keywords "manuscript annotation digital humanities")

**ความยาวคาดการณ์:** ~12,000 คำ (เขียนได้ แต่จะเป็น survey ไม่ลึกมาก)

---

### บทที่ 1: หัวใจ/สรุปเนื้อหาโดยรวม

**ต้องการ:**
- สรุปคำตอบคำถามวิจัยหลัก
- เปรียบเทียบระบบ interlinear gloss ข้ามวัฒนธรรม
- ข้อสรุปว่าไทยรับมาจากไหนหรือพัฒนาเอง

**ข้อมูลที่มี:**
- ✓ ตัวเกษียนไทย: Walker 2020 (JAOS) — **อิ่มตัว 80%** แต่ขาดภาพ
- ✓ Nissaya พม่า: Pannabhoga 2023, Scott 2023 — **อิ่มตัว 70%** ยืนยัน continuous ไม่ใช่ interlinear
- ⚠️ Sannaya สิงหล: Deegalle 2023, Nishanthi 2022 — **อิ่มตัว 50%** ไม่มีข้อมูล codicology layout ชัดเจน
- ✓ Kunten ญี่ปุ่น: 4 sources — **อิ่มตัว 70%** ยืนยัน interlinear
- ⚠️ South Asia negative evidence: Bhumibalo (ยังไม่อ่าน), Salomon (metadata) — **อิ่มตัว 30%**

**ประเมิน:** ⚠️ **เขียนได้ 50%** — สามารถเขียนได้ แต่จะเป็นสรุปข้ามวัฒนธรรมที่ shallow; **ขาดหลักฐานสำคัญ:**
1. **ไม่มีภาพตัวเกษียนไทย** → ไม่สามารถเปรียบเทียบ visual layout กับ kunten/glossa จริง ๆ ได้
2. **Sannaya layout ไม่ชัด** → ตอบไม่ได้ว่าลังกามี interlinear หรือไม่
3. **South Asia origins ยังไม่ได้ขุด** → ตอบไม่ได้ว่าไทยรับมาจาก India/Lanka หรือพัฒนาเอง

**ต้องเพิ่ม:**
- อ่าน Bhumibalo Nissaya จริง (PDF มีแล้วใน loop_08)
- ค้น sannaya layout codicology (ลอง U. Kelaniya digital library, SOAS)
- ค้น "Pali interlinear translation Southeast Asia origins" เพิ่ม

**ความยาวคาดการณ์:** ~8,000-10,000 คำ (ขั้นต่ำผ่าน แต่จะเป็น tentative conclusion)

---

### บทที่ 2: เอเชียตะวันออกเฉียงใต้ (ตัวเกษียน, nissaya, sannaya)

**ต้องการ:**
- รายละเอียดลึกเกี่ยวกับ 3 ระบบ: ไทย พม่า ลังกา
- เปรียบเทียบ layout: interlinear vs continuous
- ตัวอย่าง manuscript พร้อมภาพ
- การแพร่หลาย, ยุคสมัย, corpus

**ข้อมูลที่มี:**

#### ไทย (ตัวเกษียน):
- ✓ Walker 2020 — **อิ่มตัว 85%** (ครอบคลุมดี: terminology, corpus 7 texts, layout description, ยุคสมัย)
- ✓ McDaniel 2002 — curriculum context
- ✗ Kongkaew 2001/2002 (Thai paleography) — **blocked**
- ✗ ภาพจริง — **blocked (Walker Fig. 1 URL obsolete)**

**ประเมิน ไทย:** ⚠️ **เขียนได้ 70%** — เขียนได้โดยอาศัย Walker เป็นหลัก แต่ขาดภาพประกอบและ Thai-language scholarship

#### พม่า (nissaya):
- ✓ Pannabhoga 2023 — **อิ่มตัว 75%** (continuous bitext, word-by-word, classroom practice)
- ✓ Scott 2023 PhD — **อิ่มตัว 70%** (politics of commentary, Mingun Jetavana)
- ⚠️ Ruiz-Falqués 2017/2022 — **blocked (paywall)** แต่เป็น authority ในสาขา
- ⚠️ BDRC nissaya manuscripts (95 records) — **มีแต่ยังไม่ได้อ่านสักเล่ม**

**ประเมิน พม่า:** ⚠️ **เขียนได้ 60%** — มี framework ดีจาก Pannabhoga/Scott แต่ **ขาด primary manuscript example** → ต้องเปิด BDRC อ่าน 1-2 เล่มจริง

#### ลังกา (sannaya):
- ⚠️ Deegalle 2023 — เกี่ยวกับ modern Tripitaka translation (20th c.) ไม่ใช่ medieval sannaya
- ⚠️ Nishanthi 2022 — preservation (ไม่ใช่ codicology)
- ⚠️ Brahmajala Sannaya palm-leaf scan — **มีแต่เป็น image-only PDF ยังไม่ได้ HTR/อ่าน**
- ✗ Blackburn 1999 (JAS) — **blocked (paywall)** แต่เป็นงานหลักเกี่ยวกับ 18th-c. Lankan sannaya practice
- ✗ Sinhala-language scholarship — **ไม่มีเลย**

**ประเมิน ลังกา:** ✗ **เขียนไม่ได้ 30%** — **gap ใหญ่ที่สุดในบทนี้** ไม่มีข้อมูลเกี่ยวกับ sannaya layout codicology เลย; ต้องเพิ่ม:
1. อ่าน Brahmajala Sannaya PDF (ใช้ Read tool อ่านภาพ หรือ HTR ถ้าเป็น searchable)
2. ค้นเพิ่ม: "sannaya manuscript layout", "Sinhala Pali translation palm leaf", U. Kelaniya / U. Peradeniya repositories
3. ลอง webfetch https://www.jstor.org/stable/2662253 (Blackburn 1999) อีกครั้ง หรือหา preprint

**ประเมินบทที่ 2 รวม:** ⚠️ **เขียนได้ 55%** — ไทย+พม่าเขียนได้พอใช้ แต่ลังกาขาดหายไปเกือบหมด → **ต้องเสริมลังกาก่อน** มิฉะนั้นจะเป็นบทที่ไม่สมดุล

**ความยาวคาดการณ์:** ~15,000 คำ (ถ้าเสริมลังกา); ~10,000 คำ (ถ้าเขียนตามที่มี แต่จะบิดเบี้ยวไปทางไทย+พม่ามาก)

---

### บทที่ 3: เอเชียใต้ + เส้นทางสายไหม (South Asia, Tibet, Dunhuang, มหายาน/วัชรยาน)

**ต้องการ:**
- South Asia origins: Sanskrit ṭīkā, Pali aṭṭhakathā มี interlinear gloss หรือไม่?
- Tibet mchan: interlinear หรือ marginal?
- Dunhuang (จีน+ทิเบต): jiazzhu / ke-wen มีระบบ interlinear หรือไม่?
- ตอบคำถาม: ไทยรับจากเส้นทางสายไหมหรือไม่?

**ข้อมูลที่มี:**

#### South Asia (India):
- ⚠️ Bhumibalo Nissaya (Thai-Pali) — **มี PDF แต่ยังไม่ได้อ่าน** (loop_08/documents/S-2025-Bhumibalo-Nissaya-Intro.html)
- ⚠️ Salomon 2003 (Gandhāran scrolls) — **metadata-only** ไม่ได้ fulltext
- ✗ Sanskrit ṭīkā codicology — **ไม่มีงานเลย**
- ✗ Pali aṭṭhakathā manuscript layout — **ไม่มีงานเลย**

**ประเมิน South Asia:** ✗ **เขียนไม่ได้ 25%** — **gap วิกฤต** ไม่มีงานเกี่ยวกับ South Asian manuscript annotation layout; ต้องเพิ่ม:
1. **อ่าน Bhumibalo จริง ๆ** (ด่วนที่สุด)
2. ค้น "Sanskrit commentary manuscripts codicology", "Pali atthakatha manuscript layout", "Indian manuscript marginalia"
3. ลอง Nepalese-German Manuscript Cataloguing Project (NGMCP), Cambridge Digital Library Indic manuscripts

#### ทิเบต (mchan):
- ⚠️ Rangjung Yeshe dictionary entry "mchan" — **อิ่มตัว 15%** (แค่คำนิยาม)
- ⚠️ Terzi & Whitfield 2024 (Dunhuang bundles) — **อิ่มตัว 30%** (เกี่ยวกับ physical arrangement ไม่ใช่ annotation)
- ✗ Tibetan manuscript mchan fulltext example — **ไม่มีเลย**
- ✗ Sam van Schaik, Peter Skilling (Tibetan mss experts) — **ไม่ได้อ้าง**

**ประเมิน ทิเบต:** ✗ **เขียนไม่ได้ 20%** — **ขาดหลักฐานหลักเกือบหมด**; ต้องเพิ่ม:
1. ค้น "Tibetan mchan manuscript examples", "Tibetan interlinear annotation", Sam van Schaik IDP
2. BDRC (Buddhist Digital Resource Center) — ค้น "mchan" ใน Tibetan manuscript catalog
3. International Dunhuang Project (IDP) — ค้น Tibetan manuscripts with annotations

#### จีน (jiazzhu / Dunhuang):
- ⚠️ Li 2022 (Yiqiejingyinyi) — **อิ่มตัว 45%** (เกี่ยวกับ "small characters in two lines" form)
- ⚠️ Downs 2023 (Edo Romance of Three Kingdoms) — **อิ่มตัว 35%** (ญี่ปุ่น ไม่ใช่จีนล้วน)
- ⚠️ Tomishima 2013 (Shinran warichū) — **อิ่มตัว 30%** (ญี่ปุ่นยุคกลาง)
- ✗ Dunhuang Chinese Buddhist manuscripts annotation — **ไม่มีงานตรงประเด็น**

**ประเมิน จีน:** ⚠️ **เขียนได้ 40%** — มี Li 2022 เป็นฐาน แต่ shallow; ต้องเพิ่ม:
1. ค้น "Dunhuang Buddhist manuscripts interlinear notes", "夹注 敦煌 佛经", "Chinese Buddhist canon annotation"
2. IDP Dunhuang manuscripts database

**ประเมินบทที่ 3 รวม:** ✗ **เขียนไม่ได้ 30%** — **gap ใหญ่ที่สุดในทั้งรายงาน** ทั้ง 3 ภูมิภาค (South Asia, Tibet, China) มีข้อมูลน้อยมาก → **ต้องขุดเพิ่มทั้งหมด** มิฉะนั้นบทนี้จะกลายเป็น "เราไม่มีข้อมูล" 10,000 คำ

**ความยาวคาดการณ์:** ~8,000 คำ (ถ้าเขียนตามที่มี = บทสั้นที่สุด + ไม่ตอบคำถาม); ~14,000 คำ (ถ้าเสริมข้อมูล)

---

### บทที่ 4: ตารางประมวล Bibliography + สรุป

**ต้องการ:**
- ตารางรายการอ้างอิงทั้งหมด (ผู้เขียน, ปี, ชื่อ, วารสาร, DOI/URL, ข้อสรุปหลัก)
- เรียงตามผู้เขียน (A-Z) และเวลา
- สรุปแต่ละงานสั้น ๆ

**ข้อมูลที่มี:**
- ✓ source-index.md — 34 sources พร้อม metadata
- ✓ blocked-documents.md — 18 items พร้อมเหตุผล
- ⚠️ ข้อสรุปแต่ละงาน — **มีใน findings.md แต่ละ loop แต่ยังไม่ได้รวบรวม**

**ประเมิน:** ✓ **เขียนได้ 90%** — มี source portfolio ครบ แค่ต้องรวบรวมและจัดรูปแบบ; ต้องทำ:
1. รวบรวม key quotes/findings จากทุก loop ลงตาราง
2. เขียนสรุป 50-100 คำต่อ source
3. เพิ่มคอลัมน์: Relevance to research question, Key finding, Limitation

**ความยาวคาดการณ์:** ~10,000-12,000 คำ (ตาราง + สรุป descriptive)

---

## สรุปการประเมินภาพรวม

| บท | ความพร้อม | อิ่มตัว | เขียนได้ | ความยาวคาด | จุดอ่อนหลัก |
|----|----------|---------|---------|-----------|------------|
| 0. Interlinear Gloss ในโลก | ⚠️ | 60% | Yes (shallow) | 12,000 | ขาด Central Asia, Middle East; ขาดงาน recent trends 2021-26 |
| 1. หัวใจ/สรุป | ⚠️ | 50% | Yes (tentative) | 8,000-10,000 | ขาดภาพตัวเกษียน; sannaya layout ไม่ชัด; South Asia origins ยังไม่ขุด |
| 2. เอเชียตะวันออกเฉียงใต้ | ⚠️ | 55% | Yes (unbalanced) | 10,000-15,000 | **ลังกา gap ใหญ่** (30% coverage); ขาด primary mss examples; ขาดภาพ |
| 3. เอเชียใต้+เส้นทางสายไหม | ✗ | 30% | **No** | 8,000 | **gap วิกฤตทั้งบท** — South Asia 25%, Tibet 20%, China 40% → ไม่ตอบคำถามวิจัย |
| 4. ตารางประมวล | ✓ | 90% | Yes | 10,000-12,000 | แค่ต้องรวบรวม findings |

### คะแนนรวม: ⚠️ **พร้อม 56%** — **ยังเขียนไม่ได้**

**เหตุผล:**
1. **บทที่ 3 ยังเขียนไม่ได้เลย** (30% coverage) — นี่คือบทหลักที่ตอบคำถาม "ไทยรับมาจากไหน"
2. **บทที่ 2 ไม่สมดุล** — ลังกา (sannaya) ขาดข้อมูล codicology เกือบหมด
3. **ขาดภาพประกอบ** — ไม่มีภาพตัวเกษียนไทย, nissaya, sannaya, mchan สักรูป
4. **Blocked critical sources** — Kongkaew 2001/2002 (Thai), Blackburn 1999 (Sinhala), Ruiz-Falqués 2017 (Burmese) ทั้งหมดเป็น authority ในสาขา

---

## จุดบอด (Blind Spots) ที่ต้องแก้ด่วน

### 1. **South Asia Origins (บทที่ 3) — Critical Gap**
**ปัญหา:** ไม่มีงานเกี่ยวกับ Sanskrit ṭīkā / Pali aṭṭhakathā manuscript layout เลย → ตอบไม่ได้ว่า interlinear gloss มีใน South Asia หรือไม่
**ต้องเพิ่ม:**
- อ่าน Bhumibalo Nissaya ที่มีอยู่แล้ว (ด่วนสุด)
- ค้น: "Sanskrit manuscript commentary layout", "Pali atthakatha codicology", "Nepalese Buddhist manuscripts annotations"
- ลอง: NGMCP, Cambridge Digital Library, GRETIL (Göttingen Register of Electronic Texts in Indian Languages)

### 2. **Sinhala Sannaya Layout (บทที่ 2) — Major Gap**
**ปัญหา:** มี sources 3 รายการแต่ไม่มีงานอธิบาย sannaya layout ว่าเป็น interlinear หรือ continuous
**ต้องเพิ่ม:**
- อ่าน Brahmajala Sannaya PDF ที่มีอยู่ (ใช้ Read tool ดูภาพ)
- ค้น: "sannaya manuscript codicology", "Sinhala palm leaf layout", U. Kelaniya Digital Library
- ลอง access Blackburn 1999 (JSTOR) อีกครั้ง (หรือหา author's ResearchGate/Academia.edu)

### 3. **Tibetan mchan (บทที่ 3) — Major Gap**
**ปัญหา:** แค่ dictionary entry ไม่มี manuscript example
**ต้องเพิ่ม:**
- ค้น BDRC: "mchan manuscript", Tibetan text with annotations
- ค้น IDP: Tibetan Dunhuang manuscripts with glosses
- ค้นงาน: Sam van Schaik, Peter Skilling, Brandon Dotson (Tibetan mss experts)

### 4. **Visual Evidence ทั้งหมด (ทุกบท) — Critical Gap**
**ปัญหา:** ไม่มีภาพสักรูป
**ต้องเพิ่ม:**
- ลอง DLNTM new interface: https://iiif.crossasia.org/s/lanna
- ลอง alternative repositories: Siam Society, Cornell, Brown (ค้นตรงจาก library catalogs)
- ใช้ภาพจาก papers ที่ดาวน์โหลดแล้ว (Grifoni 2026, Andrée 2016 อาจมีภาพ Glossa Ordinaria)

### 5. **Thai-Language & Vernacular Scholarship (บทที่ 2) — Moderate Gap**
**ปัญหา:** Kongkaew 2001/2002 blocked; Sinhala 0 sources; Burmese 0 sources
**ต้องเพิ่ม:**
- ค้น ThaiLIS / Thai Digital Collection (TDC): "ตัวเกษียน", "อักษรเกษียน"
- ค้น Sinhala scholarship: University of Colombo / Kelaniya repositories
- ค้น Burmese scholarship: Yangon University / Mandalay Digital Library (ถ้ามี)

---

## แผนการเสริมข้อมูล (Priority Order)

### Phase C1: Critical Gaps (ต้องทำก่อนเขียน — 4-6 loops เพิ่ม)

**Priority 1 (ด่วนสุด — South Asia Origins):**
- **Loop C-01:** อ่าน Bhumibalo Nissaya + ค้น South Asia commentary manuscripts (NGMCP, Cambridge)
- **เป้าหมาย:** ตอบคำถาม "South Asia มี interlinear gloss หรือไม่?"
- **คาด:** 3-5 sources ใหม่

**Priority 2 (ด่วน — Sinhala Sannaya):**
- **Loop C-02:** อ่าน Brahmajala Sannaya PDF + ค้น sannaya layout + U. Kelaniya + ลอง Blackburn 1999 อีกครั้ง
- **เป้าหมาย:** ได้คำอธิบาย sannaya layout (interlinear หรือ continuous)
- **คาด:** 2-4 sources ใหม่ + 1 manuscript evidence

**Priority 3 (สำคัญ — Tibetan mchan):**
- **Loop C-03:** ค้น BDRC + IDP Tibetan + Sam van Schaik papers
- **เป้าหมาย:** ได้ mchan manuscript example อย่างน้อย 1 รายการ
- **คาด:** 2-3 sources ใหม่ + 1 manuscript

**Priority 4 (สำคัญ — Visual Evidence Thai):**
- **Loop C-04:** ลอง DLNTM new interface + alternative repositories + extract images from existing PDFs
- **เป้าหมาย:** ได้ภาพตัวเกษียนไทยอย่างน้อย 1 รูป
- **คาด:** 1-2 images

### Phase C2: Moderate Gaps (ทำถ้าเวลาพอ — 2-3 loops)

**Priority 5:** Chinese jiazzhu Dunhuang — ค้น IDP + "夹注 敦煌"  
**Priority 6:** Recent trends 2021-2026 — filter OpenAlex `publication_year:2021-2026` + "manuscript annotation digital"  
**Priority 7:** Thai-language sources — ThaiLIS / TDC / Siam Society Library

---

## คำแนะนำสุดท้าย

**สถานการณ์:** ข้อมูลที่มีตอนนี้ (34 sources, 13 loops) **ไม่เพียงพอ** สำหรับเขียนรายงาน 5 บท 50,000+ คำ ที่ตอบคำถามวิจัยได้ครบถ้วน

**ควรทำ:**
1. **รัน Phase C1 (4 loops) ก่อน** — แก้ critical gaps (South Asia, Sinhala, Tibet, Thai images)
2. **หลังจากนั้นประเมินอีกครั้ง** — ถ้า Phase C1 สำเร็จ coverage จะขึ้นเป็น ~75% เขียนได้
3. **ถ้ายังไม่พอ รัน Phase C2** (2-3 loops เพิ่ม)
4. **เมื่อ coverage ≥75% ทุกบท** → สร้าง Detailed Outline → เสนอผู้ใช้อนุมัติ → เขียนรายงาน

**ประมาณเวลา:**
- Phase C1 (4 loops): ~4-6 ชั่วโมง (ถ้าใช้ agents คู่ขนาน)
- Phase C2 (optional): ~2-3 ชั่วโมง
- Outline: ~1 ชั่วโมง
- เขียนรายงาน 5 บท: ~12-16 ชั่วโมง (ถ้าใช้ agents แยกบท)

**ต้องการให้เริ่ม Phase C1 ตอนนี้ไหมครับ?**
