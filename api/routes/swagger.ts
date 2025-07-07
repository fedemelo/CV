import { FastifyInstance } from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

export async function registerSwagger(fastify: FastifyInstance) {
  await fastify.register(swagger, {
    swagger: {
      info: {
        title: 'CV API',
        description: 'API for Federico Melo Barrero\'s CV data',
        version: '1.0.0',
      },
      host: 'localhost:8003',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'Personal Info', description: 'Personal contact information endpoints' },
        { name: 'Awards', description: 'Awards and achievements endpoints' },
        { name: 'Education', description: 'Education history endpoints' },
        { name: 'Work Experience', description: 'Work experience endpoints' },
        { name: 'Languages', description: 'Languages endpoints' },
        { name: 'Extracurricular', description: 'Extracurricular activities endpoints' },
        { name: 'Relevant Coursework', description: 'Relevant coursework endpoints' },
        { name: 'Research Interests', description: 'Research interests endpoints' },
        { name: 'Teaching', description: 'Teaching experience endpoints' },
        { name: 'Health', description: 'Health check endpoints' },
      ],
    },
  });
  
  await fastify.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) { next(); },
      preHandler: function (request, reply, next) { next(); },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject) => { return swaggerObject; },
    transformSpecificationClone: true,
  });
}