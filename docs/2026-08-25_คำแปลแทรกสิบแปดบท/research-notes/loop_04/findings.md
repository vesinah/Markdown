# Loop 04 findings — Humanist philology, 14th-16th centuries

Project: output\2026-08-25_คำแปลแทรกสิบแปดบท (Thai academic book on interlinear additions, interlinear glosses, scholia)
Loop topic: How Renaissance humanists studied ancient and medieval manuscripts (recovery of Greco-Roman texts and critical study of their own recent past).
Date of loop: 2026-08-25
Status of tools at run time: websearch tool returned HTTP 429 on every attempt (rate-limited upstream); OpenAlex API also HTTP 429. Work was done with Crossref REST API, archive.org advancedsearch/metadata/download APIs, and direct download of public-domain OCR texts.

## Queries executed

Blocked / failed:
- websearch tool: "Petrarch Livy manuscripts ... Salutati", "Poggio Bracciolini Quintilian 1416 Saint Gall", "Lorenzo Valla Donation of Constantine", "Poliziano Miscellanea textual criticism" — all HTTP 429 (blocked).
- OpenAlex REST works?search=... : HTTP 429 (blocked).

Successful:
1. archive.org advancedsearch JSON: title:(history of classical scholarship) — found Sandys scans.
2. archive.org advancedsearch JSON: valla AND (donation of constantine | falso credita | constantini donatione) — found Coleman 1922 translation + Latin editions.
3. archive.org advancedsearch JSON: poliziano AND (miscellanea|miscellaneorum) — found 1489 incunable scans (BNCF via ProQuest).
4. archive.org advancedsearch JSON: erasmus (novum instrumentum OR adagia) — found 1516 Novum Instrumentum facsimile.
5. archive.org advancedsearch JSON: title:(emendatione temporum) OR "novum instrumentum omne" — found Scaliger 1598/1629 scans.
6. Crossref query.bibliographic: Pfeiffer History of Classical Scholarship 1300-1850; Grafton Joseph Scaliger; Grafton Defenders of the Text; Botley Learning Greek in Western Europe; BMCR-filtered review queries; humanist marginalia; Poliziano collation; Erasmus Novum Instrumentum.
7. Crossref single-DOI lookups incl. license check of De Gruyter chapter 10.1515/9783111560229-006 (CC BY 4.0).
8. Direct downloads of OCR (_djvu.txt): Sandys vol. II; Valla/Coleman 1922; Poliziano 1489 (OCR unusable, images only); Erasmus 1516; Scaliger 1598.
9. Treccani Dizionario Biografico pages (Bracciolini etc.) attempted — page body not served to plain fetcher (JS-rendered); recorded as blocked.

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| J. E. Sandys | A History of Classical Scholarship, vol. II (from the Revival of Learning) | scan dated 1903 (IA metadata); work published by Macmillan | https://archive.org/details/historyofclassic02sandiala | Narrative history covering Petrarch to Casaubon era; primary quarry for RQ1-RQ6; quotes Poggio's own letters; full text downloaded and excerpted |
| C. B. Coleman (ed./trans.) | The Treatise of Lorenzo Valla on the Donation of Constantine (Yale UP; text + English translation) | 1922 | https://archive.org/details/treatiseoflorenz00valluoft | Historiographic assessment of Valla's 1440 proof as pioneer historical criticism; full treatise text/translation downloaded |
| Angelo Poliziano | Miscellaneorum centuria prima (Florence, incunable) | 1489 | https://archive.org/details/ita-bnc-in2-00001955-001 (+ two more BNCF copies) | Primary artifact of the founding text of ad-locum philology; scan is image-only, machine OCR unusable (ProQuest Early European Books watermark pages only) |
| Desiderius Erasmus | Novum Instrumentum omne (Basel: Froben) | 1516 | https://archive.org/details/novum-instrumentum-omne-diligenter-ab-erasmo-roterodamo-greek-latin-1516 | Facsimile of first published Greek NT; dedication to Leo X and Paraclesis ad lectorem extracted from OCR |
| Joseph Justus Scaliger | Opus de emendatione temporum (Leiden: Ex officina Plantiniana, F. Raphelengius) | 1598 | https://archive.org/details/ARes13105 | Expanded edition with Prolegomena; "Ad candidum lectorem" preface states method (subject = civil chronologies; goal = emendatio; epochs vs tropical year); OCR extracted |
| Rudolf Pfeiffer | History of Classical Scholarship from 1300 to 1850 (Oxford: Clarendon) | 1976 | reviews: 10.1017/S0009840X00226012 (Kenney, CR 1978); 10.2307/1850901 (Sullivan, AHR 1977); 10.2307/2860134 (Jardine, Renaissance Quarterly 1977) | Modern historiographic baseline for RQ7; book itself paywalled, verified via three independent book-review records |
| Anthony Grafton | Joseph Scaliger: A Study in the History of Classical Scholarship (Oxford) | vol. I 1983; vol. II 1993; OUP online 10.1093/oso/9780199206018.001.0001 | https://doi.org/10.1093/oso/9780199206018.001.0001 | Monograph on Scaliger's chronology and scholarship; chapters indexed incl. "Scaliger as Varro: The Chronologer's Task" |
| Anthony Grafton | Defenders of the Text: The Traditions of Scholarship in an Age of Science, 1450-1800 (Harvard UP) | 1991 | reviews: 10.1086/356141 (Isis); 10.1017/S0009840X00286277 (Reeve, CR 1993); 10.1086/367370 (Classical Philology) | Anti-teleological historiography of humanist philology vs "scientific revolution" framing |
| Paul Botley | Learning Greek in Western Europe, 1396-1529: Grammars, Lexica, and Classroom Texts (APS Transactions 100.2) | 2010 | book DOI 10.70249/9798893981179; ch. DOI 10.70249/9798893981179-004 (Greek Grammars), -005 (Greek Lexica), -009 (Printed Greek Lexica 1478-1529) | Infrastructure of Greek learning behind Erasmus' NT; chapter-level DOIs confirm structure |
| C. E. Nothaft | Josephus and New Testament Chronology in the Work of Joseph Scaliger (Int. Journal of the Classical Tradition) | 2016 | https://doi.org/10.1007/s12138-016-0403-9 | Current specialist study of Scaliger's chronological method and biblical chronology |
| Jill Kraye | Cicero, Stoicism and Textual Criticism: Poliziano on Kataskopha (in Classical Traditions in Renaissance Philosophy, Routledge) | 2024 reprint of classic study | https://doi.org/10.4324/9781003555858-2 | Demonstrates Poliziano's ad-locum textual criticism on a specific Miscellanea chapter |
| Giacomo Murano | Readers' Marks in Renaissance Manuscripts (in Thinking in the Margins, De Gruyter) | 2025 | https://doi.org/10.1515/9783111560229-006 | Directly relevant to RQ8 (annotation practice); Crossref confirms CC BY 4.0 open licence, but full text could not be machine-fetched (JS site) — content unread this loop |
| Sabbadini | Le scoperte dei codici latini e greci ne' secoli XIV e XV (Firenze) | 1905 | no OA copy located this loop (ยังไม่พบข้อมูลยืนยัน) | Foundational census of manuscript discoveries; cited throughout Sandys (esp. pp. 26-27 n. on Poggio's four expeditions) |

