# API Dockerfile
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY api/package.json ./api/
COPY shared/ ./shared/

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy API source code
COPY api/ ./api/

# Build the API
RUN pnpm --filter @fedemelo/api build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY api/package.json ./api/

# Install pnpm and only production dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --prod

# Copy built API from builder stage
COPY --from=builder /app/api/dist ./api/dist
COPY --from=builder /app/shared ./shared

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 8003

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8003/api/health', (res) => process.exit(res.statusCode === 200 ? 0 : 1))"

# Start the server
CMD ["node", "api/dist/server.js"] 