import { NextResponse } from 'next/server';

export async function GET() {
  const ownersCount = (process.env.OWNER_EMAILS || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean).length;

  return NextResponse.json({
    hasKey: !!process.env.RESEND_API_KEY,
    hasFrom: !!process.env.MAIL_FROM,
    ownersCount
  });
}
