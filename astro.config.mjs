// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Build 100% estático: o HTML completo precisa vir no primeiro byte da resposta.
export default defineConfig({
  site: 'https://li.marianavalentina.com.br',
  output: 'static',
  build: {
    // Página única: CSS inline elimina o round-trip render-blocking (LCP)
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
