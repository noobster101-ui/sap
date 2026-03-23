import { getAdminSessionMiddleware } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/admin") && !pathname.includes("/login")) {
    const session = getAdminSessionMiddleware(request);
    if (!session) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/admin/((?!login|_next/static|_next/image|favicon.ico|api).*)",
  ],
};
