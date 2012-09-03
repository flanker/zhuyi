describe('App.views.NewView', function () {

  var view;
  var model;

  beforeEach(function () {
    model = new App.models.Accommodation();
    loadTemplates(function () {
      view = new App.views.NewView({model: model});
    });
  });

  describe('render', function () {

    it('should have business type field set', function () {
      expect(view.el).toHaveLegend('Business Type');
    });

  });

});
