# Loop 01 Findings — Ancient Western scholarship on texts before the 14th c. CE (Alexandrian tradition and ancient grammarians as origin of annotation/scholia culture)

Date: 2026-08-25
Loop: 01 of project interlinear_gloss_18ch
Method note: The websearch tool returned HTTP 429 on every attempt this session; discovery was done via Crossref REST API, archive.org search API + full-text downloads, Unpaywall API, direct page fetches, and one CHS WordPress site-search render. OpenAlex was unusable (daily budget exhausted). All claims below come only from material actually fetched this session.

## Queries executed

Search-tool queries (all failed with HTTP 429):
1. websearch: "Aristarchus of Samothrace Homeric editions hypomnemata Alexandrian Library scholarship" — 429
2. websearch: "critical signs obelus asterisk diple ancient Greek scholarship Homeric papyri" — 429 (two attempts)
3. websearch: "McNamee 'Marginalia and Glosses in Bookrolls' ancient Greek bookrolls annotation practice" — 429

API / site queries (executed):
4. Crossref works?query.bibliographic=McNamee+Marginalia+Glosses+Bookrolls — returned only reviews of an unrelated book (Hauptman)
5. Crossref query.bibliographic=Schironi+alexandrian+scholarship+Homer — found Schironi's Wiley encyclopedia entries (Alexandrian Scholarship; hupomnemata; Aristonicus; Didymus)
6. Crossref query.bibliographic=Dickey+Ancient+Greek+Scholarship+guide — found Dickey 2007 book DOIs
7. Crossref query.bibliographic=transmission+Homeric+scholia+Alexandrian+editors+medieval+manuscripts — weak/irrelevant hits
8. Crossref query.bibliographic=critical+signs+Homer+papyri+obelus+asterisk — found M.L. West 1967 chapters; Breen 2021; Haslam 2011
9. Crossref query.bibliographic=The+Best+of+the+Grammarians+Aristarchus+Samothrace+Schironi — confirmed book DOI 10.3998/mpub.8769399 + Hunter review (JHS 2019) + Pontani review (CR 2022)
10. Crossref query.bibliographic=Pfeiffer+History+Classical+Scholarship+Beginnings+Hellenistic — confirmed via reviews (Reardon 1968; Muir 1970; Wilson 1969)
11. Crossref query.bibliographic=Venetus+A+manuscript+scholia+Iliad+multitext — found Dué (ed.) "Recapturing a Homeric Legacy" review (Phoenix 2011)
12. Unpaywall v2 by DOI: 10.1002/9781444350302.wbhe0074 (Schironi, Alexandrian Scholarship) = OA False; 10.1093/oso/9780195312928.001.0001 (Dickey) = OA False; 10.1002/9781444350302.wbhe1065 (Haslam, Papyri Homeric) = OA False; 10.3998/mpub.8769399 (Schironi UMP) = OA False; 10.1353/phx.2018.0038 = OA False
13. Unpaywall v2/search?query=marginalia glosses bookrolls — HTTP 500
14. archive.org advancedsearch: title:(history of classical scholarship) creator:(Sandys); title:(grammar Dionysios Thrax); title:(aristarchi studiis homericis); creator:(Nauck)+title:(Aristophanis); title:(homer the preclassic) — identifiers retrieved; Lehrs + Sandys + Davidson downloaded as djvu.txt full texts; Nauck only on Google-scanned copies; Homer the Preclassic no hits
15. Direct fetches: https://www.homermultitext.org/ ; https://www.homermultitext.org/texts.html ; https://www.homermultitext.org/facsimile/ (JS-only, empty) ; https://www.homermultitext.org/hmt-docs/about/ (404) ; https://github.com/homermultitext/hmt-archive ; https://chs.harvard.edu/?s=Aristarchus (server-rendered snippets) ; https://chs.harvard.edu/chapter/20-ptolemaic-homers/ (empty body, JS-rendered) ; https://chs.harvard.edu/chapter/introduction-pp-3-8/ (empty) ; chs WP-API wp-json (403)
16. Fallback engines tried from bash: html.duckduckgo.com (anomaly/blocked), mojeek.com (403), bing.com (returned degraded results for quoted query), papyri.info/ddbdp/p.fay;;3 (Anubis bot-wall)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| J.E. Sandys | A History of Classical Scholarship, vol. 1 (ch. VIII, The Alexandrian Age) | 1903 | https://archive.org/details/historyofclassic01sandiala | Full text downloaded; Zenodotus/Aristophanes/Aristarchus careers; obelus and six critical signs; Didymus-Aristonicus-Herodian-Nicanor named in Venetus A scholia; Techne transmission chain |
| T. Davidson (trans.) | The Grammar of Dionysios Thrax | 1874 | https://archive.org/details/grammarofdionysi00dionuoft | Complete public-domain English translation of the Techne incl. translator preface (Suidas life; Bekker 1816 editio princeps; ancient scholiasts on it) |
| K. Lehrs | De Aristarchi Studiis Homericis (3rd ed.), esp. p. 240 | 1882 | https://archive.org/details/dearistarchistud00lehr | Full text downloaded; Latin discussion attributing obelus to Zenodotus' edition; keraunion/sigma-antisigma/asteriseum to Aristophanes; periestigmene diple and asterisk usage to Aristarchus; refutes Leogoras diple legend |
| Homer Multitext project | Project pages + texts.html (Venetus A) | accessed 2026 | https://www.homermultitext.org/texts.html | Venetus A = Marciana 822 = Graecus Z.454; scholia published by zones incl. INTERLINEAR scholia; open CEX data releases |
| Homer Multitext | hmt-archive GitHub README | accessed 2026 | https://github.com/homermultitext/hmt-archive | Machine-readable archival data, IIIF manifests, release conventions for Venetus A texts/images |
| G. Nagy (CHS site search snippets only) | Introduction pp.3-8; ch. 20 "Ptolemaic Homers" (Homer the Preclassic) | 2010 | https://chs.harvard.edu/chapter/20-ptolemaic-homers/ | Snippets only (full chapter JS-blocked): Aristarchus' editorial work completed not long after 150 BCE; Ptolemaic "eccentric" Homer papyri (c.300-150 BCE) vs standardized vulgate |
| F. Schironi | The Best of the Grammarians: Aristarchus of Samothrace on the Iliad (Univ. of Michigan Press) | 2018 | https://doi.org/10.3998/mpub.8769399 | Metadata only this session (908 pp., reviews by Hunter JHS 2019 and Pontani CR 2022 confirm scope: Aristarchus on the Iliad); not OA |
| F. Schironi | "Alexandrian Scholarship"; "hupomnemata"; "Aristonicus"; "Didymus" in The Homer Encyclopedia (Wiley-Blackwell) | 2011 | https://doi.org/10.1002/9781444350302.wbhe0074 | Metadata only; paywalled (Unpaywall: OA False) |
| E. Dickey | Ancient Greek Scholarship: A Guide to Finding, Reading, and Understanding Scholia, Commentaries, Lexica... (OUP) | 2007 | https://doi.org/10.1093/oso/9780195312928.001.0001 | Metadata only; paywalled (Unpaywall: OA False) |
| M.L. West | The Ptolemaic Papyri of Homer (in Studies in Greek Elegy and Iambus? — book chapters, De Gruyter reprint) | 1967 | https://doi.org/10.1007/978-3-663-20347-6_2 | Metadata only; standard corpus-study of Ptolemaic Homer papyri (incl. those bearing critical signs); paywalled |
| M. Haslam | "Papyri, Homeric", The Homer Encyclopedia | 2011 | https://doi.org/10.1002/9781444350302.wbhe1065 | Metadata only; paywalled |
| C. Breen | "The use of asterisk and obelus in the Cathach" | 2021 | https://doi.org/10.2307/j.ctv1rm2558.10 | Metadata only; evidence that Alexandrian-derived asterisk/obelus signs reached early medieval Insular manuscripts |
| R. Pfeiffer | History of Classical Scholarship from the Beginnings to the End of the Hellenistic Age (Clarendon) — existence confirmed via reviews by Reardon (CP 1968), Muir (G&R 1970), Wilson (CR 1969) | 1968 | https://doi.org/10.1017/s0009840x00303523 (Wilson review) | Metadata only this session; content not fetched |
| C. Due (ed.) | Recapturing a Homeric Legacy: Images and Insights from the Venetus A Manuscript of the Iliad — noted via Phoenix review (Janz 2011) | 2009/2011 | https://doi.org/10.1353/phx.2011.0001 | Metadata only; key modern volume on Venetus A |

