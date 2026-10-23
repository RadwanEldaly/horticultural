import { type Locale } from '@/lib/i18n';
import { aboutPlate } from '@/data/media';
import { Plate } from '../media/Plate';
import { Reveal } from '../motion/Reveal';

interface Pillar {
  title: string;
  desc: string;
}

interface AboutProps {
  lang: Locale;
  dictionary: {
    heading: string;
    subheading?: string;
    statement: string;
    story?: string;
    pillars?: Pillar[];
  };
}

export function About({ lang, dictionary }: AboutProps) {
  return (
    <section id="about" className="border-b border-[var(--color-hairline)] px-[var(--spacing-margin)] py-[var(--spacing-section)]">
      <div className="mx-auto grid max-w-[var(--container-wrap)] grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-start">
        
        {/* Left Column: Monograph Statement & Operational Pillars (Cols 1-7 on Desktop) */}
        <div className="col-span-4 md:col-span-8 lg:col-span-7 flex flex-col justify-center pe-0 lg:pe-8">
          <Reveal index={0}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-stone)]">
              <span className="font-mono text-[var(--color-clay)]">05</span>
              <span>/</span>
              <span>{lang === 'ar' ? 'نبذة عن المشتل' : 'About'}</span>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(2rem,1.4rem+2.5vw,3.75rem)] leading-tight text-[var(--color-ink)]">
              {dictionary.heading}
            </h2>
            {dictionary.subheading && (
              <p className="mt-2 text-sm text-[var(--color-moss)] font-medium">
                {dictionary.subheading}
              </p>
            )}

            {/* Main Verified Statement */}
            <blockquote className="mt-6 border-s-2 border-[var(--color-foliage)] ps-5 font-[family-name:var(--font-serif)] text-[clamp(1.15rem,1rem+0.5vw,1.4rem)] leading-relaxed text-[var(--color-ink)]">
              {dictionary.statement}
            </blockquote>

            {dictionary.story ? (
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-stone)]">
                {dictionary.story}
              </p>
            ) : null}

            {/* 4 Architectural Pillars Grid */}
            {dictionary.pillars && dictionary.pillars.length > 0 && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[var(--color-hairline)] pt-8">
                {dictionary.pillars.map((p, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[var(--color-clay)]">
                        0{idx + 1}
                      </span>
                      <h3 className="font-medium text-sm text-[var(--color-ink)]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--color-stone)] leading-relaxed ps-5">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        {/* Right Column: Curated Portrait Monograph Plate (Cols 8-12 on Desktop) */}
        <div className="col-span-4 md:col-span-8 lg:col-start-8 lg:col-span-5 mt-10 lg:mt-0">
          <Reveal index={1}>
            <div className="border border-[var(--color-hairline)] bg-[var(--color-paper-2)] p-3 shadow-sm">
              <Plate plate={aboutPlate} lang={lang} sizes="(min-width: 1024px) 35vw, 92vw" />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
