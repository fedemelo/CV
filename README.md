# Federico Melo Portfolio

A monorepo containing Federico Melo Barrero's personal portfolio applications:

- **CV**: [cv.fedemelo.com](https://cv.fedemelo.com)
- **Resume**: [resume.fedemelo.com](https://resume.fedemelo.com)  
- **Webpage**: [fedemelo.com](https://fedemelo.com)
- **API**: [api.fedemelo.com](https://api.fedemelo.com) [[/docs](https://api.fedemelo.com/docs)]

## Architecture

This is a pnpm workspace with independent modules that share common hardcoded data and [Zod](https://zod.dev/) schemas.

- **`/shared`** - Data definitions, constants, and schemas used across all modules
- **`/cv`** - CV frontend ([Svelte](https://svelte.dev/) + [TS](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/))
- **`/resume`** - Resume frontend ([Svelte](https://svelte.dev/) + [TS](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/))
- **`/api`** - RESTful API backend ([Fastify](https://www.fastify.io/) + [Zod](https://zod.dev/) + [Swagger](https://swagger.io/)) serving static data
- **`/webpage`** - Personal webpage ([Next.js](https://nextjs.org/) + [TS](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/))

Each module is independent from the others and can be developed, built, and deployed separately. 

## Development

Prerequisites:
- [Node.js 20](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Docker](https://docker.com/)

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
pnpm dev:webpage   # Personal webpage → http://localhost:3000

# API documentation available at http://localhost:8003/docs
```

### Building

```bash
# Build specific modules
pnpm build:cv      # Build CV frontend
pnpm build:resume  # Build Resume frontend
pnpm build:api     # Build API backend
pnpm build:webpage # Build personal webpage

# Build all modules
pnpm build:all
```

### Testing

```bash
# Run tests for all modules
pnpm test

# Run tests for specific module
pnpm --filter @fedemelo/cv test
pnpm --filter @fedemelo/resume test
pnpm --filter @fedemelo/api test
```

## Deployment

### Cloudflare Pages (Production)

Each module deploys to its own subdomain:
- `fedemelo.com` → webpage (Next.js)
- `cv.fedemelo.com` → CV (Svelte)
- `resume.fedemelo.com` → Resume (Svelte)

Cloudflare Pages doesn't support pnpm directly, so the build commands use `npm run build` instead.

Each module requires a separate Cloudflare Pages project with these settings:

**Main Webpage (fedemelo.com)**
- Build command: `cd webpage && npm run build`
- Build output directory: `webpage/out`
- Node.js version: `20.x`

**CV (cv.fedemelo.com)**
- Build command: `cd cv && npm run build`
- Build output directory: `cv/dist`
- Node.js version: `20.x`

**Resume (resume.fedemelo.com)**
- Build command: `cd resume && npm run build`
- Build output directory: `resume/dist`
- Node.js version: `20.x`

#### Deployment Process

1. **Domain Setup**: Buy `fedemelo.com` from Cloudflare
2. **Create 3 Projects**: One for each module in Cloudflare Pages
3. **Configure Builds**: Use the commands and directories above
4. **Set Custom Domains**: Add the respective subdomains to each project
5. **Deploy**: Each project deploys independently from the same repository

#### Key Benefits

- **Independent Deployments**: Each module can be updated separately
- **Static Hosting**: All modules are static sites (no server required)
- **Automatic SSL**: Cloudflare provides SSL certificates
- **Global CDN**: Fast loading worldwide

### Docker Deployment (Alternative)

For VPS or containerized deployments:

#### Local Docker Development

Run all services with Docker Compose:
```bash
# Build and run all services
pnpm docker:dev

# Or use docker-compose directly
docker-compose up --build
```

Services will be available at:
- **Webpage**: http://localhost:3000/
- **CV**: http://localhost:5173/
- **Resume**: http://localhost:5174/
- **API**: http://localhost:8003/ ([docs](http://localhost:8003/docs))

#### Building Individual Images

```bash
# Build specific services
pnpm docker:build:cv      # Build CV image
pnpm docker:build:resume  # Build Resume image  
pnpm docker:build:api     # Build API image
pnpm docker:build:webpage # Build webpage image

# Build all images
pnpm docker:build
```

#### Production Deployment

Each module has its own Dockerfile in its directory:

```bash
# Build production images
docker build -f cv/Dockerfile -t cv-frontend .
docker build -f resume/Dockerfile -t resume-frontend .
docker build -f api/Dockerfile -t api-backend .
docker build -f webpage/Dockerfile -t webpage-frontend .

# Deploy independently
docker run -d -p 80:80 webpage-frontend # → fedemelo.com
docker run -d -p 80:80 cv-frontend      # → fedemelo.com/cv
docker run -d -p 80:80 resume-frontend  # → fedemelo.com/resume  
docker run -d -p 8003:8003 api-backend  # → api.fedemelo.com
```

#### Health Monitoring

All services include health check endpoints for monitoring and load balancer integration.

## Module Independence

Each module in this monorepo is **completely self-contained**:
- Has its own `package.json` with specific dependencies
- Can be built and deployed independently  
- Can be extracted to a separate repository by moving its directory
- Shares only data from `/data` directory

## API Architecture

The API serves static data - it imports from hardcoded data files in `/data` and serves them via HTTP endpoints. While the data is static, the API provides:
- RESTful endpoints for each data category
- Automatic OpenAPI/Swagger documentation
- Health checks and monitoring endpoints
- Consistent data format across all applications

**Note**: The webpage module has been converted to use static data imports instead of API calls, making it deployable as a static site while maintaining the same hook-based interface for potential future dynamic data.