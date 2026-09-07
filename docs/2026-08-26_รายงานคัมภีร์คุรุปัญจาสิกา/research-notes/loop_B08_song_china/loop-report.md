# Loop Report B08: Song-dynasty Translation Context — 日稱 (Sūryakīrti?) Primary Sources

> Loop type: Primary-source Verification | Date: 2026-08-26 | Status: COMPLETE
> Working area: `research-notes/loop_B08_song_china/documents/`
> Target: translator of T1687 事師法五十頌 (1073? no — 嘉祐八年/1063 batch), institutional & sponsorship context

---

## 1. 日稱 in the three Song Buddhist chronicles — ZERO hits CONFIRMED (double-checked)

Method: previous grep re-run via Python on the local CBETA XML (UTF-8), counting both traditional/simplified forms and allowing tag-interleaved segmentation; all positive-control terms returned hits, proving file integrity.

Verbatim counts (archived: `T49_chronicles_zero_hit_verification.txt`):

```
T49n2035.xml len=2654324
   鴻臚 24 / 譯經院 19 / 傳法院 4 / 闡教 5 / 賜謚 3 / 元豐元年 3
T49n2036.xml len=1935751
   鴻臚 4 / 譯經院 2 / 傳法院 3 / 闡教 4 / 元豐元年 1
T49n2037.xml len=1127715
   鴻臚 8 / 譯經院 4 / 傳法院 5 / 元豐元年 1 / 西天譯經 1
日稱=0, 日称=0, 宣梵=0 in ALL THREE files
```

All apparent near-miss hits (闡教×9, 賜謚×3, 元豐元年×5, 西天譯經×1) were context-extracted (`T49_chronicles_chanjiao_context_check.txt`): they are Chan idiom ("唯大雄之闡教也"), the 陳留闡教寺 relic story, collation apparatus notes, 龍井/慧才 events, and 施護/法賢 bylines — none concern 日稱.

**Conclusion stands and is now robust:** 佛祖統紀 (T2035), 佛祖歷代通載 (T2036), 釋氏稽古略 (T2037) are entirely silent on 日稱.

## 2. 宋會要輯稿 obituary — FULL TRANSCRIPTION SECURED [primary]

