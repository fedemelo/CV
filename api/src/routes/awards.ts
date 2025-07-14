import { FastifyInstance } from 'fastify';
import { AWARDS } from '../../../shared/data/awards';
import { AwardSchema } from '../../../shared/schemas/award';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show';

export async function awardsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/awards',
    tag: 'Awards',
    summary: 'Get awards and achievements',
    description: 'Returns a list of awards, honors, and achievements',
    data: filterForCV(AWARDS),
    schema: AwardSchema,
  });
} 