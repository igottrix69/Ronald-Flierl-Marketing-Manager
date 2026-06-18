# Ronald Flierl — Marketing Manager

A premium, fully responsive personal marketing website for **Ronald Flierl**, a data-driven Marketing Manager & AI workflow expert based in Port Moresby, Papua New Guinea.

Built to feel like a high-end agency portfolio: cinematic typography, smooth scrolling, scroll-triggered animations, animated stat counters, an infinite client-logo marquee, magnetic buttons, and a dark/light theme system with no flash of unstyled content.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with CSS-custom-property theme tokens
- **Framer Motion** — entrance, scroll and page-transition animations
- **Lenis** — smooth scrolling (auto-disabled for `prefers-reduced-motion`)
- **next/font** (Inter + Sora) and **next/image** for all imagery
- **lucide-react** icons

No backend is required — the contact form falls back to the visitor's mail client via a `mailto:` link.

## Project structure

```
app/                 Routes (/, /work, /about), layout, theme + SEO files
  layout.tsx         Fonts, theme init script, providers, nav/footer
  template.tsx       Cross-route page transition
  globals.css        Theme tokens (dark default + .light), utilities
  opengraph-image.tsx  Generated OG/Twitter card
  sitemap.ts / robots.ts
components/           Reusable UI (Nav, Footer, Button, Reveal, counters…)
sections/            Page sections grouped by route (home / work / about)
data/                All copy & content as typed objects — edit here
lib/                 cn() helper, motion variants, reduced-motion hook
public/
  logos/             Client logos (linked, open in new tab)
  work/              Landing-page screenshots for portfolio cards
```

## Editing content

All copy lives in `/data` — no text is hardcoded in components:

| File | Controls |
| --- | --- |
| `data/site.ts` | Name, tagline, contact details, nav links |
| `data/stats.ts` | Animated stat counters |
| `data/services.ts` | Home services cards |
| `data/timeline.ts` | Work-experience timeline |
| `data/projects.ts` | Featured landing-page projects |
| `data/skills.ts` | Skills list + tools/platforms |
| `data/about.ts` | Bio, education, references |
| `data/clients.ts` | Client logos + official URLs |

## Theme system

- Default mode is **dark** (`#0a0a0a`). The Day/Night toggle in the nav swaps to light (`#ffffff`).
- Accent `#1b88ff` is shared across both modes.
- Preference persists in `localStorage` and respects `prefers-color-scheme` on first load.
- An inline script in `<head>` sets the theme class before paint to avoid FOUC.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # eslint
```

## Deploy to Vercel

This project is zero-config on Vercel:

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) (framework auto-detected as Next.js), **or** run `vercel --prod` from the project root with the Vercel CLI.

No environment variables are required.

---

© Ronald Flierl. Built with Next.js, Tailwind CSS and Framer Motion.
