---
name: mdbrowse-research-sync
description: >-
  Use this skill when syncing research documents from the local research output directory
  to the MDBrowse docs catalog, updating catalog.json, or deploying to Cloudflare Pages.
---

# MDBrowse Research Archive Sync & Cloudflare Deployment

This runbook guides incremental synchronization of research papers and live web deployment.

## 1. Sync Pipeline Overview

- **Source Directory**: `D:\01_APP\Research\output`
- **Destination Directory**: `D:\01_APP\Markdown\docs`
- **Catalog Index**: `docs/catalog.json` (6,066+ research files, 1,223+ folders)
- **Live Production URL**: [https://markmakk.pages.dev/](https://markmakk.pages.dev/)

## 2. Sync Commands

### Option A: Run Incremental Node Sync Script
```powershell
node scripts/sync_research.js
```
This script:
1. Scans `D:\01_APP\Research\output` for `.md`, `.txt`, `.json`, and images (skips PDFs >24MB).
2. Copies new/modified files to `docs/`.
3. Regenerates `docs/catalog.json` and copies to `catalog.json`.
4. Rebuilds `MDBrowse.html` and `index.html`.

### Option B: 1-Click Sync and Deploy (Windows Batch)
Double-click or run:
```powershell
.\sync_and_deploy.bat
```
or
```powershell
.\อัปเดตเอกสาร_และขึ้นคลาวด์.bat
```

## 3. Git Push & Live Cloudflare Pages Verification

After syncing:
```powershell
git add docs/ catalog.json index.html MDBrowse.html
git commit -m "chore(sync): update research archive documents and catalog"
git push origin master
```
Cloudflare Pages will automatically detect the commit on `master` and deploy within 30–45 seconds.
Verify by opening [https://markmakk.pages.dev/](https://markmakk.pages.dev/).
