import { z } from "zod";

export const ErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
});

export const HealthCheckSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string(),
  uptime: z.number(),
});