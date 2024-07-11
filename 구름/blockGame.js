const solution = (n, moving, score) => {
  let location = [0, 0];
  let nowScore = [1];
  let route = ["00"];
  let result = 0;

  for (let i = 0; i < n; i++) {
    let move = moving[i];
    // console.log("시작 ",move, route, nowScore)

    if (move == "R") {
      location[0] += 1;
    }
    if (move == "L") {
      location[0] -= 1;
    }
    if (move == "U") {
      location[1] += 1;
    }
    if (move == "D") {
      location[1] -= 1;
    }

    if (route.includes(location.join(""))) {
      let idx = route.indexOf(location.join(""));
      let target = route.length - idx;
      // console.log("이미 블록이 있는 곳:", route.includes(location.join('')), idx, route, nowScore)
      for (let k = 0; k < target; k++) {
        route.pop();
        nowScore.pop();
      }
      // console.log("블록 제거 후 다시 쌓기:", idx, route, nowScore)
    }
    nowScore.push(parseInt(score[i]));
    route.push(location.join(""));
    // console.log("현재 블록 상황:", route, nowScore)
  }
  for (let j of nowScore) result += parseInt(j);
  console.log(result);
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null; // 블록을 올려놓은 횟수
  let moving = []; // 블록이 움직이는 방향
  let score = []; // 블록마다의 점수

  for await (const line of rl) {
    if (!N) {
      N = line;
    } else if (moving.length == 0) {
      moving = line.split("");
    } else if (score.length == 0) {
      score = line.split(" ");
    } else rl.close();
  }

  solution(N, moving, score);

  process.exit();
})();
