// app/out/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { STORES } from "@/data/stores";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const store = STORES.find((s) => s.slug === params.slug);

  // If slug not found, send them back to Stores with a hint
  if (!store) {
    const fallback = new URL("/stores?notfound=1", req.url);
    return NextResponse.redirect(fallback, 302);
  }

  // Build the destination URL and preserve any existing query params
  const dest = new URL(store.url);

  // Add UTM defaults only if they aren't already present
  const utmDefaults: Record<string, string> = {
    utm_source: "shopunity",
    utm_medium: "referral",
    utm_campaign: "store_clicks",
    utm_content: params.slug,
  };
  for (const [key, value] of Object.entries(utmDefaults)) {
    if (!dest.searchParams.has(key)) dest.searchParams.set(key, value);
  }

  // (Optional) forward selected inbound params like ?q to the retailer
  // This won't overwrite anything already on the destination URL
  const forwardable = new Set(["q", "search", "utm_term"]);
  req.nextUrl.searchParams.forEach((value, key) => {
    if (forwardable.has(key) && !dest.searchParams.has(key)) {
      dest.searchParams.set(key, value);
    }
  });

  return NextResponse.redirect(dest.toString(), 302);
}
