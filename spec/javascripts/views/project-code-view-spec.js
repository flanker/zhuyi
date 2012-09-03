describe('App.views.ProjectCodeView', function () {

  var view;

  beforeEach(function () {
    loadTemplates(function () {
      view = new App.views.ProjectCodeView({});
    });
  });

  describe('render', function () {

    it('should have input box for project code', function () {
      expect(fieldFor('Project code', view.el)).toExist();
    });

  });

});