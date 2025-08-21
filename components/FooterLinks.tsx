"use client";

export default function FooterLinks() {
  return (
    <footer className="text-center text-[13px] text-gray-500 py-3 mb-[68px]">
      <a href="/disclosure" className="underline hover:opacity-90">Disclosure</a>
      <span className="mx-2">•</span>
      <a href="/privacy" className="underline hover:opacity-90">Privacy</a>
      <span className="mx-2">•</span>
      <a href="/terms" className="underline hover:opacity-90">Terms</a>
    </footer>
  );
}
