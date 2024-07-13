const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let money = null;
  let result = 0;

  for await (const line of rl) {
    if (!money) money = line;
    else rl.close();
  }

  if (money / 40 > 0) {
    result += parseInt(money / 40);
    money %= 40;
  }
  if (money / 20 > 0) {
    result += parseInt(money / 20);
    money %= 20;
  }
  if (money / 10 > 0) {
    result += parseInt(money / 10);
    money %= 10;
  }
  if (money / 5 > 0) {
    result += parseInt(money / 5);
    money %= 5;
  }
  if (money / 1 > 0) {
    result += money / 1;
  }

  console.log(result);

  process.exit();
})();
