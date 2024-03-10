function solution(s) {
  var answer = true;
  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "P" || s[i] == "p") cntP++;
    else if (s[i] == "Y" || s[i] == "y") cntY++;
  }

  if (cntP != cntY) answer = false;

  return answer;
}
