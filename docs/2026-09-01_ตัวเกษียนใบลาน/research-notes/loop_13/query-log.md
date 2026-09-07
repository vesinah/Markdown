# Loop B-05 Query Log: Thai Interlinear Gloss Visual Evidence

**Loop ID:** B-05 (loop_13)  
**Objective:** Locate actual images of Thai interlinear gloss (ตัวเกษียน / khaam hvăt / t́vă kṣien) layout on palm-leaf manuscripts  
**Date:** 2026-09-02  
**Resource cap enforced:** 3-failure skip rule applied

---

## Query Log

| # | Query/Action | Tool | Result | Source/URL | Notes |
|---|-------------|------|--------|-----------|-------|
| 1 | Extract Walker 2020 PDF text | pdf_extractor.py | SUCCESS | Local: loop_01/documents/2020-walker-indic-vernacular-bitexts-thailand.pdf | Extracted to temp walker2020_full.txt (97 KB) |
| 2 | Grep Walker text for figure references | Select-String | SUCCESS | walker2020_full.txt lines 218-233, 398-401 | Found Fig. 1 = Dhammapada-aṭṭhakathā ms, Swift Family Collection ff 4MS PL4251 no. 14, Bancroft Library UC Berkeley |
| 3 | Download Fig. 1 image (http) | Invoke-WebRequest | FAIL | http://cdn.calisphere.org/data/13030/fx/hb7f59p4fx/files/hb7f59p4fx-FID452.jpg | DNS resolution failed: "remote name could not be resolved" |
| 4 | Download Fig. 1 image (https) | Invoke-WebRequest | FAIL | https://cdn.calisphere.org/data/13030/fx/hb7f59p4fx/files/hb7f59p4fx-FID452.jpg | DNS resolution failed (attempt #2) |
| 5 | Fetch image via webfetch | webfetch | FAIL | https://cdn.calisphere.org/data/13030/fx/hb7f59p4fx/files/hb7f59p4fx-FID452.jpg | Transport error (attempt #3 → SKIP per rule) |
| 6 | Fetch Calisphere item page | webfetch | SUCCESS | https://calisphere.org/item/ark:/13030/hb7f59p4fx/ | Metadata retrieved: description confirms "tiny interlinear notes in Thai"; link to digicoll.lib.berkeley.edu/record/178171 |
| 7 | Fetch Berkeley Digital Collections page | webfetch | FAIL (empty) | https://digicoll.lib.berkeley.edu/record/178171 | JS-only page, no markdown content returned |
| 8 | Fetch DLNTM manuscript 3700 | webfetch | REDIRECT | http://lannamanuscripts.net/en/manuscripts/3700 (cited Walker fn. 14) | Redirects to DLNTM homepage; manuscript URL changed since 2019; new search at iiif.crossasia.org/s/lanna |

---

## Summary

**Queries executed:** 8  
**New sources accessed:** 2 (Calisphere metadata, DLNTM homepage)  
**Images successfully downloaded:** 0  
**Blocked/failed:** 4 (cdn.calisphere ×3, digicoll.lib.berkeley ×1)  

**Key evidence obtained:**
1. Walker 2020 Fig. 1 metadata and description (verbatim from PDF extraction)
2. Calisphere catalog description confirming "tiny interlinear notes in Thai" on manuscript ff 4MS PL4251 no. 14
3. Thai-language source identified: Kongkaew Veeraprajak 2001 & 2002 (cited Walker fn. 18-19) on khom hvăt / t́vă kṣien paleography

**Gaps remaining:**
- No direct visual evidence downloaded (all image URLs blocked by network/DNS issues)
- DLNTM manuscript database restructured since Walker 2020 publication; direct manuscript links obsolete
- Berkeley Bancroft Library images require Aeon request system (institutional access)

**Next steps for future work:**
- Request high-resolution images via Berkeley Aeon system (https://aeon.berkeley.edu/)
- Search DLNTM new interface at https://iiif.crossasia.org/s/lanna for manuscripts with interlinear gloss
- Obtain Kongkaew Veeraprajak Thai-language sources (2001, 2002) for paleographic analysis of ตัวเกษียน script
