import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { CourseSchema } from "./course";

export type Teaching = z.infer<typeof TeachingSchema>;

export const TeachingSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: z.string(),
  organization: z.string(),
  course: CourseSchema.optional(),
  department: z.string().optional(),
  supervisor: z.string().optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string(),
  achievements: z.array(z.string()).optional(),
  isCurrent: z.boolean().optional(),
});