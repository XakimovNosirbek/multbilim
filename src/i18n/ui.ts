/**
 * Interfeys matnlari. `uz` — manba, `ru` va `en` uning kalitlarini
 * to'liq takrorlashi shart: `Record<UiKey, string>` tufayli yetishmagan
 * tarjima `astro check` da tip xatosi bo'lib chiqadi.
 */
export const languages = { uz: "O'zbekcha", ru: 'Русский', en: 'English' } as const;
export const langLabel = { uz: 'UZ', ru: 'RU', en: 'EN' } as const;
export const defaultLang = 'uz' as const;

export type Lang = keyof typeof languages;

/** Ma'lumot fayllarida uch tilli matn shu shaklda saqlanadi. */
export type Loc = Record<Lang, string>;

const uz = {
  'meta.title': 'MultBilim — animatsiya studiyasi',
  'meta.description':
    "MultBilim — O'zbekistonda yaratilgan olamlar. Alpomish, Ikki Dunyo, Zij, Megavoylar, Sehrli Qalpoqcha, Meva-Cheva loyihalari.",
  'meta.ogDescription': "O'zbekistonda yaratilgan olamlar. Dunyo uchun hikoyalar.",

  'a11y.skip': "Asosiy kontentga o'tish",
  'a11y.logoHome': 'MultBilim bosh sahifa',
  'a11y.theme': "Yorug' yoki qorong'i rejim",
  'a11y.menu': 'Menyu',
  'a11y.close': 'Yopish',
  'a11y.prev': 'Oldingi',
  'a11y.next': 'Keyingi',
  'a11y.mobileNav': 'Mobil menyu',
  'a11y.langs': 'Tilni tanlash',
  'a11y.closeVideo': 'Videoni yopish',
  'a11y.lightbox': "Rasm ko'rgich",

  'nav.projects': 'Loyihalar',
  'nav.watch': 'Tomosha',
  'nav.services': 'Xizmatlar',
  'nav.tech': 'Texnologiya',
  'nav.studio': 'Studio',
  'nav.team': 'Jamoa',
  'nav.careers': 'Karyera',
  'nav.faq': 'Savollar',
  'nav.contact': "Bog'lanish",

  'hero.l1': "O'zbekistonda",
  'hero.l2': 'yaratilgan',
  'hero.l3': 'olamlar.',
  'hero.lede':
    "Mahalliy ruh, dunyo darajasidagi animatsiya. Biz bolalar va oilalar sevib qoladigan qahramonlarni yaratamiz.",
  'hero.ctaProjects': 'Olamlarni kashf eting',
  'hero.ctaWatch': 'Pastda tomosha qiling',

  'studio.eyebrow': 'Studio manifesti',
  'studio.h1': 'Animatsiya — bu chizish emas. Bu ',
  'studio.h2em': "vaqtni boshqarish.",
  'studio.p1':
    "MultBilim — O'zbekiston hikoyalari, ilm-fan va bolalik tasavvurini zamonaviy animatsiya tilida birlashtiradigan studio.",
  'studio.p2':
    "Har bir loyiha alohida vizual olam. Har bir qahramon esa bola bilan birga ulg'ayish uchun yaratiladi.",

  'projects.eyebrow': 'Tanlangan loyihalar',
  'projects.h': 'Bir studio. Olti xil olam.',
  'projects.lede':
    "Har bir kartani oching: loyiha hikoyasi, qahramonlari va taqdimot hujjatlaridan olingan konsept materiallari ichkarida.",
  'projects.open': 'Loyihani ochish',
  'projects.note': "Mutaxassislar soni namunaviy — real ma'lumot bilan almashtiriladi.",
  'projects.back': 'Barcha loyihalar',
  'projects.prev': 'Oldingi loyiha',
  'projects.next': 'Keyingi loyiha',

  'stats.views': "YouTube ko'rish",
  'stats.onair': 'Efirdagi serial',
  'stats.projects': 'Original loyiha',
  'stats.people': 'Ijodiy mutaxassis',

  'watch.eyebrow': 'Hozir efirda',
  'watch.h': 'Hikoyalar harakatda.',
  'watch.lede': "Videoni bosing — YouTube'ga o'tmasdan shu sahifaning o'zida tomosha qilasiz.",
  'watch.playLabel': "videosini shu yerda ko'rish",

  'services.eyebrow': 'Nimalar qilamiz',
  'services.h': "G'oyadan ekrangacha.",
  'services.lede':
    "Rejissura, dizayn, animatsiya, ovoz va post-ishlab chiqarish — bitta ijodiy tizimda.",

  'process.eyebrow': 'Qanday ishlaymiz',
  'process.h': 'Besh bosqich. Bitta sifat.',
  'process.stage': 'Bosqich',

  'tech.eyebrow': 'Texnologiyalar',
  'tech.h': "San'at va texnika bir kadrda.",
  'tech.lede':
    "Vosita maqsad emas. Hikoya uchun eng to'g'ri pipeline'ni tanlab, har bosqichni bir-biriga bog'laymiz.",

  'team.eyebrow': 'Studio odamlari',
  'team.h': 'Olamlarni odamlar yaratadi.',
  'team.lede':
    "Quyidagi ismlar namunaviy — keyinchalik haqiqiy MultBilim jamoasi bilan almashtiriladi.",
  'team.placeholder': 'Namunaviy',

  'careers.eyebrow': 'Karyera',
  'careers.h': "Biz bilan birga ulg'aying.",
  'careers.lede':
    "Vakansiyalar hozircha namunaviy. Portfolio va fikrlash usuli tajriba yillaridan ham muhimroq.",
  'careers.apply': 'Ariza yuborish',

  'faq.eyebrow': 'Savol va javob',
  'faq.h': "Ko'p beriladigan savollar.",
  'faq.lede': 'Eng ko\'p so\'raladigan mavzular. Javobni ochish uchun savol ustiga bosing.',

  'contact.eyebrow': 'Aloqa',
  'contact.h': 'Loyihangizni gaplashamiz.',
  'contact.lede':
    "Qisqa tavsif va taxminiy davomiylik yetarli. Keyingi savollarni birga aniqlaymiz.",
  'contact.name': 'Ism va familiya',
  'contact.email': 'Email',
  'contact.org': 'Kompaniya',
  'contact.topic': 'Mavzu',
  'contact.msg': 'Loyiha haqida',
  'contact.submit': 'Xabar tayyorlash',
  'contact.formNote': 'Forma email ilovangiz orqali yuboriladi.',
  'contact.mailSubject': 'Sayt orqali murojaat',
  'contact.depts': "Bo'limlar",
  'contact.deptGeneral': 'Umumiy',
  'contact.deptProject': "Buyurtma va ko'produksiya",
  'contact.deptCareer': 'Karyera',
  'contact.studio': 'Studio',
  'contact.studioAddress': 'Toshkent shahri',
  'contact.studioHours': 'Dushanba–Juma · 09:00–18:00',
  'contact.channels': 'Kanallar',
  'contact.note': 'Kontaktlar hozircha namunaviy. Real manzillar berilgach yangilanadi.',

  'footer.nav': 'Navigatsiya',
  'footer.studio': 'Studio',
  'footer.about': 'Biz haqimizda',
  'footer.channels': 'Kanallar',
  'footer.partner': 'Hamkorlik',
  'footer.order': 'Buyurtma',
  'footer.copro': "Ko'produksiya",
  'footer.license': 'Litsenziya',
  'footer.rights': "© 2026 MultBilim Studio · Toshkent, O'zbekiston",
  'footer.top': 'Yuqoriga',
  'footer.oldVersion': 'Oldingi versiya',
  'footer.disclaimer':
    "Loyiha tasvirlari va tavsiflari studiyaning taqdimot hujjatlaridan olingan. YouTube ko'rish sonlari «Bek va Lola» hamda «Yashil makon» kanallarining ochiq RSS ma'lumotidan olingan va har kanalning oxirgi 15 chiqishini qamraydi. Jamoa, vakansiyalar, savol-javoblar va aloqa manzillari namunaviy.",

  'project.synopsis': 'Qisqa mazmun',
  'project.idea': "G'oya yadrosi",
  'project.characters': 'Qahramonlar',
  'project.values': 'Bolalar uchun qadriyatlar',
  'project.frames': 'Kadrlar',

  'nf.code': '404',
  'nf.h': 'Bu sahifa topilmadi.',
  'nf.lede': "Havola eskirgan yoki manzil xato yozilgan bo'lishi mumkin.",
  'nf.home': 'Bosh sahifaga',
} as const;

