function solution(n, m) {
  var answer = [];
  let min,
    max = 0;
  let divisorArr = [];
  let divisor = 0;
  let multiple = 0;
  let idx = 1;

  if (n > m) {
    min = m;
    max = n;
  } else {
    min = n;
    max = m;
  }

  for (let i = 1; i <= min; i++) {
    if (min % i == 0) divisorArr.push(i);
  }

  for (let j = 0; j < divisorArr.length; j++) {
    if (max % divisorArr[j] == 0 && divisor < divisorArr[j])
      divisor = divisorArr[j];
  }
  console.log(divisor);

  while (multiple == 0) {
    let n = min * idx;
    console.log(n, idx);
    if (n >= max && n % max == 0) multiple = n;
    console.log("multiple = ", multiple);
    idx++;
  }

  answer.push(divisor, multiple);
  return answer;
}
