const crypto = require('crypto');

// Protects /api/admin/* with a bearer token from ADMIN_TOKEN (a long random string set in .env)
function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || expected.length < 32) {
    return res.status(503).json({ error: 'Admin access is not configured' });
  }
  const header = req.get('authorization') || '';
  const given = header.startsWith('Bearer ') ? header.slice(7) : '';
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

module.exports = requireAdmin;
