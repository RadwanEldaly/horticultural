import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, getDirection, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { fontVariables } from '@/lib/fonts';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCallBar } from '@/components/layout/StickyCallBar';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { FloralBackground } from '@/components/layout/FloralBackground';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const descriptor = siteConfig.descriptor[lang];
  const city = siteConfig.city[lang];
  const pageTitle = `${descriptor} · ${city}`;
  const pageDescription = dict.about.statement;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ar: '/ar',
        en: '/en',
        'x-default': '/ar',
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `/${lang}`,
      siteName: descriptor,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: lang === 'ar' ? 'en_US' : 'ar_SA',
      type: 'website',
      images: [
        {
          url: '/media/img/plate-42-v1.jpg',
          width: 1080,
          height: 1394,
          alt: dict.hero.plate01Alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/media/img/plate-42-v1.jpg'],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dir = getDirection(locale);
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} dir={dir} className={fontVariables} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] antialiased pb-16 md:pb-0">
        {/* Skip to Content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:bg-[var(--color-foliage)] focus:text-[var(--color-paper)] focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:outline-none"
        >
          {dictionary.common.skipToContent}
        </a>

        <Header lang={locale} dictionary={dictionary} />

        <main id="main-content" tabIndex={-1} className="relative isolate focus:outline-none">
          <FloralBackground />
          {children}
        </main>

        <Footer lang={locale} dictionary={dictionary} />

        {/* Global Floating WhatsApp Quick Action Button */}
        <WhatsAppButton
          mode="floating"
          label={dictionary.common.whatsapp || 'WhatsApp'}
        />

        <StickyCallBar label={dictionary.common.call} />
      </body>
    </html>
  );
}
