import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // On GitHub Pages the site lives at /<repo-name>/ — the workflow sets VITE_BASE.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
