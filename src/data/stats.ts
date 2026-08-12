import type { UiKey } from '../i18n/ui';
import type { Loc } from '../i18n/ui';

/**
 * «40+ ijodiy mutaxassis» — NAMUNAVIY, ostida `.note` izohi turadi.
 * Qolgan uchtasi haqiqiy (YouTube RSS va loyihalar soni).
 */
export const stats: { value: Loc; label: UiKey }[] = [
  { value: { uz: "38,4 mln", ru: "38,4 млн", en: "38.4M" }, label: 'stats.views' },
  { value: { uz: "2", ru: "2", en: "2" }, label: 'stats.onair' },
  { value: { uz: "6", ru: "6", en: "6" }, label: 'stats.projects' },
  { value: { uz: "40+", ru: "40+", en: "40+" }, label: 'stats.people' },
];
