const express = require('express');
const prisma = require('../lib/prisma');

const router = express.Router();

router.get('/api/health', async (req, res) => {
  try {
    // Quick DB check
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      database: 'connected',
      message: 'Asteri backend is running successfully!'
    });
  } catch (error) {
    // Log the real error on the server; never send it to the public
    console.error('Health check failed:', error);
    res.status(500).json({
      status: 'error',
      database: 'disconnected'
    });
  }
});

module.exports = router;
