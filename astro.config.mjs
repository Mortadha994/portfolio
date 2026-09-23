// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mortadha994.github.io',
  base: '/',
  vite: { plugins: [tailwindcss()] },
});
