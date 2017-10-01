/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
	let app = new EmberAddon(defaults, {
		/**
		 * Add options here
		 *
		 * To prevent tachyons import set,
		 *
		 *  Tachyons: {
		 * 		css: false
		 * 	}
		 */
	});

	return app.toTree();
};
