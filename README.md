# FRONTEND

A collection of isolated frontend demos and speculative website rebuild concepts.

Each project should live in its own folder under `demos/` and include its own
README with audience notes, design direction, tech stack, and reuse ideas.

## Demos

| Demo | Purpose | Local command | Live URL |
| --- | --- | --- | --- |
| [Khara Collective](./demos/khara-collective) | Boutique curated gifting website concept | `npm run dev:khara` | https://prateekrsrivastava-d65websites.github.io/FRONTEND/demos/khara-collective/ |
| [Orbit Stack](./demos/orbit-stack) | Cinematic moving AI platform landing page concept | `npm run dev:orbit` | https://prateekrsrivastava-d65websites.github.io/FRONTEND/demos/orbit-stack/ |

## Repository Shape

```text
.
├── demos/
│   ├── khara-collective/
│   │   ├── README.md
│   │   ├── package.json
│   │   └── src/
│   └── orbit-stack/
│       ├── README.md
│       ├── package.json
│       └── src/
├── scripts/
│   └── build-pages.mjs
├── .github/workflows/pages.yml
└── README.md
```

## Commands

Install dependencies:

```bash
npm install
```

Run the Khara Collective demo:

```bash
npm run dev:khara
```

Run the Orbit Stack demo:

```bash
npm run dev:orbit
```

Build all demos for GitHub Pages:

```bash
npm run build
```

## Adding a Demo

1. Create a new folder in `demos/`.
2. Keep the demo self-contained with its own `package.json`, `README.md`, and source files.
3. Add a root README row with the local command and eventual live URL.
4. Update `scripts/build-pages.mjs` to copy that demo into the Pages `dist/` folder.
