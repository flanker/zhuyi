App.models.Accommodation = Backbone.Model.extend({

  urlRoot: '/accommodations',

  url: function() {
    var base = this.urlRoot;
    var id = this.isNew() ? 'new' : this.id;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(id);
  }

});