import SavrTile from "../components/SavrTile";


import React, { useState } from "react";

// Single‑file React page you can drop into Next.js `app/page.tsx`.
// TailwindCSS required. No external UI libs. Icons are inline SVGs.
// Includes a visible "SAVR setup" placeholder (nav item + hero card + modal).

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white shadow-sm">
              {/* ShopUnity logo placeholder */}
              <span className="text-xs font-semibold tracking-wider">SU</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-base font-semibold">ShopUnity</h1>
              <p className="text-xs text-gray-500">Unified retail hub</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            <NavBtn label="Home" active />
            <NavBtn label="Vendors" />
            <NavBtn label="Deals" />
            <NavBtn label="Orders" />
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow md:ml-2"
              title="Open SAVR setup placeholder"
            >
              <BadgeDot />
              <span>SAVR setup</span>
              <span className="rounded-full bg-black px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">new</span>
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm"
          >
            <BadgeDot />
            <span>SAVR</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Run all your shops in one place</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Manage vendors, publish deals, track orders, and plug into cashback with SAVR.</p>

            {/* KPI cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <KPI title="Active Vendors" value="128" trend="+6 this week" />
              <KPI title="Live Deals" value="342" trend="+18 today" />
              <KPI title="Orders (24h)" value="1,204" trend="+12% vs. avg" />
              <KPI title="Cashback Payouts" value="$8,430" trend="-3% vs. avg" />
            </div>
          </div>

          {/* SAVR setup tile */}
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">SAVR setup</h3>
                <p className="mt-1 text-sm text-gray-600">Reserve this space to connect ShopUnity to your SAVR cashback + vendor network.</p>
              </div>
              <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">placeholder</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Connect SAVR merchant keys & payout wallet</li>
              <li>Enable universal login (SSO) for vendors</li>
              <li>Sync deal feed & affiliate tracking</li>
              <li>Preview cashback ledger & reports</li>
            </ul>
            <button
              onClick={() => setOpen(true)}
              className="mt-5 w-full rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px] hover:shadow-md"
            >
              Open SAVR setup modal
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAction title="Add Vendor" subtitle="Create and verify" />
          <QuickAction title="Publish Deal" subtitle="Add price & dates" />
          <QuickAction title="Import Catalog" subtitle="CSV / API" />
          <QuickAction title="Track Payouts" subtitle="Reconcile" />
        </div>

        {/* Tables */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <MiniTable
            title="Latest Deals"
            headers={["Title", "Vendor", "Status", "Ends"]}
            rows={[
              ["Back‑to‑School 15% off", "PaperPlus", "Live", "Aug 31"],
              ["BOGO Sneakers", "StrideCo", "Scheduled", "Sep 05"],
              ["2‑for‑1 Burgers", "BurgerBarn", "Live", "Aug 25"],
              ["$10 Off Oil Change", "AutoCare Pro", "Draft", "—"],
            ]}
          />
          <MiniTable
            title="Recent Orders"
            headers={["Order", "Channel", "Amount", "Cashback"]}
            rows={[
              ["#94821", "Web", "$84.33", "$4.21"],
              ["#94820", "iOS", "$129.99", "$6.50"],
              ["#94819", "Android", "$43.10", "$2.15"],
              ["#94818", "Web", "$312.00", "$15.60"],
            ]}
          />
        </div>
      </section>
          {/* ==== SAVR setup tile (added) ==== */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
  <SavrTile />
</section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ShopUnity</p>
          <div className="flex items-center gap-3">
            <a className="hover:text-gray-800" href="#">Terms</a>
            <a className="hover:text-gray-800" href="#">Privacy</a>
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 shadow-sm hover:border-gray-400">
              <BadgeDot /> <span>Open SAVR setup</span>
            </button>
          </div>
        </div>
      </footer>

      {/* SAVR Setup Modal (placeholder) */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">SAVR setup (Placeholder)</h3>
                <p className="mt-1 text-sm text-gray-600">This is a non‑functional preview to reserve space and flows for your SAVR integration. We’ll wire real endpoints when you’re ready.</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-2 transition hover:bg-gray-100">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <PlaceholderCard
                title="Merchant Keys"
                desc="Save your SAVR Merchant ID, API key, webhook secret."
                cta="Add credentials"
              />
              <PlaceholderCard
                title="Payout Wallet"
                desc="Configure bank account or stablecoin wallet for cashback payouts."
                cta="Connect wallet"
              />
              <PlaceholderCard
                title="Deal Feed Sync"
                desc="Map ShopUnity deal schema to SAVR’s network feed."
                cta="Map fields"
              />
              <PlaceholderCard
                title="Cashback Ledger"
                desc="Preview transactions, commissions, and partner splits."
                cta="Open ledger"
              />
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-4 text-sm text-gray-600">
              <p className="font-medium">Next wiring steps (when ready):</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>Create <code className="rounded bg-gray-100 px-1">/api/savr/webhook</code> for event intake (order.created, payout.updated).</li>
                <li>Connect OAuth/SSO for vendors via SAVR Auth or magic link.</li>
                <li>Implement <code className="rounded bg-gray-100 px-1">/api/savr/deals</code> sync + scheduler (CRON/Vercel). </li>
                <li>Add reporting: net revenue, cashback liability, partner earnings.</li>
              </ol>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-gray-500">This modal is a visual placeholder only.</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:border-gray-400"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("This is a placeholder. We can turn it into a real /savr-setup page next.")}
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow hover:translate-y-[-1px] hover:shadow-md"
                >
                  Looks good — keep placeholder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function NavBtn({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition " +
        (active
          ? "bg-black text-white shadow"
          : "border border-gray-300 bg-white text-gray-800 shadow-sm hover:-translate-y-0.5 hover:border-gray-400 hover:shadow")
      }
    >
      <span>{label}</span>
    </button>
  );
}

function KPI({ title, value, trend }: { title: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-gray-500">{trend}</span>
      </div>
    </div>
  );
}

function QuickAction({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <button className="group rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gray-900 text-white shadow-sm">
          {/* icon */}
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
    </button>
  );
}

function MiniTable({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <h4 className="font-semibold">{title}</h4>
        <button className="text-sm text-gray-600 underline-offset-2 hover:underline">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((h) => (
                <th key={h} className="whitespace-nowrap px-5 py-3 text-left font-medium text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50/60">
                {r.map((c, j) => (
                  <td key={j} className="whitespace-nowrap px-5 py-3">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PlaceholderCard({ title, desc, cta }: { title: string; desc: string; cta: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <button className="mt-3 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-gray-400">
        <BadgeDot />
        <span>{cta}</span>
      </button>
    </div>
  );
}

function BadgeDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>
  );
}
