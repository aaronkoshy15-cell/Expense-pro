import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Expense-pro/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('recharts')) {
              return 'charts';
            }
            if (id.includes('jspdf') || id.includes('jspdf-autotable')) {
              return 'pdf';
            }
            if (id.includes('date-fns') || id.includes('lucide-react')) {
              return 'utils';
            }
            return 'deps';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
