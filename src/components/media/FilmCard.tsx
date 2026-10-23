import Image from 'next/image';
import { type Film } from '@/data/media';
import { formatDuration } from '@/lib/format';
import { ViewerTrigger } from './ViewerTrigger';

interface FilmCardProps {
  film: Film;
  filmLabel?: string;
  className?: string;
}

export function FilmCard({ film, filmLabel = 'Film', className = '' }: FilmCardProps) {
  const durationText = formatDuration(film.duration);
  const isSquare = film.aspect === '1:1';
  const ratioClass = isSquare ? 'aspect-square' : 'aspect-[9/16]';

  return (
    <div className={`group relative flex flex-col shrink-0 ${className}`}>
      <ViewerTrigger
        filmId={film.id}
        ariaLabel={`${filmLabel} ${film.id} (${durationText})`}
        className="block w-full overflow-hidden bg-[var(--color-night)]"
      >
        <div className={`relative w-full overflow-hidden ${ratioClass}`}>
          <Image
            src={film.poster}
            alt={`${filmLabel} ${film.id}`}
            fill
            sizes="(min-width: 1024px) 320px, 64vw"
            quality={60}
            loading="lazy"
            className="object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.03]"
          />

          {/* Centered Circular Play Mark (48px, 1.5px paper stroke) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-[var(--color-paper)] bg-transparent text-[var(--color-paper)] transition-all duration-200 [@media(hover:hover)]:group-hover:bg-[var(--color-paper)] [@media(hover:hover)]:group-hover:text-[var(--color-foliage)]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 translate-x-0.5 rtl:-translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom Strip: Film 01 & Duration */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-xs font-mono text-[var(--color-paper)]">
            <span className="tracking-wider">
              {filmLabel} {film.id}
            </span>
            <span className="tracking-widest opacity-90">{durationText}</span>
          </div>
        </div>
      </ViewerTrigger>
    </div>
  );
}
