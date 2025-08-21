// components/FooterLinks.tsx
export default function FooterLinks() {
  return (
    <div className="mx-auto max-w-screen-sm px-4 py-3 text-xs text-neutral-500 flex items-center justify-center gap-3">
      <a href="/disclosure" className="underline hover:no-underline">Disclosure</a>
      <span>•</span>
      <a href="/privacy" className="underline hover:no-underline">Privacy</a>
      <span>•</span>
      <a href="/terms" className="underline hover:no-underline">Terms</a>
    </div>
  );
}
