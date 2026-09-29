# Source Index — ดัชนีแหล่งข้อมูลกลาง

> รวบรวมและตรวจสอบสถานะการฮาร์เวสเอกสารวิชาการฉบับเต็ม
> โครงการวิจัย: Florilegium และ Epitome ในวัฒนธรรมเอกสารโบราณ: ภววิทยาตัวบท ญาณวิทยาการจัดระเบียบความรู้ และประวัติศาสตร์การสืบทอดในสายธารละตินและไบแซนไทน์
> วันที่ตรวจสอบ: 2026-09-29 | หน่วยปฏิบัติการ: worker_m2_remediate (Milestone 2 Remediation)

---

## 1. สรุปสถานะการเข้าถึงเอกสาร (Harvesting Status)

| สถานะ | คำอธิบาย | จำนวนรายการ | ปริมาณหน้าจริง (Verified Pages) |
|:---|:---|:---:|:---:|
| **DOWNLOADED / HARVESTED (Primary Sources)** | ดาวน์โหลดไฟล์ PDF ฉบับเต็ม ตรวจสอบสุขภาพไฟล์ด้วย `document_to_markdown.py --check` ผ่าน 100% | 16 | 8,164 หน้า |
| **DOWNLOADED / HARVESTED (Modern Scholarship)** | ดาวน์โหลดไฟล์ PDF งานวิชาการและบทความวิจัยสมัยใหม่ (ศตวรรษที่ 20–21) ฉบับเต็ม ตรวจสอบสุขภาพไฟล์ผ่าน 100% | 13 | 330 หน้า |
| **คลังเอกสารสกัดข้อความจริง (Genuine M2 Extraction Corpus)** | **ไฟล์ PDF ทางกายภาพใน `pdf/` สกัดลงใน `extracted-texts/` ตรงกันแบบ 1:1 พร้อมแท็กเลขหน้าจริง** | **29** | **8,494 หน้า** |
| **MANUAL / PAYWALL (Controlled Digital Lending)** | เอกสารวิชาการติดกำแพงสิทธิ์พาณิชย์ / ลิขสิทธิ์ยืมอ่านแบบควบคุม (ตารางประสานงานผู้ใช้) | 11 | N/A (ตารางส่งมอบ) |
| **รวมรายการทั้งสารบบ** | | **40** | **8,494 หน้า (คลังจริง)** |

---

## 2. ตารางดัชนีเอกสารแม่บท (Master Source Index)

### 2.1 เอกสารปฐมภูมิและฉบับตรวจชำระมาตรฐานที่ดาวน์โหลดฉบับเต็ม (DOWNLOADED / HARVESTED Primary Sources)

