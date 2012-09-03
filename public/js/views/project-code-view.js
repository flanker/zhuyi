App.views.ProjectCodeView = Backbone.View.extend({

  className: 'control-group',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('project-code', {});
    $(this.el).html(html);
  }

});