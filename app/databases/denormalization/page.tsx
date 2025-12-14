"use client";
import TopicCard from "@/components/TopicCard";
import { denormalizationGraph } from "./denormalizationGraph";
import { denormalizationRoutes } from "./denormalizationRoutes";
import ForceGraph from "@/components/Tree";
import { GraphNode } from "@/components/Tree";

export default function page() {
  return (
    <div>
      <TopicCard
        title="Denormalization"
        subtitle="When correctness and efficiency diverge"
        body="In some situations, a fully normalized schema introduces unnecessary complexity, cost, or rigidity. Denormalization is a deliberate tradeoff that favors simpler reads or more stable models over strict normalization."
      ></TopicCard>
      <ForceGraph
        data={denormalizationGraph}
        onNodeClick={(node) => {
          // Narrow here
          const graphNode = node as GraphNode;

          const route = denormalizationRoutes[graphNode.id];
          if (route) {
            window.location.href = route;
          }
        }}
      />
    </div>
  );
}
