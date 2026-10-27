require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

// Idempotent seed. Every write is an upsert keyed on a unique field (slug or name),
// or on a natural key for tables without one. Nothing is deleted, so the script can
// run more than once. It still refuses to run in production unless ALLOW_SEED_PROD=yes.
if (process.env.NODE_ENV === 'production' && process.env.ALLOW_SEED_PROD !== 'yes') {
  console.error('Refusing to run the seed: NODE_ENV=production. Set ALLOW_SEED_PROD=yes only for a deliberate restore.');
  process.exit(1);
}
const prisma = new PrismaClient();

// For tables without a unique column: find the row by a natural key, then update or create it.
async function upsertByKey(model, where, data) {
  const existing = await model.findFirst({ where });
  return existing
    ? model.update({ where: { id: existing.id }, data })
    : model.create({ data: { ...where, ...data } });
}

// For slugged tables: match by slug, or by a natural key for rows that were created before
// their slug was backfilled (the M11 migration gave them generated slugs such as "banking-1").
// The update sets the clean slug, so those rows keep their id and are not duplicated.
// createOnly holds fields that are set only when the row is new, so re-runs never overwrite them.
async function upsertBySlug(model, data, keyWhere, createOnly = {}) {
  const existing =
    (await model.findUnique({ where: { slug: data.slug } })) ??
    (await model.findFirst({ where: keyWhere }));
  return existing
    ? model.update({ where: { id: existing.id }, data })
    : model.create({ data: { ...data, ...createOnly } });
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

async function seedTeam() {
  const visionaries = [
    {
      name: 'Avinash Abnave',
      role: 'Chief Executive Officer',
      experience: '10+ years of experience building enterprise systems and scaling tech operations globally.',
      imageUrl: '/AvinashSir.png',
      linkedinUrl: 'https://in.linkedin.com/in/avinash-abnave-4bb23a32',
    },
    {
      name: 'Anuraj Paniker',
      role: 'Chief Technology Officer',
      experience: '15+ years architecting complex cloud infrastructures, SAP integrations, and digital products.',
      imageUrl: '/AnurajSir.png',
      linkedinUrl: 'https://in.linkedin.com/in/anuraj-paniker-1532025',
    },
    {
      name: 'Aishwarya Abnave',
      role: 'Chief Marketing Officer',
      experience: '12+ years driving digital brand strategy, client partnerships, and market expansion.',
      imageUrl: '/AishwariaMam.png',
      linkedinUrl: 'https://www.linkedin.com/in/aishwarya-abnave-a95117116/',
    },
  ];
  for (const person of visionaries) {
    await upsertByKey(prisma.teamMember, { name: person.name }, person);
  }
  console.log(`Team members: ${visionaries.length}`);
}

async function seedServices() {
  const services = [
    { sequenceNumber: '01', title: 'AI Consulting and Strategy' },
    { sequenceNumber: '02', title: 'AI-Powered Software Development' },
    { sequenceNumber: '03', title: 'Intelligent Automation' },
    { sequenceNumber: '04', title: 'Natural Language Processing Solutions' },
    { sequenceNumber: '05', title: 'AI Driven Cybersecurity' },
    { sequenceNumber: '06', title: 'Data Science and Analytics' },
    { sequenceNumber: '07', title: 'Cloud & Platform Engineering' },
  ];
  for (const s of services) {
    await upsertByKey(prisma.service, { title: s.title }, s);
  }
  console.log(`Services: ${services.length}`);
}

async function seedIndustries() {
  const industries = [
    { slug: 'banking-financial-services', iconName: 'Banknote', titleLine1: 'Banking &', titleLine2: 'Financial Services', sortOrder: 1 },
    { slug: 'healthcare-life-sciences', iconName: 'Stethoscope', titleLine1: 'Healthcare &', titleLine2: 'Life Sciences', sortOrder: 2 },
    { slug: 'retail-e-commerce', iconName: 'ShoppingBag', titleLine1: 'Retail &', titleLine2: 'E-Commerce', sortOrder: 3 },
    { slug: 'manufacturing-logistics', iconName: 'Truck', titleLine1: 'Manufacturing &', titleLine2: 'Logistics', sortOrder: 4 },
    { slug: 'education', iconName: 'GraduationCap', titleLine1: 'Education', titleLine2: '', sortOrder: 5 },
    { slug: 'it-technology', iconName: 'Cpu', titleLine1: 'IT &', titleLine2: 'Technology', sortOrder: 6 },
  ];
  for (const ind of industries) {
    await upsertBySlug(prisma.industry, ind, { titleLine1: ind.titleLine1, titleLine2: ind.titleLine2 });
  }
  console.log(`Industries: ${industries.length}`);

  const banking = await prisma.industry.findUnique({ where: { slug: 'banking-financial-services' } });
  if (banking) {
    await upsertByKey(
      prisma.industryDetail,
      { industryId: banking.id, name: 'Banking & Financial Services' },
      {
        industryId: banking.id,
        name: 'Banking & Financial Services',
        challengesDescription: 'High-stakes security and shifting regulatory landscapes.',
        solutionsDescription: 'Systems designed for resilience',
        impactDescription: "Where Security Holds, And Speed Doesn't Break.",
        imageUrl: '/figma/industries/banking.png',
      },
    );
    console.log('Industry detail: banking');
  }
}

async function seedPartners() {
  const partners = [
    { logoUrl: '/Salesforce.png', name: 'Salesforce' },
    { logoUrl: '/ManageEngine logo.png', name: 'ManageEngine' },
    { logoUrl: '/zoho logo.png', name: 'Zoho' },
    { logoUrl: '/aws logo.png', name: 'AWS' },
    { logoUrl: '/Shipsy_Logo 1.png', name: 'Shipsy' },
    { logoUrl: '/savex.png', name: 'Savex' },
    { logoUrl: '/zionit.png', name: 'Zion IT' },
    { logoUrl: '/sap logo.png', name: 'SAP' },
  ];
  for (const p of partners) {
    await upsertByKey(prisma.partner, { name: p.name }, p);
  }
  console.log(`Partners: ${partners.length}`);
}

async function seedSolutionOutcomes() {
  const outcomes = [
    { title: 'Faster Processes', description: 'Cut time spent on manual, repetitive tasks' },
    { title: 'Reduced Costs', description: 'Lower overhead through smarter resourcing' },
    { title: 'Higher Visibility', description: 'Real-time data across every team and system' },
    { title: 'Measurable Growth', description: 'Outcomes tracked, documented, and proven' },
  ];
  for (const o of outcomes) {
    await upsertByKey(prisma.solutionOutcome, { title: o.title }, o);
  }
  console.log(`Solution outcomes: ${outcomes.length}`);
}

async function seedPartnership() {
  const principles = [
    { title: 'Certified', description: 'Every claim is backed by a credential.' },
    { title: 'Vetted', description: "We only recommend what we've used ourselves." },
    { title: 'Accountable', description: 'We own the outcome, not just the delivery.' },
  ];
  for (const p of principles) {
    await upsertByKey(prisma.partnershipPrinciple, { title: p.title }, p);
  }

  const ecosystem = [
    {
      partnerName: 'Salesforce',
      subtitle: 'Certified Salesforce Partner',
      logoUrl: '/Salesforce.png',
      description: 'We deliver implementation, customization, and support across Sales Cloud, Service Cloud, Data Cloud, and more. Every engagement is backed by certified consultants who know the platform deeply.',
    },
    {
      partnerName: 'ZION IT',
      subtitle: 'Enabling streamlined software solutions',
      logoUrl: '/zionit.png',
      description: 'Enabling streamlined software solutions and system efficiency across environments.',
    },
  ];
  for (const e of ecosystem) {
    await upsertByKey(prisma.partnerEcosystemDetail, { partnerName: e.partnerName }, e);
  }
  console.log(`Partnership: ${principles.length} principles, ${ecosystem.length} ecosystem partners`);
}

async function seedProducts() {
  const products = [
    {
      slug: 'salesforce',
      name: 'Salesforce',
      type: 'CRM & Cloud Platform',
      description: "World's #1 CRM platform — licenses & configs",
      logoUrl: '/Salesforce.png',
      sortOrder: 1,
    },
    {
      slug: 'zoho',
      name: 'Zoho',
      type: 'Business Applications Suite',
      description: 'Integrated applications for managing operations, sales, and customer engagement.',
      logoUrl: '/zoho logo.png',
      sortOrder: 2,
    },
    {
      slug: '1dox-ai',
      name: '1dox.ai',
      type: 'Document Intelligence Platform',
      description: 'A unified system to store, manage, and collaborate on documents with workflows and AI.',
      logoUrl: '/1dox.ai 1.png',
      sortOrder: 3,
    },
    {
      slug: 'manageengine',
      name: 'ManageEngine',
      type: 'IT Management Solutions',
      description: 'Tools for monitoring, managing and securing IT infrastructure.',
      logoUrl: '/ManageEngine logo.png',
      sortOrder: 4,
    },
    {
      slug: 'plsql',
      name: 'PL/SQL',
      type: 'Database & Backend Systems',
      description: 'Robust database management and backend logic for structured applications.',
      logoUrl: '/plsql.png',
      sortOrder: 5,
    },
  ];
  for (const p of products) {
    await upsertBySlug(prisma.product, p, { name: p.name });
  }
  console.log(`Products: ${products.length}`);

  const enablers = [
    { title: 'Smarter\nOperations', iconName: 'Settings' },
    { title: 'Faster\nDecisions', iconName: 'Timer' },
    { title: 'Stronger\nSecurity', iconName: 'ShieldCheck' },
    { title: 'Better\nCollaboration', iconName: 'HeartHandshake' },
  ];
  for (const e of enablers) {
    await upsertByKey(prisma.productEnabler, { title: e.title }, e);
  }
  console.log(`Product enablers: ${enablers.length}`);
}

async function seedCaseStudies() {
  const caseStudy = {
    slug: 'banking-crm-consolidation',
    industryName: 'Banking &\nFinancial Services',
    situationText:
      'A regional bank was operating with a fragmented CRM setup across three branches — no unified customer view, manual pipeline tracking, and significant data silos between sales and service teams. Leadership had no real-time visibility into pipeline health or branch performance.',
    // approachList is a Json column, so store the array itself, not a JSON string.
    approachList: [
      '40% faster lead response time',
      '100% pipeline visibility across all branches',
      '3 disconnected systems consolidated into 1',
      '8-week go-live timeline',
    ],
    outcomeText:
      'Asteri implemented Salesforce Financial Services Cloud, unifying all customer data into a single platform. We automated lead routing, built custom dashboards for branch managers and executives, and trained staff across all three locations to ensure adoption stuck.',
    imageUrl: null,
    sortOrder: 1,
  };
  await upsertBySlug(prisma.caseStudy, caseStudy, { industryName: caseStudy.industryName });
  console.log('Case studies: 1');
}

async function seedBlog() {
  const categories = [
    'Cloud',
    'SAP & ERP',
    'AI & Data',
    'Artificial Intelligence',
    'Cloud Computing',
    'System Architecture',
    'CRM',
    'Automation',
    'Productivity',
  ];
  for (const name of categories) {
    await prisma.blogCategory.upsert({
      where: { name },
      update: { slug: slugify(name) },
      create: { name, slug: slugify(name) },
    });
  }

  const categoryId = async (name) => (await prisma.blogCategory.findUnique({ where: { name } })).id;

  const posts = [
    { category: 'Cloud', title: '5 Signs Your Cloud Costs Are Out of Control (Cloud)', imageUrl: '/figma/blog/featured-cloud.png', isFeatured: true, isAccent: true },
    { category: 'SAP & ERP', title: 'S/4HANA Migration: 3 Common Mistakes', imageUrl: '/figma/blog/featured-sap-erp.png', isFeatured: true, isAccent: false },
    { category: 'AI & Data', title: 'From Spreadsheets to Scalable Dashboards', imageUrl: '/figma/blog/featured-ai-data.png', isFeatured: true, isAccent: false },
    { category: 'Artificial Intelligence', title: 'AI in Business Software: Hype or Real Value?', imageUrl: '/figma/blog/recent-ai.png' },
    { category: 'Cloud Computing', title: 'Cloud vs On-Premise in 2026', imageUrl: '/figma/blog/recent-cloud.png' },
    { category: 'System Architecture', title: 'Building Scalable Systems from Day One', imageUrl: '/figma/blog/recent-system-architecture.png' },
    { category: 'CRM', title: 'The Future of CRM: Beyond Sales Tracking', imageUrl: '/figma/blog/recent-crm.png' },
    { category: 'Automation', title: 'Automation vs Human Effort in IT Workflows', imageUrl: '/figma/blog/recent-automation.png' },
    { category: 'Productivity', title: 'The Rise of Integrated Work Ecosystems', imageUrl: '/figma/blog/recent-productivity.png' },
  ];
  for (const p of posts) {
    const data = {
      categoryId: await categoryId(p.category),
      title: p.title,
      slug: slugify(p.title),
      imageUrl: p.imageUrl,
      isFeatured: p.isFeatured ?? false,
      isAccent: p.isAccent ?? false,
    };
    // Placeholder body text is set only on create, so re-running never overwrites edited content.
    // Placeholder body text is set only on create, so re-running never overwrites edited content.
    await upsertBySlug(prisma.blogPost, data, { title: p.title }, { content: 'Content goes here' });
  }
  console.log(`Blog: ${categories.length} categories, ${posts.length} posts`);
}

async function main() {
  console.log('Seeding database (idempotent)...');
  await seedTeam();
  await seedServices();
  await seedIndustries();
  await seedPartners();
  await seedSolutionOutcomes();
  await seedPartnership();
  await seedProducts();
  await seedCaseStudies();
  await seedBlog();
  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
