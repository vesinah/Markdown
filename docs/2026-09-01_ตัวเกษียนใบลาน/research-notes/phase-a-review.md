# Phase A Review — interlinear-gloss-palmleaf

Reviewer: Independent/Unbiased Reviewer | วันที่: 2026-09-01 | สถานะ: Phase A closed

## 1. การตรวจสอบรายลูป (Per-loop verification)

| Loop | query-log table | Source Cards (ID/Language/URL/LocalPath/quotes) | Local files exist | Verdict |
|---|---|---|---|---|
| 01 | OK (recovery-verification table) | OK — 2 cards, ID format S-[year]-[author]-[seq], verbatim quotes จาก PDF | OK (2/2 PDFs) | **OK** |
| 02 | OK | OK — 2 cards; S-2023-Scott-01 ไม่มี DOI (ยุติธรรม: thesis ไม่มี DOI, บันทึกไว้ตรงไปตรงมา) | OK (2/2) | **OK** |
| 03 | OK | OK — 3 cards; S-c19-BrahmajalaSannaya-01 เป็น image-PDF LOW-TEXT, ไม่มี quote (ปฏิเสธถูกต้อง ไม่มโน) | OK (3/3) | **OK** (1 source รออ่านภาพ) |
| 04 | OK (query table + skip log) | OK — 5 cards; S-2021-Kono-00 metadata-only ระบุชัด | OK (4/4) | **OK** (1 metadata-only) |
| 05 | OK | พบปัญหาเล็กน้อย — S-2022-Li-01 ไม่มี URL (มีแต่ชื่อวารสาร); S-2013-Tomishima-00/S-2024-Zhang-00 metadata-only ระบุชัด | OK (2/2) | **OK with minor issue** |
| 06 | OK | OK — 4 cards; S-mchanbu ไม่รู้ผู้เขียน (academia.edu block) ระบุชัดว่า snippet ไม่ใช่ตัวบทเต็ม | OK (1/1) | **OK** (2 metadata-only) |
| 07 | OK (20 queries + Tier 2) | OK — 5 cards มี URL/quotes ครบ | OK (6/6 incl. Stevenson psalter LOW-TEXT) | **OK** |
| 08 | OK | **findings.md หาย — แก้แล้ว** (สร้างใหม่จาก query-log + ไฟล์ HTML; hOCR คุณภาพต่ำ → metadata-only, ไม่มี quote เชิงเนื้อหา) | OK (1/1, 77.5 MB hOCR) | **FIXED** |

## 2. Language coverage tally (จาก source-index.md, 24 รายการ)

ระบุตามภาษาหลักของแหล่ง (object-language ในวงเล็บไม่นับเป็น source ภาษานั้น):

| Language | Count | Sources | Tier 1 <3 ? |
|---|---|---|---|
| English | 18 | loops 01–08 (เกือบทั้งหมด) | — |
| Thai | 1 | S-2025-Bhumibalo-01 | **TH flag** |
| English–Tibetan | 1 | S-RY-mchan | **TI flag** |
| Pali-Sinhala | 1 | S-c19-BrahmajalaSannaya-01 | **SI flag (รอยืนยัน)** |
| Japanese/English | 1 | S-2013-Tomishima-00 | **JA flag** |

- **PA (บาลี): 0 แหล่งภาษาบาลีโดยตรง** — ทุกแหล่งเป็นงานศึกษาภาษาอังกฤษ/ไทย *เกี่ยวกับ* บาลี → **flag**
- **SI (สิงหล): 0 แหล่งสิงหลโดยตรง** (มีแต่งานศึกษา EN + 1 สแกนใบลานรอยืนยัน) → **flag**
- **MY (พม่า): 0 แหล่งพม่าโดยตรง** (มีแต่งานศึกษา EN) → **flag**
- **ZH (จีน): 0 แหล่งจีนโดยตรง** (Zhang 2024 เป็นฉบับแปล EN; Li 2022 เป็น EN) → **flag**
- **JA (ญี่ปุ่น): 1 (metadata-only)** → **flag**
- **TI (ทิเบต): 1 (พจนานุกรม, ไม่ใช่งานวิจัย)** → **flag**
- สรุป: **Tier 1 ทั้ง 6 ภาษา (PA, SI, MY, ZH, JA, TI) ต่ำกว่า 3 แหล่งต่อภาษา — ทั้งหมด flagged**

