App.views.RecentView = Backbone.View.extend({

  tagName: 'section',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('recent', {
      accommodations: this.collection
    });
    $(this.el).html(html);
  }

});
