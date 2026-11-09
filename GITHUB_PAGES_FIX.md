# GitHub Pages Deployment Fix — Complete Guide

## 🔍 Problem Diagnosis

**Issue**: The website displays a blank white page on GitHub Pages at:
`https://vinimandalika.github.io/portofolio.vinimandalika/`

**Root Cause**: The `vite.config.js` was using `base: './'` which works locally but fails on GitHub Pages when deployed to a repository subpath. GitHub Pages serves the site from `/portofolio.vinimandalika/`, but Vite was generating asset paths without this base path.

---

## ✅ Files Modified

### 1. **vite.config.js** — FIXED ✅

**Before:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: './',  // ❌ WRONG - causes blank page on GitHub Pages
})
```

**After:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portofolio.vinimandalika/',  // ✅ CORRECT - matches repository name
})
```

**Why this fixes it**: Vite now generates all asset paths (JS, CSS, fonts) with `/portofolio.vinimandalika/` prefix, making them accessible on GitHub Pages.

---

### 2. **package.json** — UPDATED ✅

**Added:**
- `gh-pages` to devDependencies
- `deploy` script for easy deployment

**New scripts:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

**New devDependency:**
```json
"gh-pages": "^6.1.1"
```

---

### 3. **.github/workflows/deploy.yml** — CREATED ✅

Created automated GitHub Actions workflow for continuous deployment.

**What it does:**
1. Triggers on push to main/master branch
2. Installs dependencies with `npm ci`
3. Builds the project with `npm run build`
4. Deploys the `dist` folder to GitHub Pages

---

## 🚀 Deployment Instructions

### Option 1: Automated Deployment (Recommended)

**Step 1: Enable GitHub Pages**
1. Go to your GitHub repository: `https://github.com/vinimandalika/portofolio.vinimandalika`
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
4. Click **Save**

**Step 2: Push Changes**
```bash
git add .
git commit -m "Fix GitHub Pages deployment with correct base path"
git push origin main
```

**Step 3: Wait for Deployment**
- GitHub Actions will automatically build and deploy
- Check progress: Repository → **Actions** tab
- Site will be live in 2-3 minutes

---

### Option 2: Manual Deployment with gh-pages

**Step 1: Install Dependencies**
```bash
npm install
```

**Step 2: Build and Deploy**
```bash
npm run deploy
```

This will:
1. Build the production version (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages will serve from the `gh-pages` branch

**Step 3: Configure GitHub Pages**
1. Go to repository **Settings** → **Pages**
2. Source: Select **"Deploy from a branch"**
3. Branch: Select **"gh-pages"** and folder **"/ (root)"**
4. Click **Save**

---

## 🔧 How to Build Locally

If you need to test the production build locally:

```bash
# Install dependencies (if not already done)
npm install

# Build production version
npm run build

# Preview the production build
npm run preview
```

The preview will run at `http://localhost:4173` with the correct base path.

---

## ✅ What Was Fixed

### Before (Broken):
- ❌ Base path: `./`
- ❌ Asset paths: `/assets/index-abc123.js`
- ❌ On GitHub Pages: `https://vinimandalika.github.io/assets/index-abc123.js` (404 error)
- ❌ Result: Blank white page

### After (Fixed):
- ✅ Base path: `/portofolio.vinimandalika/`
- ✅ Asset paths: `/portofolio.vinimandalika/assets/index-abc123.js`
- ✅ On GitHub Pages: `https://vinimandalika.github.io/portofolio.vinimandalika/assets/index-abc123.js` (works!)
- ✅ Result: Website loads correctly

---

## 🎨 Design Preservation

**Confirmed**: No design, content, or functionality changes were made.

✅ Color palette preserved:
- Petal Reverie (#F4C9D6)
- Ivory Hearth (#F5F0E6)
- Deep Espresso (#402522)

✅ All sections preserved:
- Hero, About, Experience, Education, Organization
- Certificates, Projects, Skills, Journal, Contact, Footer

✅ React + Vite architecture preserved

---

## 📋 Verification Checklist

After deployment, verify:

1. **Homepage loads** at `https://vinimandalika.github.io/portofolio.vinimandalika/`
2. **No console errors** (press F12 → Console tab)
3. **All sections visible** (Hero, About, Experience, etc.)
4. **Navigation works** (clicking nav links scrolls to sections)
5. **Certificates modal opens** (click any certificate card)
6. **Colors are correct** (pink, ivory, espresso)
7. **Responsive design works** (test mobile view)

---

## 🐛 Troubleshooting

### Issue: Still seeing blank page after deployment

**Solution 1: Clear browser cache**
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

**Solution 2: Check GitHub Pages source**
1. Repository → Settings → Pages
2. Verify source is set correctly:
   - **GitHub Actions** (Option 1), OR
   - **gh-pages branch** (Option 2)

**Solution 3: Check GitHub Actions**
1. Repository → Actions tab
2. Look for deployment workflow
3. Check for errors in build/deploy steps

### Issue: Assets not loading (404 errors)

**Check**: Open browser console (F12)
- If you see errors like `/assets/index.js 404`
- The base path is incorrect

**Solution**: Ensure `vite.config.js` has:
```javascript
base: '/portofolio.vinimandalika/',
```
(Must match exact repository name with slashes)

### Issue: Build fails

**Common causes:**
1. Node modules not installed → Run `npm install`
2. Node version too old → Use Node 18 or higher
3. Syntax errors → Check console output

---

## 📝 Summary

### What You Need to Do Now:

**If using GitHub Actions (Recommended):**
1. Enable GitHub Pages with "GitHub Actions" source
2. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment"
   git push origin main
   ```
3. Wait 2-3 minutes for deployment
4. Visit: `https://vinimandalika.github.io/portofolio.vinimandalika/`

**If using manual deployment:**
1. Run: `npm install`
2. Run: `npm run deploy`
3. Configure GitHub Pages to use `gh-pages` branch
4. Visit: `https://vinimandalika.github.io/portofolio.vinimandalika/`

---

## 🎉 Expected Result

After following these steps, your portfolio website will:
- ✅ Load correctly on GitHub Pages
- ✅ Display all sections with correct styling
- ✅ Show the beautiful Petal Reverie, Ivory Hearth, and Deep Espresso color scheme
- ✅ Work on desktop, tablet, and mobile
- ✅ Have functional navigation and interactions

---

**Last Updated**: Now
**Status**: Ready to deploy 🚀

For questions or issues, check the GitHub Actions logs or browser console for specific error messages.
