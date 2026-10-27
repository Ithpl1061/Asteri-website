const nodemailer = require('nodemailer');

// Optional: email each new contact message. Enabled only when SMTP_HOST is set.
const transport = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined
    })
  : null;

async function notifyNewContact(msg) {
  if (!transport || !process.env.CONTACT_NOTIFY_TO) return;
  await transport.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_NOTIFY_TO,
    replyTo: msg.email,
    subject: `New Asteri contact message from ${msg.name}`,
    text: `Name: ${msg.name}\nEmail: ${msg.email}\n\n${msg.message}`
  });
}

module.exports = { notifyNewContact };
