'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('getAdd function test', () => {
    it('should return 2', () => {
        var result = index.getAdd(1,1);
        expect(result).to.equal(2);
    });
    it('should return 4', () => {
        var result = index.getAdd(1,1);
        expect(result).to.equal(4);
    });
});
