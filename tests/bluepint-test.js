'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerate = blueprintHelpers.emberGenerate;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate', function () {
	setupTestHooks(this);

	it('ember-cli-tachyons-shim', function () {
		var args = ['ember-cli-tachyons-shim'];

		return emberNew()
			.then(function () {
				emberGenerate(args)
			});
	});

	afterEach(function() {
		console.log(arguments);
	});
});
