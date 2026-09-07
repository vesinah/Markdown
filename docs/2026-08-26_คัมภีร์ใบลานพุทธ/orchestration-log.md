# Orchestration Log — palm_leaf_buddhist_manuscripts

**Orchestrator:** ox-alpha | **เริ่ม:** 2026-08-26

## Phase A — Foraging Loops (20 ลูป)

### Batch 1 (A01-A05) — สถานะ: สมบูรณ์ 4/5 + ซ่อม A04

| ลูป | หัวข้อ | สถานะ | หมายเหตุ |
|:---:|:---|:---:|:---|
| A01 | Historiography/codicology infrastructure | DONE | 15 ไฟล์; PTS 1881, NGMPP 1970 ~180k ms, FPL 1994/2001, EBMP 1996, EAP 562 grants |
| A02 | Botany/material science | DONE | 14 ไฟล์; 3 ชนิดพันธุ์หลัก+ตารางกรรมวิธีรายประเทศ; npj Heritage Sci 2024/2025 |
| A03 | Writing techniques | DONE | 14 ไฟล์; panhida/kalu-medima; Schuyler 1908 Siam; DMC 2557 procedure |
| A04 | Pothi anatomy/storage | INTERRUPTED | 10 ไฟล์ดิบครบ แต่ขาด md deliverables → มอบหมาย agent ซ่อมจากไฟล์ดิบ |
| A05 | Scripts/paleo-dating | DONE | 15 ไฟล์; EBMP 76 scrolls 1 BCE-3 CE; Newa 10th c.; kammavaca square script |

**เทคนิคการเข้าถึงที่พิสูจน์แล้ว (ส่งต่อ Batch 2):**
- DDG HTML บางครั้งโดนบล็อก → ใช้ `https://r.jina.ai/<URL>` proxy (A01 ใช้สำเร็จ)
- Crossref API `https://api.crossref.org/works?query=` ยืนยัน metadata DOI (A05 ใช้สำเร็จ)
- Marginalia Search token-flow ใช้สำรองได้ (A05)
- eap.bl.uk / siamese-heritage.org = bot-walled/hijacked → ห้ามอ้างอิงตรง
- depts.washington.edu/ebmp parked → ใช้ asian.washington.edu/early-buddhist-manuscripts-project แทน

### Batch 2 (A06-A10) — สถานะ: สมบูรณ์ 5/5 (+ซ่อม A04)

| ลูป | หัวข้อ | สถานะ | ข้อค้นพบหลัก |
|:---:|:---|:---:|:---|
| A04-repair | Pothi anatomy/storage | DONE | phuk มัดไทย 2 เชือก/3-5 บรรทัด; Bühler §37 pothi rules; sadaik/Thiho Taik/Shway Yoe; ปกไม้ปิดทอง-แม่เพชร-กระจกเงา(ฉาน) |
| A06 | Languages | DONE | Gāndhārī→pothi palm leaf 3-4 c.; bitext names nissaya/nisrai/prè lot prayog; Tiṁsatinipāta CE1471 Wat Lai Hin; Tham=religious/Lao Buhan=secular diglossia |
| A07 | Scribal culture | DONE | Vat Si Bun Hüang 541 ms/353 dated; 87 ผู้อุปถัมภ์สตรี; kha="serf of Buddha"; Yasothon % stats; Luang Prabang ~10,200 ms เก่าสุด Parivāra 1520 |
| A08 | India/Gandhara | DONE | BL 1994 clay pot Hāḍḍa Dharmaguptaka; Senior year 12 ~140 CE C14; GMP Islamabad 50-60 scrolls 2022; Gilgit 1931 shepherd Naupur; monsoon-zone climate rationale |
| A09 | Nepal | DONE | NGMPP 1970 >180k ms ≈5M folios; talipot→16th c., tāmsuk 1334; Gaṇḍavyūha Met late 11th; Skanda Purana 810 claim; palm→paper date ยังไม่ยืนยัน |
| A10 | Sri Lanka | DONE | Cabral NL-SL ritual chain full; oldest SL mss 13th c.; Mahavamsa Peradeniya UNESCO MoW 2023; Hugh Nevill >2000 ms Somadasa cat.; SHB archive.org |

**ช่องว่างที่ต้องเก็บใน Phase B:** ho trai architecture; title-at-end convention; Theravada foliation; palm→paper Nepal date; Herngseng nissaya; Mon mss; Khmer full-text; Bali lontar full-text; Pala attribution; print-transition decline

### Batch 3 (A11-A15) — กำลังดำเนินการ
A11 เมียนมา | A12 ไทย | A13 ลาว | A14 กัมพูชา/เขมรครม | A15 โลกไท/ยูนนาน

## PHASE A CLOSED (2026-08-26)

