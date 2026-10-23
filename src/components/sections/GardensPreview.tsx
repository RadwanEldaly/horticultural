import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { plates } from '@/data/media';
import { Plate } from '../media/Plate';
import { Reveal } from '../motion/Reveal';

interface GardensPreviewProps {
  lang: Locale;
  dictionary: {
    heading: string;
    subheading?: string;
    viewAll: string;
  };
}

export function GardensPreview({ lang, dictionary }: GardensPreviewProps) {
  const isRtl = lang === 'ar';

  // Grab the 8 curated home plates by ID
  const p03 = plates.find((p) => p.id === '03')!;
  const p07 = plates.find((p) => p.id === '07')!;
  const p27 = plates.find((p) => p.id === '27')!;
  const p17 = plates.find((p) => p.id === '17')!;
  const p10 = plates.find((p) => p.id === '10')!;
  const p15 = plates.find((p) => p.id === '15')!;
  const p36 = plates.find((p) => p.id === '36')!;
  const p40 = plates.find((p) => p.id === '40')!;

  return (
    <section id="gardens" className="border-b border-[var(--color-hairline)] px-[var(--spacing-margin)] py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[var(--container-wrap)]">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between border-b border-[var(--color-hairline)] pb-6 gap-6">
          <Reveal index={0} className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-stone)]">
              <span className="font-mono text-[var(--color-clay)]">03</span>
              <span>/</span>
              <span>{isRtl ? 'لوحات الحدائق المنفذة' : 'Monograph Plates'}</span>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(2rem,1.4rem+2.5vw,3.75rem)] leading-tight text-[var(--color-ink)]">
              {dictionary.heading}
            </h2>
            {dictionary.subheading && (
              <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed">
                {dictionary.subheading}
              </p>
            )}
          </Reveal>

          <Reveal index={1} className="shrink-0">
            <Link
              href={`/${lang}/gallery`}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] py-2 border-b border-[var(--color-hairline)] hover:border-[var(--color-clay)]"
            >
              <span>{dictionary.viewAll}</span>
              <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true">
                {isRtl ? '←' : '→'}
              </span>
            </Link>
          </Reveal>
        </div>

        {/* 12-Column Intentional Editorial Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-start">
          
          {/* Row 1: P03 (cols 1-7, 4:3), P07 (cols 8-12, 3:4) */}
          <Reveal
            index={0}
            className="col-span-4 md:col-span-8 lg:col-span-7"
          >
            <Plate plate={p03} lang={lang} isWide />
          </Reveal>

          <Reveal
            index={1}
            className="col-span-4 md:col-span-4 lg:col-start-8 lg:col-span-5"
          >
            <Plate plate={p07} lang={lang} />
          </Reveal>

          {/* Row 2: P27 (cols 1-4), P17 (cols 5-8), P10 (cols 9-12) */}
          {/* Offsets applied solely on lg to guarantee tablet and mobile rhythm */}
          <Reveal
            index={0}
            className="col-span-4 md:col-span-4 lg:col-span-4 mt-6 md:mt-0 lg:mt-8"
          >
            <Plate plate={p27} lang={lang} />
          </Reveal>

          <Reveal
            index={1}
            className="col-span-4 md:col-span-4 lg:col-span-4 mt-6 md:mt-0 lg:mt-20"
          >
            <Plate plate={p17} lang={lang} />
          </Reveal>

          <Reveal
            index={2}
            className="col-span-4 md:col-span-4 lg:col-span-4 mt-6 md:mt-0 lg:mt-12"
          >
            <Plate plate={p10} lang={lang} />
          </Reveal>

          {/* Row 3: P15 (cols 1-4), P36 (cols 5-7), P40 (cols 8-12) */}
          <Reveal
            index={0}
            className="col-span-4 md:col-span-4 lg:col-span-4 mt-6 md:mt-0 lg:mt-10"
          >
            <Plate plate={p15} lang={lang} />
          </Reveal>

          <Reveal
            index={1}
            className="col-span-4 md:col-span-4 lg:col-span-3 mt-6 md:mt-0 lg:mt-10"
          >
            <Plate plate={p36} lang={lang} />
          </Reveal>

          <Reveal
            index={2}
            className="col-span-4 md:col-span-8 lg:col-span-5 mt-6 md:mt-0 lg:mt-10"
          >
            <Plate plate={p40} lang={lang} isWide />
          </Reveal>
        </div>

        {/* Monograph Action Callout */}
        <div className="mt-16 pt-8 border-t border-[var(--color-hairline)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[var(--color-stone)]">
            {isRtl ? 'إجمالي 25 لوحة توثيقية منتقاة للحدائق' : 'Total 25 Published Photographic Plates'}
          </span>
          <Link
            href={`/${lang}/gallery`}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--color-paper)] bg-[var(--color-foliage)] px-6 py-3 transition-colors hover:bg-[var(--color-ink)]"
          >
            <span>{dictionary.viewAll}</span>
            <span aria-hidden="true">{isRtl ? '←' : '→'}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
