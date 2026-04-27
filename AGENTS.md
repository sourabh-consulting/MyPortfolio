# MyPortfolio Agent Guide

## Project Overview

This is Sourabh Jain's personal portfolio site. It is a static React/Vite application hosted on Netlify Free.

The site uses a dual-audience model:

- Default public mode: career-safe portfolio for recruiters, hiring managers, and technical reviewers.
- Hidden consulting mode: `/consulting` for intentionally shared consulting/freelancing conversations.

Blog and project content is intentionally still placeholder content. Keep the structure visible so those entries can be replaced later.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19 |
| Build | Vite |
| Styling | Tailwind CSS 4 plus custom CSS |
| Content | Content Collections markdown |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Deployment | Netlify static hosting |

## Key Files

- `index.html`: Vite HTML entrypoint.
- `src/main.tsx`: React mount.
- `src/App.tsx`: Lightweight client-side routing and layout.
- `src/data/profile.ts`: Real Sourabh Jain profile, experience, skills, and consulting data.
- `src/routes/index.tsx`: Career-safe home page.
- `src/routes/resume.tsx`: Experience, education, certifications, and skills.
- `src/routes/projects.tsx`: Placeholder project scaffold.
- `src/routes/blog/`: Placeholder blog scaffold and post view.
- `src/routes/consulting.tsx`: Hidden consulting mode.
- `src/routes/contact.tsx`: Netlify-backed contact form.
- `public/contact.html`: Hidden static form mirror for Netlify form detection.
- `content/`: Markdown content collections.

## Commands

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Content Rules

- Do not remove blog or project placeholder entries unless the user explicitly asks.
- Real identity/career content should stay evidence-backed and public-safe.
- Do not add a downloadable resume PDF unless the user provides or approves a sanitized public version.
- Keep employer/client case studies anonymized unless the user explicitly approves named public content.

## Deployment Notes

- Build command: `vite build`
- Publish directory: `dist`
- Netlify SPA redirect is configured in `netlify.toml`.
- Keep `.env*`, `.netlify/`, `node_modules/`, `dist/`, `.content-collections/`, and `.superpowers/` out of git.
