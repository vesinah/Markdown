# Loop A15 — Bibliographic consolidation + gap hunting (FINAL wide sweep, Phase A)

Date: 2026-08-26. Method note: the `websearch` provider returned HTTP 429 on **every** attempt this session
(retried with 60–90 s cooldowns ≥6 times over ~90 min). All results below were therefore obtained through
**direct API/page fetches**: Crossref REST API, OpenAIRE API, DataCite API, Unpaywall API, OpenLibrary API,
Wikipedia/Wikidata APIs (keyword-only), archive.org advancedsearch, Brill.com, iiif.crossasia.org.
Raw JSON evidence files saved alongside this note (`_crossref_CB_special_issue.json`, `_datacite_nissaya.json`,
`_openalex_nissaya.json` (quota-blocked), `_up_*.json`, etc.).

---

## Sub-topic 1. Kate Crosby — specific discussions of nissaya / bitexts

Verified via Crossref (`api.crossref.org`):

- **Crosby, Kate & Jotika Khur-Yearn, "Poetic Dhamma and the zare: Traditional Styles of Teaching Theravada
  amongst the Shan of Northern Thailand", *Contemporary Buddhism* 11(1) (May 2010).**
  DOI: 10.1080/14639941003791568. Confirmed exactly as flagged by the coordinator (title in Crossref reads
  "POETIC DHAMMA AND THE ZARE…"). Unpaywall: closed, no repository copy.
- **Crosby, Kate, *Theravada Buddhism: Continuity, Diversity and Identity*, Wiley-Blackwell, 2013.**
  Book DOI: 10.1002/9781394260942.
- **Crosby, Dhammasami, Khur-yearn & Skilton, "Streams of the Salween: currents and crosscurrents in the study
  of Shan Buddhism", *Contemporary Buddhism* 10(1) (2009)** — introduction to the Shan special issue.
  DOI: 10.1080/14639940902991881.
- **Skilton, Andrew, Kate Crosby & Pyi Phyo Kyaw, "Terms of Engagement: Text, Technique and Experience in
  Scholarship on Theravada Meditation", *Contemporary Buddhism* (2019).** DOI: 10.1080/14639947.2019.1666342.
  NEW find for this loop; relevant to how nissaya-style guided text teaching intersects meditation technique.
- Adjacent NEW find (same journal exchange space): **Thomas A. Tweed, "Toward the Study of Vernacular
  Intellectualism: A Response", *Contemporary Buddhism* (2010)**, DOI: 10.1080/14639947.2010.530073.

Exact page-level passages inside Crosby 2013 discussing nissaya/bitexts: **ยังไม่พบข้อมูลยืนยัน** (book content
paywalled; Wiley chapter DOIs not exposed). Chain for Phase B: Crosby 2013 ch. on "Buddhist literature"/textual
transmission; Zare article full text.

## Sub-topic 2. Jotika Khur-Yearn

VERIFIED (DataCite record, publisher field = "School of Oriental and African Studies, University of London",
resourceType = **Thesis**, year 2012):

- **Khur-Yearn, Jotika (2012). *The Poetic Dhamma of Zao Amat Long's Mahāsatipaṭṭhāna Sutta and the Place of
  Traditional Literature in Shan Theravada Buddhism.* PhD thesis, SOAS, University of London.**
  DOI: 10.25501/soas.00014574. Landing: https://soas-repository.worktribe.com/output/400489
  → Coordinator's guess "Oxford?" is WRONG; it is **SOAS**. Thesis centers Zao Amat Long's Shan Mahāsatipaṭṭhāna
  (the "poetic dhamma"/zare tradition).
- Possible SECOND thesis-length deposit: **"Mapping Classical Shan Literature"** (Khur-Yearn, type Thesis, 2015),
  DOI: 10.17613/m6z699 (https://works.hcommons.org/doi/10.17613/M6Z699). Nature unclear (second doctorate?
  mislabeled article?) — Phase B check.
