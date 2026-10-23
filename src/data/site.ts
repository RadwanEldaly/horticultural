export interface SiteConfig {
  siteUrl: string;
  siteUrlConfirmed: boolean;
  brandName: string;
  phone: {
    display: string;
    tel: string;
    whatsapp: string;
    confirmed: boolean;
  };
  city: {
    ar: string;
    en: string;
  };
  descriptor: {
    ar: string;
    en: string;
  };
}

export const siteConfig: SiteConfig = {
  // Centralized production origin for canonical URLs, hreflang, OG metadata, sitemap & robots.
  // Override via NEXT_PUBLIC_SITE_URL environment variable when the verified domain is assigned.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://klika-nursery.sa',
  siteUrlConfirmed: false,
  brandName: '',
  phone: {
    display: '056 690 2367',
    tel: '+966566902367',
    whatsapp: '+966566902367',
    confirmed: true,
  },
  city: {
    ar: 'الرياض',
    en: 'Riyadh',
  },
  descriptor: {
    ar: 'مشتل زراعي',
    en: 'Agricultural Nursery',
  },
};
