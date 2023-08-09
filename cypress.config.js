const { defineConfig } = require("cypress");



      module.exports = defineConfig({
        e2e: {
          baseUrl:'https://pwa.dev.tasn.ir',
          pageLoadTimeout:6000,
        },

      })
