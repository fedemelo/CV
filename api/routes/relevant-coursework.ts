import { FastifyInstance } from 'fastify';
import { RELEVANT_COURSEWORK } from '../../src/data/relevantCoursework.js';

export async function relevantCourseworkRoutes(fastify: FastifyInstance) {
  fastify.get('/relevant-coursework', async (request, reply) => {
    return {
      data: RELEVANT_COURSEWORK,
      count: RELEVANT_COURSEWORK.length
    };
  });

  fastify.get('/relevant-coursework/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const courseworkIndex = parseInt(index);
    
    if (isNaN(courseworkIndex) || courseworkIndex < 0 || courseworkIndex >= RELEVANT_COURSEWORK.length) {
      return reply.code(404).send({ error: 'Relevant coursework area not found' });
    }
    
    return {
      data: RELEVANT_COURSEWORK[courseworkIndex]
    };
  });
} 