require.config({
	"baseUrl": "bower_components",
	"packages": [{
		"name": "jquery",
		"location": "jquery/dist",
		"main": "jquery.min"
	}, {
		"name": "troopjs-widget-quickstart",
		"location": ".."
	}],

	"deps": [ "jquery", "require", "troopjs/main", "troopjs-widget/main" ],

	"callback": function (jQuery, localRequire) {
		localRequire([ "troopjs-widget/application" ], function (Application) {
			jQuery(function ($) {
				Application($("html"), "application").start();
			});
		});
	}
});