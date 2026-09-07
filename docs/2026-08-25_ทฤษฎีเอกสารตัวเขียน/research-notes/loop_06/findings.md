# Loop 06 — Findings: Digital Humanities, Computational Stemmatics, New Philology

> สืบค้นสด 25 ส.ค. 2569 | ทุก URL ผ่าน live fetch

## 1. เครื่องมือสอบเทียบอัตโนมัติ (automated collation)

- CollateX (Huygens Institute/KNAW, Amsterdam; developed 2011, v1.7.1) — variant graph data model; outputs alignment table, variant graph, TEI parallel segmentation; Gothenburg model pipeline: https://collatex.net ; https://www.huygens.knaw.nl/en/projecten/automated-collation-of-literary-and-historical-texts/ ; https://pypi.org/project/collatex/
- Ronald Haentjens Dekker et al., "Computer-supported collation of modern manuscripts: CollateX and the Beckett Digital Manuscript Project" (2014, peer-reviewed): https://pure.knaw.nl/portal/en/publications/computer-supported-collation-of-modern-manuscripts-collatex-and-t
- Elisa Nury, "Visualizing Collation Results," Variants 14 (2019): 75-94, DOI 10.4000/variants.950 — PyCoviz shared/unique errors, case Calpurnius Flaccus: https://journals.openedition.org/variants/950?lang=fr
- HyperCollate (markup-aware): https://huygensing.github.io/hyper-collate/ ; workshop materials (Dekker, Andrews, Birnbaum, van Zundert): https://collatex.obdurodon.org/

## 2. HTR/AI การอ่านลายมือ

- Transkribus (READ-COOP SCE since 2019; EU Transcriptorium FP7 + READ H2020, Univ. Innsbruck origin; 300+ public HTR models, 100+ languages incl. Tibetan pecha model from ERC TibSchol): https://readcoop.eu/ ; https://www.transkribus.org/what-is-handwritten-text-recognition ; https://www.oeaw.ac.at/acdh/what-we-offer/transkribus
- Melissa Terras, "Inviting AI into the Archives..." in Archives, Access and Artificial Intelligence (transcript Verlag), DOI 10.14361/9783839455845-008: https://www.transcript-open.de/doi/10.14361/9783839455845-008?html
- Muehlberger et al., "Transforming scholarship in the archives through handwritten text recognition," Journal of Documentation (2019): https://www.emerald.com/insight/content/doi/10.1108/JD-07-2018-0114/full/pdf
- Systematic review of Transkribus in published research (PMC open access): https://pmc.ncbi.nlm.nih.gov/articles/PMC9205146

## 3. Computational stemmatics / phylogenetics

- O'Hara & Robinson, "Computer-Assisted Methods of Stemmatic Analysis," CTP Occasional Papers I (1993): 53-74 — PAUP cladistics + VBase: DOI 10.5281/zenodo.3940641 (https://www.canterburytalesproject.org/articles) ; full text: https://textualscholarship.org/newstemmatics/data/WBPanal.pdf
- Barbrook, Blake, Howe, Robinson, "The Phylogeny of the Canterbury Tales," Nature 394 (1998): 838-839 — landmark: listed at https://talesofcanterbury.org/MI/html/editorial/menu/history.html
- Windram, Spencer, Howe, "Identification of Exemplar Change... Maximum Chi-Squared Method," LLC 20 (2005): 189-204 — contamination detection
- Bayesian phylogenetics for textual transmission, Digital Scholarship in the Humanities (2023): https://academic.oup.com/dsh/article/39/1/258/7477852 — reviews NT networks (Spencer/Wachtel/Howe), Carlson Galatians, Turnbull; CBGM critique as non-phylogenetic
- Counter-position: "Why phylogenetic methods do not work very well in textual transmission," Revue d'Histoire des Textes (Brepols, 2018), DOI 10.1484/J.RHT.5.114895: https://www.brepolsonline.net/content/journals/10.1484/J.RHT.5.114895
- Complexity-science simulation (~2000 medieval mss): PNAS Nexus 5(7) (2026): https://academic.oup.com/pnasnexus/article/5/7/pgag207/8724046 ; preprint arXiv:2505.19246

## 4. Multitext / oral-tradition editing

- Homer Multitext (CHS Harvard; Dué & Ebbott; Venetus A = Marcianus Graecus Z.454 [822], 10th c., oldest complete Iliad + scholia; NEH 2012; full digital edition 2017): https://www.homermultitext.org/ ; intro: http://www.homermultitext.org/manuscripts/venetusA/VenA-Introduction-2014/
- Dué & Ebbott, "Digital Criticism: Editorial Standards for the Homer Multitext," DHQ 3.1 (2009): http://www.digitalhumanities.org/dhq/vol/003/1/000029.html
- Dué & Ebbott, "The System of Homeric Epic," Classical Continuum (2026) — Parry-Lord recomposition-in-performance; no single original to reconstruct; mouvance concept (Zink) applied to Homer: https://continuum.fas.harvard.edu/the-system-of-homeric-epic/
