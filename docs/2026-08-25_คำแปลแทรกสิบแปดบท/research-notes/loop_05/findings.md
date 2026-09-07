# Loop 05 — Institutionalized textual scholarship, 16th-18th centuries
(Religious orders, biblical criticism, antiquarianism, early Orientalism)

Date of research: 2026-08-25
Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_05

## Queries executed

### Websearch (tool; EN/FR/LA terms)
1. `Mabillon "De re diplomatica" 1681 founding paleography diplomatics Benedictine Maurist scholarship` — OK
2. `Bollandists Acta Sanctorum hagiographic criticism historical method Jesuit Papebroch` — throttled (HTTP 429) on three attempts; topic covered instead via Britannica page fetch + Bollandistes official site + historyofinformation.com
3. `Richard Simon "Histoire critique du Vieux Testament" 1678 ...` — throttled; covered via Britannica + archive.org
4. `Richard Bentley Dissertation Epistles of Phalaris 1699 Horace 1711 New Testament collation` — throttled; later succeeded with narrower query
5. `William Jones Asiatic Society Bengal 1784 founding Sanskrit "third anniversary discourse" 1786` — OK
6. `George Sale Koran translation 1734 Preliminary Discourse Marracci sources method` — OK (second attempt)
7. `Momigliano "Ancient History and the Antiquarian" 1950 thesis antiquaries vs historians philology` — OK
8. `Robert Cotton library manuscripts Sir Robert Harley Harleian collection British Museum 1753 Elias Ashmole antiquary` — OK
9. `Bentley "Proposals" 1720 Greek Testament "Vulgate" collation thirty manuscripts oldest` — OK (third attempt)

