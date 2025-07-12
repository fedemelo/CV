import { FastifyInstance } from 'fastify';
import { SKILLS } from '../../src/data/skills';
import { SkillSchema } from '../schemas/skill';
import { createDataRoute } from './utils';
import { filterForCV } from '../../src/utils/show';

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