const rateLimit = require('express-rate-limit');

// Public POST endpoints: at most 5 requests per minute per IP
const publicPostLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' }
});

module.exports = publicPostLimiter;
