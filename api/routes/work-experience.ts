import { FastifyInstance } from 'fastify';
import { WORK_EXPERIENCE } from '../../src/data/workExperience.js';

export async function workExperienceRoutes(fastify: FastifyInstance) {
  fastify.get('/work-experience', async (request, reply) => {
    return {
      data: WORK_EXPERIENCE,
      count: WORK_EXPERIENCE.length
    };
  });

  fastify.get('/work-experience/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const workIndex = parseInt(index);
    
    if (isNaN(workIndex) || workIndex < 0 || workIndex >= WORK_EXPERIENCE.length) {
      return reply.code(404).send({ error: 'Work experience entry not found' });
    }
    
    return {
      data: WORK_EXPERIENCE[workIndex]
    };
  });
} 