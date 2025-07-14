import { FastifyInstance } from 'fastify';
import { LANGUAGES } from '../../../shared/data/languages.js';
import { LanguageSchema } from '../../../shared/schemas/language.js';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show.js';

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