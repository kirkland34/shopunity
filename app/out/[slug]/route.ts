// app/out/[slug]/route.ts
import { NextResponse } from "next/server";
import { getStore } from "@/data/stores";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const store = getStore(params.slug);
  if (!store) {
    return NextResponse.redirect(new URL("/stores", req.url));
  }

  // TODAY: pass-through to the raw store URL.
  // LATER: once you're approved for a direct program,
  // add that store's affiliate tracking here.
  return NextResponse.redirect(store.url, { status: 302 });
}
