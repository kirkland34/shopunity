// app/savr-debug/page.tsx
import SavrTile from "@/components/SavrTile";

export default function SavrDebugPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">SAVR Debug</h1>
      <div className="mt-4">
        <SavrTile />
      </div>
    </main>
  );
}
