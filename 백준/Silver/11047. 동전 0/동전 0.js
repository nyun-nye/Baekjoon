const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));


  const N = input[0][0];
  let K = input[0][1];

  let num = 0;
  for(let i=N; i>0; i--){
    if(K === 0)
        break;
    if(K >= input[i][0]){
        num += Math.floor(K/input[i][0]);
        K %= input[i][0];
    }
  }

  console.log(num);
