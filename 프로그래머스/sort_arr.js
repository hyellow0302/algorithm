function solution(n) {
  var answer = 0;
  var arr = n.toString().split("");
  arr.sort((a, b) => b - a);
  answer = arr.join("");
  return parseInt(answer);
}
