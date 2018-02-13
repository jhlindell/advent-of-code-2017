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
  console.log("final number of jumps: ", numJumps);
  return numJumps;
}

module.exports = jumps;
