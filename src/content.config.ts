import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/** Uch tilli matn. Uchtasi ham majburiy — tarjima tushib qolsa build yiqiladi. */
const loc = z.object({
  uz: z.string().min(1),
  ru: z.string().min(1),
  en: z.string().min(1),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int().positive(),
      /** `.pd[data-pal="…"]` — global.css dagi rang palitrasi kaliti */
      palette: z.enum([
        'alpomish',
        'ikkidunyo',
        'zij',
        'megavoylar',
        'qalpoqcha',
        'mevacheva',
      ]),
      cover: image(),
      coverAlt: loc,
      title: loc,
      genre: loc,
      tagline: loc,
      /** kartochkadagi meta qatori */
      cardMeta: loc,
      /** kartochka ochilganda ko'rinadigan qisqa tavsif */
      cardText: loc,
      /** ichki sahifadagi hero yorliqlari */
      badges: z.array(loc),
      /**
       * Ichki sahifa bo'limlari (`.pd-sec`). Bo'lim ichidagi tartib qat'iy:
       * paragraflar -> sitata -> qahramonlar -> qadriyatlar -> galereya.
       * Eski `index.html` dagi barcha bo'limlar shu tartibga tushadi.
       */
      sections: z.array(
        z.object({
          title: loc,
          paragraphs: z.array(loc).optional(),
          quote: loc.optional(),
          characters: z
            .array(z.object({ image: image(), name: loc, alt: loc, desc: loc }))
            .optional(),
          values: z.array(z.object({ title: loc, text: loc })).optional(),
          gallery: z.array(z.object({ image: image(), alt: loc })).optional(),
        }),
      ),
    }),
});

export const collections = { projects };
