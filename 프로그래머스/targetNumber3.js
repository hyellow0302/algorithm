function solution(numbers, target) {
  var answer = 0;
  let stack = [];
  let record = new Array(numbers.length).fill(false);
  let sum = 0;

  const dfs = (stack, idx, visited) => {
    for (let i = 0; i < 2; i++) {
      let visit = JSON.parse(JSON.stringify(visited));
      let node = stack.pop();

      visit[idx] = node;

      // 마지막 4번째 수에 도달했을 때 다음 또 dfs로 빠지지 않게끔
      if (idx == numbers.length - 1) {
        let sum = 0;
        visit.forEach((number) => (sum += number));
        if (sum == target) {
          answer++;
        }
        continue;
      }

      stack.push(numbers[idx + 1], numbers[idx + 1] * -1);
      dfs(stack, idx + 1, visit);
    }
  };

  dfs([numbers[0], numbers[0] * -1], 0, record);

  return answer;
}
