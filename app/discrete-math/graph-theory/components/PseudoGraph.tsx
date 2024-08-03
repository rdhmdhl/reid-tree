'use client';

import React, { useEffect, useRef, MutableRefObject, forwardRef } from 'react';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

interface Node {
  id: string;
  name: string;
}

interface Link {
  source: string;
  target: string;
  curvature?: number;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

const ForwardedForceGraph2D = forwardRef<any, any>((props, ref) => (
  <ForceGraph2D {...props} forwardRef={ref} />
));

const Pseudograph: React.FC = () => {
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
        { id: 'A', name: 'Alice' },
        { id: 'B', name: 'Bob' },
        { id: 'C', name: 'Charlie' },
        { id: 'D', name: 'David' },
        { id: 'E', name: 'Eve' }
      ],
    links: [
        { source: 'A', target: 'B', curvature: 0.2 },
        { source: 'A', target: 'B', curvature: -0.2 }, // Multiple edges between Alice and Bob
        { source: 'A', target: 'A', curvature: 0.3 }, // Loop at Alice
        { source: 'B', target: 'D', curvature: 0.2 },
        { source: 'C', target: 'D', curvature: -0.2 }, // Multiple edges between Charlie and David
        { source: 'C', target: 'D' },
        { source: 'D', target: 'E' },
        { source: 'E', target: 'E', curvature: 0.3 }  // Loop at Eve
      ]
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
          width={300} // Set width to 90% of window width
          height={300} // Set fixed height
          linkColor={() => 'white'} // Set edge color to white
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          linkCurvature="curvature" // Apply curvature to differentiate multiple edges
        />
      </div>
    </div>
  );
};

export default Pseudograph;
