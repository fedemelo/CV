import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Test files location
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    // Don't load the main vite config (which has Svelte plugin)
    globals: true,
    environment: 'node'
  },
  // Simple resolve for TypeScript
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 