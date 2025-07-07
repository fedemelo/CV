import { z } from "zod";
import { LocationSchema } from "./location";

export type Award = z.infer<typeof AwardSchema>;

export const AwardInstanceSchema = z.object({
  description: z.string(),
  date: z.date(),
});

export const AwardSchema = z.object({
  ...LocationSchema.shape,
  title: z.string(),
  description: z.string(),
  organization: z.string(),
  date: z.date().optional(),
  instances: z.array(AwardInstanceSchema).optional(),
});