import { FastifyInstance } from 'fastify';
import { LANGUAGES } from '../../src/data/languages.js';

export async function languagesRoutes(fastify: FastifyInstance) {
  fastify.get('/languages', async (request, reply) => {
    return {
      data: LANGUAGES,
      count: LANGUAGES.length
    };
  });

  fastify.get('/languages/:index', async (request, reply) => {
    const { index } = request.params as { index: string };
    const languageIndex = parseInt(index);
    
    if (isNaN(languageIndex) || languageIndex < 0 || languageIndex >= LANGUAGES.length) {
      return reply.code(404).send({ error: 'Language entry not found' });
    }
    
    return {
      data: LANGUAGES[languageIndex]
    };
  });
} 