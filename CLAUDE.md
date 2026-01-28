# CLAUDE.md

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

## Tech Stack

- Next.js 16 (App Router)
- React 19, Tailwind CSS
- JavaScript/JSX (no TypeScript)
- Deployed on Vercel

## Structure

- `src/app/` - Pages (layout.js, page.jsx, sitemap.js)
- `src/data/projects.js` - Project data
- `public/` - Static assets (logo, favicon, og image)

## Notes

- Single-page site, light theme
- `page.jsx` uses `'use client'` directive
- Inline SVG icons (no icon libraries)
