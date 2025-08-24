import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"; // <- add this line

export const metadata: Metadata = {
  title: "ShopUnity",
  description: "Unified retail hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />      {/* <- renders top nav globally */}
        {children}
      </body>
    </html>
  );
}
