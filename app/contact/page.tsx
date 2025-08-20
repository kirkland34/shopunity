'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'>('idle');
  const [msg, setMsg] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending'); setMsg('');
    const f = new FormData(e.currentTarget);
    const payload = Object.fromEntries(f.entries());
    const r = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    const j = await r.json();
    if (j.ok) { setStatus('ok'); (e.target as HTMLFormElement).reset(); }
    else { setStatus('err'); setMsg(j.error || 'Failed'); }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={submit} className="space-y-3">
        <input name="name" placeholder="Name" required className="border px-3 py-2 w-full"/>
        <input name="email" type="email" placeholder="Email" required className="border px-3 py-2 w-full"/>
        <textarea name="message" placeholder="Message" required className="border px-3 py-2 w-full" rows={5}/>
        <button disabled={status==='sending'} className="px-4 py-2 border">{status==='sending'?'Sending…':'Send'}</button>
        {status==='ok' && <p>✅ Sent!</p>}
        {status==='err' && <p>❌ {msg}</p>}
      </form>
    </div>
  );
}
