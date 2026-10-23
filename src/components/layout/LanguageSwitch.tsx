'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';

interface LanguageSwitchProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitch({ currentLocale, className = '' }: LanguageSwitchProps) {
  const pathname = usePathname() || `/${currentLocale}`;
  const otherLocale: Locale = currentLocale === 'ar' ? 'en' : 'ar';
  const otherLangLabel = currentLocale === 'ar' ? 'English' : 'العربية';

  // Compute other-locale link
  let otherPath = pathname;
  if (pathname.startsWith(`/${currentLocale}`)) {
    otherPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
  } else {
    otherPath = `/${otherLocale}${pathname}`;
  }

  const handleClick = () => {
    // Store in cookie
    document.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=31536000; SameSite=Lax`;
    // Add data-switching to html
    document.documentElement.setAttribute('data-switching', 'true');
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      document.documentElement.removeAttribute('data-switching');
    }, 400);
  };

  return (
    <Link
      href={otherPath}
      onClick={handleClick}
      lang={otherLocale}
      dir={otherLocale === 'ar' ? 'rtl' : 'ltr'}
      className={`text-xs uppercase tracking-wider transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)] ${className}`}
      aria-label={`Switch to ${otherLangLabel}`}
    >
      {otherLangLabel}
    </Link>
  );
}
