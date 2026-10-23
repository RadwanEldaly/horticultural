import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');
  const now = new Date();

  return [
    {
      url: `${baseUrl}/ar`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/gallery`,
          en: `${baseUrl}/en/gallery`,
          'x-default': `${baseUrl}/ar/gallery`,
        },
      },
    },
    {
      url: `${baseUrl}/en/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/gallery`,
          en: `${baseUrl}/en/gallery`,
          'x-default': `${baseUrl}/ar/gallery`,
        },
      },
    },
  ];
}
