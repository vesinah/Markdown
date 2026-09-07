# Loop 17 Summary - ตัวเกษียน Visual Evidence Search

**Date**: 2026-09-02  
**Loop Number**: 17  
**Research Question**: Find visual evidence (images/scans) of Thai ตัวเกษียน (interlinear gloss) manuscript layout

---

## Executive Summary

**Result**: UNSUCCESSFUL - No visual evidence of ตัวเกษียน manuscript layout was obtained.

**Primary Obstacle**: The main repository (Digital Library of Northern Thai Manuscripts with 6,137 manuscripts) is protected by anti-bot measures that block automated access.

**Queries Executed**: 9 of 12 allowed  
**Images Found**: 0  
**Documents Retrieved**: 2 PDFs (too large to process)  
**Repositories Identified**: 4 major collections confirmed

---

## Key Findings

### 1. DLNTM is the Primary Target Repository - But Inaccessible
- **Digital Library of Northern Thai Manuscripts** (DLNTM/CrossAsia)
- Contains 6,137 digitized manuscripts from Northern Thailand
- IIIF interface at https://iiif.crossasia.org/s/lanna
- **BLOCKED** by Anubis proof-of-work anti-scraping system
- Most likely source for ตัวเกษียน examples
- Accessible only via manual browser interaction

### 2. Walker 2020 Article Located but Not Processable
- Found at TCI-Thaijo repository (Journal of Siam Society, not JAOS)
- PDF successfully downloaded but file size exceeds processing capacity
- Contains manuscript illustrations but cannot be examined in current workflow
- Figure 1 (showing ตัวเกษียน layout) remains inaccessible

