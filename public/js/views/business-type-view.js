App.views.BusinessTypeView = Backbone.MeningesView.extend({

  className: 'control-group',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('business-type', {});
    $(this.el).html(html);
  }

});