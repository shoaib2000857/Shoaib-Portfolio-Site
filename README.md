# Shoaib Portfolio Site

Sci-fi portfolio experience for Shoaib Sadiq Salehmohamed built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This version of the site is a full redesign focused on:

- Dark purple and deep pink visual language
- Motion-heavy, high-tech presentation
- Centralized portfolio content for easier updates
- A cleaner Next.js `app/` architecture instead of the old template-style setup

The active site now lives in `app/`. The old `src/` folder is legacy code from the earlier portfolio version and is no longer part of the current app flow.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```text
app/
  components/
    AmbientBackground.tsx
    CustomCursor.tsx
    ScrollProgress.tsx
    SectionHeading.tsx
    SiteHeader.tsx
  data/
    portfolio.ts
  sections/
    About.tsx
    Achievements.tsx
    Certifications.tsx
    Contact.tsx
    Education.tsx
    Footer.tsx
    Hero.tsx
    Projects.tsx
  globals.css
  layout.tsx
  page.tsx
```

## Main Customization Point

Most content is driven from:

- `app/data/portfolio.ts`

That file controls:

- Hero copy
- Navigation labels
- Stats
- Skill and stack groups
- Project cards
- Education and milestone timeline
- Certifications
- Contact links

If you want to change text, links, credentials, or projects, start there first.

## Design System Notes

The global theme and animation styling live in:

- `app/globals.css`

This includes:

- Purple/pink color tokens
- Ambient background graphics
- Glass panels and glow treatments
- Reactor-style hero visuals
- Timeline styling
- Form styling
- Cursor behavior

## Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run type-check
```

## Verification

Current checks used for this revamp:

- `npm run type-check`
- `npm run lint`

## Deployment

Standard Next.js deployment works for this project. Common options:

- Vercel
- Netlify
- A custom Node.js host

If you deploy to GitHub Pages, you will need a static export setup first. The current app is structured as a Next.js application, not the original static template.

## Notes

- The active site is the Next.js app under `app/`.
- `.eslintignore` excludes the old legacy `src/` version from linting.
- The current contact form posts to the existing Formspree endpoint configured in `app/sections/Contact.tsx`.
