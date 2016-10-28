/*jshint node:true*/
module.exports = {
	description: 'The default blueprint for ember-cli-tachyons-shim addon.',

	normalizeEntityName: function (entityName) {
		return entityName;
	},

	afterInstall: function (options) {
		var promise = new Promise((resolve, reject) => {
			this.addPackageToProject('tachyons', '4.5.4').then((success) => {
				try {
					var fs = require('fs');

					['tachyons.css', 'tachyons.min.css'].forEach((file) => {
						fs.createReadStream('node_modules/tachyons/css/' + file)
							.pipe(fs.createWriteStream('vendor/' + file));
					});
				} catch (err) {
					throw err;
				}
			});
		});

		return promise;
	}
};