type UiKey = keyof typeof uz;

const ru: Record<UiKey, string> = {
  'meta.title': 'MultBilim — студия анимации',
  'meta.description':
    'MultBilim — миры, созданные в Узбекистане. Проекты «Алпомиш», «Два мира», «Зидж», «Мегавои», «Волшебная шапочка», «Мева-Чева».',
  'meta.ogDescription': 'Миры, созданные в Узбекистане. Истории для всего мира.',

  'a11y.skip': 'Перейти к основному содержанию',
  'a11y.logoHome': 'MultBilim, главная страница',
  'a11y.theme': 'Светлый или тёмный режим',
  'a11y.menu': 'Меню',
  'a11y.close': 'Закрыть',
  'a11y.prev': 'Предыдущее',
  'a11y.next': 'Следующее',
  'a11y.mobileNav': 'Мобильное меню',
  'a11y.langs': 'Выбор языка',
  'a11y.closeVideo': 'Закрыть видео',
  'a11y.lightbox': 'Просмотр изображения',

  'nav.projects': 'Проекты',
  'nav.watch': 'Смотреть',
  'nav.services': 'Услуги',
  'nav.tech': 'Технологии',
  'nav.studio': 'Студия',
  'nav.team': 'Команда',
  'nav.careers': 'Карьера',
  'nav.faq': 'Вопросы',
  'nav.contact': 'Связаться',

  'hero.l1': 'Миры,',
  'hero.l2': 'созданные',
  'hero.l3': 'в Узбекистане.',
  'hero.lede':
    'Местный дух и анимация мирового уровня. Мы создаём героев, которых полюбят дети и их родители.',
  'hero.ctaProjects': 'Откройте миры',
  'hero.ctaWatch': 'Смотрите ниже',

  'studio.eyebrow': 'Манифест студии',
  'studio.h1': 'Анимация — это не рисование. Это ',
  'studio.h2em': 'управление временем.',
  'studio.p1':
    'MultBilim — студия, объединяющая узбекские истории, науку и детское воображение на языке современной анимации.',
  'studio.p2':
    'Каждый проект — отдельный визуальный мир. А каждый герой создан, чтобы расти вместе с ребёнком.',

  'projects.eyebrow': 'Избранные проекты',
  'projects.h': 'Одна студия. Шесть разных миров.',
  'projects.lede':
    'Откройте любую карточку: внутри история проекта, его герои и концепт-материалы из презентационных документов.',
  'projects.open': 'Открыть проект',
  'projects.note': 'Число специалистов условное — будет заменено реальными данными.',
  'projects.back': 'Все проекты',
  'projects.prev': 'Предыдущий проект',
  'projects.next': 'Следующий проект',

  'stats.views': 'просмотров на YouTube',
  'stats.onair': 'сериала в эфире',
  'stats.projects': 'оригинальных проекта',
  'stats.people': 'творческих специалистов',

  'watch.eyebrow': 'Сейчас в эфире',
  'watch.h': 'Истории в движении.',
  'watch.lede': 'Нажмите на видео — смотрите прямо на этой странице, не переходя на YouTube.',
  'watch.playLabel': 'смотреть здесь',

  'services.eyebrow': 'Что мы делаем',
  'services.h': 'От идеи до экрана.',
  'services.lede':
    'Режиссура, дизайн, анимация, звук и постпродакшн — в одной творческой системе.',

  'process.eyebrow': 'Как мы работаем',
  'process.h': 'Пять этапов. Одно качество.',
  'process.stage': 'Этап',

  'tech.eyebrow': 'Технологии',
  'tech.h': 'Искусство и техника в одном кадре.',
  'tech.lede':
    'Инструмент — не цель. Мы подбираем верный пайплайн для истории и связываем все этапы между собой.',

  'team.eyebrow': 'Люди студии',
  'team.h': 'Миры создают люди.',
  'team.lede':
    'Имена ниже условные — позже они будут заменены реальной командой MultBilim.',
  'team.placeholder': 'Условно',

  'careers.eyebrow': 'Карьера',
  'careers.h': 'Растите вместе с нами.',
  'careers.lede':
    'Вакансии пока условные. Портфолио и способ мышления важнее, чем годы опыта.',
  'careers.apply': 'Отправить заявку',

  'faq.eyebrow': 'Вопросы и ответы',
  'faq.h': 'Частые вопросы.',
  'faq.lede': 'Самые обсуждаемые темы. Нажмите на вопрос, чтобы открыть ответ.',

  'contact.eyebrow': 'Контакты',
  'contact.h': 'Обсудим ваш проект.',
  'contact.lede':
    'Достаточно короткого описания и примерной длительности. Остальное уточним вместе.',
  'contact.name': 'Имя и фамилия',
  'contact.email': 'Email',
  'contact.org': 'Компания',
  'contact.topic': 'Тема',
  'contact.msg': 'О проекте',
  'contact.submit': 'Подготовить письмо',
  'contact.formNote': 'Форма отправляется через ваше почтовое приложение.',
  'contact.mailSubject': 'Обращение через сайт',
  'contact.depts': 'Отделы',
  'contact.deptGeneral': 'Общие вопросы',
  'contact.deptProject': 'Заказы и копродукция',
  'contact.deptCareer': 'Карьера',
  'contact.studio': 'Студия',
  'contact.studioAddress': 'город Ташкент',
  'contact.studioHours': 'Понедельник–пятница · 09:00–18:00',
  'contact.channels': 'Каналы',
  'contact.note': 'Контакты пока условные. Будут обновлены после получения реальных адресов.',

  'footer.nav': 'Навигация',
  'footer.studio': 'Студия',
  'footer.about': 'О нас',
  'footer.channels': 'Каналы',
  'footer.partner': 'Сотрудничество',
  'footer.order': 'Заказ',
  'footer.copro': 'Копродукция',
  'footer.license': 'Лицензирование',
  'footer.rights': '© 2026 MultBilim Studio · Ташкент, Узбекистан',
  'footer.top': 'Наверх',
  'footer.oldVersion': 'Предыдущая версия',
  'footer.disclaimer':
    'Изображения и описания проектов взяты из презентационных документов студии. Число просмотров на YouTube взято из открытых RSS-данных каналов «Bek va Lola» и «Yashil makon» и охватывает последние 15 выпусков каждого канала. Команда, вакансии, ответы на вопросы и контактные адреса условные.',

  'project.synopsis': 'Краткое содержание',
  'project.idea': 'Ядро идеи',
  'project.characters': 'Герои',
  'project.values': 'Ценности для детей',
  'project.frames': 'Кадры',

  'nf.code': '404',
  'nf.h': 'Страница не найдена.',
  'nf.lede': 'Возможно, ссылка устарела или адрес набран с ошибкой.',
  'nf.home': 'На главную',
};

