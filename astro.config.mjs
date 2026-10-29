// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// El dominio de producción aún no está definido. Cuando exista, se configura con
// PUBLIC_SITE_URL (ver README) y se activan canonical, Open Graph absolutos y sitemap.
const site = process.env.PUBLIC_SITE_URL || undefined;

export default defineConfig({
  site,
  integrations: [react(), ...(site ? [sitemap()] : [])],
  fonts: [
    {
      // Titulares gigantes en mayúsculas.
      name: 'Anton',
      cssVariable: '--font-display',
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
    },
    {
      // Textos y enunciados.
      name: 'Figtree',
      cssVariable: '--font-body',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Etiquetas pequeñas y detalles de interfaz.
      name: 'DM Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.fontsource(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'Consolas', 'monospace'],
    },
  ],
});
