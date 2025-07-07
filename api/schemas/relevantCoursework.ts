import { z } from "zod";
import { CourseSchema } from "./course";

export type RelevantCoursework = z.infer<typeof RelevantCourseworkSchema>;

export const RelevantCourseworkSchema = z.object({
  area: z.string(),
  courses: z.array(CourseSchema),
});