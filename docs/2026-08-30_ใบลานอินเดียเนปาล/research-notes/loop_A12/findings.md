# Findings — Loop A-12: สภาพการอยู่รอดของคัมภีร์ตามภูมิอากาศและสถานที่เก็บ

> เก็บข้อมูลดิบ 2026-08-30 | quote ทั้งหมดถอดจากไฟล์ที่ harvest จริงในเครื่อง

---

## S-135 | EN | secondary (journal article, peer-review, OA)
- **Bibliography:** Chu, S., Lin, L., Tian, X. "Evaluation of the Deterioration State of Historical Palm Leaf Manuscripts from Burma." *Forests* 14(9): 1775 (2023)
- **DOI:** 10.3390/f14091775
- **URL:** https://www.mdpi.com/1999-4907/14/9/1775/htm
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A12/documents/www_mdpi_com_1999_4907_14_9_1775_htm.txt
- **PDF health:** PASS (42 หน้า text-layer; harvest ผ่าน route /htm + Puppeteer)
- **Quotes verbatim:**
  - (Abstract) "The anatomy, chemical composition, and mechanical properties of the manuscripts were analyzed to find various forms of deterioration, including damage, fractures, pollution, acidification, and microbial deterioration. Specifically, the S1–S3 layers of the cell walls exhibited complete cracking, and the S2 layer showed numerous circular or nearly circular cavities caused by microbial erosion, while the middle lamella remained intact."
  - (Abstract) "The severe degradation of polysaccharides and pectin, accompanied by an increase in the relative content of lignin, caused the historical manuscripts to become more brittle. Additionally, the tensile strengths of historical palm leaf manuscripts were markedly reduced; their longitudinal tensile strength was significantly greater than their transverse tensile strength."
  - "Zhang et al. [6,7], for example, investigated the types of damage, surface damage, and pH of palm leaf manuscripts at the Potala Palace in Tibet, as well as the deterioration of palm leaf manuscripts in different preservation environments."
  - "The historical palm leaf manuscripts exhibited lower luminosity values due to aging caused by factors such as light exposure, temperature, humidity, oxygen, and biological processes."
  - (Conclusions) "Severely degraded historical palm leaf manuscripts exhibited a 78% decrease in longitudinal tensile strength and an 85% decrease in transverse tensile strength compared to their simulated counterparts."
- **Map:** กลไกความเสื่อมโทรมระดับเนื้อเยื่อพืช (S1-S3 cell wall, microbial cavities, lignin ratio) + ตัวเลข quantitative ของความเสียหาย; ยืนยันมีงานศึกษาคัมภีร์ใบลานที่ **พระราชวังโปตาลา (ทิเบต)** เทียบหลายสภาพแวดล้อม (Zhang et al. 2021/2022) — เชื่อมกับประเด็น "climate หนาวเย็น-แห้ง = อยู่รอด"
- **Citation chaining (OpenAlex cited-by, filter=cites:W4386325052 — 26 works):**
  1. **"Influence of Relative Humidity on the Mechanical Properties of Palm Leaf Manuscripts: Short-Term Effects and Long-Term Aging."** *Molecules* 29(23):5644 (2024), DOI: 10.3390/molecules29235644 — ตรงประเด็น RH ↔ สมบัติเชิงกล
  2. "The effect of traditional processing craft on the hygroscopicity of palm leaf manuscripts." *Heritage Science* (2024), DOI: 10.1186/s40494-024-01402-2
  3. "Analysis of *Aspergillus niger* isolated from ancient palm leaf manuscripts and its deterioration mechanisms." *Heritage Science* (2024), DOI: 10.1186/s40494-024-01320-3 — เชื้อรา = ศัตรูหลักในที่ชื้น
  4. "Study on the Effects of Temperature and Relative Humidity on the Hygroscopic Properties of Palm Leaf Manuscripts." *Forests* 15(10):1816 (2024), DOI: 10.3390/f15101816
  5. "Study on the Aging Effects of Relative Humidity on the Primary Chemical Components of Palm Leaf Manuscripts." *Polymers* 17(1):83 (2024/2025), DOI: 10.3390/polym17010083
  6. "Revealing the Mechanism of Ink Flaking from Surfaces of Palm Leaves (*Corypha umbraculifera*)." *Langmuir* (2024), DOI: 10.1021/acs.langmuir.3c03946
  7. "Study on the Aging Effects of Relative Humidity on the Primary Chemical Components of Palm Leaf Manuscripts" (cited-by ตรงจาก Wiland Part 2 ด้วย — cross-link สองทาง)

