import { FastifyInstance } from 'fastify';
import { RELEVANT_COURSEWORK } from '../../../shared/data/relevantCoursework.js';
import { RelevantCourseworkSchema } from '../../../shared/schemas/relevantCoursework.js';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show.js';

export async function relevantCourseworkRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/relevant-coursework',
    tag: 'Relevant Coursework',
    summary: 'Get relevant coursework',
    description: 'Returns a list of relevant coursework and academic courses',
    data: filterForCV(RELEVANT_COURSEWORK),
    schema: RelevantCourseworkSchema,
  });
} 