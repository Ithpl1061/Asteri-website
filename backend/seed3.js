require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting DB Seeding Phase 3...');

  // 1. PRODUCTS
  const products = [
    {
      name: "Salesforce",
      type: "CRM & Cloud Platform",
      description: "World's #1 CRM platform — licenses & configs",
      logoUrl: "/Salesforce.png"
    },
    {
      name: "Zoho",
      type: "Business Applications Suite",
      description: "Integrated applications for managing operations, sales, and customer engagement.",
      logoUrl: "/zoho logo.png"
    },
    {
      name: "1dox.ai",
      type: "Document Intelligence Platform",
      description: "A unified system to store, manage, and collaborate on documents with workflows and AI.",
      logoUrl: "/1dox.ai 1.png"
    },
    {
      name: "ManageEngine",
      type: "IT Management Solutions",
      description: "Tools for monitoring, managing and securing IT infrastructure.",
      logoUrl: "/ManageEngine logo.png"
    },
    {
      name: "PL/SQL",
      type: "Database & Backend Systems",
      description: "Robust database management and backend logic for structured applications.",
      logoUrl: "/plsql.png"
    }
  ];
  await prisma.product.deleteMany();
  for (const p of products) await prisma.product.create({ data: p });
  console.log('✅ Seeded Products');

  // 2. PRODUCT ENABLERS
  const enablers = [
    { title: "Smarter\nOperations", iconName: "Settings" },
    { title: "Faster\nDecisions", iconName: "Timer" },
    { title: "Stronger\nSecurity", iconName: "ShieldCheck" },
    { title: "Better\nCollaboration", iconName: "HeartHandshake" },
  ];
  await prisma.productEnabler.deleteMany();
  for (const e of enablers) await prisma.productEnabler.create({ data: e });
  console.log('✅ Seeded Product Enablers');

  // 3. CASE STUDIES
  const caseStudies = [
    {
      industryName: "Banking &\nFinancial Services",
      situationText: "A regional bank was operating with a fragmented CRM setup across three branches — no unified customer view, manual pipeline tracking, and significant data silos between sales and service teams. Leadership had no real-time visibility into pipeline health or branch performance.",
      approachList: JSON.stringify([
        "40% faster lead response time",
        "100% pipeline visibility across all branches",
        "3 disconnected systems consolidated into 1",
        "8-week go-live timeline"
      ]),
      outcomeText: "Asteri implemented Salesforce Financial Services Cloud, unifying all customer data into a single platform. We automated lead routing, built custom dashboards for branch managers and executives, and trained staff across all three locations to ensure adoption stuck.",
      imageUrl: null
    }
  ];
  await prisma.caseStudy.deleteMany();
  for (const c of caseStudies) await prisma.caseStudy.create({ data: c });
  console.log('✅ Seeded Case Studies');

  console.log('🎉 Phase 3 completed!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
