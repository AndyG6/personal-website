import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.DISABLE_PROXY ? {} : {
      '/spotify': {
        target: 'https://9dd47568.v2-personal-website.pages.dev',
        changeOrigin: true,
      },
    },
  },
})
