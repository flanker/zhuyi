Backbone.MeningesView = {
  extend: function (o) {

    var coerceType = function (originalValue, value) {
        if (_(originalValue).isNumber()) {
          var parsedValue = parseFloat(value);
          value = _(parsedValue).isNaN() ? value : parsedValue;
          value = value === '' ? null : value;
        }
        if (value === '' && originalValue === null) {
          value = null;
        }
        return value;
    }

    var findNextModel = function (startingModel, pathElement) {
      if (pathElement.indexOf(":") === -1) {
        return startingModel.get(pathElement);
      }
      else {
        var a = pathElement.split(":");
        return startingModel.get(a[0]).at(parseInt(a[1]));
      }
    };

    var extractValue = function (element) {
      if (element.type === "checkbox") {
        return element.checked;
      }
      if (element.type === "radio") {
        return $("input[name='" + element.name + "']:checked").val();
      }
      return element.value || '';
    };

    o.events = o.events || {};
    o.events["blur .meninges"] = 'updateAttributeForEvent';
    o.events["change input.meninges[type='checkbox']"] = 'updateAttributeForEvent';
    o.events["change input.meninges[type='radio']"] = 'updateAttributeForEvent';
    o.events["change select.meninges"] = 'updateAttributeForEvent';

    o.updateAttribute = function(pathItems, value) {
      var currentModel = this.model;
      var originalModel = this._originalModel;
      for (var i = 0; i < pathItems.length - 1; i++) {
        currentModel = findNextModel(currentModel, pathItems[i]);
        originalModel = findNextModel(originalModel, pathItems[i]);
      }

      var key = _(pathItems).last();

      if (key.indexOf(":") === -1) {
        var newValueHash = {};
        var oldValue = currentModel.get(key);
        var originalValue = originalModel ? originalModel.get(_(pathItems).last()) : null;
        var value = coerceType(originalValue, value);

        var sameValue = (oldValue === value);
        newValueHash[_(pathItems).last()] = value;
        if (!sameValue) {
          currentModel.set(newValueHash);
        }
      } else {
        var elements = key.split(":");
        var collection = currentModel.get(elements[0]);
        var index = elements[1];
        collection[index] = coerceType(collection[index], value);
      }
    };

    o.updateAttributeForEvent = function (event) {
      var pathItems = event.target.name.split(".");
      var value = extractValue(event.target);
      o.updateAttribute.call(this, pathItems, value)
      event.stopImmediatePropagation();
    };

    var render = o.render;
    o.render = function () {
      this._originalModel = this.model.clone();
      render.call(this);
      return this;
    };

    var initialize = o.initialize;
    o.initialize = function () {
      initialize && initialize.call(this);
      this._originalModel = this.model.clone();
      var fetch = this.model.fetch;
      var save = this.model.save;
      var that = this;
      this.model.fetch = function (options) {
        options = options || {};
        var onSuccess = options.success;
        options.success = function (model, resp, options) {
          that._originalModel = model.clone();
          onSuccess && onSuccess(model, resp, options);
        };

        fetch.call(that.model, options);
      }
      this.model.save = function (attrs, options) {
        options = options || {};
        var onSuccess = options.success;
        options.success = function (model, resp, options) {
          that._originalModel = model.clone();
          onSuccess && onSuccess(model, resp, options);
        };

        save.call(that.model, attrs, options);
      }
    };

    return Backbone.View.extend(o);
  }
};