### archive.org advancedsearch API (identifier/title/creator/year)
- title:(de re diplomatica) -> Mabillon editions incl. gri_33125008690477 (1709), supplementum gri_33125008690535 (1704), india.history.resource.100403 (1709)
- title:("Histoire critique du Vieux Testament") -> histoirecritique01simo (1685 Leers), ned-kbn-all-00003353-001 (1680)
- title:(Epistles of Phalaris...) -> dissertationupon00bent (1699), 1713 reprint, 1697 first version
- title:("Confucius Sinarum Philosophus") -> confuciussinarum00conf (1687) + partial items CSP-1..CSP-7
- title:(Zend-Avesta) 1770-1800 -> zendavestaouvrag03anqu (1771), ouvragedezoroastre02anqu (1781), Kleuker German Anhang (1777-83)
- title:(Oupnek'hat) -> bub_gb_ulxNgvzEWggC (1802) etc.
- creator:(Sale) AND title:(Koran OR Alcoran) -> dli.ministry.15953 (1801) etc.; comprehensivecom01sale (Wherry vol. I with Preliminary Discourse, 1882)
- title:("Acta Sanctorum") 1643-1750 -> bub_gb_U1WvT16Y5m4C (1734, d'Achery/Mabillon Benedictine acts), Praefationes Mabillon (1724)
- title:(Palaeographia graeca) -> b30455601, bub_gb_8cGt5gCRvvIC (Montfaucon 1708)
- title:("works of Sir William Jones") / title:("Asiatic Researches") -> cu31924092900798 (1807), dli.ministry.00391
- creator:(Bentley, Richard, 1662-1742) -> Works (Dyce) 1836 vols.; Horatius restitutus 1837
- identifier:comprehensivecom* -> Wherry/Sale commentary volumes
- OCR full-text downloads (_djvu.txt): Mabillon 1709; Simon 1685; Bentley Phalaris 1699; Confucius 1687; Zend-Avesta 1771; Wherry-Sale vol. I (1882); Bentley Proposals pamphlet 1721; Works of Jones vol. 3 (1799 copy — poor OCR, superseded by Eliohs HTML)

### Crossref API
- `Momigliano Ancient History and the Antiquarian` -> doi:10.2307/750215 (1950); Herklotz review doi:10.3138/9781442684591-006 (2007)
- `Richard Simon biblical criticism Old Testament` -> Krans ed., Critical History of the Text of the New Testament, doi:10.15699/tc.19.2014.14
- `Bentley ... New Testament` -> Mill NT edition records (Brill ntg-1)

### Direct page fetches
- britannica.com/biography/Jean-Mabillon ; /topic/De-Re-Diplomatica ; /topic/Acta-Sanctorum ; /biography/Richard-Bentley ; /biography/Richard-Simon (thin)
- sal.org.uk/about-us/our-history/
- ashmolean.org/history-ashmolean
- iranicaonline.org/articles/anquetil-duperron (via r.jina.ai proxy)
- bollandistes.org/who-we-are/ (via r.jina.ai proxy)
- eliohs.unifi.it/testi/700/jones/Jones_Discourse_3.html (full Third Anniversary Discourse)
- newadvent.org Catholic Encyclopedia: two guessed URLs returned wrong articles (Basilica, Bodin); abandoned — no fabricated citation used.

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Jean Mabillon | De re diplomatica libri VI | 1681 (1709 ed. scanned) | https://archive.org/details/gri_33125008690477 | Founding work of diplomatics and Latin paleography; classifies scripts, seals, subscriptions, chronological signs; 60 plates of specimens, 200+ monuments |
| Jean Mabillon | Librorum de re diplomatica supplementum | 1704 | https://archive.org/details/gri_33125008690535 | Supplement confirming rules with new specimens |
| Jeremy Norman (HistoryofInformation) | Mabillon Founds the Formal Study of Palaeography and Diplomatics | n.d. | https://www.historyofinformation.com/detail.php?id=396 | Documents Papebroch challenge, Papebroch concession; term "palaeography" coined later by Montfaucon |
| Encyclopaedia Britannica | Jean Mabillon / De Re Diplomatica | n.d./2026 | https://www.britannica.com/biography/Jean-Mabillon | Maurist career; Bernard edition 1667; Benedictine Acta Sanctorum 9 vols. 1668-1701; method (ink, parchment, script comparison) |
| Jean Bolland/Godefroid Henschenius/Daniel Papebroch (Societe des Bollandistes) | Acta Sanctorum | 1643- | https://www.britannica.com/topic/Acta-Sanctorum ; https://bollandistes.org/who-we-are/ | Hagiographic collection arranged by feast days; doubtful cases included but flagged; "distinguished for its use of the principles of historical criticism"; Rosweyde conceived 1629 plan |
| Richard Simon | Histoire critique du Vieux Testament | 1678 (1685 Rotterdam ed. scanned) | https://archive.org/details/histoirecritique01simo | Preface program: respect for Scripture does not exempt it from criticism; manuscripts, versions, variants as evidence |
| Auguste Bernus | Richard Simon et son Histoire critique du Vieux Testament | 1869 | https://archive.org/details/richardsimonetso00bern | Classic monograph on Simon and censorship episode |
| Bertrand Krans (ed.) | Richard Simon, Critical History of the Text of the New Testament (transl.) | 2014 | https://doi.org/10.15699/tc.19.2014.14 | Modern English edition documenting Simon's NT companion volume |
| Richard Bentley | A Dissertation upon the Epistles of Phalaris | 1699 | https://archive.org/details/dissertationupon00bent | Proof that Phalaris' letters are a much later forgery; preface answers Boyle's Royal Library insinuation |
| Richard Bentley | Dr. Bentley's proposals for printing a new edition of the Greek Testament, and St. Hierom's Latin version | 1720/1721 | https://archive.org/details/bim_eighteenth-century_dr-bentleys-proposals-_bentley-richard_1721 ; https://babel.hathitrust.org/cgi/pt?id=uc1.31175035489742 | Verified text: compare oldest Greek MSS with Jerome's Vulgate to recover Origen's exemplar / pre-Nicene text; 30,000 variants reducible to under 200; apparatus = Syriac/Coptic/Gothic/Ethiopic versions + Fathers of five centuries |
| Encyclopaedia Britannica | Richard Bentley | 2026 | https://www.britannica.com/biography/Richard-Bentley | Biography; Epistola ad Millium 1691; Horace 1711; digamma discovery |
| Society of Antiquaries of London | Our history | n.d. | https://www.sal.org.uk/about-us/our-history/ | Founded 1707 (refounded 1717), Peter Le Neve first president, charter 1751; scope = antiquities relating to GB history before James I |
| Ashmolean Museum | History of the Ashmolean | n.d. | https://www.ashmolean.org/history-ashmolean | Ashmole gift 1682; opened 1683 as Britain's first public museum; Tradescant 'Ark' origin |
| Bodleian Digital Library | The Ashmole Manuscripts | n.d. | https://digital.bodleian.ox.ac.uk/collections/ashmole | 2,000+ medieval/early modern MSS (medicine, astrology, alchemy, heraldry); transferred from museum to Bodleian 1860 |
| Digital Humanities Institute (Sheffield) | Cotton Manuscripts Project | n.d. | https://www.dhi.ac.uk/projects/cotton-manuscripts/ | Cotton library 1586-1631; Beowulf, Gawain, Lindisfarne Gospels, Magna Carta; bequeathed 1700; fire 1731; BM foundation collection 1753; Planta catalogue 1801 |
| Royal Collection Trust / BL archives catalogue | Catalogue of Harleian MSS; Harley MS records | 1808/n.d. | https://www.rct.uk/collection/1071987/a-catalogue-of-the-harleian-manuscripts-in-the-british-museum-v-1 ; https://searcharchives.bl.uk/catalog/040-002046380 | Harley collection began with d'Ewes purchase 1704/05; sold to nation 1753 for £10,000; Wright, Fontes Harleiani (1972) provenance studies |
| Arnaldo Momigliano | Ancient History and the Antiquarian | 1950 | https://doi.org/10.2307/750215 ; https://www.journals.uchicago.edu/doi/10.2307/750215 | Thesis: antiquarians built evidentiary method later absorbed by historians; JWI 13(3-4):285-315 |
| Prospero Intorcetta, Christian Herdtrich, Francois de Rougemont, Philippe Couplet | Confucius Sinarum Philosophus | 1687 | https://archive.org/details/confuciussinarum00conf | Latin translation of Confucius; Couplet epistola to Louis XIV; Tabula chronologica synchronizing Chinese chronology |
| Abraham-Hyacinthe Anquetil-Duperron | Zend-Avesta, ouvrage de Zoroastre | 1771 | https://archive.org/details/zendavestaouvrag03anqu | First European translation of Avestan corpus; apparatus incl. glossaries, Notice des manuscrits |
| Encyclopaedia Iranica | Anquetil-Duperron | n.d. | https://www.iranicaonline.org/articles/anquetil-duperron | Surat manuscript acquisition 1758-60; 180 MSS deposited Bibliotheque du Roi 1762; forgery accusation by W. Jones; vindicated by Tychsen/Heeren 1791-94 |
| William Jones | The Third Anniversary Discourse (On the Hindus) | 1786 | https://www.eliohs.unifi.it/testi/700/jones/Jones_Discourse_3.html ; https://pure.mpg.de/rest/items/item_2350948_3/component/file_2350947/content | Famous Sanskrit-Greek-Latin common-source passage; four media of inquiry into Indian antiquity |
| Encyclopaedia Britannica | Asiatic Society of Bengal / Sir William Jones | n.d. | https://www.britannica.com/topic/Asiatic-Society-of-Bengal | Founded 15 Jan 1784; Hastings support; comparative linguistics impetus |
| George Sale | The Koran... translated... with explanatory notes... Preliminary Discourse | 1734 (1882 Wherry repr. scanned) | https://archive.org/details/comprehensivecom01sale ; https://archive.org/details/bim_eighteenth-century_the-koran-commonly-call_1734 | Notes from approved commentators; assessment of Marracci 1698; claim of impartial justice to the original |
| Alexander Bevilacqua | The Qur'an Translations of Marracci and Sale | 2016 | https://www.jstor.org/stable/24395514 | Sale's reliance on Marracci; Dutch Church al-Baydawi manuscript as key source |
| Bernard de Montfaucon | Palaeographia graeca | 1708 | https://archive.org/details/b30455601 | First systematic Greek paleography; coined "palaeographia" |

Full-text document harvests in documents/: [1681]-Mabillon, [1678]-Simon, [1699]-Bentley, [1687]-Couplet, [1734]-Sale, [1771]-AnquetilDuperron, [1786]-Jones, [1950]-Momigliano-institutions.

## Key findings

1. **De re diplomatica (1681) created two sciences at once.** Mabillon laid down criteria for dating scripts and testing authenticity of medieval documents, answering Jesuit Papebroch's claim that virtually all Merovingian charters were spurious; Papebroch himself acknowledged the masterpiece and retracted his excess of skepticism. The word "palaeography" itself did not yet exist — Montfaucon (Mabillon's pupil) coined it for his Palaeographia graeca (1708).
   https://www.historyofinformation.com/detail.php?id=396 ; https://www.britannica.com/biography/Jean-Mabillon ; https://archive.org/details/gri_33125008690477

2. **The Bollandist Acta Sanctorum made hagiography a critical discipline.** From Rosweyde's 1629 plan through Bolland (January, 2 vols., 1643) and Henschenius/Papebroch, the work included doubtful cases explicitly marked, added indexes/chronologies per chapter, and is "distinguished for its use of the principles of historical criticism"; the enterprise continues today (Societe des Bollandistes, Brussels).
   https://www.britannica.com/topic/Acta-Sanctorum ; https://bollandistes.org/who-we-are/

3. **Richard Simon's preface states the biblical-critical program verbatim**: deep reverence for Scripture "must not prevent us applying ourselves carefully to Criticism of these very Books," and judgment must weigh reasons, not authors' religion. His Histoire critique (1678) was suppressed in Paris and republished via Reinier Leers in Rotterdam (1680/1685); Bossuet's shock marks the institutional fault-line between erudition and authority.
   https://archive.org/details/histoirecritique01simo ; https://www.britannica.com/biography/Richard-Simon ; https://doi.org/10.15699/tc.19.2014.14

4. **Bentley's Proposals (1720), verified against the primary pamphlet**, proposed restoring the New Testament "as received... at the time of the Council of Nice" by comparing the oldest Greek MSS (lead witness Codex Alexandrinus) with Jerome's Vulgate as an independent ancient witness to Origen's exemplar, supported by Syriac, Coptic, Gothic and Ethiopic versions plus all Fathers within five centuries — reducing "Thirty Thousand Various Readings" to scarcely two hundred deserving consideration. This is genealogical (stemmatic) reasoning avant la lettre; assisted by Wetstein and John Walker (collating in Paris "with the help of the Maurists"); never completed.
   https://archive.org/details/bim_eighteenth-century_dr-bentleys-proposals-_bentley-richard_1721 ; https://babel.hathitrust.org/cgi/pt?id=uc1.31175035489742 ; https://archive.org/details/dissertationupon00bent

5. **Antiquarianism became national infrastructure.** Society of Antiquaries: founded 1707 (minutes from Dec 5, 1707 at the Bear Tavern; refounded 1717; royal charter 1751). Ashmolean opened 1683 as Britain's first public museum (Ashmole gift 1682). Cotton library (958 MSS; Beowulf, Gawain, Lindisfarne Gospels) bequeathed to the nation 1700, fire-damaged 1731; Harleian library (begun by buying d'Ewes's 600+ MSS in 1704/05; 7,660 MSS total) sold to the nation for £10,000; both became British Museum foundation collections under the 1753 Act. Momigliano's 1950 thesis frames these practices as the matrix of modern historical method (antiquarian evidence absorbed into narrative history).
   https://www.sal.org.uk/about-us/our-history/ ; https://www.ashmolean.org/history-ashmolean ; https://www.dhi.ac.uk/projects/cotton-manuscripts/ ; https://www.rct.uk/collection/1071987/a-catalogue-of-the-harleian-manuscripts-in-the-british-museum-v-1 ; https://doi.org/10.2307/750215

6. **Early Orientalism ran through missions, commerce and learned societies.** Confucius Sinarum Philosophus (Paris 1687) presented a Jesuit team translation with Couplet's letter boasting of Confucius entering the Bibliotheque Royale and spreading "per omnem late Europam". Anquetil-Duperron retrieved the Zend-Avesta at Surat (1758-60), deposited 180 Oriental MSS in the Bibliotheque du Roi (1762), published the translation (1771), survived a forgery charge led by William Jones, and was vindicated (Tychsen, Heeren 1791-94) — the authenticity question had become the gatekeeping test for non-biblical sacred texts.
   https://archive.org/details/confuciussinarum00conf ; https://www.iranicaonline.org/articles/anquetil-duperron ; https://archive.org/details/zendavestaouvrag03anqu

7. **Jones's 1786 discourse is the era's methodological manifesto** — full text harvested: the Sanskrit passage postulating a common source for Sanskrit, Greek, Latin (plus Gothic, Celtic, old Persian), together with an explicit warning that etymology is "a medium of proof so very fallacious", and a four-part evidentiary scheme (languages/letters; philosophy/religion; sculpture/architecture; written memorials). Institutional vehicle: Asiatick Society, Calcutta, 15 Jan 1784, journal Asiatick Researches from 1788.
   https://www.eliohs.unifi.it/testi/700/jones/Jones_Discourse_3.html ; https://www.britannica.com/topic/Asiatic-Society-of-Bengal

8. **Version-comparison culture extended to Islam**: Sale's 1734 Koran supplied notes "from the most approved commentators" (above all al-Baydawi, whose 14th-c. manuscript he could consult at the Dutch Church, Austin Friars), assessed predecessor translations critically (Du Ryer 1649, Marracci 1698 "very exact... too literal"), and claimed to render "impartial justice" to the original — the same apparatus logic as contemporary biblical criticism, applied outside Christianity.
   https://archive.org/details/comprehensivecom01sale ; https://www.jstor.org/stable/24395514

Synthesis for RQ7: across monastic congregations (Maurists), the Jesuit Bollandists, Oratorian/Protestant biblical scholars, Cambridge classicists, London antiquaries and Calcutta orientalists, one shared transformation appears — old documents came to be studied comparatively as physical artifacts and textual witnesses whose relations must be reconstructed (authenticity, date, genealogy), with institutions (congregations, societies, museums, libraries, journals) guaranteeing continuity, collaboration and peer scrutiny. Interlinear additions and scholia henceforth reached readers chiefly through such institutionalized editions and catalogues.

## Remaining gaps
- Bollandist internal method detail (Papebroch's Propylaeum antiquarium circa quo, Aprilis II 1675; the Mabillon-Papebroch reconciliation correspondence) — only secondary summaries obtained; specific primary passages not yet located online. "(ยังไม่พบข้อมูลยืนยัน)"
- Maurist critical edition of Augustine (opera omnia, Paris 1679-1700, 11 vols.) — no digitized set identified in this loop; only the Benedictine Acta Sanctorum ordinis S. Benedicti volumes (d'Achery/Mabillon) were located. "(ยังไม่พบข้อมูลยืนยัน)"
- Momigliano 1950 full argument — JSTOR PDF bot-blocked; relied on bibliographic record, abstract summaries and citing literature; direct quotations pending.
- Bentley's reported phrase on Codex Alexandrinus ("the oldest and best in the world") — encyclopedic sourcing only; original letter not verified.
- Bentley's Horace 1711 preface (his stated editorial principles) not yet extracted from a scan.
- Oupnek'hat (Anquetil-Duperron 1801-02) — title-page only; content analysis pending.
- Thai-language scholarship on these topics not searched in this loop.

## Blocked sources (honest record)
- OpenAlex API: request refused — daily budget exhausted ("Rate limit exceeded... Resets at midnight UTC").
- websearch tool: repeated HTTP 429 throttling; required long spacing between successful calls; several planned queries (early Bollandist/Simon-specific) replaced by fallback fetches.
- r.jina.ai proxy for britannica.com: temporarily 403 (domain-level abuse block until ~14:03 UTC 2026-08-25); Britannica pages used were fetched earlier via webfetch successfully.
- JSTOR stable pages (750215; 24395514): client-challenge bot protection; metadata/snippets only.
- archive.org download of dli.ministry.15953 (Sale 1801) _djvu.txt: connection closed unexpectedly; substituted comprehensivecom01sale (1882 Wherry vol. I containing the Preliminary Discourse).
- bollandistes.org "our-heritage" page: transport error on one attempt (who-we-are succeeded).
- newadvent.org Catholic Encyclopedia: correct article numbers for "Acta Sanctorum"/"Bollandists" unknown; two guesses returned unrelated articles; abandoned rather than cited wrongly.
