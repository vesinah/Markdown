# Query Log — Loop A-14: colophons เป็นแหล่งประวัติศาสตร์ (dating, prosopography, scribal networks)

> วันที่ 2026-08-30 | OpenAlex ยัง 429 → Crossref REST ทั้งหมด

| # | เครื่องมือ | API/แหล่ง | Query | ผล |
|:--|:--|:--|:---|:---|
| 1 | scholar_api.py | OpenAlex | "colophon dating Sanskrit manuscript" | 429 (สมมติจาก loop A-13 — ไม่รีรัน, ใช้ Crossref) |
| 2 | crossref_search.py | Crossref | "manuscript colophons dating prosopography Buddhist Sanskrit" | HIT: Plofker (exact sciences colophons); **Coogan "Byzantine Manuscript Colophons and the Prosopography of Scribal Activity"** (2016); Techasiriwan & Grabowsky (Aséanie 2014); **Baums "The Earliest Colophons in the Buddhist Northwest"** (Syntax of Colophons ch.2) |
| 3 | crossref_search.py | Crossref | "Nepal manuscript colophon history" (variant: "Newar scribes manuscript production Nepal") | HIT ชุดเนปาล: **Vergiani "A Tentative History of the Sanskrit Grammatical Traditions in Nepal"** (2017, CC BY-ND); Vergiani "Scribbling in Newar on the Margins..." (2022); Shakya "Sanskrit-Newari Bilingual Buddhist Manuscript" (IBK 2016); งาน Yoshizaki ทั้งชุด (IBK) |
| 4 | crossref_search.py | Crossref | "Yoshizaki family history scribe Newar Buddhist manuscript" | HIT: **Yoshizaki 2023 IBK 71(2):785** DOI 10.4259/ibk.71.2_785 + 5 งานอื่นของ Yoshizaki (2010 donor Dhamju Vajracarya, 2019 buying/selling scriptures, 2020 Kyoto Univ. MS 106 colophon, 2022 Paṇḍit Sundarānanda) |
| 5 | document_harvester | J-Stage | **JA ทวนสอบ:** https://www.jstage.jst.go.jp/article/ibk/71/2/71_785/_pdf | **สำเร็จ!** HTTP 200 application/pdf → บันทึก yoshizaki_family_history_2023.pdf — PASS 5 หน้า (ไม่โดนบล็อกครั้งนี้) |
| 6 | crossref_search.py | Crossref | "Scribal Practice Global Cultures of Colophons" | HIT: **Bahl & Hanß eds. (Palgrave 2022)** — โดยเฉพาะ Bahl "A Prosopography in Circulation..." (South Asia Arabic colophons) |
| 7 | document_harvester | Springer | harvest Bahl ch.2 | fulltext ถูก paywall (abstract + notes เท่านั้น) — PASS แต่ metadata-level |
| 8 | crossref_search.py | Crossref | "Colas Sarasvati library Chidambaram palm leaf thirteenth century" | HIT (DOI มีอยู่แล้วใน source-index เป็น S-2023-colas-06 รอ harvest) → **harvest สำเร็จครั้งแรก** (dg_inpage_fetch) 24 หน้า PASS — จัดให้เป็น S-170 ของลูปนี้ |
| 9 | dg_inpage_fetch.js | De Gruyter | Techasiriwan "Locating Tai Lü and Tai Khün Manuscripts in Space and Time through Colophons" (*Tracing Manuscripts in Time and Space through Paratexts* 2016) | PDF 24 หน้า PASS — dating formulas + donor merit ฝั่ง Tai |
| 10 | dg_inpage_fetch.js | De Gruyter | Panarut "Structure, Functions, and Tradition of Siamese Royal Scribal Colophons" (Syntax of Colophons ch.9) | PDF 20 หน้า PASS — royal scribes, proofread 3 ครั้ง, CS dating |
| 11 | dg_inpage_fetch.js | De Gruyter | Kasai "Central Asian and Iranian Influence in Old Uyghur Buddhist Manuscripts: Book Forms and Donor Colophons" (ch.13) | PDF 26 หน้า PASS — **7-section colophon template** + merit dedication section |
| 12 | dg_inpage_fetch.js | De Gruyter | Baums "Earliest Colophons in the Buddhist Northwest" | PDF 30 หน้า PASS — Gāndhārī colophons, Khotan Dharmapada new reading (Dharmaśrava = scribe), Gilgit devadharma + puṇya formula |
| 13 | crossref_search.py | Crossref | "Manuscript Studies Schoenberg" → Ooi "Aspiring to Be a Buddha" (2022) | HIT — Project MUSE; พยายาม harvest 2 ทาง (SPC → Cloudflare; MUSE → FriendlyCaptcha) **บล็อกทั้งคู่** → metadata-only |
| 14 | crossref_search.py | Crossref | "Adhikari Position Sanskrit language Sanskrit Education Nepal" (NE-บริบท) | HIT: Haimaprabha 24(1) 2025 CC BY — harvest landing page ได้ (abstract EN) ; PDF download path ไม่เจอ → abstract-level |
| 15 | crossref_search.py | Crossref | "IJRT Style of Vagada Sangraha Chintamani Palm Leaf Manuscript" (TA-บริบท) | HIT: 10.34256/irjt22455 — พยายาม harvest; PDF ที่ได้กลายเป็นหน้า domain-parking (OrthoGenie) = **โดนเสียเลย/เนื้อหาหาย** → ลบทิ้ง, บันทึก CORRUPT-ประเภท "ไม่ใช่เอกสาร" |
| 16 | crossref_search.py | Crossref | "Houben Rath manuscript culture India contours" | HIT: *Aspects of Manuscript Culture in South India* (Brill 2012) — บท Houben & Rath intro; Rath "Varieties of Grantha Script: Date and Place of Origin" — ยังไม่ harvest (Brill chapter ราคา) |
| 17 | crossref_search.py | Crossref | "Nepal manuscript culture Samvat colophons dating Regmi Petech" | HIT ยืนยัน: Regmi 1960/1965 + Petech 1984 ใช้ colophons เป็นหลักฐานประวัติศาสตร์ (อ้างผ่าน Vergiani fn.2) |

## สรุปเทคนิค harvest วันนี้
- **J-Stage ตรงสำเร็จ** (ต่างจากรอบก่อนที่โดนบล็อก) — /ibk/71/2/71_785/_pdf โหลดได้เป็น PDF binary โดย harvester
- Project MUSE = FriendlyCaptcha บล็อก; scholarlypublishingcollective = Cloudflare บล็อก
- De Gruyter: in-page fetch ยังชนะทุก route
- จดจำ: Springer chapter = ได้แต่ abstract+notes บน landing page
