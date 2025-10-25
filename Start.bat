:start
@echo off
cd /d "%~dp0"
title Discord Bot
node --no-warnings "Discord Bot\Index.js"
timeout /t 5 /nobreak >nul
@echo on
goto start