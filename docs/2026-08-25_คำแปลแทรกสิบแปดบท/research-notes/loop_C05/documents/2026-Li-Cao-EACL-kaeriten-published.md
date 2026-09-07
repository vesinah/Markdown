# Document: Li & Cao kaeriten automaton paper - peer-reviewed EACL 2026 version confirmed

- Harvested: 2026-08-26 (Loop C05)
- Landing: https://aclanthology.org/2026.eacl-long.285/
- DOI: 10.18653/v1/2026.eacl-long.285
- Status: full ACL Anthology landing page harvested (abstract, biblio, citation exports). Crossref record independently verified via api.crossref.org bibliographic query. Supersedes the arXiv-only citation recorded in loop B07.

## Bibliographic record

- Title: Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese
- Authors: Zilong Li, Jie Cao
- Venue: Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers), EACL 2026
- Publisher: Association for Computational Linguistics; Rabat, Morocco; March 2026
- Pages: 6031-6045
- ISBN (volume): 979-8-89176-380-7
- Editors: Vera Demberg, Kentaro Inui, Lluis Marquez
- Bibkey: li-cao-2026-translation
- Preprint lineage: arXiv:2511.05239 (v1 published 2025-11-07; v2 updated 2026-01-21 per arXiv API id_list query)
- Code/data (per loop B07 harvest): https://github.com/shiryusann/KanbunKundoku

## Abstract (verbatim from ACL Anthology)

Ancient people translated classical Chinese into Japanese using a system of annotations placed around characters. We abstract this process as sequence tagging tasks and fit them into modern language technologies. The research on this annotation and translation system faces a low resource problem. We alleviate this problem by introducing an LLM-based annotation pipeline and constructing a new dataset from digitized open-source translation data. We show that in the low-resource setting, introducing auxiliary Chinese NLP tasks enhances the training of sequence tagging tasks. We also evaluate the performance of Large Language Models (LLMs) on this task. While they achieve high scores on direct machine translation, our method could serve as a supplement to LLMs to improve the quality of character's annotation.

## ACL citation string (as published)

Zilong Li and Jie Cao. 2026. Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese. In Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers), pages 6031-6045, Rabat, Morocco. Association for Computational Linguistics.

## Key points for the manuscript

1. CITATION UPGRADE: replace "arXiv:2511.05239" wherever it appears in draft chapters with the EACL 2026 proceedings form above; content claims already documented in B07 (kaeriten = stack-sortable permutations; Catalan bound; PDA + transducer; 9,292-sentence dataset; RoBERTa tagger vs LLM comparison) carry over to the published text.
2. Peer-review venue type matters for the book's argument: a computational-linguistics conference proceeding now canonizes the formal-language-theory treatment of kunten reading marks alongside the philological literature (Shimano lineage, Tsutsumi et al. schema-vs-practice).
3. The published abstract reframes slightly vs arXiv v2 wording: sequence-tagging abstraction, LLM-based annotation pipeline for low resource, auxiliary Chinese NLP tasks as training aids, and LLMs as strong translators but weak annotators - use the published abstract when quoting.

## Verification trail

- Crossref: api.crossref.org/works?query.bibliographic="Translation via Annotation ..." returned DOI 10.18653/v1/2026.eacl-long.285, container-title = EACL 2026 Long Papers, issued 2026.
- arXiv API: export.arxiv.org/api/query?id_list=2511.05239 -> latest id http://arxiv.org/abs/2511.05239v2, published 2025-11-07, updated 2026-01-21 (no journal_ref field set on the preprint metadata itself).
