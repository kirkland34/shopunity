// app/layout.tsx
import "./globals.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

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
