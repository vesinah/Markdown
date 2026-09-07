# Query Log — Loop A-27 + A-28 (Agent หลักดำเนินการเอง 2026-08-31)

## Loop A-27 — Gilgit manuscripts

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|:--|:---|:---:|:---|:---:|:---:|:---|
| 1 | Gilgit manuscripts discovery 1931 | EN | Crossref (crossref_search.py) | 17 | 3 | Hackin 1931, Dutt review 1986, Matsumura 1983 + von Hinüber chapter |
| 2 | UNESCO MoW Gilgit | EN | webfetch | 1 | 1 | PASS fulltext — "oldest surviving in India", 5th-6th c. |
| 3 | Hackin 1931 Persée | FR | webfetch doc-page | 1 | 0 | เนื้อหา note ครบบน doc-page; PDF altcha-block |
| - | OpenAlex queries | EN | scholar_api | 0 | 0 | 429 ทั้งลูป (บันทึกตามจริง) |

**สรุป A-27:** source เกี่ยว 4 รายการ (Hackin fulltext-doc, UNESCO primary, von Hinüber + Dutt + Matsumura metadata)

## Loop A-28 — Bower / Nepal oldest

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|:--|:---|:---:|:---|:---:|:---:|:---|
| 1 | Bower manuscript Hoernle birch bark | EN | Crossref REST | 8 | 3 | Hoernle JRAS ×2 + Wille chapter |
| 2 | Nepal manuscripts oldest dated Nepala Samvat | EN | Crossref REST | 8 (noisy) | 1 | Daśabhūmikasūtra JBS "two oldest in Nepal" |
| 3 | oldest palm leaf manuscript Nepal dated | EN | scholar_api (OpenAlex) | 0 | 0 | 429 — บันทึกตามจริง |

**สรุป A-28:** source ใหม่ 4 รายการ (metadata) — ปีที่พิมพ์ Hoernle/Wille ยังไม่ยืนยัน ระบุ "ยังไม่ยืนยัน" ตามกฎ anti-hallucination

**Novelty:** ทั้งสองลูปเป็นงานใหม่ทั้งหมดยกเว้น Hackin (มีใน index แล้ว — อัปเดตเป็น fulltext)
