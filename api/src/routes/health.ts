import { FastifyInstance } from 'fastify';

export async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/health', {
  schema: {
    tags: ['Health'],
    summary: 'Health check endpoint',
    description: 'Returns the health status of the API',
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          timestamp: { type: 'string' },
        },
      },
    },
  },
}, async (request, reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });
}