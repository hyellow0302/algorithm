function solution(v) {
  var answer = [];
  for (let i = 0; i < answer.length; i++) {
    if (v[0][i] == v[1][i]) {
      answer[i] = v[2][i];
    } else if (v[0][i] == v[2][i]) {
      answer[i] = v[1][i];
    } else if (v[1][i] == v[2][i]) {
      answer[i] = v[0][i];
    }
  }
  return answer;
}
