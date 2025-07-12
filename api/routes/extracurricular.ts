import { FastifyInstance } from 'fastify';
import { EXTRACURRICULARS } from '../../src/data/extracurricular.js';
import { ExtracurricularSchema } from '../schemas/extracurricular';
import { createDataRoute } from './utils';
import { filterForCV } from '../../src/utils/show';

export async function extracurricularRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/extracurricular',
    tag: 'Extracurricular',
    summary: 'Get extracurricular activities',
    description: 'Returns a list of extracurricular activities',
    data: filterForCV(EXTRACURRICULARS),
    schema: ExtracurricularSchema,
  });
} 