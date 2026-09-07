# Loop C01 Findings — Residual Chinese print-layout gaps from loop_B01

**วันที่:** 2026-08-26
**ผู้ทำ:** Explorer research agent (foraging loop เดียว, Phase C)
**ขอบเขต:** ปิดช่องว่างคงเหลือจาก loop_B01: (1) Cherniack 1994 layout passages ในคำพูดเธอเอง; (2) 黃善夫本史記 + 十七史詳節 dating จากแหล่ง fetch ได้จริง; (3) หลักฐาน visual/typographic ของหน้าหนังสือ宋 jiajie/注疏合刻 editions ต่อ source text; (4) ข้อกล่าวเชิง scholar เรื่องการเป็น standard ของ layout interleaved
**รองรับบท:** 1, 7, 8

---

## Queries executed

### Websearch tool
| # | Query | ผล |
|---|---|---|
| W1 | Cherniack "Book Culture..." commentary layout small characters double column | OK — ได้ leads: Georgetown O'Donnell course page; Harvard DASH dissertation ที่ quote Cherniack p.10; teldap/NPM 八行本 pages |
| W2 | 黄善夫 史记 刻本 南宋 建安 年代 三家注合刻 | OK — Rekihaku khirin record; 陈修紘1981 abstract; gushu.net; shd.org.cn; nlcpress |
| W3 | 吕祖谦 十七史详节 宋刊本 建安 刻年 | OK — ctext datawiki; NCL mirror record (行款เต็ม); Palace Museum page; NJU 宋刻南史详节; SiKu component titles |
| W4 | Cherniack filetype:pdf | OK metadata เท่านั้น; ไม่มี OA full text (ORA/DASH/Columbia ต่าง quote แต่ไม่โฮสต์ต้นฉบับ) |
| W5 | 宋代刻书 夹注 双行小字 格式 定式 科举 建本 | OK — douban 谷继明 review ของ李霖2019 (quote 结语); sbksc 宋刻本 essay (尾崎康 caution); daowen 叶德辉 catalog excerpts; WDL 礼记单注本 |
| W6 | 李霖 十行本 义疏 双行小字 常态 | OK — ยืนยัน quote เดียวกัน 3 host: gmw epaper / douban / rujiazg + 2 reviews เพิ่ม |
| W7 | Cherniack "interlinear"/"smaller characters" quote-mining | negative — ไม่เจอประโยค layout ของเธอเอง |
| W8 | Harvard-Yenching digitization 行款 | OK context — CURIOSity collection overview (1,500 Song/Yuan/Ming blockprints digitized) + example record fields; ไม่ได้ลาก record 宋注疏 specific |
| W9 | idp.bl.uk Chinese blockprints | negative-relevance — IDP ครอบ Dunhuang/Turfan (pre-Song/Buddhist) ไม่มี宋 jiajia page records |

### API fallbacks (bash)
| # | API/Query | ผล |
|---|---|---|
| A1 | Semantic Scholar citations endpoint DOI:10.2307/2719389?fields=contexts,title&limit=100 | OK ครั้งแรก parse ผิด key (schema เป็น data[].citingPaper); รันใหม่ได้ 100 citing papers, sweep keywords layout/column/interline → match เดียวไม่เกี่ยว (Chaffee via Mun) — ยืนยันว่า contexts ชุดนี้ไม่มีประโยค layout ของ Cherniack |
| A2 | archive.org advancedsearch: 百衲本 史記 / carter invention printing / 十七史詳節 | Carter items พบ (inventionofprint00cart ฯลฯ) แต่ restricted-lending; 百衲本 query noise; ไม่ใช้ต่อ |
| A3 | fatcat.wiki release lookup DOI:10.2307/2719389 expand=files | FAILED connection x2 (service down ณ loop นี้) |
| A4 | Wayback CDX jstor.org/stable/2719389* | OK — captures 2021–2025 ทั้งหมด status 200 = landing/preview page |