## Key findings (with URLs)

1. Zenodotus of Ephesus (c. 325–234 BCE), first Librarian of Alexandria under Ptolemy Philadelphus, classified the epic poets, compiled a Homeric glossary, and produced (before 274 BCE) "the first scientific edition of the Iliad and Odyssey": based on comparison of numerous MSS, poems divided into 24 books each, spurious lines marked with a marginal obelus; Sandys calls his recension "the first recension of any text which aimed at restoring the genuine original," and notes our knowledge of it rests almost entirely on the scholia of Venice MS A. Source: https://archive.org/details/historyofclassic01sandiala (pp. 119–121).

2. Aristophanes of Byzantium (Librarian from c. 195/180 BCE) originated new critical signs beyond Zenodotus' obelos: the asterisk (sense incomplete / metrical change in lyric), the keraunion (collective obelus for runs of spurious lines), and the antisigma/inverted sigma (tautology); he also created the poetic "canons" (ranked author lists per genre), first collected edition of Pindar, division of lyric texts into metrical kola to detect interpolation, and lexical works on comedy/tragedy. Source: https://archive.org/details/historyofclassic01sandiala (pp. 127–129).

3. Aristarchus of Samothrace (c. 220–145 BCE) wrote continuous commentaries (hypomnemata) filling 800 volumes plus separate critical treatises (syggrammata), made two recensions of Iliad/Odyssey "with critical and explanatory symbols in the margin of each," using six signs: obelus (spurious line), diple (noteworthy), dotted diple/periestigmene (where his text differed from Zenodotus'), asterisk (wrongly repeated verse), stigme (dot marking suspected spuriousness), stigme+antisigma (disturbed line order). His method: careful study of Homeric usage, strong reliance on manuscript authority over conjecture, and comments on subject matter. Sources: https://archive.org/details/historyofclassic01sandiala (pp. 131–133); corroborated and refined in Lehrs 1882, p. 240: https://archive.org/details/dearistarchistud00lehr (Lehrs attributes keraunion etc. to Aristophanes, discusses Aristarchus' asterisk/asterized obelus usage, and demolishes the pseudo-testimony of a pre-Aristarchan "Leogoras" diple edition).

