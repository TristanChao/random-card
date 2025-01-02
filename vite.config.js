import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    base: '/random-card/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: './index.html',
        },
    },
    plugins: [react()],
});
