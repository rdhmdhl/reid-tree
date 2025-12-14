"use client";
import TopicCard from "@/components/TopicCard";
import { normalizationGraph } from "./normalizationGraph";
import { normalizationRoutes } from "./normalizationRoutes";
import ForceGraph from "@/components/Tree";
import { GraphNode } from "@/components/Tree";
export default function Normalization() {
  return (
    <div>
      <TopicCard
        title="Normalization"
        subtitle="What is database normalization?"
        body="A table structured in a way that it cannot express duplicate versions of the truth. They are protected from contradictory data, anomolies and easier to understand. There is a way to determine if tables are not normalized enough. These sets of criteria are 1NF, 2NF, 3NF, 4NF, 5NF. Think of these as safety levels."
      />
      <ForceGraph
        data={normalizationGraph}
        onNodeClick={(node) => {
          // Narrow here
          const graphNode = node as GraphNode;

          const route = normalizationRoutes[graphNode.id];
          if (route) {
            window.location.href = route;
          }
        }}
      />
    </div>
  );
}
