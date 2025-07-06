import { FastifyInstance } from 'fastify';
import { AWARDS } from '../../src/data/awards';
import { AwardListSchema, ErrorSchema } from '../schemas/index';

export async function awardsRoutes(fastify: FastifyInstance) {
  fastify.get('/api/awards', {
    schema: {
      tags: ['Awards'],
      summary: 'Get awards and achievements',
      description: 'Returns a list of awards, honors, and achievements',
      response: {
        200: AwardListSchema,
        500: ErrorSchema,
      },
    },
  }, async (request, reply) => {
    try {
      return AWARDS;
    } catch (error) {
      reply.code(500).send({ 
        error: 'Internal Server Error', 
        message: 'Failed to retrieve awards data' 
      });
    }
  });

  fastify.get('/api/awards/:index', {
    schema: {
      tags: ['Awards'],
      summary: 'Get specific award',
      description: 'Returns a specific award by its index',
      params: {
        type: 'object',
        properties: {
          index: { type: 'string', description: 'Index of the award' }
        }
      },
      response: {
        200: { type: 'object' },
        404: ErrorSchema
      }
    }
  }, async (request, reply) => {
    const { index } = request.params as { index: string };
    const awardIndex = parseInt(index);
    
    if (isNaN(awardIndex) || awardIndex < 0 || awardIndex >= AWARDS.length) {
      return reply.code(404).send({ error: 'Award not found', message: 'Invalid index' });
    }
    
    return AWARDS[awardIndex];
  });
} 