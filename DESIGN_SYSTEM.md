# Design System & Creative Handover Guide
## 🌊 Shubham Saurabh — Premium Portfolio Design Guidelines

Welcome to the Design System and Handover Guide for the **Shubham Saurabh Portfolio**. This documentation is compiled to give designers and developers everything they need to design, expand, and maintain a visually stunning, responsive, and cohesive user experience that aligns perfectly with the brand's identity.

---

## 🎨 1. Brand Identity & Visual Language
The design direction is **"Modern Luxury Ocean-Minimalist"**. It pairs the crisp cleanliness of high-end editorial portfolios with modern interactive 3D particle animations, deep slate inks, fluid ocean blue gradients, and frosted glass elements.

### Key Visual Pillars:
* **Glassmorphism**: Soft, translucent, frosted backdrops combined with high-contrast sharp text.
* **Micro-Interactions**: Hover states that feel alive, responsive, and premium (subtle translate offsets, glowing shadows, organic spring physics).
* **High Contrast Typography**: Editorial Serif Italics paired with clean, tech-inspired sans-serif body copy.
* **Fluid Gradients**: Custom radial and linear ocean blue gradients that guide the user's eye and mimic natural marine light dispersion.

---

## 💎 2. Color Palette (Design Tokens)

The system uses standard Tailwind HSL-mapped custom color tokens, offering full harmony from subtle surface colors to high-intent highlights.

### A. Primary Ocean Accents (High Intent / Glows / Links)
Use these colors for highlights, active links, gradients, and interactive components.
* 💧 **Ocean 50** (`#f0f9ff`): Subtle background tint for highlight blocks.
* 💧 **Ocean 200** (`#bae6fd`): Selection backgrounds and active states.
* 💧 **Ocean 500** (`#0ea5e9`): Core brand blue. Primary CTA buttons and key highlights.
* 💧 **Ocean 600** (`#0284c7`): Medium blue for hover state changes.
* 💧 **Ocean 900** (`#0c4a6e`): Deep marine blue for heavy accents and dark highlights.

### B. Surface & Neutral Grays (Backgrounds / Dividers)
Ensures a crisp and highly polished layout contrast.
* 🪞 **Surface 50** (`#fafbfc`): Main page background color. Feels clean and premium.
* 🪞 **Surface 100** (`#f4f6f8`): Card backgrounds, hover blocks, and secondary surfaces.
* 🪞 **Surface 200** (`#e9ecf0`): Thin borders, dividers, and disabled states.
* 🪞 **Surface 400** (`#9aa5b4`): Subtle utility icons and placeholder borders.

### C. Ink & Slate Typography (High Contrast Text)
Ensures absolute compliance with AAA accessibility guidelines while maintaining visual polish.
* 🖊️ **Ink 900** (`#0f172a`): Core titles, headings, and bold brand elements.
* 🖊️ **Ink 800** (`#1e293b`): Subheadings and high-priority body copy.
* 🖊️ **Ink 600** (`#475569`): Standard body paragraphs.
* 🖊️ **Ink 400** (`#94a3b8`): Metadata, dates, and minor captions.

---

## ✍️ 3. Typography & Typesetting

The typography is structured around three Google Font families to deliver an editorial yet highly functional design.

| Usage | Font Family | Tailwind Class | Style / Weight | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar Brand / Signature** | Playfair Display | `font-signature` | `italic`, Medium (500) | Signature feel, elegant and luxury editorial look. |
| **Headings & Titles** | Outfit | `font-display` | Bold (700) / Semibold (600) | Geometric, clean modern visual weight. |
| **Body / Copy & Buttons** | Inter | `font-sans` | Regular (400) / Medium (500) | Highly legible, neutral, and structurally precise. |

### Typography Scale:
* **H1 / Hero Title**: `text-4xl md:text-5xl lg:text-6xl` | Bold (700) | Line-height: tight (`leading-tight`)
* **H2 / Section Title**: `text-3xl md:text-4xl` | Semibold (600) | Tracking: tight (`tracking-tight`)
* **H3 / Card Header**: `text-xl md:text-2xl` | Medium (500)
* **Body copy**: `text-base` | Regular (400) | Line-height: relaxed (`leading-relaxed`)
* **Caption / Label**: `text-xs md:text-sm` | Tracking: wide (`tracking-wide`)

