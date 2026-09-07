# Query Log — Loop 10 (B-02: ZH/TI direct-language full-text sources)

| Loop | Query | Language | Tool | Results | New sources | Notes |
|---|---|---|---|---|---|---|
| 10 | 敦煌写本 双行夹注 张涌泉 | ZH | DDG html | bot challenge ×2 (ไม่ได้ผลลัพธ์) | — | DDG บล็อกบอท |
| 10 | "双行夹注" 敦煌 写本 研究 | ZH | Bing | ~168,000 results แต่เป็น noise ทั้งหมด (Google Photos login) | — | Bing degraded |
| 10 | 敦煌写本 双行夹注 张涌泉 | ZH | Bing (2) | noise "Jamal" ทั้งหมด | — | Bing ไม่อ่านคำจีน |
| 10 | "double-line annotation" Dunhuang | EN | Springer site search (link.springer.com/search) | **1 ผลตรงเป้า**: Zhang, "Alignment of double-line annotation" ch. 15 ใน *Manuscript Philology of Dunhuang* (2024), DOI 10.1007/978-981-99-8331-5_15 | S-2024-Zhang (abstract-only) | chapter เปิดได้ แต่ full text ต้องซื้อ (paywall) |
| 10 | "古书双行注文抄刻齐整化研究" (Zhang 2011 ฉบับจีน) | ZH | Bing (3) | noise ทั้งหมด (โซนนิ่ง สรรพสามิต) | — | หาไม่เจอ CNKI mirror |
| 10 | van Schaik manuscripts (UCL Discovery) | EN | webfetch discovery.ucl.ac.uk | 403 ×1 (webfetch) + Cloudflare challenge ×1 (IWR) | — | skip หลัง 2 fails (จริง ๆ 3 ครั้งรวม 404 ก่อนหน้า) |
| 10 | (fetch URL ที่รู้แล้ว — ไม่นับ query) | EN | webfetch earlytibet.com (sitemap → post URLs) | ได้บทความ 4 ชิ้นเต็ม: teachers-students-and-notes (2008), scriptorium-ii (2007), scriptorium-iii (2009), original-bodhicaryavatara (2014) | S-2008-vanSchaik, S-2014-vanSchaik | van Schaik เขียนเอง, ตัวเต็ม, OA |
| 10 | mchan NGMCP ub.uni-hamburg.de | EN | webfetch + IWR | Transport error / DNS fail ×3 (ทั้ง www.ub.uni-hamburg.de, ngmcp.fh-hannover.de, katalog) | — | skip — เว็บล่ม/บล็อกทั้งโดเมน |
| 10 | Ricci 2025 (Wiley hith.70002) | EN | webfetch + IWR ×2 | 403 ×3 (webfetch, IWR UA จริง, doi.org redirect) | — | skip ตามกฎ 3 fails |

**หมายเหตุ:** query cap 5 ใช้ครบ (จีน 3 + Springer search 1 + UCL 1); NGMCP/Ricci/academia ล้วน fetch ตรง URL ที่รู้อยู่แล้ว ไม่ใช่ query ใหม่
