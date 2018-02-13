const fs = require('fs');

function checkPassPhrases(path){
  let data = fs.readFileSync(path, 'utf-8');
  let goodPhrases = 0;
  let lines = data.split('\n');
  for(let i = 0; i < lines.length; i++){
    if(lines[i]){
      let array = lines[i].split(' ');
      let result = true;
      for(let j = 0; j< array.length; j++){
        for(let k = j+1; k < array.length; k++){
          if(array[j] === array[k]){
            result = false;
          }
        }
      }
      if(result){
        goodPhrases++;
      }
    }
  }
  return goodPhrases;
}

function checkAnagrams(path){
  let data = fs.readFileSync(path, 'utf-8');
  let goodPhrases = 0;
  let lines = data.split('\n');
  for(let i = 0; i < lines.length; i++){
    if(lines[i]){
      let array = lines[i].split(' ');
      let result = true;
      for(let j = 0; j< array.length; j++){
        for(let k = j+1; k < array.length; k++){
          if(areAnagrams(array[j], array[k])){
            result = false;
          }
        }
      }
      if(result){
        goodPhrases++;
      }
    }
  }
  return goodPhrases;
}

function areAnagrams(word1, word2){
  if(word1.length !== word2.length){
    return false;
  }
  let array1 = word1.split('').sort();
  let array2 = word2.split('').sort();
  for(let l = 0; l < word1.length; l++){
    if(array1[l] !== array2[l]){
      return false;
    }
  }
  return true;
}

module.exports = {
  checkPassPhrases,
  checkAnagrams,
  areAnagrams
};
