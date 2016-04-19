var assert = require('assert');
var calculator = require('../index');

describe('calculator', function() {
    describe('add function', function() {
        it('adds numbers', function () {
            var result = calculator.add(1, 1);
            assert.equal(result, 2);
        });
    });
});
