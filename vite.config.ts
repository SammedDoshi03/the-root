import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
            'vendor-react': ['react', 'react-dom'],
            'vendor-framer': ['framer-motion']
          }
        }
      }
    }
  };
});
