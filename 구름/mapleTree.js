const solution = (size, state) => {
  let days = -1;
  let finishTuple = new Set();

  while (finishTuple.size != size) {
    let treeList = JSON.parse(JSON.stringify(state));
    days++;
    if (finishTuple.size == size) break;
    for (let i = 0; i < treeList.length; i++) {
      let finish = 0;
      for (let j = 0; j < treeList.length; j++) {
        let tree = parseInt(treeList[i][j]);
        let full = 0;
        if (tree > 0) {
          if (i - 1 >= 0 && treeList[i - 1][j] == 0) full++;
          if (i + 1 < size && treeList[i + 1][j] == 0) full++;
          if (j - 1 >= 0 && treeList[i][j - 1] == 0) full++;
          if (j + 1 < size && treeList[i][j + 1] == 0) full++;
          tree - full < 0 ? (state[i][j] = 0) : (state[i][j] = tree - full);
        }
        if (tree == 0) finish++;
        if (finish == size) {
          finishTuple.add(i);
          break;
        }
      }
    }
  }
  console.log(days);
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let size = null;
  let state = [];

  for await (const line of rl) {
    if (!size) size = line;
    else if (state.length < size) state.push(line.split(" "));
    else rl.close();
  }
  solution(size, state);

  process.exit();
})();
