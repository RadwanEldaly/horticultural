import type { Locale } from './i18n';

const dictionaries = {
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.ar();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
