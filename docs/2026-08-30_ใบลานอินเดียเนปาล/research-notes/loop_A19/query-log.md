# Loop A-19 — Query Log: NAMAMI และการสำรวจคัมภีร์ระดับชาติอินเดีย

Date: 2026-08-30 | Tool notes: OpenAlex 429 ทุก call (scholar_api.py) → ใช้ Crossref REST / doaj.org API / webfetch แทน

| # | Query / URL | Tool | ผลลัพธ์ | Source ใหม่ |
|:--|:---|:---|:---|:---|
| 1 | `crossref_search.py "National Mission for Manuscripts"` | Crossref | 15 ผล; พบ 2 งาน NAMAMI โดยตรง: Uraon & Sinha 2024 (IJIDT 14(1):15-19, DOI 10.5958/2249-5576.2024.00004.9); Dinda & Rahman 2025 (JIM — เป็น DOI ต่างจากที่มี: 10.5958/2348-1773.2025.00003.0 "Towards a digital future") | S-229 |
| 2 | webfetch https://namami.gov.in/ | webfetch | **ยังล่ม** — Transport error (timeout) ซ้ำเช่นเดิม | - |
| 3 | webfetch https://www.indiaculture.gov.in/national-mission-manuscripts (2 ครั้ง) | webfetch | **ล้มเหลว** — Transport error ทั้ง 2 ครั้ง (กระทรวงวัฒนธรรมอินเดียไม่ตอบสนอง) | - |
| 4 | `scholar_api.py search "manuscript survey India mission census" --limit 15` | OpenAlex | **429 Too Many Requests** | - |
| 5 | `crossref_search.py "pandulipi survey India manuscripts"` | Crossref | 15 ผล; พบ Stender 2014 (Bodhicaryāvatāra survey, Puspika); Shafi & Ishaq Lone 2012 (Library Review, literature survey); ไม่มี HI | S-233, S-234 |
| 6 | `crossref_search.py "National Mission for Manuscripts digitization preservation"` | Crossref | 15 ผล; ยืนยัน Dinda & Rahman 2025 (S-229); ส่วนใหญ่เป็นงาน digitization ต่างประเทศ | - |
| 7 | `document_harvester.py "10.5958/2249-5576.2024.00004.9"` | harvester | metadata.json เท่านั้น — ไม่มี OA fulltext; webfetch doi.org ได้แค่ citation string | S-229 (metadata) |
| 8 | `crossref_search.py "hastalikhit pandulipi granth sanshodhan"` + `"hindi manuscript cataloguing granth samhita"` | Crossref | ไม่มีงาน HI ตรงเรื่อง; ผลภาษาอังกฤษ/มาราฐีเสียสมาธิ | - |
| 9 | `crossref_search.py "पांडुलिपि हस्तलिखित ग्रंथ"` (Devanagari) | Crossref | **พบงาน HI/NE จริง**: पांडुलिपि लेखन कला का इतिहास (IJSMT 2026, HI); प्राचीन शिक्षण पद्धति र हस्तलिखित ग्रन्थ (Nepalese Culture 2019, NE) | S-230, S-231 |
| 10 | harvester `10.55041/ijsmt.v2i6.205` + webfetch ijsmt.in (view + download, 3 ครั้ง) | harvester/webfetch | metadata ได้; **เว็บ ijsmt.in ตายทุก route** (Transport error) — fulltext ไม่ได้ | S-230 (metadata) |
| 11 | webfetch https://www.nepjol.info/index.php/NC/article/view/27498 | webfetch | **สำเร็จ** — landing page เต็ม + abstract NE + keywords + PDF link | S-231 |
| 12 | harvester PDF link `/27498/22749` + `download/27498/22749` + Invoke-WebRequest | harvester | **HTTP 500 ทุก route** (NepJOL download endpoint ตาย) — ได้ landing page text (6716 B) แทน | S-231 (HTML) |
| 13 | `crossref_search.py "manuscriptology Hindi"` + `"पाण्डुलिपि"` | Crossref | พบ Deshpande & Jain 2026 (अप्रकाशित पाण्डुलिपि अष्टाह्निकाचरित्र का अवलोकन, IJSR 12(2):197-199, HI); Lakshmithathachar 1999 ICDAR "Manuscriptology in the modern context" | S-232 |
| 14 | harvester `10.22271/23947519.2026.v12.i2c.3055` + webfetch doi.org | harvester | metadata ได้; doi.org ให้แค่ citation; เว็บ sanskritarticle.com 404 — fulltext ไม่พบ | S-232 (metadata) |
| 15 | `crossref_search.py "Oriental manuscripts India literature survey"` | Crossref | ยืนยัน Shafi & Ishaq Lone 2012 (Library Review 31(3-4)) | S-234 |
| 16 | harvester `10.1108/00242531211292088` + webfetch emerald.com | harvester | metadata ได้; Emerald 403 — fulltext paywall | S-234 (metadata) |
| 17 | `crossref_search.py "manuscripts collection Mithila"` | Crossref | 0 ที่เกี่ยว — Mithila collections ยังไม่พบ | - |
| 18 | `crossref_search.py "New Catalogus Catalogorum"` | Crossref | พบ Bender/Raghavan/Raja 1969 JAOS review ของ New Catalogus Catalogorum (metadata) | - (ไม่เก็บ — เก่า/ยาก) |
| 19 | webfetch ijidt.com article page | webfetch | ตอบกลับว่าง — เว็บใช้ไม่ได้ | - |
| 20 | `crossref_search.py "Bihar manuscripts library survey"` | Crossref | ไม่มีงาน NAMAMI-Bihar เพิ่ม | - |
| 21 | webfetch https://www.sarasvatimahallibrary.tn.gov.in/ | webfetch | **ล้มเหลว** — Transport error (ยืนยันสถานะเดิม) | - |
| 22 | `crossref_search.py "palm leaf manuscript conservation India"` | Crossref | ผลส่วนใหญ่มีอยู่แล้ว (S-004, S-093, S-170) | - |
| 23 | archive.org advancedsearch "palm leaf manuscript catalogue" | IA API | numFound 258; ส่วนใหญ่ ola ศรีลังกา + แคตตาล็อก; พบ dli.Wisdom.Frozen.In.Time (IGNCA 2008, video) | S-235 |
| 24 | webfetch https://archive.org/details/dli.Wisdom.Frozen.In.Time | webfetch | **สำเร็จ** — description เต็มพร้อมตัวเลขคลังคัมภีร์ 5 แห่ง (Tanjavur/Bhubaneswar) | S-235 |
| 25 | harvester `10.18732/hssa129` (HSSA — โฟลเดอร์นี้ก่อนตัดสินใจย้าย A-20) | harvester | metadata ได้ | (ย้ายไป A-20) |
| 26 | DOAJ API search "manuscripts"+abstract India+survey; "palm leaf manuscript" | doaj.org API | survey: 1 ผล (ไม่เกี่ยว); palm leaf: 16 ผล → เลือก Sweet 2014 Colombo Museum | S-236 |
| 27 | webfetch/harvester journals.le.ac.uk mas/article/view/261 (2 ครั้ง) | webfetch/harvester | **404 — ปลายทางตาย** (DOAJ ยังบอก fulltext URL นี้); ได้ abstract เต็มจาก DOAJ แทน | S-236 (abstract) |

**สรุปการเข้าถึงเว็บภาครัฐอินเดีย (ยืนยันซ้ำลูปนี้):** namami.gov.in ✗ timeout | indiaculture.gov.in ✗ transport error | sarasvatimahallibrary.tn.gov.in ✗ transport error | ijsmt.in ✗ | ijidt.com ✗ | nepjol.info ✓ (view) / ✗ (download PDF endpoint 500)