- Articles (all Crossref-verified):
  - "Richness of Buddhist Texts in Shan Manuscripts: Seven Shan Versions of Satipaṭṭhāna Sutta",
    *Contemporary Buddhism* 10(1) (2009), DOI: 10.1080/14639940902968954.
  - "Traditional and Modern Meditation Practices in Shan Buddhist Communities", *Contemporary Buddhism*
    19(1–2) (2018), DOI: 10.1080/14639947.2018.1536848 (affiliation listed: SOAS).
  - "The preservation of lik-luong poetic literature among the Shan communities of Northern Thailand",
    *Asian Review* (Chula) 22(1) (2009), DOI: 10.58837/chula.arv.22.1.4.
  - Review of Sao Sanda Simms, *Great Lords of the Sky*, JRAS (2018), DOI: 10.1017/S1356186318000500.

## Sub-topic 3. Khammai Dhammasami

- **Book (verified via three independent reviews in OpenAIRE/Crossref): Khammai Dhammasami,
  *Buddhism, Education and Politics in Burma and Thailand: From the Seventeenth Century to the Present*,
  London: Bloomsbury, 2018 (BSOAS review DOI: 10.1017/S0041977X19000600 prints ISBN 978 1 3500 5424 0 and
  subtitle "From the 18th Century"; reviews in Religions of South Asia DOI: 10.1558/rosa.19282 and
  *History of Education* DOI: 10.1080/0046760X.2019.1638455 print "Seventeenth").** Minor subtitle discrepancy
  between review copies — check Bloomsbury colophon in Phase B.
- Article: **"Growing but as a sideline: an overview of modern Shan monastic education",
  *Contemporary Buddhism* 10(1) (2009), DOI: 10.1080/14639940902968897** (Unpaywall: closed; author string
  "Venerable Khammai Dhammasami").
  ⚠ Correction to coordinator's brief: the piece often paired with his name, *"Buddhism in Myanmar: A Short
  History"*, is by **Roger Bischoff** (BPS Wheel 399/401, 1995) — NOT Dhammasami.
- Oxford DPhil exact title/year: **ยังไม่พบข้อมูลยืนยัน** (ORA returned 403/500 to all fetch styles; the Bloomsbury
  book is universally described as based on his Oxford doctoral research — confirm via ORA in Phase B).

## Sub-topic 4. Contemporary Buddhism vol 10 special issue — full contents SOLVED

The special issue is **Contemporary Buddhism Vol. 10, Issue 1 (May 2009): Shan Buddhism**, introduced by
Crosby/Dhammasami/Khur-yearn/Skilton ("Streams of the Salween", 10.1080/14639940902991881).
Reconstructed TOC (Crossref journal query, evidence file `_crossref_CB_special_issue.json`, 30 records):

| Item | Author(s) | DOI |
|---|---|---|
| Streams of the Salween (intro) | Crosby, Dhammasami, Khur-yearn, Skilton | 10.1080/14639940902991881 |
| Growing but as a sideline (Shan monastic education) | Khammai Dhammasami | 10.1080/14639940902968897 |
| Richness of Buddhist Texts in Shan Manuscripts: Seven Shan Versions of Satipaṭṭhāna Sutta | Jotika Khur-yearn | 10.1080/14639940902968954 |
| Shan tribute relations in the nineteenth century | Susan Conway | 10.1080/14639940902968889 |
| Khamti Shan Buddhism and Culture in Arunachal Pradesh | Siraporn Nathalang | 10.1080/14639940902969184 |
| Tai Khun Buddhism and Ethnic–Religious Identity | Klemens Karlsson | 10.1080/14639940902968939 |
| Stūpa Worship: The Early Form of Tai Religious Tourism | Pimmada Wichasin | 10.1080/14639940902969168 |
| The changing nature of Shan political ritual…Maehongson | Nicola Tannenbaum | 10.1080/14639940902969101 |
| Rite of Passage or Ethnic Festival? Shan novice ordinations | Nancy Eberhardt | 10.1080/14639940902968913 |
| Recital of the Tham Vessantara-jātaka … Kengtung | Sengpan Pannyawamsa | 10.1080/14639940902969127 |
| Pu Khwan Khao worship of Dehong Tai in Yunnan | Arthid Sheravanichkul | 10.1080/14639940902969143 |
| Archaeology of the Shan Plateau | Elizabeth Moore | 10.1080/14639940902969044 |
| Central Position of Shan/Tai Buddhism for Wa and Kayah | Chit Hlaing (F.K. Lehman) | 10.1080/14639940902968871 |
| Buddhist Orthodoxy or Ritual Excess in a Shan Novice Ordination | Jane M. Ferguson | 10.1080/14639940902968921 |
| Shan Buddhist art on the market | Catherine Raymond | 10.1080/14639940902916219 |

