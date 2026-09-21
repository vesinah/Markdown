# Project: คลังคัมภีร์ถ้ำมั่วเกาแห่งตุนหวง ถ้ำที่ 17 (Dunhuang Mogao Cave 17 / Library Cave Monograph)

## Architecture
An end-to-end, high-fidelity academic monograph production pipeline in 6 stages and 6 gates following `GEMINI.md` standards. The project investigates, synthesizes, and authors a comprehensive Thai-language scholarly monograph in 6 chapters across 14 micro-sprints (30,500–34,500 words; formula: `characters without spaces ÷ 5.0`) on the Dunhuang Mogao Cave 17 (The Library Cave: 敦煌莫高窟第17窟 / 藏经洞). The workflow encompasses multilingual full-text harvesting (>= 70 foundational documents in English, Chinese, French, Japanese, and Russian), automated Markdown conversion with `<!-- Page X -->` delimiters and multi-language OCR routing, source catalog synchronization, rigorous 4-part dossier creation with 20–25 verbatim quotes per document, 100% exact substring match verification via `verify_dossier.py` (Gate 3), dossier-driven micro-sprint drafting (2,500–3,000 words per section) without accessing raw PDFs, automated footnote sequencing and internal code sanitization via `footnote_engine.py`, and final book assembly with comprehensive Chicago Turabian bibliography.

### Components
1. **Multilingual Harvesting & Cataloging Engine**: `research-notes/pdf/`, `research-notes/source-index.md`, `source_index_builder.py` managing >= 70 full-text academic PDFs (EN ~40%, ZH ~35%, FR & JA ~25%, RU ~3.8%) spanning primary expedition reports and modern peer-reviewed monographs.
2. **Text Extraction & Multi-Language OCR Router**: `document_to_markdown.py` converting PDFs into high-fidelity Markdown in `research-notes/extracted-texts/*.md` with explicit `<!-- Page X -->` tags, font corruption detection (PUA < 0.05%, CID=0), and 300 DPI OCR routing.
3. **Dossier Production & Anti-Hallucination Gatekeeper**: `research-notes/sources/S-YYYY-author-chXX.md`, `quote_extractor.py`, and `verify_dossier.py` enforcing 100% Multi-Layer Exact Substring Match across 4 layers (literal, normalized whitespace, markdown stripped, normalized stripped) before drafting begins.
4. **Dossier-Driven Micro-Sprint Drafting System**: `drafts/sections/chXX_secYY.md` maintaining a strict 2,500–3,000 word ceiling per sprint, zero raw PDF reading during drafting, and continuous word tracking via `count_words.py`.
5. **Footnote Engine & Sanitization Filter**: `footnote_engine.py` re-indexing Chicago footnotes sequentially 1..N and eliminating 100% of internal system codes (`S-YYYY-` and `.md`) from drafts.
6. **Master Monograph Assembly & Bibliographic Builder**: `drafts/assembled/`, `final/01-06.md`, `final/00-สารบัญ.md`, and `final/references.md` consolidating the verified scholarly monograph.

