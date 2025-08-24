import Link from "next/link";

export default function SavrTile() {
  return (
    <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">SAVR setup</h3>
          <p className="mt-1 text-sm text-gray-600">
            Connect your cashback network and vendor SSO. View ledger & payouts.
          </p>
        </div>
        <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold tracking-wider text-white">PLACEHOLDER</span>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
        <li>Add Merchant ID, API key, webhook secret</li>
        <li>Connect bank / stablecoin payout wallet</li>
        <li>Sync deal feed & affiliate tracking</li>
        <li>Preview cashback ledger</li>
      </ul>

      <Link
        href="/savr-setup"
        className="mt-4 inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
      >
        Open SAVR setup
      </Link>
    </div>
  );
}
