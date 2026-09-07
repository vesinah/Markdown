# Loop A-22 — Query Log: แพลตฟอร์มดิจิทัลเฉพาะทาง (Muktabodha, GRETIL, หอจดหมายเหตุดิจิทัล) + ZH Beiyejing

Date: 2026-08-30 | Agent: Explorer (Phase A)

| # | Tool | Query | Result |
|---|------|-------|--------|
| 1 | webfetch | https://muktabodha.org/digital-library/ | สำเร็จ — ขอบเขตคอลเลกชันเต็ม (บันทึกใน findings S-256) |
| 2 | webfetch | https://gretil.sub.uni-goettingen.de/gretil.html | สำเร็จ — corpus overview + โครงสร้างหมวด + TEI conversion policy (S-257) |
| 3 | crossref_search.py | "digital library Sanskrit manuscripts platform digitization project" | ผลส่วนใหญ่ไม่ตรง Indic (Harvard Islamic Heritage, Arabic script, Heidelberg Bibliotheca Palatina 10.1353/dph.2017.0011) — ไม่มี OA Indic ใหม่ |
| 4 | crossref_search.py | "Sanskrit e-text archive TEI encoding corpus" | พบ McAllister 2020 "Quotes, Paraphrases, and Allusions: Text Reuse in Sanskrit Commentaries and How to Encode It" (JTEI, CC-BY) → harvest |
| 5 | crossref_search.py | "Beiyejing palm leaf manuscript digitization" | ไม่มีงาน ZH ตรงใน Crossref (ผลล้วน EN) — ต้องใช้ web search จีน |
| 6 | crossref_search.py | "贝叶经" | ขยะทั้งหมด — Crossref tokenized เป็น "Bayesian" (贝叶斯) — ยืนยันว่าต้องค้นผ่านเว็บจีนโดยตรง |
| 7 | webfetch (Baidu SERP) | "贝叶经 数字化 保护" | สำเร็จ — พบบริบทโครงการบัวดาล่า/Beiyejing จีน: 中国文化遗产研究院 จัดซื้อ "贝叶经数字化保护项目梵文识别系统研发" 215.52 万元 (บาดาล่า phase 1-3), บัวดาล่า project เริ่ม 2018, 山东大学 潍坊贝叶经研究基地 2026-06-02 |
| 8 | harvester (Puppeteer) | https://baike.baidu.com/item/贝叶经数字化保护项目梵文识别系统研发 | สำเร็จ — รายละเอียดการจัดซื้อครบ (S-258) |
| 9 | harvester | news.cn / so.news.cn / xizang.gov.cn / achch.org / potalapalace.cn | บล็อก 403/timeout ทั้งหมด (Xinhua + Tibet govt + Potala) — ไม่ได้ fulltext จากแหล่งรัฐจีนโดยตรง |
| 10 | chinadaily newssearch API | keywords "beiyejing" / "Potala palm leaf" (REST JSON) | สำเร็จ — ได้รายการบทความ + snippet |
| 11 | harvester | chinadaily 2025-04-22 "Palm-leaf scripture experts seek to master restoration" | สำเร็จ PASS (S-259) |
| 12 | harvester | chinadaily 2024-12-17 "Potala Palace moving to preserve ancient texts" | สำเร็จ (S-260) |
| 13 | harvester | https://muktabodha.org/75-saiva-texts-in-new-project-with-ifp-2/ | สำเร็จ — รายละเอียดโครงการ 75 Śaiva texts + จำนวน IFP palm-leaf จริง (S-261) |
| 14 | harvester | DOI 10.4000/jtei.3324 (McAllister, JTEI) | metadata JSON เท่านั้น — jtei.openedition ยังไม่ได้ลอง fulltext แยก (บันทึกเป็น gap) |

Citation chaining (A-22): Baidu Baike S-258 → 中国政府采购网 (ccgp.gov.cn) 公告 2026-06-10 (招标公告) + 2026-07-02 (中标公告) = primary records ที่ควร harvest ต่อ; S-256 (Muktabodha DL) → Spier "Muktabodha's Collections", "The Catalogue and On-Line Digital Library of the Paper Manuscripts of the French Institute of Pondicherry", "History of the Gokarna Vedic Collection" (3 บทความสถาปนา ยังไม่หา); S-259/S-260 (China Daily) → 西藏自治区文物局, 布达拉宫贝叶经保护研究中心 (Protection Research Center of the Palm-Leaf-Scriptures of Potala Palace), Pema Dekyi (restoration specialist)
