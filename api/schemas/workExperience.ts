import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";

export type WorkExperience = z.infer<typeof WorkExperienceSchema>;

export type WorkMode = z.infer<typeof WorkModeSchema>;
export const WorkModeSchema = z.enum(['remote', 'onsite', 'hybrid']);
export const EmploymentTypeSchema = z.enum(['full-time', 'part-time', 'contract', 'internship']);

export const WorkExperienceSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: z.string(),
  team: z.string().optional(),
  squad: z.string().optional(),
  organization: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string(),
  technologies: z.array(z.string()),
  responsibilities: z.array(z.string()),
  achievements: z.array(z.string()).optional(),
  workMode: WorkModeSchema,
  employmentType: EmploymentTypeSchema,
  isCurrent: z.boolean().optional(),
});