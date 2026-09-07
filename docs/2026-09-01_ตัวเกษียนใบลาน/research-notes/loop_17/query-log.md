# Loop 17 Query Log - ตัวเกษียน Visual Evidence Search

**Date**: 2026-09-02
**Research Question**: Find visual evidence (images/scans) of Thai ตัวเกษียน (interlinear gloss) manuscript layout

## Query 1: DLNTM New Interface
- **URL**: https://iiif.crossasia.org/s/lanna
- **Status**: BLOCKED - Anti-bot protection (Anubis PoW system)
- **Result**: Cannot access. Site requires JavaScript proof-of-work challenge to prevent AI scraping
- **Notes**: CrossAsia has implemented aggressive anti-scraping measures specifically targeting AI bots

## Query 2: Walker 2020 PDF Download Attempts
- **URLs Tried**: 
  - https://www.societyforasianart.org/wp-content/uploads/2025/10/2026-04-03-McDaniel-Resources.pdf
  - https://so06.tci-thaijo.org/index.php/pub_jss/article/download/158153/114564/433105
- **Status**: PDFs retrieved but extremely large (truncated at ~50KB each)
- **Result**: Cannot process PDFs directly due to size
- **Notes**: Files contain raw PDF binary data, would need external processing

## Query 3: Alternative DLNTM Access
- **URL**: https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts/
- **Status**: SUCCESS - Landing page accessible
- **Result**: Information page but search interface blocked by same anti-bot system
- **Content**: 
  - 6,137 manuscripts digitized
  - Search: https://iiif.crossasia.org/s/lanna (blocked)
  - Gallery: https://iiif.crossasia.org/s/lanna/collections/551511/ (blocked)
  - Resources and About pages accessible

## Query 4: Web Search - "tua khian" manuscript images
- **Query**: "tua khian" OR "ตัวเกษียน" manuscript image scan photo
- **Status**: NO RELEVANT RESULTS
- **Result**: Search returned unrelated Wikipedia articles, no manuscript images
- **Notes**: English transliteration "tua khian" not productive

## Query 5: Web Search - Walker 2020 Figure 1
- **Query**: Justin McDaniel Walker 2020 JAOS figure 1 interlinear gloss Thai manuscript
- **Status**: PARTIAL SUCCESS
- **Result**: Found references to McDaniel's work and manuscript digitization projects
- **Key Findings**:
  - Digital Library of Northern Thai Manuscripts launched by McDaniel et al.
  - Penn Museum has Thai manuscript collections with catalog records
  - Multiple references to lannamanuscripts.net project
  - No direct access to Walker 2020 Figure 1

## Query 6: Web Search - Recent Digitization Projects
- **Query**: Thai palm leaf manuscript interlinear gloss Pali vernacular digitization 2021-2026
- **Status**: SUCCESS - Found recent activity
- **Key Findings**:
  - Fragile Palm Leaves Foundation (Bangkok) active in conservation/digitization
  - 2026 article on Buddhist manuscript preservation
  - Nature article (2026): "Multi-scale progressive Swin Transformer for ancient Tai Lue palm leaf manuscript restoration"
  - IFLA 2017 palm leaf manuscript workshop report
  - Multiple ongoing digitization efforts but no specific ตัวเกษียน images

## Query 7: Web Search - Thai Language Search
- **Query**: "ตัวเกษียน" OR "อักษรเกษียน" ใบลาน ภาพ รูปภาพ
- **Status**: NO RELEVANT RESULTS
- **Result**: Returned unrelated results (Hindi Wikipedia, Japanese Wikipedia, Thai Scribd document about tourism)
- **Notes**: Thai-language search did not yield manuscript images

## Query 8: Web Search - Cornell Thai Manuscripts
- **Query**: Cornell University Library Thai palm leaf manuscripts collection
- **Status**: PARTIAL SUCCESS - Collection exists but limited access
- **Key Findings**:
  - Cornell has Thai palm leaf manuscript collection (Collection #7259)
  - David K. Wyatt papers include palm leaf samples
  - Echols Collection may have up to 3,676 items
  - Catalog records exist but no digital images accessible via web search
  - South Asia collection has 1,600+ manuscripts but focus on Sanskrit/Pali

## Query 9: Web Search - Siam Society
- **Query**: Siam Society Digital Library Thai manuscripts
- **Status**: PARTIAL SUCCESS - References found
- **Key Findings**:
  - Siam Society has manuscript library at Kamthieng House Museum
  - Lanna Manuscripts project (คัมภีร์ล้านนา) launched 2005 at Siam Society
  - McDaniel Resources PDF mentions Siam Society involvement
  - No direct digital library interface accessible
  - Google Arts & Culture has Kamthieng House content

## Summary Statistics
- **Total Queries**: 9
- **Blocked**: 2 (DLNTM interfaces)
- **Partial Success**: 4 (found references but no images)
- **No Results**: 3 (unrelated results)
- **Images Found**: 0

## Technical Barriers Encountered
1. **Anti-bot protection**: IIIF CrossAsia using Anubis PoW system
2. **PDF size**: Academic PDFs too large to process in browser context
3. **Access restrictions**: Many digital libraries require institutional access
4. **Search indexing**: Thai manuscript images not well-indexed in general web search
