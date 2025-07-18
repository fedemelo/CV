import { z } from "zod";

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const PersonalInfoSchema = z.object({
  name: z.string(),
  phone: z.string().optional(),
  email: z.string().email(),
  webpage: z.string().url(),
  linkedInPath: z.string(),
  gitHubPath: z.string(),
}); 