# Loop 20 Findings — Indian Vedic transmission: padapatha/samhitapatha and grammatical annotation as the world's oldest "text apparatus"

Date: 2026-08-25
Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_20\
Documents saved: 7 files in documents\

## Queries executed

Web searches: FAILED ALL SESSION — search provider returned HTTP 429 on every attempt (10+ attempts, English/IAST queries). Compensated with direct fetches and APIs below.

API/tool operations:
1. Crossref REST: padapatha/samhitapatha; Witzel Vedic canon; pratisakhya; Sarvanukramani; Staal Rules Without Meaning; Bronkhorst; Gerety; Stausberg; Sayana Vijayanagara — all verified DOIs.
2. OpenAlex API: BLOCKED (insufficient budget, resets midnight UTC).
3. GRETIL main page fetched twice (text via webfetch; raw HTML via Invoke-WebRequest) to locate Rigveda Padapatha XML and check the Pratisakhyas section contents.
4. GRETIL padapatha TEI XML downloaded (2.06 MB); RV 1.1 sample extracted in UTF-8.
5. Witzel canon.pdf: live Harvard URL returns CMS HTML instead of PDF (false 200); retrieved real PDF (93 pp., 417 KB) via Wayback snapshot 2022-01-28; text extracted with pypdf (288 K chars); grepped for padapatha/anukramani/oral/writing/Nepal passages.
6. archive.org advancedsearch + metadata APIs: Max Müller Rig-Veda-Sanhita editions; Müller History of Ancient Sanskrit Literature; Wilson Rig-Veda Sanhita vol. 1; pratisakhya editions; Staal Nambudiri.
7. Full djvu.txt OCR downloads + grep: Müller 1859 (1.15 MB), Müller 1849 vol. I preface (1.18 MB), Wilson 1850/1925, Staal 1961.
8. SEP entry language-india fetched in full.
9. Oxford Bibliographies Gerety page: BLOCKED (403).
10. UNESCO MoW "Rigveda Manuscript" page: BLOCKED (JavaScript-gated); Wayback CDX lookup timed out.

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Michael Witzel | The Development of the Vedic Canon and its Schools: The Social and Political Milieu (HOS Opera Minora 2) | 1997 | http://web.archive.org/web/20220128055355/https://www.people.fas.harvard.edu/~witzel/canon.pdf | "Tape recordings" characterization of oral Veda; Pāṇini c. 400 BC / Patañjali c. 150 BC / Pāli canon c. 250 BC as fixation anchors; Pāli canon attests padaka Brahmins (pada-reciters, DN 1.88 etc.); Vidagdha Śākalya named as author of RV Padapāṭha; earliest surviving Vedic mss from Nepal c. 1040 CE without accent marks; RV deity-author-metre ordering device "originated in a civilization without writing" |
| GRETIL/Sansknet | Ṛgvedasaṃhitā Padapāṭha e-text (TEI XML, CC BY-NC-SA) | 2020 (conv.) | https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_RgvedasaMhitApadapATha.xml | Full pada text; notation: `|` pada boundary, `--` sandhi-split marker, `-` compound split, `iti` cues; double addressing aśṭaka/varga + maṇḍala/sūkta/verse; no printed edition specified in header |
| F. Max Müller | Rig-Veda-Sanhita with the Commentary of Sayanacharya, Vol. I | 1849 | https://archive.org/details/india.history.resource.37564 | W.H. Allen London; preface describes collation of Paris/London/Oxford Vaidik mss into "a complete apparatus criticus" for "a critical edition of both its text and commentary"; treats commentary as Mādhava's explanations "as edited by Sayana"; Berlin fragment of Sāyaṇa comm. |
| F. Max Müller | The Hymns of the Rig-Veda in the Samhita and Pada Texts (Trübner) | 1877 | https://archive.org/details/hymnsrigvedains00unkngoog | First mass-distributed edition printing BOTH recitation layers; Oxford copy presented to A. Weber; archive OCR auto-detected Devanagari script (conf. 0.96), lang san |
| F. Max Müller | A History of Ancient Sanskrit Literature | 1859 | https://archive.org/details/historyofancient00mlle | Six Vedāṅgas as "Branches of Vedic Exegesis"; śikṣā = first vedāṅga, housed in Taittirīya-Āraṇyaka (śikṣādhyāya: accents, quantity, organs, delivery, euphonic laws), Sāyaṇa commenting; prātiśākhyas attached to each śākhā, quoting named masters (Śākalya elder/younger vs Śaunaka); Black-YV school tradition: Ātreya author of a Pada-text, Kuṇḍina its vṛtti; anukramaṇī corpus: Kātyāyana's Sarvānukrama + five Śaunaka anukramaṇīs, counts of hymns/verses/words, Bṛhatsarvānukramaṇī (AV); Nidāna-sūtra metre index for SV; sutra memorization pedagogy ("commentaries and glosses") |
| H.H. Wilson | Rig-Veda Sanhita translation Vol. I preface | 1850 (1925 repr.) | https://archive.org/details/dli.ernet.236706 | Sāyaṇācārya = brother of Mādhavācārya, prime minister of Vira Bukka Rāya, raja of Vijayanagara, fourteenth century; scholia on Saṃhitās and Brāhmaṇas produced by learned Brahmans assembled at Vijayanagara |
| Frits Staal | Nambudiri Veda Recitation (Mouton, Disputationes Rheno-Trajectinae 5) | 1961 | https://archive.org/details/staal-nambudiri | Kerala Nambudiris preserve Vedic recitation; hand-counted padani during ghosam/kātti; grantha-script palm-leaf mss (Burnell B61/B62, India Office Library) of Jaiminiya texts; B. Gray BSOAS 22 (1959) acoustic analysis of Nambudiri RV recitation; svādhyāya: no sharp word/meaning divide |
| SEP (anon. entry) | Language and Testimony in Classical Indian Philosophy | 2010/rev. 2020 | https://plato.stanford.edu/entries/language-india/ | Corpus layering Samhitā→Brāhmaṇa→Āraṇyaka→Upaniṣad (1500-500 BCE), Brāhmaṇas explicitly "prose ritual commentaries"; Pāṇini c. 400 BCE, Kātyāyana/Patañjali 200-100 BCE, Bhartṛhari c. 400 CE; grammar as regulation-science (Vārttika 1); apoddhāra abstraction; Mīmāṃsā apauruṣeya doctrine |

