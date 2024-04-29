function solution(operations) {
  let queue = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] == "I") {
      queue.push(operations[i].split("I ")[1]);
      queue.sort((a, b) => a - b);
      continue;
    }

    if (operations.length == 0) continue;

    if (operations[i].split("D ")[1] < 0) queue.shift();
    else queue.pop();
  }

  if (queue.length === 0) return [0, 0];
  else return [parseInt(queue[queue.length - 1]), parseInt(queue[0])];
}
