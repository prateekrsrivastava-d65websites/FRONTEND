import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const pagesDir = path.join(root, "dist");
const kharaDist = path.join(root, "demos", "khara-collective", "dist");
const kharaTarget = path.join(pagesDir, "demos", "khara-collective");

await rm(pagesDir, { recursive: true, force: true });
await mkdir(kharaTarget, { recursive: true });
await cp(kharaDist, kharaTarget, { recursive: true });

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
      .demo { display: grid; gap: 10px; margin-top: 34px; padding: 24px; border: 1px solid rgba(45, 41, 38, 0.16); background: #fffdf9; }
      .demo strong { font-size: 1.25rem; }
      .demo span { color: #b86f64; font-weight: 800; }
    </style>
  </head>
  <body>
    <main>
      <h1>Frontend demos</h1>
      <p>A reusable collection of isolated website rebuild concepts and speculative frontend demos.</p>
      <a class="demo" href="./demos/khara-collective/">
        <strong>Khara Collective</strong>
        <p>Modern boutique gifting website concept for corporate, real estate, event, and client appreciation gifting.</p>
        <span>Open demo</span>
      </a>
    </main>
  </body>
</html>
`,
);
