"use client";

import { useEffect, useId, useState } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let active = true;
    import("mermaid").then(async ({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        securityLevel: "strict",
        themeVariables: {
          fontFamily: "DM Sans",
          primaryColor: "#dff7e7",
          primaryTextColor: "#10251a",
          primaryBorderColor: "#39a862",
          lineColor: "#7d8b84",
          secondaryColor: "#f0eadb",
          tertiaryColor: "#f6f7f3",
        },
      });
      const result = await mermaid.render(`diagram-${id}`, chart);
      if (active) setSvg(result.svg);
    });
    return () => { active = false; };
  }, [chart, id]);

  return <div className="diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}
