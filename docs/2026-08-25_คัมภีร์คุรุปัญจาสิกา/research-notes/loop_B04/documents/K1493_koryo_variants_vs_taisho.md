# K41n1493 (Koryŏ re-carved canon) — witness data and graph-level comparison vs Taishō T32n1687

Loop B04, 2026-08-26. RESEARCH ONLY. Complements loop_A07 (which secured the full block transcription).

## 1. Status of the requested CBETA Online fetch

Requested URL: https://cbetaonline.dila.edu.tw/zh/K1493_001
Result: JS application shell only ("CBETA 線上閱讀 Loading..."), no static text served (same behavior as the T1687 page tested in loop_A07, saved there as `cbeta_T1687_page.html`). Negative result documented honestly; no CBETA-K text obtained from this route.
GitHub probes for a K-series XML also failed (HTTP 404):
- raw.githubusercontent.com/cbeta-org/cbeta-xml/master/K/K41/K1493.xml → 404
- raw.githubusercontent.com/cbeta-org/xml-p5/master/K/K41/K41n1493.xml → 404

Substitute witness already in hand (loop_A07/documents/): Dongguk University KABC integrated viewer transcription `K1493_fulltext_hanmun_translation.txt` (block IDs 041_0612_b_01L … 041_0612_c_09L), which contains BOTH the hanmun block text and 김진철's Korean rendering. The full hanmun block text is quoted at line 243 of that file.

## 2. Bibliographic identity (recap from A07, verified)

- K41n1493 = 事師法五十頌 (1卷), 馬鳴菩薩集, 宋 日稱等譯; case 41, woodblock 41-0612 (both sides).
- KABC cross-references: Shinshū T.1687 (=T32, p.775); 契丹藏(Qisha) 36/382; 中華藏 n1642; Song(송장) and Bulkwang fields EMPTY — consistent with Taishō note 「此頌宋本元本宮本俱闕」.
- Sutrapearls K-catalog line: 「K41n1493：事師法五十頌(一卷)馬鳴菩薩集：宋‧日稱等譯」.

## 3. NEW datum: carving colophon of the Koryŏ block

The KABC block transcription ends with a carving colophon ABSENT from the Taishō print:

> 「事師法五十頌甲辰歲高麗國大藏都監奉勅彫造」

("The Shishi fa wushi song [block] respectfully carved by imperial edict by the Directorate of the Canon [大藏都監] of the state of Koryŏ in the jiachen year.")

Interpretation: the re-carved canon (再雕藏) blocks were cut under the 大藏都盧 directorate between 1236 and completion in 1251; 甲辰 within that window = 1244 CE. This gives the Chinese Gurupañcāśikā witness a precise carving date and confirms transmission through the re-carved Koryŏ project. (Cf. A07 §5: cluster of Northern Song translations carried via Liao/Koryŏ channels.)

## 4. Graph-level differences observed: KABC transcription vs CBETA/Taishō clean text

CAUTION: the Dongguk transcription layer normalizes some graphs to Korean-standard forms (e.g. 眞/眞眞, 淸, 衆); such items are labeled "transcription-layer" below and are NOT secure evidence of block readings. Items corroborated independently by CBETA's own 【麗-CB】 apparatus notes (loop_A05 diff table) are marked SECURE.

| # | Loc | Taishō/CBETA | Koryŏ (KABC) | Assessment |
|---|---|---|---|---|
| 1 | Byline | 馬鳴菩薩集 | 馬嗚菩薩集 | graphic 嗚/鳴 (already noted in A07 §1.3) |
| 2 | v1 | 祕密教 | 袐密教 | 袐/祕 graphic variant |
| 3 | v7 | 慠易恃種族 | 傲易恃種族 | 慠/傲 variant (no CBETA 【麗】 note recorded; treat as probable but unconfirmed block reading) |
| 4 | v18 | 不恡於己身【CB】【麗-CB】 / 不希【大】 | 不悋於己身 | SECURE family: CBETA's emendation toward 高麗 (恡) matches the Koryŏ tradition's lìn-graph (悋); T-print 希 is the odd reading out |
| 5 | v24 | 騎驀罪過是【CB】【麗-CB】 / 足【大】 | 騎驀罪過是 | SECURE: Koryŏ agrees with adopted 是 against 大-print 足 |
| 6 | v37 | 或笑嗽伸㰦【CB】【麗-CB】 / 呿【大】 | 或笑嗽伸㰦 | SECURE: Koryŏ agrees with 㰦 |
| 7 | v39 | 低顏其慚𧹞 | 低顏其慚𧹞 | same rare char both traditions |
| 8 | v45 | 當恭敬頂受【CB】【麗-CB】 / 常【大】 | 當恭敬頂受 | SECURE: Koryŏ agrees with 當 |
| 9 | vv.14–17,20 | 阿闍黎 | 阿闍梨 | 黎/梨 variant throughout (consistent) |
| 10 | v24 | 床坐資具 | 牀坐資具 | 牀/床 transcription-layer or block variant |
| 11 | v30 | 無棄於涕涶 | 無棄於涕唾 | NOTABLE: Koryŏ has the expected word 唾 "spit"; Taishō's 涕涶 looks like a corrupted graph preserved in print; no CBETA 【麗】 note was recorded for this spot (gap worth flagging) |
| 12 | v31/v35 | 隣近語笑 / 輒稱舉 | 鄰近語笑 / 輒稱擧 | 鄰/隣, 擧/舉 likely transcription-layer normalization |
| 13 | v31 | 謌舞作唱 | 歌舞作唱 | 謌/歌 variant |
| 14 | v38 | 專視於師面 | 專眎於師面 | 視/眎 variant |
| 15 | v52 | 眾生 | 衆生 | transcription-layer normalization |

Net effect for the comparative chapter: the Koryŏ witness is textually extremely close to the Taishō base (as expected — Taishō IS set from the Koryŏ tradition here), with only graphic variance plus four CBETA emendations that restore readings the Koryŏ block itself supports (是/㰦/當/恡-family). No structural differences: verse count, order, and wording otherwise identical to T32n1687's 52 quatrains.

## 5. Conclusion for the stemma

K41n1493 does not constitute an independent textual recension of the Chinese translation; it is the effective base-tradition witness (Taishō printed from it), dated by its own colophon to 甲辰歲 (1244 CE). For verse-mapping purposes (see loop-report table), K1493 = T1687.
