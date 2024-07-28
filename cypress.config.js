const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: base = process.env.cybase,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require('cypress-high-resolution')(on, config)
    },
    testIsolation: false
  },
});
