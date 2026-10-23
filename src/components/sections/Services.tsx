import Image from 'next/image';
import { type Locale } from '@/lib/i18n';
import { plates } from '@/data/media';
import { Reveal } from '../motion/Reveal';

interface ServiceItem {
  id: string;
  category?: string;
  title: string;
  desc?: string;
}

interface ServicesProps {
  lang: Locale;
  dictionary: {
    heading: string;
    subheading?: string;
    items: ServiceItem[];
  };
}

export function Services({ lang, dictionary }: ServicesProps) {
  // Feature plate for catalogue sidebar (Plate 15: lush courtyard palms and shrubs)
  const cataloguePlate = plates.find((p) => p.id === '15') || plates[0];

  return (
    <section id="services" className="border-b border-[var(--color-hairline)] px-[var(--spacing-margin)] py-[var(--spacing-section)]">
      <div className="mx-auto grid max-w-[var(--container-wrap)] grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-start">
        
        {/* Left Column: Catalogue Context & Curated Plate (Cols 1-4 on Desktop) */}
        <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:sticky lg:top-28">
          <Reveal index={0}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-stone)]">
              <span className="font-mono text-[var(--color-clay)]">02</span>
              <span>/</span>
              <span>{lang === 'ar' ? 'فهرس الخدمات' : 'Field Index'}</span>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-tight text-[var(--color-ink)]">
              {dictionary.heading}
            </h2>
            {dictionary.subheading && (
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-stone)]">
                {dictionary.subheading}
              </p>
            )}

            {/* Editorial Feature Vignette */}
            <div className="mt-8 hidden lg:block overflow-hidden border border-[var(--color-hairline)] bg-[var(--color-paper-2)] p-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={cataloguePlate.file}
                  alt={cataloguePlate.alt?.[lang] || 'Horticultural fieldwork'}
                  fill
                  sizes="320px"
                  quality={60}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-1 text-[10px] font-mono text-[var(--color-stone)]">
                <span>
                  {lang === 'ar' ? 'لوحة ' : 'Plate '}
                  {cataloguePlate.id}
                </span>
                <span className="truncate max-w-[200px]">{cataloguePlate.caption?.[lang]}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Editorial Ruled Catalogue (Cols 5-12 on Desktop) */}
        <div className="col-span-4 md:col-span-8 lg:col-span-8 flex flex-col divide-y divide-[var(--color-hairline)] border-t border-b border-[var(--color-hairline)] mt-8 lg:mt-0">
          {dictionary.items.map((item, idx) => (
            <Reveal
              key={item.id}
              index={Math.min(idx, 5)}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-6 transition-[transform] duration-[320ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:translate-x-2 rtl:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-x-2"
            >
              {/* Index Numeral */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-sm text-[var(--color-stone)] transition-colors duration-200 group-hover:text-[var(--color-clay)]">
                  {item.id}
                </span>
                {item.category && (
                  <span className="sm:hidden text-[10px] uppercase tracking-wider text-[var(--color-moss)] font-medium">
                    {item.category}
                  </span>
                )}
              </div>

              {/* Title and Editorial Descriptor */}
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-[family-name:var(--font-serif)] text-lg sm:text-xl text-[var(--color-ink)] transition-colors duration-200 group-hover:text-[var(--color-foliage)]">
                    {item.title}
                  </h3>
                  {item.category && (
                    <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-[var(--color-moss)] font-medium ms-auto">
                      {item.category}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <p className="mt-1.5 text-xs sm:text-sm text-[var(--color-stone)] leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
