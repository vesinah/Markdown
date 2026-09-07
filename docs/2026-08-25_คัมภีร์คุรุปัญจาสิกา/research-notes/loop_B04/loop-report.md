# Loop B04 Report — Gurupançāśikā CHINESE textual tradition: complete verse-mapping T32n1687 ↔ Sanskrit, plus Koryŏ/Nanjō/commentary apparatus

Date: 2026-08-26 (Loop B04, Phase B). RESEARCH ONLY. No Wikipedia used.
Inputs: `loop_A05/documents/` (T1687_verse_list.txt, CBETA_T1687_clean_text.txt, CBETA_T32n1687.xml, sanskrit_gurupancasika_bsa045.htm, sanskrit_verses_list.txt, 事師法五十頌釋_宗喀巴造釋_湯薌銘等譯.txt), `loop_A07/documents/K1493_fulltext_hanmun_translation.txt`, `loop_A06/loop-report.md`, `loop_A11/documents/*`.

---

## 0. Headline results

1. **Complete 52-row mapping built** (§3). Arithmetic closes exactly: 50 Sanskrit verses + 1 quatrain gained by splitting Skt vv.11–12 into Ch vv.11–13 + 1 Chinese-only inserted quatrain (Ch **v41**, not v7) = 52.
2. **No Sanskrit verse lacks a Chinese counterpart** (§4). Both speculative "missing" passages are REFUTED: Skt v16 (dakṣiṇā/jvara) survives generalized at Ch v17; Skt v34 (āvhāna/naming rules) is fully present at Ch v35.
3. **Correction to loop A05**: its claim that Ch v7 has "NO counterpart verse in THIS Sanskrit recension" is WRONG. Skt v7 `niṣkṛpaṃ krodhanaṃ krūraṃ stabdhaṃ laghum asaṃyatam / svotkarṣakaṃ ca no kuryād guruṃ śiṣyaṃ ca buddhimān` IS the disqualifying-traits verse = Ch v7 「若忿恚無慈，貪愛多散亂，慠易恃種族，以惠當揀擇」. Independent control: Tsongkhapa's commentary treats 第七頌 as exactly this content (湯譯: 「具慧弟子不應從，無有悲愍而忿毒，貢高貪著不守護，自矜而伐為上師」).
4. **New primary datum**: the Koryŏ woodblock ends with carving colophon 「事師法五十頌甲辰歲高麗國大藏都監奉勅彫造」 (jiachen year = 1244 CE, re-carving Directorate). CBETA's four 【麗-CB】 emendations are each confirmed by the block transcription.
5. **Attribution corrected**: 《宗喀巴大師廣解事師五十頌》/《事師五十頌廣解》 is by **能海** (民國木刻本), not 法尊 — five converging witnesses; full published text online ยังไม่พบ.
6. Nanjō #1080 = T1687 confirmed (A06 record; deep link currently 404 under site maintenance).

## 1. Method

- Base Chinese text: CBETA XML (Taishō print characters), 52 quatrains per T1687_verse_list.txt (v1–2 & v52 seven-char lines; rest five-char).
- Base Sanskrit text: GRETIL/Digital Sanskrit Buddhist Canon bsa045 (`sanskrit_gurupancasika_bsa045.htm`), numbered // 1 // … // 50 //, where v1 = maṅgala `natvā yathāvidhi guroścaraṇāravindam…` and v50 = closing dedication `gurumanugataśiṣyasya…`. NOTE: `sanskrit_verses_list.txt` numbers from abhiṣekāgra onward (its "v n" = GRETIL v n+1); this report uses GRETIL numbers throughout.
- Independent control set: Tsongkhapa's own commentary numbering (via 湯薌銘 et al.'s Chinese renderings, which quote every root verse under headings 第一頌…第五十頌). Result: the Tibetan recension counted by Tsongkhapa has IDENTICAL verse boundaries to bsa045 (his 第一頌 = maṅgala; 第五十頌 = dedication; his 第十六頌 = yatheṣṭadakṣiṇā…; 第四十五頌 = illness exemption etc.). This anchors every positional judgment below.
- Content comparison done verse-by-verse on the two full texts; lexical identifications spot-checked (vināyaka=頻那夜迦, kaṭihasta=扠腰, uṣṇīṣa=覆頂, śleṣman≈涕唾, navavadhū=初適嫁, saddharmapātra=正法器, mūlāpati=根本罪).

