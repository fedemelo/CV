import { FastifyInstance } from 'fastify';
import { EDUCATION } from '../../../shared/data/education.js';
import { EducationSchema } from '../../../shared/schemas/education.js';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show.js';

export async function educationRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/education',
    tag: 'Education',
    summary: 'Get education history',
    description: 'Returns a list of education history',
    data: filterForCV(EDUCATION),
    schema: EducationSchema,
  });
} 