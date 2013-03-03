'use strict';
/* global describe, beforeEach, it, expect, browser, repeater */
describe('PuntSpotter', function(){
	beforeEach(function() {
      browser().navigateTo('/');
    });

	it('should start by showing a list of punts', function(){
		expect(repeater('.punt-browser li').count()).toBeGreaterThan(100);
	});

});