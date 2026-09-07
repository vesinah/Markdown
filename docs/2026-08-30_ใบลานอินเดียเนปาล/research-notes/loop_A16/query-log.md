# Loop A-16 — Query Log: ธรรมเนียมคัดลอกเนวารีในเนปาล (Newar scribal tradition)

วันที่: 2026-08-30 | เครื่องมือหลัก: Crossref REST + direct fetch (OpenAlex ติด 429)

| # | Query/Action | API/Tool | ผลลัพธ์ |
|---|---|---|---|
| A16-Q1 | `scholar_api.py search "Newar Buddhism manuscript copying tradition"` (และ query แทน "scribe profession...") | OpenAlex | 429 ตลอดรอบ (ลองรวม 6 ครั้ง) |
| A16-Q2 | `crossref_search.py "Newar Buddhism manuscripts Nepal" --limit 10` | Crossref | ตรงประเด็น: Lewis "Popular Buddhist Texts from Nepal" (SUNY/De Gruyter 2000/2009) |
| A16-Q3 | `crossref_search.py "Newar scribes colophons Buddhist manuscripts" --limit 10` | Crossref | ตรงประเด็นมาก: YOSHIZAKI 2015 "Anonymous Scribes and/or Donors of Newar Buddhist Manuscripts" (IBK 64(1)); Baums 2022; Kasai 2022 |
| A16-Q4 | `crossref_search.py "Newar Buddhism manuscript copying practice Kathmandu Vajracarya"` | Crossref | พบ Yoshizaki series: Vajracarya papers 1994/1996, printed books 2014 |
| A16-Q5 | `crossref_search.py "Yoshizaki Newar Buddhist manuscripts" --limit 15` | Crossref | 15 รายการ Yoshizaki ใน IBK: 2007 (Ratna Bahadur Vajracarya copyist), 2005 (Ratnamuni Vajracarya in Lhasa), 2010 (Dhamju Vajracarya donor), 2014 (Siddhīharṣa Vajracarya family), 2020 (Kyoto Univ. colophon 106), 2022 (Paṇḍit Sundarānanda) |
| A16-Q6 | `document_harvester.py` 10.4259/ibk.64.1_524 / 70.2_1025 / 63.1_537 / 56.1_472 / 67.2_885 / 69.1_347 / 54.414 | Crossref | ได้ metadata JSON 7 รายการ — J-STAGE ไม่เปิด PDF (HTTP 500 ทั้ง /_article และ /_pdf) |
| A16-Q7 | `crossref_search.py "manuscript culture Nepal palm leaf" --limit 10` | Crossref | ไม่ตรงประเด็นเท่าที่ควร (Tamil/Burmese datasets) |
| A16-Q8 | `crossref_search.py "prashasti"` | Crossref | ไม่พบงานเกี่ยว Newar prashasti โดยตรง |
| A16-Q9 | webfetch + urllib: `https://catalogue.ngmcp.uni-hamburg.de/` | NGMCP | STATUS 200 — เข้าได้จริง (home redirect → content/index.xml) |
| A16-Q10 | probe Solr endpoint `/servlets/solr/select?q=*:*` | NGMCP | ทำงาน: 155,013 records (117,406 Indic + 37,607 Tibetan); full-text ค้น "scribe/copyist" ไม่ได้ (0 hits — index เฉพาะ metadata fields) |
| A16-Q11 | Solr `title:*lekha*` / `title:*pustaka*` / `title:*grantha*` / `title:*likhit*` | NGMCP | 41/211/1226/16 records — เจอ ms ชื่อ Lekhamālikā, Lekhasaṃgraha, Janmapattralekhanavidhi (คัมภีร์ว่าด้วยการเขียน/lekhana เกี่ยวกับ scribe โดยตรง) |
| A16-Q12 | fetch record page `/receive/aaingmcp_ngmcpdocument_00025146` และอีก 2 | NGMCP | 200 OK — เก็บ metadata raw 3 ระเบียน |
| A16-Q13 | `dg_inpage_fetch.js` Formigatti 2022 / Baums 2022 / Kasai 2022 / Lewis ch.1 | De Gruyter | PDF/HTML 200 OK ทั้งหมด |
| A16-Q14 | pdf health check 4 ไฟล์ | pdf_extractor.py | PASS (Lewis เป็น HTML ไม่ใช่ PDF — เก็บเป็น .htm, verdict PASS ในนัย text-layer) |

หมายเหตุ: J-STAGE (IBK) บล็อกการดึงอัตโนมัติ — บทความ Yoshizaki ทั้ง 7 ชิ้นมีเฉพาะ metadata + DOI ยังไม่มี fulltext
