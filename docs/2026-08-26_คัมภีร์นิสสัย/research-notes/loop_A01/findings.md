# Loop A01 — Terminology Verification (findings)

Project: Thai academic deep-research on "nissaya" literature (Pali interlinear vernacular translation).
Session date: 2026-08-26. Agent: ox-alpha (resuming interrupted Loop A01).
Provenance tags: **[LIVE]** = fetched this session (URL given); **[LOCAL]** = pre-downloaded file in `documents\`; **[NEG]** = negative result (term not found / source blocked); **[KD]** = Wikipedia keyword-discovery only, NEVER cite.

> Tooling note: websearch backend returned HTTP 429 for the entire session; Bing/Yandex/DDG/Mojeek/Google Books were also blocked or returned junk for Thai queries (confirming previous agent's failures in bing_*.txt / yandex_thai_term.txt). Verification therefore relied on direct API fetches: Crossref, Semantic Scholar, Open Library, J-STAGE, archive.org advancedsearch, HathiTrust, Wikipedia API.

---

## Sub-topic 1. CRITICAL: Identity of "อัฏฐพยาขยา"

### Verdict
**ยังไม่พบข้อมูลยืนยัน (no direct source confirmation).** No live source this session contains the string "อัฏฐพยาขยา" or equates it with a Pali term. The best-supported hypothesis remains **aṭṭhabeyyākaraṇa / aṭṭha veyyākaranā** (the eightfold aṅga list whose 3rd member is *veyyākaraṇa*), on phonosemantic grounds only; the ninefold **navāṅga** (+vedalla) is the later expanded form of the same list.

### Evidence gathered
1. **[NEG] Crossref:** `https://api.crossref.org/works?query.bibliographic=atthabeyyakara&rows=10` → total-results: **0**. Also `query.bibliographic=ganthipada` → 0.
2. **[NEG] archive.org metadata:** `https://archive.org/advancedsearch.php?q="atthabeyyakarana" OR "atthabeyyakara"` → numFound **0**.
3. **[NEG] HathiTrust full-text:** `https://babel.hathitrust.org/cgi/ls?q1="atthabeyyakarana";anyall1=phrase;field1=ocr;a=srchls;lmt=ft` → "No results" (also for "beyyakarana"; endpoint may be JS-gated — treat as weak negative).
4. **[NEG] Google Books API:** `https://www.googleapis.com/books/v1/volumes?q=%22atthabeyyakara%22` → persistent **429** all session (quota exhausted at IP level; the prior agent's `googlebooks_attaphayakhaya_raw.json` is likewise a 0-byte failure). Unresolved.
5. **[NEG] Search engines:** all four Bing captures in `documents\bing_*.txt` contain zero relevant hits ("อัฏฐพยาขยา" → SafeSearch block page; "อัฏฐเบยยากรณ" → ~57 results but ALL junk: YouTube help/zhihu/360.cn pages; "นิสสัย" → blocked); `yandex_thai_term.txt` = SmartCaptcha wall. Live re-tests via Bing web + DuckDuckGo html + Mojeek this session: captcha walls and pizza/zhihu junk.
6. **Orthographic analysis (working hypothesis, unverified):**
   - อัฏฐ = aṭṭha "eight" (certain).
   - Thai convention renders Indic v/b-clusters as พย (cf. พยากรณ์ < vyākaraṇa/veyyākaraṇa "prediction"); ขย corresponds to khyā (as Skt व्याख्या *vyākhyā* "exposition"). So "พยาขยา" reads naturally as a *vyākhyā/byākhyā*-family word "explanation/exposition", i.e. a Thai spelling variant orbiting **veyyākaraṇa** (= Skt *vyākaraṇa*, "explanation, analysis").
   - [KD] en.wikipedia "Vyākaraṇa": "Vyākaraṇa … means 'separation, distinction, discrimination, analysis, explanation' of something"; in Buddhist texts it means a Buddha's prediction (Keown's Dictionary cited there). File: `documents\wiki_byakarana_raw.txt` (hatnote points to Pali-grammar article "Byākaraṇa").
   - If อัฏฐพยาขยา is attested in Thai sources it would therefore most plausibly denote the **eightfold genre list aṭṭha-veyyākaraṇādi** rather than navāṅga (which would normally be spelled นวภาค/นวังคะ in Thai).
