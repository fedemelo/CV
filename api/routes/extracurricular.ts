import { FastifyInstance } from 'fastify';
import { EXTRACURRICULARS } from '../../src/data/extracurricular.js';
import { ExtracurricularSchema } from '../schemas/extracurricular';
import { createDataRoute } from './utils';

export async function extracurricularRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/extracurricular',
    tag: 'Extracurricular',
    summary: 'Get extracurricular activities',
    description: 'Returns a list of extracurricular activities',
    data: EXTRACURRICULARS.filter(e => e.showInCV),
    schema: ExtracurricularSchema,
  });
} 