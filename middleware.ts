import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { areas } from "@/lib/areas";

const canonical = "https://www.encompasslofts.com";

const exact: Record<string, string> = {
  "/extensions": "/house-extensions-earlsfield/",
  "/extensions/": "/house-extensions-earlsfield/",
  "/interiors": "/home-refurbishments-earlsfield-london/",
  "/interiors/": "/home-refurbishments-earlsfield-london/",
  "/staircases": "/staircases-joinery/",
  "/staircases/": "/staircases-joinery/",
  "/projects": "/portfolio/",
  "/projects/": "/portfolio/",
  "/contact-us": "/contact/",
  "/contact-us/": "/contact/",
};

const projectRenames: Record<string, string> = {
  "elsygne-road": "loft-elsygne-road",
  "brisbane-avenue": "brisbane",
  "arundel-avenue": "arundel-road",
  "richmond-park": "loft-richmond-park-road",
  "earlsfield-road": "loft-earlsfield-road",
  "oxford-avenue": "oxford-road",
  "chatham-close": "kitchen-chatham",
  "wilbury-avenue": "loft-wilbury-avenue",
  "manor-crescent": "loft-manor-crescent",
};

function destination(pathname: string) {
  if (exact[pathname]) return exact[pathname];
  const project = pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (project) return `/project/${projectRenames[project[1]] ?? project[1]}/`;
  const area = pathname.match(/^\/areas\/([^/]+)\/?$/);
  if (area) {
    const found = areas.find((item) => item.slug === area[1]);
    if (found) return `/${found.path}/`;
  }
  return null;
}

function redirectTo(request: NextRequest, pathname: string, search: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = search;
  return NextResponse.redirect(url, 301);
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const { pathname, search } = request.nextUrl;
  const nextPath = destination(pathname);
  const oldHost = host === "encompasslofts.com" || host === "encompasslondon.com" || host === "www.encompasslondon.com";

  if (oldHost) {
    const path = nextPath ?? (pathname.endsWith("/") ? pathname : `${pathname}/`);
    return NextResponse.redirect(`${canonical}${path}${search}`, 301);
  }
  if (nextPath) return redirectTo(request, nextPath, search);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images/|brand/|favicon.ico).*)"],
};
