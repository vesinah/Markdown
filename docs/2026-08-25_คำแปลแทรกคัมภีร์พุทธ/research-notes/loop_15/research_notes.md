# Foraging Loop 15 — กรอบทฤษฎีเปรียบเทียบ: Glossing Practice volume / Liu Translingual Practice / Pollock cosmopolitan-vernacular orders / alloglottography

**วันที่:** 2026-08-25 | **เครื่องมือ:** webfetch — websearch API ติด 429; ใช้ OpenLibrary Search API + archive.org metadata/full-text search API

## คำค้นที่ใช้จริง
1. `Lydia Liu translingual` → https://openlibrary.org/search.json?q=Lydia+Liu+translingual&limit=4&fields=key,title,author_name,first_publish_year → 4 ผล
2. `Sheldon Pollock` → (fields เดิม, limit=6) → 54 ผล
3. `alloglottography` → OpenLibrary: **0 ผล** → archive.org full-text search: https://archive.org/advancedsearch.php?q=alloglottography&fl%5B%5D=identifier&fl%5B%5D=title&rows=10&output=json → 1 ผล
4. `Glossing Practice Comparative Perspectives` → https://openlibrary.org/search.json?q=Glossing+Practice+Comparative+Perspectives → 2 ผล

## แหล่งพบ

### 1. Cinato, Franck; Lahaussois, Aimée; Whitman, John. *Glossing Practice*
- **ปี:** 2023 | **ประเภท:** comparative volume (เล่มเดียวกับ chapter "Glossing Glosses" ของ Zisk — cross-ref I-11 ใน source-index)
- URL: https://openlibrary.org/works/OL28858938W
- สาระ: เล่มเปรียบเทียบ glossing practices ข้ามภาษา/ข้ามธรรมเนียม [TOC ยังไม่ fetch]

### 2. Liu, Lydia H. *Translingual Practice: Literature, National Culture, and Translated Modernity—China, 1900–1937*
- **ปี:** 1995 (ฉบับแปลจีน 2002 เป็น Kua yu ji shian; เกาหลี 2005)
- URLs: https://openlibrary.org/works/OL38054418W ; https://openlibrary.org/works/OL3525074W ; OL19270907W ; OL42516039W
- สาระ [UNVERIFIED เชิงลึก]: กรอบ translingual practice — การยืม/แปลข้ามภาษาในฐานะ practice ที่สร้าง modernity ผ่านคำศัพท์/ไวยากรณ์ข้ามพรมแดน

### 3. Pollock, Sheldon. *The Language of the Gods in the World of Men: Sanskrit, Culture, and Power in Premodern India*
- **ปี:** 2006 | URL: https://openlibrary.org/works/OL20934644W
- สาระ [UNVERIFIED เชิงลึก]: Sanskrit cosmopolis — cosmopolitan language order vs vernacular order (vernacularization) — กรอบหลักฝั่ง South Asia

### 4. Pollock, Sheldon (ed.). *Literary Cultures in History: Reconstructions from South Asia*
- **ปี:** 2003 | URL: https://openlibrary.org/works/OL8303768W

### 5. Pollock, Sheldon (ed.). *World Philology*
- **ปี:** 2015 | URL: https://openlibrary.org/works/OL21802813W
- สาระ [UNVERIFIED]: ปรัชญาติบทเชิงเปรียบเทียบข้ามอารยธรรม — เชื่อมกับ philology ของ gloss/commentary traditions

### 6. Sanders, Seth L. (ed.). *Margins of Writing, Origins of Cultures* — Chicago: Oriental Institute of the University of Chicago
- **ปี:** 2006 | ISBN 9781885923394 | papers from seminar Feb 25–26, 2005, University of Chicago | xi+300 pp.
- URL: https://archive.org/details/marginsofwriting0000unse (metadata JSON: https://archive.org/metadata/marginsofwriting0000unse)
- **TOC ยืนยันจาก metadata description (ข้อความจริงจาก archive):**
  - Sanders, Seth L., "Margins of writing, origins of cultures"
  - Kelly, John, "Writing and the state: China, India, and general definitions"
  - **Rubio, Gonzalo, "Writing in another tongue: alloglottography in the ancient Near East; Postscript (December 2007)"** ← บทหลักเรื่อง alloglottography
  - Dieleman, Jacco, "Abundance in the margins: multiplicity of script in the Demotic magical papyri"
  - Cooper, Jerrold S., response session 1
  - Woods, Christopher, "Bilingualism, scribal learning, and the death of Sumerian"
  - Payne, Annick, "Multilingual inscriptions and their audiences: Cilicia and Lycia"
  - Schniedewind, William M., "Aramaic, the death of written Hebrew, and language shift in the Persian period"
  - Silverstein, Michael, response session 2
  - Michalowski, Piotr, "The lives of the Sumerian language"
  - Beaulieu, Paul-Alain, "Official and vernacular languages: the shifting sands of imperial and cultural identities in first-millennium B.C. Mesopotamia"
  - van den Hout, Theo, "Institutions, vernaculars, publics: the case of second-millennium Anatolia (+Postscript Nov 2007)"
  - Zimansky, Paul, "Writing, writers, and reading in the kingdom of Van"
  - **Pollock, Sheldon, "Response for third session: power and culture beyond ideology and identity"**
  - Machinist, Peter, "Final response: on the study of the ancients, language, writing, and the state"
- สาระ: alloglottography = "writing in another tongue"; เล่มนี้เชื่อม margins/writing/state + มี response ของ Pollock โยงเข้า cosmopolitan/vernacular orders โดยตรง

## Citation chaining
- Rubio 2006 → chain: Gershevitch [UNVERIFIED — ต้นทางศัพท์ alloglottography ตามบท Rubio ต้องอ่านใน PDF]
- Cinato/Lahaussois/Whitman 2023 → chain: Zisk ch. (I-11), Alberizzi 2014 (I-8) — kunten/nissaya chapters
- Pollock 2006 + Pollock response in Sanders 2006 → chain: vernacularization essays ("The Language of the Gods…"), Literary Cultures in History 2003 chapters per-region
- Liu 1995 → chain: 超越 translingual — Japanese kanbun scholarship (init loop 2)

## ช่องว่าง
- ยังไม่มี abstract/quote จากเนื้อหาจริงของ Rubio ch., Liu, Pollock — ทุกสาระ mark UNVERIFIED เชิงลึก; ต้องดึง full text (Sanders vol. มี LCP-encrypted PDF บน IA — ต้อง borrow)
- sacred language untranslatability (religious studies) — query ไม่ได้รันเพราะ search engines ถูกบล็อก
- Walter Ong — ผู้ใช้สั่ง skip ตาม brief
