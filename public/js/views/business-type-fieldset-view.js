App.views.BusinessTypeFieldsetView = Backbone.View.extend({

  tagName: 'fieldset',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('business-type-fieldset', {legend: 'Business Type'});
    $(this.el).html(html);
  }

});