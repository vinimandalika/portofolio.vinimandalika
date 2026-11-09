# Vini Mandalika Portfolio - Deployment Guide

This document provides instructions for deploying the portfolio website to GitHub Pages.

## Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher) installed
- npm or yarn package manager
- A GitHub account
- Git installed on your machine

## Installation Steps

1. **Install Dependencies**

   Open a terminal in the project directory and run:
   ```bash
   npm install
   ```

2. **Test Locally**

   Run the development server:
   ```bash
   npm run dev
   ```
   
   Open your browser and visit `http://localhost:5173` to preview the website.

## GitHub Pages Deployment

### Method 1: Automated Deployment (Recommended)

1. **Update `vite.config.js`**

   The `base` path in `vite.config.js` is currently set to `'./'` for relative paths. If you want to deploy to `https://yourusername.github.io/repository-name/`, update it to:
   
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/',  // Replace with your actual repository name
   })
   ```

2. **Build the Project**

   ```bash
   npm run build
   ```
   
   This creates a `dist` folder with the production build.

3. **Deploy to GitHub Pages**

   Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
   
   Add deployment scripts to `package.json`:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
   
   Deploy:
   ```bash
   npm run deploy
   ```

### Method 2: Manual Deployment

1. **Build the Project**

   ```bash
   npm run build
   ```

2. **Push to GitHub**

   Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
     - Or manually deploy the `dist` folder to the `gh-pages` branch

4. **Create GitHub Action (Optional)**

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## Custom Domain (Optional)

If you have a custom domain:

1. Create a `CNAME` file in the `public` folder with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Troubleshooting

### Build Errors

If you encounter build errors:
- Ensure all dependencies are installed: `npm install`
- Clear the cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version: `node --version` (should be v16+)

### Assets Not Loading

If assets don't load after deployment:
- Verify the `base` path in `vite.config.js` matches your repository name
- Check that all image paths are relative
- Clear browser cache and hard reload (Ctrl+Shift+R)

### Certificate Images

Certificate images from the PDF documents can be:
- Extracted and placed in the `src/assets/certificates/` folder
- Linked in the `portfolioData.js` file
- Displayed in the certificate modal

## Local Preview of Production Build

To preview the production build locally:

```bash
npm run build
npm run preview
```

This will serve the `dist` folder at `http://localhost:4173`

## Contact

For questions or issues, please contact:
- Email: vinimandalikaofc@gmail.com
- Phone: +62 881 0122 2704

---

© 2026 Vini Mandalika. All Rights Reserved.
