import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // 👇 IMPORTANTE: Define la subruta donde se aloja el proyecto en GitHub Pages.
    // Si usas un repositorio con nombre "930-Studio", la ruta base debe ser '/930-Studio/'.
    // Si prefieres una ruta relativa (funciona en cualquier subdirectorio), usa './'.
    base: '/930-Studio/',
    // base: './', // alternativa más flexible

    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },

    build: {
      // Opcional: personaliza la carpeta de salida (por defecto es 'dist')
      outDir: 'dist',
      // Opcional: genera sourcemaps solo en desarrollo
      sourcemap: process.env.NODE_ENV === 'development',
    },
  };
});