# Loop 22 Findings — Shan nissaya and tham script palaeography

Date: 2026-08-25 | Phase B | Agent: Explorer (ox-alpha)
Note on method: websearch API returned HTTP 429 throughout; DuckDuckGo html/lite, Mojeek, Bing organic results, EAP (BL AWS WAF), minpaku.repo.nii.ac.jp (HTTP 406), HKUST IR (captcha) all blocked or challenge-gated. Primary channels used: OpenAlex API, Crossref API, doi.org handle API, direct publisher/repository fetches (Brill, Cambridge Digital Library, UCLouvain OJS).

## Queries executed
1. OpenAlex: "Shan Buddhist literature nissaya translation"
2. OpenAlex: "Tua Tham" / title.search:"tham script" / "Dhamma script Lanna palm leaf manuscripts"
3. OpenAlex/Crossref: "Daniell Lanna Buddhist literature nissaya"
4. OpenAlex: "Shan manuscripts British Library endangered archives"; "nissaya Burmese translation Pali"; "Lanna Chiang Mai manuscripts digitisation Social Research Institute"
5. OpenAlex title.search filters: lanna / tham script / shan manuscript / nissaya
6. Crossref bibliographic: "Hundius Lanna manuscripts catalogue", "Tham script Laos manuscript", "Tai nissaya vernacular Pali Yunnan Dai"
7. Direct fetches: SOAS eprints (DNS dead), SOAS Worktribe (Cloudflare), Brill XML article page (success), Cambridge UL Scott Collection record (captcha), CiNii BA73903310 (success), minpaku PDF (blocked)

## Table of sources
| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Jotika Khur-Yearn | The Poetic Dhamma of Zao Amat Long's Mahasatipatthana Sutta and the Place of Traditional Literature in Shan Theravada Buddhism (PhD thesis, SOAS) | 2012 | https://doi.org/10.25501/SOAS.00014574 | Confirmed: SOAS doctoral thesis, registered in SOAS Research Online; repository migrated to https://soas-repository.worktribe.com/output/400489 (Cloudflare-blocked to bots) |
| Jotika Khur-Yearn | Richness of Buddhist Texts in Shan Manuscripts: Seven Shan Versions of Satipatthana Sutta | 2009 | https://doi.org/10.1080/14639940902968954 | Contemporary Buddhism 10.1: 85-90; seven Shan manuscript recensions of one sutta |
| Kate Crosby; Jotika Khur-Yearn | Poetic Dhamma and the Zare: Traditional Styles of Teaching Theravada amongst the Shan of Northern Thailand | 2010 | https://doi.org/10.1080/14639941003791568 | Contemporary Buddhism 11.1: 1-26; zare = lay storyteller-teachers; oral teaching style |
| Jotika Khur-Yearn | Shan Manuscript Collections outside the Shan State: Reservation and Cataloguing | 2008 | https://eprints.soas.ac.uk/8201/ | Survey/cataloguing of Shan collections; legacy eprints.soas.ac.uk domain no longer resolves |
| Jotika Khur-Yearn | Mapping Classical Shan Literature | 2015 | http://doi.org/10.17613/M6Z699 | Mapping of classical Shan corpus (CORE/MOA identifier) |
| Ven. Pannabhoga Herngseng | Burmese Nissaya Literature: A Mainstream Monastic Education Learning Method and its Salient Features | 2023 | https://brill.com/view/journals/mnya/26/1/article-p1_004.xml ; https://doi.org/10.1163/26659077-25010027 | FULL TEXT FETCHED. Genre definition, history, 7 interpretive methods, Mandalay/Pakokku schools; author at Shan State Buddhist University, Taunggyi |
| John Okell | Nissaya Burmese | 1965 | https://doi.org/10.1016/0024-3841(65)90013-6 | Lingua 15: 186-227; foundational linguistic analysis: nissaya = Pali grammatical feature analysis embedded in Burmese |
| William Pruitt | The Study of Burmese by Westerners With Special Reference to Burmese Nissayas | 1992 | https://doi.org/10.1093/ijl/5.4.278 | International Journal of Lexicography 5.4: 278-304; Pali-Burmese lexicography angle; Sinhalese sanne parallel |
| John Okell (review) | Etude linguistique de nissaya birman(s) (William Pruitt, 1991) — review | 1996 | https://doi.org/10.1558/bsrv.v14i2.14875 | Buddhist Studies Review 14.2: 206-209; Pruitt 1991 = monograph-length linguistic study of Burmese nissaya translation |
| Justin McDaniel | Invoking the Source: nissaya manuscripts, pedagogy and sermon-making in Northern Thai and Lao Buddhism | 2003 | http://ci.nii.ac.jp/ncid/BA73903310 | Lanna/Lao nissaya pedagogy and sermon practice; expanded in his 2008 book cited by Herngseng |
| Trent Walker | Indic-Vernacular Bitexts from Thailand | 2021 | https://doi.org/10.7817/jameroriesoci.140.3.0675 | Abstract via Crossref: bitexts in interlinear AND interphrasal formats; earliest Tai palm-leaf bitexts from 16th-c. Lanna; Pali-Siamese literary work dated 1482 |
| Akiko Iijima | Preliminary Notes on "the Cultural Region of Tham Script Manuscripts" | 2009 | https://minpaku.repo.nii.ac.jp/?action=repository_action_common_download&item_id=2582&item_no=1&attribute_id=18&file_no=1 | Concept of a trans-regional "tham script cultural region"; full-text server returns 406 to all automated clients |
| Nobuyuki Yamagiwa | Prescription or Description: cattara-nissaya in the Vinaya-pitaka | 2001 | https://doi.org/10.4259/ibk.50.453 | Canonical sense of nissaya ("dependence") in Vinaya |
| Pyi Phyo Kyaw | Foundations of criticality: applications of traditional monastic pedagogy in Myanmar | 2015 | https://doi.org/10.1080/14639947.2015.1080925 | Contemporary monastic pedagogy context |
| Piyapat Jarusawat | Sustainable Preservation of Lanna Palm Leaf Manuscripts Based on Community Participation | 2020 | https://doi.org/10.22492/ijl.9.1.01 | Lanna palm-leaf corpus preservation (community-based) |
| (HKUST IR) | An Introduction to the Shan Manuscripts in the Scott Collection, Cambridge University Library | 2011 | http://repository.hkust.edu.hk/ir/Record/1783.1-66473 | Scott Collection Shan mss at CUL; page captcha-gated, author unconfirmed |
| (NIAS handle) | Lik Long (Great Manuscripts) and Care: the Role of Lay Intellectuals in Shan Buddhism | 2009 | http://hdl.handle.net/10502/3726 | Lay intellectuals' role in Shan manuscript culture |

