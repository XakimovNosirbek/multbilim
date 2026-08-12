import type { Loc } from '../i18n/ui';

/**
 * Video ID'lari, sarlavhalari, ko'rish sonlari va sanalari — **haqiqiy**,
 * kanallarning ochiq RSS feed'idan (2026-08-12, har kanalning oxirgi 15 chiqishi).
 * Taxmin qilib yozilmaydi: yangilash uchun RSS'ni qaytadan o'qing (README.md).
 */
export interface Video {
  /** YouTube video ID — preview rasmi va pleer manzili shundan quriladi */
  yt: string;
  title: Loc;
  meta: Loc;
}

export interface Channel {
  name: Loc;
  blurb: Loc;
  stats: Loc[];
  videos: Video[];
}

export const channels: Channel[] = [
  {
    name: { uz: "Bek va Lola", ru: "Бек и Лола", en: "Bek va Lola" },
    blurb: { uz: "Gigiyena, sog'lom odatlar va kundalik foydali ko'nikmalarni quvnoq hikoyalarga aylantiradigan oilaviy loyiha.", ru: "Семейный проект, превращающий гигиену, здоровые привычки и полезные бытовые навыки в весёлые истории.", en: "A family project that turns hygiene, healthy habits and useful everyday skills into cheerful stories." },
    stats: [
      { uz: "37,3 mln ko'rish", ru: "37,3 млн просмотров", en: "37.3M views" },
      { uz: "15+ epizod", ru: "15+ эпизодов", en: "15+ episodes" },
      { uz: "2 yil efirda", ru: "2 года в эфире", en: "2 years on air" },
    ],
    videos: [
      {
        yt: 'g7Km27hLJ5E',
        title: { uz: "Toza qo'llar", ru: "Чистые руки", en: "Clean Hands" },
        meta: { uz: "7,0 mln ko'rish · 27.06.2026", ru: "7,0 млн просмотров · 27.06.2026", en: "7.0M views · 27.06.2026" },
      },
      {
        yt: 'sUsGRqHKeVc',
        title: { uz: "Qo'l yuvish uchun qo'llanma", ru: "Инструкция по мытью рук", en: "A Guide to Washing Hands" },
        meta: { uz: "5,7 mln ko'rish · 30.06.2026", ru: "5,7 млн просмотров · 30.06.2026", en: "5.7M views · 30.06.2026" },
      },
      {
        yt: 'eF5jIm0NPxM',
        title: { uz: "Futbol — Yorqinxo'ja Umarov ishtirokida", ru: "Футбол — с участием Ёркинходжи Умарова", en: "Football — featuring Yorqinxo'ja Umarov" },
        meta: { uz: "4,8 mln ko'rish · 13.06.2026", ru: "4,8 млн просмотров · 13.06.2026", en: "4.8M views · 13.06.2026" },
      },
      {
        yt: 'BQy49Y12YDo',
        title: { uz: "Badantarbiya 2", ru: "Зарядка 2", en: "Exercise 2" },
        meta: { uz: "473 338 ko'rish · 08.08.2026", ru: "473 338 просмотров · 08.08.2026", en: "473,338 views · 08.08.2026" },
      },
    ],
  },
  {
    name: { uz: "Yashil makon", ru: "Яшил макон", en: "Yashil makon" },
    blurb: { uz: "Tabiat, suv va energiyani asrashni bolalar tushunadigan sodda, rang-barang sarguzashtlarda o'rgatadi.", ru: "Учит бережному отношению к природе, воде и энергии в простых, красочных приключениях, понятных детям.", en: "Teaches care for nature, water and energy through simple, colourful adventures children understand." },
    stats: [
      { uz: "1,1 mln ko'rish", ru: "1,1 млн просмотров", en: "1.1M views" },
      { uz: "15+ epizod", ru: "15+ эпизодов", en: "15+ episodes" },
      { uz: "2026 boshlangan", ru: "Начат в 2026", en: "Started in 2026" },
    ],
    videos: [
      {
        yt: '-Huu9yfBlsU',
        title: { uz: "Chip chip jo'jalarim", ru: "Цып-цып, мои цыплята", en: "Chip Chip, My Chicks" },
        meta: { uz: "520 369 ko'rish · 23.05.2026", ru: "520 369 просмотров · 23.05.2026", en: "520,369 views · 23.05.2026" },
      },
      {
        yt: 'qbbO8BQeGkY',
        title: { uz: "Dam olishga chiqqanda", ru: "Когда выехали на отдых", en: "Out on a Day Trip" },
        meta: { uz: "288 472 ko'rish · 28.06.2026", ru: "288 472 просмотров · 28.06.2026", en: "288,472 views · 28.06.2026" },
      },
      {
        yt: 'B3omdC9WLhw',
        title: { uz: "Axlatni kim to'kdi", ru: "Кто выбросил мусор", en: "Who Dumped the Rubbish" },
        meta: { uz: "113 055 ko'rish · 13.06.2026", ru: "113 055 просмотров · 13.06.2026", en: "113,055 views · 13.06.2026" },
      },
      {
        yt: '1fsubCsMLnk',
        title: { uz: "Batareya chiqindisi nimaga xavfli?", ru: "Чем опасны отходы батареек?", en: "Why Is Battery Waste Dangerous?" },
        meta: { uz: "32 169 ko'rish · 22.04.2026", ru: "32 169 просмотров · 22.04.2026", en: "32,169 views · 22.04.2026" },
      },
    ],
  },
];
