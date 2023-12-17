const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "abkqif",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
          
    },
    viewportHeight:1536,
     viewportHeight:960,
     baseUrl: "http://localhost:3000",
     
     
  },
  
});