## 2. Numbering conventions

| Tradition | Count | First core verse |
|---|---|---|
| GRETIL bsa045 (= Tibetan count per Tsongkhapa) | 50 (incl. maṅgala + dedication) | v2 abhiṣekāgra… |
| sanskrit_verses_list.txt (A05) | 49 + colophon line | "v1" = abhiṣekāgra… |
| Chinese T1687 | 52 quatrains | v2 若於灌頂師… |

## 3. COMPLETE VERSE-BY-VERSEMAPPING TABLE (52 rows)

Quality codes: FULL = close rendering; PART = same slot, content shifted/generalized; DIV = same slot, meaning diverges; SPLIT/INS = structural event.

| Ch | 中文起句 (T1687) | Skt (GRETIL=Tib) | Quality — note |
|---|---|---|---|
| v1 | 依諸經律祕密教 略出承事師儀軌 | v1 natvā yathāvidhi guroścaraṇāravindam… | FULL — maṅgala; bahutantragītā→諸經律祕密教; saṃkṣipya kathyata→略出; 7-char meter both sides |
| v2 | 若於灌頂師 三時伸禮奉 | v2 abhiṣekāgralabdho hi vajrācāryas tathāgataiḥ… | FULL — direction inverted: Skt Buddhas worship guru thrice daily; Ch disciple's worship = offering to ten-direction Buddhas |
| v3 | 起最上恭敬 合掌以持花 | v3 trikālaṃ parayā bhaktyā sapuṣpāñjalimaṇḍalaiḥ… | FULL — flowers/maṇḍala/head-to-feet prostration |
| v4 | 彼師或在家 及新受具戒 | v4 saddharmādīn puraskṛtya gṛhī vā navako 'pi vā… | FULL — gṛhin=在家, navaka=新受具戒; 经像 placed before him → lokāvadyāvahānaye=息諸疑謗 |
| v5 | 若出家弟子 常淨心承事 | v5 sukhāsanaṃ samutthānam arthakriyādigauravam… | FULL — all services except prostration (tyaktvā cārcana-vandanam=唯除於致禮) |
| v6 | 彼師及弟子 當互審其器 | v6 prāk śiṣyācāryasaṃbandhaḥ kāryaḥ parīkṣya sūribhiḥ… | FULL — mutual examination; samāna-samaya-bhraṃśa→同得越法罪 |
| v7 | 若忿恚無慈 貪愛多散亂 | v7 niṣkṛpaṃ krodhanaṃ krūraṃ stabdhaṃ laghum asaṃyatam / svotkarṣakaṃ… | FULL — **refutes A05 hypothesis**: niṣkṛpa=無慈 krodhana=忿恚 asaṃyata≈散亂 svotkarṣaka=慠易(恃種族); Tib v7 same slot |
| v8 | 具戒忍悲智 尊重無諂曲 | v8 dhīro vinīto matimān kṣamāvān… / mantratantraprayogajñaḥ kṛpāluḥ śāstrakovidaḥ | FULL — positive qualities pt.1; ārjava=無諂曲; śāstrakovida=博閑諸論議 |
| v9 | 善達真言相 曼挐羅事業 | v9 daśatattvaparijñātā maṇḍalālekhyakarmavit / mantra-vyākhyākṛd ācāryaḥ prasannaḥ syāj jitendriyaḥ | FULL — daśatattva=十真如; jitendriya=諸根悉清淨 |
| v10 | 若彼求法者 於師生輕毀 | v10 taṃ nāthaṃ yo 'vamanyeta śiṣyo bhūtvā sacetanaḥ / sarvabuddhāpamānena… | FULL — despising guru=reviling all Buddhas→常得諸苦惱 |
| v11 | 由增上愚癡 而獲於現報 | v11 īty upadrava-cauraiś ca graha-jvara-viṣādibhiḥ / mriyate 'sau mahāmūḍho gurupādābhinindakaḥ | SPLIT 1/3 — graha=惡曜執持; jvara/vyādhi=重病纏縛; mahāmūḍho+增上愚癡 echo |
| v12 | 王法所逼切 及毒蛇傷螫 | v12 rāja-vātānala-vyālair ḍākinī-jala-taskaraiḥ… | SPLIT 2/3 — rāja=王法; vyāla/viṣa=毒蛇; caura=賊; vāta-ānala≈水火 (Ch adds 冤 enemies); ḍākinī≈非人 |
| v13 | 彼頻那夜迦 常作諸障礙 從此而命終 即墮於惡趣 | v12cd vighnair vināyakaiś cāpi mārito narakaṃ vrajet | SPLIT 3/3 — **proof of split**: vināyaka=頻那夜迦, vighna=障礙, mṛto=命終, naraka=惡趣. Net +1 |
| v14 | 勿令阿闍黎 少分生煩惱 | v13 na kuryāc citta-saṃkṣobham ācāryasya kadācana… | FULL — never disturb guru's mind→narake pacyate=定入阿鼻獄 |
| v15 | 受種種極苦 說之深可怖 | v14 narakā ye samākhyātā avīcyādyā bhayānakāḥ… | FULL — Avīci-series hells; tatra vāsaḥ=於中常止住 |
| v16 | 彼阿闍黎者 弘持正法藏 是故當一心 輒莫生輕毀 | v15 tasmāt sarva-prayatnena vajrācāryaṃ mahāgurum / pracchanna-vara-kalyāṇaṃ nāvamanyet kadācana | FULL(recast) — Ch motivates via 弘持正法藏; Skt pracchanna-vara-kalyāṇa; Tib v15 大慧自善不矜伐何時不應起輕毀 |
| v17 | 常於阿闍黎 承事而供養 發生尊重心 則蠲除障惱 | v16 yatheṣṭa-dakṣiṇā-dānād gurubhaktaṃ sagauravam / uktā jvarādayas tāpā na bhūyaḥ prabhavanti hi | PART — **Task-2 answer: PRESENT**, terms generalized: offerings+respect→障惱 removed ≈ jvarādi-tāpā no longer arise; Tib v16 諸有恭敬供上師隨順師故而奉施從此熾然等侵害當來亦令不出生 |
| v18 | 又復於師所 樂行於喜捨 不恡於己身 何況於財物 | v17 adeyaiḥ putra-dārādyair asubhir vā nijair api / sevyaḥ svasaṃvarācārya kiṃ punar vibhavaiś calaiḥ | FULL — hard-to-give (wife/children/life) → how much more wealth (kiṃ punar=何況) |
| v19 | 於無量億劫 勇猛勤修習 今始證菩提 斯極為希有 | v18 yataḥ sudurlabhaṃ vastu kalpā-saṃkhyeya-koṭibhiḥ / buddhatvam udyogavate dadāti ha eva janmani | FULL — buddhahood across koṭi-kalpas given now |
| v20 | 善護其深誓 供養諸如來 恭敬阿闍黎 等同一切佛 | v19 nityaṃ svasamayaḥ sādhyo nityaṃ pūjyās tathāgatāḥ / nityaṃ ca gurave deyaṃ sarvabuddhasamo hy asau | FULL — samaya/worship/giving; sarvabuddhasama=等同一切佛 |
| v21 | 若於己所有 最上諸珍玩 求無盡菩提 誠心而奉獻 | v20 yad yad iṣṭataraṃ loke viśiṣṭataram eva vā / tat tad dhi gurave deyaṃ sadā evākṣayam icchatā | FULL — viśiṣṭatama=最上珍玩; akṣayam icchatā=求無盡菩提 |
| v22 | 施佛阿闍黎 念念常增長 是最勝福田 速得菩提果 | v21 datte 'smai sarva-buddhebhyo dattaṃ bhavati śāśvatam / tasmāc ca puṇya-saṃbhāraḥ saṃbhārād bodhir uttamā | FULL — giving=giving to all Buddhas; puṇya-saṃbhāra=福田/資糧 |
| v23 | 如是求法者 具戒忍功德 不虛誑於師 當獲金剛智 | v22 te śiṣyāḥ karuṇotsarga-śīla-kṣānti-guṇānvitāḥ / ye nānyatvaṃ kalpayanti guror vajradharasya ca | PART — 具戒忍=śīla-kṣānti ✓; Ch 不虛誑於師 ≠ nānyatvaṃ kalpayanti (no otherness; Tib 不應觀為有別異) |
| v24 | 若足踏師影 獲罪如破塔 於床坐資具 騎驀罪過是 | v23 caityabhaṅgādibhītyāpi guroś chāyāṃ na laṅghayet / pādukāsana-yānāder laṅghanasya tu kā kathā | FULL — shadow=stūpa-breaking sin; pādukāsana-yāna=床坐資具騎驀 |
| v25 | 若師所教誨 歡喜當聽受 自己或不能 則善言啟白 | v24 śrūyād yatnād guror ājñāṃ hṛṣṭacitto mahāmatiḥ / aśaktaḥ śrāvayet tasma upapattyā tvaśaktitām | FULL — gladly hear commands; explain inability |
| v26 | 由依止師故 所作皆成就 現樂及生天 何敢違其命 | v25 guroḥ siddhiṃ samāpnoti guroḥ sargaṃ guroḥ sukham… | FULL — siddhi/svarga/sukha triad; na laṅghayet=何敢違其命 |
| v27 | 守護師財物 猶若己身命 於彼執侍人 如親常敬奉 | v26 svātmavac ca guror dravyaṃ guruvac ca tad-aṅganām / svajanān iva tal lokān paśyen nityaṃ samāhitaḥ | PART — property like life ✓; Ch 執侍人 (attendants) softens tad-aṅganām (his women); Tib 上師眷屬如親屬 closer to Ch |
| v28 | 不應於師前 覆頂及乘御 翹足手扠腰 安然而坐臥 | v27 śayyā-rohana-agrayāna-uṣṇīṣādy-upabandhanam / na kuryād āsane pādaṃ kaṭihastaṃ ca sannidhau | FULL — uṣṇīṣa=覆頂; kaṭihasta=扠腰; āsane pāda≈翹足 |
| v29 | 或事緣令坐 勿舒於雙足 常具諸威儀 師起速當起 | v28 suptena vā niṣaṇṇena na stheyam utthite gurau / dakṣaś cotsāhasampannas tat-kāryeṣu sadā bhavet | FULL-ish — rise when guru rises; diligence; Ch's stretched-legs clause anticipates v29's pādaprasāraṇa |
| v30 | 若於經行處 不應隨舉步 端謹立於傍 無棄於涕涶 | v29 śleṣmādīnāṃ parityāgaḥ pādaprasāraṇaṃ tathā / caṅkramaṇaṃ vivādaṃ ca na kuryāt purato guroḥ | FULL — śleṣman-phlegm=涕涶 (Taishō graph; Koryŏ block reads expected 唾); caṅkramaṇa=經行 |
| v31 | 亦勿於師前 私竊而言說 及隣近語笑 歌舞作唱等 | v30 saṃvāhanaṃ nartanaṃ ca na gānaṃ na ca bādanam / bahu-saṃlapanaṃ cāpi na kuryāt purato guroḥ | FULL — nartana/gāna=歌舞唱; bahu-saṃlapana=私竊言說·鄰近語笑 |
| v32 | 或令坐或起 各安徐禮敬 若於險路中 白已作前導 | v31 natvāsanāt samuttheyaṃ niṣattavyaṃ ca bhaktitaḥ / niśyapsu sabhaye mārge prārthyāgre gamanaṃ caret | FULL — sabhaye mārge=險路; prārthyā agre gamana=白已作前導 |
| v33 | 又不應於前 身現疲勞相 屈指節作聲 倚柱及牆壁 | v32 nāṅgāni cālayed dhīmān na jṛmbhādi samāśrayet / nāṅguli-sphoṭanaṃ kuryāt puraḥ paśyati śāstari | FULL — aṅgulisphoṭana=屈指節作聲; samāśrayet=倚柱壁 |
| v34 | 或浣衣濯足 及澡浴等事 先白師令知 所作無令見 | v33 pādayoḥ kṣālanaṃ cāṅga-proñchābhyañjana-mardanam / pūrvaṃ praṇamya kartavyaṃ tataḥ kuryād yadādiśet | **DIV** — Skt/Tib: wash & massage the GURU's feet/body, prostrate first, when commanded; Ch: one's OWN laundry/bathing, inform master, unseen. Same slot; object/purpose reversed (misreading or divergent Vorlage) |
| v35 | 又復於師名 不應輒稱舉 設有固問者 當示之一字 | v34 [āvhānādau guror nāmni pūjyapādādi yojayet / anyadā śraddhayā brūyāt sādarais tu viśeṣaṇaiḥ | FULL — **Task-2 answer: naming rules PRESENT**; Ch stricter: only reveal one syllable if pressed; Tib v34 若當稱說上師名名後隨行面前文為令所餘起恭敬故先稱說勝敬詞 |
| v36 | 師或令幹集 當伺其遣使 於彼所作事 憶持常不忘 | v35 ādiśyatām kariṣyāmi pravadet sāñjalir gurum / śrutvādeśaṃ cāvicālya yathādiṣṭaṃ tathā caret | LOOSE — order-execution theme kept; "kariṣyāmi" formula dropped; adds messenger service + unfailing memory (avismṛta motif of v44) |
| v37 | 或笑嗽伸㰦 則以手遮口 若有事啟聞 當曲躬軟語 | v36 hāse kāse samutpanne kareṇācchādayen mukham / tad ante mṛdubhir varṇaiḥ svābhiprāyaṃ nivedayet | FULL — cover mouth (laugh/cough/yawn-stretch); soft speech report |
| v38 | 若在家女人 淨心來聽法 合掌具威儀 專視於師面 | v37 vinītaḥ purato bhūyāt sajjo vastrādi-bandhanaiḥ / bhūjānuḥ sāñjaliḥ śrotruṃ yācayet tu trivārakam | PART — listening etiquette + joined palms; audience specialized to laywomen; trivārakam (threefold request) dropped |
| v39 | 聞已當奉持 捨離於憍慢 常如初適嫁 低顏其慚𧹞 | v38 satkāryaṃ sarvadā kuryān nirahaṅkāracetasā / trapayā pāpabhītyā saṃvṛto navavadhūriva | FULL — navavadhū=初適嫁; trapā=慚𧹞; nirahaṅkāra=捨離憍慢 |
| v40 | 於彼嚴身具 無復生愛樂 與善非相應 皆思惟遠離 | v39 na vilāsamayīṃ ceṣṭāṃ kuryāt śāstari saṃmukhe / anyac caivaṃvidhaṃ karma suparīkṣya tyajed bhṛśam | PART — vilāsa coquetry/adornment≈嚴身具; suparīkṣya tyajet=思惟遠離 |
| v41 | 常慕於師德 不應窺小過 隨順獲成就 求過當自損 | — (no counterpart in bsa045 OR Tsongkhapa's 50) | **INSERTION (+1), Chinese-only** — admire virtues, never peer at faults; seeking faults self-harms. Thematically extends the 觀師為佛/防尋過患 logic Tsongkhapa expounds on his v22 |
| v42 | 說法度弟子 曼拏羅護摩 城邑同師居 無旨不應作 | v40 pratiṣṭhāyāṃ maṇḍale ca home vā śiṣya-saṃgrahe / ākhyānādau guror vāse nityaṃ kuryāc ca sannidhim | FULL — pratiṣṭhā/maṇḍala/homa/śiṣya-saṃgraha all four ✓; Ch 無旨不應作 AGREES WITH TIBETAN reading (未得許可不應作) over bsa045's "always remain present" |
| v43 | 或說法所得 淨施諸財物 悉以奉其師 隨得而可用 | v41 pratiṣṭhādau labhyate yat tat sarvaṃ gurave 'rpayet / tena dattaṃ ca gṛṇhīyāt svayaṃ cānyāṃś ca toṣayet | FULL — teaching gains→guru; use what he grants |
| v44 | 同學及法裔 不應為弟子 亦不於師前 受承事禮敬 | v42 guruśiṣye svaśiṣyatvaṃ na vidadhyāt kadācana / svaśiṣyaṃ vyāvṛttaṃ kuryāt satkārād er guroḥ puraḥ | FULL — fellow-student/dharma-descendant rule; honors before guru refused |
| v45 | 若以物上師 二手持奉獻 師或有所施 當恭敬頂受 | v43 ācāryo yat svayaṃ dadyād gurur vā yat pradāpayet / praṇamya dhīmatā grāhyaṃ baddhāñjalipuṭena tat | FULL — two-hand give/receive with bowed head |
| v46 | 自專修正行 常憶持不忘 他或非律儀 愛語相教示 | v44 avismṛtaḥ sarvacaryāṃ yatnāt kurvan svabāndhavān / avismṛter nirākuryāt premṇā hṛṣṭena cetasā | FULL — mindful conduct ✓; loving correction of co-religionists (premṇā hṛṣṭena cetasā=愛語; Tib 以歡喜心相勸阻) |
| v47 | 若師所教勅 或病緣不作 當作禮咨陳 斯則無其咎 | v45 anujñāto guroḥ kāryaṃ śraddhālus tr nācaret yadi / rugṇas tv akuśale citte naivaṃ bhavati pāpabhāk | FULL — illness exemption; report respectfully; no fault (Tib 具善心故不成罪) |
| v48 | 常令師歡喜 離諸煩惱事 當勤而行之 恐繁故不述 | v46 kim anyad gurutoṣāya yac chakyaṃ tat samācaret / caryā kāryā prayatnena na kadāpy avahelayet | FULL — please-guru summary; Ch closure 恐繁故不述 mirrors kim anyad rhetorical turn |
| v49 | 彼金剛如來 親如是宣說 及餘教所明 依師獲成就 | v47 sarvathā sarvadā siddhir ācārya-yānugāminī / gurur vajradharasyokter ārādhyaḥ sarvavastubhiḥ | PART(reframed) — siddhi-follows-ācārya + Vajradhara-guru recast as scriptural-authority statement (Vajra-Tathāgata proclaimed; other scriptures concur) |
| v50 | 若弟子清淨 能歸依三寶 設使命將終 亦為宣法要 | v48 śiṣyaḥ śuddhāśayo bhūtvā triratnaṃ śaraṇaṃ vrajet / guror adhītyānupaṭhet kuryād utsargam eva ca | PART — pure-minded refuge-taking ✓; Ch ADDS deathbed clause 設使命將終亦為宣法要 absent from Skt/Tib (Tib: 施與令記誦 = hand the text over for memorization) |
| v51 | 及授祕密教 令作正法器 若現相誦持 當獲根本罪 | v49 tato mantrādidānena kṛtvā saddharma-pātrakam / paṭhecca dhārayeccāpi mūlāpattīś caturdaśa | FULL — mantra gift→dharma vessel ✓; recite&retain ✓; root downfalls ✓; **Ch omits "fourteen" (caturdaśa)** |
| v52 | 若能隨順師行學 則成一切諸功德 以我所集斯善因 願與眾生速成佛 | v50 gurumanugataśiṣyasya… kuśalapadamanantaṃ tena vai sarvasatvāḥ… susiddhiṃ labheyuḥ | FULL — dedication; 7-char meter both sides |

Balance check: 50 Skt verses covered + split gain (Ch v11–13 from Skt v11–12) + insertion (Ch v41) = 52. CLOSED.

## 4. Task 2 verdict: Sanskrit verses with NO Chinese counterpart

**NONE.** All 50 GRETIL verses map onto Chinese quatrains. Specific claims tested:

| Claim | Verdict | Evidence |
|---|---|---|
| "Skt v16 dakṣiṇā/jvara passage missing?" | REFUTED (verse present, terms generalized) | Ch v17 承事而供養…蠲除障惱 occupies v16's slot between 弘持正法藏(v15) and 喜捨(v17); Tib v16 confirms function ("offering → fevers etc. will not arise again"). Lost specifics: the word dakṣiṇā and jvarādi-tāpa imagery |
| "Skt v34–35 āvhāna/naming rules missing?" | REFUTED (present) | Naming rules = Ch v35 (又復於師名不應輒稱舉設有固問者當示之一字), stricter than Skt honorific-epithet rule; command-response (v35) loosely at Ch v36 |
| Any wholly lost Skt verse? | None found | See table; weakest links are PART/LOOSE rows (v22→Ch23, v26→Ch27, v33→Ch34, v37→Ch38, v47→Ch49, v48→Ch50), all positionally anchored by the Tibetan sequence |

Chinese-only material: **Ch v41** (insertion). Minor intra-verse losses: trivārakam (v37), caturdaśa count (v49), tad-aṅganām sense (v26), plus the DIV row Ch v34.

## 5. Koryŏ witness K41n1493

Full details in `documents/K1493_koryo_variants_vs_taisho.md`. Summary:
- cbetaonline.dila.edu.tw/zh/K1493_001 serves a JS shell only (negative result documented); GitHub K-series XML probes 404. Witness text secured instead from Dongguk KABC integrated viewer (A07 file, block 041_0612_b/c).
- NEW: carving colophon 「甲辰歲高麗國大藏都監奉勅彫造」 → jiachen = 1244 CE.
- Variants vs Taishō: graphic only (嗚/鳴, 袐/祕, 傲/慠, 梨/黎, 牀/床, 歌/謌, 眎/視, 唾[T涶], 擧/舉, 鄰/隣, 衆/眾); the four CBETA 【麗-CB】 emendations (是/㰦/當/恡-family) each match the Koryŏ tradition. Structure identical: K1493 = T1687, no independent recension value beyond confirming the base tradition.

## 6. Nanjō catalogue #1080

Confirmed via A06 record (verbatim in `documents/nanjo1080_toyobunko_verification.md`): Nj 1080 = Ji-shi-hō-go-jū-ju 事師法五十頌, 訳者 宋 日稱等譯, base text 麗(高麗蔵), collation 宋元明縮成卍. Re-fetch of the Toyobunko deep link returned HTTP 404 today (site renewed 2026-05-05; maintenance notice 2026-08-21); site root loads normally. Cross-checked against CBETA TEI header and Koryŏ block incipit — title/byline consistent everywhere.

## 7. Chinese commentarial tradition — attribution CORRECTED

Full dossier: `documents/guangjie_attribution_evidence_nenghai_not_fazun.md`.
- 《宗喀巴大師廣解事師五十頌》/《事師五十頌廣解》 translator = **能海**, not 法尊. Key verbatim witnesses:
  - 《中國宗教歷史文獻集成》 catalog: 「事师五十颂广解 |宗喀巴著. 能海译 |民国木刻本」
  - 石世梁 essay: 「还译有《事师五十颂》，并编撰《事师五十颂广解》。」(on 能海)
  - 《能海大师传》译述著作 list items 「3、事师五十颂 4、事师五十颂广解」
  - Bliss Wisdom republication: 「书名原译《宗喀巴大师广解事师五十颂》，今依藏文原著校订。」 (2001 ed., credited 释能海/大宝贤藏)
  - 《法尊法师全集》(中国藏学出版社) TOC contains no such item.
- Openly readable full text of the 廣解 online: ยังไม่พบ (book pages + paywalled Scribd scan only).

## 8. 湯薌銘《事師法五十頌釋》 — provenance statement (Task 6)

File: `loop_A05/documents/事師法五十頌釋_宗喀巴造釋_湯薌銘等譯.txt` (60,627 B, 489 lines; footer 「Made by an Unregistered version of eTextWizard V 1.95」 = HTML-to-text conversion artifact). Source per A05: baus-ebs.org/sutra/jan-read/009/004-2-02.htm (mirroring buddhanet.idv.tw safe_2_14.htm).

Provenance findings:
1. Title-page attribution inside the file: 「馬鳴菩薩　造頌 / 宗喀巴大師　造釋 / 湯薌銘　等譯」, followed by the translator's opening salutation 「敬禮妙音菩薩」 and its praise stanza (「本為諸佛父，孺童佛子身…」) — i.e., the FILE contains NO separate translator preface or colophon by 湯薌銘 himself; no publication data inside the file.
2. External provenance (this loop's new datum): 《中國宗教歷史文獻集成》 lists 「事师法五十颂释 |宗喀巴著. 汤芗铭等译 |民国铅印本」 ⇒ first print = Republic-era lead-type edition (publisher/year of first print otherwise ยังไม่พบ; Scribd circulating eds: 簡體版 doc 1044824833 and 藏漢對照 doc 890629016 with copyright notice reserving rights to translators, per A11).
3. Internal evidence of the translation's character: it follows Tsongkhapa's commentary verse-by-verse under the Tibetan 50-verse numbering; repeatedly cites and evaluates Chag Lotsāva's earlier Tibetan rendering, e.g. 「恰羅第三第四句譯云：「具慧於彼以二手，恭敬奉獻或承受。」此譯較善。」 and 「恰羅譯云：「便由疫氣或傷害…」是譯極善。」; commentator names the author 拔毗天: 「所言『我』者，拔毗天自稱」.
4. The e-text APPENDS non-湯 material marked 「（此下錄自能海上師譯本）」: Nenghai's 贊三界導師偈讚 and his colophon rendering crediting the Tibetan translation to 「堪布白馬嘎瓦馬同比丘譯師，名大寶賢者」 and placing composition 「於藏此之堅固勝王寶淨地，亦名淨隱巖獅子院」 (= rwa sgreng Reting, lion-rock; matches A11's colophon evidence). Users of this file must therefore not attribute the appended colophon wording to 湯薌銘.

## 9. Consequence for the comparative chapter (drafting notes)

- Quote the Chinese as 52 quatrains but ALWAYS gloss that 五十 reflects the Indic count; use the mapping above for parallel-column presentation (Ch 1↔S 1; Ch 10↔S 10; Ch 14–52 offset +1 after the split; skip nothing; flag Ch 41 as translator-added).
- Safest stemma sentence: the Chinese witness represents an Indic Vorlage essentially identical to the Nepalo-Tibetan 50-verse recension, with (a) one expanded calamity passage (Skt vv.11–12 → three quatrains), (b) one added fault-finding prohibition (Ch v41), (c) free/divergent renderings at six points (table PART/DIV rows).
- Attribution pair to print: 馬鳴 (Chinese + Sanskrit colophon kṛtir iyaṃ mahācāryāśvaghoṣasya) vs 拔毗天/巴布拉 (Tibetan-commentary tradition) — unchanged from A05 §4 caveat.

## 10. Files saved (documents/)

| File | Content |
|---|---|
| verse_mapping_T1687_vs_Gurupancasika.csv | Machine-readable 52-row mapping (same data as §3, richer notes) |
| K1493_koryo_variants_vs_taisho.md | Koryŏ witness dossier: CBETA fetch negative result, carving colophon 甲辰歲(1244), variant table, SECURE/PART labels |
| nanjo1080_toyobunko_verification.md | Nanjō #1080 confirmation (A06 verbatim record) + today's 404/maintenance status |
| guangjie_attribution_evidence_nenghai_not_fazun.md | Five-witness dossier correcting 法尊→能海; online-text negative result |

## 11. Gaps / follow-ups

1. Toyobunko 底本・校本データベース fresh capture after maintenance (route changed post-renewal) — would add image-level confirmation of Nj 1080 card.
2. 能海《事師五十頌廣解》 full text: only paywalled scan located; physical/library access needed (民國木刻本; Bliss Wisdom 2001 recension in print).
3. Koryŏ block reading 慠/傲 (v7) and 涕涶/涕唾 (v30) need plate-image inspection (KABC viewer images or 海印寺 plates) to upgrade "probable" labels; CBETA apparatus silent at both spots.
4. Whether ANY other Sanskrit witness (Szántó 2013 ms; Levi 1929 apographs already in loop_A04 files) contains a counterpart to Ch v41 — decisive for calling it translator-invented vs Vorlage-borne. Szántó PDF is already on disk (loop_A01/A02) and should be searched for a "do not look for faults" verse in a Phase-C pass.
