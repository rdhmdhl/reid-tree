"use client";

import React, { useEffect, useRef, MutableRefObject, forwardRef } from "react";
import dynamic from "next/dynamic";
import { NodeObject } from "react-force-graph-2d";

// Define your Node type that extends NodeObject
interface MyNode extends NodeObject {
  id: string;
  name: string;
}

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface Node {
  id: string;
  name: string;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

const ForwardedForceGraph2D = forwardRef<any, any>((props, ref) => (
  <ForceGraph2D {...props} forwardRef={ref} />
));

ForwardedForceGraph2D.displayName = "ForwardedForceGraph2D";
const DiscreteMathTree: React.FC = () => {
  const graphRef = useRef<any>();

  useEffect(() => {
    if (graphRef.current) {
      const timeout = setTimeout(() => {
        graphRef.current.zoomToFit(400);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  const data: GraphData = {
    nodes: [
      { id: "Root", name: "Discrete Math" },
      { id: "LeftChild", name: "Set Theory" },
      { id: "RightChild", name: "Functions" },
      { id: "LeftGrandchild1", name: "Graph Theory" },
      { id: "LeftGrandchild2", name: "Combinatorics" },
      { id: "RightGrandchild1", name: "Logic" },
      { id: "RightGrandchild2", name: "Number Theory" },
    ],
    links: [
      { source: "Root", target: "LeftChild" },
      { source: "Root", target: "RightChild" },
      { source: "LeftChild", target: "LeftGrandchild1" },
      { source: "LeftChild", target: "LeftGrandchild2" },
      { source: "RightChild", target: "RightGrandchild1" },
      { source: "RightChild", target: "RightGrandchild2" },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="justify-center">
        <ForwardedForceGraph2D
          ref={graphRef}
          graphData={data}
          nodeAutoColorBy="id"
          nodeLabel="name"
          d3VelocityDecay={0.9}
          cooldownTicks={100}
          enableNodeDrag={true}
          enableZoomInteraction={true}
          enablePanInteraction={true}
          width={600}
          height={600}
          linkColor={() => "white"}
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          onNodeClick={(node: MyNode) => {
            // Handle click event, navigate to relevant link
            const nodeId = node.id;
            const links: { [key: string]: string } = {
              LeftChild: "discrete-math/set-theory",
              RightChild: "discrete-math/functions",
              LeftGrandchild1: "discrete-math/graph-theory",
              LeftGrandchild2: "discrete-math/combinatorics",
              RightGrandchild1: "discrete-math/logic",
              RightGrandchild2: "discrete-math/number-theory",
            };
            if (nodeId in links) {
              window.location.href = links[nodeId];
            }
          }}
        />
      </div>
    </div>
  );
};

export default DiscreteMathTree;
