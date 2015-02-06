// Require.js Configurations
// -------------------------
require.config({
  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "",
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {
      // Core Libraries
      // --------------
      "jquery": "./modules/libs/jquery",

      "jqueryui": "./modules/libs/jqueryui",

      "jquerymobile": "./modules/libs/jquery.mobile",

      "underscore": "./modules/libs/lodash",

      "backbone": "./modules/libs/backbone",

      // Plugins
      // -------
      "snap": "./modules/libs/plugins/snap",

      "backbone.validateAll": "./modules/libs/plugins/Backbone.validateAll",

      "bootstrap": "./modules/libs/plugins/bootstrap",

      "text": "./modules/libs/plugins/text",

      "jasminejquery": "./modules/libs/plugins/jasmine-jquery"
  },
  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
      // jQuery Mobile
      "jquerymobile": ["jquery"],

      // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

      // jQueryUI
      "jqueryui": ["jquery"],

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"],

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"]
  }
});

require(['main']);           // Initialize the application with the main application file.
