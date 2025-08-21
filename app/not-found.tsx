export default function NotFound() {
  return (
    <main className="max-w-screen-sm mx-auto p-6">
      <h1 className="text-xl font-bold mb-2">Page not found</h1>
      <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
      <a className="btn mt-4 inline-block" href="/">Back to Home</a>
    </main>
  );
}
