App.config.templates = [
  'new',
  'recent',
  'business-type-fieldset'
];

var templatesLoaded = false;

var loadTemplates = function (callback) {
  if (templatesLoaded === false) {
    runs(function () {
      App.helper.loadTemplates(function () {
        templatesLoaded = true;
      }, {
        publicPath: '/public'
      });
    });

    waitsFor(function () {
      return templatesLoaded;
    }, 3000);

  }

  if (callback) {
    runs(callback);
  }
};

beforeEach(function () {

  this.addMatchers({

    toHaveLegend: function (text) {
      if (!(this.actual instanceof jQuery)) {
        this.actual = $(this.actual);
      }
      this.message = function () {
        return "Expected [" + this.actual.text() + "] to be [" + text + "]";
      };
      return _(this.actual.text()).clean() === text;
    }

  });

});
