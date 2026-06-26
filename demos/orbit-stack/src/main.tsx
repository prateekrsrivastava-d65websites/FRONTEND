import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Command,
  Cpu,
  DatabaseZap,
  Fingerprint,
  Github,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import "./styles.css";

function MotionField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationId = 0;
    const dots = Array.from({ length: 74 }, (_, index) => ({
      angle: index * 0.42,
      radius: 90 + (index % 13) * 34,
      speed: 0.0012 + (index % 9) * 0.00026,
      size: 1.2 + (index % 5) * 0.34,
      shift: index * 19,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.offsetWidth * ratio);
      canvas.height = Math.floor(canvas.offsetHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      frame += 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width * 0.62;
      const centerY = height * 0.46;

      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.max(width, height) * 0.74,
      );
      gradient.addColorStop(0, "rgba(108, 234, 255, 0.28)");
      gradient.addColorStop(0.38, "rgba(124, 86, 255, 0.14)");
      gradient.addColorStop(1, "rgba(5, 10, 20, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.lineWidth = 1;
      dots.forEach((dot, index) => {
        const orbit = dot.radius + Math.sin((frame + dot.shift) * 0.011) * 28;
        const x = centerX + Math.cos(dot.angle + frame * dot.speed) * orbit;
        const y =
          centerY + Math.sin(dot.angle + frame * dot.speed * 1.7) * orbit * 0.58;

        if (index % 4 === 0) {
          const next = dots[(index + 9) % dots.length];
          const nextOrbit = next.radius + Math.sin((frame + next.shift) * 0.011) * 28;
          const nextX = centerX + Math.cos(next.angle + frame * next.speed) * nextOrbit;
          const nextY =
            centerY +
            Math.sin(next.angle + frame * next.speed * 1.7) * nextOrbit * 0.58;
          context.strokeStyle = "rgba(164, 211, 255, 0.12)";
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(nextX, nextY);
          context.stroke();
        }

        context.fillStyle =
          index % 7 === 0 ? "rgba(140, 255, 218, 0.92)" : "rgba(222, 238, 255, 0.78)";
        context.beginPath();
        context.arc(x, y, dot.size, 0, Math.PI * 2);
        context.fill();
      });

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="motion-field" aria-hidden="true" />;
}

const features = [
  {
    icon: BrainCircuit,
    title: "Any model",
    copy: "Local, cloud, open, private, or internal. Keep every workspace connected.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    copy: "Route sensitive work through your own stack with audit-friendly controls.",
  },
  {
    icon: DatabaseZap,
    title: "Knowledge ready",
    copy: "Bring documents, tools, search, and memory into one operating layer.",
  },
  {
    icon: Command,
    title: "Extendable",
    copy: "Ship functions, agents, automations, and workflows without rebuilding the core.",
  },
];

function App() {
  return (
    <main>
      <header className="nav">
        <a className="mark" href="#top" aria-label="Orbit Stack home">
          <span>OS</span>
        </a>
        <nav aria-label="Primary">
          <a href="#platform">Platform</a>
          <a href="#network">Network</a>
          <a href="#deploy">Deploy</a>
          <a href="#notes">Notes</a>
        </nav>
        <button className="sign-in">Sign in</button>
        <button className="menu" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>

      <section className="hero" id="top">
        <MotionField />
        <div className="stars" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker">Orbit Stack</p>
          <h1>The private AI workspace.</h1>
          <p>
            Connect every model, tool, and knowledge source in one moving layer.
            Designed for teams that want speed without surrendering control.
          </p>
          <div className="actions">
            <a className="primary" href="#deploy">
              Launch the demo <ArrowRight size={18} />
            </a>
            <a className="secondary" href="#platform">
              Explore platform <Sparkles size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="split" id="platform">
        <div>
          <p className="eyebrow">Built for teams</p>
          <h2>A single surface for the AI stack.</h2>
        </div>
        <p>
          This demo borrows the cinematic rhythm of modern AI product sites:
          full-bleed motion, short copy, high-contrast panels, and a strong sense
          that the product is alive under the page.
        </p>
      </section>

      <section className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title}>
              <Icon size={28} />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          );
        })}
      </section>

      <section className="console-section" id="network">
        <div className="orbital-card">
          <div className="orbital-ring ring-one" />
          <div className="orbital-ring ring-two" />
          <div className="node node-a">
            <Cpu size={22} />
          </div>
          <div className="node node-b">
            <Network size={22} />
          </div>
          <div className="node node-c">
            <Fingerprint size={22} />
          </div>
          <div className="node node-d">
            <Boxes size={22} />
          </div>
        </div>
        <div className="console-copy">
          <p className="eyebrow">Live network</p>
          <h2>Models, memory, and tools in motion.</h2>
          <p>
            The visual system uses motion as meaning: signals orbit, nodes pulse,
            and the interface feels like a living operating system instead of a
            static brochure.
          </p>
        </div>
      </section>

      <section className="deploy" id="deploy">
        <div>
          <p className="eyebrow">Get started</p>
          <h2>One command. One workspace.</h2>
        </div>
        <div className="terminal">
          <Terminal size={20} />
          <code>npx create-orbit-stack --private</code>
        </div>
        <a className="github" href="#top">
          <Github size={19} />
          View concept source
        </a>
      </section>

      <section className="notes" id="notes">
        <p>
          Reusable for AI tools, infrastructure products, developer platforms,
          data products, cybersecurity, and any brand that needs a cinematic,
          technical, moving first impression.
        </p>
      </section>

      <footer>
        <span>Orbit Stack</span>
        <span>Frontend motion demo</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