7. **[LIVE] Scholarly anchor that the list exists in both forms:**
   - Maeda (Egaku) Mayeda, "The Significance of 'veyyakarana' as appeared in Early Buddhist Texts", *JIBS* 8(2), 1960, DOI:10.4259/ibk.8.586 — PDF downloaded & text-extracted (`documents\maeda1960_veyyakarana.pdf`, `_extract.txt`). Conclusion (Japanese): the original word *veyyākaraṇa* (vyākaraṇa) carries **two senses in early Buddhist texts — 「解答」(answer to a question) and 「記別」(prediction/vyākaraṇa-授記)**; in Pali canon usage as "answer" predominates.
   - Its footnote 3 cites Maeda's companion study **「九分教のヴェイヤーカラナについて」("On Veyyākaraṇa in the Ninefold Aṅga [navāṅga]")**, 『宗教研究』144号, pp.131–135 — direct proof that scholarship treats *veyyākaraṇa* inside the **ninefold (navāṅga)** framework.
   - Maeda Egaku, "On Geyya in Nava-aṅga-buddha-sāsana", *JIBS* 3(2), 1954, DOI:10.4259/ibk.3.318 **[LIVE Crossref]** — confirms the *nava-aṅga-buddhasāsana* (ninefold) classification as standard scholarly object.
   - Hiraki Koji, "Gathas Interpolated by a Veyyakarana", *JIBS* 38(1):462–458, 1989, DOI:10.4259/ibk.38.462 **[LIVE Crossref + J-STAGE]** (free PDF listed).

### Chaining implication
Next loop should query Thai-language Tripitaka corpora (84000.org full-text, BUDSIR/Mahidol, MCU journals) directly for "อัฏฐพยาขยา"/"อัฏฐพยญฺชน" and check Siamese translations of Atthasālinī's list of *aṭṭhabeyyākaraṇāni*; Google Books quota reset may allow q="อัฏฐพยาขยา".

---

## Sub-topic 2. Meaning of Pali "nissaya"

1. **[LIVE] PTS Pali–English Dictionary** (via wisdomlib aggregation of dictionary.sutta.org): URL `https://www.wisdomlib.org/definition/nissaya`
   - "*Nissaya*, (Sk. **niśraya, of ni+śri**, corresp. in meaning to Sk. āśraya) that on which anything depends, support, help, protection; endowment, resource, requisite, supply; foundation, reliance on…" — Vin I,58 lists **the four monastic nissaya-requisites** (piṇḍiyālopa-bhojanaṃ, paṃsukūla-cīvaraṃ, rukkhamūla-senāsanaṃ, pūtimutta-bhesajjaṃ); Nd1 108 gives two: taṇhā° and diṭṭhi°; *nissayaṃ karoti* "to rely on".
   - **Correction vs. brief:** root derivation is **ni + √śri** (niśraya), not ni-√śī.
   - *Nissāya* (ger./prep.): "leaning on… by means of, because of" (J I,140 etc.).
2. **[LIVE] Nyanatiloka, Manual of Buddhist Terms** (via same page): *nissaya* = "**foundation**", one of the 24 conditions (*nissaya-paccaya*); wrong foundations of morality = tanhā-nissaya, ditthi-nissaya.
3. **[LIVE] Concise Pali-English Dictionary** (budsas, via same page): "support; protection; that on which anything depends".
4. **[LOCAL] Canonical usage pair MN 22:** `mn22_th_bilara.json` (Pali root, mn22:24.1–24.5) "*taṃ… diṭṭhinissayaṃ nissayetha*" ↔ `mn22_thanissaro_en.html` L260: "depend on a **view-dependency (ditthi-nissaya)**". Also `pts_an3_pali.html` has *upanissayasampanna* passages (entity-encoded), `pts_mn1/an1/an4` have further nissaya/upanissaya occurrences (grep counts: an1=6, mn1=9, an3=10, an4=4).
5. **[LIVE] Yamagiwa, "Prescription or Description: cattāro-nissaya in the Vinaya-piṭaka"**, *JIBS* 2001, DOI:10.4259/ibk.50.453 — canonical four-requisites sense.
6. **[LOCAL] Burmese dictionary sense** (Tipiṭaka Pāḷi-Myanmar Dictionary, quoted inside wisdomlib page above): နိဿယ = မှီရာ၊ တည်ရာ "that which one leans on / rests on"; nissaya-paccaya; nissayiya teacher relation.

---

## Sub-topic 3. How nissaya became a translation-genre term in Burma

