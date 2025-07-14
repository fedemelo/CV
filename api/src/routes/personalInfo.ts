import { FastifyInstance } from 'fastify';
import { PERSONAL_INFO } from '../../../shared/data/personalInfo';
import { PersonalInfoSchema } from '../../../shared/schemas/personalInfo';
import { createDataRoute } from './utils';

export async function personalInfoRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/personal-info',
    tag: 'Personal Info',
    summary: 'Get personal information',
    description: 'Returns personal contact information and details',
    data: [PERSONAL_INFO],
    schema: PersonalInfoSchema,
  });
} 