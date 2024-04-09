function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] == 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

/* DFS로 푸는 풀이 */
function solution(number) {
  var answer = 0;
  function dfs(idx, count, sum) {
    console.log(idx, count, sum);
    if (idx > number.length) {
      console.log("범위가 넘어갑니다.");
      return;
    }
    if (count === 3) {
      console.log("count가 3이 됐네요 확인해볼까요?");
      if (sum === 0) {
        console.log("합이 0이 맞습니다!");
        answer++;
      }
      return;
    }
    dfs(idx + 1, count + 1, sum + number[idx]);
    dfs(idx + 1, count, sum);
  }
  dfs(0, 0, 0);
  return answer;
}
