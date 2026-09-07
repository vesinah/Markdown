# Query Log — Loop 04 (A-04 ญี่ปุ่น kunten 訓点 + เกาหลี kugyol 口訣)

วันที่: 2026-09-01 | Agent: Explorer B v2 (เอเชียตะวันออก)

## การค้นหา

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|---|-------|------|-----------|---------|------------|----------|
| 1 | kunten Japanese classical Chinese reading annotations | EN/JA | Crossref API (OpenAlex 429) | พบ: Handbook of Kanseki Bibliography ch.23–24 (De Gruyter 2024: butten kunten / kanseki kunten), Kanbun-LM 2023, The Role of kunten Materials in Sino-Japanese Hybridization (2015) | — | OpenAlex rate-limited → เปลี่ยนไป Crossref |
| 2 | Okimori Takuya kunten | EN/JA | Crossref API | พบ: **Kono 2021 "Japanophone Glosses (kunten)" (De Gruyter)**, Okimori Nihongo zenshi 2017, kunten materials vocabulary study (TASJ 2001) | นำไปสู่ S-2021-Kono | ยืนยัน Okimori เป็นชื่อหลัก (หนังสือภาษาญี่ปุ่น ไม่ OA) |
| 3 | kugyol Korean Buddhist sutra annotation | KO/EN | Crossref API | พบ: *Kugyol Yeon'gu* (구결연구, KBS Korean Bible Society) 2021–2023 เรื่อง jeomto kugyol Golden Light Sutra, Lotus Sutra kugyol 2013, word order in Beop-eung Lotus Sutra kugyol 2021 | — | มี journal เฉพาะทาง ชื่อ *Kugyol Yeon'gu* |
| 4 | Kono kunten chapter (De Gruyter) PDF → HTML | EN | Invoke-WebRequest + webfetch | PDF → CORRUPT (No /Root) ลบแล้ว; HTML fetch ว่าง 2 ครั้ง | — | skip 3 ครั้งครบ — De Gruyter block bot |

## ไฟล์ดิบค้างจากเอเจนต์ก่อนหน้า (ตรวจแล้ว ใช้ต่อ — ไม่เสีย query)

| ไฟล์ | --check | อ่านจริง |
|------|---------|---------|
| S-1965-crawcour-kambun-ia.pdf | PASS (98 pp) | ✅ → S-1965-Crawcour |
| S-2011-kugyol-holes-ala.pdf | PASS (18 pp) | ✅ → S-2011-Lee |
| S-2014-kugyol-ala.pdf | PASS (26 pp) | ✅ → S-2014-Joho |
| S-2023-wokototen-f1000.pdf | PASS (17 pp) | ✅ → S-2023-Tsutsumi |

## Skip log

- OpenAlex API — HTTP 429 (2 ครั้งในลูปนี้, สะสมเกิน 3 ครั้งจาก Loop 07–08) → ใช้ Crossref API แทน
- De Gruyter (Kono 2021 kunten chapter) — PDF CORRUPT 1 ครั้ง + HTML fetch ว่าง 2 ครั้ง = 3 ครั้ง → skip; บันทึก metadata จาก Crossref เท่านั้น (ผ่าน paywall)