## Key findings (with URLs)

RQ1 — Petrarch, Boccaccio, Salutati (source: Sandys vol. II, URL above):
- Petrarch's working library was annotated: his Virgil with his own careful annotations survives in the Biblioteca Ambrosiana; in his Paris Pliny he drew a memory-sketch of the Vaucluse valley in the margin beside the fountain-of-the-Sorgue passage (Sandys, ch. I). He knew Livy intimately and lamented the lost second decade ("O si mihi totus contingeres", letter to Livy); he had only an imperfect copy of Quintilian and discovered Cicero's Letters to Atticus (writing a famous letter to dead Cicero).
- Boccaccio: a Laurentian Livy MS carries his introductory fly-leaf notes; he was the first humanist to quote Varro and may have brought the archetype of all Varro MSS from Monte Cassino; the story (via Benvenuto da Imola) of Monte Cassino's unguarded library — grass on window-sills, leaves torn out to make psalters and amulets — anchors the theme of medieval neglect that humanist recovery culture defined itself against.
- Coluccio Salutati (chancellor of Florence 1375-1406) systematically hunted texts: sought lost Livy decades, Pompeius Trogus, complete Curtius and Quintilian; obtained transcripts of the Verona Catullus (1375), Petrarch's Propertius, a Tibullus; in 1389 copied the Vercelli MS of Cicero Ad Familiares at Milan, and in 1392 received the Verona Ad Atticum transcript.

