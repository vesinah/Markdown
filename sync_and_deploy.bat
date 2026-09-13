@echo off
chcp 65001 >nul
title Cloudflare Pages Sync

echo ====================================================
echo 🚀 MDBrowse Research Sync to Cloudflare Pages
echo ====================================================
echo.

echo [1/3] Syncing files from D:\01_APP\Research\output to docs/...
node "%~dp0scripts\sync_research.js"
if %errorlevel% neq 0 (
  echo ❌ Error syncing research files
  pause
  exit /b %errorlevel%
)
echo.

echo [2/3] Building MDBrowse web app...
node "%~dp0build.js"
if %errorlevel% neq 0 (
  echo ❌ Error building web app
  pause
  exit /b %errorlevel%
)
echo.

echo [3/3] Checking git changes and pushing to GitHub...
cd /d "%~dp0"
git config core.longpaths true
set "STATUS_SIZE=0"
git status --porcelain > "%temp%\git_status_check.txt" 2>nul
for %%F in ("%temp%\git_status_check.txt") do set "STATUS_SIZE=%%~zF"
del "%temp%\git_status_check.txt" 2>nul

if "%STATUS_SIZE%"=="0" (
  echo ⚡ All documents and files are already up-to-date.
) else (
  echo 📦 Committing changes...
  git add docs/ catalog.json index.html MDBrowse.html _headers scripts/ src/ build.js *.bat *.lnk
  git commit -m "Auto-sync research output [%date% %time%]"
  echo 🚀 Pushing to GitHub (origin master)...
  git push origin master
  if %errorlevel% equ 0 (
    echo.
    echo ====================================================
    echo ✅ Sync and GitHub Push Completed Successfully!
    echo 🌐 Cloudflare Pages will auto-deploy in 30-60 seconds.
    echo ====================================================
  ) else (
    echo ⚠️ Failed to push to GitHub. Please check network/auth.
  )
)

echo.
echo Press any key to exit...
pause >nul
