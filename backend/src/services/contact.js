const prisma = require('../lib/prisma');
const { notifyNewContact } = require('./mailer');
const logger = require('../lib/logger');

// Stores a contact message and starts the notification email without waiting for it
async function createContactMessage({ name, email, message }) {
  const newMsg = await prisma.contactMessage.create({
    data: { name, email, message }
  });
  notifyNewContact(newMsg).catch((error) =>
    logger.error({ err: error, contactId: newMsg.id }, 'Contact notification email failed')
  );
  return newMsg;
}

module.exports = { createContactMessage };
