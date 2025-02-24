import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticated = request.cookies.get("auth")

  // Protected routes
  const protectedRoutes = ["/survey", "/profile", "/results"]

  // Check if the current path is protected
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }
  }

  // Redirect authenticated users from auth pages to survey
  if (isAuthenticated && (pathname.startsWith("/auth/signin") || pathname.startsWith("/auth/signup"))) {
    return NextResponse.redirect(new URL("/survey", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/survey/:path*", "/profile/:path*", "/results/:path*", "/auth/:path*"],
}

