import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components/'), 
      'assets': path.resolve(__dirname, 'src/assets'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'services': path.resolve(__dirname, 'src/services'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
  },

})
