import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pramod352.github.io/PharmacyWebsite/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
});
