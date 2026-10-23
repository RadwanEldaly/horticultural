import { CallLink } from './CallLink';

interface StickyCallBarProps {
  label: string;
}

export function StickyCallBar({ label }: StickyCallBarProps) {
  return (
    <aside
      aria-label={label}
      className="fixed inset-x-0 bottom-0 z-40 bg-[var(--color-foliage)] text-[var(--color-paper)] md:hidden pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_0_var(--color-hairline)]"
    >
      <CallLink
        showNumber
        label={label}
        className="flex h-14 w-full items-center justify-center gap-3 px-4 text-center text-sm font-medium tracking-wide"
      />
    </aside>
  );
}
