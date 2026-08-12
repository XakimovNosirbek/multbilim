import type { Loc } from '../i18n/ui';

/**
 * NAMUNAVIY ma'lumot — saytda «Namunaviy» yorlig'i bilan ko'rsatiladi.
 * Yorliqni olib tashlash faqat real jamoa berilgandan keyin (AGENTS.md §7).
 * Ismlar atoqli nom bo'lgani uchun uch tilda ham lotin yozuvida qoladi.
 */
export interface Mate {
  initials: string;
  name: string;
  role: Loc;
}

export const team: Mate[] = [
  {
    initials: 'AK',
    name: 'Aziza Karimova',
    role: { uz: "Kreativ prodyuser", ru: "Креативный продюсер", en: "Creative producer" },
  },
  {
    initials: 'SR',
    name: 'Sardor Rahimov',
    role: { uz: "Animatsiya rejissyori", ru: "Режиссёр анимации", en: "Animation director" },
  },
  {
    initials: 'MU',
    name: 'Madina Usmonova',
    role: { uz: "Personaj rassomi", ru: "Художник по персонажам", en: "Character artist" },
  },
  {
    initials: 'KN',
    name: 'Kamol Nurmatov',
    role: { uz: "Texnik direktor", ru: "Технический директор", en: "Technical director" },
  },
];