4. Transmission chain from Alexandrian scholarship onto medieval manuscript margins is explicitly documented: Didymus (c. 65 BCE–10 CE, "Chalcenteros," 3500–4000 books) attempted to reconstruct Aristarchus' lost recensions; at the end of EACH BOOK of the Iliad in Venice MS A (Venetus A), the scribe names four sources of its scholia: Didymus, Aristonicus (whose On the Signs of Aristarchus explained the critical marks), Herodian (prosody/accentuation of the Iliad, c. 160 CE), and Nicanor (Homeric punctuation, c. 130 CE). Sandys even reproduces margin symbols with Aristonian scholia at Il. 8.535–541. Source: https://archive.org/details/historyofclassic01sandiala (pp. 140–142).

5. The grammarians' tradition begins inside the Alexandrian circle: Dionysius Thrax (b. c. 166 BCE, pupil of Aristarchus) wrote the extant ~16-page Techne grammatike defining grammar's six parts — trained reading (anagnosis), explanation of poetical figures/glossai (exegesis), dialects and historiai, etymology, analogy, and criticism of poems (krisis) — i.e., the professional toolkit out of which glossing and scholia grew; Suidas records he taught in Rome under Pompey; the treatise was printed with its ancient scholia (Charoboskos, Diomedes, Melampus, Porphyry, Stephanos) in Bekker's Anecdota Graeca (1816). Full translation harvested: https://archive.org/details/grammarofdionysi00dionuoft .

6. The Techne then anchors the multi-century transmission: it "remained the standard work on grammar for at least 13 centuries," was used by the imperial-age grammarians Apollonius Dyscolus and Herodian, received late-antique commentaries (Choeroboscus, 6th c.; Stephanus, 7th c.), generated Byzantine catechisms (erotemata, e.g., Moschopulos), and reached Renaissance Italy via Byzantine refugees (Chrysoloras, Gaza, Lascaris, Chalcondylas). Source: https://archive.org/details/historyofclassic01sandiala (p. 139).

7. Venetus A (Marciana Graecus Z. 454 = codex 822, 10th c.) preserves the fullest medieval witness of this Alexandrian-derived apparatus, including MAIN, INTERMARGINAL, INTERIOR, EXTERIOR and — directly relevant to this project — INTERLINEAR scholia, all published openly by the Homer Multitext with page-zone tagging and IIIF images; complete machine-readable CEX releases are on GitHub. Sources: https://www.homermultitext.org/texts.html ; https://github.com/homermultitext/hmt-archive .

