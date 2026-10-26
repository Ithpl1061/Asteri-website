require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const healthRoutes = require('./routes/health');
const contentRoutes = require('./routes/content');
const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

// Behind Nginx: trust the first proxy so req.ip is the visitor's address
app.set('trust proxy', 1);
app.disable('x-powered-by');

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:8080';
app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: '16kb' }));

// /api/v1/... is the same API as /api/... (versioned name for future changes)
app.use((req, res, next) => {
  if (req.url === '/api/v1' || req.url.startsWith('/api/v1/')) req.url = req.url.replace(/^\/api\/v1/, '/api');
  next();
});

app.use(healthRoutes);
app.use(contentRoutes);
app.use(publicRoutes);
app.use(adminRoutes);

app.use('/api', notFound);
app.use(errorHandler);

module.exports = app;
