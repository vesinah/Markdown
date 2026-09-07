# Search Log — Loop C01: Pengkasit thesis extraction / Lagirarde 2014 body / Khom foliation + palm-vs-khoi proportions

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C01 | **Date:** 2026-08-26
Tools: local python extraction (pypdf/PyMuPDF available; no tesseract/pytesseract installed), webfetch, r.jina.ai proxy.

| # | Action | Target | Result |
|---|--------|--------|--------|
| 1 | Local pypdf extraction (`pdf_extractor.py`) | pengkasit_1999_hotrai_lanna_sure_fulltext.pdf (17.98 MB, 684 pp) | ZERO text layer — scanned images only; 0 chars/page. Saved as documents\pengkasit_1999_fulltext_extracted.txt |
| 2 | Local pypdf extraction | pengkasit_1999_abstract.pdf (3 pp) | Also image-only, 42 junk chars. Saved as documents\pengkasit_1999_abstract_extracted.txt |
| 3 | r.jina.ai on SURE bitstream PDF | sure.su.ac.th .../2736/fulltext.pdf | Empty content (no OCR server-side) |
| 4 | r.jina.ai on SURE handle page | sure.su.ac.th/xmlui/handle/123456789/2736 | SUCCESS — full Thai + English abstract captured → documents\sure_handle_2736_metadata_abstract.md [VERIFIED-PAGE] |
| 5 | r.jina.ai on Persée doc page | persee.fr/doc/arasi_0004-3958_2014_num_69_1_1863 | Body still image-only; BUT figure captions (Figs 1–4) + section plan extracted → documents\lagirarde_2014_jstor_preview_persee_figures.md |
| 6 | Direct download attempt (Invoke-WebRequest) | persee.fr/docAsPDF/arasi_...1863.pdf | HTTP 403 Forbidden (altcha) |
| 7 | r.jina.ai on HAL | hal.science/halshs-02542142 | Metadata verified (EFEO, submitted 2020-04-14, DOI 10.3406/arasi.2014.1863) but "No file" attached → dead end for body text |
| 8 | JSTOR stable/43486638 via r.jina.ai | jstor.org/stable/43486638 | SUCCESS — FULL trilingual abstract (FR/EN/ZH/JA) + journal info; body paywalled → archived in lagirarde_2014_jstor_preview_persee_figures.md |
| 9 | LOC research guide full fetch | guides.loc.gov/tai-manuscripts/siamese-manuscripts | SUCCESS full read — Khom usage norms, central-Thai material split, item-level line counts → documents\loc_siamese_manuscripts_guide.md [VERIFIED-PAGE] |
| 10 | Buddhistdoor feature full fetch | buddhistdoor.net/features/bringing-ancient-thai-buddhist-manuscripts-to-the-world | SUCCESS full read — quantitative Lan Na corpus data → documents\buddhistdoor_2016_dlntm_fulltext.md [VERIFIED-PAGE] |
| 11 | DuckDuckGo html + lite | McDaniel 2017 pdf query | CAPTCHA-blocked (bot challenge) both endpoints |
| 12 | Bing via r.jina.ai | McDaniel quoted title | Returned generic noise (phrase not matched) |
| 13 | CORE search API | "ho tham du Lanna" | HTTP 403 |
| 14 | Mojeek | Lagirarde ho tham pdf | HTTP 403 |
| 15 | Startpage via r.jina.ai ×2 | Lagirarde pdf; site:blogs.bl.uk Khom foliation | First = only academia.edu author-page lead (PDF needs login); second = zero results |
| 16 | Heidelberg JPTS PDF (Hundius 1990) direct fetch | hasp.ub.uni-heidelberg.de/journals/jpts/article/download/28153/27553 | Anubis bot-wall placeholder only |
| 17 | websearch tool ×3 | Lagirarde fulltext; Khom foliation conventions | Rate-limited (HTTP 429) all attempts |

Distinct queries/actions: 17 (incl. mandatory PDF extraction).
