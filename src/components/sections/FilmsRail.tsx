import { type Locale } from '@/lib/i18n';
import { films } from '@/data/media';
import { FilmCard } from '../media/FilmCard';
import { RailControls } from '../media/RailControls';
import { Reveal } from '../motion/Reveal';

interface FilmsRailProps {
  lang: Locale;
  dictionary: {
    heading: string;
    subheading?: string;
    filmLabel: string;
  };
  labels: {
    previous: string;
    next: string;
  };
}

export function FilmsRail({ lang, dictionary, labels }: FilmsRailProps) {
  // Filter films by current locale
  const activeFilms = films.filter((f) => f.publish && f.locales.includes(lang));
  const countText = activeFilms.length < 10 ? `0${activeFilms.length}` : `${activeFilms.length}`;
  const railId = 'films-horizontal-rail';

  return (
    <section
      id="films"
      className="bg-[var(--color-night)] text-[var(--color-paper)] py-[var(--spacing-section)] px-[var(--spacing-margin)] overflow-hidden border-b border-[var(--color-hairline)]"
    >
      <div className="mx-auto max-w-[var(--container-wrap)]">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6 gap-6">
          <Reveal index={0} className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[var(--color-sage)]">
                {lang === 'ar' ? '04 / التوثيق المرئي الحي' : '04 — Moving Monograph'}
              </span>
              <span className="font-mono text-xs text-[var(--color-clay)]">
                ({countText} {lang === 'ar' ? 'أفلام توثيقية' : 'Films'})
              </span>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(2rem,1.4rem+2.5vw,3.75rem)] leading-tight text-[var(--color-paper)]">
              {dictionary.heading}
            </h2>
            {dictionary.subheading && (
              <p className="mt-3 text-sm text-[var(--color-sage)]/80 leading-relaxed">
                {dictionary.subheading}
              </p>
            )}
          </Reveal>

          <RailControls railId={railId} labels={labels} />
        </div>

        {/* Horizontal Rail */}
        <Reveal index={1}>
          <div
            id={railId}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth [scroll-snap-type:x_proximity] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {activeFilms.map((film) => (
              <div
                key={film.id}
                className="w-[70vw] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] shrink-0 [scroll-snap-align:start]"
              >
                <FilmCard film={film} filmLabel={dictionary.filmLabel} />
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