---

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Master Project Blueprint & Governance | Master `PROJECT.md`, `project-plan.md`, `outline-proposal.md`, and `glossary.md` | M1 | ORIGINAL_REQUEST R2 & Gate 1 |
| 2 | Initial Foundational Corpus Ingestion | 8 primary Dunhuang PDFs ingested from `documents/` into `research-notes/pdf/` | M1 | ORIGINAL_REQUEST R1 |
| 3 | Multilingual Harvesting Expansion | Expand PDF corpus to >= 70 items across EN (~40%), ZH (~35%), FR/JA (~25%), RU (~3.8%) | M2 | ORIGINAL_REQUEST R1 & Gate 2 |
| 4 | Markdown Extraction & OCR Sync | Batch conversion of PDFs to Markdown with `<!-- Page X -->` and `source-index.md` 10-column sync | M2 | ORIGINAL_REQUEST R1 & Gate 2 |
| 5 | Rigorous 4-Part Dossier Production | Detailed synthesis (1,000–1,500 words) & Quotes Bank (20–25 verbatim quotes per dossier) | M3 | ORIGINAL_REQUEST R3 & Gate 3 |
| 6 | Programmatic Anti-Hallucination Audit | 100% verification pass with `verify_dossier.py` (0 mismatch, zero hallucination) | M3 | ORIGINAL_REQUEST R3 & Gate 3 |
| 7 | Chapter 1 Micro-Sprints (Origins & Development) | Sprints `ch01_sec01` & `ch01_sec02` (4,800 words): Hongbian, Cave 16-17, Sanjie Si, Silk Road multilinguality | M4 | ORIGINAL_REQUEST R2 & Gate 4 |
| 8 | Chapter 2 Micro-Sprints (Sealing & Oblivion) | Sprints `ch02_sec01` & `ch02_sec02` (4,800 words): Karakhanid, Sacred Waste, Monastic Storage, Tangut crises | M4 | ORIGINAL_REQUEST R2 & Gate 4 |
| 9 | Chapter 3 Micro-Sprints (Discovery & Late Qing) | Sprints `ch03_sec01` & `ch03_sec02` (4,800 words): Wang Yuanlu, 1900 discovery, Gansu bureaucracy, Boxer context | M4 | ORIGINAL_REQUEST R2 & Gate 4 |
| 10 | Chapter 4 Microhistory Core (Dispersal & Looting) | Sprints `ch04_sec01`, `ch04_sec02`, `ch04_sec03` (8,000 words): Stein, Pelliot, Otani, Oldenburg, Warner, 1910 tragedy | M4 | ORIGINAL_REQUEST R2 & Gate 4 |
| 11 | Chapter 5 Micro-Sprints (Dunhuangology History) | Sprints `ch05_sec01` & `ch05_sec02` (4,800 words): Chinese, French, Japanese, British, Russian schools & paradigm shifts | M4 | ORIGINAL_REQUEST R2 & Gate 4 |
| 12 | Chapter 6 Micro-Sprints (Digital Dunhuang & Future) | Sprints `ch06_sec01` & `ch06_sec02` (4,800 words): Global census, IDP, Digital Dunhuang, MSI, virtual repatriation | M4 | ORIGINAL_REQUEST R2 & Gate 4 |
| 13 | Chapter Assembly & Footnote Sanitization | Combine sections into `ch01.md`–`ch06.md`, run `footnote_engine.py`, 100% code scrub | M5 | ORIGINAL_REQUEST R4 & Gate 5 |
| 14 | Final Monograph Delivery & Audit | Complete `00-สารบัญ.md`, `references.md`, and 6 chapter files in `final/` (30,500–34,500 words) | M6 | ORIGINAL_REQUEST R2, R4 & Gate 6 |

---

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Inception, Reconnaissance & Blueprint (Gate 1) | Initialize folder architecture, copy 8 foundational PDFs, generate `PROJECT.md`, `project-plan.md`, `outline-proposal.md`, `glossary.md`, `dossier-template.md`, and `reading-progress.md` | none | IN_PROGRESS |
| M2 | Multilingual Harvesting & OCR (Gate 2) | Expand corpus to >= 70 full-text PDFs (EN/ZH/FR/JA/RU), extract Markdown texts with `<!-- Page X -->`, run OCR, and synchronize `source-index.md` | M1 | PLANNED |
| M3 | Rigorous Dossier Production & Anti-Hallucination Audit (Gate 3) | Produce 4-part dossiers in `research-notes/sources/`, mine verbatim quotes with `quote_extractor.py`, verify 100% exact substring match with `verify_dossier.py` | M2 | PLANNED |
| M4 | Dossier-Driven Micro-Sprint Drafting (Gate 4) | Draft 14 micro-sprints across 6 chapters in `drafts/sections/` (2,500–3,000 words/sprint), maintaining zero raw PDF access and strict empirical grounding | M3 | PLANNED |
| M5 | Assembly, Footnote Engine & Code Sanitization (Gate 5) | Assemble sections into `ch01.md`–`ch06.md`, run `footnote_engine.py` to re-index footnotes 1..N, purge all `S-YYYY-` codes and `.md` references | M4 | PLANNED |
| M6 | Comprehensive Monograph Assembly & Quality Sign-off (Gate 6) | Generate `final/references.md`, `final/00-สารบัญ.md`, transfer assembled chapters to `final/`, execute `count_words.py --project` (30,500–34,500 words), final sign-off | M5 | PLANNED |

---

## Interface Contracts
### 1. Central Source Index Contract (`research-notes/source-index.md`)
- Maintained by: `source_index_builder.py`
- Schema: 10 columns: `Source ID`, `ผู้แต่ง / ผู้รับผิดชอบ`, `ปีพิมพ์`, `ชื่อเรื่อง / เอกสาร`, `ประเภท`, `ภาษา`, `อักษร (Script)`, `แหล่งสืบค้น / Source URL`, `สถานะข้อความ & OCR Code`, `บทและหัวข้อที่จับคู่`.
- Language Codes: `EN` (English), `ZH` (Chinese), `FR` (French), `JA` (Japanese), `RU` (Russian), `SA` (Sanskrit), `BO` (Tibetan).

