"use client";

import TopicCard from "@/components/TopicCard";
import ForceGraph from "@/components/Tree";
import { schemaDesignGraph } from "./schemaDesignGraph";
import { schemaDesignRoutes } from "./schemaDesignRoutes";
import { GraphNode } from "@/components/Tree";
export default function Databases() {
  return (
    <div>
      <TopicCard
        title="Databases"
        subtitle="Schema design tradeoffs"
        body="Relational schema design balances correctness, clarity, and performance. Normalization and denormalization represent two ends of that spectrum."
      />

      <ForceGraph
        data={schemaDesignGraph}
        onNodeClick={(node) => {
          const graphNode = node as GraphNode;

          const route = schemaDesignRoutes[graphNode.id];
          if (route) window.location.href = route;
        }}
      />
    </div>
  );
}
