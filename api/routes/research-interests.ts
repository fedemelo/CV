import { FastifyInstance } from 'fastify';
import { RESEARCH_INTERESTS } from '../../src/data/researchInterests.js';
import { ResearchInterestSchema } from '../schemas/researchInterest';
import { createDataRoute } from './utils';
import { filterForCV } from '../../src/utils/show';

export async function researchInterestsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/research-interests',
    tag: 'Research Interests',
    summary: 'Get research interests',
    description: 'Returns a list of research interests and areas of focus',
    data: filterForCV([RESEARCH_INTERESTS]),
    schema: ResearchInterestSchema,
  });
} 