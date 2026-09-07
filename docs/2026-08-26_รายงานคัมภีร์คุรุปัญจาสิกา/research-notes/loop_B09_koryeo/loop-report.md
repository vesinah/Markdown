# Loop B09 — Tripitaka Koreana data for K41n1493 (사사법오십송) and 高麗藏 vs 大正藏 variant table

Date: 2026-08-26. Method: direct fetch (Lancaster descriptive catalogue; CBETA XML TEI P5 from GitHub; Dongguk 불교학술원 아카이브 kabc.dongguk.edu), DuckDuckGo HTML search, PowerShell archiving. No Wikipedia citations.

---

## 1. Verification of the canon metadata (task item 1)

All four target data points CONFIRMED against two independent databases plus primary colophon evidence:

| Data point | Lancaster Descriptive Catalogue | Dongguk ABC archive (kabc.dongguk.edu) | Primary block evidence |
|---|---|---|---|
| K number | K 1493 | K1493 (dataId ABC_IT_K1493) | image id 041_0612_b_01L |
| Volume / page (Dongguk photo-reprint 1976) | "(XLI:612)" | 고려_위치 = 41-0612 | 041_0612 |
| Taishō cross-ref | (T. 1687) | 신수_NR = T.1687 / 신수_위치 = 32-0775 | — |
| H-number | (H. 1414) | (see section 4 for what H means) | — |
| Case (stupa/千字文) number | "Case 亭 624" | — | — |
| Carving date | "carved A.D. 1244." | — | 간기(刊記): 甲辰歲高麗國大藏都監奉勅彫造 |

Verbatim Lancaster entry K 1493 (re-fetched 2026-08-26, archived: `documents/acmuller_K1493_descriptive_catalogue.html` was already in loop A09; re-fetch today confirms unchanged):
> "K 1493 (XLI:612) (T. 1687) (H. 1414) ... (i) Gurupañcāśikā. (ii) Bla-ma lṅa-bcu-pa. (iii) Shih shih fa wu shih sung. (1 chüan) (Aśvaghoṣa) ... Translation by Jih-ch'eng and Dharmarakṣa: (see K.1488). (2) Case 亭 624; carved A.D. 1244. (3) HDJK. (vol.139). (4) Nj. 1080; Ono. 4:292b; To. 3721; P. 4544. (5) S. Levi (1929)."
Field (6) Tibetan locations verbatim:
> "P - Rgyud-'grel (nu) 242b-245a / N - Rgyud-'grel (nu) 244a-246a / D - Rgyud (tshu) 10a-12a / C - Rgyud (tshu) 9b-11b."

**Primary-source colophon (간기)** — transcribed at the bottom of the Dongguk ABC viewer page for the woodblock print text (archived: `documents/kabc_dongguk_viewer_K1493_hangeul.html`), verbatim final line of the print:
> "事師法五十頌　甲辰歲高麗國大藏都監奉勅彫造"

甲辰 = 1244. This is the actual carving-colophon on the Haeinsa block, independently confirming Lancaster's "carved A.D. 1244" and the 大藏都監 (Great Canon Directorate) attribution. The 千字文 case character system is explained in Lancaster's Guide ("case" = Thousand Character scheme units); case 亭 unit 624 locates the blocks.

