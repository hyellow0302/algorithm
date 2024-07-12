let R = null;
let C = null;
let route = [];
let trigger = false;
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const solution = () => {
  let queue = [];
  let visit = Array.from(Array(R), () => Array(C).fill(0));

  // 구름이 위치, 불 위치 queue에 넣기
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (route[i][j] == "@") {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length != 0) {
    let [nowR, nowC] = queue.shift();

    for (let moving of directions) {
      let nextR = nowR + moving[0];
      let nextC = nowC + moving[1];

      if (nextR >= 0 && nextR < R && nextC >= 0 && nextC < C) {
        if (route[nextR][nextC] == ".") {
          visit[nextR][nextC] = visit[nowR][nowC] + 1;
          route[nextR][nextC] = visit[nextR][nextC];
          queue.push([nextR, nextC]);
        }
        if (route[nextR][nextC] == "&") {
          trigger = true;
          queue = [];
          console.log(visit[nowR][nowC]);
          break;
        }
      }
    }
  }
  if (!trigger) console.log(-1);
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    if (!R) {
      [R, C] = line.split(" ");
      R = parseInt(R);
      C = parseInt(C);
    } else if (route.length < R) {
      route.push(line.split(""));
    } else rl.close();
  }

  solution();

  process.exit();
})();
