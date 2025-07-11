import { FastifyInstance } from 'fastify';
import { EDUCATION } from '../../src/data/education.js';
import { EducationSchema } from '../schemas/education';
import { createDataRoute } from './utils';

export async function educationRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/education',
    tag: 'Education',
    summary: 'Get education history',
    description: 'Returns a list of education history',
    data: EDUCATION.filter(e => e.showInCV),
    schema: EducationSchema,
  });
} 