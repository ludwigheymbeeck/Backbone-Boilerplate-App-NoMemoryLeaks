// View.js
// -------
define(["app", "jquery", "backbone", "modules/models/Model", "text!templates/footing.html"],

    function(app, $, Backbone, Model, template){

        var FooterView = Backbone.View.extend({

            // The DOM Element associated with this view
            // el: ".example",
            el: "footer",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

                "click .gotocities": "showCities",
                "click .gotousers": "showUsers",
                "click .gotohome": "showHome"

            },

            showCities: function() {
                Backbone.application.router.navigate("#cities", { trigger : true, replace : false } );
                Backbone.application.router.HeaderView.snapper.close();
            },

            showUsers: function(){
                Backbone.application.router.navigate("#users", { trigger : true, replace : false } );
                Backbone.application.router.HeaderView.snapper.close();
            },

            showHome: function(){
                Backbone.application.router.navigate("#home", { trigger : true, replace : false } );
                Backbone.application.router.HeaderView.snapper.close();
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

        // Returns the FooterView class
        return FooterView;

    }

);