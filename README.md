# NZINGA Management Website

A modern, premium website for NZINGA Management - a premier talent management agency representing top creators and influencers.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Playfair Display + Manrope (Google Fonts)

## Features

- 🎨 Dark luxury theme with gold accents
- ✨ Smooth animations and micro-interactions
- 📱 Fully responsive design
- 🔍 SEO optimized
- ♿ Accessible components
- 🚀 Fast performance with Next.js
- 📄 Static export for GitHub Pages

## Pages

- **Home** - Hero section, animated stats, featured talent, mission statement, and CTAs
- **Talent** - Filterable talent roster with search functionality
- **About** - Company story, timeline, values, team, and office locations
- **Contact** - Contact form with office information
- **Join** - Multi-step application form for new talent

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/NZINGA-Management.git
cd NZINGA-Management
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. The GitHub Action will automatically build and deploy to:
   ```
   https://yourusername.github.io/NZINGA-Management/
   ```

### Manual Build

To build the static export locally:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Testing the Build Locally

After building, you can serve the static files locally:

```bash
npx serve out
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Home page
│   ├── talent/page.tsx     # Talent roster
│   ├── about/page.tsx      # About us
│   ├── contact/page.tsx    # Contact page
│   └── join/page.tsx       # Application page
├── components/
│   ├── navigation.tsx      # Header/nav
│   ├── footer.tsx          # Footer
│   ├── hero.tsx            # Hero section
│   ├── stats-counter.tsx   # Animated stats
│   ├── featured-talent.tsx # Featured talent carousel
│   ├── mission-section.tsx # Mission statement
│   ├── cta-section.tsx     # Call to action
│   └── talent-card.tsx     # Talent display cards
├── lib/
│   └── utils.ts            # Utility functions
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
└── app/globals.css         # Global styles + theme
```

## Design System

### Colors

- **Background**: `#0a0a0a` (primary), `#111111` (secondary)
- **Foreground**: `#f5f5f5` (primary), `#a3a3a3` (muted)
- **Accent**: `#d4a853` (gold)
- **Border**: `#262626`

### Typography

- **Headlines**: Playfair Display (serif)
- **Body**: Manrope (sans-serif)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static export for production |
| `npm run start` | Start production server (not for static) |
| `npm run lint` | Run ESLint |

## Configuration

### Changing the Repository Name

If your GitHub repository has a different name, update `next.config.ts`:

```typescript
basePath: isProd ? "/your-repo-name" : "",
assetPrefix: isProd ? "/your-repo-name/" : "",
```

## License

© 2025 NZINGA Management. All Rights Reserved.
