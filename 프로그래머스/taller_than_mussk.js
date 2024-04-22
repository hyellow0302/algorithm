function solution(array, height) {
  let answer = 0;
  for (i of array) i > height ? (answer += 1) : answer;
  return answer;
}
