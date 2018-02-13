const chai = require('chai');
const assert = chai.assert;
const {
  reMemory,
  findHighest,
  redistributeBlocks,
  getMemorySnapshot,
  checkMemorySnapshot
} = require('./day6');

const test1 = [0,2,7,0];
const test2 = [4,1,15,12,0,9,9,5,5,8,7,3,14,5,12,3];

describe('day 6 tests', function(){
  it('should properly return the index of the highest element in the array', function(){
    let highestNum = findHighest(test2);
    assert.equal(highestNum, 2);
  });

  it('should properly solve the given case with a result of 5', function(){
    let numberOfReallocations = reMemory(test1);
    assert.equal(numberOfReallocations, 5);
  });

  it('should properly redistribute blocks in an array', function(){
    let finishedArray1 = redistributeBlocks([0,2,7,0], 2);
    let finishedArray2 = redistributeBlocks([0,2,3,4], 3);
    assert.deepEqual(finishedArray1, [2,4,1,2]);
    assert.deepEqual(finishedArray2, [1,3,4,1]);
  })

  it('should properly stringify a memory array state', function(){
    let string = getMemorySnapshot([2,4,1,2]);
    assert.deepEqual(string, '2,4,1,2');
  })

  it('should properly test the checkMemorySnapshot function', function(){
    let string1 = '2,4,1,2';
    let string2 = '3,5,2,6';
    let memory = ['3,5,2,6', '5,3,2,1', '9,8,7,5'];
    let result1 = checkMemorySnapshot(memory, string1);
    let result2 = checkMemorySnapshot(memory, string2);
    assert.equal(result1, true);
    assert.equal(result2, false);
  })

  it('should log out the output of the problem set', function(){
    let numberOfReallocations = reMemory(test2);
    console.log('numberOfReallocations: ', numberOfReallocations);
    assert.notEqual(numberOfReallocations, 0);
  })
});
