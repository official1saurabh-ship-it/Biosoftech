import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'vendor'
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/lucide-react') || id.includes('node_modules/react-icons')) {
            return 'ui'
          }
          if (id.includes('node_modules/swiper')) {
            return 'swiper'
          }
        },
      },
    },
    minify: true,
    cssMinify: true,
    sourcemap: false,
  },
  css: {
    devSourcemap: false,
  },
})
