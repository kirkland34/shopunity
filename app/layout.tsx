// app/layout.tsx
import "./globals.css";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

export const metadata = { title: "ShopUnity", description: "Unified shopping hub" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mobile-wrap">
          <TopNav />
          <main className="flex-1">{children}</main>
          <div className="spacer" />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
