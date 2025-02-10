const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

  const N = Number(input[0][0]);
  const K = Number(input[0][1]);

  let counter = K;
  let numArr = Array.from(input[1][0]);
  let stack = [];

  for(let digit of numArr){
    while(stack[stack.length - 1] < digit && stack.length && counter){
        stack.pop();
        counter--;
    }
    stack.push(digit);
  }

    while(stack.length > N-K){
        stack.pop();
    }

  console.log(stack.join(''));

