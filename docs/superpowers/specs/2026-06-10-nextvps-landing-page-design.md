# NextVPS Landing Page — Design Spec

## Overview
Marketing landing page untuk NextVPS, SaaS Panel VPS self-hosted untuk developer individual.
Stack: Next.js 15 (App Router) + shadcn/ui + Tailwind CSS v4 + TypeScript.

## Target User
Developer individual yang ingin deploy dan manage aplikasi di VPS sendiri.

## Tech Stack
- Framework: Next.js 15 (App Router), SSG
- Styling: Tailwind CSS v4
- Components: shadcn/ui
- Theme: next-themes (dark/light)
- Font: Inter (Google Fonts)
- Language: TypeScript

## Project Structure
```
app/
├── layout.tsx
├── page.tsx
├── globals.css
components/
├── ui/ (shadcn)
├── landing/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── features.tsx
│   ├── pricing.tsx
│   └── footer.tsx
└── shared/
    └── theme-toggle.tsx
lib/
└── utils.ts
```

## Sections
1. **Navbar**: Sticky, logo, links (Features, Pricing), CTA "Get Started" + "GitHub", hamburger mobile
2. **Hero**: Badge "Open Source · Self-Hosted", headline + subtext, 2 CTA buttons, subtle grid bg
3. **Features**: 2x3 grid, 6 features (Server Mgmt, Docker Deploy, DB Mgmt, SSL & Domains, Reverse Proxy, Monitoring), shadcn Card
4. **Pricing**: 3 tiers (Free/Pro/Enterprise), shadcn Card + Badge, Pro highlighted
5. **Footer**: Logo + tagline, link columns, social icons, copyright

## Design Tokens
- Primary: Blue/indigo (shadcn default)
- Background: White / Neutral-950
- CTA: Primary-500
- Border radius: rounded-md
- Generous whitespace, section py-20+

## Scope
Landing page only. No auth, no dashboard, no API routes.