Note: the **Zare article is 11(1), May 2010** (10.1080/14639941003791568), i.e. NOT part of the 10(1) special issue.
Especially chain-worthy for us: Pannyawamsa (Kengtung Tham Vessantara recital) and Dhammasami/Khur-yearn pieces.

## Sub-topic 5. Alexey Kirichenko — dissertation verification

- Verified publications (Crossref/OpenAIRE) confirming him as THE Burmese monastic-history scholar:
  - "From Thathanadaw to Theravāda Buddhism…" in *Casting Faiths* (Palgrave, 2009), DOI: 10.1057/9780230235458_2.
  - "From Ava to Mandalay: Toward Charting the Development of Burmese Yazawin Traditions", *Journal of Burma
    Studies* (2009), DOI: 10.1353/jbs.2009.0001.
  - "The Making of the Culprit: Atula Hsayadaw Shin Yasa…", *JBS* (2011), DOI: 10.1353/jbs.2011.0013.
  - "The Itineraries of 'Sīhaḷa Monk' Sāralaṅkā…", in *Buddhist and Islamic Orders in Southern Asia*
    (U Hawai‘i Press, 2018), DOIs: 10.1515/9780824877200-004 and 10.2307/j.ctvsrgsm.6.
  - **"The thathanabaing project"**, in *Theravada Buddhism in Colonial Contexts* (Routledge), DOI:
    10.4324/9781315111889-8.
- Dissertation itself (existence/title/institution/year): **ยังไม่พบข้อมูลยืนยัน**. ORA (Oxford) 403/500-blocked,
  MUSE author bios blocked, Wikipedia/Wikidata silent, ProQuest/EThOS inaccessible. Lead to chase in Phase B:
  common bios place his doctorate at Oxford (D.Phil., Oriental Studies) on precolonial Burmese monastic
  education/literacy — must be confirmed against ORA before citing.

## Sub-topic 6. Christian Bauer (Tai scripts/manuscripts) — publication list

**ยังไม่พบข้อมูลยืนยัน** through any accessible channel this session:
- Crossref author+bibliographic queries (Bauer/Tai script/manuscript/Lanna/Khamti): only homonyms
  (Christian W. Bauer physicist, Robert S. Bauer Zhuang, Craig Bauer cryptologia…) — the Tai-script scholar's
  output sits in edited volumes/non-Crossref venues.
- OpenLibrary au:"Christian Bauer": 3 irrelevant hits. Wikidata wbsearchentities: empty. archive.org creator
  search: 10 irrelevant hits. badw.de team page: 404.
Leads for Phase B: Bavarian Academy of Sciences (BAdW) staff/project pages; EAP1432 trāy catalog credits;
festschrift/edited-volume indexes; JSS (*Journal of the Siam Society*) archives (siamese-heritage.org).

## Sub-topic 7. Theses / works TITLED on nissaya

- **OpenLibrary `q=nissaya`: 111 items**, overwhelmingly Burmese-language primary nissaya texts (great corpus
  evidence, e.g.: *Jinālaṅkāra nissaya* (2005, Buddharakkhita Mahathera); *Khuddasikkhā nissaya sacʻ nhaṅʻʹ
  Mūlasikkhā nissaya sacʻ* (1929); *Sutʻ sīlakkhanʻ ʼaṭṭhakathā nissaya* (1967); *Vinayālaṅkāraṭīkā nissaya*
  (1977); *Visuddhimagʻ nissaya* (1965); *Bālāvatāra nissaya* (1925, Dhammakitti); *Upasampadā nissaya* (1892);
  *Netti ʼaṭṭhakatā nissaya* (2006); *Padasaṅgaha nissaya* (1917); *Vimativinodanīṭīkā nissaya kyamʻʺ* (1975);
  several *Saddanīti* nissayas). Full JSON captured in session log; work keys under openlibrary.org/works/OL39…
- Burmese printed anthology (via OpenAIRE/JAIRO): **Kunʿʺ bhoṅʿ khetʿ mranʿ mā nissaya myāʺ** (comp. Ūʺ Ññvanʿʹ
  Moṅʿ) — "Kon-bhouk khet Myanma nissaya mya", modern collected Burmese nissayas.
