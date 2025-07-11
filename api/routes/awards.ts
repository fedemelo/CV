import { FastifyInstance } from 'fastify';
import { AWARDS } from '../../src/data/awards';
import { AwardSchema } from '../schemas/award';
import { createDataRoute } from './utils';

export async function awardsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/awards',
    tag: 'Awards',
    summary: 'Get awards and achievements',
    description: 'Returns a list of awards, honors, and achievements',
    data: AWARDS.filter(a => !a.showInCV),
    schema: AwardSchema,
  });
} 