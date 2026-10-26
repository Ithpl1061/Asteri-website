// Entry point: starts the HTTP server. The application itself is in src/app.js.
const app = require('./src/app');
const prisma = require('./src/lib/prisma');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// A busy port must never end the process: after a restart the old process can still hold the port
// for a while, or another copy may be running. Keep retrying and say so, instead of exiting
// (an exit leaves nodemon waiting for a file change, and the API stays down).
const LISTEN_RETRY_MS = 1000;
const REPORT_EVERY_MS = 10000;
let server;
let waitingSince = null;
let lastReport = 0;

function listen() {
  // No callback here: Express 5 also calls a listen callback when the bind fails,
  // so the "running" message must come from the 'listening' event only.
  const instance = app.listen(PORT, HOST);

  instance.once('listening', () => {
    server = instance;
    console.log(`\n🚀 Asteri Backend Server is running on http://localhost:${PORT}`);
    console.log(`👉 Test the health route at http://localhost:${PORT}/api/health\n`);
  });

  instance.on('error', (error) => {
    if (error.code !== 'EADDRINUSE') {
      console.error('Server failed to start:', error);
      process.exit(1);
    }
    const now = Date.now();
    waitingSince = waitingSince ?? now;
    if (now - lastReport >= REPORT_EVERY_MS) {
      lastReport = now;
      const seconds = Math.round((now - waitingSince) / 1000);
      console.error(`Port ${PORT} is in use (waiting ${seconds}s). Stop the other backend process to free it; retrying...`);
    }
    setTimeout(listen, LISTEN_RETRY_MS);
  });
}
listen();

// Graceful shutdown on Ctrl+C or a service stop: stop taking requests, close open connections,
// then release the DB connection. Nodemon's restart signal (SIGUSR2) is left to its default
// behaviour: the process ends and nodemon starts a new one.
function shutdown(signal) {
  console.log(`${signal} received, shutting down`);
  if (!server) process.exit(0);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
  server.closeAllConnections();
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Print the real reason if the process ever dies unexpectedly (otherwise it shows only "app crashed")
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception, exiting:', error);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection, exiting:', reason);
  process.exit(1);
});
