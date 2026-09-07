# Foraging Loop 18 — Vietnam + East Asia vernacular reading sphere

**วันที่:** 2026-08-25 | **Sub-Agent:** The Worker-B2
**เครื่องมือจริง:** websearch API 429 ทั้งรอบ → OpenLibrary Search/Works JSON · Crossref API · Google Books API (429 ×3) · archive.org advancedsearch · Columbia DL Blacklight catalog · nomfoundation.org + lib.nomfoundation.org live fetch · nxbvanhoc.com.vn · beta.tapchinghiencuuphathoc.vn (re-fetch) — DuckDuckGo-lite captcha-block, CiNii 503

## คำค้น/endpoint ที่ใช้จริง
1. `https://openlibrary.org/search.json?q=Literary+Sinitic+East+Asia+Kin+Bunkyo` → 1 ผลตรง
2. `https://api.crossref.org/works?query.bibliographic=Literary Sinitic East Asia Kin King` → book DOI + chapter DOIs (TOC)
3. `https://openlibrary.org/search.json?q=Asian+Translation+Traditions+Hung+Wakabayashi` → 2 ผล (2005 St. Jerome / ebook reissue)
4. `https://openlibrary.org/works/OL19567763W.json` → metadata (ไม่มี TOC field)
5. Columbia Blacklight: `catalog?q=Pháp bảo đàn kinh giải`, `q=Phap bao dan kinh giai`, `q=Phật thuyết` → **0 ผลทั้งหมด**
6. archive.org fulltext `"Pháp bảo đàn kinh giải"` → 0; `"Phật thuyết giải âm"` → 0; 解音+報父母恩 → ผลปนหนังสือพิมพ์ฮ่องกง (noise)
7. `https://www.nomfoundation.org/` + `/nom-project/Digital-Library-of-Han-Nom` + `http://lib.nomfoundation.org/collection/1/` + `/collection/1/subject/3` → fetch จริงทั้งหมด
8. `https://nxbvanhoc.com.vn/chu-nom-va-tieng-viet-qua-ban-giai-am-phat-thuyet-dai-bao-phu-mau-an-trong-kinh` → metadata 2022 ครบ
9. `https://beta.tapchinghiencuuphathoc.vn/khao-sat-phap-bao-dan-kinh-giai-o-chua-linh-quang-dieu-ha-hai-phong.html` → re-fetch ยืนยัน live + เนื้อหาเพิ่ม

---

## แหล่งที่พบ (รายหัวข้อตาม brief)

### 1. Kin Bunkyō 金文京 & Ross King. *Literary Sinitic and East Asia* (Brill) — ✅ TOC ครบจาก Crossref
- OpenLibrary: work OL26575196W — authors **Bunkyo Kin, Ross King**, Brill, first_publish_year **2021**, ISBN 9789004420397 / 9004420398 — https://openlibrary.org/works/OL26575196W
- **Book DOI (Crossref): 10.1163/9789004437302** — "Literary Sinitic and East Asia", Kin Bunkyo & Ross King
- **TOC (chapter DOIs, published 2021-03-31):**
  - ch.3 **"Reading Literary Sinitic—kundoku 'Vernacular Reading' in Japan"** pp.8–84 (10.1163/9789004437302_003)
  - ch.4 ★ **"Vernacular Reading in East Asia"** pp.85–163 (…_004)
  - ch.5 **"Writing in Literary Sinitic: The Diverse World of Literary Sinitic in East Asia"** pp.164–212 (…_005)
  - ch.6 **"Concluding Thoughts: The East Asian Literary Sinitic Cultural Sphere"** pp.213–218 (…_006)
  - Crossref attach contributor names ระดับบท: Marjorie Burge, Si Nae Park, Alexey Lushchenko, Mina Hattori (+Kin/King)
- URL API: https://api.crossref.org/works?query.bibliographic=Literary%20Sinitic%20East%20Asia%20Kin%20King
- Brill preview/full-text pages: [NOT FETCHED this round — brill.com direct ไม่ได้ลองเกิน DOI]; reviews: NOT FOUND (Crossref bibliographic query ไม่เจอ review record)

