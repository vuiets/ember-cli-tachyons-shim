var expect = require('chai').expect;
var RSVP = require('rsvp');
var request = RSVP.denodeify(require('request'));
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('acceptance: serve tachyons', function () {
	this.timeout(300000);

	var app;

	before(function () {
		app = new AddonTestApp();
		return app.create('sandbox')
			.then(function () {
				return app.startServer({
					additionalArguments: ['--serve-assets']
				});
			});
	});

	after(function () {
		if (!!app.server) {
			return app.stopServer();
		}
	});

	it('/assets/vendor.css', function () {
		return request('http://localhost:49741/assets/vendor.css')
			.then(function (response) {
				expect(response.statusCode).to.equal(200);
				expect(response.headers['content-type']).to.contain('text/css');
				expect(response.body).to.contain('.border-box { box-sizing: border-box; }');
				expect(response.body).to.contain('.db { display: block; }');
				expect(response.body).to.contain('.pt0 { padding-top: 0; }');
			});
	});
});
