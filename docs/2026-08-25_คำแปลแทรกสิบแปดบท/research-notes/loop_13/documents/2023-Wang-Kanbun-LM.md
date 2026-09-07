# Kanbun-LM: Reading and Translating Classical Chinese in Japanese Methods by Language Models

## Metadata

| Field | Value |
|---|---|
| Authors | Hao Wang, Hirofumi Shimizu, Daisuke Kawahara (Waseda University) |
| Title | Kanbun-LM: Reading and Translating Classical Chinese in Japanese Methods by Language Models |
| Venue | Findings of ACL 2023; arXiv:2305.12759 |
| URL | https://aclanthology.org/2023.findings-acl.545/ ; https://ar5iv.labs.arxiv.org/html/2305.12759 |
| Code/data | https://github.com/nlp-waseda/Kanbun-LM |
| Access date | 2026-08-25 (abstract and related-work verified via ar5iv/arXiv HTML) |
| Language | English |
| Relevance | Loop 13 RQ5: modern AI infrastructure for kundoku/kanbun |

## Content notes

- Problem statement: kanbun (Classical Chinese read in Japanese, Kanbun-Kundoku) resources remain scarce in Japan compared with rich ancient-text resources in mainland China; the paper constructs "the first Classical-Chinese-to-Kanbun dataset in the world".
- Two tasks introduced: character reordering (embodying kaeriten-driven word-order inversion) and machine translation into kundoku-style Japanese.
- Follow-up literature (verified via arXiv:2511.05239v2 "Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese", 2025): Wang et al. 2023 dataset contains approximately 3,400 sentences restricted to classical Chinese poems from 7th-10th c. CE and lacks kundoku-mark annotations; the 2025 paper (a) proves expressiveness of kaeriten via an automaton/transducer that decodes marked text into Japanese sentences, reducing CC-Japanese translation to a kundoku-marks tagging task; (b) builds a new dataset from kanbun.info with LLM-generated marks validated by the automaton; (c) fine-tunes Classical Chinese LMs with multitask auxiliary Chinese NLP objectives, outperforming baselines and approaching some LLMs.
- Rule-based lineage: Yasuoka (2018) generated kaeriten from Universal Dependencies parses of classical Chinese (dependency arcs + POS); Yasuoka (2020) proposed a dictionary for okurigana attachment (yasuoka-2020-kanbun).
- Significance for the book chapter: demonstrates that the kunten apparatus (kaeriten + okurigana [+ kutōten punctuation]) is formally decodable — i.e., a fully explicit interlinear reading protocol — making it amenable to automata and language models.

## Related source (same loop)

- Gluch (Jagiellonian), "Kanbun-kundoku - Translation Procedure of Classical Chinese", https://ruj.uj.edu.pl/server/api/core/bitstreams/6f943ec8-1c6a-4275-a2e6-d8ad18835eec/content — presents/explains main features of a partially automated kanbun-kundoku translation procedure (landing text verified only in search snippet; full text not fetched this loop).
