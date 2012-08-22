App.views.NewView = Backbone.MeningesView.extend({

  tagName: 'section',

  id: 'forms',

  events: {
    'click button[type="submit"]': 'save'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('new', {});
    $(this.el).html(html);
    $('.date-input', this.el).datepicker({autoclose: true});
  },

  save: function (e) {
    e.preventDefault();
    this.model.save(null, {
      success: function () {
        App.app.navigate('!/recent', {trigger: true});
      },
      error: function (accommodation, respond) {
        console.log('error');
      }
    });
  }

});
