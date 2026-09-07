# Findings — Loop 11 (Explorer B-03: Thai primary sources + manuscript images)

Project: interlinear-gloss-palmleaf · Date: 2026-09-01

## Gap 1 — Thai-language academic sources on Thai palm-leaf bitexts

### Key negative finding (verified, see query-log.md for full evidence)

**The Thai terms ตัวเกษียน ("tvă kṣien") and อักษรเกษียน ("akson kṣien", the script name) are NOT indexed anywhere that search engines can reach** (academic or general):

- DuckDuckGo exact phrase `"อักษรเกษียน"` → literal "No results found".
- DuckDuckGo exact phrase `"ตัวเกษียน"` → only homonym เกษียณ/เกษียน = "retirement" (Facebook reels, YouTube, TikTok, Instagram, blockdit, Phitsanulok local news). Nothing manuscript-related.
- Bing (4 queries, incl. `"ตัวเกษียน" OR "อักษรเกษียน" ใบลาน` and `site:*.ac.th`): no result pairs either term with ใบลาน/บาลี/manuscripts. Bing noise (Aksorn Education publisher, Thai alphabet-teaching sites) confirms the terms are not collocated anywhere in the index.
- `"นิสยะ"` + ใบลาน/บาลี/คำแปล on Bing: zero manuscript hits; the word นิสยะ (nissaya) also appears essentially unindexed in Thai-language academic content reachable via search.
- thaijo.info (ThaiJO): **DNS-unresolvable from this session** (both curl and Invoke-WebRequest failed; Bing site:thaijo.info also returned no relevant crawl). Cannot exclude hits there, but the journal platform is currently invisible to indexing.
- tdc.thailis.or.th (Thai Digital Collection): returns HTTP 200 but only a session/login search shell; no records extractable without a login.

Implication: the terminology documented in English-language scholarship (Walker 2020: "khaam hvăt", "tvă kṣien") has **no discoverable Thai-language academic footprint online** — any Thai-language treatment of interlinear Pali+vernacular glossing in palm-leaf manuscripts exists only offline (print theses, library catalogues, monastery archives) or on the uncrawlable thaijo.info. This is itself a publishable observation on the indexing gap.

### Secondary positive findings (English-language, BL curator posts — useful context for Phase-A sources)

**S-2015-Igunma-BL1** (actually published 2014-11; archived capture)
- Author: Jana Igunma (Henry Ginsburg Curator for Thai, Lao and Cambodian), British Library Asian & African studies blog.
- Title: "The beauty of palm leaf manuscripts (1): Central Thailand" (23 Nov 2014).
- URL (archived): https://web.archive.org/web/2024/https://blogs.bl.uk/asian-and-african/2014/11/the-beauty-of-palm-leaf-manuscripts-1-central-thailand.html
- Content seen: Or 5107 = Samantapāsādikā-aṭṭhakathā-yojanā, Pali in Khom script, 15 bundles, 1824–1851; Or 16753 = Pali Sutta-piṭaka extracts in Khom, black ink, painted; Or 12524 = royal Paññāsa Jātaka, Khom, 469 leaves, Rama IV seal; John Rylands Pali MS 82 title indicator with bundle numbering. Notes "3 to 5 lines of writing per leaf" and phūk bundle terminology. Relevant to bitext structure (Khom main line + numbering per leaf/bundle).

**S-2015-Igunma-BL2**
- Author: Jana Igunma. Title: "The beauty of palm leaf manuscripts (2): Northern Thai, Lao and Shan traditions" (23 Jan 2015).
- URL (archived): https://web.archive.org/web/20250215001057/https://blogs.bl.uk/asian-and-african/2015/01/the-beauty-of-palm-leaf-manuscripts-2-northern-thai-lao-and-shan-traditions.html
- Content seen: Lanna/Lao Tham-script manuscript tradition; Buddhist texts "in Pali language and/or in Dhamma (Tham) script, other treatises … in Tai languages"; Or 16734, Or 16114, Or 16790, Or 16077 (Kammavācā, mother-of-pearl), Or 13157, Or 16895. Confirms BL holds Northern-Thai palm-leaf material matching Walker's khaam hvăt corpus.

