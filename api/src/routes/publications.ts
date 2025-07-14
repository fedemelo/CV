import { FastifyInstance } from 'fastify';
import { PUBLICATIONS } from '../../shared/data/publications';
import { PublicationSchema } from '../../shared/schemas/publication';
import { createDataRoute } from './utils';
import { filterForCV } from '../../shared/utils/show';

export async function publicationsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/publications',
    tag: 'Publications',
    summary: 'Get publications',
    description: 'Returns a list of academic publications',
    data: filterForCV(PUBLICATIONS),
    schema: PublicationSchema,
  });
} 