import { z } from "zod";
import { HideableSchema } from "./hideable";

export type Extracurricular = z.infer<typeof ExtracurricularSchema>;

export const ExtracurricularSchema = z.object({
  ...HideableSchema.shape,
  description: z.string(),
  events: z.array(z.string()),
});