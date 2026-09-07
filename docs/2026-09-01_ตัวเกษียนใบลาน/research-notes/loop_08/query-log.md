# Query Log — Loop 08 (เอเชียใต้: สันสกฤต/บาลี/คันธารี)

วันที่: 2026-09-01 | Agent: Explorer C

## การค้นหา

| # | Query | เครื่องมือ | ผลลัพธ์ | หมายเหตุ |
|---|-------|-----------|---------|----------|
| 1 | "Sanskrit manuscript commentary" (OpenAlex, cited:desc) | scholar_api.py | noise สูง | — |
| 2 | "aṭṭhakathā Pali commentary" (OpenAlex) | scholar_api.py | ผลไม่ตรง (Buddhism ทั่วไป) | — |
| 3 | "Collett Cox Buddhist manuscript commentary" (OpenAlex) | scholar_api.py | ไม่พบตรง | — |
| 4 | "Vincent Tournier Gandhari manuscript" (OpenAlex) | scholar_api.py | พบ Bhasha 2024, Annali di Ca' Foscari 2023 (ไม่ตรงหัวข้อ) | — |
| 5 | "Francesco Sferra Nepalese manuscripts" (OpenAlex) | scholar_api.py | พบงาน Isaacson/Sferra ที่เกี่ยวข้องน้อย | — |
| 6 | "Harunaga Isaacson Sanskrit manuscripts" (OpenAlex) | scholar_api.py | ผลหลักเป็น yoga/tantra ไม่ตรง codicology | — |
| 7 | "Gandhari birch bark manuscripts annotations" (OpenAlex) | scholar_api.py | 0 matches | — |
| 8 | "Gandhari manuscripts Senior collection" (OpenAlex) | scholar_api.py | พบ Salomon 2003 "The Senior Manuscripts" (JAOS, 10.2307/3217845) | สำคัญ — บันทึกจาก Crossref ด้วย |
| 9 | "Sanskrit commentary marginalia codicology" (OpenAlex, date:desc) | scholar_api.py | พบ Afterlife of Avestan Manuscripts (OAPEN 2024) | พยายามดาวน์โหลด → 403 |
| 10 | "Palm leaf manuscripts Buddhism" (OpenAlex) | scholar_api.py | พบ Spreading the Dhamma (Penn Press), Literacy and rationality in ancient India (2002) | ยังไม่ได้เปิดอ่าน |
| 11 | ṭīkā / Tika Sanskrit commentary manuscript (Internet Archive) | webfetch | พบชุด India History Resource: ยันตรราช+ṭīkā, กุมารสัมภว+ṭīkā, เมฆทูต+ṭīkā ฯลฯ; คลัง BDRC บาลี-พม่า | ยืนยันว่า ṭīkā เป็นรูปแบบ commentary ยืนยันการใช้ "with ṭīkā" |
| 12 | Gandhari manuscripts (Internet Archive) | webfetch | พบ OAPEN "Three Early Mahāyāna Treatises from Gandhāra – Bajaur Kharoṣṭhī Fragments" (2022) | ดาวน์โหลดล้มเหลว (connection closed) 3 ครั้ง → skip |
| 13 | atthakatha Pali commentary (Internet Archive) | webfetch | พบ Abhidhammapitak Attakatha, Simon Hewavitarne Bequest Vinayaṭṭhakathā (1917), Thai Dhammapada Atthakatha, Bhumibalo Nissaya | นำไปสู่การพบ Nissaya — จุดสำคัญของ Loop 08 |
| 14 | "nissaya" Pali (Internet Archive) | webfetch | พบคลัง BDRC: นิสสยะ (nissaya) จำนวนมากจากพม่า/ไทย, Bilingual Tripitaka Nissaya Bhumibalo Bhikku Series (1970-1997) | **ข้อค้นพบหลักของโปรเจกต์** |
| 15 | Bhumibalo Nissaya Intro (คัมภีร์แนะนำพระคัมภีร์ทางพระพุทธศาสนา) | IA download + HTML extraction | PASS 81MB HTML (CHOCR) → อ่านและค้นหาคำได้ | S-2025-Bhumibalo |
| 16 | Sanskrit tika commentary manuscript transmission (Crossref) | webfetch | พบ Takasaki 1975 (Ratnagotravibhaga commentary ms), Yonezawa 1999 (Prasannapada Laksanatika ms) | ยืนยันการใช้ "ṭīkā" = subcommentary ในสันสกฤต |
| 17 | टीका (tika) — **Tier 2 SA** | IA + Crossref | ยืนยัน: टीका = รูปแบบ commentary บน manuscripts/พิมพ์ของสันสกฤต อินเดีย/เนปาล | 1+ ผลลัพธ์ |
| 18 | anuvāda / अनुवाद — **Tier 2 HI** | IA (Hindi commentary) | พบ "Atha Vishwakarma Prakasha Bhasha Tika... Sanskrit Sloka With Hindi Commentary, 1895, Mumbai" | ยืนยันการใช้ "भाषा टीका/Hindi commentary" สำหรับการแปลสันสกฤต→ฮินดี — 1+ ผลลัพธ์ |
| 19 | Salomon Gandhari (Crossref) | webfetch | ยืนยัน: Salomon 2003 Senior Manuscripts (JAOS); Salomon 1990 Arapacana; v. Hinüber/Lenz/Glass 2004 Gandhari Dharmapada | 1+ ผลลัพธ์ |

## Skip log

- OAPEN PDF (Avestan / Bajaur Kharosthi) — 403 Forbidden (1), connection closed (2) → skip หลัง 3 ครั้ง; บันทึก blocked-documents.md
- OpenAlex API — 429 rate limit ต่อเนื่อง (นับรวมกับ Loop 07 เกิน 3 ครั้ง) → เปลี่ยนไปใช้ Crossref API และ Internet Archive
- scholar_api.py "Vedic manuscripts transmission oral written" — ผล noise ไม่ตรง

## สรุป Tier 2

- **SA (สันสกฤต):** टीका (ṭīkā) — ยืนยันจาก IA India History Resource + Crossref (Takasaki 1975, Yonezawa 1999) ว่าเป็นรูปแบบ commentary หลักบนสันสกฤต manuscripts
- **HI (ฮินดี):** "Sanskrit Sloka With Hindi Commentary" (IA: Atha Vishwakarma Prakasha Bhasha Tika, 1895) — ยืนยันว่าการแปลสันสกฤต→ฮินดีใช้ศัพท์ "भाषा-टीका" (bhāṣā-ṭīkā)
