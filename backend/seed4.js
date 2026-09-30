require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting DB Seeding Phase 4...');

  // 1. PARTNERSHIP PRINCIPLES
  const principles = [
    { title: "Certified", description: "Every claim is backed by a credential." },
    { title: "Vetted", description: "We only recommend what we've used ourselves." },
    { title: "Accountable", description: "We own the outcome, not just the delivery." },
  ];
  await prisma.partnershipPrinciple.deleteMany();
  for (const p of principles) await prisma.partnershipPrinciple.create({ data: p });
  console.log('✅ Seeded Partnership Principles');

  // 2. PARTNER ECOSYSTEM DETAILS
  const ecosystem = [
    {
      partnerName: "Salesforce",
      subtitle: "Certified Salesforce Partner",
      logoUrl: "/Salesforce.png",
      description: "We deliver implementation, customization, and support across Sales Cloud, Service Cloud, Data Cloud, and more. Every engagement is backed by certified consultants who know the platform deeply."
    },
    {
      partnerName: "ZION IT",
      subtitle: "Enabling streamlined software solutions",
      logoUrl: "/zionit.png",
      description: "Enabling streamlined software solutions and system efficiency across environments."
    }
  ];
  await prisma.partnerEcosystemDetail.deleteMany();
  for (const e of ecosystem) await prisma.partnerEcosystemDetail.create({ data: e });
  console.log('✅ Seeded Partner Ecosystem');

  // 3. INDUSTRY DETAIL
  const bankingIndustry = await prisma.industry.findFirst({
    where: { titleLine1: "Banking &" }
  });

  if (bankingIndustry) {
    await prisma.industryDetail.deleteMany();
    await prisma.industryDetail.create({
      data: {
        industryId: bankingIndustry.id,
        name: "Banking & Financial Services",
        challengesDescription: "High-stakes security and shifting regulatory landscapes.",
        solutionsDescription: "Systems designed for resilience",
        impactDescription: "Where Security Holds, And Speed Doesn't Break.",
        imageUrl: "/figma/industries/banking.png"
      }
    });
    console.log('✅ Seeded Industry Detail');
  }

  console.log('🎉 Phase 4 completed!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
