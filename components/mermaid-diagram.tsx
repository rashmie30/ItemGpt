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
          primaryColor: "#f4d3d6",
          primaryTextColor: "#1a1a1a",
          primaryBorderColor: "#e1261c",
          lineColor: "#7a7a7a",
          secondaryColor: "#c2d5ed",
          tertiaryColor: "#f6f6f6",
        },
      });
      const result = await mermaid.render(`diagram-${id}`, chart);
      if (active) setSvg(result.svg);
    });
    return () => { active = false; };
  }, [chart, id]);

  return <div className="diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}
