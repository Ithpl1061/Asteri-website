// Cloudflare Turnstile check for the public forms.
// Enabled only when TURNSTILE_SECRET_KEY is set; without it the forms work as before.
const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function requireCaptcha(req, res, next) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return next();

  const token = req.body?.captchaToken;
  if (typeof token !== 'string' || token.length === 0) {
    return res.status(400).json({ error: 'Please complete the security check and try again.' });
  }

  try {
    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: req.ip })
    });
    const result = await response.json();
    if (!result.success) {
      return res.status(400).json({ error: 'The security check failed. Please try again.' });
    }
    next();
  } catch (error) {
    req.log.error({ err: error }, 'Turnstile verification failed');
    res.status(503).json({ error: 'The security check is unavailable right now. Please try again.' });
  }
}

module.exports = requireCaptcha;
