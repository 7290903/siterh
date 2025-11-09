import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Base path для GitHub Pages (название репозитория)
  // В production используем /siterh/, в dev - /
  const base = mode === 'production' 
    ? (process.env.VITE_BASE_PATH || '/siterh/')
    : '/';

  return {
    plugins: [react()],
    base,
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  server: {
    port: 5173,
    host: true,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Убеждаемся, что все пути обрабатываются правильно
    rollupOptions: {
      output: {
        // Сохраняем структуру файлов
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  };
});
