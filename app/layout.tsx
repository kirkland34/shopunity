// app/layout.tsx
import "./globals.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import FooterLinks from "@/components/FooterLinks";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Helps iPhone safe areas */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="bg-white text-black">
        <TopNav />

        {/* Keep page content clear of sticky bars */}
        <main className="mx-auto max-w-screen-sm px-4 pt-16 pb-[calc(env(safe-area-inset-bottom)+80px)]">
          {children}
        </main>

        <FooterLinks />
        <BottomNav />
      </body>
    </html>
  );
}
