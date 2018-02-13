function reMemory(input){
  let memory = input;
  let index = 0;
  let memoryState = [];
  let blocks = 0;
  let notDone = true;
  let currentMemoryState;
  let iterations = 0;
  while(notDone){
    index = findHighest(memory);
    redistributeBlocks(memory, index);
    currentMemoryState = getMemorySnapshot(memory);
    let check = checkMemorySnapshot(memoryState, currentMemoryState);
    if(check){
      memoryState.push(currentMemoryState);
    } else {
      notDone = false;
    }
    iterations++;
  }
  return iterations;
}

function findHighest(array){
  let highest = 0;
  let index = 0;
  for(let i = 0; i< array.length; i++){
    if(array[i] > highest){
      highest = array[i];
      index = i;
    }
  }
  return index;
}

function redistributeBlocks(array, startIndex){
  let lastIndex = array.length - 1;
  let numBlocks = array[startIndex];
  array[startIndex] = 0;
  k = startIndex + 1;
  if(k > lastIndex){
    k=0;
  }
  for(j = numBlocks; j > 0; j--){
    array[k]++;
    if(k >= lastIndex){
      k = 0;
    } else {
      k++;
    }
  }
  return array;
}

function getMemorySnapshot(array){
  let string = ''
  for(l = 0; l < array.length; l++){
    string += array[l];
    if(l < array.length-1){
      string += ','
    }
  }
  return string;
}

function checkMemorySnapshot(array, string){
  for(let m = 0; m< array.length; m++){
    if(string === array[m]){
      return false;
    }
  }
  return true;
}

module.exports = {
  reMemory,
  findHighest,
  redistributeBlocks,
  getMemorySnapshot,
  checkMemorySnapshot
};