### 2. Keith Taylor 2005 chapter + Taylor 2017 JAS — ✅ (cross-ref Phase A + เติม volume-level)
- *Asian Translation Traditions*, eds. Eva Hung & Judy Wakabayashi — **St. Jerome Publishing 2005, 287 pp., ISBN 1900650789 / 9781900650786** (OpenLibrary OL19567763W) ; T&F/Routledge ebook reissue (OL21316020W, ISBN set 9781315759876 ฯลฯ)
- Taylor chapter = **"Sino–Vietnamese Translation from Classical to Vernacular," pp.169–194** (taylorfrancis DOI 10.4324/9781315759876-11 — Phase A PASS) — case study = Cổ Châu pháp vân Phật bản hạnh ngữ lục
- TOC ระดับเล่มอื่นๆ: Wakabayashi "Translation in the East Asian cultural sphere—shared roots, divergent paths?" (บันทึกใน loop_05 §3 จาก obnb.uk/p14591527) [UNVERIFIED ระดับหน้า]
- Taylor 2017/2018 JAS: ยืนยันครบแล้วใน Phase A (JAS 77(1), Feb 2018: 107–122, DOI 10.1017/S0021911817000985; Hán prose + phrase-by-phrase Nôm, Nôm forms → 17th c., 7 editorial episodes, 4 divergence types) — cross-ref loop_05 §A ไม่ซ้ำการ fetch

