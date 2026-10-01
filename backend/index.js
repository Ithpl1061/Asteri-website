require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// Middleware
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:8080';
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

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
    res.status(500).json({ 
      status: 'error', 
      database: 'disconnected', 
      error: error.message 
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
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMsg = await prisma.contactMessage.create({
      data: { name, email, message }
    });
    res.status(201).json({ success: true, data: newMsg });
  } catch (error) {
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
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email }
    });
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`\n🚀 Asteri Backend Server is running on http://localhost:${PORT}`);
  console.log(`👉 Test the health route at http://localhost:${PORT}/api/health\n`);
});
