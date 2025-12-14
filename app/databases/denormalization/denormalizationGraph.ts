import { GraphData } from "@/components/Tree";

export const denormalizationGraph: GraphData = {
  nodes: [
    { id: "Denormalization", name: "Denormalization" },
    { id: "Why", name: "Why denormalize?" },
    { id: "Performance", name: "Denormalizing for performance" },
  ],
  links: [
    { source: "Denormalization", target: "Why" },
    { source: "Denormalization", target: "Performance" },
  ],
};
