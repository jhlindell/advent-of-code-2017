const chai = require('chai');
const assert = chai.assert;
const checksum = require('./day2');
const inputPath = './day2/input.txt';

describe('Day 2 tests', function(){
  it('should properly calculate checksum data', function(){
    let result = checksum(inputPath);
    console.log("test result: ", result);
    assert.notEqual(result, 0);
  })
})
