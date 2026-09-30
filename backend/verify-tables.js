require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'Asteri',
  user: 'postgres',
  password: process.env.DB_PASSWORD,
});

async function verifyTables() {
  try {
    await client.connect();
    console.log('✅ Connected to Asteri database.');
    
    const query = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `;
    
    const res = await client.query(query);
    const tables = res.rows.map(row => row.table_name);
    
    console.log(`\nFound ${tables.length} tables in the 'public' schema:`);
    tables.forEach(t => console.log(` - ${t}`));
    
    // List of all expected tables from our schema design
    const expectedTables = [
      'services', 'industries', 'testimonials', 'home_page_content',
      'team_members', 'about_page_content',
      'service_details', 'work_processes', 'partners',
      'solutions_details', 'solutions_outcomes',
      'industry_details',
      'partner_ecosystem_details', 'partnership_principles',
      'products', 'product_enablers',
      'case_studies',
      'blog_categories', 'blog_posts', 'newsletter_subscribers',
      'contact_messages', 'company_settings'
    ];

    const missing = expectedTables.filter(t => !tables.includes(t));
    
    if (missing.length === 0) {
      console.log('\n🚀 VERIFICATION SUCCESSFUL: All 22 required database tables are present and correct!');
    } else {
      console.error('\n❌ VERIFICATION FAILED: Missing tables:', missing);
    }
  } catch (err) {
    console.error('❌ Error during verification:', err.message);
  } finally {
    await client.end();
  }
}

verifyTables();
