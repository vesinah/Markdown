# Loop 29 Findings — Islamic-world interlinear translation traditions (Persian, Ottoman Turkish, Judeo-Islamic)

Date of research: 2026-08-26
Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_29

## Queries executed

### websearch tool (Exa backend)
- All attempts returned HTTP 429 for the entire session (8+ tries spread over ~40 minutes, EN/TR terms incl. "Persian interlinear Quran translation manuscript", "Ottoman tefsirli Kur'an", "Chagatai Turkic interlinear Quran"). Topic covered via fallbacks below.

### DuckDuckGo lite HTML (via webfetch; worked until captcha'd late in session)
1. `Persian interlinear Quran translation manuscript Sultan Abu Ishaq Inju` -> Princeton DPUL, Harvard Art Museums, LOC 2019714465, Met 452944 hits
2. `"Abu Ishaq Inju" Quran 757 AH Persian translation` -> only biographical pages; manuscript claim NOT verified
3. `Quran of Sultan Abu Ishaq Injuid interlinear Persian translation manuscript Shiraz` -> fihrist.org.uk St Andrews ms18; Khalili QUR 914
4. `oldest Persian Quran translation manuscript Tashkent Isfahan codex word-for-word` -> IQNA/Tehran Times Zaferani Qur'an news
5. `Ottoman "tefsirli" Kur'an marginal Turkish translation manuscript tevil` -> mostly modern sites; led to Wilson/Hughes/Zengin items via adjacent query
6. `first printed Turkish translation Quran Ottoman 19th century marginal interlinear hüsrev` -> Marginalia review (Hughes), Duke dissertation, Cambridge IJMES PDF, Belleten article
7. `Judaeo-Arabic manuscript interlinear Hebrew translation Geniza Saadia Tafsir layout` -> mdr-maa.org, Friedberg FGP, Princeton Geniza Lab, JCSR Saadia article
8. `aljamiado manuscript interlinear gloss Arabic script Romance translation between lines` -> de Castilla OAPEN chapter; Morisco Qur'an leads
9. `Ibn Tibbon translation Judaeo-Arabic Hebrew interlinear glosses manuscripts Maimonides` -> Fraenkel book page; Jewish Encyclopedia "Translations"
10. `Corpus Coranicum manuscript database Berlin-Brandenburg Academy mushaf digital project` -> BBAW + corpuscoranicum.org verified
11. `Nuria de Castilla "Aljamiado Translation" Morisco Quran "Journal of Quranic Studies" 2020` -> no results (DDG), resolved via Crossref instead
12. `Peacock "Medieval Eastern Turkish Interlinear Translation" ... PDF` -> journals.uio.no JAIS page

### Crossref REST API (worked all session)
- search: interlinear Persian Quran; Ottoman Turkish tefsirli mushaf; Shah Wali Allah; Judeo-Arabic Geniza glossed; Persian Quran interlinear word order; Saadia Tafsir Pentateuch; Judaeo-Arabic Hebrew glosses interlinear; Ottoman Quran Turkish interlinear survey; Aljamiado Morisco Quran Castilla; First Translations Quran Modern Turkey Wilson
- DOI detail pulls: 10.5617/jais.12693; 10.1111/muwo.12481; 10.29228/sobider.49215; 10.31589/joshas.488; 10.29228/sobider.72337; 10.1163/9789004235953_lw-029; 10.1515/9783110639063-005; 10.1017/S0020743809091132; 10.1086/730515; 10.4324/9780203327715-29; 10.1163/9789004228047_004; 10.1163/9789004661714_015; 10.1163/2212-4241_ehll_ehll_com_00000881; 10.1163/9789004223196.srg-417; 10.3366/jqs.2020.0439; 10.37879/belleten.2023.527

### OpenAlex API
- HTTP 429 on every attempt this session (blocked).

