require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting DB Seeding Phase 5 (Blog)...');

  // Categories
  const categoriesData = [
    "Cloud",
    "SAP & ERP",
    "AI & Data",
    "Artificial Intelligence",
    "Cloud Computing",
    "System Architecture",
    "CRM",
    "Automation",
    "Productivity"
  ];

  await prisma.blogCategory.deleteMany();
  for (const name of categoriesData) {
    await prisma.blogCategory.create({ data: { name } });
  }

  const categories = await prisma.blogCategory.findMany();
  const getCatId = (name) => categories.find(c => c.name === name).id;

  // Featured Posts
  const featuredPosts = [
    {
      categoryId: getCatId("Cloud"),
      title: "5 Signs Your Cloud Costs Are Out of Control (Cloud)",
      imageUrl: "/figma/blog/featured-cloud.png",
      content: "Content goes here",
      isFeatured: true,
      isAccent: true,
    },
    {
      categoryId: getCatId("SAP & ERP"),
      title: "S/4HANA Migration: 3 Common Mistakes",
      imageUrl: "/figma/blog/featured-sap-erp.png",
      content: "Content goes here",
      isFeatured: true,
      isAccent: false,
    },
    {
      categoryId: getCatId("AI & Data"),
      title: "From Spreadsheets to Scalable Dashboards",
      imageUrl: "/figma/blog/featured-ai-data.png",
      content: "Content goes here",
      isFeatured: true,
      isAccent: false,
    }
  ];

  // Recent Posts
  const recentPosts = [
    {
      categoryId: getCatId("Artificial Intelligence"),
      title: "AI in Business Software: Hype or Real Value?",
      imageUrl: "/figma/blog/recent-ai.png",
      content: "Content goes here",
      isFeatured: false,
      isAccent: false,
    },
    {
      categoryId: getCatId("Cloud Computing"),
      title: "Cloud vs On-Premise in 2026",
      imageUrl: "/figma/blog/recent-cloud.png",
      content: "Content goes here",
      isFeatured: false,
      isAccent: false,
    },
    {
      categoryId: getCatId("System Architecture"),
      title: "Building Scalable Systems from Day One",
      imageUrl: "/figma/blog/recent-system-architecture.png",
      content: "Content goes here",
      isFeatured: false,
      isAccent: false,
    },
    {
      categoryId: getCatId("CRM"),
      title: "The Future of CRM: Beyond Sales Tracking",
      imageUrl: "/figma/blog/recent-crm.png",
      content: "Content goes here",
      isFeatured: false,
      isAccent: false,
    },
    {
      categoryId: getCatId("Automation"),
      title: "Automation vs Human Effort in IT Workflows",
      imageUrl: "/figma/blog/recent-automation.png",
      content: "Content goes here",
      isFeatured: false,
      isAccent: false,
    },
    {
      categoryId: getCatId("Productivity"),
      title: "The Rise of Integrated Work Ecosystems",
      imageUrl: "/figma/blog/recent-productivity.png",
      content: "Content goes here",
      isFeatured: false,
      isAccent: false,
    }
  ];

  await prisma.blogPost.deleteMany();
  for (const p of [...featuredPosts, ...recentPosts]) {
    await prisma.blogPost.create({ data: p });
  }

  console.log('✅ Seeded Blog Categories and Posts');
  console.log('🎉 Phase 5 completed!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
