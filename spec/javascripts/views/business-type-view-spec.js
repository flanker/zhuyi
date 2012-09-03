describe('App.views.BusinessTypeView', function () {

  var view;
  var model;

  beforeEach(function () {
    model = new App.models.Accommodation({business_type: 'Business'});
    loadTemplates(function () {
      view = new App.views.BusinessTypeView({model: model});
    });
  });

  describe('render', function () {

    it('should have the options', function () {
      expect(fieldFor('Business Type', view.el)).toHaveOptions(['Business', 'Personal', 'Guest visit']);
    });

    it('should defalut to Business', function () {
      expect(optionFor('Business', view.el)).toBeChecked();
    });

  });

  describe('select', function () {

    beforeEach(function () {
      select('Personal', view.el);
    });

    it('should update the select business type', function () {
      expect(model.get('business_type')).toEqual('Personal');
    });

  });

});