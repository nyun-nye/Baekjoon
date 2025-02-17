const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const N = input[0];
const dp = new Array(N + 1).fill(0);

// dp[1] = 0 (이미 초기화됨)
for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1; // 항상 1을 빼는 경우 고려
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[N]);
