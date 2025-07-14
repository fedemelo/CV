import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export const ErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
});

export const HealthCheckSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string(),
  uptime: z.number(),
});

export function zodToSwaggerSchema(schema: z.ZodType<any>) {
  return zodToJsonSchema(schema, {
    name: undefined,
    $refStrategy: "none",
  });
}

export function zodArrayToSwaggerSchema(schema: z.ZodType<any>) {
  return zodToJsonSchema(schema.array(), {
    name: undefined,
    $refStrategy: "none",
  });
}