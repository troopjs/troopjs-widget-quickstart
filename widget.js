define([ "troopjs-widget/component" ], function (Widget) {
  "use strict";

  return Widget.extend({
    "sig/start": function () {
      return this.text("This is awesome!");
    }
  });
});
