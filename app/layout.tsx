export const metadata = { title: 'ShopUnity', description: 'Unified shopping hub' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily:'system-ui,Segoe UI,Arial'}}>
        <nav style={{display:'flex',gap:12,padding:16,borderBottom:'1px solid #eee'}}>
          <a href="/">Home</a>
          <a href="/stores">Stores</a>
          <a href="/contact">Contact</a>
        </nav>
        <main style={{padding:24,maxWidth:960,margin:'0 auto'}}>{children}</main>
      </body>
    </html>
  );
}
