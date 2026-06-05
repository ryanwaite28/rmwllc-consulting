import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { buildContactEmailHtml } from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company = '', service = '', message } = body as Record<string, string>

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transportConfig: nodemailer.TransportOptions = {
      host: process.env.SMTP_HOST ?? 'email-mailpit.email-mailpit.svc.cluster.local',
      port: parseInt(process.env.SMTP_PORT ?? '1025'),
      secure: false,
      ...(process.env.SMTP_USER
        ? { auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } }
        : {}),
    } as nodemailer.TransportOptions

    const transporter = nodemailer.createTransport(transportConfig)

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? 'noreply@rmwllc-consulting.com',
      to: process.env.CONTACT_EMAIL ?? 'ryanwaite28@gmail.com',
      replyTo: email,
      subject: `New Consulting Inquiry from ${name.trim()}${company ? ` — ${company.trim()}` : ''}`,
      html: buildContactEmailHtml({ name, email, company, service, message }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] form submission error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
