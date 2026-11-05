import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    watch: {
      // Build output is not source; watching it can crash the dev server on Windows (EBUSY).
      ignored: ['**/dist/**'],
    },
  },
})
