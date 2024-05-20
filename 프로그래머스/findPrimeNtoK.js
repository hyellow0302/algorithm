function solution(n, k) {
  var answer = 0;

  const isPrime = (n) => {
    if (n == 1 || n == "") return false;
    if (n == 2) return true;
    let result = true;
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
      if (n % i == 0) {
        result = false;
        break;
      }
    }
    return result;
  };

  let changeNumber = n.toString(k);

  let primeArr = changeNumber.split(0);

  primeArr.forEach((number) => {
    if (isPrime(number)) answer++;
  });

  return answer;
}
