import { FastifyInstance } from 'fastify';
import { educationRoutes } from './education';
import { workExperienceRoutes } from './work-experience';
import { languagesRoutes } from './languages';
import { extracurricularRoutes } from './extracurricular';
import { awardsRoutes } from './awards';
import { relevantCourseworkRoutes } from './relevant-coursework';
import { researchInterestsRoutes } from './research-interests';
import { teachingRoutes } from './teaching';
import { healthRoutes } from './health';
import { personalInfoRoutes } from './personalInfo';
import { skillsRoutes } from './skills';

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(personalInfoRoutes);
  await fastify.register(educationRoutes);
  await fastify.register(workExperienceRoutes);
  await fastify.register(languagesRoutes);
  await fastify.register(extracurricularRoutes);
  await fastify.register(awardsRoutes);
  await fastify.register(relevantCourseworkRoutes);
  await fastify.register(researchInterestsRoutes);
  await fastify.register(teachingRoutes);
  await fastify.register(skillsRoutes);
  await fastify.register(healthRoutes);
} 