- Batch 4 (A16-A20): DONE — lontar etymology/SHK Leiden Cod.Or.5023; Turfan ~15 langs pothi attested; Dunhuang IOL San 1492 palm-leaf Prajnaparamita 69 folios; Horyuji palm-leaf Heart Sutra Buhler 8th c.; RH 50%/70% thresholds; BDRC >27M pages; MoW x3 verified (Kuthodaw=stone stelae caveat); FPL 10,896 Burmese-style PLMs; Dai craft ICH 2008 (VIII-142 pending primary).
- Unbiased Agent verification: 40/40 URLs OK, 0 DEAD/MISMATCH -> phase-a-verification.md; verdict FIT FOR DRAFTING.
- Saturation: NOT saturated. Gaps -> Phase B topics B01-B10.

## PHASE B PLAN (10 loops, Citation Chaining)

| Loop | Topic | Targeted gap |
|:---:|:---|:---|
| B01 | ho trai architecture + Thai foliation/title conventions | A04/A12 |
| B02 | Nepal palm->paper transition + Bendall/Shastri catalogs + oldest Pali ms | A09 |
| B03 | nissaya/bitext scholarship deep dive | A06 |
| B04 | Mon manuscripts + Pyu-Mon continuity | A06/A05 |
| B05 | Cambodia EFEO database + Khmer Tripitaka printing + Harris | A14 |
| B06 | Bali lontar Buddhist texts full text + Sutasoma | A16 |
| B07 | Pala illuminated palm leaves + Add.1464 dating + India print decline | A08 |
| B08 | HTR/AI Tham-Khom + IIIF manifests + Transkribus | A19 |
| B09 | Conservation: College de France HAL + fungal papers + protocols | A18 |
| B10 | State-of-field reviews + economics + MoW nominations mining + ihchina | A20 |

## PHASE B CLOSED (2026-08-26)

- Unbiased Agent #2: 20/20 URLs OK, 0 DEAD/MISMATCH -> phase-b-verification.md; FIT FOR DRAFTING.
- Note: Penn Colenda retiring ~Oct 2026 -> re-anchor B03 link to digitalcollections.library.upenn.edu when drafting; 3 PDF endpoints need r.jina.ai proxy.
- Saturation: remaining gaps bounded to 5 clusters -> Phase C.

## PHASE C PLAN (5 loops)

| Loop | Topic | Source gap |
|:---:|:---|:---|
| C01 | ho trai quantitative (Pengkasit extraction) + Lagirarde body + Khom foliation | B01 |
| C02 | Production economics full texts (Alahakoon JRASSL, Wiland/Nishanthi reviews, Berkwitz vol. chapters) | B10/A18 |
| C03 | SleukRith+PALM-SADA full PDFs + IIIF manifest browser probe + Tai Tham dataset feasibility | B08 |
| C04 | Mon/Pyu full text (Jenny 2005 zora, PYU007 TEI, MMDL, Duroiselle Talaing nissaya) | B04 |
| C05 | Pala corpus completion (Huntington/Kim/Losty/Asia Society 1987.1) + India print-decline discussion | B07 |

## PHASE C CLOSED + FINAL SATURATION (2026-08-26)

- Loops C01-C05: DONE. Unbiased Agent #3: 6 OK / 5 OK-LOCAL / 0 DEAD-MISMATCH-BLOCKED -> phase-c-verification.md; FIT FOR DRAFTING.
- TOTAL RESEARCH: 35 loops (A20/B10/C5), ~350 raw documents across 35 loop folders; verification rounds x3 all passed.
- SATURATION VERDICT: SATURATED per both criteria (new-loop marginal yield now minor; citation chaining recycles indexed corpus). Remaining unknowns documented as explicit gaps to state honestly in-draft (e.g., exact palm:khoi ratio Lan Na, monetary costs, Asia Society dating triangle, Pengkasit body OCR).
- NEXT GATE: Outline Gate #2 -> drafting 20 chapters via sub-agents into drafts/.

## QA INCIDENT LOG (2026-08-26)

- smart_footnote_sorter.py DEFECT: on drafts/01 it failed to parse multi-line footnote definitions (warned 'Missing definitions 1-78') and REPLACED all 78 definition entries with 'Warning: Unresolved definition' stubs (~11.2k chars lost). Other 19 files unaffected (verified char-count identical + zero stubs).
- ACTION: do NOT re-run smart_footnote_sorter on this project's files; writer agents self-verified sequential numbering. Repair agent dispatched to rebuild ch1 footnotes from loop evidence.

## PROJECT DELIVERED (2026-08-26)

- Drafting: 20/20 chapters complete (incl. ch1 footnote repair after sorter defect; ch6 re-run after interrupted agent).
- QA: count_words total 184,017 words (pre-validation); smart_footnote_sorter run on all files (ch1 incident logged & repaired); finish.ps1 VALIDATION PASSED all files -> validation-report.txt; copied to final/.
- final/: 00-สารบัญ.md + 20 chapters + references.md (410 unique sources: P25/S84/O301). Validation metrics: 181,807.6 words, 802 footnotes, 771 links (597 HEAD-reachable; remainder bot-walled with local raw copies).
- STATUS: COMPLETE. Deliverable at output/2026-08-26_คัมภีร์ใบลานพุทธ/final/
