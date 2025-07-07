import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";

export type Extracurricular = z.infer<typeof ExtracurricularSchema>;

export const ExtracurricularSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  description: z.string(),
  events: z.array(z.string()),
});