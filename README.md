# Federico Melo Portfolio

A monorepo containing Federico Melo Barrero's professional portfolio applications:

- **CV**: Comprehensive curriculum vitae → [fedemelo.com/cv](https://fedemelo.com/cv)
- **Resume**: Concise professional summary → [fedemelo.com/resume](https://fedemelo.com/resume)  
- **API**: RESTful data service → [api.fedemelo.com](https://api.fedemelo.com) ([docs](https://api.fedemelo.com/docs))

## Architecture

This is a **monorepo** with independent modules that share common data and schemas:

- **`/shared`** - Common data, Zod schemas, and utilities used across all modules
- **`/cv`** - Detailed curriculum vitae frontend (Svelte)
- **`/resume`** - Concise resume frontend (Svelte)
- **`/api`** - RESTful API backend (Fastify)

Each module is **completely independent** and can be developed, built, and deployed separately. They share data from the `/shared` directory to maintain consistency while allowing independent evolution.

## Technical Stack

- **Frontends**: [Svelte](https://svelte.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Backend**: [Fastify](https://www.fastify.io/) + [Zod](https://zod.dev/) + [Swagger](https://swagger.io/)
- **Package Management**: [pnpm](https://pnpm.io/) workspaces
- **Deployment**: Docker containers on VPS

## Development

Prerequisites:
- [Node.js 20](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (install with `npm install -g pnpm`)
- [Docker](https://docker.com/) (for containerized deployment)

### Setup

Install dependencies for all modules:
```bash
pnpm install
```

### Local Development

Each module can be developed independently:

```bash
# Develop specific modules
pnpm dev:cv        # CV frontend → http://localhost:5173
pnpm dev:resume    # Resume frontend → http://localhost:5174  
pnpm dev:api       # API backend → http://localhost:8003

# API documentation available at http://localhost:8003/docs
```

### Building

```bash
# Build specific modules
pnpm build:cv      # Build CV frontend
pnpm build:resume  # Build Resume frontend
pnpm build:api     # Build API backend

# Build all modules
pnpm build:all
```

### Testing

```bash
# Run tests for all modules
pnpm test

# Run tests for specific module
pnpm --filter @fedemelo/cv test
```

## Docker Deployment

### Local Docker Development

Run all services with Docker Compose:
```bash
# Build and run all services
pnpm docker:dev

# Or use docker-compose directly
docker-compose up --build
```

Services will be available at:
- **CV**: http://localhost:8001/cv/
- **Resume**: http://localhost:8002/resume/
- **API**: http://localhost:8003/api/ ([docs](http://localhost:8003/docs))

### Building Individual Images

```bash
# Build specific services
pnpm docker:build:cv      # Build CV image
pnpm docker:build:resume  # Build Resume image  
pnpm docker:build:api     # Build API image

# Build all images
pnpm docker:build
```

### Production Deployment

Each module has its own Dockerfile in its directory:

```bash
# Build production images
docker build -f cv/Dockerfile -t cv-frontend .
docker build -f resume/Dockerfile -t resume-frontend .
docker build -f api/Dockerfile -t api-backend .

# Deploy independently
docker run -d -p 80:80 cv-frontend      # → fedemelo.com/cv
docker run -d -p 80:80 resume-frontend  # → fedemelo.com/resume  
docker run -d -p 8003:8003 api-backend  # → api.fedemelo.com
```

### Health Monitoring

All services include health check endpoints for monitoring and load balancer integration.

## Module Independence

Each module in this monorepo is **completely self-contained**:
- Has its own `package.json` with specific dependencies
- Can be built and deployed independently  
- Can be extracted to a separate repository by moving its directory
- Shares only data and schemas from `/shared` directory