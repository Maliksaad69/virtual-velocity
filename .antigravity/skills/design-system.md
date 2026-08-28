# Antigravity Design System Skill

## Visual Identity Architecture
- **Primary Canvas**: Obsidian Dark Canvas (`#07080b`).
- **Surface Elevation**: Deep Surface (`#0e1017`) and Glass (`rgba(255, 255, 255, 0.04)`).
- **High-Voltage Accent**: Electric Coral/Flame (`#ff3b19`) with `#ffaa00` gold accents.
- **Typography Hierarchy**:
  - Headings: `Satoshi` (900/800 weight, uppercase, negative letter spacing).
  - Body: `Inter` (high-legibility, 1.5 line height).
  - Monospace Badges: `Space Mono` (uppercase letter-spacing 0.12em).

## Layout & Component Rules
- **Non-Static Content**: Every image card must feature hover scaling (`scale: 1.05`), sheen/glow reflections, or subtle background breathing keyframes.
- **Micro-Animations**: All interactive buttons use magnetic physics (`whileHover={{ scale: 1.04, y: -2 }}`, `whileTap={{ scale: 0.96 }}`).
- **SEO & Accessibility**: Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`) with explicit `aria-label` tags.