- Academic MA/PhD theses titled "nissaya": none surfaced via OpenAIRE (27 keyword hits scanned), DataCite
  (17 hits, mostly noise), or OpenLibrary. OpenGrey defunct; ProQuest paywalled; Thai TDC unreachable this
  session → **gap: dedicated theses on nissaya remain to be hunted in institutional repos (esp. Thai/Japanese/
  Myanmar universities)**.

## Sub-topic 8. "nisai" in Lao manuscripts (DLLM ancillary term) — SOLVED with hard evidence

- **Staatsbibliothek zu Berlin / CrossAsia catalog records (DOI prefix 10.57781), published 2010, feed the
  Digital Library of Lao Manuscripts (DLLM; laomanuscripts.net now served under CrossAsia Digital) — and their
  romanized titles use "nisai" exactly as an ancillary/genre term.** DataCite `query="nisai"` returns **454 records**.
  Sample (verified records):
  - DOI 10.57781/jd4x-y176 — "Nisai visutthimak mat cet / phuk si / phuk paet / phuk kao / phuk sip"
    (→ Visuddhimagga-nissaya fascicles); IIIF manifest: https://iiif.crossasia.org/s/dllm/manifests/25047
  - "Aphitham cet khamphi … nisai aphithammasangkhini" (→ Abhidhammasaṅgahaṇī-nissaya)
  - "Nisai pulana tika matika attha / thatukatha pakalana" (→ Pūraṇa-ṭīkā nissaya)
  - "Nisai samat / munla kaccainyana sut / kit / aphithan sap"; "Nisai thao pha lammalat mat ton/mat sam /
    Pha lak pha lam"; "nisai phanya si sao"; "nisai visutthimak mat cet phuk nueng" etc.
- Interpretation for our typology: "nisai" functions in Thai/Lao manuscript cataloging exactly like Burmese
  "nissaya" — a label for word-by-word Pali-to-vernacular rendering attached to canonical/commentarial texts.
  (Also note DLLM homepage fetch confirms hosting: "Digital Library of Lao Manuscripts – CrossAsia Digital".)

## Sub-topic 9. Recent (2020–2026) publications mentioning nissaya

- **Pannabhoga Herngseng, "Burmese Nissaya Literature: A Mainstream Monastic Education Learning Method and its
  Salient Features", *MANUSYA: Journal of Humanities* 26(1) (2023), pp. 1–…, GOLD OA CC-BY (Brill/De Gruyter).**
  DOI: 10.1163/26659077-25010027. PDF downloaded (see documents/). Author: Acting Dean, Tipitaka Studies,
  Shan State Buddhist University, Taunggyi. This is the single most current synthetic statement on nissaya
  pedagogy and is open access.
- **Maho Gnanaloka, "Textual transmission of the vajirabuddhiṭīkā: a comparative analysis of nidānavaṇṇanā
  Sinhalese and Burmese editions" (2025)**, DOI: 10.65646/3rc20dmg5a0847 — NOTE: prefix 10.65646 = Open
  University of Sri Lanka repository (IRC-OUSL conference paper), NOT JPTS. OA copy exists at OUSL repo but the
  bitstream endpoint currently errors (Cocoon exception) — metadata verified via Unpaywall/Crossref.
- Crossref `query.bibliographic=nissaya` (all years) totals only **5** records (Okell 1965; Okell's review of
  Pruitt; Yamagiwa 2001; Pannabhoga 2023; Wright 2002 review) — i.e. Crossref coverage of the field is thin;
  keyword chasing must go through repositories/catalogs, not Crossref alone.
