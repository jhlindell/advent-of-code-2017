function spiralMemory(number){
  if(number === 1){
    return 0;
  }
  let ring = 1;
  let oddRoot = 1;
  let square = 0;
  let middle;
  let fromRing;
  let fromMiddle;
  let nextCorner;
  let thisCorner;
  let notDone = true;
  while(notDone){
    ring++;
    oddRoot += 2;
    square = oddRoot * oddRoot;
    if(square > number){
      notDone = false;
    }
  }
  notDone = true;
  thisCorner = square;
  while(notDone){
    nextCorner = thisCorner - (oddRoot - 1);
    if(number > nextCorner){
      notDone = false;
    } else {
      thisCorner = nextCorner;
    }
  }
  middle = thisCorner - (ring - 1);
  fromMiddle = number - middle;
  fromRing = ring - 1;
  return fromMiddle + fromRing;
}

module.exports = spiralMemory;
