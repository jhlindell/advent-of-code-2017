const chai = require('chai');
const assert = chai.assert;
const {
  checkPassPhrases,
  checkAnagrams,
  areAnagrams } = require('./day4');
const inputPath = './day4/day4Input.txt';

describe('Day 4 part 1 tests', function(){
  it('should properly check passphrase data', function(){
    let result = checkPassPhrases(inputPath);
    console.log("number of good phrases: ", result);
    assert.notEqual(result, 0);
  })
})

describe('Day 4 part 2 tests', function(){
  it('should properly check anagram data', function(){
    let result = checkAnagrams(inputPath);
    console.log("number of good phrases: ", result);
    assert.notEqual(result, 0);
  })

  it('should properly find anagrams', function(){
    let result1 = areAnagrams('food', 'doof');
    let result2 = areAnagrams('food', 'dog');
    assert.equal(result1, true);
    assert.equal(result2, false);
  })
})
