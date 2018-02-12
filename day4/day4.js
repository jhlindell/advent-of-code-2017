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
            // console.log(array[j], array[k]);
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

module.exports = checkPassPhrases;
