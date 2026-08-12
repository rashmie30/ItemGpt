"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Download, ExternalLink, Radar, Search, Sparkles } from "lucide-react";
import { MermaidDiagram } from "./mermaid-diagram";

const workflow = `flowchart LR
  A[Business objective] --> B[Frame scope]
  B --> C[Public web research]
  C --> D[Evidence capture]
  D --> E[Competitor comparison]
  E --> F[Opportunity scoring]
  F --> G[Page strategy]
  G --> H[Implementation backlog]
  H --> I[Decision packet]`;

const architecture = `flowchart TB
  U[Operator] --> I[ItemGPT]
  I --> A[Website Decision Intelligence Agent]
  A --> B[Browser Automation]
  B --> W1[UNIS public website]
  B --> W2[Cubework public website]
  W1 --> E[Evidence model]
  W2 --> E
  E --> S[Scorecards and strategy]
  S --> R[Markdown artifact]`;

const evidence = [
  ["UNIS presents integrated logistics, warehousing and transportation breadth", "unisco.com/our-services", "Observed", "High"],
  ["Cubework uses facility-led positioning with direct space discovery", "cubework.com", "Observed", "High"],
  ["UNIS has a California location surface but limited buyer qualification", "unisco.com/locations/california", "Observed", "High"],
  ["A California solution hub can convert broad service strength into local intent", "Cross-site synthesis", "Inference", "Medium"],
];

const stages = [
  ["Frame", "Complete", "Objective and target market"],
  ["Discover", "Complete", "Public pages, sitemap, robots"],
  ["Compare", "Complete", "Positioning and conversion evidence"],
  ["Score", "Complete", "Five-factor opportunity model"],
  ["Design", "Complete", "Page strategy and draft copy"],
  ["Capture", "Limited", "Browser MCP returned no image artifact"],
];

const roadmap = [
  ["30 days", "Validate", "Confirm facility claims, routing fields and source ownership."],
  ["60 days", "Build", "Create the California logistics hub and facility modules."],
  ["90 days", "Measure", "Track qualified submissions, engagement and assisted pipeline."],
];

