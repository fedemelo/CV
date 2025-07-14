import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";

export type Publication = z.infer<typeof PublicationSchema>;

export const AuthorSchema = z.object({
  name: z.string(),
  isUser: z.boolean().optional(),
});

export const PublicationSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: z.string(),
  authors: z.array(AuthorSchema),
  year: z.number(),
  description: z.string(),
  institution: z.string(),
  url: z.string().optional(),
  linkText: z.string().optional(),
}); 