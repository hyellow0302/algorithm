function solution(s) {
  var answer = true;
  var count = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[0] == ")" || count < 0) {
      answer = false;
      break;
    }
    if (s[i] == "(") ++count;
    else --count;
  }

  if (count != 0) answer = false;

  return answer;
}
