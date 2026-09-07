# Loop B02 Findings — Chinese Buddhist translation-bureau mechanics, Tiantai commentarial practice, and the Japanese reception of the Yiqiejing yinyi

Date: 2026-08-26 | Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_B02
Phase-B gap-closing loop for Phase A loops 08/14. All facts below verified against fetched sources only; unverified items marked (ยังไม่พบข้อมูลยืนยัน).

## Queries executed

Websearch tool (Exa backend): HTTP 429 "Rate limit exceeded" on every attempt this entire loop (7 tries spread over the session) — same failure mode as loop_08. All discovery therefore via fallbacks:

1. Crossref REST API (api.crossref.org/works): bibliographic queries — "Philologists Scribes Gentlemen Laymen Buddhist translators"; "Guanding Zhiyi lectures recorded compilation Tiantai commentaries formation" (hit: Tsuchiya 2001); "Mohe zhiguan great calming contemplation Guanding recorded"; "Manuscripts Nanatsudera recently discovered treasure house Nagoya" (hit: Hubbard 1991); "Zhiyi lectures recorded Zhangan Guanding Fahua wenju formation" (hits: Matsumori 2007, Kashiwagura 1993, Kanno 2005, Chodo 2006).
2. OpenAlex API: intermittent 429 (daily budget); succeeded once for DOI lookup of Tsuchiya 2001 (diamond OA) and Hubbard 1991 (green OA PDF location).
3. CBETA GitHub repo cbeta-org/xml-p5 (raw + contents + git/blobs API): downloaded and full-text searched T50n2060 (Song gaoseng zhuan), T50n2053 (Da Ci'en si sanzang fashi zhuan), T46n1911 (Mohe zhiguan), T33n1716 (Fahua xuanyi), T34n1718 (Fahua wenju), T50n2050 (Biezhuan), T54n2126 (Dasong sengshilüe), T54n2131 (Fanyi mingyi ji).
4. J-STAGE: direct OA PDF download + pypdf extraction (Tsuchiya 2001); landing-page fetch failed (HTTP 500); search API returned no usable nodes.
5. Kotobank aggregate dictionary pages: 類聚名義抄; 瑞渓周鳳.
6. NDL Search (ndlsearch.ndl.go.jp): 浄土三部経音義集; 華厳経音義私記.
7. Nagoya University researcher profile DB: Li Naiqi 李乃琦 (https://profs.provost.nagoya-u.ac.jp/html/100013607_ja.html) re-fetched for 729-date verification and publication list.
8. Nanzan IRC open-access PDF: Hubbard 1991 JJRS review article (downloaded, text-extracted).

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Fayun 法雲 | Fanyi mingyi ji 翻譯名義集 (T54n2131), 宗翻譯主篇 | preface 1157 | https://github.com/cbeta-org/xml-p5/blob/master/T/T54/T54n2131.xml | Canonical enumeration of translation-bureau offices quoted from the Song Biographies: 譯主, 筆受(=綴文), 度語(正云譯語/傳語), 證梵本, 證梵義, 證禪義, 潤文, 證義, 梵唄, 校勘, 監護大使 — each with function and historical holders; plus Yacong's 八備十條 |
| Zanning 贊寧 | Song Gaoseng zhuan 宋高僧傳 (T50n2060) | 988 | https://github.com/cbeta-org/xml-p5/blob/master/T/T50/T50n2060.xml | Real rosters: Sui Daxingshan bureau (慧乘等證義, 玄謨等譯語, 慧賾慧淨慧明法琳等綴文, 房玄齡/杜正倫參助勘定, 蕭璟總知監護); 度語筆受 pairs; Dharmagupta "不勞度語"; Xuanzang bureau echo with 玄應以定字偽 |
| Anonymous/Guanli? | Da Ci'en si sanzang fashi zhuan 大慈恩寺三藏法師傳 (T50n2053) juan 7 | 688 | https://github.com/cbeta-org/xml-p5/blob/master/T/T50/T50n2053.xml | Xuanzang's Hongfu-si request list 「證義、綴文、筆受、書手」; twelve 證義大德 named; 字學大德 = 玄應 Xuanying; 證梵語梵文大德 = 玄謨; 書手 copyists supplied by authorities |
| Guanding 灌頂 (recorder) | Mohe zhiguan 摩訶止觀 (T46n1911) | lectures from 594 | https://github.com/cbeta-org/xml-p5/blob/master/T/T46/T46n1911.xml | Juan-head formula x20 「隋天台智者大師說　門人灌頂記」; Guanding's preface: lectures at Yuquan-si (Jingzhou) from Kaihuang 14/4/26 (=594), "一夏敷揚、二時慈霔", broke off at 見境 chapter |
| Guanding | Miaofa lianhua jing xuanyi 妙法蓮華經玄義 (T33n1716) | late 6th c. | https://github.com/cbeta-org/xml-p5/blob/master/T/T33/T33n1716.xml | Head 「隋 智顗說」, juan-heads 「天台智者大師說」x20, preface signed 「沙門灌頂述」 |
| Guanding tradition | Miaofa lianhua jing wenju 妙法蓮華經文句 (T34n1718) | late 6th c. | https://github.com/cbeta-org/xml-p5/blob/master/T/T34/T34n1718.xml | 「天台智者大師說」x35; embedded Tang colophon: the xuanyi 「迺是灌頂法師私記，合二十卷」 — explicit private-record (reportatio) statement |
| Guanding | Sui Tiantai Zhizhe dashi biezhuan 隋天台智者大師別傳 (T50n2050) | 605-617 | https://github.com/cbeta-org/xml-p5/blob/master/T/T50/T50n2050.xml | Attribution 「門人灌頂撰」 — disciple as biographer of Zhiyi |
| TSUCHIYA Jikyō 土屋慈恭 | 天台大師の維摩経解釈に関する一考察, IBK 49-2: 222-229 | 2001 | https://doi.org/10.4259/ibk.49.728 ; PDF https://www.jstage.jst.go.jp/article/ibk1952/49/2/49_2_728/_pdf/-char/en | Full text extracted; sandaibu Vimalakirti quotation counts (Wenju 17 / Xuanyi 50 / Zhiguan 105 = 172); Biezhuan evidence of early Weimo lectures |
| MATSUMORI | Zhanran's Annotation to the Parts of the Fahua xuanyi written by Guanding, IBK 55-2 | 2007 | https://doi.org/10.4259/ibk.55.608 | Title-level evidence that parts of the xuanyi are Guanding's own writing, annotated by Zhanran (body not fetched) |
| KASHIWAGURA / KANNO | Guanding-and-Jizang quotations in Fahua wengou (IBK 42, 1993); Four Interpretations of Fahua wenju (IBK 54, 2005) | 1993/2005 | https://doi.org/10.4259/ibk.42.261 ; https://doi.org/10.4259/ibk.54.79 | Citation-level support on Guanding's role in Wenju formation |
| Jamie Hubbard | Review article: newly discovered Buddhist texts at Nanatsu-dera (JJRS 18-4: 401-406) | 1991 | OA PDF: https://nirc.nanzan-u.ac.jp/journal/6/article/809/pdf/download (DOI 10.18874/jjrs.18.4.1991.401-406) | Nanatsudera issaikyo copied 1175-1180 for Owari governor (patron Onakatomi Yasunaga); Nara-period recensions inside set; discovery history; institutional questions (staff numbers/training/pay); no named collator roles |
| LI Naiqi 李乃琦 | 一切経音義における小字双行について, IBK 70-3: 1228-1233 | 2022 | https://doi.org/10.4259/ibk.70.3_1228 (abstract via profile page) | 「日本で書写された最古の記録は729年」— VERIFIES the 729 earliest-copy claim from loop_08/14; one-line large-char vs two-line small-char formats |
| LI Naiqi | Regarding Yiqiejingyinyi classical Japanese manuscripts, Hokkaido U. JFHHS 15: 59-65 | 2020 | https://hdl.handle.net/2115/77527 | Ruiju myōgi shō (Zushoryō-bon) compiled ca. 1100 by Hossō monk quotes ~1,300 Yinyi entries — largest such collection; ten manuscript versions listed |
| LI Naiqi (profile page) | Publication/lecture list incl. 図書寮本類聚名義抄...依拠テキスト (訓点語と訓点資料 137, 2016); 新撰字鏡の依拠本 (ICABS kiyo 25, 2021, https://icabs.repo.nii.ac.jp/records/582 ); 金光明最勝王経音義成立過程の再検討 (2025 talk); 日本撰述仏典音義研究 (Fudan 2025 invited lecture); DABD database works | 2016-2026 | https://profs.provost.nagoya-u.ac.jp/html/100013607_ja.html | Research program on Japan-composed butten yinyi; Shin senjikon dependence on Yinyi; 国宝七寺一切経 survey role (2024-) |
| Kotobank (Daijisen/Nikkoku/Nipponica/Mypedia/Sekai/Britannica-intl) | 類聚名義抄 entry + embedded 【訓】【辞書】 essays | n.d. (fetched 2026-08-26) | https://kotobank.jp/word/類聚名義抄 | Late-Heian kanji dictionary, 120 radicals, 佛/法/僧 sections, shōten-marked wakun; Hossō-monk original vs Shingon revision (Kanchiin-bon complete, 32,000 chars/40,000+ wakun); 【訓】 essay names early Japanese yinyi: 新訳八十巻華厳経音義私記, 四分律音義 (late Nara-early Heian) |
| NDL Search | 浄土三部経音義集 records (39 hits) | records 1900-2021 | https://ndlsearch.ndl.go.jp/search?cs=bib&keyword=浄土三部経音義集 | Compiler verified: 信瑞纂 (Keiseibō Shinrui, Kamakura Jōdo monk); 4 juan; in Taishō zokuzō vol.57 as 「日本 信瑞」; Maeshima Shinya 敬西房信瑞の研究 (Hōzōkan 2021) TOC: 『浄土三部経音義集』―信瑞の宋代仏教文化の受容 |
| NDL Search | 新訳華厳経音義私記 scholarship cluster (53 hits) | 1939-2024 | https://ndlsearch.ndl.go.jp/search?cs=bib&keyword=華厳経音義私記 | Jia Zhi 2013 UTokyo PhD; Miao Yu & Liang Xiaohong 2014 monographs; Ikeda Shōju 2024 日本辞書史研究 chapter; related: 高山寺本新訳華厳経音義, 山寺本・石山寺本大般若経音義, 本孔雀経音義, 倶舎論音義 |
| Sin Wŏnch'ŏl (+kotobank corroboration) | Propagation to Korea and Reintroduction to China of Huilin's Yinyei (De Gruyter ch.) + 瑞渓周鳳 entry | 2024 / n.d. | https://doi.org/10.1515/9783111322599-003 ; https://kotobank.jp/word/瑞渓周鳳 | Liao->Koryo->Japan route; 1409 Zuikei Shūhō letter in Zenrin kokuhōki; Kenninji/Zōjōji copies; Yang Shoujing re-import. Kotobank independently verifies Zuikei Shūhō (1391-1473, sōroku-shi, drafter of diplomatic letters incl. to Ming, compiler of Zenrin kokuhōki) |

## Key findings

### Gap 1. Translation-bureau (fanchang) role-titles — CLOSED (primary sources)

The authoritative office-list was located verbatim in Fayun's Fanyi mingyi ji (T54n2131, preface 1157), section 宗翻譯主篇, quoting the Song Biographies: 「譯場經館，設官分職」 with offices and functions:
1. 譯主 yizhu — presiding tripiṭaka master bringing the palm-leaves, versed in exoteric-esoteric teaching;
2. 筆受 bishou (also called 綴文 zhuiwen) — writes the draft; must command both languages; held since Western Jin/Former Qin (道含, 玄賾, 姚嵩, 聶承遠父子; even emperors Liang Wudi/Empress Dowager/Zhongzong wielded the brush);
3. 度語 duyù — 「正云譯語，亦名傳語」 i.e., properly termed yiyu 譯語 or chuanyu 傳語 (oral interpreter; e.g., 戰陀 for Xianshi lun);
4. 證梵本 zhengfanben — checks Sanskrit source (伊舍羅 for Vinaya);
5. 證梵義 zhengfanyi — checks meaning fidelity; plus optional 證禪義 (大通);
6. 潤文 runwen — literary polishing, variable headcount (Yijing's bureau: 李嶠, 韋嗣立, 盧藏用 etc. 20+);
7. 證義 zhengyi — certifies doctrine of translated text (Vibhaṣā bureau: 慧嵩, 道朗 +300; 復禮);
8. 梵唄 fanbei — opening chant (from Tang Yongtai era);
9. 校勘 jiaokan — collation re-checking (彥琮 etc.);
10. 監護大使 jiangu dashi — supervising commissioner (Zhou 侯壽; Tang Fang Xuanling for Xuanzang; Sui used ten monks 明穆/曇遷 「監掌翻譯事，詮定宗旨」).
Real rosters corroborate: Sui Daxingshan (T2060): 證義=慧乘等, 譯語=玄謨等, 綴文=慧賾慧淨慧明法琳等, 勘定=房玄齡/杜正倫, 監護=蕭璟. Xuanzang's Hongfu bureau (T2053 juan 7 + T2060): 證義 12 monks named; 綴文/綴緝; 錄文/筆受 (辯機); 證梵語 (玄模/玄謨); and crucially 字學大德 玄應 whose job was 定字偽 — the office out of which the Yiqiejing yinyi grew. Prompt-guess resolution: yiyu 譯語 verified; "bi Shou" = 筆受 bishou verified; "zhengyi 正義" is actually 證義; "duzuo 座主" NOT found as an office (ยังไม่พบข้อมูลยืนยัน) — the presiding officer is 譯主. Note honestly recorded: the exact Song-shizhuan passage could not be located within current CBETA T50n2060 text (terms 譯主/潤文 absent there); it survives as quoted in T54n2131.

### Gap 2. Zhiyi lecture-to-text pipeline via Guanding — CLOSED (primary sources)

All three Tiantai sandaibu carry the formula 「智者大師說　門人灌頂記」 ("spoken by Zhiyi, recorded by Guanding"): Mohe zhiguan T46n1911 (門人灌頂記 x20 juan heads), Xuanyi T33n1716 (智顗說 heads + preface signed 沙門灌頂述), Wenju T34n1718 (智者大師說 x35). Guanding's Mohe-zhiguan preface fixes the performance conditions: lectures at Yuquan Temple (Jingzhou) beginning Kaihuang 14/4/26 (=594 CE), "one summer expounding, two sessions daily," breaking off mid-course at the Jian-jing chapter — a documented oral-event-to-text record structurally identical to Latin reportationes. An embedded Tang colophon in T34n1718 states explicitly that the Xuanyi 「迺是灌頂法師私記」 (was Guanding's private record, 20 juan). Secondary: Matsumori 2007 (title-level: parts of xuanyi written by Guanding); Tsuchiya 2001 full text (sandaibu citation statistics; Biezhuan lecture evidence).

### Gap 3. Japanese reception detail — CLOSED

(a) Earliest Japanese copying of Xuanying's Yinyi = 729 CE, now verified against Li Naiqi 2022 IBK abstract (「日本で書写された最古の記録は729年」), upgrading the loop_08/14 profile-page claim to a peer-reviewed source. (b) Ruiju myōgi shō: Japanese-made kanji dictionary (Hossō-monk original ca. 1100, Zushoryō fragment; Shingon revised Kanchiin-bon complete, ~32,000 graphs, 40,000+ wakun with shōten accent marks) quoting ~1,300 Yinyi entries — largest single absorption of Yinyi material into a Japanese work (Li 2020 English abstract; kotobank aggregate for structure/history). (c) Japanese-made imitations beyond Ruiju myōgi shō now form a verified cluster: 新訳八十巻華厳経音義私記 and 四分律音義 (late Nara-early Heian, per kotobank 【訓】 essay; rich modern scholarship via NDL: Jia Zhi 2013 diss., Miao/Liang 2014, Ikeda 2024); 浄土三部経音義集 4 juan by Kamakura monk 信瑞 Keiseibō Shinrui (compiler hanzi verified via NDL records; Taishō zokuzōkyō v.57 placement; Maeshima 2021 monograph on its Song-culture reception; Crossref/Maejima 2019 comparative study with Xuanying); 金光明最勝王経音義 (Li's ongoing formation study); category confirmed as 日本撰述仏典音義 (Li's Fudan 2025 invited lecture). Author of the Huayan shiki not stated in fetched records (ยังไม่พบข้อมูลยืนยัน).

### Gap 4. Issaikyō proofreading-colophon culture — PARTIALLY CLOSED

Hubbard 1991 (full OA text harvested) adds: Nanatsudera canon copied 1175-1180 at behest of Owari governor (Onakatomi Yasunaga); kept in dated lacquered chests; contains Nara-period recensions; raises exactly the right codicological questions (staff numbers, training, pay) — but does not transcribe collator-role colophons. Combined with loop_14's Princeton Shōgozō guide (Nara gogan-kyō sets repeatedly proofread and collated) the proofreading culture is documented; however, named collator role-titles inside specific Nanatsudera/Kongōji colophons remain unverified from fetched sources (ยังไม่พบข้อมูลยืนยัน) — needs primary volumes (七寺古逸經典研究叢書; 正倉院紀要) next loop.

### Gap 5. Huilin Yinyi Korea-Japan route — CLOSED (corroborated)

Route chain stands as in loop_14 (Sin 2024): completed 807 -> lost in China -> preserved via Liao canon into Koryŏ Chaejo Taejanggyŏng -> sent to Japan after repeated requests (Zuikei Shūhō's Ōei-16/1409 letter in Zenrin kokuhōki) -> Kenninji/Zōjōji copies -> Yang Shoujing re-import. New independent verification: kotobank confirms Zuikei Shūhō (1391-1473) as the shogunate's diplomatic drafter and Zenrin kokuhōki compiler; Li 2023 confirms the Koryo re-carving functions as base text for modern collation of the Sixi zang yinyi. The 1409 letter's own wording still rests on Sin 2024 alone (ยังไม่พบข้อมูลยืนยัน at primary-text level this loop).

## Gaps closed vs remaining

Closed this loop: fanchang office-list with functions (primary); Xuanzang-bureau roster identifying Xuanying's graphological office; sandaibu 說/記 attribution + 594 Yuquan lecture facts + 私記 statement; 729 date upgraded to journal-source; Ruiju myōgi shō absorption quantified; Japanese-made yinyi cluster established (Shinrui compiler hanzi fixed); Zuikei Shūhō identity/work corroborated.

Remaining:
1. Named collator roles (校経者/点者 etc.) transcribed from specific issaikyō colophons (Nanatsudera/Kongōji/Chūsonji).
2. Exact provenance of Fayun's Song-shizhuan passage within recensions of the Song gaoseng zhuan.
3. Redaction history of the sandaibu (notes vs. Guanding's recomposition) beyond title-level items (candidate: Hokusho Kensan monographs; Swanson, Clear Serenity intro).
4. Zenrin kokuhōki 1409 letter primary text; Koryo re-carving dates re-verification.
5. Author attribution for 新訳華厳経音義私記.
6. Chen Jinhua book-title string "Philologists, Scribes, Gentlemen and Laymen": NOT found in any fetched source (ยังไม่พบข้อมูลยืนยัน) — his verified relevant piece remains the 2005 Journal Asiatique article (loop_08 doc); Fujita Kotatsu / Antonello Palumbo bureau studies also not verified this loop.

## Blocked sources (honest record)

- Websearch tool (Exa MCP): HTTP 429 on all attempts throughout the loop — no websearch-derived content used.
- OpenAlex API: 429 rate-limit errors on most calls (2 successes spaced out).
- GitHub raw.githubusercontent.com: intermittent 404s on large Taishō XML files mid-session; worked around via api.github.com contents/git-blobs endpoints.
- J-STAGE: article landing page HTTP 500 (bukkyobunka 27_111); search API returned zero parseable nodes; ibk1952 PDF path probing missed for Kanno 2005 (citation-level only).
- ICABS repository simple-search endpoint: HTTP 406 (records fetchable individually only).
- Unpaywall: HTTP 422 for JJRS DOI (OpenAlex oa_url used instead, successfully).
- MAEJIMA 2019 PDF body: CID-font extraction still impossible (title/metadata only; compiler hanzi resolved via NDL instead).
