# Foraging Loop 17 — Korea kugyŏl/eonhae deep dive (citation chaining จาก Phase A)

**วันที่:** 2026-08-25 | **Sub-Agent:** The Worker-B2
**เครื่องมือจริง:** websearch API ติด 429 ทั้งรอบ → ใช้ชุด API ทางตรงตามโปรโตคอลเดิม: Crossref API · OpenLibrary Search API · NDL Search OpenSearch (ndlsearch.ndl.go.jp/api/opensearch) · Cornell directory listing · sillokwiki MediaWiki opensearch+page fetch · archive.org advancedsearch · Columbia DL Blacklight catalog · DuckDuckGo-lite (captcha-block) · Google Books API (429 ×3) · CiNii opensearch (503 ×3)

## คำค้น/endpoint ที่ใช้จริง
1. `https://api.crossref.org/works/10.18399/acta.2013.16.1.009` → full record + ref-list ของ King 2013
2. `https://ndlsearch.ndl.go.jp/api/opensearch?title=李朝訓読攷` → 1 ผลตรงเป๊ะ
3. `...opensearch?creator=藤本幸司` → ผลลัพธ์ทั้งหมดเป็นคนต่างสายงาน (ป่าไม้/วิศวกรรม) → ยืนยันว่าสะกดถูกคือ 幸夫
4. `...opensearch?creator=野沢直子` → 69 ผล = นักแสดงตลก/พยาบาล/นักเขียนธุรกิจ ไม่มีงานด้าน 口訣
5. `https://ci.nii.ac.jp/opensearch/search?q=野沢直子 口訣` (และ 2 variants) → 503 ทุกครั้ง
6. `https://journals.uni-lj.si/ala/article/view/16` → ref list เต็ม (Kobayashi 2002/2003 exact titles)
7. `https://conf.ling.cornell.edu/japanese_historical_linguistics/` → citation ของ Whitman Scripta 3
8. sillokwiki api.php opensearch 능엄경언해/원각경언해 → canonical page URLs → fetch เนื้อหาเต็ม 2 หน้า

---

## แหล่งที่พบ (รายหัวข้อตาม brief)

### 1. Kobayashi Yoshinori 2002/2003 — gakpil 각필 ↔ kohunten 古訓点 — ✅ RESOLVED
Metadata แน่นอนได้จาก reference list ของ Lee Yong 2011 (ALA 1(1), live fetch):
- **Kobayashi, Y. (2002). "Hanguk-ui Gakpiljeomto-wa Ilbon-ui Kohunjeom-ui Gwangye (A Study on Gakpiljeomto in Korea and The Old Kunten in Japan)." *Kugyŏl Studies* (구결연구) 8: 21–76.**
- **Kobayashi, Y. (2003). "Silla Gyeongjeon-e Giipdoen Gakpil Munja-wa Buho — Kyoto·Otani Daehakjang Pan-bi-lyang-lon eseoui Balgyeon (Characters and Marks recorded in Silla Buddhist Sutra Pan-bi-lyang-lon of Kyoto·Otani University)." *Kugyŏl Studies* 10: 5–30.**
- URL หลักฐาน: https://journals.uni-lj.si/ala/article/view/16
- **Bonus (Cornell page): Kobayashi Yoshinori (2004). *角筆文献研究導論（上）東アジア篇 Kakuhitsu bunken kenkyū dōron (jō): Higashi Ajia hen.* Tokyo: Kyūko Shoin.** — monograph แม่ของ gakpil studies; Cornell ใช้อ้างประกอบ *Sōtō-bon Kegon mongiyoketsu* (佐藤本華嚴文義要訣) ซึ่ง kunten ราว ค.ศ. 800 "unclear whether added to facilitate reading in Korean or Japanese, or both" ★ หลักฐานเชิงเปรียบเทียบ kugyŏl↔kundoku โดยตรง
- ⚠️ Romanization flag จาก Phase A §4.3 ยังค้าง: "Kobayashi Yoshiyuki" (loop_06) vs "Kobayashi, Y." (loop_04/ALA) — ชื่อญี่ปุ่นมาตรฐานคือ 小林芳規 (Yoshinori) [romanization เต็ม UNVERIFIED เชิงเอกสาร]

