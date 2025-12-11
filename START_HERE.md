# 🚀 START HERE - Quick Setup Guide

## ⚠️ You Need Node.js to Run This React App

**You cannot use a simple "Live Server" extension** because React apps need compilation and bundling.

## 📥 Step 1: Install Node.js

1. **Download Node.js**: https://nodejs.org/
   - Click "Download Node.js (LTS)" - this is the recommended version
   - The installer includes npm (Node Package Manager)

2. **Install Node.js**:
   - Run the downloaded installer
   - Click "Next" through the setup (default settings are fine)
   - **Important**: Make sure "Add to PATH" is checked
   - Click "Install"

3. **Restart your computer** (or at least restart VS Code/your terminal)

4. **Verify installation**:
   - Open a new terminal
   - Type: `node --version` (should show something like v18.17.0)
   - Type: `npm --version` (should show something like 9.6.7)

## 🏃 Step 2: Run the Website

Once Node.js is installed, follow these steps:

### Option A: Using PowerShell/Command Prompt
```powershell
# Navigate to frontend folder
cd frontend

# Install dependencies (only needed first time)
npm install

# Start the development server
npm run dev
```

### Option B: Using the Start Script
I've created a `start.bat` file - just double-click it after installing Node.js!

## 🌐 Step 3: View Your Website

After running `npm run dev`, you'll see:
```
➜  Local:   http://localhost:3000/
```

Open that URL in your browser to see your website!

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

## ❓ Common Issues

### "npm is not recognized"
- Node.js is not installed or not in your PATH
- Restart your terminal/VS Code after installing Node.js
- Make sure you selected "Add to PATH" during installation

### "Port 3000 is already in use"
- Another program is using port 3000
- Either close that program or change the port in `vite.config.js`

### "Module not found"
- Run `npm install` again in the `frontend` folder
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`

## 📚 What's Different from Live Server?

| Live Server | React Dev Server (Vite) |
|------------|------------------------|
| ❌ Can't compile JSX | ✅ Compiles JSX automatically |
| ❌ No module bundling | ✅ Bundles all modules |
| ❌ No hot reload | ✅ Hot Module Replacement |
| ❌ Static files only | ✅ Full React app |
| ✅ Simple setup | ⚠️ Needs Node.js |

## 🎉 That's It!

Once Node.js is installed, running the app is just:
```bash
cd frontend
npm install  # First time only
npm run dev  # Every time you want to run it
```

Your website will be live at `http://localhost:3000`!