### Direct fetch (webfetch)
| # | URL | ผล |
|---|---|---|
| F1 | khirin-a.rekihaku.ac.jp/database/sohanshiki | OK เต็ม — แหล่งหลัก target 2 |
| F2 | xuebao.sysu.edu.cn abstract11531.shtml | HTTP 404 ตอน fetch ตรง; เนื้อ abstract ได้จาก search snippet (บันทึกตามจริงใน document) |
| F3 | web.archive.org/web/.../jstor.org/stable/2719389 | OK แต่เป็น preview/metadata page เท่านั้น (Vol.54 No.1 Jun.1994 pp.5-125, 121 pages, Harvard-Yenching Institute) |
| F4 | dokumen.pub Brokaw & Chow full text | 403 ทั้ง Invoke-WebRequest และ webfetch tool |
| F5 | dash.harvard.edu bitstream download (dissertation quote Cherniack) | ได้ raw PDF binary — webfetch ไม่ extract text; quote fragment p.10 ใช้จาก snippet ของ W1/W4 |
| F6 | faculty.georgetown.edu/jod/texts/china.texts.html | OK — O'Donnell course bibliography อ้าง Cherniack (bibliographic corroboration เท่านั้น) |

---

## Table of sources

| Author/Holder | Title/Record | Date | URL | Substance |
|---|---|---|---|---|
| 国立歴史民俗博物館 | khirin-a record 歴博・宋版史記（黄善夫刊本）+ CC BY 4.0 images | rec. 2026 access | https://khirin-a.rekihaku.ac.jp/database/sohanshiki | 南宋慶元(1195–1201)"刊か"; 三注合刻 現存最古 全130巻完存; 刊記「建安黄善夫刊／于(干)家塾之敬室」; provenance 石清水八幡宮→月舟寿桂→直江兼続→上杉興譲館 |
| 陳修紘 | 四种明翻刻宋黄善夫本《史记》辨 (中山大学学报 site) | 1981 | http://xuebao.sysu.edu.cn/Jweb_zrb/CN/abstract/abstract11531.shtml (404 direct; snippet-captured) | Layout spec: 半页十行行十八字, 小字注双行行22–23字, 细黑口双鱼尾左右双边, 书耳记篇名; 牌记2处; 讳至敦字 → 庆元–嘉定 1195–1224 |
| shd.org.cn / gushu.net.cn / nlcpress.com | 史记 edition notes | — | https://www.shd.org.cn/book/show/13 ; https://gushu.net.cn/index.php/cms/show-79.html ; https://www.nlcpress.com/ProductView.aspx?Id=10502 | 庆元年间 label; 现存最早合刻本; 蔡梦弼1171 二家注合刻最早; 百衲本影印底本=黄善夫本 |
| NCL Taiwan (mirror gxhj.com) | 十七史詳節 明正德11年(1516)建陽劉氏慎獨齋刊本 record 書號01697 | 1516 (object) | https://www.gxhj.com/png/367251cfhj/ | 行款 verbatim: 13行行26字, 註文小字雙行字數同, 雙欄白口雙魚尾; 匡18.8x11.8cm |
| 故宫博物院 | 十七史详节 object page | — | https://www.dpm.org.cn/ancient/yuanmingqing/151399.html | 1516 慎独斋本 details (行36字 — ต่างจาก NCL 26字, flag discrepancy); 吕祖谦 1137–1181; 叶德辉 praise 慎独斋 |
| CTEXT datawiki / SiKu mirror | 十七史詳節 records | — | https://ctext.org/datawiki.pl?if=gb&res=492287 ; https://www.39017.com/SiKuQuanShu/bk97319m/ | 吕祖谦编 273卷, 建阳书坊刻印流传; component title 《東萊先生增入正義音注史記詳節》; 元刻本+1516本传世 |
| 南京大学图书馆 | 名公增修标注南史详节 note | — | https://lib.nju.edu.cn/info/1047/2544.htm | 宋刻建阳书坊珍本 of one fascicle — physical proof of Song print of the set |
| 李霖 (via 中华读书报/gmw.cn) | 《宋本群经义疏的编校与刊印》结语 quotes | book 2019-01 | https://epaper.gmw.cn/zhdsb/html/2019-02/20/nw.D110000zhdsb_20190220_1-13.htm (+douban review/10011619, rujiazg 15932/17222) | STANDARDIZATION claim: 经文大字、注文中字、疏文双行小字成为义疏的常态; 十行本=经注释音义疏合编; 十三经注疏=十行本的子孙 |
| 台北故宫 / teldap | 孟子註疏解經 (八行本) + 周礼注疏 essays | objects 嘉泰1201–04 | https://theme.npm.edu.tw/selection/Article.aspx?sNo=04001046 ; https://culture.teldap.tw/culture/index.php?id=1020 & id=1022 | 单注本→单疏本(988)→12th c. 合刻本 (黄唐本/八行本, 两浙东路茶盐司); "The commentaries were placed right below the text of the Classic" |
| World Digital Library (Wayback) | 礼记单注本 Southern Song Jian'an record | — | https://web.archive.org/web/20150418123512/http://www.wdl.org/zh/item/11379/ | 讳至光宗(1190–94); 释文/重意/重言用墨盖子白文标示; 小黑口窄版心; 建安坊刻科举用书附纂图互注 |
| 叶德辉 (text via daowen.com) | 宋刻纂图互注经子 catalog excerpts | Qing text | https://www.daowen.com/lilun/431215.html | 行款 batch: e.g. 监本纂图…夹注小字行二十四字; 附释音毛诗 传笺释文俱双行小字 每叶24行大21小25; 麻沙本阙笔至惇字=光宗时刊 |
| sbksc.zcxn.com essay | 宋刻本的赏鉴与收藏 | — | https://www.sbksc.zcxn.com/html/xsydxssc/0310_2324.html | 监本八行16字; 建刻十行18字群经注疏影响后世; 尾崎康: 存世十行本多为元翻宋 (论语注疏版心泰定四年程瑞卿) |
| 张丽娟 | 宋代經書注疏刊刻研究 (北大出版社) TOC | 2012-ish | https://neodb.social/book/6dKESBV3WfssIuqX8UbfTY | Evolution chain: 经注本→单疏本→经注附释文本→纂图互注重言重意本→注疏合刻本 |
| Harvard-Yenching CURIOSity | Chinese Rare Books collection overview | — | https://curiosity.lib.harvard.edu/chinese-rare-books/about/collection-overview | 1,500 SYM blockprints digitized via HOLLIS/CURIOSity (channel documented; specific 宋注疏 record not pulled this loop) |
| Susan Cherniack | HJAS 54.1 (via Wayback JSTOR capture + DASH quoting dissertation + S2 contexts) | 1994 | https://doi.org/10.2307/2719389 | Wayback = preview only; S2 100 contexts no layout sentences; DASH relays her p.10 remark (fragment): "although Song printers were prolific, the majority of books in Song…" — own-words layout passages still unverified |

