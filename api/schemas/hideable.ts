import { z } from "zod";

export const HideableSchema = z.object({
  isHidden: z.boolean().optional(),
});