---

## 🧱 4. Grid, Layout, & Spacing Standards

* **Max Width**: The layout is restricted using a universal container class `.section-container` (max-width `1280px` or `7xl`) centered with custom responsive padding:
  - Mobile: `px-6` (24px side spacing)
  - Tablet/Laptop: `px-8` (32px side spacing)
  - Desktop: `px-12` (48px side spacing)
* **Grid Standard**: Use CSS grid with standardized gutter gaps:
  - Small elements / forms: `gap-4` (16px) or `gap-6` (24px)
  - Grid columns (2-column layouts): `gap-8` (32px) or `gap-12` (48px)
* **Vertical Section Spacing**: Ensure breathing room with large padding:
  - Standard section margins: `py-20` (80px) to `py-32` (128px) on desktops.

---

## ✨ 5. Shadows & Glassmorphism Spec

Frosted glass adds depth and highlights high-end interactive cards.

* **Frosted Backgrounds**: `bg-white/50 backdrop-blur-md`
* **Translucent Borders**: `border border-white/40`
* **Glass Shadow (`shadow-glass`)**:
  - `box-shadow: 0 8px 32px rgba(14, 165, 233, 0.08)`
* **Hover Elevated Card Shadow (`shadow-card-hover`)**:
  - `box-shadow: 0 20px 60px rgba(14, 165, 233, 0.12)`

---

## 🎬 6. Interactive Motion & Hover Specs

All transitions must feel natural and high-end, utilizing organic easing rather than sudden cuts.

### Standard Easing:
* **Ease Out**: `transition-all duration-300 ease-out`
* **Tailwind Spring Settings** (via Framer Motion):
  ```typescript
  transition={{
    type: "spring",
    stiffness: 350,
    damping: 30
  }}
  ```

### Interactive Hover Actions:
1. **Logo / Brand Text**: 
   - Font: `font-signature italic`
   - Hover transition: Shifts from `text-ink-900` to `text-ocean-500` with a scale increase of `scale-[1.02]`.
2. **Interactive Cards**:
   - Scale: `hover:scale-[1.02]`
   - Y-translate: `hover:-translate-y-1`
   - Shadow shift: transitions from `shadow-glass` to `shadow-card-hover`.
3. **Primary CTA Buttons**:
   - Base: `bg-gradient-ocean text-white shadow-glass hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`

---

## 🖥️ 7. 3D Spline Asset Sizing & Clipping Rules

To maintain the premium composition without visual breakage or watermark leak, the interactive 3D Spline container uses locked ratios:

* **Outer Container**:
  - Locked to exactly `h-[600px]` height on **all screen resolutions** (mobile to desktop).
  - Class: `w-full sm:w-[50%] h-[600px] z-0 flex items-center justify-center overflow-hidden relative`
* **Inner Spline Frame**:
  - Width & Height: Locked to `1050px` by `1050px`
  - Scale: Locked to `scale-[0.67]`
  - Centering: Positioned `top-1/2 left-1/2 -translate-x-[54%] -translate-y-1/2`
* **Watermark Hiding**: By clipping the `1050px` high canvas inside a strict `600px` height container with centering, the "Built with Spline" watermark is pushed **`51.75px` below the overflow bounds**, successfully hiding it from view on all screens!

---

## 📁 8. Project Structure & Key Files

For developer-designer alignment, here are where visual tokens and layouts are defined:

* **Global Visual Styles**: `src/app/globals.css` (Defines page borders, baseline layers, custom scrollbars, and body-wide selection styles).
* **Tailwind Configurations**: `tailwind.config.ts` (Maps HSL hex values, custom animations, custom shadows, and active font definitions).
* **Navigation Bar**: `src/components/layout/Navbar.tsx` (Contains signature header typography, mobile overlay dropdown drawer, and CV download configurations).
* **Main Landing Hero**: `src/components/home/Hero.tsx` (Outlines the layout grid, text formatting, CTA alignment, and the responsive 3D Spline scene wrapper).
