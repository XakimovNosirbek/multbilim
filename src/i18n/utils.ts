import { getRelativeLocaleUrl, getAbsoluteLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type Loc, type UiKey } from './ui';

/** `/multbilim` — oxirida slash yo'q. `public/` fayllariga yo'l shu bilan quriladi. */
export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** `public/` ichidagi faylga yo'l: assetPath('favicon.svg') -> /multbilim/favicon.svg */
export const assetPath = (p: string) => `${base}/${p.replace(/^\/+/, '')}`;

export function getLangFromUrl(url: URL): Lang {
  const rest = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const first = rest.split('/').filter(Boolean)[0];
  return first && first in languages ? (first as Lang) : defaultLang;
}

/** Interfeys matni. Kalit noto'g'ri bo'lsa — tip xatosi. */
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

/** Ma'lumot fayllaridagi uch tilli qiymatdan kerakli tilni oladi. */
export const pick = (value: Loc, lang: Lang): string => value[lang];

/** Til prefiksi va `base` bilan ichki havola: path('ru', 'loyihalar/zij') */
export const path = (lang: Lang, p = '') => getRelativeLocaleUrl(lang, p);

/** Absolyut havola — og:url, hreflang va JSON-LD uchun. */
export const absPath = (lang: Lang, p = '') => getAbsoluteLocaleUrl(lang, p);

/** Bir sahifaning barcha tildagi variantlari — `hreflang` uchun. */
export const alternates = (p = '') =>
  (Object.keys(languages) as Lang[]).map((lang) => ({ lang, href: absPath(lang, p) }));
