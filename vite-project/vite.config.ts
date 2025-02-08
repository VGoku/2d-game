import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This ensures Vite puts the build output in the dist folder
    rollupOptions: {
      input: 'index.html', // Correct entry point for Vite
    },
  },
});
