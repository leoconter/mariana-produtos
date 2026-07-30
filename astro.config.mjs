// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Build 100% estático: o HTML completo precisa vir no primeiro byte da resposta.
export default defineConfig({
  // Domínio atual do deploy. Quando o DNS de li.marianavalentina.com.br
  // apontar para esta página, voltar para o domínio definitivo.
  site: 'https://mariana-produtos.vercel.app',
  output: 'static',
  build: {
    // Página única: CSS inline elimina o round-trip render-blocking (LCP)
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
