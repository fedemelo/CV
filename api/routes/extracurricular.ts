import { FastifyInstance } from 'fastify';
import { EXTRACURRICULARS } from '../../src/data/extracurricular.js';

export async function extracurricularRoutes(fastify: FastifyInstance) {
  fastify.get('/extracurricular', async (request, reply) => {
    return {
      data: EXTRACURRICULARS,
      count: EXTRACURRICULARS.length
    };
  });

  fastify.get('/extracurricular/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const extracurricularIndex = parseInt(index);
    
    if (isNaN(extracurricularIndex) || extracurricularIndex < 0 || extracurricularIndex >= EXTRACURRICULARS.length) {
      return reply.code(404).send({ error: 'Extracurricular activity not found' });
    }
    
    return {
      data: EXTRACURRICULARS[extracurricularIndex]
    };
  });
} 