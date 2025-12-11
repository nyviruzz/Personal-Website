@echo off
echo ========================================
echo   Personal Website - React App Starter
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js from https://nodejs.org/
    echo.
    echo After installing Node.js:
    echo 1. Restart your computer (or at least restart this terminal)
    echo 2. Run this script again
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js is installed!
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm is not found!
    echo Node.js should include npm. Please reinstall Node.js.
    echo.
    pause
    exit /b 1
)

echo [OK] npm is installed!
echo.

REM Navigate to frontend directory
cd frontend

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    echo This may take a few minutes on first run...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed!
    echo.
) else (
    echo [OK] Dependencies already installed!
    echo.
)

echo [INFO] Starting development server...
echo.
echo Your website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Start the development server
call npm run dev

pause


