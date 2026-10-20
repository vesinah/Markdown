# บัญชีควบคุมการยกร่างใหม่ระดับมหาตำรา (Master Empirical Re-drafting Ledger)
## โครงการ: `2026-10-20_สุสานแผ่นทองปิดศพฟิลิปปินส์`

**สถานะ:** ส่งแผนงานขยายโครงสร้างระดับมหาตำราพร้อมตารางมอบหมายไฟล์อ่านภาคบังคับ (Gate 1: Outline Gate)  
**เกณฑ์ขั้นต่ำ:** **ไม่ต่ำกว่า 12,500 คำต่อบท (รวม 7 บท ไม่ต่ำกว่า 87,500 คำ)**  
**เป้าหมายการยกร่าง:** 35 Micro-Sprints (ตอนละประมาณ 2,500–2,800 คำ)  
**สูตรคำนวณจำนวนคำ:** อักขระภาษาไทยตัดช่องว่าง ÷ 5.0 (คำนวณผ่าน `count_words.py`)  
**กลไกความถูกต้อง:** ควบคุมผ่าน Context Sandboxing, `verify_dossier.py`, `claim_entailment_verifier.py`, และ `pipeline_guard.py`

---

## ตารางควบคุมความคืบหน้ารายสปรินต์และไฟล์อ่านภาคบังคับ (35 Micro-Sprints)

### บทที่ 1: บทนำและบริบทประวัติศาสตร์โบราณคดีแห่งสุสานยุคก่อนอาณานิคมในฟิลิปปินส์ (เป้าหมาย: 13,000–14,000 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 1.1 | `ch01_sec01.md` | ปรากฏการณ์การค้นพบแผ่นทองคำปิดศพและปริศนาประวัติศาสตร์ 4 ประการ | ~2,600 | รออนุมัติแผน | `S-2015-estrella-death-gold.md`, `S-NMP-oton-gallery.md`, `S-2023-NMP-cebu-list.md` | `estrella_death_of_gold_visayan.md`, `nmp_oton_death_mask_gallery.md`, `nmp_2023_cebu_exhibition_list.md` |
| 1.2 | `ch01_sec02.md` | ประวัติศาสตร์นิพนธ์โบราณคดีสุสานฟิลิปปินส์ (Jagor, Marche, Beyer, Fox, Burton, Barbosa) | ~2,600 | รออนุมัติแผน | `S-1873-jagor-ch06.md`, `S-1887-marche-ch06.md`, `S-1977-burton-suatan.md` | `jagor_1873_reisen.md`, `marche_1887_lucon.md`, `burton_1977_suatan_butuan.md`, `fox_1970_tabon_caves.md` |
| 1.3 | `ch01_sec03.md` | ลำดับเวลาทางโบราณคดีและบริบททางสังคมการเมือง (Neolithic $\rightarrow$ Metal Age $\rightarrow$ Age of Trade) | ~2,600 | รออนุมัติแผน | `S-1994-scott-ch01-05.md`, `S-1992-postma-lci.md` | `up_ac_philippine_prehistory_intro.md`, `manguin_mani_wade_2011_early_interactions_prelims.md`, `scott_1994_barangay.md` |
| 1.4 | `ch01_sec04.md` | กรอบทฤษฎีสุสานวิทยาขั้นสูง (Bioarchaeology, Taphonomy, Prestige Goods, Hertz, van Gennep) | ~2,600 | รออนุมัติแผน | `S-2003-barretto-ch05.md`, `S-NMP-precolonial-burial.md` | `barretto_2003_burial_goods.md`, `barretto_tesoro_2008_ucl_thesis.md`, `bacus_1995_unto_site_negros.md` |
| 1.5 | `ch01_sec05.md` | ระเบียบวิธีวิจัยประจักษ์นิยมและการจัดระบบหลักฐาน 48 แฟ้ม (Corpus Architecture & Verification) | ~2,600 | รออนุมัติแผน | `source-index.md`, `reading-progress.md` | `source-index.md`, `harvest-manifest.json` |

