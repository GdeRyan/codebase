import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5180,
    strictPort: true,
    allowedHosts: ['crm-app.codebase'],
    proxy: {
      '/api': { target: 'http://crm.codebase:8081', changeOrigin: true }
    }
  }
})