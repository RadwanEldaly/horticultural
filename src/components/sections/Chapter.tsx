import { type Locale } from '@/lib/i18n';
import { type Plate as PlateType } from '@/data/media';
import { Plate } from '../media/Plate';
import { Reveal } from '../motion/Reveal';

interface ChapterProps {
  numeral: string;
  title: string;
  plates: PlateType[];
  lang: Locale;
}

export function Chapter({ numeral, title, plates, lang }: ChapterProps) {
  const count = plates.length < 10 ? `0${plates.length}` : `${plates.length}`;

  return (
    <section id={`chapter-${numeral}`} className="border-b border-[var(--color-hairline)] py-16 last:border-b-0 scroll-mt-24">
      {/* Chapter Heading */}
      <div className="mb-10 flex items-baseline justify-between border-b border-[var(--color-hairline)] pb-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-[var(--color-clay)]">
            {numeral}
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-[var(--color-ink)]">
            {title}
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--color-stone)]">
          ({count})
        </span>
      </div>

      {/* Grid: 12-col layout */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-start">
        {plates.map((plate, idx) => {
          // Span pattern across 12 cols: alternate 4-col, 6-col, 4-col, 4-col, 4-col, 8-col etc.
          const isWide = plate.ratio === '2:1' || plate.ratio === '4:3' || plate.ratio === '16:9';
          const spanClass = plate.ratio === '2:1' || plate.ratio === '16:9'
            ? 'col-span-4 md:col-span-8 lg:col-span-12'
            : isWide
            ? 'col-span-4 md:col-span-4 lg:col-span-6'
            : 'col-span-4 md:col-span-4 lg:col-span-4';

          return (
            <Reveal
              key={plate.id}
              index={idx % 3}
              className={spanClass}
            >
              <Plate plate={plate} lang={lang} isWide={isWide} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
