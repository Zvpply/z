import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  if (hostname === 'zvpply.com' || hostname === 'www.zvpply.com') {
    const url = new URL(request.url)
    url.hostname = 'zachmcnair.com'
    return NextResponse.redirect(url.toString(), 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/(.*)',
}