### Direct fetches (webfetch / curl)
- OK: journals.uio.no (JAIS article page); iqna.ir (Zaferani full text); khalilicollections.org (QUR 914); metmuseum.org (folio 452944); belleten.gov.tr (Zengin abstract); isam.org.tr/en (via curl); library.oapen.org (Creating Standards full-book TXT); cambridge.org core PDF endpoint (returned article landing-page PDF wrapper with extract + footnotes)
- BLOCKED: loc.gov (HTTP 403 direct and via r.jina.ai proxy - CAPTCHA); hal.science (Anubis anti-bot wall); euppublishing.com (403); degruyter.com chapter PDF (empty response); mojeek.com and searx.be (anti-bot); Bing RSS (spam results)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| A.C.S. Peacock | Medieval Eastern Turkish Interlinear Translations: Their Manuscripts, Audience and Persian Background (JAIS 25.3) | 2025 | https://doi.org/10.5617/jais.12693 | Full OA census of 8 Eastern Turkish interlinear Qur'an mss; trilingual Rylands codex; single Ur-text hypothesis 10th-12th c.; Samanid Tabari translation as Persian model; elite/Sufi audience |
| N.A. Khan | Layers of Authority in Shah Wali Allah's Persian Interlinear Qur'an Translation (Muslim World 113) | 2024 | https://doi.org/10.1111/muwo.12481 | 18th-c. India: "under-the-line" vs "succinct summary" models combined; Arabic kept above line to affirm inimitability |
| E. Senmez | One of the Earliest Translations of Qur'an in Turkic: The Copy of Uzbekistan (Turkic-Persian Interlinear) (JOSHAS 6) | 2020 | https://doi.org/10.31589/joshas.488 | Uzbekistan copy with double Turkic-Persian interlinear rendering |
| E. Senmez | Karahanid Turkish Interlinear Quran Translation (Rylands Copy): Chester Beatty folios (The Journal of Social Sciences 66) | 2023 | https://doi.org/10.29228/sobider.72337 | Eckmann's identification of two Rylands lost folios among Chester Beatty fragments |
| T. Takoglu | Phrases in the First Interlinear Translation of the Quran into Old Anatolian Turkish (JOSBIDER 50) | 2021 | https://doi.org/10.29228/sobider.49215 | Old Anatolian Turkish interlinear translation: possessive-phrase syntax study |
| M.B. Wilson | The First Translations of the Qur'an in Modern Turkey (1924-38), IJMES 41.3 | 2009 | https://doi.org/10.1017/S0020743809091132 | Public excerpt: dozens of extant interlinear Turkic Qur'an mss 15th-19th c.; footnotes list Karabacak 1994, Mehmed b. Hamza ed. Topaloglu 1976, Suleymaniye Yazma Bagislar 4845, Ozel 123 (vowel-marked interlinear) |
| Z.S. Zengin | Osmanli Devleti'nde Kur'an Basininin Ilk Safhasi (Belleten 87.309) | 2023 | https://doi.org/10.37879/belleten.2023.527 | Ottoman print era: 1727 no-religious-books condition; 1873 decision; first legal state mushaf print 1874 under Ministry of Education |
| N. de Castilla | Uses and Written Practices in Aljamiado Manuscripts (in Creating Standards, De Gruyter) | 2019 | https://doi.org/10.1515/9783110639063-005 | Standardized Arabic-script orthography for Spanish 15th-17th c.; Aragon/Castile production; troves (Almonacid de la Sierra etc.) |
| N. de Castilla | An Aljamiado Translation of the "Morisco Qur'an" and its Arabic Text (c. 1609), JQS 22.3 | 2020 | https://doi.org/10.3366/jqs.2020.0439 | Three linked copies: Arabic Aix 1367; Aljamiado BRAH T5; bilingual Arabo-Aljamiado BRAH T19; single copyist; stemma; c. 1609 expulsion context |
| E.-M. Wagner | Writing Judaeo-Arabic (in Creating Standards) | 2019 | https://library.oapen.org/handle/20.500.12657/25043 | Three orthographic phases of Judaeo-Arabic; Hebraisation from 12th-13th c.; genre divergence |
| B.J. Dikken | Middle Arabic and Sa'adya Gaon's Arabic Translation of the Pentateuch in Jewish/Samaritan/Coptic/Muslim mss (Brill) | 2012 | https://doi.org/10.1163/9789004228047_004 | Saadia Tafsir transmission across confessional manuscript traditions |
| C. Fraenkel | From Maimonides to Samuel ibn Tibbon | 2019 | https://carlosfraenkel.com/books/from-maimonides-to-samuel-ibn-tibbon/ | ~100 glosses attributed to Ibn Tibbon recovered from 145 mss of his Hebrew Guide translation |
| IQNA / Tehran Times | Zaferani Qur'an facsimile unveiled at NLAI | 2026 | https://iqna.ir/en/news/3498469/ ; https://www.tehrantimes.com/news/528675/ | Dated 546 AH/1151-52 Rey copy at Reza Abbasi Museum; oldest complete dated Persian-translated Qur'an; interlinear format explicitly described |
| Metropolitan Museum | Folio from a Qur'an Manuscript 1979.295.6 | 14th c. | https://www.metmuseum.org/art/collection/search/452944 | 7 lines muhaqqaq Arabic with interlinear Persian naskh beneath each line; India or Iran type |
| Khalili Collections | Single-volume Qur'an QUR 914 (Shiraz, 1844/1856) | n.d. | https://www.khalilicollections.org/collections/islamic-art/khalili-collection-islamic-art-single-volume-quran-qur914/ | Qajar convention: naskh Arabic, interlinear nasta'liq Persian, marginal Shi'ite virtues-of-surahs in cartouches with own colophon |
| Corpus Coranicum (BBAW) | Manuscripta Coranicum database | 2007-2024 project | https://corpuscoranicum.org/en/manuscripts ; https://www.bbaw.de/en/research/corpus-coranicum | >50,000 page entries, >1500 early Qur'an fragments, >95 collections (beta) |
| ISAM | Centre for Islamic Studies (Islam Arastirmalari Merkezi), Istanbul | current | https://www.isam.org.tr/en | Diyanet Encyclopedia of Islam (16,194 articles); specialized library; hosted International Symposium on Qur'anic Manuscripts (2026) |
| Al-Furqan Islamic Heritage Foundation | Digital manuscript library | current | https://digitallibrary.al-furqan.com/manuscripts | >83,000 records digitised from >80 libraries in 18 countries |

