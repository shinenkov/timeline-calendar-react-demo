import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(() => {

  return {
    plugins: [react()],
    optimizeDeps: {
      include: [
        '@mui/material/Tooltip',
        '@emotion/styled',
        '@emotion/react',
      ],
    },
    server: {
      port: 3001,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      css: true,
      console: "integratedTerminal",
      coverage: {
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'src/test/setup.ts',
        ],
      },
    },
  }
})
