import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/about', '/products', '/contact', '/blog', '/login', '/signup'];
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith('/blog/'));

  // If accessing auth routes while logged in, redirect to dashboard
  if (accessToken && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If accessing protected routes without token, redirect to login
  if (!accessToken && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};