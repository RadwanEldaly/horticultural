import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { siteConfig } from '@/data/site';
import { plates, films, chapters } from '@/data/media';
import { ViewerProvider } from '@/components/media/ViewerProvider';
import { Chapter } from '@/components/sections/Chapter';
import { FilmCard } from '@/components/media/FilmCard';
import { Reveal } from '@/components/motion/Reveal';

interface GalleryPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const descriptor = siteConfig.descriptor[locale];
  const galleryTitle = `${dict.gallery.title} · ${descriptor}`;
  const galleryDesc = dict.about.statement;

  return {
    title: galleryTitle,
    description: galleryDesc,
    alternates: {
      canonical: `/${locale}/gallery`,
      languages: {
        ar: '/ar/gallery',
        en: '/en/gallery',
        'x-default': '/ar/gallery',
      },
    },
    openGraph: {
      title: galleryTitle,
      description: galleryDesc,
      url: `/${locale}/gallery`,
      siteName: descriptor,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
      type: 'website',
      images: [
        {
          url: '/media/img/plate-42-v1.jpg',
          width: 1080,
          height: 1394,
          alt: dict.hero.plate01Alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: galleryTitle,
      description: galleryDesc,
      images: ['/media/img/plate-42-v1.jpg'],
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const isRtl = locale === 'ar';
  const dictionary = await getDictionary(locale);
  const publishedPlates = plates.filter((p) => p.publish);
  const activeFilms = films.filter((f) => f.publish && f.locales.includes(locale));

  return (
    <ViewerProvider
      lang={locale}
      plates={publishedPlates}
      films={activeFilms}
      labels={{
        previous: dictionary.common.previous,
        next: dictionary.common.next,
        close: dictionary.common.close,
        of: dictionary.common.of,
      }}
    >
      <div className="px-[var(--spacing-margin)] pt-8 pb-16">
        <div className="mx-auto max-w-[var(--container-wrap)]">
          
          {/* Breadcrumb / Return Navigation */}
          <div className="mb-8">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-stone)] transition-colors hover:text-[var(--color-clay)]"
            >
              <span className="transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" aria-hidden="true">
                {isRtl ? '→' : '←'}
              </span>
              <span>{dictionary.gallery.backHome}</span>
            </Link>
          </div>

          {/* Page Title & Monograph Introduction */}
          <div className="border-b border-[var(--color-hairline)] pb-8 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--color-moss)]">
                {isRtl ? '03 / المعرض الكامل للحدائق والأفلام' : '03 / Complete Monograph'}
              </span>
              <h1 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] text-[var(--color-ink)] leading-tight">
                {dictionary.gallery.title}
              </h1>
            </div>
            <div className="text-xs font-mono text-[var(--color-stone)]">
              <span>{publishedPlates.length} {isRtl ? 'لوحة منتقاة' : 'Plates'}</span>
              <span className="mx-2">·</span>
              <span>{activeFilms.length} {isRtl ? 'أفلام توثيقية' : 'Films'}</span>
            </div>
          </div>

          {/* Chapter Quick Navigator */}
          <nav className="mb-12 flex flex-wrap items-center gap-3 border-b border-[var(--color-hairline)] pb-6 text-xs" aria-label="Chapter Index">
            {chapters.map((ch) => (
              <a
                key={ch.chapter}
                href={`#chapter-${ch.numeral}`}
                className="inline-flex items-center gap-2 border border-[var(--color-hairline)] bg-[var(--color-paper-2)]/50 px-3 py-1.5 transition-colors hover:border-[var(--color-clay)] hover:text-[var(--color-clay)]"
              >
                <span className="font-mono text-[var(--color-clay)]">{ch.numeral}</span>
                <span>{ch.title[locale]}</span>
                <span className="text-[10px] text-[var(--color-stone)]">({ch.plates.length})</span>
              </a>
            ))}
            <a
              href="#gallery-films"
              className="inline-flex items-center gap-2 border border-[var(--color-hairline)] bg-[var(--color-paper-2)]/50 px-3 py-1.5 transition-colors hover:border-[var(--color-clay)] hover:text-[var(--color-clay)]"
            >
              <span className="font-mono text-[var(--color-clay)]">05</span>
              <span>{dictionary.gallery.filmsHeading}</span>
              <span className="text-[10px] text-[var(--color-stone)]">({activeFilms.length})</span>
            </a>
          </nav>

          {/* Chapters 1 to 4 */}
          <div className="flex flex-col">
            {chapters.map((ch) => (
              <Chapter
                key={ch.chapter}
                numeral={ch.numeral}
                title={ch.title[locale]}
                plates={ch.plates}
                lang={locale}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Films on Night Band as a Grid */}
      <section id="gallery-films" className="bg-[var(--color-night)] text-[var(--color-paper)] py-[var(--spacing-section)] px-[var(--spacing-margin)] mt-16 scroll-mt-24 border-t border-[var(--color-hairline)]">
        <div className="mx-auto max-w-[var(--container-wrap)]">
          <div className="mb-10 border-b border-white/10 pb-4 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--color-sage)]">
                {isRtl ? '05 / أرشيف الأفلام التوثيقية' : '05 — Moving Plates Archive'}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-[var(--color-paper)]">
                {dictionary.gallery.filmsHeading}
              </h2>
            </div>
            <span className="font-mono text-xs text-[var(--color-clay)]">
              ({activeFilms.length} {isRtl ? 'أفلام' : 'Films'})
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[var(--spacing-gutter)]">
            {activeFilms.map((film, idx) => (
              <Reveal key={film.id} index={idx % 4}>
                <FilmCard film={film} filmLabel={dictionary.films.filmLabel} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </ViewerProvider>
  );
}
