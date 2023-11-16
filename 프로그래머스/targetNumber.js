/* DFS 알고리즘 */

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function algorithmDFS(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    algorithmDFS(count + 1, sum + numbers[count]);
    algorithmDFS(count + 1, sum - numbers[count]);
  }

  algorithmDFS(0, 0);

  return answer;
}
