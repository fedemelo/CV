import { FastifyInstance } from 'fastify';
import { RELEVANT_COURSEWORK } from '../../src/data/relevantCoursework.js';
import { RelevantCourseworkSchema } from '../schemas/relevantCoursework';
import { createDataRoute } from './utils';

export async function relevantCourseworkRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/relevant-coursework',
    tag: 'Relevant Coursework',
    summary: 'Get relevant coursework',
    description: 'Returns a list of relevant coursework and academic courses',
    data: RELEVANT_COURSEWORK.filter(r => !r.isHidden),
    schema: RelevantCourseworkSchema,
  });
} 