## Key findings (with URLs)

1. Persian tarjuma anchor witness now dated and explicit: the "Zaferani Qur'an", copied 546 AH (1151-52 CE) by Abolfazl Zaferani in Rey (Reza Abbasi Museum, Tehran), is the oldest known complete, precisely dated Persian-translated Qur'an, in INTERLINEAR format ("the Persian translation written in smaller script between the lines of the Arabic text"), its translation tied to the 11th-c. commentary tradition of Abu Bakr Atiq Nishapuri (Surabadi). Facsimile unveiled July 2026 after an 8-year NLAI project. https://iqna.ir/en/news/3498469/centuries-old-persian-quran-translation-unveiled-in-tehran ; https://www.tehrantimes.com/news/528675/Ancient-Persian-translated-Quran-unveiled-at-Iran-National-Library
2. Peacock 2025 (OA, full text harvested) reframes the field: interlinear translation is FIRST ATTESTED in Central Asia in the 10th-11th c.; Persian and Turkish interlinear Qur'an traditions are two closely linked strands of one vernacularisation movement under Samanids/Qarakhanids, modelled on the Samanid Persian Tabari translation; eight Eastern Turkish interlinear Qur'an mss now known (Rylands MSS Arabic 760-773 trilingual, c.1335/late 14th c., waqf of amir Aytamish in Cairo; TIEM 73; Hekimoglu Cami 2 of 762/1363; St Petersburg S 197; three Mashhad Astan-i Quds codices; Tashkent ms); a single Transoxianan Ur-text (10th-12th c.) is the scholarly consensus. https://doi.org/10.5617/jais.12693
3. Layout conventions documented across periods: 14th-c. Iran/India folios place small naskh Persian beneath each line of large muhaqqaq Arabic (Met 1979.295.6, https://www.metmuseum.org/art/collection/search/452944; cf. LOC Tabriz folio c.1250-1350, https://www.loc.gov/item/2019714465/ [page blocked this session; data from indexed snippet]); Qajar Shiraz Qur'ans use nasta'liq interlinear Persian plus marginal Shi'ite surah-virtue texts with separate colophons (Khalili QUR 914, https://www.khalilicollections.org/collections/islamic-art/khalili-collection-islamic-art-single-volume-quran-qur914/); Harvard 1959.149 (17th-19th c.) and Princeton DPUL ft8490931 add further specimens (https://harvardartmuseums.org/collections/object/216475 ; https://dpul.princeton.edu/islamicmss/catalog/ft8490931).
4. Authority theology of the format: Khan 2024 shows Shah Wali Allah (d. 1762/3) deliberately amalgamated "under-the-line" word-for-word and "succinct summary" interlinear models so that lay Muslims recite Arabic while understanding Persian, affirming the inimitability doctrine - i.e., interlinearity keeps translation subordinate to the revealed Arabic. https://doi.org/10.1111/muwo.12481
5. Ottoman tradition quantified: per Wilson's IJMES article (public excerpt), Turkic Qur'an translations go back to at least the 13th-14th c. with DOZENS of extant interlinear mss from the 15th-19th centuries, usually written below the calligraphic Arabic so the format implies no replacement of the Arabic; named witnesses include Suleymaniye Yazma Bagislar 4845 and the vowel-marked interlinear Ozel 123, with editions by Karabacak (Harvard 1994) and Mehmed b. Hamza ed. Topaloglu (1976). https://doi.org/10.1017/S0020743809091132 ; Old Anatolian Turkish case study: https://doi.org/10.29228/sobider.49215
6. Ottoman print era: printing was permitted from 1727 only on condition religious books be excluded; after the 1873 decision the first legal, state-supervised mushaf was printed in 1874 under the Ministry of Education (Zengin, Belleten 2023) - the backdrop against which tefsirli/mealli print Qur'ans emerged. https://doi.org/10.37879/belleten.2023.527 ; broader narrative in Hughes's review of Wilson's monograph: https://themarginaliareview.com/making-the-quran-turkish-translation-and-power-in-the-ottoman-empire-by-micah-hughes/
7. Aljamiado parallel verified: Morisco bilingual Arabo-Aljamiado Qur'an (Real Academia de la Historia BRAH T19) alongside pure Aljamiado (T5) and Arabic (Aix 1367) copies, all c. 1609 and linked to one copyist - Castilian aligned to Arabic for a community losing Arabic competence (de Castilla JQS 22.3, 2020); her Creating Standards chapter documents the standardized Arabic-script orthography behind such books. https://doi.org/10.3366/jqs.2020.0439 ; https://doi.org/10.1515/9783110639063-005
8. Judeo-Islamic side: Saadia Gaon's Tafsir circulated across Jewish, Samaritan, Coptic Christian AND Muslim manuscripts (Dikken 2012, https://doi.org/10.1163/9789004228047_004; Leiden Or. 0215 specimen, https://doi.org/10.1163/9789004223196.srg-417); Judaeo-Arabic itself passed through phonetic -> Classical (9th c.) -> Hebraised phases (Wagner 2019, OAPEN); the Ibn Tibbon school's glossing culture is documented by Fraenkel's edition of ~100 Ibn Tibbon glosses recovered from 145 mss of the Hebrew Guide (https://carlosfraenkel.com/books/from-maimonides-to-samuel-ibn-tibbon/); Geniza-scale digital corpora exist (Friedberg FGP: >100 Judaeo-Arabic works/~4M words, https://fgp.genizah.org ; Princeton Geniza Lab ~400,000 fragments, https://genizalab.princeton.edu).
9. Digital infrastructure for future loops: Manuscripta Coranicum (beta) indexes >50,000 page entries / >1,500 early fragments / >95 collections (https://corpuscoranicum.org/en/manuscripts); ISAM Istanbul runs the Diyanet Encyclopedia of Islam and hosted an International Symposium on Qur'anic Manuscripts in 2026 (https://www.isam.org.tr/en); Al-Furqan digital library holds >83,000 catalogue records (https://digitallibrary.al-furqan.com/manuscripts). NOTE: the acronym in the loop brief ("TIEM Islam Research Center") resolves differently: TİEM = Türk ve İslam Eserleri Müzesi (Turkish and Islamic Arts Museum), whose MS 73 is a key Eastern Turkish interlinear codex; the research center in Istanbul is İSAM.
10. Comparative frame for the chapter: the whole JAIS 25.3 (2025) themed issue "Across the Muslim World: A Comparative Perspective" (eds Ricci & Lukman, https://journals.uio.no/JAIS/issue/view/995) treats interlinear translation comparatively (Arabic-Malay, Javanese utawi, Swahili mawlid, Mindanao) - free comparative scaffolding beyond the Islamic heartlands.

## Remaining gaps
- "Qur'an of Sultan Abu Ishaq Inju" (757 AH) as a Persian-interlinear codex: NOT VERIFIED this session (ยังไม่พบข้อมูลยืนยัน) - searches returned only biographical pages on the last Injuid ruler.
- Early PERSIAN interlinear "Tashkent/Isfahan codices": unverified as Persian-interlinear witnesses; the Tashkent manuscript verified here belongs to the trilingual EASTERN TURKIC tradition (Peacock). Needs Persian-language codicology literature.
- Suggested scholars from brief: work by "M. Bedevian" on Persian Qur'an translation - nothing found in Crossref (ยังไม่พบข้อมูลยืนยัน); specific Schimmel study of interlinear Qur'ans - not verified this session.
- Ottoman print-era guesses "Müntekhab" and "Hüsrev" as early printed tefsirli editions: not verifiable this session (ยังไม่พบข้อมูลยืนยัน); verified print-era anchors are Zengin 2023 and Wilson 2009/2014.
- Hebrew INTERLINEAR glosses between lines of Judaeo-Arabic base texts (as opposed to marginal glosses on Hebrew translations): no direct source captured this session; check Geniza Bible fragments and Vidro/Olszowy-Schlanger work next loop.
- Chagatai non-Qur'anic interlinear translations: mentioned by Peacock but not itemized; needs Central Asian library catalogues.
- Khan 2024 and Rüstem 2024 consulted at abstract level only (paywalled).
- LOC object pages (Tabriz interlinear Qur'an; Bihari-script interlinear Qur'an) blocked (403/CAPTCHA) - data taken from search snippets only.

## Blocked sources (honest record)
- websearch tool: HTTP 429 all session (never recovered)
- OpenAlex API: HTTP 429 all session
- loc.gov: 403 direct; r.jina.ai proxy served CAPTCHA
- hal.science: Anubis JavaScript proof-of-work wall
- euppublishing.com: 403 (JQS article page; metadata obtained via Crossref)
- degruyter.com chapter PDF: zero-byte response (chapter text obtained via OAPEN mirror)
- duckduckgo lite: began serving select-the-ducks CAPTCHA after ~10 queries
- mojeek/searx.be/Bing RSS: anti-bot walls or spam results

## Files created this loop
- findings.md (this file)
- documents\[1151]-Zaferani-quran-persian-interlinear.md
- documents\[2025]-Peacock-eastern-turkish-interlinear.md
- documents\[2009]-Wilson-first-translations-quran-turkey.md
- documents\[2019]-deCastilla-aljamiado-manuscripts.md
- documents\[2019]-Wagner-writing-judaeo-arabic.md
- documents\[2024]-Khan-shah-wali-allah-interlinear.md
