# Loop A05 Report — 《事師法五十頌》Chinese Text & Translator History Verification

Date: 2026-08-25 (Loop A05). RESEARCH ONLY.
Working assumption checked: "Taishō number T1667" — **DISPROVED**. Correct number established below.

---

## 1. Confirmed Taishō canon number: **T1687** (NOT T1667)

- Authoritative source: CBETA catalog API (cbdata.dila.edu.tw/stable):
  ```json
  {"work":"T1687","canon":"T","category":"論集部類","orig_category":"論集部",
   "vol":"T32","title":"事師法五十頌","juan":1,"cjk_chars":1103,
   "file":"T32n1687","byline":"馬鳴菩薩集 宋 日稱等譯",
   "creators_with_id":"馬鳴(A001003);日稱(A000194)","time_dynasty":"宋"}
  ```
- CBETA Online reader URL: https://cbetaonline.dila.edu.tw/zh/T1687
- CBETA XML (full text, downloaded): https://github.com/cbeta-org/xml-p5/blob/master/T/T32/T32n1687.xml
- Taishō location: 大正新脩大藏經 Vol. 32 (論集部), pp. 775c19 – 777a14. One juan (卷). CBETA header: `<title>Taishō Tripiṭaka, Electronic version, No. 1687 事師法五十頌</title>`, `<author>馬鳴菩薩集 宋 日稱等譯</author>`.

### Why T1667 was wrong (verified, not assumed)
T32n1667 was downloaded and inspected directly: its TEI header reads `<title level="m">大乘起信論</title>`, `<author>馬鳴菩薩造 唐 實叉難陀譯</author>` — i.e. the second (Śikṣānanda) recension of the Awakening of Faith. Neighbors were also checked: T1669 大宗地玄文本論， T1670(A/B) 那先比丘經. The confusion likely arises because both texts are 馬鳴 works in T32; any prior notes citing "T1667" for 事師法五十頌 must be corrected to **T1687**.

- SAT Daizōkyō: search interface is JS-driven; direct verification not obtained this loop (SAT data is nonetheless one of the acknowledged providers inside the CBETA XML provenance statement: 「日本 SAT 組織提供」).

## 2. Full text secured (CBETA) and cross-checked against Wikisource

Files in `documents/`:
- `CBETA_T32n1687.xml` — authoritative CBETA XML TEI P5 incl. full critical apparatus
- `CBETA_T1687_clean_text.txt` — clean numbered plain text (52 quatrains)
- `wikisource_事師法五十頌.wikitext` — raw wikitext from zh.wikisource.org (rev. oldid=2601167)
- `cbeta_vs_wikisource_diff.txt` — systematic character-level diff
- `T1687_verse_list.txt` — all 52 quatrains with line-length analysis

### Diff result: Wikisource is a faithful transcription of the Taishō base text (【大】底本)
104 half-verses each side; only 5 differences, ALL explained by the CBETA apparatus:

| Loc | CBETA (adopted reading) | Wikisource | Apparatus |
|---|---|---|---|
| v18 (0776b03) | 不**恡**於己身 | 不希於己身 | 恡【CB】【麗-CB】，希【大】 |
| v24 (0776b15) | 騎驀罪過**是** | 騎驀罪過足 | 是【CB】【麗-CB】，足【大】 |
| v37 (0776c11) | 或笑嗽伸**㰦** | 或笑嗽伸呿 | 㰦【CB】【麗-CB】，呿【大】，欠【明】 |
| v39 (0776c16) | 低顏其慚**𧹞** (CB00718, normalized 赧) | 低顏其慚赧 | same char, different encoding |
| v45 (0776c28) | **當**恭敬頂受 | 常恭敬頂受 | 當【CB】【麗-CB】，常【大】 |

The three real variants are CBETA emendations toward 高麗藏 (cf. K41n1493); Wikisource follows the Taishō printings (希／足／呿／常). Minor graphic variance: 曼挐羅 (v3, v9) vs 曼拏羅 (v42) already inside Taishō itself; Wikisource writes 拿 at v42. Ming-edition variants recorded in apparatus: 西天【大】＝宋西天【明】；譯經／賜紫沙門臣／等 omitted in 【明】；挐＝茶、惠＝慧、毀＝慢、蠲＝觸、其＝甚 (all 【明】).

