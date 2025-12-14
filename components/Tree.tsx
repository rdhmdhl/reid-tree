"use client";

import React, { useEffect, useRef, forwardRef } from "react";
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

const ForceGraph = forwardRef<any, ForceGraphProps>(
  (
    { data, width = 600, height = 600, zoomToFitDelayMs = 500, onNodeClick },
    ref,
  ) => {
    const graphRef = useRef<any>(null);

    useEffect(() => {
      if (!graphRef.current) return;

      const timeout = setTimeout(() => {
        graphRef.current.zoomToFit(400);
      }, zoomToFitDelayMs);

      return () => clearTimeout(timeout);
    }, [zoomToFitDelayMs]);

    return (
      <ForceGraph2D
        graphData={data}
        nodeAutoColorBy="id"
        nodeLabel="name"
        d3VelocityDecay={0.9}
        cooldownTicks={100}
        enableNodeDrag
        enableZoomInteraction
        enablePanInteraction
        width={width}
        height={height}
        linkColor={() => "black"}
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        onNodeClick={onNodeClick}
      />
    );
  },
);

ForceGraph.displayName = "ForceGraph";

export default ForceGraph;
