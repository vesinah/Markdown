# Loop 16 Findings — Islamic-era Indonesian glossing traditions (Malay tarjamah, Pegon, kitab kuning)

Date: 2026-08-25

## Queries executed
1. websearch EN: "interlinear" Qur'an Malay translation manuscript tarjamah jawi Gallop
2. websearch EN: Pegon script origin Arabic script Javanese earliest attestation interlinear
3. websearch EN: van Bruinessen "Kitab Kuning" Bijdragen tot de Taal- Land- en Volkenkunde 1990 pesantren books
4. websearch EN: Nurtawab interlinear Qur'an translation Malay manuscript Indonesia
5. websearch EN: sorogan bandongan method pesantren kitab kuning santri reading Javanese pegon translation
6. webfetch: https://royalasiaticsociety.org/a-quran-manuscript-with-full-malay-translation/ (full text OK)
7. websearch EN: "Sultan Alauddin" Qur'an Aceh 17th century Malay interlinear translation manuscript
8. websearch EN: Ricci "Islam Translated" Malay Javanese Islamic literature conversion translation
9. bash Crossref API: query.bibliographic=Kitab kuning books in Arabic script pesantren milieu (OK; OpenAlex blocked by rate limit/budget)
10. websearch + webfetch: Ginsburg Legacy / Sloane 2645 Masa'il al-ta'lim; Gallop Wacana 2019 landing page (abstract OK, PDF blocked)
11. websearch EN: Madurese script "Peghu"/"Peghu" Arabic Sundanese pegon adaptation differences
12. websearch ID/EN: Perpusnas koleksi naskah kuno digital Al-Qur'an terjemahan interlinear; Manassa portal list
13. bash downloads + pypdf extraction: Brill BKI PDF (OK), Atlantis Press PDF (OK), scholarhub Wacana PDF (blocked, 0 bytes)
14. bash Semantic Scholar API: DOI 10.1080/13639811.2020.1724469 abstract (OK)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Annabel Teh Gallop | A Quran manuscript with full Malay translation (RAS blog) | 2022 | https://royalasiaticsociety.org/a-quran-manuscript-with-full-malay-translation/ | RAS Arabic 4 = only known single-volume Qur'an with full interlinear Malay translation; likely Banten, early 18th c.; shares translation with PNRI A.51/W.277 |
| Ervan Nurtawab | Qur'anic readings and Malay translations in 18th-century Banten Qur'ans A.51 and W.277, IMW 48(141):169-189 | 2020 | https://doi.org/10.1080/13639811.2020.1724469 | Interlinear Malay translations as continued exegesis after Tarjuman al-Mustafid; audience differentiation by recitation skill |
| Martin van Bruinessen | Kitab kuning; Books in Arabic script used in the Pesantren milieu, BKI 146(2/3):226-269 | 1990 | https://doi.org/10.1163/22134379-90003218 | Foundational survey of ~900 kitab titles at KITLV; language shares; jenggotan word-for-word interlinear technique; Safina interlinear translations |
| Annabel Teh Gallop | Southeast Asian manuscripts from the collection of Sir Hans Sloane in the British Library, Wacana 20(1) | 2019 | https://doi.org/10.17510/wacana.v20i1.732 | Sloane 2645: Ba Fadl's Masa'il al-ta'lim, dated 1623/4 CE, slanted interlinear Javanese in Pegon script on dluwang — earliest dated Pegon attestation |
| Agung Apriyanto, Nunuy Nurjanah, Ruhaliah | Structure of the Sundanese Language in the Pegon Script (Nadhomul Mawalidi wal Mi'raj pupujian) | 2021 | https://www.atlantis-press.com/article/125963430.pdf | Orthographic systematics of Sundanese Pegon: 31 consonants, 8 vocalizations, reduplication mark; Sundanese Pegon from 17th c. (per Hadi et al. 2019) |
| Ronit Ricci | Islam Translated: Literature, Conversion, and the Arabic Cosmopolis of South and Southeast Asia | 2011 | https://press.uchicago.edu/ucp/books/book/chicago/I/bo11274031.html | Book of One Thousand Questions across Arabic/Javanese/Malay/Tamil; translation and conversion as interconnected processes; "Arabic cosmopolis" framework |
| Peter G. Riddell | Malay Court Religion, Culture and Language: Interpreting the Qur'an in 17th Century Aceh (Brill TSQ 12) | 2017 | https://brill.com/display/title/34394 | Two earliest Malay Qur'an commentaries from Aceh incl. Tarjuman al-Mustafid context; chronology of Malay exegetical activity |
| Arivaie Rahman | Literatur Tafsir Al-Qur'an dalam Bahasa Melayu-Jawi, Suhuf 12(1) | 2019 | https://jurnalsuhuf.kemenag.go.id/suhuf/article/view/445 | Periodization of Jawi tafsir: emergence 1600-1920, golden age 1920-1960, decline after 1960s; four typologies |
| Fathurahman (review) / SEALG blog (Gallop) | Discovery of a manuscript of Tarjuman al-Mustafid (Bursa); Ottoman printing documents 1905-1906 | 2018 / 2023 | https://southeastasianlibrarygroup.wordpress.com/2023/06/30/the-discovery-of-a-manuscript-of-tarjuman-al-mustafid-the-first-complete-quran-interpretation-in-malay/ | Bursa copy of first complete Malay Qur'an commentary; Istanbul reprint approval documents |
| Nurtawab & Syukroni | Qur'anic Arabic, Tafsir al-Jalalayn and Javanese: Javanese translation in an eighteenth-century Banten Qur'an (Routledge/Pink ed.) | 2024 | https://www.taylorfrancis.com/chapters/edit/10.4324/9781003395287-3/ | MS A.54: 18th-c. Banten Qur'an with Javanese interlinear translation drawing on Tafsir al-Jalalayn |
| Dia Fathul Jannah et al. | Kitab Kuning: Metode Sorogan dan Bandongan di Pondok Pesantren, AN Najah 4(4) | 2025 | https://journal.nabest.id/index.php/annajah/article/download/573/363 | Sorogan (individual santri reads before kyai) vs bandongan (collective lecture); layout of matn/syarah/local translation between lines |
| Kholis & Ahsanul | Penerjemahan Pegon dalam Kitab Kuning Pesantren, INTAJ 6(1) | 2022 | https://ejournal.alqolam.ac.id/index.php/intaj/article/view/730 | Pegon writing techniques (lexical, subscript/superscript vowels) in kitab kuning translation practice |
| Mohammad Andi Hakim & Fifi Novianty | Kitab Kuning and Javanese Language Maintenance in Pesantren Al-Falah Salafi Brebes, Santri 1(1) | 2020 | https://pdfs.semanticscholar.org/9f65/32a25f5b3632580f2dfcb4179a6a5a38fc18.pdf | Sorogan/bandongan/pasaran methods with pegon transcript; Javanese as medium of glossing |

Digital resources verified:
- RAS digitised Arabic 4: https://royalasiaticcollections.org/ras-arabic-4/
- British Library datasets of digitised Malay and Indonesian manuscripts (Ginsburg Legacy 16 MSS; Bollinger project 124 Malay + 34 Bugis/Makasar + 9 SE Asian Qur'ans): https://bl.iro.bl.uk/concern/datasets/976ff14a-174d-47e9-a276-ba80331ac19f
- Khastara Perpusnas (PNRI one-stop old-manuscripts portal): https://khastara.perpusnas.go.id/
- Leiden University Digital Collections (c. 12,578 Indonesian manuscripts per Manassa guide): https://digitalcollections.universiteitleiden.nl/
- DREAMSEA (PPIM UIN Jakarta + CSMC Hamburg): http://dreamsea.co/
- SeaMushaf database (Kemenag RI): https://seamushaf.kemenag.go.id/
- Thesaurus of Indonesian Islamic Manuscripts (Kemenag/PPIM): https://lektur.kemenag.go.id/naskah/
- Endangered Archives Programme (BL): https://eap.bl.uk/

## Key findings (with URLs)

1. The Royal Asiatic Society's Qur'an Arabic 4 is "the only known single-volume Qur'an with a full interlinear translation in Malay"; internal evidence (identical Malay wording to PNRI A.51 and W.277, gold verse roundels also seen in two other Banten Qur'ans, Asian paper) points to an early 18th-century Banten origin. Only four other Qur'an copies with full interlinear Malay translations are known, all multi-volume and mostly Banten. https://royalasiaticsociety.org/a-quran-manuscript-with-full-malay-translation/ ; digitised: https://royalasiaticcollections.org/ras-arabic-4/

2. Nurtawab (IMW 2020) argues such interlinear translations constitute tafsir proper: A.51 appears designed for advanced reciters while W.277 targets beginners, and their Malay renderings diverge from both the 17th-c. Cambridge Aceh commentary (CUL Or. Ii.6.45), Abd al-Ra'uf's Tarjuman al-Mustafid, and the Jalalayn — proof that Malay exegetical activity continued through the 18th century. https://doi.org/10.1080/13639811.2020.1724469

3. No "Sultan Alauddin Qur'an" with interlinear Malay translation could be verified this session; the earliest securely datable Acehnese exegetical material remains mid-17th-c. (Cambridge Erpenius Surat al-Kahf commentary per Riddell) and the Tarjuman al-Mustafid (late 17th c.). A 17th-c. Aceh origin for any interlinear-Qur'an exemplar is therefore not yet confirmed by retrieved sources.

4. The earliest dated Pegon attestation is BL Sloane 2645, a copy of Ba Fadl's Masa'il al-ta'lim copied by 'Abd al-Qadim in Java Era 1545 (= 1623/4 CE) on dluwang, with a slanted interlinear Javanese (Pegon-script) translation filled for ff. 5v-84v; a new edition of the translation appeared as Yahya, Hasan & Farkhan (2018). Layout was deliberately designed for interlinear glossing (widely-spaced large Arabic hand). https://doi.org/10.17510/wacana.v20i1.732 ; related: https://scholarhub.ui.ac.id/cgi/viewcontent.cgi?article=1036&context=wacana

5. Van Bruinessen's BKI 1990 study of the ~900-title KITLV kitab kuning collection quantifies vernacular shares (Malay 22%, Javanese 13%, Sundanese 4%, Madurese 2.5%) and names the graphic form of word-for-word interlinear translation as jenggotan ('bearded'): oblique, finer-hand rendering under each boldface Arabic word, usually supplemented by a freer translation/commentary below. He records one Madurese and two distinct Javanese interlinear translations of the Safinat al-naja plus two versified versions — direct evidence for question 3. https://doi.org/10.1163/22134379-90003218

6. Pesantren pedagogy: sorogan = individual santri reads/translates before the kyai; bandongan = collective lecture with santri note-taking; both operate through oral Javanese (or local-language) rendering of unvocalized Arabic matn, historically fixed in pegon interlinear notes ("makna gandul"). Modern studies confirm continuation and decline of sorogan literacy. https://journal.nabest.id/index.php/annajah/article/download/573/363 ; https://journal.iainkudus.ac.id/index.php/Edukasia/article/view/13784 ; https://pdfs.semanticscholar.org/9f65/32a25f5b3632580f2dfcb4179a6a5a38fc18.pdf

7. Regional variants: Sundanese Pegon shows phonetic spelling with ~31 letters and 8 vowel marks (Apriyanto et al. 2021, from the Nadhomul Mawalidi wal Mi'raj pupujian; usage claimed from 17th c.); Madurese Peghu always fully vocalizes and marks retroflexes/aspirates with dotted letter forms; Javanese Pegon normally carries vowel signs (unvocalized form called gundhul). https://www.atlantis-press.com/article/125963430.pdf ; Unicode proposal: https://www.unicode.org/L2/L2022/22116-four-pegon-chars.pdf ; LOC Jawi-Pegon romanization (2012): https://www.loc.gov/catdir/cpso/romanization/jawi-pegon.pdf

8. Ricci's Islam Translated (Chicago, 2011) frames Arabic-to-vernacular transmission (Book of One Thousand Questions in Javanese Seribu Masalah, Tamil Ayira Macala) within an "Arabic cosmopolis", linking literary translation with conversion — the standard theoretical backdrop for Indonesian interlinear glossing. https://press.uchicago.edu/ucp/books/book/chicago/I/bo11274031.html . Rahman (Suhuf 2019) periodizes Malay-Jawi tafsir into emergence (1600-1920), golden age (1920-1960), decline (post-1960s). https://jurnalsuhuf.kemenag.go.id/suhuf/article/view/445

9. Digital corpora for pegon/tarjamah exist but are dispersed: Khastara (Perpusnas/PNRI portal), Leiden Digital Collections, BL datasets (Ginsburg Legacy; Bollinger projects incl. 9 SE Asian Qur'ans), DREAMSEA, SeaMushaf, TIIM. URLs listed in table above. A dedicated unified pegon corpus was not found.

## Remaining gaps
- "Sultan Alauddin Qur'an" (Aceh, 17th c., with Malay interlinear translation): no verification found; possibly conflated with the Cambridge Erpenius Aceh commentary or later Aceh/Delhi lore — needs targeted archival search (Aceh Sultanate manuscript inventories, CUL Or. Ii.6.45 literature).
- Full text of Gallop 2019 Wacana article (PDF blocked this session; only landing page + indexed excerpts captured).
- Nurtawab IMW 2020/2023 full texts behind Taylor & Francis paywall (403); only abstracts/metadata.
- Earliest Sundanese and Madurese pegon dated attestations remain imprecise (secondary claims only: 17th c. Sundanese per Hadi et al. 2019 as cited; Madurese examples cited to 1857 in an AI-generated source, unverified).
- Quantitative corpus studies of pegon interlinear glossing practices (density, lexicon choice, gandul syntax rules) across regions were not found in English/OA venues.
- KITLV Leiden specific pegon/tarjamah digitized items were identified only via portal descriptions, not item-level verification this session.

## Blocked sources
- scholarhub.ui.ac.id PDF direct download (viewcontent.cgi returned 0 bytes via Invoke-WebRequest and curl.exe) — landing page accessible.
- tandfonline.com (403 Forbidden on Nurtawab IMW 2020 chapter/full-text pages).
- api.openalex.org (rate limit/budget exceeded this session; used Crossref + Semantic Scholar APIs instead).
- jstor.org PDFs (paywalled previews only).
