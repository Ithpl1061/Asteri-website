require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting DB Seeding Phase 2...\n');

  // ===============================================
  // SEED PARTNERS (from frontend/src/routes/services.tsx)
  // ===============================================
  console.log('Seeding Partners...');
  const partners = [
    { logoUrl: "/Salesforce.png", name: "Salesforce" },
    { logoUrl: "/ManageEngine logo.png", name: "ManageEngine" },
    { logoUrl: "/zoho logo.png", name: "Zoho" },
    { logoUrl: "/aws logo.png", name: "AWS" },
    { logoUrl: "/Shipsy_Logo 1.png", name: "Shipsy" },
    { logoUrl: "/savex.png", name: "Savex" },
    { logoUrl: "/zionit.png", name: "Zion IT" },
    { logoUrl: "/sap logo.png", name: "SAP" },
  ];
  await prisma.partner.deleteMany();
  for (const p of partners) {
    await prisma.partner.create({ data: p });
  }
  console.log(`✅ Inserted ${partners.length} Partners.`);

  // ===============================================
  // SEED SOLUTION OUTCOMES (from frontend/src/routes/solutions.tsx)
  // ===============================================
  console.log('\nSeeding Solution Outcomes...');
  const outcomes = [
    { title: "Faster Processes", description: "Cut time spent on manual, repetitive tasks" },
    { title: "Reduced Costs", description: "Lower overhead through smarter resourcing" },
    { title: "Higher Visibility", description: "Real-time data across every team and system" },
    { title: "Measurable Growth", description: "Outcomes tracked, documented, and proven" },
  ];
  await prisma.solutionOutcome.deleteMany();
  for (const o of outcomes) {
    await prisma.solutionOutcome.create({ data: o });
  }
  console.log(`✅ Inserted ${outcomes.length} Solution Outcomes.`);

  console.log('\n🎉 Phase 2 Seeding Completed!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
