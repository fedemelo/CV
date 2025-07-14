import { z } from "zod";

export const HideableSchema = z.object({
  showInCV: z.boolean().optional().default(true),
  showInResume: z.boolean().optional().default(true),
});