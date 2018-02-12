const fs = require('fs');

function checksum(path){
  let data = fs.readFileSync(path, 'utf-8');
  let lines = data.split('\n');
  let result = 0;
  for(let i = 0; i < lines.length; i++){
    let numbers = lines[i].split('\t');
    let highNum = 0;
    let lowNum = 10000000;
    for(let j=0; j<numbers.length; j++){
      if(numbers[j] < lowNum){
        lowNum = Number(numbers[j]);
      }
      if(numbers[j] > highNum){
        highNum = Number(numbers[j]);
      }
    }
    result += (highNum - lowNum);
    // console.log("highNum: ", highNum, " lowNum: ", lowNum, " result: ", result);
  }
  return result;
}

module.exports = checksum;
