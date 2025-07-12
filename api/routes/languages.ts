import { FastifyInstance } from 'fastify';
import { LANGUAGES } from '../../src/data/languages.js';
import { LanguageSchema } from '../schemas/language';
import { createDataRoute } from './utils';
import { filterForCV } from '../../src/utils/show';

export async function languagesRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/languages',
    tag: 'Languages',
    summary: 'Get languages',
    description: 'Returns a list of languages with proficiency levels',
    data: filterForCV(LANGUAGES),
    schema: LanguageSchema,
  });
} 