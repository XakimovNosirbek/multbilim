import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { pick } from '../i18n/utils';

/** `order` bo'yicha tartiblangan loyihalar. */
export const sortedProjects = async () =>
  (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

/**
 * `/loyihalar/[slug]` uchun yo'llar. Uch til uchun uchta sahifa fayli
 * shu funksiyani chaqiradi — mantiq bir joyda turadi.
 * Oldingi/keyingi loyiha halqa bo'ylab aylanadi (eski modaldagidek).
 */
export async function projectPaths(lang: Lang) {
  const all = await sortedProjects();
  return all.map((entry, i) => {
    const prev = all[(i - 1 + all.length) % all.length]!;
    const next = all[(i + 1) % all.length]!;
    return {
      params: { slug: entry.id },
      props: {
        lang,
        entry,
        prev: { id: prev.id, title: pick(prev.data.title, lang) },
        next: { id: next.id, title: pick(next.data.title, lang) },
      },
    };
  });
}
