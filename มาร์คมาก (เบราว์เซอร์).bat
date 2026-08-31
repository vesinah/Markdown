@echo off
netstat -ano | findstr /R /C:":8080 .*LISTENING" >nul
if errorlevel 1 (
  start /B "" npx serve "D:\01_APP\Markdown" -p 8080 --no-clipboard >nul 2>&1
  timeout /t 2 /nobreak >nul
)
start "" "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" "http://localhost:8080/MDBrowse.html"
