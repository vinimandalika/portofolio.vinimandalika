# 🚀 Deploy to GitHub Pages — Quick Guide

## The Problem (Fixed!)

❌ **Before**: Blank white page on `https://vinimandalika.github.io/portofolio.vinimandalika/`

✅ **After**: Working website with correct paths

---

## What Was Wrong

**Root Cause**: `vite.config.js` had wrong base path

```javascript
// ❌ WRONG (caused blank page)
base: './'

// ✅ FIXED (now works on GitHub Pages)
base: '/portofolio.vinimandalika/'
```

**Why it failed**: GitHub Pages serves from a subdirectory (`/portofolio.vinimandalika/`), but Vite was generating asset paths without this prefix. All CSS, JavaScript, and font files returned 404 errors.

---

## Files Modified

1. ✅ **vite.config.js** — Changed base path to `/portofolio.vinimandalika/`
2. ✅ **package.json** — Added `gh-pages` package and `deploy` script
3. ✅ **.github/workflows/deploy.yml** — Created automated deployment workflow

---

## Deploy Instructions (Choose One Method)

### Method 1: Automated with GitHub Actions (Recommended) ⚡

**Step 1: Enable GitHub Actions for Pages**
1. Go to: `https://github.com/vinimandalika/portofolio.vinimandalika/settings/pages`
2. Under **"Build and deployment"**:
   - **Source**: Select `GitHub Actions`
3. Save

**Step 2: Commit and Push**
```bash
git add .
git commit -m "Fix GitHub Pages deployment with correct base path"
git push origin main
```

**Step 3: Wait for Deployment**
- Go to: `https://github.com/vinimandalika/portofolio.vinimandalika/actions`
- Watch the workflow run (takes 2-3 minutes)
- ✅ Green checkmark = Success!

**Step 4: Visit Your Site**
```
https://vinimandalika.github.io/portofolio.vinimandalika/
```

---

### Method 2: Manual with gh-pages Package 📦

**Step 1: Install Dependencies**
```bash
npm install
```

**Step 2: Deploy**
```bash
npm run deploy
```

**Step 3: Configure GitHub Pages**
1. Go to: `https://github.com/vinimandalika/portofolio.vinimandalika/settings/pages`
2. Under **"Build and deployment"**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` / `/ (root)`
3. Save

**Step 4: Visit Your Site** (after 1-2 minutes)
```
https://vinimandalika.github.io/portofolio.vinimandalika/
```

---

## Verify It's Working

Open browser console (F12) and check:

✅ **No 404 errors** for assets  
✅ **No blank page**  
✅ **All sections visible** (Hero, About, Experience, etc.)  
✅ **Colors showing** (pink, ivory, brown)  
✅ **Navigation works** (smooth scrolling)  
✅ **Certificates modal opens**

---

## If Still Not Working

### Clear Browser Cache
```
Windows/Linux: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### Check GitHub Actions Logs
1. Repository → Actions tab
2. Click latest workflow run
3. Look for red ❌ errors

### Verify Base Path
Make sure `vite.config.js` has:
```javascript
base: '/portofolio.vinimandalika/',
```

---

## Design Preserved ✅

No changes to:
- ✅ Color palette (Petal Reverie, Ivory Hearth, Deep Espresso)
- ✅ Layout and sections
- ✅ Content and typography
- ✅ React components
- ✅ Functionality

**Only fixed**: Deployment configuration

---

## Summary

**What was broken**: Vite base path was `'./'` instead of `'/portofolio.vinimandalika/'`

**What was fixed**: 
1. Updated `vite.config.js` with correct base path
2. Added deployment scripts to `package.json`
3. Created GitHub Actions workflow for automated deployment

**What you need to do**:
1. Commit and push the changes
2. Enable GitHub Actions in repository settings
3. Wait 2-3 minutes
4. Visit your site!

---

🎉 **Your website will now work on GitHub Pages!**
