// app/layout.tsx
import "./globals.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ShopUnity — Find & Shop Top Stores",
  description: "Browse top US retailers in one place. Fast search, smart links, and seasonal picks.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "ShopUnity",
    description: "Browse top US retailers in one place.",
    url: "https://shopunity.vercel.app",
    siteName: "ShopUnity",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <TopNav />
        <main className="mx-auto max-w-screen-sm px-4 pt-[calc(64px+env(safe-area-inset-top))] pb-[calc(64px+env(safe-area-inset-bottom)+64px)]">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
