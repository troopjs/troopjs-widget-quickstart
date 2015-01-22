/*globals module:false*/
module.exports = function(grunt) {
	"use strict";

	// Configure grunt
	grunt.initConfig({
		"pkg": grunt.file.readJSON("bower.json"),

		"build": {
			"src": ".",
			"dist": "dist"
		},

		"requirejs": {
			"options": {
				"mainConfigFile": "index.js",
				"appDir": "<%= build.src %>",
				"dir": "<%= build.dist %>",
				"optimize": "none",
				"optimizeCss": "none",
				"skipDirOptimize": true,
				"keepBuildDir": true,
				"fileExclusionRegExp": /^(?:\.(?!travis|gitignore)|node_modules|test|(?:version|Gruntfile)\.js|(?:package|bower)\.json)/,
				"rawText": {
					"troopjs-widget-quickstart/version": "define([], { 'toString': function () { return <%= JSON.stringify(pkg.version) %>; } });\n"
				}
			},

			"bundles": {
				"options": {
					"modules": [{
						"name": "troopjs-widget-quickstart/main",
						"exclude": [
							"jquery",
							"when/when",
							"poly/es5"
						],
						"excludeShallow": [
							"troopjs-widget-quickstart/main"
						]
					}]
				}
			}
		},

		"clean": {
			"dist": ["<%= build.dist %>"]
		},

		"uglify": {
			"options": {
				"report": "min",
				"preserveComments": false
			},
			"bundles": {
				"files": [{
					"expand": true,
					"dest": "<%= build.dist %>",
					"cwd": "<%= build.dist %>",
					"src": [ "main.js" ],
					"ext": ".min.js"
				}]
			}
		}
	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("compile", [ "requirejs" ]);
	grunt.registerTask("compress", [ "uglify" ]);
	grunt.registerTask("default", [ "compile", "compress" ]);
};