### 2. Fujimoto Yukio 1992 「李朝訓読攷」 — ✅ RESOLVED (NDL)
- **NDL record: 「李朝訓読攷-1-「牧牛子修心訣」を中心にして〔含原本〕」, 藤本幸夫, 『朝鮮学報』通号 143, pp.109–218 (Journal of the Academic Association of Koreanology in Japan).**
- URL: https://ndlsearch.ndl.go.jp/books/R000000004-I3467592 ; CRID mirror: https://cir.nii.ac.jp/crid/1520290882576078464
- **⚠️ แก้ชื่อผู้แต่ง:** NDL สะกด **藤本幸夫** (Fujimoto Yukio) — สะกด "幸司" ใน brief/loop เดิมไม่ตรง; ยืนยันซ้ำโดย ref-list ของ King 2013 ใน Crossref ("Fujimoto Yukio", *Chōsen gakuhō* 143:109)
- สาระ (จากชื่อบท + loop_04 chaining): kundoku การอ่าน『牧牛子修心訣』(Susim-gyŏl ของ พระภิกษุ ชีนุล/知訥) สมัย Li/Chosŏn — bridge งาน "朝鮮訓読" ญี่ปุ่น ↔ kugyŏl/ŏnhae [เนื้อใน UNVERIFIED — ยังไม่ได้เปิดฉบับพิมพ์]
- ผู้เขียนคนเดียวกันยังมีบทใน King 2013 ref-chain (Chōsen gakuhō 143:109) ✓

### 3. Nozawa Naoki 野沢直子 — ❌ NOT FOUND (พร้อมหลักฐานการค้น)
1. websearch API: 429 ทั้ง session (ไม่ได้รันได้เลย)
2. NDL `creator=野沢直子`: 69 ผล — ทั้งหมดเป็น นักแสดงตลก (ヨシモトブックス 2010, ダイヤモンド社 2022, KADOKAWA 2022, 週刊文春 2017...) และ 滝野沢直子 (พยาบาล) / 野澤直子 (นักเขียนธุรกิจ ぶぎんレポート 2015) — **ไม่มีงานวิชาการ 口訣/訓点/朝鮮語เลย**
3. CiNii opensearch: **503 Service Unavailable ×3 ครั้ง** (เช้า–บ่าย)
4. loop_06 เคยค้น EN+JA targeted queries แล้ว → "[NOT FOUND / UNVERIFIED]"; variant "野澤尚" ก็ไม่เจอ
→ สรุป: ไม่พบหลักฐานว่ามี scholar ชื่อ Nozawa Naoki ในสาย kunten/kugyŏl จากแหล่งที่เข้าถึงได้ — คงสถานะ **NOT FOUND**

### 4. Ross King, Acta Koreana 2013 — ✅ เนื้อหา/metadata เพิ่มเติม (Crossref full record)
- DOI 10.18399/acta.2013.16.1.009 | *Acta Koreana* 16(1), Jun 2013: 199–233 | publisher Academia Koreana | ISSN 1520-7412 | cited-by 2 | landing: http://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART001775402
- URL API: https://api.crossref.org/works/10.18399/acta.2013.16.1.009
- **Ref-list 15 รายการ (chaining ใหม่ที่ยังไม่เคยบันทึก):**
  - 정재영 Chŏng Chaeyŏng — *구결연구* 17:129, 19:227, *서지학보* 35:207
  - Chung Jae-Young — *Seoul Journal of Korean Studies* 12:29 (= Chung 1999 ที่ loop_04 มีอยู่)
  - **Fujimoto Yukio — *Chōsen gakuhō* 143:109** (= ข้อ 2 ✓)
  - 황위주 — *한국한문학연구* 41:273
  - Kim Mubong 김무봉 — *전자불전* 4:7
  - King, Ross — *구결연구* 25:217 (= King 2010 Pre-Imjin survey ที่ loop_04 มี)
  - 남권희 Nam Kwŏnhŭi — *새국어생활* 7(4):147, *도서관학논집* 27:485, *서지학연구* 18:445, *청주고인쇄박물관* 6:159
  - Pak Hŭisuk 박희숙 — *선청어문* 7:41
  - Yi Pongjun 이봉준 — *한국불교학* 5:41
  - 여찬영 — *국문학연구* 11:27

