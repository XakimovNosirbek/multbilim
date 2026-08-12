import type { Loc } from '../i18n/ui';

/** NAMUNAVIY vakansiyalar — saytda shunday belgilangan (AGENTS.md §7). */
export interface Opening {
  area: Loc;
  title: Loc;
  meta: Loc;
}

export const openings: Opening[] = [
  {
    area: { uz: "Animatsiya", ru: "Анимация", en: "Animation" },
    title: { uz: "3D animator", ru: "3D-аниматор", en: "3D animator" },
    meta: { uz: "Toshkent · To'liq kun · 2+ yil tajriba", ru: "Ташкент · полный день · опыт 2+ года", en: "Tashkent · full time · 2+ years experience" },
  },
  {
    area: { uz: "Dizayn", ru: "Дизайн", en: "Design" },
    title: { uz: "Fon rassomi", ru: "Художник фона", en: "Background artist" },
    meta: { uz: "Toshkent yoki masofadan · To'liq kun", ru: "Ташкент или удалённо · полный день", en: "Tashkent or remote · full time" },
  },
  {
    area: { uz: "Hikoya", ru: "История", en: "Story" },
    title: { uz: "Storibord rassomi", ru: "Художник раскадровки", en: "Storyboard artist" },
    meta: { uz: "Loyiha asosida · Kuchli portfolio", ru: "По проектам · сильное портфолио", en: "Project based · strong portfolio" },
  },
  {
    area: { uz: "Ovoz", ru: "Звук", en: "Sound" },
    title: { uz: "Ovoz dizayneri", ru: "Звуковой дизайнер", en: "Sound designer" },
    meta: { uz: "Toshkent · Yarim kun", ru: "Ташкент · неполный день", en: "Tashkent · part time" },
  },
  {
    area: { uz: "Amaliyot", ru: "Стажировка", en: "Internship" },
    title: { uz: "Yozgi amaliyot dasturi", ru: "Летняя программа стажировки", en: "Summer internship programme" },
    meta: { uz: "Talabalar uchun 3 oy · Namunaviy e'lon", ru: "3 месяца для студентов · условная вакансия", en: "3 months for students · placeholder opening" },
  },
];
