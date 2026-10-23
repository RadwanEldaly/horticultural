'use client';

import React from 'react';
import { useViewer } from './ViewerProvider';

interface ViewerTriggerProps {
  plateId?: string;
  filmId?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function ViewerTrigger({
  plateId,
  filmId,
  ariaLabel,
  className = '',
  style,
  children,
}: ViewerTriggerProps) {
  const { openPlate, openFilm } = useViewer();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (plateId) openPlate(plateId);
    else if (filmId) openFilm(filmId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      style={style}
      className={`block w-full text-start cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)] ${className}`}
    >
      {children}
    </button>
  );
}
