# Document Record

- Corpus: Balinese Digital Library on archive.org (collection id "Bali"; Pusdok Dinas Kebudayaan Provinsi Bali scans uploaded 2011)
- Purpose this loop: (a) exhaustively re-check for maarti scans missed by loop B08; (b) settle the Sutasoma-maarti question against the two public Pusdok Sutasoma scans; (c) harvest additional catalogue-card records for the corpus map.
- Method: archive.org advancedsearch API (q=maarti; q=(kaarti OR "maarti"); q=sutasoma; full collection:Bali listing, 2,890 items); metadata API; djvu.txt OCR downloads.

## (a) Exhaustiveness check - NEGATIVE

q=(kaarti OR "maarti") across all of archive.org returns exactly ten Bali-collection items: the nine documented in B08 plus kakawin-ariwangsa-maarti (loop_15). No eleventh maarti-titled scan exists. Variant spelling "kaarti" (as on the Bharata Yuddha Maarti card) adds nothing new. The public Pusdok maarti corpus is therefore fully mapped at TEN scans.

## (b) Sutasoma scans checked - both PLAIN copies, no glossing

1. kakawin-sutasoma-kak72 - card (OCR): "Naskah milik Kantor Dokumantasi Budaya Bali ... Kropak No. 1; Panjang/lebar [4?] cm / 2,5 cm; Jumlah 155 lembar; Digiditasi tanggal 14 Juni 199[?]4(?); Disalin oleh NKR Srawati". Text opens directly with the manggala ("Awighnamastus ... bajrajnanam ... parama sri nindya" type invocation) and canto text. MAARTI COUNT IN FULL OCR TEXT: 0. Plain copy, 155 leaves, mid-1990s transcription by NKR Srawati.
2. kakawin-sutasoma - title cards "KAKAWIN SUTASOMA / Pusat Dokumentasi Dinas Kebudayaan Provinsi Bali - Indonesia"; stamp "PERPUSTAKAAN KTR. DOKBUD BALI PROP. DATI I BALI"; call no. 23/2/Ka/Dokbud; card fragment "Panj. 91[?] Lebe 3,5 cm". MAARTI COUNT IN FULL OCR TEXT: 0. Plain copy.
Conclusion: neither publicly scanned Pusdok Sutasoma is a maarti copy. The known Sutasoma maarti is the Gedong Kirtya manuscript 1118/974/28 published in van der Meij 2017 (ills. 170-171) - see companion document. Non-glossed status of these two copies is itself evidence that glossing was selective, not automatic, in the copying economy.

Other non-Bali Sutasoma finds (context only): Museum Sonobudoyo Yogyakarta holds a Sutasoma lontar written in Balinese script, Old Javanese, 154 pages, late 19th century (institutional blog post, not a catalogue record); C. Hooykaas' "On the Old-Javanese Cantakaparwa and Its Tale of Sutasoma" is open-access on OAPEN (oapen item 20.500.12657-32269) for background reading if needed. The ban.wikisource "Kakawin Sutasoma" page lists holding institutions (Kantor Dokumentasi Budaya Bali Sanur; Museum Mpu Tantular; Balai Bahasa Bali) - FINDING AID ONLY, not cited as evidence.

## (c) Additional Pusdok catalogue-card records harvested (non-maarti controls)

Since no further maarti scans exist, two-plus new card records were taken from adjacent kakawin scans to thicken the corpus map; their NON-maarti status is recorded explicitly.

1. Wirata Parwa - identifier wirata-parwa
   Card: Nomor/judul "WIRATA PARWA"; Panja 45 cm, Le 3,5 cm; Jml. 106 lb (leaves); Milik: Griya Gede, Br. Angkon [OCR; possibly Br. Ngantang], Klungkung; call no. P/IV/6/DOKBUD (OCR "P/1V/6/DOKBUD").
   Significance: NEW provenance feeder type - a brahmana griya (Griya Gede) in Klungkung, parallel to the Tapem Klungkung case of B08; shows the fourth book of the Mahabharata circulating UNGLOSSED in a priestly family library while parwa texts elsewhere do carry maarti.
2. Udyoga Parwa A - identifier udyoga-parwa-a
   Card: "(Udiyoga Parwa A)" [sic]; Ukuran P.56 cm, L.3,5 cm; Jlh. 124 lb; Milik: I Gst. Pt. Jelantik, Singaraja [= I Gusti Putu Djelantik/Jlantik].
   Significance: another Djelantik-provenance copy; combined with van der Meij 2017's statement that four of his stitched manuscripts came from I Gusti Putu Jlantik's collection, the Djelantik library emerges as a documented early-20th-century feeder of BOTH Pusdok and Balai Bahasa holdings.
3. Bharata Yuddha (plain) - identifier bharata-yuddha
   Card: "Bharata Yuddha; P.49 cm L.3,5 cm; Jih. 78 lb"; Gst.Pt. Djelantik, Singaraja; call-no. fragment "...1/Ka/P/Dokbud".
   Significance: direct control pair with bharata-yuddha-maarti (172 leaves, also ex-Djelantik): the SAME owner library held an unglossed 78-leaf Bharatayuddha AND a glossed 172-leaf one - cleanest single-owner demonstration that maarti copies were a distinct production choice, not a mere cataloguing variant.

## Cross-cutting observations

- Pusdok now attested holding BOTH states for at least three texts (Bharatayuddha; Arjunawiwaha-family; Sutasoma plain vs GK maarti), strengthening the argument that glossed copies were commissioned/prepared for mabasan use rather than being the default copying mode.
- Leaf widths remain uniformly ~3.5 cm across plain and maarti copies alike; format does not distinguish genre function - content does.
- Caveat as in B08: card readings are OCR of typewritten Indonesian; re-check figures against scan images before printing numbers.