RQ2 — Poggio Bracciolini (Sandys, ch. III):
- Method = raiding monastic libraries during the Council of Constance vacancy (24 May 1415 - 11 Nov 1417), in four discriminated expeditions (Cluni 1415; St Gallen 1416; St Gallen again Jan 1417; Langres and other French/German houses summer 1417); discrimination of the expeditions is Sabbadini's (Scoperte, cited p. 26 n.).
- St Gall 1416: complete Quintilian Institutio oratoria found "plenum situ et pulvere squalentem" in a prison-like tower (Poggio to Guarino, 15 Dec 1416, Epp. i 5); Poggio copied it himself in 53 days; Petrarch had known only a mutilated text, Barzizza had composed fake missing parts. Same trip: Valerius Flaccus Argonautica i-iv 317, Asconius Pedianus on eight Cicero speeches.
- January 1417 expedition: Lucretius (copied for Poggio in a 'distant' monastery, ancestor-copy made by Niccoli now Laurentian), Manilius, Silius Italicus Punica, Ammianus Marcellinus books xiv-xxxi (Fulda source, later Vatican Reg. 1873; Poggio: "Ammianum Marcellinum ego latinis musis restitui cum illum eruissem e bibliothecis ne dicam ergastulis Germanorum"), grammarians Caper/Eutyches/Probus; also a copy of Vitruvius noted at St Gall (with further copies at Reichenau and Avignon).
- 1417 Langres finds: pro Caecina plus seven other Cicero speeches (three de lege agraria, two pro Rabirio, pro Roscio Comoedo, in Pisonem).
- Context discoveries: Lodi 1421 chest find (Bishop Gerardo Landriani) yielding complete De Oratore, Brutus, Orator; rumours of complete Livy (Cismar/Lübeck, Chartres c. 1413, Soroe Denmark) all ending in disappointment — shows recovery-culture limits.

RQ3 — Lorenzo Valla (Sandys ch. IV-V; Coleman 1922 URL above):
- Donation of Constantine attacked in 1440 while in Alfonso of Aragon's service, "on legal, linguistic, political, and historical grounds": style/content inconsistent with the claimed date, and the ancient MSS of the Sylvester legend contain nothing of any donation. First printed by Ulrich von Hutten 1517; Gibbon: the fictitious deed was "transpierced by the pen of Laurentius Valla".
- Coleman's introduction (1922) assesses it as "a conspicuous pioneer" achievement of modern historical criticism, noting Nicholas of Cusanus had anticipated parts of the argument in De concordantia catholica, but Valla established the proof for the world and first used effectively "the method of studying the usage of words in the variations of their meaning" — internal philological criticism.
- Elegantiae linguae Latinae: attacks medieval Latin, measures usage against Cicero and Quintilian, discriminates synonyms; book VI corrects ancient grammarians (Gellius, Nonius, Donatus, Servius); printed Venice 1471, 59 editions by 1536.
- Emendation method: emendations to Livy decade III-VI (Second Punic War books) entered the current text; Annotationes on Vulgate NT vs Greek (1444) were first published by Erasmus in 1505 — a direct Valla-to-Erasmus transmission line.

