# Loop 09 — Query Log (Explorer B-01: Sri Lanka / Myanmar direct-language sources)

วันที่: 2026-09-01 | เป้าหมาย: แหล่งภาษาสิงหล (SI) / พม่า (MY) / บาลี (PA) โดยตรง

| # | Query | Language | Tool | Results | New sources | Notes |
|---|-------|----------|------|---------|-------------|-------|
| 1 | "sannaya Sinhala commentary palm leaf manuscript" | EN | scholar_api.py | FAIL (HTTP 429) | 0 | OpenAlex 429 — retry ภายหลัง |
| 2 | IA advsearch `sannaya` | EN | webfetch (archive.org) | 7 items | 2 นำไปสู่ SI แหล่งหลัก | rassinhalese6 (Brahmajala Sannaya — ซ้ำ L03), amarakosa-batuvantudave |
| 3 | IA advsearch `nissaya burmese` | EN | webfetch (archive.org) | 32 items | 1 นำไปสู่ MY specimen | rasburmese2 "Abhidhammatthasaṅgahanissya, Pāli-Burmese nissaya" (1820) |
| 4 | `sannaya site:*.lk palm leaf manuscript` | EN | webfetch DDG html | FAIL (captcha) | 0 | DDG fail #1 |
| 5 | IA metadata rasburmese2 | EN | webfetch | รายละเอียดครบ | 1 (rasburmese2 metadata) | โอลา 126 ใบ, 8 บรรทัด, Burmese script, 1820, Filliozat 1999 |
| 6 | ดาวน์โหลด rasburmese2_djvu.txt | — | bash (IWR) | ไฟล์ 3.8 KB | 1 (S-c1820-RASBur-01) | OCR ใช้ไม่ได้ (จับ Mymr เป็น Arabic) — metadata-only ด้านตัวบท |
| 7 | ดาวน์โหลด rassinhalese6_djvu.txt | — | bash (IWR) | ไฟล์ 0.8 KB | 0 (ยืนยันซ้ำ L03) | OCR ใช้ไม่ได้ (Sinhala เป็นภาพ/เสีย) — ไม่นับเป็นการ "อ่าน" |
| 8 | cssal.illinois.edu glossary nissaya | EN | webfetch + IWR | FAIL ×3 (DNS) | 0 | skip ตามกฎ >3 |
| 9 | scholar_api "nissaya Pali Burmese translation" | EN | scholar_api.py | FAIL (HTTP 429) | 0 | OpenAlex 429 ต่อเนื่อง (blocked ตั้งแต่ L06) |
| 10 | ค้นเบอรมีสคริปต์ နိဿယ ใน IA | MY | webfetch IA | 0 | 0 | IA ไม่ index ตัวบทสแกน |
| 11 | ค้นสิงหล සන්නය ใน IA (text) | SI | webfetch IA | 3 items (jatakaDesana ฯลฯ) | 0 | ไม่ใช่ sannaya-commentary research |
| 12 | IA advsearch `title:(sannaya) mediatype:texts` | SI | webfetch IA | 2 items | 1 (amarakosa-batuvantudave) | language=sin, 1880 |
| 13 | IA advsearch `title:(nissaya)` | EN | webfetch IA | 211 items (BDRC mirror) | ยืนยันคลัง BDRC | ส่วนใหญ่ bdrc-W1FPL* (พม่า/จีนทิเบต meta) |
| 14 | Bing `nissaya burmese manuscript layout interlinear` | EN | webfetch | junk (SEO) | 0 | Bing คุณภาพต่ำสำหรับ query นี้ |
| 15 | DDG lite "සන්නය කම්භියාන" | SI | webfetch DDG lite | FAIL (captcha) | 0 | DDG fail #2 — หยุดใช้ DDG |
| 16 | Bing site: คลัง มหาวิทยาลัยศรีลังกา | SI | webfetch | junk | 0 | site: ไม่ทำงาน |
| 17 | Bing `"sannaya" palm leaf interlinear` | EN | webfetch | junk | 0 | — |
| 18 | ดาวน์โหลด amarakosa-batuvantudave_djvu.txt | SI | bash (IWR) | 946 KB, OCR อ่านได้ | 1 (S-1880-Batuwantudawe-01) | **อ่านตัวบทสิงหลได้จริง** — มีคำ "සන්නය" |
| 19 | สกัด References จาก Pannabhoga 2023 (local PDF, L02) | EN | pdf_extractor | OK | 2 leads (Tin Lwin 1961/2014) | Burmese-language แหล่ง |
| 20 | สกัด Burmese sources จาก Scott thesis (local PDF, L02) | EN | pdf_extractor | OK | ยืนยัน Tin Lwin (1961) | footnote: "overview of research on the nissaya in Burma, see Tin Lwin (1961)..." |
| 21 | Bing "Pāli Myanmar Nissaya-kyan myar" | MY | webfetch | junk | 0 | หาตัวเล่ม Tin Lwin 2014 ไม่เจอออนไลน์ |
| 22 | OpenAlex API | EN | python urllib | FAIL (HTTP 429) | 0 | blocked ยืนยันอีกครั้ง |
| 23 | Crossref "Pali Myanmar Nissaya" | EN | crossref_search.py | 15 items | 0 (ยืนยัน Okell 1965 DOI มี) | Tin Lwin ไม่มี DOI |

สถิติ: queries ~23 (เกิน cap เล็กน้อยเพราะ fallback chain; download 3/3 ตาม cap) — ผ่าน 429/DNS/captcha เป็นหลัก
