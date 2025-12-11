# Personal Website - React.js & Node.js

A modern, responsive personal portfolio website built with React.js and Node.js/Express backend.

## 🚀 Features

- **Modern React Frontend** - Built with React 18, Vite, and Framer Motion
- **Node.js Backend** - Express.js API with contact form handling
- **Responsive Design** - Mobile-first approach with beautiful UI/UX
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **Contact Form** - Backend API integration for contact form submissions
- **Modern UI** - Clean, professional design with gradient accents

## 📁 Project Structure

```
Personal-Website/
├── frontend/          # React.js frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js/Express backend
│   ├── server.js      # Express server
│   └── package.json
└── README.md
```

## 🛠️ Setup Instructions

### ⚠️ IMPORTANT: You Need Node.js!

**You cannot use a simple "Live Server" extension** because React apps need compilation and bundling. You must install Node.js first.

### Prerequisites

- **Node.js (v18 or higher)** - Download from https://nodejs.org/
  - The installer includes npm (Node Package Manager)
  - Make sure to check "Add to PATH" during installation
  - Restart your computer/terminal after installation

### Quick Start (After Node.js is Installed)

**Option 1: Use the start script (Easiest)**
- Windows: Double-click `start.bat`
- PowerShell: Run `.\start.ps1`

**Option 2: Manual setup**

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (first time only):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Why Can't I Use Live Server?

| Live Server | React Dev Server (Vite) |
|------------|------------------------|
| ❌ Can't compile JSX | ✅ Compiles JSX automatically |
| ❌ No module bundling | ✅ Bundles all modules |
| ❌ No hot reload | ✅ Hot Module Replacement |
| ❌ Static files only | ✅ Full React app |

React apps use JSX and ES6 modules that need to be compiled and bundled before browsers can understand them.

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=visulaph@gmail.com
```

4. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend will be available at `http://localhost:5000`

## 📝 Configuration

### Email Configuration (Optional)

To enable email notifications for contact form submissions:

1. Create a Gmail App Password:
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password
   - Use this password in your `.env` file

2. Update the `.env` file with your email credentials

Note: Email sending is currently commented out in `server.js`. Uncomment the email sending code once you've configured your email credentials.

## 🚀 Deployment

### Frontend Deployment

Build the frontend for production:
```bash
cd frontend
npm run build
```

The built files will be in the `frontend/dist` directory.

### Backend Deployment

The backend can be deployed to services like:
- Heroku
- Railway
- Render
- AWS
- DigitalOcean

Make sure to set environment variables in your deployment platform.

## 📦 Technologies Used

### Frontend
- React.js 18
- Vite
- Framer Motion
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- Nodemailer
- Express Validator
- CORS

## 🎨 Customization

### Update Personal Information

Edit the following files to update your personal information:
- `frontend/src/components/Hero.jsx` - Hero section
- `frontend/src/components/About.jsx` - About section
- `frontend/src/components/Projects.jsx` - Projects section
- `frontend/src/components/Skills.jsx` - Skills section
- `frontend/src/components/Contact.jsx` - Contact information

### Styling

The color scheme can be customized in `frontend/src/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #8b5cf6;
  /* ... */
}
```

## 📧 Contact Form

The contact form sends submissions to the backend API. Make sure both frontend and backend are running for the contact form to work.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.
