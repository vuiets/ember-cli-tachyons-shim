'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerate = blueprintHelpers.emberGenerate;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate ember-cli-tachyons-shim', function () {
	setupTestHooks(this);

	it('ember-cli-tachyons-shim', function () {
		var args = ['ember-cli-tachyons-shim'];

		return emberNew()
			.then(() => emberGenerate(args, (file) => {
				console.log('file:', file);
				//expect(file('app/vendor/tachyons.css')).to.contain('foo');
			}));
	});
});
