@echo off
chcp 65001 >nul
title อัปเดตเอกสารวิจัยและนำขึ้นคลาวด์ (Cloudflare Pages Sync)

echo ====================================================
echo 🚀 กำลังเริ่มต้นระบบซิงค์เอกสารวิจัยขึ้น Cloudflare Pages
echo ====================================================
echo.

echo [1/3] กำลังซิงค์ไฟล์จาก D:\01_APP\Research\output มายัง docs/...
node "%~dp0scripts\sync_research.js"
if %errorlevel% neq 0 (
  echo ❌ เกิดข้อผิดพลาดในการซิงค์ไฟล์
  pause
  exit /b %errorlevel%
)
echo.

echo [2/3] กำลังคอมไพล์ระบบเว็บแอป MDBrowse...
node "%~dp0build.js"
if %errorlevel% neq 0 (
  echo ❌ เกิดข้อผิดพลาดในการคอมไพล์เว็บแอป
  pause
  exit /b %errorlevel%
)
echo.

echo [3/3] ตรวจสอบการเปลี่ยนแปลงและนำขึ้น GitHub...
cd /d "%~dp0"
set "STATUS_SIZE=0"
git status --porcelain > "%temp%\git_status_check.txt" 2>nul
for %%F in ("%temp%\git_status_check.txt") do set "STATUS_SIZE=%%~zF"
del "%temp%\git_status_check.txt" 2>nul

if "%STATUS_SIZE%"=="0" (
  echo ⚡ ข้อมูลและเอกสารทั้งหมดเป็นเวอร์ชันล่าสุดแล้ว ไม่พบการเปลี่ยนแปลงใหม่
) else (
  echo 📦 กำลังบันทึกการเปลี่ยนแปลง [git commit]...
  git add docs/ catalog.json index.html MDBrowse.html _headers scripts/ src/ build.js *.bat *.lnk
  git commit -m "Auto-sync research output [%date% %time%]"
  echo 🚀 กำลังส่งข้อมูลไปยัง GitHub [git push origin master]...
  git push origin master
  if %errorlevel% equ 0 (
    echo.
    echo ====================================================
    echo ✅ ซิงค์และส่งข้อมูลขึ้น GitHub สำเร็จเรียบร้อย!
    echo 🌐 Cloudflare Pages กำลังอัปเดตหน้าเว็บให้อัตโนมัติ [ประมาณ 30-60 วินาที]
    echo    เปิดอ่านได้ทันทีจากทุกอุปกรณ์
    echo ====================================================
  ) else (
    echo ⚠️ ส่งข้อมูลขึ้น GitHub ไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตหรือการยืนยันตัวตนของ Git
  )
)

echo.
echo กดปุ่มใดๆ เพื่อปิดหน้าต่างนี้...
pause >nul
