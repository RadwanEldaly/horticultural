import {
  Newsreader,
  Noto_Naskh_Arabic,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google';

export const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
});

export const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-naskh',
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-plex',
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-plex-ar',
});

export const fontVariables = `${newsreader.variable} ${notoNaskh.variable} ${ibmPlexSans.variable} ${ibmPlexSansArabic.variable}`;
