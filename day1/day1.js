function captcha(string){
  let array = string.split('');
  let resultSum = 0;
  let nextNum;
  let length = array.length;
  for(let i = 0; i < length; i++){
    if(i === length-1){
      nextNum = array[0];
    } else {
      nextNum = array[i+1];
    }
    if(array[i] === nextNum){
      resultSum += Number(array[i]);
    }
  }
  return resultSum;
}

module.exports = captcha;