export function DecisionWorkspace() {
  const [target, setTarget] = useState("https://unisco.com");
  const [competitor, setCompetitor] = useState("https://cubework.com");
  const [goal, setGoal] = useState("Increase qualified California warehouse and logistics leads");
  const [running, setRunning] = useState(false);

  function simulateRun() {
    setRunning(true);
    window.setTimeout(() => setRunning(false), 1600);
  }

  function downloadReport() {
    const report = `# Website Decision Intelligence — UNIS vs Cubework\n\n## Executive decision\nBuild a California logistics and warehousing hub that combines local facility proof with UNIS's integrated service breadth.\n\n## Objective\n${goal}\n\n## Sources\n- ${target}\n- ${competitor}\n\n## Priority\nP0 — California logistics and warehousing hub\n\n## Agent\nWebsite Decision Intelligence Agent (dynamic-agent-Vd8b9fHBljnv)\n`;
    const blob = new Blob([report], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "itemgpt-decision-packet.md";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark"><Radar size={18} /></span> ItemGPT <b>/ Decision Intelligence</b></a>
        <div className="header-meta"><span className="live-dot" /> Public demo <a href="https://atlas.item.com" target="_blank">Open ItemGPT <ExternalLink size={13} /></a></div>
      </header>

      <section className="intro" id="top">
        <div>
          <p className="eyebrow">Evidence-backed growth operations</p>
          <h1>From public signals<br />to a confident decision.</h1>
          <p className="lede">A live demonstration of an ItemGPT agent that researches, compares, scores and specifies the next high-impact website move.</p>
        </div>
        <div className="agent-stamp">
          <Sparkles size={18} />
          <div><small>ACTIVE AGENT</small><strong>Website Decision Intelligence</strong><code>dynamic-agent-Vd8b9fHBljnv</code></div>
        </div>
      </section>

      <section className="query-panel">
        <label>Target website<input value={target} onChange={(e) => setTarget(e.target.value)} /></label>
        <label>Competitor<input value={competitor} onChange={(e) => setCompetitor(e.target.value)} /></label>
        <label className="goal">Business objective<input value={goal} onChange={(e) => setGoal(e.target.value)} /></label>
        <button onClick={simulateRun} disabled={running}>{running ? <><span className="spinner" /> Analyzing</> : <><Search size={16} /> Run sample analysis</>}</button>
      </section>

      <section className="decision-strip">
        <div><small>PRIMARY DECISION</small><h2>Build a California logistics & warehousing hub</h2></div>
        <div className="score"><strong>92</strong><span>/100<br />opportunity</span></div>
        <div className="confidence"><span>Evidence confidence</span><b>High</b></div>
        <button className="secondary" onClick={downloadReport}><Download size={15} /> Download report</button>
      </section>

      <section className="workspace-grid">
        <article className="workflow-panel">
          <div className="section-head"><div><p className="eyebrow">Autonomous workflow</p><h2>Nine stages. One decision.</h2></div><span>8 complete · 1 limited</span></div>
          <MermaidDiagram chart={workflow} />
          <div className="stage-list">
            {stages.map(([name, status, detail]) => <div key={name}><span className={status === "Limited" ? "limited" : "complete"}>{status === "Limited" ? "!" : <Check size={12} />}</span><b>{name}</b><p>{detail}</p></div>)}
          </div>
        </article>

        <aside className="ranking">
          <p className="eyebrow">Ranked opportunities</p>
          <div className="rank active"><span>01</span><div><b>California solution hub</b><small>Impact 5 · Intent 5 · Confidence 4</small></div><strong>92</strong></div>
          <div className="rank"><span>02</span><div><b>Facility proof modules</b><small>Impact 5 · Intent 4 · Confidence 4</small></div><strong>86</strong></div>
          <div className="rank"><span>03</span><div><b>Lead-routing form</b><small>Impact 4 · Intent 5 · Confidence 4</small></div><strong>82</strong></div>
          <div className="why"><small>WHY THIS WON</small><p>UNIS owns broader integrated capabilities. Cubework makes local space discovery more explicit. The opportunity joins both advantages.</p></div>
        </aside>
      </section>

      <section className="evidence-section">
        <div className="section-head"><div><p className="eyebrow">Grounded evidence</p><h2>Observed first. Inferred second.</h2></div><a href="https://unisco.com" target="_blank">View target <ArrowUpRight size={14} /></a></div>
        <div className="evidence-table">
          <div className="table-row table-head"><span>Finding</span><span>Source</span><span>Type</span><span>Confidence</span></div>
          {evidence.map(([finding, source, type, confidence]) => <div className="table-row" key={finding}><span>{finding}</span><span><a href={source.startsWith("http") ? source : `https://${source}`} target="_blank">{source}</a></span><span><i className={type.toLowerCase()}>{type}</i></span><span>{confidence}</span></div>)}
        </div>
      </section>

      <section className="strategy-grid">
        <div className="page-blueprint">
          <p className="eyebrow">Implementation-ready page</p>
          <h2>/locations/california/logistics</h2>
          <div className="blueprint">
            <div className="hero-block"><small>HERO</small><b>California logistics, connected end to end.</b><span>Warehousing, drayage, transloading, fulfillment and transportation through one accountable network.</span><button>Request a consultation</button></div>
            <div className="module-row"><span>Market selector</span><span>Service fit</span><span>Facility proof</span></div>
            <div className="content-lines"><i /><i /><i /></div>
          </div>
        </div>
        <div className="roadmap">
          <p className="eyebrow">30 / 60 / 90</p><h2>Path to measurable impact</h2>
          {roadmap.map(([time, title, copy]) => <div key={time}><time>{time}</time><span><b>{title}</b><p>{copy}</p></span></div>)}
        </div>
      </section>

      <section className="architecture">
        <div><p className="eyebrow">System architecture</p><h2>ItemGPT is the intelligence layer.</h2><p>The custom agent directs public browser research, applies a consistent evidence model, and packages the decision as a portable artifact.</p></div>
        <MermaidDiagram chart={architecture} />
      </section>

      <footer><span>ItemGPT Website Decision Intelligence</span><span>Public demonstration · Sample analysis · No private analytics</span><a href="https://github.com/rashmie30/ItemGpt" target="_blank">View source <ArrowUpRight size={13} /></a></footer>
    </main>
  );
}
