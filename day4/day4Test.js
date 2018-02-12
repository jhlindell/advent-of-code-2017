const chai = require('chai');
const assert = chai.assert;
const checkPassPhrases = require('./day4');
const inputPath = './day4/day4Input.txt';

describe('Day 4 tests', function(){
  it('should properly check passphrase data', function(){
    let result = checkPassPhrases(inputPath);
    console.log("number of good phrases: ", result);
    assert.notEqual(result, 0);
  })
})
