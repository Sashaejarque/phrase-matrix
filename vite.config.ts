/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/utils/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'src/main.tsx',
        'src/App.tsx',
        'src/utils/*',
        'eslint.config.js',
        'lint-staged.config.js',
        'vite.config.ts',
      ],
    },
  },
});
