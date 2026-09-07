# Loop B03 (REDO) — Report: Tibetan D3721 structure + verse mapping to Sanskrit
Date: 2026-08-26
Primary sources (read in full this loop):
- `output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/loop_A09/documents/D3721_derge_tengyur_bo_unicode_clean.txt` (Derge Tanjur D3721, Unicode)
- `output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/loop_A09/documents/D3721_derge_tengyur_bo_unicode_folios.txt` (same text with [10a.3]-style folio-line markers)
- `output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/loop_A09/documents/sanskrit_gurupancasika_GRETIL_bsa045.htm` (GRETIL, "Asvaghosa: Gurupancasika", Sanskrit Buddhist Input Project / DSBC, sastra no. 45; numbering ||1||–||50||)

## 1. Method
The Derge e-text marks EVERY quarter-line (pāda) end with a shad pair (`། །`); there is no visually distinct verse-final marker. The text was therefore split on the regex `།\s*།` (200 segments), the three hidden double-pāda segments (segments 23, 27, 115, caused by a space-before-shad orthographic quirk) were expanded, and quarter-lines were regrouped into stanzas of four. Grouping was validated against GRETIL Sanskrit content anchors at v1–v5 (homage/purpose), v6 (guru-śiṣya examination), v7 (niṣkṛpaṃ...), v12 (kings/fire/snakes), v23 (stūpa/shadow), v40 (rab gnas/maṇḍala/sbyin sreg), v47 (dngos grub slob dpon rjes 'brang), v49 (rtsa ba'i ltung ba bcu bzhi), v50 (dedication). Result: strict one-to-one alignment throughout.

## 2. Answers to the three questions

### Verse count
YES. Derge D3721 contains EXACTLY 50 metrical stanzas of 4 quarter-lines each = 200 quarters, matching GRETIL ||1||–||50|| exactly, verse for verse. After v50 come only the prose colophon ("བླ་མ་ལྔ་བཅུ་པ་སློབ་དཔོན་ཆེན་པོ་རྟ་དབྱངས་ཀྱིས་མཛད་པ་རྫོགས་སོ།།" etc., ff. 12a.1–12a.2) and no additional stanza.

### Opening maṅgala
YES. Before v1 the text has title block + homage line (folio 10a, lines 1–2), quoted exactly:
> ༄༅༅། །རྒྱ་གར་སྐད་དུ། གུ་རུ་པཉྩ་བིཾ་ཤི་ཀ །བོད་སྐད་དུ། བླ་མ་ལྔ་བཅུ་པ། བཅོམ་ལྡན་འདས་རྡོ་རྗེ་སེམས་དཔའ་ལ་ཕྱག་འཚལ་ལོ།

("In Indian language: gurupañcaviṃśikā; in Tibetan language: bla ma lnga bcu pa. Homage to the Blessed One Vajrasattva.") Note: the Sanskrit witness instead opens with `om namo buddhāya /` — different maṅgala formula between witnesses. V1 then begins (exact quote):
> དཔལ་ལྡན་རྡོ་རྗེ་སེམས་དཔའི་གནས་ཐོབ་རྒྱུར་གྱུར་པ། །བླ་མའི་ཞབས་ཀྱི་པདྨར་ཇི་བཞིན་བཏུད་བྱས་ཏེ།

### Negative-guru-selection verse (Skt v7)
YES, present as Tibetan v7 (folio 10a.6), exact quote:
> བློ་ལྡན་སློབ་མས་བླ་མར་ནི། །སྙིང་རྗེ་མེད་ཅིང་ཁྲོ་ལ་གདུག །ཁེངས་ཤིང་ཆགས་ལ་མ་བསྡམས་དང་། །སྤྱོམས་དང་བཅས་པར་མི་བྱའོ། །

Sanskrit v7 (GRETIL, exact): `niṣkṛpaṃ krodhanaṃ krūraṃ stabdhaṃ laghumasaṃyatam / svotkarṣakaṃ ca no kuryād guruṃ śiṣyaṃ ca buddhimān // 7 //`
Correspondence: snying rje med = niṣkṛpa; khro la gdug = krodhanaṃ krūram; khengs = stabdha; chags la ma bsdoms = (rāgeṇa) asaṃyatam; spoms dang bcas = svotkarṣakam. Translation nuance: Skt applies the prohibition to BOTH guru and disciple ("guruṃ śiṣyaṃ ca"); Tibetan renders it as a disciple-side selection rule ("blo ldan slob mas ... bla mar ni ... mi bya'o" = a wise disciple should not [take such a one] as guru).

## 3. Verse-boundary mapping table (50 rows)
Folio references: Derge Tanjur vol. rgyud tshu, continuous folios 10a–12a (rKTs: 10a2–12a2). "→" marks verses straddling a folio-line or folio boundary.

