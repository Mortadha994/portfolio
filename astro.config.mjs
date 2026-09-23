// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio.pages.dev', // change if you attach a custom domain
  vite: { plugins: [tailwindcss()] },
});
