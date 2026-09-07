# Loop B02: Sanskrit Editions and Digital Texts Collation for Gurupañcāśikā

Survey date: 2026-08-26. Working area: `output\2026-08-26_รายงานคัมภีร์คุรุปัญจาสิกา\research-notes\loop_B02_sanskrit_editions\`
Method: direct fetch + archive; Python collation script; OCR extraction from archive.org scans; websearch for edition status. No Wikipedia citations used.

---

## PART 1: GRETIL ENTRY sa_azvaghoSa-gurupaJcAzikA (BSA045)

### 1.1 Formats available (verified by probing)

- **UTF-8 HTML (`bsa045_u.htm`)** — EXISTS and archived. This is the only distributed format.
- Legacy Velthuis HTML (`bsa045.htm`) — HTTP 404 (does not exist).
- Plain-text UTF-8 (`bsa045_u.txt`) — HTTP 404 (does not exist).
- Zenodo mirror record 6476319 (GRETIL backup): API file listing confirms the collection contains ONLY `*_u.htm` files for this text; `bsa045_u.htm` = 11,961 bytes there.

Conclusion: GRETIL serves bsa045 exclusively as UTF-8/IAST HTML; "html + utf8" are one and the same file. Both the GRETIL original and the Zenodo mirror copy are archived.

Header metadata verbatim: "Input by members of the Sanskrit Buddhist Input Project. With kind permission of the Digital Sanskrit Buddhist Canon Project of Nagarjuna Institute, Nepal and University of the West, Rosemead, California, USA ... Sastra section, text no. 45. The transliteration emulates the conventions of Nagari script."

URLs:
- https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/3_phil/buddh/bsa045_u.htm
- https://zenodo.org/records/6476319/files/bsa045_u.htm

Archived files: `documents\gretil-bsa045_u.htm` ; `documents\gretil-bsa045_u-zenodo-mirror-6476319.htm`

### 1.2 COLLATION RESULT: GRETIL vs DSBC (loop_A01 archived text)

Script: `documents\collate_gretil_dsbc.py`; output: `documents\collation-gretil-vs-dsbc-report.txt`.

Method: both texts parsed into 50 verses; markup stripped (pada separators `/`, `|`, `||n||`, brackets, commas, avagraha marks, whitespace); IAST diacritics preserved; character-level difflib comparison.

**RESULT: all 50 verses IDENTICAL; maṅgala ("om namo buddhāya") IDENTICAL; closing colophon ("// iti gurupañcāśikā samāptā // // kṛtiriyaṃ mahācāryāśvaghoṣasya //") IDENTICAL.**

The only raw-level differences:
1. DSBC carries the title line "gurupañcāśikā" before v.1 (GRETIL omits it).
2. DSBC has a line-break hyphen artifact "hetor-natvā" inside v.1.
3. DSBC wraps vv.34-50 in square brackets [...] (reconstructed portion marker); GRETIL prints them unbracketed.

Interpretation: GRETIL bsa045 is a re-keyed/converged copy of the same DSBC input chain (CIHTS 1997 print → NIEM/DSBC 2006 → GRETIL). There is NO textual variation between the two e-texts. The genuine variants lie between Lévi's manuscript edition (JA 1929) and this CIHTS recension — see Part 4.

## PART 2: DSBC DEVANAGARI PARALLEL VERSION

- Content URL located from the "Parallel Devanagarī version" link on content page 221/914: **https://www.dsbcproject.org/canon-text/content/485/2313** (link text गुरुपञ्चाशिका).
- Archived: `documents\2026-dsbc-content-485-2313-devanagari.html` (52,497 B) plus the live re-fetch of the romanized page `documents\2026-dsbc-content-221-914-live.html` (45,477 B) documenting the cross-link.
- Technical details block on the Devanagari page mirrors the romanized one (input DSBC staff 2006; supplier Nagarjuna Institute; sponsor University of the West).

## PART 3: BAUDDHALAGHUGRANTHASANGRAHA SCAN (CIHTS 1997)

- Archive.org identifier: **EfEc_bauddha-laghu-granth-sangraha-edited-by-janardan-pandey-durlabh-bouddh-granth-ma**
  - Title verbatim: "Bauddha Laghu Granth Sangraha Edited By Janardan Pandey, Durlabh Bouddh Granth Mala 14 Kendriya Uccha Tibbati Shiksha Samstha, Varanasi"
  - Provenance stamps on scan pages: "CC-0. Jangamwadi Math Collection. Digitized by eGangotri"
  - Files: full PDF (115 MB), djvu.txt OCR (326 KB), jp2.zip etc.
  - URL: https://archive.org/details/EfEc_bauddha-laghu-granth-sangraha-edited-by-janardan-pandey-durlabh-bouddh-granth-ma
- Archived: `documents\1997-BLGS-CIHTS-Pandey-djvu-fulltext.txt` ; section extract `documents\1997-BLGS-gurupancasika-section-extract.txt`
- Location of the GP within the volume: contents table (विषय-सूची) lists गुरुपञ्चाशिका under author अश्वघोष at printed pages **33-40** — independently confirming Szántó 2013 fn.7 ("First in Dhīḥ 13, and then reprinted in the Bauddhalaghugranthasamgraha, 1997, pp.33-40").
- Title page of the section, verbatim: "महाचार्य अश्वघोषकृता गुरुपञ्चाशिका / GURUPANCIKA OF MAHACARYA ASVAGHOSA"
- Verse recoverability: GOOD despite imperfect Devanagari OCR. All 50 verses + colophon ("॥ इति गुरुपञ्जाशिका समास्ता ॥" [OCR garble] + कृतिरियं...) are legible.
- Verse-by-verse check vs DSBC: **no substantive variant detected through the OCR**; apparent differences are OCR corruption only (e.g., वज्र→वञ्र v.22/v.47, कल्पा→कल्या v.18, चतुर्दश→चतुदश v.49, dropped pada of v.15 in one OCR line). The BLGS print is textually the SAME recension that DSBC/GRETIL transmit.
- Structural detail preserved from print into DSBC: the opening bracket "[" before v.34 and closing "]" after v.50 — the 1997 print itself marks vv.34-50 as the back-translated (re-Sanskritized from Tibetan) portion, exactly as reported by Szántó 2013 p.444 ("reprinted by editors working at the Central Institute of Higher Tibetan Studies with what they perceived to be corrections and a re-Sanskritization of the lost portion based on the Tibetan").

## PART 4: REAL TEXTUAL WITNESSES (for future critical work)

Since GRETIL = DSBC = BLGS 1997 (one recension), the actual variant witnesses are:

(a) **Lévi's manuscript NAK 3-715 (= NGMPP B 23/8)** via his JA 1929 edition (archived in loop_B01). Sample substantive readings differing from CIHTS/DSBC (from the OCR of pp.259-263):
- v.5d: tyaktva saddharmavandanam (vs cārcana-vandanam)
- v.16ab: svannīpaṃ tato deyaṃ gurubhuktaṃ sadācārapam-type reading (vs yatheṣṭadakṣiṇādānād...)
- v.17ab: nityaṃ svasamayacaryaṃ praṇair api nijair bhajet (vs adeyaiḥ putradārādyair...)
- v.18ab: tasmāt sudurlabhaṃ nityaṃ kalpasaṃkhyeya-koṭibhiḥ (vs yataḥ sudurlabhaṃ vastu...)
- v.20cd: tad evākṣayam icchatā (vs sadaivākṣayam icchatā)
- v.22ab: tasmai śiṣyāḥ kriyatya[gī] śīlakṣāntiguṇānvitaḥ (vs te śiṣyāḥ karuṇotsarga-...)
- v.23b: padukāsanayānādi-aṅghrilaṅghanena tu kā kathā (type)
- v.26ab: jīvam eva guro-r dravyaṃ guror vā ca tad aṅganām / candravat tasya lokam ca (vs svātmavac ca...)
- v.30: na saṃgāyanaṃ anyonyaṃ gāyanaṃ na ca vādanam / na nṛtyaṃ na kathālāpaṃ kurvīta śrutigocare (vs saṃvāhanaṃ nartanaṃ ca...)
- v.32b-d: na stambhādin samāśrayet / aṅguliṣphoṭanaṃ nāpi (vs na jṛmbhādi... / nāṅgulisphoṭanaṃ kuryāt)
- v.33ab: caraṇakṣālanābhyaṅgodvarttanāmardanādikam / vidadhyād vandanāt pūrvaṃ tathā[...] (vs pādayoḥ kṣālanaṃ cāṅgaproñchābhyañjanamardanam...) — ms breaks here
Caveat: these are read from 1929 print via poor DLI OCR; facsimile PDF must be consulted before citing individual syllables.

(b) **Szántó's manuscript NAK 5-135 (= NGMPP B 24/56, dup. A 934/11)** via his diplomatic transcript (Puṣpiká I, 2013, already archived in loops A10/A11). Its readings often agree with Lévi against CIHTS (e.g., v.22ab "tasmac chisya krpa tyagi silaksantigunanvitah | nanatvam naiva kurvvita"; v.26 "jivam iva guror dravyam"); colophon: "iti gurupancasika samapta | krtir acaryavapilladattasya".

## PART 5: SZÁNTÓ-SFERRA PLANNED CRITICAL EDITION — STATUS

- The plan, announced 2013 (Puṣpiká I, p.445), verbatim: "When I announced my discovery to Prof. Francesco Sferra, he very kindly expressed his interest and I am pleased to announce that we are preparing a new critical edition of the work including the readings of this witness, the pratīkas of the anonymous commentary, and the large body of testimonia from Kālacakra-exegesis and beyond."
- Status as of 2026-08-26: **NOT YET PUBLISHED.**
  - Szántó's complete official publication list (openphilology.eu/publications-peter-daniel-szanto, checked live) contains no Gurupañcāśikā critical edition among Articles, Forthcoming, or Monographs Under Preparation. His "Minor Vajrayāna Texts" series continued with IV (Rigyarallitantra, 2017), V (Gaṇacakravidhi, 2019), VI (Anāvilatantra, 2022) — no new GP instalment.
  - His announced monograph projects concern other texts (Sāramañjarī with S. Saccone; Sampuṭa-related work with K.-D. Mathes; Sarvabuddhasamāyoga critical edition for Sferra's Manuscripta Buddhica series in Naples).
  - Web-wide search (2014-2026 window) surfaced no published critical edition, no preprint, no publisher catalogue entry.
- Related status note: 84000 Scholar's Room lists its Toh 3721 translation project as "Publication Date: Not Published".

## PART 6: SOURCES VERBATIM LIST (with archived files)

| # | Source (title verbatim) | URL | Local archive |
|---|---|---|---|
| 1 | Asvaghosa: Gurupancasika (GRETIL Sastra section, text no. 45; bsa045_u.htm) | gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/3_phil/buddh/bsa045_u.htm | documents\gretil-bsa045_u.htm |
| 2 | bsa045_u.htm (Zenodo GRETIL mirror, record 6476319) | zenodo.org/records/6476319/files/bsa045_u.htm | documents\gretil-bsa045_u-zenodo-mirror-6476319.htm |
| 3 | DSBC Gurupañcāśikā romanized (content 221/914, live refetch) | dsbcproject.org/canon-text/content/221/914 | documents\2026-dsbc-content-221-914-live.html (full text base: loop_A01\documents\2026-DSBC-Gurupancasika-romanized-fulltext.txt) |
| 4 | गुरुपञ्चाशिका (DSBC Parallel Devanagari version, content 485/2313) | dsbcproject.org/canon-text/content/485/2313 | documents\2026-dsbc-content-485-2313-devanagari.html |
| 5 | Bauddha Laghu Granth Sangraha Edited By Janardan Pandey, Durlabh Bouddh Granth Mala 14 Kendriya Uccha Tibbati Shiksha Samstha, Varanasi (CC-0, Jangamwadi Math Collection, digitized by eGangotri) | archive.org/details/EfEc_bauddha-laghu-granth-sangraha-edited-by-janardan-pandey-durlabh-bouddh-granth-ma | documents\1997-BLGS-CIHTS-Pandey-djvu-fulltext.txt ; documents\1997-BLGS-gurupancasika-section-extract.txt |
| 6 | Publications – Péter-Dániel Szántó (official list; no GP critical edition listed) | openphilology.eu/publications-peter-daniel-szanto | cited (live-checked) |
| 7 | Puṣpikā: Tracing Ancient India Through Texts and Traditions (thetedkarchive.com full text incl. Szántó 2013 chapter) | thetedkarchive.com/library/puspika-tracing-ancient-india-through-texts-and-traditions | cited (verbatim announcement quote) |
| 8 | Collation script + output (this loop's own tooling) | local | documents\collate_gretil_dsbc.py ; documents\collation-gretil-vs-dsbc-report.txt |

## PART 7: THAI SUMMARY (สรุปภาษาไทย)

1) เทียบข้อความ GRETIL (bsa045_u.htm) กับ DSBC romanized (content 221/914) ด้วยสคริปต์ Python: คาถาครบ 50 ทั้งสองฝ่าย เทียบแบบลบเครื่องหมายวรรค/อักขระแล้ว "เหมือนกันทุกคาถา" รวมมังคละ "om namo buddhāya" และบทท้าย "kṛtiriyaṃ mahācāryāśvaghoṣasya" — ต่างกันเพียงผิวเผิน (DSBC มีบรรทัดชื่อเรื่อง gurupañcāśikā นำหน้าคาถา 1, ใส่วงเล็บ [ ] คลุมคาถา 34-50, มีขีดกลางคำจากการตัดบรรทัด) สรุป: GRETIL คือสายเดียวกับ DSBC (CIHTS 1997 → NIEM/DSBC → GRETIL) ไม่มี variant ระหว่างสอง e-text; GRETIL เผยแพร่ไฟล์เดียว (_u.htm UTF-8) ไม่มี .txt และไม่มี .htm ฉบับ Velthuis (404 ตรวจแล้ว) เก็บสำเนา Zenodo mirror เพิ่มแล้ว

2) ฉบับเทวนาครีคู่ขนานของ DSBC: พบ URL จากลิงก์ "Parallel Devanagarī version" คือ dsbcproject.org/canon-text/content/485/2313 เก็บ HTML ไว้แล้ว (ข้อมูลเทคนิคตรงกับฉบับโรมัน: input 2006, Nagarjuna Institute)

3) สแกน Bauddhalaghugranthasaṅgraha (ed. Janardan Pandey, CIHTS สารนาถ 1997) บน archive.org identifier = EfEc_bauddha-laghu-granth-sangraha-edited-by-janardan-pandey-durlabh-bouddh-granth-ma (CC-0 Jangamwadi Math Collection, สแกนโดย eGangotri) สารบัญระบุ गुरुपञ्चाशिका ของ अश्वघोष หน้า 33-40 (ตรงกับเชิงอรรถ 7 ของ Szántó 2013 ที่ว่าก่อนหน้านี้พิมพ์ใน Dhīḥ 13) OCR เทวนาครีอ่านได้ดี คาถา 1-50 พร้อมบทท้ายครบ — เทียบกับ DSBC แล้ว "ไม่พบ variant เชิงสาระ" (ต่างเฉพาะความผิดพลาดของ OCR) และพบว่าตัวพิมพ์ 1997 เองใช้วงเล็บ [ ] คลุมคาถา 34-50 (ส่วนที่ถอดกลับจากทิเบต) ซึ่ง DSBC สืบทอดมาถึงปัจจุบัน

4) ผู้ถือรุ่น (witnesses) ที่แท้จริงของการชำระคัมภีร์จึงเหลือสองฝ่าย: (ก) ฉบับพิมพ์ Lévi 1929 จากต้นฉบับ NAK 3-715 = NGMPP B 23/8 ซึ่งมี reading แตกต่างจากสาย CIHTS หลายคาถา (เช่น v.5, v.16-18, v.20, v.22, v.26, v.30, v.32, v.33 — ข้อความขาดกลางคาถา 33) และ (ข) ต้นฉบับใหม่ NAK 5-135 = NGMPP B 24/56 (ฟิล์มซ้ำ A 934/11) ที่ Szántó ถอดอักขรวิธีไว้ใน Puṣpiká 1 (2013) ซึ่งมักเห็นด้วยกับ Lévi ฝ่ายเดียวกัน และมีบทท้ายระบุผู้แต่ง Vāpilladatta

5) สถานะฉบับวิจารณ์ที่ Szántó-Sferra ประกาศไว้ (คำประกาศตามตัวอักษรใน Puṣpiká 2013: "we are preparing a new critical edition of the work including the readings of this witness, the pratīkas of the anonymous commentary, and the large body of testimonia from Kālacakra-exegesis and beyond"): ณ 26 สิงหาคม 2026 "ยังไม่ได้ตีพิมพ์" — รายการผลงานทางการของ Szántó (openphilology.eu) ไม่มีรายการนี้ ทั้งหมวดบทความ หมวด forthcoming และหมวด monographs under preparation; ชุด Minor Vajrayāna Texts ไปต่อถึงภาค VI (2022) โดยไม่มีภาค Gurupañcāśikā เพิ่ม; ค้นทั่วเว็บ 2014-2026 ไม่พบทั้งฉบับพิมพ์ พรีพรินต์ หรือรายการสำนักพิมพ์

## PART 8: CHAINING LEADS

1. Facsimile-grade re-collation: read Lévi's Sanskrit text from the archived JA t.215 PDF (pp. 259-263) instead of OCR, then build a three-way apparatus (Lévi ms / Szántó ms / CIHTS recension) verse by verse — this is the core preparatory step for any local critical text.
2. Locate Dhīḥ 13 (CIHTS) to document the FIRST printing of the CIHTS recension before BLGS 1997 (per Szántó fn.7).
3. Track Szántó's forthcoming pages or Hamburg departmental news annually for the delayed GP edition; also watch Manuscripta Buddhica (Naples/Sferra) series announcements.
4. DSBC Devanagari page (485/2313) could be parsed into clean Devanagari text and aligned verse-by-verse with the romanized version as an internal consistency check of the DSBC database itself.
