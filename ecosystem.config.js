module.exports = {
  apps: [
    {
      name: `ci-cd | ${process.env.NODE_ENV}`,
      script: "dist/main.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",

      env: {
        NODE_ENV: "development",
        PORT: 3000
      },

      env_staging: {
        NODE_ENV: "staging",
        PORT: 4000
      },

      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
