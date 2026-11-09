# Quick Start Guide — Vini Mandalika Portfolio

Get your portfolio website up and running in minutes!

## 🚀 Fast Setup (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your site will be available at: `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 📝 Quick Customization

### Update Contact Information
Edit `src/components/Contact.jsx`:
```javascript
<a href="mailto:youremail@example.com">youremail@example.com</a>
<a href="tel:+1234567890">+1 234 567 890</a>
```

### Add Your Profile Photo
1. Place your photo in `src/assets/images/profile.jpg`
2. Edit `src/components/Hero.jsx`
3. Replace the placeholder with:
```jsx
<img src="/src/assets/images/profile.jpg" alt="Vini Mandalika" />
```

### Update Content
All content is in `src/data/portfolioData.js`:
- Certificates
- Projects
- Skills
- Journal posts

---

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic (Recommended)
```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

### Option 2: Manual
1. Build: `npm run build`
2. Push the `dist` folder to GitHub
3. Enable GitHub Pages in repository settings

---

## 🎨 Color Customization

Colors are defined in `src/styles/global.css`:

```css
:root {
  --petal-reverie: #F4C9D6;  /* Change primary accent */
  --ivory-hearth: #F5F0E6;   /* Change background */
}
```

---

## 📱 Testing Responsive Design

### In Browser
- Press `F12` to open DevTools
- Click device toolbar icon
- Test different screen sizes

### Recommended Test Sizes
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1440px

---

## ❓ Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets Not Loading
Check that `vite.config.js` has:
```javascript
base: './',
```

---

## 📖 Full Documentation

For detailed information, see:
- `README.md` — Complete project documentation
- `DEPLOYMENT.md` — Deployment instructions
- `PROJECT_SUMMARY.md` — Implementation details

---

## 🆘 Need Help?

Contact: vinimandalikaofc@gmail.com

---

**That's it! Your portfolio is ready to go live! 🎉**
