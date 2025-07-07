import Fastify from 'fastify';
import cors from '@fastify/cors';

import { registerRoutes } from './routes/index.js';
import { registerSwagger } from './routes/swagger.js';

const fastify = Fastify({ 
  logger: true,
  ajv: {customOptions: {removeAdditional: false, coerceTypes: true}}
});

await registerSwagger(fastify);
await fastify.register(cors, {
  origin: ['http://localhost:8003', 'http://localhost:3001', 'https://fedemelo.github.io'],
  methods: ['GET']
});
await fastify.register(registerRoutes, { prefix: '/api' });

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 8003;
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`See documentation at http://localhost:${port}/docs`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 