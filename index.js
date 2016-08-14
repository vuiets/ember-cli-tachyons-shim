/* jshint node: true */
'use strict';

var defaults = {
	css: true
};

module.exports = {
	name: 'ember-cli-tachyons-shim',

	included: function (app, parentAddon) {
		this._super.included.apply(this, arguments);

		//  Tachyons CSS -> assets/vendor.css
		this.importTachyons(app);
	},

	importTachyons(app) {
		var options = (app && app.options['Tachyons']) || {},
			cssOption = options.css,
			importCSS = (cssOption === null || cssOption === undefined) ? defaults.css : cssOption;

		if (importCSS) {
			app.import({
				development: 'vendor/tachyons.css',
				production: 'vendor/tachyons.min.css'
			});
		}
	}
};
