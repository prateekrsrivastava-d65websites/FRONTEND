import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  Gift,
  HeartHandshake,
  MapPin,
  Menu,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const collections = [
  {
    title: "Client Appreciation",
    copy: "Polished boxes for thank-yous, renewals, referrals, and milestone moments.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Real Estate Closings",
    copy: "Warm, local, move-in-ready gifts that feel considered without feeling generic.",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Team & Event Gifting",
    copy: "Batch-friendly, branded, and packed with pieces people will actually use.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceNotes = [
  "Corporate gifting programs",
  "Local Southern California goods",
  "Custom ribbon, notes, and packaging",
  "Shipping, delivery, and event coordination",
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Khara Collective home">
          <span>Khara</span>
          <small>Collective</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#collections">Collections</a>
          <a href="#services">Services</a>
          <a href="#story">Story</a>
          <a href="#inquire">Inquire</a>
        </nav>
        <button className="icon-button" aria-label="Open menu">
          <Menu size={21} />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Curated gifts for clients, teams, and occasions</p>
          <h1>Gifting that feels personal, even when your list is long.</h1>
          <p>
            A boutique gifting studio for thoughtful corporate gifts, real estate
            closings, event favors, and local finds selected with care.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#inquire">
              Start a gift project <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#collections">
              Browse collections
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Highlights">
        <div>
          <Sparkles size={22} />
          <span>Women-owned and locally minded</span>
        </div>
        <div>
          <PackageCheck size={22} />
          <span>Custom sourcing, packing, and delivery</span>
        </div>
        <div>
          <HeartHandshake size={22} />
          <span>Built for relationships, not throwaway swag</span>
        </div>
      </section>

      <section className="section collections" id="collections">
        <div className="section-heading">
          <p className="eyebrow">Gift collections</p>
          <h2>Occasion-ready, never off-the-shelf.</h2>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-section" id="services">
        <div className="service-photo" aria-hidden="true" />
        <div className="service-copy">
          <p className="eyebrow">Full-service gifting</p>
          <h2>From idea to doorstep, handled with taste.</h2>
          <p>
            Khara Collective can feel like a quiet extension of a busy founder,
            realtor, people team, or event planner: listening first, sourcing
            beautifully, then making the logistics disappear.
          </p>
          <ul>
            {serviceNotes.map((note) => (
              <li key={note}>
                <Check size={18} />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process">
        <article>
          <Gift size={28} />
          <h3>Tell us the moment</h3>
          <p>Recipients, budget, occasion, tone, timing, and any brand details.</p>
        </article>
        <article>
          <MapPin size={28} />
          <h3>We source with intention</h3>
          <p>Local makers, elevated staples, and useful pieces that fit the brief.</p>
        </article>
        <article>
          <CalendarCheck size={28} />
          <h3>Everything arrives ready</h3>
          <p>Wrapped, packed, shipped, delivered, or staged for the event.</p>
        </article>
      </section>

      <section className="story" id="story">
        <div>
          <p className="eyebrow">The studio</p>
          <h2>A community-focused gift partner.</h2>
        </div>
        <p>
          This concept keeps the owner at the center: discerning, local,
          relationship-driven, and practical. The site should make visitors feel
          they have found someone who can understand the assignment and make the
          recipient feel genuinely seen.
        </p>
      </section>

      <section className="inquiry" id="inquire">
        <div className="inquiry-copy">
          <Building2 size={34} />
          <h2>Have a gift list, client event, or closing coming up?</h2>
          <p>
            Share the occasion and the rough count. Khara can shape the box,
            source the details, and keep the whole thing moving.
          </p>
        </div>
        <form>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Project type
            <select defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Corporate gifts</option>
              <option>Real estate closing gifts</option>
              <option>Event gifting</option>
              <option>Personal curated box</option>
            </select>
          </label>
          <label>
            Notes
            <textarea placeholder="Recipient count, timing, budget, and occasion" />
          </label>
          <button className="button primary" type="button">
            Request a quote <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <footer>
        <span>Khara Collective</span>
        <span>Curated gifting for thoughtful relationships.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
