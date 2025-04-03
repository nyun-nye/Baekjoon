const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

  // 막대기 1개 = 점과 점 사이의 거리(선)
  // 막대기 2개 이상: 가장 긴 변의 길이 <= 나머지 길이의 합

  const N = Number(input[1][0]); // 막대기 개수

  const start = input[0].slice(0, 3).map(Number); // 시작점
  const end = input[0].slice(3, 6).map(Number); // 끝점
  const lines = input[2].map(Number); // 막대기들

  const distance = Math.sqrt((end[0] - start[0]) **2 + (end[1] - start[1])**2 + (end[2] - start[2])**2);

  if(N === 1){
    if(lines[0] === distance){
      console.log("YES");
    }else{
      console.log("NO");
    }
  } else{
    lines.push(distance);
    const max = Math.max(...lines);
    const restLines = lines.filter((line)=> line !== max);
    const restSum = restLines.reduce((acc, cur) => acc+cur, 0);

    if(max <= restSum){
      console.log("YES");
    }else{
      console.log("NO");
    }
  }