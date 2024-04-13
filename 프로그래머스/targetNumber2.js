function solution(numbers, target) {
  let answer = 0;
  let result = 0;

  const dfs = (idx, sum) => {
    if (idx == numbers.length && sum == target) answer++;
    if (idx < 0 || idx >= numbers.length) return;

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, result);

  return answer;
}
