const securityFilter = (S, E, warningMessage, securityCode) => {
  let result = "";
  let trigger = false;
  while (!trigger) {
    let message = securityCode.split(warningMessage);
    result = "";
    message.map((str) => (result += str));
    if (result == "") {
      console.log("EMPTY");
      trigger = true;
    } else if (result.split(warningMessage).length < 2) {
      trigger = true;
    } else {
      securityCode = result;
    }
  }
  console.log(result);
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let S = null;
  let E = null;
  let warningMessage = "";
  let securityCode = "";

  for await (const line of rl) {
    if (!S) {
      [S, E] = line.split(" ");
    } else if (warningMessage.length == 0) warningMessage = line;
    else securityCode = line;
    if (S && securityCode.length > 0) rl.close();
  }

  securityFilter(S, E, warningMessage, securityCode);

  process.exit();
})();
