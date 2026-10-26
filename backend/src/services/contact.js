const prisma = require('../lib/prisma');
const { notifyNewContact } = require('./mailer');

// Stores a contact message and starts the notification email without waiting for it
async function createContactMessage({ name, email, message }) {
  const newMsg = await prisma.contactMessage.create({
    data: { name, email, message }
  });
  notifyNewContact(newMsg).catch((error) =>
    console.error('Contact notification email failed:', error)
  );
  return newMsg;
}

module.exports = { createContactMessage };
