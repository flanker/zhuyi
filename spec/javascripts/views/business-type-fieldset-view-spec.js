describe('App.views.BusinessTypeFieldsetView', function () {

  var view;
  var model;

  beforeEach(function () {
    model = new App.models.Accommodation();
    loadTemplates(function () {
      view = new App.views.BusinessTypeFieldsetView({model: model});
    });
  });

  describe('render', function () {

    it('should have fieldset legend', function () {
      expect(view.el).toHaveLegend('Business Type');
    });

    it('should have business type field', function () {
      expect(fieldFor('Business Type', view.el)).toExist();
    });

    it('should have business type field', function () {
      expect(fieldFor('Project code', view.el)).toExist();
    });

  });

});
