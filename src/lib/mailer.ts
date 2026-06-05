export type ContactEmailParams = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export function buildContactEmailHtml(params: ContactEmailParams): string {
  const { name, email, company, service, message } = params

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#1e293b;background:#ffffff;">
  <div style="border-bottom:3px solid #2563eb;padding-bottom:16px;margin-bottom:24px;">
    <h2 style="margin:0;font-size:20px;color:#1e293b;">New Consulting Inquiry</h2>
    <p style="margin:4px 0 0;font-size:14px;color:#64748b;">Submitted via rmwllc-consulting.com</p>
  </div>

  <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
    <tr>
      <td style="padding:8px 0;font-size:13px;font-weight:600;color:#64748b;width:110px;vertical-align:top;">Name</td>
      <td style="padding:8px 0;font-size:14px;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;font-size:13px;font-weight:600;color:#64748b;vertical-align:top;">Email</td>
      <td style="padding:8px 0;font-size:14px;">
        <a href="mailto:${escapeHtml(email)}" style="color:#2563eb;">${escapeHtml(email)}</a>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 0;font-size:13px;font-weight:600;color:#64748b;vertical-align:top;">Company</td>
      <td style="padding:8px 0;font-size:14px;">${escapeHtml(company) || '—'}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;font-size:13px;font-weight:600;color:#64748b;vertical-align:top;">Service</td>
      <td style="padding:8px 0;font-size:14px;">${escapeHtml(service) || '—'}</td>
    </tr>
  </table>

  <h3 style="font-size:14px;font-weight:600;color:#1e293b;margin-bottom:8px;">Message</h3>
  <div style="background:#f8fafc;border-left:3px solid #2563eb;padding:16px;border-radius:4px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>

  <p style="margin-top:32px;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;padding-top:16px;">
    Reply directly to this email — the reply-to is set to the sender's address.
  </p>
</body>
</html>`
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}