1. **[LIVE] Okell, John (1965). "Nissaya Burmese: a case of systematic adaptation to a foreign grammar and syntax." *Lingua*.** DOI:10.1016/0024-3841(65)90013-6 (Semantic Scholar record fetched live; abstract elided by publisher — closed access). The foundational linguistic description of the nissaya register: Burmese systematically reshaped to mirror Pali grammar/syntax line-by-line.
2. **[LIVE] Pannabhoga Herngseng (2023). "Burmese Nissaya Literature: A Mainstream Monastic Education Learning Method and its Salient Features." *MANUSYA: Journal of Humanities* 26(1):1–23.** DOI:10.1163/26659077-25010027 — GOLD OA PDF downloaded: `documents\pannabhoga2023_burmese_nissaya.pdf` (+ extracted text). Key data:
   - Definition quote: "a type of **translation in which each Pali word is followed by its relevant annotative interpretation**, known as nissaya."
   - History: word-to-word translation genre "already popular in Sri Lanka and found among **Pyu and Mon** literature"; "the **Sanskrit-Pyu nissaya at Srikṣetra in the 7th ce**, and Kyansittha's inscriptions at Pagan in 12th ce were the earliest forms"; genre matured in Ava period alongside pyo poetry; important in monastic education "since at least the 15th century if not long before".
   - Prior studies named: Tin Lwin 1961; **Pruitt 1992**; McDaniel 2008; Clark 2015; plus Okell 1965, Lammerts 2010, Blackburn 2010, Walker 2020.
   - Chaṭṭhasaṅgāyanā link (Clark 2015,114): official annotated Tipitaka translation "is nearly identical to that of nissaya wording… merely reproductions or adoptions from a certain nissaya by simply removing the Pali words."
3. **[LIVE] Pruitt, William. *Étude linguistique de nissaya birmans: traduction commentée de textes bouddhiques*** — book reviewed by Okell in *Buddhist Studies Review* 14(2), 1996, DOI:10.1558/bsrv.v14i2.14875 (Crossref record live). Confirms existence of the dedicated monograph on Burmese nissaya translation (cited as "Pruitt 1992" by Pannabhoga).
4. **[LOCAL] archive.org/bdrc corpus evidence:** `archiveorg_nissaya_raw.json` — 678 items matching "nissaya", overwhelmingly BDRC Burmese prints titled e.g. "*dhammasaṅgaṇī **pāḷi-tō nissaya***", "Sussīlakkhan **pāḷi-tō nisya**", "Parivāra nissyya/nisya", "Saddanīti nissaya", "Ṭīkā-kyō nissya", "Abhidhān nissya", "Kaṅkhā nissya", "Vinaya saṅgrah nissyya", "Cūḷavā nissya / ratanamañjūsa… abhidhammatthasaṅgraha nissaya". Pattern "pāḷi-tō nissaya" (= Pali-into-[Burmese] nissaya) shows the term functioning as the ordinary Burmese name of the translation format.
5. **[KD] Wikipedia "Buddhist texts" raw wikitext** (`documents\wiki_buddhist_texts_raw.txt`, L100): Burmese *pyui'* poetry from 1450s described as "long and embellished **translations of Pali Buddhist works**, mainly jatakas" — adjacent genre context (keyword discovery only).

---

## Sub-topic 4. beyyākaraṇa / vyākaraṇa as canonical category

