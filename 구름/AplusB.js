// solution 화살표함수를 이용한 A+B
const soltuion = (number) => {
  let numArr = [];
  let result = 0;
  number.split(" ").map((n) => numArr.push(n));

  for (let i of numArr) result += parseInt(i);
  console.log(result);
};

const readline = require("readline");
let data = "";

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    data = line;
    rl.close();
  }

  soltuion(data);

  process.exit();
})();
