import { z } from "zod";
import { HideableSchema } from "./hideable";

export type Skill = z.infer<typeof SkillSchema>;

export const SkillSchema = z.object({
  ...HideableSchema.shape,
  category: z.string(),
  skills: z.array(z.string()),
}); 