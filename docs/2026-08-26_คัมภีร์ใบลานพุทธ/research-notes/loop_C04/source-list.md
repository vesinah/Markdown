# Source List — Loop C04 (final gap-fill: Mon & Pyu)

**Date:** 2026-08-26 | Archive location: `research-notes/loop_C04/documents/`

## Fully read + archived (primary tier)
| # | Source | URL | Status | Archive |
|:--|:---|:---|:---|:---|
| S1 | Jenny, M. 2005. The Verb System of Mon. UZH ASAS 19 (mirror of ZORA deposit 110202) | https://www.isle.uzh.ch/dam/jcr:00000000-17e0-420f-0000-000061967685/ASAS_19_Jenny_2005_The_verb_system_of_Mon.pdf (ZORA orig.: https://www.zora.uzh.ch/110202/1/the%20verb%20system%20of%20mon.pdf) | VERIFIED-PDF (303 pp; pp.1–22 full read; full text extracted + searched) | 02_jenny2005_verb_system_mon_asas19_isle.pdf (+ 02_..._extracted_full.txt, 02_..._extracted_head.txt) |
| S2 | HISOMA Corpus of Pyu Inscriptions — PYU007 TEI edition (rendered) | http://hisoma.huma-num.fr/exist/apps/pyu/works/PYU007.xml?odd=teipublisher.odd | VERIFIED-PAGE (all four faces + apparatus + translation read in full); raw XML endpoint bot-refused | 03_hisoma_pyu007_tei_render.raw.md |
| S3 | MMDL "The Project to Digitize" (William Pruitt) | https://mmdl.utoronto.ca/about/the-project-to-digitize/ | VERIFIED-PAGE | 04_mmdl_project_to_digitize.raw.md |
| S4 | MMDL Archives page (UPT + BGY descriptions) | https://mmdl.utoronto.ca/about/archives/ | VERIFIED-PAGE | 05_mmdl_archives_bgy_upt.raw.md |
| S5 | MMDL homepage | https://mmdl.utoronto.ca/ | VERIFIED-PAGE | 06_mmdl_homepage.raw.md |
| S6 | Britannica, "Mon language" | https://www.britannica.com/topic/Mon-language | VERIFIED-PAGE (direct fetch; key quote on script origin captured) | quote preserved verbatim in findings F10 (page body bot-varied on curl retry) |
| S7 | STOU online exhibition คัมภีร์ใบลานมอญ (re-read from B04 archive for task e baseline) | https://library.stou.ac.th/wp-content/odi/online/exhibition-bailanmorn/index.html | VERIFIED-PAGE (archived in loop_B04) | ../loop_B04/documents/09_stou_exhibition_bailanmorn.raw.md |

## Enumerated datasets (multi-page reads)
| # | Source | URL | Status | Archive |
|:--|:---|:---|:---|:---|
| S8 | MMDL BGY database listing, nine alphabet pages a-c … y-z (206 PDF rows hand-counted) | https://mmdl.utoronto.ca/databases/national-library-of-myanmar/{a-c,d-f,g-i,j-l,m-o,p-r,s-u,v-x,y-z}/ | VERIFIED-PAGE x9 (counts in findings F6) | tables preserved in findings.md F6 |
| S9 | MMDL UPT database page (structure only) | https://mmdl.utoronto.ca/databases/u-po-thi-library/ | VERIFIED-PAGE (entries not enumerated) | — |

## Snippet-level leads (not fetched full)
| # | Source | URL | Note |
|:--|:---|:---|:---|
| S10 | Okell 1965 footnote 9 via ScienceDirect page (Duroiselle 'Talaing nissaya' JBRS 3, 1913, 113 + "tráai, the Mon equivalent of nissaya") | https://www.sciencedirect.com/science/article/pii/0024384165900136 | SNIPPET (DDG rendering of article footnotes) |
| S11 | Sudoc record for Verb System of Mon (ISBN 3-9522954-1-8 / 978-3-9522954-1-0) | https://www.sudoc.fr/122860500 | SNIPPET via DDG result |
| S12 | HathiTrust: Journal of the Burma Research Society v.1–3, Full View, id=uc1.b3537055 | https://babel.hathitrust.org/cgi/pt?id=uc1.b3537055 | SNIPPET existence only; all fetch routes 403 |
| S13 | Academia.edu handout "Burmese Script: System and Diachronic Background" ("Burmese is assumed to have borrowed the script from Mon") | https://www.academia.edu/16031746/Burmese_Script_System_and_Diachronic_Background_handout_ | SNIPPET; authorship unidentified; page shell on fetch |
| S14 | OpenLibrary edition page The verb system of Mon (2005) | https://openlibrary.org/books/OL22794237M/The_verb_system_of_Mon | SNIPPET corroboration |
| S15 | DocsLib mirror listing ("2005, University of Zurich, Faculty of Arts") | https://docslib.org/doc/723493/mathias-jenny-the-verb-system-of-mon | SNIPPET corroboration |

## Crossref metadata-only confirmations
- Jenny & McCormick, "3 Old Mon", Handbook of Austroasiatic Languages, pp. 517–552, doi:10.1163/9789004283572_009
- McCormick & Jenny, "Contact and convergence: The Mon language in Burma and Thailand", CLAO 42.2 (2013): 77–117, doi:10.1163/19606028-00422p01
- Jenny, "Verb-Initial Structures in Austroasiatic Languages", Brill 2020, pp. 21–45, doi:10.1163/9789004425606_003
- Jenny, "Mon", MSEA Linguistic Area, De Gruyter 2019, pp. 277–319, doi:10.1515/9783110401981-007
- Jenny, "4 Modern Mon", HdAustroasiatic, pp. 553–600, doi:10.1163/9789004283572_010

## Blocked / negative results
- zora.uzh.ch search UI + file URL: Anubis PoW challenge (both webfetch and curl with browser UA)
- hisoma.huma-num.fr root + raw PYU007.xml direct curl: transport error / empty response; render route works
- babel.hathitrust.org: 403 Forbidden (r.jina.ai, direct webfetch, seq-parameter variant)
- DDG html endpoint direct: CAPTCHA ("select ducks"); lite endpoint not retried
- archive.org advancedsearch creator:Duroiselle: no JBRS vol.3 item (16 unrelated Duroiselle/ASI hits recorded)
- mmdl wp-sitemap.xml: 404 (nav harvested instead)
- Wikipedia/Wikiwand/DBpedia/Grokipedia script-origin pages: EXCLUDED by project rule

## Excluded by rules
- en.wikipedia.org (Mon–Burmese script, Old Burmese), wikiwand.com, dbpedia.org, grokipedia.com, everything.explained.today — Pallava-Grantha derivation claims there recorded ONLY as unverified leads for Phase D literature-chasing.
