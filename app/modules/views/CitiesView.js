// View.js
// -------
define(["jquery", "backbone", "modules/models/Model", "text!templates/cities.html"],

    function($, Backbone, Model, template){

        var CitiesView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "section",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

                // remove all listeners so view can be garbage collected
                // (App is defined as instantiated Router in init/DesktopInit.js)
                this.listenTo(Backbone.application.router, 'stopListening', this.stopListening);
            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the CitiesView class
        return CitiesView;

    }

);