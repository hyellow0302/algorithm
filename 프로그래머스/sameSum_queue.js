// 작동하나, 시간초과
function solution(queue1, queue2) {
  var answer = 0;
  let goal = 0;
  let queue1Sum = 0;
  let queue2Sum = 0;
  let sortqueue = JSON.parse(JSON.stringify(queue1.concat(queue2)));

  queue1.forEach((number, idx) => (goal += number + queue2[idx]));
  sortqueue.sort((a, b) => b - a);

  if (sortqueue[0] > Math.round(goal / 2)) return -1;

  while (queue1Sum != goal / 2) {
    queue1Sum = 0;
    queue2Sum = 0;

    queue1.forEach((number) => (queue1Sum += number));
    queue2.forEach((number) => (queue2Sum += number));

    if (queue1Sum > goal / 2) {
      let n = queue1.shift();
      queue2.push(n);
      answer++;
    } else if (queue2Sum > goal / 2) {
      let n = queue2.shift();
      queue1.push(n);
      answer++;
    }
  }

  return answer;
}
