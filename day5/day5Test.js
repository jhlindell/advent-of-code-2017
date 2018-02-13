const chai = require('chai');
const assert = chai.assert;
const jumps = require('./day5');
const testPath1 = './day5/day5TestFile.txt';
const testPath2 = './day5/day5Input.txt';

describe('day 5 tests', function(){
  it('should process the test file correctly', function(){
    const jumpsResult = jumps(testPath1);
    assert.equal(jumpsResult, 5);
  })

  it('should properly process the given file', function(){
    const jumpsResult = jumps(testPath2);
    assert.notEqual(jumpsResult, 0);
  })
})