- Bonus finds (older but newly surfaced, both GOLD OA on Brill *MANUSYA*):
  - **Justin McDaniel, "The Curricular Canon in Northern Thailand and Laos", *MANUSYA* 5(4) (2002)**,
    DOI: 10.1163/26659077-00504003 — curricular canon of monastic schools across Lan Na/Laos.
  - **Anant Laulertvorakul, "Paṭhamasambodhi in Nine Languages: Their Relation and Evolution", *MANUSYA* 6(1)
    (2003)**, DOI: 10.1163/26659077-00601002 — multilingual Paṭhamasambodhi tradition (Pali/Mon/Shan/Lao/
    Khmer/Thai…) — direct comparative-text chain for our bitext project.
  - Japanese scholarship surfaced via OpenAIRE: Otani University palm-leaf catalogue study pt. 5 covering Pali
    ṭīkā/ganthantara/**nissaya (逐語訳)** in Burmese script (大谷大学図書館所蔵パーリ語貝葉写本の文献的研究 5).

## Sub-topic 10. Encyclopedic/reference entries

- **Brill's Encyclopedia of Buddhism Online** has dedicated commentary-genre entries (existence verified via
  Crossref; content behind Brill CloudFront so internal nissaya coverage unverified):
  - "Commentary: Overview", DOI: 10.1163/2467-9666_enbo_com_0038
  - "Early Scripture Commentary", DOI: 10.1163/2467-9666_enbo_com_0039
- **Oskar von Hinüber, *A Handbook of Pali Literature*, De Gruyter**, book DOI: 10.1515/9783110814989
  (1996 imprint per Crossref) — standard reference handbook; whether its commentarial/subcommentarial chapter
  treats nissaya explicitly: ยังไม่พบข้อมูลยืนยัน.
- British Library reference/catalog DOIs (DataCite): *Catalogue of the Pāli printed books in the India Office
  Library* — 10.23636/af57-s116; Patricia Herbert, *The making of a collection: Burmese manuscripts in the
  British Library* (1989) — 10.23636/738.
- Routledge Handbook with a nissaya-relevant entry: **ยังไม่พบข้อมูลยืนยัน** this session.

---

## Documents downloaded (documents/)

1. `Bode_1909_Pali_Literature_of_Burma.pdf` — Bode, *The Pali Literature of Burma* (1909), full scan,
   archive.org id paliliteratureof00bode (7.1 MB).
2. `Pannabhoga_2023_Burmese_Nissaya_Literature_MANUSYA.pdf` — gold-OA CC-BY Brill PDF (10.3 MB)
   (+ `…_fulltext.html` fallback capture, 785 KB).
3. `McDaniel_2002_Curricular_Canon_NThailand_Laos.pdf` — Brill OA PDF (12.4 MB).
4. `Laulertvorakul_2003_Pathamasambodhi_Nine_Languages.pdf` — Brill OA PDF (6.7 MB).

## Corrections to coordinator's brief (for the master ledger)

1. Khur-Yearn's doctorate = **SOAS 2012**, not Oxford.
2. CB special issue = **vol 10(1), May 2009** (Shan Buddhism); the Zare article is 11(1) 2010.
3. Dhammasami's article = "Growing but as a sideline… **Shan** monastic education"; "Buddhism in Myanmar:
   A Short History" belongs to Roger Bischoff.
4. DOI prefix 10.65646 = OUSL repository, not JPTS.

## Gaps / unverified (carry into Phase B)

- Exact nissaya/bitext passages in Crosby 2013 and Zare article bodies (T&F/Wiley paywalls).
- Kirichenko dissertation title/institution/year (ORA, EThOS successor, ProQuest when accessible).
- Christian Bauer verifiable publication list (BAdW, JSS archives, EAP credits).
- Dedicated MA/PhD theses titled "nissaya" (Thai TDC, Japanese university repos, Myanmar universities).
- Whether BEB "Commentary" entries discuss nissaya explicitly.
- Dhammasami DPhil title/year (ORA); subtitle discrepancy of his 2018 Bloomsbury book.
- Nature of "Mapping Classical Shan Literature" (Khur-Yearn 2015 hcommons deposit typed "Thesis").

# Key chaining keywords

nissaya; nisai; nisay; nissaya mya; zare; poetic dhamma; Zao Amat Long Mahāsatipaṭṭhāna; seven Shan Satipaṭṭhāna
versions; lik luong/lik-long; Streams of the Salween; growing but as a sideline; monastic education Shan/Burma;
curricular canon Northern Thailand Laos; Paṭhamasambodhi nine languages; Tham Vessantara Kengtung recital;
vajirabuddhiṭīkā nidānavaṇṇanā; Subodhālaṅkāra Abhinava-ṭīkā (Nissaya) Jaini; cattāra-nissaya Vinaya (Yamagiwa);
Nissaya Burmese Okell 1965; Étude linguistique de nissaya birmans Pruitt; DLLM CrossAsia nisai manifests;
iiif.crossasia.org/s/dllm/manifests; 逐語訳 nissaya Otani; Commentary: Overview BEB; thathanabaing project;
vernacular intellectualism Tweed; Terms of Engagement Skilton Crosby Pyi Phyo Kyaw