Source: daizhige (殆知閣) GitHub corpus full transcription of 《宋会要辑稿》, archived complete as `songhuiyao_jigao_fulltext_daizhige.txt` (27.7 MB; https://raw.githubusercontent.com/garychowcmu/daizhigev20/master/史藏/政书/宋会要辑稿.txt). Digest with contexts: `songhuiyao_riao_hits_digest.txt`. (zh.wikisource holds only 23 scattered 卷 — no 道釋; ctext has scans only.)

### 2.1 道釋二·傳法院 — death, posthumous title, end of the bureau (verbatim)

> 至和元年十二月八日，赐传法院译经三藏大师法护为普明慈觉传梵大师。法护，西天僧，有戒行，特以六字师号赐之。
>
> 神宗熙宁四年三月，废印经院。
>
> **元丰元年七月九日，诏故西天译经三藏试鸿胪卿日称赐谥曰阐教，仍依法护例遗恩度僧七人，慧(辨)[辩]院岁增度僧一人。**
>
> **十月三日，参知政事元绛参定传法院新编《法宝箓》。先是，译经僧日称死，同译经僧慧询等皆不能继，乞罢译场。乃诏令在院习学，续修宝元以后《法宝箓》，候有通达义理梵僧，依旧翻译…**
>
> 二年六月十一日，参知政事蔡确参定编修传法院《法宝箓》。
>
> 三年十月九日，详定官制所言：「译经僧官有授试光禄鸿胪卿、少卿者，今除散阶已罢外，其带少卿官名实有妨碍。欲乞以授试卿者改赐译经三藏大法师，试少卿者改赐译经三藏法师…」诏试卿者改赐六字法师，试少卿者四字，并冠「译经三藏」，余依旧。
>
> 五年七月八日，诏译经润文使、同译经润文并罢，自今令礼部尚书领之，废译经使司印。

### 2.2 度僧/遺恩 passage (second independent witness, same edict)

> 七月九日，诏故西天译经三藏试鸿胪卿日称译：原作「绎」，据《长编》卷二九○改。，依法护例遗恩度七人，慧辩院岁增度僧一人辩：原作「办」，据《长编》卷二九○改。

(The 中华书局-style collation notes cite **《續資治通鑑長編》卷二八九/二九○** as source — new cross-reference lead for the main report.)

### 2.3 職官 section repeat

> 元丰元年十月三日，参知政事元绛参定传法院新编《法宝录》。先是，译经僧日称死，同译僧惠询等皆不能继，乞罢译场。仍诏令在院习学，续修宝元以后《法宝录》，候有通达义理梵僧，依旧翻译。

**Facts established:** 日稱 died before 1078-07-09; final rank 西天譯經三藏·試鴻臚卿; posthumous title **闡教** granted 元豐元年七月九日 (1078) by 神宗; his death triggered suspension of the translation hall (慧詢 et al. could not continue); 熙寧四年三月 (1071) 印經院 already abolished — institutional decline during 神宗's reign.

## 3. 成尋《參天台五台山記》1072 — VERIFIED from digitized text [primary]

Source: CBETA XML **B032n174** 大藏經補編 No.174 參天台五台山記 (成尋著), fetched from github.com/cbeta-org/xml-p5, archived as `CBETA_B0174_santentai_wutaishan_ju_seishun.xml`; digest `seishun_diary_riao_hits_digest.txt`.

### 3.1 卷第四, 熙寧五年十月十三日(丁亥)條 — age, origin, career length (verbatim)

> 十月大宋國熙寧五年十月十一日乙酉天晴…〔卷第四首〕
>
> …院大卿乘馬還房。即崇斑相共參向。中天竺人也。年五十六云云。出西天三箇年。來著當朝。已經二十五年。名日稱三藏。【考】宣梵大師色黑如墨。依有德行公家為國師并院司云云。

→ Age 56 in 1072 ⇒ born ≈1016/17; 中天竺人; journey from India took 3 years; ~25 years in Song ⇒ arrival ≈1047 (consistent with 慶曆六年/1046 tradition); held 宣梵大師; treated as 院大卿 of the 傳法院.

### 3.2 Same 卷第四 (十四日戊子條) — full 傳法院 roster (verbatim)

> 即問當院人人名。…大卿者西天譯經三藏朝散大夫試鴻臚卿宣梵大師賜紫日稱。中天竺人也。小卿者朝散大夫試鴻臚少卿同譯經宣祕大師賜紫慧賢三藏者。詔同譯經。梵才大師賜紫惠詢譯經證義。文章文惠大師賜紫智普譯經證義。講經論慈濟大師賜紫智放譯經證義。西天廣梵大師賜紫天吉祥中天竺人也。譯經正梵學。【考】…梵惠大師賜紫師遠譯經正梵學。廣智大師賜紫惠琢譯經筆受。崇梵大師賜紫明遠。定照。以上當院左街副僧錄同知教門公事譯經證義兼綴文…

→ Confirms byline hierarchy: 日稱 = 大卿 (試鴻臚卿); 慧賢 = 小卿; 惠詢 (the man who later declared no one could continue) present as 證義; second Indian 天吉祥 (中天竺).

## 4. Verified translation list (compiled from colophons + catalogs)

Primary evidence = bylines in local CBETA XML (loop A07 archive) + Taishō catalog attributions (zh.wikisource 大正新脩大藏經 catalog page, archived `wikisource_taisho_catalog_attributions_richeng.txt`: 「0726 六趣輪迴經 1卷 宋‧日稱等譯 0727 十不善業道經 1卷 宋‧日稱等譯 0728 諸法集要經 10卷 宋‧日稱等譯」). Years follow the standard compilation (sutrapearls 觀世心《譯經》8.7, citing 天聖錄 etc.) — flag as secondary until checked against 《大中祥符法寶錄》/《天聖釋教總錄》.

| Text | Title | Attribution evidence | Year |
|:---|:---|:---|:---|
| T1636 | 大乘集菩薩學論 (Śikṣāsamuccaya) | byline split: 法護 juan 1–8 / 日稱等 juan 9–25 (local XML, 19 bylines) | 至和三年1056起 (sec.) |
| T726 | 六趣輪迴經 | Taishō cat. + byline 「馬鳴菩薩集…臣日稱等奉詔譯」 | 嘉祐八年1063 (sec.) |
| T727 | 十不善業道經 | Taishō cat. + byline | 嘉祐八年1063 (sec.) |
| T1643 | 尼乾子問無我義經 | byline (馬鳴菩薩集) | 嘉祐八年1063 (sec.) |
| **T1687** | **事師法五十頌** | byline 「西天譯經三藏朝散大夫試鴻臚少卿宣梵大師賜紫沙門臣日稱等奉詔譯」 | 嘉祐八年1063 (sec.) |
| T728 | 諸法集要經 | Taishō cat. + byline 卷5 shows promoted rank 試鴻臚卿 | 治平元年1064 (sec.) |
| T320 | 父子合集經 | byline ×21 「試鴻臚卿」(promoted form) | 熙寧六年1073 (sec.) |
| T1671 | 福蓋正行所集經 | byline | 熙寧六年1073 (sec.) |

⇒ 8 works (1 co-translation) — consistent with "about a dozen" claims only if co-credited items are counted differently; do NOT assert "~12 translations" without the 至元錄 check below.

## 5. 至元法寶勘同總錄 status

- Online transcription NOT found today (not in zh.wikisource, not in daizhige, not in cbeta-org repos).
- Accessible only as page images: ctext library scan res=80667 《大元至元法寶勘同總錄》 (archived search hit: `ctext_library_zhiyuan_fabao_kantong_scan_ref.html`, https://ctext.org/library.pl?if=gb&res=80667).
- Action for main report: cite its entries only via secondary literature, or leave the translation-list grounded on colophons (§4) which are primary anyway.

## 6. Sponsorship / reign window RESOLVED

Era mapping (standard; institution-level events independently confirmed inside 宋會要 quotes above): 仁宗趙禎 r.1022–1063 (died 嘉祐八年三月); 英宗趙曙 r.1063–1067; 神宗趙頊 r.1067–1085 (宋會要 headers explicitly say 神宗熙寧四年/元豐元年).

- Translation window 1056–1073 spans THREE emperors: 仁宗 (至和/嘉祐 years incl. the 1063 batch), 英宗 (治平, T728 1064), 神宗 (熙寧, T320/T1671 1073).
- **T1687 itself (嘉祐八年/1063):** year-only dating cannot decide 仁宗 vs 英宗 (仁宗 died 1063-04-30). Byline says merely 奉詔譯. State: "translated under imperial decree at the very end of Renzong's reign or first months of Yingzong" — do not over-specify.
- Posthumous honors to 日稱 came from **神宗** (元豐元年1078, 謚闡教).

## TL;DR

- 日稱 zero-hit in T2035/T2036/T2037 now proven with positive controls; chronicle silence is real.
- 宋會要輯稿 obituary obtained VERBATIM (full text archived): 元豐元年七月九日(1078) 故西天譯經三藏試鴻臚卿日稱 賜謚闡教; his death ended active translation (罷譯場); collation trail points to 長編卷289–290.
- 成尋 diary B0174 verified: 1072 age 56, 中天竺, ~25 yrs in Song, roster of 傳法院 under 大卿日稱.
- Standard Peking-side facts moved to loop B07; here: 8 verified translations listed; T1687 sponsored under 仁宗-or-英宗 (1063 ambiguous), final works under 神宗.
