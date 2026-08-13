import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pruneUnusedAssets from './prune-unused-assets.mjs';

// GitHub Pages sayti /multbilim/ ost-yo'lida turadi.
// `base` ni olib tashlash — barcha havola va rasm yo'llarini 404 qiladi.
export default defineConfig({
  site: 'https://xakimovnosirbek.github.io',
  base: '/multbilim',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru', 'en'],
    routing: {
      // uz prefikssiz: / , boshqalar /ru/ va /en/
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: { uz: 'uz-UZ', ru: 'ru-RU', en: 'en-US' },
      },
      // eski bir fayllik versiya va 404 indekslanmasin
      filter: (page) => !page.includes('/html/') && !page.includes('/404'),
    }),
    pruneUnusedAssets(),
  ],
});
