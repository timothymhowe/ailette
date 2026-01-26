# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ailette.io is a portfolio platform built with Next.js 15 showcasing projects and technological solutions. It's a single-page application with a dark theme, featuring a hero section, project gallery, and social links.

## Commands

```bash
npm run dev      # Development server with Turbopack (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

## Tech Stack

- **Framework**: Next.js 15.1.7 (App Router)
- **UI**: React 19, Tailwind CSS 3.4
- **Language**: JavaScript/JSX (no TypeScript)
- **Linting**: ESLint with next/core-web-vitals
- **Deployment**: Vercel

## Architecture

### Source Structure

- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - React components (ProjectCard, ProjectDrawer, ProjectGallery, SocialLinks)
- `src/data/projects.js` - Static project data (single source of truth for all projects)
- `public/images/` - Static assets

### Key Patterns

**Client Component Usage**: Main page (`page.jsx`) uses `'use client'` directive for interactivity.

**Image Proxy**: External images route through `/api/proxy-image` to handle CORS. Check this route when modifying image logic.

**Inline SVG Icons**: All icons are inline SVGs, not imported from icon libraries.

**Path Aliases**: Use `@/*` for imports from `src/` (configured in jsconfig.json).

### API Routes

- `/api/proxy-image` - Proxies external images with 24-hour cache
- `/api/get-og-image` - OG image generation endpoint

## Styling

- Dark theme by default (`#0a0a0a` background)
- CSS variables defined in `globals.css` (`--background`, `--foreground`)
- Tailwind CSS with responsive breakpoints at `md:` (768px) and `lg:` (1024px)
