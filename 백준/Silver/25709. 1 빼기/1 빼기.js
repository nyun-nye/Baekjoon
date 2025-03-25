const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

let N = Number(input[0][0]);
let M = N.toString().split("");

let count = 0;

// N이 0이 될 때까지 반복
while (N !== 0) {
  // '1'을 찾고 카운트
  let index = M.indexOf('1');
  if (index >= 0) {
    M.splice(index, 1);  // '1'을 제거
    count++;  // '1'을 찾았으므로 카운트 증가

    // 배열 M에서 앞의 '0'을 모두 제거
    while (M[0] === '0') {
      M.splice(0, 1);
    }

    // M이 비어 있지 않으면 N을 갱신
    if (M.length > 0) {
      N = Number(M.join(''));
    } else {
      N = 0;
    }
  } else {
    // '1'이 없으면 N을 1 감소시키고, 다시 문자 배열로 변환
    N--;
    M = N.toString().split("");
    count++;  // '1'이 없어서 감소시킬 때마다 카운트 증가
  }
}

console.log(count);