---

## Key findings (with URLs)

### TARGET 1 — Cherniack layout passages ในคำของเธอเอง
1. ช่องทางใหม่ที่ลองหมด: S2 citations re-pull (100 papers, keyword sweep), Wayback JSTOR captures (preview-only), fatcat (down), dokumen.pub (403), DASH PDF (binary). **สรุปตรงไปตรงมา: ยังไม่พบข้อมูลยืนยัน** ประโยค layout convention ภาษาเธอเองแบบ verbatim — ปิดได้แค่ page-mapped contexts (B01) + fragment p.10 เรื่อง print prevalence จากงานอ้างเธอ (dash.harvard.edu bitstream 7312037c…, truncated quote).
2. Bibliographic identity ยืนยันซ้ำผ่าน Wayback JSTOR: Vol. 54, No. 1 (Jun. 1994), pp. 5–125 (121 pages), Harvard-Yenching Institute.

### TARGET 2 — 黃善夫本史記 + 十七史詳節 dating
3. **黃善夫本史記: ปิดแล้ว** — museum authority: 南宋慶元年間 1195–1201 "刊か", colophon 「建安黄善夫刊／于家塾之敬室」, 建安(福建), earliest extant complete 三家注合刻 (khirin-a.rekihaku.ac.jp); bibliographic cross-check: taboo-based range 庆元–嘉定 1195–1224 (陈修紘1981); consistent labels 庆元年间 (shd.org.cn).
4. **十七史詳節: ปิดระดับที่เข้าถึงได้** — compile by 呂祖謙 1137–1181; printed by 建陽書坊 (ctext); Song print witness exists (NJU 南史详节 宋刻本); dated accessible witness = 明正德11年1516 慎独斋 reprint with 註文小字雙行. Precise Song print year: **(ยังไม่พบข้อมูลยืนยัน)**.

