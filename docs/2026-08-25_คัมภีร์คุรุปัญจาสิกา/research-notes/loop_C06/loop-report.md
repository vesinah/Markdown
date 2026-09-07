# Loop C06 report - Gurupañcāśikā Tibetan witnesses (Phase C)

Date: 2026-08-26. Research-only loop. No Wikipedia used.

## 1. rKTs T2543 retry - SUCCESS

http://www.rkts.org/cat.php?id=2543&typ=2 was unreachable in B03; now fetched fully.
Result: complete edition matrix for A4663 / C3687 / D3721 / GT2546 / N3337 / Q4544, PLUS witnesses beyond the 6 known:
- 5 BDRC manuscript witnesses: NLM866.014, NLM1305.003, NLM1320.005, NLM2932.009, NLM2936.008 (folio locations in rkts_T2543_edition_matrix.md)
- Mongolian Canon Mmt3604, Printed Mongolian Canon vol. 74, fols. 329a1-332a1
Full detail: documents/rkts_T2543_edition_matrix.md

Key location data: D = MW23703 vol. rgyud (tshu), fols. 10a2-12a2; N = MW22704 vol. rgyud 'grel (nu), fols. 244a2-246a4; Q = MW1KG13126 vol. nu, fols. 242b7-245a3; G = MW23702 vol. nu, fols. 297a3-299b1; C = MW1GS66030 vol. rgyud tshu, fols. 9b7-11b7; A = MW1PD95844 vols. rgyud tsu+tshu, pp./fols. 5931-5991.

## 2. BDRC TTL chain (loop_A09 records re-read)

From bdrc_MW23703_3721.ttl (exact triples):
- bdr:MW23703_3721 a bdo:Instance; skos:prefLabel "bla ma lnga bcu pa/"@bo-x-ewts; bdo:partIndex 2557; bdo:instanceOf bdr:WA0RT2543; bdo:colophon "bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so/"
- bdr:CL98EEA4_MW23703_3721 bdo:contentLocationVolume 79 (pages 21-25)
From bdrc_I1395_vol79_W23703.ttl: bdr:I1395 a bdo:ImageGroup; bdo:volumeNumber 79.
=> Derge vol. tshu scan ID = bdr:I1395 (image group of W23703, vol. 79).

Archive.org check (search q=bdrc W23703, advancedsearch API): numFound = 1
- identifier bdrc-W23703, title "bstan 'gyur (sde dge)" (whole-work item only)
Probe https://archive.org/metadata/bdrc-W23703_I1395/files -> {"error":"Couldn't locate item 'bdrc-W23703_I1395'"}
Status: standalone volume-level scan for I1395 ยังไม่พบ; only the single whole-Tengyur archive.org item bdrc-W23703 exists under this query.

## 3. 84000 status - formal negative

https://read.84000.co/translation/toh3721.html returns HTTP 200 but is an empty catalog stub: page title "Fifty Verses on Guru Devotion | 84000 Translating the Words of the Buddha", body shows only site chrome (Reading Room navigation, "Toh 3721", "Full Screen") with NO translation text.
Grep of saved loop_A09 HTML (84000_toh3721_page.html) for `unpublished|"status"|translation-status`: no matches (Next.js app shell only).
Conclusion: as of 2026-08-26, 84000 has no published translation of Toh 3721; published English translation ยังไม่พบ. The URL resolves to a placeholder, not a translation.

## 4. Esukhia second-edition digital texts - negative for N/C/Q

Fetched https://api.github.com/orgs/Esukhia/repos?per_page=100 (100 repos returned).
Keyword filter narthang|peking|cone|tengyur|tanjur yielded 5 repos, all Derge-based:
- Esukhia/tengyur-comparison ("Comparison of the Tengyur")
- Esukhia/derge-tengyur-old ("Derge Tengyur prepared by Esukhia for Barom Theksum Choling")
- Esukhia/nalanda-dergetengyur
- Esukhia/derge-tengyur ("Digital Derge Tengyur")
- Esukhia/tengyur-pagination ("pagination csvs")
No Narthang/Peking/Cone Tengyur text repo exists in the org => digital N3337 text via Esukhia ยังไม่พบ (Narthang e-text remains available only via rKTs-linked sets MW22704/MW2KG5015).

## 5. D3721 colophon - exact quote from saved text

File: loop_A09/documents/D3721_derge_tengyur_bo_unicode_clean.txt (34 lines), lines 32-33, closing merit verse + colophon:

"…དེ་ལྟར་བླ་མའི་རྗེས་འཇུག་སློབ་མ་ནི། །མ་ལུས་ཕན་བསྐྱེད་སྐྱོན་མེད་འདི་བྱས་པའི། །དགེ་བ་མཐའ་ཡས་བདག་གིས་ཅི་བསགས་པ། །དེས་ནི་འགྲོ་ཀུན་མྱུར་དུ་རྒྱལ་གྱུར་ཅིག །བླ་མ་ལྔ་བཅུ་པ་སློབ་དཔོན་ཆེན་པོ་རྟ་དབྱངས་ཀྱིས་མཛད་པ་རྫོགས་སོ།། །།རྒྱ་གར་གྱི་མཁན་པོ་པདྨཱ་ཀ་ར་ཝརྨ་དང་། ཞུ་ཆེན་གྱི་ལོ་ཙཱ་བ་དགེ་སློང་རིན་ཆེན་བཟང་པོས་བསྒྱུར་ཅིང་ཞུས་ཏེ་གཏན་ལ་ཕབ་པའོ། །"

EWT S: …de ltar bla ma'i rjes 'jug slob ma ni/ /ma lus phan skyeed skyon med 'di byas pa'i/ /dge ba mtha' yas bdag gis ci bsags pa/ /des ni 'gro kun myur du rgyal gyur cig/ /bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so// //rgya gar gyi mkhan po padmA ka ra warma dang/ /zhu chen gyi lo tsA ba dge slong rin chen bzang pos bsgyur cing zhus te gtan la phab pa'o/

NOTE discrepancy: the Derge e-text includes the full translator/reviser statement, while rKTs records for D only the short form ending "rdzogs so". Spelling in this e-text: པདྨཱ་ཀ་ར་ཝརྨ (padmA ka ra warma, vowel length marked) vs rKTs D-block pad+ma kA ra warma. Text ends at line 33 with "གཏན་ལ་ཕབ་པའོ། །"; no further material.

## Files saved (this loop)

- output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/loop_C06/loop-report.md (this file)
- output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/loop_C06/documents/rkts_T2543_edition_matrix.md
