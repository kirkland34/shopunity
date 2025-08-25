import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import SavrEntryPoints from "@/components/SavrEntryPoints";

export const metadata: Metadata = {
  title: "ShopUnity",
  description: "Unified retail hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Global top nav (ok to keep as-is if you already had it) */}
        <Navbar />

        {/* ⬇️ Always-visible SAVR entry points (banner + sticky button) */}
        <SavrEntryPoints />

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
