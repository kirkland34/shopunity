// app/layout.tsx
import "./globals.css";
import TopNav from "@/components/TopNav";
import "./globals.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import FooterLinks from "@/components/FooterLinks"; // ← add this
import type { ReactNode } from "react";
// (If you have Script/head from earlier, keep them as-is)

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* keep your existing head/meta/scripts */}
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

        {/* NEW: tiny legal links strip */}
        <FooterLinks />

        <BottomNav />
      </body>
    </html>
  );
}

import BottomNav from "@/components/BottomNav";
import Script from "next/script";
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

        {/*
          === PICK ONE (uncomment exactly one) ===

          1) SKIMLINKS — replace 12345YOURPUBLISHERID with your real Publisher ID
          <Script
            id="skimlinks"
            strategy="afterInteractive"
            src="https://s.skimresources.com/js/12345YOURPUBLISHERID.skimlinks.js"
          />

          2) SOVRN //COMMERCE (VigLink) — replace YOUR_SOVRN_API_KEY with your real key
          <Script id="sovrn-commerce" strategy="afterInteractive">
            {`
              var vglnk = { key: 'YOUR_SOVRN_API_KEY' };
              (function(d, t) {
                var s = d.createElement(t); s.type = 'text/javascript'; s.async = true;
                s.src = '//cdn.viglink.com/api/vglnk.js';
                var r = d.getElementsByTagName(t)[0]; r.parentNode.insertBefore(s, r);
              }(document, 'script'));
            `}
          </Script>
        */}
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
        <BottomNav />
      </body>
    </html>
  );
}
