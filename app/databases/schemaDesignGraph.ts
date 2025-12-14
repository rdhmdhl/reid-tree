import { GraphData } from "@/components/Tree";
import { normalizationGraph } from "./normalization/normalizationGraph";
import { denormalizationGraph } from "./denormalization/denormalizationGraph";

export const schemaDesignGraph: GraphData = {
  nodes: [
    { id: "SchemaDesign", name: "Schema Design" },
    { id: "Normalization", name: "Normalization" },
    { id: "Denormalization", name: "Denormalization" },

    // pull in existing nodes
    ...normalizationGraph.nodes.filter((n) => n.id !== "Normalization"),
    ...denormalizationGraph.nodes.filter((n) => n.id !== "Denormalization"),
  ],
  links: [
    { source: "SchemaDesign", target: "Normalization" },
    { source: "SchemaDesign", target: "Denormalization" },

    // pull in existing links
    ...normalizationGraph.links,
    ...denormalizationGraph.links,
  ],
};
