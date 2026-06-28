# Perplexity Answer UI Study

A shadcn-style frontend recreation study of a Perplexity answer page.

This demo is an interface study, not a functional search product. It recreates
the observed layout and interaction patterns from a rendered Perplexity result:

- 200px left navigation rail
- sticky 54px answer/link/image tab bar
- centered 720px answer column
- right-side 334px collapsible sources panel
- compact action icon rows
- follow-up suggestions with divider lines
- bottom fixed composer and Pro banner
- mobile header and stacked answer layout

## Tech

- Vite
- React
- TypeScript
- shadcn-style local UI primitives
- class-variance-authority/clsx/tailwind-merge utilities
- lucide-react icons

## Commands

From the repo root:

```bash
npm run dev:perplexity
npm run build:perplexity
```

From this demo folder:

```bash
npm run dev
npm run build
```

## Live URL

https://prateekrsrivastava-d65websites.github.io/FRONTEND/demos/perplexity-answer/
