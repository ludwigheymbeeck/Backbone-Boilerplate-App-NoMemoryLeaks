// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "modules/models/Model", "modules/views/HeaderView", "modules/views/FooterView", "modules/views/MainView", 
    "modules/views/CitiesView", "modules/views/UsersView", "modules/collections/Collection"],

    function($, Backbone, Model, HeaderView, FooterView, MainView, CitiesView, UsersView, Collection) {

        var MainRouter = Backbone.Router.extend({

            initialize: function() {

                // store router in the Backbone (global) object so we can refer to it 
                // and remove all listeners from a view that needs to be garbage collected
                Backbone.application = {};
                Backbone.application.router = this;

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "home": "index",
                "cities": "cities",
                "users": "users"

            },

            setup: function () {

                // emit stop listening event
                this.trigger('stopListening');

                if (!this.HeaderView) {
                    this.HeaderView = new HeaderView({
                        el: '.header'
                    });
                }
                if (!this.FooterView) {
                    this.FooterView = new FooterView({
                        el: '.footer'
                    });
                }

            },

            index: function() {

                this.setup();
                // Instantiates a new view which will render the header text to the page
                if (!this.MainView) {
                    // console.log("this.MainView not instantiated yet...");
                    this.MainView = new MainView();
                    // this.MainView = new MainView({ el: 'section' });
                } else {
                    this.MainView.render();
                }

                $('.navigation-bar__title').html("Home");

            },

            cities: function() {

                this.setup();
                // Instantiates a new view which will render the header text to the page
                if (!this.CitiesView) {
                    // console.log("this.CitiesView not instantiated yet...");
                    this.CitiesView = new CitiesView();
                    // this.CitiesView = new CitiesView({ el: 'section' });
                } else {
                    this.CitiesView.render();
                }

                $('.navigation-bar__title').html("Cities");
            },

            users: function() {

                this.setup();
                // Instantiates a new view which will render the header text to the page
                if (!this.UsersView) {
                    // console.log("this.UsersView not instantiated yet...");
                    this.UsersView = new UsersView();
                    // this.UsersView = new UsersView({ el: 'section' });
                } else {
                    this.UsersView.render();
                }

                $('.navigation-bar__title').html("Users");
            }

        });

        // Returns the Router class
        return MainRouter;
    }

);