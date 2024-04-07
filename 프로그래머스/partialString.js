function solution(t, p) {
  var answer = 0;
  let len = p.length;

  for (let i = 0; i <= t.length - len; i++) {
    let str = t.slice(i, i + len);
    if (parseInt(str) <= parseInt(p)) answer++;
  }

  return answer;
}
