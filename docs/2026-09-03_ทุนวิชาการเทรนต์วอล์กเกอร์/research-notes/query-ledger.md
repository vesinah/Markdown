# บันทึกการสืบค้น (Query Ledger): Trent Walker Scholarship Research

| Loop | Query / Target Source | ภาษา | เครื่องมือ | ผลลัพธ์ (รายการ) | Source ใหม่ | Novelty % | หมายเหตุ |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---|
| A-01 | " Trent Walker\ \Buddhism\ OR \Southeast Asian\ site:umich.edu OR site:berkeley.edu | EN | search_web | 8 | 8 | 100% | ตรวจพบสังกัด, การศึกษา, ผลงานหลัก |
| A-02 | \Trent Walker\ \CV\ OR \curriculum vitae\ OR \publications\ site:trentwalker.org | EN | search_web | 11 | 11 | 100% | พบเว็บไซต์ทางการและรายการผลงานทั้งหมด |
| A-03 | https://www.trentwalker.org/publications | EN/KM/TH | read_url_content | 35+ | 35 | 100% | ดึงดัชนีผลงานตีพิมพ์ งานแปล และลิงก์เอกสาร |
| A-04 | https://www.trentwalker.org/presentations | EN/KM/TH | read_url_content | 50+ | 50 | 100% | ดึงดัชนีปาฐกถา การบรรยายพิเศษ สไลด์ |
| A-05 | https://www.trentwalker.org/unfolding-buddhism | EN/KM | read_url_content | 5 | 5 | 100% | ข้อมูลวิทยานิพนธ์ปริญญาเอก 1,652 หน้า |
| A-06 | https://www.trentwalker.org/until-nirvanas-time | EN/KM | read_url_content | 10 | 5 | 50% | ข้อมูลหนังสือ Until Nirvana's Time และรางวัล KF Prize |
| A-07 | https://www.trentwalker.org/tools | EN/TH/LO | read_url_content | 6 | 6 | 100% | คีย์บอร์ดและระบบถอดอักษร Brahmi อุษาคเนย์ |
| A-08 | OpenAlex Author Search \Trent Walker\ (ID: A5004324027) | EN | scholar_api.py | 45 | 12 | 26.7% | ตรวจสอบระเบียนสากล Citation Chaining และ DOIs |
| B-01 | Batch Harvesting Google Drive (Articles & Chapters) | EN/KM/TH | python runner | 26 | 26 | 100% | ดาวน์โหลดบทความวิชาการฉบับเต็มและสไลด์ |
| B-02 | Batch Harvesting Tiny.us redirects & Translations | EN/KM/TH | python runner | 43 | 43 | 100% | ดาวน์โหลดงานแปล 24 รายการและ Liner Notes |
| B-03 | TCI-ThaiJO / Glorisun / Wisconsin Open Access | EN/TH | python requests | 4 | 4 | 100% | ดาวน์โหลดบทความเครื่องเคลือบ, จารึก 3 ราชินี, กฎหมายเขมร |
| B-04 | Verification & Health Check (75 PDF Files) | Multi | pdf_extractor.py | 75 | 0 | 0% | อิ่มตัวสมบูรณ์ (Novelty 0% - Saturation Reached) |
