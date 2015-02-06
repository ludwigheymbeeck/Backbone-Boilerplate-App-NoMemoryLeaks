// View.js
// -------
define(["jquery", "backbone", "modules/models/Model", "text!templates/main.html"],

    function($, Backbone, Model, template){

        var MainView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "section",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

                // app.showMessage("Message", "DEVICE is:"+app.DEVICE, null, null, null);
                // remove all listeners so view can be garbage collected
                // (Backbone.application.router is defined as instantiated Router in main.js)
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

        // Returns the HeaderView class
        return MainView;

    }

);