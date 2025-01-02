import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/random-card/',
  plugins: [react()],
  resolve: {
    alias: {
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    }
  }
})
