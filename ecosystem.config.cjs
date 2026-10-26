module.exports = {
  apps: [
    {
      name: "asteri-frontend",
      cwd: "./frontend",
      script: "./.output/server/index.mjs",
      env: {
        PORT: 3000,
        HOST: "127.0.0.1",
        NODE_ENV: "production",
        // Route loaders fetch page data from the API on the private network during SSR
        API_INTERNAL_URL: "http://127.0.0.1:5000"
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
