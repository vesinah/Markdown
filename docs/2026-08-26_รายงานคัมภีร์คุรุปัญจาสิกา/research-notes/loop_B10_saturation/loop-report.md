# Loop B10 — Saturation sweep: Thai, Mongolian, Vietnamese, 2020-2026 scholarship, 84000 status, Tibetan editions

Date: 2026-08-26. Method: direct institutional fetches (84000, dharmaebooks WP-JSON, hongnhu.org, rongmotamhon.net, kagyuoffice.org), open scholarly APIs (Crossref, J-STAGE, OpenAlex, Internet Archive advancedsearch), Bing HTML SERPs for Thai negative documentation. Search API (exa) was down (HTTP 429 all session); DDG/Mojeek/Yandex captcha-blocked — documented where relevant. No Wikipedia citations.

---

## 1. Thai language — NEGATIVE result confirmed (no Thai translation exists)

Queries run and outcomes:

| Query | Channel | Outcome |
|---|---|---|
| คุรุปัญจาสิกา | Bing SERP (curl fetch, archived `documents/bing_serp_khurupancasika_thai.html`) | Zero organic results; page filled only with WhatsApp ad blocks; header "เกี่ยวกับผลลัพธ์ 37,300" is ad-inflated, no organic hit displayed |
| คุรุปัญจาสิกา + แปล + พระไตรปิฎกทิเบต | Bing SERP | Only quark.cn ad spam (50 nominal "results"), no organic hits |
| วรรณคดีครูอาจารย์ห้าสิบบท | Bing SERP (`documents/bing_serp_wannakhadi_query.txt`) | Only generic Thai-literature list pages (รายชื่อวรรณคดีไทย etc.) — none related to the text |
| ศูนย์ทิเบตไทย + คุรุปัญจาสิกา | Bing SERP | No organic hits |
| site:dhammathai.org คุรุปัญจาสิกา | Bing SERP | No results at all |
| Direct: dhammathai.org homepage full-text scan + ?s= search | curl | Term absent from homepage (53 KB HTML scanned); site search returns shell with zero matches (`documents/dhammathai_homepage.html`) |

Interpretation: the Sanskrit title has no established Thai transliteration in circulation; even the closest descriptive renderings (บาทครูห้าสิบ / วรรณคดีครูอาจารย์ห้าสิบบท style phrasing) surface nothing beyond unrelated Thai literature lists. Combined with the absence of any Thai item in the 84000 ecosystem (English/Chinese only) and no Thai-language entry anywhere in this project's A-loop translation sweeps, verdict: **no Thai translation of Gurupañcāśikā exists online or in print as of 2026-08**. Caveat honestly recorded: exa search engine unavailable this session; Bing SERP scraping is a weaker instrument — but the convergence of six independent queries plus direct site checks makes an existing Thai rendering very unlikely.

## 2. Mongolian — OPEN (no direct evidence either way; strong circumstantial chain)