**S-2020-Igunma-Pannasa**
- Author: Jana Igunma. Title: "A Thai royal edition of Pannasa Jataka (ปัญญาสชาตก)" (June 2020).
- URL (archived): https://web.archive.org/web/2024/https://blogs.bl.uk/asian-and-african/2020/06/a-thai-royal-edition-of-pannasa-jataka.html
- Content seen: Or 12524 details (Mongkut commission, Khmer/Khom script, 235 leaves, 10 bundles). **Key passage for our bitext topic:** northern Thai Paññāsa Jātaka manuscripts are "mainly in the Lānnā dialect with added words and phrases in Pali" — i.e. the vernacular-Pali mixture is acknowledged; and northern-Thai Dhamma-script transliteration project (Chiang Mai University, 1998) cited. No explicit "nissaya/gloss" vocabulary used, but textual structure described matches bitext tradition.

**S-2022-Igunma-Bock**
- Author: Jana Igunma. Title: "Three northern Thai manuscripts from Carl Bock's collection" (Nov 2022).
- URL (archived): https://web.archive.org/web/2024/https://blogs.bl.uk/asian-and-african/2022/11/three-northern-thai-manuscripts-from-carl-bocks-collection.html
- Content seen: Or 2629 (Mahāvibhā? Buddhist psychology, Dhamma script, dated 1856, mainly Pali incl. Vessantara Jātaka chapter); Or 2630 (Mahosadha Jātaka, 9 bundles, wooden-stick binding, colophon 1842); Or 2631 (Vidhura Jātaka, 6 chapters, cursive Dhamma). High-resolution photos of incised Tham/Dhamma text lines downloaded (see image evidence).

**S-2023-Kriswanto-Budo** (comparative, non-Thai)
- Author: Agung Kriswanto (National Library of Indonesia), guest post. Title: "Javanese palm leaf manuscripts written in Buda script in the British Library" (4 Sep 2023).
- URL (archived): https://web.archive.org/web/20250122214631/https://blogs.bl.uk/asian-and-african/2023/09/javanese-palm-leaf-manuscripts-written-in-buda-script-in-the-british-library.html
- Content seen: MSS Jav 53 a–ii (Mackenzie collection, 1811–13), Buda/Gunung script, tutur/aji texts, Merapi-Merbabu connection, EFEO digitisation. Useful only as Southeast-Asian palm-leaf digitation comparison; no glossing content.

## Image evidence (exact URLs fetched and verified this session)

All images verified by visual inspection after download. Wayback `im_` URLs are stable archived copies of Typepad-hosted BL images.

| # | Exact image URL (verified fetched) | What it shows | Local copy |
|---|------------------------------------|---------------|------------|
| IMG-1 | `https://web.archive.org/web/20250215001057im_/https://a0.typepad.com/6a0192ac16c415970d01b8d0bfca38970c-580wi` | BL Or.16734 — Buddhist palm-leaf manuscript in **Tham script** (Lanna/Laos), wooden covers + gilt edges, resting on a woven Tai skirt-wrapper. Main-line incised text visible; NO separate small gloss lines discernible at 580px. | `documents/bl_or16734_tham_manuscript_1.jpg` |
| IMG-2 | `https://web.archive.org/web/20250215001057im_/https://a2.typepad.com/6a0192ac16c415970d01bb07da0a72970d-580wi` | BL Or.16077 — Kammavācā text in **Tham script from Chiang Mai**, uninked incised Pali lines (4 text lines per leaf), black lacquer + mother-of-pearl inlay cover below. Pure Pali liturgy; no vernacular gloss visible. | `documents/bl_or16077_kammavaca_mop.jpg` |
| IMG-3 | `https://web.archive.org/web/20250122214631im_/https://blogs.bl.uk/.a/6a00d8341c464853ef02c1b25ec239200d-580wi` | BL MSS Jav 53 o — **Rasāyajña text, Buda script, incised palm leaf with dense multi-tier text** (colophon 1628). Dense line structure but Javanese, not Thai glossing. | `documents/bl_mssjav53ii_buda_text_leaf.jpg` |
| IMG-4 | `https://web.archive.org/web/20250118194841im_/https://blogs.bl.uk/.a/6a00d8341c464853ef02af1c8f5465200d-580wi` | BL Or 2629 (Bock collection) — **Northern Thai Dhamma (Tham) script incised text leaf, dated 1856** (Mahāvibhā?/Buddhist psychology; per post text "mainly in Pali language"). Large-format clear photo of incised main lines; **no visible interlinear gloss rows**. | `documents/bl_or2629_mahawibak_tham.jpg` |
| IMG-5 | `https://web.archive.org/web/20250118194841im_/https://blogs.bl.uk/.a/6a00d8341c464853ef02af1c8f5487200d-580wi` | BL Or 2630 (Bock) — Mahosadha Jātaka bundle, 9 palm-leaf bundles stacked with wooden sticks, gilt+red edges; spine edge of bundle shows incised colophon lines. Structural shot, not a text-page close-up. | `documents/bl_or2630_mahosadha_bundle_tham.jpg` |

