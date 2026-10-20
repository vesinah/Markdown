# ดัชนีแหล่งข้อมูลกลาง (Master Source Index)
## โครงการ: 2026-10-14_เทศนาดาวดึงษ์และเทโวโรหณะ_คัมภีร์เปรียบเทียบ

- **เกณฑ์ด่านตรวจความอิ่มตัว (Gate 2 Saturation):** ต้องมีไฟล์ PDF/EPUB ตัวเต็มใน `research-notes/pdf/` และไฟล์สกัดข้อความใน `research-notes/extracted-texts/` ครบถ้วน 100% ปลอดจากการใช้บทคัดย่อ (Zero-Abstract Rule)
- **จำนวนเอกสารในสารบบ:** 10 ฉบับสมบูรณ์ (ครอบคลุม 5 ภาษา 5 สกุลอักษร)
- **สถานะการตรวจสุขภาพไฟล์:** PASS (100%)

---

### ตารางดัชนีแหล่งข้อมูลหลัก (Primary & Critical Secondary Corpus)

| Source ID | ชื่อเอกสาร / คัมภีร์ | ผู้แต่ง / ผู้แปล / ยุคสมัย | ภาษา (Language) | อักษร (Script) | ไฟล์ PDF ในเครื่อง | ไฟล์ Markdown สกัด | ประเภทแหล่งข้อมูล | สถานะ OCR / Health Check |
|:---|:---|:---|:---:|:---:|:---|:---|:---|:---:|
| `S-2012-analayo-abhidharma` | Teaching the Abhidharma in the Heaven of the Thirty-three: The Buddha and His Mother | Bhikkhu Anālayo (2012) | English | Latin | `analayo-2012-teaching-abhidharma.pdf` | `analayo-2012-teaching-abhidharma.md` | Secondary Journal Article | PASS (Clean Layout) |
| `S-0400-cbeta-t0125-zengyi` | 增一阿含經 卷第二十八 聽法品第三十六 (Ekottarika Āgama) | Gautama Saṅghadeva (東晉 397 CE) | Classical Chinese | Hanzi | `cbeta-t0125-zengyi-ahan-ch28.pdf` | `cbeta-t0125-zengyi-ahan-ch28.md` | Primary Canonical Sūtra | PASS (Digital XML) |
| `S-0285-cbeta-t0152-shengmu` | 佛說生經 卷第四 (Sūtra on Previous Lives) | Dharmarakṣa (西晉 285 CE) | Classical Chinese | Hanzi | `cbeta-t0152-shengmu-jing.pdf` | `cbeta-t0152-shengmu-jing.md` | Primary Canonical Sūtra | PASS (Digital XML) |
| `S-0700-cbeta-t1451-mulasarv` | 根本說一切有部毘奈耶雜事 卷第二十九 (Kṣudrakavastu) | Yijing (唐代 710 CE) | Classical Chinese | Hanzi | `cbeta-t1451-mulasarvastivada-ksudrakavastu.pdf` | `cbeta-t1451-mulasarvastivada-ksudrakavastu.md` | Primary Monastic Vinaya | PASS (Digital XML) |
| `S-0500-dhpa-yamakapatihariya` | Dhammapada-aṭṭhakathā: Yamakapāṭihāriyavatthu (ad Dhp 181, 382) | Buddhaghosa (attrib. 5th c. CE) | Pāli | Roman | `dhammapada-atthakatha-yamakapatihāriya.pdf` | `dhammapada-atthakatha-yamakapatihāriya.md` | Primary Classical Aṭṭhakathā | PASS (Digital CST4) |
| `S-0500-atthasalini-nidanakatha` | Atthasālinī: Dhammasaṅgaṇī-aṭṭhakathā (Nidānakathā) | Buddhaghosa (5th c. CE) | Pāli | Roman | `atthasalini-nidanakatha.pdf` | `atthasalini-nidanakatha.md` | Primary Philosophical Aṭṭhakathā | PASS (Digital CST4) |
| `S-0300-divyavadana-pratiharya` | Divyāvadāna: Chapter XII Prātihāryasūtra (Sāṃkāśya Devatāvataraṇa) | Mūlasarvāstivāda Tradition (Cowell & Neil / Vaidya) | Sanskrit | IAST | `divyavadana-pratiharyasutra.pdf` | `divyavadana-pratiharyasutra.md` | Primary Narrative Canon (Avadāna) | PASS (Digital GRETIL) |
| `S-1963-luders-bharhut-b18` | Bharhut Inscriptions: Entry B 18 (Descent from Heaven at Sankisa) | Heinrich Lüders (rev. Waldschmidt & Mehendale 1963) | English / Prakrit | Latin / Brāhmī | `luders-1963-bharhut-inscriptions-b18.pdf` | `luders-1963-bharhut-inscriptions-b18.md` | Primary Epigraphy & Archaeology | PASS (Clean Digital) |
| `S-1978-bareau-descente-ciel` | Le séjour du Buddha au ciel des Trente-Trois dieux et sa descente sur terre à Sāṅkāśya | André Bareau (1978) | French | Latin | `bareau-1978-descente-trente-trois.pdf` | `bareau-1978-descente-trente-trois.md` | Secondary Critical Study | PASS (Clean Digital) |
| `S-0646-cbeta-pilgrims-sankasya` | Records of Faxian (T2085) & Xuanzang (T2087) on Saṅkāśya | Faxian (414 CE) & Xuanzang (646 CE) | Classical Chinese | Hanzi | `cbeta-pilgrims-faxian-xuanzang-sankasya.pdf` | `cbeta-pilgrims-faxian-xuanzang-sankasya.md` | Primary Travelogue & Topography | PASS (Digital XML) |

---

### การปฏิบัติตามนโยบายภาษา (Language Coverage Compliance)

- **Tier 1 (บาลี - PA):** 2 แหล่ง (`S-0500-dhpa-yamakapatihariya`, `S-0500-atthasalini-nidanakatha`)
- **Tier 1 (สันสกฤต - SA):** 1 แหล่ง (`S-0300-divyavadana-pratiharya`)
- **Tier 1 (จีนโบราณ - ZH):** 4 แหล่ง (`S-0400-cbeta-t0125-zengyi`, `S-0285-cbeta-t0152-shengmu`, `S-0700-cbeta-t1451-mulasarv`, `S-0646-cbeta-pilgrims-sankasya`)
- **Tier 1 (จารึกโบราณ / ปรากฤต - PRA):** 1 แหล่ง (`S-1963-luders-bharhut-b18`)
- **Tier 2 (ฝรั่งเศส - FR):** 1 แหล่ง (`S-1978-bareau-descente-ciel`)
- **Tier 0 (อังกฤษ - EN):** 1 แหล่ง (`S-2012-analayo-abhidharma`)
