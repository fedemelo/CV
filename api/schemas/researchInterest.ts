import { z } from "zod";
import { HideableSchema } from "./hideable";

export type ResearchInterest = z.infer<typeof ResearchInterestSchema>;

export const ResearchInterestSchema = z.object({
  ...HideableSchema.shape,
  text: z.string(),
});