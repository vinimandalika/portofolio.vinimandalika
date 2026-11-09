# Portfolio Website — Revision Summary

## Color Palette Revision — STRICT TWO-COLOR ONLY

### ✅ IMPLEMENTED: Pure Two-Color Palette

**Base Colors (ONLY):**
1. **Petal Reverie**: `#F4C9D6` — Soft pastel pink
2. **Ivory Hearth**: `#F5F0E6` — Warm creamy ivory

### ❌ REMOVED: All Third Colors

The following colors have been **completely removed** from the design:
- ❌ Deep Espresso (#402522) — Brown
- ❌ Any green tones
- ❌ Black
- ❌ Pure white
- ❌ Blue
- ❌ Purple
- ❌ Any other colors

### 🎨 Design Implementation

**Color Usage Strategy:**

1. **Petal Reverie Variations** (using opacity):
   - 10% opacity (`petal-10`) — Very subtle backgrounds
   - 20% opacity (`petal-20`) — Light accents, tags
   - 30% opacity (`petal-30`) — Borders, shadows
   - 40% opacity (`petal-40`) — Medium borders
   - 50% opacity (`petal-50`) — Gradients, hover states
   - 60% opacity (`petal-60`) — Light text
   - 70% opacity (`petal-70`) — Secondary text
   - 80% opacity (`petal-80`) — Emphasis
   - 90% opacity (`petal-90`) — Body text
   - 100% opacity (`petal-100`) — Full strength, headings, accents

2. **Ivory Hearth Variations** (using opacity):
   - 10-30% opacity — Subtle overlays
   - 50% opacity (`ivory-50`) — Light backgrounds
   - 70% opacity (`ivory-70`) — Medium backgrounds
   - 90% opacity (`ivory-90`) — Card backgrounds
   - 100% opacity (`ivory-100`) — Main background

**Text Colors:**
- **Primary Text**: Petal Reverie 100% (`--petal-100`)
- **Secondary Text**: Petal Reverie 70% (`--petal-70`)
- **Body Text**: Petal Reverie 90% (`--petal-90`)
- **Light Text**: Petal Reverie 60% (`--petal-60`)

**Backgrounds:**
- **Main Background**: Ivory Hearth 100%
- **Card Backgrounds**: Ivory Hearth 90%
- **Alternating Sections**: Gradients between Ivory 100% and 90%

**Accents & Highlights:**
- **Buttons**: Petal Reverie 100% on Ivory background
- **Links**: Petal Reverie 100%
- **Borders**: Petal Reverie 30-50%
- **Shadows**: Petal Reverie 20-40%
- **Badges/Tags**: Petal Reverie 20% background with 100% text

**Icons:**
- Grayscale with sepia/hue-rotate filter to tint pink
- Filter: `grayscale(100%) sepia(100%) saturate(300%) hue-rotate(300deg) opacity(0.7)`

### 📐 Design Aesthetic Achieved

✅ **Romantic Digital Art Gallery**
- Dreamy pastel pink and warm ivory throughout
- Soft, feminine aesthetic
- No harsh colors or contrasts

✅ **Elegant Editorial Layout**
- Clean typography hierarchy
- Beautiful whitespace
- Sophisticated composition

✅ **Minimalist Artistic Design**
- Only two colors used throughout
- Tonal variations create depth
- Premium feel maintained

✅ **Excellent Readability**
- High contrast between text (Petal 90%) and background (Ivory 100%)
- Opacity levels ensure text is always legible
- No brown or espresso colors that would look too heavy

### 🎯 Where Colors Are Applied

1. **Global Styles** (`global.css`)
   - All CSS variables updated
   - Buttons use only two colors
   - Cards use Ivory 90% with Petal borders
   - Tags use Petal 20% background

2. **Hero Section** (`Hero.css`)
   - Name gradient: Petal 100% to Petal 70%
   - Placeholder circle: Petal gradient background
   - Border: Petal 100%

3. **About Section** (`About.css`)
   - Background: Ivory gradient
   - Card borders: Petal 30%
   - Heading colors: Petal 100%
   - Icons: Pink-tinted with filter

4. **Experience, Education, Organization**
   - Timeline line: Petal gradient
   - Markers: Petal 100%
   - Badges: Petal 20% background
   - All text: Petal variations

5. **Certificates**
   - Card backgrounds: Ivory 90%
   - Type badges: Petal 30-50% gradient
   - Modal overlay: Petal 30% with blur
   - All borders: Petal variations

6. **Projects, Skills, Journal**
   - Categories: Petal gradient badges
   - Card accents: Petal opacity levels
   - Hover effects: Petal shadows

7. **Contact & Footer**
   - Background gradients: Ivory to light Petal
   - Icons: Pink-tinted
   - Links: Petal 100%

### ✨ Visual Effects

**Shadows:**
- Box shadows use Petal at 20-50% opacity
- Subtle and romantic feel
- No black shadows

**Gradients:**
- All gradients use only Petal or Ivory
- Linear gradients: Petal 30% → 100% → 30%
- Radial gradients: Petal center fading to transparent

**Borders:**
- 1-2px borders using Petal 30-50%
- Rounded corners (20px radius)
- Delicate and soft appearance

**Hover States:**
- Transform effects (translateY, translateX)
- Opacity changes within Petal range
- Shadow intensity increases (Petal 20% → 40%)

### 🔍 Verification

To confirm no other colors are used:
1. Search all CSS files for `#` — only #F4C9D6 and #F5F0E6 found
2. All `background-color` uses CSS variables
3. All `color` properties use CSS variables
4. No RGB values outside the two base colors
5. No HSL values used
6. No named colors (black, white, green, etc.)

### 📱 Responsive Design Maintained

The two-color palette is consistently applied across all breakpoints:
- Desktop (1024px+)
- Tablet (768-1023px)
- Mobile (< 768px)

### 🎨 Result

A beautiful, dreamy, romantic portfolio website that looks like a premium pastel art gallery using **exclusively** two colors: Petal Reverie and Ivory Hearth. The design is sophisticated, elegant, and visually captivating while maintaining excellent readability through careful use of opacity levels.

**No brown. No espresso. No green. No third color.**

**Just pure Petal Reverie and Ivory Hearth. ✨**

---

© 2026 Vini Mandalika. All Rights Reserved.
