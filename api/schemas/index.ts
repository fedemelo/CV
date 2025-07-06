import { z } from "zod";

// Base schemas
export const LocationSchema = z.object({
  city: z.string(),
  state: z.string().optional(),
  country: z.string().optional(),
});

export const HideableSchema = z.object({
  isHidden: z.boolean().optional(),
});

// Course schema
export const CourseSchema = HideableSchema.extend({
  name: z.string(),
  originalName: z.string().optional(),
  code: z.string(),
  credits: z.number().optional(),
  description: z.string().optional(),
  link: z.string().optional(),
});

// Work Experience schemas
export const WorkModeSchema = z.enum(['remote', 'onsite', 'hybrid']);
export const EmploymentTypeSchema = z.enum(['full-time', 'part-time', 'contract', 'internship']);

export const WorkExperienceSchema = LocationSchema.merge(HideableSchema).extend({
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

// Education schema
export const EducationSchema = LocationSchema.merge(HideableSchema).extend({
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

// Language schemas
export const CertificationSchema = HideableSchema.extend({
  name: z.string(),
  id: z.string(),
  grade: z.string().regex(/^\d+\/\d+$/),
  cefrLevel: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  date: z.date(),
});

export const LanguageSchema = z.object({
  name: z.string(),
  proficiency: z.string(),
  certifications: z.array(CertificationSchema).optional(),
});

// Award schemas
export const AwardInstanceSchema = z.object({
  description: z.string(),
  date: z.date(),
});

export const AwardSchema = LocationSchema.extend({
  title: z.string(),
  description: z.string(),
  organization: z.string(),
  date: z.date().optional(),
  instances: z.array(AwardInstanceSchema).optional(),
});

// Research Interest schema
export const ResearchInterestSchema = HideableSchema.extend({
  text: z.string(),
});

// Teaching schema
export const TeachingSchema = LocationSchema.merge(HideableSchema).extend({
  title: z.string(),
  organization: z.string(),
  course: CourseSchema.optional(),
  department: z.string().optional(),
  supervisor: z.string().optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string(),
  responsibilities: z.array(z.string()),
  achievements: z.array(z.string()).optional(),
  isCurrent: z.boolean().optional(),

});

// Extracurricular schema
export const ExtracurricularSchema = LocationSchema.merge(HideableSchema).extend({
  description: z.string(),
  events: z.array(z.string()),
});

// Relevant Coursework schema
export const RelevantCourseworkSchema = z.object({
  area: z.string(),
  courses: z.array(CourseSchema),
});

// Response schemas (for API responses)
export const WorkExperienceListSchema = z.array(WorkExperienceSchema);
export const EducationListSchema = z.array(EducationSchema);
export const LanguageListSchema = z.array(LanguageSchema);
export const AwardListSchema = z.array(AwardSchema);
export const ResearchInterestListSchema = z.array(ResearchInterestSchema);
export const TeachingListSchema = z.array(TeachingSchema);
export const ExtracurricularListSchema = z.array(ExtracurricularSchema);
export const CourseListSchema = z.array(CourseSchema);
export const RelevantCourseworkListSchema = z.array(RelevantCourseworkSchema);

// Error schema
export const ErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
});

// Health check schema
export const HealthCheckSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string(),
  uptime: z.number(),
});

// Export types derived from schemas - these are now our single source of truth
export type WorkExperience = z.infer<typeof WorkExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type Award = z.infer<typeof AwardSchema>;
export type ResearchInterest = z.infer<typeof ResearchInterestSchema>;
export type Teaching = z.infer<typeof TeachingSchema>;
export type Extracurricular = z.infer<typeof ExtracurricularSchema>;
export type Course = z.infer<typeof CourseSchema>;
export type RelevantCoursework = z.infer<typeof RelevantCourseworkSchema>;
export type WorkMode = z.infer<typeof WorkModeSchema>;
export type EmploymentType = z.infer<typeof EmploymentTypeSchema>;
export type Location = z.infer<typeof LocationSchema>;
export type Hideable = z.infer<typeof HideableSchema>; 