'use client';

import React, { createContext, useContext, useState, useCallback, useTransition } from 'react';
import { type Plate, type Film } from '@/data/media';
import { type Locale } from '@/lib/i18n';
import { Lightbox } from './Lightbox';
import { FilmPlayer } from './FilmPlayer';

interface ViewerContextType {
  openPlate: (plateId: string) => void;
  openFilm: (filmId: string) => void;
  closeViewer: () => void;
}

const ViewerContext = createContext<ViewerContextType | null>(null);

export function useViewer() {
  const context = useContext(ViewerContext);
  if (!context) {
    throw new Error('useViewer must be used within a ViewerProvider');
  }
  return context;
}

interface ViewerProviderProps {
  lang: Locale;
  plates: Plate[];
  films: Film[];
  labels: {
    previous: string;
    next: string;
    close: string;
    of: string;
  };
  children: React.ReactNode;
}

export function ViewerProvider({
  lang,
  plates,
  films,
  labels,
  children,
}: ViewerProviderProps) {
  const [activePlateId, setActivePlateId] = useState<string | null>(null);
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const openPlate = useCallback((plateId: string) => {
    startTransition(() => {
      setActiveFilmId(null);
      setActivePlateId(plateId);
    });
  }, []);

  const openFilm = useCallback((filmId: string) => {
    startTransition(() => {
      setActivePlateId(null);
      setActiveFilmId(filmId);
    });
  }, []);

  const closeViewer = useCallback(() => {
    startTransition(() => {
      setActivePlateId(null);
      setActiveFilmId(null);
    });
  }, []);

  return (
    <ViewerContext.Provider value={{ openPlate, openFilm, closeViewer }}>
      {children}
      {activePlateId && (
        <Lightbox
          lang={lang}
          plates={plates}
          activePlateId={activePlateId}
          onSelectPlate={setActivePlateId}
          onClose={closeViewer}
          labels={labels}
        />
      )}
      {activeFilmId && (
        <FilmPlayer
          films={films}
          activeFilmId={activeFilmId}
          onClose={closeViewer}
          closeLabel={labels.close}
        />
      )}
    </ViewerContext.Provider>
  );
}
