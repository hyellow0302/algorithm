// Run by Node.js
const solution = (n, m, cards) => {
  let result = new Set();
  for (let i = 0; i < cards.length; i++) {
    result.add(cards[i]);
    if (result.size == n) {
      console.log(i + 1);
      break;
    }
    if (i + 1 == m) console.log(-1);
  }
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let M = null;
  let idx = 0;
  let cards = [];

  for await (const line of rl) {
    if (!N) {
      [N, M] = line.split(" ");
    } else {
      idx++;
      cards.push(line);
    }
    if (idx == M) rl.close(); // 이거 안해줘서 오래걸렸다.. 비동기로 작동하기때문에 close문이 언제 닫힐지 명확하게 처리해줘야한다...!!!
  }

  solution(N, M, cards);

  process.exit();
})();
