# Shubham Saurabh — Portfolio

A premium modern portfolio website built for showcasing UI/UX design work.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)

## ✨ Features

- **4 Complete Pages** — Home, About, Experience, Contact
- **Ocean-inspired Theme** — Premium blue-teal gradient palette
- **Smooth Animations** — Framer Motion page transitions and scroll reveals
- **Responsive Design** — Mobile-first, works beautifully on all screen sizes
- **Premium Typography** — Google Fonts (Inter + Outfit)
- **Interactive Elements** — Hover effects, category filters, animated timeline
- **Contact Form** — Full form with validation and submission states
- **Loading Screen** — Custom animated loading experience
- **SEO Optimized** — Full metadata, semantic HTML, accessibility
- **Vercel Ready** — Optimized for one-click Vercel deployment

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts, navbar, footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── experience/
│   │   └── page.tsx        # Experience page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── layout/             # Navbar, Footer, PageTransition, LoadingScreen
│   ├── ui/                 # Reusable: Button, ScrollReveal, SectionHeader
│   ├── home/               # Hero, ProjectsGrid, ProjectCard, HomeCTA
│   ├── about/              # AboutHero, DesignPhilosophy, Skills, Tools, UXProcess, Achievements
│   ├── experience/         # ExperienceHero, Timeline
│   └── contact/            # ContactHero, ContactForm, ContactInfo
└── data/
    └── projects.ts         # Project data
```

## 🎨 Design System

### Colors
- **Ocean palette** — `ocean-50` to `ocean-950`
- **Surface greys** — `surface-50` to `surface-500`
- **Ink text** — `ink-300` to `ink-900`

### Typography
- **Display** — Outfit (headings)
- **Body** — Inter (body text)

### Components
- Gradient buttons with hover lift
- Glass-morphism cards
- Scroll-reveal animations
- Animated category filters
- Timeline with alternating layout

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy — no configuration needed

## 📝 License

MIT © Shubham Saurabh