Supplementary sources (verified metadata only, not saved as documents):
- Finnian M. M. Gerety, Vedic Oral Tradition, Oxford Bibliographies, 2017, DOI 10.1093/obo/9780195399318-0184 (page itself 403-blocked)
- Johannes Bronkhorst, Chapter III.2 "The Vedic Texts Known To The Early Sanskrit Grammarians", in Greater Magadha (Brill), 2007, DOI 10.1163/ej.9789004157194.i-416.32
- Johannes Bronkhorst, An Early Post-Vedic Treatise on the Etymological Explanation of Words, 2023, DOI 10.1163/9789004527256_012
- Frits Staal, Rules Without Meaning: Ritual, Mantras and the Human Sciences (Peter Lang), reviews 1991-1994, e.g. DOI 10.1525/ae.1994.21.4.02a00370
- Frits Staal, The Nambudiri Agnicayana of April 1975, DOI 10.2307/599897; retrospective EJVS 22.2 (2015) DOI 10.11588/ejvs.2015.2.317
- Frits Staal, Mantras and Recitation (1980) DOI 10.1163/9789004492462_013; Structure, Metres and Recitation (1981) DOI 10.1163/9789004645653_005
- Wayne Howard, Veda Recitation in Varanasi, 1989, DOI 10.2307/852187
- David M. Knipe, Vedic Voices: Intimate Narratives of a Living Andhra Tradition (Gerety review 2021, DOI 10.7817/jameroriesoci.136.4.0853)
- Borayin Larios, Embodying the Vedas: Traditional Vedic Schools of Contemporary Maharashtra (De Gruyter Open 2017; Gerety review DOI 10.1017/s0041977x18000642)
- Witzel, Moving Targets? Texts, language, archaeology and history in the Late Vedic and early Buddhist periods, IIJ 52, 2009, DOI 10.1163/001972409x12562030836859

