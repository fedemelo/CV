import { z } from "zod";
import { CourseSchema } from "./course";
import { HideableSchema } from "./hideable";

export type RelevantCoursework = z.infer<typeof RelevantCourseworkSchema>;

export const RelevantCourseworkSchema = z.object({
  ...HideableSchema.shape,
  area: z.string(),
  courses: z.array(CourseSchema),
});