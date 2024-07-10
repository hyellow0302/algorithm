// Run by Node.js
const solution = (time, goalX, goalY) => {
  trigger = false;
  let [startX, startY] = [0, 0];
  DFS(0, startX, startY, goalX, goalY, time);
  if (trigger == true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

const DFS = (depth, startX, startY, goalX, goalY, time) => {
  // console.log(depth, startX, startY, goalX, goalY, time)
  if (trigger || depth > time) return;
  if (depth == time) {
    if (startX == goalX && startY == goalY) {
      return (trigger = true);
    }
  }

  DFS(depth + 1, startX + 1, startY, goalX, goalY, time);
  DFS(depth + 1, startX - 1, startY, goalX, goalY, time);
  DFS(depth + 1, startX, startY + 1, goalX, goalY, time);
  DFS(depth + 1, startX, startY - 1, goalX, goalY, time);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let location = [];
let trigger = false;

rl.on("line", function (line) {
  if (!T) {
    T = line;
  } else {
    location.push(line.split(" "));
  }
  if (location.length == T) rl.close();
}).on("close", function () {
  for (let [goalX, goalY, time] of location) {
    solution(time, goalX, goalY);
  }
  process.exit();
});
