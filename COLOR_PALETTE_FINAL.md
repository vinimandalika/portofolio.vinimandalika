# COLOR PALETTE — OFFICIAL SPECIFICATION

## ✅ FINAL THREE-COLOR PALETTE IMPLEMENTATION

### Official Colors

1. **Petal Reverie** — `#F4C9D6` — Soft pastel pink
2. **Ivory Hearth** — `#F5F0E6` — Warm creamy ivory
3. **Deep Espresso** — `#402522` — Rich brown (TEXT ONLY)

---

## 🎨 Color Usage Rules

### **Petal Reverie (#F4C9D6)**
✅ **Allowed Uses:**
- Primary accent color
- Buttons and interactive elements
- Decorative shapes and borders
- Card accents and badges
- Subtle background gradients
- Shadows (using opacity)
- Hover states

❌ **Not Used For:**
- Typography (except decorative)
- Body text
- Headings

### **Ivory Hearth (#F5F0E6)**
✅ **Allowed Uses:**
- Main website background
- Section backgrounds
- Card backgrounds
- Main canvas and whitespace
- Alternating section backgrounds

❌ **Not Used For:**
- Typography
- Text content

### **Deep Espresso (#402522)**
✅ **EXCLUSIVELY Used For:**
- **ALL typography**
- Main headings (h1, h2, h3, h4, h5, h6)
- Body text and paragraphs
- Navigation text
- Labels and descriptions
- All readable content
- Button text
- Links
- Form labels
- Icon text

❌ **NEVER Used For:**
- Backgrounds
- Borders
- Decorative shapes
- Shadows
- Illustrations
- Button backgrounds
- Card backgrounds

---

## 📐 Implementation Details

### CSS Variables Defined

```css
:root {
  /* Base Colors */
  --petal-reverie: #F4C9D6;
  --ivory-hearth: #F5F0E6;
  --deep-espresso: #402522;
  
  /* Petal Variations (backgrounds/accents only) */
  --petal-10: rgba(244, 201, 214, 0.1);
  --petal-20: rgba(244, 201, 214, 0.2);
  --petal-30: rgba(244, 201, 214, 0.3);
  --petal-40: rgba(244, 201, 214, 0.4);
  --petal-50: rgba(244, 201, 214, 0.5);
  --petal-60: rgba(244, 201, 214, 0.6);
  --petal-70: rgba(244, 201, 214, 0.7);
  --petal-80: rgba(244, 201, 214, 0.8);
  --petal-90: rgba(244, 201, 214, 0.9);
  --petal-100: rgba(244, 201, 214, 1);
  
  /* Ivory Variations (backgrounds only) */
  --ivory-90: rgba(245, 240, 230, 0.9);
  --ivory-100: rgba(245, 240, 230, 1);
  
  /* Espresso Variations (text only) */
  --espresso-100: rgba(64, 37, 34, 1);
  --espresso-90: rgba(64, 37, 34, 0.9);
  --espresso-80: rgba(64, 37, 34, 0.8);
  --espresso-70: rgba(64, 37, 34, 0.7);
  --espresso-60: rgba(64, 37, 34, 0.6);
  
  /* Text Variables - ALL use Deep Espresso */
  --text-primary: var(--espresso-100);
  --text-secondary: var(--espresso-80);
  --text-body: var(--espresso-90);
  --text-light: var(--espresso-70);
  --text-lighter: var(--espresso-60);
}
```

---

## 🎯 Where Each Color Is Applied

### **Petal Reverie Applications:**

1. **Buttons**
   - Primary button background: `petal-100`
   - Button hover state: `petal-90`
   - Secondary button border: `petal-100`
   - Button shadows: `petal-30` to `petal-50`

2. **Borders & Accents**
   - Card borders: `petal-30` to `petal-40`
   - Section dividers: `petal-30`
   - Decorative lines: `petal-100`
   - Timeline markers: `petal-100`

3. **Badges & Tags**
   - Background: `petal-20` to `petal-50`
   - Border: `petal-40` to `petal-100`

4. **Interactive Elements**
   - Link underlines: `petal-100`
   - Hover effects backgrounds: `petal-20`
   - Focus states: `petal-50`

5. **Decorative Elements**
   - Decorative circles: `petal-100` (with opacity)
   - Gradient accents: `petal-30` to `petal-100`
   - Card hover shadows: `petal-40` to `petal-50`

### **Ivory Hearth Applications:**

1. **Backgrounds**
   - Main body background: `ivory-100`
   - Section backgrounds: `ivory-90` to `ivory-100`
   - Card backgrounds: `ivory-90`
   - Modal backgrounds: `ivory-90`

