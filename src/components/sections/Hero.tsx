import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { heroPlate01, heroPlate02 } from '@/data/media';
import { CallLink } from '../layout/CallLink';
import { ViewerTrigger } from '../media/ViewerTrigger';

interface HeroProps {
  lang: Locale;
  dictionary: {
    kicker: string;
    h1: string;
    tagline?: string;
    serviceLine: string;
    primaryCta: string;
    secondaryCta: string;
    plate01Alt: string;
    plate02Alt: string;
  };
}

export function Hero({ lang, dictionary }: HeroProps) {
  const isRtl = lang === 'ar';

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-hairline)] px-[var(--spacing-margin)] pt-10 pb-12 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      
      {/* Mobile Atmospheric Botanical Canvas (Hidden on Desktop) */}
      <div className="absolute inset-0 z-0 md:hidden overflow-hidden pointer-events-none" aria-hidden="true">
        <Image
          src="/media/img/plate-42-mobile-v1.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          loading="eager"
          sizes="(max-width: 767px) 100vw, 0vw"
          quality={75}
          className="object-cover object-center scale-105"
        />
        {/* Botanical Scrim & Tonal Gradients for High Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#13251B]/85 via-[#13251B]/78 to-[#13251B]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(19,37,27,0.5)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[var(--container-wrap)] grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
        
        {/* Editorial Content: Full-width Centered on Mobile, Left Column on Tablet/Desktop */}
        <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col justify-center pe-0 lg:pe-6 max-md:items-center">
          
          {/* Monograph Kicker */}
          <div
            className="hero-rise mb-4 flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--color-moss)] max-md:mb-3 max-md:justify-center max-md:text-[var(--color-sage)]"
            style={{ '--d': '80ms' } as React.CSSProperties}
          >
            <span className="font-mono text-[var(--color-clay)]">01</span>
            <span className="h-px w-6 bg-[var(--color-clay)]/40 max-md:bg-white/20" aria-hidden="true" />
            <span className="font-medium max-md:text-[var(--color-paper-2)]/90">{dictionary.kicker}</span>
          </div>

          {/* Balanced Responsive H1 */}
          <h1
            className="hero-rise font-[family-name:var(--font-serif)] text-[clamp(2.35rem,1.6rem+2.6vw,4.25rem)] leading-[1.12] rtl:leading-[1.25] text-[var(--color-ink)] tracking-tight [text-wrap:balance] [overflow-wrap:anywhere] max-md:text-center max-md:text-[var(--color-paper)] max-md:text-[clamp(1.9rem,1.4rem+3.2vw,2.75rem)] max-md:drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            style={{ '--d': '160ms' } as React.CSSProperties}
          >
            {dictionary.h1}
          </h1>

          {/* Reference-Inspired Clay Botanical Accent Stroke (Mobile Only) */}
          <div className="md:hidden my-3 flex justify-center w-full" aria-hidden="true">
            <svg className="w-28 h-2 text-[var(--color-clay)] opacity-90" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.5C28 2.5 75 2 118 4.5C92 6.5 45 6.8 2 5.5Z" fill="currentColor" />
            </svg>
          </div>

          {/* Editorial Tagline */}
          {dictionary.tagline && (
            <p
              className="hero-rise mt-4 text-[clamp(1.05rem,0.95rem+0.4vw,1.25rem)] leading-relaxed text-[var(--color-foliage)] font-medium max-md:text-center max-md:text-[var(--color-paper-2)] max-md:mt-1 max-md:text-sm sm:max-md:text-base"
              style={{ '--d': '240ms' } as React.CSSProperties}
            >
              {dictionary.tagline}
            </p>
          )}

          {/* Summary Services Bar */}
          <p
            className="hero-rise mt-5 text-sm md:text-base leading-relaxed text-[var(--color-stone)] border-s-2 border-[var(--color-clay)]/30 ps-4 max-md:text-center max-md:border-s-0 max-md:ps-0 max-md:mt-3 max-md:text-xs sm:max-md:text-sm max-md:text-[var(--color-paper-2)]/80 max-md:max-w-md max-md:mx-auto"
            style={{ '--d': '320ms' } as React.CSSProperties}
          >
            {dictionary.serviceLine}
          </p>

          {/* Call to Action Row */}
          <div
            className="hero-rise mt-8 flex flex-wrap items-center gap-5 sm:gap-6 max-md:mt-6 max-md:flex-col sm:max-md:flex-row max-md:justify-center max-md:w-full max-md:gap-3"
            style={{ '--d': '400ms' } as React.CSSProperties}
          >
            {/* Primary Call Action with Separated LTR Number */}
            <CallLink
              showNumber
              label={dictionary.primaryCta}
              separator="·"
              className="inline-flex items-center justify-center border border-[var(--color-foliage)] bg-[var(--color-foliage)] px-6 py-3.5 text-xs uppercase tracking-wider text-[var(--color-paper)] shadow-sm transition-all duration-200 hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)] max-md:w-full sm:max-md:w-auto max-md:rounded-full max-md:shadow-[0_8px_20px_rgba(0,0,0,0.3)] max-md:border-emerald-600/40"
              numberClassName="text-sm font-semibold text-[var(--color-paper)]"
            />

            {/* Secondary Monograph Link */}
            <Link
              href={`/${lang}#gardens`}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)] max-md:w-full sm:max-md:w-auto max-md:justify-center max-md:rounded-full max-md:border max-md:border-white/20 max-md:bg-white/10 max-md:backdrop-blur-md max-md:px-5 max-md:py-3 max-md:text-[var(--color-paper)] hover:max-md:bg-white/15 max-md:shadow-sm"
            >
              <span className="relative py-1 after:absolute after:bottom-0 after:start-0 after:h-px after:w-full after:origin-start after:scale-x-0 after:bg-[var(--color-clay)] after:transition-transform group-hover:after:scale-x-100 max-md:py-0">
                {dictionary.secondaryCta}
              </span>
              <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true">
                {isRtl ? '←' : '→'}
              </span>
            </Link>
          </div>

          {/* Mobile Plate Monograph Indicator & Fullscreen Lightbox Trigger */}
          <div className="md:hidden mt-6 flex justify-center">
            <ViewerTrigger
              plateId={heroPlate01.id}
              ariaLabel={dictionary.plate01Alt}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[11px] font-mono text-[var(--color-paper-2)]/90 backdrop-blur-md transition-colors hover:bg-black/60 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-sage)]" aria-hidden="true" />
              <span className="text-[var(--color-clay)] font-semibold">
                {isRtl ? 'لوحة ' : 'Plate '}
                {heroPlate01.id}
              </span>
              <span className="text-white/40">·</span>
              <span className="truncate max-w-[200px] text-[10px] uppercase tracking-wider">{heroPlate01.alt?.[lang]}</span>
            </ViewerTrigger>
          </div>

        </div>

        {/* Right Column: Architectural Plate Composition (Desktop Only) */}
        <div className="hidden md:block md:col-span-8 lg:col-span-6 relative mt-12 lg:mt-0">
          
          {/* Main Primary Plate (Plate 42: Wall Climbers & Lawn) */}
          <div className="relative w-full max-w-[460px] mx-auto lg:ms-auto overflow-hidden bg-[var(--color-paper-2)] border border-[var(--color-hairline)] shadow-sm">
            <ViewerTrigger
              plateId={heroPlate01.id}
              ariaLabel={dictionary.plate01Alt}
              className="plate-settle relative block aspect-[4/5] w-full overflow-hidden"
              style={{ '--d': '120ms' } as React.CSSProperties}
            >
              <Image
                src={heroPlate01.file}
                alt={dictionary.plate01Alt}
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 0vw"
                quality={75}
                className="object-cover"
              />
              {/* Paper Curtain for Smooth Entrance */}
              <div
                className="plate-curtain pointer-events-none"
                style={{ '--d': '120ms' } as React.CSSProperties}
              />
            </ViewerTrigger>

            {/* Monograph Plate Caption Strip */}
            <div className="flex items-center justify-between border-t border-[var(--color-hairline)] bg-[var(--color-paper)] px-4 py-2 text-[11px] font-mono text-[var(--color-stone)]">
              <span className="text-[var(--color-clay)] font-semibold">
                {isRtl ? 'لوحة ' : 'Plate '}
                {heroPlate01.id}
              </span>
              <span className="truncate max-w-[240px] text-[10px] uppercase tracking-wider">{heroPlate01.alt?.[lang]}</span>
            </div>
          </div>

          {/* Secondary Overlapping Vignette Plate (Plate 27: Vibrant Blooms & Turf) */}
          {/* Visible on md and desktop, cleanly tucked into the bottom-start corner without overflowing */}
          <div className="hidden md:block absolute -bottom-6 start-4 lg:-bottom-8 lg:start-0 w-[200px] lg:w-[230px] overflow-hidden bg-[var(--color-paper-2)] border-[6px] border-[var(--color-paper)] shadow-[0_16px_36px_rgba(20,32,26,0.14)] z-10 transition-transform duration-300 hover:scale-[1.02]">
            <ViewerTrigger
              plateId={heroPlate02.id}
              ariaLabel={dictionary.plate02Alt}
              className="plate-settle relative block aspect-[4/5] w-full overflow-hidden"
              style={{ '--d': '480ms' } as React.CSSProperties}
            >
              <Image
                src={heroPlate02.file}
                alt={dictionary.plate02Alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 230px, 200px"
                quality={75}
                className="object-cover"
              />
              <div
                className="plate-curtain pointer-events-none"
                style={{ '--d': '480ms' } as React.CSSProperties}
              />
            </ViewerTrigger>

            <div className="flex items-center justify-between border-t border-[var(--color-hairline)] bg-[var(--color-paper)] px-3 py-1.5 text-[10px] font-mono text-[var(--color-stone)]">
              <span className="text-[var(--color-clay)] font-semibold">
                {isRtl ? 'لوحة ' : 'Plate '}
                {heroPlate02.id}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[var(--color-moss)]">
                {isRtl ? 'تفاصيل الحديقة' : 'Detail'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