const en: Record<UiKey, string> = {
  'meta.title': 'MultBilim — animation studio',
  'meta.description':
    'MultBilim — worlds made in Uzbekistan. The Alpomish, Two Worlds, Zij, Megawoys, Magic Cap and Meva-Cheva projects.',
  'meta.ogDescription': 'Worlds made in Uzbekistan. Stories for the world.',

  'a11y.skip': 'Skip to main content',
  'a11y.logoHome': 'MultBilim home page',
  'a11y.theme': 'Light or dark mode',
  'a11y.menu': 'Menu',
  'a11y.close': 'Close',
  'a11y.prev': 'Previous',
  'a11y.next': 'Next',
  'a11y.mobileNav': 'Mobile menu',
  'a11y.langs': 'Choose language',
  'a11y.closeVideo': 'Close video',
  'a11y.lightbox': 'Image viewer',

  'nav.projects': 'Projects',
  'nav.watch': 'Watch',
  'nav.services': 'Services',
  'nav.tech': 'Technology',
  'nav.studio': 'Studio',
  'nav.team': 'Team',
  'nav.careers': 'Careers',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contact',

  'hero.l1': 'Worlds',
  'hero.l2': 'made in',
  'hero.l3': 'Uzbekistan.',
  'hero.lede':
    'Local soul, world-class animation. We create characters that children and families fall in love with.',
  'hero.ctaProjects': 'Explore the worlds',
  'hero.ctaWatch': 'Watch below',

  'studio.eyebrow': 'Studio manifesto',
  'studio.h1': 'Animation is not drawing. It is ',
  'studio.h2em': 'the craft of time.',
  'studio.p1':
    'MultBilim is a studio that brings together Uzbek stories, science and childhood imagination in the language of modern animation.',
  'studio.p2':
    'Every project is a visual world of its own. And every character is built to grow up alongside the child.',

  'projects.eyebrow': 'Selected projects',
  'projects.h': 'One studio. Six different worlds.',
  'projects.lede':
    'Open any card: the story, the characters and the concept art from the studio pitch documents are inside.',
  'projects.open': 'Open the project',
  'projects.note': 'The number of specialists is a placeholder — it will be replaced with real data.',
  'projects.back': 'All projects',
  'projects.prev': 'Previous project',
  'projects.next': 'Next project',

  'stats.views': 'YouTube views',
  'stats.onair': 'series on air',
  'stats.projects': 'original projects',
  'stats.people': 'creative specialists',

  'watch.eyebrow': 'On air now',
  'watch.h': 'Stories in motion.',
  'watch.lede': 'Tap a video — it plays right on this page, without leaving for YouTube.',
  'watch.playLabel': 'watch here',

  'services.eyebrow': 'What we do',
  'services.h': 'From idea to screen.',
  'services.lede':
    'Directing, design, animation, sound and post-production — inside one creative system.',

  'process.eyebrow': 'How we work',
  'process.h': 'Five stages. One standard.',
  'process.stage': 'Stage',

  'tech.eyebrow': 'Technology',
  'tech.h': 'Art and craft in a single frame.',
  'tech.lede':
    'The tool is not the goal. We pick the right pipeline for the story and connect every stage to the next.',

  'team.eyebrow': 'The people',
  'team.h': 'Worlds are made by people.',
  'team.lede':
    'The names below are placeholders — they will be replaced with the real MultBilim team.',
  'team.placeholder': 'Placeholder',

  'careers.eyebrow': 'Careers',
  'careers.h': 'Grow together with us.',
  'careers.lede':
    'The openings are placeholders for now. A portfolio and the way you think matter more than years of experience.',
  'careers.apply': 'Apply',

  'faq.eyebrow': 'Questions and answers',
  'faq.h': 'Frequently asked questions.',
  'faq.lede': 'The topics we are asked about most. Tap a question to open the answer.',

  'contact.eyebrow': 'Contact',
  'contact.h': "Let's talk about your project.",
  'contact.lede':
    'A short description and a rough running time are enough. We will work out the rest together.',
  'contact.name': 'Name and surname',
  'contact.email': 'Email',
  'contact.org': 'Company',
  'contact.topic': 'Topic',
  'contact.msg': 'About the project',
  'contact.submit': 'Prepare the message',
  'contact.formNote': 'The form is sent through your email app.',
  'contact.mailSubject': 'Enquiry from the website',
  'contact.depts': 'Departments',
  'contact.deptGeneral': 'General',
  'contact.deptProject': 'Commissions and co-production',
  'contact.deptCareer': 'Careers',
  'contact.studio': 'Studio',
  'contact.studioAddress': 'Tashkent',
  'contact.studioHours': 'Monday–Friday · 09:00–18:00',
  'contact.channels': 'Channels',
  'contact.note': 'The contacts are placeholders for now. They will be updated once real addresses are provided.',

  'footer.nav': 'Navigation',
  'footer.studio': 'Studio',
  'footer.about': 'About us',
  'footer.channels': 'Channels',
  'footer.partner': 'Partnership',
  'footer.order': 'Commission',
  'footer.copro': 'Co-production',
  'footer.license': 'Licensing',
  'footer.rights': '© 2026 MultBilim Studio · Tashkent, Uzbekistan',
  'footer.top': 'Back to top',
  'footer.oldVersion': 'Previous version',
  'footer.disclaimer':
    'Project artwork and descriptions come from the studio pitch documents. YouTube view counts come from the public RSS feeds of the «Bek va Lola» and «Yashil makon» channels and cover the latest 15 releases of each channel. The team, openings, answers and contact addresses are placeholders.',

  'project.synopsis': 'Synopsis',
  'project.idea': 'Core idea',
  'project.characters': 'Characters',
  'project.values': 'Values for children',
  'project.frames': 'Frames',

  'nf.code': '404',
  'nf.h': 'This page was not found.',
  'nf.lede': 'The link may be out of date, or the address may have a typo.',
  'nf.home': 'Go to the home page',
};

export const ui = { uz, ru, en } satisfies Record<Lang, Record<UiKey, string>>;
export type { UiKey };
