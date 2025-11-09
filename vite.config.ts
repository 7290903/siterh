import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Определяем base path в зависимости от платформы деплоя
  // Vercel использует корневой путь, GitHub Pages - /siterh/
  let base = '/';
  
  if (mode === 'production') {
    // Если указан явный base path через переменную окружения
    if (process.env.VITE_BASE_PATH) {
      base = process.env.VITE_BASE_PATH;
    }
    // Если деплой на Vercel - используем корневой путь
    else if (process.env.VERCEL) {
      base = '/';
    }
    // По умолчанию для GitHub Pages
    else {
      base = '/siterh/';
    }
  }

  // Отладочный вывод (будет виден при сборке)
  if (mode === 'production') {
    console.log('Building with base path:', base);
    console.log('Platform:', process.env.VERCEL ? 'Vercel' : 'GitHub Pages');
  }

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
    // Убеждаемся, что base path применяется ко всем ресурсам
    assetsInlineLimit: 0,
  },
  };
});