## S-136 | EN | secondary (journal article, peer-review, **metadata+abstract only — ไม่ใช่ OA**)
- **Bibliography:** Wiland, J., Brown, R., Fuller, L., Havelock, L., Johnson, J., Kenn, D., Kralka, P., Muzart, M., Pollard, J., Snowdon, J. "A literature review of palm leaf manuscript conservation—Part 2: historic and current conservation treatments, boxing and storage, religious and ethical issues, recommendations for best practice." *Journal of the Institute of Conservation* 46(1): 64–91 (2023)
- **DOI:** 10.1080/19455224.2023.2167095
- **URL:** https://www.tandfonline.com/doi/full/10.1080/19455224.2023.2167095
- **Local Path:** output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_A12/documents/doi_org_10_1080_19455224_2023_2167095.txt
- **PDF health:** PASS (16 หน้า text-layer) — แต่เนื้อหา = abstract 4 ภาษา + full notes/references + biographies; **body ถูก paywall** (T&F) → สถานะเชิงเนื้อหา: metadata/abstract-level
- **Quotes verbatim (จากส่วนที่เข้าถึงได้จริง):**
  - (Abstract) "Part 2 details historic treatments and current conservation techniques as informed by our review and survey, as well as storage, religious and ethical issues. It concludes with two decision-making flowcharts, and our practical recommendations for conservators."
  - (Keywords) "palm leaf / boxing / long-term storage / conservation treatment / ethical conservation / traditional preservation methods"
  - (Résumé, FR) "« Une revue littéraire de la restauration des manuscrits sur feuilles de palmier—Partie 2: traitements de conservation historiques et actuels, conditionnement et stockage, questions religieuses et éthiques, recommandations pour les meilleures pratiques »"
  - (Zusammenfassung, DE) "„Eine Literaturübersicht über die Restaurierung von Palmblattmanuskripten—Teil 2: historische und aktuelle Restaurierungsverfahren, Verpackung und Lagerung, religiöse und ethische Fragen, Empfehlungen für 'best practice' Verfahren""
  - (จากรายการอ้างอิง — งานเนปาล) "Naoko Takagi, Yoriko Chudo, and Reiko Maeda, 'Conservation of Digitisation of Rolled Palm Leaf Manuscripts in Nepal', Paper Conservators Asia Unlimited, blog post November 2005, https://www.asianart.com/articles/tamsuks/"
- **Map:** best-practice ด้าน boxing/long-term storage + religious/ethical issues (การเคารพคัมภีร์ศาสนาตอนทำการบูรณะ); supporting documentation OA: https://doi.org/10.23636/8hbd-xj49
- **Citation chaining (OpenAlex cited-by, W4321610957 — 18 works + Related list จากหน้า T&F):**
  1. "Plants used for palm-leaf manuscript production and conservation in South and Southeast Asia: a review of the literature." *Botany Letters* (2026), **Open Access** — Poliakova et al.
  2. "Stealing from Phytotherapy—Heritage Conservation with Essential Oils: A Review..." *Sustainability* 16(12):5110 (2024), DOI: 10.3390/su16125110
  3. กลุ่ม RH/อุณหภูมิ 2024 (ชุดเดียวกับ S-135 ข้อ 1-5) — ยืนยันเครือข่ายวิจัยเดียวกัน
  4. "A systematically evolved method for the effective use of essential oil blends for the structural maintenance of palm leaf manuscripts." *JIC* (2024, Shanmugasundaram et al.)

## S-137 | EN | secondary (book chapter, Brill — metadata-level) — เก็บจาก Crossref
- **Bibliography:** Skumanov, ? "Preservation of the Mardzong Manuscripts Collection." ใน *The Mardzong Manuscripts* (2020)
- **DOI:** 10.1163/9789004443723_010
- **URL:** https://doi.org/10.1163/9789004443723_010
- **Local Path:** (รอ harvest — Brill)
- **Map:** ชุดคัมภีร์ Mardzong (Mustang, Nepal) — กรณีศึกษาการอนุรักษ์คัมภีร์ในภูมิอากาศหิมาลัยแห้ง-หนาว; เชื่อมกับ Helman-Ważny 2024 (S-xxx-76, Mustang จาก loop_A06)

