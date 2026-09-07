---
source_type: web_status_report
author: (compiled from University of Hamburg official pages)
year: 2026 (status verified 2026-08-26; pages last updated 2014-2025)
title: "NGMCP/NGMPP digital access status and the defunct e-NGMPP portal"
harvested: 2026-08-26
topic_loop: "Loop B13 - Gap 4: where are NGMCP images hosted now?"
---

# Harvest: current access paths to NGMPP/NGMCP data (verified this loop)

## 1. The e-NGMPP portal is defunct - and never was archived

- Domain check (Phase A loop 21, reconfirmed this loop): www.e-ngmpp.de / e-ngmpp.de do not resolve (DNS failure).
- NEW this loop: Wayback Machine availability API for e-ngmpp.de and www.e-ngmpp.de (timestamps 2011/2012)
  returns EMPTY archived_snapshots, and CDX queries return zero captures. The portal was never captured
  by the Internet Archive; no historical mirror of its interface can be reconstructed that way
  (ยังไม่พบข้อมูลยืนยัน for any surviving image host of e-NGMPP digitizations).

## 2. What IS live today (all fetched successfully this loop)

a) Project portal (last update 3 September 2025):
   https://www.aai.uni-hamburg.de/en/forschung/ngmcp
   - Links to the online title lists (MyCoRe application): Indic Titles
     https://catalogue.ngmcp.uni-hamburg.de/content/search/ngmcpdocument.xed ; Tibetan Titles
     https://catalogue.ngmcp.uni-hamburg.de/content/search/tbtdocument.xed ;
     Descriptive Catalogue wiki http://ngmcp.fdm.uni-hamburg.de/mediawiki ;
     legacy SFB-950 mirror http://mycms3.rrz.uni-hamburg.de/sfb950/content/NGMCP/ngmcp.xml .
   - States data/databases are curated by the Center for sustainable Research Data Management
     (FDM), Universität Hamburg.

b) NGMCP online title list (MyCoRe catalogue): LIVE.
   https://catalogue.ngmcp.uni-hamburg.de/ -> redirects to /content/index.xml
   Verified HTTP 200 with a browser user-agent this loop (the Phase-A "abuse-deny" block did not
   reproduce via a plain urllib browser-UA fetch). Metadata-only; no page images.

c) Descriptive-catalogue WIKI - RETIRED TO A STATIC ARCHIVE:
   The former MediaWiki front page (http://ngmcp.fdm.uni-hamburg.de/mediawiki) now states:
   "Since the project has not been active for a long time, we moved its content to the Web-Archive.
   You can search these pages by entering the site name after your search term in the search field of
   your Search engine" (example given: Śārīrakabhāṣya site:www-archiv.fdm.uni-hamburg.de);
   "we only kept Wiki-pages, which have been edited".
   Static archive index (fetched in full this loop, ca. 1.5 MB link list):
   http://www-archiv.fdm.uni-hamburg.de/ngmcp/index.html

d) Microfilm access page (last update 23 March 2016):
   https://www.aai.uni-hamburg.de/en/forschung/ngmcp/about/access.html
   Verbatim: "At this point, there is no provision for producing a new copy of microfilm either in
   Kathmandu or in Berlin." Contact given: The Director, National Archives (Mr. Prakash Darnal),
   Ram Shah Path, Kathmandu, mail@nationalarchives.gov.np. "Microfilms may be consulted in Lesesaal der
   Orient- und Ostasienabteilung (OLS) der Staatsbibliothek zu Berlin." NRC copy-order service suspended
   since 1 January 2014.

## 3. Negative checks recorded honestly

- No public image host of NGMPP films could be identified: Staatsbibliothek zu Berlin "Digitalisierte
  Sammlungen" search endpoints returned only generic application shells for NGMPP/Nepal queries;
  crossasia.org is live but no NGMPP image collection surfaced under quick probing
  (ยังไม่พบข้อมูลยืนยัน for any CrossAsia or SBB image mirror).
- Conclusion for citation practice: as of this loop, NGMPP material is accessible as (i) metadata via
  the MyCoRe title lists, (ii) descriptions/transcripts via the static wiki archive, and (iii) PHYSICAL
  microfilm consultation in Berlin (SBB OLS reading room) or via the National Archives Kathmandu.
  Any claim that reel images are freely viewable online should be avoided.

## URLs

- Portal: https://www.aai.uni-hamburg.de/en/forschung/ngmcp
- Title lists: https://catalogue.ngmcp.uni-hamburg.de/content/search/ngmcpdocument.xed
- Wiki archive: http://www-archiv.fdm.uni-hamburg.de/ngmcp/index.html
- Access page: https://www.aai.uni-hamburg.de/en/forschung/ngmcp/about/access.html