2. **Alternating Sections**
   - Gradients between: `ivory-90` and `ivory-100`

### **Deep Espresso Applications:**

1. **All Headings**
   - H1 (Hero name): `espresso-100`
   - H2 (Section titles): `espresso-100`
   - H3 (Card titles): `espresso-100`
   - H4-H6 (Subtitles): `espresso-100`

2. **All Body Text**
   - Paragraphs: `espresso-90`
   - Descriptions: `espresso-90`
   - Lists: `espresso-90`

3. **Navigation**
   - Nav links: `espresso-100`
   - Mobile menu: `espresso-100`
   - Hamburger icon: `espresso-100`

4. **Labels & Metadata**
   - Strong text: `espresso-100`
   - Date labels: `espresso-70`
   - Category labels: `espresso-100`
   - Badges text: `espresso-100`

5. **Interactive Text**
   - Button text (on pink background): `espresso-100`
   - Link text: `espresso-100`
   - Form labels: `espresso-100`

6. **Placeholder & Notes**
   - Placeholder text: `espresso-70`
   - Italic notes: `espresso-70`
   - Footer text: `espresso-70` to `espresso-100`

---

## ✅ Verification Checklist

### Colors Confirmed Present:
- ✅ Petal Reverie (#F4C9D6)
- ✅ Ivory Hearth (#F5F0E6)
- ✅ Deep Espresso (#402522)

### Colors Confirmed Removed:
- ❌ Pure Black (#000000)
- ❌ Pure White (#FFFFFF)
- ❌ Green (any shade)
- ❌ Blue (any shade)
- ❌ Purple (any shade)
- ❌ Orange (any shade)
- ❌ Yellow (any shade)

### Typography Validation:
- ✅ All headings use Deep Espresso
- ✅ All body text uses Deep Espresso
- ✅ All navigation text uses Deep Espresso
- ✅ All labels use Deep Espresso
- ✅ All button text uses Deep Espresso
- ✅ All links use Deep Espresso

### Background Validation:
- ✅ Main background uses Ivory Hearth
- ✅ Section backgrounds use Ivory variations
- ✅ Card backgrounds use Ivory 90%
- ✅ No Deep Espresso backgrounds

### Accent Validation:
- ✅ Buttons use Petal Reverie
- ✅ Borders use Petal Reverie
- ✅ Badges use Petal Reverie background
- ✅ Shadows use Petal Reverie opacity
- ✅ No Deep Espresso accents

---

## 🎨 Design Aesthetic Achieved

**Romantic Digital Art Gallery:**
- ✅ Dreamy pastel pink (Petal Reverie)
- ✅ Warm creamy ivory (Ivory Hearth)
- ✅ Rich, readable typography (Deep Espresso)
- ✅ Soft feminine aesthetic
- ✅ Elegant editorial layout
- ✅ Premium art portfolio feel

**Excellent Readability:**
- Deep Espresso on Ivory Hearth = High contrast
- Deep Espresso on Petal Reverie = Good contrast
- No low-contrast combinations
- Typography optimized for reading

**Visual Harmony:**
- Three colors working together
- Petal Reverie for visual interest
- Ivory Hearth for calm background
- Deep Espresso for clarity and readability

---

## 📋 Files Updated

All CSS files have been updated to use the official three-color palette:

1. `src/styles/global.css` — Color variables and base styles
2. `src/styles/Navbar.css` — Navigation text and styling
3. `src/styles/Hero.css` — Hero section typography
4. `src/styles/About.css` — About section text
5. `src/styles/Experience.css` — Timeline and text
6. `src/styles/Education.css` — Education card text
7. `src/styles/Organization.css` — Organization content text
8. `src/styles/CertificateGallery.css` — Certificate cards text
9. `src/styles/CertificateModal.css` — Modal typography
10. `src/styles/ProjectGallery.css` — Project cards text
11. `src/styles/Skills.css` — Skills section text
12. `src/styles/CreativeJournal.css` — Journal content text
13. `src/styles/Contact.css` — Contact section text
14. `src/styles/Footer.css` — Footer typography

---

## 🎉 Final Result

A beautiful, elegant, dreamy romantic portfolio website using:

**Three Colors. Perfect Harmony. Premium Design.**

- **Petal Reverie** for accents and visual interest
- **Ivory Hearth** for backgrounds and whitespace
- **Deep Espresso** for all typography

**No unauthorized colors. Excellent readability. Sophisticated aesthetic.**

---

© 2026 Vini Mandalika. All Rights Reserved.