Dongguk ABC 상세서지 record (archived: `documents/kabc_dongguk_seoji_K1493.html`) additional fields verbatim:
- 분류체계: "正藏-再雕藏經部-再雕入藏部-惟淨∙法護等譯本"
- 주제분류: "신행(信行)-기본신행(基本信行)-사사(事師) 예법(禮法)"
- 고려_위치: "41-0612"; 신수_NR: "T.1687"; 신수_위치: "32-0775"
- 산스_NAME: "[범] Gurupañcāśikā"
- 적사_VOL 36 / 적사_PAGE 382 (적사 catalogue ref); 중화_NR 1642 / 중화_VOL 069 / 중화_PAGE 0765 (中華大藏經 vol.69 p.765)
- 고려_주석: "KBC는 번역시대를 北宋으로, 공동역자를 法護로 표기."
Note: the Korean archive classifies the translators as 惟淨∙法護 whereas Lancaster/Taishō give 日稱 (Jih-ch'eng/Dānapāla-group head) 等譯 — both agree on Northern Song era and Dharmarakṣa as co-translator; the T1687 byline reads 「西天譯經三藏...賜紫沙門臣日稱等奉詔譯」.

kb.snu.ac.kr (SNU 고려대장경 지식정보시스템): DNS no longer resolves as of 2026-08-26 (checked via PowerShell `Invoke-WebRequest`: "The remote name could not be resolved"). The service appears decommissioned or migrated; its role has been superseded by the Dongguk ABC archive (kabc.dongguk.edu), which states (intro page, archived: `documents/kabc_dongguk_intro_hangeul_project.html`) that since 2001 it ran the "한글대장경 개역 전산화 사업". Negative-evidence note recorded for completeness.

## 2. 高麗藏 base text vs 大正藏: CBETA apparatus variant table (task item 2)

Source: CBETA XML TEI P5 file T32n1687.xml (downloaded 2026-08-26 from https://raw.githubusercontent.com/cbeta-org/xml-p5/master/T/T32/T32n1687.xml, archived: `documents/cbeta_xml_T32n1687.xml`; file dated 2025-02-26). Witness list declared in encodingDesc: 【CB】=CBETA corrected lemma, 【大】=Taishō printed reading, 【明】=Ming canon, **【麗-CB】=reading of the Tripitaka Koreana (Shinwenfeng reprint, K41n1493)**. canons.json (CBETA GitHub) confirms: K = "Tripiṭaka Koreana (Shinwenfeng Edition)", 高麗大藏經（新文豐版）, abbreviation 【麗】, 47 volumes.

CBETA project note verbatim (teiHeader projectDesc): "蕭鎮國大德提供，維習安大德提供之高麗藏 CD 經文，日本 SAT 組織提供..." — i.e., the Koryeo canon text used for collation is Christian Wittern's 高麗藏 CD.

### Variant table (all four 【麗-CB】 readings in this text)

| # | Location (Taishō) | K-page (K41n1493) | Verse context | 大正【大】 | 麗-CB (=CBETA adopted 【CB】) | 明【明】 | Note type |
|---|---|---|---|---|---|---|---|
| 1 | T32.0776b03 | p0612c16 | 不X於己身，何況於財物 | 希 | 恡 (variant of 慳/吝 stingy) | — | 新增校注 (add-note n=0776b0301): "恡【CB】【麗-CB】，希【大】" |
| 2 | T32.0776b15 | p0613a05 | 於床坐資具，騎驀罪過X | 足 | 是 | — | add-note n=0776b1501: "是【CB】【麗-CB】，足【大】" |
| 3 | T32.0776c11 | p0613b07 | 或笑嗽伸X，則以手遮口 | 呿 (CB06900 [去*欠]) | 㰦 (U+3C26 呿-form) | 欠 | mod-note n=0776005: "㰦【CB】【麗-CB】，呿【大】，欠【明】" |
| 4 | T32.0776c28 | p0613b24 | 師或有所施，X恭敬頂受 | 常 | 當 | — | add-note n=0776c2801: "當【CB】【麗-CB】，常【大】" |

Cross-check against the Dongguk ABC transcription of the actual Korean woodblock print (viewer HTML, same archive file): the print text reads 不悋於己身 / 騎驀罪過是。/ 或笑嗽伸㰦 / 當恭敬頂受 — all four match the 【麗-CB】 side exactly. So these are NOT editorial conjectures: the re-carved Goryeo blocks genuinely carry 悋/是/㰦/當 where the Taishō typesetters printed 希/足/呿/常.

Interpretation for the report: the Taishō edition itself took T1687 from the Koryeo tradition, but its printed forms diverged in these four characters (typesetter errors/standardizations). CBETA's collation against the Shinwenfeng photo-reprint of the Haeinsa blocks (K41n1493_p0612–0613) restores the Goryeo readings and adopts them as the corrected lemma. Additional Taishō notes (vs Ming only, not relevant to Koryeo): 西天+宋【明】, 挐=茶【明】, 惠=慧【明】, 毀=慢【明】, 蠲=觸【明】, 其=甚【明】. Also significant Taishō note at the title (n=0775002), verbatim: "此頌宋本元本宮本俱闕" — the hymn is absent from the Song, Yuan, and Gong editions; the Goryeo transmission (via the Northern-Song-lineage source texts used for the re-carving) is the principal early witness of the Chinese translation.

## 3. 한글대장경 (HanGeul Tripitaka) status for K1493 (task item 3)

CONFIRMED TRANSLATED AND ONLINE (complete):

1. **Lancaster (1979)** already listed the projected modern-Korean translation: field (3) "HDJK. (vol.139)." with sequential number H. 1414. Per the Guide to the Use of the Catalogue (front matter, archived: `documents/acmuller_descriptive_catalogue_frontmatter.html`), verbatim definitions:
   - "H. = the matching number used for the modern Korean translations recorded in the Han'gul taejanggyong kanhaeng mongnok."
   - "HDJK= the volume of the Hanguk-dae-jang-kyong, the modern translation into Korean. When the translation has not yet appeared the projected volume number appears without page reference."
   - "KDJK = the volume and pages in the Koryo-dae-jang-kyong, the photo-reprint edition of the Haein xylographs."
   So H-numbers are sequence numbers in the 한글대장경 발행목록 — resolving the A09 chaining lead.
2. **Series background**: 한국민족문화대백과사전, article 「한글대장경」 (encykorea.aks.ac.kr/Article/E0066891, archived: `documents/encykorea_hangeul_daejanggyeong.html`), verbatim: "『한글대장경』은 고려시대 대장도감에서 집대성한 재조본 『고려대장경』을 저본으로 삼아 동국대학교의 동국역경원이 1964년부터 한글로 번역하기 시작해 2000년에 총 318책으로 간행한 우리말 대장경이다." (동국역경원 founded 1964 under 운허 스님; completed in 318 volumes in 2000.)
3. **Online complete translation**: 동국대 불교학술원 아카이브 (불교기록문화유산 아카이브) 통합대장경 viewer, URL https://kabc.dongguk.edu/m/content/view?itemId=ABC_IT&dataId=ABC_IT_K1493_T_001 (archived full HTML: `documents/kabc_dongguk_viewer_K1493_hangeul.html`). Header line verbatim: "마명(馬鳴)보살 모음 일칭(日稱) 등 한역 **김진철 번역**". The viewer pairs 원문 (woodblock transcription incl. colophon) with a COMPLETE modern-Korean rendering of all verses (first verse sample verbatim: "모든 경과 율의 비밀한 가르침에 의하여 / 간략히 스승의 의궤를 받들어 내오니 / 듣고 나면 좋아하며 맑은 마음 내어서 / 마땅히 여래의 금강 지혜 얻으리."), ending "...제가 모은 이 선한 인(因)으로 중생과 함께 속히 성불하기 원하옵니다." — i.e., full text through the dedication verse.
4. Caveat on "HDJK vol.139": Kyobo POD/e-book listings show 「한글대장경 139 한국찬술14 대각국사문집 외」 (product.kyobobook.co.kr/detail/S000060598930; direct fetch bot-blocked, listing captured via SERP and archived: `documents/note_kyobobook_vol139_evidence.txt`) — the commercial volume numbering does not correspond to Lancaster's 1979 projection for this title. The authoritative current access point for the K1493 translation is therefore the ABC archive online record (translator credit 김진철), not a resolvable print volume claim. Print-volume pinpointing within the 318-volume set remains open (would require physical 목차 of the 사휘부/密教部 volumes).

## 4. Archived evidence files (`documents/`)

1. `cbeta_xml_T32n1687.xml` — CBETA XML TEI P5 of T1687 with full 校注 apparatus (source of the variant table).
2. `kabc_dongguk_seoji_K1493.html` — Dongguk ABC 상세서지 for K1493 (41-0612, T.1687, Sanskrit name).
3. `kabc_dongguk_viewer_K1493_hangeul.html` — Dongguk ABC 통합뷰어: woodblock transcription + complete 김진철 Hangul translation + colophon 甲辰歲...
4. `acmuller_descriptive_catalogue_frontmatter.html` — Lancaster front matter (abbreviations H./HDJK/KDJK; guide; carving history).
5. `encykorea_hangeul_daejanggyeong.html` — encykorea article on the 318-volume 한글대장경.
6. `kabc_dongguk_intro_hangeul_project.html` — ABC archive self-description (한글대장경 개역 전산화 사업 since 2001).
7. `note_kyobobook_vol139_evidence.txt` — Kyobo vol.139 listing captured via SERP (direct page bot-blocked); discrepancy documentation.

(Lancaster K1493 entry page and 小萃華亭 DjVu scan page were already archived in loop_A09_korean/documents/.)

## 5. Verified URLs

- http://www.acmuller.net/descriptive_catalogue/files/k1493.html
- http://www.acmuller.net/descriptive_catalogue/front.html
- https://raw.githubusercontent.com/cbeta-org/xml-p5/master/T/T32/T32n1687.xml
- https://github.com/cbeta-org/xml-p5/blob/master/canons.json
- https://kabc.dongguk.edu/content/pop_seoji?dataId=ABC_IT_K1493
- https://kabc.dongguk.edu/m/content/seoji?itemId=ABC_IT&dataId=ABC_IT_K1493_T_001
- https://kabc.dongguk.edu/m/content/view?itemId=ABC_IT&dataId=ABC_IT_K1493_T_001
- https://kabc.dongguk.edu/etc/intro?type=02
- https://encykorea.aks.ac.kr/Article/E0066891
- https://product.kyobobook.co.kr/detail/S000060598930
- kb.snu.ac.kr — DNS dead as of 2026-08-26 (negative finding)

## 6. Chaining leads

1. Identify which print volume of the 318-volume 《한글대장경》 contains 사사법오십송 (needs physical 목차 of the 밀교부 volumes; the ABC viewer may expose a 권 field to logged-in views).
2. K.1488 cross-reference (companion 日稱 translation) still unresolved from A09.
3. The 적사_VOL 36 / 적사_PAGE 382 reference in the Dongguk record — identify which catalogue "적사" abbreviates (candidate: 《적석?》/「積石」? likely a Korean union-catalogue abbreviation) for precise citation.
4. If a facsimile of K41n1493_p0612-0613 from the 영인본 is needed for the report plate, the ABC image viewer endpoint `/m/content/viewer?itemId=ABC_IT&dataId=ABC_IT_K1493_T_001` serves block images (041_0612_b_01L).

## 7. Thai summary (สรุปภาษาไทย)

ตรวจยืนยันข้อมูลไตรปิฎกเกาหลีของ K41n1493 (사사법오십송) สำเร็จทุกช่อง:

1. **วันสลักไม้ ค.ศ. 1244**: ยืนยันสองชั้น — (ก) บัญชีรายการของ Lancaster ระบุ "Case 亭 624; carved A.D. 1244" (ข) หลักฐานชั้นต้นคือ คำจาริกปลายแผ่นไม่ (간기) บนสำรวจมือของดงกุก อ่านว่า 「事師法五十頌 甲辰歲高麗國大藏都監奉勅彫造」 โดย มีโช (甲辰) = ค.ศ. 1244 สลักโดยพระบรมราชโองการโดย แผนกพระไตรปิฎกหลวงแห่งเกาหลี (大藏都監)
2. **ตู้หมายเลข 亭624 เล่ม XLI หน้า 612**: Lancaster "(XLI:612)" + สถาบันสงฆ์ ABC ของมหาวิทยาลัยทงกุก ให้ "고려_위치 41-0612" และรหัสภาพไม่สลัก 041_0612_b_01L ตรงกันทุกประการ
3. **H.1414**: ความหมายถูกไขแล้วจากคำอธิบายตัวย่อของ Lancaster เอง — H. คือเลขลำดับใน "Han'gul taejanggyong kanhaeng mongnok" (บัญชีรายการคำแปลเกาหลียุคใหม่ ซีรีส์ 한글대장경) และ HDJK vol.139 คือเล่มคาดการณ์ที่จะบรรจุคำแปลนี้ (ฉบับพิมพ์ 1979)
4. **ตารางบทอ่านต่าง 高麗藏 vs 大正藏**: จากไฟล์ XML ของ CBETA (T32n1687) พบคำอ่าน【麗-CB】ที่แก้จากฉบับเกาหลี 4 จุด: 恡(希)/是(足)/㰦(呿)/當(常) ณ T32.0776b03/b15/c11/c28 ตรงกับ K41n1493_p0612c16, p0613a05, p0613b07, p0613b24 และตรวจซ้อนกับการคัดลอกข้อความไม่สลักจริงของ ABC ทงกุก ซึ่งอ่าน 悋/是/㰦/當 ตรงกันครบ — ยืนยันว่าเป็นบทอ่านของแผ่นไม้เกาหลีจริง ไม่ใช่การเดาแก้ อนึ่ง 大正 ยังมีหมายเหตุว่า "此頌宋本元本宮本俱闕" คือฉบับซ่ง/หยวน/กงไม่มีคำแปลนี้เลย สายส่งเกาหลีจึงเป็นพยานหลักระยะต้น
5. **한글대장경 (K1493)**: สถานะคำแปล = แปลครบสมบูรณ์และเผยแพร่ออนไลน์แล้วที่คลัง ABC ม.ทงกุก (kabc.dongguk.edu) ผู้แปล คิม จิน-ชอล (김진철) โครงการแปลทั้งชุดโดยสำนักแปรพระคำทงกุก (동국역경원, ก่อตั้ง 1964) แล้วเสร็จปี 2000 รวม 318 เล่ม ตามบทความสารานุกรมย่อยวัฒนธรรมเกาหลี (encykorea) — เก็บเอกสารดิบ 7 ไฟล์ใน documents/
