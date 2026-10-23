'use client';

import { useRef } from 'react';
import Link from 'next/link';

interface NavMenuProps {
  menuLabel: string;
  closeLabel: string;
  items: {
    id: string;
    label: string;
    href: string;
  }[];
}

export function NavMenu({ menuLabel, closeLabel, items }: NavMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="flex h-10 items-center justify-center border border-[var(--color-hairline)] px-3 text-xs uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)] lg:hidden"
        aria-label={menuLabel}
      >
        {menuLabel}
      </button>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeDialog();
        }}
        className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-lg max-h-[calc(100dvh-32px)] overflow-y-auto rounded-none border border-[var(--color-hairline)] bg-[var(--color-paper)] p-8 text-[var(--color-ink)] shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-none"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-4">
          <span className="text-xs uppercase tracking-widest text-[var(--color-stone)]">
            {menuLabel}
          </span>
          <button
            type="button"
            onClick={closeDialog}
            className="flex h-9 items-center justify-center px-3 text-xs uppercase tracking-widest transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
            aria-label={closeLabel}
          >
            {closeLabel}
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile Navigation">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={closeDialog}
              className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </dialog>
    </>
  );
}