RQ4 — Angelo Poliziano:
- Miscellanea (1489): topics include Greek/Latin aspirate, chronology of Cicero's Familiar Letters, spelling Vergilius vs Virgilius, purple-dye discovery, aorist vs imperfect in sculptors' signatures; solves Gellius' riddle by reference to terminus and Ovid Fasti — i.e., argumentation ad locum from scattered ancient evidence.
- Sandys: "Politian was a keen investigator of all the ancient MSS that came within his reach in Florence or elsewhere"; he annotated the Aldine-type Horace (1482) and Virgil (1487) enterprises.
- Anti-Ciceronian program: against Cortesi/Scala, "I am not Cicero; what I really express is myself" — style pluralism underpinning eclectic emendation rather than imitation.
- Systematic collation claim: the characterization of Poliziano as founder of modern (stemmatic, collation-based) textual criticism is common in modern literature; directly verifiable anchor found this loop = Kraye's case-study chapter (DOI 10.4324/9781003555858-2) showing him weighing MS readings for one Ciceronian word. A primary-source statement of his collation procedure was NOT captured verbatim this loop (incunable scan unusable; Treccani DBI blocked) (ยังไม่พบข้อมูลยืนยัน for exact wording).
RQ5 — Erasmus:
- Adagia first 1500; second, vastly enlarged edition prepared at Aldus' house in Venice (1508) — proverb-commentary as annotation culture in print: "erudite illustrations of the meaning of ancient proverbial phrases... diversified by pungent criticisms on modern priests and princes".
- Novum Instrumentum (Froben, Basel, March 1516): first published Greek NT, with new Latin version and annotations "suggested by those of Valla, which Erasmus had discovered in 1505". Dedication to Leo X and Paraclesis ad lectorem extant in the 1516 facsimile (URL in table); Paraclesis urges that Christian philosophy be read as intensively as pagan schools, opening scripture to all.
- Erasmus marks, per Sandys, the transition of philology from Italy to the northern nations; his schoolbooks (De copia, De ratione studii) and editions (Seneca 1515, Jerome x3) institutionalized annotated reading.

RQ6 — Scaliger and Casaubon:
- J. J. Scaliger (1540-1609): self-taught Greek (Homer in 21 days via translation); early editions Festus 1575, Catullus/Tibullus/Propertius 1577 — "the first to point the way to a sounder method of emendation founded on the genuine tradition of the MSS"; despised Italian hap-hazard alteration. Manilius 1579 pivots to astronomy; De Emendatione Temporum 1583 "placed him at the head of all the living representatives of ancient learning".
- At Leyden (1593-1609, invited precisely not to teach): reconstructed Greek Eusebius from fragments + Georgius Syncellus MS obtained from Paris (1602) + Olympic-victor list traced via Casaubon (1605), published in Thesaurus temporum 1606; conjecture about Eusebius book I confirmed by Armenian version discovered 1818.
- 1598 Opus de emendatione temporum Prolegomena, "Ad candidum lectorem" (own words, OCR from ARes13105): subject-matter = "ratio Temporum civilium"; goal = "Emendatio"; emendation has two parts — investigation of epochs, and the true tropical year with lunar periods; polemic against rival world-epoch calculations (Septuagint-based, Olympiad-based) as "puerilis sententia".
- Petavius, Doctrina temporum (1627), devoted much space to criticizing Scaliger's De emendatione — immediate reception evidence. Modern continuation: Nothaft 2016 (Josephus/NT chronology in Scaliger); Grafton's two-volume monograph.
- Casaubon (1559-1614): autodidact Huguenot; Geneva professor 1582; married into Estienne family (Henri "guards his books as the griffins in India do their gold"); left France 1610 for England (invited by James I via patronage network); Scaliger's verdict on him: "the greatest man we now have in Greek".

