import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, isLocale } from './lib/i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets and system files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/media') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 1. Check cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  let targetLocale = defaultLocale;

  if (cookieLocale && isLocale(cookieLocale)) {
    targetLocale = cookieLocale;
  } else {
    // 2. Check Accept-Language
    const acceptLanguage = request.headers.get('accept-language') || '';
    if (acceptLanguage.toLowerCase().includes('en') && !acceptLanguage.toLowerCase().startsWith('ar')) {
      targetLocale = 'en';
    }
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${targetLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(redirectUrl);
}

export const middleware = proxy;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|media|favicon.ico).*)'],
};
