import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Map clean paths → home hash sections (same ids as in components). */
const pathToHash: Record<string, string> = {
  services: "services",
  gallery: "gallery",
  flakes: "flakes",
  process: "process",
  contact: "contact",
  quote: "contact",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const seg = pathname.replace(/^\//, "").replace(/\/$/, "");
  const hash = pathToHash[seg];
  if (!hash) {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  url.pathname = "/";
  url.hash = hash;
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/services",
    "/services/",
    "/gallery",
    "/gallery/",
    "/flakes",
    "/flakes/",
    "/process",
    "/process/",
    "/contact",
    "/contact/",
    "/quote",
    "/quote/",
  ],
};
