import { FastifyInstance } from 'fastify';
import { EDUCATION } from '../../src/data/education.js';

export async function educationRoutes(fastify: FastifyInstance) {
  fastify.get('/education', async (request, reply) => {
    return {
      data: EDUCATION,
      count: EDUCATION.length
    };
  });

  fastify.get('/education/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const educationIndex = parseInt(index);
    
    if (isNaN(educationIndex) || educationIndex < 0 || educationIndex >= EDUCATION.length) {
      return reply.code(404).send({ error: 'Education entry not found' });
    }
    
    return {
      data: EDUCATION[educationIndex]
    };
  });
} 