RQ7 — Modern historiography:
- Pfeiffer 1976 covers exactly this loop's period inside a longer arc (reviews by Kenney "From Petrarch to Lachmann", Sullivan, Jardine — DOIs in table) — usable as periodization authority.
- Grafton: Joseph Scaliger vols (1983/1993, OUP online with chapter DOIs) reconstructs chronology-as-science; Defenders of the Text (1991) argues against the "humanists vs science progress" myth — both central for framing the Thai chapter's historiographic caveats.
- Botley 2010 documents the grammars/lexica/classroom infrastructure of Greek learning 1396-1529 (chapter-level DOIs verified) — context for why Erasmus' 1516 NT was possible.
- Kenney's CR 1995 review of Grafton vol. II is titled "Odium chronologicum" — handy phrase for scholarly quarrels over chronology.

RQ8 — Manuscript annotation practices vs emerging critical method:
- Continuity chain observable in sources gathered: Petrarch's annotated Virgil and margin-sketch (private reading apparatus) -> Boccaccio's fly-leaf notes on his Livy -> humanists annotating print (Poliziano's commissioned Horace/Virgil annotation work 1482/87) -> notes published as Miscellanea/Variae lectiones/Adversaria (fashion explicitly said by Sandys to have been "set by Politian and Victorius, by Turnebus and Muretus") -> Scaliger's explicit rejection of that fashion in favor of treating each author "as an undivided whole" (Bernays Ep. citation in Sandys) — i.e., marginal scholia migrated into print and then into systematic criticism.
- Modern direct treatment: Murano, Readers' Marks in Renaissance Manuscripts (De Gruyter 2025, CC BY 4.0 confirmed via Crossref) — identified but full text not readable by this toolchain this loop (JS-only site); flagged as priority fetch for next loop or manual access.

## Remaining gaps

1. Poliziano primary evidence of systematic collation (his collation notebooks / the "second centuria" material; e.g., the famous statement about correcting texts ex vetustis codicibus). Incunable OCR unusable; need either Sabbadini, or Bausi/Kraye full texts, or an English-language study (e.g., in Journal of the Warburg and Courtauld Institutes) — none fetched yet.
2. Murano 2025 chapter content (CC-BY but JS-blocked here) for RQ8; likewise broader note-taking literature (Ann Blair et al.) not yet sourced with verifiable URLs.
3. Vitruvius thread: only the St Gall copy note captured; Poggio's own Vitruvius copy/transmission (and its relation to the 1486 editio princeps) not yet documented from a citable source.
4. Boccaccio/Salutati detail rests wholly on one aging secondary source (Sandys 1908/1903); should be cross-checked against Sabbadini 1905 and modern studies (Witt, Black) — not yet accessible.
5. Casaubon coverage thin after 1600 (England years, Animadversions in Athenaeus); Pattison's Casaubon (1875) exists on archive.org but not fetched this loop.
6. OpenAlex abstract-level verification for Pfeiffer/Grafton/Botley blocked by 429; substance column currently relies on titles/reviews only.
7. Thai-language secondary literature on Renaissance philology: zero queries succeeded this loop (search tool down) (ยังไม่พบข้อมูลยืนยัน).

## Blocked sources record

- websearch tool: HTTP 429 all attempts.
- api.openalex.org: HTTP 429 all attempts.
- treccani.it DBI entries (Poggio Bracciolini etc.): HTML served but body JS-gated; no content retrieved.
- degruyterbrill.com document pages/PDF: no parseable body via fetch (DOI resolver returns only citation string).
- Poliziano 1489 _djvu.txt: downloaded but contains only ProQuest page-watermark boilerplate; no real OCR text.
