function solution(d, budget) {
  var answer = d.length;

  d.sort((a, b) => a - b);

  while (1) {
    if (d.length == 0) break;
    let order = d.shift();
    budget -= order;
    if (budget <= 0) break;
  }

  {
    budget < 0 ? (answer -= d.length + 1) : (answer -= d.length);
  }

  return answer;
}
