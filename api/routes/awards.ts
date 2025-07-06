import { FastifyInstance } from 'fastify';
import { AWARDS } from '../../src/data/awards.js';

export async function awardsRoutes(fastify: FastifyInstance) {
  fastify.get('/awards', async (request, reply) => {
    return {
      data: AWARDS,
      count: AWARDS.length
    };
  });

  fastify.get('/awards/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const awardIndex = parseInt(index);
    
    if (isNaN(awardIndex) || awardIndex < 0 || awardIndex >= AWARDS.length) {
      return reply.code(404).send({ error: 'Award not found' });
    }
    
    return {
      data: AWARDS[awardIndex]
    };
  });
} 