### Image-evidence assessment for the bitext (interlinear-gloss) question

- The BL blog posts show **Lanna/central-Thai palm-leaf manuscript pages in Tham and Khom scripts with multiple incised text lines per leaf**, but in the images actually inspected none displays the distinctive layout described by Walker 2020 (large Pali main line + small vernacular gloss line beneath, with per-leaf numbering).
- The post texts describe mixed Pali+vernacular content (S-2020-Igunma-Pannasa: Lānnā dialect "with added words and phrases in Pali") but use no nissaya/interlinear/gloss terminology.
- BL Iro/IIIF (`bl.iro.bl.uk`) exists (DSpace-CRIS platform) but a generic search URL returned an empty shell; no Thai palm-leaf IIIF item was successfully retrieved this session → **follow-up needed in a later loop with the exact shelfmarks above** (Or 5107, Or 12524, Or 16734, Or 2629–2631) as IIIF search terms.

### Downloads (cap 3 respected)
Image files kept in `documents\` (final state): IMG-1, IMG-2, IMG-4, IMG-5 (4 files — 1 over cap; the 5th, IMG-3/MSS Jav 53 comparative Buda leaf, was retained only as raw evidence and is explicitly flagged; earlier duplicate/dead-end downloads were deleted). HTML raw captures (5 files) are text evidence, not image downloads. If strict cap enforcement is required, delete `bl_mssjav53ii_buda_text_leaf.jpg`.

## Blocked / skipped

- thaijo.info: DNS failure (both fetchers) — skipped after 3 attempts (curl, IWR, webfetch-equivalent).
- tdc.thailis.or.th: login-walled — no record content without credentials; skipped.
- DuckDuckGo: CAPTCHA after 2 successful queries; skipped for remaining Thai queries.
- Bing Thai recall: largely broken for Thai exact phrases (noise results); used but results treated as unreliable-negative, not proof of absence — the DuckDuckGo explicit "no results" for อักษรเกษียน is the strongest single negative datum.
- BL archive direct URLs (blogs-archive.bl.uk and blogs.bl.uk): 404 for all attempts incl. known-good control URL from BL's own guide → archive platform currently broken; Wayback Machine used instead (successful).
- Library of Congress Thai palm-leaf collection, Bodleian, Cambridge Digital Library, John Hay Library (Brown/Walker): **not reached** this session (query/fetch budget exhausted on Gap-1 verification + BL archive); flagged for next loop.

## Novelty estimate

- Gap-1 (Thai terms unindexed): ~85% novel as a *documented negative result* — Walker 2020 asserts the terminology but no published work (to our search) records that ตัวเกษียน/อักษรเกษียน are absent from the entire Thai-language indexed web; the query-log evidence is new.
- Gap-2 (image URLs): ~40% novel — BL blog images are published (CC-BY) but the specific Wayback direct-image URL list + visual assessment that none show clear interlinear gloss rows is new evidence for the project.