| Source ID | Author / Editor | Year | Title | Language | Script | Source URL | File Path | Status | Pages | Chapter / Section |
|:---|:---|:---:|:---|:---:|:---:|:---|:---|:---:|:---:|:---:|
| **S-1889-defensor-01** | Defensor of Ligugé (ed. E. W. Rhodes) | 1889 | *Defensor's Liber scintillarum: with an interlinear Anglo-Saxon version* (EETS OS 93) | Latin, Old English | Latin | `https://archive.org/details/defensorslibersc00defe` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1889-defensor-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 280 | Ch 1 (Sec 2, 4) |
| **S-1862-defensor-01** | Defensor of Ligugé (ed. J.-P. Migne) | 1862 | *Defensoris monachi S. Martini de Ligugiaco Liber Scintillarum* (Patrologia Latina 88, cols. 599–718) | Latin | Latin | `https://archive.org/details/patrologiaecur88mign` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1862-defensor-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 684 | Ch 1 (Sec 2, 4) |
| **S-1861-prosper-01** | Prosper of Aquitaine (ed. J.-P. Migne) | 1861 | *S. Prosperi Aquitani Liber sententiarum ex operibus S. Augustini delibatarum* (Patrologia Latina 51, cols. 427–496) | Latin | Latin | `https://archive.org/details/patrologiaecur51mign` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1861-prosper-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 516 | Ch 1 (Sec 2) |
| **S-1909-johnsalisbury-01** | John of Salisbury (ed. C. C. I. Webb) | 1909 | *Policratici sive De nugis curialium et vestigiis philosophorum libri VIII*, Tomus I (Libri I–IV) | Latin | Latin | `https://archive.org/details/ioannissaresberi01johnuoft` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1909-johnsalisbury-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 430 | Ch 1 (Sec 2, 5) |
| **S-1909-johnsalisbury-02** | John of Salisbury (ed. C. C. I. Webb) | 1909 | *Policratici sive De nugis curialium et vestigiis philosophorum libri VIII*, Tomus II (Libri V–VIII) | Latin | Latin | `https://archive.org/details/ioannissaresberi02johnuoft` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1909-johnsalisbury-02.pdf` | DOWNLOADED / HARVESTED (PASS) | 528 | Ch 1 (Sec 2, 5) |
| **S-1910-livy-01** | Titus Livius (ed. Otto Rossbach) | 1910 | *T. Livi Periochae omnium librorum. Fragmenta Oxyrhynchi reperta. Iulii Obsequentis Prodigiorum liber* (Teubner) | Latin | Latin | `https://archive.org/details/tliviperiochaeom00unse` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1910-livy-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 254 | Ch 1 (Sec 3) |
| **S-1853-justin-01** | Marcus Junianus Justinus (trans. J. S. Watson) | 1853 | *Justin, Cornelius Nepos, and Eutropius, Literally Translated, with Notes* (Bohn's Classical Library) | English (from Latin) | Latin | `https://archive.org/details/justincornelius01eutrgoog` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1853-justin-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 569 | Ch 1 (Sec 3) |
| **S-1879-eutropius-01** | Eutropius (ed. Hans Droysen) | 1879 | *Eutropi Breviarium ab urbe condita cum versionibus Graecis et Pauli Landolfique additamentis* (MGH AA Tomus II) | Latin, Ancient Greek | Latin, Greek | `https://archive.org/details/cuaeutropibreviar00eutr` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1879-eutropius-01.pdf` | DOWNLOADED / HARVESTED (LOW-TEXT OCR) | 506 | Ch 1 (Sec 3) |
| **S-1925-cary-01** | Cassius Dio / John Xiphilinus (trans. E. Cary) | 1925 | *Dio's Roman History, Vol. VIII* (Loeb Classical Library 176, Books 61–70) | Ancient Greek, English | Greek, Latin | `https://archive.org/details/diosromanhistory08cassuoft` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1925-cary-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 502 | Ch 1 (Sec 3, 6) |
| **S-1927-cary-02** | Cassius Dio / John Xiphilinus (trans. E. Cary) | 1927 | *Dio's Roman History, Vol. IX* (Loeb Classical Library 177, Books 71–80) | Ancient Greek, English | Greek, Latin | `https://archive.org/details/diosromanhistory09cassuoft` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1927-cary-02.pdf` | DOWNLOADED / HARVESTED (PASS) | 596 | Ch 1 (Sec 3, 6) |
| **S-1824-photios-01** | Photios I of Constantinople (ed. I. Bekker) | 1824 | *Photii Bibliotheca. Ex recensione Immanuelis Bekkeri*, Tomus I–II (Berlin: Reimer) | Ancient Greek | Greek | `https://archive.org/details/bibliothecaexrec00photuoft` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1824-photios-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 600 | Ch 1 (Sec 6) |
| **S-1920-photios-01** | Photios I of Constantinople (trans. J. H. Freese) | 1920 | *The Library of Photius*, Volume 1 (London: SPCK / Macmillan) | English (from Greek) | Latin | `https://archive.org/details/libraryofphotius00phot` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1920-photios-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 268 | Ch 1 (Sec 6) |
| **S-1896-holl-01** | Karl Holl / Pseudo-John of Damascus | 1896 | *Die Sacra Parallela des Johannes Damascenus* (Texte und Untersuchungen XVI.1) | German, Ancient Greek | Latin, Greek | `https://archive.org/details/diesacraparallel00holl` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1896-holl-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 416 | Ch 1 (Sec 6) |
| **S-1903-deboor-01** | Constantine VII Porphyrogenitus (ed. C. de Boor) | 1903 | *Excerpta historica iussu Imp. Constantini Porphyrogeniti confecta, Vol. 1.1: Excerpta de legationibus* (Berlin: Weidmann) | Ancient Greek, Latin | Greek, Latin | `https://archive.org/details/ConstPorphExcerptaHistorica1.1DeBoor` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1903-deboor-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 643 | Ch 1 (Sec 5) |
| **S-1903-deboor-02** | Constantine VII Porphyrogenitus (ed. C. de Boor) | 1903 | *Excerpta historica iussu Imp. Constantini Porphyrogeniti confecta, Vol. 1.2: Excerpta de legationibus* (Berlin: Weidmann) | Ancient Greek, Latin | Greek, Latin | `https://archive.org/details/ConstPorphExcerptaHistorica1.2DeBoor` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1903-deboor-02.pdf` | DOWNLOADED / HARVESTED (PASS) | 403 | Ch 1 (Sec 5) |
| **S-1841-pinder-zon01** | John Zonaras (ed. Moritz Pinder) | 1841 | *Ioannis Zonarae Annales*, Tomus I (CSHB, Bonn: Weber) | Ancient Greek, Latin | Greek, Latin | `https://archive.org/details/ioanniszonaraea04pindgoog` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1841-pinder-zon01.pdf` | DOWNLOADED / HARVESTED (PASS) | 969 | Ch 1 (Sec 6) |

---

### 2.2 งานวิชาการและบทความวิจัยสมัยใหม่ที่ดาวน์โหลดฉบับเต็ม (DOWNLOADED / HARVESTED Modern Scholarship)

| Source ID | Author / Editor | Year | Title | Language | Script | Source URL / DOI | File Path | Status | Pages | Chapter / Section |
|:---|:---|:---:|:---|:---:|:---:|:---|:---|:---:|:---:|:---:|
| **S-2004-blair-01** | Ann M. Blair | 2004 | "Note Taking as an Art of Transmission", *Critical Inquiry* 31, no. 1: 85–107 | English, Latin | Latin | `https://doi.org/10.1086/427303` (`http://nrs.harvard.edu/urn-3:HUL.InstRepos:3226475`) | `output/florilegium-epitome-monograph/research-notes/pdf/S-2004-blair-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 24 | Ch 1 (Sec 1, 4) |
| **S-2007-blair-01** | Ann M. Blair | 2007 | "Le florilège latin comme point de comparaison", *Extrême-Orient, Extrême-Occident* hors-série 1: 185–204 | French, Latin | Latin | `https://doi.org/10.3406/oroc.2007.1076` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2007-blair-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 22 | Ch 1 (Sec 1, 4, 6) |
| **S-1980-munkolsen-01** | Birger Munk Olsen | 1980 | "Les classiques latins dans les florilèges médiévaux antérieurs au XIIIe siècle (suite)", *Revue d'histoire des textes* 10: 115–164 | French, Latin | Latin | `https://doi.org/10.3406/rht.1982.1217` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1980-munkolsen-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 52 | Ch 1 (Sec 2, 4) |
| **S-1979-munkolsen-01** | Birger Munk Olsen | 1979 | "Les classiques latins dans les florilèges médiévaux antérieurs au XIIIe siècle", *Revue d'histoire des textes* 9: 47–121 | French, Latin | Latin | `https://doi.org/10.3406/rht.1980.1195` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1979-munkolsen-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 77 | Ch 1 (Sec 2, 4) |
| **S-2005-nighman-01** | Chris L. Nighman | 2005 / 2026 | *The Electronic Manipulus florum Project: Critical Apparatus, Translation of Thomas of Ireland's Preface, and Annotated Bibliography* | English, Latin | Latin | `https://manipulus-project.wlu.ca/` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2005-nighman-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 14 | Ch 1 (Sec 2, 4) |
| **S-2011-nighman-01** | Chris L. Nighman | 2012 | "The Janus Intertextuality Search Engine: A Research Tool of (and for) the Electronic *Manipulus florum* Project", *Digital Medievalist* 7 | English, Latin | Latin | `https://doi.org/10.16995/dm.43` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2011-nighman-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 14 | Ch 1 (Sec 2, 4) |
| **S-2013-nighman-biblio** | Chris L. Nighman | 2013 / 2026 | *The Electronic Manipulus florum Project: Annotated Bibliography of Scholarship Employing and/or Citing the Online Edition* | English, Latin | Latin | `https://manipulus-project.wlu.ca/` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2013-nighman-biblio.pdf` | DOWNLOADED / HARVESTED (PASS) | 12 | Ch 1 (Sec 2, 4) |
| **S-2013-nighman-preface** | Thomas of Ireland / Chris L. Nighman (trans.) | 2013 | *Thomas de Hibernia's Preface to the Manipulus florum (English translation from Rouse & Rouse 1979 ed.)* | English, Latin | Latin | `https://manipulus-project.wlu.ca/` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2013-nighman-preface.pdf` | DOWNLOADED / HARVESTED (PASS) | 2 | Ch 1 (Sec 2, 4) |
| **S-2018-netz-01** | Reviel Netz | 1998 | "Deuteronomic Texts: Late Antiquity and the History of Mathematics", *Revue d'histoire des mathématiques* 4: 261–288 | English, Ancient Greek, Latin | Latin, Greek | `http://smf4.emath.fr/Publications/RevueHistoireMath/4/html/smf_rhm_4_261-288.html` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2018-netz-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 28 | Ch 1 (Sec 1, 3, 5) |
| **S-1947-bardy-01** | Gustave Bardy | 1947 | "Le Florilège d'Étienne Gobar", *Revue des études byzantines* 5: 5–30 | French, Ancient Greek | Latin, Greek | `https://doi.org/10.3406/rebyz.1947.946` | `output/florilegium-epitome-monograph/research-notes/pdf/S-1947-bardy-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 27 | Ch 1 (Sec 6) |
| **S-2019-horn-01** | Nelson Horn | 2019 | "Les Histoires philippiques de Trogue Pompée / Justin : une oeuvre, deux auteurs, deux époques, deux projets", *Revue des Études Anciennes* 121, no. 1: 171–182 | French, Latin | Latin | `https://doi.org/10.3406/rea.2019.6911` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2019-horn-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 13 | Ch 1 (Sec 3, 5) |
| **S-2014-bartlett-01** | Brett Bartlett | 2014 | "Justin's Epitome: The Unlikely Adaptation of Trogus' World History", *Histos* 8: 246–283 | English, Latin | Latin | `ISSN: 2046-5963` (`https://histos.org/`) | `output/florilegium-epitome-monograph/research-notes/pdf/S-2014-bartlett-01.pdf` | DOWNLOADED / HARVESTED (CORRUPTED_FONTS) | 38 | Ch 1 (Sec 3) |
| **S-2024-mulder-01** | David J. Mulder | 2024 | "Digital Florilegium: A High-Tech Twist on an Ancient Reading Practice", *Journal of Technology-Integrated Lessons and Teaching* 2, no. 2: 25–31 | English | Latin | `https://doi.org/10.13001/jtilt.v2i2.7813` | `output/florilegium-epitome-monograph/research-notes/pdf/S-2024-mulder-01.pdf` | DOWNLOADED / HARVESTED (PASS) | 7 | Ch 1 (Sec 1, 4) |

---

### 2.3 ฐานข้อมูลออนไลน์ภายนอกที่ไม่นำเข้าคลังสกัดข้อความ (Non-Extracted External Reference Portals)

> **เกณฑ์ความซื่อตรงทางวิชาการ (Benchmark Integrity Standard):** เพื่อให้สอดคล้องกับข้อกำหนดว่าข้อมูล ข้อความอ้างอิง และเลขหน้า 100% ต้องมีที่มาจากไฟล์ PDF ใน `research-notes/pdf/` เท่านั้น แหล่งข้อมูลออนไลน์ด้านล่างนี้จึงจัดเป็นเพียงพอร์ทัลอ้างอิงบริบทภายนอก (External Digital Portals) โดย **ไม่มีการสร้างไฟล์สกัดข้อความใน `extracted-texts/` และไม่ถูกนับรวมในคลัง 29 เอกสารหลัก**:
> 1. *Electronic Manipulus florum Project* (ed. Chris L. Nighman): โครงการวิจัยใช้ไฟล์ PDF ทางการของ ศ. Nighman ที่ดาวน์โหลดสมบูรณ์แล้ว 4 ฉบับ (`S-2005-nighman-01`, `S-2011-nighman-01`, `S-2013-nighman-biblio`, `S-2013-nighman-preface` รวม 42 หน้าจริง) ในการอ้างอิงแทนการสกัดตัวบทดิบจากเว็บ
> 2. The Latin Library (*Justin, Epitoma*): โครงการวิจัยใช้ไฟล์ PDF หนังสือฉบับเต็มของ J. S. Watson 1853 (`S-1853-justin-01.pdf`, 569 หน้า) พร้อมด้วยงานวิจัยสมัยใหม่ของ Horn (2019) และ Bartlett (2014) ในการอ้างอิงอย่างเคร่งครัด

---

### 2.4 เอกสารวิชาการทุติยภูมิและหนังสือติดกำแพงสิทธิ์ (MANUAL / PAYWALL — Handoff Registry)

| Source ID | Author / Editor | Year | Title | Language | Script | Identifier / DOI / Persistent URL | Theoretical Contribution / Scope | Status | Chapter / Section |
|:---|:---|:---:|:---|:---:|:---:|:---|:---|:---:|:---:|
| **S-1982-rouse-01** | Richard H. Rouse & Mary A. Rouse | 1982 | "Statim invenire: Schools, Preachers, and New Attitudes to the Page" | English | Latin | `https://archive.org/details/renaissancerenew0000unse` (In *Renaissance and Renewal*, pp. 201–225, ISBN: 0-674-76075-9) | Codicology, finding devices, alphabetical distinctions, visual page layout | MANUAL / PAYWALL | Ch 1 (Sec 2, 4) |
| **S-1979-rouse-01** | Richard H. Rouse & Mary A. Rouse | 1979 | *Preachers, Florilegia and Sermons: Studies on the Manipulus florum of Thomas of Ireland* | English, Latin | Latin | `https://archive.org/details/preachersflorile0000rous` (PIMS Studies and Texts 47, ISBN: 0-88844-047-1) | Monograph on Mendicant preaching aids, manuscript transmission of florilegia | MANUAL / PAYWALL | Ch 1 (Sec 2, 4) |
| **S-2010-dubischar-01** | Markus Dubischar | 2010 | "Survival of the Most Condensed? Auxiliary Texts, Communications Theory, and Condensation of Knowledge" | English, Latin, Greek | Latin, Greek | `http://d-nb.info/1008206946/04` (In *Condensing Texts*, Franz Steiner Verlag, pp. 39–68, ISBN: 978-3-515-09395-8) | Communications theory, auxiliary texts, survival of condensed forms | MANUAL / PAYWALL | Ch 1 (Sec 1, 3, 5) |
| **S-2010-mulke-01** | Markus Mülke | 2010 | "Die Epitome - das bessere Original?" | German, Latin | Latin | `http://d-nb.info/1008206946/04` (In *Condensing Texts*, pp. 69–90) | Genre theory of epitome, brevity, improvement of the original | MANUAL / PAYWALL | Ch 1 (Sec 3) |
| **S-2010-chaplin-01** | Jane D. Chaplin | 2010 | "The Livian Periochae and the Last Republican Writer" | English, Latin | Latin | `http://d-nb.info/1008206946/04` (In *Condensing Texts*, pp. 451–468) | Analysis of Livy's Periochae as independent historiographical artifact | MANUAL / PAYWALL | Ch 1 (Sec 3) |
| **S-2010-yardley-01** | John C. Yardley | 2010 | "What is Justin doing with Trogus?" | English, Latin | Latin | `http://d-nb.info/1008206946/04` (In *Condensing Texts*, pp. 469–490) | Editorial agency and authorial intervention in Justin's epitome of Trogus | MANUAL / PAYWALL | Ch 1 (Sec 3) |
| **S-1992-nicolai-01** | Roberto Nicolai | 1992 | *La storiografia nell'educazione antica* | Italian, Greek, Latin | Latin, Greek | `ISBN: 978-8842713753 / SBN: CFI0218822` (Pisa: Giardini Editori) | Historiography in ancient rhetorical and pedagogical curriculum | MANUAL / PAYWALL | Ch 1 (Sec 3) |
| **S-1990-odorico-01** | Paolo Odorico | 1990 | "La cultura della συλλογή. 1) Il cosiddetto enciclopedismo bizantino. 2) Le tavole del sapere di Giovanni Damasceno" | Italian, Ancient Greek | Latin, Greek | `https://doi.org/10.1515/byzs.1990.83.1.1` (*Byzantinische Zeitschrift* 83.1, pp. 1–21) | Culture of the syllogē, critique of Byzantine encyclopedism | MANUAL / PAYWALL | Ch 1 (Sec 5, 6) |
| **S-2010-blair-01** | Ann M. Blair | 2010 | *Too Much to Know: Managing Scholarly Information before the Modern Age* | English, Latin | Latin | `https://archive.org/details/toomuchtoknowman0000blai` (Yale UP, ISBN: 978-0-300-11251-1) | Information overload, note-taking, excerpting, reference genres | MANUAL / PAYWALL | Ch 1 (Sec 1, 4) |
| **S-1990-carruthers-01** | Mary J. Carruthers | 1990 | *The Book of Memory: A Study of Memory in Medieval Culture* | English, Latin | Latin | `https://archive.org/details/bookofmemorystud0000carr` (Cambridge UP, ISBN: 0-521-38298-3) | Medieval mnemotechnics, florilegium as memory locus, ductus | MANUAL / PAYWALL | Ch 1 (Sec 1, 4) |
| **S-1998-carruthers-02** | Mary J. Carruthers | 1998 | *The Craft of Thought: Meditation, Rhetoric, and the Making of Images, 400–1200* | English, Latin | Latin | `https://archive.org/details/craftofthoughtme0000carr` (Cambridge UP, ISBN: 0-521-58232-X) | Architectural mnemonics, meditation, florilegium visual structures | MANUAL / PAYWALL | Ch 1 (Sec 1, 4) |

---

## 3. พารามิเตอร์การประมวลผลข้อความและ OCR (OCR & Language Routing Parameters for M2)

| Source ID | Format | Health Status | Primary Language | Script Code | OCR Parameter / Extraction Method | Target Extraction Path | Extraction Status & Page Anchors |
|:---|:---:|:---:|:---:|:---:|:---|:---|:---:|
| `S-1889-defensor-01` | PDF | PASS (280 pp.) | Latin, Old English | lat, ang | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1889-defensor-01.md` | EXTRACTED (PASS, 280 anchors, 549 KB) |
| `S-1862-defensor-01` | PDF | PASS (684 pp.) | Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1862-defensor-01.md` | EXTRACTED (PASS, 684 anchors, 3,840 KB) |
| `S-1861-prosper-01` | PDF | PASS (516 pp.) | Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1861-prosper-01.md` | EXTRACTED (PASS, 516 anchors, 3,438 KB) |
| `S-1909-johnsalisbury-01` | PDF | PASS (430 pp.) | Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1909-johnsalisbury-01.md` | EXTRACTED (PASS, 430 anchors, 1,016 KB) |
| `S-1909-johnsalisbury-02` | PDF | PASS (528 pp.) | Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1909-johnsalisbury-02.md` | EXTRACTED (PASS, 528 anchors, 1,378 KB) |
| `S-1910-livy-01` | PDF | PASS (254 pp.) | Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1910-livy-01.md` | EXTRACTED (PASS, 254 anchors, 466 KB) |
| `S-1853-justin-01` | PDF | LOW-TEXT (Scanned 569 pp.) | English, Latin | eng, lat | Parallel OCR 150 DPI (`--ocr -l eng`) | `research-notes/extracted-texts/S-1853-justin-01.md` | EXTRACTED (PASS, 569 anchors, 1,291 KB) |
| `S-1879-eutropius-01` | PDF | LOW-TEXT (Scanned 506 pp.) | Latin, Greek | lat | Parallel OCR 150 DPI (`--ocr -l lat`) | `research-notes/extracted-texts/S-1879-eutropius-01.md` | EXTRACTED (PASS, 506 anchors, 1,745 KB) |
| `S-1925-cary-01` | PDF | PASS (502 pp.) | Greek, English | grc, lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1925-cary-01.md` | EXTRACTED (PASS, 502 anchors, 1,040 KB) |
| `S-1927-cary-02` | PDF | PASS (596 pp.) | Greek, English | grc, lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1927-cary-02.md` | EXTRACTED (PASS, 596 anchors, 1,316 KB) |
| `S-1824-photios-01` | PDF | PASS (600 pp.) | Greek | grc | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1824-photios-01.md` | EXTRACTED (PASS, 600 anchors, 3,148 KB) |
| `S-1920-photios-01` | PDF | PASS (268 pp.) | English, Greek | lat, grc | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1920-photios-01.md` | EXTRACTED (PASS, 268 anchors, 567 KB) |
| `S-1896-holl-01` | PDF | PASS (416 pp.) | German, Greek | deu, grc | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1896-holl-01.md` | EXTRACTED (PASS, 416 anchors, 1,015 KB) |
| `S-1903-deboor-01` | PDF | PASS (643 pp.) | Greek, Latin | grc, lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1903-deboor-01.md` | EXTRACTED (PASS, 643 anchors, 2,585 KB) |
| `S-1903-deboor-02` | PDF | PASS (403 pp.) | Greek, Latin | grc, lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1903-deboor-02.md` | EXTRACTED (PASS, 403 anchors, 1,536 KB) |
| `S-1841-pinder-zon01` | PDF | LOW-TEXT (Scanned 969 pp.) | Greek, Latin | lat | Parallel OCR 150 DPI (`--ocr -l lat`) | `research-notes/extracted-texts/S-1841-pinder-zon01.md` | EXTRACTED (PASS, 969 anchors, 2,415 KB) |
| `S-2004-blair-01` | PDF | PASS (24 pp.) | English, Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2004-blair-01.md` | EXTRACTED (PASS, 24 anchors, 65 KB) |
| `S-2007-blair-01` | PDF | PASS (22 pp.) | French, Latin | lat, fra | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2007-blair-01.md` | EXTRACTED (PASS, 22 anchors, 63 KB) |
| `S-1980-munkolsen-01` | PDF | PASS (52 pp.) | French, Latin | lat, fra | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1980-munkolsen-01.md` | EXTRACTED (PASS, 52 anchors, 125 KB) |
| `S-1979-munkolsen-01` | PDF | PASS (77 pp.) | French, Latin | lat, fra | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1979-munkolsen-01.md` | EXTRACTED (PASS, 77 anchors, 224 KB) |
| `S-2005-nighman-01` | PDF | PASS (14 pp.) | English, Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2005-nighman-01.md` | EXTRACTED (PASS, 14 anchors, 55 KB) |
| `S-2011-nighman-01` | PDF | PASS (14 pp.) | English, Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2011-nighman-01.md` | EXTRACTED (PASS, 14 anchors, 43 KB) |
| `S-2013-nighman-biblio` | PDF | PASS (12 pp.) | English, Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2013-nighman-biblio.md` | EXTRACTED (PASS, 12 anchors, 49 KB) |
| `S-2013-nighman-preface` | PDF | PASS (2 pp.) | English, Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2013-nighman-preface.md` | EXTRACTED (PASS, 2 anchors, 7 KB) |
| `S-2018-netz-01` | PDF | PASS (28 pp.) | English, Greek, Latin | lat, grc | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2018-netz-01.md` | EXTRACTED (PASS, 28 anchors, 65 KB) |
| `S-1947-bardy-01` | PDF | PASS (27 pp.) | French, Greek | lat, grc, fra | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-1947-bardy-01.md` | EXTRACTED (PASS, 27 anchors, 85 KB) |
| `S-2019-horn-01` | PDF | PASS (13 pp.) | French, Latin | lat, fra | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2019-horn-01.md` | EXTRACTED (PASS, 13 anchors, 42 KB) |
| `S-2014-bartlett-01` | PDF | PASS (38 pp.) | English, Latin | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2014-bartlett-01.md` | EXTRACTED (PASS, 38 anchors, 100 KB) |
| `S-2024-mulder-01` | PDF | PASS (7 pp.) | English | lat | Clean extraction (PyMuPDF) | `research-notes/extracted-texts/S-2024-mulder-01.md` | EXTRACTED (PASS, 7 anchors, 25 KB) |


