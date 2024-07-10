// Run by Node.js
const solution = (height, listM) => {
  let system = new Set();

  for (let i = 0; i < listM.length; i++) {
    let [startHome, endHome] = listM[i];
    for (let j = startHome - 1; j < endHome; j++) {
      height[j] += 1;
      system.add(j);
    }
    if ((i + 1) % 3 == 0) {
      for (let k of system) height[k] -= 1;
      system = new Set();
    }
  }
  console.log(height.join(" "));
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let M = null;
  let height = [];
  let listM = [];

  for await (const line of rl) {
    if (!N) [N, M] = line.split(" ");
    else if (height.length == 0)
      line.split(" ").map((h) => height.push(parseInt(h)));
    else listM.push(line.split(" "));

    if (listM.length == M) rl.close();
  }

  solution(height, listM);

  process.exit();
})();