8. Modern reference framework (metadata-level verification this session): Francesca Schironi, The Best of the Grammarians: Aristarchus of Samothrace on the Iliad (UMP 2018, 908 pp.; reviews R. Hunter JHS 2019 and A. Pontani CR 2022) is the current standard monograph on Aristarchus; her Wiley Homer Encyclopedia entries cover "Alexandrian Scholarship," "hupomnemata," "Aristonicus," "Didymus." Eleanor Dickey, Ancient Greek Scholarship (OUP 2007) is the standard guide to reading scholia/commentaries/lexica. M.L. West (1967) catalogued the Ptolemaic Homer papyri, and Haslam's "Papyri, Homeric" (2011) is the encyclopedia treatment. CHS/Nagy snippets (site search) state that Aristarchus' editorial work was completed "not long after 150 BCE," after which the vulgate standardizes while Ptolemaic-era "eccentric" Homer papyri (c. 300–150 BCE) diverge. URLs: https://doi.org/10.3998/mpub.8769399 ; https://doi.org/10.1002/9781444350302.wbhe0074 ; https://doi.org/10.1093/oso/9780195312928.001.0001 ; https://doi.org/10.1007/978-3-663-20347-6_2 ; https://doi.org/10.1002/9781444350302.wbhe1065 ; https://chs.harvard.edu/chapter/20-ptolemaic-homers/

9. Continuity into the Middle Ages beyond Byzantium: Breen (2021) documents use of asterisk and obelus in the Cathach (early Irish psalter), showing Alexandrian sign practice traveled into early-medieval Western scriptoria. URL: https://doi.org/10.2307/j.ctv1rm2558.10 (metadata only).

10. Physical annotation practice on papyrus rolls (RQ4 core): what THIS session could verify from actually-fetched text is limited to (a) Sandys' repeated testimony that critical symbols stood "in the margin of" rolls/copy-texts and that obeli were "marked with a marginal obelus" (https://archive.org/details/historyofclassic01sandiala), and (b) HMT's codicological zone taxonomy for the later codex (intermarginal/exterior/interior/interlinear: https://www.homermultitext.org/texts.html). The specialized modern studies of roll margins themselves were NOT accessible this session — for McNamee's findings write "(ยังไม่พบข้อมูลยืนยัน)" until her work is fetched.

## Remaining gaps

1. McNamee, Marginalia and Glosses in Bookrolls of Canonical Literary Authors (Univ. of Michigan Press, 2007): NO accessible copy or substantive description found this session (Crossref query returned irrelevant hits; Unpaywall search endpoint errored 500). Her specific empirical claims about gloss/marginalia placement in bookrolls remain unverified here — mark any such claim "(ยังไม่พบข้อมูลยืนยัน)".
2. Dickey, Ancient Greek Scholarship (2007) and Pfeiffer (1968): existence and scope confirmed via Crossref/reviews only; contents NOT read this session.
3. Homer papyri physically bearing critical signs: West 1967 and Haslam 2011 are paywalled; the intended primary artifact check of P. Fayum 3 failed because papyri.info is behind Anubis bot protection. No primary papyrus image/transcript was therefore captured this loop.
4. CHS/Nagy chapters ("Ptolemaic Homers"; Introduction) are JavaScript-rendered and returned empty bodies; WP REST API 403. Only two search-snippet sentences were captured; deeper Nagy arguments unverified.
5. Websearch tool was down (HTTP 429 throughout), so query diversity in English/German/French/Greek could not be run as planned; German-language literature (e.g., Ludwich, Aristarchs Homerische Textkritik, 1884; Uhlig on Apollonius Dyscolus) was seen only in Sandys/Lehrs footnotes, not independently consulted.
6. Apollonius Dyscolus and Herodian were covered only via Sandys' summary and Lehrs' passing remarks; no dedicated primary-text harvest (e.g., Uhlig editions) this loop.

## Blocked / failed accesses recorded honestly

- mcp.exa.ai websearch: HTTP 429 (all attempts)
- api.openalex.org: daily budget exhausted error
- chs.harvard.edu chapter pages + wp-json: empty body / 403
- papyri.info (Anubis proof-of-work bot wall)
- html.duckduckgo.com (anomaly block), www.mojeek.com (403), bing.com (query degradation)
- https://www.homermultitext.org/hmt-docs/about/ (404), /facsimile/ (JS-only)
