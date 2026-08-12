import type { Loc } from '../i18n/ui';

/** Javoblar NAMUNAVIY — real ma'lumot kelgach yangilanadi (AGENTS.md §7). */
export const faq: { q: Loc; a: Loc }[] = [
  {
    q: { uz: "Loyihalar qaysi bosqichda?", ru: "На каком этапе находятся проекты?", en: "What stage are the projects at?" },
    a: { uz: "Saytdagi loyihalar konsept, vizual ishlab chiqish va serial bibliyasi bosqichlarida. Aniq ishlab chiqarish holati real ma'lumotlar kelgach yangilanadi.", ru: "Проекты на сайте находятся на этапах концепта, визуальной разработки и библии сериала. Точный производственный статус будет обновлён после получения реальных данных.", en: "The projects on the site are at the concept, visual development and series-bible stages. The exact production status will be updated once real data is provided." },
  },
  {
    q: { uz: "Buyurtma rolik narxi qanday hisoblanadi?", ru: "Как рассчитывается стоимость заказного ролика?", en: "How is the price of a commissioned film calculated?" },
    a: { uz: "Narx davomiylik, uslub, personajlar soni, texnika, til versiyalari va muddatga qarab hisoblanadi. Qisqa briefdan keyin diapazon beramiz.", ru: "Стоимость зависит от длительности, стиля, числа персонажей, техники, языковых версий и сроков. После короткого брифа мы называем диапазон.", en: "The price depends on running time, style, number of characters, technique, language versions and deadline. After a short brief we give a range." },
  },
  {
    q: { uz: "Qanday texnikada ishlaysiz?", ru: "В какой технике вы работаете?", en: "What technique do you work in?" },
    a: { uz: "2D, 3D va realtime previzni loyiha ehtiyojiga qarab birlashtiramiz. Asosiy pipeline Maya, Blender, Unreal Engine, Adobe va DaVinci vositalariga tayanadi.", ru: "Мы совмещаем 2D, 3D и realtime-превиз в зависимости от задач проекта. Основной пайплайн опирается на Maya, Blender, Unreal Engine, Adobe и DaVinci.", en: "We combine 2D, 3D and realtime previz depending on what the project needs. The main pipeline rests on Maya, Blender, Unreal Engine, Adobe and DaVinci." },
  },
  {
    q: { uz: "Serialni telekanalda ko'rsatish mumkinmi?", ru: "Можно ли показать сериал на телеканале?", en: "Can the series be broadcast on television?" },
    a: { uz: "Ha. Litsenziya hududi, muddati, til versiyasi va platformalar soni bo'yicha alohida kelishuv tayyorlanadi.", ru: "Да. По территории, сроку, языковой версии и числу платформ готовится отдельное соглашение.", en: "Yes. A separate agreement is prepared covering territory, term, language version and number of platforms." },
  },
  {
    q: { uz: "Ko'produksiyaga ochiqmisiz?", ru: "Открыты ли вы к копродукции?", en: "Are you open to co-production?" },
    a: { uz: "Ha. Mahalliy va xalqaro studiyalar bilan rivojlantirish, ishlab chiqarish, servis va distribusiya hamkorliklarini ko'rib chiqamiz.", ru: "Да. Мы рассматриваем партнёрство с местными и зарубежными студиями в разработке, производстве, сервисе и дистрибуции.", en: "Yes. We consider partnerships with local and international studios in development, production, service work and distribution." },
  },
  {
    q: { uz: "Amaliyotga qanday kirish mumkin?", ru: "Как попасть на стажировку?", en: "How can I join an internship?" },
    a: { uz: "Portfolio yoki 60–90 soniyalik showreel, qisqa motivatsion xat va qiziqayotgan yo'nalishingizni karyera manziliga yuboring.", ru: "Отправьте портфолио или шоурил на 60–90 секунд, короткое мотивационное письмо и интересующее вас направление на карьерный адрес.", en: "Send a portfolio or a 60–90 second showreel, a short cover letter and the area you are interested in to the careers address." },
  },
];