## Key findings (with URLs)

1. **Padapāṭha is literally an annotation layer over the fused recitation.** The GRETIL pada text encodes: `|` between padas; `--` to mark where saṃhitā-sandhi was split (dive--dive); `-` for internal compound analysis (puraḥ-hitam, vīravat-tamam); `iti` recitation cues; and dual address systems (aśṭaka:adhyāya/varga alongside maṇḍala,sūkta.verse). This is word-segmentation apparatus existing before any written page. https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_RgvedasaMhitApadapATha.xml

2. **Dating of the pada-pāṭha per Witzel:** traditionally attributed to Vidagdha Śākalya (who appears in the Bṛhadāraṇyaka-Up. debate at Janaka's court); pada-reciters (padaka brahmans) are already attested in the Pāli canon (DN 1.88, Thag 1248, Aṅguttara I p.163,166), i.e., before c. 250 BC; the fixed canon was recognized by Pāṇini c. 400 BC. Witzel: the Vedas are oral "tape recordings... transmitted orally, and usually without the change of a single word." http://web.archive.org/web/20220128055355/https://www.people.fas.harvard.edu/~witzel/canon.pdf

3. **Pada-texts were a pan-Vedic phenomenon, not only RV:** Müller documents the Black-Yajurveda tradition in which Ātreya "was the author of a Pada-text" and Kuṇḍina composed a vṛtti on it; printed pada texts exist for RV (Müller 1877 Trübner edition prints "Samhita and Pada texts" together). https://archive.org/details/historyofancient00mlle ; https://archive.org/details/hymnsrigvedains00unkngoog

4. **The Vedāṅga triad as annotation science before writing:** Müller's chapter scheme calls the six Vedāṅgas "Branches of Vedic Exegesis"; śikṣā (first vedāṅga: accents, quantity, organs of pronunciation, delivery, euphonic laws) originally formed part of the Āraṇyakas (Taittirīya śikṣādhyāya) and "became the principal Subject of the Prātiśākhyas", which are attached to each individual śākhā and quote dissenting masters by name (Śākalya elder vs younger; Śaunaka's dissents/approvals). https://archive.org/details/historyofancient00mlle

5. **Anukramaṇīs = proto-concordance/index appendices:** Kātyāyana's Sarvānukramaṇī to the RV plus five earlier anukramaṇīs ascribed to Śaunaka; they tabulate numbers of hymns, verses, and words per sūkta; three anukramaṇīs for Yajurveda, two classes for Sāmaveda, and the Bṛhatsarvānukramaṇī for the Atharvaveda; the Nidāna-sūtra gives "a kind of index (anukramaṇī)" to metres across SV liturgical collections. Witzel adds that the RV's deity-author-metre ordering device "originated in a civilization without writing" — retrieval indexing maintained purely by recitation. Same two URLs as findings 2-4.

