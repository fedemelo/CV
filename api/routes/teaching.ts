import { FastifyInstance } from 'fastify';
import { TEACHING } from '../../src/data/teaching.js';

export async function teachingRoutes(fastify: FastifyInstance) {
  fastify.get('/teaching', async (request, reply) => {
    return {
      data: TEACHING,
      count: TEACHING.length
    };
  });

  fastify.get('/teaching/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const teachingIndex = parseInt(index);
    
    if (isNaN(teachingIndex) || teachingIndex < 0 || teachingIndex >= TEACHING.length) {
      return reply.code(404).send({ error: 'Teaching entry not found' });
    }
    
    return {
      data: TEACHING[teachingIndex]
    };
  });
} 