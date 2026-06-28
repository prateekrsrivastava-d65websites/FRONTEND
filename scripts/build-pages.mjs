import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const pagesDir = path.join(root, "dist");
const demos = [
  {
    slug: "khara-collective",
    title: "Khara Collective",
    copy: "Modern boutique gifting website concept for corporate, real estate, event, and client appreciation gifting.",
  },
  {
    slug: "orbit-stack",
    title: "Orbit Stack",
    copy: "Cinematic moving AI platform landing page concept with canvas motion and animated product sections.",
  },
  {
    slug: "perplexity-answer",
    title: "Perplexity Answer",
    copy: "shadcn-style answer page UI recreation with sidebar, sources panel, follow-ups, and fixed composer.",
  },
];

await rm(pagesDir, { recursive: true, force: true });

for (const demo of demos) {
  const source = path.join(root, "demos", demo.slug, "dist");
  const target = path.join(pagesDir, "demos", demo.slug);
  await mkdir(target, { recursive: true });
  await cp(source, target, { recursive: true });
}

const demoCards = demos
  .map(
    (demo) => `<a class="demo" href="./demos/${demo.slug}/">
        <strong>${demo.title}</strong>
        <p>${demo.copy}</p>
        <span>Open demo</span>
      </a>`,
  )
  .join("\n");

await writeFile(
  path.join(pagesDir, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Frontend Demos</title>
    <style>
      :root { color: #2d2926; background: #fffaf4; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 32px; }
      main { width: min(920px, 100%); }
      p { color: #6f6258; line-height: 1.6; }
      h1 { margin: 0 0 16px; font-family: Georgia, "Times New Roman", serif; font-size: clamp(3rem, 8vw, 6.8rem); font-weight: 500; line-height: 0.98; }
      a { color: inherit; text-decoration: none; }
      .grid { display: grid; gap: 16px; margin-top: 34px; }
      .demo { display: grid; gap: 10px; margin-top: 34px; padding: 24px; border: 1px solid rgba(45, 41, 38, 0.16); background: #fffdf9; }
      .grid .demo { margin-top: 0; }
      .demo strong { font-size: 1.25rem; }
      .demo span { color: #b86f64; font-weight: 800; }
    </style>
  </head>
  <body>
    <main>
      <h1>Frontend demos</h1>
      <p>A reusable collection of isolated website rebuild concepts and speculative frontend demos.</p>
      <div class="grid">
        ${demoCards}
      </div>
    </main>
  </body>
</html>
`,
);
