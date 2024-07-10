// 간단하니까 함수 없이 그냥 풀기
const readline = require("readline");
let data = 0;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    line.split(" ").map((number) => (data += parseInt(number)));
    rl.close();
  }

  console.log(data);

  process.exit();
})();
