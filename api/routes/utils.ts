import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { ErrorSchema, zodArrayToSwaggerSchema, zodToSwaggerSchema } from '../schemas/utils';

interface ArrayRouteConfig<T> {
  path: string;
  tag: string;
  summary: string;
  description: string;
  data: T[];
  schema: z.ZodType<T>;
}

export function createDataRoute<T>(
  fastify: FastifyInstance,
  config: ArrayRouteConfig<T>
) {
  fastify.get(config.path, {
    schema: {
      tags: [config.tag],
      summary: config.summary,
      description: config.description,
      response: {
        200: zodArrayToSwaggerSchema(config.schema),
        500: zodToSwaggerSchema(ErrorSchema),
      },
    },
  }, async (request, reply) => {
    try {
      return config.data;
    } catch (error) {
      reply.code(500).send({ 
        error: 'Internal Server Error', 
        message: `Failed to retrieve ${config.tag.toLowerCase()} data` 
      });
    }
  });
}