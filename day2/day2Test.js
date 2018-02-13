const chai = require('chai');
const assert = chai.assert;
const { checksum, checksum2 } = require('./day2');
const inputPath = './day2/input.txt';
const test2Path = './day2/part2Test.txt';

describe('Day 2 part 1 tests', function(){
  it('should properly calculate checksum problem data', function(){
    let result = checksum(inputPath);
    console.log("test result: ", result);
    assert.notEqual(result, 0);
  })
})

describe('Day 2 part 2 tests', function(){
  it('should properly calculate checksum2 test data', function(){
    let result = checksum2(test2Path);
    console.log("test result: ", result);
    assert.equal(result, 9);
  })

  it('should calculate and log checksum2 problem data', function(){
    let result = checksum2(inputPath);
    console.log("test result: ", result);
    assert.notEqual(result, 0);
  })
})
