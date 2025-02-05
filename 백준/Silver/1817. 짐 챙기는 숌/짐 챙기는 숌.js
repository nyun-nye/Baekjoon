const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

  
const N = input[0][0]; // 책의 갯수
const M = input[0][1]; // 최대 무게 M

const books = input[1];

let counter = 1;
let sum = 0;
let nextSum = 0;

for(let i=0; i<N; i++){
    if(sum === M){
        counter++;
        sum = 0;
        nextSum = 0;
    }
    sum += books[i];
    nextSum = sum + books[i+1];
    if(nextSum > M){
        counter++;
        nextSum = 0;
        sum = 0;
    }
}
if(N === 0)
    counter = 0;

console.log(counter);