### 3. Multiple Academic Collections Confirmed
- **Penn Museum**: OpenPenn has Thai manuscripts with Pali-Thai bilingual texts
- **Cornell University**: Thai palm leaf manuscript collection (Collection #7259)
- **Siam Society**: Major research library in Bangkok with Lanna manuscript project
- All require either institutional access or in-person visits

### 4. Active Digitization Landscape (2021-2026)
- Fragile Palm Leaves Foundation (Bangkok) - ongoing Buddhist manuscript preservation
- AI/ML manuscript restoration projects (Nature 2026: Tai Lue manuscripts)
- Multiple community-based preservation initiatives
- Digital humanities projects at Thai universities

---

## Technical Barriers Encountered

### Anti-Bot Protection
- **Anubis PoW System**: JavaScript-based proof-of-work challenge specifically designed to block AI scrapers
- Implemented on CrossAsia IIIF platform
- Cannot be bypassed by automated tools
- Reflects growing concern about AI training data harvesting from cultural heritage collections

### File Size Limitations
- Academic PDFs with high-resolution manuscript images exceed browser processing limits
- PDFs downloaded but content extraction not possible in current environment
- Would require dedicated PDF processing tools

### Authentication Requirements
- Most serious manuscript collections require institutional authentication
- IIIF manifests often behind login walls
- Copyright restrictions on high-resolution images

### Indexing Gaps
- "ตัวเกษียน" not used as metadata tag in English catalogs
- Visual manuscript features (layout types) not indexed
- Specialized terminology knowledge required to identify relevant manuscripts

---

## Why Visual Evidence Remains Elusive

### Access Pattern Analysis
1. **Gatekeeping by Design**: Cultural heritage institutions increasingly restrict automated access
2. **Curatorial Control**: Manuscript images require expert mediation for research use
3. **Copyright Concerns**: High-resolution scans treated as protected institutional assets
4. **Specialized Knowledge Required**: Must know specific manuscript call numbers, not just search terms

### Search Strategy Limitations
1. **Terminology**: "Interlinear gloss" and "ตัวเกษียน" don't effectively map to catalog metadata
2. **Visual Features**: Layout characteristics not searchable attributes
3. **Language Barriers**: Thai-language web search doesn't surface academic repository content
4. **Citation Chasing**: Walker 2020 Figure 1 source institution not documented in bibliographic record

---

## Repository Assessment Matrix

| Repository | Manuscripts | Access Status | ตัวเกษียน Likelihood | Contact Available |
|-----------|-------------|---------------|---------------------|-------------------|
| **DLNTM (CrossAsia)** | 6,137 | BLOCKED | ⭐⭐⭐⭐⭐ | Yes |
| **Penn Museum** | 100+ | Catalog only | ⭐⭐⭐ | Yes |
| **Cornell** | 3,676+ | Not online | ⭐⭐ | Yes |
| **Siam Society** | Unknown | Physical only | ⭐⭐⭐⭐ | Yes |
| **Berkeley** | Not assessed | — | ⭐⭐ | No |
| **Brown** | Not assessed | — | ⭐⭐ | No |
| **Archive.org** | Not assessed | — | ⭐ | No |

---

## Recommended Actions for Research Project

### PRIORITY 1: Direct Contact with DLNTM Project
**Why**: Bypasses technical barriers, highest success probability

**Contact**:
- Justin McDaniel (UPenn Religious Studies) - Project PI
- Berlin State Library: ostasienabteilung@sbb.spk-berlin.de
- Project URL: https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts/

**Request**: 
- Sample image showing ตัวเกษียน layout for academic research
- Permission to reproduce under CC BY-NC 4.0 license
- Specific manuscript IDs if Walker 2020 Figure 1 source can be identified

### PRIORITY 2: Institutional Library Access
**Why**: DLNTM may be accessible via university proxy/VPN

**Action**:
- Access https://iiif.crossasia.org/s/lanna through institutional network
- Browse gallery collection: https://iiif.crossasia.org/s/lanna/collections/551511/
- Search for manuscripts with interlinear glosses
- Download IIIF images directly

### PRIORITY 3: Alternative Citation Strategy
**If visual evidence cannot be obtained**:

**Option A - Textual Description**:
Cite Walker 2020's description without reproducing image:
- "Walker (2020: Figure 1) illustrates the ตัวเกษียน layout with large Pali text on main lines, small Thai glosses above/below, and sequence numbers indicating word order."

**Option B - Schematic Diagram**:
Create original diagram based on published descriptions:
- Label: "Schematic representation of ตัวเกษียน layout based on Walker 2020 and Kongkaew 2001"
- Cite as interpretive visualization, not primary source

**Option C - Comparable Examples**:
Use accessible examples from related traditions:
- Tibetan interlinear translations (well-digitized)
- European medieval glossed manuscripts (extensive digital collections)
- Label: "Comparable interlinear gloss layout from [X tradition]"

---

## Documentation for Research Record

### Files Created
1. `research-notes/loop_17/query-log.md` - Detailed search log
2. `research-notes/loop_17/findings.md` - Repository information and analysis
3. `research-notes/loop_17/summary.md` - This executive summary

### External Resources Identified
1. DLNTM project contact information
2. Penn Museum OpenPenn portal
3. Cornell manuscript collection numbers
4. Siam Society library location
5. Fragile Palm Leaves Foundation (alternative contact)

### PDFs Retrieved (Not Processed)
1. Walker JSS article (TCI-Thaijo)
2. McDaniel Resources 2026 (Society for Asian Art)

Both files saved in tool output but require external PDF reader for examination.

---

## Gap Analysis: Why This Loop Failed

### Expected Outcome
- Find at least one viewable image of ตัวเกษียน manuscript layout
- Confirm visual characteristics described by Walker 2020

### Actual Outcome
- No images obtained
- Repository locations confirmed but not accessible
- Technical barriers exceeded tool capabilities

### Root Causes
1. **Anti-scraping technology**: Cultural heritage sector now actively blocks AI agents
2. **Specialized knowledge barrier**: Requires knowing manuscript call numbers, not just concepts
3. **Access model mismatch**: Academic manuscript research assumes human-mediated institutional access

### Lessons for Future Loops
1. **Repository reconnaissance first**: Check access method before attempting download
2. **Citation archaeology**: Trace cited figures to source institutions before searching
3. **Expert consultation early**: Some resources only accessible via direct contact
4. **Alternative evidence strategies**: Prepare fallback approaches when primary sources blocked

---

## Conclusion

Loop 17 successfully **identified the location** of ตัวเกษียน visual evidence (DLNTM with 6,137 manuscripts) but **failed to retrieve** viewable images due to anti-bot protection. 

The research question cannot be answered through automated web search alone. Direct contact with the DLNTM project (Justin McDaniel, Berlin State Library) or institutional library access is required to obtain visual evidence.

**Alternative approach**: Proceed with textual description strategy, citing Walker 2020 Figure 1 by bibliographic reference without image reproduction—a common and acceptable practice in paleographic research when primary sources are in restricted collections.

**Success criteria met**: ❌ No images found  
**Digitization gaps documented**: ✅ No—materials exist but are access-restricted  
**Alternative citation strategies provided**: ✅ Yes—three viable alternatives documented
