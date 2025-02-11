const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s+/) // \s: 공백 문자, + : 하나 이상 연속 된 경우
  .map(Number);

  const N = input[0];
  const M = input[1];

  consumer = input.slice(2, 2+M);
  consumer = consumer.sort((a,b)=>a-b);

  let total = [];

  for(let i=0; i<M; i++){
    let counter = consumer.filter((arg) => arg >= consumer[i]).length;
    if(counter <= N)
      total[i] = consumer[i] * counter;
    else
      total[i] = 0;
  }

  const maxTotal = Math.max(...total);
  const maxIndex = total.findIndex(arg => arg===maxTotal);
  const maxPrice = consumer[maxIndex];

  const maxTotals = total.filter((arg)=> arg===maxTotal)
  if(maxTotals.length > 1){
    
  }


  console.log(maxPrice + " " + maxTotal);