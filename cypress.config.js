const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    videosFolder: 'cypress/videos',
    viewportHeight: 1080,  //altura em pixels
    viewportWidth: 1920, // largura em pixels ---> ful hd
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
