const fs = require('fs');

function checksum(path){
  let data = fs.readFileSync(path, 'utf-8');
  let lines = data.split('\n');
  let result = 0;
  for(let i = 0; i < lines.length; i++){
    if(lines[i]!== ''){
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
    }
  }
  return result;
}

function checksum2(path){
  let data = fs.readFileSync(path, 'utf-8');
  let lines = data.split('\n');
  let result = 0;
  let num1, num2;
  for(let k = 0; k < lines.length; k++){
    if(lines[k] !== ''){
      let numbers = lines[k].split('\t');
      for(let l = 0; l<numbers.length; l++){
        num1 = numbers[l];
        for(let m = 0; m<numbers.length; m++){
          num2 = numbers[m];
          if(l !== m){
            if(num1 % num2 === 0){

              result += (num1/num2);
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  checksum,
  checksum2
};
