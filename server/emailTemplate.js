const INDUSTRY_LABELS = {
  hospitality: 'Hospitality',
  service: 'Service industries',
  other: 'Other',
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fieldRow(label, value) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e8e4e0;color:#555;font-size:13px;font-weight:600;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e8e4e0;color:#2a2a2a;font-size:14px;line-height:1.5;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>
  `
}

export function buildDiscoveryCallEmail({ name, email, phone, company, industry, message }) {
  const industryLabel = INDUSTRY_LABELS[industry] || industry || 'Not specified'
  const submittedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Africa/Windhoek',
  })

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Discovery Call Request</title>
</head>
<body style="margin:0;padding:0;background:#efebe8;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#efebe8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:12px 0 12px 0;overflow:hidden;box-shadow:0 8px 28px rgba(32,80,208,0.12);">
          <tr>
            <td style="background:#2050d0;padding:28px 32px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.82);font-weight:700;">Minds &amp; Manners</p>
              <h1 style="margin:0;font-size:24px;line-height:1.25;color:#ffffff;font-weight:800;">New Discovery Call Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 8px;">
              <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#3a3a3a;">
                A new discovery call request was submitted via the website.
              </p>
              <p style="margin:0 0 20px;font-size:12px;color:#888;">Received: ${escapeHtml(submittedAt)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e8e4e0;border-radius:8px;overflow:hidden;">
                ${fieldRow('Full name', name)}
                ${fieldRow('Email', email)}
                ${fieldRow('Phone', phone)}
                ${fieldRow('Company / organisation', company)}
                ${fieldRow('Industry', industryLabel)}
                ${fieldRow('Message', message)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#fcded6;padding:16px 32px;border-top:3px solid #f36849;">
              <p style="margin:0;font-size:13px;line-height:1.5;color:#2050d0;font-weight:600;">
                Reply directly to this email to reach Elmarie Van Rensburg at elmarie@onceuponmind.com.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = [
    'New Discovery Call Request — Minds & Manners',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    company ? `Company: ${company}` : null,
    `Industry: ${industryLabel}`,
    message ? `Message: ${message}` : null,
    '',
    `Submitted: ${submittedAt}`,
    '',
    'Reply directly to this email to reach Elmarie Van Rensburg at elmarie@onceuponmind.com.',
  ]
    .filter(Boolean)
    .join('\n')

  return {
    subject: `Discovery Call Request — ${name}`,
    html,
    text,
  }
}
