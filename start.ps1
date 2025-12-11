# Personal Website - React App Starter (PowerShell)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Personal Website - React App Starter" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installing Node.js:" -ForegroundColor Yellow
    Write-Host "1. Restart your computer (or at least restart PowerShell)" -ForegroundColor Yellow
    Write-Host "2. Run this script again" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "[OK] npm is installed: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] npm is not found!" -ForegroundColor Red
    Write-Host "Node.js should include npm. Please reinstall Node.js." -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Navigate to frontend directory
Set-Location frontend

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installing dependencies..." -ForegroundColor Yellow
    Write-Host "This may take a few minutes on first run..." -ForegroundColor Yellow
    Write-Host ""
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Failed to install dependencies!" -ForegroundColor Red
        Write-Host ""
        Read-Host "Press Enter to exit"
        exit 1
    }
    Write-Host ""
    Write-Host "[OK] Dependencies installed!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "[OK] Dependencies already installed!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "[INFO] Starting development server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Your website will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the development server
npm run dev


