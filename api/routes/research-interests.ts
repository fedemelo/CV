import { FastifyInstance } from 'fastify';
import { RESEARCH_INTERESTS } from '../../src/data/researchInterests.js';

export async function researchInterestsRoutes(fastify: FastifyInstance) {
  fastify.get('/research-interests', async (request, reply) => {
    return {
      data: RESEARCH_INTERESTS
    };
  });
} 