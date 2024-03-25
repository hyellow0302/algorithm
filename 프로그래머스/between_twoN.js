function solution(a, b) {
  var answer = 0;

  if (a > b) {
    answer = a;
    a = b;
    b = answer;
    answer = 0;
  }

  for (let i = a; i <= b; i++) answer += i;

  return answer;
}
