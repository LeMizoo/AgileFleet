import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  // Important pour Vercel - base URL
  base: '/',
  // Configuration pour le preview
  preview: {
    port: 4173,
    strictPort: true
  },
  // Configuration pour le dev server
  server: {
    port: 5173,
    strictPort: true,
    host: true
  }
})