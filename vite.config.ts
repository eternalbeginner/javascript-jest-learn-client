import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
