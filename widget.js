define([ "troopjs-widget/component" ], function (Widget) {
	return Widget.extend({
		"sig/start": function () {
			return this.text("This is awesome!");
		}
	})
});