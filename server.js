import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { buildDiscoveryCallEmail } from './server/emailTemplate.js'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json({ limit: '32kb' }))

function getNotifyEmails() {
  return (process.env.DISCOVERY_NOTIFY_EMAILS || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP is not configured. Check your .env file.')
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

app.post('/api/discovery-call', async (req, res) => {
  const { name, email, phone, company, industry, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' })
  }

  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const recipients = getNotifyEmails()
  if (!recipients.length) {
    return res.status(500).json({ error: 'Notification emails are not configured.' })
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

    return res.json({ ok: true })
  } catch (error) {
    console.error('Discovery call email failed:', error)
    return res.status(500).json({ error: 'Unable to send your request right now. Please try again shortly.' })
  }
})

const distPath = path.join(__dirname, 'dist')
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
