# Loop B03 (REDO) — External source fetch log
Date: 2026-08-26. All attempts verbatim-documented.

## 1. rKTs T2543 re-fetch (task 3)
Target: https://kraytsang.com/text/T2543
Attempts (all failed at transport level, site unreachable from this session):
- GET https://kraytsang.com/text/T2543 -> Transport error
- GET http://kraytsang.com/text/T2543  -> Transport error
- GET https://kraytsang.com/text/T2543/ -> Transport error
Status: FRESH DATA NOT OBTAINED (site down/unreachable).
Fallback data retained from Loop A10 cache (file: ../loop_A10/documents/rkts-T2543-bla-ma-lnga-bcu-pa-colophons.txt,
originally fetched 2026-08-25 from http://www.rkts.org/cat.php?id=2543&typ=2). Cached rKTs listing of editions:
- A dPe bsdur ma Tanjur, A4663 — MW1PD95844, vol. rgyud tsu+tshu, ff. 5931-5991; colophon: "bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so//rgya gar gyi mkhan po pad+ma kA ra war ma dang/zhu chen gyi lo tsA ba dge slong rin chen bzang pos bsgyur cing zhus te gtan la phab pa'o"
- C Cone Tanjur, C3687 (e-text set MW1GS66030)
- D Derge Tanjur, D3721 — MW23703, vol. rgyud (tshu), ff. 10a2-12a2; colophon: "bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so"
- G Golden Tanjur, GT2546 — same colophon as A (with warma)
- N Narthang Tanjur, N3337 — ff. 244a2-246a4; same colophon
- Q Peking Tanjur, Q4544 — ff. 242b7-245a3; same colophon
NOTE: edition coverage (Derge/Peking/Narthang/Cone/dPe bsdur ma/Golden all carrying it) rests on the A10 cache, NOT independently re-verified today. Colophon variants across editions: none observed in cache except orthography (warma vs war ma); all attribute authorship to rta dbyangs (Asvaghosa/Aryasura per rKTs Persons block).

## 2. Esukhia second-edition GitHub witnesses (task 4)
- GET https://api.github.com/repos/Esukhia/narthang-tengyur -> 404 (repository does not exist)
- GET https://api.github.com/repos/Esukhia/narthang-tengyur/contents/tengyur -> 404
- GET https://api.github.com/search/repositories?q=narthang+org:Esukhia -> HTTP 200, body verbatim:
  {
    "total_count": 0,
    "incomplete_results": false,
    "items": [

    ]
  }
Conclusion: no Narthang Tengyur repository (and hence no T3721/N3337 second-edition e-text) under the Esukhia organization on GitHub. Status: ยังไม่พบ.

## 3. Asian Legacy Library Wylie e-text (task 5)
- GET https://www.asianlegacylibrary.org/en/catalog?q=bla+ma+lnga+bcu+pa -> 404 (path pattern does not exist)
- GET https://asianlegacylibrary.org/ -> 200 (marketing site; links to digital library at https://library.asianlegacylibrary.org/)
- GET https://library.asianlegacylibrary.org/ -> 200 but JavaScript-only application shell; body contains only the title "ALL Public Library". Catalog search and downloads cannot be retrieved by plain HTTP fetch.
Status: downloadable bla ma lnga bcu pa catalog record / Wylie e-text NOT obtained this session. Status: ยังไม่พบ.
Provenance caveat: our working D3721 Unicode text (loop_A09) is suspected to descend from an ALL/ADLC-style input lineage, but this was not confirmable today.
