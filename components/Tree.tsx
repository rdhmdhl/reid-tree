"use client";

import React, { useEffect, useState, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";
import { NodeObject } from "react-force-graph-2d";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

/* ---------------- Types ---------------- */

export interface GraphNode extends NodeObject {
  id: string;
  name: string;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

interface ForceGraphProps {
  data: GraphData;
  width?: number;
  height?: number;
  zoomToFitDelayMs?: number;
  onNodeClick?: (node: NodeObject, event: MouseEvent) => void;
}

/* ---------------- Component ---------------- */

const ForceGraph = forwardRef<any, ForceGraphProps>(({ data, onNodeClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 600, h: 600 });

  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setSize({ w: width, h: height });
  }, []);

  useEffect(() => {
    if (!graphRef.current) return;

    const run = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      graphRef.current?.zoomToFit(400);
    };

    run();
  }, []);
  return (
    <div ref={containerRef} className="w-full h-[300px]">
      <section className="flex flex-col items-center min-h-[900px]">
        <ForceGraph2D
          graphData={data}
          nodeAutoColorBy="id"
          nodeLabel="name"
          d3VelocityDecay={0.9}
          cooldownTicks={100}
          enableNodeDrag={true}
          enablePanInteraction={false}
          enableZoomInteraction={false}
          width={size.w}
          height={size.h}
          linkColor={() => "black"}
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          onNodeClick={onNodeClick}
        />
      </section>
    </div>
  );
});

ForceGraph.displayName = "ForceGraph";

export default ForceGraph;