### บทที่ 2: การฝังศพครั้งที่หนึ่งหรือครั้งที่สอง: การจำแนกทางชีวโบราณคดี ทาโฟโนมี และหลักฐานจากสามแหล่งสุสาน (เป้าหมาย: 13,000–14,000 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 2.1 | `ch02_sec01.md` | นิยามทางสุสานวิทยาและทาโฟโนมี: แบบจำลองการจำแนก 3 มิติ (Skeletal Articulation, Container, In Situ) | ~2,600 | รออนุมัติแผน | `S-NMP-precolonial-burial.md`, `S-NMP-traditions.md`, `S-2019-tabarev.md` | `nmp_2021_precolonial_burial_traditions.md`, `nmp_2021_ancient_burial_spaces.md`, `tabarev_2019_anthropomorphic_jars.md` |
| 2.2 | `ch02_sec02.md` | สุสานโอตอน (Oton Grave 6): รายงานขุดค้น 1967 ทะเบียน OT-MD-39/40 โลงไม้ และคำตัดสิน Primary 100% | ~2,700 | รออนุมัติแผน | `S-NMP-oton-gallery.md`, `S-2015-estrella-death-gold.md` | `ccp_encyclopedia_oton_face_covers.md`, `estrella_death_of_gold_visayan.md`, `nmp_oton_death_mask_gallery.md` |
| 2.3 | `ch02_sec03.md` | สุสานปลาซา อินเดเปนเดนเซีย เซบู: ขุดกู้ปี 2008 หลุม 17 (หญิง 35–49 ปี) แผ่นทองปิดตา/ปาก กริช เครื่องถ้วย | ~2,700 | รออนุมัติแผน | `S-2023-NMP-cebu-list.md`, `S-1524-pigafetta-ch02.md` | `nmp_2023_cebu_exhibition_list.md`, `hutterer_1967_salvage_cebu.md`, `peterson_tiauzon_2021_parian_cebu.md` |
| 2.4 | `ch02_sec04.md` | สุสานซูอาตันและอัมบางัน บูตูอัน: โลงไม้รูปเรือ และการคลี่คลายข้อความ UNESCO 2071 (Secondary & Skulls) | ~2,600 | รออนุมัติแผน | `S-1977-burton-suatan.md`, `S-UNESCO-2071.md`, `S-2022-lacsina-butuan.md` | `burton_1977_suatan_butuan.md`, `unesco_tentativelist_2071_butuan.md`, `lacsina_2022_butuan_boats_minpaku.md` |
| 2.5 | `ch02_sec05.md` | วัฒนธรรมไหฝังศพ (มานุงกุล, ไมตุม) เทียบกับแผ่นทองปิดศพ และคำตัดสินสถานภาพทางสุสานวิทยา | ~2,600 | รออนุมัติแผน | `S-2019-tabarev.md`, `S-NMP-traditions.md` | `fox_1970_tabon_caves.md`, `tabarev_2019_anthropomorphic_jars.md`, `solheim_1959_kalanay_notes.md` |

### บทที่ 3: ปริศนาแห่งการฝังมิใช่เผา: การเผชิญหน้าทางวัฒนธรรมอินเดีย ประติมานวิทยา และจักรวาลวิทยาบรรพชน (เป้าหมาย: 13,000–14,000 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 3.1 | `ch03_sec01.md` | ประติมานวิทยาเทวรูปทองคำแห่งอากูซัน (Agusan Tara): พุทธมหายาน-วัชรยาน ศิลปะชวามัชปาหิต และเหมืองทอง | ~2,600 | รออนุมัติแผน | `S-1963-francisco-tara.md`, `S-UNESCO-2071.md` | `francisco_1963_agusan_golden_image.md`, `bsp_ginto_history_wrought_in_gold.md`, `guy_2011_gold_in_philippines_ayala.md` |
| 3.2 | `ch03_sec02.md` | จารึกแผ่นทองแดงลากูนา ค.ศ. 900 (LCI): มหาศักราช 822 นาม Tondo และภูมิทัศน์ภาษาผสมผสาน | ~2,600 | รออนุมัติแผน | `S-1992-postma-lci.md` | `postma_1992_laguna_copperplate.md`, `manguin_mani_wade_2011_early_interactions_prelims.md` |
| 3.3 | `ch03_sec03.md` | ทฤษฎีการเลือกรับทางวัฒนธรรมและวัตถุบารมี: การปฏิเสธระบบวรรณะและจักรวรรดิเทวราชาในบารังไกย์ | ~2,600 | รออนุมัติแผน | `S-1994-scott-ch01-05.md`, `S-2003-barretto-ch05.md` | `scott_1994_barangay.md`, `barretto_2003_burial_goods.md` |
| 3.4 | `ch03_sec04.md` | จักรวาลวิทยาแห่งความตายของชาวออสโตรนีเซียน: มโนทัศน์วิญญาณ (*dungan*, *kalag*, *anito*) และการห้ามเผาศพ | ~2,700 | รออนุมัติแผน | `S-1582-loarca-ch04.md`, `S-1604-chirino-ch04.md`, `S-1994-scott-ch01-05.md` | `loarca_1582_blair_vol05.md`, `chirino_1604_blair_vol12.md`, `colin_1663_labor_evangelica.md`, `scott_1994_barangay.md` |
| 3.5 | `ch03_sec05.md` | ปฏิบัติการถนอมศพและเวทมนตร์ปกป้องทวาร: น้ำยางพลู (*buyo* sap), ทองคำในฐานะเกราะไสยเวท และอนุรักษนิยม | ~2,600 | รออนุมัติแผน | `S-1604-chirino-ch04.md`, `S-1994-scott-ch01-05.md`, `S-NMP-traditions.md` | `chirino_1604_blair_vol12.md`, `scott_1994_barangay.md`, `nmp_2021_precolonial_burial_traditions.md` |

