# Loop B10 — Final Phase B deep-dive findings
Date of research: 2026-08-26. Researcher: ox-alpha sub-agent (RESEARCH ONLY).
Working dir: D:\01_APP\Research. Documents saved in `loop_B10\documents\`.
Provenance rule: every item carries its source URL / DOI / API endpoint. Items that could not be verified are marked **ยังไม่พบข้อมูลยืนยัน**. Nothing below is fabricated; blocked endpoints are reported honestly.

---

## Sub-topic 1 — FINAL attestation attempt: "อัฏฐพยาขยา"

**Verdict: ยังไม่พบข้อมูลยืนยัน** — term remains unattested in every accessible online Thai source tested in this loop (final attempt).

Attempts made this loop (all 2026-08-26):
| Query | Channel | Result |
|---|---|---|
| `"อัฏฐพยาขยา"` | Web search (Exa-backed provider) | No exact-term hit. Results only unrelated อัฏฐ- words: อัฏฐกะ (dhammathai.org/bd/08.php), อัฏฐกวัคคะ, อัฏฐบาน (dhamtara.com/?p=31421), วันอัฏฐมีบูชา (onab.go.th) |
| `"อัฐพยาขยา"` นิสสยะ บาลี | Web search | No exact-term hit |
| `"อัฏฐพยาขยา"` (exact phrase) | DuckDuckGo HTML index (html.duckduckgo.com/html/?q=%22อัฏฐพยาขยา%22) | Literal response: "No results found for \"อัฏฐพยาขยา\"" |
| `"นวพยาขยา"` (ninefold variant, exact phrase) | DuckDuckGo HTML | Literal response: "No results found for \"นวพยาขยา\"" |
| `"นวพยาขยา" OR "อัฏฐเบยยากรณ"` | Web search | Blocked by provider rate-limit before results; DDG negative above stands |
| Google Books API exact-phrase volume query | `https://www.googleapis.com/books/v1/volumes?q="%E0%B8%AD%E0%B8%B1%E0%B8%8F%E0%B8%90%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%82%E0%B8%A2%E0%B8%B2"` | **HTTP 429 on 5 attempts spread over ~25 min** (incl. waits of 60 s and 120 s). API quota never recovered this session — could not be tested. Honest limitation. |

Interpretation (structural, not attestation): พยาขยา < Pali *vyākaraṇa* ("explanation/grammar"), so อัฏฐพยาขยา would be an "eightfold-explanation" coinage analogous to Burmese *nissaya* pedagogical labels; but **no Thai print or online source reachable from here uses it**. If the term exists, it lives in un-digitized Thai print (ปริยัติธรรม periodicals, นครินทร์เส็ง etc.) — recommend physical-library check before abandoning.

---

## Sub-topic 2 — Kirichenko dissertation: attribution CORRECTED

**Verdict: NOT an Oxford DPhil. Alexey Kirichenko's doctorate is in history, awarded 2003, Moscow State University (MSU), on Burmese ROYAL CHRONICLES — not monastic education.**

