import { z } from "zod";
import { HideableSchema } from "./hideable";

export const CourseSchema = z.object({
  ...HideableSchema.shape,
  name: z.string(),
  originalName: z.string().optional(),
  code: z.string(),
  credits: z.number().optional(),
  description: z.string().optional(),
  link: z.string().optional(),
});