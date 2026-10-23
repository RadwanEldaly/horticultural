'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { type Plate } from '@/data/media';
import { type Locale } from '@/lib/i18n';
import { formatIndex } from '@/lib/format';

interface LightboxProps {
  lang: Locale;
  plates: Plate[];
  activePlateId: string;
  onSelectPlate: (id: string) => void;
  onClose: () => void;
  labels: {
    previous: string;
    next: string;
    close: string;
    of: string;
  };
}

export function Lightbox({
  lang,
  plates,
  activePlateId,
  onSelectPlate,
  onClose,
  labels,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const currentIndex = plates.findIndex((p) => p.id === activePlateId);
  const currentPlate = plates[currentIndex] || plates[0];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < plates.length - 1) {
      onSelectPlate(plates[currentIndex + 1].id);
    } else {
      onSelectPlate(plates[0].id);
    }
  }, [currentIndex, plates, onSelectPlate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectPlate(plates[currentIndex - 1].id);
    } else {
      onSelectPlate(plates[plates.length - 1].id);
    }
  }, [currentIndex, plates, onSelectPlate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (isRtl) handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext();
        else handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRtl, handleNext, handlePrev, onClose]);

  const captionText =
    currentPlate.caption?.[lang] || currentPlate.alt?.[lang] || '';

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 m-auto flex h-full max-h-[calc(100dvh-32px)] w-full max-w-5xl flex-col justify-between border border-[var(--color-hairline)] bg-[var(--color-paper)] p-4 sm:p-6 text-[var(--color-ink)] shadow-2xl backdrop:bg-black/60"
    >
      {/* Top Bar: Counter & Close */}
      <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-stone)]">
          <span className="text-[var(--color-clay)] font-mono font-medium">
            Plate {currentPlate.id}
          </span>
          <span>·</span>
          <span className="font-mono">
            {formatIndex(currentIndex + 1)} {labels.of} {formatIndex(plates.length)}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 items-center justify-center px-3 text-xs uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
          aria-label={labels.close}
        >
          {labels.close}
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative my-auto flex h-[65vh] w-full items-center justify-center overflow-hidden">
        <div className="relative h-full w-full max-w-full">
          <Image
            src={currentPlate.file}
            alt={captionText}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            quality={75}
            className="object-contain transition-transform duration-200"
          />
        </div>
      </div>

      {/* Caption & Controls */}
      <div className="flex flex-col gap-4 border-t border-[var(--color-hairline)] pt-3 sm:flex-row sm:items-center sm:justify-between">
        {captionText && (
          <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-ink)] max-w-xl">
            {captionText}
          </p>
        )}

        <div className="flex items-center gap-3 ms-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-9 items-center justify-center border border-[var(--color-hairline)] px-4 text-xs uppercase tracking-widest transition-colors hover:border-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
            aria-label={labels.previous}
          >
            {labels.previous}
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-9 items-center justify-center border border-[var(--color-hairline)] px-4 text-xs uppercase tracking-widest transition-colors hover:border-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
            aria-label={labels.next}
          >
            {labels.next}
          </button>
        </div>
      </div>
    </dialog>
  );
}
