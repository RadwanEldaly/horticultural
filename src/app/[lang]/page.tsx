import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { homePlates, films } from '@/data/media';
import { ViewerProvider } from '@/components/media/ViewerProvider';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { GardensPreview } from '@/components/sections/GardensPreview';
import { FilmsRail } from '@/components/sections/FilmsRail';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  const activeFilms = films.filter((f) => f.publish && f.locales.includes(locale));

  return (
    <ViewerProvider
      lang={locale}
      plates={homePlates}
      films={activeFilms}
      labels={{
        previous: dictionary.common.previous,
        next: dictionary.common.next,
        close: dictionary.common.close,
        of: dictionary.common.of,
      }}
    >
      <Hero lang={locale} dictionary={dictionary.hero} />
      <Services lang={locale} dictionary={dictionary.services} />
      <GardensPreview lang={locale} dictionary={dictionary.gardens} />
      <FilmsRail
        lang={locale}
        dictionary={dictionary.films}
        labels={{
          previous: dictionary.common.previous,
          next: dictionary.common.next,
        }}
      />
      <About lang={locale} dictionary={dictionary.about} />
      <Contact lang={locale} dictionary={dictionary.contact} />
    </ViewerProvider>
  );
}
