import type { CardItem } from './services';

/** `.card .tools` — mahsulot nomlari, tarjima qilinmaydi. */
export const tech: (CardItem & { tools: string })[] = [
  {
    tools: 'Maya · Blender · Houdini',
    title: { uz: "3D ishlab chiqarish", ru: "3D-производство", en: "3D production" },
    text: { uz: "Modellashtirishdan rig va yakuniy animatsiyagacha nazorat qilinadigan pipeline.", ru: "Контролируемый пайплайн от моделирования до рига и финальной анимации.", en: "A controlled pipeline from modelling through rigging to final animation." },
  },
  {
    tools: 'Unreal Engine · Animatik',
    title: { uz: "Realtime previz", ru: "Realtime-превиз", en: "Realtime previz" },
    text: { uz: "Kamera, yorug'lik va sahna ritmini ishlab chiqarishdan oldin sinab ko'ramiz.", ru: "Пробуем камеру, свет и ритм сцены до начала производства.", en: "We test camera, light and scene rhythm before production starts." },
  },
  {
    tools: 'Photoshop · Storyboard Pro',
    title: { uz: "2D va konsept", ru: "2D и концепт", en: "2D and concept" },
    text: { uz: "Har bir olam uchun rang, shakl, qahramon va vizual dramaturgiya tili.", ru: "Язык цвета, формы, персонажа и визуальной драматургии для каждого мира.", en: "A language of colour, shape, character and visual drama for every world." },
  },
  {
    tools: 'After Effects · Resolve · Pro Tools',
    title: { uz: "Post va ovoz", ru: "Пост и звук", en: "Post and sound" },
    text: { uz: "Kompoziting, rang, effekt va ovozni bitta yakuniy hissiyotga birlashtiramiz.", ru: "Соединяем композитинг, цвет, эффекты и звук в одно финальное чувство.", en: "We merge compositing, colour, effects and sound into one final feeling." },
  },
];
