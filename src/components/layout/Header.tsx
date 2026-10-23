import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { siteConfig } from '@/data/site';
import { LanguageSwitch } from './LanguageSwitch';
import { NavMenu } from './NavMenu';
import { CallLink } from './CallLink';

interface HeaderProps {
  lang: Locale;
  dictionary: {
    nav: {
      services: string;
      gardens: string;
      films: string;
      about: string;
      contact: string;
    };
    common: {
      call: string;
      menu: string;
      close: string;
    };
  };
}

export function Header({ lang, dictionary }: HeaderProps) {
  const { nav, common } = dictionary;
  const { descriptor, city, brandName } = siteConfig;

  const navItems = [
    { id: 'services', label: nav.services, href: `/${lang}#services` },
    { id: 'gardens', label: nav.gardens, href: `/${lang}#gardens` },
    { id: 'films', label: nav.films, href: `/${lang}#films` },
    { id: 'about', label: nav.about, href: `/${lang}#about` },
    { id: 'contact', label: nav.contact, href: `/${lang}#contact` },
  ];

  return (
    <>
      {/* 1px Sentinel & Top Anchor for scroll detection */}
      <div id="top" className="h-px w-full -mb-px pointer-events-none" aria-hidden="true" />
      <header className="sticky top-0 z-30 flex h-16 md:h-[72px] w-full items-center justify-between border-b border-[var(--color-hairline)] bg-[var(--color-paper)] px-[var(--spacing-margin)] transition-shadow">
        {/* Wordmark (Inline-start) */}
        <div className="flex flex-col justify-center">
          {brandName && (
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-stone)]">
              {brandName}
            </span>
          )}
          <Link
            href={`/${lang}`}
            className="group flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
          >
            <span className="font-[family-name:var(--font-serif)] text-base md:text-lg font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-clay)]">
              {descriptor[lang]}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[var(--color-stone)]">
              {city[lang]}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation (>=1024px) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-xs uppercase tracking-wider text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)] relative py-1 after:absolute after:bottom-0 after:start-0 after:h-px after:w-full after:origin-start after:scale-x-0 after:bg-[var(--color-clay)] after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Inline-end) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <LanguageSwitch currentLocale={lang} />

          {/* Desktop/Tablet Call Button (>=768px) */}
          <CallLink
            label={common.call}
            className="hidden md:inline-flex items-center justify-center border border-[var(--color-foliage)] bg-[var(--color-paper)] px-4 py-2 text-xs uppercase tracking-wider text-[var(--color-foliage)] transition-[background-color,color,transform] hover:bg-[var(--color-foliage)] hover:text-[var(--color-paper)] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
          />

          {/* Mobile Menu Button (<1024px) */}
          <NavMenu
            menuLabel={common.menu}
            closeLabel={common.close}
            items={navItems}
          />
        </div>
      </header>
    </>
  );
}
