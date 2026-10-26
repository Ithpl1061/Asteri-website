require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const { z } = require('zod');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// Behind Nginx: trust the first proxy so req.ip is the visitor's address
app.set('trust proxy', 1);
app.disable('x-powered-by');

// Middleware
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:8080';
app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: '16kb' }));

// Rate limit for the public POST endpoints (per IP)
const publicPostLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' }
});

// Validation schemas for public POST endpoints
const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
  website: z.string().optional() // honeypot: real visitors never fill this in
});

const newsletterSchema = z.object({
  email: z.string().trim().email().max(254),
  website: z.string().optional() // honeypot
});

function validate(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body ?? {});
    if (!parsed.success) {
      return res.status(400).json({
        error: 'Invalid input',
        fields: parsed.error.flatten().fieldErrors
      });
    }
    req.validated = parsed.data;
    next();
  };
}

// Optional email notification for new contact messages (set SMTP_HOST to enable)
const mailer = process.env.SMTP_HOST
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
  if (!mailer || !process.env.CONTACT_NOTIFY_TO) return;
  await mailer.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_NOTIFY_TO,
    replyTo: msg.email,
    subject: `New Asteri contact message from ${msg.name}`,
    text: `Name: ${msg.name}\nEmail: ${msg.email}\n\n${msg.message}`
  });
}

// Health Check Route
app.get('/api/health', async (req, res) => {
  try {
    // Quick DB check
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      database: 'connected',
      message: 'Asteri backend is running successfully!'
    });
  } catch (error) {
    // Log the real error on the server; never send it to the public
    console.error('Health check failed:', error);
    res.status(500).json({
      status: 'error',
      database: 'disconnected'
    });
  }
});

// ==========================================
// EXAMPLE ROUTES
// ==========================================

// Get all Services (Home Page)
app.get('/api/services', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { sequenceNumber: 'asc' }
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get all Industries (Home Page)
app.get('/api/industries', async (req, res) => {
  try {
    const industries = await prisma.industry.findMany({
      orderBy: { id: 'asc' }
    });
    res.json(industries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch industries' });
  }
});

// Get all Team Members (About Page)
app.get('/api/team', async (req, res) => {
  try {
    const team = await prisma.teamMember.findMany();
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
});

// Get all Partners (Services Page)
app.get('/api/partners', async (req, res) => {
  try {
    const partners = await prisma.partner.findMany({
      orderBy: { id: 'asc' }
    });
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch partners' });
  }
});

// Get all Solution Outcomes (Solutions Page)
app.get('/api/solutions-outcomes', async (req, res) => {
  try {
    const outcomes = await prisma.solutionOutcome.findMany({
      orderBy: { id: 'asc' }
    });
    res.json(outcomes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch outcomes' });
  }
});

// Get all Products
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany({ orderBy: { id: 'asc' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get all Product Enablers
app.get('/api/product-enablers', async (req, res) => {
  try {
    const enablers = await prisma.productEnabler.findMany({ orderBy: { id: 'asc' } });
    res.json(enablers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product enablers' });
  }
});

// Get all Case Studies
app.get('/api/case-studies', async (req, res) => {
  try {
    const caseStudies = await prisma.caseStudy.findMany({ orderBy: { id: 'asc' } });
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch case studies' });
  }
});

// Get all Partnership Principles
app.get('/api/partnership-principles', async (req, res) => {
  try {
    const principles = await prisma.partnershipPrinciple.findMany({ orderBy: { id: 'asc' } });
    res.json(principles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch principles' });
  }
});

// Get all Partner Ecosystem Details
app.get('/api/partner-ecosystem', async (req, res) => {
  try {
    const ecosystem = await prisma.partnerEcosystemDetail.findMany({ orderBy: { id: 'asc' } });
    res.json(ecosystem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ecosystem' });
  }
});

// Get all Industry Details
app.get('/api/industry-details', async (req, res) => {
  try {
    const details = await prisma.industryDetail.findMany({ orderBy: { id: 'asc' } });
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch industry details' });
  }
});

// Add a Contact Message (Contact Page)
app.post('/api/contact', publicPostLimiter, validate(contactSchema), async (req, res) => {
  // Honeypot filled in: pretend success, store nothing
  if (req.validated.website) return res.status(201).json({ success: true });

  const { name, email, message } = req.validated;
  try {
    const newMsg = await prisma.contactMessage.create({
      data: { name, email, message }
    });
    notifyNewContact(newMsg).catch((error) =>
      console.error('Contact notification email failed:', error)
    );
    res.status(201).json({ success: true, data: newMsg });
  } catch (error) {
    console.error('Contact submit failed:', error);
    res.status(500).json({ error: 'Failed to submit contact message' });
  }
});

// Get all Blog Posts (with category)
app.get('/api/blog/posts', async (req, res) => {
  try {
    const posts = await prisma.blogPost.findMany({
      include: { category: true },
      orderBy: { id: 'asc' }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Subscribe to newsletter
app.post('/api/newsletter', publicPostLimiter, validate(newsletterSchema), async (req, res) => {
  if (req.validated.website) return res.status(201).json({ success: true });

  const { email } = req.validated;
  try {
    // Upsert: a repeat signup returns the existing subscriber instead of a 500
    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      create: { email },
      update: {}
    });
    res.status(201).json(subscriber);
  } catch (error) {
    console.error('Newsletter subscribe failed:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// 404 for unknown API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Central error handler (malformed JSON, oversized body, unexpected errors)
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Malformed JSON' });
  }
  if (error.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Request too large' });
  }
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  console.log(`\n🚀 Asteri Backend Server is running on http://localhost:${PORT}`);
  console.log(`👉 Test the health route at http://localhost:${PORT}/api/health\n`);
});

// Graceful shutdown: stop taking requests, then release the DB connection
async function shutdown(signal) {
  console.log(`${signal} received, shutting down`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));


