# Query Log — Loop 05 (A-05 จีน: jiazhhu 夹注 / Dunhuang annotation)

วันที่: 2026-09-01 | Agent: Explorer B v2 (เอเชียตะวันออก)

## การค้นหา

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|---|-------|------|-----------|---------|------------|----------|
| 1 | jiazhu interlinear notes Chinese Buddhist manuscripts | ZH/EN | Crossref API | พบ: **Tomishima 2013 "Shinran's Use of Warichū (Interlinear Notes) in the Kyōgyōshinshō"** (JIBK 61.2), Zhang 2024 "Alignment of double-line annotation" (Springer), Medieval Eastern Turkish Interlinear Translation (JAIS 2025) | นำไปสู่ S-2024-Zhang, S-2013-Tomishima | ศัพท์ EN "interlinear notes" / JA "warichū 割注" ยืนยัน |
| 2 | Dunhuang manuscript annotation colophon xiaozhu | ZH/EN | Crossref API | พบ: Zhang Yongquan, *Manuscript Philology of Dunhuang* (Springer 2024) รวม ch. "Alignment of double-line annotation" + บรรณานุกรม Dunhuang เชิง philology | S-2024-Zhang | หนังสือแปล EN จากงานจีน มีบทเรื่อง "double-line annotation" (双行夹注) |
| 3 | warichu interlinear notes Shinran + ke-wen subdivision mark | JA/ZH/EN | Crossref API (2 calls) | warichū: ยืนยัน metadata Tomishima 2013 JIBK; ke-wen: 0 ผลตรง (noise) | — | ke-wen ยังต้องใช้แหล่งจีน/ญี่ปุ่นโดยตรง — ไม่มีเวลาในลูปนี้ |
| 4 | Zhang double-line annotation chapter PDF (Springer) | EN | Invoke-WebRequest ×2 | PDF CORRUPT (No /Root) 2 ครั้ง — Springer paywall ให้ HTML แทน PDF | — | ครั้งที่ 3 ไม่ลอง — skip; บันทึก metadata-only |

## ไฟล์ดิบค้างจากเอเจนต์ก่อนหน้า (ตรวจแล้ว ใช้ต่อ)

| ไฟล์ | --check | อ่านจริง |
|------|---------|---------|
| S-2022-yiqiejingyinyi-ibk.pdf | PASS (6 pp) | ✅ → S-2022-Li |
| S-2024-edo-mtc.pdf | PASS (25 pp) | ✅ → S-2023-Downs (ย่อ: มีเนื้อหา kunten นิดเดียว อยู่ลูป 04 ด้วย) |

## Skip log

- OpenAlex API — ยัง 429 (สะสมจาก Loop 04) → ใช้ Crossref API ทั้งลูป
- Springer link.springer.com PDF (Zhang 2024 ch.15) — CORRUPT ×2 (paywall redirect เป็น HTML) → skip; metadata-only
