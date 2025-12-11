# Setup Instructions - Why Live Server Doesn't Work

## The Problem
React applications **cannot** run on a simple "Live Server" extension because:
1. **JSX needs compilation** - React uses JSX syntax that browsers don't understand natively
2. **Module bundling** - React apps use ES6 modules that need to be bundled
3. **Dependencies** - React and other packages need to be installed via npm
4. **Hot reload** - Development server provides live updates as you code

## Solution: Install Node.js and Run Vite Dev Server

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (recommended)
3. Run the installer and follow the setup wizard
4. Make sure to check "Add to PATH" during installation
5. Restart your terminal/VS Code after installation

### Step 2: Verify Installation
Open a new terminal and run:
```bash
node --version
npm --version
```
You should see version numbers (e.g., v18.17.0 and 9.6.7)

### Step 3: Install Dependencies
Navigate to the frontend folder and install packages:
```bash
cd frontend
npm install
```
This will install all React dependencies (takes 1-2 minutes)

### Step 4: Run the Development Server
```bash
npm run dev
```
This will start Vite's development server and show you a URL like:
```
➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

### Step 5: Open in Browser
Click the link or open `http://localhost:3000` in your browser.

## Alternative: If You Want Static HTML (Not Recommended)
If you really want to use a simple live server, you would need to:
1. Build the React app first: `npm run build`
2. Serve the `dist` folder with a static server
3. But you'd lose hot reload and have to rebuild after every change

## Quick Start Commands
```bash
# Install dependencies (first time only)
cd frontend
npm install

# Start development server
npm run dev

# Build for production (creates static files)
npm run build
```

## Troubleshooting
- **"npm is not recognized"** → Node.js is not installed or not in PATH
- **Port already in use** → Change port in `vite.config.js` or kill the process using port 3000
- **Module not found errors** → Run `npm install` again
- **Build errors** → Make sure you're in the `frontend` directory

## Why This is Better Than Live Server
✅ Hot Module Replacement (HMR) - Changes appear instantly
✅ Fast refresh - React components update without losing state
✅ Error overlay - See errors directly in the browser
✅ Optimized builds - Production builds are optimized and minified
✅ TypeScript/JSX support - Proper compilation of modern JavaScript

## Need Help?
- Check Node.js installation: https://nodejs.org/
- Vite documentation: https://vitejs.dev/
- React documentation: https://react.dev/


