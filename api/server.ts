import Fastify from 'fastify';
import cors from '@fastify/cors';
import { registerRoutes } from './routes/index.js';

const fastify = Fastify({ 
  logger: true,
  ajv: {
    customOptions: {
      removeAdditional: false,
      coerceTypes: true
    }
  }
});

await fastify.register(cors, {
  origin: ['http://localhost:5173', 'https://fedemelo.github.io'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

await fastify.register(registerRoutes, { prefix: '/api' });

fastify.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3002;
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`🚀 Server ready at http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 