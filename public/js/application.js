App.config.templates = [
  'new',
  'recent'
];

App.router.AppRouter = Backbone.Router.extend({

  routes: {
    '!/new': 'newRequest',
    '!/recent': 'recent',
    '*actions': 'empty'
  },

  newRequest: function () {
    var self = this;
    self.fadeOutMain(function () {
      new App.models.Accommodation().fetch({
        success: function (accommodation) {
          self.fadeInMain(new App.views.NewView({model: accommodation}).el);
        }
      });
    });
  },

  recent: function () {
    var self = this;
    self.fadeOutMain(function () {
      new App.models.Accommodations().fetch({
        success: function (accommodations) {
          self.fadeInMain(new App.views.RecentView({collection: accommodations}).el);
        }
      });
    });
  },

  empty: function () {
    App.app.navigate('!/new', {trigger: true});
  },

  fadeOutMain: function (callback) {
    var $mainContainer = $('.main-container');

    $mainContainer.fadeOut(function () {
      callback($mainContainer);
    });
  },

  fadeInMain: function (view) {
    var $mainContainer = $('.main-container');
    $mainContainer.html(view);
    $mainContainer.fadeIn();
  }

});

$(function () {
  App.helper.loadTemplates(function () {
    App.app = new App.router.AppRouter();
    Backbone.history.start();
  });
});
