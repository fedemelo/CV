import { FastifyInstance } from 'fastify';
import { educationRoutes } from './education.js';
import { workExperienceRoutes } from './work-experience.js';
import { languagesRoutes } from './languages.js';
import { extracurricularRoutes } from './extracurricular.js';
import { awardsRoutes } from './awards.js';
import { relevantCourseworkRoutes } from './relevant-coursework.js';
import { researchInterestsRoutes } from './research-interests.js';
import { teachingRoutes } from './teaching.js';

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(educationRoutes);
  await fastify.register(workExperienceRoutes);
  await fastify.register(languagesRoutes);
  await fastify.register(extracurricularRoutes);
  await fastify.register(awardsRoutes);
  await fastify.register(relevantCourseworkRoutes);
  await fastify.register(researchInterestsRoutes);
  await fastify.register(teachingRoutes);
} 