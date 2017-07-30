var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present (TDD)', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});

describe('String', function() {
	describe('#StringLength', function() {
		it('The String Length of JackSisco should return 9 (BDD)', function() {
			"JackSisco".should.have.lengthOf(9);
		});
	});
});

describe('Level', function() {
	describe('#LevelValue', function() {
		it('JackSisco is at Level 100 (BDD)', function() {
			expect(100).to.equal(10*10);
		});
	});
});