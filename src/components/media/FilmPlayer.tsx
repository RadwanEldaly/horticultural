'use client';

import React, { useEffect, useRef } from 'react';
import { type Film } from '@/data/media';

interface FilmPlayerProps {
  films: Film[];
  activeFilmId: string;
  onClose: () => void;
  closeLabel: string;
}

export function FilmPlayer({
  films,
  activeFilmId,
  onClose,
  closeLabel,
}: FilmPlayerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const film = films.find((f) => f.id === activeFilmId) || films[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    const video = videoRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    if (video) {
      video.src = film.file;
      video.poster = film.poster;
      video.muted = true;
      video.playsInline = true;
      video.controls = true;
      video.preload = 'metadata';
      video.play().catch(() => {
        // Autoplay may be restricted in some environments; controls are visible
      });
    }

    return () => {
      // Effect cleanup cancels buffering per Cache Components rules
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, [film]);

  const handleClose = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
    onClose();
  };

  const isSquare = film.aspect === '1:1';
  const aspectClass = isSquare ? 'aspect-square' : 'aspect-[9/16]';

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
      className="fixed inset-0 m-auto flex max-h-[calc(100dvh-32px)] max-w-lg flex-col items-center justify-center border border-[var(--color-hairline)] bg-[var(--color-night)] p-4 text-[var(--color-paper)] shadow-2xl backdrop:bg-black/75"
    >
      <div className="flex w-full items-center justify-between border-b border-[var(--color-hairline)] pb-3 text-xs uppercase tracking-widest text-[var(--color-sage)]">
        <span>Film {film.id}</span>
        <button
          type="button"
          onClick={handleClose}
          className="flex h-8 items-center justify-center px-3 text-[var(--color-paper)] transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-paper)]"
          aria-label={closeLabel}
        >
          {closeLabel}
        </button>
      </div>

      <div
        className={`relative mt-4 flex w-auto max-w-full items-center justify-center ${aspectClass}`}
        style={{
          maxHeight: 'min(calc(100dvh - 120px), 850px)',
        }}
      >
        <video
          ref={videoRef}
          className="h-full w-auto max-h-full max-w-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </dialog>
  );
}
