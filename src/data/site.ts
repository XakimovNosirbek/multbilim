import type { Loc } from '../i18n/ui';

/**
 * Kanallar — haqiqiy. Email manzillar va ofis ma'lumoti **namunaviy**
 * (saytda ham shunday belgilangan, AGENTS.md §7).
 */
export const youtubeChannels: { name: Loc; url: string }[] = [
  {
    name: { uz: 'Bek va Lola', ru: 'Бек и Лола', en: 'Bek va Lola' },
    url: 'https://www.youtube.com/@BekvaLola',
  },
  {
    name: { uz: 'Yashil makon', ru: 'Яшил макон', en: 'Yashil makon' },
    url: 'https://www.youtube.com/@yashilmakonuz',
  },
];

/** Namunaviy manzillar — real domen berilgach almashtiriladi. */
export const emails = {
  general: 'hello@multbilim.uz',
  project: 'loyiha@multbilim.uz',
  career: 'karyera@multbilim.uz',
} as const;
