const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s+/) // \s: 공백 문자, + : 하나 이상 연속 된 경우
  .map(Number);

  const N = input[0];
  let rope = input.slice(1, N+1)
  rope = rope.sort((a,b)=>b-a); // 오름차순
//   console.log(rope);

let maxWeight = [];

for(let i=0; i<N; i++){
    // maxWeight[i] = rope[i] * (rope.filter(arg => arg <= rope[i]).length);
    maxWeight[i] = rope[i] * (i+1);
}
// console.log(maxWeight);

console.log(Math.max(...maxWeight));