Facts verified this loop:
- Lancaster field (4)/(6): text exists in **Peking Tanjur P. 4544** (Rgyud-'grel nu 242b-245a); also Narthang, Derge, Cone listed. No Mongolian column exists in his catalogue.
- The Mongolian Tanjur blockprint (carved/printed 1742-1749) was based on the Peking Tanjur — hence the text *should* be present in the corresponding volume; but I could not access Sagaster's catalogue of the 1742 Tanjur to verify the specific entry.

Negative searches: Internet Archive `"mongolian tanjur"` = numFound 0; IA title search tanjur+mongol* = 0; OpenAlex "bla ma lnga bcu pa mongolian tanjur" fulltext = 14 hits but all tangential (Khara-Khoto astral cult, Delgeriin Choir monastery, Tibetan-Mongolian lexicography, Lcang-skya doxography — none listing our text); workbench.rkts.org unreachable this session (transport error); rkts.org reachable (fetched OK earlier in B09 context) but its public pages are Kanjur/Tanjur *Tibetan* collections only.
Verdict: **unverified — flagged OPEN**. Lead for next loop: Klaus Sagaster, catalogue of the Mongolian Tanjur (Harrassowitz); BDRC scan of the Khüriye Tanjur volume containing Rgyud-'grel nu-equivalent; possible Mongolian title form "Blama-yin tabun jil-un šigurburi".

## 3. Vietnamese — BOTH versions verified LIVE

### V1 — Hồng Như Thupten Munsel (hongnhu.org)
- Landing/tag page live (archived: `documents/hongnhu_tag_maminh_50hanhkinhthay.html`), metadata verbatim:
  - Title: "Aśvaghoṣa: 50 HẠNH KÍNH THẦY"
  - "Tác giả: Cao tăng xứ Ấn Mã Minh – Aśvaghoṣa (Bha-bi-lha - Bhavideva)"
  - "Việt ngữ: Hồng Như Thupten Munsel"
  - "bản dịch 2021, nhuận văn 28/93/2023" [sic — likely 28/09/2023]
  - "Tựa đề tiếng Phạn: Guru Pañcasika"; "Tựa đề tiếng Tạng: bla ma lnga bchu pa" [sic]; "Tựa đề tiếng Việt: Năm Mươi Hạnh Kính Thầy"
- PDF re-downloaded successfully (valid %PDF-1.7, 380,298 bytes): https://www.hongnhu.org/files/pdf/0-ALL/bi-ashvagosha_50-hanh-kinh-thay%20[50-verses-on-guru-devotion]_NEW_viet_20211025.pdf (archived: `documents/hongnhu_50hanhkinhthay_20211025.pdf`)
- Opening verse sample verbatim: "#1. Đạo sư là nhân / cho đạt quả Phật / Kim Cang Tát Đỏa — Dưới gót chân sen / con xin đúng cách / đảnh lễ đê đầu"

### V3 — Liên Phật Hội (rongmotamhon.net)
- Page live (archived: `documents/rongmotamhon_nammuoi_baitung_phapthothay.html`):
  - Page header verbatim: "Trang Kinh Điển Bắc truyền - Hiển thị bản Việt dịch Kinh Sự Sư Pháp Ngũ Thập Tụng [事師法五十頌] trong Đại Chính tạng" (= from the Taishō canon, i.e., T1687 lineage)
  - Display title: "Năm Mươi Bài Tụng Pháp Thờ Thầy"
  - Credit line on page: "Việt dịch: Thích Như Điển" (note: refines the A15 attribution "Liên Phật Hội" — Liên Phật Hội/United Buddhist Foundation is the publisher-org per schema.org data: '"name": "Liên Phật Hội", ... "United Buddhist Foundation - Liên Phật Hội - Rồng Mổ Tâm Hồn"'; the translator credit shown is Thích Như Điển)
  - Reader offers parallel columns: Bản Việt dịch thứ nhất / Hán văn / Âm Hán Việt
Verdict: **both exist and are accessible online as of 2026-08-26**.

## 4. Recent scholarship/publications 2020-2026

Positive finds:
1. **Benchen Tibetan compilation (2024)** — see section 6: སློབ་དཔོན་དཔའ་བོའི་གསུང་བླ་མ་ལྔ་བཅུ་པའི་འགྲེལ་པ་གཅེས་བཏུས།, Benchen Lekshe Gyunkyong Khang Library, posted 2024-02-01 on dharmaebooks.org — a new Karma Kamtsang anthology of commentaries incl. 17th Karmapa materials. This is the most significant new publication found.
2. **17th Karmapa Arya Kshema Spring Teachings 2025 taught the text day-by-day** (kagyuoffice.org, archived day one + day six):
   - Day One post dated 12 March 2025; Day Six post dated 2 April 2025, series titled "Fifty Verses on the Guru" (Skt: Gurupañcāśikā explicitly named). Verbatim sample (Day Six): "Some people might question the value of studying the Fifty Verses on the Guru (Skt: Gurupañcāśikā) and doubt its benefit... The Karmapa pointed out that it is impossible to practice the Secret Mantra without a guru..."
   - Header image file "AK-teachings-eng.jpg" (AK = Arya Kshema) confirms the series branding.
   - Publication-plan statement: NOT found in the day posts checked (days one/six; days two/three/five exist). aryakshema.org domain now redirects to an unrelated memorial site (thongdrol.org) — lapsed. karmapafoundation.org site-search for guru devotion = no results. Flag: explicit book-publication announcement remains unlocated; note however that the Karmapa's bka' khrid already appears IN PRINT in the Benchen 2024 volume (from an earlier teaching occasion).
3. Crossref API: query.bibliographic "Gurupancasika"/"Gurupanchasika" = 0 items; related spellings return only Indonesian teacher-resilience noise (`documents/crossref_gurupancasika_empty.json`).
4. J-STAGE search API: ERR_001/empty entries for guru pancasika / Gurupancasika / bla ma lnga bcu / Asvaghosa guru (`documents/jstage_api_gurupancasika_empty.xml`) — zero Japanese journal output.
5. OpenAlex fulltext search: "Gurupancasika" count=3, all irrelevant (Jomon figurines vol.; Puṣpikā vol. 3 — the latter contains the term somewhere in fulltext but is not about the text); "fifty verses guru devotion Asvaghosa" count=2, irrelevant (`documents/openalex_fulltext_gurupancasika.json`).
Verdict: **no new dedicated scholarly article/book on Gurupañcāśikā 2020-2026 detected** in Crossref/J-STAGE/OpenAlex; activity is practice-oriented (Karma Kagyu teachings + Benchen anthology).

## 5. 84000 current status for Toh 3721 — RE-CHECKED: "In Progress"

Category page https://84000.co/canon/overviews-guides-rituals-and-prayers (fetched 2026-08-26, archived `documents/84000_toh3721_page.html` for the item page) lists verbatim:
> "toh3721 · 5 pages — Fifty Verses on Guru Devotion — In Progress"

while neighbours toh3707–3720 and toh3722 (the Pañjikā) show "Not Begun". The item page https://84000.co/translation/toh3721 exists (title/meta: "Read Toh 3721: Fifty Verses on Guru Devotion ... a translation from the Tibetan Buddhist canon") but body is client-rendered; no published translation yet. Status therefore: commissioned/in progress, not published. Note: toh3721 sits in "Overviews, Guides, Rituals and Prayers" (Toh 3707-3785).

## 6. Remaining language versions — Tibetan print/ebook edition metadata (Benchen)

dharmaebooks.org record (found via WordPress REST search on Tibetan title བླ་མ་ལྔ་བཅུ་པ; post id 16748; archived HTML + JSON):
- URL: https://dharmaebooks.org/50-stanzas-guru-benchen/
- Title (verbatim): སློབ་དཔོན་དཔའ་བོའི་གསུང་བླ་མ་ལྔ་བཅུ་པའི་འགྲེལ་པ་གཅེས་བཏུས། ("Selected commentaries on the Bla ma lnga bcu pa by Ācārya Pā/Werba")
- Contributors listed: ཀརྨ་ཡོན་ཏན་མཐར་ཕྱིན། • སློབ་དཔོན་ཆེན་པོ་རྟ་དབྱངས་ཀྱིས་མཛད། (Āśvaghoṣa, root text) • རྗེ་བདུན་པ་ཆོས་གྲགས་རྒྱ་མཚོ། (7th Shamarpa) • ཞྭ་དམར་དཀོན་མཆོག་ཡན་ལག (Shamar Könchok Yenlak) • འཇམ་མགོན་བློ་གྲོས་མཐའ་ཡས། (Jamgön Kongtrül) • ཀརྨའི་མཁན་ཆེན་རིན་ཆེན་དར་རྒྱས། • ཟུར་མང་མཁན་ཆེན་པདྨ་རྣམ་རྒྱལ། • ༸རྒྱལ་དབང་བཅུ་བདུན་པ་ཆེན་པོ། (17th Gyalwang Karmapa — བཀའ་ཁྲིད oral teaching + ས་བཅད structural outline)
- Contents (དཀར་ཆག) includes root text བླ་མའི་བསྙེན་བཀུར...ལྔ་བཅུ་པ, anonymous Indian དཀའ་འགྲེལ་རྒྱ་གཞུང, and the above commentaries; intro states the compilation gathers Karma Kamtsang masters' commentaries (verbatim excerpt: "འདི་ཉིད་རྒྱ་གར་གྱི་སློབ་དཔོན་དཔའ་བོའམ་རྟ་དབྱངས་ཀྱིས་བླ་མ་ལ་མ་གུས་པའི་བཤགས་པའི་དོན་དུ་མཛད་པ་ཞིག་ཡིན་ལ...")
- Publisher: དཔེ་སྐྲུན་པར་གཞི། བན་ཆེན་དཔེ་མཛོད་ལེགས་བཤད་རྒྱུན་སྐྱོང་ཁང། = **Benchen Lekshe Gyunkyong Khang Library** (print copies from same)
- Category: ལེགས་བཤད། (Spiritual Advice); date posted 2024-02-01 (modified 2024-07-03); formats PDF + EPUB ×3; license CC BY-NC-ND 4.0 (site-wide)
- ISBN: none — dharmaebooks items are free open-access ebooks without ISBN; print copies obtainable directly from Benchen Lekshe Gyunkyong Khang Library. (Metadata fields recorded instead: post id 16748; URL slug 50-stanzas-guru-benchen.)
Other Tibetan editions surfacing in IA/BDRC identifiers during sweep (for completeness): bdrc-W4CZ294917 (Bla ma lnga bcu pa'i mchan 'grel dang dam tshig rgya mtsho'i rang 'grel sogs), bdrc-W8LS76588 (Bla ma lnga bcu pa'i rtsa 'grel..., 2004), bdrc-W3CN6661 (Bla ma lnga bcu dang rtsa ltung bcu bzhi'i rnam bshad, 2012), bdrc-W3CN26522 (2017), bdrc-W1KG23183 (2003 collection incl. Mun sel sgron ma). Geshe Lobsang Dalwa YouTube series: previously noted in A-loops; not re-verified here per brief.

## 7. Archived evidence files (`documents/`) — 16 files

1. `84000_toh3721_page.html` — 84000 item page (meta: translation listing)
2. `bing_serp_khurupancasika_thai.html` — Thai SERP #1 raw (ad-only)
3. `bing_serp_wannakhadi_query.txt` — Thai SERP extracted text (วรรณคดี query)
4. `crossref_gurupancasika_empty.json` — Crossref empty result
5. `jstage_api_gurupancasika_empty.xml` — J-STAGE ERR_001/empty feed
6. `openalex_fulltext_gurupancasika.json` / `openalex_blamalngabcu_mongolian.json` — OpenAlex sweeps
7. `dhammathai_homepage.html` — dhammathai.org homepage (term absent)
8. `hongnhu_tag_maminh_50hanhkinhthay.html` — V1 metadata page
9. `hongnhu_50hanhkinhthay_20211025.pdf` — V1 translation PDF itself
10. `rongmotamhon_nammuoi_baitung_phapthothay.html` — V3 full page (Liên Phật Hội)
11. `kagyuoffice_fifty-verses-day-one_20250312.html` / `kagyuoffice_fifty-verses-day-six_20250402.html` — Karmapa 2025 teachings
12. `dharmaebooks_50-stanzas-guru-benchen.html` / `dharmaebooks_benchen_wpjson_post16748.json` — Benchen Tibetan edition

## 8. Verified URLs

- https://84000.co/translation/toh3721 ; https://84000.co/canon/overviews-guides-rituals-and-prayers
- https://www.hongnhu.org/files/pdf/0-ALL/bi-ashvagosha_50-hanh-kinh-thay%20[50-verses-on-guru-devotion]_NEW_viet_20211025.pdf ; https://www.hongnhu.org/tag/ma-minh/
- https://rongmotamhon.net/xem-kinh_nam-muoi-bai-tung-phap-tho-thay_gkdtmllt_viet1.html
- https://kagyuoffice.org/fifty-verses-on-the-guru-day-one/ ; https://kagyuoffice.org/fifty-verses-on-the-guru-day-six/
- https://dharmaebooks.org/50-stanzas-guru-benchen/ ; https://dharmaebooks.org/wp-json/wp/v2/posts/16748
- https://api.crossref.org/works?query.bibliographic=Gurupancasika ; https://api.jstage.jst.go.jp/searchapi/do?service=3&keyword=guru%20pancasika ; https://api.openalex.org/works?search=Gurupancasika
- https://www.dhammathai.org/ ; http://archive.org/advancedsearch.php?q=%22mongolian+tanjur%22&output=json

## 9. Chaining leads

1. Mongolian Tanjur verification via Sagaster's catalogue / BDRC Mongolian Tanjur scans (volume nu-equivalent) — highest-priority open gap.
2. Locate explicit book-publication plan from the conclusion of the Karmapa Spring 2025 series (check kagyumonlam.org recordings, KIBI announcements, or remaining day posts four/seven+ if they exist under different slugs).
3. Identify which earlier occasion the 17th Karmapa's བཀའ་ཁྲིད in the Benchen volume records (pre-2024; possibly Gutsang/Karma Kagyu event).
4. Thai: re-run when a proper search API is available (exa was 429 all session) to convert the carefully-documented negative into a formal double-source negative.

## 10. Thai summary (สรุปภาษาไทย)

สแกนช่องว่างที่เหลือทั้งหมด ผลลัพธ์รายภาษา:

1. **ภาษาไทย = ไม่มีคำแปล** (ยืนยันเชิงลบอย่างระมัดระวัง): ค้น คุรุปัญจาสิกา / คำอธิบายลักษณะ "วรรณคดีครูอาจารย์ห้าสิบบท" / ศูนย์ทิเบตไทย / site:dhammathai.org ผ่าน Bing SERP 6 ชุด ไม่พบผลลัพธ์จริงเลย (หน้าผลเต็มด้วยโฆษณาเท่านั้น) และตรวจ dhammathai.org โดยตรงก็ไม่มีคำนี้ เอกสารเก็บหลักฐาน SERP ดิบไว้แล้ว — ข้อสังเกต: เครื่องมือค้นหาหลักของระบบล่มทั้งวัน (429) จึงใช้วิธีสำรอง แต่ผลลบลงตัวจากหลายช่องทาง
2. **มองโกเลีย = ยังไม่พบหลักฐานในตัว (OPEN)**: ยืนยันได้ว่าตัวบทอยู่ในตันจูร์ปักกิ่ง P.4544 และตันจูร์มองโกเลีย (พิมพ์ 1742-1749) อิงฉบับปักกิ่ง จึง*น่าจะ*มี แต่หาหลักฐานรายการเฉพาะออนไลน์ไม่ได้ (Internet Archive/OpenAlex/rKTs ไม่มี) — เสนอให้ไล่แคตตาล็อกของ Sagaster ต่อ
3. **เวียดนาม = มีจริงทั้งสองฉบับ**: (ก) Hồng Như Thupten Munsel "Aśvaghoṣa: 50 HẠNH KÍNH THẦY / Năm Mươi Hạnh Kính Thầy" แปล 2021 ทบทวน 28/09/2023 ดาวน์โหลด PDF ได้จริงเก็บไว้แล้ว (ข) เลียนพุทธฮอย (rongmotamhon.net) "Năm Mươi Bài Tụng Pháp Thờ Thầy" ถอดจากไตรปิฎกไทโช (Đại Chính tạng) หน้าเครดิต "Việt dịch: Thích Như Điển" — ทั้งสองเว็บยังมีชีวิต ณ วันที่ตรวจ
4. **งานวิชาการใหม่ 2020-2026 = แทบไม่มี**: Crossref/J-STAGE/OpenAlex ให้ผลลบ สิ่งที่พบคือกระแสการใช้งานฝั่งปฏิบัติ — ครั้งสำคัญคือ สมเด็จครัปปาที่ 17 แสดง "Fifty Verses on the Guru" ทั้งซีรีส์ในการแสดงธรรมฤดูใบไม้ผลิ Arya Kshema ปี 2025 (12 มี.ค.-2 เม.ย. บันทึกใน kagyuoffice.org) แต่ยังไม่พบประกาศแผนพิมพ์เป็นหนังสือในหน้ารายงานที่ตรวจ
5. **สถานะ 84000 ของ Toh 3721 = "In Progress"** (5 หน้า) ในหมวด Overviews/Guides/Rituals/Prayers — เพื่อนบ้าน toh3722 (ปัญชิกา) ยัง "Not Begun" ยังไม่มีคำแปลตีพิมพ์
6. **ฉบับพิมพ์ทิเบต (เบนเชน) = ยืนยันพร้อมรายละเอียดครบ**: คัมภีร์รวมอรรถกถา "སློབ་དཔོན་དཔའ་བོའི་གསུང་བླ་མ་ལྔ་བཅུ་པའི་འགྲེལ་པ་གཅེས་བཏུས" โดยห้องสมุด Benchen Lekshe Gyunkyong Khang เผยแพร่ 2024-02-01 ที่ dharmaebooks.org (PDF+EPUB, CC BY-NC-ND) รวมบทแปล/อรรถกถาของ ชามาร์ปาที่ 7, ชามาร์ กอนโชค เยนลัก, จัมกอน กงตรุล, เคนเชน รินเชน ดาร์เย, เคนเชน เปมา นัมเกียล และ**ภาษิตบรรยาย (བཀའ་ཁྲིད)+โครงร่าง (ས་བཅད) ของครัปปาที่ 17** — ไม่มี ISBN (เป็นอีบุ๊กโอเพนแอกเซส) ใช้ post-id/URL เป็นตัวระบุแทน
