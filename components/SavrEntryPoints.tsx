import Link from "next/link";

export default function SavrEntryPoints() {
  return (
    <>
      {/* ===== DEBUG SAVR BANNER (remove later) ===== */}
      <div id="savr-debug-banner" className="mx-auto max-w-7xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
          <div className="text-emerald-800 text-sm">
            DEBUG: SAVR entry points are loaded on this build.
          </div>
          <Link
            href="/savr-setup"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span>Open SAVR setup</span>
          </Link>
        </div>
      </div>

      {/* ===== STICKY SAVR BUTTON (remove later) ===== */}
      <div
        id="savr-sticky"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] mx-auto w-fit"
      >
        <Link
          href="/savr-setup"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-white shadow-lg hover:bg-emerald-700"
        >
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          <span>Open SAVR setup</span>
        </Link>
      </div>
    </>
  );
}
