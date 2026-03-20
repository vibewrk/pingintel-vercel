import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_NAME = 'ping_auth'
const AUTH_PATH = '/site-auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // For the auth page itself, flag it so the root layout can skip Header/Footer
  if (pathname.startsWith(AUTH_PATH)) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-is-auth-page', '1')
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Skip auth for static/api assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  const isAuthenticated = request.cookies.get(COOKIE_NAME)?.value === '1'

  if (!isAuthenticated) {
    const url = request.nextUrl.clone()
    url.pathname = AUTH_PATH
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf)).*)'],
}
