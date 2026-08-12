import type { Loc } from '../i18n/ui';

export interface CardItem {
  /** `.card .k` — raqam yoki vosita nomi, tarjima qilinmaydi */
  k?: string;
  title: Loc;
  text: Loc;
}

export const services: CardItem[] = [
  {
    k: '01',
    title: { uz: "Serial ishlab chiqarish", ru: "Производство сериалов", en: "Series production" },
    text: { uz: "Bibliya, personaj dizayni, pilot va epizodlar — telekanal hamda platformalar uchun to'liq sikl.", ru: "Библия, дизайн персонажей, пилот и эпизоды — полный цикл для телеканалов и платформ.", en: "Series bible, character design, pilot and episodes — a full cycle for TV channels and platforms." },
  },
  {
    k: '02',
    title: { uz: "Ta'limiy animatsiya", ru: "Образовательная анимация", en: "Educational animation" },
    text: { uz: "Vazirliklar, nashriyotlar va tashkilotlar uchun bolaga tushunarli ijtimoiy-ta'limiy kontent.", ru: "Понятный ребёнку социально-образовательный контент для министерств, издательств и организаций.", en: "Social and educational content children understand, for ministries, publishers and organisations." },
  },
  {
    k: '03',
    title: { uz: "Brend roliklari", ru: "Ролики для брендов", en: "Brand films" },
    text: { uz: "15–60 soniyalik kinematografik reklama, tushuntiruvchi animatsiya va kampaniya vizuallari.", ru: "Кинематографичная реклама на 15–60 секунд, объясняющая анимация и визуалы кампаний.", en: "Cinematic 15–60 second commercials, explainer animation and campaign visuals." },
  },
  {
    k: '04',
    title: { uz: "Ovoz va musiqa", ru: "Звук и музыка", en: "Sound and music" },
    text: { uz: "Dublyaj, ovoz dizayni, original qo'shiqlar va yakuniy miks — o'z studiyamizda.", ru: "Дубляж, звуковой дизайн, оригинальные песни и финальный микс — в своей студии.", en: "Dubbing, sound design, original songs and the final mix — in our own studio." },
  },
  {
    k: '05',
    title: { uz: "Lokalizatsiya", ru: "Локализация", en: "Localisation" },
    text: { uz: "O'zbek, rus, ingliz va qoraqalpoq tillarida dublyaj, subtitr va matnli grafika.", ru: "Дубляж, субтитры и текстовая графика на узбекский, русский, английский и каракалпакский.", en: "Dubbing, subtitles and on-screen text in Uzbek, Russian, English and Karakalpak." },
  },
];
