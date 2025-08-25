'use client';

import React from 'react';
import Link from 'next/link';
import SavrEntryPoints from '@/components/SavrEntryPoints';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Global SAVR banner + sticky button */}
      <SavrEntryPoints />

      {/* Minimal page content so the build can succeed */}
      <section className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Welcome to ShopUnity</h1>
        <p className="mt-2 text-gray-600">
          Unified retail hub — vendors, deals, orders, and cashback integrations.
        </p>

        <div className="mt-6">
          <Link
            href="/savr-setup"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            <span>Open SAVR setup</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
