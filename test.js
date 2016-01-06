const sum = require('.');
const assert = require('chai').assert;

describe('sum', () => {
	it('should sum', () => {
		assert.equal(sum(3, 2), 5);
		assert.notEqual(sum(3, 2), 6);
	});
});