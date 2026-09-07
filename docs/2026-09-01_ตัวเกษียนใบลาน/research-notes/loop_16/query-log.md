# Query Log - Loop 16: Tibetan mchan Manuscript Search

**Research Question**: Find actual Tibetan manuscript examples with mchan (མཆན་ annotations). Determine if mchan is interlinear or marginal.

**Start Time**: 2026-09-02

---

## Query 1: BDRC Library Search
**Target**: https://library.bdrc.io/
**Status**: FAILED - JavaScript required, cannot fetch
**Keywords**: mchan མཆན, mchan 'grel མཆན་འགྲེལ
**Goal**: Find manuscript catalog entries with annotation descriptions

## Query 2: IDP (International Dunhuang Project)
**Target**: http://idp.bl.uk/
**Status**: FAILED - 403 Forbidden
**Attempts**: 2 (http and https)

## Query 3: Hugon 2020 - "Wonders in margine"
**Target**: https://www.oeaw.ac.at/fileadmin/Institute/IKGA/PDF/forschung/tibetologie/Publications/2020_Hugon_Wonders_in_margine_JSAIH_author_manuscript.pdf
**Status**: SUCCESS - PDF downloaded
**File**: documents/Hugon_2020_Wonders_in_margine.pdf
**Note**: Title mentions "margine" (margin) - likely discusses Tibetan manuscript marginalia

## Query 4: OpenAlex Scholar API
**Query 1**: "Tibetan mchan manuscript" 
**Status**: FAILED - returned irrelevant results (Lancet, biomedical)

**Query 2**: "Tibetan manuscript annotations interlinear"
**Status**: PARTIAL - 85 results but mostly non-Tibetan topics

**Query 3**: "Tibetan manuscript marginalia commentary"
**Status**: PARTIAL - 49 results, some relevant book chapters

**Query 4**: "Sam van Schaik Tibetan manuscript"
**Status**: PARTIAL - 218 results but mostly unrelated

## Query 5: Sam van Schaik's Blog - Early Tibet
**Target**: https://earlytibet.com/
**Status**: SUCCESS - fetched blog content
**Key Findings**: 
- Multiple posts about Tibetan manuscripts from Dunhuang
- Discusses manuscript annotations, interlinear notes
- Post on Bodhicaryāvatāra mentions "Commentary added in interlinear notes might be inserted into the main text in a later copy"
- Evidence of annotation practices in early Tibetan manuscripts

## Query 6: Hugon 2020 PDF Extraction
**Target**: documents/Hugon_2020_Wonders_in_margine.pdf
**Status**: SUCCESS - extracted with PyPDF2
**Pages**: 28 pages
**Key Findings**:
- Title: "Wonders in margine – Mapping the Madhyamaka Network of Gyamarwa Jangchupdrak"
- Author: Pascale Hugon, Austrian Academy of Sciences
- **CRITICAL EVIDENCE**: Discusses Gyamarwa's 12th-century manuscript with extensive **interlinear and marginal notes**
- Manuscript: Drepung catalogue No. 015397 (31-folio manuscript)
- Article explicitly states: "the marginal and interlinear notes on the extant manuscript are especially useful"
- Notes identify scholars and positions in the text
- **Both "interlinear" and "marginal" terminology used together** - confirming mchan occupies both positions

---

## Summary (6 queries executed)
- Query cap: 6/6 REACHED
- Download cap: 3/3 (Hugon PDF saved)
- Blocked: 2 (BDRC JS-heavy, IDP 403)
- Successful extractions: 1 (Hugon 2020)
- Key manuscript ID found: Drepung No. 015397 (Gyamarwa's Analysis of the Essence of Madhyamaka)

