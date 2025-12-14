import { normalizationRoutes } from "./normalization/normalizationRoutes";
import { denormalizationRoutes } from "./denormalization/denormalizationRoutes";

export const schemaDesignRoutes: Record<string, string> = {
  SchemaDesign: "/databases",
  Normalization: "/databases/normalization",
  Denormalization: "/databases/denormalization",

  ...normalizationRoutes,
  ...denormalizationRoutes,
};