### TARGET 3 — Visual/typographic evidence per source text
5. 黃善夫本: 半页10行×18字; 小字注双行22–23字; 细黑口; 双鱼尾; 左右双边; 书耳篇名 (陈修紘) + digitized page images CC BY 4.0 at Rekihaku (agent ไม่ได้ eyeball pixel-level — image URLs listed vol-by-vol on record page).
6. 十七史詳節1516本: 13行26字, 註文小字雙行, 白口双鱼尾 (NCL mirror); PM record conflicts on 字数 (36 vs 26) — recorded as-is.
7. 八行本孟子 (嘉泰1201–04): commentaries placed right below classic text; combined 注+疏 first at 12th c. (NPM/teldap English+Chinese).
8. 建安坊刻科举经书 (WDL 礼记单注本): 释文/重言/重意 marked with 墨盖子白文; 小黑口; 纂图互注 apparatus — typographic conventions of exam-market interleaved books.
9. 叶德辉 catalog batch gives 行款 formulas for 纂图互注/附释音 family (夹注小字行二十四字 etc.) — usable as comparative table material.
10. Caution note for chapter: 尾崎康 result — most extant 十行本 are Yuan reprints of Song blocks (e.g., 论语注疏 版心 泰定四年程瑞卿) — affects any claim of "Song survival" of these layouts.
11. IDP: negative-relevance (Dunhuang/Turfan pre-Song focus); Harvard CURIOSity channel documented but not mined for a specific 宋注疏 record this loop.

### TARGET 4 — Standardization claim
12. **ปิดแล้วด้วยชื่อ scholar จริง:** 李霖《宋本群经义疏的编校与刊印》(中华书局2019) 结语 verbatim: "明清读者普遍通过十行本系统版本认识义疏。经文大字、注文中字、疏文双行小字，成为义疏的常态。" + "福建坊肆推出五花八门的十行本注疏…大受市场欢迎。" (gmw.cn epaper 2019-02-20; corroborated douban + rujiazg).
13. Mechanism chain ครบ: 单注本→单疏本988→12th-c. 合刻 (八行本, 黄唐) → Jianyang 十行本 (= 经注、释音、义疏合编; base = 经注释音本 散入义疏) → 十三经注疏 lineage (阮刻) — sources: 乔秀岩引言 + 陈侃理评 (rujiazg 15932/17222), NPM/teldap, 张丽娟 TOC.
14. Decade-scale anchor: combined editions begin 12th century; interleaved-small-character norm consolidated by late-Southern-Song Jianyang 十行本 (late 12th–13th c.), with extant copies mostly Yuan reprints.

---

## Gaps closed / Remaining

### Closed (loop_B01 residual list)
1. 黃善夫本史記 dating + colophon + provenance — museum-grade source fetched. (residual #2 half)
2. 十七史詳節 dating chain + 行款 — closed to the limit of accessible catalogs; exact Song print year remains flagged. (residual #2 half)
3. Visual/typographic evidence per source text — layout specs for 黃善夫本, 十七史詳節1516, 八行本, 建安坊刻礼记 + image channel (Rekihaku CC BY 4.0). (residual #5 partial — specs yes, agent eyeballing no)
4. Decade-scale standardization claim with named scholar (李霖) + mechanism chain. (residual #1)
5. Brokaw & Chow intro full text: NOT obtained (dokumen.pub 403 both channels) — stays open. (residual #6)

### Remaining
1. Cherniack own-words layout sentences — needs licensed full text (JSTOR/Hebrew? none OA); all free channels exhausted this loop.
2. Chia Jianyang chapters inner content (jiajia as examination-market format) — Brill/cdlib paywalled; dokumen.pub blocked.
3. Exact issue/volume metadata of 陈修紘1981 article; original NCL OPAC record (mirror used).
4. Agent-side visual confirmation of double-column rendering from scan images (Rekihaku/Harvard IIIF) — future loop with image viewing.
5. PM-vs-NCL 行数 discrepancy (36 vs 26字) on 1516 慎独斋本 — needs one authoritative 目录 (中国古籍善本书目).

## Blocked sources (บันทึกตามจริง)
- api.fatcat.wiki: connection refused/down (2 attempts)
- dokumen.pub (Brokaw & Chow PDF mirror): 403 ทั้งสอง channel
- xuebao.sysu.edu.cn abstract page: 404 ตอน fetch ตรง (snippet capture only)
- Wayback JSTOR captures: preview/metadata only, no first-page text
- dash.harvard.edu PDF: binary stream, no local PDF-text tooling used this loop
- rbook/rarebook NCL OPAC: unreachable (consistent with B01)
