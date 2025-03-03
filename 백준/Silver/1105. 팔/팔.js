const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s+/) // \s: 공백 문자, + : 하나 이상 연속 된 경우
  .map(Number);

  const L = input[0].toString();
  const R = input[1].toString();

  let counter = 0;
  if(L.length != R.length){
    console.log(counter);
  }else{
    for(let i=0; i<L.length; i++){
      if(L[i] === R[i] && L[i] == 8){
        counter++;
      }else if(L[i] != R[i]){
        break;
      }
    }
    console.log(counter);
  }

  