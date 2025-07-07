import { z } from "zod";

export type Location = z.infer<typeof LocationSchema>;

export const LocationSchema = z.object({
  city: z.string(),
  state: z.string().optional(),
  country: z.string().optional(),
});