import { FastifyInstance } from 'fastify';
import { EXTRACURRICULARS } from '../../src/data/extracurricular';
import { ExtracurricularListSchema, ErrorSchema } from '../schemas/index';

export async function extracurricularRoutes(fastify: FastifyInstance) {
  fastify.get('/api/extracurricular', {
    schema: {
      tags: ['Extracurricular'],
      summary: 'Get extracurricular activities',
      description: 'Returns a list of extracurricular activities and involvement',
      response: {
        200: ExtracurricularListSchema,
        500: ErrorSchema,
      },
    },
  }, async (request, reply) => {
    try {
      return EXTRACURRICULARS;
    } catch (error) {
      reply.code(500).send({ 
        error: 'Internal Server Error', 
        message: 'Failed to retrieve extracurricular data' 
      });
    }
  });
} 