function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((number, idx) => {
    if (signs[idx]) answer += number;
    else answer -= number;
  });

  return answer;
}
