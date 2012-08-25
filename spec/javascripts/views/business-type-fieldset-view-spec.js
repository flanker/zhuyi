describe('App.views.BusinessTypeFieldsetView', function () {

  var view;

  beforeEach(function () {
    loadTemplates(function () {
      view = new App.views.BusinessTypeFieldsetView();
    });
  });

  describe('render', function () {

    it('should have fieldset legend', function () {
      expect(view.el).toHaveLegend('Business Type');
    });

  });

});