6. **Written Vedic manuscripts appear very late:** Witzel — "The earliest surviving Vedic mss., written without accent marks, come from Nepal (c. 1040 A.D.)". Oral priority then shaped the first pages: when Max Müller printed the RV (1849 W.H. Allen with Sāyaṇa's commentary; 1877 Trübner Samhita-and-Pada edition), both layers went to press in Devanagari, the pada-pāṭha printed as a separate parallel layer. For Kerala, Staal documents grantha-script palm-leaf mss (Burnell B61/B62, India Office Library) for Kerala-region Vedic school texts and a still-living Nambudiri oral RV recitation analyzed acoustically by B. Gray (BSOAS 22, 1959, 499-530). http://web.archive.org/web/20220128055355/https://www.people.fas.harvard.edu/~witzel/canon.pdf ; https://archive.org/details/staal-nambudiri

7. **Commentarial hierarchy and Sāyaṇa milestone:** SEP fixes the layers — four Saṃhitās (1500-500 BCE), Brāhmaṇas as "prose ritual commentaries", then Āraṇyakas and Upaniṣads. Wilson's preface dates Sāyaṇācārya to the 14th century as brother of Mādhavācārya, prime minister of Vira Bukka Rāya of Vijayanagara, whose workshop "employed the most learned Brahmans... upon the works which bear their name" — scholia covering Saṃhitās and Brāhmaṇas (the Vedarthaprakāśa tradition; note Müller 1849 credits "the original explanations of Mādhava, as edited by Sayana"). https://plato.stanford.edu/entries/language-india/ ; https://archive.org/details/dli.ernet.236706 ; https://archive.org/details/india.history.resource.37564

8. **Modern scholarship verified:** Witzel (canon formation, 1997; Moving Targets, IIJ 2009, DOI 10.1163/001972409x12562030836859); Bronkhorst (Greater Magadha ch. III.2 on which Vedic texts the early grammarians knew, Brill 2007, DOI 10.1163/ej.9789004157194.i-416.32); Staal (Nambudiri recitation 1961; Rules Without Meaning 1989; Agnicayana 1975 fieldwork); Gerety (Oxford Bibliographies "Vedic Oral Tradition" 2017, DOI 10.1093/obo/9780195399318-0184). Michael Stausberg: NO work specific to Vedic recitation/padapatha located via Crossref under his name — his oeuvre is Zoroastrianism/ritual theory/religion-and-tourism; treat the brief's mention as likely mis-attribution for this topic.

## Remaining gaps

- Fine-grained dating debate on the pada-pāṭha's composition (independent creation at redaction vs later analytic reconstruction; positions of Bronkhorst/Falk/Thieme not retrievable this loop — Brill chapter paywalled; only title/DOI verified).
- Kerala RV palm-leaf manuscripts specifically in grantha/Malayalam script: indirect evidence only (Staal's grantha palm-leaf mss are Jaiminiya-grantha texts; the Nambudiri RV itself transmitted orally). A dedicated codicological study (e.g. on Travancore/Vatican-of-the-East collections) still needed — "(ยังไม่พบข้อมูลยืนยัน)".
- Ṭīkā conventions on Vedic manuscripts (marginal vs interlinear placement, rubrication) not covered by any fetched source this loop "(ยังไม่พบข้อมูลยืนยัน)".
- Prātiśākhya full-text samples not harvested: GRETIL's "Pratisakhyas" section contains only Nirukta and Ṛgvidhāna (Tokunaga input); actual prātiśākhya texts exist on archive.org as 1894-1964 printed editions (e.g. https://archive.org/details/saunukas-pratisakhya-of-rigveda-with-uvata-bhashya-yugala-kisora-vyaysa-fasc-1-braj-b-das-co-1894 ; Whitney's Atharva-Veda Prātiśākhya; Taittirīya Prātiśākhya 1906) but were not text-extracted this loop.
- Gerety OBO article substance beyond title/metadata (page 403).
- UNESCO Memory of the World "Rigveda Manuscript" entry details unobtainable (JS-gated).

## Blocked sources

- Web search provider (Exa MCP): HTTP 429 rate-limit on every attempt throughout session — all discovery done via direct fetch/API fallback.
- OpenAlex API: budget exhausted (resets midnight UTC).
- Oxford Bibliographies (oxfordbibliographies.com): HTTP 403.
- UNESCO MoW register page: JavaScript-gated content wall; Wayback CDX query timed out.
- people.fas.harvard.edu/~witzel/canon.pdf (live): serves CMS HTML with HTTP 200 instead of PDF; worked around via Wayback 2022 snapshot.
