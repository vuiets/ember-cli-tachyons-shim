/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
	var app = new EmberAddon(defaults, {
		/**
		 * Add options here
		 *
		 * To prevent tachyons import set,
		 *
		 * 	Tachyons: {
		 * 		css: false
		 * 	}
		 */
	});

	return app.toTree();
};