## 3. Metadata-only / blocked sources

| Source | สถานะ | เหตุผล |
|---|---|---|
| S-2021-Kono-00 (L04) | metadata-only | De Gruyter PDF corrupt ×3, skip |
| S-2024-Zhang-00 (L05) | metadata-only | Springer paywall, PDF corrupt ×2 |
| S-2013-Tomishima-00 (L05) | metadata-only | ไม่มี PDF |
| S-mchanbu (L06) | metadata-only + ไม่รู้ผู้เขียน | academia.edu Cloudflare ×2 |
| S-2025-Ricci (L06) | metadata-only | Wiley paywall |
| S-2025-Bhumibalo-01 (L08) | metadata-only (มีไฟล์) | hOCR คุณภาพต่ำ อ่านตัวบทไม่ได้ |
| S-2003-Salomon-00 (L08) | metadata-only | Crossref เท่านั้น |
| S-c19-BrahmajalaSannaya-01 (L03) | มีไฟล์ ไม่มี quote | image-PDF LOW-TEXT (~109 คำ) |
| Blocked (ไม่เป็น source): OAPEN Avestan, OAPEN Bajaur Gandhāra, De Gruyter Griffelglossen, OpenAlex API (429 ต่อเนื่อง) | skip ครบ 3 ครั้ง | บันทึกใน query-log ทุกลูป ถูกต้องตาม resource rules |

## 4. Remaining gaps → Phase B (max 5)

1. **PA/SI/MY/ZH primary-language sources ทั้งหมด <3** — ต้องหาแหล่งในภาษาเป้าหมายเอง (nissaya พม่าตัวบท, sannaya สิงหล, ตำราจีน 双行夹注 ฉบับจีน) ไม่ใช่งานศึกษาภาษาอังกฤษ
2. **Image-PDF 2 ไฟล์รอการอ่านภาพ** — S-c19-BrahmajalaSannaya-01 (L03) และ S-2025-Bhumibalo-01 (L08 hOCR เสีย): อ่าน jp2/PDF เป็นภาพเพื่อยืนยัน metadata + ดึง quote
3. **งานที่ถูก paywall/block ยังไม่มีตัวบท** — Kono 2021, Zhang 2024, Ricci 2025, mchanbu academia.edu, Salomon 2003: หา OA alternate หรือยอมรับว่า metadata-only ถาวร
4. **mchan ทิเบตยังไม่มีงานวิชาการตัวเต็มสักชิ้น** — มีแต่พจนานุกรม + snippet; ต้องไล่ NGMCP catalogue / van Schaik / BDRC ตามที่ L06 วางแผนไว้
5. **เอกสารหลักของโปรเจกต์ (palm-leaf nissaya จริง) ยังไม่มี specimen ที่อ่านได้** — ทุกแหล่งเป็นรอง; Phase B ควร target คลังดิจิทัล (BDRC, archive.org Thai/Lanna collections) เพื่อได้ตัวอย่างใบลาน interlinear ≥1 ชิ้นที่อ่าน quote ได้

## 5. Fabrication suspects

- **ไม่พบ fabrication** — ทุก Source Card ที่มี Local Path มีไฟล์จริงบนดิสก์; ทุก quote ที่ระบุว่า "ยืนยันผ่าน Crossref/PDF" สอดคล้องกับ query-log
- ข้อสังเกตเชิงระวัง (ไม่ใช่ fabrication): (a) S-mchanbu quote เป็น snippet จากผลค้นหา ไม่ใช่ตัวบท — ไฟล์ findings ระบุสถานะนี้ชัดแล้ว ถูกต้อง; (b) S-2023-Scott-01 ไม่มี URL (thesis ไม่มี DOI) — มีไฟล์จริง จึงไม่นับ suspect; (c) S-2022-Li-01 ไม่มี URL — มีไฟล์จริง
