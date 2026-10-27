const express = require('express');
const prisma = require('../lib/prisma');

// Read-only content endpoints. Each row: [path, query, error message].
const ENDPOINTS = [
  ['/api/services', () => prisma.service.findMany({ orderBy: { sequenceNumber: 'asc' } }), 'Failed to fetch services'],
  ['/api/industries', () => prisma.industry.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch industries'],
  ['/api/team', () => prisma.teamMember.findMany(), 'Failed to fetch team members'],
  ['/api/partners', () => prisma.partner.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch partners'],
  ['/api/solutions-outcomes', () => prisma.solutionOutcome.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch outcomes'],
  ['/api/case-studies', () => prisma.caseStudy.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch case studies'],
  ['/api/partnership-principles', () => prisma.partnershipPrinciple.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch principles'],
  ['/api/partner-ecosystem', () => prisma.partnerEcosystemDetail.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch ecosystem'],
  ['/api/industry-details', () => prisma.industryDetail.findMany({ orderBy: { id: 'asc' } }), 'Failed to fetch industry details'],
  ['/api/blog/posts', () => prisma.blogPost.findMany({ include: { category: true }, orderBy: { id: 'asc' } }), 'Failed to fetch blog posts']
];

const router = express.Router();

for (const [path, query, errorMessage] of ENDPOINTS) {
  router.get(path, async (req, res) => {
    try {
      res.set('Cache-Control', 'public, max-age=300').json(await query());
    } catch (error) {
      req.log.error({ err: error, path }, 'Content query failed');
      res.status(500).json({ error: errorMessage });
    }
  });
}

module.exports = router;
