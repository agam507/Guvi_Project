import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,    // Dev server port
    open: true,    // Open browser automatically
    host: true     // Listen on all addresses (for LAN access)
  },
  build: {
    outDir: 'dist',      // Output directory for build
    sourcemap: true,     // Generate source maps for debugging
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate vendor code for better caching
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  css: {
    postcss: './postcss.config.js'  // Use PostCSS config (for TailwindCSS)
  },
  resolve: {
    alias: {
      '@': '/src'   // Optional: alias '@' to '/src' for cleaner imports
    }
  },
  define: {
    'process.env': {}   // Polyfill process.env for compatibility if needed
  }
})
