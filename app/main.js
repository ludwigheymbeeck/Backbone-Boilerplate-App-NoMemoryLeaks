// main.js
// --------------

// Includes JavaScript files here (or inside of your router)
require(["app", "jquery", "backbone", "modules/routers/MainRouter"],

  function(app, $, Backbone, MainRouter) {

    // Instantiates a new Router instance
    new MainRouter;
  }
);