## Key findings (with URLs)
1. Khur-Yearn gap closed: he is confirmed as SOAS PhD (2012), thesis title above; plus a full publication cluster on Shan Buddhist literature/manuscripts 2008-2015 (Contemporary Buddhism 2009, 2010, 2018; Mapping Classical Shan Literature 2015). https://doi.org/10.25501/SOAS.00014574
2. Nissaya genre definition (from fetched full text): "each Pali word is followed by its relevant annotative interpretation" — word-to-word translation genre; term derives from Vinaya Mahavagga sense "guidance/reliance" (Skt niśraya/āśraya). https://brill.com/view/journals/mnya/26/1/article-p1_004.xml
3. Chronology per Tin Lwin (cited by Herngseng): oldest extant Burmese nissaya = Khuddakasikkhā nissaya by Mahākassapa under Narapatisithu (1174-1211); a 7th-c. Sanskrit-Pyu "nissaya" reported from Śrīkṣetra; Sri Lankan Suttanipāta-sannaya (12th c.) as earliest sannaya; Walker: Pali-Burmese nissayas extant from late 13th c., and a 1442 inscription lists Sanskrit-Burmese bitexts. Same URL as #2.
4. Lanna/Lao three-genre system (McDaniel 2008, quoted in Herngseng): nissaya (gloss every 4-10 words), nāmasadda (close word-for-word glossary), vohāra ("lifting words": cites 12-25-word passages with extensive creative vernacular commentary); von Hinüber 1997:100-1 notes vohāra vs nissaya boundary unclear; Thai nissaya also called gambhi-nisai. Same URL as #2.
5. Interlineation is live practice: Herngseng Figure 3 caption describes student-monks "interlineating nissaya's interpretation in their printed textbook" (Veluvan Monastery, Taunggyi, Shan State) — i.e., interlinear writing remains the classroom norm today. Same URL as #2.
6. Seven canonical nissaya interpretive methods (Kāruṇika 2008, in Herngseng): pāṭhānusārī, pāṭhasesa, saddattha, saṅketattha, paññattyattha, vohārattha, adhippāyattha — a spectrum from strict literal rendering to sense-based interpretation; official Chaṭṭhasaṅgīti Tipitaka Burmese translation derived from nissayas by deleting Pali lemmata. Same URL as #2.
7. Walker reframes the whole region: Pali-vernacular bitexts "arranged in both interlinear and interphrasal formats" across Burmese/Khmer/Khün/Lanna/Lao/Lü/Mon/Siamese — explicit comparison with medieval Latin reading techniques; includes two of the oldest palm-leaf documents in any Tai language (16th-c. Lanna). https://doi.org/10.7817/jameroriesoci.140.3.0675
8. Tham script palaeography: the regional concept "cultural region of Tham script manuscripts" is established by Iijima (Minpaku, 2009), but the paper's full text is machine-inaccessible (HTTP 406); no open-access tham-script palaeography study could be retrieved this session.

## Remaining gaps
- Tham/Tua Tham palaeography proper (letter forms, dating criteria): still open. Candidates to pursue manually: Iijima 2009 PDF (human browser), Schnake 2022 on khom/mūl colophon geometry (https://doi.org/10.1515/9783110795271-007, paywalled), Grabowsky 2022 colophons chapter (https://doi.org/10.1515/9783110795271-008).
- BL Endangered Archives Programme Shan/Lanna projects: eap.bl.uk behind AWS WAF captcha; existence of specific project IDs NOT VERIFIED — do not cite until human access.
- "Daniell" on Lanna nissaya: no scholar by that name found in Crossref/OpenAlex on Lanna/nissaya topics. Most probable intended referent is Justin McDaniel (Invoking the Source 2003; Gathering Leaves and Lifting Words 2008). Status: ยังไม่พบข้อมูลยืนยันสำหรับ "Daniell".
- CMU / Chiang Mai Social Research Institute Shan-Lanna collections: no retrievable online catalogue record this session; lannamanuscripts.org and dlntm.org DNS-dead (former Digital Library of Northern Thai Manuscripts defunct/moved). Status: ยังไม่พบข้อมูลยืนยัน.
- Scott Collection Cambridge introduction (2011): author name unverified (page captcha-gated).
