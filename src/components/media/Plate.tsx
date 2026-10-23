import Image from 'next/image';
import { type Plate as PlateType } from '@/data/media';
import { type Locale } from '@/lib/i18n';
import { ViewerTrigger } from './ViewerTrigger';

interface PlateProps {
  plate: PlateType;
  lang: Locale;
  sizes?: string;
  isHero?: boolean;
  isWide?: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
}

export function Plate({
  plate,
  lang,
  sizes,
  isWide = false,
  quality = 60,
  className = '',
}: PlateProps) {
  const captionText = plate.caption?.[lang];
  const altText = plate.alt?.[lang] || captionText || `Plate ${plate.id}`;

  const ratioClasses = {
    '4:5': 'aspect-[4/5]',
    '3:4': 'aspect-[3/4]',
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '2:1': 'aspect-[2/1]',
    '9:16': 'aspect-[9/16]',
    '16:9': 'aspect-[16/9]',
  }[plate.ratio] || 'aspect-[4/5]';

  const defaultSizes = isWide
    ? '(min-width: 1024px) 54vw, 92vw'
    : '(min-width: 1024px) 32vw, (min-width: 768px) 46vw, 92vw';

  const finalSizes = sizes || defaultSizes;

  return (
    <figure
      className={`group flex flex-col ${className}`}
      style={plate.maxRender ? { maxWidth: `${plate.maxRender}px` } : undefined}
    >
      <ViewerTrigger
        plateId={plate.id}
        ariaLabel={`Plate ${plate.id}: ${altText}`}
        className="block w-full overflow-hidden bg-[var(--color-paper-2)]"
      >
        <div className={`relative w-full overflow-hidden ${ratioClasses}`}>
          <Image
            src={plate.file}
            alt={altText}
            fill
            sizes={finalSizes}
            quality={quality}
            loading="lazy"
            style={{ objectPosition: plate.focus }}
            className="object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.035]"
          />
        </div>
      </ViewerTrigger>

      {/* Numeral and optional caption */}
      <figcaption className="mt-3 flex flex-col gap-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[var(--color-clay)]">
            {plate.id}
          </span>
          <span className="h-px flex-1 bg-[var(--color-hairline)] transition-colors [@media(hover:hover)]:group-hover:bg-[var(--color-clay)]" />
        </div>
        {captionText ? (
          <p className="font-[family-name:var(--font-serif)] text-[var(--color-stone)] leading-relaxed">
            {captionText}
          </p>
        ) : (
          <p className="font-[family-name:var(--font-serif)] text-[11px] text-[var(--color-stone)]/80 leading-relaxed">
            {altText}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
