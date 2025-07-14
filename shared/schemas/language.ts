import { z } from "zod";
import { HideableSchema } from "./hideable";

export type Language = z.infer<typeof LanguageSchema>;

export const CertificationSchema = z.object({
  ...HideableSchema.shape,
  name: z.string(),
  id: z.string(),
  grade: z.string().regex(/^\d+\/\d+$/),
  cefrLevel: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  date: z.date(),
});

export const LanguageSchema = z.object({
  ...HideableSchema.shape,
  name: z.string(),
  proficiency: z.string(),
  certifications: z.array(CertificationSchema).optional(),
});

