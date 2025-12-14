"use client";

import React, {
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  forwardRef,
} from "react";
import dynamic from "next/dynamic";

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

const SimpleGraph: React.FC = () => {
  const graphRef: MutableRefObject<any> = useRef();

  useEffect(() => {
    if (graphRef.current) {
      // Wait for the graph to stabilize and then zoom to fit
      const timeout = setTimeout(() => {
        graphRef.current.zoomToFit(400);
      }, 500); // You may adjust the delay as needed
      return () => clearTimeout(timeout);
    }
  }, []);

  const data: GraphData = {
    nodes: [
      { id: "A", name: "Alice" },
      { id: "B", name: "Bob" },
      { id: "C", name: "Charlie" },
      { id: "D", name: "David" },
      { id: "E", name: "Eve" },
    ],
    links: [
      { source: "A", target: "B" },
      { source: "A", target: "C" },
      { source: "B", target: "D" },
      { source: "C", target: "D" },
      { source: "D", target: "E" },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="justify-center">
        <ForwardedForceGraph2D
          ref={graphRef}
          graphData={data}
          nodeAutoColorBy="id"
          nodeLabel="name" // Display the name
          d3VelocityDecay={0.9} // Increase decay to slow down movement
          cooldownTicks={100} // Number of ticks to run the simulation
          enableNodeDrag={true}
          enableZoomInteraction={false} // Disable zooming and panning
          enablePanInteraction={false} // Disable zooming and panning
          width={300}
          height={300}
          linkColor={() => "white"} // Set edge color to white
        />
      </div>
    </div>
  );
};

export default SimpleGraph;
