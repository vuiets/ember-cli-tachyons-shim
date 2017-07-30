var chai = require('chai');
var chaifs = require('chai-fs');
var glob = require('glob');
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

var expect = chai.expect;
chai.use(chaifs);

describe.skip('acceptance: import tachyons css', function () {
	this.timeout(300000);

	var app;

	before(function () {
		app = new AddonTestApp();
		return app.create('sandbox');
	});

	it('imports tachyons.css by default', function () {
		return app.runEmberCommand('build')
			.then(function () {
				var borderBoxClass = new RegExp('.border-box { box-sizing: border-box; }', 'i'),
					dbClass = new RegExp('.db { display: block; }', 'i'),
					ptOClass = new RegExp('.pt0 { padding-top: 0; }'),
					vendorCSSPath = app.filePath('dist/assets/vendor.css');

				expect(vendorCSSPath).to.be.a.file();
				expect(vendorCSSPath).to.be.a.file().and.not.empty;
				expect(vendorCSSPath).to.have.content.that.match(borderBoxClass);
				expect(vendorCSSPath).to.have.content.that.match(dbClass);
				expect(vendorCSSPath).to.have.content.that.match(ptOClass);
			})
	});

	it('imports tachyons.min.css for production builds with --environment=production', function () {
		var legendClass = new RegExp('legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}', 'i'),
			vendorCSSPath = 'dist/assets/vendor-*.css';

		return app.runEmberCommand('build', '--environment=production')
			.then(function () {
				expect(fingerprintedAssetAt(vendorCSSPath)).to.be.a.file();
				expect(fingerprintedAssetAt(vendorCSSPath)).to.be.a.file().and.not.empty;
			})
	});

	function fingerprintedAssetAt(path) {
		var globPath = app.filePath(path);
		var files = glob.sync(globPath);

		expect(files.length).to.equal(1, globPath);

		return files[0];
	}
});
