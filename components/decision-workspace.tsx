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

const analyses = {
  unis: {
    label: "UNIS logistics",
    target: "https://unisco.com",
    competitor: "https://www.nfiindustries.com",
    competitorName: "NFI",
    goal: "Increase qualified California 3PL and transportation leads",
    decision: "Build a California 3PL solutions hub",
    score: 92,
    path: "/locations/california/3pl-solutions",
    headline: "California logistics, connected end to end.",
    description: "Warehousing, drayage, transloading, fulfillment and transportation through one accountable network.",
    opportunities: [
      ["California 3PL solutions hub", "Impact 5 · Intent 5 · Confidence 4", "92"],
      ["Industry proof modules", "Impact 5 · Intent 4 · Confidence 4", "86"],
      ["Solution-fit lead routing", "Impact 4 · Intent 5 · Confidence 4", "82"],
    ],
    rationale: "UNIS and NFI compete as integrated, asset-backed logistics providers. The opportunity is to make UNIS's California network, service fit and operational proof easier for enterprise buyers to evaluate.",
    evidence: [
      ["UNIS positions itself as an asset-based 3PL spanning fulfillment, warehousing and transportation", "https://www.unisco.com/about-us", "Observed", "High"],
      ["NFI competes across integrated distribution, transportation and supply-chain services", "https://www.nfiindustries.com", "Observed", "High"],
      ["UNIS exposes California locations but can connect them more directly to buyer use cases", "https://www.unisco.com/locations/california", "Observed", "High"],
      ["A California 3PL hub can turn network breadth into a qualified enterprise buying path", "Cross-site synthesis", "Inference", "Medium"],
    ],
  },
  cubework: {
    label: "Cubework flex space",
    target: "https://www.cubework.com",
    competitor: "https://readyspaces.com",
    competitorName: "ReadySpaces",
    goal: "Increase qualified flexible warehouse tour requests",
    decision: "Build a market-level flexible warehouse finder",
    score: 89,
    path: "/warehouse-space/california",
    headline: "Warehouse space that flexes with your business.",
    description: "Compare available units, dock access, parking and workspace amenities before booking a tour.",
    opportunities: [
      ["Market warehouse finder", "Impact 5 · Intent 5 · Confidence 4", "89"],
      ["Available-unit proof", "Impact 5 · Intent 4 · Confidence 4", "85"],
      ["Tour qualification flow", "Impact 4 · Intent 5 · Confidence 4", "81"],
    ],
    rationale: "Cubework and ReadySpaces both sell flexible warehouse and industrial workspace. The opportunity is to win high-intent local searches with clearer availability, unit specifications and a shorter tour-booking path.",
    evidence: [
      ["Cubework offers on-demand warehouse, office, parking and logistics space", "https://www.cubework.com", "Observed", "High"],
      ["ReadySpaces competes in flexible warehouse and co-warehousing for growing businesses", "https://readyspaces.com", "Observed", "High"],
      ["Location and facility details are central to buyer evaluation in this category", "https://www.cubework.com", "Observed", "High"],
      ["A market finder with live unit proof can reduce friction before a tour request", "Cross-site synthesis", "Inference", "Medium"],
    ],
  },
} as const;

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
  const [analysisKey, setAnalysisKey] = useState<keyof typeof analyses>("unis");
  const analysis = analyses[analysisKey];
  const [goal, setGoal] = useState<string>(analysis.goal);
  const [running, setRunning] = useState(false);

  function selectAnalysis(key: keyof typeof analyses) {
    setAnalysisKey(key);
    setGoal(analyses[key].goal);
  }

  function simulateRun() {
    setRunning(true);
    window.setTimeout(() => setRunning(false), 1600);
  }

  function downloadReport() {
    const report = `# Website Decision Intelligence — ${new URL(analysis.target).hostname} vs ${analysis.competitorName}\n\n## Executive decision\n${analysis.decision}\n\n## Objective\n${goal}\n\n## Sources\n- ${analysis.target}\n- ${analysis.competitor}\n\n## Priority\nP0 — ${analysis.decision}\n\n## Agent\nWebsite Decision Intelligence Agent (dynamic-agent-Vd8b9fHBljnv)\n`;
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
        <div className="analysis-switch" aria-label="Choose analysis"><small>ANALYSIS</small>{(Object.keys(analyses) as Array<keyof typeof analyses>).map((key) => <button className={analysisKey === key ? "selected" : ""} key={key} onClick={() => selectAnalysis(key)}>{analyses[key].label}</button>)}</div>
        <label>Target website<input value={analysis.target} readOnly /></label>
        <label>True competitor<input value={analysis.competitor} readOnly /></label>
        <label className="goal">Business objective<input value={goal} onChange={(e) => setGoal(e.target.value)} /></label>
        <button onClick={simulateRun} disabled={running}>{running ? <><span className="spinner" /> Analyzing</> : <><Search size={16} /> Run sample analysis</>}</button>
      </section>

      <section className="decision-strip">
        <div><small>PRIMARY DECISION</small><h2>{analysis.decision}</h2></div>
        <div className="score"><strong>{analysis.score}</strong><span>/100<br />opportunity</span></div>
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
          {analysis.opportunities.map(([title, detail, score], index) => <div className={`rank ${index === 0 ? "active" : ""}`} key={title}><span>0{index + 1}</span><div><b>{title}</b><small>{detail}</small></div><strong>{score}</strong></div>)}
          <div className="why"><small>WHY THIS WON</small><p>{analysis.rationale}</p></div>
        </aside>
      </section>

      <section className="evidence-section">
        <div className="section-head"><div><p className="eyebrow">Grounded evidence</p><h2>Observed first. Inferred second.</h2></div><a href={analysis.target} target="_blank">View target <ArrowUpRight size={14} /></a></div>
        <div className="evidence-table">
          <div className="table-row table-head"><span>Finding</span><span>Source</span><span>Type</span><span>Confidence</span></div>
          {analysis.evidence.map(([finding, source, type, confidence]) => <div className="table-row" key={finding}><span>{finding}</span><span>{source.startsWith("http") ? <a href={source} target="_blank">{new URL(source).hostname}</a> : source}</span><span><i className={type.toLowerCase()}>{type}</i></span><span>{confidence}</span></div>)}
        </div>
      </section>

      <section className="strategy-grid">
        <div className="page-blueprint">
          <p className="eyebrow">Implementation-ready page</p>
          <h2>{analysis.path}</h2>
          <div className="blueprint">
            <div className="hero-block"><small>HERO</small><b>{analysis.headline}</b><span>{analysis.description}</span><button>{analysisKey === "unis" ? "Request a consultation" : "Book a warehouse tour"}</button></div>
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
        <MermaidDiagram chart={`flowchart TB\n  U[Operator] --> I[ItemGPT]\n  I --> A[Website Decision Intelligence Agent]\n  A --> B[Browser Automation]\n  B --> W1[${new URL(analysis.target).hostname}]\n  B --> W2[${analysis.competitorName}]\n  W1 --> E[Evidence model]\n  W2 --> E\n  E --> S[Scorecards and strategy]\n  S --> R[Markdown artifact]`} />
      </section>

      <footer><span>ItemGPT Website Decision Intelligence</span><span>Public demonstration · Sample analysis · No private analytics</span><a href="https://github.com/rashmie30/ItemGpt" target="_blank">View source <ArrowUpRight size={13} /></a></footer>
    </main>
  );
}
