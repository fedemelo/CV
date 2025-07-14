import { FastifyInstance } from 'fastify';
import { WORK_EXPERIENCE } from '../../../shared/data/workExperience.js';
import { WorkExperienceSchema } from '../../../shared/schemas/workExperience.js';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show.js';

export async function workExperienceRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/work-experience',
    tag: 'Work Experience',
    summary: 'Get work experience history',
    description: 'Returns a list of work experience history',
    data: filterForCV(WORK_EXPERIENCE),
    schema: WorkExperienceSchema,
  });
} 