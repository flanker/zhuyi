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

var fieldFor = function (label, scope) {
  var labelElement = $('label:contains("' + label + '")', scope);
  return $('#' + labelElement.prop('for'), scope);
};

var optionFor = function (option, scope) {
  return $('option:contains("' + option + '")', scope);
};

var select = function (option, scope) {
  $('select', scope).val(option).trigger('change');
};

beforeEach(function () {

  this.addMatchers({

    toHaveLegend: function (expectedText) {
      if (!(this.actual instanceof jQuery)) {
        this.actual = $(this.actual);
      }
      this.message = function () {
        return "Expected [" + this.actual.text() + "] to be [" + expectedText + "]";
      };
      return _(this.actual.text()).clean() === expectedText;
    },

    toHaveOptions: function (expectedOptions) {
      if (!(this.actual instanceof jQuery)) {
        this.actual = $(this.actual);
      }
      var actualOptions = _(this.actual.children()).map(function (option) {
        return _(option.text).clean();
      });
      return _(actualOptions).difference(expectedOptions).length === 0 &&
        _(expectedOptions).difference(actualOptions).length === 0;
    }

  });

});
