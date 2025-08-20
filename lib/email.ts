import { Resend } from 'resend';
export const owners = (process.env.OWNER_EMAILS || '').split(',').map(s=>s.trim()).filter(Boolean);
export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendToOwners(subject: string, html: string, text?: string) {
  if (!process.env.MAIL_FROM) throw new Error('MAIL_FROM missing');
  if (!owners.length) throw new Error('OWNER_EMAILS missing');
  return await resend.emails.send({ from: process.env.MAIL_FROM!, to: owners, subject, html, text });
}
