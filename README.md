# Personal Portfolio

This is my personal website. Access it at [fedemelo.com](https://fedemelo.com).

## Technical Details

It's built with Next.js + React 19 + Turbopack, Tailwind CSS, shadcn/ui, and pnpm.

It consumes the API from [fedemelo-api](https://github.com/fedemelo/fedemelo-api).

It's deployed on a VPS with Docker.

## Development

Prerequisites:
- [Node.js 20](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Docker](https://docker.com/) (for deployment)
- [fedemelo-api](https://github.com/fedemelo/fedemelo-api) running on port 8003

### Local Development

Install dependencies:
```bash
pnpm install
```

The application uses `NEXT_PUBLIC_API_URL` to configure the backend API endpoint. The default is `http://localhost:8003`.

For local development:
```bash
echo "NEXT_PUBLIC_API_URL=http://localhost:8003" > .env.local
```

Run the development server:
```bash
pnpm dev
```

Visit http://localhost:3000

## Local Deployment

- API must be running separately (see [fedemelo-api](https://github.com/fedemelo/fedemelo-api))
- Docker is required.

Build the Docker image with API URL:
```bash
docker build --build-arg NEXT_PUBLIC_API_URL=http://localhost:8003 -t personal-portfolio .
```
Run the container:
```bash
docker run -p 3000:3000 personal-portfolio
```

Visit http://localhost:3000

## Production Deployment

Build the Docker image with API URL:
```bash
docker build --build-arg NEXT_PUBLIC_API_URL=https://api.fedemelo.com -t personal-portfolio .
```
Run the container:
```bash
docker run -p 3000:3000 personal-portfolio
```