### บทที่ 4: ชัยภูมิ ภูมิทัศน์ และนิเวศวิทยาการตั้งถิ่นฐานของแหล่งสุสานแผ่นทองคำ (เป้าหมาย: 13,000–14,000 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 4.1 | `ch04_sec01.md` | ภูมิทัศน์สันทรายชายฝั่งโอตอน เกาะปานาย: ธรณีสัณฐาน การระบายน้ำ และการควบคุมช่องแคบอิโลอิโล | ~3,440 | ผ่าน Gate 4 (Cleared) | `S-2015-estrella-death-gold.md`, `S-NMP-oton-gallery.md` | `estrella_death_of_gold_visayan.md`, `ccp_encyclopedia_oton_face_covers.md` |
| 4.2 | `ch04_sec02.md` | ภูมิทัศน์ดินดอนปากแม่น้ำบูตูอัน: คันดินธรรมชาติ เรือบาลังไกย์ 11 ลำ และชั้นดินเลนไร้ออกซิเจน | ~3,503 | ผ่าน Gate 4 (Cleared) | `S-1977-burton-suatan.md`, `S-2022-lacsina-butuan.md`, `S-UNESCO-2071.md` | `burton_1977_suatan_butuan.md`, `lacsina_2022_butuan_boats_minpaku.md`, `unesco_tentativelist_2071_butuan.md`, `nmp_butuan_ambangan.md` |
| 4.3 | `ch04_sec03.md` | ภูมิทัศน์ลานตะพักชายฝั่งเมืองท่าเซบู: เกาะมักตันในฐานะแนวกำบังคลื่น และสุสานในเขตเมืองท่าพาณิชย์ | ~3,325 | ผ่าน Gate 4 (Cleared) | `S-1524-pigafetta-ch02.md`, `S-2023-NMP-cebu-list.md` | `pigafetta_1524_blair_vol33.md`, `peterson_tiauzon_2021_parian_cebu.md`, `hutterer_1967_salvage_cebu.md` |
| 4.4 | `ch04_sec04.md` | การวิเคราะห์เปรียบเทียบธรณีสัณฐานและระบบอุทกวิทยา 3 แหล่ง: ตารางเปรียบเทียบตัวแปร 6 มิติ | ~3,274 | ผ่าน Gate 4 (Cleared) | รวม 3 แหล่ง (`S-2015-estrella`, `S-1977-burton`, `S-2023-NMP-cebu`) | `estrella_death_of_gold_visayan.md`, `burton_1977_suatan_butuan.md`, `peterson_tiauzon_2021_parian_cebu.md` |
| 4.5 | `ch04_sec05.md` | นิเวศวิทยาการเมืองการค้าและภูมิทัศน์แห่งอำนาจ: สุสานริมทางน้ำในฐานะเครื่องหมายแสดงกรรมสิทธิ์ดินแดน | ~5,358 | ผ่าน Gate 4 (Cleared) | `S-1994-scott-ch01-05.md`, `S-2003-barretto-ch05.md` | `scott_1994_barangay.md`, `barretto_tesoro_2008_ucl_thesis.md` |