## S-138 | EN | secondary (journal article, OA บางส่วน — เก็บจาก Crossref) — ยังไม่ harvest
- **Bibliography:** Wu, ?, Li, ? "Enhancing the Durability of Palm-Leaf Manuscripts: A Comparative Study of CPAM and CQAS Encapsulation Materials." *Coatings* 15(10):1178 (2025)
- **DOI:** 10.3390/coatings15101178
- **URL:** https://www.mdpi.com/2073-8964/15/10/1178
- **Local Path:** (รอ harvest)
- **Map:** เทคโนโลยี encapsulation ยุคใหม่ — เสริมแนว "แก้ปัญหาความชื้น/แมลง" ด้วยวัสดุ

## คีย์เวิร์ด/ภาษาที่พบจริง
- **FR (จริงจาก S-136 Résumé):** "restauration des manuscrits sur feuilles de palmier", "conditionnement et stockage", "questions religieuses et éthiques"
- **DE (จริงจาก S-136 Zusammenfassung):** "Palmblattmanuskripte", "Restaurierungsverfahren", "Verpackung und Lagerung", "religiöse und ethische Fragen", "best practice"
- **EN เทคนิค:** boxing, long-term storage, hygroscopicity, relative humidity, *Aspergillus niger*, encapsulation (CPAM/CQAS), leaf-casting, kammavaca (lacquered Burmese palm leaf)
- **ZH (จริง ปรากฏในหน้า T&F ที่ harvest — ฉบับแปล abstract จีนของ Wiland):** 棕榈叶手稿 (palm leaf manuscripts), 存储(storage), 宗教和伦理问题
- **NE/HI:** ยังไม่พบคำเฉพาะใน fulltext ลูปนี้ (งาน Nepal ที่พบเป็น EN ล้วน: Takagi et al. blog, Mardzong chapter)

## ข้อค้นพบรวม (เฉพาะสิ่งที่มีหลักฐานในเอกสาร)
1. **กลไกความเสื่อม quantitative:** คัมภีร์ใบลานเก่า (พม่า) เสียความแข็งแรง 78% (ตามยาว) / 85% (ขวาง) เทียบตัวอย่างจำลอง (S-135 Conclusions)
2. **ความชื้นสัมพัทธ์ = ตัวแปรหลักของทศวรรษ 2024:** cited-by ของทั้ง Chu และ Wiland ชี้ไปกลุ่มงาน RH อุณหภูมิ hygroscopicity แบบเดียวกัน (จีน) — เส้นทางวิจัยร้อนที่ควรตามต่อในลูปหน้า
3. **ทิเบต/พระราชวังโปตาลา:** Chu อ้าง Zhang et al. (2021 *Restaurator* 42:147-168; 2022 *Arch. Sci.* 22:501-519) ว่าศึกษา palm leaf ที่ Potala Palace หลายสภาพแวดล้อม — หลักฐานเชิงประจักษ์เรื่อง "ภูมิอากาศหนาว-แห้งช่วยการอยู่รอด" อยู่ในงานสายนี้ (ยังไม่ harvest)
4. **Mardzong (Mustang):** บท Brill 2020 = กรณี preservation ในร่องหิน/ถ้ำหิมาลัย — อีกหลักฐาน "สถานที่เก็บแบบธรรมชาติในเขตหนาว-แห้ง"
5. **งาน BL Part 1 (2022, DOI: 10.1080/19455224.2022.2115093):** อยู่ชุดเดียวกับ Part 2 — ครอบคลุม leaf preparation + damage types; ควรเก็บคู่กันในอนาคต

## Gap ที่ยังไม่พบ
- **Fulltext ภาษาไทย-บริบทแห้ง:** ยังไม่เจองานเปรียบเทียบภูมิอากาศแห้ง (เช่น เชียงใหม่/ล้านนา vs ภาคกลางชื้น) โดยตรง
- **งาน NE (เนปาลี) เรื่องการเก็บรักษา:** ยังไม่พบ fulltext — มีแต่งาน EN เกี่ยวกับเนปาล
- **HI (ฮินดี) fulltext เรื่อง deterioration/insects:** ยังไม่พบ (จาก Crossref เจอแต่ entomology ทั่วไป)
- **งานเชิงระบบ "climate zone ↔ manuscript survival" แบบ quantitative ข้ามภูมิภาค** — ยังไม่พบงานที่ทำแบบนี้โดยตรง (มีแต่ case studies แยกชิ้น)
- Camuffo 2019 (humidity deterioration theory) — ยังไม่ harvest (Elsevier)
