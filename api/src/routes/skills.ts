import { FastifyInstance } from 'fastify';
import { SKILLS } from '../../../shared/data/skills';
import { SkillSchema } from '../../../shared/schemas/skill';
import { createDataRoute } from './utils';
import { filterForCV } from '../../../shared/utils/show';

export async function skillsRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/skills',
    tag: 'Skills',
    summary: 'Get technical skills',
    description: 'Returns a list of technical skills organized by category',
    data: filterForCV(SKILLS),
    schema: SkillSchema,
  });
} 