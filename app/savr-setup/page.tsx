import Link from "next/link";

export default function SavrSetupPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold">SAVR setup (Placeholder)</h1>
      <p className="mt-2 text-gray-600">
        Reserve this space to connect ShopUnity to your SAVR cashback + vendor network. We’ll wire real endpoints when you’re ready.
      </p>
</main>
  );
}
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <Card title="Merchant Keys" desc="Save your SAVR Merchant ID, API key, webhook secret." cta="Add credentials" />
        <Card title="Payout Wallet" desc="Connect bank account or stablecoin wallet for payouts." cta="Connect wallet" />
        <Card title="Deal Feed Sync" desc="Map ShopUnity deal schema to SAVR’s network feed." cta="Map fields" />
        <Card title="Cashback Ledger" desc="Preview transactions, commissions, partner splits." cta="Open ledger" />
      </section>

      <section className="mt-8 rounded-xl border border-dashed border-gray-300 p-4 text-sm text-gray-700">
        <p className="font-medium">Next wiring steps (when ready):</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Create <code className="rounded bg-gray-100 px-1">/api/savr/webhook</code> for event intake (order.created, payout.updated).</li>
          <li>Connect OAuth/SSO for vendors via SAVR Auth or magic link.</li>
          <li>Implement <code className="rounded bg-gray-100 px-1">/api/savr/deals</code> sync + scheduler (CRON/Vercel).</li>
          <li>Add reporting: net revenue, cashback liability, partner earnings.</li>
        </ol>
      </section>

      <div className="mt-6">
        <Link href="/" className="text-sm font-medium underline underline-offset-4">← Back to Home</Link>
      </div>
    </main>
  );
}

function Card({ title, desc, cta }: { title: string; desc: string; cta: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-4 shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <button className="mt-3 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:border-gray-400">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        {cta}
      </button>
    </div>
  );
}
