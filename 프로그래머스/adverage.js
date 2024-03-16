function solution(arr) {
  var answer = 0;

  arr.forEach((number) => (answer += number));

  return answer / arr.length;
}
