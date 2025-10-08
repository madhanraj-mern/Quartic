import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
              ssr: false,
              pure: true
            }
          ]
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Simplified chunking to reduce preload warnings
          if (id.includes('node_modules')) {
            // Group all vendor libraries into fewer chunks
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('gsap') || id.includes('aos') || 
                id.includes('styled-components')) {
              return 'vendor-animations';
            }
            if (id.includes('swiper') || id.includes('splide') || id.includes('fancyapps') || 
                id.includes('choices.js') || id.includes('svg-pan-zoom') || id.includes('countup') || 
                id.includes('waypoints') || id.includes('vivus')) {
              return 'vendor-ui';
            }
            return 'vendor';
          }
          // Group pages and components together
          if (id.includes('/src/pages/') || id.includes('/src/components/')) {
            return 'app';
          }
          if (id.includes('/src/hooks/')) {
            return 'hooks';
          }
          if (id.includes('/src/assets/')) {
            return 'assets';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'gsap',
      'aos',
      'styled-components'
    ]
  },
  css: {
    devSourcemap: true
  }
})