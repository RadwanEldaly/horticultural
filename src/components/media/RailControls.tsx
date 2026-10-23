'use client';

import React from 'react';

interface RailControlsProps {
  railId: string;
  labels: {
    previous: string;
    next: string;
  };
}

export function RailControls({ railId, labels }: RailControlsProps) {
  const scroll = (direction: 'next' | 'prev') => {
    const rail = document.getElementById(railId);
    if (!rail) return;

    const card = rail.querySelector('div');
    const step = card ? card.offsetWidth + 16 : 320;
    const isReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    rail.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: isReduce ? 'instant' : 'smooth',
    });
  };

  return (
    <div className="hidden [@media(hover:hover)]:flex items-center gap-3">
      <button
        type="button"
        onClick={() => scroll('prev')}
        className="flex h-10 w-10 items-center justify-center border border-[var(--color-hairline)] text-[var(--color-paper)] transition-colors hover:border-[var(--color-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-paper)]"
        aria-label={labels.previous}
      >
        <span aria-hidden="true">&larr;</span>
      </button>
      <button
        type="button"
        onClick={() => scroll('next')}
        className="flex h-10 w-10 items-center justify-center border border-[var(--color-hairline)] text-[var(--color-paper)] transition-colors hover:border-[var(--color-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-paper)]"
        aria-label={labels.next}
      >
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
