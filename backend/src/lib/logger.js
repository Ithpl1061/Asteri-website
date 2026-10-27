const pino = require('pino');

// Production: one JSON line per event (for log collectors). Development: readable colored lines.
// LOG_LEVEL=debug|info|warn|error (default info).
const isProduction = process.env.NODE_ENV === 'production';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  ...(isProduction
    ? {}
    : {
        transport: {
          target: 'pino-pretty',
          options: { colorize: true, translateTime: 'HH:MM:ss', ignore: 'pid,hostname' },
        },
      }),
});

module.exports = logger;
