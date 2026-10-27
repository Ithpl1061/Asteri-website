const express = require('express');
const publicPostLimiter = require('../middleware/rateLimit');
const validate = require('../middleware/validate');
const requireCaptcha = require('../middleware/captcha');
const { contactSchema, newsletterSchema } = require('../schemas/public');
const { createContactMessage } = require('../services/contact');
const { subscribe } = require('../services/newsletter');

const router = express.Router();

// Add a contact message (Contact page)
router.post('/api/contact', publicPostLimiter, requireCaptcha, validate(contactSchema), async (req, res) => {
  // Honeypot filled in: pretend success, store nothing
  if (req.validated.website) return res.status(201).json({ success: true });

  const { name, email, message } = req.validated;
  try {
    const newMsg = await createContactMessage({ name, email, message });
    res.status(201).json({ success: true, data: newMsg });
  } catch (error) {
    req.log.error({ err: error }, 'Contact submit failed');
    res.status(500).json({ error: 'Failed to submit contact message' });
  }
});

// Subscribe to the newsletter
router.post('/api/newsletter', publicPostLimiter, requireCaptcha, validate(newsletterSchema), async (req, res) => {
  if (req.validated.website) return res.status(201).json({ success: true });

  try {
    const subscriber = await subscribe(req.validated.email);
    res.status(201).json(subscriber);
  } catch (error) {
    req.log.error({ err: error }, 'Newsletter subscribe failed');
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

module.exports = router;
