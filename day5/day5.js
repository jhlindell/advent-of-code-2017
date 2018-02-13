const fs = require('fs');

function jumps(path){
  let data = fs.readFileSync(path, 'utf-8');
  let array = data.split('\n');
  let instructions = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] !== ''){
      instructions[i] = Number(array[i]);
    }
  }
  let numJumps = 0;
  let index = 0;
  let notDone = true;
  let number = 0;
  let jumpTo = 0;
  while(notDone){
    number = instructions[index];
    jumpTo = index + number;
    instructions[index]++;
    numJumps++;
    index = jumpTo;
    if(index >= instructions.length){
      notDone = false;
    }
  }
  return numJumps;
}

function jumps2(path){
  let data = fs.readFileSync(path, 'utf-8');
  let array = data.split('\n');
  let instructions = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] !== ''){
      instructions[i] = Number(array[i]);
    }
  }
  let numJumps = 0;
  let index = 0;
  let notDone = true;
  let number = 0;
  let jumpTo = 0;
  while(notDone){
    number = instructions[index];
    jumpTo = index + number;
    if(number >= 3){
      instructions[index]--;
    } else {
      instructions[index]++;
    }
    numJumps++;
    index = jumpTo;
    if(index >= instructions.length){
      notDone = false;
    }
  }
  return numJumps;
}

module.exports = {
  jumps,
  jumps2
};
