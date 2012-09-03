App.views.BusinessTypeFieldsetView = Backbone.View.extend({

  tagName: 'fieldset',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('business-type-fieldset', {legend: 'Business Type'});
    $(this.el).html(html);

    var childViews = [
      new App.views.BusinessTypeView({model: this.model}).el,
      new App.views.ProjectCodeView({model: this.model}).el
    ];

    $(this.el).append(childViews);
  }

});