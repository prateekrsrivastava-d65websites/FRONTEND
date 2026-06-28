import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownToLine,
  Bell,
  Bot,
  Box,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Columns2,
  Copy,
  Download,
  Ellipsis,
  FileImage,
  Globe2,
  History,
  Image,
  LayoutGrid,
  Menu,
  Mic,
  PanelLeft,
  Plus,
  RefreshCw,
  Search,
  Send,
  Share2,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Upload,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import "./styles.css";

const sources = [
  {
    site: "wikipedia",
    title: "New Delhi - Wikipedia",
    copy: "",
    mark: "W",
  },
  {
    site: "vedantu",
    title: "What is the capital of India?",
    copy: "Discover India's capital city and learn fascinating facts about this historic metropolis. Find out which city serves as the seat of government.",
    mark: "V",
  },
  {
    site: "youtube",
    title: "The Capital of India | Know Your Country | National Geographic",
    copy: "From the land of Pandavas, Indraprastha to now the capital region of the largest democracy, India has been the face to many governments.",
    mark: "▶",
  },
  {
    site: "worldatlas",
    title: "What is the Capital of India? - World Atlas",
    copy: "The capital of India is New Delhi.",
    mark: "W",
  },
  {
    site: "usatoday",
    title: "What is the capital of India? States and union territories explained.",
    copy: "India is home to 28 states, eight union territories and a capital with a history of British rule and independence.",
    mark: "U",
  },
];

const followUps = [
  "What was the capital of India before New Delhi",
  "How does New Delhi differ from Old Delhi",
  "Who designed the city of New Delhi",
  "What is the significance of the Rashtrapati Bhavan",
  "When did New Delhi become the official capital city",
];

const sideItems = [
  { icon: Plus, label: "New" },
  { icon: Bot, label: "Computer" },
  { icon: Box, label: "Spaces" },
  { icon: LayoutGrid, label: "Artifacts" },
  { icon: CircleUserRound, label: "Customize" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <a className="logo" href="#top" aria-label="Home">
          <Sparkles size={24} strokeWidth={1.6} />
        </a>
        <Button variant="ghost" size="icon" aria-label="Collapse sidebar">
          <PanelLeft size={17} />
        </Button>
      </div>
      <div className="side-list">
        {sideItems.map((item) => {
          const Icon = item.icon;
          return (
            <button className="side-item" key={item.label}>
              <Icon size={17} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="side-small">
        <span>Connectors</span>
        <span>Skills</span>
        <span>Workflows</span>
        <span>Memory</span>
      </div>
      <button className="side-item history">
        <History size={17} />
        <span>History</span>
      </button>
      <div className="history-pill">
        <span>What is the capital of Indi</span>
        <Ellipsis size={14} />
      </div>
      <div className="sidebar-bottom">
        <Button variant="outline" size="sm" className="upgrade">
          <Sparkles size={14} />
          Upgrade plan
        </Button>
        <div className="profile-row">
          <span className="avatar">P</span>
          <span>Prateek Srivas...</span>
          <Bell size={16} />
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="topbar">
      <div className="tabs">
        <button className="tab active">
          <Sparkles size={18} />
          Answer
        </button>
        <button className="tab">
          <Globe2 size={17} />
          Links
        </button>
        <button className="tab">
          <FileImage size={17} />
          Images
        </button>
      </div>
      <div className="top-actions">
        <Button variant="ghost" size="icon">
          <Ellipsis size={18} />
        </Button>
        <Button variant="outline" size="icon">
          <Columns2 size={17} />
        </Button>
        <Button variant="outline" size="sm">
          <Share2 size={16} />
          Share
        </Button>
        <Button variant="dark" size="sm">
          <Download size={16} />
          Download Comet
        </Button>
      </div>
    </header>
  );
}

function SourcePane() {
  const [open, setOpen] = useState(true);
  return (
    <Card className={open ? "sources-card open" : "sources-card"}>
      <button className="sources-trigger" onClick={() => setOpen(!open)}>
        <span>Sources</span>
        <span className="source-count">{open ? "" : "10"}</span>
        {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
      </button>
      {open && (
        <div className="source-list">
          {sources.map((source) => (
            <a className="source-row" href="#top" key={source.site}>
              <span className={`source-mark ${source.site}`}>{source.mark}</span>
              <span>
                <small>{source.site}</small>
                <strong>{source.title}</strong>
                {source.copy && <p>{source.copy}</p>}
              </span>
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}

function AnswerBody() {
  return (
    <section className="answer-column" id="top">
      <div className="question-bubble">What is the capital of India</div>
      <div className="answer-row">
        <p>
          The capital of India is <strong>New Delhi.</strong>
        </p>
        <a className="citation" href="#top">
          wikipedia
        </a>
      </div>
      <div className="toolbar-row">
        <div className="left-tools">
          <Button variant="ghost" size="icon">
            <Share2 size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowDownToLine size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Copy size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <RefreshCw size={16} />
          </Button>
          <Button variant="ghost" size="pill" className="sources-pill">
            <span className="mini-source wikipedia">W</span>
            <span className="mini-source vedantu">V</span>
            <span className="mini-source youtube">▶</span>
            10 sources
          </Button>
        </div>
        <div className="right-tools">
          <Button variant="ghost" size="icon">
            <ThumbsUp size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <ThumbsDown size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Ellipsis size={17} />
          </Button>
        </div>
      </div>
      <div className="followups">
        <h2>Follow-ups</h2>
        {followUps.map((item) => (
          <button className="followup" key={item}>
            <span>↳</span>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

function Composer() {
  return (
    <div className="composer-wrap">
      <button className="pro-banner">
        <span className="pro-chip">Pro</span>
        <span>Free preview of advanced search enabled.</span>
        <span className="learn">Learn more</span>
      </button>
      <Card className="composer">
        <div className="placeholder">Ask a follow-up</div>
        <div className="composer-bottom">
          <div className="composer-left">
            <Button variant="ghost" size="icon">
              <Plus size={20} />
            </Button>
            <Button variant="outline" size="pill">
              <Search size={16} />
              Search
              <ChevronDown size={15} />
            </Button>
          </div>
          <div className="composer-right">
            <Button variant="ghost" size="pill">
              Model
              <ChevronDown size={15} />
            </Button>
            <Button variant="ghost" size="icon">
              <Mic size={16} />
            </Button>
            <Button variant="dark" size="icon" className="send">
              <Upload size={17} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function MobileHeader() {
  return (
    <header className="mobile-header">
      <Button variant="ghost" size="icon">
        <Menu size={19} />
      </Button>
      <Sparkles size={22} />
      <Button variant="ghost" size="icon">
        <Share2 size={17} />
      </Button>
    </header>
  );
}

function App() {
  return (
    <main className="app-shell">
      <Sidebar />
      <MobileHeader />
      <div className="workspace">
        <Topbar />
        <div className="content-grid">
          <AnswerBody />
          <SourcePane />
        </div>
        <Composer />
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
