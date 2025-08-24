import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold tracking-wide">SHOPUNITY</span>
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:opacity-80">Home</Link>
          <Link href="/stores" className="text-sm font-medium hover:opacity-80">Stores</Link>
          <Link href="/contact" className="text-sm font-medium hover:opacity-80">Contact</Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Bell icon (optional) */}
          <button
            type="button"
            aria-label="Notifications"
            className="hidden rounded-full p-2 hover:bg-gray-100 md:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.918 18 13V9a6 6 0 10-12 0v4c0 .918-.21 1.79-.595 2.595L4 17h5" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>

          {/* SAVR setup link */}
          <Link
            href="/savr-setup"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:border-gray-400"
            title="Open SAVR setup"
          >
            {/* pulsing dot */}
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>SAVR setup</span>
            <span className="rounded-full bg-black px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-white">
              NEW
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