### บทที่ 5: เรขาคณิตหลุมศพ สัณฐานวิทยาโลงไม้ การดัดแปลงสรีระ และสถาปัตยกรรมช่างทองปิดทวาร (เป้าหมาย: 13,000–14,000 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 5.1 | `ch05_sec01.md` | สัณฐานวิทยาหลุมศพ โครงสร้างโลงไม้ขุดรูปเรือ และแกนทิศทางนอนหงายเหยียดยาว | ~5,117 | ผ่าน Gate 4 (Cleared) | `S-1977-burton-suatan.md`, `S-NMP-precolonial-burial.md` | `burton_1977_suatan_butuan.md`, `nmp_wooden_coffins_collection.md`, `fox_1959_calatagan_excavations.md` |
| 5.2 | `ch05_sec02.md` | การดัดรูปทรงกะโหลกศีรษะ (Suzuki et al. 1993, Jagor 1873): สถิติกายวิภาค แผ่นไม้ *tangad* และชนชั้นนำ | ~3,928 | ผ่าน Gate 4 (Cleared) | `S-1993-suzuki-ch03.md`, `S-1873-jagor-ch06.md`, `S-UNESCO-2071.md` | `suzuki_1993_cranial_deformation.md`, `jagor_1873_reisen.md`, `unesco_tentativelist_2071_butuan.md` |
| 5.3 | `ch05_sec03.md` | การดัดแปลงฟันและการฝังหมุดทองคำ (*pusad* / Gold Tooth Inlays): ข้อมูลทันตวิทยา (Ramos 2024, Chirino 1604) | ~4,232 | ผ่าน Gate 4 (Cleared) | `S-1604-chirino-ch04.md`, `S-1994-scott-ch01-05.md` | `acta_medica_tooth_modification.md`, `chirino_1604_blair_vol12.md`, `scott_1994_barangay.md` |
| 5.4 | `ch05_sec04.md` | สถาปัตยกรรมช่างทองและเทคนิคดุนลาย Repoussé: การตีแผ่นทองคำ ลายจุดไข่ปลา และการจำแนกแผ่นปิดทวาร | ~4,534 | ผ่าน Gate 4 (Cleared) | `S-NMP-oton-gallery.md`, `S-2015-estrella-death-gold.md` | `estrella_2016_tagalog_goldworking_hukay.md`, `bsp_ginto_history_wrought_in_gold.md`, `nmp_oton_death_mask_gallery.md` |
| 5.5 | `ch05_sec05.md` | ระบบการปิดทวารทั้งห้าและการเปรียบเทียบในภูมิภาค: ออกแก้ว จามปา ชวาโบราณ และราชวงศ์เหลียว | ~3,956 | ผ่าน Gate 4 (Cleared) | `S-1887-marche-ch06.md` | `reinecke_nguyen_2009_gold_masks_vietnam.md`, `guy_2011_gold_in_philippines_ayala.md`, `smith_2023_gold_and_wood_uh_thesis.md` |

### บทที่ 6: เครื่องอุทิศในหลุมศพ วัตถุบารมี และพลวัตชนชั้นในสังคมบารังไกย์ (เป้าหมาย: 13,000–14,000 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 6.1 | `ch06_sec01.md` | ฐานานุรูปและลำดับชั้นทางสังคมในบารังไกย์: ดาตู (*Datu*), ติมาวา (*Timawa*), โอริปุน (*Oripun*) | ~4,015 | ผ่าน Gate 4 (Cleared) | `S-1582-loarca-ch04.md`, `S-1994-scott-ch01-05.md` | `loarca_1582_blair_vol05.md`, `scott_1994_barangay.md`, `plasencia_1589_customs.md` |
| 6.2 | `ch06_sec02.md` | เครื่องเคลือบนำเข้า: ซ่งใต้ หยวน หมิงตอนต้น (หลงเฉวียน จิ่งเต๋อเจิ้น) เครื่องถ้วยสยามและอันนาม | ~3,466 | ผ่าน Gate 4 (Cleared) | `S-2003-barretto-ch05.md`, `S-2023-NMP-cebu-list.md`, `S-UNESCO-2071.md` | `barretto_2003_burial_goods.md`, `bacus_1995_unto_site_negros.md`, `hutterer_1967_salvage_cebu.md` |
| 6.3 | `ch06_sec03.md` | ลูกปัดและเครื่องประดับมีค่า: ลูกปัดหินคาร์เนเลียน ลูกปัดแก้วอินโด-แปซิฟิก กำไล ต่างหูทองคำ *panika* | ~3,416 | ผ่าน Gate 4 (Cleared) | `S-2003-barretto-ch05.md`, `S-1994-scott-ch01-05.md`, `S-2023-NMP-cebu-list.md` | `barretto_tesoro_2008_ucl_thesis.md`, `bsp_ginto_history_wrought_in_gold.md`, `scott_1994_barangay.md` |
| 6.4 | `ch06_sec04.md` | อาวุธเหล็กและเครื่องมือโลหะในหลุมศพ: กริช ดาบ *kampilan* หอก และบทบาทในฐานะเครื่องหมายนักรบ | ~3,388 | ผ่าน Gate 4 (Cleared) | `S-1582-loarca-ch04.md`, `S-2023-NMP-cebu-list.md`, `S-1994-scott-ch01-05.md` | `nmp_2023_cebu_exhibition_list.md`, `loarca_1582_blair_vol05.md`, `scott_1994_barangay.md` |
| 6.5 | `ch06_sec05.md` | การวิเคราะห์เชิงปริมาณตามทฤษฎีวัตถุบารมี (Barretto-Tesoro 2003, 2008): ดัชนีความหลากหลายของทรัพย์ศพ | ~3,703 | ผ่าน Gate 4 (Cleared) | `S-2003-barretto-ch05.md`, `S-1994-scott-ch01-05.md`, `S-1582-loarca-ch04.md` | `barretto_2003_burial_goods.md`, `barretto_tesoro_2008_ucl_thesis.md`, `asj_2019_jocano_santa_ana.md` |

