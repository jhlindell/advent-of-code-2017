const chai = require('chai');
const assert = chai.assert;
const { jumps, jumps2 } = require('./day5');
const testPath1 = './day5/day5TestFile.txt';
const testPath2 = './day5/day5Input.txt';

describe('day 5 part 1 tests', function(){
  it('should process the test file correctly', function(){
    const jumpsResult = jumps(testPath1);
    assert.equal(jumpsResult, 5);
  })

  it('should properly process the given file', function(){
    const jumpsResult = jumps(testPath2);
    console.log(jumpsResult);
    assert.notEqual(jumpsResult, 0);
  })
})

describe('day 5 part 2 tests', function(){
  it('should process the test file correctly', function(){
    const jumpsResult = jumps2(testPath1);
    assert.equal(jumpsResult, 10);
  })

  it('should properly process the given file', function(){
    const jumpsResult = jumps2(testPath2);
    console.log(jumpsResult);
    assert.notEqual(jumpsResult, 0);
  })
})
