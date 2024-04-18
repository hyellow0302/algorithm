function solution(queue1, queue2) {
  var answer = -1;
  let count = 0;
  let goal = 0;
  let maxMove = queue1.length + queue2.length;
  let queue1Sum = 0;
  let queue2Sum = 0;
  let queue1_start_idx = 0;
  let queue2_start_idx = 0;

  for (let number of queue1) queue1Sum += number;
  for (let number of queue2) queue2Sum += number;
  goal = (queue1Sum + queue2Sum) / 2;

  if ((queue1Sum + queue2Sum) % 2 || (queue1.length + queue2.length) % 2)
    return -1;

  while (count < maxMove + 5) {
    if (queue1Sum == goal) return count++;
    if (queue1Sum > goal) {
      queue1Sum -= queue1[queue1_start_idx];
      queue2.push(queue1[queue1_start_idx]);
      queue1_start_idx++;
    } else {
      queue1Sum += queue2[queue2_start_idx];
      queue1.push(queue2[queue2_start_idx]);
      queue2_start_idx++;
    }
    count++;
  }

  return answer;
}
