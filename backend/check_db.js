const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient(); 

async function check() { 
  const tables = ['TeamMember', 'Partner', 'IndustryDetail', 'PartnerEcosystemDetail', 'Product', 'CaseStudy', 'BlogPost']; 
  for (const table of tables) { 
    // prisma models start with lowercase: teamMember, partner, etc.
    const modelName = table.charAt(0).toLowerCase() + table.slice(1);
    const models = await prisma[modelName].findMany(); 
    const hits = models.filter(m => Object.values(m).some(v => typeof v === 'string' && (v.includes('localhost') || v.includes('127.0.0.1')))); 
    if (hits.length > 0) { 
      console.log(table, hits.map(h => h.id)); 
    } 
  } 
  await prisma.$disconnect(); 
} 

check();
