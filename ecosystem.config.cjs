module.exports = {
  apps: [
    {
      name: "asteri-frontend",
      cwd: "./frontend",
      script: "./.output/server/index.mjs",
      env: {
        PORT: 3000,
        HOST: "127.0.0.1",
        NODE_ENV: "production"
      }
    },
    {
      name: "asteri-backend",
      cwd: "./backend",
      script: "./index.js",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