| Tib # | Skt # | Folio position | Tibetan incipit (Wylie) | Sanskrit incipit (GRETIL) |
|---|---|---|---|---|
| 1 | \|\|1\|\| | 10a.2 → 10a.3 | dpal ldan rdo rje sems dpa'i gnas thob rgyur gyur pa | śrīvajrasattvapadavīpratilambhahetor natvā |
| 2 | \|\|2\|\| | 10a.3 → 10a.4 | dbang bs kur mchog thob rdo rje yi | abhiṣekāgralabdho hi vajrācāryas |
| 3 | \|\|3\|\| | 10a.4 | mchog tu dad pas dus gsum du | trikālaṃ parayā bhaktyā |
| 4 | \|\|4\|\| | 10a.4 → 10a.5 | khyim pa'am ni gsar bu la | saddharmādīn puraskṛtya |
| 5 | \|\|5\|\| | 10a.5 | gdan bstabs pa dang ldang ba dang | sukhāsanaṃ samutthānam |
| 6 | \|\|6\|\| | 10a.5 → 10a.6 | bla ma dang ni slob ma dag | prāk śiṣyācāryasaṃbandhaḥ |
| 7 | \|\|7\|\| | 10a.6 | blo ldan slob mas bla mar ni | niṣkṛpaṃ krodhanaṃ krūraṃ |
| 8 | \|\|8\|\| | 10a.6 → 10a.7 | brtan zhing dul la blo gros ldan | dhīro vinīto matimān |
| 9 | \|\|9\|\| | 10a.7 | de nyid bcu ni yongs su shes | daśatattvaparijñātā |
| 10 | \|\|10\|\| | 10b.1 | de 'dra'i mgon la bsams byas nas | taṃ nāthaṃ yo 'vamanyeta |
| 11 | \|\|11\|\| | 10b.1 | slob dpon la ni smod pa de | ītyupadravacauraiśca |
| 12 | \|\|12\|\| | 10b.2 | rgyal po me dang sbrul gdug dang | rājavātānalavyālaiḥ |
| 13 | \|\|13\|\| | 10b.2 → 10b.3 | nam yang slob dpon dag gi ni | na kuryāccittasaṃkṣobham |
| 14 | \|\|14\|\| | 10b.3 | mnar med la sogs 'jigs rung ba'i | narakā ye samākhyātā |
| 15 | \|\|15\|\| | 10b.3 → 10b.4 | de bas 'bad pa thams cad kyis | tasmāt sarvaprayatnena |
| 16 | \|\|16\|\| | 10b.4 | bla ma la ni gus bcas yon | yatheṣṭadakṣiṇādānād |
| 17 | \|\|17\|\| | 10b.4 → 10b.5 | rang gi dam tshig slob dpon ni | adeyaiḥ putradārādyair |
| 18 | \|\|18\|\| | 10b.5 | gang phyir bskal pa bye ba ni | yataḥ sudurlabhaṃ vastu |
| 19 | \|\|19\|\| | 10b.5 → 10b.6 | rtag tu rang gi dam tshig srung | nityaṃ svasamayaḥ sādhyo |
| 20 | \|\|20\|\| | 10b.6 | mi zad de ni 'dod pa yis | yadyadiṣṭataraṃ loke |
| 21 | \|\|21\|\| | 10b.6 → 10b.7 | de byin sangs rgyas thams cad la | datte 'smai sarvabuddhebhyo |
| 22 | \|\|22\|\| | 10b.7 | de bas slob ma snying rje gtang | te śiṣyāḥ karuṇotsarga |
| 23 | \|\|23\|\| | 10b.7 → 11a.1 | mchod rten bshigs 'dra'i sdig 'jigs pas | caityabhaṅgādibhītyāpi |
| 24 | \|\|24\|\| | 11a.1 | blo gros chen po dga' sems kyis | śrūyād yatnād gurorājñām |
| 25 | \|\|25\|\| | 11a.1 → 11a.2 | bla ma las ni dngos grub dang | guroḥ siddhiṃ samāpnoti |
| 26 | \|\|26\|\| | 11a.2 | bla ma'i rdzas ni srog ji bzhin | svātmavacca gurordravyam |
| 27 | \|\|27\|\| | 11a.3 | mal gdan 'dug dang sngon 'gro dang | śayyārohamagrayānamuṣṇīṣādi |
| 28 | \|\|28\|\| | 11a.3 | bla ma dag ni langs pa na | suptena vā niṣaṇṇena |
| 29 | \|\|29\|\| | 11a.4 | mchi lma la sogs 'dor ba dang | śleṣmādīnāṃ parityāgaḥ |
| 30 | \|\|30\|\| | 11a.4 | yan lag mnve dang gar dag dang | saṃvāhanaṃ nartanaṃ ca |
| 31 | \|\|31\|\| | 11a.5 | btud de gdan las ldang ba dang | natvāsanāt samuttheyam |
| 32 | \|\|32\|\| | 11a.5 → 11a.6 | slob dpon gyis ni mthong mdun du | nāṅgāni cālayed dhīmān |
| 33 | \|\|33\|\| | 11a.6 | rkang pa bkru dang lus bkru dang | pādayoḥ kṣālanaṃ ca |
| 34 | \|\|34\|\| | 11a.6 | de yi mtshan smod brjod na ni | āvhānādau gurornāmni |
| 35 | \|\|35\|\| | 11a.6 → 11a.7 | bla ma la ni bka' gsol zhu | ādiśyatām, kariṣyāmi |
| 36 | \|\|36\|\| | 11a.7 | dgod dang lud pa la sogs pa | hāse kāse samutpanne |
| 37 | \|\|37\|\| | 11a.7 → 11b.1 | mdun du dul bar 'dug pa dang | vinītaḥ purato bhūyāt |
| 38 | \|\|38\|\| | 11b.1 → 11b.2 | bsnyen bkur spyod pa thams cad la | satkāryaṃ sarvadā kuryān |
| 39 | \|\|39\|\| | 11b.2 | sgeg pa la sogs bya ba kun | na vilāsamayīṃ ceṣṭām |
| 40 | \|\|40\|\| | 11b.2 → 11b.3 | rab gnas dkyil 'khor sbyin sreg dang | pratiṣṭhāyāṃ maṇḍale ca |
| 41 | \|\|41\|\| | 11b.3 | spyan bye sogs las ji thob pa | pratiṣṭhādau labhyate yat |
| 42 | \|\|42\|\| | 11b.3 → 11b.4 | bla ma'i slob ma slob mar min | guruśiṣye svaśiṣyatvam |
| 43 | \|\|43\|\| | 11b.4 | slob dpon la ni gang 'bul dang | ācāryo yatsvayaṃ dadyād |
| 44 | \|\|44\|\| | 11b.4 → 11b.5 | dran pa brjed med gyur pa dang | avismṛtaḥ sarvacaryām |
| 45 | \|\|45\|\| | 11b.5 | na bas bla ma'i bya ba la | anujñāto guroḥ kāryam |
| 46 | \|\|46\|\| | 11b.5 → 11b.6 | 'dir mang smra ba ci zhig dgos | kimanyad, gurutoṣāya |
| 47 | \|\|47\|\| | 11b.6 | dngos grub slob dpon rjes 'brang zhes | sarvathā sarvadā siddhir |
| 48 | \|\|48\|\| | 11b.6 → 11b.7 | bsam pa dag pa'i slob ma ni | śiṣyaḥ śuddhāśayo bhūtvā |
| 49 | \|\|49\|\| | 11b.7 | de nas sngags sogs sbyin pa yis | tato mantrādidānena |
| 50 | \|\|50\|\| | 11b.7 → 12a.1 | de ltar bla ma'i rjes 'jug slob ma ni | gurumanugataśiṣyasyānavadyasya |

