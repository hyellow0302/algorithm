function solution(a, b, n) {
  var answer = 0;
  let rest = 0;

  const changeCoke = (restBottle, number) => {
    while (number >= a) {
      restBottle += number % a;
      number = parseInt(number / a) * b;
      answer += number;
    }
    rest = restBottle;
    n = number;
    if (rest > 0) changeCoke(0, parseInt(rest + n));
  };

  changeCoke(0, n);

  return answer;
}
