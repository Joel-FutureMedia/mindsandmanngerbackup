import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import { buildDiscoveryCallEmail } from './emailTemplate.js'

dotenv.config()

export function getNotifyEmails() {
  return (process.env.DISCOVERY_NOTIFY_EMAILS || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
}

export function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP is not configured. Check environment variables.')
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function handleDiscoveryCall(body) {
  const { name, email, phone, company, industry, message } = body ?? {}

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return { status: 400, json: { error: 'Name, email, and phone are required.' } }
  }

  if (!isValidEmail(email.trim())) {
    return { status: 400, json: { error: 'Please enter a valid email address.' } }
  }

  const recipients = getNotifyEmails()
  if (!recipients.length) {
    return { status: 500, json: { error: 'Notification emails are not configured.' } }
  }

  try {
    const transporter = createTransporter()
    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company?.trim() || '',
      industry: industry?.trim() || '',
      message: message?.trim() || '',
    }

    const { subject, html, text } = buildDiscoveryCallEmail(payload)

    await transporter.sendMail({
      from: `"Minds & Manners Website" <${process.env.SMTP_USER}>`,
      to: recipients.join(', '),
      replyTo: payload.email,
      subject,
      text,
      html,
    })

    return { status: 200, json: { ok: true } }
  } catch (error) {
    console.error('Discovery call email failed:', error)
    return {
      status: 500,
      json: { error: 'Unable to send your request right now. Please try again shortly.' },
    }
  }
}