Colophon: ff. 12a.1–12a.2 ("bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so // rgya gar gyi mkhan po pad+mA ka ra warma dang / zhu chen gyi lo tsA ba dge slong rin chen bzang pos bsgyur cing zhus te gtan la phab pa'o" — Unicode: རྒྱ་གར་གྱི་མཁན་པོ་པདྨཱ་ཀ་ར་ཝརྨ་དང་། ཞུ་ཆེན་གྱི་ལོ་ཙཱ་བ་དགེ་སློང་རིན་ཆེན་བཟང་པོས་བསྒྱུར་ཅིང་ཞུས་ཏེ་གཏན་ལ་ཕབ་པའོ། །). Note Skt v50 is metrically expanded (two long lines vs. standard anuṣṭubh); Tibetan mirrors it with longer quarters (12–13 syllables).

Mapping verdict: identity mapping Tib v_n = Skt ||n|| for all n = 1..50; no verse additions, omissions, transpositions detected between Derge D3721 and the GRETIL Sanskrit witness.

## 4. Second-witness / external source status
See `documents/webfetch_log_B03.md` for full verbatim log.
- rKTs T2543 re-fetch (kraytsang.com): FAILED — transport error ×3 (https/http/trailing-slash). Edition coverage (A/C/D/G/N/Q all carry it; identical colophons except minor orthography) rests on Loop A10 cached copy, not freshly re-verified.
- Esukhia narthang-tengyur GitHub: repository does not exist (repo root 404; contents/tengyur 404; org search q=narthang → total_count: 0). Second-edition Narthang e-text via GitHub: ยังไม่พบ.
- asianlegacylibrary.org: catalog path 404; library.asianlegacylibrary.org is a JavaScript-only shell returning only its page title; no downloadable bla ma lnga bcu pa Wylie file obtained. ยังไม่พบ.

## 5. Files saved this loop
- `loop_B03/documents/webfetch_log_B03.md`
- `loop_B03/loop-report.md` (this file)

## 6. Gaps / next actions
1. kraytsang.com T2543 witness matrix unverified fresh (site down) — retry later or use web.archive.org snapshot of kraytsang.com/text/T2543.
2. Narthang N3337 second-edition digital witness still unfound (Esukhia absent; candidates elsewhere: BDRC W1PD96682 scans, ACIP, rKTs e-text sets MW1GS/MW1PD).
3. ALL library search requires interactive JS client (or undocumented API) — no programmatic route found this session.