### 2. Dossier Anti-Hallucination Contract (`research-notes/sources/*.md`)
- Template: `research-notes/dossier-template.md`
- Header Requirement: `**ชื่อไฟล์ PDF ในเครื่อง:** [filename.pdf]` or `source_file: [filename.pdf]`.
- Quotes Bank Syntax: `> "[Exact Verbatim Text]" (p. XX)` matching extracted markdown 100%.
- Verification Engine: `python .agent/scripts/verify_dossier.py --project [project_path]` returning exit code 0.

### 3. Micro-Sprint Drafting Contract (`drafts/sections/chXX_secYY.md`)
- Length Sizing: 2,500–3,000 words per section (Formula: characters without spaces ÷ 5.0).
- Information Barrier: Authors must write exclusively from verified dossiers; direct raw PDF/EPUB opening is prohibited.
- Footnote Syntax: Numerical brackets `[1]`, `[2]`, `[3]` matching Ready Footnotes in dossiers.
- Language Policy: Natural, unsegmented Thai prose without artificial word spaces; foreign terms in original scripts or IAST brackets.

### 4. Footnote Engine & Sanitization Contract (`footnote_engine.py`)
- Footnote Format: Sequential 1..N starting at `[1]` per chapter.
- Safe Matching: Differentiates year brackets (e.g., `[1907]`) and Markdown links from footnote anchors.
- Sanitization: Removes 100% of internal dossier IDs (`S-YYYY-author-XX`), `.md` extensions, and draft tracking markers.

### 5. Word Counting & Final Audit Contract (`count_words.py`)
- Standard Metric: `(Total characters - whitespace - code fences - HTML comments) ÷ 5.0`.
- Target: 30,500–34,500 words across the monograph.
- Enforcement: `python .agent/scripts/count_words.py --project [project_path]`.

---

## Code Layout
- `output/2026-09-21_คลังคัมภีร์ตุนหวงโม่เกา_ถ้ำที่17/`:
  - `PROJECT.md`: Project master architectural specification and governance contract.
  - `project-plan.md`: Research plan, multilingual language plan (Tier 0/1/2), and keyword matrix.
  - `outline-proposal.md`: Master blueprint for 6 chapters across 14 micro-sprints with word quotas.
  - `glossary.md`: Multilingual scholarly dictionary (Chinese, Tibetan, Sanskrit, Sogdian, etc.).
  - `research-notes/`:
    - `pdf/`: Full-text PDF collection (>= 70 documents).
    - `extracted-texts/`: High-fidelity Markdown text extractions with `<!-- Page X -->`.
    - `sources/`: Verified 4-part Source Analysis Dossiers (`S-YYYY-author-chXX.md`).
    - `dossier-template.md`: Standardized dossier schema.
    - `reading-progress.md`: Source extraction, reading, and verification ledger.
    - `source-index.md`: Central 10-column bibliographic metadata catalog.
  - `drafts/`:
    - `drafting-progress.md`: Micro-sprint writing progress and word count ledger.
    - `sections/`: 14 drafted micro-sprints (`ch01_sec01.md` ... `ch06_sec02.md`).
    - `assembled/`: Assembled chapter drafts (`ch01.md` ... `ch06.md`).
  - `final/`:
    - `00-สารบัญ.md`: Table of contents, monograph introduction, and word count summary.
    - `01-กำเนิดและพัฒนาการ.md`: Chapter 1 (Origins & Development).
    - `02-การปิดตายและถูกลืม.md`: Chapter 2 (Sealing & Oblivion Hypotheses).
    - `03-การค้นพบ.md`: Chapter 3 (Discovery by Wang Yuanlu & Late Qing Context).
    - `04-การฉกชิงและการกระจายตัว.md`: Chapter 4 (Microhistorical Dispersal, Plunder & Discourse).
    - `05-ประวัติศาสตร์ตุนหวงศึกษา.md`: Chapter 5 (Historiography of Dunhuangology Worldwide).
    - `06-สถานภาพปัจจุบันและการอนุรักษ์ดิจิทัล.md`: Chapter 6 (Global Collections & Digital Dunhuang).
    - `references.md`: Master Chicago Turabian bibliography.
- `.agent/scripts/`: Operational tools (`document_to_markdown.py`, `source_index_builder.py`, `quote_extractor.py`, `verify_dossier.py`, `footnote_engine.py`, `count_words.py`).
