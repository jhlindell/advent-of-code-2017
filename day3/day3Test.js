const chai = require('chai');
const assert = chai.assert;
const spiralMemory = require('./day3');

describe('day 3 part 1 tests', function(){
  it('should return 0', function(){
    let result = spiralMemory(1);
    assert.equal(result, 0);
  });

  it('should return 0', function(){
    let result = spiralMemory(12);
    assert.equal(result, 3);
  });

  it('should return 2', function(){
    let result = spiralMemory(23);
    assert.equal(result, 2);
  });

  it('should return 31', function(){
    let result = spiralMemory(1024);
    assert.equal(result, 31);
  });

  it('should calculate the problem answer', function(){
    let result = spiralMemory(265149);
    console.log("result: ", result);
    assert.notEqual(result, 0);
  })
})
