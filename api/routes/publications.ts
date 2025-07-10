import { FastifyInstance } from 'fastify';
import { PUBLICATIONS } from '../../src/data/publications';
import { PublicationSchema } from '../schemas/publication';
import { createDataRoute } from './utils';

export async function publicationsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/publications',
    tag: 'Publications',
    summary: 'Get publications',
    description: 'Returns a list of academic publications',
    data: PUBLICATIONS.filter(p => !p.isHidden),
    schema: PublicationSchema,
  });
} 