### 5. 능엄경언해 (1461) / 원각경언해 (1465) — ✅ สาระเชิงลึก (AKS sillokwiki, live fetch)
**능엄경언해(楞嚴經諺解)** — URL: http://dh.aks.ac.kr/sillokwiki/index.php/%EB%8A%A5%EC%97%84%EA%B2%BD%EC%96%B8%ED%95%B4(%E6%A5%9E%E5%9A%B4%E7%B6%93%E8%AB%BA%E8%A7%A3) (entry: 성낙수; encysillok id 70000014)
- Base = 溫陵戒環 (Song) ย่อ『大佛頂…首楞嚴經』; **세조 ลง 구결 + แปลเอง (御譯)**; workflow: 세조 달음 구결 → 신미 ตรวจ 구두 → 한계희·김수온 แปล → 명승 교정 → 세조 ยืนยัน
- **활자본 을해자 乙亥字 1461 (400부, 교서관)** → **목판본 간경도감 1462** (언해본แรกของ 간경도감, เป็น norm ให้เล่มหลัง) → พิมพ์ซ้ำ 1472, 1495
- Typography: 대자=sutra text / 중자=คำอธิบายของ 계환 / 소자=언해문 쌍행; hangul ใช้ 소자เท่านั้น
- **ระบบ gloss:** 구결 표기 ไม่มี 방점·ㅭ·각자병서 แต่ 언해문 มีครบ ★ ยืนยันการแบ่ง layer ระหว่าง kugyŏl vs vernacular text ใน artifact เดียว
- 한자음 อ้าง『동국정운』โดย 조변안·조지; ฉบับพิมพ์หลังแก้เสียงด้วย 埋木/贴字
- Holdings: 성암문고(권1), SNU(권2), 가람문고+덴리대학 天理大學 ญี่ปุ่น(권5), 덴리(권6), 연세(권7), 동국대+세종대왕기념사업회(권8)…
- Ref: 김언주『역주 능엄경언해』4 vols., 세종출판사 2007; 옥영정「장서각 소장 보물 능엄경과 원각경의 인쇄문화적 가치」장서각 20, 2010

**원각경언해(圓覺經諺解)** — URL: http://dh.aks.ac.kr/sillokwiki/index.php/%EC%9B%90%EA%B0%81%EA%B2%BD%EC%96%B8%ED%95%B4(%E5%9C%93%E8%A6%BA%E7%B6%93%E8%AB%BA%E8%A7%A3) (encysillok id 70000076; 세조실록 11년 3월 9일: http://sillok.history.go.kr/id/kga_11103009_002)
- Base = 宗密『圓覺經大疏抄』+ **세조 달음 토 =『御定口訣圓覺經』** → 신미·효령대군·한계희 แปล → 목판본 **1465 (세조 11)** 10권 10책 간경도감
- พิมพ์ซ้ำ 1472 (blank บรรทัดเครดิต 御定口訣…) ; 중간본 1575 安心寺 (전라도)
- **มีฉบับ kugyŏl-only แยก:『원각경구결(圓覺經口訣)』을유자 乙酉字 5책** ★ artifact ของ "reading apparatus ล้วน"
- Orthography: **폐지 ㆆ + 각자병서** — marker การเปลี่ยน orthography ทางการ; 방점 เฉพาะ 언해문 ไม่มีใน 구결
- Holdings: 규장각, SNU 일사문고/가람문고, 동국대

- Digitized images: sillokwiki ให้ holdings แต่ไม่มี facsimile link ตรง; **간송(Kansong) DB ยังเช็กไม่ได้รอบนี้** (websearch ล่ม + ไม่เดา URL) → mark [NOT CHECKED this round]; AKS ฝั่ง encysillok เป็นทางเข้าที่ยืนยันแล้ว

### 6. ชื่อระบบ point-mark เกาหลี (입점/토점/구결 종류) — ✅ จากแหล่งที่ fetch ได้จริง
- **Taxonomy หลัก (Lee Yong 2011, abstract+keywords, live):** *eumdok kugyol* 音讀口訣 (transliteration) / *seokdok kugyol* 釋讀口訣 (translation) / *jeomto seokdok-kugyol* 點吐釋讀口訣 (translation + point marks) — "some questions concerning jeomto seokdok-kugyol are still open" (post-*Yugasijiron* 2000 discovery)
  - URL: https://journals.uni-lj.si/ala/article/view/16 (DOI 10.4312/ala.1.1.53-70)
