# Project Plan — manuscript_studies

## ชื่อโครงการ
รายงานวิชาการ: ระเบียบวิธีการศึกษาต้นฉบับลายมือเขียนโบราณในสามสถานการณ์ (พหุฉบับ / ฉบับแปล / เอกาตถี)

## สถานะ
- Loop 01-06: เสร็จสิ้น (ดู research-notes/loop_XX/findings.md + source-index.md)
- Sub-agents A/B/C: เก็บ findings.md + documents/ ครบ (loop_02, loop_03, loop_04)
- Saturation: ผ่านเกณฑ์ 2 ข้อ (ข้อมูลซ้ำ + citation chaining วนกลับ)
- Outline Gate: รอการอนุมัติจากผู้ใช้

## โครงร่างรายงาน (เสนอ)
1. 00-สารบัญ.md
2. 01-บทนำ.md (~5,000 คำ): นิยามปัญหาสามสถานการณ์ ศัพท์พื้นฐาน witness/text/document/archetype
3. 02-สถานการณ์ที่หนึ่ง-การสอบเทียบพหุฉบับ.md (~7,000 คำ): Lachmann/Maas, stemma, Bédier, copy-text, cladistics, CBGM, digital collation; กรณีศึกษา NT, Canterbury Tales, Genji, Hang Tuah
4. 03-สถานการณ์ที่สอง-ฉบับแปลเป็นพยานหลักฐาน.md (~6,000 คำ): versions, Vorlage, translation technique, retroversion (Tov), Hexapla, LXX/Vetus Latina/Peshitta, Nattier/Lamotte/Silk, Kalila chain
5. 04-สถานการณ์ที่สาม-ต้นฉบับเอกาตถี.md (~6,500 คำ): codex unicus, internal criticism, conjectural emendation, imaging/C14/XRF, destroyed-mss surrogates (Asser, Archimedes), lacunae (Codex Regius), Ram Khamhaeng debate, Beowulf/Roland/Gawain/Malory/Catullus
6. 05-ประเพณีตะวันออก-ไทย-และข้อถกเถียงร่วมสมัย.md (~6,000 คำ): Chen Yuan 四校法, 辑佚/辨伪学, 版本学, teihon/kōgō, อักษรศาสตร์ไทย, การชำระพระไตรปิฎก ร.5, corpus จารึก, New Philology, genetic criticism, Homer multitext
7. 06-บทสรุปและบรรณานุกรมแนะนำ.md (~4,500 คำ): ตารางสังเคราะห์สถานการณ์-ระเบียบวิธี-งานอ่าน; annotated reading list หลายภาษา
8. references.md (Chicago, 3 ประเภท)

## QA plan
- count_words.py (เกณฑ์รวม >= 25,000 คำ)
- smart_footnote_sorter.py ต่อบท
- Live-fetch spot-check ลิงก์อ้างอิง
