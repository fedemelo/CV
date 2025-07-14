import { FastifyInstance } from 'fastify';
import { EXTRACURRICULARS } from '../../../shared/data/extracurricular.js';
import { ExtracurricularSchema } from '../../../shared/schemas/extracurricular.js';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show.js';

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