- **ศัพท์ mark รายจุด (Whitman Scripta 3, สรุปจาก loop_04):** 字吐 cath'o ↔ katakana-like syllabary marks / 逆吐 yŏkt'o ↔ 返読点 hendokuten / 點吐 cŏmtho ↔ ヲコト点 okototen
- **"입점/토점":** พบใช้เป็นศัพท์ญี่ปุ่นฝั่ง kunten แบบ generic (入点/ト点) ผ่านบริบท kohunten; ฝั่งเกาหลีใช้ชื่อเฉพาะตามข้างบน [ความ map ตรงๆ UNVERIFIED]
- **"seokgyeong": NOT FOUND** ในทุกแหล่งที่ปรึกษารอบนี้ — ใกล้ที่สุดคือ *seokdok* 釋讀 [การตีความว่า user หมายถึง seokdok = UNVERIFIED]

### 7. Whitman Scripta vol.3 — ✅ RESOLVED (Cornell dir listing)
- **Whitman, John. 2011. "The ubiquity of the gloss." *Scripta* 3: 95–121.**
  - PDF: https://conf.ling.cornell.edu/japanese_historical_linguistics/Scripta3.John_Whitman_1st.pdf (XMP CreateDate 2011-09-15 สอดคล้อง)
- Bonus จากหน้าเดียวกัน: **Whitman, John et al. 2010. "Toward an International Vocabulary for Research on Vernacular Readings of Chinese Texts (漢文訓讀 Hanwen Xundu)." *Scripta* 2: 1–36.** → https://conf.ling.cornell.edu/japanese_historical_linguistics/SCRIPTA.03Whitman%20et%20al_pre-final.pdf
- สาระ Scripta 3 (loop_04 summary ยืนยันคงเดิม): kugyŏl ≈ kunten (字吐/逆吐/點吐 mapping), sŏktok→sundok shift ศตวรรษที่ 13, "cosmopolitan habitus supplanted the vernacular" เทียบ Pollock

---

## Citation chaining (ต่อจากลูปนี้)
- King 2013 ref-list → 정재영 (구결연구 17/19, 서지학보 35), 황위주 한국한문학연구 41, 남권희 4 บท, Yi Pongjun 한국불교학 5, Yŏ Ch'an-yŏng 국문학연구 11 — ยังไม่มีรายการใดถูก ingest ใน source-index
- Kobayashi 2002/2003 → Kobayashi 2004 角筆文献研究導論 (Kyūko Shoin) → Sōtō-bon Kegon mongiyoketsu case (kunten เกาหลี/ญี่ปุ่น ambiguous) ★ cross-link Loop 04 ↔ Loop 06
- Fujimoto 1992 → 朝鮮訓読 series (มี "其一" แปลว่ามีภาคต่อ) — หา 其二 ต่อใน Phase B
- sillokwiki → encysillok.aks.ac.kr Contents_id 70000014 / 70000076; 김언주 역주 4 vols (2007); 옥영정 장서각 20 (2010)
- Whitman et al. 2010 Scripta 2 → vocabulary bridge ไป Kin/King ch.4 (Loop 18)

## ช่องว่าง / สถานะอิ่มตัว
- Nozawa Naoki: **NOT FOUND** (หลักฐานค้นครบข้างต้น) — ถือว่าปิด เว้นแต่มี clue ใหม่
- Kansong facsimile ของ 능엄경언해/원각경언해: [NOT CHECKED] — ต้องใช้ websearch/web UI
- เนื้อใน Fujimoto 1992 + Kobayashi 2002/2003 (ฉบับเต็ม): ยังไม่ได้อ่าน — metadata อิ่มตัวแล้ว
- "seokgyeong" ไม่มีใน corpus — แนะนำใช้ seokdok 釋讀 เมื่อเขียนรายงาน
- **สถานะอิ่มตัว: metadata-layer อิ่มตัวสำหรับ 6/7 หัวข้อ (เหลือ Nozawa=NOT FOUND, Kansong=blocked)** — การค้นเพิ่มด้วยเครื่องมือชุดเดิมให้ marginal return ต่ำ
