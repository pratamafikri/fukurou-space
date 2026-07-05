# Fukurou Space — agent instructions

Single-package Next.js 14 App Router project. Not a monorepo.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | dev server at `localhost:3000` |
| `npm run build` | production build (also runs typecheck) |
| `npm run start` | serve production build |
| `npm run lint` | ESLint via `next lint` |

No test framework, no CI, no formatter config. The only verification path: `npm run lint && npm run build`.

## Architecture

- Root layout (`app/layout.tsx`) with sidebar + breadcrumb + mobile nav, all feature pages rendered as children.
- **Path alias** `@/*` → project root (`tsconfig.json` paths).
- Feature registry in `app/menu.tsx` — add new routes there to appear in nav.
- Each feature is a directory under `app/` with a `page.tsx` (server component, sets metadata) and a client component (interactive form/logic).
- Interactive components use `'use client'` directive.

### Routes

| Route | Feature |
|---|---|
| `/` | Home |
| `/budget-planner` | 50/30/20 Budget Planner |
| `/bmi-calculator` | BMI Calculator |
| `/life-path-calculator` | Life Path Calculator |
| `/pomodoro-timer` | Pomodoro Timer |
| `/unit-converter` | Unit Converter |

## Conventions

- Custom Tailwind colors: `primary` (`#048A81`), `jetblack` (`#333333`).
- Reusable component classes in `app/globals.css`: `form-input`, `form-label`, `btn-primary`, `btn-secondary`, `card`, `section-title`, `subsection-title`, `content-text`.
- Page metadata exported as `metadata` object from each `page.tsx`.
- No `node_modules` path in imports; use `@/` alias instead.