1. **[LIVE] Maeda 1960** (DOI:10.4259/ibk.8.586, PDF in documents\): *veyyākaraṇa* in early canon = chiefly "answer (to a question)" and secondarily "prediction (记别/授记)"; formula "imasmiñ ca pana veyyākaranimhi bhāsamāne…" studied; notes frequent mistranslations in 南傳大藏經.
2. **[LIVE] Maeda 1954** "On Geyya in Nava-aṅga-buddha-sāsana" (DOI:10.4259/ibk.3.318) and **Hiraki 1989** (DOI:10.4259/ibk.38.462): *veyyākaraṇa* functions as a canonical genre-slot within the aṅga lists.
3. **[KD] en.wikipedia "Byākaraṇa"** (`documents\wiki_byakarana_raw.txt`): Pali grammatical tradition (Kaccāyana, Moggallāna-vyākaraṇa, Aggavaṃsa's Saddanīti 1154 CE, Padarūpasiddhi, Payogasiddhi, Vuttodaya, Abhidhānappadīpikā, Subodhālaṅkāra, Bālāvatāra-gaṇṭhipadatthavinicchayasāra) — i.e., in Theravada usage **byākaraṇa also names the grammar-literature category itself**; bibliography yields citable anchors below:
   - **[LIVE] Falqués, Aleix Ruiz (2017). "The Role of Pāli Grammar in Burmese Buddhism." *Journal of Burma Studies* 21(1):1–96. DOI:10.1353/jbs.2017.0001** (Crossref record fetched live; Project MUSE).
   - Gornall (2020) *Rewriting Buddhism*, UCL Press, DOI:10.14324/111.9781787355156; Kieffer-Pülz (2015) DOI:10.1007/s10781-014-9243-6 (from same KD bibliography; DOIs recorded for chaining).
4. Note the doublet to keep distinct in the report: **veyyākaraṇa** (canonical aṅga-genre: Q&A exposition/prediction) vs **byākaraṇa/vyākaraṇa** (Pali grammar tradition; Mahāyāna prophecy sense per Vyākaraṇa article).

---

## Sub-topic 5. Aṅga-bheda (navāṅga-sasanassa) scholarship

1. **[LIVE] Lamotte, Étienne. *History of Indian Buddhism: From the Origins to the Śaka Era*** (trans. Webb-Boin/Santiniketan 1988; S2 record year 1990 w/ Dantinne & Webb-Boin) — verified via Semantic Scholar API: paperId ce64eb86a04286bbadab4e60d1789cd8370638f4. (Standard treatment of the ninefold division; exact page refs to be pulled when the volume is accessible.)
2. **[LIVE] Norman, K.R. (1983). *Pāli Literature* (A History of Indian Literature VII.2, Harrassowitz)** — Open Library work OL2472615W fetched live; also Norman (1997) *A Philological Approach to Buddhism* OL2472617W.
3. **[LIVE] Maeda 1954** DOI:10.4259/ibk.3.318 (title itself = "Nava-aṅga-buddha-sāsana") and Maeda's 宗教研究 144:131–135 article on 九分教 veyyākaraṇa (cited in Maeda 1960 footnote 3, PDF-extracted).
4. **[NEG] Exact canonical locus** of the eight-/ninefold list was NOT pinned down this session (local PTS dumps of AN1–AN5/DN2–DN3/MN1 do not contain it; grep.app and SC search endpoints unavailable). Chaining target: AN II 106 region / Paṭisambhidāmagga / DN-aṭṭhakathā intro; verify against sc-bilara GitHub raw files next loop.

---

## Sub-topic 6. Interlinear translation / gloss / metaphrase (general translation studies)

All fetched live via Crossref `query.bibliographic=interlinear+gloss+translation+history`:
1. E.G. Stanley, "The Old English Interlinear Gloss to De Vitiis et Peccatis", *Notes and Queries* 43(4):385, 1996, DOI:10.1093/nq/43-4-385a.
2. Gunnar Magnusson, "Interlinear Translation and Discourse à la Mark Twain", in *Translation Today* (Multilingual Matters / Yonsei), 2003, DOI:10.21832/9781853596179-011 (also JSTOR jj.27710953.13).
3. "4.2.2.2.6 Interlinear Pentateuch", *Textual History of the Bible* (Brill), DOI:10.1163/2452-4107_thb_dum_225960 — interlinear tradition in scripture transmission.
4. "Abbreviations for Interlinear Glossing", in *Systemic Functional Translation Studies*, Toronto UP 2021, DOI:10.3138/9781781798324-004 — modern linguistics treats interlinear glossing as a recognized descriptive format.
5. "INTERLINEAR TRANSLATION", in *Three Stories in Oneida*, 1981, DOI:10.2307/j.ctv16qfc.5.
Working definition supported by these + Okell/Pannabhoga: interlinear translation places TL material line-under-line against SL; metaphrase = word-for-word rendering (Dryden's classical triad metaphrase/paraphrase/imitation underlies the terminology — chain later).

---

## Sub-topic 7. Nissaya vs aṭṭhakathā vs ṭīkā vs gaṇṭhipada

1. **[LOCAL] Pannabhoga 2023 extract** (pp.3–4): Pali religious literature stratified as "canonical Pali texts, **Aṭṭhakathā (commentaries), ṭīkā (sub-commentaries) and Anuṭīkā (sub-sub-commentaries)**, all of which are translated or interpreted using **nissaya methods**" — i.e., nissaya is orthogonal to content layers: it is the *format* (each Pali word followed by vernacular interpretation) applied to any layer.
2. **[LOCAL] Same extract**: "although nissaya is regarded as a method of translation, it is not categorized as 'translation' as generally understood because nissaya offers not only a definition but usually more than one meaning… nissaya authors consult various relevant texts of Aṭṭhakathā, ṭīkā, and anuṭīkā".
3. **Gaṇṭhipada**: **[NEG] Crossref & archive.org metadata = 0 hits.** **[KD]** Wikipedia "Byākaraṇa" lists *Bālāvatāra **gaṇṭhipada**tthavinicchayasāra* (Vācissara, 14th c.) among Burmese-school grammatical manuals — indicates gaṇṭhipada = mnemonic/verbal-explanation subcommentary genre of the Burmese tradition. Dedicated scholarly source still needed (chain: Jaini PTS volumes, Bode 1909).
4. **[LIVE] Hybrid naming evidence:** Jaini (ed.), *Subodhālaṅkāra Porāṇa-ṭīkā (Mahāsāmi-ṭīkā)… Abhinava-ṭīkā (**Nissaya**)*, PTS 2000 — reviewed in BSORAS 75(1) 2002 by J.C. Wright, DOI:10.1017/S0041977X02850078 (Crossref live). Shows even Sinhala-context Pali philology labels an interlinear gloss layer "(Nissaya)" appended to a ṭīkā — nissaya ≠ ṭīkā but can accompany it.
5. **[LOCAL] bdrc titles** show nissaya wrapping grammar/dictionary works too (Saddanīti nissaya, Abhidhān nissya) — reinforcing format-vs-layer distinction.

---

## Sub-topic 8. Debate: nissaya as translation vs exegesis

1. **[LOCAL] Pannabhoga 2023** (abstract + §1–2): "it would be difficult to categorize it as mere **translation** in the modern academic sense… because nissaya may offer more meanings in the monastic education system"; final claim: "nissaya literature is something **more than translation and no less than an encyclopaedic source** of knowledge"; earlier studies "only examined what a nissaya is and to what literary genre nissaya literature belongs."
2. **[LIVE] Okell 1965** title itself frames nissaya as "systematic adaptation to a foreign grammar and syntax" — a linguistic-structural view (translation-as-morphology) rather than commentary.
3. **[LOCAL] McDaniel link:** Pannabhoga quotes McDaniel (2008, 131–136) calling the method "**lifting words**" in similar northern Thai/Lao monastic institutions — i.e., pedagogic exegetical practice. McDaniel, Justin T. (2008). *Gathering Leaves and Lifting Words: Histories of Buddhist Monastic Education in Laos and Thailand*, Univ. of Washington Press / Silkworm Books — verified **[LIVE]** via Open Library OL11817812W (2008) & OL26548571W (2012 printing).
4. **[LOCAL] Clark 2015 / Chaṭṭhasaṅgāyanā** evidence (via Pannabhoga): official modern Burmese translation ≈ old nissaya minus Pali — supports "translation" side of the debate.

---

## Sub-topic 9. Thai academic terminology for nissaya

Direct Thai-journal verification largely failed this session (**[NEG]** TCI-ThaiJO search: นิสสัย→1 irrelevant hit; คำแผลง→0; ยกศัพท์→0; CiNii for อัฏฐพยาขยา→0).
What is established:

1. **[KD] Thai Wikipedia "อรรถกถา"** (`documents\wiki_th_atthakatha_raw.txt`; quote captured in `documents\th_wiki_context.txt`) — keyword discovery ONLY, but its taxonomy of Pali exegesis genres includes:
   > "[[นิสสยะ]] หรือ นิสสัย — คัมภีร์แปลพระไตรปิฎกเป็นต้น เช่นแปลมาสู่ภาษาพม่า **โดยวิธีการยกศัพท์**"
   ("nissaya: scriptures translating the Tipitaka, e.g. into Burmese, by the word-lifting method") — alongside [[คัณฐี]], [[ทีปนี]], [[มธุ]], [[ละตัน]], [[ปกรณ์วิเสส]], [[สัททาวิเสส]].
   ⇒ Thai terms to chase in real academic sources: **นิสสัย/นิสสยะ**, **การยกศัพท์ (word-lifting)**, **คำหา** (Lanna vernacular gloss), **บาลีคำแผลง**.
2. **[LOCAL] McDaniel 2008 "lifting words"** (via Pannabhoga quote) — English-language scholarly label for the same Lanna practice.
3. **[LOCAL] SuttaCentral Thai presence:** `mn22_thai_probe.json` shows a non-segmented Thai translation of MN22 exists on SuttaCentral: author "Siam Rath", id `th_mn22_siam_rath` — while segmented bilara Thai data is absent (`root_text: null, translation: null`). Useful for locating Thai renderings of technical terms.
4. **[LIVE] Chiu, Angela S. (2017). *The Buddha in Lanna*.** Hawai'i UP, DOI:10.21313/hawaii/9780824858742.001.0001 (Crossref live) — context for Lanna textual culture.
5. Status: dedicated Thai university/journal definitions of นิสสัย remain **ยังไม่พบข้อมูลยืนยัน** — top chaining priority.

---

## Sub-topic 10. Burmese spelling နိဿယ and usage

1. **[LOCAL/LIVE] Tipiṭaka Pāḷi-Myanmar Dictionary** entry (Myanmar script **နိဿယ**, via wisdomlib page quoting dictionary.sutta.org): derivations ni+si+a (Kaccāyana 527, Rūpasiddhi 568, Kaccāyanatīkā…); senses: (၁)(က) **မှီရာ၊ တည်ရာ** "support/place of dependence"; (၂) နိဿယပစ္စည်း (dependence condition); (၃) နိဿယည်း / နိဿယည်းဝေရာ — the novice-teacher reliance bond ("a teacher to rely on"); (၄) chief/head; (၅) reason; (၆) dependent-on (taṇhā, diṭṭhi; four requisites; persons); (၇) able to depend.
2. **[LOCAL] Genre usage in Burmese print titles:** see archiveorg_nissaya_raw.json (Sub-topic 3 #4) — spellings vary across romanizations (nissaya / nissya / nisya / nissyya) reflecting Burmese orthographic practice in BDRC cataloging.
3. **[LOCAL] mn22_th_bilara.json** is the Mahāsaṅgīti (Burmese Sixth-Council) Pali root text — the canon edition produced in Myanmar where nissaya pedagogy shaped the Chaṭṭhasaṅgāyanā translation (see Sub-topic 8 #4).

---

## New documents saved into loop_A01\documents\
| File | What |
|---|---|
| pannabhoga2023_burmese_nissaya.pdf (+ _extract.txt) | Brill GOLD-OA core article on Burmese nissaya literature |
| maeda1960_veyyakarana.pdf (+ _extract.txt) | J-STAGE OA study of veyyākaraṇa semantics incl. navāṅga reference |
| jstage_veyyakarana_raw.html | J-STAGE search results for "veyyakarana" (Hiraki 1989, Maeda 1960 records) |
| wiki_th_atthakatha_raw.txt, th_wiki_context.txt | Thai genre-taxonomy keyword-discovery (นิสสัย quote) |
| wiki_byakarana_raw.txt, wiki_buddhist_texts_raw.txt | Keyword discovery: byākaraṇa tradition, Buddhavacana/pyui' |

## Key chaining keywords
- Pali/Sanskrit: aṭṭhabeyyākaraṇa · aṭṭha veyyākaranā · navaṅga-buddhasāsana · navavidha sāsana · veyyākaraṇa · byākaraṇa · vyākaraṇa/vyākhyā · geyya · vedalla · abbhutadhamma · nissaya-paccaya · cattāro nissayā · diṭṭhinissaya · upanissaya · gaṇṭhipada · anuṭīkā
- Burmese: နိဿယ · pāḷi-tō nissaya · မှီရာ · nissayiya · Saddanīti nissaya · Chaṭṭhasaṅgāyanā translation
- Thai: นิสสัย / นิสสยะ · การยกศัพท์ · คำหา · บาลีคำแผลง · อรรถกถา · ฏีกา · อัฏฐพยาขยา (unverified) · อัฏฐเบยยากรณ · นวภาค
- Scholars/works to expand: Okell 1965 · Pruitt (Étude linguistique de nissaya birmans) · McDaniel 2008 Gathering Leaves · Pannabhoga 2023 · Falqués 2017 · Lamotte HIB §§navāṅga · Norman 1983 Pāli Literature · von Hinüber Handbook §§152ff · Bode 1909 Pali Literature of Burma · Tin Lwin 1961 · Clark 2015 · Lammerts 2010 · Walker 2020 · Ruiz-Falqués 2017 (Saddanīti)
- Canonical loci to pin: AN II 106 (aṅga list) · Paṭisambhidāmagga I · Vin I,58 (four nissayā) · Nd1 108 (taṇhā°/diṭṭhi°) · MN 22.24 (diṭṭhinissaya)
