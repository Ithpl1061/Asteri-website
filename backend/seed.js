require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Database Seeding...\n');

  // ===============================================
  // 1. SEED TEAM MEMBERS (from frontend/src/routes/about.tsx)
  // ===============================================
  const visionaries = [
    {
      name: "Avinash Abnave",
      role: "Chief Executive Officer",
      experience: "10+ years of experience building enterprise systems and scaling tech operations globally.",
      imageUrl: "/AvinashSir.png",
      linkedinUrl: "#",
    },
    {
      name: "Anuraj Paniker",
      role: "Chief Technology Officer",
      experience: "15+ years architecting complex cloud infrastructures, SAP integrations, and digital products.",
      imageUrl: "/AnurajSir.png",
      linkedinUrl: "#",
    },
    {
      name: "Aishwarya Abnave",
      role: "Chief Marketing Officer",
      experience: "12+ years driving digital brand strategy, client partnerships, and market expansion.",
      imageUrl: "/AishwariaMam.png",
      linkedinUrl: "#",
    }
  ];

  console.log('Seeding Team Members...');
  await prisma.teamMember.deleteMany(); // Clear old data
  for (const person of visionaries) {
    await prisma.teamMember.create({ data: person });
  }
  console.log(`✅ Inserted ${visionaries.length} Team Members.`);

  // ===============================================
  // 2. SEED SERVICES (from frontend/src/routes/index.tsx)
  // ===============================================
  const services = [
    { sequenceNumber: "01", title: "AI Consulting and Strategy" },
    { sequenceNumber: "02", title: "AI-Powered Software Development" },
    { sequenceNumber: "03", title: "Intelligent Automation" },
    { sequenceNumber: "04", title: "Natural Language Processing Solutions" },
    { sequenceNumber: "05", title: "AI Driven Cybersecurity" },
    { sequenceNumber: "06", title: "Data Science and Analytics" },
    { sequenceNumber: "07", title: "Cloud & Platform Engineering" },
  ];

  console.log('\nSeeding Services...');
  await prisma.service.deleteMany();
  for (const s of services) {
    await prisma.service.create({ data: s });
  }
  console.log(`✅ Inserted ${services.length} Services.`);

  // ===============================================
  // 3. SEED INDUSTRIES (from frontend/src/routes/index.tsx)
  // ===============================================
  const industries = [
    { iconName: "Banknote", titleLine1: "Banking &", titleLine2: "Financial Services" },
    { iconName: "Stethoscope", titleLine1: "Healthcare &", titleLine2: "Life Sciences" },
    { iconName: "ShoppingBag", titleLine1: "Retail &", titleLine2: "E-Commerce" },
    { iconName: "Truck", titleLine1: "Manufacturing &", titleLine2: "Logistics" },
    { iconName: "GraduationCap", titleLine1: "Education", titleLine2: "" },
    { iconName: "Cpu", titleLine1: "IT &", titleLine2: "Technology" },
  ];

  console.log('\nSeeding Industries...');
  await prisma.industry.deleteMany();
  for (const ind of industries) {
    await prisma.industry.create({ data: ind });
  }
  console.log(`✅ Inserted ${industries.length} Industries.`);

  // ===============================================
  // 4. SEED HOMEPAGE CMS TEXT 
  // ===============================================
  console.log('\nSeeding Home Page Content...');
  await prisma.homePageContent.deleteMany();
  await prisma.homePageContent.create({
    data: {
      sectionName: "Hero",
      heading: "Engineering Digital Systems That Scale With Ambition",
      subheading: "Asteri is a digital engineering studio building cinematic enterprise software.",
      contentText: ""
    }
  });
  console.log(`✅ Inserted Home Page Hero Text.`);


  console.log('\n🎉 Seeding Completed Successfully! Your database is now populated.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
