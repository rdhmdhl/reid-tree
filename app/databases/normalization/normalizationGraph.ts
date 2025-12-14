import { GraphData } from "@/components/Tree";

export const normalizationGraph: GraphData = {
  nodes: [
    { id: "Normalization", name: "Normalization" },

    { id: "1NF", name: "First Normal Form (1NF)" },
    //{ id: "1NF-atomic", name: "Atomic values" },
    //{ id: "1NF-repeating", name: "No repeating groups" },

    { id: "2NF", name: "Second Normal Form (2NF)" },
    //{ id: "2NF-full-key", name: "Depends on full key" },

    { id: "3NF", name: "Third Normal Form (3NF)" },
    //{ id: "3NF-transitive", name: "No transitive dependencies" },

    { id: "4NF", name: "Fourth Normal Form (4NF)" },
    //{ id: "4NF-multivalued", name: "No multivalued dependencies" },

    { id: "5NF", name: "Fifth Normal Form (5NF)" },
    //{ id: "5NF-join", name: "Only join dependencies" },
  ],
  links: [
    { source: "Normalization", target: "1NF" },

    { source: "Normalization", target: "2NF" },

    { source: "Normalization", target: "3NF" },

    { source: "Normalization", target: "4NF" },

    { source: "Normalization", target: "5NF" },
  ],
};
