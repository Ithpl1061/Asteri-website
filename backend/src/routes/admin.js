const express = require('express');
const prisma = require('../lib/prisma');
const requireAdmin = require('../middleware/adminAuth');

const router = express.Router();

// Latest contact messages, newest first
router.get('/api/admin/contact-messages', requireAdmin, async (req, res) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { submittedAt: 'desc' },
      take: 200
    });
    res.set('Cache-Control', 'no-store').json(messages);
  } catch (error) {
    console.error('Admin contact list failed:', error);
    res.status(500).json({ error: 'Failed to load contact messages' });
  }
});

module.exports = router;
