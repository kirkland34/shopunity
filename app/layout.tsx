import "./globals.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <TopNav />
        <main className="mx-auto max-w-screen-sm px-4 pt-16 pb-20">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