Important Taishō philological note (from the 大正藏 collation note on the title, n. 0775002): 「此頌宋本元本宮本俱闕」 — the text is ABSENT from the Song, Yuan, and Palace editions of the canon; the Taishō base is therefore essentially the Koryŏ (高麗) tradition. This matters for stemmatic claims about the Chinese witness.

## 3. Translator biography: 日稱 (Rìchèng)

Primary data source: DILA Authority / LOD record http://purl.dila.edu.tw/resource/A000194 (saved: `dila_lod_A000194.html`), which cites 「宋僧著：269；佛光：1456」(i.e., a Song-monks reference work p. 269 and 佛光大辭典 p. 1456).

Exact quote (DILA LOD 人名註解 / Note):

> 中天竺僧。於宋仁宗慶曆六年（1046）至汴京，奉敕從事譯經，館於譯經院，賜紫，號宣梵大師。至和年間（1054-1055），與法護、梵才、宣祕等共譯出《大乘集菩薩學論》二十五卷。神宗熙寧五年（1072），日僧成尋來宋，與師親交，翌年三月成尋訪師於太平興國寺傳法院，商議以所譯之新經送進日本，時師年五十七。元豐元年七月逝世，諡闡教。（宋僧著：269；佛光：1456）

Structured facts:
- Name: 日稱; honorific names: 宣梵大師 (Xuanfan Dasheng, "Master Proclaimer of Brahmā/Sanskrit"); posthumous name 諡闡教 (Chanjiao).
- Origin: 中天竺 (Madhya-deśa, Central India) — DILA birthplace PL482008 "Madhya-deśa". So yes, 西天/India, specifically Central India.
- Arrived Bianjing (汴京/Kaifeng) 1046 CE under Emperor Renzong (仁宗，慶曆六年)； NOT under Taizong — he belongs to the SECOND generation of the Song translation bureau, ~60 years after 天息災/施護/法天 (who arrived 980s under Taizong).
- Worked at the 譯經院 housed at 太平興國寺 (by his time called 傳法院)， received the purple robe (賜紫) and the title 宣梵大師.
- Byline of T1687 itself (exact quote): 「西天譯經三藏朝散大夫試鴻臚少卿宣梵大師賜紫沙門臣日稱等奉　詔譯」 — official titles: 西天譯經三藏， 朝散大夫， 試鴻臚少卿 (nominal vice-minister of the Court of State Ceremonial), 賜紫沙門， imperial preface 「臣…奉詔譯」.
- Age 57 in 1073 (per Japanese pilgrim 成尋 Jōjin's account context) ⇒ born ca. 1017.
- Died 元豐元年七月 (7th month of Yuanfeng 1 = 1078 CE; DILA deathdate range 1078-08-17 ~ 1078-09-14), under Emperor Shenzong.
- Collaborators: 法護 (Dharmapāla), 梵才， 宣祕 etc.; co-translated Śikṣāsamuccaya 《大乘集菩薩學論》25卷 (T1636) during 至和 era (1054-1055).
- Other translations attributed to him in CBETA (creator A000194, file `cbdata_creator_A000194_works.json`): T0320 父子合集經 (20卷), T0726 六趣輪迴經， T0727 十不善業道經， T0728 諸法集要經， T1643 尼乾子問無我義經 (「宋 日稱譯」， without 等)， T1671 福蓋正行所集經 (龍樹集), plus T1687. Four are 馬鳴 works — 日稱 was effectively a transmitter of Aśvaghoṣa's oeuvre.
- Exact date of T1687's translation within 1046–1078 is NOT stated anywhere found this loop (gap noted).

Modern republication datum: 《事師五十頌》， 出處題名《佛學半月刊》 n.78 (1934.05), 上海佛學書局， 南京， pp. 24-26 (NTU 佛學數位圖書館 bibliographic record).

## 4. Verse-count and structure vs Sanskrit/Tibetan

### Chinese (CBETA T1687)
- Total: **52 quatrains** (CBETA punctuation: 104 `<l>` half-verses).
- Meter: quatrains 1–2 in SEVEN-character lines (opening); quatrains 3–51 in FIVE-character lines; quatrain 52 (closing dedication) in SEVEN-character lines.
- Opening quatrain (v1) is programmatic, exact quote: 「依諸經律祕密教，略出承事師儀軌，聞已愛樂發淨心，當獲如來金剛智。」
- Closing dedication (v52), exact quote: 「若能隨順師行學，則成一切諸功德，以我所集斯善因，願與眾生速成佛。」

### Sanskrit (Gurupañcāśikā; Digital Sanskrit Buddhist Canon Project, Nagarjuna Institute Nepal / University of West, Śāstra section text no. 45, via GRETIL/Zenodo bsa045; saved: sanskrit_gurupancasika_bsa045.htm, sanskrit_verses_list.txt)
- Exactly **50 verses** (numbered // 1 // … // 50 //), preceded by invocation 「om namo buddhāya」.
- Colophon (exact quote): 「iti gurupañcāśikā samāptā // kṛtiriyaṃ mahācāryāśvaghoṣasya」 ("Thus ends the Gurupañcāśikā, composed by Mahācārya Aśvaghoṣa") — supports the 馬鳴 attribution carried by the Chinese byline.
- Opening verse (exact quote): 「śrīvajrasattvapadavīpratilambhahetornatvā yathāvidhi guroścaraṇāravindam / tatparyupāstiramalā bahutantragītā saṃkṣipya kathyata iyaṃ śṛṇutādareṇa」 ≒ Chinese v1 (bahutantragītā→諸經律祕密教； saṃkṣipya kathyata→略出； śṛṇutādareṇa→聞已愛樂).
- Verse 2 (abhiṣekāgralabdho hi vajrācāryas…) = Chinese v2 (若於灌頂師…). Final verse (gurumanugataśiṣyasya… susiddhiṃ labheyuḥ) = Chinese v52.

### Reconciliation of 52 (Chinese) vs 50 (Sanskrit)
Checkpoint alignment shows a constant +2 offset from mid-text onward:
1. Chinese v7 (若忿恚無慈，貪愛多散亂，慠易恃種族，以惠當揀擇 — disqualifying traits of a guru) has NO counterpart verse in THIS Sanskrit recension (Skt jumps from mutual-examination v6 to positive-qualities v7), but DOES exist as a distinct verse in the Tibetan recension used by Tsongkhapa (cf. 索達吉 root rendering: 「具慧弟子切莫依，無有悲心憎恨害…不護根門之上師」). (+1)
2. Chinese vv.11–13 (three quatrains) expand Sanskrit vv.10–11 (two verses): e.g., 頻那夜迦 = Skt vināyaka (v11b vighnair vināyakaiś cāpi mārito narakaṃ vrajet). (+1)
Net: 50 + 2 = 52. Devotional numbering (e.g., 真佛宗 TBSN page) alternatively counts v2–v51 = exactly 50 items. Both readings documented; the title 五十頌 reflects the Indic original's count.
- Tibetan tradition: translated from Sanskrit by 堪布 Padmākaravarman (班瑪嘎繞瓦瑪) + Rinchen Zangpo (仁欽桑波) per 索達吉 colophon quote; title bla ma lnga bcu pa. Tsongkhaba commentary completed 1402 at 熱振寺 (佛光大辭典).

### Authorship caveat (modern scholarship)
佛光大辭典 s.v. 事師法五十頌 (p. 3042), exact quote:
> 全一卷。馬鳴菩薩集，宋代僧日稱等譯。收於大正藏第三十二冊。全卷由五十頌組成…此外，本頌中所出現之儀軌、灌頂、真言、護摩等名相，顯系密教用語，故作者是否確為馬鳴菩薩，尚待研考。
And s.v. 事師法五十頌釋：
> 據藏譯本載，原頌為拔毗天所集，然漢譯本則謂繫馬鳴所集。
⇒ Two attribution traditions: Chinese = 馬鳴 (Aśvaghoṣa, supported by Sanskrit colophon above); one Tibetan tradition (per Foguang) = 拔毗天 (Bhavideva?); 索達吉's rendering credits 巴布拉尊者. Flagged for Loop-level discussion.

## 5. Tsongkhapa's commentary in Chinese (宗喀巴《事師五十頌釋》)

Three/four modern Chinese renderings exist (none in CBETA — confirmed via cbdata title search, 0 hits outside T1687):
1. **能海上師** translation (earliest complete?) — 《宗喀巴大師廣解事師五十頌》 lineage; buddhanet.idv.tw page appends 「（此下錄自能海上師譯本）」 incl. his rendering of the colophon 「此《事師五十頌》者，是印度大善巧阿捨黎馬鳴聖者之所作也…」.
2. **法尊法師** — title originally 《宗喀巴大師廣解事師五十頌》； 福智 bliswisdom.org republication note (exact quote): 「書名原譯《宗喀巴大師廣解事師五十頌》，今依藏文原著校訂。」 (So the user's assumption "法尊 translated 事師五十頌釋" is CORRECT in substance, under the title 廣解事師五十頌.)
3. **湯薌銘等譯**，《事師法五十頌釋》(馬鳴菩薩造頌， 宗喀巴大師造釋) — full text saved: documents/事師法五十頌釋_宗喀巴造釋_湯薌銘等譯.txt (source baus-ebs.org; mirrors buddhanet.idv.tw/bodhi/safe/safe2/safe_2_14.htm).
4. **索達吉堪布譯講** (root text + 釋， from 甘肅民族出版社《宗喀巴大師文集》)， available at putixia.org/wenku/read_1888.html; his 譯序 (exact quote): 「此部論典雖然在海內外有許多譯本，但是有的詞意過古，令人百思不得其解，有的與藏文原義略有出入。故而我今依據甘肅民族出版社出版的《宗喀巴大師文集》中的版本將此論翻譯成漢文。」
- Commentary opens citing 《幻化網續王》/《大幻化網》第一品 on the guru as root of siddhi; discusses 卓米大師/嘛覺譯師 positions on when to teach the fifty verses; ends prescribing transmission of the 十四根本墮 (Skt v48: mūlāpattīś caturdaśa — cf. Chinese v51 當獲根本罪， which omits "fourteen").

## 6. Modern scholarship status (CNKI-type)

- No dedicated CNKI journal article on 事師法五十頌 surfaced via accessible search engines this loop (built-in search rate-limited early; DDG/Mojeek captcha-blocked later). Closest scholarly-adjacent items: 佛光大辭典 entries (above), NTU 佛學半月刊 1934 republication record, and the general Song-translation-bureau literature (日稱 appears in studies of 成尋/Jōjin and of 傳法院). Marked as gap for a follow-up loop with CNKI/readpaper access.

## 7. Gaps / follow-ups
- Exact year of the Chinese translation (between 1046 and 1078) unfound — check 至元法寶勘同總錄 and 成尋《參天台五臺山記》 (1072–1073 diary, he met 日稱 at 傳法院).
- SAT Daizōkyō independent confirmation pending (JS viewer).
- Identity question 拔毗天/巴布拉 vs 馬鳴 needs a dedicated loop (Tibetan colophons, Hahn's work on the Gurupañcāśikā transmission if obtainable).
- CNKI/full-text scholarly articles (中文期刊網) not yet searched successfully.
- Whether Chinese v7's extra verse exists in OTHER Sanskrit witnesses (this Zenodo/GRETIL witness lacks it).

## 8. Documents saved (documents/)
- CBETA_T32n1687.xml (authoritative full text w/ apparatus)
- CBETA_T1687_clean_text.txt (clean numbered text)
- T1687_verse_list.txt (52 quatrains + meter table)
- cbeta_vs_wikisource_diff.txt
- wikisource_事師法五十頌.wikitext
- dila_lod_A000194.html (translator authority record)
- cbdata_work_T1687.json, cbdata_creator_A000194_works.json, cbdata_search_T1687 (in titles_check.txt context)
- sanskrit_gurupancasika_bsa045.htm, sanskrit_verses_list.txt
- 事師法五十頌釋_宗喀巴造釋_湯薌銘等譯.txt
- (Control files kept as disproof evidence: CBETA_T32n1667.xml = 大乘起信論； CBETA_T32n1669.xml = 大宗地玄文本論； CBETA_T32n1670A/B.xml = 那先比丘經)
