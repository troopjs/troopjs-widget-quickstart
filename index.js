require.config({
	"baseUrl": "bower_components",
	"packages": [ "jquery", "when", "poly", "troopjs", "troopjs-widget", "troopjs-widget-quickstart" ].map(function (name) {
		var main;
		var location;

		switch (name) {
			case "jquery":
				location = "jquery/dist";
				main = "jquery.min";
				break;

			case "when":
				main = "when";
				break;

			case "poly":
				main = "es5";
				break;

			case "troopjs-widget-quickstart":
				location = "..";
				/* falls through */

			default :
				main = "main.min";
				break;
		}

		return {
			"name": name,
			"location": location,
			"main": main
		}
	}),

	"deps": [ "jquery", "require", "troopjs", "troopjs-widget" ],

	"callback": function (jQuery, localRequire) {
		localRequire([ "troopjs-widget/application" ], function (Application) {
			jQuery(function ($) {
				Application($("html"), "application").start();
			});
		});
	}
});