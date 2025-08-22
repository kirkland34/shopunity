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
        {/* iPhone safe areas */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="bg-white text-black">
        <TopNav />
        <main
          className="
            mx-auto max-w-screen-sm px-4
            pt-[calc(64px+env(safe-area-inset-top))]
            pb-[calc(64px+env(safe-area-inset-bottom)+64px)]
          "
        >
          {children}
        </main>
        <FooterLinks />
        <BottomNav />
      </body>
    </html>
  );
}