### 3. Hoàng Thị Ngọ — *Chữ Nôm và tiếng Việt qua bản giải âm "Phật thuyết đại báo phụ mẫu ân trọng kinh"* — ✅ metadata 1999 + 2022 ยืนยัน live
- **1999:** NXB Khoa học xã hội, 231 pp. (record เดิม loop_05; Google Books id PmxkAAAAMAAJ; thesis record http://luanan.nlv.gov.vn/luanan?a=d&d=TTkGGSfNPgPu1996)
- **2022 reprint — publisher page (live):** https://nxbvanhoc.com.vn/chu-nom-va-tieng-viet-qua-ban-giai-am-phat-thuyet-dai-bao-phu-mau-an-trong-kinh
  - NXB Văn học, liên kết xuất bản Trung tâm Nghiên cứu Quốc học; **2022; 310 pp.; bìa cứng; 13×20.5 cm; ISBN "Đang cập nhật"; Hết hàng**
  - ผู้แต่ง: **PGS. Hoàng Thị Ngọ (khảo cứu, phiên âm, chú giải)** — researcher กอง(phòng) Văn tự học, Viện Nghiên cứu Hán Nôm
  - สาระจาก publisher: văn bản "Hán diễn Nôm" โบราณ; niên đại khắc in **trước 1730** จาก original ~**ปลายศตวรรษที่ 15** (ข้อสรุปของ Hoàng Thị Ngọ); โครง 3 ภาค: I เปิด+ศึกษา bản giải âm / II phiên âm-chú giải ทั้งเล่ม / III ตาราง từ vựng từ thuần Nôm + tần suất; ปรากฏการณ์ chữ Nôm "hai mã chữ" 1 âm tiết
- Google Books API 429 ×3 (rate limit) — ใช้ publisher page แทน ✓

### 4. Hương Hải — Pháp bảo đàn kinh giải — ✅ re-fetch live + รายละเอียด layout เพิ่ม
- Article: **Thượng tọa Thích Tiến Đạt (Trung tâm Tư liệu Phật giáo Việt Nam). "Khảo sát 'Pháp bảo đàn kinh giải' ở chùa Linh Quang Điều Hạ, Hải Phòng." *Tạp chí Nghiên cứu Phật học* ISSN 2734-9195, số tháng 9/2024 (online 14/09/2024).**
  - URL: https://beta.tapchinghiencuuphathoc.vn/khao-sat-phap-bao-dan-kinh-giai-o-chua-linh-quang-dieu-ha-hai-phong.html (PDF: …/2pdf/khao-sat-phap-bao-dan-kinh-giai-o-chua-linh-quang-dieu-ha-hai-phong)
- **โครงสร้าง MS:** 5 quyển รวมเล่มเป็น 2 tập; colophon **紹治三年孟冬月吉日謹序 (Thiệu Trị 3 = 1843)**; "板留在安陽縣條夭下社灵光寺以明後印" (แผ่นไม้เก็บที่ chùa Linh Quang, Điều Yêu Hạ, An Dương); in โดย 紅蓼社使壽刊
- **Tựa (重刋寳壇經序) โดย Như Nguyệt (Quốc tứ Linh Quang Nguyệt Đường)** — ระบุผู้แปล: "Phiên dịch quốc ngữ do Tổ sư **Huyền Cơ Thiện Giác 玄機善覺**, pháp tự **Minh Châu Hương Hải 明珠香海** Thiền sư" + quote ยืนยันซ้ำ: "**Trước sau truyền đến nước Nam ta, chưa có phiên dịch ra quốc ngữ**"
- **Layout interlinear:** บทความพิมพ์ Ngự chế tựa (御製六祖壇經法寳序) แบบ **Hán line + Nôm line คู่กันทีละวลี** ("Để thuận tiện cho việc đối chiếu… vẫn để nguyên văn chữ Hán"); loop_05 quote เดิมยืนยัน: "cứ một câu chữ Hán thì tác giả dùng một câu chữ Nôm để giải. Nguyên văn chữ Hán thì khắc chữ lớn, phần giải thì khắc chữ nhỏ" (Hán big + Nôm small per sentence) ★ เทียบตรง eonhae/kundoku layouts
- รายชื่อผู้อุทิศแผ่นไม้ (donor boards) รายบุคคล/แผ่น — สตรีนำการแกะพิมพ์ (妙捨/妙護 ที่ Cự Linh tự, Gia Phúc); MS อื่น: chùa Đại Từ Ân, chùa Dư Hàng (Hải Phòng); copy ที่ 2 ที่ chùa Đồng Đắc Ninh Bình (article 14/11/2025, URL ใน loop_05)

### 5. "Vernacular reading sphere" concept + digitized Nôm sutras — ✅
- **Concept anchor = Kin/King Brill vol.:** ch.4 "Vernacular Reading in East Asia" (85–163) + ch.6 "East Asian Literary Sinitic Cultural Sphere" (213–218) — กรอบ sphere ที่รวม kundoku/kugyŏl(+China) ไว้ในหนึ่งเดียว; Vietnam coverage อยู่ใน ch.5/conclusion [ระดับหน้า UNVERIFIED จนกว่าจะเปิด preview]
- Whitman et al. 2010 (*Scripta* 2:1–36) international vocabulary of vernacular readings = bridge ศัพท์ (Loop 17 #7)
- **VNPF site (live):** https://www.nomfoundation.org/ — ก่อตั้ง 1999 (James Đỗ Bá Phước, Ngô Thanh Nhàn, John Balaban, ภายหลัง Ngô Trung Việt); encode chữ Nôm ลง Unicode/ISO 10646; **สลายตัวสิ้นปี 2018**; board sign-off Balaban/Collins/Lesser/Phan/Schmid/Nguyễn Trung Việt
- **Digital Library of Hán-Nôm (NLV×VNPF, since 2006):** https://www.nomfoundation.org/nom-project/Digital-Library-of-Han-Nom?uiLang=en — NLV ถือ ~4,000 ฉบับ Hán-Nôm; catalog: **http://lib.nomfoundation.org/collection/1/** ; collections วัด: Thắng Nghiêm (/collection/2/), Phổ Nhân (/collection/3/) — example item PNVNPF-023 Dược sư kinh (loop_05)
- NLV collection breakdown (สังเกตจาก subject listing live): kinh 經 68 / sử 史 371 / tử 子 399 / tập 集 412 — **ฝั่ง kinh ของ NLV = Confucian classics; พระสูตรอยู่ใน temple collections/tử** → http://lib.nomfoundation.org/collection/1/subject/3
- **Columbia DLC npf_vietnamese (~1,100 texts; Phase A PASS):** ค้น "Pháp bảo đàn kinh giải"/"Phật thuyết" ใน catalog → **0 results** (Blacklight all_fields) → สองชื่อนี้ไม่อยู่ในชุด Columbia; ใช้ copy วัดแทน
  - URLs ที่รันจริง: https://dlc.library.columbia.edu/catalog?q=Ph%C3%A1p+b%E1%BA%A3o+%C4%91%C3%A0n+kinh+gi%E1%BA%A3i&search_field=all_fields (ฯลฯ)

### 6. Scholarship เทียบ kugyŏl–kundoku–chữ Nôm โดยตรง
- **เจอ anchor ระดับ monograph:** Kin & King ch.4 (ข้อ 1) — เทียบ vernacular reading traditions ของ Japan/Korea(+China) ในเล่มเดียว; ยังไม่พบ article ที่เทียบ kugyŏl↔Nôm เป็นคู่ตรง
- ทางอ้อมที่แข็งที่สุด (มีในมือแล้ว): typology ของ Taylor 2018 JAS (4 divergence types Hán↔Nôm) ↔ King 2013 (sŏktok/sundok gloss types) ↔ Bundschuh 2024 (kundoku) — ทั้งหมด verified ใน loops ก่อน
- archive.org fulltext "Pháp bảo đàn kinh giải" = 0; Google Books blocked → ไม่มีแหล่งเปรียบเทียบตรงใหม่รอบนี้

---

## Citation chaining (ต่อจากลูปนี้)
- Kin/King Brill → chapter contributors Burge/Park(Si Nae)/Lushchenko/Hattori — Si Nae Park ตรงกับ lecture note kugyŏl oralization-vs-vernacularization ใน loop_04 ★ chain เดิมปิดวง
- Kin/King ch.3 (kundoku Japan 8–84) → Frellesvig/Bundschuh chain ของ Loop 06
- Taylor 2005 ch. → Hung & Wakabayashi volume TOC → Wakabayashi comparative chapter (bridge Loop 06)
- Hoàng Thị Ngọ 1999/2022 → hannom.org.vn articles (param=1081, 1676 — loop_05 §A) + Trịnh Quán 1730 reprint chain
- Hương Hải → Viện Nghiên cứu Hán Nôm MSS AB.488/AB.367 (loop_05 §B) + copies Đại Từ Ân/Dư Hàng/Đồng Đắc
- VNPF lib portal → NLV han-nom portal (hannom.nlv.gov.vn; 1,907 docs/133,495 pages — loop_05 §C)

## ช่องว่าง / สถานะอิ่มตัว
- Brill preview/chapter full text ของ Kin/King + reviews ยังไม่ได้ — ต้อง institutional access หรือ websearch ฟื้น
- TOC เต็มของ *Asian Translation Traditions* (St. Jerome 2005 print) ยังขาดบางบท [Wakabayashi ch. UNVERIFIED page numbers]
- ไม่พบ article เทียบ kugyŏl↔chữ Nôm ตรงๆ — gap เชิงเปรียบเทียบยังเปิด (ยืนยันซ้ำจาก loop_05 gap list)
- Columbia DLC ไม่มี 2 titles ที่สนใจ — digitized interlinear example ที่ใช้ได้จริงยังเป็น temple-copy descriptions (Tạp chí Nghiên cứu Phật học) ไม่ใช่ IIIF images
- **สถานะอิ่มตัว: metadata-layer อิ่มตัวทุกหัวข้อ (5/6 ปิดสนิท; ข้อ 6 อิ่มตัวในระดับ "ยืนยันว่าไม่มีงานตรง")** — การ forage เพิ่มด้วยเครื่องมือชุดเดิมให้ marginal return ต่ำ; ปลดล็อกได้เมื่อ websearch quota ฟื้น (Brill reviews, Kansong DB, TOC เล่มเต็ม)
