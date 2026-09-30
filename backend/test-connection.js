require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'Asteri',
  user: 'postgres',
  password: process.env.DB_PASSWORD,
});

async function testConnection() {
  try {
    await client.connect();
    const res = await client.query('SELECT version()');
    console.log('✅ Connection Successful!');
    console.log(res.rows[0].version);
  } catch (err) {
    console.error('❌ Connection Failed:', err.message);
  } finally {
    await client.end();
  }
}

testConnection();
