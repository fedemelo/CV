import { FastifyInstance } from 'fastify';
import { RESEARCH_INTERESTS } from '../../src/data/researchInterests.js';
import { ResearchInterestSchema } from '../schemas/researchInterest';
import { createDataRoute } from './utils';

export async function researchInterestsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/research-interests',
    tag: 'Research Interests',
    summary: 'Get research interests',
    description: 'Returns a list of research interests and areas of focus',
    data: [RESEARCH_INTERESTS].filter(r => !r.isHidden),
    schema: ResearchInterestSchema,
  });
} 