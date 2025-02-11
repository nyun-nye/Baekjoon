const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

  const N = input[0];
  let dasom = input[1];
  let vote = input.slice(2, N+1);

  let counter = 0;

  while(true){
    let max = Math.max(...vote);
    let index = vote.findIndex(arg => arg === max);

    if(max < dasom)
      break;
    else{
      vote[index]--;
      dasom++;
      counter++;
    }
  }

  console.log(counter);