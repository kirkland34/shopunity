import { NextResponse } from 'next/server';
import { sendToOwners } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name='', email='', message='' } = await req.json().catch(()=>({}));
    if (!name || !email || !message) {
      return NextResponse.json({ ok:false, error:'Missing fields' }, { status:400 });
    }
    const subject = `ShopUnity | Contact from ${name}`;
    const html = `<p><b>${name}</b> &lt;${email}&gt;</p><hr/><p>${message.replace(/\n/g,'<br/>')}</p>`;
    await sendToOwners(subject, html, `${name} <${email}>\n\n${message}`);
    return NextResponse.json({ ok:true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message || 'Server error' }, { status:500 });
  }
}
