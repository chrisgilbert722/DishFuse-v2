import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const userCookie = req.cookies.get("next-auth.session-token"); // placeholder
  // We simulate auth using sessionStorage client-side; just allow all for now
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
