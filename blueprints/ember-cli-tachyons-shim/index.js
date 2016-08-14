/*jshint node:true*/
module.exports = {
	description: 'The default blueprint for ember-cli-tachyons-shim addon.',

	normalizeEntityName: function (entityName) {
		return entityName;
	},

	afterInstall: function (options) {
		var promise = new Promise((resolve, reject) => {
			this.addPackageToProject('tachyons', '4.0.5').then((success) => {

				var fs = require('fs');
				var path = require('path');

				try {
					var tachyonsCssDir = path.join('node_modules', 'tachyons', 'css');

					['tachyons.css', 'tachyons.min.css'].forEach((file) => {
						fs.createReadStream(path.join(tachyonsCssDir, file))
							.pipe(fs.createWriteStream(path.join('vendor', file)));
					})
				} catch (err) {
					reject(err)
				}

			}, (failure) => {
				reject(failure);
			})
		});

		return promise;
	}
};
