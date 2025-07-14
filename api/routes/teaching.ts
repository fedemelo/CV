import { FastifyInstance } from 'fastify';
import { TEACHING } from '../../shared/data/teaching.js';
import { TeachingSchema } from '../../shared/schemas/teaching.js';
import { createDataRoute } from './utils';
import { filterForCV } from '../../shared/utils/show.js';

export async function teachingRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/teaching',
    tag: 'Teaching',
    summary: 'Get teaching experience',
    description: 'Returns a list of teaching experience and positions',
    data: filterForCV(TEACHING),
    schema: TeachingSchema,
  });
} 