import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { siteConfig } from '@/data/site';
import { LanguageSwitch } from './LanguageSwitch';
import { CallLink } from './CallLink';

interface FooterProps {
  lang: Locale;
  dictionary: {
    common: {
      backToTop: string;
      call: string;
    };
  };
}

export function Footer({ lang, dictionary }: FooterProps) {
  const { common } = dictionary;
  const { descriptor, city } = siteConfig;

  return (
    <footer className="border-t border-[var(--color-hairline)] bg-[var(--color-paper)] py-12 px-[var(--spacing-margin)] text-xs text-[var(--color-stone)]">
      <div className="mx-auto flex max-w-[var(--container-wrap)] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-[family-name:var(--font-serif)] text-base text-[var(--color-ink)]">
            {descriptor[lang]}
          </span>
          <span className="text-[11px] uppercase tracking-wider">{city[lang]}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <CallLink
            showNumber
            label={common.call}
            className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
          />

          <LanguageSwitch currentLocale={lang} />

          <Link
            href="#top"
            className="text-[var(--color-stone)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
            aria-label={common.backToTop}
          >
            {common.backToTop}
          </Link>
        </div>
      </div>
    </footer>
  );
}
