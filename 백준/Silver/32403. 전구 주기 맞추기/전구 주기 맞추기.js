const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

// N, T 설정
let N = Number(input[0][0]);
let T = Number(input[0][1]);

// 배열 a 설정
let a = input[1].map(Number);

// T의 약수 구하기
let sqrtT = Math.sqrt(T);
let divisors = [];

// 약수를 구하고 배열에 추가
for (let i = 1; i <= sqrtT; i++) {
  if (T % i === 0) {
    divisors.push(i);
    if (i !== T / i) { // 같은 약수를 두 번 추가하지 않도록
      divisors.push(T / i);
    }
  }
}

let difference = [];
let sum = 0;

for(let i=0; i<N; i++){
  for(let j=0; j<divisors.length; j++){
    difference[j] = (a[i]<divisors[j]? divisors[j] - a[i]: a[i] - divisors[j]);
  }
  sum += Math.min(...difference);
}

console.log(sum);
