// View.js
// -------
define(["jquery", "backbone", "modules/models/Model", "text!templates/heading.html", "snap"],

    function($, Backbone, Model, template, Snap){

        var HeaderView = Backbone.View.extend({

            // The DOM Element associated with this view
            // el: "header",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

                // initialize snap functionality, i.e. menu slide left
                this.snapper = new Snap({
                  element: document.getElementById('content')
                });
                var self = this;
                document.getElementById('menu-navigation').addEventListener('click', function(){
                    if( self.snapper.state().state=="left" ){
                        self.snapper.close();
                    } else {
                        self.snapper.open('left');
                    }
                });
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
        return HeaderView;

    }

);