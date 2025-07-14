import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { CourseSchema } from "./course";

export type Education = z.infer<typeof EducationSchema>;

export const EducationSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  degree: z.string(),
  organization: z.string(),
  startDate: z.date().optional(),
  graduationDate: z.date().optional(),
  trueEndDate: z.date().optional(),
  honors: z.string().optional(),
  gpa: z.string().regex(/^\d+\.\d+\/\d+\.\d+$/).optional(),
  details: z.array(z.string()).optional(),
  course: CourseSchema.optional(),
  supervisor: z.string().optional(),
});
