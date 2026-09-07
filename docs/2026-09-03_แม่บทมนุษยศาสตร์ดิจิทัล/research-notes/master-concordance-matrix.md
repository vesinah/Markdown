# ตารางเทียบเคียงแม่บทมนุษยศาสตร์ดิจิทัลและวิทยาการข้อมูลเอกสาร (Master Concordance Matrix)

> **โครงการแม่บท:** `output/2026-09-03_แม่บทมนุษยศาสตร์ดิจิทัล`  
> **มิติการวิเคราะห์:** 3 โครงการย่อย x สถาปัตยกรรมทางเทคนิค x รูปแบบข้อมูล x การประยุกต์ใช้ x ตัวชี้วัดคุณภาพ

| มิติการวิเคราะห์ | `HTR_Research_Upgrade` | `XML_Standards_Guide` | `Genetics_Report` |
|:---|:---|:---|:---|
| **1. สถาปัตยกรรมอัลกอริทึม** | Convolutional Neural Network (CNN) + BiLSTM + Connectionist Temporal Classification (CTC) | XML Schema Definition (XSD), XSLT Transforms, Document Type Definition (DTD) | Bayesian MCMC (Markov Chain Monte Carlo), Birth-Death Models, Relaxed Clock Models |
| **2. มาตรฐานและซอฟต์แวร์** | Kraken, eScriptorium, PyTorch, เหมรังษี | PAGE XML (PRImA), ALTO XML (LoC), METS, TEI P5 | BEAST 2, MrBayes, PAUP*, SplitsTree, Python 'teiphy' |
| **3. โครงสร้างข้อมูลขาเข้า/ออก** | ภาพสแกน (TIFF/PNG) -> Polygon Baselines -> Text Transcript | พิกัดเรขาคณิต (Coords) + รหัสยูนิโค้ด + อภิข้อมูลโครงสร้าง | ตารางความแปรผันเชิงข้อความ (Nexus/Fasta) -> แผนภูมิสายเลือด (Tree/Network) |
| **4. วัตถุเป้าหมายทางประวัติศาสตร์** | ใบลานอักษรขอมไทย, สมุดพับอักษรธรรมล้านนา, เอกสารสยาม | คลังข้อมูลดิจิทัลหอสมุด, เอกสารตัวเขียนหลายชั้น, ดัชนีข้อความ | คัมภีร์ดัตช์ยุคกลาง, มาร์โค โปโล, ไบเบิลละติน, เหรียญโบราณ |
| **5. ตัวชี้วัดความแม่นยำ (Metrics)** | Character Error Rate (CER < 5%), Word Error Rate (WER) | Schema Validation (100% Valid XML), Interoperability Rate | Posterior Probability (> 0.95), Tree Certainty, Parsimony Score |
