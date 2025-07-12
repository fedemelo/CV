import { FastifyInstance } from 'fastify';
import { EDUCATION } from '../../src/data/education.js';
import { EducationSchema } from '../schemas/education';
import { createDataRoute } from './utils';
import { filterForCV } from '../../src/utils/show';

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