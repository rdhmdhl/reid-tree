"use client";

import React, { useEffect, useRef, MutableRefObject, forwardRef } from "react";
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
const BinaryTree: React.FC = () => {
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
      { id: "A", name: "Root" },
      { id: "B", name: "Left Child" },
      { id: "C", name: "Right Child" },
      { id: "D", name: "Left Grandchild 1" },
      { id: "E", name: "Left Grandchild 2" },
      { id: "F", name: "Right Grandchild 1" },
      { id: "G", name: "Right Grandchild 2" },
    ],
    links: [
      { source: "A", target: "B" },
      { source: "A", target: "C" },
      { source: "B", target: "D" },
      { source: "B", target: "E" },
      { source: "C", target: "F" },
      { source: "C", target: "G" },
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
          enableNodeDrag={true} // Enable node dragging
          enableZoomInteraction={false} // Disable zooming
          enablePanInteraction={false} // Disable panning
          width={300} // Set width to 300
          height={300} // Set height to 300
          linkColor={() => "white"} // Set edge color to white
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
        />
      </div>
    </div>
  );
};

export default BinaryTree;
