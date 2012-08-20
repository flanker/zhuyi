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
    var accommodation = new App.models.Accommodation();
    accommodation.fetch({
      success: function (accommodation) {
        var newView = new App.views.NewView({model: accommodation}).el;
        $('.main-container').html(newView);
      }
    });
  },

  recent: function () {
    var accommodations = new App.models.Accommodations();
    accommodations.fetch({
      success: function (accommodations) {
        var recentView = new App.views.RecentView({collection: accommodations}).el;
        $('.main-container').html(recentView);
      }
    });
  },

  empty: function () {
    App.app.navigate('!/new', {trigger: true});
  }

});

$(function () {
  App.helper.loadTemplates(function () {
    App.app = new App.router.AppRouter();
    Backbone.history.start();
  });
});