### บทที่ 7: บทสรุป สมานภาพพิธีกรรมศพยุคก่อนอาณานิคม และทิศทางวิทยาศาสตร์โบราณคดี (เป้าหมาย: 12,500–13,500 คำ)
| ตอนที่ | รหัสไฟล์ | หัวข้อเนื้อหาเชิงลึก | เป้าหมายคำ | สถานะ | ไฟล์ Dossier ภาคบังคับ | ไฟล์ Extracted Text ภาคบังคับ |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 7.1 | `ch07_sec01.md` | ประมวลสังเคราะห์คำตอบต่อคำถามวิจัยแกนกลาง 4 ประการอย่างรอบด้าน | ~2,500 | รออนุมัติแผน | สังเคราะห์จาก Dossiers ทั้ง 19 แฟ้ม | สังเคราะห์จาก 48 แฟ้ม |
| 7.2 | `ch07_sec02.md` | แบบจำลองเชิงกระบวนทัศน์สุสานวิทยาแผ่นทองคำแห่งฟิลิปปินส์ (Integrated Gold Mortuary Model) | ~2,500 | รออนุมัติแผน | สังเคราะห์ทางทฤษฎี | งานวิชาการทฤษฎีสุสานวิทยา |
| 7.3 | `ch07_sec03.md` | การเปรียบเทียบในระดับภูมิภาคเอเชียตะวันออกเฉียงใต้ภาคพื้นสมุทร (บรูไน ชวา บาหลี สยาม) | ~2,500 | รออนุมัติแผน | `S-1887-marche-ch06.md`, `S-1992-postma-lci.md` | `reinecke_nguyen_2009_gold_masks_vietnam.md`, `manguin_mani_wade_2011_early_interactions_prelims.md`, `guy_2011_gold_in_philippines_ayala.md` |
| 7.4 | `ch07_sec04.md` | การประเมินสถานภาพเอกสารขุดค้นภาคสนามและข้อจำกัดของหลักฐานโบราณคดี | ~2,500 | รออนุมัติแผน | `S-1977-burton-suatan.md`, `S-UNESCO-2071.md` | `burton_1977_suatan_butuan.md`, `hutterer_1967_salvage_cebu.md`, `unesco_tentativelist_2071_butuan.md` |
| 7.5 | `ch07_sec05.md` | ทิศทางและข้อเสนอแนะวิทยาศาสตร์โบราณคดีสมัยใหม่ (Isotopes $^{87}\text{Sr}/^{86}\text{Sr}$, aDNA, GC-MS, AMS $^{14}\text{C}$) | ~2,500 | รออนุมัติแผน | `S-1993-suzuki-ch03.md`, `S-2022-lacsina-butuan.md` | `acta_medica_tooth_modification.md`, `suzuki_1993_cranial_deformation.md`, `lacsina_2022_butuan_boats_minpaku.md` |
