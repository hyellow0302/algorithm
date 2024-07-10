const solution = (time, goalX, goalY) => {
  if (
    (time - (Math.abs(goalX) + Math.abs(goalY))) % 2 == 0 &&
    Math.abs(goalX) + Math.abs(goalY) <= time
  )
    return console.log("YES");
  else console.log("NO");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let location = [];

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
