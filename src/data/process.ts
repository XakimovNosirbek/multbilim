import type { Loc } from '../i18n/ui';

export interface Stage {
  /** `Bosqich 01` yorlig'idagi raqam */
  n: string;
  title: Loc;
  text: Loc;
}

export const process: Stage[] = [
  {
    n: '01',
    title: { uz: "Ssenariy", ru: "Сценарий", en: "Script" },
    text: { uz: "G'oyani dramatik hikoya va aniq ishlab chiqarish rejasiga aylantiramiz.", ru: "Превращаем идею в драматургию и точный производственный план.", en: "We turn the idea into a dramatic story and a precise production plan." },
  },
  {
    n: '02',
    title: { uz: "Storibord", ru: "Раскадровка", en: "Storyboard" },
    text: { uz: "Har kadr, kamera va personaj harakatini oldindan chizamiz.", ru: "Заранее прорисовываем каждый кадр, движение камеры и персонажей.", en: "We draw every frame, camera move and character action in advance." },
  },
  {
    n: '03',
    title: { uz: "Animatik", ru: "Аниматик", en: "Animatic" },
    text: { uz: "Tasvir, vaqt, dialog va musiqani birinchi marta birlashtiramiz.", ru: "Впервые соединяем изображение, время, диалог и музыку.", en: "For the first time we bring image, timing, dialogue and music together." },
  },
  {
    n: '04',
    title: { uz: "Animatsiya", ru: "Анимация", en: "Animation" },
    text: { uz: "Model, rig, fon, yorug'lik va qahramon harakati jonlanadi.", ru: "Оживают модели, риг, фоны, свет и движение персонажей.", en: "Models, rigs, backgrounds, lighting and character motion come alive." },
  },
  {
    n: '05',
    title: { uz: "Post", ru: "Пост", en: "Post" },
    text: { uz: "Rang, effekt, ovoz miksi va yakuniy sifat nazorati bajariladi.", ru: "Выполняются цветокоррекция, эффекты, микс звука и финальный контроль качества.", en: "Colour, effects, sound mix and the final quality check are done." },
  },
];
