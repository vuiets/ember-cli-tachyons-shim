var chai = require('chai');
var chaifs = require('chai-fs');
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

var expect = chai.expect;
chai.use(chaifs);

// TODO Fix Blueprint tests
describe.skip('acceptance: default blueprint drops tachyons in \'vendor\' dir', function () {
	this.timeout(300000);

	var app;

	before(function () {
		app = new AddonTestApp();
		return app.create('sandbox');
	});

	it('drops both tachyons.css and minified tachyons.min.css', function () {
		return app.runEmberCommand('generate', 'ember-cli-tachyons-shim')
			.then(function () {
				var tachyonsPath = app.filePath('vendor/tachyons.css'),
					tachyonsMinPath = app.filePath('vendor/tachyons.min.css');

				[tachyonsPath, tachyonsMinPath].forEach(function(filePath) {
					expect(filePath).to.be.a.file();
					expect(filePath).to.be.a.file().and.not.empty;
				});
			});
	});
});
