const prisma = require('../lib/prisma');

// Upsert: a repeat signup returns the existing subscriber instead of an error
function subscribe(email) {
  return prisma.newsletterSubscriber.upsert({
    where: { email },
    create: { email },
    update: {}
  });
}

module.exports = { subscribe };
