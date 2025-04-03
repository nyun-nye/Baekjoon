const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

  const N = Number(input[0][0]);
  let works = input.slice(1, N + 1).map((row) => row.map(Number));
  const sortedWorks = works.sort((a, b) => b[1] - a[1]);

  let plan = Array(N).fill(0);

  sortedWorks.forEach((work) => {
    let index = work[0]-1;
    if(plan[index] === 0){
      plan[index] = work[1];
    }else{
      while(index >= 0){
        if(plan[index] === 0){
          plan[index] = work[1];
          break;
        }else{
          index--;
        }
      }
    }
  })

  console.log(plan.reduce((acc, cur) => acc+cur, 0));