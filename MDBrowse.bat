@echo off
REM Start local server in background on port 8080
start /B "" npx serve "D:\01_APP\Markdown" -p 8080 --no-clipboard >nul 2>&1
timeout /t 2 /nobreak >nul
REM Open Chrome in app mode via localhost
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:8080/MDBrowse.html
