import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-[var(--spacing-margin)] py-24 text-center">
      <span className="font-mono text-sm text-[var(--color-clay)]">404</span>
      <h1 className="mt-4 font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-[var(--color-ink)]">
        الصفحة غير موجودة · Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-[var(--color-stone)]">
        The requested monograph plate or document could not be located.
      </p>
      <Link
        href="/ar"
        className="mt-8 inline-flex items-center justify-center border border-[var(--color-foliage)] px-6 py-2.5 text-xs uppercase tracking-widest text-[var(--color-foliage)] transition-colors hover:bg-[var(--color-foliage)] hover:text-[var(--color-paper)]"
      >
        العودة للرئيسية · Return Home
      </Link>
    </div>
  );
}