Provenance:
- Lecture bio, University of Vienna (stb.univie.ac.at/en/news-events/detail/news/buddhist-networks-of-circulation-in-the-eighteenth-to-the-early-twentieth-century-burma/): *"Alexey Kirichenko is an assistant professor at the Institute of Asian and African Studies, Moscow State University. He received his doctorate in history in 2003 with a thesis focused on the study of Burmese royal chronicles."*
- MSU ISTINA research profile: istina.msu.ru/workers/482741/ (publications list incl. Russian articles on 17th–18th-c. Vinaya observance; 2024 conference paper "On the Malleability of Pāli Canon: The Position of Indic and Vernacular in Upper Burmese Bilingual Translations of Buddhist Texts from the Sixteenth to the Nineteenth Centuries", Дубянские чтения, HSE, 25 Sep 2024 — abstract at istina.pskgu.ru/conferences/presentations/711846777/).
- Chapter: Kirichenko, "The thathanabaing project: Monastic hierarchies and colonialism in Burma," in *Theravada Buddhism in Colonial Contexts* (Routledge, 2018), DOI 10.4324/9781315111889-8 (Taylor & Francis metadata).
- Co-edited (with Thibaut d'Hubert, Christian Lammerts, Aleix Ruiz-Falqués) the OUP South Asia Research volume on Daṇḍin's world of Asian letters (ISTINA listing).
- ORA (ora.ox.ac.uk/?q=Kirichenko) returned **HTTP 403** (bot-blocked); British Library EthOS not attempted (known bot-blocking) — noted honestly, but the Vienna bio is explicit and sufficient.

**Likely source of confusion (now identified):** the Oxford DPhil on Burmese-Thai monastic education belongs to **Khammai Dhammasami**, "Between Idealism and Pragmatism: A Study of Monastic Education in Burma and Thailand from the Seventeenth Century to the Present," D.Phil., Faculty of Oriental Studies, University of Oxford, St Anne's College, Trinity Term 2004. Full text PDF openly hosted: http://asc.mcu.ac.th/database/wp-content/uploads/2018/09/a_study_of_monastic_education_in_burma_and_thailand_from_the_17th_to_the_present.pdf (verified this session; contains Thalun decree of 5 Aug 1636 and nissaya-as-student-textbook discussion). Published as *Buddhism, Education and Politics in Burma and Thailand* (Bloomsbury 2018). Dhammasami acknowledged as "Dr K. Dhammasami, DPhil (Oxford), Rector of ssbu" in Pannabhoga 2023.

Bonus synthesis datum (Kirichenko, 2024 abstract): Upper Burma by the 19th century had *"between eight and ten hundreds"* of Pali/vernacular bilingual works (*bitexts* = nissaya-type) circulating, *"the most popular available in up to ten different versions or editions."*

---

## Sub-topic 3 — Christian Bauer: publications on Tai scripts

**Verdict: ยังไม่พบข้อมูลยืนยัน for any Christian Bauer publication on TAI scripts. His verified output is Old/Middle MON epigraphy and Mon linguistics. Likely conflation with Christian Daniels (Tai/Tay scripts) or Robert S. Bauer (Zhuang script).**

Verified identity & affiliation:
- German Wikipedia (de.wikipedia.org/wiki/Christian_Bauer_(Südostasienwissenschaftler)) — keyword-only citation: b. 24 May 1952, Recklinghausen; **Professor of Southeast Asian Philologies, Humboldt-Universität zu Berlin, 1993–2017 (retired)**; specialises in Mon, Khmer, Thai language/literature history. Personal page: amor.cms.hu-berlin.de/~h0198kaq ("Professor of Southeast Asian Philology (retired)").

Confirmed publications (all MON-focused):
- Bauer, Christian. "Notes on Mon Epigraphy." *Journal of the Siam Society* 79.1 (1991). Open PDF: thesiamsociety.org/wp-content/uploads/1991/03/JSS_079_1f_Bauer_MonEpigraphy.pdf
- Bauer, Christian. "Numismatics, Dialectology, and the Periodization of Old Mon." *Mon-Khmer Studies* 16–17 (1987[1988]): 155–76 (as cited in Daniels 2019, academia.edu/40578293).
- MKS author index: sealang.net/archives/mks/BAUERChristian.htm (e.g., 1988 "The verb in Spoken Mon," MKS 15:87–110).
- Bauer, Christian. *A Guide to Mon Studies.* Monash Univ. Dept. of Linguistics, 1984, 86 pp. (Google Books id=IejfAAAAMAAJ).
- SEALS XX paper "Painters and Scribes: Rethinking Old Mon" (HU Berlin): sealsxx.uzh.ch/downloads/CBauer.pdf
- ICAAL abstract "When did Middle Mon end?": icaal.org/abstract/bauer-when.pdf

Crossref check (`api.crossref.org/works?query.author=Bauer&query.bibliographic=Tai+script`, rows=20): **zero** Christian-Bauer Tai-script records. Only relevant hit was Robert S. Bauer, "Mapping the Old Zhuang Character Script," *Monumenta Serica* 62.1 (2014), DOI 10.1179/mon.2014.62.1.008 — a different scholar.

Probable intended targets:
- **Christian Daniels** (Kyoto): "Script Without Buddhism: Burmese Influence on the Tay (Shan) Script of Mäng Maaw as Seen in a Chinese Scroll Painting of 1407," *International Journal of Asian Studies* 9.2 (2012), DOI 10.1017/S1479591412000010; "Historical Evidence for the Early Lik Tai Scripts" (open PDF, academia.edu/40578293); preservation work in Dehong (digital.crossasia.org PDF).
- Shan-script context: Sai Kam Mong 2004 *The History and Development of the Shan Scripts*; Terwiel & Khamdaengyodtai 2003 *Shan Manuscripts Part 1*; Rylands' Tai Mao manuscript blog (rylandscollections.com, 2024).

---

## Sub-topic 4 — Crosby & Khur-Yearn "Zare" article

**Verdict: article fully CLOSED (paywalled); correct DOI confirmed = 10.1080/14639941003791568; the candidate 10.1080/14639940902968954 is VALID but belongs to Khur-Yearn, "Satipatthana Meditation in Shan Tradition," Contemporary Buddhism 10(1) 2009: 85-90 - not the Zare article; Zare abstract unobtainable via any OA channel.**

Confirmed metadata (Crossref api.crossref.org/works/10.1080/14639941003791568):
- Kate Crosby & Jotika Khur-Yearn, "**POETIC DHAMMA AND THE ZARE: TRADITIONAL STYLES OF TEACHING THERAVADA AMONGST THE SHAN OF NORTHERN THAILAND**," *Contemporary Buddhism* 11.1 (May 2010): 1–26. Informa UK. Cited-by: 12.
- Correction (audit): DOI 10.1080/14639940902968954 resolves via Crossref to Khur-Yearn 2009 Contemporary Buddhism 10(1):85-90; Unpaywall 422 was a query artifact, not proof of invalidity.

Access checks:
- Unpaywall v2 (email param supplied): `"is_oa": false, "oa_status": "closed", "has_repository_copy": false` (record updated 2026-08-21). Zero OA locations, zero embargoed locations.
- Semantic Scholar API (graph/v1/paper/DOI:…): `abstract: null` with notice *"the following paper fields have been elided by the publisher"*; openAccessPdf status **CLOSED**.
- tandfonline.com abstract page: HTTP 403 (Cloudflare bot block).

What we legitimately hold: full Crossref reference list (25 refs), which maps the article's terrain: Shan *zare* preacher-poets; Zao Amat Long's Mahāsatipaṭṭhāna poetic dhamma (cf. Khur-Yearn's 2012 SOAS DPhil, "The Poetic Dhamma of Zao Amat Long's Mahāsatipaṭṭhāna Sutta…"); Milne 1910 *Shans at Home*; Egerod 1959; planned Crosby/Khur-Yearn/Zare Saw *Catalogue of Shan manuscripts in temple libraries of northern Thailand and Shan State* ("in preparation" as of 2010 — status ยังไม่พบข้อมูลยืนยัน).

---

## Sub-topic 5 — OpenLibrary sampling of nissaya primary texts

API: `https://openlibrary.org/search.json?q=nissaya&limit=20&fields=key,title,author_name,first_publish_year,language,ebook_access`
**numFound = 111** (confirms Phase-A figure exactly; numFoundExact=true).

Representative sample (18 of first 20; all Pali–Burmese word-for-word nissaya editions):
| Title | OL work ID | Year | Langs |
|---|---|---|---|
| Jinālaṅkāra nissaya (Buddharakkhita Mahathera) | OL39288127W | 2005 | pli,bur |
| Khuddasikkhā nissaya sacʻ nhaṅʻʹ Mūlasikkhā nissaya sacʻ | OL39243850W | 1929 | bur,pli |
| Sutʻ sīlakkhanʻ ʼaṭṭhakathā nissaya (Buddhaghosa) | OL39345031W | 1967 | bur,pli |
| Saddatthabhedacintatthadīpanī nissaya nhaṅʻʹ pañcāvayavavākyanayūpadesa | OL39343368W | 1953 | bur,pli |
| Bālāvatāra nissaya (Dhammakitti) | OL1041150W | 1925 | bur |
| Vinayālaṅkāraṭīkā nissaya | OL39347275W | 1977 | bur,pli |
| [Namakkāraṭīkā nissaya] | OL39304542W | 1956 | bur,pli |
| Padasaṅgaha nissaya (ʼĀdiccavaṃsa ʼA rhaṅʻ) | OL39313671W | 1917 | pli,bur |
| Saddanītipadamāla Nissaya (Cakkinda Ññoṅʻ kanʻ Cha rā toʻ ʼA rhaṅʻ) | OL39336167W | 1970 | pli,bur |
| Saddanītipadamāla Nissaya (Budhʻ Cha rā toʻ Ūʺ) | OL45359613W | 1970 | bur |
| Visuddhimagʻ nissaya (Buddhaghosa) | OL39340911W | 1965 | bur,pli |
| Rūpasiddhiṭīkā nissaya | OL39299956W | 1913 | pli,bur |
| **Upasampadā nissaya** — *ebook_access: public* | OL17867289W | 1892 | pli |
| Majjhimapaṇṇasapāḷi toʻ nissaya | OL39346361W | 1962 | bur,pli |
| Khuddakanikāyʻ suttanʻ piṭakatʻ, Paṭisambhidāmagʻ ʼaṭṭhakathā nissaya (Mahānāma Thera) | OL39340709W | 2000 | pli,bur |
| Ṭīkā kyoʻ nissaya sacʻ (Sumaṅgalasāmī Mahātthera) | OL39342838W | 1978 | bur,pli |
| Vimativinodanīṭīkā nissaya kyamʻʺ (Kassapatthera) | OL39339064W | 1975 | pli,bur |
| Netti ʼaṭṭhakatā nissaya (Dhammapāla) | OL39335128W | 2006 | pli,bur |

Pattern observed: grammar texts dominate the early stratum (Rūpasiddhi, Saddanīti, Padasaṅgaha, Bālāvatāra — the Kaccāyana school), then Vinaya/Abhidhamma commentaries and their Burmese ṭīkā-nissayas; dates run 1892–2006. Only one public-domain scan surfaced (Upasampadā nissaya 1892).

---

## Sub-topic 6 — Pollock: quotable vernacularization passages

Primary book item located: archive.org identifier **languageofgodsin0000poll** (Pollock, Sheldon I. *The Language of the Gods in the World of Men: Sanskrit, Culture, and Power in Premodern India.* Berkeley: University of California Press, 2006. xv+684 pp. ISBN 9780520245006; OpenLibrary OL3399549M / OL5823135W; LCCN 2005013461; OCLC 60349001).
- Item is access-restricted (printdisabled collection; all OCR derivatives marked private). Full-text inside-search endpoint refused: ia801401.us.archive.org/fulltext/inside.php → **HTTP 403**; alternate server path variant → 404. Honest limitation: no verbatim passage extracted from the 2006 book itself.
- Metadata description confirms the two-moment thesis and chapter list (incl. "Comparative and connective vernacularization").

**Verbatim quotable definition — provenance: Sheldon Pollock, quoted (by Seth Sanders) in the University of Chicago Chronicle, 20 Feb 2003, Vol. 22 No. 10, https://chronicle.uchicago.edu/030220/vernacular.shtml, discussing Pollock's essay "Cosmopolitan and Vernacular in History," *Public Culture* 12.3 (2000): 591–625 (DOI 10.1215/08992363-12-3-591):**

> "Vernacular literary cultures … were initiated by the conscious decisions of writers to reshape the boundaries of their cultural universe. They renounced the larger world for the smaller place, and they did so in full awareness of the significance of their decision. New, local ways of making culture … new ways of ordering society and polity came into being, replacing the older translocalism."

> "Vernacularization does not take place like leaves falling in autumn or butterflies emerging from the chrysalis, but rather is a process of informed choice."

Context line (same source): from the 9th century CE, waves of vernacular literature arose in both Western Europe and South Asia as writers adopted/adapted scripts from older, broader literary cultures — directly applicable to kham luang / nissaya emergence from Pali.

Note for synthesis: Pollock's Sanskrit-cosmopolitan model must be *adapted*, not transplanted, for Theravadin cases where PALI (not Sanskrit) is the cosmopolitan idiom — see Walker 2020 JAOS (below).

---

## Sub-topic 7 — Appiah "Thick Translation" — VERIFIED

Crossref api.crossref.org/works/10.2307/2932211:
- Kwame Anthony Appiah, **"Thick Translation,"** *Callaloo* 16.4 (1993): 808– . Publisher JSTOR; stable URL jstor.org/stable/2932211; ISSN 0161-2492. is-referenced-by-count = 143 (as of 2026-08).
- Crossref deposits no abstract for this record; verification of existence/volume/pages complete. Use for the project's translation-theory frame alongside Pollock.

---

## Sub-topic 8 — Additional recent (2023–2026) scholarly items on nissaya

Crossref sweep: `api.crossref.org/works?query.bibliographic=nissaya&filter=from-pub-date:2023-01-01,type:journal-article&rows=30` → **total-results = 1**: Pannabhoga Herngseng 2023 (below). Conclusion: no other 2023–2026 Crossref-indexed journal articles matching "nissaya" exist — important negative result for coverage claims.

New items added this loop:
1. **Ven. Pannabhoga Herngseng (2023)**, "Burmese Nissaya Literature: A Mainstream Monastic Education Learning Method and its Salient Features," *MANUSYA: Journal of Humanities* 26(1) (issued 2023-06-15), DOI **10.1163/26659077-25010027**; open view: brill.com/view/journals/mnya/26/1/article-p1_004.xml. Author: Acting Dean, Shan State Buddhist University, Taunggyi. Key quotables (from abstract/body snippets):
   - nissaya defined as *"a type of translation in which each Pali word is followed by its relevant annotative interpretation"*;
   - cites Dhammasami 2004: *"a nissaya was mainly, and still is, for students rather than scholars"*;
   - Pannabhoga 2020 (his own Mahidol PhD, p.26): *"nissaya is considered a superior type of text especially for scholars and educated people"* while pure translation is deemed inferior;
   - documents **Mandalay vs Pakhokku** training methods and a table of classic nissaya authors (U Budh, Neyin, Nan Kyaung, Bagara, Payagyi, Pyay, Pakhokku, Janakābhivaṃsa's Bhāsāṭīkā series, Ma Oo, Moe Htee); Janakābhivaṃsa's 8-step use of nissaya.
   - Prior-study frame: Tin Lwin 1961 (SOAS MA, Pali-Burmese nissaya of Mahāparinibbāna Sutta); Pruitt 1992 *IJL* 5.4:278–304; Okell 1965.
2. **Ashin Pannatikkha (2025)**, "Pali Buddhism And The Burmese Monarchs: Patronage Of Buddhist Texts In The 19th Century," SSRN posted-content, DOI **10.2139/ssrn.5169532** (preprint; treat accordingly).
3. **Tossaphon Sripum & Trent Walker (2026)** — see Sub-topic 10.
4. Possibly-not-yet-indexed anchor: **Trent Walker (2020)**, "Indic-Vernacular Bitexts from Thailand: Bilingual Modes of Philology, Exegetics, Homiletics, and Poetry, 1450–1850," *JAOS* 140.3: 675–699, DOI **10.7817/jameroriesoci.140.3.0675** (OA author PDF linked from trentwalker.org/publications).
- Semantic Scholar search API: throttled (HTTP 429) throughout session — noted honestly; Crossref + websearch covered the ground.

---

## Sub-topic 9 — Brill Encyclopedia of Buddhism commentary entries

- DOI **10.1163/2467-9666_enbo_com_0038** = "Commentary: Overview"; DOI **10.1163/2467-9666_enbo_com_0039** = "Early Scripture Commentary" — both verified via api.crossref.org/works/{doi} as registered items of *Brill's Encyclopedia of Buddhism Online* (institution: Koninklijke Brill NV; Crossref depositor shows Walter de Gruyter GmbH; type "dataset"; created 2020-03-05). Landing pages: referenceworks.brill.com/doi/10.1163/2467-9666_enbo_COM_0038 / …_0039.
- Fetches of the Brill landing pages returned only navigation shells (entry bodies behind subscription); local grep of the saved HTML found only repeated nav strings.
- Whether these entries mention nissaya / saññā-style glossing: **ยังไม่พบข้อมูลยืนยัน** (paywalled). Recommend citing the print volumes (*Brill's Encyclopedia of Buddhism*, vol. I, Leiden 2015) after physical check.

---

## Sub-topic 10 — Sripum & Walker 2026 Manuscript Studies article — CONFIRMED

Full citation: **Tossaphon Sripum and Trent Walker, "Indic-Siamese Bitexts and Ayutthaya Scribal Culture: Exposition and Exegesis in Three Kham Luang Manuscripts," *Manuscript Studies* 11.1 (2026): 1–35. DOI 10.1353/mns.2026.a990231** (Project MUSE). Listed with [online] [PDF] links at trentwalker.org/publications (CV updated 2026-05-05).

Verified abstract (from doi.org landing, 2026-08-26):
> "This article studies paratextual scribal features from the oldest leporello manuscripts of three Thai Buddhist poems composed for and by the royal court of Ayutthaya: the Pali-Siamese *Nanthopananthasut kham luang* and *Mahachat kham luang* along with the Sanskrit-Siamese *Supritithammarachachadok kham luang*. The manuscripts date from the early eighteenth to early nineteenth centuries and are each composed in a special bilingual format known as the Indic-vernacular bitext. Two kinds of compositional modes govern these works: **exposition**, where phrases in Indic are followed by their rendering in Siamese, and **exegesis**, where a distinct unit of Indic … is cited in full before being subject to a complex form of analysis. The scribal features we focus on—color, script, spacing, and punctuation, along with markers for verse citation, section division, and musical notation—form a unique constellation among all known bitextual manuscripts in Southeast Asia."

Author bios: Sripum — PhD Chulalongkorn (Thai dept.), lecturer Silpakorn; Walker — UC Berkeley PhD; book project *Classical Reading, Vernacular Writing: A Bitextual History of Southeast Asian Buddhism, 1450–1850*.

Companion sources captured:
- Walker, "Material Evidence for Ritual Chant in Early Modern Siam…" *Hualin Int'l J. of Buddhist Studies* 7.1 (2024): 360–400, open PDF: glorisunglobalnetwork.org/wp-content/uploads/2025/03/hualin7.2_walker.pdf (Mahachat kham luang musical notation; Khom-script leporellos).
- Walker, "Bilingualism: Theravāda Bitexts across South and Southeast Asia," in *Routledge Handbook of Theravāda Buddhism* (2022): 271–284, DOI 10.4324/9781351026666-22; pre-typeset PDF on academia.edu (77686749). Thai terminology: **ṕlè toy byañjanaḥ** ('translating the letters', fixed bitext style) vs **ṕlè toy aŕthaḥ** ('translating the meaning'); **cuṇṇīyapad** (Pali *cuṇṇīyapada*, 'words to be cut into pieces'); Khmer equivalents prè ṭoy lök săbd / prè lot prayog. Also: Dhammavilāsa dhammasattha (≤1637/38) contains bitextual nissaya passages (Lammerts 2018: 56–59); Duroiselle 1913 "Talaing Nissayas," *JBRS* 3.2:103–145.
- Peera Panarut, "Ayutthaya Literature in the Hands of Bangkok Scribes and Scholars," diss. Universität Hamburg 2019 (ediss 6137) — downloaded to documents/ ; paratext/chanting-marker apparatus for kham luang manuscripts; NLT MSS nos. for Nanthopanantha Sut Kham Luang (TRPhSs Ms 120) etc.

---

## Synthesis spine now available (for the report, not drafted here)

- Genre mechanics: Okell 1965 "Nissaya Burmese," *Lingua* 15:186–227, DOI 10.1016/0024-3841(65)90013-6 (systematic adaptation to foreign grammar/syntax); Yanson, "On Pali-Burmese Interference" (2002), DOI 10.1163/9789047401308_008; Wright's BSOS review of Jaini's *Abhinava-tīkā (Nissaya)* edition, DOI 10.1017/S0041977X02850078 (PTS 2000).
- Scale: Kirichenko's 800–1,000 Upper-Burmese bilingual works (2024) ↔ OpenLibrary's 111 catalogued nissaya editions ↔ Thai kham luang courtly bitexts (Walker 2020; Sripum & Walker 2026).
- Theory: Pollock vernacularization-as-informed-choice (quotes in §6) + Appiah thick translation (§7) + bitext typology exposition/exegesis (§10) give the project a defensible three-layer frame: linguistic technique (nissaya/plè toy byañjanaḥ), social practice (monastic pedagogy vs court poetics), and culture-power choice (vernacularization).

---

## Key chaining keywords
อัฏฐพยาขยา · นวพยาขยา · พยาขยา · vyākaraṇa · nissaya · nissaya Burmese · Okell 1965 Lingua · Kirichenko Moscow State University 2003 royal chronicles · Dhammasami 2004 Between Idealism and Pragmatism DPhil Oxford · Thalun decree 1636 · Christian Bauer Mon epigraphy · Christian Daniels Lik Tai scripts · Robert Bauer Zhuang · Crosby Khur-Yearn zare Contemporary Buddhism 11.1 2010 14639941003791568 · Shan zare · Zao Amat Long · OpenLibrary nissaya 111 · Upasampadā nissaya 1892 · Pollock vernacularization informed choice · Language of the Gods languageofgodsin0000poll · Appiah thick translation Callaloo 16.4 2932211 · Pannabhoga Herngseng 2023 MANUSYA 26659077-25010027 · Mandalay method Pakhokku method · Janakābhivaṃsa Bhāsāṭīkā · Ashin Pannatikkha SSRN 2025 · Brill Encyclopedia Buddhism Commentary Overview enbo_com_0038 · Early Scripture Commentary enbo_com_0039 · Sripum Walker Manuscript Studies 11.1 2026 · kham luang · Nanthopananthasut kham luang · Mahachat kham luang · Indic-vernacular bitext · exposition exegesis · Walker JAOS 2020 bitexts · plè toy byañjanaḥ · cuṇṇīyapad · Duroiselle Talaing Nissayas 1913 · Lammerts Dhammavilāsa nissaya passages · Peera Panarut Ayutthaya Bangkok scribes · chanting markers Khòm yò
